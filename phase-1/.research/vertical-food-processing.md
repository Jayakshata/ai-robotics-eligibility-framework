# Vertical Overlay — Food Processing & Handling

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified · `~` to-verify · `⏱` time-sensitive. Sources 2024–2026.

**Vertical:** Food Processing & Handling · **Axis B:** B15 · **Safety-criticality:** **Medium**
**Core capabilities it builds on (Axis A, load-bearing first):** A5 manipulation & grasping (deformable/high-speed) · A1 perception (grading/foreign-object) · A4 compliant/force control + soft robotics (gentle grasp) · A3 motion planning (conveyor/line tracking) · A10 safety & verification (hygiene V&V) · **Typical platforms (C):** C1 fixed arm (delta/SCARA), C8 soft/continuum grippers, C3 AMR (plant intralogistics)

---

## 1. Definition & Scope
Robots that pick, sort, cut, portion, assemble, and pack food — from raw primary processing (meat/poultry/fish/produce) through secondary processing (ready-meals, bakery, dairy) to end-of-line packaging and palletizing. Sub-segments: **primary processing** (deboning, evisceration, portioning — the hardest, most variable), **grading & sorting** (vision-driven), **pick-and-place / assembly** of deformable items, and **packaging/palletizing** (shared with logistics). The defining constraint is that robots operate in **wet, cold, caustic washdown environments in direct or splash contact with food**, so hygiene and food-safety compliance — not raw autonomy — gate deployment. Global food-robotics market ~$4B by 2028 (~10% CAGR), pulled by chronic labor shortage and sanitation demands. `✓`

## 2. Core Capabilities It Builds On
- **A5 Manipulation & grasping** *(load-bearing)* — natural products are deformable, wet, sticky, slippery, and vary part-to-part; grasp synthesis must tolerate that at high cycle rates (<1 s pick).
- **A1 Perception** *(load-bearing)* — vision sorting/grading, defect detection, and **foreign-object detection** (X-ray, hyperspectral); 3D for irregular produce; food-foundation-model perception for variety.
- **A4 Compliant/force control + soft robotics** — gentle, damage-free grasping of fragile/deformable food; food-grade silicone soft grippers.
- **A3 Motion planning** — high-throughput conveyor-tracking / visual servoing on moving lines.
- **A10 Safety & verification** — specialized toward **hygiene/contamination** assurance, not life-safety (see §6).

## 3. Domain Knowledge Required
The generalist roboticist's gap here is **food safety science**: food **microbiology** (Listeria, Salmonella, E. coli, biofilms, cross-contamination), **HACCP** hazard analysis, **allergen control**, **hygienic/sanitary design** (cleanability, drainability, no crevices/dead-legs/harborage points — EHEDG criteria), **cleaning regimes** (CIP/COP, high-pressure hot-water/foam washdown, sanitizer chemistry), **food-contact materials science** (316L stainless, FDA-grade polymers/silicone), **cold-chain** handling, GMP, and the natural variability of biological product. `✓`

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **FDA 21 CFR Part 117** — FSMA Current Good Manufacturing Practice + Hazard Analysis & Risk-Based Preventive Controls (CGMP/PCHF) for human food; the plant-level regime equipment must not violate. **Hard gate.**
- **USDA FSIS 9 CFR Part 416 (Sanitation / SSOPs) + Part 417 (HACCP)** — governs meat/poultry/egg establishments; equipment must pass FSIS sanitary acceptance. **Hard gate** for protein lines.
- **NSF/ANSI 169 — "Special Purpose Food Equipment and Devices"** — the standard robots are certified to for food/splash-zone materials, design, fabrication (current ed. **NSF/ANSI 169-2023, effective 8 Mar 2026**); NSF/ANSI 51 covers food-equipment materials. **Hard gate** for direct-contact use.
- **3-A Sanitary Standards (3-A SSI)** — US hygienic-design standards for dairy & food processing equipment.
- **EHEDG Guidelines** (e.g. Doc 8, *Hygienic Design Principles*, 3rd ed. 2018) — hygienic design criteria + cleanability test/certification; parts feed the EU standards below.
- **EN 1672-2** — food processing machinery, hygiene requirements; **EN ISO 14159** — safety of machinery, hygiene requirements for machinery design (both harmonized to the EU Machinery Regulation). **Hard gate** for EU CE marking.
- **EU Reg. (EC) 1935/2004** (food-contact materials framework) + **10/2011** (plastics) + **2023/2006** (GMP) — food-contact compliance for EU.
- **NSF H1 / FDA 21 CFR 178.3570** — food-grade lubricants for incidental food contact. **Hard gate** in contact zones.
- **ISO 22000 / FSSC 22000, HACCP (Codex)** — food-safety management systems; **GFSI** now benchmarks **hygienic design** (scopes JI/JII, transition by Sep 2025) — so equipment suppliers are increasingly audited on cleanability.
- **ISO 10218-1/2 + ISO/TS 15066** — cobot/worker safety (shared with manufacturing).

## 5. Specialized Hardware, Sensors & Environment
**IP69K washdown-rated** robots (ISO 20653: 80 °C, 80–100 bar close-range spray); **316L stainless / food-grade construction**; hygienic design — smooth, crevice-free, drainable, sealed, captive fasteners, no shedding parts; **NSF H1 lubricants**; corrosion resistance to caustic/acidic sanitizers and salt; tolerance of cold/freezer, hot, and high-humidity zones. Sensors/end-effectors: **food-grade silicone soft & vacuum grippers** (OnRobot, Soft Robotics mGrip); 2D/3D vision, **hyperspectral & X-ray foreign-body detection**; checkweighers/load cells. Signature platforms: **ABB IRB360 FlexPicker** (delta), **FANUC food/cleanroom & washdown** arms, **Universal Robots** cobots. `✓`

## 6. Safety Envelope & Criticality
**Medium.** The dominant failure mode is **food contamination** — microbial, allergen, or foreign-body (metal/plastic shed from the robot) — leading to **recalls, illness outbreaks, and brand damage**, not immediate death, which is why it sits below surgical/automotive (Critical). Secondary risk is **worker safety** (cobots, sharp tools in meat cutting). The V&V burden is therefore **hygiene-centric**: EHEDG **cleanability validation**, HACCP/SSOP integration, food-contact-material certification & traceability, foreign-object-prevention design review. Software-assurance rigor is far lighter than IEC 62304/ISO 26262 domains.

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (manipulation/perception/soft-robotics/control), this vertical **adds**:
- **Valued degrees:** **Food Engineering / Food Science & Technology**, Agricultural/Biosystems Engineering, Packaging Engineering rise to first-class alongside ME/Mechatronics with a hygienic-design focus.
- **Domain credentials:** **HACCP certification**, **EHEDG hygienic-design training**, **PCQI** (FSMA Preventive Controls Qualified Individual), FSSC 22000 / GFSI auditor literacy, food-safety (e.g. ServSafe) basics.
- **Feeder capability profiles:** `manipulation-and-grasping`, `soft-robotics`, `computer-vision-3d-perception`, `tactile-force-sensing`, `whole-body-compliant-control`, `motion-planning-navigation`, `robot-foundation-models-vla`.
- **Conversion:** "manipulation/perception engineer + hygienic-design & food-safety (HACCP/EHEDG) literacy + food-material handling knowledge."

## 8. Trending & Notable `⏱ as of mid-2026`
**Physical-AI food-foundation models:** **Chef Robotics' Food Foundation Model (FFM)** powering a **bi-manual prep-table assembly** system (May 2026) and automating baked-goods/produce packing — specialized for wet/sticky/deformable variety where general VLAs struggle. **High-speed soft grippers** (sub-1 s pneumatic soft grippers; 2025 breadcrumb-oyster handling paper). **Meat/poultry primary-processing automation** — the hardest frontier (variable carcasses) — advanced by Marel/JBT Marel, BAADER, Scott Technology, Frontmatec; **Tyson has invested ~$500M** in automation. Synthetic-data-trained detection for cluttered food grasping. GFSI hygienic-design benchmarking (scopes JI/JII) now pulling equipment suppliers into audit scope. *(Re-research before publish.)* `⏱`

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** Chef Robotics · Dexterity · Soft Robotics Inc · Marel / JBT Marel · BAADER Group · GEA · Scott Technology · KUKA · FANUC · ABB · Universal Robots · Miso Robotics; food producers **Tyson, JBS, Cargill, Nestlé**.
- **Regulators:** **FDA** (FSMA) · **USDA FSIS** · EU EFSA / notified bodies.
- **Standards/scheme owners:** **NSF** · **3-A SSI** · **EHEDG** · ISO · **GFSI** (BRCGS / FSSC 22000 / SQF).

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B1 manufacturing** (cobot safety, palletizing), **B2 logistics** (packaging/palletizing), **B5 agriculture** (upstream harvest/grading), and pharma (shared hygienic/cleanroom design). Most-used platforms: **C1 fixed arm** (delta/SCARA for high-speed pick), **C8 soft/continuum** grippers, **C3 AMR** for in-plant intralogistics.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B15. Key standards (NSF/ANSI 169-2023, EHEDG Doc 8, EN 1672-2, EN ISO 14159, FDA 21 CFR 117 / 178.3570, USDA FSIS 9 CFR 416/417, IP69K/ISO 20653, ISO 22000) web-verified against 2024–2026 sources.*
