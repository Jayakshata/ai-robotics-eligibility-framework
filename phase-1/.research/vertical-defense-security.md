# Vertical Overlay — Defense & Security Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility ON TOP of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified 2024–2026 · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Defense & Security · **Axis B:** B3 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state estimation/SLAM (GPS-denied) · A3 navigation & decision architectures · A1 multimodal perception/sensor fusion (EO/IR, SAR, ATR) · A9 multi-robot/swarm + human-on-the-loop HRI · A7 edge autonomy / VLA-world models · A10 safety-verification + secure middleware · A4 disturbance-robust control · **Typical platforms (C):** C6 aerial/UAV · C7 underwater/marine (UUV/USV) · C4 quadruped · C3 AMR/UGV · C9 swarm

---

## 1. Definition & Scope
Robots for military and homeland-security missions: **UGVs** (tracked/wheeled/legged — ISR, logistics, RCV combat, EOD/IED disposal), **UAVs** (fixed/rotary/hybrid-VTOL, ISR to strike), **loitering munitions** (Switchblade-class), **collaborative combat aircraft (CCA)**, **maritime USV/UUV**, **counter-UAS (C-sUAS)**, and **perimeter/border security**. US defense-robotics ~**$6.25 B (2025)**; global military-robots headed to ~**$48 B by 2030**; UGV market ~$9 B (2025). The defining feature versus civilian robotics: systems must survive a **contested, adversarial environment** (jamming, spoofing, kinetic loss) and clear an export-control + security-clearance + weapons-review gauntlet that is as much of the job as the engineering. `✓`

## 2. Core Capabilities It Builds On
- **A2 State Estimation/SLAM** *(load-bearing)* — **GPS-denied is the default** in peer conflict; fuse visual/LiDAR/inertial odometry with no satellite fix or prior map.
- **A3 Navigation & Decision Architectures** — autonomy under **DDIL** (denied/degraded/intermittent/limited comms); behavior stacks that keep operating when the link drops.
- **A1 Multimodal Perception/Sensor Fusion** — EO/IR, SAR, radar, acoustic, hyperspectral; **automatic target recognition (ATR)**, detection/ID/track at long range through obscurants.
- **A9 Multi-Robot/Swarm + HRI** — coordinated swarms and one-operator-many-drones; **human-on-the-loop** supervisory control.
- **A7 Edge Autonomy** — on-platform VLA/world-model inference (no cloud) for comms-denied operation.
- **A10 Safety-Verification + Secure Middleware** — runtime assurance, tactical mesh, cyber-hardened comms (see §6).
- **A4 Robust Control** — disturbance rejection for wind/sea-state/rough terrain.

## 3. Domain Knowledge Required
Beyond robotics: **military doctrine, C4ISR & the kill chain**; **rules of engagement (ROE)** and **targeting**; **electronic warfare (EW)** — jamming/spoofing/EMCON and counters; **RF/SATCOM link budgets** in contested spectrum; **ballistics, munitions & weaponeering**; **threat/countermeasure modeling**; **mission planning** and multi-domain operations (CJADC2); **SWaP-C** discipline; and **Modular Open Systems Approach (MOSA)** for government-owned interfaces. Systems-engineering rigor (DoDAF, TRLs, DT&E/OT&E) is expected. `✓`

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
**Export control (hard gate — bars foreign nationals from technical data):**
- **ITAR — 22 CFR Parts 120–130** (State/**DDTC**): governs defense articles/services on the **USML** (**Category VIII** = aircraft/UAV, XI = military electronics); most armed/military UAS fall here. `✓`
- **EAR — 15 CFR Parts 730–774** (Commerce/**BIS**): dual-use items on the CCL; where commercial/dual-use robotics land if not USML. `✓`
- **MTCR**: multilateral gate on UAS ≥**500 kg payload / 300 km range** (Category I). `✓`

**Autonomy & law of war (hard gate for weaponized autonomy):**
- **DoD Directive 3000.09, "Autonomy in Weapon Systems"** (eff. **25 Jan 2023**): requires **"appropriate levels of human judgment over the use of force"** and **senior-level review** before developing/fielding autonomous/semi-autonomous weapons. `✓`
- **LOAC / IHL** (distinction, proportionality, precaution); **UN CCW GGE on LAWS**; **U.S. Political Declaration on Responsible Military Use of AI & Autonomy** (9 Nov 2023); **DoD AI Ethical Principles** (2020: responsible, equitable, traceable, reliable, governable). `✓`

**Engineering/qualification (contractual hard gates):**
- **MIL-STD-810H** — environmental durability test methods (temp, humidity, shock, vibration, sand/dust, immersion). `✓`
- **MIL-STD-461G** — control of **electromagnetic interference (EMI/EMC)** emissions/susceptibility. `✓`
- **MIL-STD-882E** — **system safety** process: hazard analysis and mishap-risk management. `✓`
- **MIL-HDBK-516C** — **airworthiness certification criteria** for manned/unmanned aircraft; **STANAG 4671** (fixed-wing UAS airworthiness, USAR, 150–20,000 kg), **STANAG 4703** (light UAS), **STANAG 4586** (UAV control-system interoperability, UCS). `✓`

**Cybersecurity (phasing into a hard gate):**
- **CMMC 2.0 — 32 CFR Part 170** (DFARS in 48 CFR Part 204): **Level 2 = all 110 controls of NIST SP 800-171 Rev 2**, third-party (C3PAO) certified; **DFARS 252.204-7012** (safeguard CUI / 72-hr incident report), **-7021** (CMMC). DFARS rule eff. **10 Nov 2025**, Level-2 third-party phase-in through 2026. `✓`

**Personnel & supply chain (hard gates):**
- **NISPOM — 32 CFR Part 117**: facility clearance (**FCL**) + personnel clearances (**Confidential/Secret/Top Secret/TS-SCI**); **DoD 8140/8570** cyber-workforce certs (Security+/CISSP). `✓`
- **NDAA FY2020 §848** / American Security Drone Act: bars **covered-foreign (PRC/Russia/Iran/NK)** components; **DIU Blue UAS / Green UAS** cleared lists define DoD-buyable drones. `✓`

## 5. Specialized Hardware, Sensors & Environment
**Ruggedized/EMI-hardened** platforms (810H/461G-qualified); EO/IR gimbals, **SAR**, radar, LiDAR, RF/SIGINT, acoustic, hyperspectral, **anti-jam GPS (M-code/CRPA)** and inertial-only nav; **secure/anti-jam datalinks** (MANET mesh, frequency-hopping, encrypted, low-probability-of-intercept); TEMPEST/emanations control; edge compute for on-board inference under strict SWaP-C. Environment: extreme temperature/altitude/marine, EW-saturated spectrum, kinetic attrition, no reliable comms. Supply chain must be **NDAA-compliant** (no covered-foreign parts). `✓`

## 6. Safety Envelope & Criticality
**High.** Failures range from mission loss to **fratricide, civilian casualties, and escalation**; a weaponized system adds a use-of-force review absent elsewhere. V&V burden: **MIL-STD-882E** hazard tracking, **DoDD 3000.09** human-judgment/abort design and senior review, weapon-system airworthiness/safety confirmation before flight, and **runtime assurance** (geofencing, safe-abort, positive weapons-release interlocks). Adversarial robustness is a *safety* property here — **anti-spoof/anti-jam and cyber-hardening** must be verified, not just nominal performance. `✓`

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (perception/nav/control/autonomy), this vertical **adds**:
- **The clearance gate:** eligibility for a **US security clearance** (Secret→TS/SCI) and **US-Person status** for ITAR work — frequently a *harder* filter than the technical bar; often non-negotiable.
- **Valued degrees:** Aerospace/Aeronautical, EE (RF/EW, GNC), Systems Engineering rise to first-class alongside CS/Robotics; graduate GNC / autonomy / signal-processing prized. Veterans/operator background is a differentiator.
- **Domain credentials:** ITAR/EAR export-control literacy; **DoD 8140/8570** cyber certs (Security+/CISSP); INCOSE **CSEP** systems-engineering; MIL-STD-882/810/461 test-and-qualification experience; DAWIA/acquisition familiarity.
- **Feeder capability profiles:** `state-estimation-slam`, `motion-planning-navigation`, `multimodal-sensor-fusion`, `computer-vision-3d-perception`, `multi-robot-swarm`, `robotics-middleware-realtime`, `safety-verification-assurance`, `world-models` / `robot-foundation-models-vla`.
- **Conversion:** "capability engineer (esp. GPS-denied autonomy / sensor fusion / swarm) **+ clearance + ITAR/US-Person + MIL-STD & MOSA fluency**." Drone-autonomy, AMR, and quadruped engineers convert most directly.

## 8. Trending & Notable `⏱ as of mid-2026`
**Replicator** — Line 1 all-domain **attritable autonomy (ADA2)**; **Replicator 2** targets **counter-sUAS** (first acquisition 11 Jan 2026); program now under the **Defense Autonomous Warfare Group (DAWG)**. **Collaborative Combat Aircraft** — Anduril **YFQ-44A Fury** flew swapping **Shield AI Hivemind** and **Anduril Lattice** autonomy mid-flight (Feb 2026). **LUCAS** low-cost swarm (Hivemind). **GPS/comms-denied edge autonomy** (Hivemind; **Overland AI Ultra** UGV). Ukraine-driven **FPV/loitering-munition & UGV** mass adoption. **Blue UAS supply-chain reshoring** (China-motor loophole under scrutiny). Human-machine teaming + **CJADC2**. *(Re-research before publish.)* `⏱`

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** Anduril · Shield AI · Palantir · AeroVironment · Skydio · Kratos · General Atomics · Northrop Grumman · Lockheed Martin · RTX · Teledyne FLIR · Ghost Robotics · Overland AI · Milrem Robotics · Textron.
- **Regulators/authorities:** DoD/War Dept · **DDTC** (State, ITAR) · **BIS** (Commerce, EAR) · **DCSA** (clearances/NISPOM) · **DISA** · service airworthiness authorities.
- **Partners/labs:** **DIU** · **DARPA** · Army **DEVCOM** · **AFRL** · **ONR** · **NATO** (STANAG/NAVWAR) · NIST · INCOSE.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **inspection & maintenance** (B14, shared ruggedization/NDT), hazardous-environments, public-safety/first-responder. Most-used platform tracks: **C6 aerial/UAV**, **C7 underwater/marine**, **C4 quadruped**, **C3 AMR/UGV**, **C9 swarm**.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B3.*
*Key sources (2024–2026): DDTC/ITAR 22 CFR 120–130; BIS/EAR 15 CFR 730–774; ESD.WHS DoDD 3000.09 (2023); Federal Register CMMC 32 CFR 170; DCSA/eCFR 32 CFR 117; STANAG 4671/4586 & MIL-HDBK-516C; State Dept Political Declaration (2023); CRS Replicator (IF12611) & LAWS (IF11150); DefenseScoop/DIU Blue UAS; Shield AI/Anduril releases.*
