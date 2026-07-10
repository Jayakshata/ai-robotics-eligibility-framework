> Provenance: background research agent (trending pass) for the applied-AI niche **Anomaly & Fault Detection** (Area 2 — Analytics / Predictive AI), mid-2026. Raw agent report, preserved verbatim. Bias to 2025–2026 sources.

# Anomaly & Fault Detection — Current Landscape (as of mid-2026)

**Scope & boundary (read first).** This niche is **detection-first** and **broader in signal scope** than its sibling `predictive-maintenance`. Predictive-maintenance owns **prognosis** — remaining-useful-life (RUL), degradation curves, the maintenance decision (C-MAPSS/PRONOSTIA, PHM). **This profile deliberately does NOT re-tell RUL.** It covers **real-time detection & diagnosis across operational, process and sensor telemetry** — including non-asset signals: **process excursions & batch deviations** (chemical/DCS), **building HVAC faults**, **IT/observability telemetry** (AIOps), **security/network streams**, and **spacecraft telemetry** — plus the things that make detection hard in production: **streaming/online detection, concept drift, and false-alarm / alarm-flood management.** Claims are web-cited; `~` marks items I could not fully verify this session; `🆕` marks 2025–26 releases.

---

## TL;DR — what actually changed for 2026

- **Time-series foundation models (TSFMs) crossed into anomaly detection, not just forecasting.** 🆕 **ChronosAD** (Jun 2026) uses a frozen Chronos backbone as a zero-shot detector; forecast-residual scoring via **Nixtla TimeGPT's** online anomaly endpoint and **Microsoft Fabric's** new detector is now productized. But the field's own reformed benchmark (**TSB-AD**, NeurIPS 2024) shows **simple statistical methods still beat most deep nets**, with foundation models strong only on *point* anomalies.
- **The benchmark reckoning went mainstream.** The Wu & Keogh "*illusion of progress*" critique (flawed datasets + the **point-adjustment** metric that inflates scores) is now the consensus. New rigorous benchmarks — **TSB-AD / TSB-AD-M**, the **UCR Anomaly Archive**, and the 🆕 **ESA OPS-SAT / ESA-ADB** satellite-telemetry sets — plus **VUS-PR** metrics are replacing NAB, Yahoo S5, and NASA SMAP/MSL, which are now widely labeled *trivial*.
- **Two anomaly products literally named for this niche are being retired:** 🆕 **Azure "Anomaly Detector"** (retires **Oct 1, 2026** → Microsoft Fabric) and **AWS Lookout for Equipment** (shutdown **Oct 7, 2026** → IoT SiteWise, which gained native multivariate AD in Jul 2025).
- **AIOps/observability consolidated hard** — Splunk → Cisco ($28B, Mar 2024), Moogsoft → Dell — and Gartner **rebranded "AIOps" to "Event Intelligence Solutions" (2025)**, warning the market is overcrowded and that autonomous remediation remains aspirational.
- **The loudest counter-signal is structural: alert fatigue.** Independent analysis found **<18% of alerts are ever acted on**; a typical Kubernetes cluster emits **4,000+ alerts/day**. Vendor "70–95% noise reduction" figures are **vendor-reported**.
- **Streaming + concept drift** (River/ADWIN, Frouros) and **LLM/agentic detectors** (log anomaly detection, agentic triage) are the two fastest-moving method fronts.

---

## Theme 1 — The methods / models frontier (what changed 2025–2026)

### 1a. TSFMs repurposed as zero-shot anomaly detectors `🆕`
The 2026 shift: instead of training a bespoke detector, use a **pretrained forecasting/embedding model** and score the residual or the representation.
- **🆕 ChronosAD** (arXiv 2606.01300, Jun 2, 2026) — uses a frozen **Chronos** TSFM as a zero-shot feature extractor + a Temporal Block; evaluated on the **UCR Anomaly Archive**; reports gains over traditional baselines. *Why it matters:* the cleanest demonstration that a forecasting FM can detect without task-specific training. (code: `intelligolabs/ChronosAD`)
- **🆕 THEMIS** (arXiv 2510.03911) — uses **foundation-model embeddings** (pretrained knowledge) for TS anomaly detection. *Why it matters:* embedding-space, not residual-space, detection.
- **🆕 Zero-shot AD via synthetic data + Relative Context Discrepancy** (arXiv 2509.21190) — trains a general detector on synthetic anomalies for zero-shot transfer. *Why it matters:* addresses the "no labels" reality of production.
- **Nixtla TimeGPT online anomaly endpoint** — managed API returns an anomaly flag, the prediction interval, and a per-point z-score; multivariate-capable. *Why it matters:* lowest-friction path for teams without ML infra.
- **Model landscape they draw on** (shared with the forecasting frontier, so kept brief): **Chronos-2** (multivariate/covariate), **Google TimesFM 2.5** (univariate-centric), **Salesforce MOIRAI-2 / MOIRAI-MoE** (any-variate), **Lag-Llama** (probabilistic → usable uncertainty). *Reality check:* TimesFM 1.x/2.x is weak on interacting multivariate sensors — the industrial case needs Chronos-2/MOIRAI.

### 1b. Streaming / online detection & concept drift — the production-hard problem
This is the part of the niche that is genuinely distinct from batch RUL.
- **River** (Python) — the standard **online ML** library; anomaly detectors (e.g., Half-Space Trees) + drift detectors, notably **ADWIN** (ADaptive WINdowing — dual sliding windows that resize on distribution change). *Why it matters:* single-pass, memory-bounded detection on unbounded streams.
- **Frouros** (arXiv 2208.06868) — a dedicated **drift-detection** library (concept + data drift). *Why it matters:* drift is the #1 cause of silent detector decay in production.
- **🆕 METER** (arXiv 2312.16831) — "dynamic concept adaptation" framework for online AD; **🆕 binary AD in streaming IoT traffic under concept drift** (arXiv 2510.27304, Oct 2025); **PWPAE** ensemble for drift adaptation in IoT streams. *Why it matters:* these target the exact non-asset streams (network/security/IoT) that broaden this niche past machine health.
- ~Emerging UQ angle: **conformal / probabilistic anomaly scoring** (calibrated thresholds, prediction intervals from Lag-Llama/TimeGPT) is the detection-side analogue of the UQ push — I saw the probabilistic-output claims but not a single canonical 2026 conformal-AD paper this session.

### 1c. Diffusion & state-space (Mamba) reconstruction detectors `🆕`
The 2025–26 successor wave to LSTM/Transformer autoencoders:
- **ImDiffusion** (VLDB; dl.acm 10.14778/3632093.3632101) — **imputed diffusion** for multivariate TS AD; imputation + denoising jointly model temporal + inter-sensor dependencies. Two 2025–26 surveys now exist (arXiv 2501.11430, 2506.09368). 🆕 **Selective Denoising Diffusion** (arXiv 2602.23662, 2026).
- **Mamba / state-space models:** **MambaAD** (arXiv 2404.06564), **🆕 MAAT** — Mamba Adaptive Anomaly Transformer with association discrepancy (arXiv 2502.07858, 2025), **🆕 MemMambaAD** (memory-augmented SSM, ScienceDirect S0952197625013107). *Why they matter:* linear-time long-context modeling — cheaper than Transformers for long industrial windows.

### 1d. LLM & agentic anomaly detection `🆕`
Where Area 2 meets Area 1 (agentic). Two sub-threads:
- **Log / event-stream anomaly detection with LLMs** (the security & observability scope): **LogLLM** (BERT semantics + Llama classifier, arXiv 2411.08561), **🆕 KRONE** (hierarchical abstraction, arXiv 2602.07303), **🆕 CodeAD** (LLM synthesizes *rules* as code for log AD, arXiv 2510.22986), **LLM-LADE** (detection **with explanation**). Surveys: **LLM4Log** (arXiv 2604.16359), **"A Survey of AIOps in the Era of LLMs"** (arXiv 2507.12472).
- **Agentic detectors** that reason + call tools: **🆕 AnomaMind** (tool-augmented reasoning, arXiv 2602.13807), **🆕 DMAIC-inspired agentic industrial AD** (arXiv 2606.04599), **CALM** (continuous, adaptive, **LLM-mediated** AD on streams, arXiv 2508.21273), **IstGPT** (LLM AD for spatial-temporal industrial graphs, arXiv 2606.01691). *Why it matters:* the workflow shift — detect → **explain the anomaly in language** → triage → open the ticket — is the 2026 narrative (and the main hype risk; see Theme 5).

### 1e. The classical baseline that keeps winning
- Reconstruction/association models — **Anomaly Transformer** (arXiv 2110.02642, the association-discrepancy landmark) — remain influential but documented as **sensitive to short-term context and unstable in noisy, non-stationary data**.
- The blunt finding from the reformed benchmark (Theme 4): under strict evaluation, **Isolation Forest, ECOD, and matrix-profile-class statistical methods often beat deep nets**; deep learning helps mainly on *multivariate* cases, foundation models mainly on *point* anomalies. Classical multivariate SPC still runs process monitoring: **PCA/PLS, Hotelling's T², SPE/Q-statistic**, and **MSET-SPRT** (see Theme 3).

---

## Theme 2 — Tooling / framework landscape (consolidation + real version numbers)

### 2a. Python anomaly-detection libraries (the actively-maintained core)
- **PyOD `🆕 v3.6.1` (Jun 17, 2026)** — the longest-running, most-used AD library; **61 detectors** across **tabular, time-series, graph, text, image, audio**. V3 added **ADEngine** (lifecycle orchestration) and an **"od-expert" skill for Claude Code / Codex** + agentic investigation workflow, keeping the classic `fit/predict` API. 46M+ downloads. *Why it matters:* the de-facto default; now explicitly agent-integrated.
- **PyOD ecosystem:** **PyGOD** (graph AD), **ADBench** (NeurIPS 2022 — 30 algos × 57 datasets, the tabular reference), **🆕 NLP-ADBench** (EMNLP 2025 Findings — text AD), and **TSB-AD** integration (time series).
- **River** — online/streaming AD + drift (§1b). **Frouros** — drift detection.
- **dtaianomaly** (arXiv 2502.14381), **Merlion** (Salesforce), **Orion** (MIT Sintel — pipeline-based TS AD with GAN/telemetry roots), **TODS**, **PyGOD** — anomaly-focused toolkits.
- General TS toolkits that ship AD modules: **Darts** (wraps classical→deep→FM detectors), **sktime / aeon**, **Nixtla** (StatsForecast/NeuralForecast + TimeGPT).

### 2b. Managed / API detectors (the buy option)
- **Nixtla TimeGPT** anomaly endpoint (online, multivariate, z-score output).
- **🆕 Microsoft Fabric `time-series-anomaly-detector`** — open-source (`microsoft/anomaly-detector`), Spark + inline Python multivariate AD; the designated successor to the retiring Azure service (Theme 6).
- **AWS IoT SiteWise** — native **multivariate anomaly detection GA'd Jul 2025**; **Amazon Stream Analytics / OpenSearch** anomaly functions for streaming.

### 2c. Streaming data backbone (the enabling plumbing — shared with the whole Area, kept brief)
Detection is only as good as the stream feeding it. The 2026 pattern is the **Unified Namespace (UNS)** — **MQTT + Sparkplug B** for the event backbone, **OPC UA** at the machine layer — replacing point-to-point links, with OPC-UA servers now embedded in Siemens/Rockwell/Beckhoff/ABB controllers. Streaming detectors land on **Apache Kafka/Flink** + a **time-series DB** (InfluxDB, TimescaleDB/TigerData, **TDengine** — native MQTT/OPC UA). *Distinct-from-PdM note:* here the plumbing matters for **latency and drift** (real-time alerting), not just historical training data.

---

## Theme 3 — Shipping products & deployments (named companies)

### 3a. IT / observability AIOps (the largest deployed anomaly-detection market)
- **Datadog Watchdog** — unsupervised real-time anomaly detection across metrics/logs/traces; **Bits AI** agentic investigation assistant sits in the same workspace.
- **Dynatrace Davis** — **causal AI** for root-cause ("this DB timeout caused API latency…"); **Forrester named Dynatrace a Leader in AIOps, Q2 2025** with the top Current Offering score.
- **Splunk ITSI** — "advanced AI" for adaptive thresholding + alert-noise reduction (now Cisco-owned; AppDynamics folded in — Theme 6).
- Others in production: **New Relic**, **BigPanda** & **Moogsoft** (event correlation / overlay), **PagerDuty** (AIOps), **ScienceLogic SL1**, **OpsRamp (HPE)**, **Sysdig** (security). *Reported* impact (label as **vendor-reported**): "alert noise cut 70–95%, Sev-2 MTTR down 20–40%."

### 3b. Industrial / OT detection + alarm management
- **AWS IoT SiteWise** (multivariate AD), **Siemens** (Senseye + PCS 7 alarm management), **Augury / Tractian** — their *detection* layer (auto-flagging 70+ failure modes from vibration/temp) is squarely this niche, distinct from their RUL claims.
- **Alarm-management & rationalization vendors** (the false-alarm / alarm-flood scope): **Yokogawa**, **Emerson (DeltaV)**, **Honeywell**, **exida**, **PAS (Hexagon)** — implementing **ISA-18.2 / IEC 62682 / EEMUA 191**: a "flood" = **>10 alarms per 10 min**; target **<5 standing alarms/operator**; **dynamic alarm rationalization** is the preferred flood-control method.
- **MSET / MSET2** — **Multivariate State Estimation Technique**, originally **Argonne National Lab** (nuclear), now productized by **Oracle** (OML4SQL **MSET-SPRT**). Predicts each sensor from correlated peers and flags with the **Sequential Probability Ratio Test**; used for nuclear, aerospace, and **data-center/server telemetry** surveillance. *Why it matters:* a battle-tested, still-shipping industrial multivariate detector — the classical baseline TSFMs must beat.

### 3c. Process, building & security deployments (breadth that defines the niche)
- **Process/chemical:** DCS-embedded multivariate SPC + FDD; **Tennessee Eastman Process** remains the shared research benchmark.
- **Buildings:** **ASHRAE Guideline 36-2024** high-performance sequences + **automated FDD**; **California Title 24-2025** now mandates FDD for covered HVAC — a regulatory tailwind. **LBNL** estimates whole-building savings of **~15%+** from control + FDD.
- **Security/network & spacecraft:** streaming intrusion detection under drift (§1b); **ESA** runs AD on satellite telemetry (Theme 4 benchmark).

---

## Theme 4 — Benchmarks & evaluation practice (this niche's most important 2025–26 story)

### 4a. The critique that reset the field
- **Wu & Keogh, "Current Time Series Anomaly Detection Benchmarks are Flawed and are Creating the Illusion of Progress"** (arXiv 2009.13807; **IEEE TKDE 2021**, doi 10.1109/TKDE.2021.3112126; ICDE 2022). Four named flaws in the popular sets: **triviality, unrealistic anomaly density, mislabeled ground truth, run-to-failure bias**. Their fix: the **UCR Anomaly Archive** — **250 series, one well-identified anomaly each**.
- **The point-adjustment problem:** the common "point-adjust then F1" protocol **massively inflates** scores and can make random noise look SOTA. Removing it is now the methodological bar.

### 4b. The reformed benchmarks (use these, not the legacy sets)
- **TSB-AD** (NeurIPS 2024 D&B; Liu & Paparrizos) — **1,070 curated series across 40 datasets**, **40 algorithms** (statistical / neural / foundation-model). **Removes point-adjustment**; recommends **VUS-PR** as the primary measure. **Headline finding: simpler statistical methods often outperform advanced neural nets**; neural nets help on multivariate; FMs help on point anomalies. **TSB-AD-M** = the multivariate extension (**200 series, six domains**). Community leaderboard opened **Apr 1, 2026**.
- **🆕 ESA OPS-SAT benchmark** (Nature *Scientific Data* 2025, doi 10.1038/s41597-025-05035-3) — **2,123 annotated telemetry fragments, 9 channels, ~20% anomalous**, with **30 baseline algorithms**. **ESA-ADB** (arXiv 2406.17826; OpenReview) — **>700M points per mission**, orders of magnitude larger than NASA SMAP/MSL. *Why it matters:* real, expert-annotated, non-trivial telemetry.
- **ADBench** (tabular, NeurIPS 2022). **Tennessee Eastman Process** (process FDD) — a **Jan 27, 2026 ChemRxiv benchmarking study** found models hitting **99%+ multiclass accuracy but fragile on an independent dataset** — a concrete over-fitting cautionary tale.

### 4c. Metrics practice
- **VUS (Volume Under the Surface): VUS-PR / VUS-ROC** (arXiv 2502.13318, 2025) — threshold- and buffer-parameter-free; robust to small time lags. Now the preferred TS-AD metric.
- **Affiliation-based precision/recall/F1** (tolerant to minor temporal shifts) and **range-based precision/recall** (Tatbul et al.) for range anomalies. Newer proposals: **PATE**, **DQE** (semantic-aware), **CCE** (confidence-consistency). *Takeaway for a training programme:* teach **VUS-PR + affiliation**, and teach *why point-adjusted F1 is banned.*

---

## Theme 5 — Counter-signals, skepticism & hype (a profile without these is useless)

1. **The field's own "illusion of progress."** Wu & Keogh (Theme 4) is a peer self-critique: much reported deep-learning progress was benchmark artifact. **TSB-AD confirms it** — simple methods still win under honest evaluation. *This is the single most important counter-signal for this niche.*
2. **Alert fatigue is the structural failure mode.** Independent analysis of 9.6M annual observability events: **fewer than 1 in 5 alerts (18%) are ever acted on**; Gartner cites **4,000+ alerts/day** for a typical Kubernetes cluster. Static thresholds fail both ways (false positives train operators to ignore; slow failures never trip). Detection that isn't *actioned* is waste.
3. **Gartner's market verdict.** The observability market is an **"overcrowded field" (40+ vendors, only 20 in the Magic Quadrant)** with **"cost-fatigue reaching a breaking point"** and **"increasingly skeptical buyers"** (~$14.2B by 2028). Gartner **renamed "AIOps" → "Event Intelligence Solutions" (2025)**; ~its Hype Cycle reportedly notes AIOps **underperforming due to poor dependency hygiene** — ROI depends more on **data quality and dependency-map accuracy than on the AI layer**, and **autonomous remediation remains aspirational** (the "tireless junior SRE," not full autonomy).
4. **Agentic-AD hype risk.** The detect→explain→triage→ticket agentic workflow is the loudest 2026 pitch, but **Gartner has forecast that >40% of agentic-AI projects will be cancelled by end-2027** — treat agentic anomaly-triage claims with the same caution.
5. **Vendor ROI is vendor-reported.** "70–95% noise reduction," "20–40% MTTR cut," "detects faults weeks earlier" are **marketing figures**, not independent results. Flag every one.

---

## Theme 6 — Being retired / consolidated

- **🆕 Azure "Anomaly Detector"** (the AI service literally named for this niche) — **no new resources since Sep 20, 2023; full retirement Oct 1, 2026.** Migrate to **Microsoft Fabric** (`time-series-anomaly-detector`, open-source `microsoft/anomaly-detector`) or Azure Data Explorer / Stream Analytics. **Azure Metrics Advisor** retires alongside it.
- **🆕 AWS Lookout for Equipment** — new-customer block **Oct 7, 2025**, shutdown **Oct 7, 2026** → **AWS IoT SiteWise** (native multivariate AD since Jul 2025). (Detection-relevant even though asset-oriented.)
- **Splunk → Cisco** — closed **Mar 18, 2024, ~$27–28B ($157/share)**; **AppDynamics folded into Splunk Observability**; ITSI is now the Cisco anomaly/event-intelligence flagship. The defining observability consolidation.
- **Moogsoft → Dell** (acquired 2023, as part of Dell's ops suite) — ~post-acquisition strategic direction described as "murky"; some sources conflate with Broadcom. Emblematic of AIOps roll-up.
- **Legacy AD benchmarks being retired by the research community:** **Numenta NAB**, **Yahoo Webscope S5**, and **NASA SMAP / MSL / SMD / SWaT** are now widely labeled **trivial / mislabeled** and are being replaced by UCR Archive / TSB-AD / ESA-ADB (Theme 4). **Numenta's HTM** approach has largely faded from mainstream research.
- **The point-adjustment metric** is being retired from serious evaluation protocols (TSB-AD removes it outright).
- Shared with PdM: **AVEVA PI ProcessBook** reached **end-of-life (Dec 2024)**, pushing OT teams toward modern time-series DBs.

---

## Items flagged `🆕` (2025–26 dated — tag these as new)
- **ChronosAD** (Jun 2026); **THEMIS**, **zero-shot AD via synthetic data** (2025); **MAAT** / **MemMambaAD** / **Selective Denoising Diffusion** (2025–26).
- **AnomaMind**, **DMAIC agentic AD**, **CALM**, **IstGPT**; **KRONE**, **CodeAD** log-AD; **LLM4Log** & **AIOps-in-era-of-LLMs** surveys (2025–26).
- **PyOD v3.6.1** (Jun 17, 2026) with ADEngine + od-expert/agentic; **NLP-ADBench** (EMNLP 2025); **TSB-AD leaderboard** (Apr 2026).
- **ESA OPS-SAT benchmark** (Nature 2025); **VUS-PR** metric paper (2025); **Tennessee Eastman ML-FDD benchmark** (Jan 2026).
- **Azure Anomaly Detector retirement** (Oct 2026); **AWS Lookout for Equipment shutdown** (Oct 2026); **AWS IoT SiteWise multivariate AD** (Jul 2025); **ASHRAE G36-2024 / Title 24-2025 FDD mandate**.

## Items marked `~` / inferred (not fully verified this session)
- Gartner "AIOps → **Event Intelligence Solutions**" rebrand and the "poor dependency hygiene / underperforming" Hype-Cycle language: surfaced via **secondary** analyst/blog sources, not a primary Gartner document. Directionally strong, treat wording as reported.
- Moogsoft's exact current owner (Dell vs. Broadcom) — sources conflict; "acquired by Dell 2023" is the better-supported reading.
- "Conformal / probabilistic anomaly scoring" as a 2026 UQ trend — plausible and consistent with Lag-Llama/TimeGPT probabilistic outputs, but I did not pin a canonical 2026 conformal-AD paper.
- Several arXiv IDs are 2026-dated (2602/2603/2606) and internally consistent with mid-2026, but verify at source before publishing.

## Sources (URLs actually fetched, then key search-surfaced)
**Fetched:**
- TSB-AD benchmark — https://github.com/TheDatumOrg/TSB-AD
- PyOD library (v3.6.1) — https://github.com/yzhao062/pyod
- ChronosAD (arXiv 2606.01300) — https://arxiv.org/pdf/2606.01300
- Gartner observability market (NetworkWorld) — https://www.networkworld.com/article/4032218/in-crowded-observability-market-gartner-calls-out-ai-capabilities-cost-optimization-devops-integration.html

**Key search-surfaced (real URLs cited above):**
- Wu & Keogh "flawed benchmarks" — https://arxiv.org/abs/2009.13807 · https://wu.renjie.im/research/anomaly-benchmarks-are-flawed/
- "Elephant in the Room" reliable TS-AD benchmark — https://openreview.net/forum?id=R6kJtWsTGy
- VUS metric — https://arxiv.org/abs/2502.13318
- ESA OPS-SAT benchmark (Nature Sci Data 2025) — https://www.nature.com/articles/s41597-025-05035-3 · ESA-ADB https://arxiv.org/pdf/2406.17826
- Azure Anomaly Detector retirement — https://azure.microsoft.com/de-de/updates/ai-services-anomaly-detector-will-be-retired-on-1-october-2026/ · https://github.com/MicrosoftDocs/azure-ai-docs/blob/main/articles/ai-services/anomaly-detector/includes/deprecation.md
- Splunk→Cisco observability/ITSI — https://www.prnewswire.com/news-releases/cisco-and-splunk-announce-integrated-full-stack-observability-experience-for-the-enterprise-302164020.html
- Moogsoft→Dell — https://www.techtarget.com/searchitoperations/news/366545219/Dell-Moogsoft-AIOps-buy-could-start-filling-gaps-post-VMware
- Datadog Watchdog / Dynatrace Davis AIOps — https://medium.com/@garakh/ai-enhanced-monitoring-and-observability-mastering-datadog-watchdog-ai-dynatrace-davis-ai-new-b55700b1263b · https://sciencelogic.com/blog/gartner-io-and-cloud-strategies-conference-2025-from-observability-to-outcome-driven-operations
- River/drift + streaming under drift — https://github.com/Western-OC2-Lab/PWPAE-Concept-Drift-Detection-and-Adaptation · https://arxiv.org/abs/2312.16831 (METER) · https://arxiv.org/html/2510.27304v1 · https://arxiv.org/pdf/2208.06868 (Frouros)
- TSFM-AD & LLM/agentic AD — https://arxiv.org/pdf/2510.03911 (THEMIS) · https://arxiv.org/pdf/2509.21190 · https://arxiv.org/pdf/2508.21273 (CALM) · https://arxiv.org/pdf/2602.13807 (AnomaMind) · https://arxiv.org/pdf/2606.04599 (DMAIC agentic) · https://arxiv.org/abs/2411.08561 (LogLLM) · https://arxiv.org/pdf/2604.16359 (LLM4Log) · https://arxiv.org/pdf/2507.12472 (AIOps-in-era-of-LLMs)
- Diffusion / Mamba AD — https://dl.acm.org/doi/10.14778/3632093.3632101 (ImDiffusion) · https://arxiv.org/pdf/2501.11430 (survey) · https://arxiv.org/abs/2502.07858 (MAAT) · https://arxiv.org/pdf/2404.06564 (MambaAD)
- Anomaly Transformer — https://arxiv.org/abs/2110.02642
- Nixtla TimeGPT anomaly API — https://www.nixtla.io/docs/api-reference/foundational-time-series-model-online-multi-series-anomaly-detector
- MSET/MSET2 — https://www.anl.gov/nse/ai-ml/mset · https://docs.oracle.com/en/database/oracle/machine-learning/oml4sql/21/dmcon/mset-sprt.html
- Tennessee Eastman ML-FDD benchmark (Jan 2026) — https://chemrxiv.org/doi/10.26434/chemrxiv.10001628
- Alarm management ISA-18.2/EEMUA 191 — https://plcprogramming.io/blog/what-is-alarm-management · https://www.exida.com/Alarm-Management/Resources
- Building FDD (ASHRAE G36 / Title 24 / LBNL) — https://buildings.lbl.gov/publications/advanced-control-sequences-and-fdd · https://www.johnsoncontrols.com/building-insights/2025/thought-leadership/top-5-benefits-of-ashrae-36
- AIOps market / alert fatigue counter-signals — https://openobserve.ai/blog/top-10-aiops-platforms/ · https://www.readyworks.com/blog/from-alert-fatigue-to-signal-intelligence-how-ai-driven-observability-changes-it-operations
- TSFM landscape (shared) — https://machinelearningmastery.com/the-2026-time-series-toolkit-5-foundation-models-for-autonomous-forecasting/
