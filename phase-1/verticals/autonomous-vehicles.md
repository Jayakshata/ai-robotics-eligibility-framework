# Vertical Overlay — Autonomous Vehicles / Self-Driving

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. Specifics web-verified this pass against ISO/UNECE/NHTSA/SAE primary pages. `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Autonomous Vehicles / Self-Driving · **Axis B:** B10 · **Safety-criticality:** **Critical**
**Core capabilities it builds on (Axis A, load-bearing first):** A1 perception (3D detection, camera+LiDAR+radar fusion) · A10 safety & verification · A3 planning/prediction & navigation · A2 state estimation/localization to HD map · A4 control (vehicle-dynamics MPC) · A8 simulation/scenario testing · A7 world models & end-to-end/VLA driving · **Typical platforms (C):** C3-adjacent (on-road wheeled; no dedicated Axis-C road-car track)

---

## 1. Definition & Scope
Robots that drive road vehicles on public infrastructure without (or beyond) human supervision. Sub-segments: **robotaxis** (L4 urban ride-hail — the flagship), **autonomous trucking / middle-mile freight** (L4 hub-to-hub highway), **consumer ADAS → L2+/L3 "eyes-off"** (OEM production cars), and **low-speed autonomy** (shuttles, sidewalk/yard delivery, autonomous buses). Unlike a warehouse AMR, an AV shares unstructured public roads with pedestrians, cyclists and human drivers at highway speed, making it the most regulation-, validation- and liability-heavy mobile-robotics vertical. By mid-2026 the leading edge is genuinely commercial (paid, driverless), not pilot. `✓`

## 2. Core Capabilities It Builds On
- **A1 Perception** *(load-bearing)* — `computer-vision-3d-perception` + `multimodal-sensor-fusion`: long-range 3D object detection, semantic segmentation, lane/traffic-light/sign recognition, and camera+LiDAR+radar fusion at automotive latency with ASIL-rated redundancy.
- **A10 Safety & Verification** — `safety-verification-assurance`: the differentiator (see §6) — safety cases, scenario-based V&V, runtime monitors.
- **A3 Planning & Prediction** — `motion-planning-navigation`: multi-agent behavior *prediction*, interaction-aware/game-theoretic behavior planning, real-time trajectory optimization under traffic rules.
- **A2 State Estimation / Localization** — `state-estimation-slam`: cm-accurate localization to an HD map; GNSS-RTK / INS / wheel-odometry fusion.
- **A4 Control** — `control-classical-optimal-mpc`: tire/vehicle-dynamics-aware path tracking (MPC), Ackermann/bicycle models.
- **A8 / A7 Simulation & Frontier** — `simulation-digital-twins`, `sim-to-real-transfer`, `world-models`, `robot-foundation-models-vla`: scenario simulation, log-replay, generative traffic, and emerging end-to-end/VLA driving policies.

## 3. Domain Knowledge Required
Beyond generalist robotics, an AV engineer must acquire: **vehicle dynamics** (longitudinal/lateral tire models, slip, load transfer, braking distance); **automotive E/E architecture** (ECUs, CAN/CAN-FD, Automotive Ethernet, AUTOSAR Classic & Adaptive); **functional-safety engineering** (ASIL decomposition, FMEA/FMEDA, FTA, GSN safety-case argumentation); **Operational Design Domain (ODD)** definition and monitoring; **traffic law, road infrastructure & right-of-way** semantics; **HD-map formats** (Lanelet2, OpenDRIVE, NDS); the **homologation / type-approval** process; **Automotive SPICE (ASPICE)** process maturity; and **V2X** (C-V2X). This is what a generalist roboticist lacks. `✓`

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **SAE J3016** — *Taxonomy & Definitions for Driving Automation* — defines the universal **L0–L5** levels and terms (DDT, ODD, fallback). The field's shared vocabulary. `✓`
- **ISO 26262** — *Road vehicles — Functional safety* — the malfunction/"fault" space (hardware/software failures); **ASIL A–D** risk classification. `✓`
- **ISO 21448:2022 (SOTIF)** — *Safety Of The Intended Functionality* — the no-fault "insufficiency" space (perception/decision limits in hard scenarios); scenario-based; the 2022 full standard extends beyond the PAS's L1/L2 limit to L3/L4. `✓`
- **ISO/PAS 8800:2024** — *Road vehicles — Safety and artificial intelligence* (pub. Dec 2024) — AI-specific functional insufficiencies, data/model assurance; extends 26262 + 21448. `✓`
- **ISO/TS 5083:2025** — *Safety for automated driving systems — Design, V&V* — first dedicated ADS engineering standard (L3/L4); safety-by-design + post-deployment; successor to ISO/TR 4804. `✓`
- **ISO 34502:2022 / ISO 34503:2023** — ADS **test scenarios**: 34502 = scenario-based safety-evaluation framework; 34503 = **ODD specification/taxonomy** (34501 terminology and 34504 categorization complete the family). `✓`
- **ISO/SAE 21434:2021** — *Road vehicles — Cybersecurity engineering* — full-lifecycle automotive cyber risk (replaced SAE J3061); underpins UN R155. `✓`
- **ANSI/UL 4600** — *Standard for Safety for the Evaluation of Autonomous Products* — **safety-case** methodology for driverless L4/L5; covers ML, sensing and autonomy gaps beyond what J3016's level taxonomy addresses. `✓`
- **UN R157 (UNECE)** — *Automated Lane Keeping Systems (ALKS)* — first binding international ADS regulation (adopted Jun 2020, in force Jan 2021; L3); the **01-series (in force Jan 2023) raised speed 60→130 km/h and added automated lane change** on divided motorways, and extended it to trucks/buses; mandates a DSSAD "black box." **Hard gate** (type-approval markets). `✓`
- **UN R155 / UN R156** — mandatory **Cybersecurity (CSMS)** and **Software-Update (SUMS)** management systems; R155 mandatory for all new UNECE vehicles since **Jul 2024**. **Hard gate** (type approval). `✓`
- **US — FMVSS (NHTSA)** — self-certification regime; driverless designs (no wheel/pedals) need **FMVSS exemptions**. NHTSA is modernizing **FMVSS 135** (brakes), 102, 103/104, 108, 110 for ADS. **AV STEP was formally *withdrawn* on 26 Jun 2026**; the operative federal path is now the (expanded Apr 2025) **AV Exemption Program** plus FMVSS-modernization NPRMs. `✓⏱`
- **US — state gates:** **California DMV** (Testing → Driverless Testing → **Deployment** permits) plus **CPUC** passenger tiers (Drivered/Driverless Pilot → Deployment; fares only at Deployment) — the concrete commercial-operation **hard gate** in CA; other states vary. `✓`
- *(The EU AI Act intersects, but road vehicles route through the type-approval framework.)*

## 5. Specialized Hardware, Sensors & Environment
Automotive **LiDAR** (spinning + solid-state), **imaging/4D radar**, surround **camera** rings, GNSS-RTK + **INS/IMU**, wheel odometry, and prior **HD maps**. Compute: automotive AI SoCs — **NVIDIA DRIVE Thor/Orin**, **Qualcomm Snapdragon Ride**, **Mobileye EyeQ** — with **ASIL-D safety islands**. **Fail-operational** redundancy: dual power, dual compute, redundant braking & steering. Networks: CAN-FD, Automotive Ethernet, AUTOSAR. Qualification/environment: **AEC-Q100** silicon qualification, wide temperature range, **ISO 16750** (electrical/environmental loads), EMC, shock/vibration, and IP-rated sensor housings that survive rain, fog and sun-glare. `✓`

## 6. Safety Envelope & Criticality
**Critical.** A fault — or a functional insufficiency — on a public road can kill occupants, pedestrians or cyclists at scale. The bar is **fail-operational, not merely fail-safe**: on fault the system must execute a **Minimal Risk Maneuver (MRM)** to a **Minimal Risk Condition (MRC)**, not just stop dead in a live lane. The V&V burden dominates: **ASIL-D** for critical functions; ISO 26262 + SOTIF (21448) + AI assurance (8800) integrated into a **UL 4600 / ISO/TS 5083 safety case**; billions of scenario-miles via simulation and closed-loop log-replay; ODD-boundary monitoring and graceful degradation; and **public disengagement/collision reporting** (CA DMV). "It works on the demo route" is a small fraction of the job. `✓`

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (perception / planning / control), this vertical **adds**:
- **Valued degrees:** EE/ECE, ME (vehicle dynamics), **Systems/Robotics**, CS/AI. A **PhD in ML/robotics** carries a ~20–30% premium; **CVPR/RSS/CoRL** publications ~+15% (perception/planning roles). `✓`
- **Domain credentials:** **ISO 26262 functional-safety** literacy (e.g. **TÜV FSE — Functional Safety Engineer**), SOTIF/ISO 21448 & ISO/SAE 21434 training, ASPICE, AUTOSAR; Udacity **Self-Driving Car / Sensor Fusion** nanodegrees as an entry signal.
- **Feeder capability profiles:** `computer-vision-3d-perception`, `multimodal-sensor-fusion`, `motion-planning-navigation`, `state-estimation-slam`, `control-classical-optimal-mpc`, `safety-verification-assurance`, `simulation-digital-twins`. Perception and safety-assurance engineers convert most directly.
- **Conversion:** "capability engineer (perception/planning/control) + automotive functional-safety & ODD literacy + C++/ROS at automotive latency." L4/L5 AV engineers command ~$170–230K, ~35–45% above traditional automotive. `✓⏱`

## 8. Trending & Notable `⏱ as of mid-2026`
**Commercial scale-up:** Waymo running ~3,000 robotaxis and ~500k paid rides/week across 11+ US cities (1,400+ sq mi), targeting 20+ cities incl. **Tokyo & London**. **Tesla** robotaxi (Austin mid-2025 → ~7 metros H1 2026) pushing **end-to-end neural** FSD. **Zoox** (Amazon) purpose-built vehicle moving to fares in SF/Las Vegas. **Autonomous trucking** commercializing: **Aurora** driverless on I-45 (Dallas–Houston); **Einride** Nasdaq IPO Jun 2026. **Tech trends:** end-to-end and **VLA/foundation-model driving** (Wayve GAIA world models, Tesla FSD), generative **neural simulation** for the long tail, **ISO/PAS 8800** shaping AI-assurance practice, and **4D imaging radar** + solid-state LiDAR cost-down. *(Re-research before publish.)* `⏱`

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers:** Waymo · Tesla · Zoox (Amazon) · Aurora · Nuro · May Mobility · Gatik · Kodiak · Baidu Apollo Go · Pony.ai · WeRide · Mobileye · Motional; OEMs (Mercedes L3 DRIVE PILOT, BMW, VW/CARIAD) & Tier-1s (Bosch, Continental, ZF, NVIDIA, Qualcomm); tooling: Applied Intuition, Foretellix, dSPACE.
- **Regulators/standards:** NHTSA · US state DMV/CPUC · UNECE WP.29/GRVA · ISO TC22/SC32 · SAE · UL Solutions · EU type-approval authorities · TÜV / SGS / HORIBA MIRA (assessment).
- **Academic labs:** Stanford (SAIL/CARS) · CMU · MIT · Berkeley DeepDrive · Michigan Mcity · TUM · Oxford ORI.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B2 logistics / last-mile delivery**, **B11 aerial/UAS** (shared BVLOS autonomy + DO-178C safety-case culture), and **B6 construction / B7 mining** (off-road autonomy). Most-used platform: on-road **wheeled** (C3-adjacent). Deepest ties to `safety-verification-assurance`, `simulation-digital-twins`, and the `world-models` / `robot-foundation-models-vla` frontier.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B10.*
