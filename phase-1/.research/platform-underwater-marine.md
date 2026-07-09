# Platform Track — Underwater / Marine (ROV/AUV)

> **Platform profile (Axis C).** Bundles Axis-A capabilities into the "subsea / marine-robotics engineer" archetype — it references the capability profiles rather than restating them. `✓` grounded · `~` to-verify · `⏱` time-sensitive. Web-verified mid-2026; sources at end.

**Platform:** Underwater / Marine (ROV/AUV) · **Axis C:** C7 · **Frontier:** `[★]` partial (hardware mature; the *resident-autonomy* + *acoustic/sonar-AI* layer is frontier)
**Signature capabilities (Axis A, load-bearing first):** A2 state-estimation/SLAM (GPS-denied nav) · A1 multimodal sensor fusion (INS/DVL/USBL) · A4 disturbance-robust control (thruster allocation / station-keeping) · A1 sonar/turbid-water perception · A3 current-aware navigation · A5 intervention manipulation · A9 high-latency teleop/HRI · A10 safety/verification · **Typical verticals (B):** B13 marine/underwater · B14 inspection · defense · science · offshore wind

---

## 1. Definition & Scope
Robots that operate in the **GPS-denied, RF-opaque, high-pressure** ocean. Two families converging on **hybrid/resident** vehicles: **ROVs** (tethered via umbilical, human-piloted — observation-class micro-ROV up to hydraulic **work-class WROV**) and **AUVs** (untethered, autonomous survey/mission). What makes it distinct as an engineering target: **the physics deletes every land-robot shortcut at once.** No GPS (positioning is dead-reckoning + acoustics), no RF (comms are low-bandwidth, high-latency acoustic modems or a tether), no light at depth (perception is **sonar-first**), plus hydrostatic pressure, corrosion, buoyancy/added-mass dynamics, and currents. The bundle is therefore organized around **navigation, acoustics, and pressure survival**, not end-effector dexterity — the inverse of a manipulator arm. Autonomy must tolerate a link that may drop for minutes.

## 2. Signature Capability Stack
- **A2 State estimation / SLAM** *(load-bearing — the platform's central problem)* — no GPS underwater; nav is **INS + DVL** dead-reckoning aided by **acoustic USBL/LBL**, plus terrain-aided / bathymetric / sonar SLAM and factor-graph fusion. → `state-estimation-slam`
- **A1 Multimodal sensor fusion** — tight-coupling INS/DVL/depth/USBL and acoustic returns at mismatched rates; the fusion filter *is* the vehicle's brain. → `multimodal-sensor-fusion`
- **A4 Disturbance-robust control** — 6-DOF **thruster allocation**, hover/station-keeping and **dynamic positioning** against currents, buoyancy/trim and added-mass effects. → `control-classical-optimal-mpc`, `whole-body-compliant-control`
- **A1 Sonar / turbid-water perception** — imaging/multibeam sonar in dark, backscatter-laden water; automatic target recognition (mines, pipelines, anodes, cables). → `computer-vision-3d-perception`
- **A3 Current- & energy-aware navigation** — path planning under drift, forward-look-sonar obstacle avoidance, docking approach. → `motion-planning-navigation`
- **A5 Intervention manipulation** — teleoperated hydraulic/electric arms, torque tools, subsea intervention (WROV). → `manipulation-and-grasping`
- **A9 High-latency teleop / HRI** — piloting over tether/acoustic latency; **over-the-horizon remote operations centers**. → `imitation-learning-teleoperation`, `human-robot-interaction`
- **Emerging brain:** underwater **foundation models / VLMs**, RL station-keeping, and **sim-to-real** domain randomization for the acoustic/optical domain gap. → `robot-foundation-models-vla`, `reinforcement-learning-control`, `sim-to-real-transfer`

## 3. Integration & Platform-Specific Skills
The "integration tax" no single capability owns: **pressure-vessel & implosion engineering** (housings, penetrators, oil-filled pressure compensation); **corrosion & marine materials** (galvanic/cathodic protection, anodized-Al/titanium, biofouling); **syntactic-foam buoyancy, trim/ballast and marine hydrodynamics** (added mass, drag); **underwater acoustics** (sonar equation, absorption, thermoclines, multipath) driving both sensing and comms; **acoustic-positioning integration** (USBL/LBL/SBL + DVL/INS); **6-DOF thruster/control allocation**; **tether-management (TMS), slip-rings, wet-mate connectors**; and **LARS** (launch-and-recovery) + host-vessel/DP operations. The distinctive bar: closing the autonomy loop **through a link that is intermittent and seconds-latent** — the opposite of a wired industrial cell.

## 4. Typical Verticals
**B13 offshore oil & gas IMR** (inspection-maintenance-repair) — the dominant revenue base (AUV/ROV offshore-IMR market ~USD 6.8 B in 2025, ROVs ~90% of vehicle share). **Offshore-wind O&M** (cable, scour, foundation) — fastest-growing commercial slice. **B14 inspection & maintenance**, **hydrographic/geophysical survey**, **subsea-cable/pipeline** work, **defense** (mine countermeasures, ISR, seabed warfare, critical-undersea-infrastructure protection), **science/oceanography**, and **aquaculture**. All need precise work in a place humans and wireless links cannot easily reach — exactly what a pressure-rated, acoustically-navigated vehicle optimizes.

## 5. Eligibility Profile
The archetypal **"subsea / marine-robotics engineer"** bundles **state-estimation/SLAM + sensor fusion + robust control + sonar perception**, plus **teleop/HRI** and (for WROV) **manipulation**. Distinctively, **Ocean Engineering, Marine Engineering, and Naval Architecture rise to first-class** alongside Robotics/EE/CS/Mechatronics; acoustical engineering and physical oceanography feed the sensing side. Platform-specific must-haves: **acoustic navigation (USBL/DVL/INS), pressure/corrosion design, sonar signal processing, ROS 2 + MAVLink/ArduSub (or a vehicle SDK), and offshore-ops literacy**. Credentials: **IMCA ROV Pilot-Technician** grades, **OPITO BOSIET** offshore survival, DP awareness, and **security clearance / ITAR** for defense UUV work. Feeder profiles: `state-estimation-slam`, `multimodal-sensor-fusion`, `control-classical-optimal-mpc`, `computer-vision-3d-perception`, `motion-planning-navigation`. Tiers: **L1** ROV pilot-tech / field integrator → **L2–L3** autonomy / nav / perception software → **L4/L5** marine-autonomy research. Platform premium: proven **acoustic-navigation or sonar-autonomy work on a real vehicle at sea**.

## 6. Platform-Specific Hardware & Stack `~`
**Prosumer / research ROVs:** **Blue Robotics BlueROV2** (the de-facto research vehicle — **T200 thrusters**, **Navigator** flight controller, **Raspberry Pi 4**), Deep Trekker, Blueye, QYSEA. **Work-class / OEM:** **Saab Seaeye** (Leopard, all-electric e-series), Oceaneering, Forum Energy Technologies, Kystdesign, Teledyne Marine. **AUVs:** **Kongsberg HUGIN** (Endurance), **HII REMUS**, **Exail** (ex-ECA/iXblue), Teledyne Gavia, Cellula Solus, Nauticus Robotics Aquanaut. **Manipulators/actuators:** **Reach Robotics Reach Alpha 5 / Reach Bravo** (all-electric), **Schilling Robotics Titan** (7-function hydraulic WROV arm). **Nav/sensors:** **Sonardyne** & **Exail/iXblue** USBL/INS; **Nortek**, **Teledyne RDI Wayfinder**, **Water Linked DVL A50** (DVLs); multibeam/side-scan sonar (Kongsberg, Norbit, Teledyne), Tritech Micron; **acoustic modems**. **Compute:** Raspberry Pi 4 / Pixhawk-class controllers on the low end, **NVIDIA Jetson (Orin)** for onboard perception/autonomy. **Software:** **BlueOS + ArduSub + MAVLink/MAVROS + QGroundControl/Cockpit**; **ROS 2 (Humble)**; simulators **HoloOcean, DAVE, Stonefish, UUV Simulator, MARUS, UNav-Sim**.

## 7. Trending & Notable `⏱ as of mid-2026`
- **Resident & hybrid ROV/AUV vehicles + subsea docking** — **Saipem Hydrone-R** (167-day continuous residency at Equinor, onshore-supervised); **Oceaneering Freedom** (docking-station residency up to ~6 months); **Kongsberg HUGIN Endurance** (~15 days / 1,200 nm).
- **USV-launched, over-the-horizon eROV ops** — **Ocean Infinity Armada** flying **Saab Seaeye Leopard**; **Fugro Blue Essence** USV launching the **Blue Volta eROV**; onshore remote-operations centers.
- **Electrification** — all-electric work-class ROVs (Saab e-series) and all-electric manipulators (Reach Bravo) displacing hydraulics.
- **Defense XLUUV surge** — **Anduril Dive-XL** (DIU/US Navy selection, Mar 2026; sibling of Ghost Shark for the RAN), Boeing **Orca**, Kongsberg; **critical-undersea-infrastructure protection** after Baltic-cable incidents.
- **AI/autonomy** — **underwater foundation models & VLMs** for perception (AAAI-2026 marine-robotics survey), AI sonar signal processing, factor-graph/deep-learning INS/DVL fusion, and sim-to-real domain randomization. Uptake is slower than on land — **data-, compute-, and acoustic-link-constrained**.

## 8. Key Players & Ecosystem
- **ROV/AUV OEMs:** Blue Robotics · Saab Seaeye · Kongsberg · Oceaneering · Forum Energy Technologies · Teledyne Marine · HII (REMUS) · Exail · Cellula · Nauticus Robotics · Deep Trekker · Blueye · Eelume (snake robot).
- **Manipulators / nav / sensors:** Reach Robotics · Schilling Robotics · Sonardyne · Exail/iXblue · Nortek · Teledyne RDI · Water Linked · Tritech · Norbit.
- **Services/operators:** Oceaneering · Saipem · Subsea7 · TechnipFMC · DeepOcean · Fugro · Reach Subsea · Ocean Infinity.
- **Defense:** Anduril · Boeing · Kongsberg · Saab · HII · General Dynamics · L3Harris · Exail.
- **Academic labs:** WHOI · MBARI · MIT Sea Grant AUV Lab / MIT–WHOI · NTNU AMOS · Heriot-Watt Ocean Systems Lab · Southampton/NOC · ACFR (Sydney) · Girona CIRS · BYU (HoloOcean).
- **Open-source/stack:** ArduSub/BlueOS · MAVLink · ROS 2 · HoloOcean · DAVE · Stonefish.

## 9. Adjacent Platforms & Capabilities
Adjacent platforms: **C8 soft/biomimetic** (bio-inspired propulsion, Eelume-class snake robots), **C9 swarm** (multi-AUV survey), **C6 aerial/UAS** (shared GPS-denied / disturbance-rejection nav problems). Most-central capability profiles: `state-estimation-slam`, `multimodal-sensor-fusion`, `control-classical-optimal-mpc`, `computer-vision-3d-perception`, `motion-planning-navigation`. The **B13 marine/underwater vertical overlay** (`vertical-marine-underwater.md`) supplies the class-society/IMCA/NORSOK regulation, offshore hardware, and safety envelope that sit atop this platform bundle.

---
## Sources (2024–2026)
- Vehicles/stack: BlueROV2 — https://bluerobotics.com/store/rov/bluerov2/ ; BlueOS (open source) — https://github.com/bluerobotics/BlueOS ; BlueROV2 software/ROS setup — https://bluerobotics.com/learn/bluerov2-software-setup/
- Manipulators: Reach Bravo (all-electric WROV arm) — https://reachrobotics.com/products/manipulators/reach-bravo/ ; Reach manipulator range — https://reachrobotics.com/products/manipulators/
- Nav sensors: Water Linked DVL — https://www.waterlinked.com/dvl ; Nortek subsea navigation — https://www.nortekgroup.com/products/subsea-navigation ; Teledyne Marine DVLs — https://www.teledynemarine.com/products/product-line/navigation-positioning/doppler-velocity-logs ; DVL A50 on BlueROV — https://bluerobotics.com/store/the-reef/dvl-a50/
- Nav research: AI-aided AUV navigation (2026) — https://arxiv.org/html/2605.04672 ; AUV key-technologies review (2025) — https://www.sciencedirect.com/science/article/pii/S209580992500445X ; deep INS/DVL fusion (2025) — https://arxiv.org/pdf/2503.21727
- Resident/hybrid: Oceaneering Freedom AUV — https://www.oceaneering.com/rov-services/rov-systems/freedom-autonomous-underwater-vehicle/ ; ROV/AUV tech 2026 — https://offshoreindustry.co.uk/rov-and-auv-technology-in-2026-how-autonomous-subsea-robotics-is-transforming-offshore-inspection-and-intervention/ ; subsea residency — https://www.marinetechnologynews.com/news/subsea-vehicles-resident-614272
- USV-launched: Armada + Seaeye Leopard — https://www.offshore-mag.com/subsea/article/14184075/armada-robotic-vessel-fleet-to-include-seaeye-leopard-rov
- Defense XLUUV: Anduril Dive-XL — https://www.anduril.com/dive-xl ; DIU/Navy select Anduril (Mar 2026) — https://www.navalnews.com/naval-news/2026/03/diu-and-u-s-navy-select-anduril-for-xl-auv-program/ ; seabed-warfare AUV vendors — https://maritime-executive.com/article/u-s-navy-picks-three-vendors-to-quickly-field-auvs-for-seabed-warfare
- AI/perception/sim: AI-Driven Marine Robotics (AAAI 2026) — https://arxiv.org/abs/2509.01878 ; VLMs for underwater perception (2026) — https://arxiv.org/pdf/2602.10655 ; underwater embodied intelligence (2026) — https://arxiv.org/pdf/2603.07393 ; underwater simulators review (HoloOcean/DAVE/Stonefish) — https://arxiv.org/pdf/2504.06245
- Market context: AUV/ROV offshore-IMR market — https://www.fortunebusinessinsights.com/auv-rov-for-offshore-irm-market-109176

*Template: `phase-1/platforms/_TEMPLATE-platform.md`. Vertical overlay: `phase-1/.research/vertical-marine-underwater.md`. Taxonomy: `master-niche-taxonomy.md` C7.*
