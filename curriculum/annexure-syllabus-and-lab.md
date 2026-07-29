# Annexure — Syllabus, Timeline & Lab Requirement

**BGR Neo Centre of Excellence · AI for Robotics**
**Attachment to the CoE proposal · Revision 2 · 29 July 2026**

---

## How to read this annexure

- **Three programmes, two module libraries.** A **1-year PG Diploma** and a **6-month Training Programme** are cut from one graduate-tier library. A **6-month post-ITI Technician Programme** runs on its own library. Hours in Part 1a are shown as `Diploma / Training`.
- **Cohort size for all quantities: 30 students per programme.** Working groups: **15 pairs** for bench work, **6 teams of 5** for live-cell work.
- **Greenfield.** This assumes **BGR Neo holds no robots or lab assets today.** Everything required is listed. Anything already owned is netted off at procurement.
- **No prices.** Each line carries a relative cost signal — **LOW · MEDIUM · HIGH**. Costing is finance's to complete.
- **Revision 2** applies the corrections in `curriculum/VALIDATION-REPORT.md`. The diploma is now **1,200 h / 40 credits** (UGC's cap for a PG Diploma), a **PLC module** has been added to both tiers, the specialization block is rebalanced so the station rotation is schedulable, and an **assessment cell** is ring-fenced.

---

# PART 1a — SYLLABUS · GRADUATE TIER

**Awarding body: Loyola College, Chennai** (autonomous, arts & science, University of Madras, UGC-regulated) for the PG Diploma. The 6-month Training Programme carries a **BGR Neo CoE certificate plus vendor certificates** — *not* an NSQF/QP certificate, because both candidate Qualification Packs set a minimum job-entry age of 24 and exclude a fresh-graduate cohort.

## 1.1 Structure at a glance

| Block | Title | Diploma | Training |
|---|---|---:|---:|
| **F** | Foundations | 230 h | 90 h |
| **R** | Core Robotics | 310 h | 200 h |
| **D** | AI Depth | 240 h | 140 h |
| **S** | **Industrial Specialization** *(identical in both)* | **260 h** | **260 h** |
| **C** | Capstone & Employability | 160 h | 120 h |
| | **TOTAL** | **1,200 h** | **810 h** |
| | *Credits @ 30 notional h* | ***40 — a UGC PG Diploma exactly*** | *27* |

*1,200 h is **notional learning hours** per NCrF — directed contact plus supervised self-study — not contact hours alone.*

## 1.2 Block F — Foundations · 230 h / 90 h

| # | Module | Sub-modules | Diploma | Training |
|---|---|---|---:|---:|
| **F1** | Engineering Maths for AI | Linear algebra & transforms · Probability & statistics · Calculus & numerical methods · Optimization basics | **80** | **30** |
| **F2** | Programming | Python for engineers · Data structures & algorithms · C++ essentials for robotics · Linux, Git & dev workflow | **90** | **30** |
| **F3** | Classical Machine Learning | Supervised learning · Unsupervised learning & model evaluation | **30** | **0** |
| **F4** | **Industrial Context, Safety & Standards** | Manufacturing processes & factory layout · **ISO 10218-1/-2, ISO/TS 15066, IEC 60204-1, ISO 13855, ISO 13849-1** & risk assessment · Shop-floor discipline (LOTO, PPE, 5S, permit-to-work) | **30** | **30** |

## 1.3 Block R — Core Robotics · 310 h / 200 h

| # | Module | Sub-modules | Diploma | Training |
|---|---|---|---:|---:|
| **R1** | Robot Kinematics & Dynamics | Coordinate frames & homogeneous transforms · Forward & inverse kinematics · Jacobians, singularities & workspace · Dynamics, payload & reach sizing | **60** | **40** |
| **R2** | **Industrial Robot Programming** | Teach-pendant programming (jogging, frames, TCP, I/O) · Motion types & production program structure · Offline programming & simulation · **Multi-vendor: FANUC / ABB / KUKA / UR** | **60** | **60** |
| **R3** | ROS 2 + MoveIt 2 | ROS 2 core (nodes, topics, services, actions) · URDF, TF2, RViz & launch · MoveIt 2 planning & pick-place · ros2_control | **60** | **30** |
| **R4** | Feedback Control Fundamentals | Modelling & transfer functions · PID design & tuning · Servo drives, encoders & motion profiles · State-space intro | **40** | **20** |
| **R5** | Motion Planning & Mobile Robotics | Path & trajectory planning · SLAM & localization basics · Nav2 & AMR fleet basics (VDA 5050) | **30** | **10** |
| **R6** | **Industrial Controls & PLC** *(new in Rev 2)* | Ladder logic & function blocks · PLC ↔ robot handshaking · Industrial networks (Ethernet/IP, PROFINET, Modbus, OPC-UA) · HMI design · Safety circuits & validation | **60** | **40** |

*R6 exists because industrial cells run PLCs and vendor stacks, not ROS 2. Revision 1 buried all controls content inside S3, where 60 h had to cover PLC programming, four fieldbuses, HMI design and safety validation — while the lab bought PLC trainers that no module had hours to use. R3 was reduced to pay for it.*

## 1.4 Block D — AI Depth · 240 h / 140 h

| # | Module | Sub-modules | Diploma | Training |
|---|---|---|---:|---:|
| **D1** | Deep Learning | Neural network fundamentals & training · CNNs & image models · Transfer learning & small-data regimes · Deployment & edge inference | **80** | **50** |
| **D2** | **Machine Vision for Manufacturing** | Industrial imaging: optics, lighting & camera selection · Classical vision & metrology · Deep-learning defect detection · 3D vision, point clouds & 6-DoF pose for bin picking · Hand-eye calibration | **90** | **70** |
| — | **Elective pool — diploma students choose 2 of 4** | | **70** | **20** |

| Elective | Content | Hours |
|---|---|---:|
| **D3** | Reinforcement & imitation learning · sim-to-real & domain randomization | 35 |
| **D4** | Industrial data & time series · OPC-UA/MQTT & historians · anomaly detection · dashboards | 35 |
| **D5** | Agentic AI & LLM applications for manufacturing — MES/ERP agents, conversational HMI, guardrails | 35 |
| **D6** | Simulation & digital-twin depth — physics engines, synthetic data, real2sim | 35 |

*The Training Programme takes **D4 only, at 20 h**. D3 is tagged droppable and is genuinely dropped from it.*

## 1.5 Block S — Industrial Specialization · 260 h **in both programmes**

> **Identical in the Diploma and the Training Programme.** Delivered on live industrial cells. Rebalanced in Revision 2 to near-equal dwell so six teams can actually round-robin six stations — the previous 50/50/60/40/30/30 split could not.

| # | Module | Sub-modules | Hours |
|---|---|---|---:|
| **S1** | Vision-Guided Pick & Place on a Live Cell | Cell design & cycle-time budgeting · Vision-guided part localization · Gripper/EOAT selection & integration · Build, run & optimize | **45** |
| **S2** | Welding / Dispensing OLP + Digital Twin | Process fundamentals · Offline programming & path generation · Digital-twin build & simulation validation · Download, touch-up & production proving | **45** |
| **S3** | Cell Integration | Robot ↔ PLC handshaking · Industrial networks in practice · HMI/SCADA · Safety circuit design, guarding & validation | **45** |
| **S4** | Predictive Maintenance & Quality Analytics | Condition monitoring (vibration, current, thermal) · Failure modes & remaining-useful-life · SPC & quality analytics on live line data | **40** |
| **S5** | Operator-Facing AI (MES/ERP + Conversational HMI) | MES/ERP data flows & production KPIs · AI assistants for SOPs and diagnostics · Guardrails, validation & deployment | **40** |
| **S6** | Calibration, Commissioning & Handover | Robot mastering, TCP & payload calibration (ISO 9283) · FAT/SAT protocols · Documentation, as-built drawings & **operator training** | **45** |

*S6's operator-training component has a real audience — the ITI cohort. See Part 2.4.*

## 1.6 Block C — Capstone & Employability · 160 h / 120 h

| # | Module | Sub-modules | Diploma | Training |
|---|---|---|---:|---:|
| **C1** | Capstone Project | Problem definition & scoping · Design, simulation & digital twin · Build & integration on the live cell · Testing, validation & optimization · Defence | **130** | **90** |
| **C2** | Portfolio & Employability — **mapped to DGT/VSQ/N0102** | Technical documentation & drawings · Customer communication & site conduct · Portfolio build & interview preparation | **30** | **30** |

---

# PART 1b — SYLLABUS · TECHNICIAN TIER (post-ITI)

**Two separately certified NSQF Level 4 awards of 450 h each.** Full design, entry bands, certification route and rationale in `curriculum/iti-operator-technician-programme.md`.

## 1.7 Structure at a glance

| Award | Trade hours | + Employability | Total | Weeks |
|---|---:|---:|---:|---:|
| Pre-gate bridge (Stream A / Stream B) | — | — | 60 / 120 | 2–4 |
| **Tier 1 — Automation Cell Operator** | 420 | 30 | **450** | 13 |
| **Tier 2 — Automation Uptime Technician** | 420 | 30 | **450** | 13 |
| | **840** | **60** | **900** | **26** |

*450 h sits inside the NSQF Level 4 notional band (390–480 h), equals 15 credits exactly, and falls inside PMKVY's 300–600 h Short-Term Training band — so each tier is independently fundable. A single 760 h award, as originally drafted, fitted no band at all.*

## 1.8 Tier 1 — OPERATE · 420 h + 30 h Employability

| # | Module | Sub-modules | Hours |
|---|---|---|---:|
| **O1** | **Safety & the Cage** | Shop-floor safety, PPE, LOTO, permit-to-work · Safety circuit: light curtains, scanners, interlocks, E-stop categories, muting · Safe entry, recovery, restart · **ISO 10218-1/-2, ISO/TS 15066, IEC 60204-1, ISO 13855, IEC 61496, ISO 13849-1 / IEC 62061** | **60** |
| **O2** | Anatomy of an Automated Cell | The seven fault domains · Reading a cell: layout, I/O list, sequence of operations · Cycle logic | **50** |
| **O3** | Cell Operation & HMI | Start-up, shutdown, mode selection · HMI navigation · Changeover & first-piece verification · Cycle and quality monitoring | **60** |
| **O4** | Robot Handling for Technicians | Robot safety, jogging, frames & TCP · Home/park positions; mid-cycle stop recovery · Program selection, backup, restore, touch-up within authority | **60** |
| **O5** | Material Handling & Flow | Conveyors, transfers, jams · Palletizing & depalletizing: layer patterns, slip sheets, wrap, pallet quality · **Machine tending** · Dock discipline & AGV/AMR interaction | **50** |
| **O6** | Reading the Machine: Sensors, Signals & Alarms | Sensor types and what "no signal" means · Barcode, RFID, vision pass/fail · Alarm codes | **60** |
| **O7** | **The Fault Loop — Drills** | The six-step loop · Seeded-fault drills across all seven domains · Timed recovery assessment | **40** |
| **O8** | Measurement & First-Piece Quality | Gauging, go/no-go, basic metrology · Reading an SPC chart · First-piece and in-process checks | **20** |
| **O9** | Environment, Energy & Waste | E-waste & electronics disposal · Coolant and oil handling · The cost of a compressed-air leak | **20** |
| **ES** | Employability Skills — **DGT/VSQ/N0102** | Communication, workplace conduct, digital & financial literacy | **30** |

## 1.9 Tier 2 — MAINTAIN · 420 h + 30 h Employability

| # | Module | Sub-modules | Hours |
|---|---|---|---:|
| **M1** | Preventive & Autonomous Maintenance — **TPM *Jishu Hozen*** | PM schedules, lubrication, tension, torque · Gripper & vacuum system care · Vision optics care · CMMS: work orders, spares, history | **60** |
| **M2** | Electrical, Pneumatic & **Hydraulic** First-Line Repair | Panel layout & safe working; fuses, breakers, contactors, PSUs · Sensor replacement & alignment · Cable and continuity faults · Pneumatics: FRL, valves, cylinders, leaks · **Hydraulics: pumps, valves, accumulators, filtration, contamination** | **90** |
| **M3** | Mechanical First-Line Repair | Gripper/EOAT change & tool changers · Fixture and guide alignment · Belts, rollers, chains, couplings · Bearing & vibration first checks | **50** |
| **M4** | Vision & Quality Subsystem Care | Why detection rate drops · Re-running calibration within authority · Model problem vs physical problem | **40** |
| **M5** | Structured Diagnosis & Escalation | Fault trees per domain; binary search · 5-Why & root cause · **Writing an escalation report an engineer can act on** · Spare-parts discipline | **60** |
| **M6** | Condition Monitoring & Working with the AI | Reading trends: vibration, current, temperature, cycle-time drift · What a predictive alert means and its limits | **30** |
| **M7** | Handover, Downtime & the Digital Shop Floor | Shift handover & logbook discipline · Downtime coding, OEE basics · MES / operator-AI assistant | **30** |
| **M8** | **PLC & Control Logic Literacy — read-only** *(new in Rev 2)* | Ladder & function-block basics · **Programming software in monitor mode** · Cross-referencing an alarm to logic · Forced I/O and status bits · Fieldbus diagnostic pages · Robot ↔ PLC handshake signals. **Monitor mode only** | **60** |
| **ES** | Employability Skills — **DGT/VSQ/N0102** | *(continued)* | **30** |

*M8 exists because two of the tier's own seven fault domains — BRAIN and NERVES — were previously untaught. The portability promise was 5/7 delivered.*

---

# PART 2 — TIMELINE

## 2.1 PG Diploma — 1 year · 48 teaching weeks + 4 examination/break weeks

| Weeks | Phase | Blocks | Hours | ~h/wk | Facility |
|---|---|---|---:|---:|---|
| **1–10** | Foundations | F1 · F2 · F3 · F4 | 230 | 23 | Classroom + computer lab |
| **11–20** | Core robotics | R1 · R2 · R3 · R4 · R5 · R6 | 310 | 31 | Computer lab + robotics bench + controls bench |
| **21–30** | AI depth | D1 · D2 · 2 electives | 240 | 24 | Computer lab (GPU) |
| **31–40** | **Specialization** | S1 · S2 · S3 · S4 · S5 · S6 | 260 | 26 | **LIVE CELLS** |
| **41–48** | Capstone | C1 · C2 | 160 | 20 | **LIVE CELLS** + classroom |
| | **Total** | | **1,200** | | |

**Live-cell window: weeks 31–48 (18 weeks).**

## 2.2 Engineer Training Programme — 6 months · 26 weeks

| Weeks | Phase | Blocks | Hours | ~h/wk | Facility |
|---|---|---|---:|---:|---|
| **1–3** | Bridge | F1 · F2 (refresher) · F4 | 90 | 30 | Classroom |
| **4–9** | Core robotics | R1 · R2 · R3 · R4 · R5 · R6 | 200 | 33 | Computer lab + benches |
| **10–14** | AI depth | D1 · D2 · D4 | 140 | 28 | Computer lab (GPU) |
| **15–22** | **Specialization** | S1 · S2 · S3 · S4 · S5 · S6 | 260 | 33 | **LIVE CELLS** |
| **23–26** | Capstone | C1 · C2 | 120 | 30 | **LIVE CELLS** + classroom |
| | **Total** | | **810** | | |

**Live-cell window: weeks 15–26 (12 weeks).**

## 2.3 Technician Programme (post-ITI) — 6 months · 26 weeks

| Weeks | Phase | Modules | Hours | ~h/wk | Facility |
|---|---|---|---:|---:|---|
| **1–2** | Safety induction & the cage | O1 | 60 | 30 | Classroom + safety rig |
| **3–7** | Operate: cell fundamentals | O2 · O3 · O4 | 170 | 34 | Trainer cells |
| **8–10** | Operate: flow & signals | O5 · O6 | 110 | 37 | Palletizing rig + trainer cells |
| **11–12** | Fault drills, measurement, environment | O7 · O8 · O9 | 80 | 40 | **LIVE CELLS** + fault-injection rig |
| **13** | Employability + **Tier 1 assessment** | ES | 30 | 30 | **LIVE CELLS** |
| **14–17** | Maintain: preventive & first-line repair | M1 · M2 | 150 | 37 | Benches + trainer cells |
| **18–20** | Maintain: control logic & mechanical | M8 · M3 | 110 | 37 | **LIVE CELLS** |
| **21–23** | Maintain: vision & structured diagnosis | M4 · M5 | 100 | 33 | **LIVE CELLS** |
| **24–26** | Condition monitoring, handover + **final assessment** | M6 · M7 · ES | 90 | 30 | **LIVE CELLS** |
| | **Total** | | **900** | | |

**Live-cell window: weeks 11–13 and 18–26 (12 weeks).**

## 2.4 The combined calendar — three cohorts, one cell hall

Start all three programmes in the **same week** and live-cell demand sequences rather than collides.

| Weeks | On the live cells | Notes |
|---|---|---|
| 1–10 | *(none)* | All three cohorts on classroom, sim and trainer cells |
| **11–13** | ITI only | Fault drills + Tier 1 assessment |
| 14 | *(none)* | |
| **15–17** | Engineer training only | Specialization begins |
| **18–26** | **Both — the Handover Model window** | Engineers build and commission; technicians operate and maintain |
| 27–30 | *(none)* | Both 6-month cohorts have graduated |
| **31–48** | Diploma only | Specialization + capstone |

**33 of 52 weeks carry live-cell demand; only 9 are contended.** Book cell access in **2-week blocks per team**, not continuously — real integration work is bursty, and block booking raises effective capacity roughly 3–4×.

**The Handover Model (weeks 18–26)** is **milestone-gated** — handovers occur at FAT, SAT and production-ramp boundaries, roughly 6–8 per cohort, plus daily shift-log handovers inside the ITI cohort's own shifts. It runs on a **ring-fenced training cell**, never on a customer-acceptance cell, and every milestone carries a staffed ISO 10218 / ISO-TS 15066 safety re-validation step.

## 2.5 Annual cohort capacity

| Programme | Cohorts / yr | Students / yr | Live-cell weeks |
|---|---:|---:|---:|
| PG Diploma | 1 | 30 | 18 |
| Engineer Training | 1 | 30 | 12 |
| Technician (post-ITI) | 1 | 30 | 12 |
| **Total** | **3** | **90** | **33 of 52 weeks** *(9 contended)* |

A second cohort of either 6-month programme requires an additional cell or shift-based access.

## 2.6 The station rotation — how 30 students share the hardware

Block S is delivered as a **six-station rotation**: six teams of five rotate through six stations, so the Centre needs **one of each station, not six of everything.** Revision 2's rebalancing (45/45/45/40/40/45 h) makes the dwell near-equal, which is what makes a round-robin actually schedulable.

| Station | Serves | Facility |
|---|---|---|
| 1 | S1 — Vision-guided pick & place | Live Cell 1 |
| 2 | S2 — Welding / dispensing + OLP | Live Cell 2 |
| 3 | S3 — Cell integration | Integration bench |
| 4 | S4 — Predictive maintenance | Condition-monitoring rig |
| 5 | S5 — Operator-facing AI | MES/AI workstation cluster |
| 6 | S6 — Calibration & commissioning | Calibration bench |

---

# PART 3 — LAB & EQUIPMENT REQUIREMENT

**Sized for 30 students per programme, three programmes. Greenfield.**

> **The capex logic depends on siting — and it may invert.** The published TNSDC CoE EOI §12(1) states that TNSDC provides the physical space "in any of the government institutions or building," along with furniture, workstation PCs and connectivity, while the partner supplies the specialist equipment. **If the CoE is sited that way, "BGR Neo is mostly buying computers, not robots" reverses exactly** — Groups A and J shrink and Group C becomes the whole spend. Both scenarios must be costed before the money slide is written.

## 3.1 Group A — Compute, network & edge · **MEDIUM**

*Serves the graduate tier. The technician tier needs almost none of it.*

| Item | Purpose | Ratio | Qty |
|---|---|---|---:|
| GPU student workstation (RTX-class, ≥64 GB RAM) | Isaac Sim, deep learning, ROS 2, OLP | 1 : 1 | **30** |
| Spare student workstations | Failure cover | — | **2** |
| Instructor workstation + dual display | Demonstration & authoring | — | **2** |
| Shared training server (multi-GPU node) | Model training, batch jobs | 1 : 30 | **1** |
| NAS / storage server (~100 TB usable) | Datasets, projects, backups | 1 : 30 | **1** |
| NVIDIA Jetson Orin Nano / NX edge kit | On-robot inference labs | 1 : 2 | **15** |
| NVIDIA Jetson AGX Orin | Cell-side vision deployment | shared | **3** |
| MCU dev kits (STM32 / ESP32) | Embedded & micro-ROS labs | 1 : 2 | **15** |
| Rugged laptops | Shop-floor commissioning | 1 : 5 | **6** |
| Basic PCs (technician tier) | CMMS, HMI, documentation | 1 : 3 | **10** |
| Network: managed switches, rack, firewall, 10 GbE, UPS | Infrastructure | — | **1 set** |
| Classroom AV (display, camera, audio) | 3 rooms | — | **3 sets** |

## 3.2 Group B — Learning-tier robotics (bench) · **LOW–MEDIUM**

| Item | Purpose | Ratio | Qty |
|---|---|---|---:|
| Desktop 6-axis educational arm + gripper | R1, R3, O2–O4 | 1 : 5 | **6** |
| Collaborative robot (UR5e/UR10e-class) on mobile bench, gripper | R2, R3, S1, O3–O4 | 1 : 10 | **3** |
| Educational AMR (TurtleBot 4-class) | R5 | 1 : 5 | **6** |
| Simulation seats (Isaac Sim, Gazebo, MuJoCo) | All sim work | 1 : 1 | **free / open-source** |

## 3.3 Group C — Live industrial cells · **HIGH**

### Cell 1 — Vision-guided pick & place / machine tending
*Serves S1, C1 (graduate tier) and O5, M3 (technician tier) — the technician tier's machine-tending requirement is satisfied here rather than by a separate cell.*

| Item | Qty |
|---|---:|
| Industrial 6-axis robot, ~10–20 kg payload (FANUC / ABB / KUKA / Yaskawa class), controller & pendant | **1** |
| Industrial 3D vision system (structured-light / bin-picking class) | **1** |
| 2D machine-vision cameras + lenses | **2** |
| Machine-vision lighting (bar, ring, dome, backlight) | **1 set** |
| Servo gripper + vacuum EOAT + quick-change tool changer | **1 set** |
| Conveyor, part presentation fixtures, bins; machine-tool interface | **1 set** |
| Safety PLC + standard PLC + HMI panel | **1 set** |
| Perimeter fencing, interlocked gate, safety scanner, E-stops | **1 set** |

### Cell 2 — Welding / dispensing

| Item | Qty |
|---|---:|
| Industrial arc-welding robot (6-axis, welding package) | **1** |
| Welding power source + torch + wire feeder | **1** |
| 2-axis positioner / turntable | **1** |
| Laser seam-tracking sensor | **1** |
| Fume extraction, weld screens, fire-rated enclosure | **1 set** |
| Safety circuit: fencing, interlocks, E-stops | **1 set** |

> **Option:** if welding capex or facility services constrain the launch, substitute a **sealant/adhesive dispensing cell** — same offline-programming and digital-twin outcomes, materially lower cost signal, no fume or fire services.

### Cells 3 & 4 — Flexible capstone cells

| Item | Qty |
|---|---:|
| Collaborative robot (UR10e / FANUC CRX class), flexible table, quick-change tooling | **2** |
| Safety-rated laser scanner per cell | **2** |
| Reconfigurable fixturing / bench | **2 sets** |

### Cell 5 — **Assessment cell (ring-fenced)** · *new in Rev 2*

| Item | Qty |
|---|---:|
| Cobot or light industrial robot with vision, PLC, safety circuit and reconfigurable tooling | **1** |

**No cohort trains on this cell.** The technician Tier 2 examination is an *unseen* cell with three seeded faults, and the graduate capstone requires an uncommitted cell — neither works if every cell is consumed by teaching. **Fallback if capex is tight:** run the assessment on a ring-fenced *configuration* — a different part, tooling, layout and fault set on Cell 3 or 4, locked during assessment windows (weeks 13, 24–26, 41–48). Weaker, but defensible; permanently sharing a trained-on cell is not.

### Phase 2 (optional, year 2)

| Item | Qty |
|---|---:|
| Mobile manipulator — AMR with mounted cobot arm (C2 platform track) | **1** |
| Industrial AMR for fleet / VDA 5050 labs | **1** |

## 3.4 Group D — Vision & sensing (teaching stock) · **LOW–MEDIUM**

| Item | Ratio | Qty |
|---|---|---:|
| Depth camera (Intel RealSense D435/D455-class) | 1 : 2 | **15** |
| Industrial machine-vision camera + lens (Basler / FLIR-class) | bench | **8** |
| Machine-vision lighting kits (bench) | 1 : 8 | **4** |
| 2D LiDAR (RPLIDAR-class) | with AMRs | **6** |
| 3D LiDAR (Livox Mid-360-class) | shared | **2** |
| IMU / encoder / sensor kits | 1 : 5 | **6** |
| Thermal imaging camera | shared | **2** |

## 3.5 Group E — End effectors & tooling · **MEDIUM**

| Item | Qty |
|---|---:|
| 2-finger servo gripper (Robotiq-class) | **4** |
| Vacuum / suction EOAT + venturi generator | **3** |
| 6-axis force–torque sensor (ATI / Bota-class) | **2** |
| Quick-change tool changers | **3** |
| Custom fixture & jig fabrication allowance | **1 lot** |

## 3.6 Group F — Industrial controls & integration · **MEDIUM**

**Sized for two concurrent cohorts** — the graduate tier's R6 and the technician tier's M8 both land in the controls bench, and the single-cohort sizing in Revision 1 became binding once M8 was added.

| Item | Ratio | Qty |
|---|---|---:|
| PLC trainer kit with digital/analog I/O (Siemens S7-1200 / AB CompactLogix class) | 1 : 5 × 2 cohorts | **12** |
| **PLC monitor-mode software seats** *(new in Rev 2 — for M8)* | 1 : 2 | **15** |
| Safety PLC / safety relay trainer | 1 : 10 × 2 | **6** |
| HMI panel | 1 : 5 × 2 | **12** |
| VFD + motor + encoder trainer | 1 : 5 | **6** |
| Industrial network kit (Ethernet/IP, PROFINET, Modbus, OPC-UA gateway, managed switch) | 1 : 5 × 2 | **12** |
| Pneumatics trainer (valves, cylinders, FRL) | 1 : 10 | **3** |
| **Hydraulic trainer boards** *(new in Rev 2 — for M2)* | 1 : 5 | **6** |
| Electrical panel build kit (DIN rail, contactors, terminals, wiring) | 1 : 5 | **6** |
| Electrical fault-finding trainer boards | 1 : 5 | **6** |
| Pneumatic fault trainer boards | 1 : 5 | **6** |

## 3.7 Group G — Safety infrastructure · **MEDIUM** *(non-negotiable)*

| Item | Qty |
|---|---:|
| Safety-rated laser scanner (SICK microScan3-class, Type 3 / PL d) | **5** |
| Light curtain pair | **2** |
| Safety relay / E-stop station / interlocked gate switch sets | **5** |
| Perimeter guarding panels (2 fenced cells) | **2 sets** |
| PPE sets — safety shoes, glasses, gloves, hi-vis | **70** |
| Welding PPE — helmets, aprons, gauntlets | **10** |
| Lockout–tagout (LOTO) kits | **12** |
| Fire extinguishers, first-aid stations, eyewash | **per facility code** |

## 3.8 Group H — Predictive maintenance & condition monitoring · **LOW–MEDIUM**

| Item | Qty |
|---|---:|
| Machinery fault simulator (rotating rig with seeded bearing / misalignment / imbalance faults) | **1** |
| Triaxial accelerometer + vibration DAQ set | **2** |
| Handheld vibration pen or analyser | **3** |
| Current / power monitoring clamps & energy meters | **6** |
| Ultrasonic leak detector | **2** |
| IIoT gateway + data historian | **1 set** |

## 3.9 Group I — Software · **LOW** *(open-source dominates)*

| Item | Licence | Seats |
|---|---|---:|
| ROS 2, Nav2, MoveIt 2, Gazebo, MuJoCo, OpenCV, PCL, PyTorch, LeRobot | Free | **30** |
| NVIDIA Isaac Sim / Isaac Lab / Isaac ROS | Free | **30** |
| Offline programming (RoboDK, or vendor: RobotStudio / ROBOGUIDE / KUKA.Sim) | Licensed | **15** |
| PLC / HMI programming suite (TIA Portal / Studio 5000) | Licensed | **12** |
| **CMMS / maintenance-management software** | Licensed | **1 site** |
| Machine-vision suite (Halcon / VisionPro / Keyence) — *optional* | Licensed | **4** |
| MATLAB / Simulink (academic) — *optional* | Licensed | **30** |
| MLOps & experiment tracking (MLflow / W&B) | Free tier | **1 team** |
| LMS + assessment & attendance platform | Licensed | **1** |

## 3.10 Group J — Facility · **MEDIUM–HIGH**

| Space / service | Indicative area | Qty |
|---|---|---:|
| Classroom, 30 seats, power & data at every desk | ~60–75 m² | **2** |
| Computer lab, 30 GPU workstations | ~75–90 m² | **1** |
| Robotics bench lab (Groups B, D, E) | ~100 m² | **1** |
| **Controls & maintenance workshop bay** (Groups F, H) | ~120 m² | **1** |
| Live cell hall — 3-phase power, compressed air, floor loading, hoist access | ~250–300 m² | **1** |
| Server & network room with cooling | ~15 m² | **1** |
| Store room, tool cribs, lockers | ~50 m² | **1** |
| Compressed-air compressor + dryer + reticulation | — | **1 set** |
| 3-phase power distribution, earthing & panel | — | **1 set** |
| HVAC + lighting (≥500 lux at benches) | — | **facility** |
| Washroom, pantry, first-aid room | — | **facility** |

## 3.11 Group K — Technician-tier specific · **MEDIUM**

| Item | Purpose | Ratio | Qty |
|---|---|---|---:|
| **Fault-injection trainer cell** — instructor-switchable faults (sensor disconnect, low air, jam, gripper misalignment, dirty optics, comms drop) | O7, M5 — the core teaching instrument | 1 : 15 | **2** |
| **Palletizing / depalletizing rig** — robot, pallet stations, case conveyor, layer tooling | O5 | — | **1** |
| Semi-automatic stretch wrapper + pallets, slip sheets, cases | O5 | — | **1** + consumables |
| Sensor alignment & replacement bench kits | M2, O6 | 1 : 5 | **6** |
| Hand-tool sets + tool trolleys | M2, M3 | 1 : 5 | **6** |
| Torque wrenches, dial indicators, alignment tools | M3 | 1 : 5 | **6** |
| **Basic metrology kit** — gauges, go/no-go, calipers, height gauge | O8 | 1 : 5 | **6** |
| Multimeters / clamp meters / insulation testers | M2 | 1 : 2 | **15** |
| Tablets — CMMS and SOP retrieval on the floor | M1, M7 | 1 : 2 | **15** |
| ~~Truck loading/unloading mock-up~~ | **Deleted in Rev 2** | — | — |

**Why the truck-loading mock-up was deleted:** India's dock automation installed base is telescopic conveyors, not robots. Robotic trailer unloading is a 2025–26 global product category with no evidenced Tamil Nadu installations to place graduates against. Dock discipline is taught within O5 on the palletizing rig instead.

## 3.12 Group L — Consumables & spares (annual) · **LOW**

| Item | Qty |
|---|---|
| Welding wire, shielding gas, test coupons | consumable lot |
| Sample workpieces / parts for pick-place & inspection labs | **500+ parts** |
| Cable, connectors, DIN rail, terminals, wiring consumables | consumable lot |
| Consumable spares pool — sensors, cables, vacuum cups, seals, filters, fuses (consumed in training) | **1 annual lot** |
| 3D printers + filament (fixtures, jigs, gripper fingers) | **2 printers** |
| Calibration artefacts (ISO 9283 test rig, checkerboards, reference spheres) | **1 set** |
| Spares pool — grippers, cameras, cables, drives | **~10% of hardware value** |

---

## 3.13 Capital summary by group

| Group | Description | Cost signal | Phase |
|---|---|---|---|
| A | Compute, network & edge | **MEDIUM** | Launch |
| B | Learning-tier robotics (bench) | **LOW–MEDIUM** | Launch |
| **C** | **Live industrial cells (5, incl. assessment cell)** | **HIGH** | Launch |
| D | Vision & sensing stock | **LOW–MEDIUM** | Launch |
| E | End effectors & tooling | **MEDIUM** | Launch |
| F | Industrial controls & integration *(2 cohorts)* | **MEDIUM** | Launch |
| G | Safety infrastructure | **MEDIUM** | Launch *(non-negotiable)* |
| H | Predictive maintenance & condition monitoring | **LOW–MEDIUM** | Launch |
| I | Software | **LOW** | Launch |
| J | Facility | **MEDIUM–HIGH** | Launch *(or supplied by TNSDC — see the siting note)* |
| K | Technician-tier specific | **MEDIUM** | Launch |
| L | Consumables & spares | **LOW** | Recurring |
| — | Mobile manipulator + industrial AMR | **MEDIUM–HIGH** | Year 2 |

**Four observations for the capital plan:**

1. **The graduate tier needs no robots for its first half.** Weeks 1–30 (Diploma) and 1–14 (Training) run on Group A compute and open-source simulation. Group C can be staged.
2. **The technician tier cannot be staged the same way.** It needs trainer cells from week 3 and live cells from week 11 — but what it needs early is the cheap kit (Groups B and K), not the industrial cells.
3. **The two tiers are complementary in capex, not competing.** The graduate tier is compute-heavy and hands-light; the technician tier is the reverse and needs **no GPU workstations at all**.
4. **Group G is not optional and not deferrable,** and Cell 5 is not a luxury — without a ring-fenced assessment cell, the technician tier's headline examination cannot be run as specified.

---

*Sources: `curriculum/syllabus-architecture.md` · `curriculum/iti-operator-technician-programme.md` · `curriculum/VALIDATION-REPORT.md` · `phase-2/lab-procurement-and-partnerships.md` · `phase-1/_grounding-reference.md` §D · `presentation/deck-brief.md` §5–§7. Hour allocations are planning estimates. Named vendors are indicative product classes, not procurement recommendations — confirm current models, availability and pricing at source before any tender. Standards editions (notably ISO 10218) must be verified before printing. Quantities assume zero existing assets; net off anything BGR Neo already holds.*
