> Provenance: background research agent (trending pass) for the applied-AI exemplar, mid-2026. Raw agent report, preserved verbatim.

I have comprehensive, well-cited coverage across all five themes. Here is the structured research report.

---

# Predictive Maintenance & Industrial Analytics — Current Landscape (Mid-2026)

**Scope:** the analytics / predictive-AI layer. Bias to 2025–2026 sources. Claims are web-cited unless marked *[from-knowledge]* or *[assessment]*. Where vendor leaderboard claims conflict, I flag it.

## TL;DR — what actually changed for 2026

- **Time-series foundation models (TSFMs) crossed from research into early industrial piloting**, led by **Amazon Chronos-2** (released Oct 20, 2025) which added native **multivariate + covariate** forecasting — the single biggest unlock for multi-sensor industrial data. But production adoption is still early: fine-tuning is unstable, and multivariate/ data-quality limits are real. [assessment, backed below]
- **Two cloud/vendor exits reshaped the buy-vs-build map:** **AWS is retiring Amazon Lookout for Equipment** (new customers blocked Oct 7, 2025; full shutdown Oct 7, 2026), and **PTC is selling ThingWorx + Kepware to TPG** (up to $725M, closing H1 2026); **GE Vernova's Proficy** also went to TPG. Private-equity consolidation of industrial software is a 2026 theme.
- **Agentic + generative AI in the maintenance *workflow*** (auto-triage, work-order generation, technician copilots) is the loudest 2026 narrative — with a Gartner warning that >40% of agentic projects may be cancelled by end-2027.
- **Edge/TinyML predictive maintenance is now mainstream**, projected ~1 billion TinyML IoT devices in 2026.
- **Classical ML + purpose-built deep nets (CNN/LSTM/Transformer) still run most production PdM**; TSFMs and physics-informed hybrids are the growth edge. [assessment]

Market sizing (2026), for context — estimates vary widely by analyst: roughly **USD 13.9B–18.9B in 2026**, CAGR ~11–34% depending on source ([MarketsandMarkets / Mordor / Fortune Business Insights roundup](https://www.globenewswire.com/news-release/2022/12/09/2571085/0/en/Predictive-Maintenance-Market-Size-Projected-to-Reach-15-9-Billion-by-2026-growing-at-a-CAGR-of-30-6-Report-by-MarketsandMarkets.html)).

---

## 1. Methods

### 1a. RUL, PHM, condition monitoring — classical ML vs deep learning

The field is structured as **PHM (Prognostics & Health Management)**: detect → diagnose → estimate RUL → decide. Standard progression in 2025–26 research:

- **Classical ML (still the production workhorse):** random forests, gradient boosting (**XGBoost/LightGBM**), SVM on hand-engineered features (spectral/statistical). Reliable, interpretable, cheap — dominant where labels are scarce. [assessment + [algorithm-selection guidance, forasoft 2026 playbook](https://www.forasoft.com/blog/article/machine-learning-algorithms-anomaly-detection)]
- **Deep learning for RUL** is moving past CNN/LSTM baselines to **Transformers and Graph Neural Networks** (long-range temporal + component-to-component dependencies). Recent 2026 examples:
  - **Bi-cLSTM** — residual-corrected bidirectional LSTM for aero-engine RUL ([arXiv 2603.00745](https://arxiv.org/pdf/2603.00745)).
  - **TCN + fusional Transformer + Bi-LSTM encoder-decoder** for multi-window RUL ([arXiv 2511.04723](https://arxiv.org/pdf/2511.04723)).
  - **CNN-BiLSTM-Attention with interpretable failure heatmaps** ([arXiv 2604.13459](https://arxiv.org/pdf/2604.13459)).
  - Review (**ASME JCISE, April 2026**): "A Review on RUL Prediction of Rotating Machinery Based on Deep Learning" ([ASME](https://asmedigitalcollection.asme.org/computingengineering/article/doi/10.1115/1.4071396/1231944/A-Review-on-the-Remaining-Useful-Life-Prediction)); scientometric review ([ScienceDirect 2025](https://www.sciencedirect.com/science/article/pii/S2666827025000878)); DL survey ([PMC11174398](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11174398/)).
- **Physics-informed / hybrid models** — the notable 2025–26 methodological shift, because they add uncertainty quantification (critical for maintenance risk decisions):
  - **Bayesian PINNs for transformer prognostics** (PHM Society Conf. 2025, [arXiv 2509.15933](https://arxiv.org/abs/2509.15933)).
  - **Physics-aware hybrid framework** fusing low-cycle-fatigue dynamics + NN for turbofan RUL ([IJPHM](https://www.papers.phmsociety.org/index.php/ijphm/article/view/4733)).
  - **Constraint-guided learning** with limited physical knowledge on the PRONOSTIA bearing set ([arXiv 2503.09113](https://arxiv.org/pdf/2503.09113)).

**Benchmark datasets (still the standard reference):** NASA **C-MAPSS** (turbofan RUL, de-facto benchmark) and **PRONOSTIA / FEMTO** (run-to-failure bearings, 25.6 kHz accelerometers) — via [NASA PCoE repository](https://www.nasa.gov/intelligent-systems-division/discovery-and-systems-health/pcoe/pcoe-data-set-repository/) and [PHM Society mirror](https://data.phmsociety.org/nasa/).

### 1b. Anomaly detection

Practitioner algorithm-selection consensus for 2026:
- **Tabular / no labels:** Isolation Forest, ECOD, One-Class SVM, autoencoders trained on "normal."
- **Time-series:** LSTM autoencoders, **Anomaly Transformer**.
- **Both classes labeled:** supervised **XGBoost/LightGBM** with cost-sensitive loss.
- Hybrid **Autoencoder + Isolation Forest** stacks are a recurring 2025 pattern (feature extraction + scoring). Sources: [forasoft 2026 playbook](https://www.forasoft.com/blog/article/machine-learning-algorithms-anomaly-detection), [Nature Sci Reports 2025](https://www.nature.com/articles/s41598-025-20445-4), [dtaianomaly library, arXiv 2502.14381](https://arxiv.org/pdf/2502.14381).

### 1c. Time-series foundation models — ARE they being adopted for industrial?

**Short answer: emerging/piloting, not yet dominant in production.** Real research adoption exists (e.g., TSFMs to *forecast* defects in **metal additive manufacturing** — [ScienceDirect S1526612525007145](https://www.sciencedirect.com/science/article/abs/pii/S1526612525007145)), and vendor case-marketing is heavy, but honest limitations are documented.

Named models (one line each; **flag = 2025/26 release**):

- **Amazon Chronos-2** — **[Oct 20, 2025]** 120M-param encoder-only (T5-inspired) TSFM; **native univariate + multivariate + covariate** zero-shot via "group attention," 300+ forecasts/sec on one A10G GPU. *Why it matters:* first mature TSFM that handles interacting sensor streams natively — the key industrial requirement. ([Amazon Science](https://www.amazon.science/blog/introducing-chronos-2-from-univariate-to-universal-forecasting), [arXiv 2510.15821](https://arxiv.org/abs/2510.15821)). Note: some secondary write-ups cite "9M–710M params" — that's the *original* Chronos-T5 family, not Chronos-2.
- **Google TimesFM (2.5)** — **[2.5 is a 2025 release]** ~200M-param patch-based decoder-only model, trained on ~100B real-world time points; strong on the **GIFT-Eval** leaderboard. *Why it matters:* efficient, battle-tested at Google scale; being pitched directly at PdM baselining. ([MachineLearningMastery 2026](https://machinelearningmastery.com/the-2026-time-series-toolkit-5-foundation-models-for-autonomous-forecasting/), [Pebblous](https://blog.pebblous.ai/report/timesfm-industrial-forecasting/en/)).
- **Salesforce MOIRAI-2** — decoder-only, "Any-Variate Attention," trained on the LOTSA corpus (27B observations); natively multivariate + frequency-agnostic. *Why it matters:* built for messy multi-sensor industrial data. ([MachineLearningMastery](https://machinelearningmastery.com/the-2026-time-series-toolkit-5-foundation-models-for-autonomous-forecasting/)).
- **Nixtla TimeGPT** — the first TSFM (Oct 2023), delivered as a **commercial API** (not open weights); also does anomaly detection. *Why it matters:* lowest-friction managed entry point for teams without ML infra. ([Nixtla](https://www.nixtla.io/blog/anomaly-detection)).
- **Lag-Llama** — open-source, decoder-only (LLaMA-inspired), **probabilistic** forecasts with uncertainty intervals. *Why it matters:* the uncertainty quantification maintenance risk models actually need. ([MachineLearningMastery](https://machinelearningmastery.com/the-2026-time-series-toolkit-5-foundation-models-for-autonomous-forecasting/)).
- **Time-LLM** — reprograms existing LLMs (GPT-2/LLaMA/BERT) for forecasting without weight changes ("Prompt-as-Prefix"). Research-stage. ([same](https://machinelearningmastery.com/the-2026-time-series-toolkit-5-foundation-models-for-autonomous-forecasting/)).

**Reality check (important):** a **July 2026** break-even analysis found **full fine-tuning is unstable at low data fractions (worst-case MASE >23); LoRA is the recommended default** ([arXiv 2607.04919](https://arxiv.org/html/2607.04919v1)). Data heterogeneity + fine-tuning instability remain the blockers ([Foundation-Models-for-TS survey, arXiv 2504.04011](https://arxiv.org/html/2504.04011v1)). TimesFM's own industrial write-up concedes it is **weak on interacting multivariate sensors** and requires prior data-quality diagnostics ([Pebblous](https://blog.pebblous.ai/report/timesfm-industrial-forecasting/en/)).

*Leaderboard caveat:* Chronos-2 (Amazon) and TimesFM 2.5 (Google) each claim top GIFT-Eval placement in their own materials; rankings shift per benchmark revision — treat "#1" claims as contested marketing.

---

## 2. Sensors & Signals

Multi-modal condition monitoring is standard; **vibration alone was ~26% of condition-monitoring market revenue in 2025** ([Inframatrix](https://www.inframatrix.com.my/post/condition-based-monitoring-techniques)).

- **Vibration (accelerometers/IEPE):** most-adopted modality; spectral signatures catch bearing pitting, misalignment, imbalance, cavitation. Foundation of nearly every wireless PdM sensor.
- **Motor Current Signature Analysis (MCSA):** non-intrusive electrical test; catches rotor-bar/stator faults that vibration misses. 2026 research fuses **vibration + current with DL** for induction-motor diagnosis ([Ayankoso et al., Structural Health Monitoring, 2026](https://journals.sagepub.com/doi/10.1177/14759217241289874)).
- **Ultrasonic / Acoustic Emission (20 kHz–1 MHz):** earliest warning for slow-speed equipment, lubrication, leaks; AI pattern-recognition classifies fault type/severity "weeks before vibration or thermal" ([iFactory](https://ifactoryapp.com/predictive-maintenance/acoustic-emission-ultrasonic-monitoring-predictive-maintenance)).
- **Thermal / Infrared:** surface-temperature anomalies from friction, electrical overload, insulation failure.
- **Oil analysis:** wear-particle/chemistry trending for gearboxes and hydraulics.
- **Sensor buyer's-guide framing** (vibration/temp/current/acoustic tradeoffs): [iFactory guide](https://ifactoryapp.com/predictive-maintenance/predictive-maintenance-sensor-buyers-guide-vibration-temperature), [Tractian techniques](https://tractian.com/en/blog/types-of-condition-monitoring-techniques).

**Edge/TinyML sensing** (major 2026 direction): ~1B TinyML IoT devices projected in 2026; battery-months, no-cloud sensors run **1D-CNNs** on-device to classify normal/imbalance/misalignment/bearing-wear. A 2026 bearing study reports **88.28% accuracy, 45 ms inference, 17.7 mJ/inference** ([ScienceDirect S2468227626001924](https://www.sciencedirect.com/science/article/pii/S2468227626001924); [Springer, Discover IoT 2025](https://link.springer.com/article/10.1007/s43926-025-00142-4)).

---

## 3. Tools & Platforms

### 3a. Python / ML & time-series stack (real, actively maintained)

- **scikit-learn / PyTorch** — the base ML + DL layer. [from-knowledge]
- **sktime** (~7.5k stars) — broadest classical TS toolkit (forecasting, classification, anomaly detection e.g. STRAY/DOBIN).
- **aeon** — sktime-lineage toolkit adding segmentation, anomaly detection, similarity search ([arXiv 2406.14231](https://arxiv.org/pdf/2406.14231)).
- **Darts** (unit8co) — user-friendly forecasting **and** anomaly detection; wraps classical + deep + foundation models ([GitHub](https://github.com/unit8co/darts)).
- **tslearn** (~2.8k stars) — TS classification/clustering (DTW etc.).
- **Nixtla** ecosystem (StatsForecast/NeuralForecast + **TimeGPT** API) — high-performance forecasting + anomaly detection.
- **Merlion** (Salesforce), **dtaianomaly** ([arXiv 2502.14381](https://arxiv.org/pdf/2502.14381)) — anomaly-detection-focused libraries.
- Overview references: [Rob Hyndman's Python TS list](https://robjhyndman.com/hyndsight/python_time_series.html).

### 3b. Time-series databases / historians

- **InfluxDB** — high write-throughput TSDB; positioned as extending legacy historians with high-resolution data + open SQL/InfluxQL.
- **TimescaleDB / TigerData** — PostgreSQL extension; best when joining sensor data with relational asset/maintenance metadata ([TigerData comparison](https://www.tigerdata.com/learn/the-best-time-series-databases-compared)).
- **TDengine** — purpose-built for industrial IoT: native **MQTT/OPC UA**, edge deployment, benchmarks ahead of Influx/Timescale on ingestion ([TDengine TSBS report](https://tdengine.com/tsbs-iot-performance-report-tdengine-influxdb-and-timescaledb/)).
- **Legacy historians:** AVEVA **PI System** remains the OT incumbent, but note **ProcessBook reached end-of-life Dec 2024** and **AVEVA was acquired by Schneider Electric (2023)** — a migration driver toward modern TSDBs ([iFactory historian comparison](https://ifactoryapp.com/blog/historian-database-comparison), [TigerData: historian vs TSDB](https://www.tigerdata.com/learn/moving-past-legacy-systems-data-historian-vs-time-series-database)).

### 3c. Commercial IIoT / PdM platforms & vendors (real, with 2025–26 moves flagged)

**Independent machine-health specialists**
- **Augury** — "Machine Health as a Service" (proprietary vibration + ultrasonic sensors + AI); best-of-breed for high-criticality rotating assets. **$1B+ valuation, $75M Series F Feb 2025 (Lightrock)**; unicorn since 2021's $180M Series E (Baker Hughes) ([Augury/TechCrunch](https://techcrunch.com/2025/02/19/augury-raises-73m-on-a-1b-valuation-for-ai-to-detect-malfunctions-in-factory-machines/)).
- **Tractian** — wireless vibration/temp/RPM sensors + cloud + **built-in CMMS**; auto-detects 70+ failure modes. ($45M Series B, General Catalyst, 2023) ([Tractian](https://tractian.com/en/blog/tractians-raises-45m-in-series-b)).
- **Waites** — wireless vibration/temp; forecasts up to 90 days out; every alert reviewed by a CAT-certified analyst ([Tractian comparison](https://tractian.com/en/blog/waites-alternatives)).
- **MachineMetrics** — production/asset monitoring via direct PLC connectivity (MTConnect, OPC UA, Fanuc FOCAS); discrete-manufacturing focus ([reliamag](https://reliamag.com/guides/best-industrial-iot-platforms-2026/)).
- **SKF** — bearing/rotating-equipment reliability incumbent.

**Enterprise / OEM ecosystems**
- **Siemens Senseye Predictive Maintenance** — enterprise-scale, deep fit with Siemens MindSphere/TIA Portal; auto-forecasts failures + prioritizes risk ([Siemens](https://www.siemens.com/en-us/products/industrial-digitalization-services/senseye-predictive-maintenance/)).
- **Uptake (AssetCloud)** — APM for mining/energy/rail with historian integration.
- **IBM Maximo (Predict)** — enterprise EAM + predictive.
- **GE Vernova APM / Predix** — heavy-industry APM; **Proficy MES business divested to TPG (PE)**.
- **PTC ThingWorx** — IIoT platform (analytics, digital twins, anomaly alerts); **being sold with Kepware to TPG for up to $725M, closing H1 2026** ([devopsschool roundup](https://www.devopsschool.com/blog/top-10-ai-predictive-maintenance-tools-in-2025-features-pros-cons-comparison/)).
- **C3 AI Predictive Maintenance** — enterprise AI suite for custom PdM models.
- Vendor-comparison sources: [kgt.solutions](https://kgt.solutions/resources/blog/best-predictive-maintenance-software-plants), [f7i.ai Senseye-vs-Augury](https://f7i.ai/blog/senseye-vs-augury-choosing-the-right-predictive-maintenance-platform-for-2026), [MachineCDN](https://www.machinecdn.com/blog/predictive-maintenance-software-comparison/).

**Cloud platforms — the big 2026 shift**
- **AWS: Amazon Lookout for Equipment is being RETIRED** — new customers blocked **Oct 7, 2025**; full shutdown **Oct 7, 2026**. AWS steers users to **AWS IoT SiteWise** (which gained **native multivariate anomaly detection in July 2025**), with a **GitHub migration-script repo** provided ([AWS ML blog](https://aws.amazon.com/blogs/machine-learning/preserve-access-and-explore-alternatives-for-amazon-lookout-for-equipment/)). AWS also pushes **Amazon Bedrock** for generative-AI maintenance workflows ([AWS for Industries](https://aws.amazon.com/blogs/industries/empowering-predictive-maintenance-with-amazon-bedrock/)).
- **Azure** — *[from-knowledge / inferred; searches did not surface strong current Azure PdM specifics]*: relevant building blocks are **Azure IoT Operations, Azure Machine Learning, Azure Digital Twins**, and Fabric real-time intelligence rather than a single named "Lookout"-style PdM product. Treat as directional, not verified.

---

## 4. Industry-4.0 / IIoT Context

- **Digital twins for maintenance have moved pilot → production-scale.** Market cited at **USD 36.19B (2025) → USD 180.28B (2030), ~37.9% CAGR**. For PdM they combine **physics-based simulation + ML** for anomaly detection and RUL. ([Mitsubishi guide](https://www.mitsubishimanufacturing.com/digital-twin-manufacturing-guide-2026/), [Centosoftware architecture](https://centosoftware.com/2025/11/28/digital-twin-architecture-for-manufacturing/), [ResearchAndMarkets](https://www.researchandmarkets.com/reports/6225988/digital-twin-in-manufacturing-market-report)).
- **MES / historian / SCADA integration:** twins act as the OT↔IT unifying layer, ingesting from sensors/PLCs/SCADA/historians and feeding MES/ERP/analytics via **OPC UA and MQTT**.
- **Unified Namespace (UNS)** is the standout 2026 architectural pattern: a single pub/sub data backbone (**MQTT + Sparkplug B** for enterprise event streaming, **OPC UA** at the machine layer) replacing point-to-point integrations. Major PLC vendors (**Siemens, Rockwell, Beckhoff, Schneider, ABB**) now embed OPC-UA servers in controllers, making UNS viable at scale ([Prosys OPC](https://prosysopc.com/blog/industry-4-0-and-open-standards-how-opc-ua-wot-i3x-and-mqtt-build-a-functional-architecture/), [HiveMQ](https://www.hivemq.com/blog/opc-ua-mqtt-bridge-ot-protocols-industrial-data/), [IIoT Blog, Jan 2026](https://iiotblog.com/2026/01/30/unified-namespace-uns-as-the-architectural-foundation-for-iiot/)). This matters because PdM analytics are only as good as the data plumbing feeding them.

---

## 5. Trend Direction for 2026

1. **TSFMs enter industrial pilots — cautiously.** Chronos-2's multivariate/covariate support is the technical unlock; expect Darts/Nixtla-mediated pilots for forecasting and anomaly baselining, gated by fine-tuning instability (use **LoRA**, not full FT) and data-quality prerequisites ([arXiv 2607.04919](https://arxiv.org/html/2607.04919v1)).
2. **Agentic + generative AI in the maintenance workflow** — auto-anomaly-detect → open ticket → dispatch technician, plus LLM copilots for manuals/work orders. Deloitte's 2026 outlook expects **agentic adoption to ~quadruple (≈6% → 24%)**; enabling protocols **A2A** and **MCP**; cited ROI (Suzano 95% faster data queries, Danfoss 80% order automation, Elanco ~$1.3M/site avoided). **Counter-signal: Gartner expects >40% of agentic AI projects cancelled by end-2027** ([iiot-world](https://www.iiot-world.com/artificial-intelligence-ml/2026-industrial-ai-trends-driving-global-manufacturing-with-agentic-systems/), [Google Cloud manufacturing trends](https://cloud.google.com/resources/content/ai-agent-trends-manufacturing-2026), [TeepTrak](https://teeptrak.com/en/manufacturing-automation-trends-2026/)).
3. **Edge analytics goes default** — TinyML on-sensor inference (1D-CNNs) for privacy, latency, battery-life; ~1B devices in 2026 ([asappstudio](https://asappstudio.com/the-future-of-edge-ai-in-2026/)).
4. **Physics-informed / Bayesian hybrids** rise where **uncertainty quantification** is non-negotiable (aerospace, power transformers, batteries).
5. **Platform consolidation** — PE roll-ups (TPG buying PTC ThingWorx/Kepware and GE Proficy) plus AWS retiring Lookout for Equipment push buyers toward IoT SiteWise, best-of-breed specialists (Augury/Tractian), or the Siemens/IBM enterprise stacks.
6. **Data-backbone modernization (UNS + modern TSDBs)** as the prerequisite investment behind all of the above.

---

## Key 2026-Dated / Newly-Released Items (flagged)
- **Amazon Chronos-2** — Oct 20, 2025 (multivariate TSFM).
- **AWS IoT SiteWise native anomaly detection** — July 2025; **Lookout for Equipment shutdown** Oct 7, 2026.
- **PTC ThingWorx + Kepware → TPG**, up to $725M, closing H1 2026; **GE Proficy → TPG**.
- **ASME RUL-of-rotating-machinery DL review** — April 2026.
- **TSFM break-even / fine-tuning study** — arXiv, July 2026.
- **CNN-BiLSTM-Attention interpretable RUL** (arXiv 2604.13459), **Bi-cLSTM** (arXiv 2603.00745) — 2026 RUL methods.
- **OPC Foundation Interoperability doc** dated Jan 2026; **IIoT-Blog UNS** Jan 2026.

## Items marked inferred / from-knowledge (not strongly web-verified this session)
- Azure's specific PdM product mapping (IoT Operations / Azure ML / Azure Digital Twins) — directional only.
- "Classical ML still runs most production PdM" and "TSFMs not yet dominant in production" — my synthesis/assessment, supported by the adoption-challenge and break-even sources but not a single headline stat.

**Primary sources:** [MachineLearningMastery TSFM toolkit](https://machinelearningmastery.com/the-2026-time-series-toolkit-5-foundation-models-for-autonomous-forecasting/) · [Amazon Science Chronos-2](https://www.amazon.science/blog/introducing-chronos-2-from-univariate-to-universal-forecasting) · [AWS Lookout retirement](https://aws.amazon.com/blogs/machine-learning/preserve-access-and-explore-alternatives-for-amazon-lookout-for-equipment/) · [Pebblous TimesFM industrial](https://blog.pebblous.ai/report/timesfm-industrial-forecasting/en/) · [iiot-world 2026 agentic trends](https://www.iiot-world.com/artificial-intelligence-ml/2026-industrial-ai-trends-driving-global-manufacturing-with-agentic-systems/) · [TigerData TSDB comparison](https://www.tigerdata.com/learn/the-best-time-series-databases-compared) · [Augury Series F / TechCrunch](https://techcrunch.com/2025/02/19/augury-raises-73m-on-a-1b-valuation-for-ai-to-detect-malfunctions-in-factory-machines/) · [Inframatrix condition-monitoring techniques](https://www.inframatrix.com.my/post/condition-based-monitoring-techniques) · [IIoT-Blog Unified Namespace](https://iiotblog.com/2026/01/30/unified-namespace-uns-as-the-architectural-foundation-for-iiot/) · [arXiv TSFM break-even study](https://arxiv.org/html/2607.04919v1).
