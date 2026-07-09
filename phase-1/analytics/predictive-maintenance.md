# Per-Niche Profile — Predictive Maintenance & Reliability

> **Applied-AI area exemplar (Analytics / Predictive AI, Area 2).** The industrial-data-science layer that learns from operational & sensor data to predict failures and optimize — NOT robot control, NOT LLM-agent engineering. Standard 12-section template, adapted: eligibility is DS/stats + a reliability-domain overlay; §9 is data/sensors/compute; §7 is the time-series-foundation-model frontier. Research-backed (mid-2026). `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Niche:** Predictive Maintenance & Reliability · **Area:** Analytics / Predictive AI (non-embodied) · **Type:** `[F]` foundational for manufacturing (`[★]` time-series FMs)
**Draws on:** industrial data science (time-series/ML) **+** reliability / condition-monitoring domain · **Serves platforms (C):** asset-agnostic · **Verticals (B):** B1 manufacturing (core), B7 mining, B8 oil & gas, B10 autonomous-vehicle fleets

---

## 1. Definition & Scope
Learning from **operational and sensor data** (vibration, temperature, motor current, acoustic/ultrasonic, oil, SCADA/historian logs) to **detect anomalies, diagnose faults, predict failures (remaining-useful-life), and optimize maintenance.** This is the **analytics / predictive-AI layer** — industrial data science plus reliability-engineering domain knowledge. **In scope:** time-series ML, anomaly detection, RUL / prognostics (PHM), signal processing, condition monitoring, and the MLOps to run it. **Out of scope:** the robot's embodied control (A-Embodied) and LLM/agent engineering (Area 1 — though generative AI is entering the maintenance *workflow*).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Data Scientist (Predictive Maintenance) | Builds features & models on sensor data under supervision; runs experiments on benchmark/plant data. |
| **L2** | PdM / Reliability Data Scientist | Owns a PdM model end-to-end (ingest → features → RUL/anomaly → deploy → monitor); connects it to a maintenance decision. |
| **L3** | Senior Industrial Data Scientist / Reliability Data Science Lead | Designs the analytics architecture; makes classical-vs-deep / physics-hybrid tradeoffs; sets validation; mentors. |
| **L4/L5** | Staff / Principal — PHM & Reliability Analytics | Sets the prognostics strategy; advances RUL/uncertainty methods; owns the data-backbone and model governance. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials
**The role = a data-science / statistics / ML core + a reliability-domain overlay `✓`.** The analytics core is the harder-to-substitute half; employers hire from both directions but weight the quantitative core.

**Acceptable undergraduate degrees** — Tier 1: **Data Science / Statistics / Applied Mathematics**, **CS / ML Engineering**. Tier 2: **Industrial & Systems Engineering (analytics track)** — the best-balanced single degree; **Mechanical / Reliability Engineering** — supplies the failure-physics domain; **EE / Mechatronics** — signal-processing & sensor fluency; Physics / Chemical / Process (with analytics).

**Highly-valued programs `✓`** — data science: **UC Berkeley** (top-ranked), **CMU**, **Stanford** (MS Statistics/DS), **Michigan**, **Georgia Tech OMSA** (affordable, industry-heavy). **PHM / reliability specialists (the differentiator):** **University of Maryland — CALCE** (the flagship academic Prognostics & Health Management center) and **UT-Knoxville — Reliability & Maintainability Engineering (RME)** (MS + graduate certificate).

**Acceptable postgraduate degrees** — MS/PhD in a quantitative field is often preferred for senior roles; or an ISE/ME degree + an ML specialization.

**Highly-valued certifications `✓`** — pair a **DS/ML cert** with a **reliability-domain cert**:
- *Analytics:* DeepLearning.AI **ML** + **Deep Learning** specializations; a cloud ML cert (**AWS ML-Specialty**, **Google PMLE** — strongest MLOps, **Azure DP-100**).
- *Domain (the moat):* **CMRP** (SMRP — *no prerequisites*; maintenance & asset management), **CRE** (ASQ — 8 yrs experience; design-reliability: Weibull/FMEA), **ISO 18436-2 Vibration Analyst Cat I–IV** (Cat II = the working-analyst standard).

**Experience & portfolio** — L1: an **RUL or anomaly-detection project** on real/benchmark data (**NASA C-MAPSS**, **PRONOSTIA**). L2: 2–4 yr, a **deployed PdM model** connected to a maintenance decision. L3: 5–8 yr, led a plant/fleet PdM programme. L4/L5: 8+ yr and/or PHM research / a domain cert (CMRP/CRE).

## 4. Skill Profile (JD-style)

**Required / must-have**
- **Python** (pandas, NumPy, **scikit-learn**) + **SQL**
- **ML & statistics** — supervised/unsupervised ML, applied statistics/probability
- **Time-series analysis** and **anomaly detection**
- **Signal processing** — FFT, spectral/envelope analysis, filtering (for rotating machinery)
- **Prognostics** — failure prediction, **RUL (remaining-useful-life)** estimation
- **Data handling** — real-time / batch pipelines over industrial sensor data
- **Communication** — translate model output into a maintenance action for engineers/ops

**Preferred / differentiating**
- **Deep learning for sequences** — LSTM / TCN / **Transformer** (and GNNs) for RUL
- Cloud + **MLOps** (Docker/K8s, model monitoring/retraining, feature stores)
- **BI/reporting** (Power BI / Tableau)
- **PHM / RCM / FMEA / Weibull / survival analysis**; a **domain cert** (CMRP/CRE/vibration)

**Tools & tech stack** — *Languages:* Python (+ R) · *TS/ML:* **Darts, tsfresh, sktime, aeon, PyOD**, Nixtla; XGBoost/LightGBM; PyTorch; **MATLAB Predictive Maintenance Toolbox** · *Time-series DBs:* InfluxDB, TimescaleDB, **TDengine** (native OPC UA/MQTT) · *MLOps:* Docker, Kubernetes, feature stores (Feast/Hopsworks) · *Benchmarks:* **NASA C-MAPSS** (turbofan RUL), **PRONOSTIA/FEMTO** (bearings) · *Domain:* accelerometers/IEPE, thermal, MCSA, ultrasonic, oil analysis; historians (**AVEVA PI**); OPC UA / MQTT

**Bar by tier** — L1: builds models on sensor/benchmark data · L2: ships a PdM model tied to a maintenance decision · L3: architects the analytics stack, deep in ≥1 area (RUL, anomaly, or signal processing) · L4/L5: sets prognostics strategy, owns data-backbone & governance.

## 5. Core Subject List `✓`
- **Foundational maths & CS:** probability & statistics · linear algebra · Python + data stack · classical ML · deep learning (CNN/**RNN/LSTM/Transformer**).
- **Core (time-series & signal processing):** forecasting (ARIMA → deep) · stationarity/seasonality · **anomaly detection** · **FFT, spectral analysis, wavelets, envelope analysis** for machinery.
- **Niche-specific (PHM & reliability):** the PHM pipeline (data acquisition → degradation detection → diagnostics → prognostics → decision) · **RUL** (physics-based / data-driven / hybrid) · reliability math — **Weibull, FMEA, RCM, RCA, survival analysis** · condition indicators.
- **Frontier / advanced `⏱`:** **time-series foundation models**, physics-informed / Bayesian hybrids (uncertainty quantification), edge/TinyML on-sensor inference, generative AI in the maintenance workflow.
- **Data eng & domain:** SQL & time-series/historian DBs, streaming (OPC UA/MQTT), MLOps · sensors & instrumentation, machinery fault modes (bearings/gears/imbalance), maintenance strategy & asset management (CMRP pillars).

## 6. Training Programme Design & Duration `✓`
Analytics + domain programme; ~1,200 hours, phase 4 = PHM/RUL + the reliability domain.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Python/data stack, statistics, classical ML | 2.0 mo | 6 mo | 300 | Data & ML fluency |
| 2. Time-series & signal processing | Forecasting, anomaly detection, FFT/wavelet | 2.0 mo | 6 mo | 300 | Analyze machinery signals |
| 3. **PHM / RUL & reliability** | Prognostics, RUL methods, Weibull/FMEA/RCM | 2.0 mo | 5–6 mo | 280 | The niche core |
| 4. Data eng & MLOps | TS databases, streaming (OPC UA/MQTT), deploy/monitor | 1.5 mo | 4 mo | 200 | A running, monitored pipeline |
| 5. Capstone + portfolio | RUL on C-MAPSS + anomaly detection on a real sensor stream + a health dashboard | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,300 | Junior PdM data scientist |

*For an existing data scientist, phases 2–3 (time-series/signal + reliability domain) compress to ~4–6 months.*

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** `🆕` = 2025–26 release.
- **Time-series foundation models (entering industrial pilots, cautiously):** **🆕 Amazon Chronos-2** (Oct 2025 — first mature TSFM with **native multivariate + covariate** support, the key industrial unlock) · **Google TimesFM 2.5** · **Salesforce Moirai-2** · **Nixtla TimeGPT** (managed API) · **Lag-Llama** (probabilistic). *Reality check `✓`: full fine-tuning is unstable at low data fractions (use **LoRA**); classical ML + purpose-built deep nets still run most production PdM.*
- **Deep RUL / prognostics:** Transformers & **GNNs** for long-range + component dependencies; **physics-informed / Bayesian hybrids** (Bayesian PINNs, constraint-guided learning) — the notable shift, because they add **uncertainty quantification** for risk decisions. Benchmarks: **C-MAPSS**, **PRONOSTIA**.
- **Anomaly detection:** Isolation Forest / ECOD, LSTM-autoencoders, **Anomaly Transformer**; autoencoder + isolation-forest stacks.
- **Edge / TinyML:** on-sensor 1D-CNN inference (battery-months, air-gapped) — ~1B TinyML devices projected in 2026.
- **Agentic / generative AI in the maintenance *workflow*:** auto-anomaly → open work-order → dispatch technician; LLM copilots over manuals (this is where Area 2 meets Area 1).
- **Platform & data-backbone shifts:** **🆕 AWS is retiring Lookout for Equipment** (→ IoT SiteWise) · **PTC ThingWorx / GE Proficy → TPG** (PE consolidation) · specialists **Augury, Tractian, Siemens Senseye, SKF** · the **Unified Namespace** (OPC UA + MQTT/Sparkplug B) and **digital twins** as the prerequisite plumbing.

*Net trend: classical ML + purpose-built deep nets run production today; TSFMs and physics-hybrids are the growth edge; the data plumbing (UNS, modern time-series DBs) is the enabling investment. Treat vendor benchmark/ROI claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | **RUL prediction on NASA C-MAPSS** (turbofan) | The prognostics pipeline; a competitive RMSE/score |
| Foundational | Feature extraction with **tsfresh** + a classifier on labeled faults | Time-series features; fault classification accuracy |
| Applied | **Bearing anomaly detection on PRONOSTIA** (vibration, FFT/envelope) | Signal processing + anomaly detection; early fault flag |
| Applied | **Weibull / survival** reliability analysis on run-to-failure data | Reliability math; a failure-probability curve |
| Advanced | A **streaming** anomaly detector on a live/simulated sensor feed | Real-time pipeline; drift-aware alerts |
| Capstone | End-to-end **PdM pipeline**: ingest sensor data → features → RUL/anomaly model → **health dashboard + alert** | The full stack; a demoable predictive-maintenance system |

## 9. Required Setup / Data / Sensors / Compute `✓` (not robots)
- **Compute:** a GPU workstation (or cloud) for deep learning; the **Python TS stack**; optionally **MATLAB PdM Toolbox**.
- **Data infrastructure:** a **time-series database** (InfluxDB / TimescaleDB / **TDengine**); MLOps (Docker, a feature store).
- **Datasets:** **NASA C-MAPSS**, **PRONOSTIA/FEMTO**, **PHM Society** data challenges (start here before plant data).
- **Condition-monitoring sensors (for hands-on):** accelerometer/IEPE, thermal camera, current sensors + a small **motor/bearing test rig** — OR access to a plant **historian** (PI System) feed.
- **Optional platform sandbox:** an IIoT platform (AWS IoT SiteWise, Azure) for the end-to-end story.

## 10. Partnerships & Ecosystem
- **Professional & standards bodies:** **PHM Society** (data challenges, IJPHM) · **SMRP** (CMRP) · **ASQ** (CRE) · **Vibration Institute** (ISO 18436).
- **Academic PHM/reliability centers:** UMD **CALCE** · UT-Knoxville **RME**.
- **Vendors / platforms:** Augury · Tractian · Siemens Senseye · SKF · PTC · IBM Maximo · AWS / Azure · **MathWorks** · **Nixtla**.
- **Data infrastructure:** InfluxDB · TimescaleDB · TDengine · AVEVA PI.
- **Employers:** manufacturers (any asset-heavy plant), machine-health specialists (Augury/Tractian), industrial-AI firms, reliability consultancies.

## 11. Assessment & Validation
- **Model metrics** as portable evidence: **RUL** (RMSE / PHM score on C-MAPSS), **anomaly detection** (precision/recall, *lead time* before failure), **forecasting** (MASE).
- **Portfolio:** a deployed PdM project + a system-design interview (ingest → features → model → decision) + **reliability-domain literacy** (can they turn a health score into a maintenance action?).
- **Communication check:** can they explain a prediction and its uncertainty to a maintenance manager?

## 12. Adjacent & Related Niches
Sits in **Analytics / Predictive AI (Area 2)** alongside `Quality/Yield & Defect Analytics`, `Process & Production Optimization`, `Forecasting & Planning`, and `Anomaly & Fault Detection`; pairs with **A1 sensor perception** and **A10 data infrastructure**; increasingly meets **Area 1 (agentic)** where generative AI enters the maintenance workflow. Its home vertical is **B1 manufacturing**. (Reference only — seniority ladder is in §2.)

---
*Applied-AI area exemplar. Template: `phase-1/_TEMPLATE.md` (v3, adapted). Area plan: `applied-ai-taxonomy.md`. §7 stamped mid-2026 — re-research before publish. Named products/models are fast-moving; verify at source.*
