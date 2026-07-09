# AI for Robotics — Capability & Eligibility Framework

A three-axis framework defining **who is eligible to build AI for robotics, and how to train them** — mapped across every technical capability, industry vertical, and robot platform. 49 researched niche profiles plus cross-cutting synthesis, presented as a single navigable website.

**Live site:** https://claude.ai/code/artifact/ad187526-ec80-419b-a7d2-fe61f0d4a71d

## The model — three orthogonal axes

- **Axis A — Capabilities** (23): the engineering competencies (perception, SLAM, control, manipulation, robot learning, VLAs, safety…). The spine of eligibility.
- **Axis B — Verticals** (16): industry overlays that add domain knowledge, regulation, specialized hardware and a safety envelope on top of the capability core (surgical, defense, autonomous vehicles, nuclear…).
- **Axis C — Platforms** (10): robot form factors that bundle capabilities into engineer archetypes (humanoid, quadruped, AMR…).

An engineer is a point in this space: a *capability* operating on a *platform* within a *vertical*. The axes stay orthogonal, so the map never duplicates a curriculum.

## Repository structure

```
master-niche-taxonomy.md          Phase 0 — the full 3-axis taxonomy (source of truth)
capabilities-only-taxonomy.md     Phase 0 — Axis-A-only edition
phase-1/                          Phase 1 — 49 niche profiles
  _TEMPLATE.md                      capability-profile template (v3, 12 sections)
  _grounding-reference.md           shared cited backbone (degrees, subjects, certs, durations)
  <niche>.md                        23 capability profiles (Axis A)
  verticals/                        16 vertical overlays (Axis B) + template
  platforms/                        10 platform bundles (Axis C) + template
  .research/                        per-niche raw research (provenance)
  README.md                         index of all 49 profiles
phase-2/                          Phase 2 — 4 cross-cutting synthesis analyses
  eligibility-matrix.md
  common-core-vs-specialization.md
  progression-paths.md
  lab-procurement-and-partnerships.md
site/
  ai-robotics-framework.html        Phase 3 — the built, self-contained website
  src/                              build source (markdown → single-page site)
    build-site.js  site.css  site.js
```

## Rebuilding the site

The site is generated from the markdown files by a dependency-free Node script:

```bash
node site/src/build-site.js
```

This reads every markdown file, converts it to HTML, and writes `site/ai-robotics-framework.html` (a self-contained single-page app — sidebar navigation, tree map, live filter, light/dark theme, no external dependencies).

## Reading the profiles — confidence tags

- `✓` research-grounded · `~` verify at publish · `⏱` time-sensitive · `★` frontier.
- **All `⏱` trending-research sections are stamped mid-2026** and should be re-verified before any external publication.
- Named degrees, certifications, hardware and figures are research-grounded but time-sensitive — spot-check anything load-bearing for a real hiring decision.

## How it was built

Phase 0 taxonomy (verified deep-research) → Phase 1's 49 profiles (two multi-agent research→write workflows, 114 agents) → Phase 2's 4 synthesis analyses → Phase 3's site. The palette is deliberately neutral for company rebranding.
