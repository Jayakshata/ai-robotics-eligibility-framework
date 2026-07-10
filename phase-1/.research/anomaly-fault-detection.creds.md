> Provenance: background research agent (creds pass) for the applied-AI niche **Anomaly & Fault Detection** (Area 2 — Analytics / Predictive AI), mid-2026. Raw agent report, preserved verbatim. Confidence: `✓` grounded against a fetched/searched source · `~` inferred / synthesis / single-source paraphrase (also used as a leading mark on wholly-unverified claims) · `⏱` time-sensitive.

I have comprehensive coverage across all six requested items. Compiling the final report.

---

# Anomaly & Fault Detection — Credentials & Eligibility

*Scope: the **analytics / predictive-AI layer that detects anomalies and faults in real time** on operational, process and sensor time-series — detection and diagnosis, streaming detection, concept drift, false-alarm and alarm-flood management, and the alerting/alarm-rationalization around it. The hire is an **industrial / operational data scientist, ML engineer, or detection engineer** — not a roboticist or an LLM-agent engineer.*

**MECE boundary (kept strict) — state this in §1 and §12 of the profile:**
- **vs Predictive Maintenance (the signed-off exemplar):** PdM is **PROGNOSIS** — remaining-useful-life, degradation, the maintenance decision. **This niche is DETECTION-FIRST** and **broader in signal scope**: real-time detection across operational and process telemetry, including **non-asset signals** (process excursions, batch deviations, IT/ops and security telemetry), **streaming** detection, **concept drift**, and **false-alarm / alarm-flood** management. Do **not** re-tell RUL. `✓`
- **vs Quality/Yield & Defect Analytics (sibling Area-2 niche):** that niche models the quality of the **product** (defects, yield, conformance, SPC on quality characteristics). This niche watches the **live behavior of the process/asset/system** for deviations as they happen. They overlap on SPC/control-charts (the original anomaly detector) — reference, don't absorb. `~`
- **vs Forecasting & Planning (sibling):** demand/capacity/inventory forecasting is planning; this is detection. The **APICS/ASCM CPIM/CSCP** credential belongs to *that* niche, **not** this one. `~`

**One-line shape:** a **statistics / DS / ML core + a domain overlay** — but the domain moat **FORKS by where the signals live** (process/OT, discrete-manufacturing quality, IT/cloud ops, security). The quantitative core is the harder-to-substitute half; **which domain certificate is the moat depends on the vertical.** This fork is the single most important niche-specific finding below. `~`

---

## 1. Acceptable Undergraduate Degrees (tiered; strongest for THIS niche)

The shared truth: the classical tools of this niche — **control charts / SPC, changepoint detection, residual generation, systems monitoring** — live inside **Statistics**, **Industrial & Systems Engineering (ISE)**, and (for model-based fault detection) **Control/Instrumentation engineering** departments. So the tiering tilts *more statistical and more control-theoretic* than Predictive Maintenance did.

**Tier 1 — strongest, on-target single degrees**
- **Statistics / Applied Statistics** `✓` — the methodological core. Anomaly detection *is* applied statistics: control charts, CUSUM/EWMA, changepoint detection, multivariate outlier methods (Hotelling's T², PCA residuals). General anomaly-detection DS postings ask for a degree "in Statistics, Operations Research, Computer Science, or a related quantitative field." [ZipRecruiter — Data Science Anomaly Detection](https://www.ziprecruiter.com/Jobs/Data-Science-Anomaly-Detection)
- **Data Science / Computer Science (ML)** `✓` — first-class for the streaming/deep-learning half (autoencoders, LSTM/Transformer detectors, isolation forests, online learning). "Master's or PhD in Computer Science, Machine Learning, Statistics, Operations Research" is the recurring senior ask. [Indeed — Anomaly Detection](https://www.indeed.com/q-Anomaly-Detection-jobs.html)
- **Industrial & Systems Engineering (ISE)** `✓` — the department that *teaches SPC, quality control, and systems monitoring* as named core courses (Georgia Tech ISYE 6382, 6810 — see §2). Real manufacturing anomaly-detection postings name **"Industrial Engineering"** in the acceptable-degree list. [Ford Senior DS — Manufacturing Intelligence](https://www.careers.ford.com/job/dearborn/senior-data-scientist-manufacturing-intelligence-machine-learning-and-ai/48560/96936644992)

**Tier 2 — qualifying, and the *distinctive* domain overlays for this niche**
- **Electrical/Electronic & Control/Instrumentation Engineering** `✓` — supplies **model-based fault detection & diagnosis (FDD)**: observers, parity equations, residual generation, signal processing. FDD is an explicit course in EE/Instrumentation programs (Glasgow ENG5031; Anna University EI5010 "Fault Detection and Diagnosis," an EIE elective). [Glasgow ENG5031](https://www.gla.ac.uk/coursecatalogue/course/?code=ENG5031) · [Anna EI5010](https://www.inspirenignite.com/anna-university/ei5010-fault-detection-and-diagnosis-syllabus-for-eie-7th-sem-2019-regulation-anna-university-professional-elective-v/)
- **Chemical / Process Systems Engineering** `✓` — the home of **multivariate statistical process control (MSPC)** and **process fault diagnosis** (PCA/PLS, chemometrics) for continuous and batch processes — directly on-target for "process excursions, batch deviations." [Eigenvector — MSPC short course](https://eigenvector.com/training/short-course-topics/mspc-multivariate-statistical-process-control/)
- **Applied Mathematics / Physics / Operations Research** `✓` — strong quantitative grounding; qualifying with a time-series/anomaly project or coursework. Geophysics/Physics show up in signal-heavy anomaly roles. [Indeed career guide](https://www.indeed.com/career-advice/finding-a-job/data-scientist-qualifications)
- **Cybersecurity / CS (security track)** `✓` — for the **security-telemetry fork** (intrusion/behavioral anomaly detection), where ~70% of SIEM/detection postings list a CS/cybersecurity degree. [LetsDefend — How to become a Detection Engineer](https://letsdefend.io/blog/how-to-become-a-detection-engineer)

**Net vs the PdM exemplar `~`:** PdM ranked Mechanical/Reliability engineering as its key Tier-2 overlay. **This niche swaps that for Statistics moving firmly to Tier-1, and Control/Instrumentation + Chemical/Process-Systems engineering as the distinctive Tier-2 overlays** (model-based and multivariate FDD). Nobody needs kinematics or control-of-robots here; they need control-*theory* residuals and applied statistics.

---

## 2. Named University Programs / Courses (real course codes)

**Plainly: there is NO degree titled "Anomaly Detection" or "Fault Detection."** `✓` It is taught as **modules inside** statistics, ISE, control/instrumentation, and process-engineering programs, plus dedicated **FDD/diagnosis graduate electives**. The closest strong homes, with real course codes:

**Georgia Tech — H. Milton Stewart School of ISyE** (the strongest single named path; codes verified against the catalog) `✓` [GT ISYE catalog](https://catalog.gatech.edu/coursesaz/isye/)
- **ISYE 6810 — *Systems Monitoring and Prognostics*** — the most on-target single graduate course (condition/systems monitoring + detection). `✓`
- **ISYE 6402 — *Time Series Analysis*** (ARMA/ARIMA, (G)ARCH, VAR, diagnostics — the forecasting-residual basis of many detectors). [ISYE 6402 / OMSCS](https://omscs.gatech.edu/isye-6402-time-series-analysis)
- **ISYE 6382 — *Quality Control and Six Sigma*** and **ISYE 3039 — *Methods of Quality Improvement*** (SPC, process capability, control charts — the classical detectors). `✓`
- **ISYE 6740 — *Computational Data Analysis: Learning, Mining, and Computation*** and **ISYE 7406 — *Data Mining and Statistical Learning*** (outlier/anomaly methods, clustering). `✓`
- **ISYE 7405 — *Multivariate Data Analysis*** (Hotelling's T², PCA — the MSPC math). `✓`
- **ISYE 6405 — *Statistical Methods for Manufacturing Design and Improvement***. `✓`
- Delivered affordably online via **Georgia Tech OMSA / OMSCS** — the same industry-heavy anchor used in the PdM exemplar. `✓`

**Dedicated Fault Detection & Diagnosis (FDD) graduate courses / groups `✓`**
- **Linköping University — TSFS06 *Diagnosis and Monitoring*** (Vehicle Systems). Linköping is a recognized academic home of model-based diagnosis research. [Linköping — Fault Diagnostics & Prognostics](https://liu.se/en/research/fault-diagnostics-and-prognostics)
- **University of Glasgow — ENG5031** (fault handling: detection, isolation, fault-tolerant control). [Glasgow ENG5031](https://www.gla.ac.uk/coursecatalogue/course/?code=ENG5031)
- **Anna University — EI5010 *Fault Detection and Diagnosis*** (Instrumentation elective — evidence FDD is a named course in EIE curricula). [Anna EI5010](https://www.inspirenignite.com/anna-university/ei5010-fault-detection-and-diagnosis-syllabus/)

**Machine-learning / online modules where "anomaly detection" is explicitly taught `✓`**
- **Stanford / DeepLearning.AI — Machine Learning Specialization**, Course 3 (*Unsupervised Learning, Recommenders, Reinforcement Learning*) has a **dedicated anomaly-detection week** (Gaussian model, threshold selection, precision/recall/F1). The blue-chip name-brand entry point. [Coursera — Unsupervised Learning](https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning)
- Narrow project courses exist (e.g., Coursera "Anomaly Detection in Time Series Data with Keras," "Advanced Malware and Network Anomaly Detection") — useful portfolio filler, **not** credentials. [Coursera — anomaly detection catalog](https://www.coursera.org/courses?query=anomaly+detection)

**Professional-development home for multivariate process monitoring `✓`**
- **Eigenvector Research short courses — MSPC (Multivariate Statistical Process Control)** with **PLS_Toolbox** — the standard industry short course for PCA/PLS process monitoring and fault detection in continuous/batch/PAT processes. [Eigenvector MSPC](https://eigenvector.com/training/short-course-topics/mspc-multivariate-statistical-process-control/)

*~Other strong ISE/Statistics departments with quality/monitoring faculty (Penn State, Purdue, Texas A&M, Wisconsin–Madison, ASU) apply here as they did for the quality sibling — verify per-program.*

---

## 3. Acceptable Postgraduate Degrees — and can a portfolio outweigh a grad degree?

**Acceptable postgraduate degrees `✓`**
- **MS in Statistics / Applied Statistics** — the deep end (time-series, changepoint, multivariate, Bayesian).
- **MS in Computer Science / Machine Learning / Data Science** — for streaming, deep-learning detectors, and MLOps.
- **MS in Industrial & Systems Engineering / Operations Research** — SPC, systems monitoring, stochastic modeling.
- **MS in Control / Electrical Engineering or Chemical/Process Systems Engineering** — model-based and multivariate FDD.
- **PhD in any of the above** — for method-development, streaming/changepoint research, and Staff/Principal roles.

Real postings confirm the graduate-degree pull at the senior end: anomaly-detection DS roles frequently state **"Master's or PhD in Computer Science, Machine Learning, Statistics, Operations Research"**, and some specify **"a Master's Degree plus 3 years of experience in machine learning, or a PhD."** `✓` [Glassdoor — ML Scientist, Anomaly Detection](https://www.glassdoor.com/Job/machine-learning-scientist-anomaly-detection-jobs-SRCH_KO0,44.htm)

**Can a portfolio outweigh a graduate degree? — split answer `~`**
- **L1–L2 (build/ship detectors): YES.** A strong portfolio — a **streaming detector on a public benchmark (Numenta Anomaly Benchmark / NAB `✓`)** reporting **precision/recall, F1, detection lead-time, and false-positive rate**, plus a deployed drift-aware pipeline — substitutes well for an MS, consistent with general DS hiring. Employers here weigh the *quantitative core* and demonstrable detection metrics over the diploma.
- **L4/L5 or method-invention / research-heavy roles (novel streaming, changepoint, uncertainty-quantified detection): a graduate degree (often PhD) still carries real weight**, because the work is closer to research and the ML-scientist postings gate on it. `✓`
- The domain **certificate** (see §4) is what a portfolio *cannot* easily replace when the role sits inside a regulated process/OT or security context — that's the moat.

---

## 4. Named Certifications That Carry Weight — including the DOMAIN moat (the forked one)

**A. Portable quantitative / ML core** (valued across every fork) `✓`
- **DeepLearning.AI — Machine Learning Specialization** (Andrew Ng / Stanford) — explicitly teaches anomaly detection; **Deep Learning Specialization** for sequence models. [Coursera](https://www.coursera.org/specializations/machine-learning-introduction)
- **A cloud ML cert:** **AWS Certified Machine Learning Engineer – Associate (MLA-C01)** *(note: the older ML Specialty **MLS-C01 retired Mar 2026** per the project grounding reference)*; **Google Cloud Professional Machine Learning Engineer**; **Azure DP-100** (Data Scientist Associate). `✓ (cloud-cert names per _grounding-reference.md)`
- **Databricks Certified Machine Learning Professional** — relevant where streaming/monitoring runs on Spark/Databricks (a common industrial-scale stack). [Databricks ML Professional](https://www.databricks.com/learn/certification/machine-learning-professional)

**B. The DOMAIN MOAT — FORKED by where the signals live.** This is the defining eligibility feature of this niche: unlike PdM (moat = reliability bodies) or Quality (moat = ASQ quality bodies), **which certificate is the moat here depends on the telemetry domain.** `~`

- **Process / OT fork (chemical, oil & gas, power, utilities — process excursions, batch deviations, alarm floods):** *the strongest and most niche-specific moat.*
  - **ISA-18.2 / IEC 62682 Alarm Management** — the standard for alarm rationalization and **alarm-flood management**, which is *literally in this niche's scope*. Credential: **exida Alarm Management Practitioner (AMP)** certificate, earned via course **ALM 102** (issuing body **exida Academy**; 80% exam; program authored by contributors to the ISA-18.2 standard). ISA's own course is **IC39 — Management of Alarm Systems**. [exida AMP](https://www.exida.com/Training/AMP) · [ISA IC39](https://www.isa.org/Training/Course-Description/IC39)
  - **ISA Certified Automation Professional (CAP)** — issuing body **ISA (International Society of Automation)**. Prereq: **four-year technical degree + 5 years / 7,500 hrs automation experience** (or 10 yr / 15,000 hrs without the degree); 2 yr in a position of responsible charge. [ISA CAP requirements](https://www.isa.org/certification/cap/cap-requirements)
  - **ISA Certified Control Systems Technician (CCST), Levels I–III** — instrumentation/measurement-and-control competence; Level I needs ~5 yr combined education + ≥1 yr related experience (higher levels scale up). Technician-tier signal. [ISA CCST requirements](https://www.isa.org/certification/ccst/ccst-requirements)

- **Discrete-manufacturing / quality fork (SPC-based detection on production lines):**
  - **ASQ Certified Quality Engineer (CQE)** — issuing body **ASQ**; **8 years** experience in the CQE Body of Knowledge (SPC is a named domain), ≥3 in a decision-making role; degrees reduce the requirement. [ASQ CQE](https://www.asq.org/cert/quality-engineer)
  - **ASQ Certified Six Sigma Black Belt (CSSBB)** — **3 years** work experience + one/two completed projects with signed affidavits; SPC/control charts are core. (Green Belt **CSSGB** = entry.) [ASQ CSSBB](https://www.asq.org/cert/six-sigma-black-belt)

- **IT / cloud-ops fork (AIOps, observability — metrics/logs/traces anomaly detection):**
  - **Observability-platform certs:** **Dynatrace Associate** (Davis AI anomaly detection), **Splunk** certifications, **Datadog / New Relic** platform credentials `~ (exact Datadog/New Relic cert names — verify)`. AIOps postings ask for "anomaly detection, time-series forecasting, and log analysis" and name Splunk ITSI / Dynatrace / Datadog / Moogsoft / BigPanda. [Dynatrace Associate](https://university.dynatrace.com/certification/dynatrace) · [Splunk certification tracks](https://www.splunk.com/en_us/training/certification-track/splunk-certified-cybersecurity-defense-analyst.html)

- **Security-telemetry fork (intrusion / behavioral anomaly detection, SIEM detection engineering):**
  - **GIAC Certified Intrusion Analyst (GCIA)** — issuing body **GIAC**; trains network-traffic anomaly detection and IDS rule-writing (prep course **SANS SEC503**). [GIAC GCIA](https://www.giac.org/certifications/certified-intrusion-analyst-gcia) · [SANS SEC503](https://www.sans.org/cyber-security-courses/network-monitoring-threat-detection)
  - **SANS SEC555 — Detection Engineering and SIEM Analytics** (the emerging "detection engineer" credential). [SANS SEC555](https://www.sans.org/cyber-security-courses/detection-engineering-siem-analytics)
  - **Splunk Certified Cybersecurity Defense Analyst** — SIEM-native anomaly analytics. [Splunk CDA](https://www.splunk.com/en_us/training/certification-track/splunk-certified-cybersecurity-defense-analyst.html)

- **Rotating-machinery fault-detection fork (shared with PdM):**
  - **ISO 18436-2 Vibration Analyst, Category I–IV** (issuing body **Vibration Institute**; Cat II = working-analyst standard; 5-year recert). Relevant to the fault-**detection** half of machinery condition monitoring. [Vibration Institute](https://vi-institute.org/vibration-analyst/)

**NOT the moat (position correctly, don't list as a differentiator) `~`:** **SMRP CMRP** (maintenance/prognosis → PdM niche) and **APICS/ASCM CPIM/CSCP** (planning/forecasting → Forecasting niche). Adjacent, weaker for pure detection.

---

## 5. Experience & Portfolio Expectations per Seniority Tier

| Tier | Typical experience | Degree / credential signal | Portfolio bar (what "done" looks like) |
|------|--------------------|----------------------------|-----------------------------------------|
| **L1 — Junior anomaly/detection DS** | 0–2 yr | BS in Stats/DS/CS/ISE; a portfolio can carry it | An anomaly/fault-detection project on a **public benchmark (NAB `✓`; ~ also SMD / SWaT / MSL-SMAP — verify)** with **precision/recall, F1, detection lead-time, false-positive rate**; a control-chart or isolation-forest baseline. `~` |
| **L2 — Detection DS / ML engineer** | 2–4 yr (MS preferred *or* strong portfolio) | MS or demonstrated shipping | A **deployed streaming detector** wired to **alerting**, with **drift handling** and **false-alarm reduction**; owns detection for one system end-to-end. Ford's "5+ yr" is senior; security "detection engineer" roles ask **3–5 yr**. `✓` |
| **L3 — Senior / detection lead** | 5–8 yr | MS/PhD common; **a domain cert by vertical** (ISA / ASQ / GIAC) | Architects the detection & monitoring stack; chooses **statistical vs ML vs model-based FDD**; sets **alarm rationalization / thresholds** and **drift strategy**; mentors. `~` |
| **L4/L5 — Staff / Principal** | 8+ yr | Often **PhD** and/or a senior domain cert (**ISA CAP**, **ASQ CQE**) | Sets org-wide detection strategy; advances methods (streaming, changepoint, uncertainty-quantified detection); owns the platform + model governance. `~` |

Grounding for the tier bar: general anomaly-detection DS postings span **"2+ to 5+ years"** with **"3+ years coding Python/R/Scala"**; AIOps roles want **"5+ years in IT operations"**; security detection-engineer roles want **"3–5 years."** `✓` [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Data-Science-Anomaly-Detection) · [KORE1 — AIOps staffing](https://www.kore1.com/aiops-engineer-staffing/) · [cybersierra — SOC→Detection Engineer](https://cybersierra.co/blog/soc-to-detection-engineer/)

---

## 6. Real Job-Posting Evidence (requirement phrasing quoted)

**Ford — Senior Data Scientist, Manufacturing Intelligence (ML & AI)** `✓` — the cleanest on-niche evidence. [Ford posting](https://www.careers.ford.com/job/dearborn/senior-data-scientist-manufacturing-intelligence-machine-learning-and-ai/48560/96936644992)
- Degree (verbatim): *"Bachelor's or Master's degree in Data Science, Computer Science, Statistics, Industrial Engineering, Mechanical Engineering, Manufacturing Engineering, Operations Research, Applied Mathematics, or a related technical field."*
- Experience: *"5+ years of experience applying data science, machine learning, statistical modeling, optimization, or advanced analytics in a professional environment."*
- Required: *"Experience with supervised and unsupervised machine learning methods, including classification, regression, clustering, **anomaly detection**, time-series analysis, forecasting, or process optimization"*; *"Ability to work with **noisy, incomplete, high-frequency, or fragmented operational data**."*
- **Preferred (the niche's signature phrasing):** *"Experience with **real-time or near-real-time anomaly detection on streaming manufacturing data**"* and *"Experience with **MQTT, Kafka, GCP Pub/Sub, AWS IoT, Azure IoT, Spark, Dataflow, Flink**, or similar streaming and industrial IoT tools."*

**AIOps / Observability Engineer (aggregate across postings)** `✓` [KORE1](https://www.kore1.com/aiops-engineer-staffing/) · [Synopsys — Sr Platform Engineer, Observability & AIOps](https://careers.synopsys.com/job/sunnyvale/senior-platform-engineer-observability-and-aiops/44408/96496032656)
- *"Experience with **anomaly detection, time-series forecasting, and log analysis**."*
- Tools: *"Elastic, Grafana, Kafka, Logstash, OpenTelemetry, Prometheus"* on the observability layer; *"Splunk ITSI, Dynatrace, Datadog, Moogsoft, BigPanda"* on the AIOps layer.
- Scope: an AIOps engineer *"builds **detection and correlation logic, not just dashboards**"* — improving *"signal quality, anomaly detection, alert prioritization, and root cause analysis."* (This is the **alarm-flood / false-alarm** half of the niche in IT clothing.)

**Detection Engineer / SIEM (security fork)** `✓` [LetsDefend](https://letsdefend.io/blog/how-to-become-a-detection-engineer) · [SIEMTune](https://siemtune.com/what-is-a-siem-engineer-2025/)
- Degree: *"a bachelor's degree in computer science, cybersecurity, or a related field"* — *"~70% of SIEM Engineer job postings list a degree."*
- Experience: *"3–5 years in cybersecurity."*
- Skills: *"ability to **write and tune detection rules for SIEM**"*, MITRE ATT&CK, SIEM query languages, strong regex; certs valued: *"CompTIA Security+, CISSP, Splunk Certified, Elastic Certified."*

**General anomaly-detection Data Scientist / ML Scientist** `✓` [Glassdoor](https://www.glassdoor.com/Job/machine-learning-scientist-anomaly-detection-jobs-SRCH_KO0,44.htm) · [Indeed](https://www.indeed.com/q-Anomaly-Detection-jobs.html)
- *"Master's or PhD in Computer Science, Machine Learning, Statistics, Operations Research, or a related quantitative field"* (some: *"Master's + 3 years in ML, or a PhD"*).
- *"At least 3 years' coding experience with Python, R or Scala"*; *"deep theoretical knowledge of statistics, linear algebra, optimization"*; *"familiarity with anomaly detection and trend analysis techniques."*

**Net read of the market `~`:** the niche is **not one job title** — it appears as *manufacturing/industrial data scientist* (Ford-style, streaming + IoT), *AIOps/observability engineer* (IT ops), and *detection engineer/SIEM analyst* (security). All three share the **quantitative core + streaming/real-time + false-alarm-management** spine; they **diverge on the domain overlay and its certificate** — exactly the forked-moat finding in §4.

---

## Sources (URLs actually fetched or searched)

**Job-posting evidence**
- Ford Senior DS — Manufacturing Intelligence (fetched, verbatim quotes): https://www.careers.ford.com/job/dearborn/senior-data-scientist-manufacturing-intelligence-machine-learning-and-ai/48560/96936644992
- ZipRecruiter — Data Science Anomaly Detection: https://www.ziprecruiter.com/Jobs/Data-Science-Anomaly-Detection
- Glassdoor — ML Scientist, Anomaly Detection: https://www.glassdoor.com/Job/machine-learning-scientist-anomaly-detection-jobs-SRCH_KO0,44.htm
- Indeed — Anomaly Detection jobs: https://www.indeed.com/q-Anomaly-Detection-jobs.html
- Indeed — Data Scientist qualifications guide: https://www.indeed.com/career-advice/finding-a-job/data-scientist-qualifications
- KORE1 — AIOps Engineer staffing/JD: https://www.kore1.com/aiops-engineer-staffing/
- Synopsys — Sr Platform Engineer, Observability & AIOps: https://careers.synopsys.com/job/sunnyvale/senior-platform-engineer-observability-and-aiops/44408/96496032656
- LetsDefend — How to become a Detection Engineer: https://letsdefend.io/blog/how-to-become-a-detection-engineer
- SIEMTune — What is a SIEM Engineer (2025): https://siemtune.com/what-is-a-siem-engineer-2025/
- cybersierra — SOC to Detection Engineer roadmap: https://cybersierra.co/blog/soc-to-detection-engineer/

**University programs / courses**
- Georgia Tech ISYE course catalog (course codes 6810, 6402, 6382, 6740, 7406, 7405, 6405, 3039): https://catalog.gatech.edu/coursesaz/isye/
- Georgia Tech ISYE 6402 (OMSCS page): https://omscs.gatech.edu/isye-6402-time-series-analysis
- Linköping University — Fault Diagnostics & Prognostics (TSFS06 group): https://liu.se/en/research/fault-diagnostics-and-prognostics
- University of Glasgow — ENG5031 (fault detection/diagnosis): https://www.gla.ac.uk/coursecatalogue/course/?code=ENG5031
- Anna University — EI5010 Fault Detection and Diagnosis syllabus: https://www.inspirenignite.com/anna-university/ei5010-fault-detection-and-diagnosis-syllabus-for-eie-7th-sem-2019-regulation-anna-university-professional-elective-v/
- Eigenvector — MSPC (Multivariate Statistical Process Control) short course: https://eigenvector.com/training/short-course-topics/mspc-multivariate-statistical-process-control/
- Coursera — Unsupervised Learning (anomaly-detection week, Stanford/DeepLearning.AI): https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning
- Coursera — anomaly detection course catalog: https://www.coursera.org/courses?query=anomaly+detection

**Certifications — process/OT (alarm management, automation)**
- exida — ISA-18.2 / IEC 62682 Alarm Management Practitioner (AMP): https://www.exida.com/Training/AMP
- exida — ALM 102 course: https://www.exida.com/Training/Course/alm102-fundamentals-of-alarm-management-for-the-practitioner-ISA18-IEC62682
- ISA — IC39 Management of Alarm Systems: https://www.isa.org/Training/Course-Description/IC39
- ISA — CAP requirements: https://www.isa.org/certification/cap/cap-requirements
- ISA — CCST requirements: https://www.isa.org/certification/ccst/ccst-requirements

**Certifications — quality (ASQ)**
- ASQ — Certified Quality Engineer (CQE): https://www.asq.org/cert/quality-engineer
- ASQ — Certified Six Sigma Black Belt (CSSBB): https://www.asq.org/cert/six-sigma-black-belt

**Certifications — IT ops / observability**
- Dynatrace — Associate certification: https://university.dynatrace.com/certification/dynatrace
- Databricks — Certified Machine Learning Professional: https://www.databricks.com/learn/certification/machine-learning-professional

**Certifications — security / detection engineering**
- GIAC — Certified Intrusion Analyst (GCIA): https://www.giac.org/certifications/certified-intrusion-analyst-gcia
- SANS — SEC503 Network Monitoring & Threat Detection: https://www.sans.org/cyber-security-courses/network-monitoring-threat-detection
- SANS — SEC555 Detection Engineering and SIEM Analytics: https://www.sans.org/cyber-security-courses/detection-engineering-siem-analytics
- Splunk — Certified Cybersecurity Defense Analyst: https://www.splunk.com/en_us/training/certification-track/splunk-certified-cybersecurity-defense-analyst.html

**Certifications — rotating machinery (shared with PdM)**
- Vibration Institute — Vibration Analyst (ISO 18436-2): https://vi-institute.org/vibration-analyst/
- ISO 18436-2:2014 standard: https://www.iso.org/standard/50447.html

**Domain method / benchmark grounding**
- Eigenvector — MSPC monitoring & fault detection with PCA/PLS (PAT): http://www.eigenvector.com/Docs/Wise_PAT.pdf
- Numenta Anomaly Benchmark (NAB) — real-time AD benchmark: https://arxiv.org/pdf/1510.03336
- Survey — Time Series Anomaly Detection in the AIOps Domain: https://arxiv.org/pdf/2308.00393

*Cross-references (internal, not re-fetched): cloud-ML cert renames (AWS MLS-C01→MLA-C01; Azure AI-102→AI-103) are carried from `phase-1/_grounding-reference.md`; degree-tiering and the PdM contrast are carried from `phase-1/analytics/predictive-maintenance.md`.*
