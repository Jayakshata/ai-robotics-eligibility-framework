#!/usr/bin/env node
/**
 * Annexure builder — markdown -> document model (JSON) -> print-ready HTML.
 *
 * The JSON model is the single parse. The HTML here feeds Chrome headless for the
 * PDF; build-docx.py reads the same JSON for the Word version, so the two
 * deliverables cannot drift apart.
 *
 * Inline parsing is a paired-toggle character scanner, NOT a regex. See the
 * renderer lesson in site/src/build-site.js: lazy emphasis regexes silently
 * corrupt bold/italic runs. Do not regress this.
 */
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, '..', 'annexure-syllabus-and-lab.md');
const OUT_JSON = path.join(__dirname, 'annexure.json');
const OUT_HTML = path.join(__dirname, 'annexure-print.html');

const warnings = [];

/* ---------------------------------------------------------------- inline --- */

function inlineRuns(s, where) {
  const runs = [];
  let b = false, i = false, c = false, buf = '';
  const push = () => { if (buf) { runs.push({ s: buf, b, i, c }); buf = ''; } };
  let k = 0;
  while (k < s.length) {
    const ch = s[k];
    if (ch === '\\' && k + 1 < s.length) { buf += s[k + 1]; k += 2; continue; }
    if (ch === '`') { push(); c = !c; k++; continue; }
    if (!c && ch === '*') {
      if (s[k + 1] === '*') { push(); b = !b; k += 2; continue; }
      push(); i = !i; k++; continue;
    }
    buf += ch; k++;
  }
  push();
  if (b || i || c) warnings.push(`unbalanced emphasis in ${where}: ${s.slice(0, 70)}`);
  return runs;
}

/* ---------------------------------------------------------------- blocks --- */

function splitRow(line) {
  let t = line.trim();
  if (t.startsWith('|')) t = t.slice(1);
  if (t.endsWith('|')) t = t.slice(0, -1);
  const cells = [];
  let buf = '';
  for (let k = 0; k < t.length; k++) {
    if (t[k] === '\\' && t[k + 1] === '|') { buf += '|'; k++; continue; }
    if (t[k] === '|') { cells.push(buf.trim()); buf = ''; continue; }
    buf += t[k];
  }
  cells.push(buf.trim());
  return cells;
}

const isDelim = (l) => /^\s*\|?[\s:|-]+\|[\s:|-]*$/.test(l) && l.includes('-');

function alignOf(cell) {
  const t = cell.trim();
  const l = t.startsWith(':'), r = t.endsWith(':');
  if (l && r) return 'center';
  if (r) return 'right';
  return 'left';
}

function parse(md) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const blocks = [];
  let k = 0;

  while (k < lines.length) {
    const line = lines[k];

    if (!line.trim()) { k++; continue; }

    // horizontal rule
    if (/^\s*(---+|\*\*\*+|___+)\s*$/.test(line)) { blocks.push({ type: 'hr' }); k++; continue; }

    // heading
    const h = line.match(/^(#{1,6})\s+(.*)$/);
    if (h) {
      blocks.push({ type: 'h' + h[1].length, runs: inlineRuns(h[2].trim(), 'heading') });
      k++; continue;
    }

    // table
    if (line.trim().startsWith('|') && k + 1 < lines.length && isDelim(lines[k + 1])) {
      const header = splitRow(lines[k]);
      const align = splitRow(lines[k + 1]).map(alignOf);
      k += 2;
      const rows = [];
      while (k < lines.length && lines[k].trim().startsWith('|')) {
        const r = splitRow(lines[k]);
        if (r.length !== header.length) {
          warnings.push(`table column mismatch (${r.length} vs ${header.length}): ${lines[k].slice(0, 70)}`);
        }
        while (r.length < header.length) r.push('');
        rows.push(r.slice(0, header.length).map((c) => inlineRuns(c, 'table cell')));
        k++;
      }
      blocks.push({
        type: 'table',
        align,
        header: header.map((c) => inlineRuns(c, 'table header')),
        rows,
      });
      continue;
    }

    // blockquote
    if (/^\s*>/.test(line)) {
      const buf = [];
      while (k < lines.length && /^\s*>/.test(lines[k])) {
        buf.push(lines[k].replace(/^\s*>\s?/, ''));
        k++;
      }
      blocks.push({ type: 'quote', lines: buf.filter((x) => x.trim()).map((x) => inlineRuns(x, 'quote')) });
      continue;
    }

    // unordered list
    if (/^\s*[-*+]\s+/.test(line)) {
      const items = [];
      while (k < lines.length && /^\s*[-*+]\s+/.test(lines[k])) {
        items.push(inlineRuns(lines[k].replace(/^\s*[-*+]\s+/, ''), 'list item'));
        k++;
      }
      blocks.push({ type: 'ul', items });
      continue;
    }

    // ordered list
    if (/^\s*\d+\.\s+/.test(line)) {
      const items = [];
      while (k < lines.length && /^\s*\d+\.\s+/.test(lines[k])) {
        items.push(inlineRuns(lines[k].replace(/^\s*\d+\.\s+/, ''), 'list item'));
        k++;
      }
      blocks.push({ type: 'ol', items });
      continue;
    }

    // paragraph — consecutive non-blank lines become soft-broken lines
    const para = [];
    while (
      k < lines.length && lines[k].trim() &&
      !/^\s*(#{1,6})\s/.test(lines[k]) &&
      !/^\s*(---+|\*\*\*+|___+)\s*$/.test(lines[k]) &&
      !lines[k].trim().startsWith('|') &&
      !/^\s*>/.test(lines[k]) &&
      !/^\s*[-*+]\s+/.test(lines[k]) &&
      !/^\s*\d+\.\s+/.test(lines[k])
    ) {
      para.push(inlineRuns(lines[k].trim(), 'paragraph'));
      k++;
    }
    if (para.length) blocks.push({ type: 'p', lines: para });
  }

  return blocks;
}

/* ------------------------------------------------------------------ html --- */

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function runsHtml(runs) {
  return runs.map((r) => {
    let t = esc(r.s);
    if (r.c) return '<code>' + t + '</code>';
    if (r.b) t = '<strong>' + t + '</strong>';
    if (r.i) t = '<em>' + t + '</em>';
    return t;
  }).join('');
}

const plain = (runs) => runs.map((r) => r.s).join('');

function tableHtml(b) {
  const cls = ['tbl'];
  if (b.header.length >= 5) cls.push('tbl-wide');
  let h = '<table class="' + cls.join(' ') + '"><thead><tr>';
  b.header.forEach((c, i) => {
    h += '<th class="a-' + (b.align[i] || 'left') + '">' + runsHtml(c) + '</th>';
  });
  h += '</tr></thead><tbody>';
  b.rows.forEach((row) => {
    h += '<tr>';
    row.forEach((c, i) => {
      h += '<td class="a-' + (b.align[i] || 'left') + '">' + runsHtml(c) + '</td>';
    });
    h += '</tr>';
  });
  return h + '</tbody></table>';
}

function docHtml(blocks) {
  let out = '';
  let h1seen = 0;
  blocks.forEach((b) => {
    switch (b.type) {
      case 'h1': {
        h1seen++;
        out += '<h1' + (h1seen > 1 ? ' class="pb"' : '') + '>' + runsHtml(b.runs) + '</h1>';
        break;
      }
      case 'h2': out += '<h2>' + runsHtml(b.runs) + '</h2>'; break;
      case 'h3': out += '<h3>' + runsHtml(b.runs) + '</h3>'; break;
      case 'h4': case 'h5': case 'h6': out += '<h4>' + runsHtml(b.runs) + '</h4>'; break;
      case 'hr': out += '<hr>'; break;
      case 'p': out += '<p>' + b.lines.map(runsHtml).join('<br>') + '</p>'; break;
      case 'quote': out += '<blockquote>' + b.lines.map((l) => '<p>' + runsHtml(l) + '</p>').join('') + '</blockquote>'; break;
      case 'ul': out += '<ul>' + b.items.map((i) => '<li>' + runsHtml(i) + '</li>').join('') + '</ul>'; break;
      case 'ol': out += '<ol>' + b.items.map((i) => '<li>' + runsHtml(i) + '</li>').join('') + '</ol>'; break;
      case 'table': out += tableHtml(b); break;
    }
  });
  return out;
}

const CSS = `
:root{
  --ink:#151B26; --muted:#576274; --faint:#8791A3;
  --border:#D9DFEA; --border-strong:#C4CDDB;
  --acc:#0E7490; --acc-ink:#0A5567; --acc-soft:#E2F1F4;
  --gov:#3D5A80; --flag:#B4530B;
  --surface:#FFFFFF; --surface-2:#F4F7FB; --surface-3:#EDF1F7;
  --sans:"Segoe UI",system-ui,-apple-system,Roboto,Helvetica,Arial,sans-serif;
  --mono:"DejaVu Sans Mono",ui-monospace,Consolas,monospace;
}
@page{ size:A4; margin:15mm 13mm 20mm; }
*{box-sizing:border-box}
html{margin:0;padding:0}
body{
  margin:0; padding:0;
  font-family:var(--sans); color:var(--ink); background:#fff;
  font-size:9.3pt; line-height:1.5; -webkit-print-color-adjust:exact; print-color-adjust:exact;
}

/* The running footer with page numbers is supplied by Chrome's own footerTemplate
   (see html-to-pdf.js), not by CSS — Chrome mispositions fixed elements in paged
   media, dropping them at the top of each page instead of into the bottom margin. */

/* ---- masthead ---- */
.mast{
  border-top:2.6pt solid var(--acc); padding-top:5mm; margin-bottom:6mm;
  display:flex; justify-content:space-between; align-items:flex-start; gap:14px;
}
.mast .m-l .m-k{
  font-family:var(--mono); font-size:7pt; letter-spacing:.17em; text-transform:uppercase;
  color:var(--acc-ink); font-weight:700; margin-bottom:1.6mm;
}
.mast .m-l .m-t{font-size:16pt; font-weight:680; letter-spacing:-.02em; line-height:1.15}
.mast .m-r{text-align:right; font-family:var(--mono); font-size:7pt; letter-spacing:.1em;
  text-transform:uppercase; color:var(--muted); line-height:1.85; white-space:nowrap}

/* ---- headings ---- */
h1{
  font-size:12.6pt; font-weight:700; letter-spacing:.02em; text-transform:uppercase;
  color:var(--acc-ink); margin:0 0 3.4mm; padding:0 0 2.2mm;
  border-bottom:1.6pt solid var(--acc); break-after:avoid;
}
h1.pb{break-before:page; margin-top:0}
h2{
  font-size:10.6pt; font-weight:670; letter-spacing:-.012em; color:var(--ink);
  margin:6.5mm 0 2.6mm; padding-left:2.6mm; border-left:2.4pt solid var(--acc);
  break-after:avoid;
}
h3{
  font-size:9.6pt; font-weight:660; color:var(--gov);
  margin:5mm 0 2mm; break-after:avoid;
}
h4{font-size:9pt; font-weight:660; color:var(--muted); margin:4mm 0 1.6mm; break-after:avoid}

p{margin:0 0 2.4mm; max-width:none}
strong{font-weight:670; color:var(--ink)}
em{color:var(--muted); font-style:italic}
code{font-family:var(--mono); font-size:8.1pt; background:var(--surface-2);
  border:.5pt solid var(--border); border-radius:2px; padding:0 .9mm; color:var(--acc-ink)}
hr{border:0; border-top:.5pt solid var(--border); margin:5mm 0}

ul,ol{margin:0 0 2.8mm; padding-left:5.4mm}
li{margin:0 0 1.1mm}
li::marker{color:var(--acc)}

blockquote{
  margin:3mm 0 3.4mm; padding:2.6mm 3.4mm; background:var(--acc-soft);
  border-left:2.4pt solid var(--acc); border-radius:0 3px 3px 0; break-inside:avoid;
}
blockquote p{margin:0 0 1.4mm}
blockquote p:last-child{margin:0}

/* ---- tables ---- */
table.tbl{
  width:100%; border-collapse:collapse; margin:0 0 4mm;
  font-size:8.3pt; line-height:1.38;
}
table.tbl-wide{font-size:7.7pt; line-height:1.34}
table.tbl thead{display:table-header-group}
table.tbl th{
  background:var(--surface-3); color:var(--ink); font-weight:680;
  text-align:left; padding:1.7mm 2mm; border-bottom:1.2pt solid var(--acc);
  border-top:.5pt solid var(--border-strong);
  font-size:7.6pt; letter-spacing:.02em;
}
table.tbl-wide th{font-size:7.2pt}
table.tbl td{
  padding:1.6mm 2mm; border-bottom:.5pt solid var(--border); vertical-align:top;
}
table.tbl tbody tr:nth-child(even) td{background:var(--surface-2)}
table.tbl tr{break-inside:avoid}
.a-right{text-align:right}
.a-center{text-align:center}
th.a-right,td.a-right{white-space:nowrap; font-variant-numeric:tabular-nums}

/* keep a heading with the table that follows it */
h2 + table.tbl, h3 + table.tbl, h2 + p + table.tbl{break-before:avoid}
`;

/* ------------------------------------------------------------------ main --- */

const md = fs.readFileSync(SRC, 'utf8');
const blocks = parse(md);

// The masthead replaces the markdown title block (first h1 + the two meta lines).
let body = blocks.slice();
const titleRuns = body[0] && body[0].type === 'h1' ? body.shift().runs : [{ s: 'Annexure', b: false, i: false, c: false }];
let metaLines = [];
if (body[0] && body[0].type === 'p') metaLines = body.shift().lines.map(plain);

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<title>${esc(plain(titleRuns))}</title>
<style>${CSS}</style>
</head><body>
<div class="mast">
  <div class="m-l">
    <div class="m-k">Annexure A</div>
    <div class="m-t">Syllabus, Timeline &amp; Lab Requirement</div>
  </div>
  <div class="m-r">${metaLines.map(esc).join('<br>')}</div>
</div>
${docHtml(body)}
</body></html>`;

fs.writeFileSync(OUT_HTML, html);
fs.writeFileSync(OUT_JSON, JSON.stringify({
  title: plain(titleRuns),
  meta: metaLines,
  blocks: body,
}, null, 1));

const tables = blocks.filter((b) => b.type === 'table');
console.log(`parsed: ${blocks.length} blocks · ${tables.length} tables · ${tables.reduce((a, t) => a + t.rows.length, 0)} table rows`);
if (warnings.length) {
  console.log('WARNINGS:');
  warnings.forEach((w) => console.log('  ! ' + w));
} else {
  console.log('no parse warnings');
}
console.log(`wrote ${path.relative(process.cwd(), OUT_HTML)}`);
console.log(`wrote ${path.relative(process.cwd(), OUT_JSON)}`);
