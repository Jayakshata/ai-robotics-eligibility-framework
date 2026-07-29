# Syllabus Architecture — one module library, two products

**Date:** 29 July 2026 · **Owner:** Dee (Deepak Ananthapadmanabhan), BGR Neo
**Purpose:** how to design the CoE syllabus as **both** a 1-year PG Diploma **and** a ~6-month training programme, without writing (or maintaining) two curricula.

> **Revision 2 — corrections applied from `curriculum/VALIDATION-REPORT.md` (29 July 2026).** Eight research topics plus four adversarial passes returned `PLAN_NEEDS_CHANGE` on every count. The material changes here: the diploma drops to **1,200 h / 40 credits** (UGC's cap), **Loyola College** is named as the academic partner and the sequencing is reversed, a **PLC module (R6)** is added, the **QP claims are withdrawn**, and Block S is rebalanced so the station rotation is actually schedulable. Read the validation report before treating any number here as settled.

**Inputs:** `phase-1/_grounding-reference.md` §D · `phase-2/common-core-vs-specialization.md` · `phase-2/eligibility-matrix.md` · `phase-2/lab-procurement-and-partnerships.md` · `presentation/deck-brief.md` §5–§7 · `curriculum/VALIDATION-REPORT.md`.
**Companion:** `curriculum/iti-operator-technician-programme.md` — the ITI technician tier.

---

## 0. The one-line model

> **One module library (~1,200 h, tagged).** Two products are *views* over it, not rewrites.
> **PG Diploma = the whole library.** **6-month training = the library minus breadth, with the specialization block untouched.**

The 6-month product is **the fast one, not the cheap one.** Every hour cut from it is general-purpose breadth. Zero hours are cut from the specialization block.

**On the wedge — corrected.** The earlier framing ("almost nobody can put a trainee in front of a real industrial robot") is **factually false in Tamil Nadu.** The state has already spent ₹2,877 crore putting an Industrial Robotics and Digital Manufacturing Lab into 71 government ITIs, and Delta, FANUC, KUKA, Siemens and TANSAM all run robotics or automation centres here. The defensible version is narrower and stronger:

1. **A production cell, not a training cell.** Those labs have no customer, no order book, no acceptance test and no consequence for downtime. BGR Neo's cells do.
2. **Multi-vendor.** FANUC + ABB + KUKA + UR in one room, plus integration across PLC, vision, safety and fieldbus that no single OEM owns. An OEM CoE structurally cannot offer this.
3. **A live customer integration project** with a real handover.

---

## 1. The design procedure (eight steps, in order)

### Step 1 — Write the exit claim for each product, in one sentence

| Product | Exit claim |
|---|---|
| **PG Diploma (1 yr)** | *"A job-ready junior AI-for-robotics engineer with breadth across all types of AI and demonstrated depth on real industrial cells."* |
| **Training (6 mo)** | *"A technician-engineer deployable from day one on a vision-guided / integrated industrial robot cell."* |

The diploma sells a **career**; the training sells a **role**.

### Step 2 — Fix the credential regime for each — *this is the real fork*

**The two products cannot ride the same awarding body.**

| | PG Diploma (1 yr) | Training (6 mo) |
|---|---|---|
| **Awarding body** | **Loyola College, Chennai** — autonomous, arts & science, affiliated to the University of Madras. BGR Neo cannot award it. | **BGR Neo CoE certificate** + vendor certificates. **No NSQF/QP claim** — see below. |
| **Regulator** | **UGC.** *Not AICTE* — that distinction is load-bearing (see the box below) | NCVET / Sector Skill Councils, *where a usable QP exists* |
| **Credit frame** | **40 credits / 1,200 notional hours** — UGC CCFPG Table 1, at NCrF's 30 notional hours per credit | 27 credits equivalent (810 h), not currently certifiable against a QP |
| **Assessment** | Semester examinations, internal + external, transcript, credit ledger | Competency-based, practical, CoE-assessed |
| **Approval path** | Loyola's **Academic Council and Board of Studies** — an autonomous college designs and approves its own curriculum | Internal |

> **Why UGC and not AICTE — the correction that matters.**
> AICTE's Approval Process Handbook §8.3 sets **PG Diploma in Engineering & Technology at 2 years**; its 1-year post-graduate engineering award is a PG *Certificate*. Its Annexure-11 §11.5(A) list of permitted PG Diploma names is a **closed list of 12**, containing no robotics, AI, automation or mechatronics entry.
> **None of that binds Loyola College.** Those rules govern *technical* programmes under AICTE. Loyola College is an autonomous **arts & science** college under **UGC**, where UGC's CCFPG puts a **P.G. Diploma at Level 6, 40 credits** and states that students exiting after year 1 of a PG programme are awarded a Postgraduate Diploma. A **1-year, 40-credit PG Diploma in Applied AI is ordinary business for an autonomous college**, approved by its own Academic Council.
> If the partner were **LICET** (Loyola-ICAM, AICTE engineering, Anna-affiliated) instead, every AICTE constraint above would apply and the award would have to be a 2-year M.Tech with the diploma as a year-1 exit. It is not; this is Loyola College.
> **Why BGR Neo cannot self-award:** AICTE APH §1.3.4 restricts promoters of a technical institution to a Society, Trust, Section 8 company or Government. Separately, an unaffiliated **"standalone institution"** is limited to Management, Travel & Tourism, Innovation & Entrepreneurship, and Computer Applications & Design — **Engineering & Technology is excluded.** (LIBA, the Jesuit business school on the same campus, is that rule in action: it exists as a standalone because Management is on the list. The same door is the only long-term shape for a BGR Neo-owned award, and it would have to be *Computer Applications*, never engineering.)

**Sequencing — reversed from Revision 1.** Sign Loyola **before or alongside** any government filing, not after. Two reasons: the curriculum needs Academic Council approval on Loyola's calendar, not ours; and the TNSDC CoE EOI carries an explicit **Knowledge Partner** slot (§9(b)), so Loyola goes *into* the bid rather than being courted separately. Propose the university with you, not after you.

> ⚠ **Cleared:** the NCrF 30-hours-per-credit rule is **verified** at three primary sources (NCVET SOP for NCrF-VETS; UGC AEDP Guidelines §9(i); AICTE AEDP Guidelines §7.2). This is no longer an open question.
> ⚠ **Still open with Loyola:** whether their Academic Council will approve a programme where the 260-hour specialization block runs off-campus at a BGR Neo facility. That is the first question to put to them, and it is a conversation, not a lookup.

### Step 3 — Atomise into modules with a fixed card format

```
MODULE ID + TITLE
  Block:            F / R / D / S / C
  Hours:            diploma / 6-month
  Cut-priority:     PROTECTED | COMPRESSIBLE | DROPPABLE
  Delivery:         classroom | sim/GPU workstation | bench rig | LIVE CELL
  Prerequisite:     module IDs, or "entry gate"
  Learning outcomes: 4–6, each observable ("configures", "commissions", not "understands")
  Assessment:       diploma form / competency form
  Credit mapping:   Loyola credits (30 h = 1) · NOS/QP code ONLY where one genuinely exists
  Taxonomy source:  profile IDs from the 62-profile site
```

**The `Credit mapping` field changed.** Revision 1 assumed every module maps to an IASC or NASSCOM QP. It does not — most map to nothing (Step 5 note below). The honest field admits: Loyola credits, **DGT** NOS, **IASC** NOS, **NIELIT**, **CGSSC**, or **"no QP available — CoE certificate."** The last value will be the most common one, and saying so is better than inventing a code.

### Step 4 — Tag every module on four axes

| Axis | Values | What it controls |
|---|---|---|
| **Block** | F Foundations · R Core robotics · D AI depth · S Specialization · C Capstone | Curriculum sequence |
| **Delivery** | classroom · sim · bench · **live cell** | **Capex and scheduling** — the binding constraint |
| **Cut-priority** | PROTECTED · COMPRESSIBLE · DROPPABLE | How every future SKU gets cut |
| **Credit mapping** | Loyola credit · a real NOS/QP code · or *none* | Whether the hour is externally recognised |

PROTECTED modules: **the whole S block**, **F4 industrial safety**, **R2 industrial robot programming**, **R6 PLC**, and **D2 machine vision**.

### Step 5 — Cut by tag, never by shrinking a module

Removing whole modules is honest; teaching all of them at half depth is not — a half-depth module fails its own learning outcomes and cannot be assessed.

> **The certification reality, stated plainly.** Revision 1 claimed the 6-month engineer product maps to "NSQF/QP certificates." **It does not, and cannot as designed.** The two candidate QPs — CGSSC's **CSC/Q0505** and NASSCOM's **SSC/Q8113** — both set a **minimum job entry age of 24**, and CSC/Q0505 requires a degree plus two years' experience. A cohort of fresh graduates finishing at 22–23 is excluded from both. IASC, meanwhile, publishes **no robotics QP at all** — only a standalone NOS. Until that changes, the 6-month engineer credential is a **CoE certificate plus vendor certificates**, and the deck should say so.

### Step 6 — Pay for the shorter foundation with a harder entry gate

| | PG Diploma (1 yr) | Training (6 mo) |
|---|---|---|
| **Degree bands** | Soft bands — direct-fit / adjacent-with-bridging / needs-bridging; **bridging delivered inside the programme** | Same bands, but **bridging must already be done** |
| **Diagnostic** | Sets the starting level; a low score routes to extra bridging, it does not exclude | **Pass/fail** on maths + programming |
| **Inclusion posture** | Broad | Narrower — with a **free 4–6 week pre-gate bridge**, or the gate silently filters on schooling instead of aptitude |

### Step 7 — Design assessment twice, from the same outcomes

Same learning outcomes, two instruments. Outcomes are written **observably** so they can be graded academically *and* assessed as competencies without rewriting.

### Step 8 — Schedule against live-cell hours, for **three** cohorts, not two

Classroom and GPU seats are elastic. Live-cell hours are the constraint — and the CoE now runs **three** concurrent cohorts (diploma, 6-month engineer, ITI technician).

```
DIPLOMA   (48 wks) ├── F ──┤├── R ──┤├── D ──┤├── S ──┤├ CAPSTONE ┤
                                              ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ cells, wks 31–48

TRAINING  (26 wks) ├─F─┤├── R ──┤├─ D ─┤├──── S ────┤├ CAP ┤
                                        ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ cells, wks 15–26

ITI       (26 wks) ├ safety ┤├─ trainer cells ─┤├─── OPERATE & MAINTAIN ───┤
                                     ▓▓▓ wks 11–13        ▓▓▓▓▓▓▓▓ cells, wks 18–26
```

**Start all three in the same week and the demand sequences rather than collides:**

| Weeks | On the live cells |
|---|---|
| 11–13 | ITI only |
| 15–17 | Engineer training only |
| **18–26** | **Both — the Handover Model window** |
| 27–30 | *(no live-cell demand)* |
| 31–48 | Diploma only |

**33 of 52 weeks carry live-cell demand, and only 9 of them are contended.** Block-book cell access in **2-week blocks per team** rather than continuously — real integration work is bursty anyway, and it raises effective capacity roughly 3–4×.

> **Two constraints Revision 1 missed.** (a) **Assessment integrity:** a cell that every cohort trains on cannot host an unseen-cell examination. **Ring-fence one cell that no cohort trains on.** (b) **Siting:** the published TNSDC CoE EOI §12(1) states TNSDC provides the space "in any of the government institutions or building." If the CoE is sited that way, the live-cell blocks become **contracted OJT/internship months at BGR Neo premises**, not CoE timetable. This inverts the capex story too — TNSDC supplies floor space, furniture and workstation PCs; the partner supplies the robots. *"Mostly buying computers, not robots"* is then exactly backwards.

---

## 2. The module library

Focus niche per `deck-brief.md` §5 — **Industrial Manufacturing Robotics + applied factory AI** (B1, adjacent B14/B2), drawing **A1** CV · **A9** manipulation · **A16** simulation & digital twins · **A21** systems integration, applied AI **AG4/AG5/AN1/AN2**, platforms **C1/C2**.

Hours are `diploma / 6-month`. **1,200 h is notional learning hours per NCrF** — directed contact plus supervised self-study — not contact hours alone.

### Block F — Foundations · 230 / 90

| ID | Module | Hrs | Cut | Delivery |
|---|---|---|---|---|
| F1 | Engineering maths for AI — linear algebra, probability & statistics, optimization | 80 / 30 | COMPRESSIBLE | classroom |
| F2 | Programming — Python, intro C++, data structures & algorithms | 90 / 30 | COMPRESSIBLE | classroom |
| F3 | Classical machine learning | 30 / 0 | DROPPABLE *(folds into D1)* | sim |
| F4 | **Industrial context, safety & standards** — ISO 10218, ISO/TS 15066, **IEC 60204-1, ISO 13855, ISO 13849-1**, LOTO, shop-floor discipline | 30 / 30 | **PROTECTED** | classroom + floor |

### Block R — Core robotics · 310 / 200

| ID | Module | Hrs | Cut | Delivery |
|---|---|---|---|---|
| R1 | Robot kinematics & dynamics | 60 / 40 | COMPRESSIBLE | classroom + sim |
| R2 | **Industrial robot programming** — teach pendant + offline, multi-vendor (FANUC/ABB/KUKA/UR) | 60 / 60 | **PROTECTED** | bench + cell |
| R3 | ROS 2 + MoveIt 2 | 60 / 30 | COMPRESSIBLE | sim |
| R4 | Feedback control fundamentals | 40 / 20 | COMPRESSIBLE | classroom + sim |
| R5 | Motion planning + mobile-base navigation (C2/AMR) | 30 / 10 | COMPRESSIBLE | sim |
| **R6** | **Industrial controls & PLC** — ladder logic, PLC↔robot handshaking, fieldbus, HMI, safety circuits ***(NEW)*** | **60 / 40** | **PROTECTED** | bench + cell |

> **Why R6 exists, and why R3 shrank to pay for it.** Industrial cells run vendor stacks and PLCs, not ROS 2. Revision 1 put *all* the controls content inside S3, where 60 hours had to cover PLC programming, four fieldbuses, HMI/SCADA design *and* safety-circuit validation — while the annexure bought PLC trainer kits at 1:5 that no module had hours to use. R6 fixes the contradiction between the training tier's own exit claim and its content.

### Block D — AI depth · 240 / 140

| ID | Module | Hrs | Cut | Delivery |
|---|---|---|---|---|
| D1 | Deep learning | 80 / 50 | COMPRESSIBLE | sim/GPU |
| D2 | **Machine vision for manufacturing** — 2D/3D, 6-DoF pose, defect inspection, hand-eye calibration | 90 / 70 | **PROTECTED** | sim + cell |
| — | **Elective pool — choose 2 of 4, 35 h each** | 70 / 20 | COMPRESSIBLE | sim/GPU |

**The elective pool, now actually specified** (Revision 1 claimed breadth on two modules that had no cards):

| ID | Elective | Hrs |
|---|---|---:|
| D3 | Reinforcement & imitation learning | 35 |
| D4 | Industrial data & time series *(the AN1/AN2 substrate)* | 35 |
| D5 | Agentic AI & LLM applications for manufacturing *(AG4/AG5)* | 35 |
| D6 | Simulation & digital-twin depth *(A16)* | 35 |

*The 6-month training takes **D4 only, at 20 h**. D3 is `DROPPABLE` and is now genuinely dropped from it — Revision 1 tagged it droppable and then retained it, violating its own cut rule.*

### Block S — Industrial specialization · **260 / 260 — IDENTICAL IN BOTH**

Rebalanced to near-equal dwell so the six-station rotation is schedulable (Revision 1's 50/50/60/40/30/30 could not round-robin six teams).

| ID | Module | Hrs | Cut | Delivery |
|---|---|---|---|---|
| S1 | Vision-guided pick & place on a real cell | 45 | **PROTECTED** | **LIVE CELL** |
| S2 | Welding / dispensing offline programming + digital twin | 45 | **PROTECTED** | sim → **LIVE CELL** |
| S3 | Cell integration — robot↔PLC↔vision↔safety, fieldbus, commissioning | 45 | **PROTECTED** | **LIVE CELL** |
| S4 | Predictive maintenance & quality analytics on live machine data | 40 | **PROTECTED** | cell data + sim |
| S5 | Operator-facing AI — MES/ERP agents, conversational HMI | 40 | **PROTECTED** | sim + floor |
| S6 | Calibration, commissioning & handover discipline (ISO 9283, FAT/SAT) | 45 | **PROTECTED** | **LIVE CELL** |

**Identical across both products.** Cut last, cut least.

### Block C — Capstone & employability · 160 / 120

| ID | Module | Hrs | Cut | Delivery |
|---|---|---|---|---|
| C1 | Capstone — *diploma:* open-ended, portfolio-grade · *training:* a scoped live BGR Neo cell problem | 130 / 90 | COMPRESSIBLE | **LIVE CELL** |
| C2 | Portfolio, documentation, customer communication, interview prep — **mapped to DGT/VSQ/N0102 Employability Skills** | 30 / 30 | COMPRESSIBLE | classroom |

### Totals

| Block | Diploma | 6-month |
|---|---:|---:|
| F Foundations | 230 | 90 |
| R Core robotics | 310 | 200 |
| D AI depth | 240 | 140 |
| **S Specialization** | **260** | **260** |
| C Capstone | 160 | 120 |
| **Total** | **1,200 h** | **810 h** |
| **Credits @ 30 h** | **40** *(UGC PG Diploma exactly)* | **27** |

**The diploma is 1.5× the training programme — and every extra hour is breadth.**

---

## 3. The two products, side by side

| | **PG Diploma — 1 year** | **Training — 6 months** |
|---|---|---|
| **Hours / calendar** | 1,200 notional h · 48 teaching weeks + 4 exam/break · ~25 h/wk | 810 h · 26 weeks · ~31 h/wk |
| **Structure** | F wks 1–10 · R 11–20 · D 21–30 · **S 31–40** · Capstone 41–48 | F wks 1–3 · R 4–9 · D 10–14 · **S 15–22** · Capstone 23–26 |
| **Awarding body** | **Loyola College** (autonomous, UGC) | BGR Neo CoE |
| **Buyer** | The student / family, buying a credential and a career | The employer or the government, buying a placement |
| **Electives** | Yes — 2 of 4 (D3–D6) | None |
| **Capstone** | Open-ended, student-scoped | Scoped to a live BGR Neo cell problem |
| **Credential** | PG Diploma, 40 credits | **CoE certificate + vendor certs** (FANUC/ABB/KUKA/UR, NVIDIA Jetson AI Specialist). *No QP claim — both candidate QPs age-gate at 24* |
| **Cohorts / yr** | 1 | 1–2 *(cell-capacity permitting)* |
| **Live-cell window** | Weeks 31–48 | Weeks 15–26 |
| **Positioning** | The **depth product** | The **throughput product** |

> **On "the flagship for EOI prestige" — dropped.** Revision 1 called the PG Diploma the flagship because it would make the CoE prestigious in the EOI. **Nothing in the published TNSDC CoE EOI scores an academic award.** It scores placement (§10(d) requires **at least 70%**, reviewed quarterly and terminable), faculty capacity building, industry integration and investment. Keep the diploma because it is a better product, not because it wins the bid — and build a faculty-development SKU, because that one *is* scored.

---

## 4. Stackability — corrected

Revision 1 promised that a 6-month graduate's credits accumulate in the Academic Bank of Credits and top up into the diploma later. Three constraints make that promise narrower than it was written:

1. **ABC deposits require an NCVET-recognised Awarding Body.** BGR Neo is not one, and cannot be for 3–5 years (NCVET's 2025 guidelines require a not-for-profit vehicle plus 20,000 learners trained-or-assessed for a Category-II state like Tamil Nadu). Credits therefore flow **through Loyola**, on Loyola's terms.
2. **A 50% cap.** No more than half of a UG/PG award's credits may come from skill-based qualifications (NCVET VETS SOP §7.1.1). The bridge must be rebalanced so **≥20 of the 40 credits are academic**.
3. **A three-year window.** Credits in "conceptual learning with skills on Future Technologies" carry only **3 years'** validity. "Come back later" is not open-ended.

```
6-month training (27 cr, CoE)  ──►  bridge (≥20 academic cr via Loyola,
                                     within 3 years)  ──►  PG Diploma (40 cr)
```

Still worth saying — **the CoE issues no dead-end certificates** — but say it with the mechanism and the deadline attached.

---

## 5. What the library unlocks beyond these two

| SKU | Cut rule | Serves |
|---|---|---|
| **PG Diploma, 1 yr** | Everything | The depth product |
| **Training, 6 mo** | Drop DROPPABLE, compress COMPRESSIBLE, keep PROTECTED | The throughput product |
| **Advanced Practitioner, 3 mo (~340 h)** | PROTECTED only + D2 + a short capstone | Employer-sponsored upskilling of *experienced* technicians. *Renamed and re-scoped so it no longer collides with ITI Tier 1* |
| **Faculty development, 6 wks** | S block + pedagogy wrapper, for **college and ITI teachers** | **TNSDC EOI §10(d) explicitly requires this.** Distinct from train-the-trainer for our own delivery |
| **Semester course, 45 h** | F4 + R2 + a slice of S1 | Naan Mudhalvan-shaped, 2-credit, embedded in a college semester |
| **Short certification, 120 h / 272 h** | R2 + R6 + S1/S3 | **The shapes TNSDC actually buys** — the Delta CoE at Bargur runs exactly 120 h monthly and 272 h quarterly programmes |
| **Executive briefing, 1–2 days** | F4 + S3 + S5, demo-led | Customers, government visitors, MD-level tours |

The 120 h and 272 h SKUs matter more than they look: they are the only durations with a demonstrated TNSDC purchase precedent.

---

## 6. Open decisions (for the MD)

1. **Loyola College — first meeting.** With the Principal and the Head of Computer Science, not with LIBA. LIBA (Jesuit, same campus, AICTE-approved standalone in Management) is the *relationship door*; the award sits at Loyola College. **Ask first:** will the Academic Council approve a 260-hour off-campus specialization block at a BGR Neo facility?
2. **Launch order.** *(Recommend: 6-month engineer training and the ITI tier first; the diploma once Loyola's Academic Council cycle allows.)*
3. **Siting.** Private BGR Neo premises or a government building? **This single answer decides whether the live-cell design survives** — see the Step 8 box.
4. **Cohort sizes** and how many live cells the CoE ring-fences from production work — including **one cell reserved for assessment that no cohort trains on.**
5. **Fee posture per product.** Government-funded, employer-sponsored, or student-paid. *(For the ITI tier this is already closed — see the companion document.)*
6. **Whether to pursue the qualification-sponsorship ask** — asking TNSDC to sponsor a new NSQC qualification with BGR Neo as industry author. Precedent exists: Karnataka Skill Development Corporation did exactly this (NCVET code 2022/CCM/KSDC/05937, 30 June 2022).

---

*Corrections in this revision derive from `curriculum/VALIDATION-REPORT.md`, which carries source URLs and confidence levels for every claim. Hour allocations remain planning estimates. Loyola College's specific approval process, and every regulatory citation above, should be confirmed at source before anything is filed or signed.*
