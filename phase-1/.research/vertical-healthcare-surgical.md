# Vertical Overlay — Healthcare & Surgical Robotics

> **Research provenance / backfill.** This is the research file that grounds the B4 overlay (`phase-1/verticals/healthcare-surgical.md`). The original mining pass was never saved to disk; **this is a re-research pass performed 2026-07-10, not a recovery of the original**. It mirrors the sibling format (`vertical-mining.md`): overlay adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified 2026-07-10 · `~` to-verify / partial · `⏱` time-sensitive. Adversarial notes are inline where the overlay may over-read; the full CONFIRMED/UNVERIFIED/NUANCED ledger is in the handoff summary.

**Vertical:** Healthcare & Surgical Robotics · **Axis B:** B4 · **Safety-criticality:** **Critical**
**Core capabilities it builds on (Axis A, load-bearing first):** A4 compliant/force control · A5 dexterous manipulation · A1 perception (endoscopic/3D) · A9 HRI (surgeon-in-the-loop teleop) · A3 constrained motion planning · A10 safety & verification · **Typical platforms (C):** C8 soft/continuum · C1 fixed arm

---

## 1. Definition & Scope
Robots that assist or perform clinical interventions and hospital work: **surgical robotics** (teleoperated laparoscopic/soft-tissue, orthopedic, endoluminal/flexible, micro-surgical), plus adjacent segments — rehabilitation/assistive, hospital logistics, and disinfection. The overlay centers on **surgical**, the most safety-critical and regulation-heavy robotics vertical: a defect can injure or kill a patient, and the approval pathway is as much a part of the job as the engineering. `✓` The market is dominated by Intuitive (da Vinci, >10,000 systems installed and the reference predicate) with a fast-broadening challenger field (Medtronic, CMR, J&J, Stryker, Distalmotion) now clearing regulatory gates in 2024–2026.

## 2. Core Capabilities It Builds On
- **A4 Compliant/Force Control** *(load-bearing)* — haptic feedback, tremor filtering, tissue-safe force limits (`whole-body-compliant-control`, `tactile-force-sensing`). `✓` Note: da Vinci historically had **no force feedback**; **da Vinci 5 (2024) is the first Intuitive system with force-sensing/feedback** — so "haptics" is emerging, not a solved baseline.
- **A5 Dexterous Manipulation** — cable/tendon-driven micro-instruments, wristed articulation (EndoWrist-class) in confined cavities (`manipulation-and-grasping`).
- **A1 Perception** — stereo-endoscopic vision, intra-op 3D, image registration to pre-op CT/MRI (`computer-vision-3d-perception`).
- **A9 HRI** — master–slave teleoperation with motion scaling; emerging shared/semi-autonomy (`human-robot-interaction`, `imitation-learning-teleoperation`).
- **A3 Motion Planning** — anatomy-constrained, **remote-centre-of-motion (RCM)** kinematics that pivot instruments about a fixed point at the incision/trocar. `✓` (RCM is the defining kinematic constraint of da Vinci-class robots.)
- **A10 Safety & Verification** — the burden here is exceptional (see §6) (`safety-verification-assurance`).

## 3. Domain Knowledge Required
Human **anatomy & physiology**; **surgical workflow** and procedure specifics; **tissue mechanics/biomechanics**; **sterilization, biocompatibility & materials**; operating-room integration and clinical **human factors**; **medical imaging** (CT/MRI/ultrasound) and image-to-patient registration. This is what a generalist roboticist lacks. `✓` Human-factors work here is not informal — it is a **regulated usability-engineering process** (IEC 62366-1, see §4/§7).

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
This is the section the overlay leans on hardest, so each number was verified against ISO/IEC/FDA/EU primary or authoritative secondary sources.

**FDA market authorization (US).**
- **510(k)** — premarket notification via **substantial equivalence** to a predicate. `✓` The dominant pathway: **da Vinci 5 was 510(k)-cleared 2024-03-14** (K-series; product code **NAY**, device **Class II**); the original da Vinci was cleared for surgery **2000-07-11**.
- **De Novo** — for novel low/moderate-risk devices lacking a predicate; creates a new Class II classification. `✓` **CMR Versius (De Novo, Oct 2024)**, **Distalmotion Dexter (De Novo, Q4 2024)**, **Asensus Senhance (De Novo, 2017)** all entered this way, then added indications via 510(k).
- **PMA** — Premarket Approval, the highest-risk (Class III) pathway. `~` **Nuance / adversarial flag:** the overlay lists PMA as a surgical-robot pathway. In practice **no general/soft-tissue surgical robot has been approved via PMA** — they are **Class II** (product code NAY) cleared via 510(k) or authorized via De Novo. PMA is real and *part of the FDA framework*, but reading it as "surgical robots need PMA" would be **incorrect**. (Some Class III adjacent devices — e.g. certain implants a robot places — may be PMA, but the robotic *system* itself is Class II.)
- `✓` **FDA taxonomy:** the agency calls these **Robotically-Assisted Surgical Devices (RASD)** / Computer-Assisted Surgical Systems.

**Core standards stack (verified numbers + scope):**
- **IEC 60601-1** `✓` — Medical electrical equipment, Part 1: general requirements for **basic safety and essential performance**. Current **Edition 3.2 = IEC 60601-1:2005 + A1:2012 + A2:2020**. Baseline for every powered medical device; covers electrical, mechanical, thermal, radiation, software, usability, alarms.
- **IEC 80601-2-77:2019 (+ Amd 1:2023)** `✓` — **the surgical-robot-specific *particular* standard**: basic safety & essential performance of **robotically assisted surgical equipment (RASE) and systems (RASS)**. US adoption **ANSI/AAMI/IEC 80601-2-77:2020**. **Addition:** the overlay says "60601-1 (+ collateral/particular standards)" but **does not name 80601-2-77** — this is the single most important particular standard for the vertical and should be cited explicitly. (Companion **IEC 80601-2-78** covers *rehabilitation* robots.)
- **IEC 62304** `✓` — medical-device **software life-cycle** processes. Safety classes **A** (no injury possible), **B** (non-serious injury), **C** (death or serious injury possible — strictest). `~` Overlay says surgical robots are "typically Class C": **plausible and consistent** with hazard analysis (software failure → patient harm), but Class is assigned per-device from the risk analysis, not fixed by category — treat "typically Class C" as a sound inference, not a published universal.
- **ISO 13485:2016** `✓` — **quality management system** for medical devices (regulatory-purpose QMS).
- **ISO 14971:2019** `✓` — application of **risk management** to medical devices (the pervasive, mandatory backbone; hazard → risk → control → monitoring across the lifecycle).
- **ISO 10993-1** `✓` — **biological evaluation / biocompatibility** of patient-contacting materials, conducted inside the ISO 14971 risk process. Base part **10993-1:2018**; **revised 10993-1:2025** now published.
- **IEC 62366-1:2015** `✓` — application of **usability engineering (human factors)** to medical devices; FDA-recognized consensus standard (collateral **IEC 60601-1-6**). **Addition/support:** the task and delta-eligibility call for human factors by standard number — the overlay names "clinical human factors" (§3) and IEC 62366 only in the delta section context; **62366-1:2015** is the exact reference.
- **EU MDR — Regulation (EU) 2017/745** `✓` — European market regulation, **date of application 2021-05-26**; risk classes I/IIa/IIb/III; CE marking via a Notified Body; plus IRB/ethics and clinical-investigation requirements. Replaced the old MDD.

## 5. Specialized Hardware, Sensors & Environment
Teleoperation master consoles; **cable/tendon-driven wristed micro-instruments**; **RCM** mechanisms; force/torque & haptic feedback (`✓` newly real on da Vinci 5); **stereo-endoscopic cameras**; EM/optical **surgical navigation/tracking** (esp. orthopedics — Mako); sterilizable/autoclavable and biocompatible materials (ISO 10993); sub-millimetre precision; strict **EMC and electrical-isolation** constraints (IEC 60601-1 patient-applied-part isolation). `✓` Endoluminal/flexible platforms (Monarch, Ion) add steerable continuum shafts (ties to C8 soft/continuum).

## 6. Safety Envelope & Criticality
**Critical.** `✓` A fault can cause **patient harm or death**, so the V&V burden dominates: **IEC 62304 Class-C** software rigor, full **ISO 14971** risk management with traceability from hazard → requirement → test, redundancy and fail-safe/fault-detection, a **Design History File**, and clinical validation. "It works in the lab" is a fraction of the job. `✓` Regulators actively police over-reach: the **FDA safety communication (2019, updated 2021)** cautions that RAS devices are **not authorized for mastectomy or cancer prevention/treatment** and that long-term oncologic outcomes (overall survival, recurrence, disease-free survival) are **unestablished** — a live example of the safety envelope being enforced against marketing/clinical enthusiasm.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (manipulation/control/perception), this vertical **adds** — verified where credentials are named:
- **Valued degrees:** `✓` **Biomedical Engineering** rises to first-class; mechatronics/ME/EE + a bio/medical minor; a clinical/anatomy grounding differentiates.
- **Domain credentials:** `✓` **regulatory-affairs literacy** — **RAC (Regulatory Affairs Certification), specifically RAC-Devices**, issued by **RAPS** (Regulatory Affairs Professionals Society); plus **IEC 62304 / ISO 13485 / ISO 14971 / IEC 62366-1** training and design-controls & V&V experience.
- **Feeder capability profiles:** `whole-body-compliant-control`, `manipulation-and-grasping`, `computer-vision-3d-perception`, `human-robot-interaction`, `safety-verification-assurance`.
- Conversion: **"capability engineer + medical-device regulatory/QMS literacy + clinical domain knowledge."** `✓` This is the real bar — the regulatory/QMS stack is a distinct professional competency (RAPS reports a ~12% RAC salary premium), not something a strong roboticist absorbs on the side.

## 8. Trending & Notable `⏱ as of mid-2026`
- **Competitive field breaking open** `✓`: Intuitive **da Vinci 5** (510(k) 2024, force feedback) · **Medtronic Hugo RAS** — **FDA-cleared for urology 2025-12-03** (Expand URO IDE) · **CMR Versius** (De Novo 2024) and **Versius Plus** (510(k) 2025-12) · **Distalmotion Dexter** (De Novo 2024 → cholecystectomy/hysterectomy/gyn 510(k)s through 2026) · **J&J Monarch** (flexible robotics, 510(k) bronchoscopy 2018 / urology 2022; **Monarch Quest** AI bronchoscopy) · **Stryker Mako** (orthopedic, 510(k); hip-revision clearance 2025). `⏱` **Nuance:** **J&J Ottava is NOT yet cleared** — IDE trials 2024–25, **De Novo submitted 2026-01-07**; the overlay's "Ottava/Monarch" pairing conflates an investigational system with a cleared one.
- **Autonomy research (STAR → SRT-H lineage)** `✓`: **STAR** (Smart Tissue Autonomous Robot, Krieger/Johns Hopkins; Sci. Transl. Med. 2016, laparoscopic in-vivo pig anastomosis 2022) and its successor **SRT-H** (*Science Robotics*, 2025-07-09) — autonomous **cholecystectomy** steps, 100% success across 8 **ex-vivo** pig gallbladders via language-conditioned imitation learning. Both are **research systems on animal tissue, surgeon-supervised — not clinically deployed in humans.**
- **Counter-signal on autonomy hype** `✓` (the required skeptical read): **full/high autonomy is not clinically deployed.** A 2024 *npj Digital Medicine* systematic review of FDA-cleared surgical robots found the field overwhelmingly at **Level 1 (robot assistance)** with only a small share reaching Level 3 (conditional) — `~` (reported ~86% Level 1 / ~6% Level 3; exact figures from the review abstract, full text pay-walled). Add the **FDA RASD caution** (§6) and documented **"predicate creep" critiques of the 510(k) pathway for robotic devices** (2023 case study) and the honest picture is: **teleoperation with narrow, supervised task-autonomy — not autonomous surgeons.**
- Also live: **soft/continuum & endoluminal** robots, micro/nano robots for targeted therapy, **AR + surgical navigation**, and **surgical data science / video understanding**. *(Re-research before publish — this section is the most date-sensitive.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers:** `✓` Intuitive Surgical · Medtronic · CMR Surgical · Johnson & Johnson MedTech (Ethicon/Auris) · Stryker · Zimmer Biomet · Distalmotion. `~` **Asensus** — **acquired by KARL STORZ (2025); Senhance and Luna platforms being discontinued** — so listing Asensus as a standalone employer is now dated; the talent/tech sits inside KARL STORZ.
- **Regulators/standards:** `✓` FDA (CDRH) · EU Notified Bodies (MDR) · IEC · ISO · **AAMI** (US standards adoption, e.g. ANSI/AAMI/IEC 80601-2-77).
- **Academic labs:** `✓` **Johns Hopkins** (LCSR / CISST — Krieger, home of STAR/SRT-H) · **Imperial Hamlyn Centre** · **DLR** (MIRO surgical robotics) · **Stanford CHARM** (Okamura) · **UCL**. `~` (JHU confirmed via STAR/SRT-H authorship; the others are well-established surgical-robotics groups, not individually re-cited in this pass.)

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **rehabilitation/assistive** (IEC 80601-2-78), **hospital logistics**, **disinfection**. Most-used platforms: **C8 soft/continuum**, **C1 fixed arm**; micro-robotics ties to the `micro-nano-bio-robotics` capability profile.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B4. Backfilled 2026-07-10 by re-research (original mining pass never saved).*

## Sources
URLs surfaced and used in this 2026-07-10 re-research pass (WebSearch result sources; two direct fetches noted). Standard/regulation numbers verified against ISO/IEC/FDA/EU authoritative pages.

**FDA pathways, classification & cautions**
- da Vinci 5 FDA 510(k) clearance (2024-03-14): https://isrg.intuitive.com/news-releases/news-release-details/intuitive-announces-fda-clearance-fifth-generation-robotic and https://www.globenewswire.com/news-release/2024/03/14/2846718/7637/en/Intuitive-Announces-FDA-Clearance-of-Fifth-Generation-Robotic-System-da-Vinci-5.html
- da Vinci Class II / product code NAY / 510(k) K251739 (SE, not PMA): https://fda.innolitics.com/submissions/SU/subpart-b%E2%80%94diagnostic-devices/NAY/K251739
- da Vinci history (FDA 1997 assist / 2000-07-11 surgery): https://en.wikipedia.org/wiki/Da_Vinci_Surgical_System
- FDA caution — RAS devices for mastectomy/cancer (Computer-Assisted Surgical Systems): https://www.fda.gov/medical-devices/surgery-devices/computer-assisted-surgical-systems (direct fetch returned 404 on 2026-07-10; content corroborated via https://ascopost.com/news/august-2021/caution-with-robotically-assisted-surgical-devices-for-mastectomy-fda-safety-communication/ and https://www.medtechdive.com/news/fda-safety-notice-robotic-mastectomy-procedures/605378/ )
- "Predicate creep" 510(k) critique (robotic surgical device case study): https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10047502/

**Named systems / regulatory status**
- Medtronic Hugo RAS — FDA urology clearance 2025-12-03: https://news.medtronic.com/2025-12-03-Medtronic-announces-FDA-clearance-of-Hugo-TM-robotic-assisted-surgery-system-for-urologic-surgical-procedures
- CMR Versius De Novo (2024) & Versius Plus 510(k) (2025-12): https://www.therobotreport.com/cmr-surgical-receives-fda-clearance-for-versius-plus-surgical-robot/ and https://us.cmrsurgical.com/news/cmr-surgical-secures-510k-clearance-of-its-versius-plus-robotic-surgical-system
- J&J Ottava — IDE + De Novo submitted 2026-01-07 (NOT cleared): https://www.medtechdive.com/news/JJ-submits-FDA-de-novo-Ottava-robot-general-surgery/808976/ and https://www.jnj.com/media-center/press-releases/johnson-johnson-submits-ottava-robotic-surgical-system-to-the-u-s-food-and-drug-administration
- J&J Monarch — 510(k) bronchoscopy 2018 / urology 2022-05-02: https://www.surgicalroboticstechnology.com/news/auris-healths-monarch-platform-receives-fda-510k-clearance-for-urology-procedures/
- Stryker Mako — orthopedic 510(k)s (knee 2015, hip, hip-revision 2025): https://www.fiercebiotech.com/medical-devices/stryker-gets-fda-clearance-to-use-mako-robot-for-hip-replacement and https://www.medtechdive.com/news/stryker-starts-limited-release-of-mako-rps-handheld-knee-robot/811779/
- Distalmotion Dexter — CE 2020 / FDA De Novo Q4 2024 + 510(k)s: https://www.medicaldevice-network.com/news/fda-distalmotion-cholecystectomy/ and https://www.distalmotion.com/news/distalmotion_secures_third_fda_clearance_for_dexter_with_hysterectomy
- Asensus Senhance / KARL STORZ acquisition + Senhance/Luna discontinuation: https://www.therobotreport.com/karl-storz-closes-acquisition-of-asensus-surgical/ and https://www.massdevice.com/karl-storz-realigns-asensus-luna-senhance/

**Standards (numbers verified)**
- IEC 80601-2-77:2019 (RASE particular standard) + Amd 1:2023: https://www.iso.org/standard/68473.html and https://webstore.iec.ch/en/publication/89957 ; US adoption ANSI/AAMI/IEC 80601-2-77:2020: https://webstore.ansi.org/standards/aami/ansiaamiiec80601772020
- IEC 60601-1 Ed 3.2 (2005+A1:2012+A2:2020): https://webstore.ansi.org/standards/iec/iec60601eden2020-2421195
- IEC 62304 software safety classes A/B/C: https://www.greenlight.guru/glossary/iec-62304 and https://en.wikipedia.org/wiki/IEC_62304
- ISO 13485:2016 & ISO 14971:2019: https://www.iso.org/standard/72704.html (14971) and https://13485store.com/medical-device-standards/what-is-iso-14971/
- ISO 10993-1:2018 (and :2025 revision): https://www.iso.org/standard/68936.html and https://www.iso.org/standard/84512.html
- IEC 62366-1:2015 usability engineering: https://www.iso.org/standard/63179.html and https://www.intertek.com/medical/regulatory-requirements/iec-62366-1-and-iec-60601-1-6/
- EU MDR (Regulation (EU) 2017/745), applies 2021-05-26: https://en.wikipedia.org/wiki/Regulation_(EU)_2017/745

**Autonomy: levels, research systems, counter-signal**
- Yang et al., levels of autonomy 0–5 (Science Robotics 2017): https://www.science.org/doi/10.1126/scirobotics.aam8638
- Levels of autonomy in FDA-cleared surgical robots — systematic review (npj Digital Medicine 2024; ~Level-1 dominance): https://www.nature.com/articles/s41746-024-01102-y (direct fetch login-walled 2026-07-10; figures from abstract/snippet — tagged `~`) ; mirror https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11053143/
- STAR — supervised autonomous soft-tissue surgery (Sci. Transl. Med. 2016; laparoscopic in-vivo 2022): https://www.science.org/doi/10.1126/scitranslmed.aad9398 and https://hub.jhu.edu/2022/01/26/star-robot-performs-intestinal-surgery/
- SRT-H — autonomous cholecystectomy via imitation learning (Science Robotics, 2025-07-09): https://www.science.org/doi/10.1126/scirobotics.adt5254 and https://hub.jhu.edu/2025/07/09/robot-performs-first-realistic-surgery-without-human-help/

**Credential**
- RAPS RAC / RAC-Devices: https://www.raps.org/certifications/rac
