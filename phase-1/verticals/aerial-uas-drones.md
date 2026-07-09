# Vertical Overlay — Aerial / UAS / Drones

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` grounded · `~` to-verify · `⏱` time-sensitive. Regulatory codes web-verified 2025–2026.

**Vertical:** Aerial / UAS / Drones · **Axis B:** B11 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state estimation/SLAM (GPS-denied) · A4 control (SE(3)/geometric, MPC) · A3 planning & navigation (3D, detect-and-avoid) · A1 perception (sense-and-avoid, photogrammetry) · A9 multi-robot/swarm & fleet · A10 middleware + safety/verification · A5 aerial locomotion · **Typical platforms (C):** C6 Aerial/UAV/Drone · C9 swarm (defense)

---

## 1. Definition & Scope
Robots that fly: multirotor, fixed-wing, and hybrid-VTOL uncrewed aircraft plus their ground-control and traffic-management stack. Sub-segments — **inspection/survey** (energy, infrastructure, construction), **precision agriculture** (mapping, spraying), **package delivery/logistics**, **mapping & photogrammetry**, **public safety/SAR**, and **defense/ISR & loitering munitions** (deep overlap with B3). A large, BVLOS-inflecting market (drone *services* ~$18.6B in 2024, forecast toward ~$65B by ~2030 `~`). The defining feature: the workspace is *regulated national airspace shared with crewed aviation*, so certification and airspace integration are as load-bearing as the engineering.

## 2. Core Capabilities It Builds On
- **A2 State Estimation / SLAM** *(most load-bearing)* — GNSS/RTK fusion and **GPS-denied VIO** (visual-inertial odometry, satellite-image matching) for contested/indoor flight. (`state-estimation-slam`)
- **A4 Control** — geometric/SE(3) attitude–position control, rotor control allocation/mixing, MPC for agile flight and wind/gust rejection; underactuated 6-DOF dynamics. (`control-classical-optimal-mpc`; `reinforcement-learning-control` for learned agile flight)
- **A3 Planning & Navigation** — 3D energy-aware routing, **detect-and-avoid (DAA)** conflict resolution, C2 link-loss and geofence contingency logic. (`motion-planning-navigation`)
- **A1 Perception** — obstacle sense-and-avoid (stereo/LiDAR/radar), aerial mapping/photogrammetry, thermal/multispectral analytics. (`computer-vision-3d-perception`, `multimodal-sensor-fusion`)
- **A9 Multi-Robot / Swarm & Fleet** — delivery-fleet orchestration; decentralized swarm coordination under jamming (defense). (`multi-robot-swarm`)
- **A10 Middleware + Safety/Verification** — PX4/ArduPilot flight stack, MAVLink; DO-178C-grade assurance (see §6). (`robotics-middleware-realtime`, `safety-verification-assurance`)
- **A5 Aerial Locomotion** — regime-specific control across multirotor/fixed-wing/VTOL; niche aerial manipulation. (`locomotion`)

## 3. Domain Knowledge Required
What a generalist roboticist lacks: **aerodynamics & flight mechanics** (four forces; fixed-wing vs. rotor; blade-element/momentum theory; propeller efficiency); **flight dynamics, stability & control allocation** (quaternions, 6-DOF, mixing); **propulsion & energetics** (BLDC/ESC, LiPo/Li-ion/hydrogen, endurance–range–payload tradeoffs, SWaP); **the airspace system** (Class A–G, sectional charts, NOTAMs, TFRs, LAANC); **aviation meteorology** (wind, gusts, density altitude, icing); **weight-and-balance & performance**; **RF/C2 & GNSS** (link budgets, spectrum, ADS-B, jamming/spoofing); and **aviation safety culture** — airworthiness, redundancy, FMEA, aeronautical decision-making (ADM).

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
**US — operating rules**
- **14 CFR Part 107** — small-UAS (<55 lb) commercial rule; **Remote Pilot Certificate**, VLOS/daylight baseline. **(hard gate — the license to operate)** `✓`
- **Part 107 Subpart D** — Operations Over People, **Categories 1–4** (effective Apr 2021). `✓`
- **Part 107 waivers** — **§107.31** waived for **BVLOS**; **§107.29** night now permitted without waiver (recurrent training + anti-collision lighting). `✓`
- **14 CFR Part 89 — Remote ID** — mandatory broadcast of ID/location; operator compliance required **Sep 16, 2023**, **fully enforced since Mar 16, 2024** (FRIA exception). **(hard gate for nearly all flight)** `✓`
- **FAA Part 108 (proposed) — "Normalizing BVLOS"** — NPRM **Aug 7, 2025**; comment period reopened **Jan 2026** (ADS-B Out / electronic conspicuity / DAA; comments due Feb 11, 2026); final rule targeted **spring 2026, slipping**. Population-density risk categories + DAA + UTM + Remote ID; **replaces the waiver regime with a rule**. **(emerging hard gate)** `✓ ⏱`
- **49 U.S.C. § 44807** — case-by-case exemption for UAS outside Part 107 (>55 lb / needing type cert). `✓`
- **14 CFR § 21.17(b)** — special-class **airworthiness / type-certification** pathway for larger UAS. `✓`
- **14 CFR Part 135** — air-carrier certificate to carry another's property BVLOS for compensation. **(hard gate for delivery)** `✓`

**US — supply-chain / national-security gates**
- **NDAA §848 (FY20)** → DoD may not procure/operate PRC-made UAS or covered PRC components; **§817 (FY23)** extended to DoD contractors *using* covered UAS (from Oct 1, 2024). `✓`
- **American Security Drone Act of 2023** (in NDAA FY24) → government-wide procurement ban on enactment; **operation ban from Dec 22, 2025** (agencies, contractors, grant recipients). `✓`
- **NDAA §1709 (FY25)** → named **DJI & Autel** for a national-security risk determination; absent a clearing finding they route to the **FCC Covered List**. `✓ ⏱`
- Compliance regimes: **Blue UAS** (DIU cleared list) · **Green UAS** (AUVSI) · **FCC Covered List**. **(hard gate for US public-sector & defense market)** `✓`

**EU / international**
- **Regulation (EU) 2019/947** — operational rules; **Open / Specific / Certified** categories. `✓`
- **Regulation (EU) 2019/945** — product requirements & **CE class marking (C0–C6)**. `✓`
- **SORA 2.5** (JARUS) — Specific-category risk assessment → **SAIL I–VI + 17 OSOs** (reduced from 24 in SORA 2.0); adopted as EASA AMC via **ED Decision 2025/018/R**, applicable **29 Sep 2025**. **(hard gate for Specific category)** `✓`
- **Regulation (EU) 2021/664 (+665/666)** — **U-space** (European UTM). `✓`

**Airworthiness / technical standards**
- **RTCA DO-178C** (airborne software, DAL A–E) · **DO-254** (airborne hardware) · **DO-326A/ED-202A** (airworthiness cybersecurity) — invoked for Certified-category / high-SAIL UAS. `✓`
- **ASTM F38 suite:** **F3411** (Remote ID broadcast, basis of Part 89 compliance) · **F3196** (sUAS BVLOS practice) · **F3442/F3442M** (Detect-and-Avoid performance) · **F3322** (sUAS parachutes → Ops-Over-People) · **F3548** (UTM USS interoperability). `✓`
- **Military:** **STANAG 4671** (fixed-wing UAS airworthiness/USAR) · **STANAG 4703** (light-UAV airworthiness) · **STANAG 4586** (UCS interoperability). `✓`

## 5. Specialized Hardware, Sensors & Environment
**Autopilot/flight controller** (Pixhawk-class; **PX4 / ArduPilot** firmware; **MAVLink**; QGroundControl/Mission Planner GCS). Airframes: multirotor, fixed-wing, VTOL-hybrid. Propulsion: BLDC + ESCs, propellers, LiPo/Li-ion/hydrogen packs. Sensors: **redundant IMU**, barometer, magnetometer, **GNSS-RTK/PPK**, optical-flow + rangefinder, obstacle sensors (stereo/LiDAR/radar/ultrasonic), **ADS-B in/out**, gimbal-stabilized EO/IR, multispectral/thermal, survey-grade LiDAR. C2: RF datalink, encrypted comms, SATCOM (long-range/BLOS). Environmental constraints: wind/gusts, density altitude, icing, EMI, **GNSS jamming/spoofing**, tight SWaP/vibration, bird strike.

## 6. Safety Envelope & Criticality
**High.** A failure is a falling object (third-party **ground risk**) and a potential **midair collision** with crewed aircraft (**air risk**, catastrophic). V&V burden: airworthiness assurance scaled to **SAIL** (EASA) or population-density category (FAA Part 108); **redundant flight computers/IMU/GNSS**; geofencing; **flight-termination systems** (parachute per ASTM F3322, FTS); DAA (ASTM F3442 / RTCA MOPS); C2 link-loss return-to-launch logic; and a documented BVLOS **ConOps**. Higher-tier UAS pull in DO-178C DAL software rigor and **ARP4754A/ARP4761** system-safety process — "flies in the demo" is a small fraction of approval.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (perception/control/state-estimation/planning):
- **Valued degrees:** **Aerospace/Aeronautical Engineering** rises to first-class alongside CS/EE/robotics; ME (aero/propulsion); avionics/systems engineering.
- **Domain credentials:** **FAA Part 107 Remote Pilot Certificate** (near-mandatory operating baseline); a crewed **pilot rating (PPL/IFR)** helps for BVLOS/Part 135; **DO-178C / ARP4754A** safety-critical avionics experience; **A&P** (airframe & powerplant) for maintenance; **AUVSI TOP** (Trusted Operator); **security clearance** for defense.
- **Feeder capability profiles:** `state-estimation-slam`, `control-classical-optimal-mpc`, `motion-planning-navigation`, `computer-vision-3d-perception`, `multimodal-sensor-fusion`, `multi-robot-swarm`, `safety-verification-assurance`, `robotics-middleware-realtime` (+ `reinforcement-learning-control` for agile/learned flight).
- **Conversion:** "capability engineer + airspace/airworthiness literacy + Part 107 + (defense) NDAA-compliance/clearance."

## 8. Trending & Notable `⏱ as of mid-2026`
**Part 108 finalization** — the industry-defining shift from one-off waivers to a BVLOS *rule* (final rule targeted spring 2026, slipping). **UTM Phase 4** (NASA/FAA) — USS-managed corridors on ASTM F3548. **GNSS-denied autonomy** — VIO + satellite-image matching, edge-autonomy stacks (Shield AI **Hivemind**, Skydio, Auterion, Edge Autonomy **Voyager**). **Swarm & mission-autonomy** (DoD **Replicator**), decentralized coordination under jamming. **Counter-UAS (C-UAS)** boom. **AAM/eVTOL** adjacency. US supply-chain reshoring — the **FCC Covered List** categorically added **all foreign-produced UAS + critical components** (DA 25-1086, **Dec 22, 2025**), blocking new equipment authorizations (the de-facto "DJI ban"); Blue UAS transitioning toward DCMA. Delivery scaling — **Zipline** (2M+ deliveries; Houston/Phoenix), **Wing**, **Amazon Prime Air**. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Delivery/logistics:** Zipline · Wing (Alphabet) · Amazon Prime Air · Matternet · DroneUp.
- **Enterprise/inspection & ag:** Skydio · Percepto · Flyability · AgEagle/senseFly · DJI Enterprise · XAG.
- **Defense/ISR:** Anduril · Shield AI · AeroVironment · General Atomics · Northrop Grumman · Kratos · Red Cat/Teal.
- **Autopilot/software:** Auterion · Dronecode (PX4) · ArduPilot · Airbus.
- **Regulators/standards:** FAA · EASA · ICAO · RTCA/EUROCAE · ASTM F38 · JARUS · NASA (UTM) · DIU (Blue UAS) · AUVSI (Green UAS/TOP) · FCC · NATO (STANAG).
- **Academic labs:** UZH Robotics & Perception Group (Scaramuzza — agile flight) · UPenn GRASP (Kumar — aerial swarms) · ETH ASL · Georgia Tech · MIT AeroAstro · CMU.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B3 Defense & security** (deep overlap), **B2 logistics/delivery**, **B5 agriculture**, **B14 inspection & maintenance**, plus mapping/survey and public safety/SAR. Most-used platform track: **C6 Aerial/UAV/Drone** (primary), with **C9 swarm/multi-robot** (defense) and **AAM/eVTOL** extensions.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B11 / Axis-C C6.*
