# Project context

Two bodies of work live here. Check which one you are being asked about before touching anything.

## 1. The framework — FROZEN

A 62-profile capability/eligibility framework for AI-in-robotics, published as a website
(`site/`, `docs/`) and as a Claude Artifact. **Complete and frozen since 2026-07-09.**
It is *source material* now. Do not build, expand or refactor it.

## 2. The Centre of Excellence — ACTIVE

A proposal for BGR Neo to run a government-partnered Centre of Excellence training
fresh graduates and ITI passouts in AI-for-robotics. Two parts:

- **The deck** — `presentation/` — built, but see the warning below.
- **The curriculum** — `curriculum/`, on branch **`coe-curriculum`** — the current active work.

### Resuming the curriculum work

```
git checkout coe-curriculum          # main is fast-forwarded to it, so both carry the work
```

`main` is kept level with `coe-curriculum` because **GitHub Pages serves from `main` + `/docs`** — a page
is not live until `main` has it. Do the work on `coe-curriculum`, then fast-forward `main` and push both.

Then read, in order:

1. **`curriculum/NEXT-SESSION-RESEARCH-BRIEF.md`** — current state, artifact URLs, and the
   one outstanding task, written to be pasted into a fresh session
2. **`curriculum/VALIDATION-REPORT.md`** — a 13-agent research pass plus four adversarial
   reviewers, with source URLs and confidence levels

### Three claims that must never be reintroduced

A validation pass on 2026-07-29 returned `PLAN_NEEDS_CHANGE` on all four dimensions it
tested. These three were the worst, and all three still appear in the older deck material:

- The original wedge — *"almost nobody can put a trainee in front of a real industrial
  robot"* — is **factually false**. Tamil Nadu already put industrial-robotics labs into
  **71 government ITIs at ₹2,877 crore**. The defensible version is **production cell vs
  training cell**, plus multi-vendor coverage a single-brand OEM centre cannot offer.
- **IASC publishes no robotics Qualification Pack.** Its published lists also use colliding
  codes. Name no QP code until the council confirms it in writing.
- The **TNSDC CoE EOI closed in January 2025** and never covered robotics or manufacturing.

### Settled decisions — do not relitigate

- The academic partner is **Loyola College, Chennai** — autonomous arts & science under
  **UGC, not AICTE**. That distinction is what makes a one-year 40-credit PG Diploma
  possible; AICTE's two-year rule binds only Engineering & Technology.
- **All four robot brands** — FANUC, ABB, KUKA, Universal Robots — are non-negotiable in
  the technician programme. It costs 140 h and is the thing no OEM centre can copy.
- Programme hours: PG Diploma **1,200 h / 40 credits** (fixed by regulation), Engineer
  Training **810 h**, Automation Uptime Technician **1,215 h / 32 weeks**.

## Working conventions

- **Verify before asserting.** Scheme names, qualification codes, NSQF levels and funding
  rates change and have already been wrong once. Mark unverified claims and say who must
  be asked. "I could not confirm this" is an acceptable answer; a confident wrong number
  is not.
- **No fabricated prices.** `phase-2/lab-procurement-and-partnerships.md` deliberately
  carries only relative cost signals (LOW / MEDIUM / HIGH). Keep it that way.
- **Never describe the reader's own knowledge** in anything the reader sees. Describe the
  document's scope instead. This repo is public and the material is shown to the people it
  discusses.
- **Syllabus pages** use domain/trade language with every submodule visible and its hours
  shown — narrative module names and tap-to-reveal layouts were both rejected. Light theme,
  card layout.
- **Rebuilds:** `curriculum/build/build-all.sh` regenerates the PDF and DOCX from markdown.
  `node site/src/build-site.js && node site/src/pages-wrap.js && node presentation/deck-wrap.js`
  rebuilds the frozen site and the deck.
- **Fresh clone:** run `.claude/install-memory.sh` first — Claude Code memory lives outside
  the repo and does not clone.
