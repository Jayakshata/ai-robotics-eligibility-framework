'use strict';
/* Wraps the Artifact-style content file (which has no <!doctype>/<head>/<body>,
   because the Artifact platform adds them) into a complete standalone HTML
   document at docs/index.html, for GitHub Pages to serve.
   Run after build-site.js:  node site/src/build-site.js && node site/src/pages-wrap.js */
const fs = require('fs');
const ROOT = '/home/dee/Desktop/AI criterion';
const content = fs.readFileSync(ROOT + '/site/ai-robotics-framework.html', 'utf8');
const doc =
  '<!doctype html>\n<html lang="en">\n<head>\n' +
  '<meta charset="utf-8">\n' +
  '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
  '<meta name="description" content="AI for Robotics — engineer eligibility and training framework across 49 niches (capabilities, industry verticals, robot platforms).">\n' +
  '</head>\n<body>\n' + content + '\n</body>\n</html>\n';
fs.mkdirSync(ROOT + '/docs', { recursive: true });
fs.writeFileSync(ROOT + '/docs/index.html', doc);
fs.writeFileSync(ROOT + '/docs/.nojekyll', '');
console.log('WROTE docs/index.html', (doc.length / 1024).toFixed(0) + 'KB + docs/.nojekyll');
