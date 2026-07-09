# Vertical Overlay — Oil & Gas / Hazardous & Explosive Environments

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified 2024–2026 · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Oil & Gas / Hazardous & Explosive Environments · **Axis B:** B8 · **Safety-criticality:** **Critical**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state estimation/SLAM (GPS-denied) · A1 perception (visual/thermal/gas/gauge) · A5 locomotion (legged/tracked/subsea) · A3 navigation & motion planning · A10 safety, verification & middleware (the gate) · A9 HRI/teleoperation · A6 robot learning (anomaly/defect) · **Typical platforms (C):** C4 quadruped · C7 underwater ROV/AUV · C6 aerial/drone · C3 tracked AMR · C1 fixed arm (manipulation)

---

## 1. Definition & Scope
Robots that inspect, monitor, and increasingly *operate* hazardous hydrocarbon-processing assets so humans can leave explosive atmospheres. Sub-segments: **ground inspection robots** (legged/tracked) doing autonomous operator rounds — gauge reading, thermal/acoustic/gas surveys — in Ex zones of refineries, petrochemical plants, LNG trains, compressor stations, and offshore platforms; **confined-space & aerial drones** for tank internals, pressure vessels, flare stacks, and pipe racks; **subsea ROV/AUV resident systems** for pipeline/structure inspection & intervention; and emerging **manipulator "operator" robots** for valve actuation and sampling. Drivers: worker safety, methane-emissions compliance, asset integrity, and the push to **unmanned facilities**. The market is small but fast-growing (~$0.84B in 2026 `✓`); its defining trait is that **nothing operates until it is Ex-certified for its specific zone.**

## 2. Core Capabilities It Builds On
- **A2 State estimation / SLAM** *(load-bearing)* — robust localization in GPS-denied dense-steel plants, tank internals, and subsea; LiDAR/visual-inertial SLAM under vibration, glare, and confined geometry. See `state-estimation-slam`.
- **A1 Perception** — the core deliverable: gauge/dial reading, thermal hotspots, corrosion/CUI, and **OGI methane/gas visualization**; multispectral/acoustic fusion. See `computer-vision-3d-perception`, `multimodal-sensor-fusion`.
- **A5 Locomotion** — stairs, catwalks, grating, and rough terrain (quadruped/tracked); pressure-tolerant subsea propulsion. See `locomotion`.
- **A3 Navigation & motion planning** — repeatable long autonomous missions, docking to charge/resident stations. See `motion-planning-navigation`.
- **A10 Safety, verification & middleware** — the differentiator: Ex-compliance + functional safety + runtime assurance. See `safety-verification-assurance`, `robotics-middleware-realtime`.
- **A9 HRI / teleoperation** — supervised autonomy and ROV teleop from onshore control rooms. See `human-robot-interaction`, `imitation-learning-teleoperation`.
- **A6 Robot learning** — anomaly/defect classification, acoustic leak detection. See `reinforcement-learning-control`.

## 3. Domain Knowledge Required
Beyond robotics: **hazardous-area classification theory** (zones, EPLs, gas groups, ignition energy); **process/plant engineering** (reading P&IDs/PFDs; valves, flanges, separators, flare stacks, wellheads); **fire & explosion science** (LEL/UEL flammability limits, minimum ignition energy, autoignition temperature, gas dispersion); **asset integrity & NDT** (UT wall-thickness, corrosion-under-insulation) with the **API 510/570/653** inspection codes; **functional safety** (HAZOP, LOPA, SIL); **gas detection** (catalytic-bead, IR, PID, H₂S, OGI); and **HSE / permit-to-work** culture (hot-work permits, LOTO). Offshore/subsea adds marine ops, hydrostatic pressure, acoustic comms, dynamic positioning, and biofouling.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ATEX Directive 2014/34/EU** — EU "equipment" directive; conformity assessment before a product may be placed on the EU market **(hard gate)**.
- **ATEX Directive 1999/92/EC** — EU "workplace" directive; employer duties: zoning, Ex register, worker protection.
- **IECEx Scheme** — international third-party certification of Ex equipment (and personnel, see §7); the global passport, but each certificate is scope-bound.
- **IEC 60079 series** — technical basis: **-0** general requirements; **-10-1** gas / **-10-2** dust area classification; protection concepts **-1** flameproof *Ex d*, **-2** pressurized *Ex p*, **-7** increased safety *Ex e*, **-11** intrinsic safety *Ex i* (the only concept for **Zone 0**), **-18** encapsulation *Ex m*, **-31** dust *Ex t*; **-14** installation; **-17** inspection & maintenance.
- **Zones → EPL:** gas **Zone 0/1/2 → EPL Ga/Gb/Gc**; dust **Zone 20/21/22 → Da/Db/Dc**; ATEX **Category 1/2/3**, **Group II** (gas)/III (dust), gas subgroups **IIA/IIB/IIC**, temperature classes **T1–T6** (T4 = 135 °C).
- **US — NFPA 70 (NEC):** Article 500 **Class I, Division 1/2** system (Articles 505/506 = Zone system); **NRTL** listing (UL/FM), e.g. **UL/CSA nonincendive** standards; enforced by **OSHA 29 CFR 1910.307 (hard gate in US)**.
- **Functional safety — IEC 61508** (parent) / **IEC 61511** (process-industry Safety Instrumented Systems; US **ISA/ANSI 84**); **SIL 1–4** required for any autonomous control action.
- **Offshore/subsea — DNV** class rules (incl. **AROS** autonomous/remote notation, Jan 2025), **NORSOK U-102** (ROV services), **IMCA R004/R010** (ROV operation/competence), plus **API/ISO/ASME** subsea codes.
- **Emissions — EPA NSPS Subpart OOOOb** (new sources, effective May 2024) / **EG OOOOc** (existing) with **Appendix K** OGI protocol and the **super-emitter program**; **EU Methane Regulation (EU) 2024/1787** `~`. These drive robotic/drone LDAR.
- **Hard-gate note:** Ex certification is **zone-specific and non-transferable** — a Zone 2 robot cannot enter Zone 1 without redesign; any field modification (sensor, payload, firmware) can void certification; recertification runs **6–12 months**.

## 5. Specialized Hardware, Sensors & Environment
**Ex-rated enclosures** (Ex d flameproof / Ex i intrinsically-safe electronics / Ex p purge-pressurized), **IP66/67**, surface-temperature limiting below the T-class, and spark-free/anti-static materials. Payloads: **OGI/IR methane cameras**, gas sensors (catalytic/IR/PID, H₂S), acoustic-leak, thermal, PTZ zoom for gauge reading, **UT/NDT** probes. Subsea: pressure/corrosion-rated to depth, **DVL/USBL** acoustic nav, resident docking stations. Environment: salt, vibration, extreme weather, EMI, GPS-denied geometry.

## 6. Safety Envelope & Criticality
**Critical.** Failure means ignition → explosion/fire with mass-casualty and total asset loss. Uniquely, **the robot is itself a candidate ignition source**, so its primary safety task is to not ignite the atmosphere it monitors. The V&V burden is dual: **(1)** third-party Ex certification (notified body / NRTL) proving non-incendive design for the zone, and **(2)** functional-safety (SIL, IEC 61511) assurance for any autonomous action, with hazard traceability, redundancy, and a design/config lock. Offshore adds a marine safety case.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (perception/SLAM/locomotion), this vertical **adds**:
- **Valued degrees:** **Chemical/Process Engineering** and **Petroleum Engineering** rise to first-class; **Subsea/Ocean/Marine Engineering** for offshore; ME/EE/Control with a process minor.
- **Domain credentials:** **CompEx** (Competency in Explosive Atmospheres, ISO/IEC 17024) and/or **IECEx CoPC** — often *mandatory* for hazardous-area work; **TÜV Functional Safety Engineer** (IEC 61508/61511); **API 510/570/653** inspector; **ASNT NDT Level II**; **NEBOSH/IOSH**. Offshore deployment gates on **BOSIET/HUET (OPITO)** survival + offshore medical.
- **Feeder capability profiles:** `state-estimation-slam`, `computer-vision-3d-perception`, `locomotion`, `safety-verification-assurance`, `motion-planning-navigation`, `human-robot-interaction`/`imitation-learning-teleoperation`.
- Conversion = **capability engineer + hazardous-area (CompEx/IECEx) competency + functional-safety (61511/SIL) + process-plant/asset-integrity domain.**

## 8. Trending & Notable `⏱ as of mid-2026`
Ex-certified autonomous inspection is now standard; the **only Zone 1 (Cat 2G) certified ground robots** are **ANYbotics ANYmal X** (world-first Ex legged quadruped, IP67), **Taurob Inspector** (tracked; TotalEnergies/Shetland Gas Plant), and **ExRobotics ExR-2/2.5** (ExR-2.5 = first **UL-certified** hazardous-area robot in North America); **Boston Dynamics Spot** covers Zone 2/unclassified only. Frontier shifts: **manipulation beyond inspection** — the ARGOS-lineage **operator robot** targeting full operation at ADNOC's **Taweelah Gas Plant** by end-2026; **permanent asset-resident robots → unmanned platforms**; **subsea resident AUVs** (Eelume, Nauticus Aquanaut Mk2, Saipem Hydrone-R, SLB); the value layer shifting to **data/digital-twin + SCADA/DCS integration**; and **EPA-approved autonomous OGI methane drones** (Percepto Alternative Test Method). Physical-AI/VLA models are entering operator-robot autonomy. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Integrators/vendors:** ANYbotics · Taurob · ExRobotics · Energy Robotics (multi-robot fleet software) · Flyability · Percepto · Oceaneering · Nauticus Robotics · Saipem · SLB · Mitsubishi Heavy Industries.
- **Operators:** Shell · TotalEnergies · ADNOC · Equinor · Chevron · BP.
- **Regulators/standards bodies:** IECEx · ATEX notified bodies · UL/FM (NRTL) · OSHA · EPA · DNV/ABS/Lloyd's Register · Standards Norway (NORSOK) · IMCA · API · IEC · TÜV · CompEx.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B7 mining** (shares ATEX/IECEx underground), **B16 nuclear/hazmat** (teleop-heavy critical), **B14 inspection & maintenance**, **B13 marine/underwater**, **B6 construction**. Most-used platforms: **C4 quadruped**, **C7 ROV/AUV**, **C6 drone**, **C3 tracked AMR**, **C1 fixed arm** (manipulation).

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B8.*

**Sources (2024–2026):** anybotics.com/robotics/anymal-x · roboticstomorrow.com "Explosion-Proof Robotics in ATEX/IECEx" (Nov 2025) · taurob.com/inspector · worldpipelines.com (ExRobotics UL, 2026) · energy-robotics.com · webstore.iec.ch (IEC 60079 series) · ex-reg.com (ATEX 2014/34/EU & 1999/92/EC) · iecex.com (CoPC) · compexcertification.com; intertek.com (CompEx) · osha.gov 1910.307; michelli.com (NFPA 70/NEC) · efunctionalsafety.com (IEC 61511) · dnv.com (AROS); esubsea.com; blueyerobotics.com (NORSOK U-102/IMCA) · flyability.com/oil-and-gas-drones · arnoldporter.com; dronelife.com (EPA OOOOb/c + Percepto) · stocktitan (Nauticus); offshoreindustry.co.uk (subsea) · worldoil.com (Mar 2026).
