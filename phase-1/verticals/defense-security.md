# Vertical Overlay — Defense & Security Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Defense & Security · **Axis B:** B3 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state estimation/SLAM (GPS-denied) · A3 navigation & decision architectures · A1 multimodal perception/sensor fusion (EO/IR, SAR, ATR) · A9 multi-robot/swarm + human-on-the-loop HRI · A7 edge autonomy (VLA/world models) · A10 safety-verification & secure middleware · A4 disturbance-robust control · **Typical platforms (C):** C6 aerial/UAV · C7 underwater/marine (USV/UUV) · C4 quadruped · C3 AMR/UGV · C9 swarm

---

## 1. Definition & Scope
Robots for military and homeland-security missions across land, air, and sea: **UGVs** (wheeled/tracked/legged — ISR, logistics resupply, robotic combat vehicles, and **EOD/IED disposal**), **UAVs** (fixed/rotary/hybrid-VTOL, ISR through strike, plus **loitering munitions** and **collaborative combat aircraft**), and maritime **USV/UUV**. The headline mission sets are **ISR** (intelligence, surveillance, reconnaissance), **EOD**, **counter-UAS (C-sUAS)**, and **force protection** / perimeter & border security. US defense-robotics spend runs on the order of **$6 B (2025)**, with the global military-robotics market projected toward **~$45–50 B by 2030**. `~` The defining feature versus civilian robotics: systems must survive a **contested, adversarial environment** — GPS jamming, RF spoofing, cyber attack, and kinetic attrition — and clear an **export-control + security-clearance + weapons-review** gauntlet that is as much of the job as the engineering.

## 2. Core Capabilities It Builds On
- **A2 State Estimation / SLAM** (`state-estimation-slam`) *(load-bearing)* — **GPS-denied is the default** in peer conflict; visual/LiDAR/inertial odometry with no satellite fix and often no prior map.
- **A3 Navigation & Decision Architectures** (`motion-planning-navigation`) — autonomy under **DDIL** (denied/degraded/intermittent/limited comms); behavior stacks that keep operating when the datalink drops.
- **A1 Multimodal Perception / Sensor Fusion** (`multimodal-sensor-fusion`, `computer-vision-3d-perception`) — EO/IR, SAR, radar, acoustic, hyperspectral; **automatic target recognition (ATR)** — detect/ID/track at long range through obscurants.
- **A9 Multi-Robot / Swarm + HRI** (`multi-robot-swarm`, `human-robot-interaction`) — coordinated swarms and one-operator-many-drones under **human-on-the-loop** supervisory control.
- **A7 Edge Autonomy** (`robot-foundation-models-vla`, `world-models`) — on-platform VLA/world-model inference (no cloud) for comms-denied operation.
- **A10 Safety-Verification & Secure Middleware** (`safety-verification-assurance`, `robotics-middleware-realtime`) — runtime assurance, tactical mesh networking, cyber-hardened comms (see §6).
- **A4 Robust Control** (`control-classical-optimal-mpc`) — disturbance rejection for wind, sea-state, and rough terrain.

## 3. Domain Knowledge Required
Beyond robotics: **military doctrine, C4ISR & the kill chain**; **rules of engagement (ROE)**, targeting and weaponeering; **electronic warfare (EW)** — jamming, spoofing, EMCON and their counters; **RF/SATCOM link budgets** in contested spectrum; **ballistics & munitions**; threat and countermeasure modeling; **mission planning** and multi-domain operations (**CJADC2**); and hard **SWaP-C** (size, weight, power, cost) discipline. Government programs additionally demand a **Modular Open Systems Approach (MOSA)** with government-owned interfaces and defense systems-engineering rigor (DoDAF, TRLs, DT&E/OT&E). This is the body of knowledge a generalist roboticist lacks.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
**Export control** (hard gate — bars foreign nationals from the technical data):
- **ITAR — 22 CFR Parts 120–130** (State / **DDTC**): governs defense articles & services on the **USML** (**Category VIII** = aircraft/UAV, **Category XI** = military electronics); most armed/military UAS land here.
- **EAR — 15 CFR Parts 730–774** (Commerce / **BIS**): dual-use items on the CCL — where commercial/dual-use robotics fall if not USML-controlled.
- **MTCR**: multilateral gate on UAS ≥ **500 kg payload / 300 km range** (Category I).

**Autonomy & law of war** (hard gate for weaponized autonomy):
- **DoD Directive 3000.09, "Autonomy in Weapon Systems"** (reissued **25 Jan 2023**): requires **"appropriate levels of human judgment over the use of force"** and **senior-level review** before developing or fielding autonomous/semi-autonomous weapons.
- **LOAC / IHL** (distinction, proportionality, precaution); **UN CCW GGE on LAWS**; the U.S. **Political Declaration on Responsible Military Use of AI & Autonomy** (Nov 2023); **DoD AI Ethical Principles** (2020: responsible, equitable, traceable, reliable, governable).

**Engineering & qualification** (contractual hard gates):
- **MIL-STD-810H** — environmental durability test methods (temperature, humidity, shock, vibration, sand/dust, immersion).
- **MIL-STD-461G** — control of **electromagnetic interference (EMI/EMC)** emissions and susceptibility.
- **MIL-STD-882E** — **system-safety** process: hazard analysis and mishap-risk management.
- **MIL-HDBK-516C** — **airworthiness certification** criteria (manned/unmanned); **STANAG 4671** (fixed-wing UAS airworthiness, USAR, 150–20,000 kg), **STANAG 4703** (light UAS), **STANAG 4586** (UAV control-system interoperability, UCS).

**Cybersecurity** (phasing into a hard gate):
- **CMMC 2.0 — 32 CFR Part 170**: **Level 2 = all 110 controls of NIST SP 800-171 Rev 2**, third-party (**C3PAO**) assessed; **DFARS 252.204-7012** (safeguard CUI / 72-hr incident report) and **-7021** (CMMC). Acquisition DFARS rule effective **10 Nov 2025**, with Level-2 third-party phase-in through 2026.

**Personnel & supply chain** (hard gates):
- **NISPOM — 32 CFR Part 117**: facility clearance (**FCL**) plus personnel clearances (**Confidential / Secret / Top Secret / TS-SCI**); **DoD 8140/8570** cyber-workforce certs (Security+, CISSP).
- **NDAA FY2020 §848** / **American Security Drone Act**: bars **covered-foreign (PRC/Russia/Iran/NK)** components; **DIU Blue UAS / Green UAS** cleared lists define DoD-buyable drones.

## 5. Specialized Hardware, Sensors & Environment
**Ruggedized, EMI-hardened** platforms (810H/461G-qualified); EO/IR gimbals, **SAR**, radar, LiDAR, RF/SIGINT, acoustic and hyperspectral payloads; **anti-jam GNSS (M-code / CRPA)** and inertial-only navigation; **secure anti-jam datalinks** (MANET mesh, frequency-hopping, encrypted, low-probability-of-intercept); TEMPEST/emanations control; and edge compute for on-board inference under strict **SWaP-C**. The environment is defined by extreme temperature/altitude/marine exposure, an EW-saturated spectrum, kinetic attrition, and no reliable comms. The supply chain must be **NDAA-compliant** — no covered-foreign parts.

## 6. Safety Envelope & Criticality
**High.** Failure modes span mission loss to **fratricide, civilian casualties, and escalation**; a weaponized platform adds a use-of-force review absent in every civilian vertical. The V&V burden: **MIL-STD-882E** hazard tracking and mishap-risk acceptance, **DoDD 3000.09** human-judgment/abort design with senior-level review, weapon-system airworthiness and safety confirmation before flight, and **runtime assurance** (geofencing, safe-abort, positive weapons-release interlocks). Adversarial robustness is itself a *safety* property here — **anti-spoof/anti-jam and cyber-hardening must be verified**, not merely nominal performance.

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (perception/nav/control/autonomy), this vertical **adds**:
- **The clearance gate:** eligibility for a **US security clearance** (Secret → TS/SCI) and **US-Person status** for ITAR work — frequently a *harder* filter than the technical bar, and often non-negotiable.
- **Valued degrees:** Aerospace/Aeronautical, EE (RF/EW, GNC) and Systems Engineering rise to first-class alongside CS/Robotics; graduate GNC / autonomy / signal-processing is prized; a veteran/operator background is a differentiator.
- **Domain credentials:** ITAR/EAR export-control literacy; **DoD 8140/8570** cyber certs (Security+/CISSP); INCOSE **CSEP** systems engineering; MIL-STD-882/810/461 test-and-qualification experience; DAWIA/acquisition familiarity.
- **Feeder capability profiles:** `state-estimation-slam`, `motion-planning-navigation`, `multimodal-sensor-fusion`, `computer-vision-3d-perception`, `multi-robot-swarm`, `robotics-middleware-realtime`, `safety-verification-assurance`, `world-models` / `robot-foundation-models-vla`.
- **Conversion:** "capability engineer (esp. GPS-denied autonomy / sensor fusion / swarm) **+ clearance + ITAR/US-Person + MIL-STD & MOSA fluency**." Drone-autonomy, AMR, and quadruped engineers convert most directly.

## 8. Trending & Notable `⏱ as of mid-2026`
**Replicator** — Line 1 all-domain **attritable autonomy (ADA2)**; **Replicator 2** targets **counter-sUAS**, with program management consolidating under a dedicated autonomous-warfare office. `~` **Collaborative Combat Aircraft** — Anduril's **YFQ-44A Fury** and General Atomics' **YFQ-42A** in Increment 1, demonstrating in-flight swaps between **Shield AI Hivemind** and **Anduril Lattice** autonomy. `~` **LUCAS** low-cost uncrewed combat aircraft (Shield AI); **GPS/comms-denied edge autonomy** (Hivemind; **Overland AI** ULTRA UGV). Ukraine-driven **FPV / loitering-munition and UGV** mass adoption is resetting cost curves. **Blue UAS supply-chain reshoring** continues (the China-motor loophole under scrutiny), alongside human-machine teaming and **CJADC2**. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** Anduril · Shield AI · AeroVironment · Skydio · General Atomics · Kratos · Northrop Grumman · Lockheed Martin · RTX · Teledyne FLIR · Ghost Robotics · Overland AI · Milrem Robotics · Textron Systems · Palantir.
- **Regulators/authorities:** DoD / Dept. of War · **DDTC** (State — ITAR) · **BIS** (Commerce — EAR) · **DCSA** (clearances/NISPOM) · **DISA** · service airworthiness authorities.
- **Partners/labs:** **DIU** · **DARPA** · Army **DEVCOM** · **AFRL** · **ONR** · **NATO** (STANAG/NAVWAR) · NIST · INCOSE.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **inspection & maintenance** (B14 — shared ruggedization and NDT), **oil & gas / hazardous** (B8), and public-safety/first-responder robotics. Most-used platform tracks: **C6 aerial/UAV**, **C7 underwater/marine**, **C4 quadruped**, **C3 AMR/UGV**, **C9 swarm**.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B3.*
