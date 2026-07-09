# Vertical Overlay — Industrial Manufacturing Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified this pass · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Industrial Manufacturing · **Axis B:** B1 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A5 manipulation & grasping · A1 machine vision/3D perception · A4 compliant/force control · A4 classical/optimal control · A3 motion planning · A10 safety & verification · A10 calibration & integration · A9 HRI/cobots · A1 tactile/force · **Typical platforms (C):** C1 fixed arm · C2 mobile manipulator · C5 humanoid (emerging) · C3 AMR (intralogistics)

---

## 1. Definition & Scope
The largest, oldest robotics vertical: ~**4.66M** industrial robots in operational use worldwide, **542,000 installed in 2024**, forecast to pass **700,000/yr by 2028** (IFR *World Robotics 2025*). Sub-segments: **welding/seam-tracking** (arc & resistance spot), **assembly** (incl. contact-rich insertion), **machine tending** (CNC/press/injection-mould load–unload), **material handling/palletizing**, **bin picking**, **painting/coating & dispensing**, and **quality/vision inspection**. Demand concentrates in **electrical/electronics** (now the most-robotized sector, ~129k units in 2024) and **automotive**; Asia takes ~74% of installs. The overlay's defining trait: the robot is one node in a **PLC-governed production cell**, and mature **machine-safety + CE compliance** is part of the engineering, not an afterthought.

## 2. Core Capabilities It Builds On
- **A5 Manipulation & grasping** *(load-bearing)* — bin picking from unstructured totes, high-mix assembly, palletizing; sub-mm repeatability, cycle-time-driven. → `manipulation-and-grasping`
- **A1 Machine vision & 3D perception** — 2D/3D-guided pick, structured-light bin picking, seam finding, defect inspection; deterministic, high-throughput, controlled lighting. → `computer-vision-3d-perception`
- **A4 Compliant/force control** — peg-in-hole/snap-fit assembly, force-limited insertion, machine-tending fit. → `whole-body-compliant-control`
- **A4 Classical/optimal control & MPC** — high-speed trajectory tracking, vibration suppression, weld/dispense path accuracy. → `control-classical-optimal-mpc`
- **A3 Motion planning** — collision-free paths in fixtured cells, weld-path & offline programming. → `motion-planning-navigation`
- **A10 Safety & verification** — the differentiator; PL/SIL-rated safety functions (§6). → `safety-verification-assurance`
- **A10 Calibration & integration** — hand-eye calibration, tool-center-point (TCP), cell bring-up. → `calibration-integration-mlops`
- **A9 HRI/cobots** — fenceless collaborative operation. → `human-robot-interaction`; **A1 tactile/force** → `tactile-force-sensing`

## 3. Domain Knowledge Required
Beyond robotics, an engineer must acquire **production/manufacturing engineering**: cycle/takt time, throughput, **OEE**; **GD&T** (ASME Y14.5) & tolerance stack-up; **fixturing/jigs & EOAT design**; process specifics per segment (**weld metallurgy** & GMAW/RSW parameters, paint/coating, adhesive dispensing, press/mould tending); **OT/controls** — PLC ladder logic, industrial fieldbus (PROFINET, EtherNet/IP, EtherCAT), safety buses (PROFIsafe, CIP Safety, FSoE), SCADA/MES/OPC-UA; **lean / Six Sigma / DFMA**, Industry 4.0 digital-twin/MES; and **vendor robot programming** (KUKA KRL, ABB RAPID, FANUC KAREL/TP, Yaskawa INFORM) plus offline programming (RobotStudio, Roboguide, Process Simulate, RoboDK). This OT + production-engineering literacy is what a generalist roboticist lacks.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ISO 12100:2010** — safety of machinery, general risk-assessment principles; the mandatory starting point for every cell.
- **ISO 10218-1:2025** — safety of the industrial robot itself (inherently safe design); **new edition in force since 1 Apr 2025**. [iso.org/standard/73933](https://www.iso.org/standard/73933.html)
- **ISO 10218-2:2025** — safety of robot **applications/cells** (integration, commissioning, operation); now **absorbs the collaborative-robot requirements**. [iso.org/standard/73934](https://www.iso.org/standard/73934.html)
- **ISO/TS 15066:2016** — cobot **power-&-force-limiting** biomechanical limits; largely **folded into ISO 10218-2:2025**.
- **ANSI/A3 R15.06-2025** — US national standard, adapted from ISO 10218-1/-2:2025 (first revision in ~15 yrs). NOTE: RIA rebranded to **A3**, so the taxonomy's "ANSI/RIA R15.06" is now **ANSI/A3 R15.06-2025**. [automate.org](https://www.automate.org/industry-insights/ansi-a3-publish-revised-r15-06-industrial-robot-safety-standard)
- **ANSI/A3 R15.08** — US safety standard for **industrial mobile robots (IMR)**; Part 3 (use) added ~2025.
- **ISO 13849-1:2023** / **IEC 62061:2021** — functional safety of safety-related control systems; set the required **Performance Level (PL a–e)** / **SIL** per safety function. **Hard gate.** [iso.org/obp 73481](https://www.iso.org/obp/ui/en/#!iso:std:73481:en)
- **EU Machinery Regulation (EU) 2023/1230** — replaces Machinery Directive 2006/42/EC, **applies 20 Jan 2027**; CE-marking gate for the EU market, explicitly covers AI/autonomous machinery. **Hard gate.** [osha.europa.eu](https://osha.europa.eu/en/legislation/directive/regulation-20231230eu-machinery)
- **NFPA 79** / **IEC 60204-1** — electrical safety of industrial machinery (US / international). **OSHA** (US) has no robot-specific rule — it enforces via the General Duty Clause and references R15.06. Supporting: **ISO 9283** (performance/repeatability test), **ISO 8373** (vocabulary).

## 5. Specialized Hardware, Sensors & Environment
**EOAT**: 2/3-finger, vacuum & magnetic grippers, servo grippers, tool changers; **6-axis force-torque sensors** (ATI). **Machine vision**: 2D/3D, structured-light/laser-profile 3D for bin picking (Zivid, Photoneo), smart cameras (Cognex, Keyence); **arc/laser seam-tracking** (Servo-Robot, Meta). **Safety hardware**: safety-rated laser scanners & light curtains (SICK, Pilz), safety PLCs, safety-rated monitored stop, e-stops. Arms: **FANUC, ABB, KUKA, Yaskawa** (Big Four) + Universal Robots cobots. **Environment**: IP54–IP67 dust/coolant/wash-down, weld-spatter covers, ATEX paint booths, electronics/semiconductor cleanrooms, high payload & sub-mm repeatability (ISO 9283), hard real-time/deterministic control.

## 6. Safety Envelope & Criticality
**High.** A fault means worker **crush/impact injury or death** (heavy, fast, high-inertia arms) plus costly line-down. Governing chain: **ISO 12100** risk assessment → **ISO 10218-1/-2:2025** → PL (**ISO 13849-1:2023**) / SIL (**IEC 62061**) safety functions → safeguarding. Four collaborative modes (ISO/TS 15066 → ISO 10218-2): **safety-rated monitored stop, hand-guiding, speed-&-separation monitoring (SSM), power-&-force-limiting (PFL)**. V&V burden: documented risk assessment, safety-function validation to the target PL/SIL, CE/Machinery-Regulation conformity, and LOTO — a **hard compliance gate before power-on** (High, not Critical: injuries are localized, not patient-fatal as in surgical).

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (manipulation/vision/control), this vertical **adds**:
- **Valued degrees:** **Manufacturing / Industrial / Production Engineering** and **Mechatronics** rise to first-class alongside the CS/EE/Robotics core; ME with a manufacturing-processes focus.
- **Domain credentials:** **FANUC Academy / FANUC-NOCTI** (strongest US industrial signal), **KUKA College, ABB University, Universal Robots Academy**, Yaskawa training; **SACA** & **Siemens SMSCP** (cross-vendor mechatronics); **A3 Certified Robot Integrator**; **TÜV/UL Certified Functional Safety** (CFSE/CFSP) for ISO 13849/IEC 62061/IEC 61508; **ASQ Six Sigma**; PLC/controls certs.
- **Feeder capability profiles:** `manipulation-and-grasping`, `computer-vision-3d-perception`, `whole-body-compliant-control`, `control-classical-optimal-mpc`, `calibration-integration-mlops`, `safety-verification-assurance`, `motion-planning-navigation`, `human-robot-interaction`.
- **Conversion:** "capability engineer + PLC/OT integration + machine-safety (ISO 10218 / ISO 13849) competency + one vendor platform (FANUC/KUKA/ABB/UR)."

## 8. Trending & Notable `⏱ as of mid-2026`
- **Humanoids on the line:** **Figure 03** at BMW Spartanburg (30,000+ X3 built over an 11-month run, ~$25/robot-hour **RaaS**); **Apptronik Apollo** at Mercedes-Benz (MO360 integration, equity stake); **Tesla Optimus** (1,000+ internal units at Fremont, Gen 3); BMW Leipzig piloting **Hexagon AEON**. RaaS pricing is the commercial unlock. [ifactoryapp](https://ifactoryapp.com/industries/manufacturing-plant/humanoid-robots-factory-floor-figure-apollo-mercedes)
- **Industrial physical AI / foundation models:** **NVIDIA Isaac GR00T N1.5→N1.7**, GR00T-Dreams synthetic motion, **Cosmos 3.0** world foundation model, Isaac Sim/Lab for sim-to-real; natural-language pick-and-place (AeiRobot ALICE4). Reindustrialization/reshoring tailwind. [nvidianews](https://nvidianews.nvidia.com/news/nvidia-us-manufacturing-robotics-physical-ai)
- **Flexible/high-mix automation:** learned bin picking, **programming-by-demonstration** and VLA policies cutting integration cost; digital-twin/MES-tied cells. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Robot OEMs:** FANUC · ABB · KUKA · Yaskawa (Big Four) + Universal Robots (Teradyne) · Kawasaki · Stäubli · Comau · Mitsubishi Electric · Epson · Doosan · Techman.
- **Humanoid entrants:** Figure · Apptronik · Tesla · Agility · Hexagon · 1X.
- **Vision/sensors/safety:** Cognex · Keyence · SICK · Pilz · ATI · Zivid · Photoneo · Servo-Robot.
- **Automation/OT & integrators:** Siemens · Rockwell Automation · Schneider · Dürr (paint) · Comau; A3 Certified Robot Integrators. **Compute/AI:** NVIDIA (Isaac/GR00T/Cosmos).
- **Regulators/standards:** ISO/TC 299 & CEN/TC 310 · IEC · ANSI · **A3** (formerly RIA) · OSHA · EU Commission · TÜV/UL · NFPA.
- **Academic/applied:** **ARM Institute** (Manufacturing USA, Pittsburgh) · Fraunhofer IPA · UK MTC · CMU RI · Michigan.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B2 logistics/warehouse** (intralogistics, AMRs feeding cells), **B15 food processing**, **B14 inspection & maintenance** (quality), **B9 humanoid/service**. Most-used platforms: **C1 fixed arm** (primary), **C2 mobile manipulator**, **C5 humanoid** (emerging), **C3 AMR**.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B1.*
*Sources: IFR World Robotics 2025 ([ifr.org](https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years)); ISO 10218-1/-2:2025 ([iso.org](https://www.iso.org/standard/73933.html)); ANSI/A3 R15.06-2025 ([automate.org](https://www.automate.org/industry-insights/ansi-a3-publish-revised-r15-06-industrial-robot-safety-standard), [therobotreport](https://www.therobotreport.com/updated-ansi-a3-standards-address-industrial-robot-safety/)); ISO 13849-1:2023 ([iso.org](https://www.iso.org/obp/ui/en/#!iso:std:73481:en)); EU Machinery Reg 2023/1230 ([osha.europa.eu](https://osha.europa.eu/en/legislation/directive/regulation-20231230eu-machinery)); NVIDIA physical AI ([nvidianews](https://nvidianews.nvidia.com/news/nvidia-us-manufacturing-robotics-physical-ai)); humanoids-in-factories ([ifactoryapp](https://ifactoryapp.com/industries/manufacturing-plant/humanoid-robots-factory-floor-figure-apollo-mercedes)). Verified 2026-07-09.*
