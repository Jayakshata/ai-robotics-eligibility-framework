#!/usr/bin/env bash
# Rebuild both annexure deliverables from the markdown source.
#
#   curriculum/annexure-syllabus-and-lab.md   <- edit this, only this
#     -> build-annexure.js  : markdown -> annexure.json + annexure-print.html
#     -> html-to-pdf.js     : print HTML -> Annexure-A-Syllabus-and-Lab.pdf
#     -> build-docx.py      : annexure.json -> Annexure-A-Syllabus-and-Lab.docx
#
# The PDF and the DOCX are generated from the same parse, so they cannot drift.
set -euo pipefail

cd "$(dirname "$0")/../.."   # repo root

node curriculum/build/build-annexure.js
node curriculum/build/html-to-pdf.js \
     curriculum/build/annexure-print.html \
     curriculum/Annexure-A-Syllabus-and-Lab.pdf
python3 curriculum/build/build-docx.py

echo
echo "Deliverables:"
ls -la curriculum/Annexure-A-Syllabus-and-Lab.pdf curriculum/Annexure-A-Syllabus-and-Lab.docx
