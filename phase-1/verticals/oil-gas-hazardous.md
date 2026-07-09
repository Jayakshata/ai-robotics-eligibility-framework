# Vertical Overlay — Oil & Gas / Hazardous & Explosive Environments

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified (2024–2026) · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Oil & Gas / Hazardous & Explosive Environments · **Axis B:** B8 · **Safety-criticality:** **Critical**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state estimation/SLAM (GPS-denied) · A1 perception (visual/thermal/gas/gauge) · A5 locomotion (legged/tracked/subsea) · A3 navigation & motion planning · A10 safety, verification & middleware (the gate) · A9 HRI/teleoperation · A6 robot learning (anomaly/defect) · **Typical platforms (C):** C4 quadruped · C7 underwater ROV/AUV · C6 aerial/drone · C3 ground AMR (wheeled/tracked) · C1 fixed arm (manipulation)

---

## 1. Definition & Scope
Robots that inspect, monitor, and increasingly *operate* hazardous hydrocarbon-processing assets so humans can leave explosive atmospheres. Sub-segments: **ground inspection robots** (legged/tracked) running autonomous operator rounds — gauge reading, thermal/acoustic/gas surveys — in Ex zones of refineries, petrochemical plants, LNG trains, compressor stations, and offshore platforms; **confined-space & aerial drones** for tank internals, pressure vessels, flare stacks, and pipe racks; **subsea ROV/AUV resident systems** for pipeline and structure inspection & intervention; and emerging **manipulator "operator" robots** for valve actuation and sampling. Drivers: worker safety, methane-emissions compliance, asset integrity, and the push to **unmanned facilities**. The market is small but fast-growing (a sub-$1B niche in 2026 `~`); its defining trait is that **nothing operates until it is Ex-certified for its specific zone.**

## 2. Core Capabilities It Builds On
- **A2 State estimation / SLAM** *(load-bearing)* — robust localization in GPS-denied, dense-steel plant, tank internals, and subsea; LiDAR / visual-inertial SLAM under vibration, glare, and confined geometry. See `state-estimation-slam`.
- **A1 Perception** — the core deliverable: analog gauge/dial reading, thermal hotspots, corrosion / CUI mapping, and **OGI methane/gas visualization**; multispectral + acoustic fusion. See `computer-vision-3d-perception`, `multimodal-sensor-fusion`.
- **A5 Locomotion** — stairs, catwalks, grating, and rough terrain (quadruped/tracked); pressure-tolerant subsea propulsion. See `locomotion`. *Emerging:* **manipulation** for valve actuation / sampling on operator robots — see `manipulation-and-grasping`.
- **A3 Navigation & motion planning** — repeatable long-duration autonomous rounds; auto-docking to charge/resident stations. See `motion-planning-navigation`.
- **A10 Safety, verification & middleware** *(the gate)* — Ex-compliance + functional safety + runtime assurance on a real-time stack. See `safety-verification-assurance`, `robotics-middleware-realtime`.
- **A9 HRI / teleoperation** — supervised autonomy and ROV teleop from onshore / remote operations centres (ROCs). See `human-robot-interaction`, `imitation-learning-teleoperation`.
- **A6 Robot learning** — anomaly / defect classification and acoustic leak detection. See `reinforcement-learning-control`.

## 3. Domain Knowledge Required
Beyond robotics: **hazardous-area classification theory** (zones, EPLs, gas groups, ignition energy); **process / plant engineering** (reading P&IDs / PFDs; valves, flanges, separators, flare stacks, wellheads); **fire & explosion science** (LEL/UEL flammability limits, minimum ignition energy, autoignition temperature, gas dispersion); **asset integrity & NDT** (UT wall-thickness, corrosion-under-insulation) under the **API 510/570/653** inspection codes; **functional safety** (HAZOP, LOPA, SIL); **gas detection** (catalytic-bead, IR, PID, H₂S, OGI); and **HSE / permit-to-work** culture (hot-work permits, LOTO). Offshore/subsea adds marine ops, hydrostatic pressure, acoustic comms, dynamic positioning, and biofouling.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ATEX Directive 2014/34/EU** — EU **equipment** ("product") directive; conformity assessment before an Ex product may be placed on the EU market **(hard gate)**.
- **ATEX Directive 1999/92/EC** — EU **workplace** directive; employer duties: area zoning, Ex register, worker protection.
- **IECEx Scheme** — international third-party certification of Ex **equipment** (and **personnel**, see §7); the global passport, but every certificate is scope-bound.
- **IEC 60079 series** — the technical basis: **-0** general requirements; **-10-1** gas / **-10-2** dust **area classification**; protection concepts **-1** flameproof *Ex d*, **-2** pressurized *Ex p*, **-7** increased safety *Ex e*, **-11** intrinsic safety *Ex i* (level **ia** = the principal concept permitted in **Zone 0**), **-18** encapsulation *Ex m*, **-31** dust *Ex t*; **-14** installation; **-17** inspection & maintenance.
- **Zones → EPL:** gas **Zone 0/1/2 → EPL Ga/Gb/Gc**; dust **Zone 20/21/22 → Da/Db/Dc**; ATEX **Category 1/2/3**, **Group II** (gas) / **III** (dust), gas subgroups **IIA/IIB/IIC**, temperature classes **T1–T6** (**T4 = 135 °C**).
- **US — NFPA 70 (NEC):** Article **500** *Class I, Division 1/2* system (Articles **505/506** = the harmonized Zone system); **NRTL** listing (UL/FM); enforced by **OSHA 29 CFR 1910.307 (hard gate in the US)**. **UL 6260** (2026) — new UL Solutions framework certifying remotely operated inspection/maintenance robots for hazardous (classified) locations so the robot cannot become an ignition source (first certificate: **ExRobotics ExR-2.5**, June 2026).
- **Functional safety — IEC 61508** (parent) / **IEC 61511** (process-industry Safety Instrumented Systems; US **ANSI/ISA 84**); **SIL 1–4** required for any autonomous control action.
- **Offshore / subsea — DNV** class rules (incl. the **AROS** autonomous/remotely-operated-ships notation family, effective **Jan 2025**); **NORSOK U-102** (ROV services); **IMCA R004** (ROV code of practice, Rev. 6) + IMCA competence-assurance framework (Remote Systems & ROV); plus **API / ISO / ASME** subsea codes.
- **Emissions — EPA NSPS Subpart OOOOb** (new sources) / **EG OOOOc** (existing), with the **Appendix K** OGI protocol and the **super-emitter program**; **EU Methane Regulation (EU) 2024/1787** `✓` (in force Aug 2024; LDAR programmes from May 2025). These drive robotic / drone LDAR.
- **Hard-gate note:** Ex certification is **zone-specific and non-transferable** — a Zone 2 robot cannot enter Zone 1 without redesign; any field change (sensor, payload, firmware) can void the certificate; recertification typically runs **~6–12 months** `~`.

## 5. Specialized Hardware, Sensors & Environment
**Ex-rated enclosures** — *Ex d* flameproof, *Ex i* intrinsically-safe electronics, *Ex p* purge/pressurization — plus **IP66/67** ingress, surface-temperature limiting below the T-class, and spark-free / anti-static materials. Payloads: **OGI / IR methane cameras**, gas sensors (catalytic-bead, IR, PID, H₂S), **acoustic-leak** arrays, thermal, and PTZ zoom for reading analog gauges; **UT / NDT** probes for wall-thickness. Subsea: pressure- and corrosion-rated to depth, **DVL / USBL** acoustic navigation, and resident **docking / charging** stations. Environment: salt spray, vibration, EMI, extreme weather, and GPS-denied steel geometry.

## 6. Safety Envelope & Criticality
**Critical.** The governing failure mode is ignition → explosion / fire, with mass-casualty and total-asset-loss potential. Uniquely, **the robot is itself a candidate ignition source**, so its first safety duty is to *not ignite* the atmosphere it is there to monitor. The V&V burden is therefore dual: **(1)** third-party **Ex certification** (notified body / NRTL) proving non-incendive design for the specific zone, and **(2)** **functional-safety** assurance (SIL, IEC 61511) for any autonomous action — hazard traceability, redundancy / fault detection, and a locked design/config. Offshore adds a marine **safety case**.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (perception / SLAM / locomotion / safety), this vertical **adds**:
- **Valued degrees:** **Chemical / Process Engineering** and **Petroleum Engineering** rise to first-class; **Subsea / Ocean / Marine Engineering** for offshore; ME/EE/Control with a process or instrumentation minor.
- **Domain credentials:** **CompEx** (Competency in Explosive Atmospheres, assessed to ISO/IEC 17024) and/or **IECEx CoPC** — often *mandatory* to work in hazardous areas; **TÜV Functional Safety Engineer** (IEC 61508/61511); **API 510/570/653** inspector; **ASNT NDT Level II**; **NEBOSH / IOSH** HSE. Offshore deployment gates on **BOSIET / HUET (OPITO)** survival training + offshore medical.
- **Feeder capability profiles:** `state-estimation-slam`, `computer-vision-3d-perception`, `multimodal-sensor-fusion`, `locomotion`, `safety-verification-assurance`, `robotics-middleware-realtime`, `motion-planning-navigation`, `human-robot-interaction` / `imitation-learning-teleoperation`.
- **Conversion =** capability engineer **+** hazardous-area (CompEx / IECEx) competency **+** functional-safety (61511 / SIL) **+** process-plant / asset-integrity domain.

## 8. Trending & Notable `⏱ as of mid-2026`
- **Ex-certified autonomous inspection is now productized.** ATEX/IECEx **Zone 1 (Cat 2G, EPL Gb)**: **ANYbotics ANYmal X** (world-first Ex-proof legged quadruped, IP67; onboarding Equinor, Petrobras, Woodside, Shell) and the tracked **Taurob Inspector** (deployed at **TotalEnergies' Shetland Gas Plant**, and by ADNOC/Equinor). North-America **Class I, Div** route: **ExRobotics ExR-2.5** — first robot certified to **UL 6260** (UL Solutions, June 2026; NA via MicroWatt). **Boston Dynamics Spot** covers **Zone 2 / unclassified** only.
- **Beyond inspection → operation.** The **ARGOS Joint Industry Project** (Equinor, Petrobras, TotalEnergies, Saft, Taurob) is building a heavy-duty **"operator" robot** that lifts equipment and actuates valves, targeted for introduction by **end-2026**, with ADNOC's **Taweelah** gas plant a lead deployment. Physical-AI / VLA policies are entering operator-robot autonomy.
- **From visitors to residents.** Permanent **asset-resident** robots feeding **unmanned-facility** operating models; **subsea resident AUVs** (Eelume, Nauticus **Aquanaut**, Saipem **Hydrone-R**, SLB).
- **Value moving to the data layer** — digital-twin + **SCADA / DCS** integration (e.g. **Yokogawa OpreX** Robot Management Core × ANYbotics, Feb 2026).
- **Autonomous methane LDAR** — **Percepto** OGI drone approved as an EPA **Alternative Test Method** for Subparts OOOOa / OOOOb, enabling fully remote compliance surveys.

*(Re-research before publish — vendor and certification status date fast.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Integrators / vendors:** ANYbotics · Taurob · ExRobotics (NA: MicroWatt) · Energy Robotics (multi-robot fleet software) · Flyability · Percepto · Oceaneering · Nauticus Robotics · Saipem · SLB · Yokogawa (robot-ops / DCS) · Mitsubishi Heavy Industries.
- **Operators:** Shell · TotalEnergies · ADNOC · Equinor · Chevron · BP · Petrobras · Woodside · Repsol.
- **Regulators / standards bodies:** IECEx · ATEX notified bodies · **UL / FM (NRTL)** · OSHA · EPA · **DNV / ABS / Lloyd's Register** · Standards Norway (NORSOK) · IMCA · API · IEC · TÜV · CompEx.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B7 mining** (shares ATEX/IECEx underground), **B16 nuclear / decommissioning / hazmat** (teleop-heavy, Critical), **B14 inspection & maintenance** (the cross-cutting parent), **B13 marine / underwater**, **B6 construction**. Most-used platforms: **C4 quadruped**, **C7 ROV/AUV**, **C6 drone**, **C3 ground AMR (wheeled/tracked)**, **C1 fixed arm** (manipulation).

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B8.*
