# Vertical Overlay — Food Processing & Handling

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified 2024–2026 · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Food Processing & Handling · **Axis B:** B15 · **Safety-criticality:** **Medium**
**Core capabilities it builds on (Axis A, load-bearing first):** A5 manipulation & grasping (deformable / high-speed) · A1 perception (grading, foreign-object) · A4 compliant/force control + soft grippers (gentle grasp) · A3 motion planning (conveyor / line tracking) · A10 safety & verification (hygiene V&V) · **Typical platforms (C):** C1 fixed arm (delta/SCARA) · C8 soft/continuum grippers · C3 AMR (plant intralogistics)

---

## 1. Definition & Scope
Robots that pick, sort, cut, portion, assemble, and pack food — from raw **primary processing** (meat/poultry/fish/produce: deboning, evisceration, portioning — the hardest, most variable frontier) through **secondary processing** (ready-meals, bakery, dairy) to end-of-line **packaging & palletizing** (shared with logistics). Sub-segments: primary processing, vision-driven **grading & sorting**, **pick-and-place / assembly** of deformable items, and packaging/palletizing. The defining constraint is that robots operate in **wet, cold, caustic washdown zones in direct or splash contact with food**, so hygiene and food-safety compliance — not raw autonomy — gate deployment. Chronic labor shortage and sanitation demand pull adoption; food robotics is a several-billion-dollar segment growing at low-double-digit CAGR. `~`

## 2. Core Capabilities It Builds On
- **A5 Manipulation & grasping** *(load-bearing)* — natural products are deformable, wet, sticky, slippery, and vary part-to-part; grasp synthesis must tolerate that at high cycle rates (sub-1 s pick). Increasingly learned via food-foundation-models trained on demonstration data. See `manipulation-and-grasping`, `robot-foundation-models-vla`.
- **A1 Perception** *(load-bearing)* — vision sorting/grading, defect detection, and **foreign-object detection** (X-ray, hyperspectral); 3D for irregular produce; multimodal fusion of camera + X-ray + weight. See `computer-vision-3d-perception`, `multimodal-sensor-fusion`.
- **A4 Compliant/force control + soft grippers** — gentle, damage-free grasping of fragile/deformable food; food-grade silicone soft & vacuum grippers; force-limited contact. See `whole-body-compliant-control`, `soft-robotics`, `tactile-force-sensing`.
- **A3 Motion planning** — high-throughput conveyor-tracking / visual servoing on moving lines. See `motion-planning-navigation`.
- **A10 Safety & verification** — specialized toward **hygiene/contamination** assurance, not life-safety (see §6). See `safety-verification-assurance`.

## 3. Domain Knowledge Required
The generalist roboticist's gap here is **food-safety science**: food **microbiology** (Listeria, Salmonella, E. coli, biofilms, cross-contamination), **HACCP** hazard analysis, **allergen control**, **hygienic/sanitary design** (cleanability, drainability, no crevices / dead-legs / harborage points — EHEDG criteria), **cleaning regimes** (CIP/COP, high-pressure hot-water & foam washdown, sanitizer chemistry), **food-contact materials science** (316L stainless, FDA-grade polymers/silicone), **cold-chain** handling, GMP, and the natural part-to-part variability of biological product. `✓`

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **FDA — 21 CFR Part 117** (FSMA Current Good Manufacturing Practice + Hazard Analysis and Risk-Based Preventive Controls for Human Food, "PCHF") — the plant-level regime equipment must not violate. **Hard gate.**
- **USDA FSIS — 9 CFR Part 416** (Sanitation / SSOPs) + **Part 417** (HACCP) — govern meat/poultry/egg establishments; equipment must pass FSIS sanitary acceptance. **Hard gate** for protein lines.
- **NSF/ANSI 169 — "Special Purpose Food Equipment and Devices"** — the standard robots are certified to for food/splash-zone materials, design, and fabrication; current edition **NSF/ANSI 169-2023, effective 8 Mar 2026** (**NSF/ANSI 51** covers food-equipment materials). **Hard gate** for direct-contact use. `✓`
- **3-A Sanitary Standards (3-A SSI)** — US hygienic-design standards for dairy & food-processing equipment.
- **EHEDG Guidelines** — hygienic-design criteria + cleanability test & equipment certification; anchor doc **EHEDG Doc 8, *Hygienic Design Principles*, 3rd ed. (March 2018)**. `✓`
- **EN 1672-2** (food-processing machinery — hygiene requirements) + **EN ISO 14159** (safety of machinery — hygiene requirements for machinery design) — the hygiene standards giving presumption of conformity for **EU CE marking** under the machinery framework (**Directive 2006/42/EC → Machinery Regulation (EU) 2023/1230, applicable 20 Jan 2027**). **Hard gate** for the EU market. `✓`
- **EU food-contact materials:** **Reg. (EC) 1935/2004** (framework) + **10/2011** (plastics) + **2023/2006** (GMP). **Hard gate** in contact zones (EU).
- **Food-grade lubricants:** **NSF H1 / FDA 21 CFR 178.3570** (lubricants with incidental food contact). **Hard gate** in contact zones. `✓`
- **Food-safety management systems:** **ISO 22000 / FSSC 22000**, **HACCP (Codex Alimentarius)**; **GFSI** now benchmarks **hygienic design** (scopes **JI** = equipment/building manufacturers, **JII** = users; recognized 2025) — pulling equipment suppliers into formal audit scope. `~`
- **Worker/robot safety:** **ISO 10218-1/2:2025** (robots — safety requirements) — the 2025 revision **absorbed ISO/TS 15066** power-and-force-limiting / collaborative-application content (in force 1 Apr 2025); shared with manufacturing. `✓`

## 5. Specialized Hardware, Sensors & Environment
**IP69K washdown-rated** robots (per **ISO 20653**: close-range spray, ~80 °C at 80–100 bar); **316L stainless / food-grade construction**; hygienic design — smooth, crevice-free, drainable, sealed, captive fasteners, no shedding parts; **NSF H1 lubricants**; corrosion resistance to caustic/acidic sanitizers and salt; tolerance of freezer/cold, hot, and high-humidity zones. End-effectors & sensing: **food-grade silicone soft & vacuum grippers** (OnRobot, Soft Robotics mGrip lineage); 2D/3D vision; **hyperspectral & X-ray foreign-body detection**; checkweighers/load cells. Signature platforms: **ABB IRB 360 FlexPicker** (delta), **FANUC washdown/food arms**, **Universal Robots** cobots. `✓`

## 6. Safety Envelope & Criticality
**Medium.** The dominant failure mode is **food contamination** — microbial, allergen, or **foreign-body** (metal/plastic shed from the robot) — leading to **recalls, illness outbreaks, and brand damage**, not immediate death, which is why it sits below surgical/automotive (Critical). The secondary risk is **worker safety** (cobots and sharp tools on meat-cutting lines). The V&V burden is therefore **hygiene-centric**: EHEDG **cleanability validation**, HACCP/SSOP integration, food-contact-material certification & traceability, and foreign-object-prevention design review. Software-assurance rigor is far lighter than the IEC 62304 / ISO 26262 domains.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (manipulation / perception / soft-robotics / control), this vertical **adds**:
- **Valued degrees:** **Food Engineering / Food Science & Technology**, Agricultural/Biosystems Engineering, and Packaging Engineering rise to first-class alongside ME/Mechatronics with a hygienic-design focus.
- **Domain credentials:** **HACCP certification**, **EHEDG hygienic-design training**, **PCQI** (FSMA Preventive Controls Qualified Individual), FSSC 22000 / GFSI-scheme (BRCGS/SQF) auditor literacy, food-handler safety (e.g. ServSafe) basics.
- **Feeder capability profiles:** `manipulation-and-grasping`, `soft-robotics`, `computer-vision-3d-perception`, `tactile-force-sensing`, `whole-body-compliant-control`, `motion-planning-navigation`, `multimodal-sensor-fusion`, `robot-foundation-models-vla`.
- **Conversion:** "manipulation/perception engineer + hygienic-design & food-safety (HACCP/EHEDG) literacy + food-material-handling knowledge."

## 8. Trending & Notable `⏱ as of mid-2026`
- **Physical-AI food-foundation models:** **Chef Robotics' Food Foundation Model (FFM)** now powers a **bi-manual prep-table assembly** system (announced May 2026), learning food picking/placing from demonstration where general VLAs struggle on wet/sticky/deformable variety. `✓`
- **High-speed soft grippers:** sub-1 s pneumatic soft grippers for fragile/irregular product; synthetic-data-trained detection for cluttered food grasping. `~`
- **Primary-processing automation** — the hardest frontier (variable carcasses) — advanced by **JBT Marel** (JBT–Marel merger completed **Jan 2025**, ticker JBTM), **BAADER**, **Scott Technology**, **Frontmatec**, and **GEA**; protein processors continue heavy automation investment (e.g. **Tyson**'s TMAC automation center, part of a ~$1.3B three-year program `~`). `✓`
- **Compliance shift:** **GFSI hygienic-design benchmarking** (scopes JI/JII) is drawing equipment suppliers into formal audit scope, and **NSF/ANSI 169-2023** takes effect **8 Mar 2026**. `✓`
*(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** Chef Robotics · Dexterity · JBT Marel · BAADER Group · GEA · Scott Technology · Frontmatec · KUKA · FANUC · ABB · Universal Robots · OnRobot; food producers **Tyson, JBS, Cargill, Nestlé**.
- **Regulators:** **FDA** (FSMA) · **USDA FSIS** · EU **EFSA** / notified bodies.
- **Standards / scheme owners:** **NSF** · **3-A SSI** · **EHEDG** · ISO/CEN · **GFSI** (BRCGS / FSSC 22000 / SQF).
- **Academic/research:** Georgia Tech Research Institute (GTRI) Agricultural Technology Research Program (poultry-processing automation) · Wageningen University (agri-food) · Campden BRI · EHEDG regional working groups.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B1 manufacturing** (cobot safety, palletizing), **B2 logistics** (packaging/palletizing), **B5 agriculture** (upstream harvest/grading), and pharmaceutical/cleanroom (shared hygienic & washdown design). Most-used platforms: **C1 fixed arm** (delta/SCARA for high-speed pick), **C8 soft/continuum** grippers, **C3 AMR** for in-plant intralogistics; food-service robotics (e.g. Miso Robotics) is a distinct downstream neighbor.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B15.*

**Sources (2024–2026):** NSF/ANSI 169-2023 edition + 8 Mar 2026 effective date (webstore.ansi.org; Intertek SUN) · EHEDG Doc 8 *Hygienic Design Principles* 3rd ed. Mar 2018 (ehedg.org) · FDA 21 CFR 117 & 178.3570 / USDA FSIS 9 CFR 416/417 (ecfr.gov) · EU Reg. 1935/2004, 10/2011, 2023/2006 + Machinery Regulation (EU) 2023/1230 (eur-lex.europa.eu; osha.europa.eu) · EN 1672-2 / EN ISO 14159 (harmonized hygiene standards) · ISO 10218-1/2:2025 absorbing ISO/TS 15066 (iso.org; therobotreport.com; automate.org) · ISO 20653 (IP69K) · GFSI hygienic-design scopes JI/JII (mygfsi.com; ehedg.org) · Chef Robotics bi-manual FFM, May 2026 (businesswire.com; roboticstomorrow.com) · JBT–Marel merger completed Jan 2025 (SEC 8-K; asian-agribiz.com) · Tyson TMAC / automation program (foodprocessing.com).
