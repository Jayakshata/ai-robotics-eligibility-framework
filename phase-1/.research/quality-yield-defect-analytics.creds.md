> Provenance: background research agent (creds pass) for the applied-AI niche **Quality, Yield & Defect Analytics** (Area 2 — Analytics / Predictive AI), mid-2026. Raw agent report, preserved verbatim. Confidence: `✓` grounded against a fetched/searched source · `~` inferred / synthesis / single-source paraphrase · `⏱` time-sensitive.

I have comprehensive coverage across all six requested items. Compiling the final report.

---

# Quality, Yield & Defect Analytics — Credentials & Eligibility

*Scope: the **analytics / predictive-AI layer underneath quality** — root-cause and reduction of defects, yield optimization, statistical process control (SPC), design of experiments (DOE), Gauge R&R / measurement-systems analysis, process-capability studies, and defect-classification / inspection analytics (including vision models used **analytically**, e.g. wafer-map CNNs). The hire is an **industrial data scientist / quality engineer / yield engineer**, not a roboticist or an LLM-agent engineer.*

**MECE boundary (kept strict):**
- The **vision + LLM inspection COPILOT** (an operator-facing assistant that flags defects in real time) is **Area 1 — Engineering/Inspection Copilots**. This report is the **statistics/ML that models defect and yield data**. Reference the copilot; do not absorb it. `✓`
- Distinct from **Anomaly & Fault Detection** (sibling Area-2 niche): that is health of the **process / asset** (equipment signals); this is quality of the **product** (defects, yield, conformance). `~`
- Distinct from **Predictive Maintenance** (the signed-off exemplar): PdM's domain moat is the **reliability** bodies (SMRP/CMRP, ASQ CRE, ISO 18436 vibration); **this niche's moat is the QUALITY bodies — ASQ CQE and Six Sigma.** That swap is the single most important niche-specific finding below. `✓`

**One-line shape:** a **statistics / DS / ML core + a quality-engineering (and, for the semiconductor sub-vertical, a process-physics) domain overlay.** The quantitative core is the harder-to-substitute half; the ASQ/Six Sigma domain credential is the moat.

---

## 1. Acceptable Undergraduate Degrees (tiered; strongest for THIS niche)

The niche splits into two employer contexts that tier degrees differently, so I give both. The shared truth: **SPC, DOE, Gauge R&R, and Six Sigma are taught inside Industrial & Systems Engineering (ISE) and Statistics departments** — which is why, unlike Predictive Maintenance (where ISE was Tier 2), **ISE and Statistics move UP to co-Tier-1 for this niche.** `✓` [Georgia Tech ISyE Quality & Statistics concentration](https://www.isye.gatech.edu/academics/bachelors/industrial-engineering/curriculum/quality-statistics-concentration)

**Tier 1 — strongest, on-target single degrees**
- **Industrial & Systems Engineering (Quality & Statistics track)** `✓` — the best-balanced, most-on-target degree: quality improvement, SPC, DOE, process capability and acceptance sampling are named core courses (see §2). A BS in Industrial Engineering is the explicitly-required degree in real quality-engineer postings. [GT ISyE](https://www.isye.gatech.edu/academics/bachelors/industrial-engineering/curriculum/quality-statistics-concentration)
- **Statistics / Applied Statistics** `✓` — the methodological core; SPC and DOE *are* applied statistics. The niche's canonical textbooks (Montgomery, *Introduction to Statistical Quality Control*; *Design and Analysis of Experiments*) are written by a **Regents' Professor of Industrial Engineering at ASU**. [Montgomery / Google Books](https://books.google.com/books/about/Introduction_to_Statistical_Quality_Cont.html?id=oh7zDwAAQBAJ)
- **Data Science / Computer Science (ML)** `✓` — first-class for the *defect-classification* half, which is going deep-learning (wafer-map CNNs, autoencoders). Semiconductor "AI & Data Analysis" and "Data Scientist" roles want Python/ML on top of the statistics. [TSMC AQSD role (via search)](https://careers.tsmc.com/en_US/careers/JobDetail/AI-Data-Analysis-Engineer-Dept-AQSD-Div-IMC/5302)

**Tier 2 — qualifying, and the domain overlay (often *required* in the semiconductor-yield sub-vertical)**
- **Electrical/Electronic & Computer Engineering (EE/ECE)**, **Materials Science & Engineering**, **Chemical Engineering**, **Physics / Device Physics** `✓` — for **semiconductor yield/defect analytics** these physical-science degrees are frequently the *stated requirement*, because a yield engineer must reason about process physics, not just fit a model. Intel/Micron yield postings list "B.S. or M.S. in Electrical Engineering, Materials Science, Chemical Engineering, Physics or related." [Micron Yield Enhancement Engineer / Built In](https://builtin.com/job/yield-enhancement-engineer/4391999)
- **Applied Mathematics / Operations Research** `~` — strong quantitative grounding; qualifying with quality/SPC coursework or a project.

**The bilingual ideal `~`:** a quant core (Statistics/ISE/DS) **+** the process domain (either quality-engineering coursework, or — for semiconductors — an EE/Materials/ChemE base). A pure DS degree with *no* process domain is weakest in the semiconductor sub-vertical; an ISE/Stats degree is the safest single bet for general discrete/process manufacturing (automotive, aerospace, medical devices, electronics assembly).

**Net vs the exemplar:** PdM ranked DS/Stats/CS Tier-1 and ISE Tier-2; **this niche promotes ISE (Quality & Statistics) and Statistics to Tier-1**, and its Tier-2 overlay is **quality/process/semiconductor** engineering rather than **mechanical/reliability** engineering. `✓`

---

## 2. Named University Programs / Courses (real course codes)

**Plainly: there is no undergraduate degree literally titled "Quality/Yield/Defect Analytics."** `✓` The closest dedicated things are (a) an **ISE Quality & Statistics concentration**, and (b) at graduate level, **ASU's MEng in Quality, Reliability & Statistical Engineering** — the flagship for this niche.

**Georgia Tech — H. Milton Stewart School of ISyE** (the strongest named undergrad path; real course codes) `✓`
- **BS IE — Quality & Statistics concentration.** Depth courses: **ISYE 3039** *Methods of Quality Improvement* (quality-system requirements, **designed experiments, process-capability analysis, measurement capability, statistical process control, acceptance sampling**), **ISYE 4803/6413** *Design & Analysis of Experiments* (ANOVA, full/fractional factorials, orthogonal arrays, response-surface methodology, robust parameter design). Foundation: **ISYE 3030** *Basic Statistical Methods*. [GT ISyE concentration](https://www.isye.gatech.edu/academics/bachelors/industrial-engineering/curriculum/quality-statistics-concentration) · [GT ISYE course catalog](https://catalog.gatech.edu/coursesaz/isye/)
- Graduate courses that map exactly to this niche: **ISYE 6401** *Statistical Modeling and Design of Experiments*, **ISYE 6405** *Statistical Methods for Manufacturing Design and Improvement* (fractional factorials, response-surface methods), **ISYE 6414** *Statistical Modeling and Regression Analysis*. [GT catalog](https://catalog.gatech.edu/coursesaz/isye/)

**Arizona State University — MEng, Quality, Reliability & Statistical Engineering (online)** `✓` — **the dedicated graduate program for this niche.** 30 credit hours (15 core + 12 emphasis electives + applied project), GRE not required; admits engineering/science/math BS holders with a calculus sequence. A program of study **can embed a Six Sigma Black Belt** alongside the degree. ASU IE is the academic home of **Douglas Montgomery**, author of the field's standard SQC/DOE texts. [ASU Online MEng QRSE](https://asuonline.asu.edu/online-degree-programs/graduate/master-engineering-area-study-quality-reliability-and-statistical/)

**Other named, strong ISE/Statistics programs (for SPC/DOE/quality) `~`:** Penn State (DOE and multivariate SPC research strength), Purdue (Edwardson School of IE), Ohio State, Texas A&M, Wisconsin–Madison, Virginia Tech — all mid-to-top ISE departments with quality/statistics faculty. [US News Industrial Engineering rankings](https://www.usnews.com/best-colleges/rankings/engineering-doctorate-industrial-manufacturing)

**Reputable university MOOC / certificate path (name-brand, credit-optional) `✓`:**
- **Kennesaw State University — Six Sigma Yellow → Green → Black Belt Specializations (Coursera).** Sequential; a peer-reviewed capstone at Green Belt. **Caveat, stated by KSU:** completing the specialization is **not itself "professional accreditation"** — it prepares you for one (e.g., an ASQ exam). [Kennesaw Six Sigma GB](https://www.kennesaw.edu/massive-open-online-courses/courses/six-sigma-green-belt-specialization.php) · [Coursera](https://www.coursera.org/specializations/six-sigma-green-belt)
- **Georgia Tech OMSA** (Online MS Analytics) — affordable, industry-heavy analytics master's (same anchor used in the PdM exemplar). `✓`

**For the semiconductor-yield sub-vertical (domain overlay certificates) `✓`:** **ASU Semiconductor Processing Graduate Certificate**, plus similar named graduate certificates at **Texas A&M**, **UAlbany**, and **UCF** — these supply the process-physics domain that pairs with the statistics core. [ASU Semiconductor Processing cert](https://asuonline.asu.edu/online-degree-programs/certificates/semiconductor-processing-graduate-certificate/)

---

## 3. Acceptable Postgraduate Degrees — and can a portfolio outweigh a grad degree?

**Acceptable postgraduate degrees `✓`**
- **MS in Statistics / Applied Statistics** — the methodological deep end (SPC, DOE, regression, multivariate).
- **MS in Industrial & Systems Engineering** (quality/statistics or analytics focus).
- **MS in Analytics / Data Science** (e.g., **GT OMSA**) — for the ML-heavy defect-analytics side.
- **MEng Quality, Reliability & Statistical Engineering** (ASU) — the on-target professional master's.
- **PhD in Statistics / ISE** — for method-development / principal roles and for semiconductor R&D yield science.

Real postings confirm the grad-degree pull in the data-science sub-vertical: a **Micron Data Scientist** role requires a **"Master's degree in Industrial Engineering, Data Analytics, Data Science, or a related field and 3 years of experience."** `✓` [Micron Data Scientist (via search)](https://careers.micron.com/careers/job/41823376-data-scientist-singapore-singapore?domain=micron.com)

**Can a portfolio outweigh a graduate degree? — split answer `~`**
- **General manufacturing quality analytics (L1–L2): yes.** These roles gate on a **BS in engineering + demonstrated competence**, and explicitly accept an **ASQ certification in lieu of / alongside the degree** ("Bachelor's degree required in STEM fields, and ASQ certification accepted"). A portfolio of a SPC-chart + DOE case study + a defect-classification model, plus a Six Sigma Green Belt, is a credible substitute for a master's at entry. `✓` [Manufacturing Data Scientist requirements (ZipRecruiter aggregate)](https://www.ziprecruiter.com/Jobs/Manufacturing-Data-Scientist)
- **Semiconductor-yield data-science and senior/principal roles: less so.** Here employers increasingly require an **MS** (see Micron above), because the process-physics + advanced-statistics bar is high. A portfolio helps but rarely *replaces* the master's for the titled "Data Scientist, Yield" role. `~`
- **Cross-cutting `~`:** the **domain credential (ASQ CQE / Six Sigma Black Belt)** is the piece a portfolio *cannot* fully replicate at senior levels — it is experience-gated and employer-recognized (see §4). So the realistic substitution is *portfolio + domain cert ≈ grad degree at L1–L2*, not *portfolio alone*.

---

## 4. Named Certifications That Carry Weight (the ASQ / Six Sigma moat)

Pair a **DS/ML cert** (the analytics half) with a **quality-body cert** (the moat). The quality bodies here are **ASQ** (American Society for Quality) and **IASSC** — the direct analog to SMRP/ASQ-CRE in Predictive Maintenance.

### A. Domain moat — ASQ & Six Sigma (the differentiator)

| Cert | Body | What it certifies | Prerequisites `✓` | Where it sits |
|------|------|-------------------|-------------------|---------------|
| **CQE — Certified Quality Engineer** | **ASQ** | The load-bearing cert for THIS niche. Body of Knowledge **Section VI Quantitative Methods & Tools (34 Q)** = **SPC, probability, regression, hypothesis testing, DOE, process capability (Cp, Cpk, Cpm, Pp, Ppk)**; plus product/process control, continuous improvement, reliability, risk. | **8 yrs** on-the-job experience (**3 in a decision-making role**); education waivers (**BS −4 yrs, MS/PhD −5 yrs**; associate −2; only one waiver). 175-Q open-book exam; ~$550 initial / $350 retake. | **The senior domain moat.** [ASQ CQE](https://www.asq.org/cert/quality-engineer) · [CQE BoK (Quantitative Methods)](https://cqeacademy.com/cqe-body-of-knowledge/quantitative-methods-tools/) |
| **CSSBB — Certified Six Sigma Black Belt** | **ASQ** | DMAIC mastery, applied statistics, DOE, SPC, leads improvement projects. | **3 yrs** experience in the Six Sigma BoK **+ 1 completed project with signed affidavit (or 2 projects)**. No Green Belt prerequisite. Open-book; 3-yr recert. | **The project-leader moat.** [ASQ CSSBB](https://www.asq.org/cert/six-sigma-black-belt) |
| **CSSGB — Certified Six Sigma Green Belt** | **ASQ** | DMAIC tools, basic statistics, works within a BB-led team. | **3 yrs** work experience in the Six Sigma BoK. | **Mid / working-analyst.** [ASQ CSSGB](https://www.asq.org/cert/six-sigma-green-belt) |
| **CMBB — Master Black Belt** | **ASQ** | Enterprise-level Six Sigma strategy, coaching BBs. | Hold **current CSSBB** + pass a **portfolio review** with **5 yrs as BB/MBB OR 10 completed BB projects**. | **Principal / strategy.** [ASQ MBB](https://www.asq.org/cert/master-black-belt) |
| **CMQ/OE — Certified Manager of Quality / Organizational Excellence** | **ASQ** | Quality strategy, leadership, supplier/financial measures (management track, not analytics). | ~**10 yrs** experience (senior-leader credential). | **Quality-management ladder (adjacent).** [ASQ cert FAQ](https://www.asq.org/cert/faq/faq-cert-req) |
| **CQPA / CQIA — Quality Process Analyst / Quality Improvement Associate** | **ASQ** | Entry-level quality tools and process analysis. | **No formal education/experience prerequisites** (full-time paid work recommended). | **Entry (L1) signal.** [ASQ CQPA](https://www.asq.org/cert/quality-process-analyst) · [ASQ CQIA](https://www.asq.org/cert/quality-improvement-associate) |
| **Lean Six Sigma GB/BB (ICGB/ICBB)** | **IASSC** | Same DMAIC BoK as ASQ, **knowledge exam only**. | **No experience and no project requirement** — vendor-neutral, exam-only, closed-book. Cheaper/faster than ASQ. | **Vendor-neutral alternative;** ASQ is more valued in regulated/process-engineering shops. [IASSC vs ASQ](https://iassc.org/question/what-is-the-difference-between-the-asq-and-iassc-body-of-knowledge/) |

**Key ASQ-vs-IASSC distinction `✓`:** ASQ ties certification to **demonstrated work + a real project** (an affidavit); IASSC certifies **exam knowledge only**. ASQ's CSSGB/CSSBB is "generally more valued in regulated industries, process-engineering roles, and among employers that prioritize rigorous auditing and statistical competence." [IASSC](https://iassc.org/question/what-is-the-difference-between-the-asq-and-iassc-body-of-knowledge/)

### B. Tool credential specific to this niche (JMP dominates quality/semiconductor analytics)

- **JMP Certified Associate: Statistical Thinking for Industrial Problem Solving (STIPS)** — issued by **SAS/JMP**; covers statistical thinking, SIPOC/process mapping, KPIs, applied statistics for engineers. There is a **free STIPS course** (also on Coursera) that requires no JMP license for the intro modules. **JMP is the de-facto statistical tool in semiconductor quality/yield**, so this is the tool-cert analog to a cloud-ML cert here. `✓` [JMP STIPS cert](https://www.sas.com/en_us/certification/exam-content-guides/jmp-statistical-thinking.html) · [Free STIPS (Coursera)](https://www.coursera.org/learn/statistical-thinking-applied-statistics)

### C. Analytics / ML certs (the other half — reused from the shared grounding backbone) `✓`
- **DeepLearning.AI Machine Learning Specialization** (Ng/Stanford) — best entry ML credential; add **Deep Learning Specialization** for the CNN/defect-classification side.
- A **cloud ML cert**: **AWS Certified ML Engineer – Associate (MLA-C01)** (note: the older **ML-Specialty MLS-C01 retired Mar 2026**), **Google Professional ML Engineer** (strongest MLOps), or **Azure Data Scientist DP-100**. (Per `_grounding-reference.md`.)

### D. Semiconductor-yield-specific certification? — **No dominant one exists** `✓`
There is **no branded, employer-standard "yield engineering" certification.** SEMI offers a **Semiconductor Technician Certification** and **SEMI University** courses, and universities offer **Semiconductor Processing graduate certificates** (ASU, TAMU, UAlbany), but the moat in this sub-vertical is **degree (EE/Materials/Physics) + JMP + SPC/DOE fluency + ASQ/Six Sigma**, not a single yield cert. [SEMI University](https://www.semi.org/en/semi-university) · [ASU Semiconductor Processing cert](https://asuonline.asu.edu/online-degree-programs/certificates/semiconductor-processing-graduate-certificate/)

---

## 5. Experience & Portfolio Expectations by Tier

Named benchmark datasets are the **C-MAPSS analog** for this niche — the portable, employer-legible portfolio evidence:
- **WM-811K (LSWMD)** — 811,457 real-fab **wafer maps**, ~20% expert-labeled across **9 defect-pattern classes** (Center, Donut, Edge-Loc, Edge-Ring, Loc, Random, Scratch, Near-Full, None); strongly imbalanced. The standard **wafer-map defect-classification** benchmark. `✓` [WM-811K (Kaggle)](https://www.kaggle.com/datasets/sushnu/wm-811k-augmented-and-preprocessed-dataset) · [dataset explainer](https://github.com/makinarocks/awesome-industrial-machine-datasets/blob/master/data-explanation/WM-811K(LSWMD)/README.md)
- **SECOM (UCI)** — semiconductor process sensor data for **yield / pass-fail** modeling with heavy feature selection. `~`
- **Bosch Production Line Performance (Kaggle)** — large real manufacturing dataset for **defect / internal-failure prediction** on a production line. `~`

| Tier | Title (typical) | Experience | Portfolio / credential bar |
|------|-----------------|-----------|-----------------------------|
| **L1** | Junior Quality/Yield Data Analyst; Quality Engineer I | 0–2 yr | A **defect-classification model on WM-811K** or a **yield/pass-fail model on SECOM/Bosch**; a **SPC control-chart + process-capability (Cpk)** study; a **DOE (factorial/RSM)** analysis in JMP/Python. Signal cert: **CQPA/CQIA** or **Six Sigma Green Belt** or **JMP STIPS**. `~` |
| **L2** | Quality/Yield Data Scientist; Quality Engineer II | 2–4 yr | **Owns a defect-reduction or yield-improvement project end-to-end** tied to a real KPI (yield %, DPPM, Cpk, scrap $). Runs and analyzes **DOEs** with process engineers. **Six Sigma Green/Black Belt**; working toward **CQE**. `~` |
| **L3** | Senior Industrial Data Scientist; Yield/Quality Analytics Lead | 5–8 yr | **Leads a plant/fab yield or quality-analytics program**; deep in ≥1 of SPC / DOE / defect-classification-ML / RCA; sets validation and measurement-systems (Gauge R&R) discipline; mentors. **CSSBB and/or CQE**. `~` |
| **L4/L5** | Staff / Principal — Quality & Yield Analytics | 8+ yr | **Sets the quality-analytics strategy and methodology**; advances defect/yield modeling; owns data-backbone and governance. **ASQ Master Black Belt / CQE**, or a **PhD** for method-development roles. `~` |

*(Tier↔title↔years mapping mirrors the PdM exemplar's ladder and is a design recommendation, not a single-sourced fact — hence `~`. The certs, prerequisites, and datasets themselves are grounded.)*

---

## 6. Real Job-Posting Evidence (named employers; requirement phrasing)

**Semiconductor yield/defect (the highest-intensity sub-vertical):**
- **Intel — WLA Yield Defect Metrology Engineer.** Asks for "experience with **defect inspection and review tools (e.g., KLA/ONTO bright field, dark field, Automated SEM review)** and analyzing **defect-to-sort correlation, yield kill ratios, and spatial signatures**"; "**statistical analysis (t-test, ANOVA) and familiarity with JMP**." Degree: EE/Materials/Physics/ChemE. `✓` [Intel posting (via search)](https://www.indeed.com/q-Semiconductor-Yield-Defect-Engineer-jobs.html)
- **Micron — Yield Enhancement Engineer.** "**Bachelor's degree in Electrical & Electronics, Chemical, Materials Engineering, Material Science…**"; "**experience with statistical or scripting tools (e.g., JMP, Python, SQL)**"; "**Familiarity with SPC, DOE, FDC/EDA, defect inspection, or inline metrology tools**"; "Through daily analysis of **inline/param/probe/experiments data**, achieve the best-in-class **yield ramp**… Publishes a clear **Pareto of yield limiters**." `✓` [Micron / Built In](https://builtin.com/job/yield-enhancement-engineer/4391999)
- **Micron — Data Scientist (Manassas).** "**Master's degree in Industrial Engineering, Data Analytics, Data Science, or related + 3 years**"; "**develop predictive models using machine learning (regression, classification, clustering) to optimize manufacturing processes and improve product quality**"; "**apply data science… to solve yield issues and support defect reduction**." `✓` [Micron DS (via search)](https://careers.micron.com/careers/job/41823376-data-scientist-singapore-singapore?domain=micron.com)
- **TSMC — AI & Data Analysis Engineer (AQSD/IMC).** "developing online fab analysis platforms through **Big Data, Machine Learning, and Deep Learning** techniques for **online yield/defect analysis**." `✓` [TSMC careers (via search)](https://careers.tsmc.com/en_US/careers/JobDetail/AI-Data-Analysis-Engineer-Dept-AQSD-Div-IMC/5302)

**General manufacturing quality (discrete/process):**
- **Ametek — Sr./Senior Quality Engineer.** "**Bachelor's degree in Industrial Engineering** or other engineering discipline… 5+ years quality engineering." Requires **SPC, MSA, PFMEA, Gage R&R, PPAP, 8D/DMAIC**; "**Six Sigma Green Belt … and ASQ Certified Quality Engineer (CQE) are preferred qualifications.**" `✓` [Ametek Sr QE](https://jobs.ametek.com/job/Richmond-Sr_-Quality-Engineer-CA-94806/1381026200/)
- **Manufacturing Data Scientist (aggregate).** "assisting process engineers in **running and analyzing Design of Experiments (DOE)**"; "Intermediate **SPC/Data analysis** skills and proven ability to perform **DOE and FMEA**"; "**Bachelor's degree required in STEM fields, and ASQ certification accepted**"; tools Python/R/SQL, MES/ERP. `✓` [ZipRecruiter — Manufacturing Data Scientist](https://www.ziprecruiter.com/Jobs/Manufacturing-Data-Scientist) · [SPC roles](https://www.ziprecruiter.com/Jobs/Statistical-Process-Control-Spc)

**Requirement pattern that repeats (the hireable checklist) `✓`:** Python + SQL (and **JMP** in semiconductor/quality shops) · SPC / control charts / process capability (Cp, Cpk, Pp, Ppk) · DOE (factorial, RSM) · MSA / **Gauge R&R** · FMEA / 8D / DMAIC root-cause · statistical testing (t-test, ANOVA, regression) · ML for defect classification (regression/classification/clustering, CNNs on wafer/defect images) · communication to process/ops engineers · **ASQ CQE and/or Six Sigma Green/Black Belt "preferred."**

---

## Consolidated Sources (fetched or search-surfaced, 2024–2026)

**Certifications (ASQ / IASSC / JMP):**
- [ASQ CQE](https://www.asq.org/cert/quality-engineer) · [CQE Body of Knowledge — Quantitative Methods (CQE Academy)](https://cqeacademy.com/cqe-body-of-knowledge/quantitative-methods-tools/) · [ASQ CSSBB](https://www.asq.org/cert/six-sigma-black-belt) · [ASQ CSSGB](https://www.asq.org/cert/six-sigma-green-belt) · [ASQ Master Black Belt](https://www.asq.org/cert/master-black-belt) · [ASQ CQPA](https://www.asq.org/cert/quality-process-analyst) · [ASQ CQIA](https://www.asq.org/cert/quality-improvement-associate) · [ASQ cert requirements FAQ](https://www.asq.org/cert/faq/faq-cert-req) · [IASSC vs ASQ BoK](https://iassc.org/question/what-is-the-difference-between-the-asq-and-iassc-body-of-knowledge/) · [JMP STIPS cert (SAS)](https://www.sas.com/en_us/certification/exam-content-guides/jmp-statistical-thinking.html) · [Free STIPS course (Coursera)](https://www.coursera.org/learn/statistical-thinking-applied-statistics)

**Programs / courses:**
- [Georgia Tech ISyE — Quality & Statistics concentration](https://www.isye.gatech.edu/academics/bachelors/industrial-engineering/curriculum/quality-statistics-concentration) · [GT ISYE course catalog (3030/3039/4803/6401/6405/6413/6414)](https://catalog.gatech.edu/coursesaz/isye/) · [ASU Online MEng — Quality, Reliability & Statistical Engineering](https://asuonline.asu.edu/online-degree-programs/graduate/master-engineering-area-study-quality-reliability-and-statistical/) · [ASU Semiconductor Processing graduate certificate](https://asuonline.asu.edu/online-degree-programs/certificates/semiconductor-processing-graduate-certificate/) · [Kennesaw State Six Sigma Green Belt](https://www.kennesaw.edu/massive-open-online-courses/courses/six-sigma-green-belt-specialization.php) · [Coursera Six Sigma GB (Kennesaw)](https://www.coursera.org/specializations/six-sigma-green-belt) · [US News Industrial Engineering rankings](https://www.usnews.com/best-colleges/rankings/engineering-doctorate-industrial-manufacturing) · [SEMI University](https://www.semi.org/en/semi-university)

**Textbooks (subject grounding):**
- [Montgomery — Introduction to Statistical Quality Control](https://books.google.com/books/about/Introduction_to_Statistical_Quality_Cont.html?id=oh7zDwAAQBAJ) · Montgomery — Design and Analysis of Experiments (10th ed.)

**Job evidence:**
- [Intel WLA Yield Defect Metrology Engineer](https://intel.wd1.myworkdayjobs.com/en-US/External/job/WLA-Yield-Defect-Metrology-Engineer_JR0283241-1) (JS-rendered; content via [Indeed search](https://www.indeed.com/q-Semiconductor-Yield-Defect-Engineer-jobs.html)) · [Micron Yield Enhancement Engineer (Built In, fetched)](https://builtin.com/job/yield-enhancement-engineer/4391999) · [Micron Data Scientist](https://careers.micron.com/careers/job/41823376-data-scientist-singapore-singapore?domain=micron.com) · [TSMC AI & Data Analysis Engineer](https://careers.tsmc.com/en_US/careers/JobDetail/AI-Data-Analysis-Engineer-Dept-AQSD-Div-IMC/5302) · [Ametek Sr Quality Engineer](https://jobs.ametek.com/job/Richmond-Sr_-Quality-Engineer-CA-94806/1381026200/) · [ZipRecruiter — Manufacturing Data Scientist](https://www.ziprecruiter.com/Jobs/Manufacturing-Data-Scientist) · [ZipRecruiter — SPC roles](https://www.ziprecruiter.com/Jobs/Statistical-Process-Control-Spc)

**Portfolio datasets & yield-analytics tooling:**
- [WM-811K wafer-map dataset (Kaggle)](https://www.kaggle.com/datasets/sushnu/wm-811k-augmented-and-preprocessed-dataset) · [WM-811K explainer](https://github.com/makinarocks/awesome-industrial-machine-datasets/blob/master/data-explanation/WM-811K(LSWMD)/README.md) · [Wafer-map defect classification (CNN, arXiv 2411.11029)](https://arxiv.org/abs/2411.11029) · [KLA semiconductor software (Klarity)](https://www.kla.com/products/software-solutions/semiconductor) · [PDF Solutions — wafer-map data viz](https://www.pdf.com/understanding-semiconductor-data-visualization-with-wafer-maps-an-introduction/)

---

**Summary for the caller.** The role is a **statistics/DS/ML core + a quality-engineering domain overlay**, and — critically — its domain moat is the **QUALITY bodies (ASQ CQE, Six Sigma CSSBB/CSSGB, IASSC)**, *swapping out* PdM's reliability bodies (SMRP/CRE/vibration). **Undergrad tiering shifts vs the exemplar: ISE (Quality & Statistics) and Statistics rise to co-Tier-1** with Data Science/CS; the Tier-2 overlay is **quality/process** (and, for semiconductors, **EE/Materials/ChemE/Physics — often required**). **No degree is literally titled this niche**; closest named paths are **GT ISyE's Quality & Statistics concentration** (course codes ISYE 3039/4803/6413/6414) and **ASU's online MEng in Quality, Reliability & Statistical Engineering** (the flagship, Montgomery's home). Signature domain cert = **ASQ CQE** (8-yr experience, BoK Section VI = SPC/DOE/regression/hypothesis-testing/process-capability) with **Six Sigma Black Belt** as the project-leader moat; **JMP STIPS** is the niche tool-cert; pair with a **DeepLearning.AI + cloud-ML** cert. Portfolio anchors = **WM-811K** (wafer-map defect classification — the C-MAPSS analog), **SECOM**, **Bosch**. **No dominant semiconductor-yield-specific certification exists.** Real employers (Intel, Micron, TSMC, Ametek) confirm the checklist: **JMP/Python/SQL, SPC, DOE, Gauge R&R/MSA, FMEA/8D/DMAIC, ML for defect classification, and "ASQ CQE / Six Sigma preferred."** Two direct job URLs were JS-rendered/filled and unfetchable (Intel Workday, Ametek), but their requirement text was captured via search aggregates and the fetched Built-In (Micron) posting.
