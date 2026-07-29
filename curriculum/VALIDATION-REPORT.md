# Validation Report — BGR Neo CoE Programme Design

**Date:** 29 July 2026 · **Scope:** `curriculum/syllabus-architecture.md`, `curriculum/annexure-syllabus-and-lab.md`, `curriculum/iti-operator-technician-programme.md`, `presentation/deck-brief.md`
**Basis:** eight research topics plus four adversarial passes, each re-verified against primary sources (DGT, NCVET, UGC, AICTE, IASC, CGSSC, NQR, TN DET, TNSDC).

---

## 1. Bottom line

The programme survives, but the documents describing it do not. The underlying proposition — a post-NTC, uptime-and-recovery qualification delivered on cells that are running paying customer work — is real, unduplicated in any curriculum we could check, and fills a genuine gap between a one-week AVTS module and a two-year Advanced Diploma. Everything wrapped around it is wrong in checkable ways: the wedge sentence is factually false in Tamil Nadu, the named certification route (IASC robotics QP) does not exist, the named vehicle (TNSDC CoE EOI) closed in January 2025 and never covered this sector, and the ITI syllabus omits the PLC instruction that two of its own seven fault domains require.

**The single most important change: rewrite the wedge from "real robot vs no robot" to "production cell vs training cell."** Tamil Nadu has already spent ₹2,877.43 crore putting an Industrial Robotics and Digital Manufacturing Lab into 71 government ITIs, and the people who will read the EOI are the government that paid for it. Everything else in the pitch — differentiation, EOI scoring, the Handover Model, the certification ask — hangs off that one sentence being defensible.

Nothing in §9 of the ITI document and nothing in §4 of the deck brief's SSC claims should be filed as written.

---

## 2. What holds

Honest summary: **the arithmetic, the architecture and the content differentiator survive. The positioning, the certification route and the funding route do not.** Roughly a third of the plan's load-bearing claims were confirmed.

| Claim in the plan | Status | Evidence |
|---|---|---|
| **NCrF: 1 credit = 30 notional hours; 40 credits = 1,200 h = one year** — the ⚠ in `syllabus-architecture.md` Step 2 can be cleared | **VERIFIED** (three independent primary sources) | NCVET SOP for operationalising NCrF in VETS: "on an average 30 notional hours of learning is equal to 1 credit"; UGC AEDP Guidelines §9(i); AICTE AEDP Guidelines §7.2 — https://www.ugc.gov.in/pdfnews/0555282_Final_SOP_for_operationalizing_NCrF-VETS.pdf · https://www.ugc.gov.in/pdfnews/5897104_Guidelines-on-Apprenticeship-Embedded-Degree-Programme-(AEDP).pdf |
| The credit figures (~46 for 1,400 h, ~27 for 820 h) are **arithmetically** correct | **VERIFIED** | 1400/30 = 46.67; 820/30 = 27.33. (They are correct arithmetic against an over-sized envelope — see §3.) |
| **BGR Neo cannot award a PG Diploma itself** | **VERIFIED** — and now with the operative citation, which the plan lacked | AICTE Approval Process Handbook §1.3.4: promoters limited to Society / Trust / Section 8 company / Government; and "Standalone Institutions" (unaffiliated) are limited to Management, Travel & Tourism, Innovation & Entrepreneurship, Computer Applications and Design — Engineering & Technology is excluded — https://cdnbbsr.s3waas.gov.in/s35938b4d054136e5d59ada6ec9c295d7a/uploads/2025/03/2025031399.pdf |
| **The two-tier stackable architecture** (employable exit at the halfway point) is sound design, not a novel risk | **VERIFIED** — it is the international default for this occupation | Germany MaschFüAusbV §2/§10 (2-year Maschinen- und Anlagenführer stacking into a 3.5-year trade, with the Tier-1 exam *legally counting as* Part 1 of the Tier-2 exam); SACA Associate→Specialist; FANUC FCR-O1/O2 → FCR-T1/T2; South Piedmont CC Mechatronics Technician Introduction/Advanced (16 weeks each) — https://www.gesetze-im-internet.de/maschf_ausbv/BJNR064700004.html · https://www.saca.org/smart-automation-certifications/ · https://spcc.edu/programs/mechatronics/ |
| **The uptime / fault-discipline content is genuinely unduplicated** — the Six-Step Fault Loop, the seven fault domains, the authority boundary, time-to-recovery grading, CMMS, condition monitoring, structured escalation | **VERIFIED for the two directly-overlapping DGT trades** (full curricula extracted and grepped); **LIKELY** as a general claim, since proving a negative across a fragmented market is not possible | DGT IRDMT CTS 2.0: zero occurrences of diagnosis, LOTO, CMMS, condition monitoring, vibration, OEE, downtime, handover, root cause, escalation, machine vision. Its entire PM/troubleshooting content is Learning Outcome 23 (NOS CSC/N0901) = 25 practical + 4 theory hours, itemised as welding-consumable and pneumatic-leak housekeeping. DGT MPCA: no robot, vision or gripper content at all — https://dgt.gov.in/sites/default/files/Ind%20Robotics%20_%20Digital%20Mfg%20Tech_CTS2.0_NSQF-3.pdf · https://dgt.gov.in/sites/default/files/2024-01/Mfg%20Process%20Control%20_%20Automation_CTS2.0_NSQF-3.pdf |
| **There is no existing 6-month post-NTC automation-cell route in the Indian system** | **VERIFIED, with one correction** | AVTS = short modular upskilling for *serving* workers (the "1–6 weeks only" framing is slightly overstated — 3-month certificate courses exist at some NSTIs); CITS trains instructors; Advanced Diploma (Vocational) is 2 years; TN's 23 Industry 4.0 short courses do not name ITI passouts as a target group — https://dgt.gov.in/en/AVTS · https://dgt.gov.in/en/CITS · https://dgt.gov.in/en/advanced_diploma · https://skilltrainingdet.in/industry4 |
| **Macro demand comfortably absorbs 60–90 technicians a year** | **VERIFIED** on robots; **LIKELY** on factories | IFR World Robotics 2025 India: 9,120 installations in 2024 (+7%, 6th worldwide), operational stock 52,570 — https://ifr.org/downloads/press_docs/2025-09-25-IFR_press_release_India_in_English.pdf. ASI 2023-24 via MoSPI (PIB page returned 403; multiple consistent secondary reports): TN ~40,121 factories, 15.43% of India, and 15.24% of factory employment |
| **The pre-gate bridge (technical English, digital literacy) is justified, not generosity** | **VERIFIED** | NSDC/ASDC (EY) automotive sector report, verbatim: the workforce "is not adequately prepared to handle a higher degree of automation or greater use of robots… compounded with a lesser threshold of English language capability" — https://www.asdc.org.in/images/reports/pdf/1097810937280524030736.pdf |
| **The colour-vision entry requirement is a legitimate occupational requirement in this trade** | **VERIFIED internationally; UNVERIFIED in Indian law** | Singapore ITE Higher Nitec in Mechatronics Engineering requires candidates "free from colour appreciation deficiency" — https://www.ite.edu.sg/course-finder/higher-nitec-in-mechatronics-engineering/. Indian RPwD / TNSDC inclusion position is unresolved. |
| **TNSDC CoE partner eligibility is a low bar that BGR Neo clears** | **VERIFIED** | TNSDC CoE EOI §7: capability to build the facility, qualified technical experts, minimum 5 years domain and operational experience, an investment plan, 3 years of ITRs with audited accounts — https://www.skillcouncils.com/tenderdoc/Expression-of-Interest-for-Establishing-Centre-of-Excellence.pdf |
| **Mixed funding (government + employer + fee) is permitted, and is scored** | **VERIFIED** | TN PM-SETU RFP §3.5 requires revenue-generation including paid training and industry-paid assessments; KPI target ≥30% non-government revenue; TNSDC Vetri Nichayam has a "No-Cost Partner" category — https://dgt.gov.in/sites/default/files/2026-04/RFP-Tamil-Nadu-Ambattur.pdf |
| **Separate staffing for the two tiers (service technicians, not AI engineers)** | **LIKELY correct, but incomplete** | KUKA College segments "operators and maintenance workers" as a distinct learner class, which validates the job-role thesis. But Germany requires a formal trainer qualification (AEVO) before anyone may train at all, and FANUC/SACA both require instructor certification before delivery — the plan has an experience gate but no *qualification* gate. |

**Where the research was weak, say so plainly:**

- **The plan's founding premise — that Tamil Nadu has a technician shortage rather than an engineer shortage — is UNVERIFIED.** No published study establishes it. The TNSDC/PwC 2019 skill-gap study's horizon expired and the hosted copy 502'd. The only supporting evidence is qualitative (the ASDC/EY sentence above). This is an assertion, not a finding.
- **India's robot density is UNVERIFIED and must not be quoted.** IFR's density release does not include India; public secondary sources disagree by a factor of five. Use installations (9,120) and stock (52,570) instead.
- **The PwC figures** (robotics-intensive sectors employ ~20% more engineers but nearly 2× the maintenance workers) reached the research through search snippets; pwc.com returned 403. **LIKELY, not verified** — someone must open the page before it goes in a deck.
- **The legal questions were not researched at all** (search budget exhausted): Factories Act worker status, ESI, insurer position, and Tamil Nadu electrical licensing. These are unquantified, not cleared.

---

## 3. What must change

Ranked by severity. Each: *what the plan says* → *what is true* → *what to do* → *where*.

---

### 3.1 The wedge is factually false — CRITICAL
**Plan says** (`deck-brief.md` §3, slide 7): *"Anyone can teach AI on a laptop. Almost nobody can put a fresh grad in front of a real industrial robot and a real factory integration project."*

**Actually true (VERIFIED):** Tamil Nadu's Directorate of Employment & Training states it converted **71 government ITIs into Industry 4.0 Technology Centres at ₹2,877.43 crore** with Tata Technologies, each 10,500 sq ft with 8 labs including an *Industrial Robotics and Digital Manufacturing Lab* and a *Manufacturing Process Control & Automation Lab*; 7,672 Industry 4.0 seats, 6,641 admitted, 24,923 short-term trainees to January 2026 (https://skilltrainingdet.in/industry4). Add Delta Electronics' TNSDC CoE in Robotics & PLC Automation at College of Engineering Bargur (inaugurated 5 March 2026, advertising "a smart screwdriver assembly cell that closely replicates live industrial environments"), FANUC's CoE at KCG College Chennai (from June 2026, ~500 students + 50 faculty/yr), KUKA at Chennai Institute of Technology, Siemens t-SDIs plus an Anna University CoE **co-funded by TNSDC itself** (₹546.84 cr, TNSDC share ₹54.68 cr), and TANSAM (Siemens/TIDCO, Tidel Park, 2022).

**Change:** Delete the sentence. Replace with **production cell vs training cell**: those 71 labs and every OEM CoE have no customer, no order book, no acceptance test and no consequence for downtime. BGR Neo's cells do. Add the second, uncopyable claim an OEM structurally cannot make: **multi-vendor cells** (FANUC + ABB + KUKA + UR in one room — module R2 already specifies this) and integration across PLC/vision/safety/fieldbus that no single OEM owns.

**File:** `presentation/deck-brief.md` §3 (line ~56), slide 7; echoed in `iti-operator-technician-programme.md` §1.

**Also delete** (`iti…` §1): *"BGR Neo is the only kind of organisation that can fix this, because BGR Neo is the one doing the handovers."* Falsified by the **Karnataka Skill Development Corporation**, which authored an NSQC-approved robot-operator qualification for ITI passouts without being an integrator (NCVET code 2022/CCM/KSDC/05937, approved 20th NSQC, 30 June 2022), and by **Kaustya Robotics** (Pune) and **IRATI / WO Group** (Pune) — two system integrators already running robotics academies that accept ITI graduates. Replace with *"first in Tamil Nadu, and structured differently."*

---

### 3.2 The certification route named in the plan does not exist — CRITICAL
**Plan says** (`iti…` §9): certification is an *"NSQF-aligned SSC certificate"* via IASC, with a ⚠ note framing the choice as "IASC vs Capital Goods & Strategic Skill Council." `deck-brief.md` §4 says IASC *"covers industrial robotics (operating & programming manufacturing robots)"* and §7 claims mapping to *"higher NSQF levels (5–8) via IASC SSC QPs."*

**Actually true (VERIFIED at source, twice):**
- IASC's complete published catalogue is **16 QPs with no robot operator, robot technician or robot programmer role**. Its only robotics artefact is a **standalone NOS**, IAS/N3009 "Introduction of Industrial Robotics" (NSQF 4, 60 h, published Aug 2025) — which is not a certifiable job role (https://iascsectorskillcouncil.in/qualification-packs/).
- IASC's **under-industry-validation** list (14 more QPs) also contains no robotics role. So this is not about to be fixed.
- IASC's **highest published QPs are NSQF 5** (IAS/Q8005, IAS/Q3006) — the "5–8" claim is wrong.
- **CGSSC is not the alternative.** All 24 CGSSC "Future Skills" QPs sit at **NSQF 5.5–6.0** with degree entry; CSC/Q0505 sets a **minimum job entry age of 24** (https://cgssc.org/future-skills/). CGSSC is structurally closed to fresh ITI passouts. The §9 choice is a false choice.
- **New finding, not in the research summaries:** IASC's approved and pipeline lists use **colliding QP codes** — IAS/Q5601, Q5602, Q5603, Q5604, Q3001, Q8003 and Q8004 each denote two different job roles. **No QP code taken from IASC's website is safe to file** without written confirmation. Both IAS/Q5601 and IAS/Q8005 also show *Next Review Date 25/06/2025* — lapsed.

**Change:** see §5 below for the decided replacement route. Delete the IASC robotics claims from the deck before it goes to the MD, not just before the EOI.

**Files:** `iti…` §9; `deck-brief.md` §4 (line ~69) and §7 (line ~111); `syllabus-architecture.md` Step 2, Step 3 (module card `QP-NOS mapping` field) and Step 4 (`QP mapping` axis) — the two-SSC model is hard-coded into every module card and must admit CGSSC, NIELIT and DGT.

---

### 3.3 The ITI syllabus does not teach PLC — and two of its own seven fault domains are therefore untaught — CRITICAL
**Plan says** (`iti…` §3a): every cell is the same seven things; domain 4 is **BRAIN** (PLC, robot controller, HMI) and domain 5 is **NERVES** (I/O, fieldbus, network); the technician is portable because he knows all seven.

**Actually true:** "PLC" appears exactly three times in the document (lines 57, 73, 103) — the fault-domain table, the portability table, and the RED authority list. **No module teaches a trainee to read a rung, open the programming software in monitor mode, cross-reference an alarm to logic, read a forced I/O bit, or read a fieldbus diagnostic page.** O6 (60 h) teaches sensor types and "I/O status screens"; M2 (70 h) teaches panel *hardware*. Neither is PLC literacy. The result is a trainee told "never alter safety-PLC logic, never change PLC production logic" who was never taught to *read* one. The portability promise — the thing the tier is sold on — is 5/7 delivered. For scale: DGT's MPCA trade, running at 44 TN ITIs, spends ~1,200 hours almost entirely on PLC/HMI/SCADA.

**Change:** Add **M8 — PLC & Control Logic Literacy (read-only), 60 h, Tier 2, `PROTECTED`**. Explicitly monitor-mode only, which reinforces rather than weakens the RED boundary. **File:** `iti…` §6, §7 timeline, §10 lab delta.

---

### 3.4 A compulsory NOS is missing from the ITI tier — HIGH
**Plan says:** 760 h across 14 modules, none of them employability.

**Actually true (VERIFIED by extracting the QP and the CTS curriculum):** IAS/Q5601 v3.0 has exactly four compulsory NOS, one of which is **DGT/VSQ/N0102 Employability Skills, 60 hours, 2 credits**. DGT's CTS trades allocate **120 h** of Employability Skills, "common for all CTS trades." Any NSQF certificate BGR Neo pursues will mandate this.

**Change:** Add 60 h of Employability Skills mapped to DGT/VSQ/N0102, delivered as a separate common block outside the 760 trade hours (as DGT does), 30 h per tier. Restate as "760 h trade content + 60 h DGT/VSQ/N0102." **File:** `iti…` §6. Also map the engineer tier's C2 to the same NOS (`annexure-syllabus-and-lab.md` §1.6) — it currently has no NOS mapping at all.

---

### 3.5 The NSQF level claims are wrong, and the fix proposed by the researchers also fails — HIGH
**Plan says** (`iti…` §5): Tier 1 = 380 h ≈ NSQF 4; Tier 2 = 380 h ≈ NSQF 5; Tier 3 add-on ≈ NSQF 5.

**Actually true (VERIFIED against the NSQF Level Descriptors table in NCVET's SOP, pp. 35–36 — the authoritative instrument none of the research topics used):**
- **Level 4** entry: "10th grade pass with two years of any combination of NTC/NAC/CITS", *no experience required*; notional-hours band **390–480**. → **Tier 1 at 380 h is 10 hours below the Level 4 floor.**
- **Level 4.5** requires the same holder plus **1 year experience**; band 450–510.
- **Level 5** requires an NSQF-4 holder plus **3 years experience**, or 10th pass plus 4 years; the *only* no-experience route is **"12th pass with 2-year NTC/NAC/CITS."** Band 480–570. → **Tier 2 at ~Level 5 is structurally barred for the declared flagship audience** (fresh 10th-entry ITI passout, zero experience).
- The proposed fix — "make the cumulative 760 h the Level 5 award" — **does not work**: the binding constraint is entry and experience, not hours, and 760 h exceeds the Level 5 band anyway. **760 h fits no NSQF short-term band from Level 4 through Level 6.5 (top ≈690 h) and sits far below the 1,200 h long-term norm. The single 760-hour award is framework-homeless.**
- A fresh 2-year-trade ITI passout **already holds NSQF Level 4** (VERIFIED on DGT CTS curricula for Technician Mechatronics, Electronics Mechanic, Turner). Tier 1 at "~Level 4" is lateral for the flagship audience.
- NCVET also states qualifications should be "in the multiple of 30hrs or 15 hours." **380, 760, 820 and 1,400 all violate this.**
- **No NSQF-5 robot-programming qualification exists that a technician can enter** — CGSSC's are 5.5 with degree entry and age 24; NIELIT's is Level 4. The Tier 3 level claim must drop.

**Change:** Restructure as **two separately certified NSQF Level 4 awards of 390–420 h each** (390 h = 13 credits exactly, on the Level 4 floor, a multiple of 30, and inside PMKVY's 300–600 h STT band). Add a **12th-pass + 2-year-NTC entry band** to §4 and reserve any Level 5 claim exclusively for it. Sell Tier 1 as *"same level, scarcer competence"* — an Electrician NTC at Level 4 and a cell technician at Level 4 are not interchangeable in a plant, and that is honest.

**File:** `iti…` §4 and §5.

---

### 3.6 The vehicle: the TNSDC CoE EOI is not open and never covered this sector — HIGH
**Plan says** (`deck-brief.md` §3): Model C is recommended because *"it is winnable via a mechanism that already exists."*

**Actually true (VERIFIED, checked live):** The only published TNSDC CoE EOI is *"Establishing Centre of Excellence in IT/ITES, AVGC and ESDM"* — §4 names exactly three sectors, none of them robotics, automation or manufacturing. Issued 24-12-2024, closed **11 January 2025**. The TNSDC notice board today carries DDU-GKY 2.0 (May/June 2026), Sectoral Committees under TN Skill International (March 2026), Vetri Nichayam training partners (July 2025) and Assessment Agency empanelment (May 2025) — **no CoE EOI**. Meanwhile the one robotics CoE TNSDC has was awarded **by direct MoU with CSR funding** (Delta, July 2025 MoU, March 2026 inauguration, implemented through TN AutoSkills).

Three further binding terms in that EOI that the plan does not absorb:
- **§12(1): "TNSDC shall provide physical space required for setting up the CoE in any of the government institutions or building."** The CoE is not on BGR Neo's floor. This is in direct conflict with the wedge and makes the Handover Model unworkable as designed. The capex logic also inverts: TNSDC supplies floor space, furniture, workstation PCs and connectivity; the partner supplies robots. `deck-brief.md` §7's *"BGR Neo is mostly buying computers, not robots"* becomes exactly backwards.
- **§12(2):** per-trainee rates "decided on case-to-case basis by the selection committee" — no published rate card, against products 3–10× longer than the 120 h / 272 h programmes TNSDC actually buys from Delta.
- **§10(d):** placement or internship for **at least 70%** of successful completers, reviewed quarterly, terminable for poor placement; and courses in three categories, one being **"capacity building for teaching faculties."** Neither curriculum document commits to a placement rate, and neither has a faculty-development product (the train-the-trainer SKU in `syllabus-architecture.md` §5 is for scaling BGR Neo's own delivery, which does not satisfy this).

**Change:** Stop presenting the EOI as an open door. Replace the single Model C recommendation with a **two-door plan**: (a) near-term **Vetri Nichayam** empanelment under the Establishments/Factories or Green Channel category; (b) a **direct MoU** on the Delta/TN AutoSkills template. Add **PM-SETU** — entirely absent from the plan — as a consortium-member play, and add the **§9(b) Knowledge Partner** slot as the way to bring the academic partner into the same bid rather than courting them separately.

**File:** `deck-brief.md` §3 (line ~54), §4, §7.

---

### 3.7 The Handover Model does not survive its own timeline — HIGH
**Plan says** (`iti…` §8): *"the structural idea that makes the whole thing work, and no competing applicant can copy it"*; two shifts on the same cell, weeks 13–24; shift handover becomes *"something they do 120 times."*

**Actually true, from the documents themselves:**
1. **Three contradictory live-cell windows.** §7's table puts weeks 13–18 on "Trainer cells + benches" and **LIVE CELLS only at weeks 19–24**; §7's prose says "from week 13"; §8's diagram shows weeks 13–24. Against the engineer live-cell window (weeks 14–25, `syllabus-architecture.md` §3 / annexure §2.2), the true overlap under §7's table is **6 weeks, not 12** — the headline benefit is halved.
2. **"120 times" is arithmetically impossible.** 120 daily handovers = 120 working days = 24 weeks. At 6 live-cell weeks it is ~30; even on §8's own 12-week claim it is 60. Overstated 2–4×.
3. **A cell under integration cannot be handed to production daily.** Block S3 (60 h, LIVE CELL) is PLC↔robot↔vision↔safety integration and S2 is offline reprogramming; on those days the cell is by definition not in a validated safe state, yet §8 requires it "be left in a safe, documented, run-able state at every handover." Mutually exclusive — and BGR Neo's own commissioning engineers will say so in the room.
4. **Safety re-validation is uncosted.** The plan's own F4 cites ISO 10218 / ISO-TS 15066, which require validation of safety functions after modification. §11 staffs one safety officer, shared with the engineer programme.
5. **It breaks the flagship exam.** §9's Tier 2 assessment is "an unseen cell with three seeded faults," but the annexure specifies **one live cell hall (Qty 1)** holding one industrial 6-axis robot and one arc-welding robot — all consumed by the Handover Model. §8 and §9 cannot both be satisfied with the specified hardware.
6. **Capacity is over-committed threefold.** `syllabus-architecture.md` Step 8 already spends the 3–4× block-booking multiplier to fit *two* cohorts on one cell. The ITI tier adds a third cohort of 30. Concretely: 6 teams of 5 needing 190 h of LIVE CELLS in weeks 19–24, across two cells, gives each team ~63 h — roughly **127 of the 190 nominal live-cell hours are not on a live cell**.
7. **Two external blockers appear nowhere in the plan:** siting (see 3.6) and **liability** — trainees operating cells running paying customer work under a contractual acceptance test requires written customer consent, insurer sign-off, and an answer on trainee status on a registered factory floor. **UNVERIFIED — not researched.**

**Change:** Keep the pedagogy, change the mechanics. **Milestone-gated handovers** (at FAT / SAT / production-ramp boundaries, not daily), on a **ring-fenced training cell** rather than a customer-acceptance cell, with a **separate cell reserved unseen for assessment**. Correct the handover count. Resolve the three live-cell windows to one number.

**File:** `iti…` §7, §8, §9; `syllabus-architecture.md` Step 8; `annexure-syllabus-and-lab.md` §2.3, §2.4, §3.3.

---

### 3.8 The PG Diploma is not an approvable programme shape — HIGH
**Plan says** (`syllabus-architecture.md` §2/§3, annexure §1.1): PG Diploma, 1 year, 1,400 h, ~46 credits.

**Actually true (VERIFIED):**
- **AICTE APH §8.3:** Post Graduate Diploma in Engineering and Technology = **2 years**. The 1-year post-graduate engineering award in AICTE's norms is a **Post Graduate Certificate**. There is no 1-year standalone PG Diploma row for Engineering & Technology.
- **UGC CCFPG Table 1:** P.G. Diploma = **40 credits** (= 1,200 h at 30 h/credit). The plan is ~17% over on both hours and credits. UGC also permits **exactly one exit point** in a 2-year PG.
- **AICTE Annexure-11 §11.5(A):** the PG Diploma nomenclature list is a **closed list of 12 names** — no robotics, AI, automation or mechatronics. But **§11.6 (PG Degree) already approves "Industrial Automation and Robotics", "Automation and Robotics", "Mechatronics", "Artificial Intelligence"**, and **§11.5(B) already approves "Artificial Intelligence and Data Science" as a 1-year PG Certificate.**
- **§6.7(a):** a new nomenclature needs AICTE prior concurrence, must be submitted **by the institution with the affiliating University Registrar's endorsement**, before **30 November** each year. BGR Neo cannot initiate it, and the academic partner must therefore be signed **before** filing — which reverses `syllabus-architecture.md` §6 open decision 1 ("Recommend: after").
- **ABC:** only NCVET-recognised Awarding Bodies can register on ABC and deposit credits; a training provider operates "through the Awarding Body." The `§4` promise that "credits accumulate in the Academic Bank of Credits" is not something BGR Neo can deliver alone.
- **50% cap:** no more than half a UG/PG award's credits may come from skill-based qualifications (NCVET VETS SOP §7.1.1). The proposed 27 cr training + 19 cr bridge = 46 cr ladder puts skill credits at ~59%.
- **Credit validity:** "conceptual learning with skills on Future Technologies" carries **only 3 years'** validity. The "come back and top up later" promise has a three-year window, not an indefinite one.

**Change:** Restructure the flagship as a **2-year M.E./M.Tech under an already-approved nomenclature ("Industrial Automation and Robotics"), with the PG Diploma taken as the year-1 exit** (AICTE NCrF table rows 8–9: PG Diploma at 6.5 → M.Tech at 7.0). One approval, both products, no nomenclature filing, no 30-November risk. Reduce the diploma year to 1,200 h / 40 credits. Rebalance the bridge so ≥23 of 46 credits are academic. Route the partner through **deemed/private universities** (the live template is **L&T EduTech + VIT Chennai**, M.Tech AI/ML from AY 2024-25) rather than the Anna-affiliated system, whose Board of Studies cycle is slower.

**File:** `syllabus-architecture.md` Step 2, §2 Totals, §3, §4, §6; `annexure-syllabus-and-lab.md` §1.1.

---

### 3.9 The entry-trade list contains a trade that does not exist in Tamil Nadu — MEDIUM-HIGH but cheap to fix, and expensive to be caught on
**Plan says** (`iti…` §4): direct fit = Electrician · Electronics Mechanic · Instrument Mechanic · Fitter · Mechanic (Machine Tool Maintenance) · Mechatronics · **Millwright**.

**Actually true (VERIFIED against TN DET's List of Trades, 104 trades):** **No Millwright trade exists in Tamil Nadu.** Counts: Electrician 303 ITIs, Fitter 271, Welder 150, Machinist 40, Turner 39, Electronics Mechanic 29, COPA 54, Instrument Mechanic 12, Technician Mechatronics 10, **Mechanic Machine Tool Maintenance 3**, Industrial Robotics & Digital Manufacturing Technician **0**. The **Manufacturing Process Control and Automation Technician** trade runs at **44 TN ITIs** (~880 seats/yr) and owns the BRAIN and NERVES domains — the single best-qualified feeder in the state, and it is not on the list.

**Consequence the document has not absorbed:** the realistic intake is Electrician + Fitter across 574 ITIs, **neither of which teaches PLC, sensors, robots or automation**. The 60-hour pre-gate bridge (technical English, digital literacy, shop maths) is sized for trainees who already have automation exposure. It is under-scoped.

**Change:** Delete Millwright. Demote Mechanic (Machine Tool Maintenance) and Technician Mechatronics out of the headline band. Add MPCA as the priority feeder and IRDMT with the honest note that it runs at 0 TN ITIs today. Either grow the bridge, run two entry streams with different bridges, or absorb an automation primer into Tier 1's opening weeks. **File:** `iti…` §4.

---

### 3.10 The tier-role and volume arguments contradict each other and the state's baseline — MEDIUM
**Plan says:** `iti…` §1.2 — "This tier is where the numbers come from… the technician tier gives it its **placement statistics**." `syllabus-architecture.md` §3 — the 6-month **engineer** training is "**The engine** — volume, throughput, placement numbers, revenue." Both cohorts are 30 in year 1.

**Actually true:** Both cannot be the volume play. And against TN's own baseline (6,641 Industry 4.0 admissions, 24,923 short-term trainees to Jan 2026), 30–90/year is **0.1–0.4%** — a rounding error. It is also backwards on economics: §7 concedes the ITI tier is "hardware-hungry from week 3" and bounded by live cells, while the engineer tier is simulation-first and scales cheaply.

**The counter-finding that saves it:** TN DET's Industry 4.0 page publishes **intake numbers and no placement figures whatsoever**. That is the opening. Reframe §1.2 from *"where the numbers come from"* to *"where the verified outcomes come from"* — audited placement **and** 6-month retention **and** time-to-recovery, against a state programme that reports only admissions. **File:** `iti…` §1.2, §13.1; `syllabus-architecture.md` §3.

---

### 3.11 Two "open decisions" are already closed by evidence — MEDIUM
- **Fee posture** (`iti…` §13.5, `syllabus-architecture.md` §6.5): ITI automation freshers in Chennai earn **₹12,000–18,000/month**, rising to ₹18,000–22,000 with real PLC/fault-finding exposure (Indeed, apna.co, aggregator salary data — **LIKELY**, job-board evidence). A 6-month, 760-hour course cannot be trainee-funded at those wages against ~₹72,000–90,000 of foregone earnings. **Mark it government- or employer-funded.** The only live question is which channel.
- **NAPS** (`iti…` §13.4): **NAPS-2 §4.4 states plainly that no reimbursement of basic training cost is provided**, for either Designated or Optional Trades; support is 25% of stipend capped at ₹1,500/month **paid to the apprentice** — a maximum of ~₹9,000 over six months, and nothing to the trainer (https://naps-cdn.s3.ap-south-1.amazonaws.com/NAPS+2.0_Guidelines_25-08-2023.pdf). **NAPS is an employment wrapper, not a funding route.** Its real value: the Optional Trade is legally available at 6 months post-ITI, it lets the trainee earn during training (solving the problem §5 uses to justify the 3-month exit), and it subsidises customers absorbing BGR Neo-trained technicians.

**Two new decisions must be added:** (7) written customer consent for trainees to operate cells under a live acceptance test; (8) insurer and legal sign-off on trainee status and liability on a registered factory floor.

---

### 3.12 Missing content and named standards — MEDIUM
Verified absent from both syllabi by grep:
- **Hydraulics — zero occurrences**, yet "machine tending" is a named target role and press / injection-moulding / machine-tool tending is hydraulic. The UK Mechatronics Maintenance Technician standard (ST1326) names fluid power as one of five core disciplines.
- **Metrology — zero.** §2 states the technician is "measured on… first-pass yield," but nothing teaches gauging, go/no-go or reading an SPC chart; the only measurement kit in §10 is feeler gauges.
- **Environment / sustainability — zero.** DGT names "environment regulation" as a learning outcome common to all trades; SSC/Q8113 carries SSC/N9014.
- **Named safety standards in O1 — zero.** O1 is 60 h and `PROTECTED` but cites no standard, while the engineer tier's F4 cites ISO 10218 and ISO/TS 15066. Add IEC 60204-1 (the source of "E-stop categories" already referenced), ISO 13855 (minimum distance for the light curtains taught), IEC 61496, ISO 13849-1 / IEC 62061. **Verify the current edition before printing — see §6.**

**One free credibility win the plan is leaving on the table:** Japan **legally mandates** industrial-robot special education — minimum **10 hours** for teaching work and **13 hours** for inspection work (Industrial Safety and Health Act Art. 59; Ordinance Art. 36 items 31–32). BGR Neo's O1 is 60 h, PROTECTED, must-pass, with automatic fail for bypassing a safety device — **6× Japan's statutory floor**. Neither document says so. It converts an unverifiable posture into a benchmarked fact, and it hands BGR Neo a policy ask: India has no equivalent statutory requirement, and a state-backed CoE could propose becoming the body that certifies to one.

**Also unnamed but standard:** the green/amber/red authority boundary maps almost exactly onto **AFNOR NF X 60-010 maintenance Levels 1 / 2 / 3–5** (carried into NF X 60-000:2016), and M1 is **TPM's Jishu Hozen** (seven-step autonomous maintenance) without naming it. Printing the mapping costs nothing and makes the graduate legible to the French-, German-, Japanese- and Korean-parented plants that dominate Tamil Nadu automation. As written the technician is portable across *cells* but not across *maintenance management systems*.

---

### 3.13 Engineer-tier internal defects — MEDIUM
- **D3 is tagged `DROPPABLE` yet retained at 20 h in the 6-month**, directly violating the Step-5 cut rule ("Drop DROPPABLE"). Retag or set to 0 (total becomes 800 h).
- **The "all types of AI" breadth claim rests on two modules that do not exist** — the agentic-AI elective and the simulation/digital-twin depth elective have no card, no hours, no cut-priority, no delivery mode and no lab line. Block D's 300 h only reconciles if every student picks exactly D3+D4, i.e. *neither* unnamed elective.
- **The six-station rotation is not schedulable.** Six teams round-robinning six stations needs equal dwell (260/6 = 43.3 h), but S modules are 50/50/60/40/30/30. Rebalance to ~43 h each, or merge S5+S6 and run five stations at 52 h.
- **PLC appears in the engineer tier only inside S3**, where 60 h must cover PLC programming + four fieldbuses + HMI/SCADA design + safety circuit design and validation — while Group F of the annexure buys PLC trainer kits at 1:5 that no module has hours to use. Industrial cells run vendor stacks and PLCs, not ROS 2; the current weighting contradicts the training tier's own exit claim.
- **Group F is double-booked.** It is sized for one cohort of 30; the Handover Model runs two cohorts concurrently, and adding M8 makes this binding.
- **The "Intensive, 3 mo" SKU (~380 h) is numerically identical to ITI Tier 1 (380 h)** with overlapping names and different audiences. Differentiate hours or names.
- **The CGSSC/NASSCOM age gate:** CSC/Q0505 and SSC/Q8113 both set **minimum job entry age 24**. A 6-month cohort of fresh graduates finishing at 22–23 cannot be certified against either. `syllabus-architecture.md` §3's "NSQF/QP certificate" for the engineer training product is not deliverable as written.
- **NCVET Adoption Guidelines (22 Feb 2022) forbid altering an adopted qualification's eligibility, level, mandatory NOS, learning outcomes or equipment.** The seven fault domains, the Fault Loop and the authority boundary **cannot be written into a QP**. The QP route is rigid exactly where the wedge lives. Two legitimate routes: wrap a QP as the assessed floor and surround it with CoE content (pilot), or sponsor a new qualification through NSQC (year 2).

---

### 3.14 Capex line that will be challenged — LOW-MEDIUM
The **truck loading/unloading mock-up** (dock-height platform, telescopic roller conveyor, trailer mock section, MEDIUM cost) is the most challengeable line in the annexure. India's truck-loading installed base is **telescopic conveyors, not robots** (Synergy Automatics, Blue Star E&E, Atmos); robotic trailer unloading is a 2025-26 global product category with no evidenced TN installed base to place graduates against. Teach dock discipline within O5 on the palletizing rig; defer the mock-up until a customer asks.

Related: IFR's verified 2024 India composition is **45% automotive** (4,070 units), 600 plastics/chemicals, 420 metal. The flagship applications (palletizing, depalletizing, truck load/unload) are **not** where India's robots are going. Palletizing survives on end-of-line FMCG/food/cement grounds; machine tending and automotive assembly should be weighted up.

---

### 3.15 Naming and market visibility — LOW-MEDIUM
- **"Automation Cell Operator-Technician" reads as a robotics course** and invites the duplication question on page one. The unduplicated content is uptime discipline. Retitle around uptime / reliability / recovery.
- **The title is also commercially invisible.** TN job boards carry ~300 live postings for "PLC / automation maintenance" against ~15 for anything labelled robotics/automation in Chennai (**LIKELY** — job-board evidence). Carry the market-facing term on the certificate alongside the competency title, or graduates will not surface in recruiter filters.
- **"Certified operators included"** (§1.3, §12) needs a precision edit: operator training bundled with commissioning is **already standard after-sales practice** for Indian integrators. The differentiator is the word *certified*, not *included*. Rewrite as: everyone bundles a week of familiarisation; BGR Neo bundles an NSQF-certified technician assessed on time-to-recovery, with a recertification cycle.

---

## 4. Competitive landscape

**The space is crowded, and it is crowded specifically in Tamil Nadu.** Say this plainly in the deck — showing you know the state's portfolio reads far better than appearing unaware of it.

**Government supply — the biggest problem and the biggest partnership target**
- **TN DET + Tata Technologies, 71 Industry 4.0 ITI Technology Centres** — ₹2,877.43 cr (DET) / ₹2,204 cr (Tata Technologies' own figure — the discrepancy is unresolved), 10,500 sq ft and 8 labs each including Industrial Robotics and Digital Manufacturing, 5 new NCVT-affiliated trades from 06.05.2024, 23 short-term courses, 7,672 Industry 4.0 seats. **VERIFIED.** Counterparty is DET, **not TNSDC** — `iti…` §13 aims at the wrong department for anything ITI-shaped.
- **DGT CTS trades:** *Industrial Robotics & Digital Manufacturing Technician* (1,200 h + 150 h OJT, entry 10th, mandating two 6-axis robots and a fenced cell — **0 TN ITIs today**) and *Manufacturing Process Control and Automation Technician* (**44 TN ITIs**). **VERIFIED.**
- **NSTI Chennai — National Centre of Excellence for Skilling in Advanced Manufacturing**, under PM-SETU Component II, with a **signed MoU with Singapore** and Lead Industry Partner onboarding under way. **VERIFIED (PIB).** A Singapore-backed advanced-manufacturing NCoE is being built in the same city.
- **PM-SETU** — ₹60,000 cr, Cabinet-approved 07.05.2025; TN issued RFP No. 1171/AT1/2026 for an Anchor Industry Partner at a **₹240 cr Chennai cluster (Hub: Govt ITI Ambattur; Spokes: Chengalpet, Perumbakkam, Vellore, Ranipet; focus sectors Manufacturing / Automobile / Aerospace / IT)**, closed 05.05.2026. **VERIFIED.** Absent from the plan entirely.

**Direct CoE competitors in Tamil Nadu**
- **Delta Electronics India + TNSDC**, CoE in Robotics & PLC Automation, College of Engineering Bargur, inaugurated 5 March 2026, implemented by **TN AutoSkills**, CSR-funded via direct MoU (July 2025). 120 h monthly and 272 h quarterly programmes, batches of 20–25, 70% placement assurance. **VERIFIED.** The named slot is occupied, and Delta's marketing already uses "replicates live industrial environments."
- **TANSAM** (Siemens + TN Govt + TIDCO, Tidel Park, Nov 2022) — 16,700 sq ft, digital twin, simulation, APM, AR/VR; 16,000+ students and 700 professors in year one. **VERIFIED.** Owns the digital-twin/simulation half of Block S (S2, A16). **Complement, not rival** — it is simulation-heavy and cell-light. The TNSDC EOI's *Knowledge Partner* class exists for exactly this.
- **Siemens + Design Tech + TN Govt** — CoE at MIT Campus Anna University plus **5 t-SDIs**, ₹546.84 cr with a **₹54.68 cr TNSDC contribution**, explicitly open to ITI students. **VERIFIED.** TNSDC has written this cheque before.
- **FANUC India + KCG College of Technology**, Chennai — MoU 20 March 2026, programme from June 2026, ~500 students + 50 internal faculty + 35 external annually, ~10 modules, dedicated CoE on campus. **VERIFIED.**
- **KUKA Center for Industrial Robotics, Chennai Institute of Technology** — **LIKELY** (CIT's own page 403'd; partnership listed elsewhere).
- **FANUC and Yaskawa academies** with Chennai centres; ABB, Rockwell, Schneider present. **VERIFIED.**

**Integrators who already train — the exclusivity claim is dead**
- **Kaustya Robotics** (Pimpri Chinchwad, Pune) — integrator running a robotics CoE explicitly serving **ITI graduates**, multi-vendor (FANUC/Yaskawa/Kawasaki/ABB/KUKA/UR/Epson), 2-day to 24-month courses, placement assistance. **VERIFIED.**
- **IRATI / WO Group** (Dapodi, Pune) — integrator division running role-segmented courses including *Robotics Programming Training for Operators*. **VERIFIED.**
- Neither operates in Tamil Nadu; neither runs a government-partnered CoE; both are programming-led, not uptime-led.

**Qualification owners already in this space**
- **NIELIT** — *Robotic Programming and Maintenance Technician*, NQR 2022/EHW/NIELIT/06116, NSQF 4, 450 h. **VERIFIED** — but its composition is **219 h Robot Software and Programming vs 17 h Robot Maintenance & Safety**. It is a programming qualification wearing a maintenance label.
- **KSDC** — *Jr. Robot Operator and Programmer – Arc Welding*, 2022/CCM/KSDC/05937, NSQF 3, 390 h, entry "8th + ITI (2 years)", approved 20th NSQC 30 June 2022. **VERIFIED.** A peer state skill corporation authored a robot-operator qualification for ITI passouts — this is the template for BGR Neo's real ask.
- **ESSCI** ELE/Q7203 (NSQF 3, scoped to desktop arms and rovers — not the right home); **ASDC** ASC/Q8303 (NSQF 5, automotive R&D, 4 years' experience on the 10th-pass route — but its NOS **ASC/N8306 "Selection, Installation, Commissioning and Maintenance of Industrial Robot"** is the best-worded NOS found anywhere for BGR Neo's actual work); **NTTF** — an NCVET-recognised Awarding Body whose *Senior Technician – Mechatronics & Smart Factory Engineering* (QG-4.5-CG-01034-2023-V1-NTTF, 46 credits, 1,380 h) is both a competitor signal and proof that a private industry foundation can own an NSQF qualification. **All VERIFIED.**
- **Tata IIS** routes ITI graduates to welding, CNC and EV, and reserves *Robotics & Automation for Smart Factories* for **engineering graduates**. **VERIFIED** — the single best piece of supporting evidence that the fresh-ITI-to-robotics pathway is genuinely thin. (Prepare for the counter: Tata IIS may be right, which makes the entry gate and pre-gate bridge the evidence that BGR Neo solved what they routed around.)
- **MSME Technology Centres / Indo-German Tool Rooms** run mechatronics and robotics training but **none was found in Tamil Nadu** — **LIKELY**, needs a call to MSME-DI Chennai. A real MSME-facing opening.

**What genuinely differentiates BGR Neo, after all of the above:**
1. **A live customer integration project** with a paying customer, an acceptance test, a real handover and a consequence for downtime — which neither a college lab, an OEM CoE nor a state training centre has.
2. **Uptime as the job definition.** No programme found anywhere in India is structured around a whole-cell fault taxonomy, a drilled diagnostic loop, seeded-fault assessment on an unseen cell, an explicit authority boundary, or **time-to-recovery as a graded outcome**. (**LIKELY** — a negative claim across a fragmented market. Commission a competitor-syllabus pull from DET TN and two OEM academies to convert it.)
3. **Multi-vendor cells** — structurally impossible for an OEM, which only sells its own robots.
4. **Post-NTC conversion of already-qualified Electrician/Fitter passouts** — a population Tata IIS explicitly routes away from automation.

**What is NOT a differentiator, and must be deleted from the deck:** real robots; "first-mover access" (slide 13 — TANSAM 2022, the 71 ITIs from Aug 2023, Delta March 2026 and FANUC/KCG March 2026 all pre-date any application); "only kind of organisation"; "certified operators included" as bundling rather than certification.

---

## 5. Certification & funding — the decided route

### ITI technician tier

**Recommended: a composite award, stated honestly, on two Level-4 rungs.**

| Component | Code | Level | Hours | Status |
|---|---|---|---|---|
| Assessed spine | **IAS/Q5601 Industrial Automation Technician** (IASC) | NSQF 4 | 450 notional (13 cr) | **VERIFIED.** The only automation QP whose entry criteria name "10th grade pass plus 1-year NTC/NAC"; min job entry age 18. **Limits to state openly:** one technical NOS only (**IAS/N5605 Install and Commission Control**) — install/commission scope, not operate-and-maintain — covering roughly a third of Tier 1. NQR shows v3.0; IASC's site shows v4.0. Next Review Date 25/06/2025 has lapsed. |
| Robotics unit | **IAS/N3009 Introduction of Industrial Robotics** (IASC) | NSQF 4 | 60 h (2 cr) | **VERIFIED.** A standalone NOS, not a job role. Good match for module O4; must be bolted onto a QP or carried as a micro-credential. |
| Compulsory | **DGT/VSQ/N0102 Employability Skills** | — | 60 h (2 cr) | **VERIFIED** as a compulsory NOS inside IAS/Q5601. |
| Wrapper | **BGR Neo CoE certificate** | — | balance | Carries the seven domains, Fault Loop, authority boundary — which **cannot** be inserted into a QP (NCVET Adoption Guidelines, 22 Feb 2022). |
| Optional overlay | FANUC FCR-O1/O2 (Tier 1), FCR-T1/T2 (Tier 2) | — | FANUC recommends ≥80 h | **VERIFIED.** Deliverable inside O4 (60 h) + O7 (40 h). Neutralises FANUC as a rival. |

**Explicitly excluded, with reasons:**
- **IAS/Q8005 Industrial Automation Specialist (NSQF 5)** — **VERIFIED: minimum job entry age 21 AND "10th + 2-year NTC/NAC with 1 year of experience."** A fresh passout finishing the continuous 760 h at 18–20 fails both. Also a design/build qualification, not a maintenance one.
- **All CGSSC robotics QPs** — NSQF 5.5–6.0, degree entry, CSC/Q0505 age 24. Structurally closed.
- **ESSCI ELE/Q7203** — Level 3, desktop robotics.

**Alternative spine to evaluate first (do not adopt blind):** **NIELIT, NQR 2022/EHW/NIELIT/06116**, NSQF 4, 450 h — job roles "basic industrial robot programmer, robot operator, robot maintenance technician," which is almost exactly the tier ladder, and 450 h sits exactly inside the Level 4 band. **But 219 h of its 450 is programming and only 17 h is maintenance**, and its NQR entry shows NSQC approval date and validity end date as **"N.A."** Confirm live status in writing with NIELIT Chennai before naming it.

**Levels:** two distinct **NSQF Level 4** awards of **390–420 h each** (different job role / NOS sets), not 4→5. Reserve any Level 5 claim for the **12th-pass + 2-year-NTC** entry band, the only no-experience route into Level 5.

**The real ask (upgrade the EOI from "let us run a CoE"):** ask **TNSDC to sponsor a new qualification through NSQC with BGR Neo as industry author and first delivery partner**, citing **NCVET code 2022/CCM/KSDC/05937** (Karnataka Skill Development Corporation, 20th NSQC, 30 June 2022) as proof that a state skill corporation can and did do exactly this. Bigger, stickier, and it uses a mechanism with proven precedent. Timeline: 6–12+ months — plan the composite as the pilot route and the new qualification as the year-2 moat.

### Engineer tier

- **Academic award:** a **2-year M.E./M.Tech in "Industrial Automation and Robotics"** (already in AICTE Annexure-11 §11.6 — no nomenclature filing) with the **PG Diploma as the year-1 exit** (NCrF 6.5 → 7.0). Partner class: deemed/private university (VIT Chennai, SRM, Amrita, Sathyabama, Hindustan, Vel Tech) on the **L&T EduTech + VIT** template. If a 1-year standalone award is insisted on, the **PG Certificate in Artificial Intelligence and Data Science** is already approved (§11.5(B)).
- **Contract template:** do not draft from scratch — **AICTE APH Annexure Format-4** is AICTE's own MoU for a company delivering and credit-awarding the skill portion while the institution owns the academic portion. Constraint: BGR Neo staff may occupy at most **15% of the partner's required faculty strength** (APH §6.19(d)(iii)). **Caveat:** Format-4 sits under the 2012 NSQF/vocational regulations — confirm the scheme is still live.
- **Anna University route** (if used): the **Consortium of Industries** is real, priced and documented — Pvt Ltd, 3 years' registration, ≥₹1 cr average turnover, PAN/GSTIN/EPF, audited accounts, a Vice-Chancellor-appointed inspection of BGR Neo's facilities; ~₹5.5 lakh total; **5% of sanctioned intake**; window 14 May–10 June, so next entry ~May 2027. It buys sponsored seats in Anna's own M.E./M.Tech, **not** a BGR Neo programme. An Anna CUIC Centre of Excellence costs ₹30–75 lakh and **carries no academic award** — note there is already a **Factory Automation CoE (2018, ₹74 lakh, Instrumentation Engineering, MIT Campus)**, which names the department to approach.
- **QP claim for the 6-month engineer product:** **do not make one yet.** CSC/Q0505 (NSQF 5.5, degree + 2 yrs, **age 24**, 570 h fixed, model course valid only to 30 Jan 2027) and SSC/Q8113 (NSQF 5, **age 24**, next review 22/09/2025 lapsed) both exclude a fresh-graduate cohort. Interim credential = CoE certificate + vendor certs. Block S maps to CGSSC Future Skills QPs at **QP-title level only** (**LIKELY**) — pull the NOS text for CSC/Q0413, Q0415, Q0416, Q0902 and Q0411 before any module card carries a NOS code.
- **Awarding-body ambition:** becoming BGR Neo's own NCVET Awarding Body is a **year 3–5** destination, not a launch route. NCVET's 2025 guidelines require a **not-for-profit** vehicle and, for a Category II state like Tamil Nadu, **20,000 learners trained-or-assessed and 10,000 trained** in 2 of the last 3 years. Two live levers: the §3.3.1 relaxations for emerging-technology and government-focus-area entities, and the fact that **AB-Dual explicitly permits training in "an industrial setup"** — worth citing in the EOI even before recognition is sought.

### Funding — what actually pays

| Route | Status | Numbers |
|---|---|---|
| **TNSDC Vetri Nichayam** (live; the near-term door) | **VERIFIED** | EOI 02/STT-FS/2025 + Addendum-1 **does publish rates**, contradicting the "unpublished" claim: **₹2,000 base + max ₹27/hour** (TNSDC-proposed centre) or **₹32/hour** (own facility / industry location), **minimum 40 hours**, paid 60% on completion+placement and 40% on first month's salary slip. At ₹32/hr a 760 h course grosses ~₹26,320 — **but that extrapolates a 40-hour rate 19×, which TNSDC has never done.** Doors open to BGR Neo: **Establishments/Factories** (turnover >₹25 cr, ≥60% captive placement, forecast of 50 vacancies) and **Green Channel** (>₹50 cr). The generic "Emerging Technology Training Provider" door requires **≥1,000 candidates trained offline over 3 years** — BGR Neo has none. |
| **Direct MoU + CSR** (the Delta template) | **VERIFIED as a mechanism**, terms unknown | This is how the only robotics CoE actually got awarded. TNSDC's CoE EOI explicitly permits CSR funding via a CSR Implementation Agency. |
| **TN Industrial Policy 2021 training subsidy** | **VERIFIED** | **₹4,000/worker/month for 6 months** (₹6,000 for women, transgender, PwD, SC/ST) — i.e. **₹24,000–36,000 per trainee across exactly the 6-month duration**, an order of magnitude better than the Vetri Nichayam voucher. **But it is an employer subsidy attached to an investing project**, so it fits BGR Neo's own hires and its customers' plants, not open-market cohorts. This is what turns "certified operators included" into a costed line. Put it on the money slide. |
| **PM-SETU** | **VERIFIED** | Consortium member only. Lead AIP thresholds: **₹1,000 cr turnover / ₹300 cr net worth / 300 employees**, EMD ₹40 lakh, AIP contributes ≥1/6 of project cost (~₹40 cr on a ₹240 cr cluster), 5-year minimum, SPV 51% industry / 49% government. Consortium lead: ₹300 cr / ₹100 cr / 100 employees. A **Parent/Promoter clause** permits reliance on the BGR Group balance sheet with an unconditional binding undertaking. |
| **NAPS** | **VERIFIED — not a funding route** | No training-cost reimbursement (§4.4). Employment wrapper only. |
| **PMKVY 4.0 / Skill India Programme** | **VERIFIED with a caveat** | STT band **300–600 h** at an averaged **₹27.89/hour** (300 h = ₹9,540.16 per candidate). Cabinet sanction ran only to FY2025-26. At that rate a 760 h course yields ~₹21,200 — which is why the **two × 380–420 h** structure matters: each tier is independently fundable inside the band. |
| **MSDE Common Norms** (the benchmark, not the TNSDC rate) | **Cat I ₹46.70/hr VERIFIED** (Fourth Amendment 2020); **Sixth Amendment +15% LIKELY** | Do **not** use ₹46.70 as the TNSDC planning number — TNSDC pays roughly 40% less. Exact Sixth Amendment rupee figures unverified (see §6). |
| **TNSDC CoE EOI** | **Not available** | Closed 11 Jan 2025, IT/ITES + AVGC + ESDM only, no successor published. |

**Where evidence is insufficient, plainly:** **nobody publishes what TNSDC pays per trainee for a 700+ hour hardware-intensive course.** The EOI says rates are "decided on case-to-case basis." **Who must be asked:** TNSDC directly (**eoi2023@tnsdc.in**, 044-22500107, or the Managing Director's office) at a pre-bid meeting — and specifically *what the Delta CoE is paid per trainee for its 120 h and 272 h programmes*, which is the only real anchor available. A peer-to-peer approach to **TN AutoSkills** or **Delta Electronics India** is likelier to yield it than an official channel.

**One risk for the register:** TNSDC's two live instruments show **no manufacturing appetite**. Vetri Nichayam's Annexure-1 course list is entirely IT/software (AWS, Full Stack, UX, 5G, IoT Assistant, AI-ML, Cyber Security, Python, Java, Digital Marketing); Addendum-1 added only Healthcare and BFSI; the CoE EOI covered IT/ITES, AVGC and ESDM. **Getting industrial automation named as a fundable category is a prerequisite ask, not an assumption.** The longer game — and plausibly higher leverage than any EOI — is getting robotics and factory automation written into a **Tamil Nadu sector policy**: TIDCO's semiconductor CoE route offers **grant-in-aid up to 40% of project cost capped at ₹75 crore** with TIDCO holding ≥20% equity. The difference between ₹75 crore and a per-trainee fee is not the agency; it is whether a state policy names your sector.

---

## 6. Still unverified — do not put these in the EOI

**Legal and safety (these gate delivery, not just filing):**

| Question | Who must be asked |
|---|---|
| Trainee status and liability on a live production cell — Factories Act 1948 "worker" definition, ESI applicability, insurer requirements, and customer consent under a commissioning acceptance test. **Not researched at all** (search budget exhausted). | BGR Neo's insurer and legal counsel; the customer whose cell it is |
| Whether Tamil Nadu electrical licensing (wireman permit / supervisor certificate of competency) constrains an unlicensed graduate performing module M2 panel work. cea.nic.in 404'd; the TN board domain did not resolve. | TN Electrical Licensing Board / Chief Electrical Inspector to Government |
| Current edition of **ISO 10218-1/-2** (whether a 2025 revision superseded the 2011 editions). iso.org, ANSI, TÜV SÜD and A3 all blocked or 404'd. Affects both F4 and O1. | BIS / ISO directly, or a standards subscription |
| Whether the colour-vision entry requirement is permissible under the RPwD Act and TNSDC inclusion norms, and what accommodation is required. International precedent exists (Singapore ITE); **Indian legality is unresolved.** | TNSDC; disability-law counsel |

**Certification:**

| Question | Who must be asked |
|---|---|
| Current version, NQR code and validity end-date for every QP BGR Neo would name. IASC lists IAS/Q5601 at v4.0 while NQR carries v3.0 with a lapsed review date; SSC/Q8113's review date passed 22/09/2025; all CGSSC Future Skills QPs are v1.0 with model courses valid only to **30 Jan 2027** — inside the CoE's first operating year. **And IASC's own site uses colliding QP codes.** | IASC (ceo@ / sqa@iascsectorskillcouncil.in), CGSSC (ceo@cgssc.org), NASSCOM — **in writing** |
| Whether IASC has a robot operator/technician QP in development but unpublished. | IASC (info@iascsectorskillcouncil.in) |
| NIELIT 2022/EHW/NIELIT/06116 live status (NQR shows NSQC date and validity "N.A."), TN delivery, and licence/partnership terms. | NIELIT Chennai |
| NOS-level detail for CSC/Q0413, Q0415, Q0416, Q0902, Q0411 — the Block S mapping is inferred from QP titles only. | CGSSC |
| NASSCOM's current AI/BDA QP catalogue. The deck's **"19 AI & big-data job roles" is UNVERIFIED** — the nasscom page returned 406 and FutureSkills marketing cites "155+ skills for 70+ job roles," which is not a QP list. Only SSC/Q8113 was verified end-to-end. | IT-ITeS SSC NASSCOM (futureskills@nasscom.in) |
| NSQC new-qualification process, cost, timeline and evidence burden; and whether TNSDC would sponsor one as KSDC did. **The single highest-value unknown in the plan.** | NCVET directly; TNSDC MD's office, citing 2022/CCM/KSDC/05937; informally, NTTF Bengaluru |
| Whether the 46th/47th NSQC meetings (the 47th was 25 Feb 2026) approved any new robotics/automation qualification. | NCVET; monitor nqr.gov.in |
| Authoritative NSQF level of the DGT IRDMT trade — the CTS 2.0 PDF says Level 3, NQR 2021/CGM/DGT/04729 says Level 4 at 1,600 h, and a 2024 revision at 3.5 was referenced. **Three versions in circulation.** | DGT / CSTARI Kolkata |
| NSQF levels of the **Electrician and Fitter** CTS trades specifically — the two trades supplying most intake. dgt.gov.in timed out repeatedly. | bharatskills.gov.in; DGT |
| NCVET's creditisation guidelines for MNCs and Leading Indian Enterprises — the one route by which a for-profit can be an awarding body without a Section 8 vehicle. December 2023 URL 404s. | NCVET |

**Tamil Nadu ecosystem:**

| Question | Who must be asked |
|---|---|
| **The names of the 5 NCVT-affiliated long-term trades notified 06.05.2024** across the 71 Industry 4.0 ITIs. **One of them may already be this qualification.** Blocking. | TN Directorate of Employment & Training, Training Wing (skilltrainingdet.in) |
| The full list of the **23 Industry 4.0 short-term courses** — names, hours, fees, and specifically whether ITI passouts are eligible (the published description names only polytechnic, engineering, MSME, degree holders and unemployed youth). Blocking. | TN DET; the Tata Technologies TN programme office |
| **Placement outcomes of the 71 Industry 4.0 ITI centres.** Only intake is published. If they place well, TNSDC believes the pipeline is solved; if badly, that failure *is* the pitch. **This single answer decides whether the tier is viable.** | TN DET; Tata Technologies' skilling division |
| Whether any TN ITI has actually started the IRDMT trade for 2026-27. Three signals conflict: DET's trade list says 0 ITIs, DET publishes Tamil course-awareness material for it, and TNPSC is recruiting **4 Junior Training Officers (post code 3629)** for it under a notification dated 17 July 2026. They cannot all be current. | TN DET / Regional Joint Director, Chennai |
| Whether the 71 Tata Technologies labs are contractually available to industry partners for advanced or train-the-trainer delivery. Determines whether the partnership play exists. | TN DET; Tata Technologies |
| Whether TNSDC will run a CoE EOI covering robotics/automation/advanced manufacturing, on what timeline, and whether an unsolicited proposal is entertained. | eoi2023@tnsdc.in; TNSDC MD's office |
| Whether TNSDC would permit a CoE **sited on private industrial premises**. This single answer determines whether the wedge and the Handover Model survive. | TNSDC; and ask TN AutoSkills how Delta handled siting and equipment ownership |
| Who TNSDC's current Managing Director is, and which department and minister now own TNSDC after the May 2026 change of government. J. Innocent Divya IAS signed the Dec-2024 EOI; Kranthi Kumar Pati IAS was reported appointed Feb 2025; post-election status unconfirmed. The Selection Committee is constituted by the MD. | TNSDC; TN government business-rules notification |
| Delta's commercial terms — CSR quantum, per-trainee fee on top, equipment ownership, term. | TN AutoSkills; Delta Electronics India |
| Who won the **PM-SETU Ambattur cluster** (RFP 1171/AT1/2026, closed 05.05.2026), and whether more TN clusters are planned. That winner is either the main competitor or the best consortium partner. | TN DET (pmsetu.det.tn@gmail.com) |
| Status of the TN AI Mission and whether the manifesto's four AI hubs (Madurai, Coimbatore, Salem, Tiruchirappalli) have a scheme document, budget line or nodal agency. **Most time-sensitive item in the file** — being early to a hub with no content is worth more than any EOI. Note the **scheme rename**: Naan Mudhalvan was renamed on/around 23 June 2026 and naanmudhalvan.tn.gov.in now redirects to skilldevelopment.tn.gov.in, so `deck-brief.md` §4's "TN CM's flagship" framing is wrong on both name and politics. | TN IT & Digital Services Department; ELCOT |
| Whether TN has or is drafting a **robotics / advanced-manufacturing sector policy** — the state has semiconductor, space, shipbuilding, circular-economy and toy policies, each with its own skilling subsidy. | Guidance Tamil Nadu; Industries Department; TIDCO |
| Whether TANSAM would act as a Knowledge Partner rather than a competitor. | TANSAM, Tidel Park |
| Terms of DDU-GKY 2.0 in TN (PIA EOI 21 May 2026, corrigendum 22 Jun 2026) — the most recent TNSDC EOI. PDF is image-only. | TNSDC |

**Frameworks and money:**

| Question | Who must be asked |
|---|---|
| Exact rupee figures in the **Common Norms Sixth Amendment** (gazetted 26 Feb 2026). Applying the reported +15% to the verified ₹46.70 base gives ₹53.71; one secondary source reports ₹56.35. **Do not put either in a financial proposal.** | MSDE; the Gazette of India notification |
| **Which Common Norms Category** industrial robotics / instrumentation-automation / capital goods falls into. Changes the rate by ~35%. Schedule-II of Annexure-I could not be retrieved. | MSDE; TNSDC; the SSC |
| Whether PMKVY 4.0 / Skill India Programme is operational in FY2026-27 (Cabinet sanction covered only to 2025-26). | MSDE / NSDC |
| Whether CGSSC's Future Skills QPs have live Common Cost Norm categories and are fundable under TNSDC or PMKVY, and whether anyone is running batches against them. | CGSSC; TNSDC |
| IASC's and CGSSC's **training-partner affiliation/accreditation norms, fees, lab requirements, ToT/ToA and timelines** — NCVET mandates these but does not publish them centrally. **The single biggest unknown in the delivery path.** | IASC; CGSSC |
| **UGC vs AICTE disagreement on the PG Diploma's level** — UGC CCFPG Table 1 says NHEQF Level 6; AICTE's NCrF table says 6.5. Do not quote a level until resolved. | AICTE Policy & Academic Planning Bureau; UGC — in writing |
| Whether an AICTE Approval Process Handbook later than 2024-25→2026-27 has been issued and whether Annexure-11's 12-name PG Diploma list has expanded. Today is inside the last year the current handbook covers. | aicte.gov.in |
| Whether AICTE's Skill Knowledge Provider scheme (the source of Annexure Format-4) is still operationally live and accepting SKP registrations. | AICTE |
| UGC Professor of Practice eligibility criteria — ugc.gov.in served a maintenance page and the AICTE mirror 404'd. The 15%/10% caps *are* verified; the underlying criteria are not. | The partner university's Registrar |
| Whether VIT Chennai / SRM / Amrita / Sathyabama would accept a BGR Neo-designed 260 h specialization block inside their M.Tech, and on what commercial terms. Cannot be researched — must be asked. | Two or three of them directly; the published L&T EduTech contact is Dr Anbuthambi B, anbuthambi.b@lntecc.com |

**Data that does not exist publicly — do not fabricate:**
- **India's robot density.** IFR's density release excludes India; secondary sources vary 5×. Use installations (9,120) and stock (52,570).
- **Tamil Nadu's share of India's robot installations.** No state-wise data is published. Options: buy IFR World Robotics, or ask the India country managers of ABB, FANUC, KUKA and Yaskawa — BGR Neo already has those relationships.
- **Any technician-to-engineer staffing ratio.** The maintenance-benchmarking profession normalises craft headcount against **Replacement Asset Value** (SMRP Metric 1.1), not against engineers. **Do not put a sourced-looking ratio on a slide.**
- **The PwC figures** (~20% more engineers, ~2× maintenance workers in robotics-intensive sectors) — pwc.com returned 403. Open the page and confirm the wording before use.
- **A published TN technician-shortage study.** None found. The plan's founding premise is currently an assertion.

**Internal — nobody outside BGR Neo can answer, and these are the only differentiated evidence in the file:**
1. **Technician-to-cell ratio** from the installed base — operators and maintenance heads per delivered cell per shift.
2. **Post-handover support calls per cell per year**, and what share a trained on-site technician could have cleared.
3. **Audited turnover and net worth** against the thresholds that decide which doors open: ₹25 cr (Vetri Nichayam Establishments/Factories), ₹50 cr (Green Channel), ₹300 cr / ₹100 cr (PM-SETU consortium member), ₹1,000 cr / ₹300 cr (PM-SETU lead AIP) — and whether the BGR Group parent would sign the unconditional financial-support undertaking.
4. **Headcount against the Apprentices Act thresholds** (4+ workers to be eligible; 30+ makes engagement obligatory; apprentices in a 2.5–15% band) — this caps how many AEDP/NAPS students can be hosted.
5. **Signed employer demand letters** from named TN plants. This is the evidence a TNSDC committee actually weights, and it is the one deliverable BGR Neo is uniquely positioned to produce.

---

## 7. Recommended changes to the documents

### `curriculum/iti-operator-technician-programme.md`

**§1 — Strategic argument**
- [ ] Delete *"BGR Neo is the only kind of organisation that can fix this, because BGR Neo is the one doing the handovers."* Replace with "first in Tamil Nadu, and structured differently."
- [ ] Add a new **competitive-analysis subsection before the strategic argument**, quantitative and honest: DGT IRDMT (1,200 h + 150 h OJT, entry 10th, mandating two 6-axis robots and a fenced cell) duplicates ~170 of the 760 hours; but its entire PM/troubleshooting content is Learning Outcome 23 / NOS CSC/N0901 at 25 practical + 4 theory hours, and the curriculum contains zero occurrences of diagnosis, LOTO, CMMS, condition monitoring, OEE, downtime, handover, root cause, escalation or machine vision. Name MPCA (44 TN ITIs), the 71 Industry 4.0 ITIs, Delta/Bargur, FANUC/KCG, Kaustya and IRATI. **This must be in §1, not discovered at the interview.**
- [ ] §1.2: replace the volume argument with an outcomes argument (audited placement + 6-month retention + time-to-recovery, against a state programme that publishes intake only).
- [ ] §1.3: rewrite "certified operators included" so the emphasis falls on *certified*, not *included*.
- [ ] Promote the ⚠ (technician-to-engineer ratio from the installed base) from a margin note to a **blocking pre-EOI work item** with a named owner.

**§2 — Job role**
- [ ] Add the market-facing title alongside the competency title, so the certificate reads to recruiters searching "PLC / automation maintenance."

**§3 — Design principle**
- [ ] §3c/§3d: print the mapping to **AFNOR NF X 60-010 Levels 1 / 2 / 3–5** on the authority-boundary card, and rename M1 to cite **TPM Jishu Hozen** and its seven steps.
- [ ] §3d: add an **electrical-licence column** to the authority-boundary card pending the TN Electrical Licensing Board answer.

**§4 — Entry & eligibility**
- [ ] Delete **Millwright**. Demote Mechanic (Machine Tool Maintenance) (3 ITIs) and Technician Mechatronics (10 ITIs) out of the headline band.
- [ ] Add **Manufacturing Process Control and Automation Technician** (44 TN ITIs) as the priority feeder and **Industrial Robotics & Digital Manufacturing Technician** with the note that it runs at 0 TN ITIs today.
- [ ] **Split the table by school exit** — add a 12th-pass + 2-year-NTC band, the only no-experience route to NSQF 5.
- [ ] Re-scope the 60 h pre-gate bridge, or add an automation primer to Tier 1's opening weeks, or run two entry streams. Electrician and Fitter teach no PLC, sensors, robots or automation.

**§5 — Programme structure**
- [ ] Tier 1: **380 h → 390 h** (Level 4 floor; a multiple of 30; 13 credits exactly).
- [ ] Drop the Tier 2 **~Level 5** claim for the 10th-entry audience. Certify Tier 2 as a **second, distinct NSQF Level 4 award** (different NOS set), 390–420 h.
- [ ] Abandon the single 760-hour award: restate as two separately certified awards (780–840 h total), each inside the PMKVY 300–600 h STT band.
- [ ] Delete the Tier 3 "~NSQF 5" claim; re-base at Level 4 or on the NIELIT qualification.
- [ ] Change the Tier 1 exit claim from *"Employable. Runs and recovers a cell"* to *"Runs a cell, makes safe, diagnoses to domain, and escalates correctly"* — or move ~30 h of first-line repair from M2 into Tier 1.
- [ ] Replace the earning-based justification for the split with the **funding-architecture** justification, and give "return later, with credit" a mechanism: design the Tier 1 practical exit so it **is** component 1 of the Tier 2 assessment (German MaschFüAusbV §10(3) precedent).

**§6 — Syllabus**
- [ ] **ADD M8 — PLC & Control Logic Literacy (read-only), 60 h, Tier 2, `PROTECTED`.**
- [ ] **ADD 60 h Employability Skills mapped to DGT/VSQ/N0102**, outside the trade hours, 30 h per tier.
- [ ] Rename M2 to include **hydraulics** and add 20–25 h.
- [ ] **ADD 20 h Measurement & First-Piece Quality.**
- [ ] **ADD 10–15 h environmental/energy content** (e-waste, coolant/oil disposal, compressed-air leak cost).
- [ ] **O1: name the standards** — IEC 60204-1, ISO 13855, IEC 61496, ISO 13849-1 / IEC 62061 (verify editions first). Add the Japan benchmark: O1's 60 h is 6× Japan's statutory minimum for robot teaching work.
- [ ] Fund the additions by compressing the duplicated block (O2 50→40, O3 60→45, O4 60→50, O6 60→40 as I/O content migrates to M8, M4 50→40, M6 40→25) — **but only if intake skews toward MPCA/IRDMT/Mechatronics passouts.** Otherwise lengthen instead.
- [ ] Demote truck loading/unloading into O5 on the palletizing rig.
- [ ] Reweight showcase applications toward machine tending and automotive assembly (IFR: 45% automotive).

**§7 / §8 — Timeline and Handover Model**
- [ ] Resolve the three live-cell windows (§7 table = 19–24; §7 prose = from 13; §8 diagram = 13–24) to one number, and correct the other two.
- [ ] Correct **"120 times"** to the true count (~30 at 6 weeks, 60 at 12).
- [ ] Change daily handovers to **milestone-gated** (FAT / SAT / production ramp) and name the ISO 10218 / ISO-TS 15066 safety re-validation step — then staff it (§11 currently has one shared safety officer).
- [ ] Move a live-cell block before the Tier 1 exit, or state plainly that Tier 1 certifies trainer-cell competence.
- [ ] Add the siting caveat: under a standard TNSDC CoE the centre sits in a government building, and the Handover Model must be restructured as OJT/internship blocks in BGR Neo plants.

**§9 — Assessment & certification**
- [ ] Delete "NSQF-aligned SSC certificate" and the IASC-vs-CGSSC ⚠. Replace with the explicit composite: **IAS/Q5601 + IAS/N3009 + DGT/VSQ/N0102 + BGR Neo CoE certificate**, with IAS/Q5601's limits stated. Exclude IAS/Q8005 (age 21 + 1 yr experience) and all CGSSC robotics QPs (5.5–6.0, degree entry, age 24), with reasons.
- [ ] Add FANUC FCR-O1/O2 and FCR-T1/T2 against Tiers 1 and 2 — now sourceable and deliverable inside O4 + O7.
- [ ] **Ring-fence a dedicated assessment cell** that no cohort trains on, or move the Tier 2 exam to a customer site.
- [ ] Add a new sub-section: **the qualification-sponsorship ask** to TNSDC, citing NCVET code 2022/CCM/KSDC/05937.
- [ ] Do not name any IASC QP code until IASC confirms version and validity in writing (colliding codes; lapsed review dates).

**§10 — Lab**
- [ ] Add: hydraulic trainer boards (1:5, 6 units, LOW–MED); basic metrology kit (1:5, LOW); a second set of Group F controls trainers **or** staggered controls weeks, since M8 makes the double-booking binding.
- [ ] **Delete** the truck loading/unloading mock-up line.

**§11 — Staffing**
- [ ] Make **instructor certification a launch prerequisite**, not a year-2 SKU. Germany's AEVO is a legal precondition to train at all; FANUC and SACA both require instructor certification before delivery. It also pre-empts the obvious counter to §11's own argument.

**§12–§13 — Placement and decisions**
- [ ] Commit to a **placement rate** (TNSDC EOI §10(d) and the Delta precedent both carry 70%) — pressure-tested against BGR Neo's installed base first.
- [ ] Add a **faculty-development product for college/ITI teachers** (EOI §10(d) requires it; the existing train-the-trainer SKU does not satisfy it) and a **product for students still in education**.
- [ ] Close decision 5 (government- or employer-funded). Correct decision 4 (NAPS is an employment wrapper, not funding). Add decisions 7 (customer consent) and 8 (insurer/legal sign-off).
- [ ] §13.1: give the year-3 target an actual number and the cell count it implies.
- [ ] Correct the counterparty: anything ITI-shaped runs through the **Directorate of Employment & Training**, not TNSDC.

**Document-wide**
- [ ] **Rename the programme** around uptime / reliability / recovery.

---

### `curriculum/syllabus-architecture.md`

- [ ] **Step 2:** clear the ⚠ on the NCrF 30-hour rule (verified). Replace the two-SSC route with three-plus (IASC for the ITI tier; CGSSC for engineer-tier robotics; NASSCOM for AI; NIELIT/DGT as ITI alternatives). Delete "Already the deck's route."
- [ ] **Step 2:** state *why* BGR Neo cannot award a PG Diploma (AICTE APH §1.3.4 promoter clause) and note the Section 8 escape — which connects to the deck's own Model E endgame, though it does not unlock an unaffiliated engineering award.
- [ ] **Step 2 / §6 decision 1:** **reverse the recommendation.** The academic partner must be signed *before* filing — AICTE §6.7(a) requires the institution and its Registrar to submit any new nomenclature before 30 November, and the TNSDC EOI's §9(b) **Knowledge Partner** slot forms part of the bid. Propose the university *into* the EOI; do not run a parallel courtship.
- [ ] **Step 3 / Step 4:** change the module-card field and tagging axis from "IASC / NASSCOM" to admit **CGSSC, NIELIT and DGT**.
- [ ] **Step 8 / §6 decisions 3–4:** restate live-cell capacity for **three** concurrent cohorts, not two, and publish the required cell count.
- [ ] **§2 Totals:** reduce the diploma to **1,200 h / 40 credits** (UGC CCFPG cap; NCrF annual norm). Round all headline hours to multiples of 30 per NCVET (820 → 810 or 840).
- [ ] **§2 Block D:** fix the `DROPPABLE` contradiction on D3, and either write cards for the two unnamed electives or delete the "all types of AI" breadth claim.
- [ ] **§2 Block R:** add **R6 Industrial controls / PLC (60 h diploma / 40 h training)**, funded by reducing R3 (ROS 2 + MoveIt 2) 80/50 → 60/30.
- [ ] **§3:** drop the "NSQF/QP certificate" claim for the 6-month engineer product (CSC/Q0505 and SSC/Q8113 both age-gate at 24), or change the intake to experienced candidates.
- [ ] **§3:** reconsider "the PG Diploma is the flagship — what makes the CoE prestigious in the EOI." Nothing in the TNSDC CoE EOI scores an academic award; it scores placement (70%), faculty capacity building, industry integration and investment.
- [ ] **§4 Stackability:** replace the ladder with the officially supported one (PG Diploma at end of year 1 → M.Tech at end of year 2). Rebalance so skill-earned credits are ≤50%. State that ABC deposits require an NCVET Awarding Body and that "Future Technologies" credits carry only 3 years' validity.
- [ ] **§5:** differentiate the "Intensive, 3 mo" SKU from ITI Tier 1 (both ~380 h). Add **120 h and 272 h SKUs** matching what TNSDC actually buys, plus a faculty-development SKU.
- [ ] Restructure live-cell/OJT time as contracted **apprenticeship/internship months** — NCVET's formula credits 3 months of apprenticeship at 10 credits regardless of hours.

---

### `curriculum/annexure-syllabus-and-lab.md`

- [ ] **§1.1:** 1,400 h → 1,200 h / 40 credits; trim F1 (110→80), F2 (120→90), C1 (160→130). Leave Block S at 260 h untouched.
- [ ] **§1.2 F4 / ITI O1:** verify ISO 10218 edition before printing either.
- [ ] **§1.5 / §2.3:** make the six-station rotation schedulable — rebalance S modules to ~43 h each, or merge S5+S6 and run five stations at 52 h.
- [ ] **§1.6 C2:** map to **DGT/VSQ/N0102**.
- [ ] **§2.2 / §2.4:** restate the engineer live-cell window against the corrected ITI window, and recompute annual cohort capacity for three cohorts.
- [ ] **§3.3:** the annexure specifies **one live cell hall (Qty 1)** with one 6-axis robot and one arc-welding robot. State explicitly how the Tier 2 unseen-cell assessment is served, and ring-fence an assessment cell.
- [ ] **§3.6 Group F:** size for two concurrent cohorts, or stagger the controls weeks.
- [ ] **§3.12 Capital summary:** add the inversion note — under a standard TNSDC CoE, TNSDC supplies floor space, furniture, workstation PCs and connectivity while the partner supplies the robots, so *"mostly buying computers, not robots"* reverses.

---

### `presentation/deck-brief.md` (deck rebuild items)

- [ ] **§3 / slide 7:** rewrite the wedge (production cell vs training cell; multi-vendor; live customer project). Delete "winnable via a mechanism that already exists."
- [ ] **§3 / slide 4–5:** add a sixth rung to the ladder — *policy-named sector + TIDCO grant-in-aid* — and restructure Model C as two doors (Vetri Nichayam now; direct MoU + CSR).
- [ ] **§4:** delete the IASC industrial-robotics claim; correct the "NSQF 5–8 via IASC" claim; correct "Naan Mudhalvan (TN CM's flagship)" (renamed ~23 June 2026, domains redirect to skilldevelopment.tn.gov.in, and the framing is politically wrong after May 2026); correct the TN Semiconductor Mission CoE description (grant-in-aid up to 40% capped at ₹75 cr, TIDCO ≥20% equity — not a free-standing for-profit SPV); add the JICA line and ₹100 cr envelope to the TNASDCL precedent; treat the "19 AI job roles" figure as unverified and remove it.
- [ ] **§4:** **add PM-SETU** (₹60,000 cr, ₹10,000 cr industry share, AIP EOI route, NSTI Chennai NCoE with Singapore MoU, the Ambattur cluster) and the Siemens/t-SDI precedent TNSDC already co-funded.
- [ ] **§7:** replace "mostly buying computers, not robots" with the correct capex logic under the actual vehicle.
- [ ] **Slide 3 ("Why now"):** rebuild on the **installed base** (52,570 robots needing uptime), not on installation growth — IFR forecasts a possible **contraction in 2026** as PLI runs out, which is exactly when a 2026 cohort graduates.
- [ ] **Slide 13:** delete "first-mover access."
- [ ] **Add slides:** the money slide (TN Industrial Policy 2021 training subsidy, ₹4,000–6,000/worker/month for 6 months); the competitive-honesty slide (naming TANSAM, the 71 ITIs, Delta, FANUC/KCG and NSTI Chennai, then differentiating); a slide addressed to the **new AI Ministry**, which the deck currently lacks entirely — and note that Coimbatore and Salem are manufacturing belts where an "AI innovation hub" that is only software would be hollow.
- [ ] **§9:** add the open decisions that only the MD can settle — siting (private premises vs government building), consortium participation in PM-SETU, and whether to pursue the qualification-sponsorship ask.