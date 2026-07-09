# HANDOFF — AI for Robotics Capability & Eligibility Framework

> A complete context document for resuming this project in a new session/terminal. Read this first, then skim `master-niche-taxonomy.md` and `phase-1/README.md`. **The git repo is the source of truth.**

**Last updated:** 2026-07-09 · **Status:** Complete through **v2** (deployed & live).

---

## 0. Start here (30-second orientation)

- **What this is:** a three-axis framework defining *who is eligible to build AI for robotics, and how to train them*, across every niche — delivered as a navigable website.
- **It's done and live:**
  - **GitHub Pages (public, permanent):** https://jayakshata.github.io/ai-robotics-eligibility-framework/
  - **Claude Artifact (same content):** https://claude.ai/code/artifact/ad187526-ec80-419b-a7d2-fe61f0d4a71d
  - **Repo (public):** https://github.com/Jayakshata/ai-robotics-eligibility-framework  (tags `v1`, `v2`)
- **To rebuild the site after editing any content:**
  ```bash
  node site/src/build-site.js && node site/src/pages-wrap.js
  git add -A && git commit -m "…" && git push      # GitHub Pages auto-rebuilds
  ```
  Then (optionally) re-publish the Artifact from `site/ai-robotics-framework.html`.
- **`gh` is authenticated as `Jayakshata`.** Git author is set locally to Jayakshata / hireme.dpk@gmail.com.

---

## 1. Why we're doing this (the goal)

The company is defining the **criteria / eligibility for an engineer to work on AI for robotics**. Because there are many niches (and sub-niches) across AI, robotics, and AI-for-robotics, the aim is a *complete, mapped-out* reference that, for **every niche**, sets:
- the **eligibility criteria** (acceptable & highly-valued degrees, certifications, experience, skills), and
- ideally the **training** to get there — courses, syllabi, subjects, the labs & resources needed (robots, sensors, compute, sim), datasets, and **partnerships** (universities, vendors, programs) —
- mapped from **undergrad → postgrad → certification → experience → projects**.

The end product had to be **presented neatly as a shareable website link**. That is now built and live (above).

The original framing question from the user was also *"how should I set up Claude for this?"* — the answer we landed on: **not** plan mode (this is research + synthesis + publishing, not a codebase), but **multi-agent research workflows** (for breadth/verification) + **Artifacts / GitHub Pages** (for the shareable site).

---

## 2. The core model (the single most important idea)

Everything is organized on **two orthogonal core axes + a platform dimension**. Getting this right first is what keeps the whole thing coherent.

- **Axis A — Capabilities (23):** the *engineering competencies* — perception, SLAM, motion planning, control, manipulation, locomotion, robot learning, VLAs/foundation models, simulation, HRI, safety, middleware, etc. **This is the spine of eligibility.** What makes someone "a manipulation engineer."
- **Axis B — Verticals (16):** *industry overlays* that sit **on top of** the shared capability core, adding four things: **domain knowledge + regulation/certification + specialized hardware + a distinct safety envelope**. Manufacturing, defense, surgical, autonomous vehicles, nuclear, etc.
- **Axis C — Platform tracks (10):** *robot form factors* that **bundle** capabilities into real engineer archetypes ("humanoid / quadruped / AMR engineer"). Each = a signature capability stack + integration skills + typical verticals.

**The coordinate idea:** an engineer is a *point* in this space — a **capability (A)** operating on a **platform (C)** within a **vertical (B)**. The axes stay **orthogonal**, so the map never duplicates a curriculum.

**Why overlays, not parallel per-industry modules:** a welding robot and a surgical robot share ~70% of the same technical core (perception, kinematics, planning, control). Building full curricula per industry would create an N-capabilities × M-industries **combinatorial explosion** of near-identical syllabi. Instead each vertical is a thin specialization layer.

**A worked example of the model catching an error:** "tactile" is a **perception capability (Axis A)**, *not* an industry vertical — a common misplacement the two-axis model is designed to catch.

---

## 3. What was produced — the four phases

| Phase | What | Where | How it was built |
|-------|------|-------|------------------|
| **0 — Taxonomy** | The full 3-axis niche map | `master-niche-taxonomy.md`, `capabilities-only-taxonomy.md` | A verified **deep-research workflow** (105 agents; 23 sources → 105 claims → 25 adversarially verified). |
| **1 — Profiles** | **49 niche profiles** | `phase-1/` | Two multi-agent **research→write workflows**: capabilities (66 agents), verticals+platforms (48 agents). 0 errors. |
| **2 — Synthesis** | 4 cross-cutting analyses | `phase-2/` | 4 parallel agents reading across all 49 profiles. |
| **3 — Website** | The shareable site | `site/` | A dependency-free Node build (`site/src/`). Deployed to Artifact + GitHub Pages. |

**The 49 profiles = 23 capabilities (Axis A) + 16 vertical overlays (Axis B) + 10 platform bundles (Axis C).** Index: `phase-1/README.md`.

### Per-niche profile template (v3) — the 12 sections each capability profile follows
1. Definition & Scope · 2. Role Archetypes & Seniority Tiers (L1–L4/L5) · 3. **Eligibility** (named acceptable + highly-valued undergrad/postgrad programs + certifications + experience) · 4. **Skill Profile (JD-style)** (required / preferred / tools) · 5. **Core Subject List** · 6. **Training Programme + duration in months** (fast-track vs thorough) · 7. **Trending Research Topics** (`⏱` time-sensitive, stamped mid-2026) · 8. Hands-On Labs & Projects · 9. Required Lab Setup / Hardware · 10. Partnerships & Ecosystem · 11. Assessment & Validation · 12. Adjacent & Related Niches.

Vertical overlays (10 sections) and platform bundles (9 sections) are **lighter** — they *reference* the capability profiles rather than repeating their curricula. Templates: `phase-1/_TEMPLATE.md`, `phase-1/verticals/_TEMPLATE-vertical.md`, `phase-1/platforms/_TEMPLATE-platform.md`.

### Phase 2 synthesis documents (`phase-2/`)
- `eligibility-matrix.md` — 23 niches × [strongest degrees, top programs, key certs, entry bar] + a reverse "which degree opens which niches" view.
- `common-core-vs-specialization.md` — the ~920-hour shared foundation every robotics engineer builds, then ~480 hours of per-track depth (the "T-shaped engineer" model).
- `progression-paths.md` — the L1→L5 ladder, the lattice of how niches combine, platform archetypes, worked career paths.
- `lab-procurement-and-partnerships.md` — the consolidated buy-list (robots/sensors/compute/sim) tiered entry/mid/flagship + prioritized partnership targets.

---

## 4. Key decisions already made (don't re-litigate these)

- **No plan mode.** This is research/synthesis/publishing, not code changes.
- **Two core axes (A capabilities × B verticals as overlays) + Axis C platform tracks.** Axis C was elevated to a full third dimension to *maximize depth* per the "don't miss anything" brief.
- **No learner "roadmap."** The user explicitly removed the prerequisite-tree / career-journey. Instead each profile has a flat **subject list**, a **credential-based eligibility** section (named acceptable & highly-valued degrees/certs — not "a relevant degree"), a **JD-style skill list**, and a **training programme with month-by-month duration**.
- **A current "trending research" section** per niche (the "SAM2 / DINO"-style named frontier), explicitly **time-sensitive** (`⏱`, stamped mid-2026).
- **Website: professional / corporate** treatment — cool blue-slate neutrals + a single **teal accent**, amber reserved for frontier, a green→red severity ramp for vertical safety-criticality. Both light/dark themes. Fully self-contained (no external CSS/JS/fonts). **Palette is deliberately neutral so it can be rebranded** with company colors.
- **Exemplar-first rollout.** For each new format we built ONE example, got sign-off, then fanned out — this caught the "roadmap" and "readability" issues cheaply.
- **Confidence tags used throughout:** `✓` research-grounded · `~` verify at publish · `⏱` time-sensitive · `★` frontier.

---

## 5. Research knowledge — the load-bearing facts

The full research lives in the repo (see §6). The key facts / mental model:

**Verified structure (high confidence):** the two-axis capability-vs-vertical split is evidence-backed; the 2024–26 frontier (VLAs / robot foundation models, world models, sim-to-real, learned manipulation) are **capabilities**, not verticals.

**Shared grounding backbone** (`phase-1/_grounding-reference.md`) — reused by every profile:
- **Valued degrees:** Tier-1 (auto-qualifying) = CS, Robotics Engineering, EE/ECE, AI; Tier-2 (with evidence) = Mechanical, Mechatronics, Maths, Physics. Per-niche this shifts (e.g. **ME rises to Tier-1 for manipulation**; **EE/ECE strongest for perception & SLAM**; a **pure ML/AI master's beats a robotics master's for VLAs**; **Biomedical for surgical**; **Aerospace for planning/navigation & SLAM**).
- **Training duration model:** ~**1,400 learning hours** to job-ready, in 5 phases → **~9–11 months full-time** or **~24–30 months part-time**, then **+3–9 months** employer ramp.
- **Common core** (`phase-2/common-core-vs-specialization.md`): ~**920 h** shared foundation (phases 1–3) + ~**480 h** specialization (phases 4–5).

**Load-bearing corrections the research caught** (important for accuracy):
- **Oxford, Imperial, and Edinburgh have NO degree literally named "Robotics MSc"** — match on their real degree names.
- **Stanford CS336 is no longer robotics** (it's an LLM course now).
- **CMU launched a dedicated BS in Robotics (2023);** MIT restructured its majors (2024); **ETH & TUM teach dedicated Robotics only at master's level.**
- **AWS ML Specialty (MLS-C01) retired Mar 2026** → MLA-C01; **Azure AI-102 retired Jun 2026** → AI-103; **DeepLearning.AI MLOps spec discontinued.**
- **There is NO official ROS certification** (the known one is The Construct's third-party program), and **NVIDIA has NO dedicated robotics exam** (closest = NCP-OpenUSD).

**Procurement/partnership headline** (`phase-2/lab-procurement-and-partnerships.md`): the universal "buy-first" backbone is Intel RealSense + an RTX 4090/A6000 workstation + Jetson Orin + ROS 2 / Isaac Sim/Lab / MuJoCo / LeRobot + Open X-Embodiment/DROID. **NVIDIA is the single highest-leverage partner**; Hugging Face LeRobot and Unitree next.

**Provenance:** raw per-niche research is in `phase-1/.research/*.md`. Deep-research + workflow transcripts were under the Claude Code session directory (not committed).

---

## 6. Repository map

```
HANDOFF.md                        <- you are here
README.md                         project overview + rebuild + confidence tags
master-niche-taxonomy.md          Phase 0 — the full 3-axis taxonomy (source of truth for the map)
capabilities-only-taxonomy.md     Phase 0 — Axis-A-only edition (requested spin-off)
phase-1/                          Phase 1 — 49 niche profiles
  README.md                         index of all 49
  _TEMPLATE.md                      capability-profile template (v3, 12 sections)
  _grounding-reference.md           shared cited backbone (degrees / subjects / certs / durations)
  <niche>.md                        23 capability profiles (Axis A)
  verticals/  <16>.md + _TEMPLATE-vertical.md   16 vertical overlays (Axis B)
  platforms/  <10>.md + _TEMPLATE-platform.md   10 platform bundles (Axis C)
  .research/                        per-niche raw research (creds + trending) — provenance
phase-2/                          Phase 2 — 4 synthesis analyses
site/
  ai-robotics-framework.html        built site (Artifact-style, no <head>/<body> wrapper)
  src/  build-site.js  site.css  site.js  pages-wrap.js   the build source
docs/
  index.html                        standalone full-HTML doc (what GitHub Pages serves)
  .nojekyll
```

---

## 7. Build & deploy pipeline

- **`site/src/build-site.js`** — a dependency-free Node script (own markdown→HTML converter). Reads all 53 markdown files, renders each into HTML, and assembles ONE self-contained page → `site/ai-robotics-framework.html`. Features: sidebar accordion nav, collapsible tree-map overview, live filter across 49 profiles, light/dark theme, cross-reference links, and (v2) **sectioned readable profile pages** (numbered sections + section navigator, labelled fields, meta pills, sub-bullet grouping, colored confidence chips).
- **`site/src/pages-wrap.js`** — wraps that file into a complete HTML document at `docs/index.html` for GitHub Pages (the Artifact platform adds `<head>/<body>`, so the raw file isn't a standalone document).
- **GitHub Pages** publishes from `main` branch `/docs`. Any push to `main` auto-rebuilds it. URL is stable.
- **Claude Artifact** hosts the same `site/ai-robotics-framework.html` (re-publish by calling the Artifact tool on that path — same URL if in the same session, otherwise it mints a new one).

**Two ways to change the site:** (a) edit the markdown profiles → rebuild → push; (b) edit the design (`site/src/site.css` / `site.js` / `build-site.js`) → rebuild → push.

---

## 8. Caveats & must-knows before any external/company publish

1. **`⏱` trending-research sections are stamped mid-2026** and move fast — **re-verify before external publication.**
2. **Named specifics are research-grounded but time-sensitive** (degrees, course codes, certs, hardware, vendor claims) — spot-check anything load-bearing for a real hiring decision. Tags (`✓`/`~`/`⏱`) mark confidence throughout.
3. **Axis-B exhaustiveness is asserted, not proven** — the vertical list is a comprehensive working set, extensible.
4. **The site is a single ~1.8 MB self-contained HTML** (content embedded as JSON, rendered client-side). Fine for browsers/Pages; just be aware it's large.
5. **Palette is neutral on purpose** — swap in company colors/logo when there's a brand.

---

## 9. Backlog / natural next steps (nothing here is started)

- **Re-verify the `⏱` trending sections** per niche before publishing externally (could be another research pass).
- **Rebrand** the site with company colors + logo (the palette is tokenized in `site/src/site.css` `:root` — easy swap).
- **Deepen priority areas:** the user flagged wanting to later go deeper on **manufacturing** and the **frontier** niches, and possibly other chosen niches.
- **Split broad profiles** if wanted (e.g. `locomotion` bundles legged/wheeled/aerial/underwater; could become finer profiles).
- **Original-vision extras** not yet built out: richer **project/experience portfolios** per niche, and any deeper undergrad→postgrad course-by-course mapping beyond the current subject lists.
- **Nice-to-haves:** in-profile search, print/PDF export, per-vertical regulation deep-dives.

---

## 10. What happened in this conversation (chronological)

1. **Framing.** User described the goal (eligibility + training for AI-for-robotics engineers across all niches, as a shareable website) and asked how to set up Claude. Recommendation: not plan mode; use research workflows + Artifacts; a phased plan (taxonomy → profiles → synthesis → site).
2. **Phase 0.** User approved; asked whether industries (defense/manufacturing/welding/tactile…) need separate modules. Answer: two-axis model — industries are **overlays**, and **tactile is a capability, not an industry**. Ran a **deep-research workflow (105 agents)** to lock the taxonomy. Built `master-niche-taxonomy.md`.
3. **Scoping.** User chose: keep it **broad** + also produce a **capabilities-only** edition; make **platform the deepest option** (→ elevated to **Axis C**); roll out **one exemplar first**. Built Axis C, the capabilities-only edition, the template, and a Manipulation exemplar.
4. **Format feedback.** User: the skill list must be a clear **JD-style** list; add an explicit **subject list**; **remove the roadmap**; make eligibility **named acceptable/valued degrees + certs**; add a **training programme with months**; add **current trending research** (SAM2/DINO-style). → Restructured the template to **v3**, ran grounding-research agents (renowned syllabi, valued degrees, certifications, training durations) and trending-research agents, rebuilt the exemplar.
5. **Phase 1 fan-out.** User: *"approve, run Phase 1, use a workflow."* Ran the **capabilities workflow (22 profiles, 66 agents)**, then built vertical + platform templates + exemplars (healthcare-surgical, humanoid), then the **verticals+platforms workflow (24 docs, 48 agents)** → **49 profiles complete.**
6. **Phase 2 + 3.** User chose **full synthesis** + **professional/corporate** site. Ran 4 synthesis agents; built the website; published the Artifact (site v1 = tree map added after user said the first overview felt crowded; accordion sidebar added).
7. **Profile readability (v2).** User said the per-niche pages were overcrowded/clumped and wanted distinct sections, bullets, and non-expert legibility. **First** saved everything to **GitHub (Jayakshata)** for version control (tagged `v1`), **then** did the readability overhaul (sectioned pages, labelled fields, meta pills, sub-bullet grouping, colored chips) and tagged **`v2`**.
8. **Public + Pages.** User asked to make it shareable via GitHub. Made the repo **public** and set up **GitHub Pages** (`main`/`docs`) — confirmed live.
9. **This handoff document.**

---

## 11. Environment / tooling notes

- **Model/session:** built on Opus 4.8 (1M context), `max` effort. Heavy use of **multi-agent Workflows** (the `Workflow` tool — "dynamic workflows") and the **`deep-research`** skill for breadth + adversarial verification.
- **`gh` CLI:** authenticated as **Jayakshata** (active) and Dee-Nith; `repo`+`workflow` scopes.
- **git:** repo-local author = Jayakshata / hireme.dpk@gmail.com. Branch `main`. Tags `v1`, `v2`.
- **Node** is available (used for the build; no npm dependencies). No Python markdown lib.
- **Claude Code memory** (same-machine only, not in the repo): `~/.claude/projects/-home-dee-Desktop-AI-criterion/memory/` holds a project memory summarizing this. A fresh clone on another machine won't have it — which is why this HANDOFF.md is self-contained.

---

## Update log — Executive Brief + applied-AI extension (added after the initial handoff, same day)

All committed & pushed.

### Executive Brief (DONE, live on the site)
`executive-brief.md` — a plain-language **"Manufacturing & Humanoids"** view for a **non-AI-expert leader** (the company's leader is focused on factory robotics + tomorrow's humanoids). Wired into the site as a featured nav item **★ Executive Brief** + a "Start here · for leaders" callout on the overview. Covers three kinds of AI, the roles that matter, a hiring order, what to buy, key partners, the humanoid frontier.

### The "kinds of AI" model — `applied-ai-taxonomy.md`
Five kinds of AI, **by what the AI acts on**: (1) **Embodied** → the robot = the 23 Axis-A niches (built) · (2) **Agentic/assistive** → people & workflows → new **Area 1** · (3) **Analytics/predictive** → data → new **Area 2** · (4) **Generative/design** → engineering → folded into Area 1 · (5) **Governance** → the AI itself → folded into Area 1 · (6) Foundation-model research = **out of scope** ("consume, don't build").

### Two NEW build areas
- **Area 1 — Agentic & Applied AI** (8 niches): agentic-LLM-orchestration · **engineering-robotics-copilots ✅ exemplar** · knowledge-rag-systems · operations-erp-ai · conversational-hmi-agents · llmops-ai-platform · generative-ai-design · responsible-ai-governance. *Backgrounds: software + LLM/agent (CS/ML).*
- **Area 2 — Analytics / Predictive AI** (5 niches): **predictive-maintenance ✅ exemplar** · quality-yield-defect-analytics · process-production-optimization · forecasting-planning-analytics · anomaly-fault-detection. *Backgrounds: data science + reliability domain.*

### Two exemplars built (research-backed, mid-2026)
- `phase-1/agentic/engineering-robotics-copilots.md`
- `phase-1/analytics/predictive-maintenance.md`
Their **full source research (4 background agents) is preserved** in `phase-1/.research/`: `engineering-robotics-copilots.creds.md`/`.trending.md`, `predictive-maintenance.creds.md`/`.trending.md`. **Nothing the background agents produced is lost.**

### ⏸ WHERE WE STOPPED — RESUME HERE
Awaiting the user's **sign-off on the two exemplars' adapted format.** On "go":
1. **Fan out the remaining 11** applied-AI niches (7 in Area 1, 4 in Area 2) via a research→write workflow — using the two exemplars as the gold standard and the `.research/` reports + `applied-ai-taxonomy.md` as grounding (same process that built the 49 profiles).
2. **Wire both new areas into the site** — in `site/src/build-site.js` add two content-registry blocks + two accordion sidebar groups + two tree-map branches (mirror the Axis A/B/C wiring) and register the profiles; then `node site/src/build-site.js && node site/src/pages-wrap.js`, commit/push (Pages auto-rebuilds), re-publish the Artifact.

### Adapted-template notes for applied-AI profiles (differ from embodied)
- **§3 eligibility:** Area 1 → CS/SE + applied-LLM (software-first; robotics domain is the *differentiator*, not the entry ticket). Area 2 → data-science/stats core + reliability-domain certs (**CMRP, CRE, ISO 18436-2 vibration**). Neither wants kinematics/control.
- **§9 labs/hardware:** compute / LLM APIs / vector DBs / agent frameworks / sim-CAM-PLC sandboxes (Area 1); time-series DBs / **C-MAPSS & PRONOSTIA** datasets / condition-monitoring sensors (Area 2) — **not robots**.
- **§7 trending:** agent frameworks (LangGraph 1.0, MCP, Claude Agent SDK), shipping copilots (Path Robotics, Hirebotics, Siemens TIA, CloudNC) (Area 1); time-series foundation models (Amazon Chronos-2), physics-informed RUL, AWS Lookout retirement, edge/TinyML (Area 2).
- **§6 training:** copilots track is *faster* (~7–9 mo, a software conversion); predictive-maintenance ~9–11 mo.

---

*To resume: read this file, open the live site, skim `master-niche-taxonomy.md` + `phase-1/README.md` + `phase-1/_grounding-reference.md`, and treat the repo as the source of truth. Then say what you want to work on next.*
