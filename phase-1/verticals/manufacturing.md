# Vertical Overlay — Industrial Manufacturing Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Industrial Manufacturing · **Axis B:** B1 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A5 manipulation & grasping · A1 machine vision/3D perception · A4 compliant/force control · A4 classical/optimal control & MPC · A3 motion planning · A10 safety & verification · A10 calibration & integration · A9 HRI/cobots · A1 tactile/force · **Typical platforms (C):** C1 fixed arm · C2 mobile manipulator · C5 humanoid (emerging) · C3 AMR (intralogistics)

---

## 1. Definition & Scope
The largest and oldest robotics vertical: roughly **4.66M industrial robots** in operation worldwide, **~542,000 installed in 2024**, with installations forecast to pass **700,000/yr by 2028** `~` (IFR *World Robotics 2025*). The defining trait is that the robot is one node in a **PLC-governed production cell** — cycle-time-bound, fixture-dependent, and interlocked with the line — so mature **machine-safety and CE conformity are part of the engineering, not an afterthought**. Sub-segments: **welding & arc/seam-tracking** (arc and resistance-spot), **assembly** (incl. contact-rich insertion), **machine tending** (CNC/press/injection-mould load–unload), **material handling & palletizing**, **bin picking**, and **painting/coating & dispensing** (plus in-line vision inspection). Demand concentrates in **electrical/electronics** (now the most-robotized sector, ~129k units in 2024) and **automotive**; Asia takes ~74% of installations.

## 2. Core Capabilities It Builds On
- **A5 Manipulation & grasping** *(load-bearing)* — bin picking from unstructured totes, high-mix assembly, palletizing; sub-mm repeatability under hard cycle-time budgets. → `manipulation-and-grasping`
- **A1 Machine vision & 3D perception** — 2D/3D-guided picking, structured-light bin picking, weld-seam finding, defect inspection; deterministic, high-throughput, controlled lighting. → `computer-vision-3d-perception`
- **A4 Compliant/force control** — peg-in-hole and snap-fit assembly, force-limited insertion, machine-tending fit-up. → `whole-body-compliant-control`
- **A4 Classical/optimal control & MPC** — high-speed trajectory tracking, vibration suppression, weld/dispense path accuracy. → `control-classical-optimal-mpc`
- **A3 Motion planning** — collision-free paths in fixtured cells, weld-path generation, offline programming. → `motion-planning-navigation`
- **A10 Safety & verification** *(differentiator)* — PL/SIL-rated safety functions (§6). → `safety-verification-assurance`
- **A10 Calibration & integration** — hand-eye calibration, tool-center-point (TCP) setting, cell bring-up. → `calibration-integration-mlops`
- **A9 HRI/cobots** — fenceless collaborative operation; **A1 tactile/force** — contact detection for insertion. → `human-robot-interaction` · `tactile-force-sensing`

## 3. Domain Knowledge Required
Beyond robotics, the engineer must acquire **production/manufacturing engineering**: cycle/takt time, throughput and **OEE**; **GD&T** (ASME Y14.5) and tolerance stack-up; **fixturing/jig and end-of-arm-tooling (EOAT) design**; and per-segment process physics — **weld metallurgy** and GMAW/RSW parameters, paint/coating and adhesive dispensing, press/mould tending. Critically, **OT/controls literacy**: PLC ladder logic, industrial fieldbus (**PROFINET, EtherNet/IP, EtherCAT**), safety buses (**PROFIsafe, CIP Safety, FSoE**), and SCADA/MES/OPC-UA. Plus **lean / Six Sigma / DFMA** and Industry-4.0 digital-twin/MES practice, and **vendor robot programming** (KUKA KRL, ABB RAPID, FANUC TP/KAREL, Yaskawa INFORM) with offline tools (RobotStudio, RoboGuide, Process Simulate, RoboDK). This OT-plus-production-engineering layer is what a generalist roboticist lacks.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ISO 12100:2010** — safety of machinery, general risk-assessment principles; the mandatory starting point for every cell.
- **ISO 10218-1:2025** — safety of the industrial robot itself (inherently safe design); new edition in force since 2025.
- **ISO 10218-2:2025** — safety of robot **applications/cells** (integration, commissioning, operation); now absorbs the collaborative-robot requirements.
- **ISO/TS 15066:2016** — cobot **power-&-force-limiting** biomechanical limits; largely folded into ISO 10218-2:2025.
- **ANSI/A3 R15.06-2025** — US national robot-safety standard, harmonized with ISO 10218-1/-2:2025 (RIA is now **A3**; supersedes the old "ANSI/RIA R15.06" naming in the taxonomy).
- **ANSI/A3 R15.08** — US safety standard for **industrial mobile robots (IMR)**; Part 3 (use) added recently `~`.
- **ISO 13849-1:2023** / **IEC 62061:2021** — functional safety of safety-related control systems; set the required **Performance Level (PL a–e)** / **SIL** per safety function. **Hard gate.**
- **EU Machinery Regulation (EU) 2023/1230** — replaces Machinery Directive 2006/42/EC; **applies from 20 Jan 2027**; the CE-marking gate for the EU market, explicitly covering AI/autonomous machinery. **Hard gate.**
- **NFPA 79** / **IEC 60204-1** — electrical safety of industrial machinery (US / international). **OSHA** (US) has no robot-specific rule — it enforces via the General Duty Clause and references R15.06. Supporting: **ISO 9283** (performance/repeatability test), **ISO 8373** (vocabulary).

## 5. Specialized Hardware, Sensors & Environment
**EOAT**: 2/3-finger, vacuum and magnetic grippers, servo grippers, automatic tool changers; **6-axis force-torque sensors** (e.g. ATI). **Machine vision**: 2D/3D smart cameras (Cognex, Keyence) and structured-light/laser-profile 3D for bin picking (Zivid, Photoneo); **arc/laser seam-tracking** heads (Servo-Robot, Meta). **Safety hardware**: safety-rated laser scanners and light curtains (SICK, Pilz), safety PLCs, safety-rated monitored-stop, e-stops. **Arms**: FANUC, ABB, KUKA, Yaskawa (the "Big Four") plus Universal Robots cobots. **Environment**: IP54–IP67 against dust/coolant/wash-down, weld-spatter covers, ATEX-rated paint booths, electronics/semiconductor cleanrooms; high payload with sub-mm repeatability (tested to ISO 9283) and hard-real-time deterministic control.

## 6. Safety Envelope & Criticality
**High.** A fault means worker **crush/impact injury or death** (heavy, fast, high-inertia arms) plus costly line-down. Governing chain: **ISO 12100** risk assessment → **ISO 10218-1/-2:2025** → PL (**ISO 13849-1:2023**) / SIL (**IEC 62061**) safety functions → safeguarding hardware. The four collaborative modes (ISO/TS 15066, now folded into ISO 10218-2) are **safety-rated monitored stop, hand-guiding, speed-&-separation monitoring (SSM), and power-&-force-limiting (PFL)**. V&V burden: documented risk assessment, validation of each safety function to its target PL/SIL, CE / Machinery-Regulation conformity, and lockout-tagout — a **hard compliance gate before power-on**. High rather than Critical because harm is localized and guardable, not patient-fatal as in surgical.

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (manipulation/vision/control), this vertical **adds**:
- **Valued degrees:** **Manufacturing / Industrial / Production Engineering** and **Mechatronics** rise to first-class alongside the CS/EE/Robotics core; ME with a manufacturing-processes focus.
- **Domain credentials:** vendor academies — **FANUC** (FANUC-NOCTI, strongest US signal), **KUKA College, ABB University, Universal Robots Academy**, Yaskawa; cross-vendor **SACA** and **Siemens SMSCP** mechatronics; **A3 Certified Robot Integrator**; **TÜV/UL functional-safety** (CFSE/CFSP) for ISO 13849 / IEC 62061 / IEC 61508; **ASQ Six Sigma**; PLC/controls certifications.
- **Feeder capability profiles:** `manipulation-and-grasping`, `computer-vision-3d-perception`, `whole-body-compliant-control`, `control-classical-optimal-mpc`, `calibration-integration-mlops`, `safety-verification-assurance`, `motion-planning-navigation`, `human-robot-interaction`.
- **Conversion:** "capability engineer + PLC/OT integration + machine-safety (ISO 10218 / ISO 13849) competency + one vendor platform (FANUC/KUKA/ABB/UR)."

## 8. Trending & Notable `⏱ as of mid-2026`
**Humanoids on the line** are the headline: **Figure 03** at BMW Spartanburg and **Apptronik Apollo** at Mercedes-Benz (MO360), with **Tesla Optimus** piloting internally at Fremont and BMW Leipzig trialling **Hexagon AEON** — **Robotics-as-a-Service** pricing (~$25/robot-hour `~`) is the commercial unlock. **Industrial physical AI / foundation models:** **NVIDIA Isaac GR00T** (N1.x), **Cosmos** world foundation models, and Isaac Sim/Lab for sim-to-real, enabling natural-language pick-and-place, on a **reshoring/reindustrialization** tailwind. **Flexible high-mix automation:** learned bin picking, **programming-by-demonstration** and VLA policies cutting integration cost, tied to digital-twin/MES cells. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Robot OEMs & platforms:** FANUC · ABB · KUKA · Yaskawa (Big Four) · Universal Robots (Teradyne) · Kawasaki · Stäubli · Comau · Mitsubishi Electric · Epson · Doosan · Techman; **humanoid entrants** Figure · Apptronik · Tesla · Agility · 1X · Hexagon.
- **Vision, sensors & safety:** Cognex · Keyence · SICK · Pilz · ATI · Zivid · Photoneo · Servo-Robot.
- **Automation/OT, integrators & AI compute:** Siemens · Rockwell Automation · Schneider Electric · Dürr (paint) · A3 Certified Robot Integrators; **NVIDIA** (Isaac/GR00T/Cosmos).
- **Regulators/standards & applied research:** ISO/TC 299 · CEN/TC 310 · IEC · ANSI · **A3** (formerly RIA) · OSHA · TÜV/UL · NFPA · EU Commission; **ARM Institute** (Manufacturing USA) · Fraunhofer IPA · UK MTC · CMU RI.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B2 logistics/warehouse** (AMRs and intralogistics feeding cells), **B15 food processing**, **B14 inspection & maintenance** (in-line quality), and **B9 humanoid/service** (shared platforms). Most-used platforms: **C1 fixed arm** (primary), **C2 mobile manipulator**, **C5 humanoid** (emerging), and **C3 AMR** for intralogistics.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B1.*
