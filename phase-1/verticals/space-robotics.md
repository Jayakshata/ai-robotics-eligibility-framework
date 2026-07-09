# Vertical Overlay — Space Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Space Robotics · **Axis B:** B12 · **Safety-criticality:** **Critical**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state-estimation/SLAM · A3 planning & navigation · A5 manipulation · A1 perception · A4 GNC/control · A9 teleop/HRI · A10 safety & rad-tolerant middleware · **Typical platforms (C):** C2 mobile manipulator · C3 wheeled rover · C1 fixed arm · (orbital free-flyers — specialized, no clean C-slot)

---

## 1. Definition & Scope
Robots that operate off-Earth, where launch cost, light-time delay, radiation, vacuum and no-repair define the job. Four sub-segments: **(a) orbital robotics** — on-orbit servicing, assembly & manufacturing (OSAM/ISAM), active debris removal (ADR), station manipulators (Canadarm2, ESA ERA), free-flying inspectors, and rendezvous & proximity operations (RPO) against cooperative and *uncooperative* targets; **(b) planetary-surface robotics** — rovers (Perseverance, ExoMars, lunar) with autonomous navigation, landers using terrain-relative navigation, regolith excavation, sample handling; **(c) space manipulators** — large arms and sample-transfer mechanisms; **(d) lunar robotics** — CLPS landers, lunar terrain vehicles, ISRU. The market is bifurcated: government/exploration primes (NASA/ESA/JAXA/CSA) and a fast-growing commercial OSAM + lunar-logistics sector.

## 2. Core Capabilities It Builds On
- **A2 State Estimation / SLAM** *(load-bearing)* — visual odometry, terrain-relative navigation (TRN), relative-pose estimation of uncooperative targets; GPS-denied everywhere beyond LEO.
- **A3 Planning & Navigation** — onboard rover autonomy (AutoNav/ENav hazard avoidance) forced by light-time delay; trajectory design under orbital mechanics.
- **A5 Manipulation** — capture/berthing, refuel/repair, sample handling; specialized by **free-floating base dynamics** (arm motion perturbs the spacecraft — reaction dynamics must be modeled).
- **A1 Perception** — hazard/terrain vision, flash-LIDAR pose, star trackers; must run on radiation-hardened compute orders of magnitude slower than ground GPUs.
- **A4 GNC/Control** — guidance-navigation-control, contact dynamics for docking, attitude coupling.
- **A9 Teleoperation/HRI** — supervised autonomy and ground-in-the-loop teleop under seconds-to-minutes latency.
- **A10 Safety & rad-tolerant middleware** — fault management, single-string vs. redundancy trades (see §6).

## 3. Domain Knowledge Required
**Astrodynamics / orbital mechanics** (Keplerian orbits, Clohessy-Wiltshire relative motion for RPO); **spacecraft GNC** and attitude dynamics (reaction wheels, thrusters); **free-flying/free-floating manipulator dynamics**; the **space environment** — hard vacuum, thermal cycling, TID + single-event radiation effects, atomic oxygen (LEO), plasma charging, micrometeoroid/orbital-debris (MMOD); **thermal control, materials & outgassing**; launch loads (vibration/shock); **space systems engineering** and TRL discipline. This is what a generalist roboticist lacks.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **Outer Space Treaty (1967), Art. VI & IX** — states authorize and *continuously supervise* national (incl. private) space activity, and must avoid harmful contamination; the top legal layer under which all else sits.
- **ITAR — USML Category XV (Spacecraft & Related Articles)** — most space robotics is defense-controlled; **hard gate**: work is effectively restricted to U.S. persons. Oct-2024 reforms shifted some items to **EAR** (dual-use) and proposed **License Exception CSA** (Commercial Space Activities); "spacecraft" now defined (≥100 km altitude).
- **ECSS series** (European): **ECSS-E** engineering, **ECSS-Q** product assurance, **ECSS-M** management. Key: **ECSS-Q-ST-60-15C Rev.1** (radiation hardness assurance, TID/TNID/SEE; 20 Mar 2025); **ECSS-E-ST-70-11C Rev.1** (space segment operability / on-board autonomy functions; 15 Oct 2025); **ECSS-Q-ST-80C Rev.2** (software product assurance) + **ECSS-E-ST-40** (space software).
- **NASA technical standards:** **NASA-STD-8719.14C** (Process for Limiting Orbital Debris); **NASA-STD-3001** (human-system standards — crew health/safety); **NPR 8705.2** + **NASA-STD-8719.29** (Human-Rating Requirements — mandate **two-fault tolerance**); **NASA-STD-8739** series (flight-hardware workmanship) `~`.
- **Planetary protection:** **COSPAR Planetary Protection Policy** (mission Categories I–V) implemented for NASA by **NPR 8715.24** ("Planetary Protection Provisions for Robotic Extraterrestrial Missions") — **hard, mission-gating** bioburden/sterilization limits.
- **Orbital-debris mitigation:** **ISO 24113:2023** (top-level space debris mitigation requirements); **IADC guidelines** + **UN COPUOS** guidelines; **FCC "5-year rule"** — LEO (≤2000 km) post-mission disposal within 5 years (effective 29 Sep 2024), a **U.S. market gate**.
- **Launch/reentry:** **FAA 14 CFR Part 450** (launch & reentry licensing; full transition deadline 9 Mar 2026). **NOAA (15 CFR Part 960)** licenses commercial remote sensing if the robot images Earth.
- **CONFERS** — DARPA-seeded, industry-consensus (non-binding) RPO/OOS best practices; the de-facto servicing norm.

## 5. Specialized Hardware, Sensors & Environment
**Radiation-hardened flight compute** dominates and constrains onboard AI: **BAE RAD750** (PowerPC ~200 MHz; flew Curiosity/Perseverance), **RAD5545**; emerging **HPSC PIC64** (Microchip/SiFive RISC-V, ~500× RAD750, **in qualification — not yet flight-certified** as of 2026). Sensors: **star trackers**, sun sensors, IMUs, stereo nav/hazard cameras, **flash-LIDAR** for RPO. Environment/constraints: vacuum-rated actuators, harmonic drives and dry lubricants (cold-welding risk), MMOD shielding, tight **mass/power/thermal budgets**, launch vibration/shock survival, and **no post-launch repair**.

## 6. Safety Envelope & Criticality
**Critical.** Two failure classes: (1) **crewed** proximity — near ISS/Gateway/astronauts, robotic faults risk crew or vehicle, invoking **human-rating** (two-fault tolerance, NASA-STD-3001, NPR 8705.2, robust fault management); (2) **uncrewed high-value** — RPO/capture of uncooperative targets risks collision and new debris. With no repair path, V&V dominates: extreme reliability budgets, thermal-vacuum and HIL test campaigns, redundancy/FDIR, and radiation-tolerant design. Planetary protection adds a *mission-gating* biological-cleanliness burden absent from every terrestrial vertical.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (perception/manipulation/estimation/control), this vertical **adds**:
- **Valued degrees:** **Aerospace/Astronautical Engineering** rises to first-class (astrodynamics, GNC, spacecraft dynamics); systems-engineering depth; physics for the environment.
- **Domain credentials:** GNC/orbital-mechanics coursework; space systems engineering (NASA/ESA/INCOSE SEP); radiation-effects and ECSS/NASA-standards literacy.
- **Clearances / hard gates:** **ITAR U.S.-person eligibility** is a near-universal gate for U.S. roles; a **U.S. security clearance** is required for national-security space (Space Force/NRO/defense primes).
- **Feeder capability profiles:** `state-estimation-slam`, `motion-planning-navigation`, `manipulation-and-grasping`, `control-classical-optimal-mpc`, `computer-vision-3d-perception`, `imitation-learning-teleoperation`, `safety-verification-assurance`.
- Conversion = "capability engineer + astrodynamics/GNC + space-environment engineering + ITAR eligibility (+ clearance for defense)."

## 8. Trending & Notable `⏱ as of mid-2026`
Commercial **OSAM/ISAM** maturing — **Northrop Grumman SpaceLogistics** Mission Robotic Vehicle / Mission Extension Pods (robotic GEO servicing); NASA **OSAM-1 cancelled** (2024). **Active debris removal**: **Astroscale** (ADRAS-J debris inspection; ELSA), **ClearSpace-1**. **Lunar surge**: **CLPS** landers (Astrobotic Griffin, Intuitive Machines IM-3 in 2026), **Lunar Terrain Vehicle** contenders (Intuitive Machines, Lunar Outpost, Venturi Astrolab), **GITAI** lunar arm for JAXA's crewed rover + a 2026 lunar-surface assembly demo. **MDA Canadarm3** (AI/machine-vision) for lunar Gateway. **Autonomy leaps**: Perseverance **enhanced AutoNav** (699.9 m driven without human review) and generative-AI onboard localization; lunar visual-SLAM with DEM anchoring; the **HPSC** compute jump promises far more onboard AI. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers:** NASA (JPL), ESA, JAXA, CSA · **MDA Space**, **Motiv Space Systems**, **Maxar**, **Northrop Grumman/SpaceLogistics**, **Astroscale**, **ClearSpace**, **GITAI**, **Astrobotic**, **Intuitive Machines**, **Lunar Outpost**, **Redwire** · primes Lockheed Martin, Boeing, Airbus Defence & Space, Thales Alenia.
- **Regulators:** FAA (AST), FCC, NOAA, DDTC (ITAR), BIS (EAR); ESA/national agencies.
- **Standards/partners:** ECSS, ISO TC20/SC14, CCSDS, COSPAR, IADC, UN COPUOS, CONFERS, DLR.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B3 Defense** (national-security space — shared ITAR/clearance regime), **B16 Nuclear/hazmat** (teleop-heavy extreme environments), **B11 Aerial/UAS** (GNC kinship), **B13 Marine** (extreme-environment autonomy). Most-used platforms: **C2 mobile manipulator** (rovers + arms), **C3 wheeled** (rovers), **C1 fixed arm** (station/servicer manipulators); orbital free-flyers have no clean C-slot.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B12.*
