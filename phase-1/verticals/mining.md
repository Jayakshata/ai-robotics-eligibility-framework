# Vertical Overlay — Mining Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Mining · **Axis B:** B7 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state estimation/SLAM (GPS-denied) · A1 perception (LiDAR/radar in dust) · A9 fleet orchestration (mixed fleets) · A3 navigation (haul-road) · A4 control (heavy-vehicle dynamics) · A10 safety & verification · A8 digital twins · **Typical platforms (C):** C3 AMR/AGV (haul trucks) · C6 aerial (drones) · C4 quadruped (inspection) · C1 fixed arm (charging)

---

## 1. Definition & Scope
Robots and autonomous systems that extract, move, and characterize rock and ore across the mining cycle. Sub-segments: **surface autonomous haulage (AHS)** — the flagship, driverless 200–400 t trucks; **autonomous drilling & robotic explosives charging**; **underground load-haul-dump (LHD) and haulage automation** (tele-remote → fully autonomous); **autonomous heavy-haul rail** (Rio Tinto AutoHaul); and **inspection/survey drones and quadrupeds** for GPS-denied stope mapping and ground-support monitoring. Australia's Pilbara iron-ore region leads adoption; the market is OEM-dominated with a fast-consolidating retrofit / OEM-agnostic layer. The differentiator vs. on-road AVs: a brutal environment, **mixed manned + autonomous fleets**, and a heavy machine-safety + explosive-atmosphere regulatory stack.

## 2. Core Capabilities It Builds On
- **A2 State Estimation / SLAM** *(most load-bearing)* — surface RTK-GNSS + inertial; underground is **GPS-denied**, so LiDAR/visual-inertial SLAM is the hard problem (`state-estimation-slam`).
- **A1 Perception** — object/person detection through **dust, low/no light, occlusion**; **radar** is prized because it penetrates dust where LiDAR/cameras degrade (`computer-vision-3d-perception`, `multimodal-sensor-fusion`).
- **A9 Fleet Orchestration / Multi-Agent** — traffic management of **mixed autonomous + manned + light-vehicle** fleets; the operational core of AHS (`multi-robot-swarm`).
- **A3 Navigation** — haul-road following, dynamic re-routing, spot/dump/queue behaviours (`motion-planning-navigation`).
- **A4 Control** — high-mass, high-inertia vehicle dynamics; braking on grade, low-speed docking precision (`control-classical-optimal-mpc`).
- **A10 Safety & Verification** + **A8 Digital Twins** — see §6; twins for mine planning and pre-deployment validation (`safety-verification-assurance`, `simulation-digital-twins`).

## 3. Domain Knowledge Required
**Mine geology & geotechnical engineering / rock mechanics** (ground control, convergence, rockfall); **drill-and-blast** (pattern design, fragmentation, ore recovery); **mine ventilation & gas management** (methane liberation, dust suppression, air quality); **ore-body modelling, grade control & mine planning** (bench/pit and stope design, haulage cycles, short-interval control); and **mine surveying**. The thing a generalist AV/robotics engineer lacks: the machine operates *inside a live geotechnical and gas-hazard system*, not on a road.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ISO 17757:2019** — Earth-moving machinery *and mining* — **Autonomous and semi-autonomous machine system safety (ASAMS)**; the keystone standard covering the autonomous machine + its system + infrastructure (hardware & software) across the lifecycle, surface and underground. ISO/TC 127/SC 2. **(de-facto global gate; adopted as AS 17757:2020.)**
- **ISO 19296:2018** — Mining — **Mobile machines working underground — Machine safety** (Type-C standard for LHDs, haulers, dozers, shuttle cars). Machine safety only — explosive-atmosphere, ventilation, and function-specific drilling/charging risks fall to the Ex stack below. ISO/TC 82.
- **ISO 21815 series** — Earth-moving machinery — **Collision warning and avoidance**: Part 1:2022 (general requirements — detect, warn, intervene by speed-reduction/motion-inhibit); **ISO/TS 21815-2:2021** (on-board **J1939** communication interface — enables mixed-fleet interoperability); Part 3:2023 (forward/reverse risk area & level).
- **EMESRT** (Earth Moving Equipment Safety Round Table) **9-Layer Vehicle-Interaction Defensive-Controls model** (Rev 3.0, Sept 2024) — industry benchmark; **Level 9 = automated intervention / controlled stop** when the operator fails to act; underpins **ICMM's Innovation for Cleaner, Safer Vehicles (ICSV)**. **(de-facto gate at Tier-1 miners.)**
- **ATEX (Dir. 2014/34/EU) / IECEx**, built on the **IEC 60079** series — **explosive-atmosphere** certification for gassy/coal mines: **Group I** (methane/coal dust), EPL **Ma/Mb** (ATEX categories M1/M2 — Ma stays energized in firedamp, Mb de-energizes on gas). **(hard gate — zone-specific, non-transferable.)**
- **MSHA 30 CFR** (US) — "**permissible**" equipment approval for gassy mines: **Part 18** (electric machines), **Part 36** (mobile diesel transport), **Part 7** (test/approval procedures); 1.0 % methane operating limit. **(hard legal gate for US underground coal.)**
- **WA Code of Practice — Safe Mobile Autonomous Mining** (WorkSafe WA / DEMIRS) and **Queensland QGN33** (autonomous machinery in coal mines) — jurisdictional deployment gates in Australia.
- Supporting: **ISO 15817** (remote control of EMM), **ISO 3450** (braking), **ISO 13849 / IEC 61508** (functional safety of the collision-avoidance/autonomy system).

## 5. Specialized Hardware, Sensors & Environment
Ruggedized to survive **dust, vibration, shock, water ingress, wide temperature**; underground coal demands **Group I explosion-protected** enclosures (Ex d / Ex i). Sensor suites are dust-tuned: **imaging radar** (dust-penetrating), rugged **LiDAR** (MicroVision, Ouster), stereo/thermal cameras, and high-precision **RTK-GNSS + IMU** on surface. **GPS-denied** underground → SLAM plus retro-reflector/tag infrastructure. Connectivity is a first-class constraint: **private LTE/5G, mesh radio, leaky-feeder** underground. Machines are enormous (to ~400 t), with single-fault-tolerant e-stop, geofencing, and **remote-operations-centre (ROC)** teleop.

## 6. Safety Envelope & Criticality
**High.** **Vehicle interaction is the #1 fatality category** for ICMM members, so the V&V burden centres on collision avoidance: object-detection integrity, **EMESRT Level-9 intervention**, exclusion/geofenced zones, and safe **mixed-fleet** interaction (autonomous truck vs. manned grader vs. light vehicle vs. person on foot). ISO 17757 imposes lifecycle safety across machine + system + infrastructure; the collision-avoidance system carries a **functional-safety (ISO 13849 / IEC 61508 SIL)** argument. Failure = fatality, loss of a multi-million-dollar machine, or a ground/gas event.

## 7. Delta-Eligibility (what the vertical adds)
On top of base autonomy/perception/fleet eligibility, this vertical **adds**:
- **Valued degrees:** **Mining Engineering** and **Geological/Geotechnical Engineering** rise to first-class alongside robotics/EE/ME/CS; strong programs at **Colorado School of Mines** (mining + a dedicated robotics graduate program), Curtin **WASM**, UNSW, Queensland, McGill, Witwatersrand.
- **Domain credentials:** **functional-safety (TÜV FSE / IEC 61508)**, **ATEX/IECEx CompEx** for underground work, **MSHA Part 46/48** training (US), Australian **VOC / site inductions**, and **SME** (Society for Mining, Metallurgy & Exploration) professional membership.
- **Feeder capability profiles:** `state-estimation-slam`, `motion-planning-navigation`, `multimodal-sensor-fusion`, `multi-robot-swarm`, `control-classical-optimal-mpc`, `safety-verification-assurance`, `simulation-digital-twins`.
- Conversion: **"AV/AMR autonomy engineer + heavy-vehicle dynamics + Ex/functional-safety + mining domain."** Self-driving and AMR engineers convert most directly — haul trucks are large outdoor AMRs.

## 8. Trending & Notable `⏱ as of mid-2026`
**Scale-up + consolidation:** Caterpillar (**MineStar / Command**, ~690 autonomous trucks end-2024, target **2,000+ by 2030**), Komatsu **FrontRunner** (Nevada Gold Mines, 2025), Sandvik **AutoMine** (Surface Fleet launched 2025). **OEM-agnostic retrofit** consolidating fast: **Pronto.ai acquired SafeAI** (Jul 2025) and launched tiered AHS Editions (Feb 2026); **Epiroc fully acquired ASI Mining** (2024). **LiDAR supply race** (MicroVision–Cat 2026; Ouster–Komatsu/Sandvik). **Battery-electric + autonomy convergence** (Fortescue–Liebherr $2.8 B; 200+ autonomous trucks). **GPS-denied autonomous drones** — **Emesent Hovermap** (CSIRO spin-out), **Exyn** — for stope mapping/inspection. **Robotic explosives charging** — Orica/Epiroc **Avatel**, **ABB Robot Charger**. **Autonomous heavy-haul rail** — Rio Tinto **AutoHaul**. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **OEMs / integrators:** Caterpillar · Komatsu · Sandvik · Epiroc (ASI Mining) · Hexagon Mining · ABB · Liebherr · Orica.
- **Retrofit / autonomy:** Pronto.ai · SafeAI · Emesent · Exyn Technologies.
- **Operators:** Rio Tinto · BHP · Fortescue · Anglo American · Vale · Nevada Gold Mines.
- **Regulators / bodies:** MSHA & NIOSH (US) · WA DEMIRS / Qld RSHQ (Australia) · **ICMM** · **EMESRT** · ISO TC 127 (SC 2) & TC 82 · IECEx.
- **Academic / research:** CSIRO Data61 (Emesent/Hovermap origin) · Colorado School of Mines · Curtin WASM · Univ. of Queensland (Sustainable Minerals Institute) · Carnegie Mellon field robotics · Mining3.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B8 oil & gas / hazardous** (shared ATEX/IECEx), **B10 autonomous vehicles** (the haul-truck autonomy stack), **B6 construction** (earth-moving overlap), **B14 inspection & maintenance**, **B16 nuclear/hazmat** (teleop-heavy). Most-used platforms: **C3 AMR/AGV**, **C6 aerial**, **C4 quadruped**, **C1 fixed arm**.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B7.*
