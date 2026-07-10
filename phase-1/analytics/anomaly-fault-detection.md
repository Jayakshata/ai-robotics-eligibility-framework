# Per-Niche Profile — Anomaly & Fault Detection

> **Applied-AI area profile (Analytics / Predictive AI, Area 2).** The detection-first industrial-data-science layer that catches anomalies and faults in real time across operational, process, IT and security telemetry — NOT remaining-useful-life (that is the sibling `predictive-maintenance`), NOT robot control, NOT LLM-agent engineering. Standard 12-section template, adapted: §3 eligibility is stats/DS/ML + a domain overlay that **forks by where the signals live**; §9 is streams/datasets/compute; §7 is the TSFM-detector + benchmark-reckoning frontier. Research-backed (mid-2026). `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Niche:** Anomaly & Fault Detection · **Area:** Analytics / Predictive AI (non-embodied) · **Type:** `[F]` foundational (`[★]` streaming + TSFM-AD frontier)
**Draws on:** industrial / operational data science (applied statistics, streaming ML) **+** a forked domain overlay (process/OT · IT-ops/AIOps · security · quality) · **Serves platforms (C):** system-agnostic · **Verticals (B):** B1 manufacturing (core), B8 oil & gas / process; broadened by design into buildings/HVAC, IT-ops (AIOps) & security telemetry

---

## 1. Definition & Scope
Real-time **detection and diagnosis of anomalies and faults** on operational, process and sensor time-series — catching deviations *as they happen* across machine, process, IT and security telemetry, then turning them into a trustworthy, actioned alert. This is the **detection-first** slice of the analytics / predictive-AI layer: applied statistics and streaming ML plus a domain overlay that **forks by where the signals live** (process/OT, discrete-manufacturing quality, IT-ops, security). **In scope:** streaming / online detection, statistical & model-based fault detection & diagnosis (FDD), multivariate statistical process control (MSPC), concept-drift handling, and **false-alarm / alarm-flood management**. **Out of scope:** remaining-useful-life and the maintenance decision — that is **prognosis**, owned by the sibling `predictive-maintenance` niche (do **not** re-tell RUL here); product quality/yield modelling (the `quality-yield-defect-analytics` niche); and both robot control (Axis A) and LLM-agent engineering (Area 1 — though agentic AI is entering the *triage* workflow). The distinction from PdM is deliberate and load-bearing: PdM is prognosis on assets; this is **detection across a far broader signal scope**, including non-asset streams.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Data Scientist (Anomaly & Fault Detection) | Builds detectors and classical baselines on operational/benchmark time-series under supervision; reports precision/recall, F1, detection lead-time, false-positive rate. |
| **L2** | Detection Data Scientist / ML Engineer | Owns detection for one system end-to-end (ingest → detector → threshold → alert), with drift handling and false-alarm reduction; wires it to alerting. |
| **L3** | Senior Detection Data Scientist / Detection Lead | Architects the detection & monitoring stack; chooses statistical vs ML vs model-based FDD; sets alarm rationalization, thresholds and drift strategy; mentors. |
| **L4/L5** | Staff / Principal — Detection & Monitoring | Sets org-wide detection strategy; advances streaming / changepoint / uncertainty-quantified methods; owns the platform + model governance. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials
**The role = a statistics / DS / ML core + a domain overlay whose certificate FORKS by where the signals live `~`.** The quantitative core is the harder-to-substitute half; the **domain certificate is the moat — and *which* moat depends on the vertical** (process/OT · quality · IT-ops · security). This fork is the single most important niche-specific eligibility feature, and it separates this niche from PdM (one reliability moat) and Quality (one ASQ moat).

**Acceptable undergraduate degrees** — Tier 1 (strongest, on-target): **Statistics / Applied Statistics** — the methodological core; anomaly detection *is* applied statistics (control charts, CUSUM/EWMA, changepoint detection, Hotelling's T², PCA residuals) `✓`; **Data Science / CS (ML)** — the streaming / deep-detector half (autoencoders, LSTM/Transformer, isolation forest, online learning) `✓`; **Industrial & Systems Engineering (ISE)** — the department that teaches SPC, quality control and systems monitoring as named core courses `✓`. Tier 2 (qualifying, and the *distinctive* overlays for this niche): **Electrical / Control & Instrumentation Engineering** — model-based FDD: observers, parity equations, residual generation `✓`; **Chemical / Process Systems Engineering** — MSPC (PCA/PLS, chemometrics) for process excursions & batch deviations `✓`; **Applied Maths / Physics / Operations Research** (with a time-series/anomaly project) `✓`; **Cybersecurity / CS security track** — the security-telemetry fork (~70% of SIEM/detection postings list a CS/cyber degree) `✓`. *Net vs the PdM exemplar `~`: Statistics moves firmly to Tier 1, and Control/Instrumentation + Chemical/Process replace Mechanical/Reliability as the distinctive Tier-2 overlays. Nobody needs kinematics or robot control — they need control-**theory** residuals and applied statistics.*

**Highly-valued programs `✓`** — the strongest single named path is **Georgia Tech — H. Milton Stewart School of ISyE**, delivered affordably via **OMSA / OMSCS**: **ISYE 6810 _Systems Monitoring and Prognostics_** (the most on-target single course), **ISYE 6402 _Time Series Analysis_**, **ISYE 6382 _Quality Control and Six Sigma_**, **ISYE 7405 _Multivariate Data Analysis_** (the MSPC math). Dedicated **fault detection & diagnosis (FDD)** graduate courses: **Linköping — TSFS06 _Diagnosis and Monitoring_** (a recognized academic home of model-based diagnosis), **Glasgow — ENG5031**, **Anna University — EI5010**. Shared DS anchors (from `_grounding-reference.md`): UC Berkeley, CMU, Stanford, Michigan. Professional short course for process monitoring: **Eigenvector Research — MSPC** (with **PLS_Toolbox**), the industry standard for PCA/PLS fault detection.

**Acceptable postgraduate degrees** — MS/PhD in **Statistics, CS / ML / Data Science, ISE / Operations Research, Control / EE, or Chemical / Process Systems Engineering**. The senior and method-invention end gates on the grad degree: anomaly-detection postings recur as *"Master's or PhD in Computer Science, Machine Learning, Statistics, Operations Research"* — some as *"a Master's plus 3 years in ML, or a PhD."* `✓`

**Highly-valued certifications `✓`** — pair a **portable DS/ML cert** with a **forked domain cert**:
- *Analytics core (valued across every fork):* DeepLearning.AI **ML Specialization** (explicit anomaly-detection week — Gaussian model, thresholding, precision/recall/F1) + **Deep Learning Specialization**; a cloud ML cert (**AWS MLA-C01** — note the older **MLS-C01 retired Mar 2026**; **Google PMLE**; **Azure DP-100**); **Databricks ML Professional** where streaming/monitoring runs on Spark.
- *Domain moat — forks by telemetry `~`:* **Process / OT** (the strongest, most niche-specific moat) — **ISA-18.2 / IEC 62682 Alarm Management** via **exida AMP** (course **ALM 102**) or **ISA IC39**; **ISA CAP** (4-yr degree + 5 yr experience); **ISA CCST** I–III. **Discrete-manufacturing / quality** — **ASQ CQE** (SPC is a named body-of-knowledge domain), **ASQ CSSBB**. **IT / cloud-ops** — **Dynatrace Associate** (Davis AI), **Splunk** tracks, Datadog / New Relic platform creds `~ (exact names — verify)`. **Security** — **GIAC GCIA** (prep: SANS SEC503), **SANS SEC555 Detection Engineering & SIEM Analytics**, **Splunk Certified Cybersecurity Defense Analyst**. **Rotating-machinery** (shared with PdM) — **ISO 18436-2 Vibration Analyst Cat I–IV**.
- *NOT the moat (position correctly) `~`:* **SMRP CMRP** (maintenance/prognosis → PdM) and **APICS/ASCM CPIM/CSCP** (planning → Forecasting) — adjacent, weaker for pure detection.

**Experience & portfolio** — L1: a detector on a **reformed public benchmark** (**TSB-AD** / **UCR Anomaly Archive** — the legacy **NAB** is now widely labeled trivial `✓`) reporting **precision/recall, F1, detection lead-time, false-positive rate**, with a control-chart or isolation-forest baseline. L2: 2–4 yr, a **deployed streaming detector** wired to alerting, with **drift handling** and **false-alarm reduction**. L3: 5–8 yr, led detection for a plant/fleet/estate; **a domain cert by vertical** (ISA / ASQ / GIAC). L4/L5: 8+ yr and/or a **PhD** plus a senior domain cert (**ISA CAP**, **ASQ CQE**).

## 4. Skill Profile (JD-style)

**Required / must-have**
- **Python** (pandas, NumPy, **scikit-learn**, **PyOD**) + **SQL**
- **Applied statistics & ML** — supervised/unsupervised; the classical detectors: **control charts, CUSUM/EWMA**, changepoint detection, **Hotelling's T², PCA residuals / SPE-Q**, isolation forest / ECOD
- **Time-series analysis** and **anomaly detection** (point / contextual / collective)
- **Streaming / online detection** — single-pass, memory-bounded detectors on unbounded streams
- **Concept-drift detection & handling** (ADWIN and friends)
- **Thresholding & alerting** — turning scores into alerts; **false-positive control**
- **Evaluation done right** — precision/recall, F1, **detection lead-time**, **VUS-PR / affiliation** metrics (and *why point-adjusted F1 is banned*)
- **Communication** — translate a detection and its confidence into an operator action

**Preferred / differentiating**
- **Deep detectors** — autoencoders, LSTM / **Anomaly Transformer**, **diffusion / Mamba** reconstruction
- **Model-based FDD** — observers, parity equations, residual generation (control-theoretic)
- **Multivariate SPC / MSPC** — PCA/PLS process monitoring (PLS_Toolbox), **MSET-SPRT**
- **Alarm management / rationalization** — ISA-18.2 / IEC 62682 / EEMUA 191 (alarm-flood control)
- **TSFMs as zero-shot detectors** (Chronos / TimeGPT residual scoring)
- A **forked domain cert** (ISA / ASQ / GIAC / vibration) and cloud + **MLOps** (Kafka/Flink streaming, model monitoring/retraining)

**Tools & tech stack** — *Languages:* Python (+ R/Scala) · *AD libraries:* **PyOD** (v3.x), **River** (online + **ADWIN**), **Frouros** (drift), **Merlion**, **Orion**, dtaianomaly; **Darts / sktime / aeon** · *Classical / process:* **PLS_Toolbox** (MSPC), **Oracle MSET-SPRT** · *Streaming:* **Apache Kafka, Flink, Spark** · *Time-series DBs:* InfluxDB, TimescaleDB/TigerData, **TDengine** (native MQTT/OPC UA) · *Observability / AIOps:* **Splunk ITSI, Datadog Watchdog, Dynatrace Davis**, Prometheus/Grafana, OpenTelemetry · *Managed detectors:* **Nixtla TimeGPT** anomaly endpoint, **Microsoft Fabric** `time-series-anomaly-detector`, **AWS IoT SiteWise** · *Benchmarks:* **TSB-AD / TSB-AD-M**, **UCR Anomaly Archive**, **ESA-ADB / OPS-SAT**, **Tennessee Eastman** (process FDD)

**Bar by tier** — L1: builds detectors + baselines on benchmark/operational streams · L2: ships a streaming detector tied to alerting, with drift handling · L3: architects the detection stack, deep in ≥1 of {statistical, deep, model-based FDD}, owns alarm rationalization · L4/L5: sets detection strategy, advances methods, owns platform & governance.

## 5. Core Subject List `✓`
- **Foundational maths & CS:** probability & statistics · linear algebra · Python + data stack · classical ML (supervised/unsupervised) · deep learning (CNN/**RNN/LSTM/Transformer**/autoencoders).
- **Core (time-series & detection):** time-series analysis (ARIMA/VAR, stationarity, residual diagnostics) · anomaly types (point/contextual/collective) · classical detectors — **control charts, CUSUM/EWMA, changepoint detection**, isolation forest / ECOD, **matrix profile** · outlier methods.
- **Niche-specific (detection, streaming & FDD):** **streaming / online detection** (single-pass, memory-bounded) · **concept-drift detection** (ADWIN) · **model-based FDD** — observers, parity equations, residual generation · **multivariate SPC** — Hotelling's T², PCA/PLS, SPE/Q-statistic, **MSET-SPRT** · thresholding & **alarm rationalization** (ISA-18.2) · **evaluation** — VUS-PR, affiliation metrics, the **point-adjustment pitfall**.
- **Frontier / advanced `⏱`:** **TSFMs as zero-shot detectors** · diffusion / state-space (**Mamba**) reconstruction · **LLM / agentic** log & event detection · conformal / probabilistic anomaly scoring (uncertainty quantification).
- **Data eng & domain:** SQL & time-series/historian DBs, streaming (Kafka/Flink, OPC UA/MQTT/**Sparkplug B**) · the **forked domain** — process/OT (DCS, alarm management), IT-ops (metrics/logs/traces), security (SIEM, MITRE ATT&CK), buildings (HVAC FDD).

## 6. Training Programme Design & Duration `✓`
Analytics + domain programme; ~1,300 hours, phase 3 = streaming detection + FDD + the forked domain overlay. The number matches the Area-2 "analytics core + domain overlay" shape (same as the PdM exemplar) and the `_grounding-reference.md` §D duration model (~1,400 h → 9–11 months full-time).

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Python/data stack, statistics, classical ML | 2.0 mo | 6 mo | 300 | Data & ML fluency |
| 2. Time-series & classical detection | Forecasting/residuals, control charts, CUSUM/changepoint, isolation forest, MSPC | 2.0 mo | 6 mo | 300 | Detect on batch time-series |
| 3. **Streaming, drift & FDD** | Online detection, ADWIN drift, model-based FDD, alarm rationalization | 2.0 mo | 5–6 mo | 280 | The niche core |
| 4. Data eng & MLOps | Kafka/Flink, TS databases, deploy/monitor, alerting | 1.5 mo | 4 mo | 200 | A running, monitored detector |
| 5. Capstone + portfolio | Streaming detector on TSB-AD/UCR + a process-FDD case + an alert/dashboard | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,300 | Junior detection data scientist |

*For an existing data scientist, phases 2–3 (classical detection + streaming/drift/FDD) compress to ~4–6 months; a control or process engineer instead compresses phase 1 and the FDD half of phase 3.*

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** `🆕` = 2025–26 release.
- **Time-series foundation models repurposed as zero-shot detectors:** **🆕 ChronosAD** (Jun 2026 — frozen **Chronos** backbone as a zero-shot detector, evaluated on the UCR Archive) · **🆕 THEMIS** (foundation-model *embeddings*, not residuals) · **🆕 zero-shot AD via synthetic data** (Relative Context Discrepancy) · **Nixtla TimeGPT** online anomaly endpoint (flag + interval + per-point z-score). They draw on **Chronos-2** (multivariate/covariate — the industrial unlock), **TimesFM 2.5**, **MOIRAI-2**. *Reality check `✓`: under the reformed **TSB-AD** benchmark, foundation models help mainly on **point** anomalies; simple statistical detectors still win overall.*
- **Streaming / online detection & concept drift (the production-hard core):** **River** (Half-Space Trees + **ADWIN**) · **Frouros** (dedicated drift detection — drift is the #1 cause of silent detector decay) · **🆕 METER** (dynamic concept adaptation) · **🆕 binary AD in streaming IoT under drift** (Oct 2025) · **PWPAE** drift-adaptation ensemble. This is the part genuinely distinct from batch RUL.
- **Diffusion & state-space (Mamba) reconstruction detectors:** **ImDiffusion** (VLDB — imputed diffusion for multivariate TS) · **MambaAD** · **🆕 MAAT** (Mamba Adaptive Anomaly Transformer, 2025) · **🆕 MemMambaAD** · **🆕 Selective Denoising Diffusion** (2026) — linear-time long-context, cheaper than Transformers on long industrial windows.
- **LLM & agentic detection (where Area 2 meets Area 1):** log/event AD — **LogLLM**, **🆕 KRONE**, **🆕 CodeAD** (LLM synthesizes detection *rules as code*) · agentic — **🆕 AnomaMind** (tool-augmented reasoning), **CALM** (LLM-mediated streaming AD), **IstGPT**; surveys **LLM4Log**, **"A Survey of AIOps in the Era of LLMs."** The narrative shift is detect → **explain in language** → triage → open the ticket (also the main hype risk).
- **The benchmark reckoning (this niche's biggest 2025–26 story):** Wu & Keogh's *"illusion of progress"* critique (flawed datasets + the score-inflating **point-adjustment** metric) is now consensus. Reformed sets replace the legacy ones: **TSB-AD / TSB-AD-M** (NeurIPS 2024; removes point-adjustment, uses **VUS-PR**), the **UCR Anomaly Archive**, **🆕 ESA OPS-SAT / ESA-ADB** (satellite telemetry). **NAB, Yahoo S5, NASA SMAP/MSL** are now widely labeled *trivial*.
- **Platform & tooling shifts:** **🆕 PyOD v3.6.1** (Jun 2026 — ADEngine lifecycle + an "od-expert" agentic-investigation skill) · **🆕 Azure "Anomaly Detector" retires Oct 1 2026** → Microsoft Fabric `time-series-anomaly-detector` · **🆕 AWS Lookout for Equipment shutdown Oct 7 2026** → IoT SiteWise (native multivariate AD since Jul 2025) · **Splunk → Cisco** ($28B); Gartner **rebranded "AIOps" → "Event Intelligence Solutions" (2025)** · alarm management (**ISA-18.2 / EEMUA 191**: a "flood" = **>10 alarms / 10 min**; target **<5 standing alarms/operator**) · building FDD tailwind (**🆕 ASHRAE Guideline 36-2024**, **California Title 24-2025** mandate).

*Net trend: under honest evaluation (TSB-AD) simple statistical detectors still beat most deep nets — the field's own "illusion of progress" critique is the dominant counter-signal — while TSFM / streaming / agentic detection is the growth edge; the real production bottleneck is **alert fatigue** (independent analysis: **<18% of alerts are ever acted on**; a typical Kubernetes cluster emits **4,000+ alerts/day**), and Gartner has forecast **>40% of agentic-AI projects cancelled by end-2027**. Treat "70–95% noise reduction," "20–40% MTTR cut," and "faults caught weeks earlier" as **vendor-reported**.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | **Control-chart + isolation-forest baseline** on a labeled operational stream | The classical detectors; a precision/recall/F1 baseline |
| Foundational | Point / contextual / collective detection on the **UCR Anomaly Archive** | Anomaly types; honest single-anomaly evaluation (no point-adjustment) |
| Applied | **Multivariate process FDD on the Tennessee Eastman Process** (PCA/PLS, T²/SPE) | MSPC + fault diagnosis; the 99%-vs-fragile-on-holdout overfitting lesson |
| Applied | **Streaming detector with drift** on a live/simulated feed (**River + ADWIN**) | Online, memory-bounded detection; drift-aware alerts |
| Advanced | Reconstruction detector (autoencoder / **Anomaly Transformer** / diffusion) on **TSB-AD-M**, scored with **VUS-PR** | Deep multivariate detection; correct metrics |
| Advanced | **LLM log/event anomaly detection** (detect → explain) on observability or security logs | The IT-ops / security fork; explanation, not just a flag |
| Capstone | End-to-end pipeline: ingest stream → detector → drift handling → **alarm rationalization + alert/dashboard** | The full stack; a demoable real-time detection & alerting system |

## 9. Required Setup / Data / Streams / Compute `✓` (not robots)
- **Compute:** a GPU workstation (or cloud) for deep / diffusion detectors; the **Python AD stack** (**PyOD, River, Frouros**) — classical & statistical detection runs comfortably on CPU.
- **Data & streaming infrastructure:** a **time-series database** (InfluxDB / TimescaleDB / **TDengine**) + a **streaming backbone** (**Apache Kafka / Flink**). Because this niche is real-time, the stream matters for **latency and drift**, not just training history — the distinct-from-PdM plumbing point.
- **Datasets & benchmarks (use the reformed ones):** **TSB-AD / TSB-AD-M**, **UCR Anomaly Archive**, **ESA-ADB / OPS-SAT** (telemetry), **Tennessee Eastman Process** (process FDD) — treat **NAB / Yahoo S5 / NASA SMAP-MSL** as historical baselines only (now labeled trivial).
- **Process / condition-monitoring signals (for hands-on):** a DCS/PLC or **OPC UA** simulator, or accelerometer / current / temperature feeds off a small rig — OR a plant **historian** (PI System) or an observability feed (**Prometheus, OpenTelemetry**).
- **MLOps / alerting:** Docker, model monitoring & drift retraining, and an **alerting path** — alarm rationalization to **ISA-18.2** on the OT side, or **PagerDuty** on the IT side. A detector without an actioned alert is waste.
- **Optional platform sandbox:** **Microsoft Fabric** `time-series-anomaly-detector`, **AWS IoT SiteWise**, or **Splunk ITSI / Datadog** for the end-to-end story.

## 10. Partnerships & Ecosystem
- **Professional & standards bodies:** **ISA** (CAP, CCST, IC39; ISA-18.2) · **exida** (Alarm Management AMP) · **ASQ** (CQE, CSSBB) · **GIAC / SANS** (GCIA, SEC555) · **Vibration Institute** (ISO 18436-2).
- **Academic / research homes:** **Georgia Tech ISyE** (systems monitoring, SPC) · **Linköping** (model-based diagnosis) · **UCR** (Keogh — the Anomaly Archive) · **ESA** (satellite-telemetry AD) · **Argonne National Lab** (MSET).
- **Open-source & benchmark communities:** **PyOD / PyGOD** · **River** · **Frouros** · **Merlion** (Salesforce) · **Orion** (MIT) · **TSB-AD** (TheDatumOrg) · **Nixtla**.
- **Vendors / platforms:** *AIOps / observability* — Datadog · Dynatrace · Splunk (Cisco) · New Relic · BigPanda · Moogsoft · PagerDuty · *Industrial / OT* — Siemens · AWS IoT SiteWise · Augury · Tractian · *Alarm management* — Yokogawa · Emerson (DeltaV) · Honeywell · PAS (Hexagon) · *Process* — Eigenvector (PLS_Toolbox) · Oracle (MSET-SPRT).
- **Data infrastructure:** InfluxDB · TimescaleDB/TigerData · TDengine · Kafka/Flink · AVEVA PI.
- **Employers:** manufacturers & process plants, hyperscaler/SaaS SRE-observability teams, security operations (SOC / detection engineering), building-automation & utilities, aerospace.

## 11. Assessment & Validation
- **Detection metrics** as portable evidence: **precision / recall / F1**, **detection lead-time**, **false-positive rate**, and the modern TS-AD measures **VUS-PR** and **affiliation-based** precision/recall — reported on a *reformed* benchmark (**TSB-AD / UCR**), with **point-adjusted F1 explicitly avoided**.
- **Portfolio:** a deployed streaming detector wired to alerting (with drift handling) + a system-design interview (ingest → detect → threshold → alert) + **domain literacy for the target fork** (can they rationalize an alarm flood, tune a SIEM detection rule, or read a T²/SPE chart?).
- **Niche-specific check (the anti-fatigue test):** can they show their detector *reduces* false alarms and that its alerts actually get **actioned** — not merely a high offline F1? Detection that isn't actioned is waste, and this is the check that separates a real detection engineer from a benchmark chaser.

## 12. Adjacent & Related Niches
Sits in **Analytics / Predictive AI (Area 2)** alongside `Predictive Maintenance & Reliability`, `Quality, Yield & Defect Analytics`, `Process & Production Optimization`, and `Forecasting & Planning Analytics`; pairs with **A1 sensor perception** and **A10 data/edge infrastructure**, and meets **Area 1 (agentic)** where LLM/agentic detectors detect → explain → triage → open a ticket. The boundary it is most often confused with is `predictive-maintenance`: that niche is **prognosis** — remaining-useful-life, degradation, the maintenance decision — while this one is **detection-first** and broader in signal scope (process excursions, IT-ops and security telemetry, streaming, concept drift, alarm-flood management); they share machinery-fault and SPC ground but do not absorb each other, and RUL is not re-told here. It also brushes `quality-yield-defect-analytics` — that models the *product's* quality (defects/yield/conformance via SPC on quality characteristics), whereas this watches the *live process/system* for deviations as they happen; overlap on control charts, reference not merge. Its home verticals are **B1 manufacturing** and process industries, broadened by design into IT-ops and security. (Reference only — seniority ladder is in §2.)

---
*Applied-AI area profile. Template: `phase-1/_TEMPLATE.md` (v3, adapted). Area plan: `applied-ai-taxonomy.md`. §7 stamped mid-2026 — re-research before publish. Named products/models are fast-moving; verify at source.*
