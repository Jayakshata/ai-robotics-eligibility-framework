# Vertical Overlay — Aerial / UAS / Drones

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` verified · `~` to-verify · `⏱` time-sensitive. Codes web-verified 2025–2026.

**Vertical:** Aerial / UAS / Drones · **Axis B:** B11 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state estimation/SLAM (GPS-denied) · A4 control (SE(3)/geometric, MPC) · A3 planning & navigation (3D, detect-and-avoid) · A1 perception (sense-and-avoid, photogrammetry) · A9 multi-robot/swarm & fleet · A10 middleware + safety/verification · A5 aerial locomotion · **Typical platforms (C):** C6 Aerial/UAV/Drone

---

## 1. Definition & Scope
Robots that fly: multirotor, fixed-wing, and hybrid-VTOL uncrewed aircraft plus their ground control and traffic-management stack. Main sub-segments — **inspection/survey** (energy, infrastructure, construction), **precision agriculture** (mapping, spraying), **package delivery/logistics**, **mapping & photogrammetry**, **public safety/SAR**, and **defense/ISR & loitering munitions** (overlaps B3). The market is large and BVLOS-inflecting (drone *services* ~$18.6B in 2024, forecast toward $65B by 2029). The defining feature: the environment is *regulated national airspace shared with crewed aviation*, so certification and airspace integration are as load-bearing as the engineering.

## 2. Core Capabilities It Builds On
- **A2 State Estimation / SLAM** *(most load-bearing)* — GNSS/RTK fusion, and **GPS-denied VIO** (visual-inertial odometry, satellite-image matching) for contested/indoor flight.
- **A4 Control** — geometric/SE(3) attitude-position control, control allocation/mixing across rotors, MPC for agile flight and wind/gust rejection; underactuated 6-DOF dynamics.
- **A3 Planning & Navigation** — 3D path planning, energy-aware routing, **detect-and-avoid (DAA)** conflict resolution, C2 link-loss and geofence contingency logic.
- **A1 Perception** — obstacle sense-and-avoid (stereo/LiDAR/radar), aerial mapping/photogrammetry, thermal/multispectral analytics.
- **A9 Multi-Robot/Swarm & Fleet** — delivery-fleet orchestration, decentralized swarm coordination (defense).
- **A10 Middleware + Safety/Verification** — PX4/ArduPilot flight stack, MAVLink, DO-178C-grade assurance (see §6).
- **A5 Aerial locomotion** (+ niche aerial manipulation). Link to `state-estimation-slam`, `control-classical-optimal-mpc`, `motion-planning-navigation`, `multimodal-sensor-fusion`, `multi-robot-swarm`, `safety-verification-assurance`, `robotics-middleware-realtime`.

## 3. Domain Knowledge Required
What a generalist roboticist lacks: **aerodynamics & flight mechanics** (four forces; fixed-wing vs. rotor; blade-element/momentum theory; propeller efficiency); **flight dynamics, stability & control allocation** (quaternions, 6-DOF, mixing); **propulsion & energetics** (BLDC motors, ESCs, LiPo/Li-ion/hydrogen, endurance–range–payload tradeoffs, SWaP); **the airspace system** (Class A–G, sectional charts, NOTAMs, TFRs, LAANC); **aviation meteorology** (wind, gusts, density altitude, icing); **weight-and-balance & performance**; **RF/C2 & GNSS** (link budgets, spectrum, ADS-B, jamming/spoofing); and **aviation safety culture** — airworthiness, redundancy, FMEA, and aeronautical decision-making (ADM).

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
**US operating rules**
- **14 CFR Part 107** — small-UAS (<55 lb) commercial rule; **Remote Pilot Certificate** and VLOS/daylight baseline. **(hard gate — the license to operate)** `✓`
- **14 CFR Part 107 Subpart D** — Operations Over People, Categories 1–4 (effective Apr 2021). `✓`
- **Part 107 waivers** — §107.31 BVLOS; §107.29 night (now permitted without waiver w/ training + lighting). `✓`
- **14 CFR Part 89 — Remote ID** — mandatory broadcast of ID/location; enforced since **Sep 16, 2023** (FRIA exception). **(hard gate for nearly all flight)** `✓`
- **FAA Part 108 (proposed)** — "Normalizing BVLOS"; NPRM Aug 2025, comment record reopened Jan 2026, final rule expected mid-to-late 2026. Population-density risk categories + DAA + UTM + Remote ID; **replaces the waiver regime with a rule**. **(emerging hard gate)** `✓ ⏱`
- **49 U.S.C. § 44807** — case-by-case exemption for UAS not fitting Part 107 (>55 lb / needing type cert). `✓`
- **14 CFR § 21.17(b)** — special-class **airworthiness/type-certification** pathway for larger UAS. `✓`
- **14 CFR Part 135** — air-carrier certificate required to carry another's property BVLOS for compensation. **(hard gate for delivery)** `✓`
- **NDAA §848 (FY20) / §817 (FY23) / American Security Drone Act (FY24)** → **Blue UAS** (DIU cleared list) / **Green UAS** (AUVSI) / **FCC Covered List** — bar PRC/covered-nation components from government use. **(hard gate for US public-sector & defense market)** `✓ ⏱`

**EU / international**
- **Regulation (EU) 2019/947** — operational rules; **Open / Specific / Certified** categories. `✓`
- **Regulation (EU) 2019/945** — product/technical requirements & **CE class marking (C0–C6)**. `✓`
- **SORA 2.5** (JARUS; EASA AMC via **ED Decision 2025/018/R**) — Specific-category risk assessment → **SAIL I–VI** + 24 OSOs. **(hard gate for Specific category)** `✓`
- **Regulation (EU) 2021/664 (+665/666)** — **U-space** (European UTM). `✓`

**Airworthiness / technical standards**
- **RTCA DO-178C** (airborne software, DAL A–E) · **DO-254** (airborne hardware) · **DO-326A/ED-202A** (airworthiness cybersecurity) — invoked for Certified-category / high-SAIL UAS. `✓`
- **ASTM F38 suite:** **F3411** (Remote ID, basis of Part 89 compliance) · **F3196** (sUAS BVLOS practice) · **F3442/F3442M-25** (Detect-and-Avoid performance) · **F3322-24a** (sUAS parachutes → Ops-Over-People) · **F3548-21** (UTM USS interoperability). `✓`
- **Military:** **STANAG 4671** (UAS airworthiness/USAR) · **STANAG 4703** (light-UAV airworthiness) · **STANAG 4586** (UCS interoperability). `✓`

## 5. Specialized Hardware, Sensors & Environment
**Autopilot/flight controller** (Pixhawk-class; **PX4 / ArduPilot** firmware; **MAVLink**; QGroundControl/Mission Planner GCS). Airframes: multirotor, fixed-wing, VTOL-hybrid. Propulsion: BLDC + ESCs, propellers, LiPo/Li-ion/hydrogen packs. Sensors: **redundant IMU**, barometer, magnetometer, **GNSS-RTK/PPK**, optical-flow + rangefinder, obstacle sensors (stereo/LiDAR/radar/ultrasonic), **ADS-B in/out**, gimbal-stabilized EO/IR, multispectral/thermal, survey-grade LiDAR. C2: RF datalink, encrypted comms, SATCOM (long-range). Environmental constraints: wind/gusts, density altitude, icing, EMI, **GNSS jamming/spoofing**, tight SWaP/vibration, bird strike.

## 6. Safety Envelope & Criticality
**High.** A failure is a falling object (third-party **ground risk**) and a potential **midair collision** with crewed aircraft (**air risk**, catastrophic). V&V burden: airworthiness assurance scaled to **SAIL** (EASA) or population-density category (FAA Part 108), **redundant flight computers/IMU/GNSS**, geofencing, **flight-termination systems** (parachute per ASTM F3322, FTS), DAA (ASTM F3442 / RTCA MOPS), C2 link-loss RTL logic, and a documented BVLOS **ConOps**. Higher-tier UAS pull in DO-178C DAL software rigor and ARP4754A/ARP4761 system safety — "flies in the demo" is a small fraction of approval.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (perception/control/state-estimation/planning):
- **Valued degrees:** **Aerospace/Aeronautical Engineering** rises to first-class alongside CS/EE/robotics; ME (aero/propulsion); avionics/systems engineering.
- **Domain credentials:** **FAA Part 107 Remote Pilot Certificate** (near-mandatory operating baseline); a crewed **pilot rating (PPL/IFR)** helps for BVLOS/Part 135; **DO-178C / ARP4754A** safety-critical avionics experience; **A&P** (airframe & powerplant) for maintenance; **AUVSI TOP** (Trusted Operator); **security clearance** for defense.
- **Feeder capability profiles:** `state-estimation-slam`, `control-classical-optimal-mpc`, `motion-planning-navigation`, `multimodal-sensor-fusion`, `multi-robot-swarm`, `safety-verification-assurance`, `robotics-middleware-realtime`.
- **Conversion:** "capability engineer + airspace/airworthiness literacy + Part 107 + (defense) NDAA-compliance/clearance."

## 8. Trending & Notable `⏱ as of mid-2026`
**Part 108 finalization** — the industry-defining shift from one-off waivers to a BVLOS *rule*. **UTM Phase 4** (NASA/FAA) — USS-managed corridors on ASTM F3548. **GNSS-denied autonomy** — VIO + satellite-image matching, edge autonomy stacks (Shield AI **Hivemind**, Skydio, Auterion, Edge Autonomy **Voyager**). **Swarm & mission-autonomy** (DoD **Replicator**), decentralized coordination under jamming. **Counter-UAS (C-UAS)** boom. **AAM/eVTOL** adjacency. US supply-chain reshoring — **FCC Covered-List** national-security determination (Dec 2025), Blue UAS transitioning to DCMA. Delivery scaling — **Zipline** (2M+ deliveries; Houston/Phoenix), **Wing**, **Amazon Prime Air**. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Delivery/logistics:** Zipline · Wing (Alphabet) · Amazon Prime Air · Matternet · DroneUp.
- **Enterprise/inspection & ag:** Skydio · Percepto · Flyability · AgEagle/senseFly · DJI Enterprise · XAG.
- **Defense/ISR:** Anduril · Shield AI · AeroVironment · General Atomics · Northrop Grumman · Kratos · Red Cat/Teal.
- **Autopilot/software:** Auterion · Dronecode (PX4) · ArduPilot · Airbus.
- **Regulators/standards:** FAA · EASA · ICAO · RTCA/EUROCAE · ASTM F38 · JARUS · NASA (UTM) · DIU (Blue UAS) · AUVSI (Green UAS/TOP) · FCC · NATO (STANAG).
- **Academic labs:** UZH Robotics & Perception Group (Scaramuzza, agile flight) · UPenn GRASP (Kumar, aerial swarms) · ETH ASL · GA Tech · MIT AeroAstro · CMU.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B3 Defense & security** (deep overlap), **B2 logistics/delivery**, agriculture, infrastructure inspection, mapping/survey, public safety/SAR. Most-used platform track: **C6 Aerial/UAV/Drone** (primary), with swarm and AAM/eVTOL extensions.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B11 / Axis-C C6.*

**Sources (2024–2026):** FAA Part 107 / Part 89 Remote ID / Ops-Over-People / Part 135 / §44807 (faa.gov/uas); Part 108 NPRM & reopening (federalregister.gov 2026-01644; faa.gov BVLOS_NPRM; ainonline.com 2026-01-01); EASA 2019/947, SORA 2.5 / ED Decision 2025/018/R, U-space (easa.europa.eu); RTCA DO-178C/DO-254/DO-326A (rtca.org; rapitasystems.com/certifying-uas); ASTM F38 F3411/F3196/F3442-25/F3322-24a/F3548-21 (astm.org; store.astm.org); NDAA §848 / American Security Drone Act / Blue UAS (diu.mil/blue-uas-policy; FCC DA-26-22); STANAG 4671/4586 (en.wikipedia.org/wiki/STANAG_4671); PX4/ArduPilot/MAVLink (px4.io); market & companies (technavio.com; uavcoach.com; jouav.com; dronelife.com 2026-01-27); trends (thedroneu.com/future-of-drones; unmannedsystemstechnology.com 2026-05).
