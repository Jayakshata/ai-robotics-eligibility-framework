#!/usr/bin/env node
/**
 * html-to-pdf — render a local HTML file to PDF via Chrome DevTools Protocol.
 *
 * Chrome's `--print-to-pdf` CLI flag cannot set header/footer templates, and a
 * CSS `position:fixed` footer is mispositioned by Chrome's paged-media layout
 * (it lands at the top of each page). Driving Page.printToPDF over CDP gives a
 * proper running footer with real page numbers in the page margin.
 *
 * Uses Node's built-in WebSocket + fetch — no external dependencies.
 *
 *   node html-to-pdf.js <input.html> <output.pdf>
 */
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const IN = path.resolve(process.argv[2]);
const OUT = path.resolve(process.argv[3]);
const PORT = 9333;
const CHROME = '/usr/bin/google-chrome';

const FOOT = `
<style>
  #f{ width:100%; font-family:"DejaVu Sans Mono",Consolas,monospace; font-size:6.2pt;
      letter-spacing:.09em; text-transform:uppercase; color:#8791A3;
      padding:0 13mm; margin-top:1mm; }
  #f table{ width:100%; border-collapse:collapse; border-top:.5pt solid #D9DFEA; }
  #f td{ padding-top:1.8mm; vertical-align:top; }
  .l{ text-align:left; color:#0A5567; font-weight:700; }
  .c{ text-align:center; }
  .r{ text-align:right; }
</style>
<div id="f"><table><tr>
  <td class="l">BGR Neo &middot; Centre of Excellence</td>
  <td class="c">Annexure A &mdash; Syllabus, Timeline &amp; Lab Requirement</td>
  <td class="r">Rev 2 &middot; Page <span class="pageNumber"></span> of <span class="totalPages"></span></td>
</tr></table></div>`;

const HEAD = '<span></span>'; // empty header, but keeps the footer template active

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function main() {
  const chrome = spawn(CHROME, [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    '--disable-extensions',
    `--remote-debugging-port=${PORT}`,
    '--user-data-dir=' + fs.mkdtempSync('/tmp/chrome-pdf-'),
    'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  let ws;
  try {
    // wait for the debugging endpoint
    let version = null;
    for (let i = 0; i < 60; i++) {
      try {
        const r = await fetch(`http://127.0.0.1:${PORT}/json/version`);
        if (r.ok) { version = await r.json(); break; }
      } catch (_) { /* not up yet */ }
      await sleep(250);
    }
    if (!version) throw new Error('Chrome debugging endpoint never came up');

    ws = new WebSocket(version.webSocketDebuggerUrl);
    await new Promise((res, rej) => {
      ws.onopen = res;
      ws.onerror = () => rej(new Error('websocket failed to open'));
    });

    let id = 0;
    const pending = new Map();
    const events = [];
    const waiters = [];

    ws.onmessage = (ev) => {
      const m = JSON.parse(ev.data);
      if (m.id !== undefined && pending.has(m.id)) {
        const { res, rej } = pending.get(m.id);
        pending.delete(m.id);
        m.error ? rej(new Error(m.error.message)) : res(m.result);
        return;
      }
      if (m.method) {
        events.push(m);
        waiters.slice().forEach((w) => {
          if (m.method === w.method && (!w.sessionId || m.sessionId === w.sessionId)) {
            waiters.splice(waiters.indexOf(w), 1);
            w.res(m);
          }
        });
      }
    };

    const send = (method, params = {}, sessionId) => new Promise((res, rej) => {
      const msg = { id: ++id, method, params };
      if (sessionId) msg.sessionId = sessionId;
      pending.set(msg.id, { res, rej });
      ws.send(JSON.stringify(msg));
    });

    const waitFor = (method, sessionId, timeout = 60000) => new Promise((res, rej) => {
      const hit = events.find((e) => e.method === method && (!sessionId || e.sessionId === sessionId));
      if (hit) return res(hit);
      const w = { method, sessionId, res };
      waiters.push(w);
      setTimeout(() => {
        const k = waiters.indexOf(w);
        if (k >= 0) { waiters.splice(k, 1); rej(new Error(`timed out waiting for ${method}`)); }
      }, timeout);
    });

    const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
    const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });

    await send('Page.enable', {}, sessionId);
    await send('Page.navigate', { url: 'file://' + IN }, sessionId);
    await waitFor('Page.loadEventFired', sessionId);
    await sleep(700); // let fonts and layout settle

    const { data } = await send('Page.printToPDF', {
      printBackground: true,
      paperWidth: 8.27,          // A4
      paperHeight: 11.69,
      marginTop: 0.59,           // 15mm
      marginBottom: 0.79,        // 20mm
      marginLeft: 0.51,          // 13mm
      marginRight: 0.51,
      displayHeaderFooter: true,
      headerTemplate: HEAD,
      footerTemplate: FOOT,
      preferCSSPageSize: false,
      generateTaggedPDF: true,
    }, sessionId);

    fs.writeFileSync(OUT, Buffer.from(data, 'base64'));
    console.log(`wrote ${path.relative(process.cwd(), OUT)} (${(fs.statSync(OUT).size / 1024).toFixed(0)} KB)`);

    await send('Target.closeTarget', { targetId });
  } finally {
    if (ws) try { ws.close(); } catch (_) {}
    chrome.kill('SIGTERM');
    await sleep(300);
    try { chrome.kill('SIGKILL'); } catch (_) {}
  }
}

main().catch((e) => { console.error('FAILED:', e.message); process.exit(1); });
