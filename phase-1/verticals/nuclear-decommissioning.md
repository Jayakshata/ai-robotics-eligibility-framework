# Vertical Overlay — Nuclear / Decommissioning / Hazmat Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Nuclear / Decommissioning / Hazmat · **Axis B:** B16 · **Safety-criticality:** **Critical**
**Core capabilities it builds on (Axis A, load-bearing first):** A9 HRI (master–slave teleoperation) · A1 perception (radiation/gamma imaging + vision) · A5 manipulation (glovebox/hot-cell, cutting & size-reduction) · A4 compliant/force control (bilateral haptics) · A2/A3 SLAM & navigation (GPS-denied, dose-aware) · A10 safety & verification (radiation qualification + safety case) · **Typical platforms (C):** C2 mobile manipulator · C4 quadruped · C7 underwater ROV · C1 fixed arm (hot cell) · C6 aerial (rad-mapping) · C8 continuum/snake-arm

---

## 1. Definition & Scope
Robots that let humans work in radiological environments they cannot safely enter. Sub-segments: **decommissioning & dismantling** of retired reactors and legacy facilities (size-reduction, cutting, decontamination, waste packaging); **remote handling** in gloveboxes and hot cells; **characterisation & inspection** (radiation mapping, contamination survey); **accident recovery** (Fukushima fuel-debris retrieval); and **tank-waste retrieval** (Hanford / Savannah River). The economic driver is regulatory: robots exist to drive worker dose toward **ALARA / ALARP**. Market **~USD 2.3 B (2025) → ~7.4 B (2034)** `✓`. This is one of the most teleoperation-heavy, safety-case-bound robotics verticals — the approval and qualification burden is as much a part of the job as the engineering.

## 2. Core Capabilities It Builds On
- **A9 HRI / Teleoperation** *(dominant)* — bilateral, force-reflecting **master–slave** manipulation; immersive/haptic control; off-site remote operation. Full autonomy is rare and must be justified in the safety case; **assisted/shared autonomy** is the current frontier. → `human-robot-interaction`, `imitation-learning-teleoperation`.
- **A1 Perception** — **gamma/radiation imaging fused with vision/LiDAR** for 3D radiological characterisation; radiation-tolerant cameras that themselves degrade under dose. → `computer-vision-3d-perception`, `multimodal-sensor-fusion`.
- **A5 Manipulation** — confined-cell, contact-rich work: cutting, grinding, sampling, decontamination, drum-packing; **snake-arm/continuum** reach into congested legacy plant. → `manipulation-and-grasping`.
- **A4 Compliant/Force Control** — delicate debris handling and haptic tele-manipulation under variable, degrading actuator behaviour. → `whole-body-compliant-control`.
- **A2/A3 SLAM & Navigation** — GPS-denied mapping of cluttered facilities; **dose-minimising / radiation-aware path planning**. → `state-estimation-slam`, `motion-planning-navigation`.
- **A10 Safety & Verification** — radiation-tolerance qualification + regulator-accepted safety case (see §6); reference the capability profile, do not restate. → `safety-verification-assurance`.

## 3. Domain Knowledge Required
Beyond robotics: **radiological science / health physics** (dose vs. dose-rate, contamination vs. irradiation, shielding, ALARA); **radiation effects on materials & electronics** (total-ionising-dose, displacement damage, embrittlement, optics browning); **nuclear fuel cycle & waste classification** (HLW/ILW/LLW, fuel debris); **criticality safety** (avoiding inadvertent criticality when moving fissile material); **contamination control & containment** (glovebox / hot-cell discipline); **decommissioning workflow** (characterise → size-reduce → decontaminate → package → assay); and **nuclear safety-case methodology**. This is what a generalist roboticist lacks.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ALARA / ALARP** — "As Low As Reasonably Achievable / Practicable"; the dose-reduction principle that is the entire rationale for deploying robots. **Hard gate** via the safety case.
- **IAEA GSR Part 3** — Radiation Protection and Safety of Radiation Sources: International Basic Safety Standards (dose limits, protection framework).
- **IAEA GSR Part 6** — Decommissioning of Facilities: safety requirements across the decommissioning lifecycle (siting/design → licence termination).
- **IAEA GSR Part 5** — Predisposal Management of Radioactive Waste (waste handling / packaging before disposal).
- **US NRC 10 CFR Part 20** — Standards for Protection Against Radiation (occupational dose limits, ALARA). **Hard gate** on US commercial sites.
- **US NRC 10 CFR 50.82** — Termination of Licence: decommissioning pathway / License Termination Plan (completion within 60 yr).
- **US DOE 10 CFR Part 830** — Nuclear Safety Management; **Subpart B (Safety Basis Requirements)** mandates a **Documented Safety Analysis (DSA)** and **Hazard Categorisation (Cat 1/2/3 per DOE-STD-1027)**. **Hard gate** on DOE sites (Hanford / SRS).
- **UK Nuclear Installations Act 1965 (NIA65)** — nuclear **site licence** with 36 standard **Licence Conditions (LCs)** spanning operation → decommissioning.
- **UK Ionising Radiations Regulations 2017 (IRR17)** — worker/public protection, ALARP duty, dose limits (ONR-enforced ACOP).
- **UK ONR Safety Assessment Principles (SAPs)** — the framework ONR uses to judge the **safety case** (the acceptance gate for any deployment).
- **ISO 11933 (multi-part)** — Components for containment enclosures; **Part 2** covers gloves, sleeves/gaiters and junction assemblies for the glove-port / tong penetrations remote manipulators pass through.
- **ISO 10648-2** — Containment enclosures: glovebox **leak-tightness classification** (Class 1–3) and checking methods.
- *Regulators: NRC (US) · ONR (UK) · NRA (Japan) · ASN (France) · IAEA (international) · DOE-EM (US sites).*

## 5. Specialized Hardware, Sensors & Environment
**Radiation-hardened / radiation-tolerant** actuators, drives, cameras and compute; **master–slave servo-manipulators** and twin-arm haptic rigs (e.g. Wälischmiller Telbot); **snake-arm / continuum** manipulators; **tele-operated crawlers, ROVs and quadrupeds**; **gamma cameras / Compton imagers**, dosimetry and spectrometers fused into SLAM; **glovebox / hot-cell** integration; long-tether power/comms; decontaminable, sealed, submersible builds. Hardware is a **consumable** — tolerance is finite: non-hardened COTS controllers fail around **~100 Gy** (a KUKA arm at ~164 Gy; a UP-Core SBC at ~111 Gy), while rad-hardened parts reach **~1–10 kGy** `✓`. A stuck robot becomes secondary radioactive waste.

## 6. Safety Envelope & Criticality
**Critical.** Failure modes: radioactive release / contamination spread, worker or public dose, inadvertent **criticality**, and a **stranded robot that itself becomes retrieval-requiring waste**. V&V burden: pre-deployment **radiation-tolerance qualification / testing**; a **safety case** accepted by the regulator (ONR SAPs / NRC / DOE DSA) before any hot deployment; **fail-safe, recoverable, retrievable** design (the robot must be extractable on failure); and demonstrated contamination-control and containment integrity. Autonomy is constrained precisely because unpredicted behaviour is hard to bound in a safety case — hence teleoperation dominance.

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (teleop / manipulation / perception), this vertical **adds**:
- **Valued degrees:** **Nuclear Engineering** and **Health Physics / Radiation Science** rise to first-class; ME / mechatronic / EE or materials with a nuclear / radiation-effects grounding.
- **Domain credentials:** **NRRPT / RRPT** (Registered Radiation Protection Technologist), **CHP** (Certified Health Physicist, ABHP), **Radiological Worker II** training (DOE), site radiation-protection & criticality-safety training, safety-case / DSA competence.
- **Clearances:** nuclear-site security vetting is a genuine gate — **UK BPSS/SC**, **US DOE "L" / "Q"** access authorisations.
- **Feeder capability profiles:** `human-robot-interaction`, `imitation-learning-teleoperation`, `manipulation-and-grasping`, `computer-vision-3d-perception`, `multimodal-sensor-fusion`, `state-estimation-slam`, `motion-planning-navigation`, `whole-body-compliant-control`, `safety-verification-assurance`.
- **Conversion:** "teleoperation / manipulation engineer + radiological-protection literacy + nuclear safety-case competence + radiation-hardening engineering."

## 8. Trending & Notable `⏱ as of mid-2026`
- **Fukushima fuel-debris retrieval** — TEPCO's telescopic ("Telesco") device made the **first trial retrievals** from Unit 2 (~0.7 g, Nov 2024; 0.187 g / ~5×4 mm, Apr 2025); a **22 m, ~4.6 t, 18-DoF robotic arm** (UK–Japan build) follows for larger extraction; full retrieval of ~**880 t** debris pushed to **2037+** `✓`.
- **Sellafield quadrupeds** — Boston Dynamics **Spot** moved trial → business-as-usual in a C5 radiological area, with **off-site teleoperation** demonstrated (2025); an NDA-wide quadruped roadmap is forming `✓`.
- **Assisted / shared autonomy** shift ("traditional → assisted robotic deployments," Frontiers 2025); **digital twins for robot RL / autonomy** (e.g. iFANnpp) to pre-train and bound behaviour off-site.
- **Fused gamma-imaging + SLAM** for 3D radiological characterisation; **cobots beginning to replace master–slave** rigs in underwater ponds (Createc). *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers / integrators:** Veolia Nuclear Solutions · Wälischmiller Engineering · Brokk · OC Robotics (snake-arm) · Cavendish Nuclear (Babcock) · Createc · Forth Engineering · Jacobs · Nuvia · KUKA · Framatome · Westinghouse · GE Hitachi · Mitsubishi Heavy Industries · Hitachi-GE · Toshiba · Sarcos/RE2 · Boston Dynamics.
- **Programmes / academic partners:** **RAICo** (UKAEA + NDA + Sellafield Ltd + Univ. Manchester) · **RACE** (UKAEA, Culham) · **LongOps** (£12 M UK–Japan long-reach robotics) · **DOE-EM**, INL, LANL · **F-REI** (Japan).
- **Regulators / bodies:** IAEA · NRC · ONR · NRA · ASN · NDA · DOE-EM.

## 10. Adjacent Verticals & Platforms
Adjacent Axis-B: **B8 oil & gas / hazardous** (Ex-rating, shared hazmat DNA), **B12 space** (shared radiation-hardening), **B7 mining** and **B14 inspection & maintenance**. Most-used platforms: **C2 mobile manipulator**, **C7 underwater ROV**, **C4 quadruped**, **C1 hot-cell arm**, **C8 snake-arm/continuum**, **C6 aerial** rad-mapping; continuum reach ties to the `soft-robotics` capability profile.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B16.*
*Sources (2024–2026): gov.uk Sellafield/Spot case study; World Nuclear News & NucNet; Frontiers Robotics & AI 10.3389/frobt.2025.1432845; Intel Market Research nuclear-robotics market; TEPCO decommissioning releases; IAEA GSR Part 3/5/6; ISO 11933 & ISO 10648-2 (iso.org); NRC 10 CFR 20 & 50.82; DOE 10 CFR 830 & DOE-STD-1027 (ecfr.gov / standards.doe.gov); ONR IRR17 & SAPs; PMC7805772 (radiation-tolerance testing); UKAEA LongOps; NRRPT.org.*
