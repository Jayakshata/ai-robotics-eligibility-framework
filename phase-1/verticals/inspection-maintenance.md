# Vertical Overlay — Inspection & Maintenance Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified · `~` to-verify · `⏱` time-sensitive. Sources (2024–2026) at end.

**Vertical:** Inspection & Maintenance · **Axis B:** B14 · **Safety-criticality:** **Medium–High**
**Core capabilities it builds on (Axis A, load-bearing first):** A1 perception (defect / thermal / 3D) · A2 state-estimation & SLAM (GPS-denied) · A5 locomotion (legged / aerial / climbing–crawling) · A3 coverage & NDT scan-path planning · A6–A7 learned defect detection · A4 contact/compliant control (aerial NDT) · A9–A10 fleet, scan-to-asset registration & runtime safety · **Typical platforms (C):** C4 quadruped · C6 aerial/UAV · C7 underwater ROV/AUV · C3 AMR · climbing/crawling crawlers (signature, off-C-list)

---

## 1. Definition & Scope
Robots that **find and quantify defects and monitor asset condition** so humans stay out of hazardous, elevated, and confined spaces. Uniquely a **horizontal, cross-vertical** application — one capability core reused across **energy / oil & gas** (tanks, vessels, piping, flare stacks, offshore), **power & utilities** (turbine blades, transmission lines, boilers, substations), **civil infrastructure** (bridges, dams, tunnels, rail), and general **fixed-equipment integrity**. Signature sub-segments: autonomous **routine patrol** (gauge / leak / thermal rounds), **NDT delivery** (contact UT / eddy-current mapping), and **confined-space / GPS-denied survey**. Market on the order of **USD ~3.2 B (2026) → ~11.8 B (2036), ~14 % CAGR** `~` (single-source estimate; the quadruped slice alone ~$541 M in 2025). The defining twist: the *deliverable is an inspection result of record*, so **data integrity is itself regulated** — not just the robot's motion.

## 2. Core Capabilities It Builds On
- **A1 Perception** *(most load-bearing)* — defect detection / classification on visual, **thermal-IR**, and NDT-image streams; corrosion / crack / wall-loss segmentation and sizing. → `computer-vision-3d-perception`, `multimodal-sensor-fusion`
- **A2 State Estimation & SLAM** — **GPS-denied** LiDAR / visual SLAM inside tanks, ducts, hulls, tunnels; repeatable localisation so this year's scan registers to the same weld as last year's. → `state-estimation-slam`
- **A5 Locomotion** *(the specialisation is platform diversity itself)* — **magnetic / vacuum wall-climbing, tracked pipe-crawling, collision-tolerant caged flight, Ex-rated legged gaits**. → `locomotion`
- **A3 Navigation & Planning** — autonomous asset-**coverage** and **NDT scan-path planning**: full coverage, fixed standoff, deterministic revisit. → `motion-planning-navigation`
- **A4 Contact / Compliant Control** — holding a **stable probe force from a flying or climbing base** for in-flight UT / EMAT contact NDT. → `control-classical-optimal-mpc`
- **A6–A7 Learned Defect Detection** — ML on **PAUT waveforms** plus foundation / vision-text models over thermography and remote-visual imagery. → `robot-foundation-models-vla`
- **A9–A10 Fleet, Calibration & Safety** — **scan-to-asset / digital-twin registration**, cross-site fleet orchestration, and runtime safety monitoring. → `calibration-integration-mlops`, `multi-robot-swarm`, `safety-verification-assurance`

## 3. Domain Knowledge Required
What a generalist roboticist is missing: **NDT physics & methods** — ultrasonic / phased-array (UT/PAUT), radiographic (RT), eddy-current array (ECA), ACFM, EMAT, guided-wave, magnetic-particle (MT), dye-penetrant (PT), visual (VT), and IR thermography, each with its own physics and **probability-of-detection (POD)** envelope; **materials, corrosion & metallurgy** — corrosion-under-insulation (CUI), stress-corrosion cracking, wall loss, weld and fatigue defects; **asset-integrity engineering** — inspection intervals, **Risk-Based Inspection** and **Fitness-For-Service** reasoning, defect criticality and remaining-life; and the ability to read **P&IDs, isometrics, and asset registers** and push results into **CMMS / digital-twin** systems. The robotics is the easy half; the metallurgy and code are the hard half.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
Unlike most verticals, the hard gate is **not** a device approval — it is the **qualification of the person and procedure that certifies the inspection result**. Named codes (verified):
- **ASNT SNT-TC-1A** — Recommended Practice for **employer-based** NDT personnel qualification (Level I / II / III); the workhorse of North-American NDT. **Hard gate.**
- **ANSI/ASNT CP-189** — the ANSI **national-standard** (auditable, consensus) counterpart to SNT-TC-1A.
- **ISO 9712:2021** (US adoption: **ANSI/ASNT 9712**) — **central / third-party** NDT personnel certification (the European / international model).
- **NAS 410 (Rev 5) / EN 4179** — **aerospace & defense** NDT personnel qualification (AIA / FAA / EASA-recognised). `~`
- **ASME BPVC Section V** — how the **NDE methods** themselves (UT / RT / ET …) must be performed; invoked by other BPVC sections for acceptance. **Hard gate for coded equipment.**
- **API 510 / 570 / 653** — in-service inspection of **pressure vessels / process piping / aboveground storage tanks** (intervals, repair, re-rating). **Hard gate** in refining & petrochem.
- **API RP 580 / 581** — **Risk-Based Inspection** framework (580) and quantitative methodology (581): what to inspect, and when.
- **API 579-1 / ASME FFS-1** — **Fitness-For-Service** assessment of a discovered flaw (run / repair / replace).
- **API 1163** — **In-Line Inspection Systems Qualification** for pipeline "smart-pig" ILI tools; the pipelines themselves fall under **PHMSA 49 CFR Part 192** (gas) / **195** (hazardous liquid).
- **FAA Part 107** — baseline small-UAS commercial flight; **FAA Part 108** — the forthcoming **BVLOS** rule (NPRM Aug 2025; final rule expected 2026; UAS up to ~1,320 lb) — the gate that unlocks **corridor-scale** pipeline / powerline / rail inspection. **Hard gate** for the drone segment. `⏱`
- **OSHA 29 CFR 1910.146** — permit-required **confined spaces**; the legal reason to send a robot instead of a person.
- **ATEX 2014/34/EU · IECEx · IEC 60079 series** — **explosion-protected equipment**; a robot entering a refinery **Zone 1 / 2** must itself be **Ex-certified**, and the certificate is **zone-specific and non-transferable**. **Hard gate.**

## 5. Specialized Hardware, Sensors & Environment
**Platforms:** magnetic / tracked **wall-crawlers** (Eddyfi VersaTrax, Magg), **vacuum-adhesion** climbers for non-ferrous surfaces, **collision-tolerant caged drones** (Flyability Elios 3), **thrust-vectoring contact drones** (Voliro T, Apellix), **Ex-proof legged / tracked** robots (ANYmal X, Taurob, ExRobotics ExR-2), pipe crawlers, and subsea ROV/AUV. **NDT payloads:** UT / PAUT with couplant, **dry-coupled EMAT**, eddy-current array, ACFM, dry-film-thickness, remote-visual / borescope, and **high-temperature UT** for live / hot assets. **Sensors:** thermal-IR, LiDAR (for GPS-denied SLAM), fixed and trace gas detection, high-zoom EO, and acoustic. **Environment:** GPS-denied, dark, wet, dusty, hot, explosive, radioactive, at-height, vertical / inverted, and offshore — with a recurring **tethered-vs-untethered** power / data trade-off.

## 6. Safety Envelope & Criticality
**Medium–High, and two-sided.** *Operating risk:* the robot works in explosive atmospheres, confined spaces, at height, and near energised assets, so it must **not become an ignition source or a dropped object** — this drives Ex-certification, tethering, and collision tolerance. *Consequence-of-error:* a **missed or mis-sized defect** in a vessel, pipeline, or turbine blade can end in rupture, collapse, or release, so the dominant V&V burden is **measurement and data integrity** — POD studies, procedure qualification, sensor calibration and traceability, and a **qualified Level II / III inspector who signs and is legally accountable** for the result. "The robot flew the line" is not the deliverable; a defensible, code-compliant inspection record is.

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (perception / SLAM / locomotion / navigation):
- **Valued degrees:** **Materials Science / Metallurgical Engineering** rises to first-class; **Mechanical / Structural / Civil** for the infrastructure slice; base robotics degrees still apply.
- **Domain credentials (the differentiators):** **ASNT NDT Level II** in a method (UT / PAUT / ECA / IRT) is the single strongest signal, then **ASNT / ISO 9712 Level III**; **API 510 / 570 / 653** inspector certifications; **API 580** RBI; **FAA Part 107** Remote Pilot; OSHA confined-space entry and **ATEX / IECEx** hazardous-area awareness.
- **Feeder capability profiles:** `computer-vision-3d-perception`, `state-estimation-slam`, `locomotion`, `motion-planning-navigation`, `multimodal-sensor-fusion`, `calibration-integration-mlops`, `safety-verification-assurance`.
- The conversion is "**perception / SLAM / locomotion engineer + one NDT method (ideally ASNT Level II) + API / asset-integrity code literacy + Part 107 or hazardous-area ops.**"

## 8. Trending & Notable `⏱ as of mid-2026`
- **BVLOS at scale:** FAA **Part 108** moving from NPRM (Aug 2025) toward a final rule — routine, corridor-scale inspection of pipelines, powerlines, and rail is the prize.
- **Ex-proof legged robots productionising:** **ANYmal X** (billed as the first Ex-proof legged robot, Zone 1), Taurob, and ExR-2 in live refineries; fleet-autonomy layers — Boston Dynamics **Orbit**, ANYbotics × **Yokogawa OpreX**.
- **Aerial contact-NDT displacing scaffolding / rope access:** **Voliro T** (UT / EMAT / ECA / DFT in flight, ~30 N contact, high-temp payload), Apellix, Skydio **X10**.
- **AI defect detection:** multimodal-fusion PAUT (vendor accuracy claims ~98 % `~`), **explainable-AI RBI**, and vision-text thermography models.
- **Continuous vs. periodic inspection:** **Gecko Robotics** — ~$125 M Series D / unicorn valuation (2025) and its **Cantilever** digital-twin platform — pushing the shift from periodic surveys to always-on structural monitoring.

*(Re-research before publish — vendor metrics, funding, and the Part 108 timeline all date fast.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Robot / NDT OEMs:** Boston Dynamics · ANYbotics · Gecko Robotics · Flyability · Voliro · Apellix · Skydio · Taurob · ExRobotics · Square Robot · Invert Robotics · **Eddyfi Robotics** · **Waygate / Baker Hughes** · GE Vernova.
- **Pipeline ILI:** ROSEN · Baker Hughes (PII) · NDT Global · T.D. Williamson.
- **Service integrators / deployers:** Mistras · SGS · Bureau Veritas · TÜV · Applus+ · Cyberhawk · Percepto; owner-operators such as Shell, Equinor, ENI, Petrobras, PETRONAS, and AEP.
- **Regulators / standards bodies:** **ASNT · API · ASME · ISO / ICNDT · FAA / EASA · OSHA · PHMSA · ATEX / IECEx · AIA (NAS 410) · EPRI · FHWA / AASHTO**.
- **Academic / research labs:** ETH Zurich RSL (ANYmal lineage) · CMU (infrastructure & climbing-robot programs) · EPRI robotics initiatives. `~`

## 10. Adjacent Verticals & Platforms
Adjacent Axis-B verticals: **B8** oil & gas / hazardous · **B7** mining · **B13** marine / underwater · **B16** nuclear & decommissioning · **B12** space · **B6** construction · **B11** aerial / UAS. Most-used platforms: **C4** quadruped · **C6** aerial · **C7** underwater ROV/AUV · **C3** AMR — plus the **climbing / crawling crawler**, this vertical's signature form-factor, which has no numbered slot on the Axis-C list. The confined-space / GPS-denied core also ties directly to the `state-estimation-slam` and `locomotion` capability profiles.

---
### Sources (2024–2026)
- ASNT SNT-TC-1A / CP-189 / ISO 9712:2021 — asnt.org/standards-publications/standards; certification.asnt.org/certification/asnt-9712-level-ii; ndttrainingonline.com/asnt-snt-tc-1a-certification-requirements
- NAS 410 Rev 5 / EN 4179 — ndttrainingonline.com/nas-410-ndt-certification-requirements; webstore.ansi.org/standards/ds/dsen41792021
- ASME BPVC Section V (NDE) — en.wikipedia.org/wiki/ASME_Boiler_and_Pressure_Vessel_Code
- API 510 / 570 / 653 · 580/581 RBI · 579-1 FFS · 1163 ILI — qindustrialservices.com/api-inspection-standards-pressure-vessels-pipelines; inspectioneering.com/tag/api+rp+580; inspectioneering.com/journal/2025-10-30/11801 (XAI RBI, Oct 2025)
- FAA Part 108 BVLOS — faa.gov/newsroom/BVLOS_NPRM_website_version.pdf; federalregister.gov/documents/2026/01/28/2026-01644; uavhq.com/blog/faa-part-108-complete-guide-bvlos-2026
- OSHA confined space / Flyability Elios 3 — flyability.com/elios-3; autonomyglobal.co/the-dawn-of-confined-space-autonomy-flyabilitys-elios-3
- ATEX / IECEx Ex-proof legged robots — anybotics.com/news/anymal-x-the-worlds-first-ex-proof-legged-robot; jpt.spe.org/company-releases-four-legged-robot-for-explosive-environments
- Market & companies — einpresswire.com/article/884877761 ($3.2B→11.8B); oxmaint.com/article/best-quadruped-robots-industrial-maintenance-2026; sacra.com/c/gecko-robotics; therobotreport.com/tag/inspection
- Crawlers / aerial NDT — robotics.eddyfi.com/versatrax-ndt-series; voliro.com/blog/industrial-inspection-drones; apellix.com/nondestructive-testing
- AI defect detection — mdpi.com/2673-2688/6/6/124 (ML in PAUT); roboticsandautomationnews.com (segment overview, 2025)

*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B14.*
