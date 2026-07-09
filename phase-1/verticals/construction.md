# Vertical Overlay — Construction Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Construction · **Axis B:** B6 · **Safety-criticality:** **High**
**Core capabilities it builds on (Axis A, load-bearing first):** A2 state-estimation/SLAM (GNSS-fused, outdoor) · A1 perception (dust/clutter-robust 3D, BIM-to-reality) · A3 navigation & motion planning (rough-terrain, dynamic) · A5 locomotion + large-payload/high-force manipulation · A4 hydraulic/force control · A10 safety & calibration · A7 field foundation models (emerging) · **Typical platforms (C):** large autonomous earth-moving vehicles (AMR-scale) · C6 aerial/drone · C4 quadruped · C1/C2 fixed & mobile manipulators

---

## 1. Definition & Scope
Robots that survey, build, and demolish the built environment across the project lifecycle: **site survey & digital capture** (drones, quadruped scanners, robotic total stations feeding BIM), **earthmoving/site-prep** (autonomous excavators, dozers, graders, solar-pile drivers), **structural** (rebar tying/placing, bricklaying/masonry, 3D concrete printing, structural-steel & rebar welding — still largely shop-prefab, on-site robotic welding emerging `~`), **interior/finishing** (drywall finishing, floor-layout printing, overhead MEP drilling), and **demolition** (remote/semi-autonomous breaking machines). **BIM integration** is the connective tissue — the model *is* the robot's task spec. The market is small and early (≈ USD 1.4–1.6B, 2024–25 — a sliver of a ~$13T industry `~`) but pulled hard by a chronic skilled-labor shortage; autonomous heavy equipment, robotic arms, and survey drones lead adoption. Four workflows — layout, groundworks/solar-piling, rebar, and digital capture — are already in **repeatable production**. The defining trait is an **unstructured, changing, weather-exposed outdoor site** shared with people and heavy machinery.

## 2. Core Capabilities It Builds On
- **A2 State Estimation / SLAM** *(most load-bearing)* — outdoor **GNSS-RTK-fused** georeferencing to a survey datum; mm-level layout; GPS-denied interiors; daily-changing sites. `state-estimation-slam`, `motion-planning-navigation`.
- **A1 Perception** — dust/mud/occlusion-robust 3D; **BIM-to-reality registration** (as-built vs. as-designed); ground-penetrating sensing for buried utilities. `computer-vision-3d-perception`, `multimodal-sensor-fusion`.
- **A3 Navigation & Motion Planning** — rough, undulating, obstacle-dense dynamic terrain; earthmoving dig-cycle trajectory optimization.
- **A5 Locomotion + Manipulation** — legged platforms for rough-terrain scanning; **large-payload, high-force** manipulation (rebar, brick, hydraulic digging, demolition breaking). `locomotion`, `manipulation-and-grasping`.
- **A4 Control** — hydraulic actuation control (retrofit kits); force/impedance for drilling, finishing, and contact-rich welding. `control-classical-optimal-mpc`, `whole-body-compliant-control`.
- **A10 Safety, Calibration & Middleware** — outdoor field calibration, functional-safety design, telematics. `safety-verification-assurance`, `calibration-integration-mlops`.
- **A7 Field Foundation Models** *(emerging)* — map-/GPS-free unstructured autonomy. `robot-foundation-models-vla`, `world-models`.

## 3. Domain Knowledge Required
Beyond robotics: **BIM** (ISO 19650 information-management workflows; the **IFC** data model as the robot's task spec); reading **construction drawings & specifications**; **surveying & geodesy** — coordinate systems/datums, control points, GNSS-RTK, robotic total stations, georeferencing; **construction sequencing / means-and-methods** and trade coordination; **structural & civil engineering** basics; **concrete & materials science** (rheology/curing for printing, cure for finishing) and **weld metallurgy** for structural-steel work; **geotechnics/soil** for earthmoving; **construction tolerances** (coarse structure vs. mm-level layout), grade/slope; jobsite safety culture; contract/spec compliance and **AHJ permitting/inspection**. A generalist roboticist typically lacks BIM/IFC fluency and surveying/geospatial grounding.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **OSHA 29 CFR 1926** — US federal Safety & Health Regulations for Construction; the baseline legal gate for any US jobsite (workers, equipment, exclusion zones). **Hard gate.**
- **ISO 17757:2019** — Earth-moving machinery & mining — **Autonomous and semi-autonomous machine system safety (ASAM)**; the core safety framework for autonomous excavators/dozers/graders. **Hard gate for autonomy.**
- **ISO 15817:2012** — Earth-moving machinery — safety requirements for **remote operator control** (teleoperation); explicitly *not* autonomous (complements ISO 17757).
- **ISO 15143 series** — Worksite data exchange: -1 architecture, -2 data dictionary, **-3:2020 telematics**, -4:2025 topographical data `~` — machine-control/fleet interoperability.
- **EU Machinery Regulation (EU) 2023/1230** — replaces Machinery Directive 2006/42/EC, applies **20 Jan 2027**; first to explicitly cover **autonomous mobile machinery, AI and software integrity**; **CE marking**. **Hard gate for EU market.**
- **ISO 19650 (Parts 1–5)** — organization/digitization of building & civil-works information incl. **BIM** (information management, security, asset).
- **ISO 16739-1:2024** — **Industry Foundation Classes (IFC 4.3)**; the open BIM data schema (buildingSMART).
- **ISO/ASTM 52939:2023** — Additive manufacturing for construction — qualification principles (structural/infrastructure elements): the **3D concrete-printing** standard. Wall systems also go through **ICC-ES AC509** and **UL 3401** `~`; **IBC + local building code + AHJ** approval is the real gate for anything structural. **Hard gate.**
- **ANSI/ASSP A10 series** — 30+ US construction & demolition operations safety standards (e.g. **A10.6** demolition, **A10.32** fall protection).
- **ASTM F48** — exoskeletons & exosuits committee (terminology, labeling, task-performance and safety test methods) `~` for trade-worker augmentation.

## 5. Specialized Hardware, Sensors & Environment
Ruggedized outdoor platforms (IP-rated; dust/vibration/temperature/rain/impact) with **large payload and long duty cycles**; **GNSS-RTK** receivers, **robotic total stations**, IMU, survey-grade + real-time **LiDAR**, stereo/RGB-D, **ground-penetrating radar** (utilities). Hydraulic actuation with **retrofit autonomy kits** (Built Robotics) and OEM **machine-control** systems (Trimble/Topcon/Leica); demolition breakers/attachments; concrete-extrusion and rebar/brick end-effectors. Telematics per ISO 15143-3; on-site networks; embedded edge compute for perception/planning. Environment: unstructured, changing daily, weather-exposed, GPS-denied interiors, congested with humans and heavy kinetic-energy machinery.

## 6. Safety Envelope & Criticality
**High.** Construction is among the most fatal industries; OSHA's **Focus Four** (falls, struck-by, caught-in/between, electrocution) dominate — and autonomous heavy machinery co-located with workers concentrates struck-by / caught-between risk. Governing set: OSHA 29 CFR 1926, ISO 17757 (autonomy), ISO 15817 (teleop), EU 2023/1230, ANSI/ASSP A10. V&V burden: hazard/risk assessment, **geofenced exclusion zones**, redundant emergency-stop, object detection with safe-stop, remote monitoring/supervision, and functional-safety design. Rated High (not Critical like surgical/nuclear) because failures are severe but bounded to the site — yet worker and public exposure plus large kinetic energy keep the bar demanding.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (SLAM/perception/navigation/control), this vertical **adds**:
- **Valued degrees:** **Civil / Structural Engineering**, **Construction Engineering & Management**, **Surveying / Geomatics**, and Architectural Engineering rise to first-class alongside the robotics core.
- **Domain credentials:** **OSHA 30-Hour Construction** card; **BIM / Autodesk** (Revit, Navisworks) certifications; **GIS** (Esri); **machine-control** (Trimble) certs; **PMP** / construction management; a surveying licence (FS/PS) is a strong differentiator.
- **Feeder capability profiles:** `state-estimation-slam`, `motion-planning-navigation`, `computer-vision-3d-perception`, `locomotion`, `multimodal-sensor-fusion`, `safety-verification-assurance`, `robot-foundation-models-vla`.
- **Conversion:** *outdoor/field-autonomy engineer + BIM/surveying literacy + OSHA/site-safety + heavy-machinery or construction domain.* No security clearance needed (unlike defense) — the gates are OSHA + CE/functional-safety + building-code/AHJ.

## 8. Trending & Notable `⏱ as of mid-2026`
**Field foundation models for unstructured autonomy** are the big shift — **Field AI** (>$400M raised through 2025 `~`; GPS-/map-free "world model") with construction a lead vertical, moving from scripted motion to perception-driven autonomy tolerant of dust and clutter. **Heavy-equipment autonomy is productizing** — Caterpillar's stated "next era of autonomy" (early 2026 `~`), Komatsu Smart Construction, Pronto×Komatsu retrofit self-driving, and Built Robotics' solar-piling at scale; ETH Zurich's **HEAP** autonomous excavator seeds the research frontier. Commercial reality is **human–robot teaming**, not humanoids or unmanned sites, with **RaaS / outcome-based pricing** (per m², per pile, per scan) now dominating serious deployments. **3D concrete printing** is scaling toward code-compliant housing (**ICON**, **COBOD**) under ISO/ASTM 52939; **reality capture + AI progress monitoring** (BIM-to-reality) and **exoskeletons** for trades (ASTM F48 maturing) round out the near-term. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** Built Robotics · Dusty Robotics · Advanced Construction Robotics (TyBot/IronBot) · Canvas · Hilti (Jaibot) · Boston Dynamics (Spot + Trimble) · Field AI · Caterpillar · Komatsu · Volvo CE · Trimble · ICON · COBOD · Fastbrick/FBR · Monumental · Kewazo · Raise Robotics · Brokk / Husqvarna (demolition).
- **Regulators/standards:** OSHA · **ISO/TC 127** (earth-moving machinery) · **ISO/TC 59/SC 13** (BIM) · **buildingSMART** (IFC) · **ICC** (building code) · **ASTM** (F48; ISO/ASTM 52939) · **ANSI/ASSP** (A10) · EU (Machinery Regulation) · **NIST** (additive construction) · AEM.
- **Academic/industry labs:** ETH Zurich (Robotic Systems Lab — HEAP; Gramazio Kohler / NCCR *dfab* digital fabrication) · Carnegie Mellon (RI, field robotics) · TU München · Texas A&M.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B7 Mining** (shares ISO 17757 & earth-moving autonomy) · **B14 Inspection & maintenance** (reality capture, quadruped scanning) · **B5 Agriculture** (outdoor GNSS-RTK field autonomy) · **B1 Manufacturing** (prefab/modular, shop welding). Most-used platforms: **large autonomous earth-moving vehicles** (AMR-scale), **C6 aerial/drone** (survey), **C4 quadruped** (scanning), **C1/C2** fixed & mobile manipulators (bricklaying, drilling, finishing).

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B6.*
