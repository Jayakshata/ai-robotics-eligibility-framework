# Credentials & Eligibility Research — Forecasting & Planning Analytics

> **Niche:** Forecasting & Planning Analytics (slug: `forecasting-planning-analytics`) · **Area 2 — Analytics / Predictive AI (non-embodied).**
> **Scope:** demand & supply forecasting, capacity planning, inventory optimization, S&OP/IBP analytics — the **statistical/probabilistic forecast** itself. Substance = hierarchical forecasting, intermittent demand, probabilistic forecasts, backtesting, time-series foundation models.
> **BOUNDARY:** the agentic ERP/MES/IBP *copilot* that consumes this forecast is **Area 1 — Operations, ERP & Manufacturing-Execution AI** (reference, do not absorb). The planning *platforms* (SAP IBP, o9, Blue Yonder, Kinaxis) are where the forecast is consumed, not built.
> Research pass mid-2026. `✓` grounded against a fetched source · `~` to-verify / single-source / inference. Unverified claims lead with `~`.

## The load-bearing framing: this niche hires through TWO doors `✓`
The credential map only makes sense if you see that employers hire for this niche from two directions, with different credentials:

- **Door A — the Forecasting / Applied Scientist (quant-core).** Big-tech, e-commerce, retail/CPG data-science orgs. Archetype: **Amazon "Data Scientist, Demand Forecasting" (SCOT)**. Wants the DS/stats/OR degree + a demonstrable ML-forecasting portfolio; domain certs are a *bonus*. The forecasting statistics is the hard-to-substitute half.
- **Door B — the Demand Planner / Demand-Planning Analyst (domain-core).** CPG, retail, pharma, industrial manufacturers. Archetype: **J&J / Kenvue "IBP Demand Planning" analyst**. Wants a quantitative-enough degree + a **domain certification (IBF CPF / APICS CPIM)** + **SAP IBP / o9 / Blue Yonder** tool fluency + business acumen. Here the *certification is the moat*.

The niche's own "harder-to-substitute half" is the quantitative forecasting core (Door A skills); its **moat credential is the supply-chain-planning certification** (Door B), which is what a pure data scientist lacks. A strong hire is bilingual across both.

---

## 1. Acceptable undergraduate degrees (tiered; strongest for THIS niche)

**The role = a data-science / statistics / ML core + a demand-planning / supply-chain domain overlay `✓`.** Employers hire from both directions but the quantitative core is the harder-to-substitute half. Job postings explicitly name a wide degree set: *"Business, Finance, Engineering, Statistics, Supply Chain Management, Mathematics, Economics, or MBA"* `✓` (demand-planner JDs), and IBF's own careers page lists *"Business Management, Mathematics, Data Science, Statistics, Supply Chain Management, Logistics, and Engineering"* `✓`.

**Tier 1 — the quantitative core (strongest for the forecast itself):**
- **Statistics** and **Data Science** — the most direct fit; forecasting is applied time-series statistics.
- **Operations Research / Industrial & Systems Engineering (analytics/OR track)** — the **best-balanced single degree** for this niche: carries the optimization + inventory theory *and* the statistics, and is the degree behind the strongest named programs (Georgia Tech ISyE, MIT ORC). This is the analog of "ISE analytics track" in the predictive-maintenance exemplar.
- **Economics / Econometrics** — the sleeper Tier-1 pick and a genuine niche differentiator: classical demand forecasting *is* time-series econometrics (ARIMA/ETS/VAR, seasonality, causal/promotional regressors). Postings list "Economics" explicitly `✓`.
- **Applied Mathematics**, **CS / ML Engineering** — strong for the modern ML/deep-learning forecasting side.

**Tier 2 — domain-forward (qualifying, especially for Door B):**
- **Supply Chain Management / Supply Chain Analytics** — supplies the domain (S&OP, inventory, MRP) but often needs the statistics topped up.
- **Operations Management**, **Business Analytics**, **Logistics** — domain-forward business degrees; strong for the planner door, lighter on the modeling core.
- **Industrial Engineering** (general) and **Physics** (quantitative, needs a domain overlay).

**Strongest single answer for this niche:** the quantitative half is the moat that's hard to teach, so **Statistics / Operations Research / Econometrics** is strongest for the forecast; **Industrial & Systems Engineering (OR/analytics)** is the best-balanced one-degree option because it carries both the statistics and the inventory/optimization domain. Nobody in this niche needs kinematics, control, or signal processing (the EE/ME content that mattered for predictive maintenance is *not* required here — the differentiator is econometrics/OR instead).

## 2. Named, highly-valued university programs / courses

**There is NO undergraduate or graduate degree literally titled "Demand Forecasting."** `✓` The closest *dedicated* degrees are **MS in Supply Chain Analytics** programs; the deep forecasting/quant core is supplied by **Statistics / OR / Analytics / Econometrics** degrees. Name the closest strong programs:

**The forecasting-methodology flagship (the differentiator — analog of UMD-CALCE for PHM):**
- **Monash University — Dept of Econometrics & Business Statistics (Rob J. Hyndman)** `✓`. The canonical academic home of statistical forecasting. **"Forecasting: Principles and Practice" (Hyndman & Athanasopoulos, 3rd ed., OTexts — `otexts.com/fpp3`)** is *the* free canonical text/course of the field, taught worldwide; the R `forecast`/`fable`/`tsibble` packages and the hierarchical-reconciliation & `feasts` toolset come from this group. Hyndman was Editor-in-Chief of the *International Journal of Forecasting* (2005–2018). If you name one thing in this niche, name FPP3.

**The OR / analytics powerhouses (strongest for the quant core):**
- **Georgia Tech — H. Milton Stewart School of ISyE (#1-ranked industrial engineering)** `✓`. The strongest single ecosystem for this niche: **MS Analytics** (interdisciplinary ISyE + Computing + Scheller; also the affordable, industry-heavy **online OMS Analytics / OMSA**), **MS Operations Research**, **MS Statistics**, and **MS Supply Chain Engineering (MSSCE)** — whose coursework explicitly covers *"probabilistic models of supply chains… models of wholesale and retail demand; forecasting and simulation… basic forecasting methods, ARIMA models, transfer functions"* `✓`.
- **MIT — Operations Research Center (ORC)** `✓`: **Master of Business Analytics (MBAn)** and the **Master's / PhD in Operations Research** (thesis-based, deep optimization + analytics).

**The supply-chain / demand-planning flagship (strongest for the domain half):**
- **MIT Center for Transportation & Logistics — MicroMasters in Supply Chain Management** `✓`, feeding the **#1-ranked MIT SCM blended master's**. A five-course + comprehensive-exam credential (MITx `CTL.SCx` series); the demand-forecasting module covers *time-series analysis, exponential smoothing, seasonality, and new-product forecasting* `✓`. Free to audit — a strong stackable domain credential.
- **~Michigan State (Broad), Penn State (Smeal), Arizona State (W. P. Carey), Tennessee (Haslam), Purdue** — consistently top-ranked supply-chain programs; strong for the planner door, verify current forecasting/analytics content. `~`
- Dedicated **MS Supply Chain Analytics** (STEM-designated) programs: **Rutgers**, **Univ. of Pittsburgh (MS SCM & Business Analytics)**, **WPI (MS Operations & Supply Chain Analytics)**, **Boston University**, **UMSL** `✓` (named on program pages).

**Forecasting-specialist / accredited (Europe):**
- **~Lancaster University (UK) — Management Science / Centre for Forecasting** — an IIF-accredited forecasting-focused group; a recognized European specialist. `~`

**General DS/stats/ML** (same as the shared grounding reference): UC Berkeley, CMU, Stanford (MS Statistics/DS), Michigan — valid entry paths, then specialize into time-series/forecasting.

## 3. Acceptable postgraduate degrees; can a portfolio outweigh one?

**Acceptable postgraduate degrees** — MS/PhD in **Statistics, Operations Research, Data Science / Analytics, Econometrics, Industrial & Systems Engineering,** or a **Supply Chain Management / Analytics** master's (the domain-forward route). For the research frontier (probabilistic / hierarchical / time-series foundation models), a **PhD in statistics/OR/ML/econometrics** dominates. Amazon's demand-forecasting scientist role lists **Bachelor's as the basic qualification and "Master's degree, or PhD" only as *preferred*** `✓`.

**Can a portfolio outweigh a graduate degree here? Yes — more than in most niches `✓`, for two structural reasons:**
1. **Forecasting skill is unusually demonstrable in public.** The **M-competitions / M5 (Walmart hierarchical retail data)** and Kaggle forecasting competitions give a *ranked, verifiable* signal (see §5). A top-decile M5-type finish or a public forecasting repo (Nixtla/Darts/`statsforecast`) is concrete evidence a transcript can't provide. Big-tech science roles gate on **Bachelor's + demonstrated skill**, not a master's.
2. **Door B substitutes certification + experience for a graduate degree.** A **CPF + CPIM + years running a real S&OP forecast** outweighs an academic master's for a demand-planning-manager track; APICS/IBF credentials are the recognized professional ladder there.

**Where a graduate degree still wins:** the frontier research roles (foundation-model / probabilistic-forecasting R&D, e.g. Amazon's *"foundation model that can forecast demand for hundreds of millions of products"* team `✓`) still favor a PhD.

## 4. Named certifications that carry weight (incl. the DOMAIN moat)

Pair an **analytics/ML cert** (the portable core) with a **planning-domain cert** (the moat). The domain cert is what separates this niche's specialist from a generic data scientist.

**Domain moat — supply-chain-planning & forecasting certifications (the differentiator):**
- **IBF Certified Professional Forecaster (CPF)** — issuer **Institute of Business Forecasting & Planning (IBF)** `✓`. The **most forecasting-specific credential in existence** and the closest thing to *the* moat for this niche. **Prerequisites:** *Bachelor's + 1 year* professional forecasting/planning experience, **OR** *2 years* experience without a degree. **Three exams:** (1) Demand Planning, Forecasting & S&OP; (2) **Data Management & Time-Series Forecasting Modeling**; (3) Reporting, Presenting & New-Product Forecasting. Pass = 70%/exam; ~$425–475/exam. Ladder: **CPF-C** (Candidate — students/new practitioners pass the 3 exams, upgrade to CPF after 1 yr experience) → **CPF** → **ACPF (Advanced CPF)** (must already hold CPF; exams 4–6). `✓`
- **APICS CPIM — Certified in Planning and Inventory Management** — issuer **ASCM (Association for Supply Chain Management)** `✓`. The planning & inventory domain anchor; **no formal prerequisites** (18+ / high-school diploma), though experience is assumed; ~100 study-hours/exam. Frequently named/"preferred" in demand-planner JDs.
- **APICS CSCP — Certified Supply Chain Professional** — issuer **ASCM** `✓`. Broader end-to-end supply-chain credential. **ASCM eliminated formal eligibility requirements (2026)**; *recommends* 3 yr experience **or** a bachelor's **or** an active APICS cert. (Historically: bachelor's + 2 yr, or CPIM/CFPIM/CIRM/CPM + 2 yr, or 5 yr experience.)
- **ISCEA CDDP — Certified Demand Driven Planner** `✓` (and **DDI's DDP/DDPP — Demand Driven Planner (Professional)**): the **DDMRP / demand-driven** replenishment & S&OP domain; 100-MCQ exam, 70% pass. Relevant where the planning philosophy is demand-driven rather than pure statistical forecast.
- **~IIF Certificate — International Institute of Forecasters** `✓` body; **~"CPDF / Certificate in Demand Forecasting Practice"** — issuer/endorser is the IIF, the 34-year-old academic forecasting society (publishes the *International Journal of Forecasting*, runs the ISF conference; the standards-body analog of the PHM Society). Academic-endorsed practitioner certificate; exact acronym/name to verify. `~`
- **~CADP — Certified Analyst in Demand Planning** (Demand Planning LLC / demandplanning.net): ~6 years combined post-secondary education + demand/supply-chain work experience (associate's + ≥2 yr). Single-source; verify. `~`

**Analytics / ML — the portable core (same spine as the shared reference, with a forecasting-specific add):**
- **DeepLearning.AI Machine Learning** + **Deep Learning** specializations (Ng/Stanford) — Tier-1 blue-chip. *(Note: DeepLearning.AI MLOps specialization discontinued per grounding ref.)*
- A **cloud ML cert:** **AWS Certified Machine Learning Engineer – Associate (MLA-C01)** *(the older ML Specialty **MLS-C01 retired Mar 2026** — use MLA-C01)*; **Google Cloud Professional ML Engineer (PMLE)** (strongest MLOps/salary premium); **Azure DP-100** *(AI-102 → **AI-103** after Jun 2026)*. `✓` (corrections carried from `_grounding-reference.md`).
- **SAS Certified Specialist: Forecasting and Optimization Using SAS Viya** `✓` — a forecasting-specific vendor cert; **SAS/ETS + SAS Demand-Driven Forecasting** remain a demand-planning stronghold in CPG/retail, so this carries real weight on Door B.

## 5. Experience & portfolio expectations per tier (L1–L5)

**The portable portfolio benchmark (this niche's "NASA C-MAPSS"):** the **Makridakis M-competitions — M5 (Kaggle, 2020; Walmart hierarchical retail data: 30,490 daily series across store/product hierarchy, with prices/promos/events; intermittent demand; an "Accuracy" and a probabilistic "Uncertainty" track)** and **M4 (100k series)** `✓`. LightGBM/gradient-boosted trees won M5. A credible portfolio project is a **hierarchical, probabilistic forecast with proper rolling-origin backtesting that beats naive/ETS baselines** — directly the boundary substance. Retail sales sets (Rossmann, Walmart, Corporación Favorita) and the Nixtla/Darts ecosystems are the standard sandboxes.

| Tier | Title | Experience & portfolio bar |
|------|-------|----------------------------|
| **L1** | Junior Demand/Forecasting Analyst · Jr Data Scientist (Forecasting) | A **forecasting project on benchmark data** (M5/M4 or a Kaggle retail comp): time-series CV/backtesting, a baseline beaten, hierarchy or intermittency handled. Python + SQL + a forecasting library. Often joins straight from a graduate/analytics program. `✓` |
| **L2** | Demand Planner / Forecasting Data Scientist | 2–4 yr. A **deployed forecast feeding a real decision** — S&OP/IBP cycle, inventory/safety-stock, or capacity plan. Owns a demand model end-to-end (ingest → features → forecast → reconcile → monitor). CPF-C→CPF or CPIM in progress. Tool fluency: **SAP IBP / o9 / Blue Yonder / Kinaxis** (Door B) or a production ML stack (Door A). `~` on exact years |
| **L3** | Senior / Lead Demand-Planning Data Scientist | 5–8 yr. Leads a forecasting/planning program; sets the **validation regime (backtesting, reconciliation, bias/WMAPE/MASE tracking)**; makes classical-vs-ML-vs-probabilistic tradeoffs; mentors. Typically **CPF (+ CPIM)**. `~` |
| **L4/L5** | Staff / Principal — Forecasting Science / Head of Demand Planning | 8+ yr and/or research depth (probabilistic/hierarchical/**time-series foundation models**) **or** a domain-cert stack (**ACPF + CSCP**). Owns forecast architecture, accuracy governance, and the S&OP/IBP analytics strategy; the "demand foundation model" scope. `~` |

## 6. Real job-posting evidence (quoted)

**Door A — quant-core (Amazon "Data Scientist, Demand Forecasting", SCOT) `✓`** — job summary is literally *"What does it take to build a foundation model that can forecast demand for hundreds of millions of products."*
- **Basic Qualifications (verbatim):** *"3+ years of machine learning, statistical modeling, data mining, and analytics techniques experience"*; *"3+ years of data querying languages (e.g. SQL), scripting languages (e.g. Python) or statistical/mathematical software"*; *"3+ years of data scientist experience"*; *"Bachelor's degree."*
- **Preferred (verbatim):** *"Master's degree, or PhD"*; deep-learning experience; *"Experience with forecasting and statistical analysis."*
- A sibling Amazon posting adds preferred: *"Experience with time series forecasting, demand modeling, or bias correction techniques"* and *"Familiarity with large language models (LLMs) or generative AI applications."* `✓`

**Door B — domain-core (demand-planning analyst roles: J&J, Kenvue IBP, C.H. Guenther Sr Forecast Analyst) `✓`:**
- **Certifications:** *"APICS, IBF, or related supply chain or forecasting certification preferred"* — postings enumerate *"APICS, CPIM, IBF, CSCP, CPF…"* `✓`
- **Tools:** *"Experience using forecasting or planning tools such as SAP IBP, Oracle Demantra, Excel, Power BI"*; *"Strong proficiency in Excel and PowerPoint required."* `✓`
- **Education:** *"Bachelor's in Business, Finance, Engineering, Statistics, Supply Chain Management, Mathematics, Economics, or MBA."* `✓`
- **Experience:** IBF's own guidance — *"most forecast analysts and planners join as graduates, but not all"* (entry + lateral pathways), and *"being more than just a data person is important to be good in demand planning roles"* (the business-acumen overlay). `✓`

**Cross-door (retail/CPG forecasting DS): Cognizant "Data Scientist, Demand Forecasting"** lists preferred knowledge of *"scenario modeling, **hierarchy reconciliation**, and long-range forecasting methodologies"* `✓` — confirming **hierarchical reconciliation** (a boundary-defining skill) as explicit JD language. **Cohort AI / IBM DemandTec** roles ask for time-series demand forecasting + price-elasticity/promotion modeling on *"large-scale, real-world retail/supply-chain data."* `✓`

**Net:** Door A gates on the quantitative core (Bachelor's + demonstrated ML-forecasting; Master's/PhD preferred; deep-learning & probabilistic methods rising). Door B gates on the domain moat (APICS CPIM / IBF CPF) + planning-platform (SAP IBP) fluency + business acumen. The certification is the moat only on Door B; the statistics is the moat on Door A — and the strongest hire holds both.

---

## Sources (URLs actually fetched/searched)

**Domain certifications (the moat):**
- IBF certification overview (CPF/ACPF/CPF-C, exams, fees) — https://ibf.org/business-analytics-certification (fetched)
- IBF certification program PDF — https://ibf.org/files/downloads/IBF_Certification_Program.pdf
- IBF — getting a job in demand planning (fetched) — https://ibf.org/getting-a-job-in-demand-planning
- SAPICS CPF factsheet — https://www.sapics.org.za/sites/default/files/content-files/Education/Certified%20Professional%20Forecaster%20(CPF)%20Factsheet.pdf
- ASCM CPIM — https://www.ascm.org/learning-development/certifications-credentials/cpim/
- ASCM CSCP eligibility change (2026) — https://www.ascm.org/learning-development/certifications-credentials/cscp/eligibility/
- ISCEA CDDP — https://www.iscea.org/cddp ; Demand Driven Institute DDP/DDPP — https://www.demanddriveninstitute.com/demand-driven-planner-ddp
- International Institute of Forecasters — Certificate Program — https://forecasters.org/programs/certificate-program/ ; About — https://forecasters.org/about/
- SAS Forecasting & Optimization Using Viya cert — https://www.sas.com/en_us/certification/credentials/advanced-analytics/forecasting-optimization-using-viya.html
- Teal — Demand Planner certifications — https://www.tealhq.com/career-paths/demand-planner-certifications

**University programs / academic anchors:**
- Monash / Hyndman — Forecasting: Principles and Practice (FPP3) — https://otexts.com/fpp3/ ; https://robjhyndman.com/
- MIT MicroMasters in SCM — https://micromasters.mit.edu/scm/ ; MIT Open Learning Supply Chain Fundamentals — https://openlearning.mit.edu/courses-programs/mitx-courses/supply-chain-fundamentals-0
- Georgia Tech ISyE — MS Supply Chain Engineering — https://www.isye.gatech.edu/academics/masters/degrees/ms-supply-chain-engineering ; MS Operations Research — https://www.isye.gatech.edu/academics/masters/degrees/ms-operations-research ; MS Analytics — https://catalog.gatech.edu/programs/analytics-ms/
- MIT Operations Research Center — https://orc.mit.edu/academics/master-business-analytics/
- Supply-chain-analytics MS overview — https://research.com/online-degrees/supply-chain-management/supply-chain-management-specializations-for-demand-planning-careers ; Rutgers MSCA — https://www.business.rutgers.edu/masters-supply-chain-analytics

**Portfolio benchmark:**
- M5 competition (Univ. of Nicosia) — https://www.unic.ac.cy/iff/research/forecasting/m-competitions/m5/
- "Learnings from Kaggle's Forecasting Competitions" — https://arxiv.org/pdf/2009.07701

**Job-posting evidence:**
- Amazon — Data Scientist, Demand Forecasting (fetched) — https://www.amazon.jobs/en/jobs/3206851/data-scientist-demand-forecasting
- Amazon — Applied Scientist / DS II, Demand Forecasting — https://www.amazon.jobs/en/jobs/3207458/applied-scientist-demand-forecasting ; https://www.amazon.jobs/en/jobs/2971353/data-scientist-ii-demand-forecasting
- Cognizant — Data Scientist, Demand Forecasting — https://careers.cognizant.com/us-en/jobs/00069674491/data-scientist-demand-forecasting/
- Cohort AI — DS Demand Forecasting (Retail/CPG) — https://www.linkedin.com/jobs/view/data-scientist-%E2%80%93-demand-forecasting-retail-cpg-at-cohort-ai-4418835733
- Kenvue — Supply Chain IBP Demand Planning Manager — https://jobs.kenvue.com/supply-chain-ibp-demand-planning-manager/job/C818565D577CA25AE062710AB1794C5A
- Velvet Jobs — Analyst, Demand Planning JD template — https://www.velvetjobs.com/job-descriptions/analyst-demand-planning

*Confidence: `✓` fetched/verified · `~` single-source or inference (flagged inline). Time-sensitive items (ASCM CSCP 2026 eligibility change; AWS MLS-C01 retirement Mar 2026 → MLA-C01; Azure AI-102 → AI-103 Jun 2026; IIF certificate exact naming) — re-verify before publish.*
