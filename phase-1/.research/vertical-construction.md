# Vertical Overlay — Construction Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified 2024–2026 · `~` to-verify · `⏱` time-sensitive. Source URLs at foot.

**Vertical:** Construction · **Axis B:** B6 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state-estimation/SLAM (GNSS-fused, outdoor) · A1 perception (dust/clutter-robust 3D, BIM-to-reality) · A3 navigation & motion planning (rough-terrain, dynamic) · A5 locomotion + large-payload/high-force manipulation · A4 control (hydraulic/force) · A10 safety & calibration · A7 field foundation models (emerging) · **Typical platforms (C):** large autonomous earth-moving vehicles (AMR-scale) · C6 aerial/drone · C4 quadruped · C1/C2 fixed & mobile manipulators

---

## 1. Definition & Scope
Robots that build and prepare the built environment: **earthmoving/site-prep** (autonomous excavators, dozers, graders, pile-driving), **structural** (rebar tying/placing, bricklaying, 3D concrete printing), **interior/finishing** (drywall, layout printing, MEP overhead drilling), and **survey/inspection/digital-capture** (drones, quadruped scanners). Market ≈ USD 1.37B (2024) → ~1.6B (2025), <0.03% of global construction spend — an early S-curve pulled by a chronic labor shortage (AGC: ~91% of US contractors couldn't find qualified workers in 2025). Autonomous heavy equipment holds the largest share (~31%), robotic arms ~25%, drones ~19%. Four workflows are in **repeatable production**: layout, groundworks/solar-piling, rebar, and digital capture. The defining trait is an **unstructured, changing, weather-exposed outdoor site** shared with people and heavy machinery.

## 2. Core Capabilities It Builds On
- **A2 State estimation / SLAM** *(most load-bearing)* — outdoor **GNSS-RTK-fused** georeferencing to a survey datum; mm-level layout; GPS-denied interiors; sites that change daily. `state-estimation-slam`, `motion-planning-navigation`.
- **A1 Perception** — dust/mud/occlusion/clutter-robust 3D; **BIM-to-reality registration** (as-built vs. as-designed); ground-penetrating for buried utilities. `computer-vision-3d-perception`, `multimodal-sensor-fusion`.
- **A3 Navigation & motion planning** — rough/undulating terrain, obstacle-dense dynamic sites; earthmoving dig-cycle trajectory optimization.
- **A5 Locomotion + manipulation** — legged (Spot) for rough-terrain scanning; **large-payload, high-force** manipulation (rebar, brick, hydraulic digging). `locomotion`, `manipulation-and-grasping`.
- **A4 Control** — hydraulic actuation control (retrofit kits), force/impedance for drilling & finishing. `control-classical-optimal-mpc`, `whole-body-compliant-control`.
- **A10 Safety, calibration, middleware** — outdoor field calibration, functional safety, telematics. `safety-verification-assurance`, `calibration-integration-mlops`.
- **A7 Field foundation models** *(emerging)* — map-/GPS-free unstructured autonomy. `robot-foundation-models-vla`, `world-models`.

## 3. Domain Knowledge Required
Beyond robotics: **BIM** (ISO 19650 information-management workflows; the **IFC** data model as the robot's task spec); reading **construction drawings & specifications**; **surveying & geodesy** — coordinate systems/datums, control points, GNSS-RTK, robotic total stations, georeferencing; **construction sequencing / means-and-methods** and trade coordination; **structural & civil engineering** basics; **concrete & materials science** (rheology/curing for printing, cure for finishing); **geotechnics/soil** for earthmoving; **construction tolerances** (coarse structure vs. mm-level layout), grade/slope; jobsite safety culture; contract/spec compliance and **AHJ permitting/inspection**. A generalist roboticist typically lacks BIM/IFC fluency and surveying/geospatial grounding.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **OSHA 29 CFR 1926** — US federal Safety & Health Regulations for Construction; the baseline legal gate for any US jobsite (workers, equipment, exclusion zones). **Hard gate.**
- **ISO 17757:2019** — Earth-moving machinery & mining — **Autonomous and semi-autonomous machine system safety (ASAM/ASAMS)**; the core safety framework for autonomous excavators/dozers/graders. **Hard gate for autonomy.**
- **ISO 15817:2012** — Earth-moving machinery — safety requirements for **remote operator control** (teleoperation); explicitly *not* autonomous (complements ISO 17757).
- **ISO 15143 series** — Worksite data exchange: -1 architecture, -2 data dictionary, **-3:2020 telematics**, **-4:2025 topographical data** — machine-control/fleet interoperability.
- **EU Machinery Regulation (EU) 2023/1230** — replaces Machinery Directive 2006/42/EC, applies **20 Jan 2027**; first to explicitly cover **autonomous mobile machinery, AI and software integrity**; **CE marking**. **Hard gate for EU market.**
- **ISO 19650 (Parts 1–5)** — organization/digitization of building & civil-works information incl. **BIM**; Part 6 (H&S) not yet published.
- **ISO 16739-1:2024** — **Industry Foundation Classes (IFC 4.3)**; open BIM data schema (buildingSMART).
- **ISO/ASTM 52939:2023** — Additive manufacturing for construction — qualification principles (structural/infrastructure elements); the **3D concrete-printing** standard. **ICC-1150** (draft, 202X) governs 3D-printed concrete walls; **IBC + local building code + AHJ** approval is the real gate for anything structural. **Hard gate.**
- **ANSI/ASSP A10 series** — 30+ US construction & demolition operations safety standards (e.g. A10.2 training, A10.6 demolition, A10.48 elevated work).
- **ASTM F48** — exoskeletons/exosuits (F3579 return-to-work, F3771 digital human modeling, WK89778 maintenance) for trade-worker augmentation.

## 5. Specialized Hardware, Sensors & Environment
Ruggedized outdoor platforms (IP-rated; dust/vibration/temperature/rain/impact) with **large payload and long duty cycles**; **GNSS-RTK** receivers, **robotic total stations**, IMU, survey-grade + real-time **LiDAR**, stereo/RGB-D, **ground-penetrating radar** (utilities). Hydraulic actuation and **retrofit autonomy kits** (Built Robotics); OEM **machine-control** systems (Trimble/Topcon/Leica). Telematics per ISO 15143-3; on-site networks; embedded edge compute for perception/planning. Environment: unstructured, changing daily, weather-exposed, GPS-denied interiors, congested with humans and heavy kinetic-energy machinery.

## 6. Safety Envelope & Criticality
**High.** Construction is among the most fatal industries; OSHA's **Focus Four** (falls, struck-by, caught-in/between, electrocution) dominate — and autonomous heavy machinery co-located with workers concentrates struck-by/caught-between risk. Governing set: OSHA 29 CFR 1926, ISO 17757 (autonomy), ISO 15817 (teleop), EU 2023/1230, ANSI/ASSP A10. V&V burden: hazard/risk assessment, **geofenced exclusion zones**, redundant emergency-stop, object detection with safe-stop, remote monitoring/supervision, and functional-safety design. Rated High (not Critical like surgical/nuclear) because failures are severe but bounded to the site — yet public and worker exposure plus large kinetic energy keep the bar demanding.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (SLAM/perception/navigation/control), this vertical **adds**:
- **Valued degrees:** **Civil / Structural Engineering**, **Construction Engineering & Management**, **Surveying / Geomatics**, and Architectural Engineering rise to first-class alongside the robotics core.
- **Domain credentials:** **OSHA 30-Hour Construction** card; **BIM/Autodesk** (Revit, Navisworks) certifications; **GIS** (Esri); **machine-control** (Trimble) certs; **PMP**/construction-management; a surveying licence (FS/PS) is a strong differentiator.
- **Feeder capability profiles:** `state-estimation-slam`, `motion-planning-navigation`, `computer-vision-3d-perception`, `locomotion`, `multimodal-sensor-fusion`, `safety-verification-assurance`, `robot-foundation-models-vla`.
- **Conversion:** *outdoor/field-autonomy engineer + BIM/surveying literacy + OSHA/site-safety + heavy-machinery or construction domain.* No security clearance needed (unlike defense) — the gates are OSHA + CE/functional-safety + building-code/AHJ.

## 8. Trending & Notable `⏱ as of mid-2026`
- **Field foundation models for unstructured autonomy** — **Field AI** (>$400M raised through 2025; "Belief World Model," GPS-/map-free) with construction a lead vertical; shift from scripted motion to **perception-driven autonomy** tolerant of dust/clutter.
- **Heavy-equipment autonomy productizing** — **Caterpillar** "next era of autonomy" (Jan 2026), **Komatsu** Smart Construction, **Pronto×Komatsu** retrofit self-driving; **Built Robotics** solar-piling (RPD/RPS) at scale.
- **RaaS / outcome-based pricing** (per m², per pile, per scan) now dominates serious deployments; **human-robot teaming** the default — not humanoids or unmanned sites.
- **3D concrete printing** scaling to code-compliant housing (**ICON**, **COBOD**) under ISO/ASTM 52939 + ICC-1150.
- **Reality capture + AI progress monitoring** (BIM-to-reality) and **exoskeletons** for trades (ASTM F48 maturing).

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** Built Robotics · Dusty Robotics · Advanced Construction Robotics (TyBot/IronBot) · Canvas (JLG/Oshkosh) · Hilti (Jaibot) · Boston Dynamics (Spot + Trimble) · Field AI · Caterpillar · Komatsu · Volvo CE · Trimble · ICON · COBOD · Raise Robotics · Kewazo · Fastbrick/FBR.
- **Regulators/standards:** OSHA · **ISO/TC 127** (earth-moving machinery) · **ISO/TC 59/SC 13** (BIM) · **buildingSMART** (IFC) · **ICC** (building code) · **ASTM** (F48, ISO/ASTM 52939) · **ANSI/ASSP** (A10) · EU (Machinery Regulation) · **NIST** (additive construction) · AEM.
- **Academic/industry labs:** ETH Zurich (Robotic Systems Lab; Gramazio Kohler / NCCR *dfab* digital fabrication) · Carnegie Mellon · TU München · Texas A&M.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B7 Mining** (shares ISO 17757 & earth-moving autonomy) · **B14 Inspection & maintenance** · **B5 Agriculture** (outdoor GNSS autonomy) · **B1 Manufacturing** (prefab/modular). Most-used platforms: **large autonomous earth-moving vehicles** (AMR-scale), **C6 aerial/drone** (survey), **C4 quadruped** (scanning), **C1/C2** fixed & mobile manipulators (bricklaying, drilling, finishing).

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B6.*

**Sources (2024–2026):** Grand View / Mordor / Zacua Ventures *Construction Robotics Report 2026* (market, workflows, funding); ISO 17757:2019 (iso.org/standard/76126); ISO 15817:2012 (iso.org/standard/46237); ISO 15143-3:2020 / 15143-4:2025 (iso.org/standard/76394, /74485); ISO 19650 (en.wikipedia.org/wiki/ISO_19650; bsigroup.com); ISO 16739-1:2024 (iso.org/standard/84123; buildingsmart.org); EU Reg 2023/1230 (eur-lex.europa.eu/eli/reg/2023/1230; osha.europa.eu); ISO/ASTM 52939:2023 (3dprintingindustry.com; iccsafe.org ICC-1150 draft); ASTM F48 (astm.org committee-f48); ANSI/ASSP A10 (assp.org); OSHA 29 CFR 1926 (ecfr.gov, osha.gov); Field AI (fieldai.com/news; therobotreport.com); Caterpillar autonomy (caterpillar.com/en/news 2026); Built Robotics / Dusty / Canvas / Hilti (builtrobotics.com; startus-insights.com; underthehardhat.org).
