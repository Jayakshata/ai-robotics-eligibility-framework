> Provenance: background research agent (creds pass) for the applied-AI niche **Process & Production Optimization** (Area 2 — Analytics / Predictive AI), mid-2026. Raw agent report, preserved verbatim. Confidence: `✓` grounded against a fetched/searched source · `~` inferred / synthesis / single-source paraphrase / title-only (posting body not retrievable) · `⏱` time-sensitive.

I have comprehensive coverage across all six requested items. Compiling the final report.

---

# Process & Production Optimization — Credentials & Eligibility

*Scope: the **analytics / predictive-AI layer that tunes the PROCESS/PLANT operating point** — process modeling and surrogate/soft-sensor models, **Bayesian optimization** of process parameters, **RL for process control**, **MPC/APC at plant level** (a column, a reactor, a line — NOT a robot), **digital-twin-driven optimization**, and **energy analytics / optimization**. The objective is throughput, yield-at-fixed-quality, and energy/utility cost. The hire is an **industrial data scientist / process-control or optimization engineer**, not a roboticist or an LLM-agent engineer.*

**MECE boundary (kept strict):**
- **NOT the robot's own control loop.** Axis-A `control-classical-optimal-mpc` and `reinforcement-learning-control` own the *robot's* MPC/RL. Here MPC/RL acts on the **plant/process** (distillation column, CVD chamber, rolling mill, an assembly line's operating point). Reference those Axis-A niches; do not absorb them. `✓`
- Distinct from **Predictive Maintenance** (the signed-off exemplar): PdM *predicts equipment failure*; this niche *moves the operating point to optimize output/energy*. PdM's moat is the **reliability** bodies (SMRP CMRP, ASQ CRE, ISO 18436 vibration); **this niche's moat is a split cluster of PROCESS-CONTROL + OPTIMIZATION + ENERGY bodies** — the single most important niche-specific finding below. `✓`
- Distinct from sibling **Quality, Yield & Defect Analytics**: that models the **product** (defects, yield conformance, SPC/Gauge R&R); this tunes the **process** (parameters, throughput, energy). **DOE/RSM and Six Sigma are shared tooling** across the two — the clean line is *product conformance* (Quality) vs *operating point & throughput/energy* (here). `✓`
- Distinct from sibling **Forecasting & Planning**: demand/supply forecasting is theirs; **production scheduling/line-balancing optimization** is the gray boundary — APICS/CPIM-style planning sits on that seam. `~`
- The **agentic "intelligent ERP/MES" copilot** (Area 1 #4) is the LLM-agent layer; the **optimization/scheduling math underneath it** is this niche. `✓`

**One-line shape:** a **data-science / optimization (OR) / statistics-ML core + a process-engineering-and-control domain overlay** (chemical/process for continuous industries; industrial-engineering/OR for discrete; energy for the utility-cost sub-area). The quantitative core (Bayesian optimization, RL, surrogate modeling) is the harder-to-substitute half; the **domain credential is the moat, and *which* moat depends on the sub-domain.**

---

## 1. Acceptable Undergraduate Degrees (tiered; strongest for THIS niche)

The niche splits into **two employer contexts that tier degrees differently**, so I give both. The shared truth: the *methods* (optimization, Bayesian optimization, RL, regression/surrogate modeling) live in **OR/Industrial Engineering, Statistics/DS, and — for the plant-control heritage — Chemical Engineering**. Unlike Predictive Maintenance (where ChemE and OR sat in Tier 2), **Chemical Engineering (Process Systems Engineering track) and Operations Research/ISE move UP to co-Tier-1 here**, because APC/MPC, soft sensors, steady-state/dynamic process modeling, and plant-wide optimization are *taught inside those departments*. `✓`

**Tier 1 — strongest, on-target single degrees**
- **Chemical Engineering — Process Systems Engineering / process-control track** `✓` — **the strongest single degree for the process-industries flavor** (refining, petrochem, pharma, food, semiconductor-process, pulp & paper). Process modeling, APC/MPC, soft/inferential sensors, and optimization-under-uncertainty are ChemE-PSE heritage. Real APC postings *hard-require* it: Marathon Petroleum lists **"Bachelor of Science degree in Chemical Engineering"** as the degree line. [Marathon APC Engineer](https://www.builtinla.com/job/advanced-process-control-engineer/9617548)
- **Industrial & Systems Engineering / Operations Research — optimization track** `✓` — **the strongest single degree for the discrete-manufacturing flavor** (automotive, electronics assembly, general throughput/scheduling/line-balancing). The optimization methods (LP/MILP, deterministic & stochastic optimization, simulation) are ISE/OR core. [GT ISyE MS OR](https://www.isye.gatech.edu/academics/masters/degrees/ms-operations-research)
- **Data Science / Statistics / Applied Mathematics / CS-ML** `✓` — the **quantitative core** and the harder-to-substitute half: Bayesian optimization, RL, and surrogate/soft-sensor modeling are ML/stats. Manufacturing-DS postings explicitly want **"linear programming and optimization"** alongside regression/time-series/forecasting. [Data Science in Manufacturing guide](https://www.datasciencedegreeprograms.net/industries/manufacturing/)

**Tier 2 — qualifying (often the domain overlay, sometimes the stated requirement)**
- **Electrical / Control / Systems Engineering** `✓` — control theory, MPC, DCS/PLC fluency; the natural home for the *control* half of APC. Imperial's **Control and Optimisation MSc** is EEE-hosted. [Imperial MSc Control & Optimisation](https://www.imperial.ac.uk/study/courses/postgraduate-taught/control-optimisation/)
- **Mechanical / Manufacturing Engineering** `✓` — process + throughput domain for discrete manufacturing; qualifying with an optimization/analytics project.
- **Energy Systems / Environmental Science / Physics** `✓` — for the **energy-analytics sub-area**: energy-data-scientist postings accept degrees in **"Data Science, CS, Engineering, Statistics, or Environmental Science"** (and energy-management). [Energy Data Scientist education reqs](https://www.careerexplorer.com/careers/energy-data-scientist/education-and-training-requirements/)

**The bilingual ideal `~`:** a quant/optimization core (DS/Stats/OR) **+** a process domain (ChemE for continuous industries; ISE/ME for discrete; energy systems for the utility-cost sub-area). A pure DS degree with *no* process domain is weakest in the process-industry APC context (where the ChemE gate is real); an OR/ISE or ChemE-PSE degree is the safest single bet.

**Net vs the exemplar/siblings `✓`:** PdM ranked DS/Stats/CS Tier-1 with ChemE/OR in Tier-2; Quality/Yield promoted **ISE-Quality + Statistics**; **this niche promotes ChemE (PSE) and OR/ISE (optimization) to co-Tier-1**, and its Tier-2 overlay is **process-control / energy** rather than **reliability** (PdM) or **quality-conformance/semiconductor-physics** (Quality/Yield).

---

## 2. Named University Programs / Courses (real course codes)

**Plainly: there is no undergraduate degree literally titled "Process & Production Optimization."** `✓` The closest dedicated things are **Process Systems Engineering (PSE)** inside Chemical Engineering, and **Operations Research / optimization** inside Industrial & Systems Engineering. Two named master's programs are near-perfect fits.

**Imperial College London — MSc Machine Learning and Process Systems Engineering** `✓` — **the single most on-target named master's for this niche.** Hosted by the **Sargent Centre for Process Systems Engineering** ("the world's largest multidisciplinary research centre in PSE"). Named core modules: **Advanced Optimisation for Chemical Engineering**, **Machine Learning for Chemical Engineering**, **Advanced Process Operations**, **Dynamic Behaviour in Process Systems**, **Industrial Automation and Autonomous Systems**, **Mathematics for Machine Learning and Process Systems Engineering**, **Introduction to Programming and Python in Chemical Engineering**. This *is* the niche's method stack (optimization + ML + process dynamics + automation) in one degree. [Imperial MSc ML & PSE](https://www.imperial.ac.uk/study/courses/postgraduate-taught/process-systems-engineering/) · [Sargent Centre for PSE](https://www.imperial.ac.uk/process-systems-engineering/)

**Imperial College London — MSc Control and Optimisation** `✓` (Dept of Electrical & Electronic Engineering) — control theory + optimisation for automated systems; IET-accredited for Further Learning toward Chartered Engineer. The *control* half of the niche. [Imperial MSc Control & Optimisation](https://www.imperial.ac.uk/study/courses/postgraduate-taught/control-optimisation/)

**Carnegie Mellon — Chemical Engineering, Center for Advanced Process Decision-making (CAPD)** `✓` — the academic flagship for **process-systems optimization** (the Grossmann/Biegler lineage): modeling, optimization, numerical methods, and computing for **process synthesis, design, operations, planning & scheduling, process control, and optimization under uncertainty**. Real graduate course code: **06-665 Process Systems Modeling**. [CMU CAPD](https://capd.cheme.cmu.edu/) · [CMU 06-665 Process Systems Modeling](https://www.cheme.engineering.cmu.edu/education/graduate-programs/courses/masters/06665-process-systems-modeling.html)

**Georgia Tech — H. Milton Stewart School of ISyE, MS Operations Research** `✓` — the strongest named US path for the **optimization** core. 30 credit hours; **Deterministic Optimization** is a named core requirement (alongside Simulation and Probabilistic Models); ISyE holds "the largest, single-program concentration of faculty with optimization as their primary area of research at any U.S. university." Available via distance learning. [GT ISyE MS OR](https://www.isye.gatech.edu/academics/masters/degrees/ms-operations-research) · [GT catalog MS OR](https://catalog.gatech.edu/programs/operations-research-ms/)

**Northwestern — Industrial Engineering & Management Sciences (IEMS)** `✓` — named specialization areas include **Optimization**, Analytics, Stochastic Analysis & Simulation, and Applied Statistics & Statistical Learning; OR-methodology core (optimization, stochastic modeling, simulation, statistics). [Northwestern IEMS](https://www.mccormick.northwestern.edu/industrial/)

**University of Wisconsin–Madison — Chemical & Biological Engineering (Zavala / Scalable Systems Lab)** `✓` — a leading academic anchor for **data science + control + optimization applied to energy and process systems** (Zavala, PhD CMU-ChemE, PECASE). Good named home for the energy-optimization sub-area. [UW-Madison Zavala](https://engineering.wisc.edu/directory/profile/victor-zavala-tejeda/)

**Data-science backbone (reference — from `_grounding-reference.md` §A):** Berkeley, CMU, Stanford, Michigan, and **Georgia Tech OMS Analytics** (affordable, industry-heavy) supply the DS/ML half that pairs with any of the above. `✓`

**~ Also strong (named from domain knowledge, not directly fetched this pass — verify at source):** **UT-Austin (McKetta ChemE — process control, Edgar/Baldea lineage)**, **MIT (PSE/process control, Braatz group)**, **TU Delft (Delft Center for Systems and Control, DCSC)**, and **Purdue / Texas A&M / Wisconsin ISE** for the OR side. `~`

---

## 3. Acceptable Postgraduate Degrees — and can a portfolio outweigh a grad degree?

**Acceptable postgraduate degrees `✓`**
- **MS / PhD in Chemical Engineering (Process Systems Engineering / process control)** — the deep end for the process-industry flavor (APC, MPC, plant-wide optimization, soft sensors).
- **MS / PhD in Operations Research or Industrial & Systems Engineering (optimization)** — the deep end for the discrete-manufacturing / throughput flavor.
- **MS in Analytics / Data Science** (e.g., GT OMSA) — for the ML-heavy Bayesian-optimization / surrogate-modeling / energy-analytics side.
- **MSc Control and Optimisation** (Imperial-style) — for the control half.
- **MS in Statistics** — the methodological core (DOE/RSM, regression, Bayesian methods).

Real postings confirm the grad-degree pull on the analytics side: manufacturing-data-scientist roles list a bachelor's in DS/Stats/Applied-Math/CS/Engineering/**Chemical Engineering**/Materials "typically required, with **Master's degree or Ph.D. preferred.**" [Data Science in Manufacturing guide](https://www.datasciencedegreeprograms.net/industries/manufacturing/)

**Can a portfolio outweigh a graduate degree? — split answer `~`**
- **YES, for the data-science optimization flavor** (Bayesian optimization, RL-for-control, surrogate/soft-sensor modeling, energy analytics): a strong portfolio — a *deployed* optimizer with a measured KPI delta, an RL/BO agent on a public process simulator, published/benchmarked optimization work — can outweigh a master's, exactly as in the PdM exemplar. These roles hire on demonstrated ability.
- **NO (mostly), for the process-industry APC/MPC flavor**: the **Chemical Engineering degree + years is a hard gate**. Marathon's APC posting pairs "BS Chemical Engineering" with **"ten (10) total years … at least four (4) years … in advanced process control,"** and the moat is *degree + DCS/APC experience + a vendor cert (Aspen DMC3)*, not a public portfolio. APC touches safety-critical live process units, so employers gate on the domain degree and supervised experience. [Marathon APC Engineer](https://www.builtinla.com/job/advanced-process-control-engineer/9617548)

---

## 4. Named Certifications That Carry Weight (the moat is a *cluster*, not one cert)

Two layers: **(a) the analytics/ML/OR core** (shared across Area 2) and **(b) the domain moat** — which for this niche is a **split cluster keyed to sub-domain**, unlike PdM's single reliability cluster.

### (a) Core analytics / ML / OR credentials (shared)
- **DeepLearning.AI Machine Learning + Deep Learning Specializations**; a **cloud ML cert** — **AWS Machine Learning Engineer – Associate (MLA-C01)** (MLS-C01 retired Mar 2026), **Google Cloud Professional ML Engineer (PMLE)**, **Azure**. (From `_grounding-reference.md` §C — carry the quant half.) `✓`
- **INFORMS Certified Analytics Professional (CAP)** — the profession cert for OR/analytics, and the most niche-relevant of the "core" set because this niche *is* applied optimization/analytics. **As of mid-2026 it is restructured into three levels ⏱:** **CAP-Essentials** and **CAP-Pro** (no eligibility prerequisites — agree to the ethics code and pass the exam) and **CAP-Expert** (education+experience gated: **2 yrs analytics experience with an MS+, 4 yrs with a BS, or 8 yrs with any education**). Built on the **INFORMS Analytics Framework** (7 domains: business/analytics problem framing → data → methodology → model development → deployment → lifecycle). Issuing body: **INFORMS**. [INFORMS CAP](https://www.certifiedanalytics.org/) · [CAP FAQ / levels](https://www.certifiedanalytics.org/frequently-asked-questions)

### (b) The domain moat — pick by sub-domain
- **Process improvement / throughput-yield → ASQ Six Sigma Black Belt (CSSBB)** `✓` — **the single most-cited domain credential in process-optimization-engineer postings** ("**Lean Six Sigma Black Belt certification is often required**"; DMAIC facilitation). **Prerequisite:** three years of on-the-job experience in one+ areas of the CSSBB Body of Knowledge **plus** one completed project with a signed affidavit (or two completed projects). Exam: 165 questions / 4 hours. Issuing body: **ASQ**. (Generic "Lean Six Sigma Black Belt" from other providers is the common non-ASQ equivalent employers name.) [ASQ CSSBB](https://www.asq.org/cert/six-sigma-black-belt) · [Six Sigma process-engineer postings](https://www.ziprecruiter.com/Jobs/Six-Sigma-Engineer)
- **Process control / APC (process industries — the hardest moat) → ISA Certified Automation Professional (CAP)** `✓` — **Prerequisite:** a four-year technical degree (engineering/chemistry/physics/math) **+ 5 years / 7,500 hours** of automation work (or **10 years / 15,000 hours** without a four-year technical degree), plus two work references attesting ≥2 years in a position of responsible charge. Exam: 175 questions / 4 hours. Issuing body: **ISA (International Society of Automation)**. (ISA also offers the technician-level **CCST**.) [ISA CAP requirements](https://www.isa.org/certification/cap/cap-requirements)
- **…paired with the vendor moat → AspenTech Aspen DMC3 User Certification (ACU-DMC301)** `✓` — the APC toolchain (**Aspen DMCplus / DMC3**) named across refinery/petrochem APC postings; certification is multiple-choice **+ a lab component**, **70% to pass, valid 3 years**. Backed by AspenTech University courses **APC105** (build DMC3 control models, offline tuning/simulation) and **APC026** (remote monitoring). Issuing body: **AspenTech**. [Aspen DMC3 User Certification](https://esupport.aspentech.com/UniversityCourse?id=a3p4P000000kpXLQAY) · [Aspen DMCplus product](https://www.aspentech.com/en/products/msc/aspen-dmcplus/)
- **Energy optimization sub-domain → AEE Certified Energy Manager (CEM)** `✓` — the recognized energy-optimization credential. **Prerequisite (tiered):** a 4-yr engineering/architecture degree (or PE/RA) **+ 3 yrs** related experience; 4-yr technology/science/physics degree **+ 4 yrs**; 4-yr business degree **+ 5 yrs**; associate-degree paths at 6–8 yrs. A **mandatory approved prep seminar** is required before the exam; those who don't qualify can take **EMIT** (Energy Manager In-Training). Issuing body: **AEE (Association of Energy Engineers)**. [AEE CEM](https://www.aeecenter.org/certified-energy-manager/becoming-a-cem/)
- **…paired with → AEE Certified Measurement & Verification Professional (CMVP)** `✓` — the credential for *proving* an optimization actually saved energy (the "did it work?" half). **IPMVP**-based. **Prerequisite:** a current **CEM**, *or* a relevant degree + 3–5 yrs M&V/energy experience, *or* 10+ yrs relevant experience. Exam 120 questions / 4 hours, 70% pass, 3-yr validity. Issuing body: **AEE**. [AEE CMVP](https://www.aeecenter.org/certified-measurement-verification-professional/)
- **Production / throughput planning → ASCM APICS CPIM (Certified in Production and Inventory Management)** `✓` — the standard for production planning, master scheduling, forecasting and capacity across the supply chain. **No prerequisites** (a good first credential); **single exam** since v8.0 (launched June 2023; legacy two-part v7.0 retired Feb 2024). Issuing body: **ASCM** (formerly APICS). Sits on the scheduling/planning boundary with the Forecasting & Planning sibling. [ASCM APICS CPIM](https://www.ascm.org/learning-development/certifications-credentials/cpim/)

**Net vs the exemplar/siblings `✓`:** PdM's moat = SMRP CMRP / ASQ CRE / ISO 18436 vibration; Quality/Yield's moat = ASQ CQE + Six Sigma. **This niche has no single moat — it's a sub-domain-keyed cluster:** ISA CAP + Aspen DMC3 (process-control), INFORMS CAP (optimization/OR profession), AEE CEM/CMVP (energy), ASQ Six Sigma Black Belt (shared process-improvement), ASCM CPIM (throughput planning). The employer's context (continuous-process APC vs discrete-throughput vs energy) picks which credential is load-bearing.

---

## 5. Experience & Portfolio Expectations per Tier

*Ladder mirrors the exemplar's L1→L4/L5; content retargeted to optimization/control/energy.*

- **L1 — Junior Optimization / Process Data Scientist `~`:** a **portfolio optimization project on a benchmark or simulator** — e.g. **Bayesian optimization** of process parameters (reach a target quality in the fewest experiments), a **DOE / response-surface** study, or an **RL/MPC agent** on a public process-control simulator or discrete-event model. Demonstrated Python + an optimization/ML library. A strong portfolio can substitute for a graduate degree here.
- **L2 — Process / Production Optimization Data Scientist `~`:** 2–4 yr; a **deployed optimizer tied to a real KPI** — throughput +X%, energy −Y% (ideally **M&V-verified**), or yield-at-fixed-quality +Z% — or a **soft-sensor / surrogate model** running in the control room, or a first **APC/MPC controller** commissioned. Owns one optimization use-case end-to-end (data → model/optimizer → deployed operating-point change → monitored benefit).
- **L3 — Senior Industrial Data Scientist / Optimization or APC Lead `~`:** 5–8 yr; **led a plant/line optimization programme**; makes the method tradeoffs (steady-state vs dynamic optimization; **MPC vs RL vs Bayesian-opt**; physics-based vs data-driven surrogate; where uncertainty quantification is needed); sets validation and guardrails. Frequently holds a domain cert (**Six Sigma Black Belt / CEM / ISA CAP**).
- **L4/L5 — Staff / Principal — Process Optimization & Control `~`:** 8+ yr; sets the **optimization strategy across a site/enterprise**, advances methods (RL-for-control, physics-informed surrogates, plant-wide optimization), owns the digital-twin/optimization backbone and its governance. **For process-industry APC the ChemE degree + 10 yrs (4 in APC) is a hard gate** (Marathon, verbatim). Named senior/principal archetypes exist in the wild — e.g. J&J's **"(Senior) Principal Scientist, Process Optimization & Control"** (pharma) and Ford's **Senior Data Scientist – Manufacturing Intelligence** (optimize throughput / bottleneck detection). `~` [J&J Principal Scientist, Process Optimization & Control (title)](https://www.careers.jnj.com/en/jobs/r-003940/senior-principal-scientist-process-optimization-control/) · [Ford Sr Data Scientist, Manufacturing Intelligence](https://www.careers.ford.com/job/dearborn/senior-data-scientist-manufacturing-intelligence-machine-learning-and-ai/48560/96936644992)

---

## 6. Real Job-Posting Evidence (verbatim where useful)

- **Advanced Process Control Engineer — Marathon Petroleum (verbatim, fetched) `✓`:** degree = **"Bachelor of Science degree in Chemical Engineering."** Experience = **"at least ten (10) total years of Engineering experience within refining, petrochemical, or related industries"** with **"at least four (4) years of those years in advanced process control engineering,"** and **"proven experience leading APC applications from concept through sustained operation."** Skills = **"leading multivariable predictive control (MPC/APC) applications,"** process data analysis & dynamic modeling, cost-benefit prioritization, KPI reporting. Tools = **"Honeywell: Experion & TPS/TDC."** No certification specified. [Marathon APC Engineer](https://www.builtinla.com/job/advanced-process-control-engineer/9617548)
- **APC/MPC roles broadly (search synthesis) `✓`:** "expertise in **multivariable control and process optimization**," "**steady-state and dynamic process modeling**," and hands-on **"Aspen APC&O products (DMCplus and DMC3)"** with DCS experience; senior roles prefer an MS/PhD in Chemical/Control/Automation Engineering. [Advanced Process Control Engineer job search](https://www.indeed.com/q-advanced-process-control-apc-engineer-jobs.html)
- **Process Optimization Engineer (Six Sigma flavor, synthesis) `✓`:** degree "Engineering, Statistics, Data Science, or Operations Management"; **"Lean Six Sigma Black Belt certification is often required"**; **"3–5 years as an engineer in a manufacturing environment"**; DMAIC facilitation; **Design of Experiments (DOE)** valued. [Six Sigma engineer postings](https://www.ziprecruiter.com/Jobs/Six-Sigma-Engineer) · [Process-engineer + Six Sigma (Glassdoor)](https://www.glassdoor.com/Job/process-engineer-six-sigma-jobs-SRCH_KO0,26.htm)
- **Manufacturing / Process Data Scientist `✓`:** degree "Data Science, Statistics, Applied Mathematics, Computer Science, Engineering, **Chemical Engineering**, Materials Science … Master's or Ph.D. preferred"; must know "regression, decision trees, ensemble models, time series, forecasting, neural networks, network routing, **linear programming and optimization**"; MES/ERP familiarity. [Data Science in Manufacturing](https://www.datasciencedegreeprograms.net/industries/manufacturing/) · [Manufacturing Process Optimization jobs](https://www.indeed.com/q-manufacturing-process-optimization-jobs.html)
- **Senior/Principal Manufacturing Data Scientist (Ford / jobrxiv synthesis) `✓`:** **"5+ years applying data science, machine learning, statistical modeling, optimization, or advanced analytics"**; Python (pandas, NumPy, scikit-learn, SciPy, XGBoost, PyTorch); use factory data to **"optimize throughput," "bottleneck detection," "process optimization."** [Senior/Principal Manufacturing Data Scientist](https://jobrxiv.org/job/senior-principal-manufacturing-data-scientist/)
- **Energy Data Scientist (energy-optimization sub-area) `✓`:** degree "Data Science, Computer Science, Engineering, Statistics, or Environmental Science"; "3+ years"; Python/R/SQL; SCADA / energy-market data; **"certifications in data science or energy analytics are an advantage."** [Energy Data Scientist education reqs](https://www.careerexplorer.com/careers/energy-data-scientist/education-and-training-requirements/) · [Data Scientist – Energy postings](https://www.ziprecruiter.com/Jobs/Data-Scientist-Energy)
- **Digital-Twin / Process-Simulation Optimization Engineer `~`:** responsibilities = **"deploying and sustaining online process simulations (process digital twins),"** "**process optimization** activities to identify opportunities," KPI monitoring; tools = **Siemens Plant Simulation, Process Simulate, ANSYS Twin Builder, Visual Components**, Python/C++/MATLAB. (Title match "Process Simulation Twin & Optimization Engineer" seen in search; that specific posting body was not retrievable → `~`.) [Digital Twin Engineer JD](https://yardstick.team/job-description/digital-twin-engineer) · [Caterpillar Lead Simulation Engineer (Digital Twin)](https://careers.caterpillar.com/en/jobs/r0000356981/lead-simulation-engineer-digital-twin/)

---

## Frontier grounding (confirms the method core for §4/§5) `✓ ⏱ as of mid-2026`
The niche's method core = **Bayesian optimization + RL-for-process-control + surrogate/soft-sensor modeling**, now an active 2025–26 research front (re-verify on a schedule):
- **Bayesian optimization for advanced manufacturing process design** — BO with active constraint learning, *IISE Transactions* 2025. [Tandfonline 2025](https://www.tandfonline.com/doi/full/10.1080/24725854.2025.2475505)
- **RL in Process Systems Engineering — survey/tutorial**, arXiv 2025 (2510.24272) — the canonical map of RL methods for process control/optimization. [arXiv 2510.24272](https://arxiv.org/pdf/2510.24272)
- **RL agent for multi-objective online process-parameter optimization**, *Applied Sciences* 15(13):7279, 2025. [MDPI 2025](https://www.mdpi.com/2076-3417/15/13/7279)
- **Bayesian optimization for semiconductor laser-dicing process discovery**, arXiv 2025. [arXiv 2511.23141](https://arxiv.org/pdf/2511.23141)

---

## Sources (URLs actually fetched or surfaced this pass)

**Certifications / bodies**
- ASQ Six Sigma Black Belt (CSSBB): https://www.asq.org/cert/six-sigma-black-belt
- ISA Certified Automation Professional (CAP) requirements: https://www.isa.org/certification/cap/cap-requirements
- AspenTech Aspen DMC3 User Certification: https://esupport.aspentech.com/UniversityCourse?id=a3p4P000000kpXLQAY
- Aspen DMCplus product: https://www.aspentech.com/en/products/msc/aspen-dmcplus/
- AEE Certified Energy Manager (CEM): https://www.aeecenter.org/certified-energy-manager/becoming-a-cem/
- AEE Certified Measurement & Verification Professional (CMVP): https://www.aeecenter.org/certified-measurement-verification-professional/
- ASCM APICS CPIM: https://www.ascm.org/learning-development/certifications-credentials/cpim/
- INFORMS Certified Analytics Professional (CAP): https://www.certifiedanalytics.org/ · https://www.certifiedanalytics.org/frequently-asked-questions

**University programs / courses**
- Imperial MSc Machine Learning and Process Systems Engineering: https://www.imperial.ac.uk/study/courses/postgraduate-taught/process-systems-engineering/
- Imperial Sargent Centre for Process Systems Engineering: https://www.imperial.ac.uk/process-systems-engineering/
- Imperial MSc Control and Optimisation: https://www.imperial.ac.uk/study/courses/postgraduate-taught/control-optimisation/
- CMU Center for Advanced Process Decision-making (CAPD): https://capd.cheme.cmu.edu/
- CMU 06-665 Process Systems Modeling: https://www.cheme.engineering.cmu.edu/education/graduate-programs/courses/masters/06665-process-systems-modeling.html
- Georgia Tech ISyE MS Operations Research: https://www.isye.gatech.edu/academics/masters/degrees/ms-operations-research · https://catalog.gatech.edu/programs/operations-research-ms/
- Northwestern IEMS: https://www.mccormick.northwestern.edu/industrial/
- UW-Madison (Zavala / Scalable Systems Lab): https://engineering.wisc.edu/directory/profile/victor-zavala-tejeda/

**Job-posting evidence**
- Marathon Petroleum — Advanced Process Control Engineer (verbatim): https://www.builtinla.com/job/advanced-process-control-engineer/9617548
- Advanced Process Control (APC) engineer job search: https://www.indeed.com/q-advanced-process-control-apc-engineer-jobs.html
- Data Science in Manufacturing (degrees/skills): https://www.datasciencedegreeprograms.net/industries/manufacturing/
- Manufacturing Process Optimization jobs: https://www.indeed.com/q-manufacturing-process-optimization-jobs.html
- Six Sigma engineer postings: https://www.ziprecruiter.com/Jobs/Six-Sigma-Engineer · https://www.glassdoor.com/Job/process-engineer-six-sigma-jobs-SRCH_KO0,26.htm
- Senior/Principal Manufacturing Data Scientist: https://jobrxiv.org/job/senior-principal-manufacturing-data-scientist/ · https://www.careers.ford.com/job/dearborn/senior-data-scientist-manufacturing-intelligence-machine-learning-and-ai/48560/96936644992
- J&J (Senior) Principal Scientist, Process Optimization & Control (title only): https://www.careers.jnj.com/en/jobs/r-003940/senior-principal-scientist-process-optimization-control/
- Energy Data Scientist education reqs: https://www.careerexplorer.com/careers/energy-data-scientist/education-and-training-requirements/ · https://www.ziprecruiter.com/Jobs/Data-Scientist-Energy
- Digital Twin Engineer JD: https://yardstick.team/job-description/digital-twin-engineer · https://careers.caterpillar.com/en/jobs/r0000356981/lead-simulation-engineer-digital-twin/

**Frontier (method core, time-sensitive)**
- BO for advanced manufacturing (IISE Transactions 2025): https://www.tandfonline.com/doi/full/10.1080/24725854.2025.2475505
- RL in Process Systems Engineering survey (arXiv 2025): https://arxiv.org/pdf/2510.24272
- RL multi-objective process-parameter optimization (MDPI 2025): https://www.mdpi.com/2076-3417/15/13/7279
- BO for semiconductor laser dicing (arXiv 2025): https://arxiv.org/pdf/2511.23141

*Confidence tags: `✓` grounded against a fetched/searched source · `~` inferred / synthesis / single-source paraphrase / title-only · `⏱` time-sensitive (INFORMS CAP structure and the frontier list re-verify on a schedule). No course code, certification name, or prerequisite in this report was invented; two named senior-role postings (J&J, Aramco process-simulation-twin) were surfaced by search but their bodies were not retrievable (404/410) and are marked `~`.*
