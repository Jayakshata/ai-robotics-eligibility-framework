# Per-Niche Profile — Quality, Yield & Defect Analytics

> **Applied-AI area profile (Analytics / Predictive AI, Area 2).** The industrial-data-science layer that models defect, inspection & yield data to find root cause, reduce defects and hold processes in statistical control — NOT the real-time inspection copilot (Area 1), NOT equipment-signal fault detection (the sibling niche). Standard 12-section template, adapted: eligibility is stats/DS/ML **+** a quality-engineering (ASQ CQE / Six Sigma) overlay; §9 is data / inspection-metrology / compute; §7 is the unified-visual-AD + conformal-UQ + causal-RCA frontier. Research-backed (mid-2026). `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Niche:** Quality, Yield & Defect Analytics · **Area:** Analytics / Predictive AI (non-embodied) · **Type:** `[F]` foundational
**Draws on:** industrial data science (statistics/ML) **+** quality-engineering (SPC/DOE/Six Sigma) domain · **Serves platforms (C):** line-/process-agnostic · **Verticals (B):** B1 manufacturing (core — semiconductors, electronics, automotive, aerospace, medical devices)

---

## 1. Definition & Scope
Modeling **defect, inspection, and process data** (measurements, yield/pass-fail, control-chart streams, wafer maps, defect images) to **find root cause, reduce defects, optimize yield, and hold processes in statistical control.** This is the **analytics / predictive-AI layer underneath quality** — an industrial-data-science core plus a quality-engineering (SPC/DOE/Six Sigma) domain overlay. **In scope:** statistical process control (SPC), design of experiments (DOE), Gauge R&R / measurement-systems analysis, process-capability studies, yield modeling, root-cause analysis, and defect-classification / inspection analytics (including vision models used *analytically* — e.g. wafer-map CNNs). **Out of scope:** the vision+LLM inspection **copilot**, an operator-facing real-time assistant (Area 1 — reference it, don't absorb it); and the health of the *process/asset* itself, i.e. equipment-signal anomaly/fault detection (the sibling Area-2 niche). This is quality of the **product**; that is health of the **process**.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Quality/Yield Data Analyst (Quality Engineer I) | Builds SPC charts, capability studies and defect-classification models on inspection/process data under supervision; runs DOEs others set up. |
| **L2** | Quality / Yield Data Scientist | Owns a defect-reduction or yield-improvement analysis end-to-end (data → SPC/DOE/model → root cause → a KPI move); designs and analyzes DOEs with process engineers. |
| **L3** | Senior Industrial Data Scientist / Yield & Quality Analytics Lead | Designs the quality-analytics architecture; makes classical-SPC-vs-ML and measurement-systems tradeoffs; sets validation and Gauge R&R discipline; mentors. |
| **L4/L5** | Staff / Principal — Quality & Yield Analytics | Sets the quality-analytics strategy and methodology; advances defect/yield modeling and uncertainty quantification; owns the data-backbone and model governance. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials
**The role = a statistics / data-science / ML core + a quality-engineering domain overlay `✓`.** The quantitative core is the harder-to-substitute half; employers hire from both directions but weight it — and, unlike Predictive Maintenance, the domain moat is the **quality body (ASQ CQE, Six Sigma)**, not the reliability bodies (SMRP/CRE/vibration).

**Acceptable undergraduate degrees** — Tier 1 (all co-strongest for this niche): **Industrial & Systems Engineering (Quality & Statistics track)** — the best-balanced, most-on-target single degree, with SPC, DOE, process capability and acceptance sampling as *named* core courses; **Statistics / Applied Statistics** — the methodological core (SPC and DOE *are* applied statistics); **Data Science / CS (ML)** — first-class for the increasingly deep-learning defect-classification half. Tier 2 (and often the *stated requirement* in the semiconductor-yield sub-vertical): **EE/ECE, Materials Science & Engineering, Chemical Engineering, Physics / Device Physics** — a yield engineer must reason about process physics, not just fit a model (Intel/Micron yield postings list exactly these) `✓`; **Applied Mathematics / Operations Research** with quality/SPC coursework `~`. *(Net vs the exemplar: ISE and Statistics move UP to co-Tier-1 here; the Tier-2 overlay is quality/process/semiconductor engineering, not mechanical/reliability.)*

**Highly-valued programs `✓`** — There is **no undergraduate degree literally titled "Quality/Yield/Defect Analytics"**; the on-target named paths are: **Georgia Tech — H. Milton Stewart School of ISyE, BS IE — Quality & Statistics concentration** (real codes: **ISYE 3039** *Methods of Quality Improvement*, **ISYE 4803/6413** *Design & Analysis of Experiments*, **ISYE 3030** *Basic Statistical Methods*; grad **ISYE 6405/6414**); and **Arizona State University — MEng, Quality, Reliability & Statistical Engineering** (online — the dedicated graduate program for this niche, 30 cr, can embed a Six Sigma Black Belt; the academic home of **Douglas Montgomery**, author of the field's standard SQC/DOE texts). For the ML-heavy analytics side, **Georgia Tech OMSA** is the affordable, industry-heavy anchor (as in the PdM exemplar). Also strong ISE/statistics-with-quality departments: **Penn State, Purdue, Ohio State, Texas A&M, Wisconsin–Madison, Virginia Tech** `~`. For the semiconductor sub-vertical, a **Semiconductor Processing graduate certificate** (**ASU**, Texas A&M, UAlbany) supplies the process-physics overlay.

**Acceptable postgraduate degrees `✓`** — **MS Statistics / Applied Statistics** (the methodological deep end); **MS Industrial & Systems Engineering** (quality/statistics focus); **MS Analytics / Data Science** (e.g. **GT OMSA**) for the ML-heavy defect side; **MEng Quality, Reliability & Statistical Engineering** (ASU); **PhD Statistics / ISE** for method-development / principal roles and semiconductor R&D yield science. In the semiconductor data-science sub-vertical a master's is increasingly *required* — a **Micron Data Scientist** posting states "Master's in Industrial Engineering, Data Analytics, Data Science, or related + 3 years." `✓`

**Highly-valued certifications `✓`** — pair a **DS/ML cert** with a **quality-body cert** (the moat):
- *Analytics:* DeepLearning.AI **ML** + **Deep Learning** specializations (the latter for the CNN/defect-classification side); a cloud ML cert (**AWS ML Engineer–Associate MLA-C01** — the older **ML-Specialty MLS-C01 retired Mar 2026**; **Google PMLE** — strongest MLOps; **Azure DP-100**). *Tool cert:* **JMP STIPS** (Statistical Thinking for Industrial Problem Solving, SAS/JMP) — JMP is the de-facto statistical tool in semiconductor/quality analytics, so this is the tool-cert analog here.
- *Domain (the moat):* **ASQ CQE — Certified Quality Engineer** (the load-bearing cert; 8 yrs experience with education waivers, BoK Section VI = SPC, DOE, regression, hypothesis testing, process capability); **ASQ CSSBB — Certified Six Sigma Black Belt** (the project-leader moat; 3 yrs + a signed-off project); **CSSGB — Green Belt** (the working-analyst level); **CQPA / CQIA** (no prerequisites — the L1 signal); **ASQ Master Black Belt** (principal / strategy). **IASSC ICGB/ICBB** is the vendor-neutral, exam-only alternative — ASQ is more valued in regulated / process-engineering shops. There is **no dominant semiconductor-yield-specific certification** `✓`.

**Experience & portfolio** — L1 (0–2 yr): a **defect-classification model on WM-811K** (wafer maps) or a **yield/pass-fail model on SECOM/Bosch**, plus a **SPC control-chart + process-capability (Cpk)** study and a **DOE (factorial/RSM)** in JMP or Python; signal cert **CQPA/CQIA**, Six Sigma Green Belt, or **JMP STIPS**. L2 (2–4 yr): **owns a defect-reduction or yield-improvement project** tied to a real KPI (yield %, DPPM, Cpk, scrap $); runs DOEs with process engineers; Green/Black Belt, working toward CQE. L3 (5–8 yr): **led a plant/fab quality- or yield-analytics program**; deep in ≥1 of SPC / DOE / defect-classification-ML / RCA; **CSSBB and/or CQE**. L4/L5 (8+ yr): sets quality-analytics strategy; **ASQ Master Black Belt / CQE**, or a **PhD** for method-development.

## 4. Skill Profile (JD-style)

**Required / must-have**
- **Python** (pandas, NumPy, **scikit-learn**) + **SQL**
- **Applied statistics** — hypothesis testing (t-test, ANOVA), regression, probability distributions
- **Statistical process control (SPC)** — control charts, **process capability (Cp, Cpk, Pp, Ppk)**, acceptance sampling
- **Design of experiments (DOE)** — factorial / fractional-factorial / response-surface (RSM), robust parameter design
- **Measurement-systems analysis** — **Gauge R&R**, MSA
- **Root-cause analysis** — FMEA / 8D / DMAIC; a Pareto of defect / yield limiters
- **ML for defect classification** — regression / classification / clustering; CNNs on wafer/defect images
- **Communication** — translate an analysis into a corrective action for process/ops engineers

**Preferred / differentiating**
- **Deep learning for vision** — CNNs, **one-class / unsupervised anomaly detection** (autoencoders), defect segmentation
- **Semiconductor process-physics** fluency (FDC, inline metrology, defect-to-sort correlation, yield kill ratios) for the yield sub-vertical
- Cloud + **MLOps** (Docker/K8s, model monitoring/retraining)
- **JMP / Minitab** power use; **uncertainty quantification / conformal prediction**
- A **domain cert** (ASQ CQE / Six Sigma Black Belt)

**Tools & tech stack** — *Languages:* Python (+ R) · *Stats & quality:* **JMP** (semiconductor/quality default), **Minitab**, Statgraphics, statsmodels, SciPy · *ML / vision:* scikit-learn, XGBoost/LightGBM, PyTorch, **Anomalib**, **PyOD** · *Inspection platforms (analytics runs beside them):* **Cognex** VisionPro DL / ViDi, **MVTec HALCON** · *Semiconductor yield suites:* **PDF Solutions Exensio**, **KLA Klarity**, Applied Materials · *Data backbone:* SQL, historians, **OPC UA / MQTT (Unified Namespace)** · *Benchmarks / datasets:* **WM-811K** (wafer maps), **SECOM**, **Bosch**, **MVTec AD / AD 2** · *Domain:* SPC / DOE / Gauge R&R, FMEA / 8D / DMAIC, Six Sigma

**Bar by tier** — L1: builds SPC charts, capability studies & defect-classification models on inspection/process data · L2: ships a defect-reduction or yield analysis tied to a KPI · L3: architects the quality-analytics stack, deep in ≥1 area (SPC, DOE, defect-ML, or RCA) · L4/L5: sets quality-analytics strategy, owns data-backbone & governance.

## 5. Core Subject List `✓`
- **Foundational maths & CS:** probability & statistics · linear algebra · Python + data stack · classical ML · deep learning (**CNNs** for images).
- **Core (statistics & quality methods):** hypothesis testing / ANOVA / regression · **statistical process control** (control charts, **process capability Cp/Cpk/Pp/Ppk**, acceptance sampling) · **design of experiments** (factorial, fractional-factorial, **response-surface methodology**, robust parameter design) · **measurement-systems analysis / Gauge R&R**.
- **Niche-specific (defect & yield analytics):** defect classification (wafer-map CNNs, surface-defect models) · **one-class / unsupervised anomaly detection** on "good" parts · yield modeling (pass/fail, yield-limiter Pareto, virtual metrology) · **root-cause analysis** (FMEA, 8D, DMAIC, causal inference).
- **Frontier / advanced `⏱`:** unified multi-class & few-/zero-shot visual AD · **uncertainty quantification / conformal prediction** · causal AI for root cause · diffusion synthetic defect data · generative/agentic AI in the quality *workflow*.
- **Data eng & domain:** SQL & the manufacturing data backbone (**OPC UA / MQTT / Unified Namespace**, historian feeds), MLOps · the **quality-engineering body of knowledge** (ISO 9001 / IATF 16949 `~` context, SPC/DOE/MSA, Six Sigma DMAIC); for semiconductors, process physics (FDC, inline metrology).

## 6. Training Programme Design & Duration `✓`
Analytics + quality-domain programme; ~1,300 learning hours over 5 phases — phase 2 is the SPC/DOE/Gauge-R&R quality core, phase 3 the defect & yield ML — landing at **~9–11 months full-time**, the same envelope as the shared duration model (`_grounding-reference.md` §D).

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Python/data stack, statistics, classical ML | 2.0 mo | 6 mo | 300 | Data & ML fluency |
| 2. **SPC, capability & DOE** | Control charts, Cp/Cpk, DOE/RSM, Gauge R&R | 2.0 mo | 5–6 mo | 280 | Hold & improve a process statistically |
| 3. **Defect & yield analytics (ML)** | Defect classification, one-class anomaly detection, yield modeling, RCA | 2.0 mo | 6 mo | 300 | The niche core |
| 4. Data eng & MLOps | SQL & backbone (OPC UA/MQTT), deploy/monitor | 1.5 mo | 4 mo | 200 | A running, monitored pipeline |
| 5. Capstone + portfolio | WM-811K defect classifier + a SPC/DOE case study + a yield model + a quality dashboard | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,300 | Junior quality/yield data scientist |

*For an existing data scientist, phases 2–3 (the quality-methods core + defect/yield ML) compress to ~4–6 months; a working quality engineer instead closes the Python/ML gap in phases 1 and 3.*

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** `🆕` = 2025–26 release.
- **Unified multi-class & few-/zero-shot visual anomaly detection (the headline 2025 shift):** one model covers *all* product types, now competitive with per-SKU specialists — the high-mix cold-start unlock. **🆕 Dinomaly / Dinomaly2** (CVPR 2025 / arXiv 2510.17611, Oct 2025 — first multi-class to match single-class SOTA, ~99.9% image-AUROC on MVTec-AD `~`) · **🆕 INP-Former / INP-Former++** (intrinsic normal prototypes) · **MambaAD** (the 2024 baseline they beat) · zero-/few-shot via CLIP: **WinCLIP**, **AnomalyCLIP**. Production baselines (**PatchCore, EfficientAD, PaDiM, DRAEM**) all ship in **🆕 Anomalib 2.2.0** (Intel, Oct 2025 — 23 algorithms, OpenVINO edge export).
- **Uncertainty quantification & conformal prediction (the fastest-rising *rigor* theme):** bound the risk instead of emitting a bare point estimate — point predictions cause out-of-control escapes. **🆕 Conformal segmentation for surface-defect detection with statistical guarantees** (arXiv 2504.17721, 2025) · **🆕 UQ + MLOps for semiconductor predictive quality** (arXiv 2605.07752 `~`).
- **Causal AI for root-cause (correlation → cause):** go past what SPC merely flags to the true cause. **Databricks** causal-AI manufacturing-RCA pattern · **Ensemble Bayesian Networks** for defect RCA · **Causal Bayesian Network + Knowledge-Graph** hybrids (inject expert knowledge, scale past spurious edges) · **🆕 PRIM** (meta-learned Bayesian RCA, arXiv 2605.08786 `~`).
- **Diffusion synthetic defect data (the fix for class imbalance):** manufacture rare-defect images so the classifier sees them. **🆕 SeaS** (ICCV 2025) · **🆕 Dual-Interrelated Diffusion Model** (CVPR 2025) · **🆕 MAGIC** (mask-guided anomaly inpainting, arXiv 2507.02314) · **G2LGAN** (imbalanced wafer maps) — reported recall lifts on steel defects ~0.66→0.91 `~` (paper-reported).
- **Time-series foundation models for virtual metrology & yield-trend forecasting (the non-vision path):** forecast process parameters and yield. **🆕 Amazon Chronos-2** (arXiv 2510.15821, Oct 2025 — native multivariate + covariate, the industrial unlock) · **🆕 Google TimesFM 2.5** · **🆕 Salesforce Moirai-2**. Same TSFM wave as predictive-maintenance.
- **ML-augmented SPC & semiconductor yield modeling (the classical backbone, not replaced):** keep control charts central, add ML to flag drift earlier (~3–12 units ahead `~`) and to monitor high-dimensional Industry-4.0 processes · **🆕 two-step yield ML** (screen FDC outliers, then predict yield on the good data only — *Int. J. Production Research*, 2025). The Six-Sigma desktop tools are absorbing ML in place: **🆕 Minitab 22** (CART / random-forest / gradient-boosting + an AI data-assistant) and **JMP** (R/Python integration) — learn ML *and* Minitab, not instead of.
- **Multimodal-LLM defect reasoning & agentic RCA (where Area 2 meets Area 1):** still immature. **🆕 MMAD** (arXiv 2410.09453, ICLR 2025 — first full-spectrum MLLM-in-industrial-AD benchmark; best model ~74.9%, "far short of industrial requirements") · **🆕 SemiFA / WaferSAGE** (autonomous semiconductor failure-analysis reports, arXiv 2604.13236 / 2604.27629 `~`) · **Sight Machine** natural-language plant-data querying.
- **Platform & data-backbone shifts:** **🔻 Amazon Lookout for Vision retired 31 Oct 2025** (AWS steers to SageMaker / Bedrock to build custom) · mature semiconductor yield suites **PDF Solutions Exensio**, **KLA Klarity**, Applied Materials · no-code data-centric inspection (**Landing AI / LandingLens**, **Averroes.ai**, **Instrumental**, **Sight Machine**) · the **Unified Namespace** (OPC UA + MQTT / Sparkplug B) carrying per-tag **Good/Bad quality metadata** — the enabling plumbing, shared with predictive-maintenance.

*Net trend: classical SPC / DOE / Gauge-R&R + purpose-built CNN and one-class anomaly models run production quality analytics today; unified & few-/zero-shot visual AD, conformal UQ, causal RCA and diffusion synthetic data are the growth edge; generative/agentic AI is only entering the workflow. Counter-signal: the hard benchmarks are unsolved — SOTA sits **<60% AU-PRO on MVTec AD 2** and the best MLLM scores **~75% on MMAD** ("far short of industrial requirements") — and headline defect-reduction / yield / accuracy figures (Averroes ~$18M/yr, Foxconn +3% first-pass yield, Landing AI 1B inferences at 99.99% uptime) are vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | **Defect classification on WM-811K** (wafer maps, 9 patterns, extreme class imbalance) | The defect-classification pipeline; macro-F1 / rare-class recall |
| Foundational | **SPC + process-capability + Gauge R&R** on a real measurement stream | Control charts, Cp/Cpk/Pp/Ppk, %R&R accept/reject; a capable & measurable verdict |
| Applied | **DOE: factorial → response-surface** to optimize a process response (JMP / Python) | Experimental design + ANOVA; an optimized, confirmed setpoint |
| Applied | **Yield / pass-fail model on SECOM or Bosch** (heavy feature selection) | Yield modeling on imbalanced tabular data; a yield-limiter Pareto |
| Advanced | **One-class anomaly detection with Anomalib on MVTec-AD 2** | Train-on-good-only inspection; AUROC / AUPRO / **AUPIMO** under a false-alarm budget |
| Capstone | End-to-end **quality-analytics pipeline**: inspection/process data → SPC monitoring + DOE-tuned setpoints → defect/yield model → **root-cause + a quality dashboard** | The full stack; a demoable defect-reduction / yield-improvement system |

## 9. Required Setup / Data / Metrology & Inspection / Compute `✓` (not robots)
- **Compute:** a GPU workstation (or cloud) for CNN / anomaly-detection training; the **Python stats+ML stack**; a desktop **SPC / Six-Sigma stat tool** — **JMP** (semiconductor/quality default) or **Minitab**.
- **Data infrastructure:** SQL / a manufacturing data backbone (**OPC UA / MQTT / Unified Namespace**, historian feeds carrying per-tag Good/Bad quality status); MLOps (Docker, model monitoring/retraining).
- **Datasets & benchmarks:** **WM-811K** (wafer-map defects — the C-MAPSS analog for this niche), **SECOM** (yield / pass-fail), **Bosch Production Line** (defect prediction), and the vision-AD ladder **MVTec AD → VisA → 🆕 MVTec AD 2** (the new hard benchmark), **MVTec LOCO** (logical anomalies), **Real-IAD** — start here before fab/line data.
- **Metrology & inspection (for hands-on):** an industrial camera + controlled lighting for a surface-defect rig, OR access to a plant's **AOI / inspection / inline-metrology** feed and measurement (CMM/gauge) data; the **Cognex VisionPro DL / MVTec HALCON** or open **Anomalib** stack beside it.
- **Optional platform sandbox:** a semiconductor **yield-analytics suite** (**PDF Solutions Exensio**, **KLA Klarity**) or a no-code inspection platform (**LandingLens**) for the end-to-end story.

## 10. Partnerships & Ecosystem
- **Professional & standards bodies:** **ASQ** (CQE, Six Sigma CSSBB/CSSGB, CQPA/CQIA, Master Black Belt) · **IASSC** (vendor-neutral Lean Six Sigma) · **SEMI** (SEMI University, semiconductor standards) · ISO 9001 / IATF 16949 `~` (quality-system context).
- **Academic quality/statistics centers:** **Georgia Tech ISyE** (Quality & Statistics) · **ASU** (MEng QRSE — Montgomery; Semiconductor Processing cert) · Penn State · Purdue · Texas A&M.
- **Vendors / platforms:** machine vision — **Cognex, Keyence** (together ~half the market), **MVTec** (HALCON; the field's benchmark datasets); inspection-AI — **Landing AI, Averroes.ai, Instrumental, Sight Machine, Elementary**; semiconductor yield — **PDF Solutions (Exensio), KLA (Klarity), Applied Materials**.
- **Stats tooling & data infrastructure:** **JMP (SAS)** · **Minitab** · **Anomalib (Intel)** / OpenVINO · NVIDIA Metropolis · the **Unified Namespace** stack (MQTT / Sparkplug B, OPC UA).
- **Employers:** semiconductor fabs (**Intel, Micron, TSMC**) · electronics/PCB, automotive, aerospace, medical-device manufacturers (**Ametek** and peers) · machine-vision & inspection-AI firms · quality consultancies.

## 11. Assessment & Validation
- **Model & method metrics** as portable evidence: **defect classification** (macro-F1 / rare-class recall on WM-811K under class imbalance), **visual anomaly detection** (image/pixel AUROC, **AUPRO**, **AUPIMO** — report the *false-alarm* number, not just accuracy), **yield modeling** (precision/recall on pass-fail; a yield-limiter Pareto), **DOE** (a confirmed optimum with validated ANOVA effects), **process capability** (Cp/Cpk/Pp/Ppk) and **Gauge R&R** (%R&R).
- **Portfolio:** a defect-reduction or yield-improvement project tied to a real KPI (yield %, DPPM, Cpk, scrap $) + a system-design interview (inspection/process data → SPC/DOE/model → root cause → action) + **quality-domain literacy** (can they turn an analysis into a corrective action and a control plan?).
- **Domain-credential & measurement check (niche-specific):** a **Six Sigma / ASQ CQE**-level command of SPC, DOE and capability; and — the check others skip — **measurement-systems trust**: can they prove the gauge before trusting the data (Gauge R&R), and attach a *false-alarm cost* to an inspection model before claiming it works?

## 12. Adjacent & Related Niches
Sits in **Analytics / Predictive AI (Area 2)** alongside `Predictive Maintenance & Reliability`, `Process & Production Optimization`, `Forecasting & Planning Analytics`, and `Anomaly & Fault Detection`; pairs with **A1 sensor/vision perception** (the inspection imaging it models analytically) and **A10 data infrastructure**; meets **Area 1** where the vision+LLM inspection **copilot** and agentic root-cause enter the workflow. **Boundary to hold:** the niche most easily confused with it is **`Anomaly & Fault Detection`** — that is health of the **process/asset** (equipment-signal anomalies); this is quality of the **product** (defects, yield, conformance). And the real-time inspection *copilot* is **Area 1**, not this — this is the SPC / DOE / defect-and-yield *analytics* underneath. Its home vertical is **B1 manufacturing** (semiconductors, electronics, automotive, aerospace, medical devices). (Reference only — seniority ladder is in §2.)

---
*Applied-AI area profile. Template: `phase-1/_TEMPLATE.md` (v3, adapted). Area plan: `applied-ai-taxonomy.md`. §7 stamped mid-2026 — re-research before publish. Named products/models are fast-moving; verify at source.*
