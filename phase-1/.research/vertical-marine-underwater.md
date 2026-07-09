# Vertical Overlay — Marine / Underwater Robotics (ROV/AUV)

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified (2024–2026) · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Marine / Underwater (ROV/AUV) · **Axis B:** B13 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state estimation/SLAM (GPS-denied nav) · A1 multimodal sensor fusion (acoustic+inertial) · A4 disturbance-robust control (station-keeping) · A1 perception (sonar/turbid-water CV) · A3 current-aware navigation · A5 manipulation (work-class intervention) · A9 HRI (high-latency teleop) · A10 safety/verification · **Typical platforms (C):** C7 underwater/marine (ROV/AUV)

---

## 1. Definition & Scope
Robots operating in the GPS-denied, high-pressure, RF-opaque ocean. Two families: **ROVs** (tethered, human-piloted via umbilical — observation-class to hydraulic work-class WROV) and **AUVs** (untethered, autonomous survey/mission vehicles), converging on **hybrid/resident vehicles**. Sub-segments: **offshore oil & gas inspection-repair-maintenance (IMR)** — the dominant revenue base; **offshore-wind O&M** (cable, scour, foundation); **hydrographic/geophysical survey**; **subsea-cable & pipeline** work; **defense** (mine countermeasures, ISR, seabed warfare); **science/oceanography**; **aquaculture** and inland inspection. The AUV & ROV offshore-IMR market was ~**USD 6.8 B in 2025** (→~13.5 B by 2034, ~7.8% CAGR); ROVs hold ~90% of vehicle share, oil & gas ~39% of demand, AUVs fastest-growing. `✓` [Fortune BI](https://www.fortunebusinessinsights.com/auv-rov-for-offshore-irm-market-109176)

## 2. Core Capabilities It Builds On
- **A2 State estimation / SLAM** *(most load-bearing)* — no GPS underwater; navigation is dead-reckoning by **INS + DVL** aided by **acoustic USBL/LBL**, plus **terrain-aided / bathymetric and sonar SLAM**.
- **A1 Multimodal sensor fusion** — tight-coupling INS/DVL/depth/USBL and acoustic returns; the fusion problem *is* the vehicle.
- **A4 Control** — 6-DOF thruster allocation, hover/station-keeping and **dynamic positioning** against currents, added-mass/buoyancy-trim effects.
- **A1 Perception** — **sonar-first** (imaging/multibeam) in dark, turbid water; optical CV fighting backscatter; automatic target recognition (mines, pipelines, anodes).
- **A3 Navigation** — current-/energy-aware planning; forward-look-sonar obstacle avoidance.
- **A5 Manipulation** — teleoperated hydraulic/electric arms and torque tools for subsea intervention (WROV).
- **A9 HRI / teleop** — piloting over tether/acoustic latency; **over-the-horizon remote operations centers**. **A10 Safety/verification** for resident/autonomous ops (§6).

## 3. Domain Knowledge Required
Beyond robotics: **marine hydrodynamics** (added mass, drag, buoyancy/trim/ballast) and **naval-architecture** stability; **underwater acoustics** (sonar equation, absorption, refraction, thermoclines, multipath) — the dominant sensing/comms physics; **physical oceanography** (currents, tides, density stratification, pressure≈1 bar/10 m); **corrosion & marine materials** (galvanic corrosion, cathodic protection, biofouling); **pressure-vessel / implosion engineering**; **subsea production systems** (trees, manifolds, jumpers, umbilicals) for O&G; and **LARS** (launch-and-recovery) / tether-management with host-vessel DP operations. Acoustic comms are low-bandwidth, high-latency — autonomy must tolerate the link.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
**Classification-society rules — vehicle/system certification (hard gate where contractually required):**
- **DNV-RU-UWT** "Rules for classification: Underwater technology" — **Pt.5 Ch.7 governs ROVs, Pt.5 Ch.8 governs AUVs** (also manned submersibles, diving systems). `✓` [DNV](https://www.dnv.com/services/unmanned-underwater-vehicles-1710/)
- **ABS Rules for Building and Classing Underwater Vehicles, Systems, and Hyperbaric Facilities (2025)** — US class rules defining/classing ROVs, AUVs, hybrids, submersibles. `✓` [ABS](https://ww2.eagle.org/content/dam/eagle/rules-and-guides/current/special_service/7-rules-for-building-and-classing-underwater-vehicles,-systems-and-hyperbaric-facilities-2025/7-uwvs-rules-jan25.pdf)
- **ABS Requirements for Autonomous and Remote Control Functions (Oct 2024)** — autonomy/remote-control assurance layer. `✓` · Lloyd's Register & Bureau Veritas run parallel regimes.

**Operational standards — the de-facto offshore contractual gate:**
- **IMCA R004 Rev 6 (Feb 2024)** — safe & efficient operation of ROVs (industry operating baseline). `✓` [IMCA](https://www.imca-int.com/product/guidance-for-the-safe-and-efficient-operation-of-remotely-operated-vehicles/)
- **IMCA R006 Rev 2 (May 2025)** — ROV system inspection/audit (equipment + compliance). `✓`
- **IMCA competence scheme + R010** — ROV-crew competence assurance and training-module outlines. `✓`
- **NORSOK U-102 Ed.3** — ROV services on the Norwegian Continental Shelf (personnel/equipment/systems; defines **5 ROV classes**); effectively mandatory in Norway. `✓` [GlobalSpec](https://standards.globalspec.com/std/14346478/U-102)

**Interface/design standards (subsea O&G):** **ISO 13628-8:2002** — ROV interfaces on subsea production systems; **ISO 13628-9** — Remotely-Operated-Tool (ROT) intervention systems; **API 17H** — ROV/ROT tools & interfaces (API twin of 13628-8). `✓`/`~`

**Regulatory gap:** untethered AUVs have **unsettled legal status under UNCLOS**, and IMO's **MASS Code** targets *surface* ships — leaving autonomous UUVs in a live 2025–2026 regulatory gap. `✓` [Tandfonline 2025](https://www.tandfonline.com/doi/full/10.1080/00908320.2025.2531164)

## 5. Specialized Hardware, Sensors & Environment
Pressure-rated housings and **syntactic-foam buoyancy**; brushless thrusters; hydraulic/electric manipulators; fiber-optic **umbilical/tether** and slip-rings. Navigation/sensing: **INS + DVL** (Doppler velocity log), **USBL/LBL/SBL acoustic positioning** (Sonardyne/iXblue), depth/CTD; **multibeam & side-scan sonar, sub-bottom profiler, forward-look sonar**; **acoustic modems** (low-bandwidth, high-latency comms — no RF/GPS at depth); low-light/backscatter-corrected cameras and lasers. Environment: hydrostatic pressure to full-ocean depth, corrosion, biofouling, currents, cold, zero visibility. ROV classes I–V (observation → work-class → towed → special) per IMCA/NORSOK. `✓` [Sonardyne](https://www.sonardyne.com/offer/navigation/)

## 6. Safety Envelope & Criticality
**High.** Failure modes: loss of a multi-million-dollar asset in deep water, umbilical/tether entanglement, damage to live hydrocarbon infrastructure or subsea cables, and deck/LARS hazards to crew during launch-and-recovery. The burden: class-society design approval and survey, IMCA audit/inspection (R006) and crew competence, fail-safe thruster/buoyancy and emergency-recovery design, redundancy on resident/autonomous vehicles, and disciplined LARS/DP procedures. It is High rather than Critical because the vehicle is usually unmanned and away from people — but proximity to hydrocarbons, deck crew, and critical infrastructure keeps the bar high.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (state-estimation/SLAM, robust control, perception), this vertical **adds**:
- **Valued degrees:** **Ocean Engineering, Marine Engineering, Naval Architecture** rise to first-class; physical oceanography / applied ocean science; acoustical engineering; a marine-robotics MSc (**MIT–WHOI Joint Program, NTNU AMOS, Heriot-Watt Ocean Systems, Southampton/NOC, Girona**).
- **Domain credentials:** **IMCA ROV Pilot-Technician** competence grades; offshore survival & medical (**OPITO BOSIET**) to mobilize offshore; DP awareness; **security clearance + ITAR/export-control** for defense UUV work.
- **Feeder capability profiles:** `state-estimation-slam`, `multimodal-sensor-fusion`, `control-classical-optimal-mpc`, `motion-planning-navigation`, `computer-vision-3d-perception`.
- Conversion: **"SLAM/state-estimation or robust-control engineer + ocean-engineering domain + acoustic navigation + offshore-ops/IMCA literacy (+ clearance for defense)."**

## 8. Trending & Notable `⏱ as of mid-2026`
- **Resident subsea vehicles & docking** — **Saipem Hydrone-R** logged **167 days continuous residency** at Equinor (Norne), supervised onshore from Stavanger; **Oceaneering Freedom** hybrid ROV/AUV; Eelume; Blue Logic docking stations. `✓`
- **USV-launched, over-the-horizon ops** — **Ocean Infinity Armada** flying **Saab Seaeye** ROVs; **Fugro Blue Volta/Blue Essence** eROV-from-USV; remote operations centers. `✓`
- **Electric work-class ROVs** replacing hydraulics (Saab Seaeye e-series).
- **Critical-undersea-infrastructure (CUI) protection** — surge after Baltic-cable/Nord-Stream incidents; seabed-warfare and cable/pipeline monitoring demand.
- **Defense autonomy** — Anduril **Dive-LD**, Kongsberg **HUGIN**, Lockheed **Orca XLUUV**, GD **Knifefish**, Saab **SAROV**; on-board ATR, terrain-aided nav.
- **AI/autonomy** — ML acoustic/optical perception, subsea digital twins; foundation-model uptake slower here (data/compute- and acoustic-link-constrained).

## 9. Ecosystem — Employers, Regulators & Partners
- **Services/operators:** Oceaneering · Saipem · Subsea7 · TechnipFMC · DeepOcean · Fugro · Ocean Infinity.
- **Vehicle OEMs:** Saab Seaeye · Kongsberg · Forum Energy Technologies · Teledyne Marine · HII (REMUS) · Nauticus Robotics · Exail · Blue Robotics.
- **Defense:** Anduril · Lockheed Martin · General Dynamics Mission Systems · Kongsberg · Saab · Exail · L3Harris.
- **Regulators/standards:** DNV · ABS · Lloyd's Register · Bureau Veritas · **IMCA** · IMO · Standards Norway (**NORSOK**) · API · ISO TC 67/SC 4 · Marine Technology Society; navies/NAVSEA/ONR/DARPA.
- **Academic labs:** WHOI · MBARI · MIT Sea Grant AUV Lab · NTNU AMOS · Heriot-Watt · Southampton/NOC · ACFR Sydney · Girona CIRS.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B14 inspection & maintenance** (shared NDT/inspection methods), **B12 space robotics** (extreme-environment, high-latency-autonomy parallels), defense/security. Most-used platform track: **C7 underwater/marine (ROV/AUV)**; biomimetic/soft propulsion ties to the `soft-robotics` and `locomotion` capability profiles.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B13. Verify time-sensitive §8 and standard revisions before publish; note DNV-ST-E407 is "rope-based deployment/recovery," NOT an ROV standard — the ROV/AUV code is DNV-RU-UWT.*
