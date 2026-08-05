'use strict';
/* Generic wrapper: turns an Artifact-style content file (no <!doctype>/<head>/
   <body>, because the Artifact platform supplies them) into a standalone
   document at docs/<slug>/index.html for GitHub Pages to serve.

   Generalises the one-off logic in presentation/deck-wrap.js. Add a page by
   appending to PAGES below and re-running.

   UNLISTED, NOT PRIVATE. The repo is public, so these files are world-readable
   whether or not they are wrapped. <meta name="robots"> is the only lever that
   works here: a project page at jayakshata.github.io/<repo>/ cannot serve an
   effective robots.txt, because crawlers read robots.txt only from the domain
   root (jayakshata.github.io), which this repo does not own. Unlisted pages are
   also deliberately NOT linked from docs/index.html.

   Does NOT own docs/index.html (see pages-wrap.js), docs/coe-deck/ (see
   presentation/deck-wrap.js), or the hand-built docs/programme/ and
   docs/lab-setup/.

   Run:  node site/src/page-wrap.js   */

const fs = require('fs');
const path = require('path');

// Repo root derived from this file's location (site/src/) — clone-portable.
const ROOT = path.resolve(__dirname, '..', '..');

const PAGES = [
  {
    src: 'curriculum/pages/iti-lesson-plan.html',
    slug: 'iti-lesson-plan',
    description: 'Automation Uptime Technician — the full post-ITI trade syllabus.',
    unlisted: true,
  },
  {
    src: 'curriculum/pages/coe-build-plan.html',
    slug: 'coe-build-plan',
    description: 'Centre of Excellence build plan — duration, equipment, space, cost and placement.',
    unlisted: true,
  },
  {
    src: 'curriculum/pages/where-we-stand.html',
    slug: 'where-we-stand',
    description: 'Competitive position against comparable centres in India and abroad.',
    unlisted: true,
  },
];

function wrap(page) {
  const srcPath = path.join(ROOT, page.src);
  let content = fs.readFileSync(srcPath, 'utf8');

  // Hoist <title> out of the body fragment into a real <head>.
  const m = content.match(/<title>([\s\S]*?)<\/title>\s*/i);
  if (!m) throw new Error(`${page.src} is missing a <title>`);
  const title = m[1].trim();
  content = content.replace(m[0], '');

  if (/<!doctype|<html|<head[\s>]|<body/i.test(content)) {
    throw new Error(`${page.src} already contains document scaffolding — refusing to double-wrap`);
  }

  const robots = page.unlisted
    ? '<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">\n' +
      '<meta name="googlebot" content="noindex, nofollow">\n'
    : '';

  const doc =
    '<!doctype html>\n<html lang="en">\n<head>\n' +
    '<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    robots +
    `<meta name="description" content="${page.description}">\n` +
    '<meta name="color-scheme" content="light dark">\n' +
    `<title>${title}</title>\n` +
    '</head>\n<body>\n' + content.trim() + '\n</body>\n</html>\n';

  const outDir = path.join(ROOT, 'docs', page.slug);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), doc);

  return { title, kb: (doc.length / 1024).toFixed(1) };
}

for (const page of PAGES) {
  const { title, kb } = wrap(page);
  console.log(
    `WROTE docs/${page.slug}/index.html  ${kb}KB` +
    `${page.unlisted ? '  [unlisted: noindex,nofollow]' : ''}\n` +
    `      title: ${title}`
  );
}

// GitHub Pages must not run Jekyll over these.
fs.writeFileSync(path.join(ROOT, 'docs', '.nojekyll'), '');
console.log(`\n${PAGES.length} page(s) wrapped. Repo is public — unlisted means unindexed, not private.`);
