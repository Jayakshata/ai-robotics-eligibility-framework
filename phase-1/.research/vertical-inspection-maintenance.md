# Vertical Overlay — Inspection & Maintenance Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified · `~` to-verify · `⏱` time-sensitive. Sources (2024–2026) at end.

**Vertical:** Inspection & Maintenance · **Axis B:** B14 · **Safety-criticality:** **Medium–High**
**Core capabilities (Axis A, load-bearing first):** A1 perception (defect / thermal / 3D) · A2 state-estimation & SLAM (GPS-denied) · A5 locomotion (legged / aerial / climbing–crawling) · A3 coverage / scan-path planning · A6–A7 learned defect detection · A4 contact-force control (aerial NDT) · A10 scan-to-asset registration, fleet & safety
**Typical platforms (C):** C4 quadruped · C6 aerial/UAV · C7 underwater ROV/AUV · C3 AMR · **climbing/crawling crawlers** (signature, off-C-list)

---

## 1. Definition & Scope
Robots that **find/quantify defects and monitor asset condition** so humans avoid hazardous, elevated, or confined spaces. A **horizontal, cross-vertical** vertical — one capability core applied across **energy/oil-&-gas** (tanks, vessels, piping, flare stacks, offshore), **power & utilities** (turbine blades, transmission lines, substations, boilers), **civil infrastructure** (bridges, dams, tunnels, rail), and **industrial fixed-equipment integrity**. Signature sub-segments: autonomous **routine-patrol** (leak/gauge/thermal), **NDT-delivery** (contact UT/eddy-current mapping), and **confined-space / GPS-denied** survey. Market ~**USD 3.2 B (2026) → 11.8 B (2036), 13.9 % CAGR**; quadruped slice **$541 M (2025)**. Differentiator: the *deliverable is an inspection result of record*, so **data integrity is regulated**, not just the robot's motion.

## 2. Core Capabilities It Builds On
- **A1 Perception** *(most load-bearing)* — defect detection/classification on visual, **thermal/IR**, and NDT-image streams; corrosion/crack/wall-loss segmentation (`computer-vision-3d-perception`, `multimodal-sensor-fusion`).
- **A2 State Estimation & SLAM** — **GPS-denied** LiDAR/visual SLAM inside tanks, ducts, hulls; repeatable localisation so scans register to the same weld year-over-year (`state-estimation-slam`).
- **A5 Locomotion** — platform diversity *is* the specialisation: **magnetic/vacuum wall-climbing, tracked/pipe crawling, caged flight, Ex-rated legged** (`locomotion`).
- **A3 Navigation & Planning** — autonomous asset-coverage and **NDT scan-path planning** (full coverage, standoff, revisit) (`motion-planning-navigation`).
- **A4 Contact/compliant control** — **aerial-NDT contact** (stable probe force from a flying base) (`control-classical-optimal-mpc`).
- **A6–A7 Learning** — ML/foundation-model **defect detection** (PAUT waveform ML, thermography vision-text models).
- **A10 Calibration + fleet** — **scan-to-asset / digital-twin registration**, fleet orchestration, runtime safety (`calibration-integration-mlops`, `multi-robot-swarm`, `safety-verification-assurance`).

## 3. Domain Knowledge Required
The generalist roboticist lacks: **NDT physics & methods** — UT/PAUT, radiographic (RT), eddy-current array (ECA), ACFM, EMAT, guided-wave, magnetic-particle (MT), dye-penetrant (PT), visual (VT), IR thermography; **materials, corrosion & metallurgy** — corrosion-under-insulation (CUI), stress-corrosion cracking, wall loss, weld/fatigue defects; **asset-integrity** engineering — inspection intervals, **Fitness-For-Service**, **Risk-Based Inspection**; **structural defect criticality**; reading **P&IDs, isometrics, asset registers**; **CMMS/digital-twin** workflows and probability-of-detection (POD) thinking.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
The **hard gate is the qualification of the person and procedure that certifies the result** — not a device approval. Named codes (verified):
- **ASNT SNT-TC-1A** — Recommended Practice for **employer-based** NDT personnel qualification/certification (Level I/II/III). The workhorse. **Hard gate.**
- **ANSI/ASNT CP-189** — the ANSI **national standard** version of the same (auditable consensus standard).
- **ISO 9712:2021** (US: **ANSI/ASNT 9712**) — **central/third-party** NDT personnel certification (Europe/international).
- **NAS 410 (Rev 5, 2020) / EN 4179** — **aerospace & defense** NDT personnel qualification (AIA/FAA-recognised).
- **ASME BPVC Section V** — **NDE methods** (how UT/RT/ET etc. must be performed); referenced by other code sections for acceptance. **Hard gate for coded equipment.**
- **API 510 / 570 / 653** — in-service inspection of **pressure vessels / piping / aboveground storage tanks** (intervals, repair, rerating). **Hard gate** in refining/petrochem.
- **API RP 580 / 581** — **Risk-Based Inspection** framework / quantitative technology (what to inspect, when).
- **API 579-1 / ASME FFS-1** — **Fitness-For-Service** assessment of found flaws.
- **API 1163** — **In-Line Inspection Systems Qualification** (pipeline "smart-pig" ILI tools); **PHMSA 49 CFR 192/195** governs the pipelines themselves.
- **FAA Part 107** — baseline small-UAS commercial ops; **FAA Part 108** — **BVLOS** rule (NPRM 7 Aug 2025; final rule expected ~spring 2026; up to 1,320 lb) — the gate for corridor-scale linear-asset inspection. **Hard gate** for drone segment.
- **OSHA 29 CFR 1910.146** — permit-required **confined spaces** (the legal reason to send a robot instead of a human).
- **ATEX 2014/34/EU · IECEx · IEC 60079 series** — **explosion-protected equipment**; a robot entering a refinery **Zone 1/2** must itself be **Ex-certified** (cert is zone-specific, non-transferable). **Hard gate.**

## 5. Specialized Hardware, Sensors & Environment
**Platforms:** magnetic/tracked **wall-crawlers** (Eddyfi VersaTrax/Magg), **vacuum-adhesion** climbers (non-ferrous), **collision-tolerant caged drones** (Flyability Elios 3), **thrust-vectoring contact drones** (Voliro T, Apellix), **Ex-proof** quadruped/tracked (ANYmal X, Taurob, ExR-2), pipe crawlers, subsea ROVs. **NDT payloads:** UT/PAUT + couplant, **dry-coupled EMAT**, eddy-current array, ACFM, dry-film-thickness, RVI/borescope, **high-temp UT** (live/hot assets). **Sensors:** thermal/IR, LiDAR (GPS-denied SLAM), gas detectors, high-zoom EO, acoustic. **Environment:** GPS-denied, dark, wet, dusty, hot, explosive, radioactive, at-height, vertical/inverted, offshore; tethered vs. untethered power trade-offs.

## 6. Safety Envelope & Criticality
**Medium–High, two-sided.** (a) *Operating risk*: the robot works in Ex atmospheres, confined spaces, at height, near energised assets — it must **not be an ignition source or a dropped object** (drives Ex-certification, tethering, collision tolerance). (b) *Consequence-of-error*: a **missed or mis-sized defect** in a vessel, pipeline, or turbine blade can cause catastrophic failure — explosion, collapse, release. So the dominant V&V burden is **measurement/data integrity**: POD studies, procedure qualification, sensor calibration & traceability, and a **qualified Level II/III human who signs and is legally accountable**. "The robot flew the line" isn't the deliverable; a defensible, code-compliant inspection record is.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (perception/SLAM/locomotion/nav):
- **Valued degrees:** **Materials Science / Metallurgical Eng.** rises to first-class; **Mechanical / Structural / Civil** (infrastructure); base robotics degrees still apply.
- **Domain credentials (differentiators):** **ASNT NDT Level II** in a method (UT/PAUT/ECA/IRT) — the single strongest signal; **ASNT Level III**; **API 510/570/653** inspector certs; **API 580 RBI**; **FAA Part 107 Remote Pilot**; OSHA confined-space & **ATEX** awareness.
- **Feeder profiles:** `computer-vision-3d-perception`, `state-estimation-slam`, `locomotion`, `motion-planning-navigation`, `multimodal-sensor-fusion`, `calibration-integration-mlops`.
- **Conversion:** *perception/SLAM/locomotion engineer + one NDT method literacy (ideally ASNT Level II) + API/asset-integrity code awareness + Part 107 / hazardous-area ops.*

## 8. Trending & Notable `⏱ as of mid-2026`
- **BVLOS at scale:** FAA **Part 108** imminent (final rule ~spring 2026) unlocks routine corridor inspection of pipelines/powerlines/rail.
- **Ex-proof legged robots productionising:** **ANYmal X** (first Ex-proof legged, Zone 1), Taurob, ExR-2 in refineries; fleet autonomy — Boston Dynamics **Orbit 5.0**, ANYbotics × **Yokogawa OpreX**.
- **Aerial contact-NDT:** **Voliro T** (UT/EMAT/ECA/DFT in flight, 30 N, high-temp payload), Apellix, Skydio **X10** UTM — replacing scaffolding/rope access.
- **AI defect detection:** multimodal-fusion PAUT (~98 % claims), **Explainable-AI (XAI) RBI**, vision-text thermography models.
- **Gecko Robotics:** **$125 M Series D (unicorn, Jun 2025)**, StratoSight roofs, **Cantilever** digital-twin platform — the "continuous vs. periodic inspection" shift.

## 9. Ecosystem — Employers, Regulators & Partners
- **Robot/NDT OEMs:** Boston Dynamics · ANYbotics · Gecko Robotics · Flyability · Voliro · Apellix · Skydio · Taurob · ExRobotics · Square Robot · Invert Robotics · Clobotics · **Eddyfi Robotics** · **Waygate/Baker Hughes** · GE Vernova.
- **Pipeline ILI:** ROSEN · Baker Hughes (PII) · NDT Global · T.D. Williamson.
- **Service integrators / deployers:** Mistras · SGS · Bureau Veritas · TÜV · Applus+ · Cyberhawk · Percepto; owner-operators Equinor, ENI, Petrobras, PETRONAS, Shell, AEP.
- **Regulators/standards:** **ASNT · API · ASME · ISO/ICNDT · FAA/EASA · OSHA · PHMSA · ATEX/IECEx · AIA (NAS 410) · EPRI · FHWA/AASHTO**.

## 10. Adjacent Verticals & Platforms
Adjacent Axis-B: **B8** oil-&-gas/hazardous · **B7** mining · **B13** marine/underwater · **B16** nuclear · **B12** space · **B6** construction · **B11** aerial/UAS. Platforms: **C4** quadruped · **C6** aerial · **C7** underwater ROV/AUV · **C3** AMR, plus **climbing/crawling crawlers** (signature form-factor absent from the numbered C-list).

---
### Sources (2024–2026)
- ASNT standards / ISO 9712 / SNT-TC-1A — asnt.org/standards-publications/standards; certification.asnt.org/certification/asnt-9712-level-ii; ndttrainingonline.com/asnt-snt-tc-1a-certification-requirements
- NAS 410 Rev 5 / EN 4179 — ndttrainingonline.com/nas-410-ndt-certification-requirements; webstore.ansi.org/standards/ds/dsen41792021
- ASME BPVC Section V (NDE) — en.wikipedia.org/wiki/ASME_Boiler_and_Pressure_Vessel_Code
- API 510/570/653 — qindustrialservices.com/api-inspection-standards-pressure-vessels-pipelines; ndttanknicians.com/api-510-vs-653-vs-570-which-code-applies
- API 580/581 RBI + XAI — inspectioneering.com/tag/api+rp+580; inspectioneering.com/journal/2025-10-30/11801 (XAI RBI, Oct 2025)
- FAA Part 108 BVLOS — faa.gov/newsroom/BVLOS_NPRM_website_version.pdf; federalregister.gov/documents/2026/01/28/2026-01644; uavhq.com/blog/faa-part-108-complete-guide-bvlos-2026
- OSHA confined space / CA Title 8 — flyability.com/elios-3; autonomyglobal.co/the-dawn-of-confined-space-autonomy-flyabilitys-elios-3
- ATEX/IECEx Ex-proof robots — anybotics.com/news/anymal-x-the-worlds-first-ex-proof-legged-robot; jpt.spe.org/company-releases-four-legged-robot-for-explosive-environments
- Market & companies — einpresswire.com/article/884877761 ($3.2B→11.8B); oxmaint.com/article/best-quadruped-robots-industrial-maintenance-2026; sacra.com/c/gecko-robotics; therobotreport.com/tag/inspection
- Crawlers/aerial NDT — robotics.eddyfi.com/versatrax-ndt-series; voliro.com/blog/industrial-inspection-drones; apellix.com/nondestructive-testing
- AI defect detection — mdpi.com/2673-2688/6/6/124 (ML in PAUT); roboticsandautomationnews.com/2025/09/19/...94456 (segment overview)
