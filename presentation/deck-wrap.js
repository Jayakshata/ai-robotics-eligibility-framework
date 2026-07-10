'use strict';
/* Wraps the Artifact-style deck (no <!doctype>/<head>/<body>, because the
   Artifact platform supplies them) into a standalone document at
   docs/coe-deck/index.html for GitHub Pages to serve.

   UNLISTED, NOT PRIVATE. The repo is public, so this file is world-readable
   either way. <meta name="robots"> is the only lever that works: a project
   page at jayakshata.github.io/<repo>/ cannot serve an effective robots.txt,
   because crawlers read it only from the domain root (jayakshata.github.io),
   which this repo does not own. The deck is also deliberately NOT linked from
   the framework site's navigation.

   Run:  node presentation/deck-wrap.js   */
const fs = require('fs');
const path = require('path');

const ROOT = '/home/dee/Desktop/AI criterion';
const SRC = path.join(ROOT, 'presentation/bgr-neo-coe-deck.html');
const OUTDIR = path.join(ROOT, 'docs/coe-deck');
const OUT = path.join(OUTDIR, 'index.html');

let content = fs.readFileSync(SRC, 'utf8');

// Hoist <title> out of the body fragment into a real <head>.
const m = content.match(/<title>([\s\S]*?)<\/title>\s*/i);
if (!m) throw new Error('deck is missing a <title>');
const title = m[1].trim();
content = content.replace(m[0], '');

if (/<!doctype|<html|<head[\s>]|<body/i.test(content)) {
  throw new Error('deck already contains document scaffolding — refusing to double-wrap');
}

const doc =
  '<!doctype html>\n<html lang="en">\n<head>\n' +
  '<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  '<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">\n' +
  '<meta name="googlebot" content="noindex, nofollow">\n' +
  '<meta name="description" content="Internal proposal — BGR Neo Centre of Excellence for AI in Robotics.">\n' +
  '<meta name="color-scheme" content="light dark">\n' +
  `<title>${title}</title>\n` +
  '</head>\n<body>\n' + content.trim() + '\n</body>\n</html>\n';

fs.mkdirSync(OUTDIR, { recursive: true });
fs.writeFileSync(OUT, doc);
console.log('WROTE docs/coe-deck/index.html', (doc.length / 1024).toFixed(1) + 'KB');
console.log('title:', title);
console.log('robots: noindex,nofollow (unlisted — repo is still public)');
