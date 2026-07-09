> Provenance: background research agent (creds pass) for the applied-AI exemplar, mid-2026. Raw agent report, preserved verbatim.

I have comprehensive, verified coverage across all five areas. Compiling the final report now.

---

# Industrial Data Scientist / Predictive-Maintenance & Reliability Engineer — Eligibility, Skills, Subjects & Training

*Scope: the analytics / predictive-AI layer that learns from operational + sensor data (vibration, temperature, current, pressure, SCADA/historian logs) to detect anomalies, diagnose faults, predict failures (RUL), and optimize maintenance. This role sits at the intersection of **data science** and **reliability/condition-monitoring domain knowledge** — distinct from robotics control and LLM-agent engineering (Section 5).*

Sourcing note: claims are web-cited (2024–2026). Items marked **[inferred]** are synthesis/from-knowledge, not a single verbatim source.

---

## 1. Valued Degrees / Backgrounds (ranked)

The strongest candidates combine a **quantitative/analytics core** (to build the models) with **engineering/physical-asset domain literacy** (to know what the signals mean). Employers hire from both directions, but the analytics core is the harder-to-substitute half.

| Rank | Field | Why it ranks here |
|------|-------|-------------------|
| **1** | **Data Science / Statistics / Applied Math** | Directly supplies the load-bearing skills: statistical inference, ML, time-series, probability. Verified: PdM data-scientist postings ask for "a Master's or PhD in a quantitative field" and expertise in "machine learning, time-series analysis, and anomaly detection." [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Predictive-Maintenance-Data-Scientists) |
| **2** | **Computer Science / ML Engineering** | Covers the software + MLOps + data-engineering half (pipelines, deployment, real-time inference) that pure-stats grads often lack. |
| **3** | **Industrial & Systems Engineering (ISE) — analytics track** | Best-balanced single degree: ISE curricula already include "Statistics, Operations Research (Optimization), Quality Control, Data Analysis" and strong stats/linear-algebra, though traditional IE "may be lacking in unstructured data analysis, advanced ML, and programming." [IIoT World](https://www.iiot-world.com/industrial-iot/connected-industry/data-science-in-industrial-engineering/) · [Georgia Tech ISyE BS in IE — Analytics & Data Science](https://catalog.gatech.edu/programs/industrial-engineering-analytics-data-science-bs/) · [ASEE paper on IE data-analytics curriculum](https://peer.asee.org/data-analytics-in-an-industrial-and-systems-engineering-curriculum.pdf) |
| **4** | **Mechanical / Reliability / Maintainability Engineering** | Supplies the *domain*: failure physics, vibration, rotordynamics, Weibull/FMEA/RCM. Strong entry path when paired with self-taught Python/ML. Reliability-engineer JDs require "familiarity with RCM and FMEA" and "Weibull analysis, root cause analysis." [Reliability Engineer JD (SCALE)](https://appleone.com/Employers/SCALE/JobDescription/Index/1113) |
| **5** | **Electrical / Mechatronics / Aerospace** | Signal-processing fluency (FFT, filtering) and sensor/instrumentation knowledge transfer directly to condition monitoring. **[inferred]** |
| **6** | **Physics / Chemical / Process Engineering** | Good quantitative grounding + process-industry domain (plant health management). **[inferred]** |

**Best-of-both:** an analytics-core degree **plus** a domain minor/certificate, or an ISE/ME degree **plus** an ML specialization. Employers increasingly hire ISE grads through explicit "Data Science & ML" pathways. [UW Industrial & Systems Engineering — Data Science & ML Pathway](https://ise.washington.edu/datasciencepathway)

### Renowned programs

**Data-science / analytics / statistics (general, US News / Fortune 2025–26):**
- **UC Berkeley** — ranked #1 in Data Analytics & Data Science. [US News undergrad DS rankings](https://www.usnews.com/best-colleges/rankings/computer-science/data-analytics-science)
- **Carnegie Mellon** (#2), **Stanford** (MS Statistics w/ Data Science emphasis), **Univ. of Michigan–Ann Arbor** (#6), **Columbia**, **Johns Hopkins** (Whiting — concentrations in statistics, ML, optimization, computing). [Fortune — Best Master's in Data Science 2025](https://fortune.com/education/information-technology/best-masters-in-data-science/) · [US News Statistics rankings](https://www.usnews.com/best-graduate-schools/top-science-schools/statistics-rankings)
- **Georgia Tech OMSA** (Online MS Analytics) — high-ranked, affordable, industry-heavy. [Fortune](https://fortune.com/education/information-technology/best-masters-in-data-science/)

**Domain-specific PHM / reliability centers (the differentiator for this niche):**
- **University of Maryland — CALCE** (Center for Advanced Life Cycle Engineering): the flagship academic center for **Prognostics & Health Management**; runs a PHM short course + consortium. [CALCE PHM](https://calce.umd.edu/prognostics-and-health-management) · [CALCE PHM short course](https://calce.umd.edu/prognostics-short-course)
- **University of Tennessee, Knoxville — Reliability & Maintainability Engineering (RME)**: MS (30 credit hrs) + graduate certificate, on-campus or distance. [UT RME program](https://rme.utk.edu/) · [Vols Online MS RME](https://volsonline.utk.edu/program/masters/ms-reliability-maintainability-engineering/)

---

## 2. Certifications

### A. Data-science / ML certifications (the "analytics" half)

| Cert | Covers | Notes |
|------|--------|-------|
| **DeepLearning.AI — Machine Learning Specialization** (Andrew Ng, w/ Stanford Online) | Supervised/unsupervised ML foundations; 3 courses. The updated successor to the 4.8M-learner original. | Best entry credential. [DeepLearning.AI](https://www.deeplearning.ai/courses/machine-learning-specialization/) · [Coursera](https://www.coursera.org/specializations/machine-learning-introduction) |
| **DeepLearning.AI — Deep Learning Specialization** | Neural nets, CNNs, sequence models (RNN/LSTM) — directly relevant to time-series/RUL. | [DeepLearning.AI](https://www.deeplearning.ai/courses/deep-learning-specialization/) |
| **AWS Certified Machine Learning – Specialty** | Data engineering, EDA, modeling, ML implementation on SageMaker/Forecast. 180 min, 65 Q, ~$300; AWS suggests 1–2 yrs hands-on. | Largest job market share. [FlashGenius comparison](https://flashgenius.net/blog-article/aws-vs-azure-vs-google-cloud-certifications-which-cloud-path-should-you-choose-in-2025) |
| **Google Professional ML Engineer** | Design/build/productionize ML on Vertex AI; **strongest MLOps focus**. ~40–60 hrs prep. | [FlashGenius](https://flashgenius.net/blog-article/aws-vs-azure-vs-google-cloud-certifications-which-cloud-path-should-you-choose-in-2025) |
| **Microsoft Azure Data Scientist Associate (DP-100)** | ML model development/deployment on Azure ML. (AI-102 = AI Engineer.) | For Microsoft-ecosystem shops. [FlashGenius](https://flashgenius.net/blog-article/aws-vs-azure-vs-google-cloud-certifications-which-cloud-path-should-you-choose-in-2025) |

### B. Reliability / maintenance **domain** certifications (the differentiator)

| Cert | Body | Covers | Eligibility / cost |
|------|------|--------|--------------------|
| **CMRP — Certified Maintenance & Reliability Professional** | SMRP / SMRPCO | 5 pillars of the SMRP Body of Knowledge: **Business & Management, Equipment Reliability, Manufacturing Process Reliability, Organization & Leadership, Work Management**. The leading, **ANSI-accredited** M&R credential. | **No education or experience prerequisites.** Fees: $300 member / $250 sponsor-employee or US veteran / **$470 non-member**. Cannot retake within 6 months. 3-yr cycle, 50 recert hours. [SMRP CMRP](https://smrp.org/Certification/CMRP-Certification/) |
| **CRE — Certified Reliability Engineer** | ASQ | Design review & control; prediction/estimation/apportionment; **FMEA**; reliability testing & field-failure math modeling; human factors; reliability information systems; program management across the product life cycle. | **8 yrs experience** (3 in a decision-making role); waivers by degree (**bachelor's −4 yrs, master's/PhD −5**). Open-book exam, 165 Q (CBT), ~$550 initial / $350 retake. [ASQ CRE](https://www.asq.org/cert/reliability-engineer) |
| **Vibration Analyst — ISO 18436-2, Categories I–IV** | Vibration Institute / ISO-accredited bodies | Condition monitoring via vibration. **Cat I:** route data collection vs. alarms (6 mo exp, 30 training hrs). **Cat II** *(industry-standard working analyst)*: single-channel FFT/waveform/phase; diagnose unbalance, misalignment, looseness, bearing & gear defects (18 mo, 60 hrs). **Cat III:** direct programs; spectral/waveform/orbit analysis, ODS, single-plane balancing (36 mo, 90 hrs). **Cat IV:** vibration theory, advanced signal processing, rotordynamics (60 mo, 130 hrs). | [RITEC/Vibration Institute levels](https://www.ritec-eg.com/Vibration%20Training/Vibration-Analyst-Certification-Levels.html) · [I-care Cat III](https://www.icareweb.com/training-sessions/vibration-analysis-cat-iii-iso-18436-2-certification/) · [Vibromera ISO 18436-2](https://vibromera.eu/glossary/iso-18436-2/) |

**Positioning [inferred]:** CRE leans **design/hardware reliability** (predicting reliability of products/systems), CMRP leans **maintenance & physical-asset management** of operating plants, and ISO 18436 is the hands-on **condition-monitoring** skill. A data scientist entering this field typically pairs a **DS/ML cert** with **one domain cert** — CMRP for a maintenance-org context, CRE for a design/reliability context, or ISO 18436 Cat II if working closely with vibration data.

---

## 3. JD-Style Skills (required vs preferred + tools)

Synthesized from live 2025–26 postings (Bombardier, Tractian, ZipRecruiter aggregate). [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Predictive-Maintenance-Data-Scientists) · [Tractian — Data Scientist, Predictive Maintenance](https://careers.tractian.com/jobs/92b9c55e-af78-4d04-81f3-15f1cc4a93b8) · [Indeed listings](https://www.indeed.com/q-data-science-predictive-maintenance-jobs.html)

**Required (core):**
- **Programming:** Python (primary), often R; **SQL** for data access.
- **ML & statistics:** supervised/unsupervised ML, **time-series analysis**, **anomaly detection**, applied statistics/probability.
- **Time-series & signal domain:** knowledge of **signal processing** and **industrial/IoT sensor data**.
- **Prognostics:** failure prediction, and increasingly **RUL estimation** (see PHM below).
- **Data handling:** real-time data pipelines; equipment-reliability understanding.
- **Comms:** translate complex insights for engineers/ops (explicitly called out).
- **Degree:** DS/engineering/quantitative field; senior roles → **MS/PhD + ~5 yrs**.

**Preferred / differentiating:**
- **Cloud platforms** (AWS/Azure/GCP) and MLOps.
- **Deep learning for sequences** (LSTM/TCN/Transformer) for RUL/prognostics — reflected in current PHM literature. [ScienceDirect RUL review](https://www.sciencedirect.com/science/article/pii/S2666827025000878)
- **BI/reporting:** Power BI or Tableau; advanced Excel.
- **Domain cert** (CMRP/CRE/vibration) or condition-monitoring experience.
- **PHM / RCM / FMEA** familiarity.

**Tooling landscape (concrete):**
- **Python ML/data stack [inferred-standard]:** NumPy, pandas, scikit-learn, XGBoost/LightGBM, PyTorch/TensorFlow.
- **Time-series & anomaly libraries (verified):** **Darts** (forecasting + anomaly detection, wraps **PyOD**), **tsfresh** (auto-extracts ~800 features incl. FFT coefficients, entropy, autocorrelation), **sktime** (incl. STRAY anomaly detection), **PyOD**. [unit8 Darts](https://github.com/unit8co/darts) · [tsfresh via Analytics Vidhya](https://www.analyticsvidhya.com/blog/2022/05/5-python-libraries-for-time-series-analysis/)
- **Signal processing (verified in domain tooling):** FFT, Wavelet Packet Transform, time/frequency/time-frequency features.
- **Commercial PdM platform:** **MATLAB Predictive Maintenance Toolbox** — Diagnostic Feature Designer (time/frequency/time-frequency/physics features); statistical/ML/DL fault & anomaly detection; **RUL via survival, similarity, and trend/degradation models**; bearing/pump/motor/gearbox/battery workflows. [MathWorks PdM Toolbox](https://www.mathworks.com/products/predictive-maintenance.html)
- **MLOps (verified):** Docker, Kubernetes, CI/CD, orchestration, model monitoring/retraining, **feature stores (Feast, Hopsworks)**. [Coursera MLOps](https://www.coursera.org/articles/mlops-engineer) · [ProjectPro MLOps](https://www.projectpro.io/article/how-to-become-an-mlops-engineer/478)
- **Benchmark datasets [verified]:** NASA **C-MAPSS** turbofan RUL, PHM Society Data Challenges (bearings, etc.). [C-MAPSS / IEEE DataPort](https://ieee-dataport.org/documents/c-mapss-dataset)

---

## 4. Subject List (study / training map)

**1. Statistics & ML foundations** — probability, statistical inference, regression, supervised/unsupervised learning, feature engineering, model evaluation, deep learning (CNN/RNN/LSTM/Transformer). [DeepLearning.AI](https://www.deeplearning.ai/courses/machine-learning-specialization/)

**2. Time-series & signal processing** — forecasting (ARIMA→deep models), stationarity/seasonality, **anomaly detection**; **FFT, spectral analysis, wavelets, filtering, envelope analysis, phase/orbit** for rotating machinery. [MathWorks PdM](https://www.mathworks.com/products/predictive-maintenance.html)

**3. PHM & Reliability Engineering** — the PHM pipeline: **data acquisition → degradation detection → diagnostics → prognostics → maintenance decision**; **RUL** estimation (physics-based, data-driven, hybrid); reliability math: **Weibull, FMEA, RCM, RCA, survival analysis**, condition indicators. [Prognostics & health management for predictive maintenance: a review (ScienceDirect, 2024)](https://www.sciencedirect.com/science/article/abs/pii/S0278612524001183) · [AI-based data-driven prognostics survey](https://www.sciencedirect.com/science/article/abs/pii/S0360835223006290)

**4. Data engineering & MLOps** — SQL, time-series/historian databases, streaming/real-time pipelines (IoT/OPC-UA/MQTT **[inferred]**), cloud, model deployment/monitoring/retraining, feature stores. [Coursera MLOps](https://www.coursera.org/articles/mlops-engineer)

**5. Domain / condition monitoring** — sensors & instrumentation (accelerometers, thermography, current/oil analysis), machinery fault modes (bearings, gears, imbalance, misalignment), maintenance strategy (preventive vs. predictive vs. RCM), and asset-management context (the CMRP 5 pillars). [SMRP](https://smrp.org/Certification/CMRP-Certification/)

---

## 5. How Eligibility Differs — vs Robotics vs LLM/Agent Engineers

All three are "AI-adjacent," but the **eligibility signals barely overlap**. The industrial data scientist is defined by **statistics + time-series/signal processing + physical-asset domain**; the others by **real-time control/hardware** and **generative-AI/software** respectively.

| Dimension | **Industrial Data Scientist / PdM** | **Robotics Engineer** | **LLM / Agent Engineer** |
|-----------|-------------------------------------|-----------------------|--------------------------|
| **Core degree** | Data Science, Statistics, Applied Math, ISE, ME/Reliability | Robotics, **Mechanical/Electrical Eng, CS**; MS often preferred | CS, AI, Data Science; **PhD not required**, portfolio > credentials |
| **Defining skills** | Time-series ML, **anomaly detection, RUL/prognostics/PHM**, signal processing, statistics | **Control theory, kinematics, sensor fusion**, real-time embedded, motion planning | **RAG, prompt engineering, vector DBs, LLM APIs, agent orchestration, evals** |
| **Languages/tools** | Python (pandas/sklearn/PyTorch), Darts/tsfresh, SQL, MATLAB PdM Toolbox, BI | **C++ & Python**, **ROS/Gazebo**, Simulink, CAD, embedded/RTOS | Python, **LangChain/LangGraph**, vector DBs, LLM APIs (OpenAI/**Anthropic**), MCP |
| **Data** | Historical sensor/operational time-series, run-to-failure | Live sensor + actuator feedback loops, physics/dynamics | Text/tokens, documents, tool-call traces |
| **Domain certs** | **CMRP, CRE, ISO 18436 vibration** | (Robotics/functional-safety, controls) — different world | None domain-standard yet; MLOps/cloud |
| **"Ships" what** | Failure predictions, health scores, maintenance-decision models | A physically moving/actuating system | A reasoning/generative software system |
| **Sources** | This report | [Robotics Engineer JD (Indeed)](https://www.indeed.com/hire/job-description/robotics-engineer) · [Robotics Controls Engineer JD (Kaplan)](https://jobs.community.kaplan.com/career/robotics-controls-engineer/job-descriptions) | [LLM Engineer Career Guide 2025](https://zenvanriel.com/job/llm-engineer-career/) · [Agentic AI Engineer guide](https://www.novelvista.com/blogs/ai-and-ml/agentic-ai-engineer-career-guide) · [AI Engineer JD (Indeed)](https://www.indeed.com/hire/job-description/ai-engineer) |

**Key eligibility contrasts:**
- **vs Robotics:** Robotics demands **real-time control, kinematics, embedded/hardware, and ROS/C++** — none of which the PdM data scientist needs. Conversely robotics rarely requires reliability statistics (Weibull/FMEA), survival analysis, or CMRP/CRE. Robotics is *closed-loop actuation*; PdM is *offline/near-real-time prediction from logged signals*. [Indeed Robotics JD](https://www.indeed.com/hire/job-description/robotics-engineer)
- **vs LLM/Agent:** LLM engineering centers on **generative models, RAG, prompt/agent orchestration, vector DBs, and eval/observability** — a *software + generative-AI* profile where a strong portfolio can outweigh a graduate degree. The PdM role instead rewards **statistical/time-series depth and physical-domain knowledge**, and often explicitly wants an **MS/PhD in a quantitative field** plus reliability-domain literacy. Minimal skill transfer in either direction beyond shared Python + MLOps. [LLM Engineer Career Guide](https://zenvanriel.com/job/llm-engineer-career/) · [ZipRecruiter PdM](https://www.ziprecruiter.com/Jobs/Predictive-Maintenance-Data-Scientists)

---

### Consolidated sources (2024–2026)
- PdM job market/skills: [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Predictive-Maintenance-Data-Scientists) · [Tractian JD](https://careers.tractian.com/jobs/92b9c55e-af78-4d04-81f3-15f1cc4a93b8) · [Indeed](https://www.indeed.com/q-data-science-predictive-maintenance-jobs.html)
- Degrees/programs: [Georgia Tech ISyE](https://catalog.gatech.edu/programs/industrial-engineering-analytics-data-science-bs/) · [UW ISE DS pathway](https://ise.washington.edu/datasciencepathway) · [IIoT World](https://www.iiot-world.com/industrial-iot/connected-industry/data-science-in-industrial-engineering/) · [US News DS](https://www.usnews.com/best-colleges/rankings/computer-science/data-analytics-science) · [Fortune 2025](https://fortune.com/education/information-technology/best-masters-in-data-science/) · [UMD CALCE](https://calce.umd.edu/prognostics-and-health-management) · [UT Knoxville RME](https://rme.utk.edu/)
- Certs: [SMRP CMRP](https://smrp.org/Certification/CMRP-Certification/) · [ASQ CRE](https://www.asq.org/cert/reliability-engineer) · [ISO 18436-2 levels](https://www.ritec-eg.com/Vibration%20Training/Vibration-Analyst-Certification-Levels.html) · [DeepLearning.AI ML](https://www.deeplearning.ai/courses/machine-learning-specialization/) · [Cloud ML cert comparison](https://flashgenius.net/blog-article/aws-vs-azure-vs-google-cloud-certifications-which-cloud-path-should-you-choose-in-2025)
- PHM/RUL science: [ScienceDirect RUL review 2025](https://www.sciencedirect.com/science/article/pii/S2666827025000878) · [PHM for PdM review 2024](https://www.sciencedirect.com/science/article/abs/pii/S0278612524001183) · [C-MAPSS dataset](https://ieee-dataport.org/documents/c-mapss-dataset)
- Tools: [MathWorks PdM Toolbox](https://www.mathworks.com/products/predictive-maintenance.html) · [Darts](https://github.com/unit8co/darts) · [MLOps guide](https://www.coursera.org/articles/mlops-engineer)
- Differentiation: [Robotics JD (Indeed)](https://www.indeed.com/hire/job-description/robotics-engineer) · [LLM Engineer guide](https://zenvanriel.com/job/llm-engineer-career/) · [Agentic AI Engineer guide](https://www.novelvista.com/blogs/ai-and-ml/agentic-ai-engineer-career-guide)

---

**Summary for the caller:** The role is a **DS/stats/ML core + reliability-domain overlay**. Rank of backgrounds: Data Science/Stats/Applied Math → CS/ML Eng → Industrial & Systems Eng (analytics track) → Mechanical/Reliability Eng → EE/Mechatronics. The signature **domain certs are CMRP (SMRP, no prereqs, maintenance-org), CRE (ASQ, 8-yr experience, design-reliability), and ISO 18436-2 vibration Cat I–IV (Cat II = working-analyst standard)**, paired with a **DS/ML cert (DeepLearning.AI, plus a cloud ML cert)**. Signature skills: **time-series ML, anomaly detection, prognostics/RUL, PHM, signal processing (FFT/wavelet), Python TS stack (Darts/tsfresh/PyOD), MATLAB PdM Toolbox, MLOps**. It diverges sharply from robotics (control/ROS/embedded/kinematics) and from LLM/agent engineering (RAG/prompt/vector-DB/orchestration) — shared ground is limited to Python + MLOps. Two source URLs failed to fetch (Tractian direct page 307-redirected; Yardstick template rate-limited), but their skill content was captured via the search aggregates cited.
