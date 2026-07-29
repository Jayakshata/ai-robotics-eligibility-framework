# The Technician Tier — Automation Uptime Technician (post-ITI)

**BGR Neo Centre of Excellence · programme design · Revision 2**
**29 July 2026 · flagship audience: fresh ITI passouts (decided)**

> **Revision 2 — corrections applied from `curriculum/VALIDATION-REPORT.md`.** Four adversarial reviews returned `PLAN_NEEDS_CHANGE`. Material changes: the programme is **renamed around uptime**; a **PLC module (M8)** is added because two of the tier's own seven fault domains were untaught; the award is restructured as **two NSQF Level 4 awards of 450 h**, because 760 h fitted no NSQF band at all; **Millwright is deleted** (no such trade exists in Tamil Nadu); the certification route is rebuilt because **IASC publishes no robotics QP**; and the Handover Model becomes **milestone-gated**. Read the validation report before treating any claim here as settled.

**Companions:** `curriculum/syllabus-architecture.md` (engineer tier) · `curriculum/annexure-syllabus-and-lab.md` (annexure) · `curriculum/VALIDATION-REPORT.md`.

**Job title.** Competency title: **Automation Uptime Technician.** Market-facing title to carry alongside it on the certificate: **Automation Maintenance Technician (PLC & Robotics)** — Tamil Nadu job boards carry roughly 300 live postings for "PLC / automation maintenance" against ~15 for anything labelled robotics. A graduate who is only described in robotics language will not surface in a recruiter's filter.

---

## 1. Why this tier exists

Tamil Nadu does not have a shortage of engineers who can *build* an automated cell. It has a shortage of technicians who can *keep one running at 2 a.m. on a Sunday.* Automation projects fail at handover — the cell is commissioned, the integrator leaves, and six months later it runs at 60% of rated output because nobody on site knows why the vision system stopped finding cartons.

### 1.0 What already exists — say this before someone else does

Revision 1 claimed BGR Neo was *"the only kind of organisation that can fix this."* That is false, and a TNSDC committee would know it. The honest position is **first in Tamil Nadu, and structured differently** — and the case is stronger when the landscape is named up front rather than discovered in the interview.

| Who | What they run | How this tier differs |
|---|---|---|
| **TN DET + Tata Technologies** | **71 government ITIs** converted to Industry 4.0 Technology Centres at **₹2,877 crore**, each with an Industrial Robotics and Digital Manufacturing Lab; 7,672 Industry 4.0 seats | Training cells with no customer, no order book, no acceptance test, no downtime consequence. **They publish intake and no placement figures at all** |
| **DGT trade — Industrial Robotics & Digital Manufacturing Technician** | 1,200 h + 150 h OJT, 10th entry, mandates two 6-axis robots and a fenced cell. **0 TN ITIs run it today** | Duplicates ~170 of our hours. But its entire PM/troubleshooting content is one learning outcome at **25 practical + 4 theory hours**, and the curriculum contains **zero occurrences** of diagnosis, LOTO, CMMS, condition monitoring, OEE, downtime, handover, root cause, escalation or machine vision |
| **DGT trade — Manufacturing Process Control & Automation Technician** | **44 TN ITIs**, ~880 seats/yr, ~1,200 h mostly PLC/HMI/SCADA | Owns our BRAIN and NERVES domains. **This is a feeder, not a rival** — see §4 |
| **Delta Electronics + TNSDC**, CoE in Robotics & PLC Automation, Bargur | Inaugurated March 2026, direct MoU with CSR funding via TN AutoSkills. 120 h and 272 h programmes, batches of 20–25, 70% placement assurance | The named CoE slot is occupied. Their marketing already says "replicates live industrial environments" |
| **FANUC + KCG College**, Chennai · **KUKA + CIT** · **TANSAM** (Siemens/TIDCO) · **Siemens + Anna University** (₹546.84 cr, **TNSDC contributed ₹54.68 cr**) | OEM and simulation centres | Single-vendor by construction. TANSAM is simulation-heavy and cell-light — a **Knowledge Partner, not a rival** |
| **Kaustya Robotics** (Pune) · **IRATI / WO Group** (Pune) | System integrators already running robotics academies that accept ITI graduates | Neither in Tamil Nadu; neither government-partnered; both **programming-led, not uptime-led** |
| **NIELIT** | *Robotic Programming and Maintenance Technician*, NSQF 4, 450 h | **219 h programming vs 17 h maintenance** — a programming qualification wearing a maintenance label |
| **Tata IIS** | Routes ITI graduates to welding, CNC and EV; reserves robotics for **engineering graduates** | The best evidence that the fresh-ITI-to-automation path is genuinely thin. Prepare for the counter that they may be right — the entry gate and bridge in §4 are the answer |

**What is genuinely ours, after all that:**

1. **A live customer integration project** — a paying customer, an acceptance test, a real handover, a consequence for downtime.
2. **Uptime as the job definition.** No programme found anywhere in India is built around a whole-cell fault taxonomy, a drilled diagnostic loop, seeded-fault assessment on an unseen cell, an explicit authority boundary, or **time-to-recovery as a graded outcome**.
3. **Multi-vendor cells** — structurally impossible for an OEM centre.
4. **Post-NTC conversion of Electrician and Fitter passouts** — a population Tata IIS explicitly routes away from automation.

### 1.1 The strategic case

1. **An AI hub needs its technician layer or the AI does not stay switched on.** Deployed intelligence nobody can maintain is a pilot, not a hub.
2. **This tier is where the *verified outcomes* come from — not the volume.** Revision 1 called it the volume play. Against the state's own baseline (6,641 Industry 4.0 admissions, 24,923 short-term trainees to January 2026), 30–90 a year is a rounding error, and the engineer tier is the one that scales cheaply because it is simulation-first. **The opening is different and better:** TN DET publishes intake for those 71 centres and **no placement outcomes whatsoever.** Compete on audited placement, 6-month retention, and time-to-recovery — against a programme that reports only admissions.
3. **It is a product BGR Neo can sell.** Careful with the wording: operator familiarisation bundled with commissioning is **already standard after-sales practice** for Indian integrators. The differentiator is the word ***certified***, not *included* — an NSQF-certified technician assessed on time-to-recovery, with a recertification cycle.

> ⚠ **Blocking pre-EOI work item, with a named owner.** BGR Neo can compute the true technician-to-cell ratio from its own installed base — operators and maintenance heads per delivered cell per shift, and post-handover support calls per cell per year. **No published technician-to-engineer ratio exists** (the maintenance profession benchmarks craft headcount against Replacement Asset Value, not against engineers), so do not put a sourced-looking ratio on a slide. Your own data is the only differentiated evidence available, and it is worth more in an EOI than any market report.

---

## 2. The job role

| | The engineer tier owns | The technician tier owns |
|---|---|---|
| **Product** | A working cell | **Uptime** |
| **Question answered** | "How do we make this work?" | "Why did it stop, and how fast can I get it back?" |
| **Time horizon** | Project | Shift |
| **Measured on** | Commissioning, cycle time, acceptance | **Time-to-recovery, first-pass yield, unplanned downtime** |
| **Authority** | Designs and changes the system | Operates, maintains and recovers it — **inside a defined boundary** |

---

## 3. The design principle — portability before specificity

Technicians who work **in any corner of the factory** — palletizing, depalletizing, pick-and-place, machine tending, truck loading — do not get there by learning six cells. They get there by learning the one anatomy all cells share, then drilling the fault response to reflex.

### 3a. The Seven Places a Fault Can Live

| # | Domain | What it is | Typical failure | Taught in |
|---|---|---|---|---|
| 1 | **MOVER** | Robot, gantry, conveyor, AGV, lift | Position lost, drive fault, collision stop, drift | O4, M3 |
| 2 | **GRIPPER** | Vacuum cup, clamp, magnet, fork | Lost vacuum, worn cup, dropped part, wrong tool | O4, M3 |
| 3 | **EYES** | Vision, photo-eye, proximity, barcode/RFID, weight | No detection, false reject, dirty optics, lighting drift | O6, M4 |
| 4 | **BRAIN** | PLC, robot controller, HMI, inference box | Wrong recipe, logic hang, comms loss, corrupt program | **M8** |
| 5 | **NERVES** | I/O, fieldbus, network, air, power | Broken cable, loose terminal, low air, node offline | **M8**, M2 |
| 6 | **CAGE** | Light curtains, scanners, interlocks, E-stops | Gate open, scanner blocked, E-stop latched, muting fault | O1 |
| 7 | **MATERIAL** | Product, pallet, carton, packaging | Crushed carton, skewed pallet, wet label, deformed part | O5, O8 |

> **Why M8 exists.** Revision 1 asserted all seven domains and then taught five. "PLC" appeared three times in the whole document — in this table, in the portability table, and in the RED authority list — and **no module taught a trainee to read a rung, open the programming software in monitor mode, cross-reference an alarm to logic, or read a fieldbus diagnostic page.** The result was a technician told "never alter PLC logic" who was never taught to read one. The portability promise was 5/7 delivered. M8 closes it, monitor-mode only, which *reinforces* the RED boundary rather than weakening it.

### 3b. The same anatomy, across every cell

| | **Palletizing** | **Depalletizing** | **Pick & place** | **Machine tending** | **Truck load/unload** |
|---|---|---|---|---|---|
| **Mover** | Robot + pallet conveyor | Robot + infeed | Robot / gantry | Robot + shuttle | Telescopic conveyor (+ robot) |
| **Gripper** | Layer / vacuum / fork | Vacuum head | Vacuum or 2-finger | 2-finger / chuck | Vacuum or clamp arm |
| **Eyes** | Pallet present, layer count, height | Vision layer detect, case count | Vision pose, photo-eye | Part present, chuck confirm | Case detect, trailer-wall detect |
| **Brain** | PLC + robot ctrl + pattern recipe | PLC + vision + robot | PLC + vision | PLC + CNC handshake | PLC + robot + WMS link |
| **Nerves** | I/O, fieldbus, vacuum line | Same | Same | Same + CNC interface | Same + trailing cable |
| **Cage** | Fence, scanner, gate | Fence, light curtain | Light curtain / force-limited cobot | Fence + door interlock | Dock scanner, dock-lock interlock |
| **Material** | Carton & pallet quality, wrap | Wet/crushed cases, shifted load | Part variation | Chips, coolant, burrs | Collapsed load, trailer floor |

**The columns change. The rows never do.**

> **Weighting corrected.** IFR's verified 2024 India figures put **45% of installations in automotive** (4,070 of 9,120), then plastics/chemicals and metal. Palletizing survives on end-of-line FMCG, food and cement grounds — but **machine tending and automotive assembly are where India's robots actually go**, and the showcase applications are weighted accordingly. **Robotic truck loading/unloading has no evidenced Tamil Nadu installed base**; India's dock automation is telescopic conveyors. It is taught as dock discipline inside O5, not as a flagship.

### 3c. The Six-Step Fault Loop

Taught once, then drilled to reflex on seeded faults. Time-to-recovery is measured from day one.

| Step | Action | The discipline |
|---|---|---|
| **1 · MAKE SAFE** | Establish the stop state; isolate energy; LOTO before entering the cage | Never troubleshoot a live cell you are standing inside |
| **2 · LOOK & LOG** | Read the alarm and HMI, note the last good cycle, observe the physical state — **photograph before touching anything** | The evidence is destroyed the moment you start fixing |
| **3 · LOCATE** | Narrow to one of the seven domains by halving the cell | Binary search beats intuition |
| **4 · FIX or FLAG** | First-line repair inside your authority; otherwise escalate with a structured report | Knowing what you may *not* touch is the skill |
| **5 · RESTART** | Controlled restart, verify a set number of good cycles, check first-piece quality | An unverified restart is a fault you meet again in an hour |
| **6 · RECORD** | CMMS entry: fault, cause, action, parts, downtime minutes | An unrecorded fault teaches the plant nothing |

*Distinct from 5S housekeeping — say so in class, because trainees will conflate them.*

### 3d. The authority boundary — green / amber / red

Now printed with its **AFNOR NF X 60-010 maintenance-level mapping** (carried into NF X 60-000:2016), so a graduate is legible to the French-, German-, Japanese- and Korean-parented plants that dominate Tamil Nadu automation. Without it the technician is portable across *cells* but not across *maintenance management systems*.

| | AFNOR level | Examples | Electrical licence |
|---|---|---|---|
| **GREEN — do it** | Level 1–2 | Clear a jam (after LOTO) · like-for-like sensor swap · vacuum cup or gripper pad · clean vision optics · reset an alarm · re-run a stored calibration · consumables · guide adjustment within marked limits | Not required `⚠` |
| **AMBER — do it, then report** | Level 2–3 | Sensor re-alignment · robot point touch-up within a defined allowance · belt tensioning · cable replacement · filter or FRL element | **`⚠ TBC`** — see below |
| **RED — never** | Level 4–5 | Modify a robot program · **bypass, defeat or jumper any safety device** · alter safety-PLC logic · change vision models or thresholds · re-teach beyond the allowance · enter the cage without LOTO · change PLC production logic | n/a |

**Bypassing a safety device is an automatic fail in assessment and a dismissal offence on site.**

> ⚠ **Open, and it gates delivery:** whether Tamil Nadu electrical licensing (wireman permit / supervisor certificate of competency) constrains an unlicensed graduate performing the panel work in M2. **Ask the TN Electrical Licensing Board / Chief Electrical Inspector to Government** before the first cohort touches a panel.

---

## 4. Entry & eligibility

Assessment-gated with soft trade bands. **Trade counts below are from TN DET's own list of 104 trades** — they change the design, because the volume feeders are not the well-prepared ones.

### Trade bands, corrected

| Band | Trades (TN ITI count) |
|---|---|
| **Priority feeder — best prepared** | **Manufacturing Process Control & Automation Technician (44)** — owns the BRAIN and NERVES domains and was missing from Revision 1 entirely · Instrument Mechanic (12) · Technician Mechatronics (10) · Electronics Mechanic (29) |
| **Volume feeders — the realistic intake** | **Electrician (303)** · **Fitter (271)** — together 574 ITIs, and **neither teaches PLC, sensors, robots or automation** |
| **Adjacent, with bridging** | COPA (54) · Welder (150) · Turner (39) · Machinist (40) · Mechanic Machine Tool Maintenance (3) |
| **Named for completeness** | Industrial Robotics & Digital Manufacturing Technician — **0 TN ITIs today**, though a TNPSC notification is recruiting Junior Training Officers for it `⚠` |
| **Deleted** | ~~Millwright~~ — **no such trade exists in Tamil Nadu** |

### Entry bands by school exit — because this decides the NSQF level

| Entry | NSQF on arrival | What this tier can award |
|---|---|---|
| **10th + 2-year NTC/NAC** *(the flagship audience)* | **Already Level 4** | Two **Level 4** awards. Lateral in *level*, not in *competence* — see §5 |
| **12th + 2-year NTC/NAC** | Level 4 | The **only no-experience route to Level 5.** Reserve any Level 5 claim exclusively for this band |
| Diploma (Polytechnic) holders wanting the hands-on route | — | Same programme, Level 4 award |

**Gate:** a **practical aptitude test and interview — not an academic exam.** Hand skills, spatial reasoning, fault-finding instinct, safety attitude.

### Two pre-gate bridges, not one

Revision 1's single 60-hour bridge was sized for trainees who already had automation exposure. The realistic intake does not.

| Stream | Who | Bridge | Content |
|---|---|---|---|
| **A** | MPCA, Mechatronics, Instrument Mechanic, Electronics Mechanic | **60 h** | Technical English (HMI screens, alarm codes and manuals are in English), digital literacy, shop maths |
| **B** | Electrician, Fitter, Welder, Turner, Machinist, COPA | **120 h** | The above **plus an automation primer** — sensors, pneumatics, basic industrial control concepts |

Free, diagnostic-routed, outside the taught hours. Without it, an English-language HMI quietly becomes a schooling filter. The need is documented: the NSDC/ASDC sector report states the workforce "is not adequately prepared to handle a higher degree of automation or greater use of robots… compounded with a lesser threshold of English language capability."

> ⚠ **Colour vision.** A legitimate occupational requirement internationally — Singapore's ITE requires Higher Nitec Mechatronics candidates to be "free from colour appreciation deficiency." **Its permissibility under the RPwD Act and TNSDC inclusion norms is unresolved.** Ask TNSDC and disability-law counsel before publishing it as a criterion.

---

## 5. Programme structure — two Level 4 awards

**6 months · 26 weeks · 900 hours** (840 h trade content + 60 h Employability Skills), as **two separately certified awards of 450 h each.**

| Award | Duration | Trade h | + Employability | Total | NSQF | Exit |
|---|---|---:|---:|---:|---|---|
| Pre-gate bridge A / B | 2–4 weeks | — | — | 60 / 120 | — | *(not certified)* |
| **Tier 1 — Automation Cell Operator** | 13 weeks | 420 | 30 | **450** | **Level 4** `⚠` | Runs a cell, makes safe, diagnoses to domain, escalates correctly |
| **Tier 2 — Automation Uptime Technician** | 13 weeks | 420 | 30 | **450** | **Level 4** `⚠` *(second, distinct award)* | Diagnoses, repairs, maintains |
| Tier 3 add-on — Robot Programming Technician | +6 weeks | ~180 | — | ~180 | **Level 4** `⚠` | Bridge toward the engineer track |

### Why this changed from 380 + 380 = 760

Revision 1's structure fitted no NSQF band at all. Against NCVET's own Level Descriptors:

- **Level 4** notional-hours band is **390–480**. Tier 1 at 380 h was **10 hours below the floor**.
- **Level 5** requires an NSQF-4 holder **plus 3 years' experience** — or, without experience, **12th pass + 2-year NTC**. A fresh 10th-entry passout with zero experience is **structurally barred** from Level 5, so the old "Tier 2 ≈ Level 5" claim was not achievable for the declared flagship audience.
- Making the cumulative **760 h** the award does not rescue it either: the binding constraint is entry and experience, not hours, and **760 h exceeds every NSQF short-term band from Level 4 to 6.5 (top ≈690 h) while sitting far below the 1,200 h long-term norm.** It was framework-homeless.
- NCVET also requires qualification hours in **multiples of 30 or 15**. 380 and 760 were neither. **450 is 15 credits exactly.**
- **450 h sits inside PMKVY's 300–600 h Short-Term Training band**, so each tier is *independently fundable*. A single 760 h award was not.

### "Same level, scarcer competence" — the honest pitch

A fresh 2-year-trade ITI passout **already holds NSQF Level 4.** So Tier 1 offers no level progression, and pretending otherwise would be caught. Say the true thing instead: **an Electrician at Level 4 and an automation uptime technician at Level 4 are not interchangeable on a plant floor.** The award certifies a scarcer competence at the same level. That is a defensible claim; a fabricated level jump is not.

**No dead ends.** Design the Tier 1 practical exit so it *is* component 1 of the Tier 2 assessment — the precedent is German law, where the 2-year Maschinen- und Anlagenführer exam legally counts as Part 1 of the 3.5-year trade exam. Tier 2 + field experience → Tier 3 → the engineer 6-month training with credit for the overlap.

> **The split is justified by funding architecture, not by earnings.** Revision 1 argued a trainee needs to earn. True, but the sharper reason is that **each 450 h tier is separately fundable** where a 760 h block was fundable by nothing. For the earning problem, use **NAPS**: the Optional Trade route is legally available at 6 months post-ITI and lets the trainee earn during training.

---

## 6. The syllabus

### Tier 1 — OPERATE · 420 h trade + 30 h Employability

| # | Module | Sub-modules | Hours |
|---|---|---|---:|
| **O1** | **Safety & the Cage** `PROTECTED` | Shop-floor safety, PPE, LOTO, permit-to-work · The safety circuit: light curtains, scanners, interlocks, E-stop categories, muting · Safe entry, recovery and restart · What must never be bypassed. **Standards named: ISO 10218-1/-2, ISO/TS 15066, IEC 60204-1 (E-stop categories), ISO 13855 (light-curtain minimum distance), IEC 61496, ISO 13849-1 / IEC 62061** | **60** |
| **O2** | Anatomy of an Automated Cell | The seven fault domains · Reading a cell: layout drawing, I/O list, sequence of operations · Cycle logic | **50** |
| **O3** | Cell Operation & HMI | Start-up, shutdown, mode selection · HMI navigation and production screens · Changeover and first-piece verification · Cycle, throughput and quality monitoring | **60** |
| **O4** | Robot Handling for Technicians | Robot safety, jogging, frames and TCP in practical terms · Home and park positions; recovering a robot from a mid-cycle stop · Program selection, backup and restore; touch-up within authority | **60** |
| **O5** | Material Handling & Flow | Conveyors, transfers, accumulation, jams · Palletizing and depalletizing: layer patterns, slip sheets, stretch wrap, pallet quality · **Machine tending** · Dock discipline and AGV/AMR interaction | **50** |
| **O6** | Reading the Machine: Sensors, Signals & Alarms | Sensor types and what "no signal" means · Barcode, RFID and vision pass/fail signals · Alarm codes and what they tell you | **60** |
| **O7** | **The Fault Loop — Drills** `PROTECTED` | The six-step loop · Seeded-fault drills across all seven domains · Timed recovery assessment | **40** |
| **O8** | **Measurement & First-Piece Quality** ***(NEW)*** | Gauging, go/no-go, basic metrology · Reading an SPC chart · First-piece and in-process checks | **20** |
| **O9** | **Environment, Energy & Waste** ***(NEW)*** | E-waste and electronics disposal · Coolant and oil handling · **The cost of a compressed-air leak** · DGT's common environment-regulation outcome | **20** |
| **ES** | Employability Skills — **DGT/VSQ/N0102** | Communication, workplace conduct, digital and financial literacy, entrepreneurship basics | **30** |

### Tier 2 — MAINTAIN · 420 h trade + 30 h Employability

| # | Module | Sub-modules | Hours |
|---|---|---|---:|
| **M1** | Preventive & Autonomous Maintenance — **TPM *Jishu Hozen*, seven steps** | PM schedules, checklists, lubrication, tension, torque · Gripper and vacuum system care · Vision optics and lighting care · CMMS: work orders, spares, history | **60** |
| **M2** | Electrical, Pneumatic & **Hydraulic** First-Line Repair | Panel layout and safe working; fuses, breakers, contactors, PSUs · Sensor replacement, alignment and verification · Cable, connector and continuity faults · Pneumatics: FRL, valves, cylinders, leaks, air quality · **Hydraulics: pumps, valves, accumulators, filtration, leak and contamination control** | **90** |
| **M3** | Mechanical First-Line Repair | Gripper/EOAT change and tool changers · Fixture, guide and stop alignment · Conveyor belts, rollers, chains, couplings · Bearing and vibration first checks; fastener discipline | **50** |
| **M4** | Vision & Quality Subsystem Care | Why detection rate drops: lighting drift, focus, dirt, part change · Re-running calibration routines within authority · Model problem vs physical problem — when to call the engineer | **40** |
| **M5** | Structured Diagnosis & Escalation | Fault trees per domain; the binary-search technique · 5-Why and basic root cause · **Writing an escalation report an engineer can act on** · Spare-parts discipline and traceability | **60** |
| **M6** | Condition Monitoring & Working with the AI | Reading trends: vibration, current, temperature, cycle-time drift · What a predictive-maintenance alert means — **and what its limits are** · Feeding observations back | **30** |
| **M7** | Handover, Downtime & the Digital Shop Floor | Shift handover and logbook discipline · Downtime coding, OEE basics · Using the MES / operator-AI assistant; SOP retrieval | **30** |
| **M8** | **PLC & Control Logic Literacy — read-only** `PROTECTED` ***(NEW)*** | Ladder and function-block basics · **Opening the programming software in monitor mode** · Cross-referencing an alarm to logic · Reading forced I/O and status bits · Fieldbus diagnostic pages (Ethernet/IP, PROFINET, Modbus, OPC-UA) · Robot↔PLC handshake signals. **Monitor mode only — editing is RED** | **60** |
| **ES** | Employability Skills — **DGT/VSQ/N0102** | *(continued)* | **30** |

**Why Employability Skills sits outside the trade hours:** DGT allocates 120 h of it "common for all CTS trades," and **IAS/Q5601 carries DGT/VSQ/N0102 at 60 h as one of only four compulsory NOS.** Any NSQF certificate pursued here will mandate it. Carrying it as a separate common block — as DGT does — keeps the trade content honest at 840 h.

> **The credibility line nobody is using.** Japan **legally mandates** industrial-robot special education: a minimum of **10 hours for teaching work and 13 hours for inspection work** (Industrial Safety and Health Act Art. 59; Ordinance Art. 36 items 31–32). O1 is **60 hours, PROTECTED, must-pass, with automatic fail for bypassing a safety device — six times Japan's statutory floor.** India has no equivalent requirement. That converts an unverifiable posture into a benchmarked fact, and it hands BGR Neo a policy ask: a state-backed CoE could propose becoming the body that certifies to one.

---

## 7. Timeline · 26 weeks

| Weeks | Phase | Modules | Hours | ~h/wk | Facility |
|---|---|---|---:|---:|---|
| **1–2** | Safety induction & the cage | O1 | 60 | 30 | Classroom + safety rig |
| **3–7** | Operate: cell fundamentals | O2 · O3 · O4 | 170 | 34 | **Trainer cells** |
| **8–10** | Operate: flow & signals | O5 · O6 | 110 | 37 | Palletizing rig + trainer cells |
| **11–12** | Fault drills, measurement & environment | O7 · O8 · O9 | 80 | 40 | **LIVE CELLS** + fault-injection rig |
| **13** | Employability + **Tier 1 assessment** | ES | 30 | 30 | **LIVE CELLS** |
| — | **▸ Tier 1 award — Automation Cell Operator (450 h)** | | | | |
| **14–17** | Maintain: preventive & first-line repair | M1 · M2 | 150 | 37 | Benches + trainer cells |
| **18–20** | Maintain: control logic & mechanical | M8 · M3 | 110 | 37 | **LIVE CELLS** |
| **21–23** | Maintain: vision & structured diagnosis | M4 · M5 | 100 | 33 | **LIVE CELLS** |
| **24–26** | Condition monitoring, handover, employability + **final assessment** | M6 · M7 · ES | 90 | 30 | **LIVE CELLS** |
| | **Total** | | **900** | | |

**Live-cell window: weeks 11–13 and 18–26 — 12 weeks.** One number, stated once. *(Revision 1 carried three contradictory windows: a table saying 19–24, prose saying "from week 13," and a diagram showing 13–24.)*

**Hardware profile.** The engineer programmes are simulation-first and need no robots for their first half. **This one needs trainer cells from week 3** and cannot be staged the same way. What it needs early is the cheap kit — trainer cells and the fault-injection rig — with live industrial cells from week 11.

---

## 8. The Handover Model — restructured

The pedagogy was right; the mechanics were not. Revision 1 proposed daily two-shift handovers on the same cell for 12 weeks, "something they do 120 times." Four things broke it:

- **120 handovers is arithmetically impossible.** 120 working days is 24 weeks. Against the real 12-week live window it is ~60, and against the Tier 2 block alone, ~45.
- **A cell under integration cannot be handed to production daily.** Engineer block S3 is robot↔PLC↔vision↔safety integration and S2 is offline reprogramming; on those days the cell is *by definition* not in a validated safe state — while the model demanded it be "left in a safe, documented, run-able state at every handover." BGR Neo's own commissioning engineers would say so in the room.
- **Safety re-validation was uncosted.** ISO 10218 / ISO-TS 15066 require validation of safety functions after modification. §11 staffed one safety officer, shared.
- **It consumed the examination cell.** §9's unseen-cell assessment and §8's continuous occupancy cannot both be satisfied by one live cell hall.

### What it becomes

| | |
|---|---|
| **Handover cadence** | **Milestone-gated** — at FAT, SAT and production-ramp boundaries, roughly **6–8 per cohort** — plus daily shift-log handovers within the ITI cohort's own shifts (~45 across the Tier 2 block). Both are real M7 practice; neither is 120 |
| **Which cell** | A **ring-fenced training cell**, not a customer-acceptance cell |
| **Safety** | A named ISO 10218 / ISO-TS 15066 re-validation step at every milestone, **staffed and costed** — not the shared safety officer |
| **Assessment** | A **separate cell reserved unseen**, that no cohort trains on |
| **If sited in a government building** | The published TNSDC CoE EOI §12(1) puts the CoE in a government institution. Then the live-cell blocks become **contracted OJT/internship months at BGR Neo premises**, not CoE timetable. Design for both |

**What survives, and it is the good part:** the engineers' handover module (S6) gets a real audience; the technicians' genuine faults become the engineers' debugging work; and the trainees live the real arc of an integration project — FAT → SAT → production ramp → support — instead of hearing about it.

> ⚠ **Two external blockers, not researched, not cleared.** Trainee status and liability on a live production cell — the Factories Act 1948 "worker" definition, ESI applicability, insurer requirements, and **written customer consent** for trainees to operate a cell under a contractual acceptance test. Ask counsel and the insurer before the first cohort.

---

## 9. Assessment & certification

**Competency-based and practical throughout.** No written examination decides whether someone is a technician.

| | |
|---|---|
| **Continuous** | Per-module practical sign-off against observable outcomes |
| **Safety — must pass** | Written paper **and** practical. No compensation from other modules |
| **Tier 1 exit** | Operate an unseen cell through a full cycle including a changeover and first-piece check; make safe, diagnose to domain, escalate correctly |
| **Tier 2 exit — the real exam** | **An unseen cell with three seeded faults in different domains.** Make safe → locate → fix or escalate → restart → record. Scored on correctness, **time-to-recovery**, and whether the trainee stayed inside the authority boundary |
| **Automatic fail** | Bypassing or defeating a safety device. No exceptions, at any tier |

### The certification route — rebuilt

Revision 1 named an **IASC robotics QP that does not exist.** IASC's published catalogue is 16 QPs with **no robot operator, technician or programmer role**; its only robotics artefact is a standalone NOS; and its highest published QPs are **NSQF 5**, so the deck's "NSQF 5–8 via IASC" was wrong. CGSSC is not the alternative — its 24 Future Skills QPs are **NSQF 5.5–6.0 with degree entry**, and CSC/Q0505 sets a **minimum job entry age of 24**. The old "IASC vs CGSSC" flag was a false choice.

**The composite award, stated honestly:**

| Component | Level | Hours | Note |
|---|---|---|---|
| **Assessed spine** — IASC *Industrial Automation Technician* | NSQF 4 | 450 notional | The only automation QP whose entry names "10th + 1-year NTC/NAC"; min age 18. **Limits to state openly:** one technical NOS only, scoped to install-and-commission rather than operate-and-maintain — roughly a third of Tier 1 |
| **Robotics unit** — IASC *Introduction of Industrial Robotics* | NSQF 4 | 60 h / 2 cr | A standalone NOS, **not a job role**. Matches O4; must be bolted onto a QP or carried as a micro-credential |
| **Compulsory** — **DGT/VSQ/N0102** Employability Skills | — | 60 h | Compulsory NOS inside the spine QP |
| **Wrapper** — BGR Neo CoE certificate | — | balance | Carries the seven domains, the Fault Loop and the authority boundary |
| **Overlay** — FANUC **FCR-O1/O2** (Tier 1), **FCR-T1/T2** (Tier 2) | — | ≥80 h recommended | Deliverable inside O4 + O7. Neutralises FANUC as a rival |

**Excluded, with reasons:** IASC's *Industrial Automation Specialist* (NSQF 5) — min age 21 **and** 1 year's experience, and it is a design/build qualification, not a maintenance one. All CGSSC robotics QPs — 5.5–6.0, degree entry, age 24. ESSCI ELE/Q7203 — Level 3, desktop robotics.

**Alternative spine to evaluate first, not adopt blind:** NIELIT's *Robotic Programming and Maintenance Technician* (NQR 2022/EHW/NIELIT/06116), NSQF 4, 450 h — its job roles are almost exactly this tier ladder and 450 h sits inside the Level 4 band. But **219 of its 450 hours are programming and only 17 are maintenance**, and its NQR entry shows approval and validity dates as "N.A." Confirm live status in writing with NIELIT Chennai.

> ⚠ **Name no QP code until it is confirmed in writing.** IASC's approved and pipeline lists **use colliding codes** — several codes denote two different job roles — and at least two show review dates that lapsed in June 2025. No code taken from the website is safe to file.

### The bigger ask

Rather than only asking to run a CoE, ask **TNSDC to sponsor a new qualification through NSQC with BGR Neo as industry author and first delivery partner.** Precedent: the **Karnataka Skill Development Corporation** authored an NSQC-approved robot-operator qualification for ITI passouts (NCVET code **2022/CCM/KSDC/05937**, 20th NSQC, 30 June 2022) without being an integrator. A state skill corporation can and did do exactly this.

This matters because **NCVET's Adoption Guidelines forbid altering an adopted qualification's eligibility, level, mandatory NOS, learning outcomes or equipment.** The seven domains, the Fault Loop and the authority boundary **cannot be written into an existing QP** — the route is rigid exactly where the differentiation lives. Two legitimate paths: wrap a QP as the assessed floor and surround it with CoE content (the pilot), or sponsor a new qualification (the year-2 moat, 6–12+ months).

---

## 10. Lab requirement — the delta over Annexure A

For **30 trainees**. 15 pairs for bench work, 6 teams of 5 for cell work. Additional to `annexure-syllabus-and-lab.md`. Greenfield.

| Item | Purpose | Ratio | Qty | Cost |
|---|---|---|---:|---|
| **Fault-injection trainer cell** — instructor-switchable faults (sensor disconnect, low air, jam, gripper misalignment, dirty optics, comms drop) | O7, M5 — the core teaching instrument | 1 : 15 | **2** | MEDIUM |
| **Palletizing / depalletizing rig** — robot, pallet stations, case conveyor, layer tooling | O5 | — | **1** | HIGH |
| **Machine-tending cell** — robot + machine tool interface ***(promoted; 45% of India's robots are automotive/machine tending)*** | O5, M3 | — | **1** | HIGH |
| **PLC monitor-mode seats** — programming software, read-only licences ***(NEW, for M8)*** | M8 | 1 : 2 | **15** | LOW–MED |
| **Second set of Group F controls trainers** ***(NEW)*** — M8 makes the annexure's single-cohort sizing binding | M8, M2 | 1 : 5 | **6** | MEDIUM |
| **Hydraulic trainer boards** ***(NEW)*** | M2 | 1 : 5 | **6** | LOW–MED |
| **Basic metrology kit** ***(NEW)*** — gauges, go/no-go, calipers, height gauge, SPC worksheets | O8 | 1 : 5 | **6** | LOW |
| Electrical fault-finding trainer boards | M2 | 1 : 5 | **6** | LOW–MED |
| Pneumatic fault trainer boards | M2 | 1 : 5 | **6** | LOW |
| Sensor alignment & replacement bench kits | M2, O6 | 1 : 5 | **6** | LOW |
| Hand-tool sets + tool trolleys | M2, M3 | 1 : 5 | **6** | LOW |
| Torque wrenches, dial indicators, feeler gauges, alignment tools | M3 | 1 : 5 | **6** | LOW |
| Multimeters / clamp meters / insulation testers | M2 | 1 : 2 | **15** | LOW |
| Handheld vibration pen or analyser | M6 | shared | **3** | LOW–MED |
| Ultrasonic leak detector | M2, O9 | shared | **2** | LOW |
| Tablets — CMMS and SOP retrieval on the floor | M1, M7 | 1 : 2 | **15** | LOW |
| **CMMS / maintenance-management software** | M1, M5, M7 | site | **1** | LOW |
| Consumable spares pool — sensors, cables, connectors, vacuum cups, seals, filters, fuses | M1–M3 | — | **1 annual lot** | LOW–MED |
| PPE + lockers | — | 1 : 1 | **35** | LOW |
| Technician workshop bay + classroom (30) | Facility | — | **~120 m²** | MEDIUM |
| ~~Truck loading/unloading mock-up~~ | **Deleted** | — | — | — |

**Truck-loading mock-up deleted.** India's dock automation installed base is telescopic conveyors, not robots; robotic trailer unloading is a 2025-26 global product category with no evidenced TN installations to place graduates against. Teach dock discipline within O5 on the palletizing rig; revisit when a customer asks.

**No GPU workstations.** The engineer tier's largest line item is almost entirely absent — ~10 basic PCs plus the 15 tablets and 15 PLC seats cover it. This tier is **cheap on compute and expensive on hands-on time**; the engineer tier is the reverse.

---

## 11. Staffing

| Role | Qty | Profile |
|---|---:|---|
| Lead trainer | 1 | Senior commissioning / service engineer, 10+ yrs, has done real handovers |
| Trainers | 3 | **Field service technicians, 5+ yrs** — not AI engineers. 1 : 10 for hands-on |
| Safety officer | **1 dedicated** | **No longer shared.** Owns the must-pass safety assessment *and* the ISO 10218 / ISO-TS 15066 re-validation at every milestone handover |
| Controls trainer | 1 | PLC and fieldbus competence for M8 — a distinct skill set from robot service |
| Lab technician | 1 | Keeps the trainer rigs and fault-injection cells serviceable |
| Placement & industry liaison | 1 | Shared |

> **Instructor certification is a launch prerequisite, not a year-2 SKU.** Germany requires the AEVO trainer qualification before anyone may train at all; FANUC and SACA both require instructor certification before delivery. Revision 1 had an *experience* gate but no *qualification* gate — which is the obvious counter to this section's own argument that trainers must be field technicians.

---

## 12. Placement & the commercial case

| Channel | Why it works |
|---|---|
| **BGR Neo's own installs** | Every commissioned cell needs operators |
| **Customers of every BGR Neo integration** | Bundle **certified** technicians — assessed on time-to-recovery, with recertification — not a week of familiarisation, which every integrator already gives away |
| **Recertification & refresher** | An annuity: operators change, cells persist, certification lapses |
| **Third-party TN plants** | Any plant with existing automation and a maintenance gap |
| **Faculty development for college and ITI teachers** | **Required by the TNSDC CoE EOI §10(d).** Distinct from train-the-trainer for our own delivery |

**Commit to a placement rate.** The TNSDC CoE EOI §10(d) requires **at least 70%**, reviewed quarterly and terminable for poor performance; the Delta CoE at Bargur advertises 70% placement assurance. Pressure-test the number against BGR Neo's installed base before committing to it.

**The funding line that actually fits.** The **Tamil Nadu Industrial Policy 2021** training subsidy is **₹4,000/worker/month for 6 months** — ₹6,000 for women, transgender persons, persons with disabilities and SC/ST — i.e. **₹24,000–36,000 per trainee across exactly this duration.** It is an *employer* subsidy tied to an investing project, so it fits BGR Neo's own hires and its customers' plants rather than open-market cohorts. That is what turns "certified technicians included" into a costed line rather than a slogan.

---

## 13. Open decisions

1. **Cohort size and ramp.** Year 1 at 30. Give year 3 an actual number and the cell count it implies.
2. **Siting** — private BGR Neo premises or a government building? Decides whether §8 survives as designed.
3. **Milestone-handover model approved?** It raises operating cost and requires a dedicated safety officer.
4. **~~NAPS as a funding route~~ — closed, and corrected.** NAPS-2 §4.4 provides **no reimbursement of basic training cost**; support is 25% of stipend capped at ₹1,500/month **paid to the apprentice** — about ₹9,000 over six months, nothing to the trainer. **NAPS is an employment wrapper, not funding.** Its real value: the Optional Trade is legally available at 6 months post-ITI, it lets trainees earn during training, and it subsidises customers who absorb BGR Neo-trained technicians.
5. **~~Fee posture~~ — closed by evidence.** ITI automation freshers in Chennai earn **₹12,000–18,000/month**, rising to ₹18,000–22,000 with real PLC and fault-finding exposure. A 6-month course cannot be trainee-funded against ₹72,000–108,000 of foregone earnings. **Government- or employer-funded.** The only live question is which channel.
6. **Do we award Tier 1 standalone from day one,** or run only the full 6-month award in the pilot?
7. **Written customer consent** for trainees to operate cells under a live acceptance test. ***(NEW)***
8. **Insurer and legal sign-off** on trainee status and liability on a registered factory floor. ***(NEW)***
9. **Whether to pursue the qualification-sponsorship ask** to TNSDC (§9). ***(NEW)***

> **Correct the counterparty.** Anything ITI-shaped runs through the **Directorate of Employment & Training (DET)**, not TNSDC. DET owns the 71 Industry 4.0 centres, the trade list and the ITI network. TNSDC owns the skilling schemes and the CoE route. Revision 1 aimed the whole tier at the wrong department.

---

*All NSQF levels, QP references, funding rates and scheme claims above carry `⚠` where unverified and require confirmation at source before filing. Trade counts are from TN DET's published list. Equipment quantities assume zero existing assets. No rupee figures for equipment by design — cost signals only. Corrections in this revision derive from `curriculum/VALIDATION-REPORT.md`, which carries source URLs and confidence levels throughout.*
