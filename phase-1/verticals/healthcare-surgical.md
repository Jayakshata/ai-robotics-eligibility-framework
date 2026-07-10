# Vertical Overlay — Healthcare & Surgical Robotics

> **Overlay exemplar (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. Specifics are draft-from-knowledge for format validation; the fan-out web-verifies each. `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Healthcare & Surgical Robotics · **Axis B:** B4 · **Safety-criticality:** **Critical**
**Core capabilities it builds on (Axis A, load-bearing first):** A4 compliant/force control · A5 dexterous manipulation · A1 perception (endoscopic/3D) · A9 HRI (surgeon-in-the-loop teleop) · A3 constrained motion planning · A10 safety & verification · **Typical platforms (C):** C8 soft/continuum · C1 fixed arm

---

## 1. Definition & Scope
Robots that assist or perform clinical interventions and hospital work: **surgical robotics** (teleoperated laparoscopic, orthopedic, endoluminal, micro-surgical), plus adjacent segments — rehabilitation/assistive, hospital logistics, and disinfection. The overlay centers on **surgical**, the most safety-critical and regulation-heavy robotics vertical, where a defect can injure or kill a patient and the approval pathway is as much a part of the job as the engineering.

## 2. Core Capabilities It Builds On
- **A4 Compliant/Force Control** *(load-bearing)* — haptic feedback, tremor filtering, tissue-safe force limits.
- **A5 Dexterous Manipulation** — cable/tendon-driven micro-instruments, wristed articulation in confined cavities.
- **A1 Perception** — stereo-endoscopic vision, intra-op 3D, image registration to pre-op CT/MRI.
- **A9 HRI** — master-slave teleoperation with motion scaling; emerging shared/semi-autonomy.
- **A3 Motion Planning** — anatomy-constrained, remote-center-of-motion (RCM) kinematics.
- **A10 Safety & Verification** — the burden here is exceptional (see §6).

## 3. Domain Knowledge Required
Human **anatomy & physiology**; **surgical workflow** and procedure specifics; **tissue mechanics/biomechanics**; **sterilization, biocompatibility & materials**; operating-room integration and clinical human factors; **medical imaging** (CT/MRI/ultrasound) and image-to-patient registration. This is what a generalist roboticist lacks.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **FDA** clearance — in practice **510(k)** (substantial equivalence) or **De Novo**. `✓` Surgical robots are **Class II**: da Vinci clears under 510(k) (product code NAY), and **no general/soft-tissue surgical robot has gone through PMA**. PMA exists in the FDA framework for the highest-risk Class III devices, but reading it as the surgical-robot pathway is wrong. The pathway shapes the whole program.
- **IEC 60601-1** (+ collateral/particular standards) — safety of medical electrical equipment. The surgical-robot-specific particular standard is **IEC 80601-2-77** (robotically assisted surgical equipment) `✓`.
- **IEC 62366-1** — usability engineering / human factors, the standard behind "clinical human factors".
- **IEC 62304** — medical-device **software lifecycle** (surgical robots are typically Class C, the strictest).
- **ISO 13485** — quality management system for medical devices.
- **ISO 14971** — risk management (mandatory, pervasive).
- **ISO 10993** — biocompatibility of patient-contacting materials.
- **EU MDR 2017/745** — European market; plus IRB/ethics and clinical-trial requirements.

## 5. Specialized Hardware, Sensors & Environment
Teleoperation master consoles; **cable/tendon-driven wristed micro-instruments**; RCM mechanisms; force/torque & haptic feedback; **stereo-endoscopic cameras**; EM/optical **surgical navigation/tracking**; sterilizable/autoclavable and biocompatible materials; sub-millimeter precision; strict EMC and electrical-isolation constraints.

## 6. Safety Envelope & Criticality
**Critical.** A fault can cause patient harm or death, so the V&V burden dominates: IEC 62304 Class-C software rigor, full **risk management** (ISO 14971) with traceability from hazard → requirement → test, redundancy and fail-safe/fault-detection, design history file, and clinical validation. "It works in the lab" is a fraction of the job.

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (manipulation/control/perception), this vertical **adds**:
- **Valued degrees:** **Biomedical Engineering** rises to first-class; mechatronics/ME/EE + a bio/medical minor; a clinical/anatomy grounding is a differentiator.
- **Domain credentials:** **regulatory affairs** literacy (e.g. **RAC** — Regulatory Affairs Certification), IEC 62304 / ISO 13485 / ISO 14971 training, design-controls & V&V experience.
- **Feeder capability profiles:** `whole-body-compliant-control`, `manipulation-and-grasping`, `computer-vision-3d-perception`, `human-robot-interaction`, `safety-verification-assurance`.
- The conversion is "capability engineer + medical-device regulatory/QMS literacy + clinical domain knowledge."

## 8. Trending & Notable `⏱ as of mid-2026`
Semi-autonomous surgical subtasks (autonomous suturing — STAR/SRT lineage); **soft & continuum** and endoluminal robots; micro/nano robots for targeted therapy; **AR & surgical navigation**; surgical **data science / AI** and video understanding; competitive landscape broadening beyond Intuitive (**da Vinci 5**) to **Medtronic Hugo** (FDA-cleared, urology), **CMR Surgical Versius**, **J&J MedTech Monarch** (cleared) — while **J&J Ottava** remains **investigational** `~` (De Novo submitted Jan 2026, under review) — and **Stryker Mako** (ortho). *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers:** Intuitive Surgical · Medtronic · CMR Surgical · Johnson & Johnson MedTech · Stryker · Zimmer Biomet · KARL STORZ (acquired Asensus in 2025; Senhance is being discontinued `~`).
- **Regulators/standards:** FDA · EU notified bodies · IEC · ISO · AAMI.
- **Academic labs:** Johns Hopkins (CISST/LCSR) · Imperial Hamlyn Centre · DLR · Stanford CHARM · UCL.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: rehabilitation/assistive, hospital logistics, disinfection. Most-used platforms: **C8 soft/continuum**, **C1 fixed arm**; micro-robotics ties to the `micro-nano-bio-robotics` capability profile.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B4.*
