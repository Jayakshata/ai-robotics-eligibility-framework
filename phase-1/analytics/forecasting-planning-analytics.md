# Per-Niche Profile — Forecasting & Planning Analytics

> **Applied-AI area profile (Analytics / Predictive AI, Area 2).** The industrial-data-science layer that produces the **statistical / probabilistic demand & supply forecast** every S&OP/IBP plan, inventory target, and capacity decision is built on — NOT the agentic planning copilot that consumes it (Area 1), NOT robot control. Standard 12-section template, adapted: eligibility is DS/stats/OR + a supply-chain-planning domain overlay; §7 is the time-series-foundation-model frontier; §9 is data/compute/planning-platform sandboxes (not sensors, not robots). Research-backed (mid-2026). `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Niche:** Forecasting & Planning Analytics · **Area:** Analytics / Predictive AI (non-embodied) · **Type:** `[S]` specialized (`[★]` time-series FMs)
**Draws on:** industrial data science (forecasting statistics / OR / ML) **+** demand-planning / supply-chain domain · **Serves platforms (C):** planning-platform-agnostic (consumed by SAP IBP · o9 · Blue Yonder · Kinaxis) · **Verticals (B):** B1 manufacturing (core to this framework) · retail & CPG, pharma, logistics / distribution (the demand-planning heartland)

---

## 1. Definition & Scope
Producing the **statistical / probabilistic forecast of demand and supply** — the number every S&OP / IBP plan, safety-stock target, and capacity decision is built on — from order/POS/shipment history, prices, promotions, calendars, and external signals. This is the **analytics / predictive-AI layer**: forecasting statistics + operations research plus supply-chain-planning domain knowledge. **In scope:** time-series forecasting (classical → ML → deep → foundation models), **hierarchical forecasting & reconciliation**, **intermittent / lumpy demand**, **probabilistic / quantile forecasts**, backtesting & forecast-value-added, inventory & safety-stock math, and the MLOps to run it. **Out of scope:** the agentic ERP/MES/IBP copilot that reads the forecast and acts on it (**Area 1 — operations-erp-ai** — reference, don't absorb) and the robot's embodied control (A-Embodied). The planning platforms (SAP IBP, o9, Blue Yonder, Kinaxis) are where the forecast is *consumed*, not built.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Forecasting Analyst / Jr Data Scientist (Demand Forecasting) | Builds forecasting models on historical/benchmark data under supervision; runs rolling-origin backtests against baselines. |
| **L2** | Demand Planner / Forecasting Data Scientist | Owns a demand model end-to-end (ingest → features → forecast → reconcile → monitor); connects it to an S&OP / inventory decision. |
| **L3** | Senior / Lead Demand-Planning Data Scientist | Designs the forecasting architecture; makes classical-vs-ML-vs-probabilistic tradeoffs; sets the validation & reconciliation regime; mentors. |
| **L4/L5** | Staff / Principal — Forecasting Science / Head of Demand Planning | Sets forecast strategy; advances probabilistic / hierarchical / foundation-model methods; owns forecast architecture & accuracy governance. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials
**The role = a data-science / statistics / OR core + a demand-planning / supply-chain domain overlay `✓`.** This niche hires through **two doors**: the **quant-core forecasting scientist** (Door A — the Amazon SCOT "Data Scientist, Demand Forecasting" archetype; the forecasting statistics is the hard-to-substitute half, domain certs a bonus) and the **demand planner** (Door B — CPG/pharma IBP, e.g. J&J/Kenvue; a quantitative-enough degree + a **supply-chain-planning certification is the moat** + planning-platform fluency + business acumen). The quantitative forecasting core is the niche's harder-to-substitute half; the planning certification is what a pure data scientist lacks. A strong hire is bilingual across both.

**Acceptable undergraduate degrees** — Tier 1 (the quantitative core): **Statistics / Data Science** (forecasting is applied time-series statistics); **Operations Research / Industrial & Systems Engineering (OR/analytics track)** — the best-balanced single degree, carrying the optimization + inventory theory *and* the statistics; **Economics / Econometrics** — the sleeper Tier-1 pick and a genuine differentiator (classical demand forecasting *is* time-series econometrics — ARIMA/ETS/VAR, seasonality, promotional regressors); **Applied Mathematics**, **CS / ML Engineering** (the modern ML/deep side). Tier 2 (domain-forward, especially Door B): **Supply Chain Management / Analytics**, **Operations Management**, **Business Analytics**, **Logistics** — strong on the planner door, lighter on the modeling core. Nobody in this niche needs kinematics, control, or signal processing.

**Highly-valued programs `✓`** — *The forecasting-methodology flagship (the differentiator, analog of UMD-CALCE for PHM):* **Monash University — Dept of Econometrics & Business Statistics (Rob J. Hyndman)**, the canonical academic home of statistical forecasting, source of **Forecasting: Principles and Practice** (Hyndman & Athanasopoulos, 3rd ed., `otexts.com/fpp3` — *the* free canonical text of the field) and the R `fable`/`tsibble`/`feasts` + hierarchical-reconciliation toolchain. *If you name one thing in this niche, name FPP3.* *The OR/analytics powerhouses (strongest for the quant core):* **Georgia Tech — H. Milton Stewart School of ISyE** (#1 IE — MS Analytics, the affordable online **OMSA**, MS Operations Research, MS Supply Chain Engineering); **MIT — Operations Research Center** (Master of Business Analytics, MS/PhD OR). *The supply-chain / demand-planning flagship (the domain half):* **MIT CTL — MicroMasters in Supply Chain Management** (`CTL.SCx`, free to audit, feeds the #1 MIT SCM blended master's); dedicated **MS Supply Chain Analytics** at Rutgers, Univ. of Pittsburgh, WPI. **~Lancaster (UK) — Management Science / Centre for Forecasting**, an IIF-accredited European specialist. General DS/stats entry paths: UC Berkeley, CMU, Stanford, Michigan.

**Acceptable postgraduate degrees** — MS/PhD in **Statistics, Operations Research, Data Science / Analytics, Econometrics, Industrial & Systems Engineering,** or a **Supply Chain Management / Analytics** master's (the domain-forward route). Frontier research roles (probabilistic / hierarchical / **time-series foundation models**) favor a PhD. A portfolio outweighs a graduate degree here more than in most niches `✓`: forecasting skill is unusually demonstrable in public (a top-decile M5-type finish is verifiable evidence a transcript can't give), and Door B substitutes **CPF + CPIM + real S&OP experience** for an academic master's.

**Highly-valued certifications `✓`** — pair an **analytics/ML cert** (portable core) with a **planning-domain cert** (the moat):
- *Analytics (portable core):* DeepLearning.AI **ML** + **Deep Learning** specializations; a cloud ML cert (**AWS MLA-C01** — the older **MLS-C01 retired Mar 2026**; **Google PMLE** — strongest MLOps; **Azure DP-100** / **AI-102 → AI-103**); **SAS Certified Specialist: Forecasting & Optimization Using SAS Viya** (forecasting-specific; real weight on Door B in CPG/retail).
- *Domain (the moat):* **IBF CPF** (Certified Professional Forecaster, Institute of Business Forecasting — the most forecasting-specific credential in existence; three exams incl. *Data Management & Time-Series Forecasting Modeling*; ladder **CPF-C → CPF → ACPF**), **APICS CPIM** (planning & inventory — *no prerequisites*), **APICS CSCP** (end-to-end supply chain; ASCM dropped formal eligibility in 2026), **ISCEA CDDP / DDI DDP** (demand-driven / DDMRP), **~IIF certificate** (International Institute of Forecasters — the 34-year-old academic forecasting society; the standards-body analog of the PHM Society).

**Experience & portfolio** — L1: a **forecasting project on benchmark data** (**M5 / M4** or a Kaggle retail comp) — rolling-origin backtested, a baseline beaten, hierarchy or intermittency handled. L2: 2–4 yr, a **deployed forecast feeding a real decision** (S&OP/IBP cycle, safety-stock, capacity plan); CPF-C→CPF or CPIM in progress. L3: 5–8 yr, led a forecasting/planning programme, owns the validation regime; typically **CPF (+ CPIM)**. L4/L5: 8+ yr and/or research depth (probabilistic / hierarchical / TSFM) **or** a domain-cert stack (**ACPF + CSCP**).

## 4. Skill Profile (JD-style)

**Required / must-have**
- **Python** (pandas, NumPy, **statsmodels**) + **SQL**
- **Time-series forecasting** — classical (**ARIMA/ETS/Theta**) *and* ML (gradient-boosted trees on lag features)
- **Applied statistics & probability** — stationarity, seasonality, autocorrelation
- **Backtesting** — rolling-origin / expanding-window CV; scale-free metrics (**MASE, RMSSE, WAPE, bias**)
- **Hierarchical forecasting & reconciliation** — coherent plans across product / geography / time
- **Intermittent-demand methods** — Croston / SBA / TSB for spare-parts & long-tail SKUs
- **Communication** — translate a forecast *and its uncertainty* into an inventory / capacity / S&OP decision

**Preferred / differentiating**
- **Probabilistic / quantile forecasting** (newsvendor / safety-stock sizing); **conformal prediction** intervals
- **Deep learning for sequences** — DeepAR / TFT / N-HiTS / PatchTST; **time-series foundation models**
- Cloud + **MLOps** (Docker/K8s, model monitoring/retraining, feature stores)
- **Planning-platform fluency** — SAP IBP / o9 / Blue Yonder / Kinaxis; **demand sensing**
- A **domain cert** (IBF CPF / APICS CPIM); OR / optimization for inventory & capacity

**Tools & tech stack** — *Languages:* Python (+ R — **fable/tsibble/feasts**) · *Forecasting:* **Nixtla** (StatsForecast, MLForecast, NeuralForecast, HierarchicalForecast, TimeGPT), **Darts, sktime, GluonTS, AutoGluon-TimeSeries**; XGBoost/LightGBM · *TSFMs:* **Chronos-2, TimesFM 2.5, Moirai 2.0, IBM Granite TTM, TabPFN-TS** (via HuggingFace) · *Deep:* DeepAR, TFT, N-HiTS, PatchTST · *Data/compute:* SQL warehouses, Databricks / Snowflake / Fabric, InfluxDB / TimescaleDB · *Planning platforms:* **SAP IBP, o9, Blue Yonder, Kinaxis Maestro, RELEX, ToolsGroup** · *BI:* Power BI, Tableau, Excel (still load-bearing on Door B) · *Benchmarks:* **M5/M4, GIFT-Eval, fev-bench**

**Bar by tier** — L1: builds & backtests forecasting models on historical/benchmark data · L2: ships a forecast tied to an S&OP / inventory decision · L3: architects the forecasting stack, deep in ≥1 area (hierarchical, probabilistic, or intermittent) · L4/L5: sets forecast strategy, owns accuracy governance & the S&OP/IBP analytics roadmap.

## 5. Core Subject List `✓`
- **Foundational maths & CS:** probability & statistics · linear algebra · **time-series econometrics** · Python + data stack · classical ML · gradient boosting · deep learning (RNN/LSTM/**Transformer**).
- **Core (time-series forecasting):** ARIMA/SARIMA, **ETS / exponential smoothing**, Theta · stationarity / seasonality / autocorrelation · forecast evaluation — **rolling-origin backtesting**, MASE/RMSSE/WAPE/bias · forecast combination.
- **Niche-specific (planning analytics):** **hierarchical forecasting & reconciliation** (bottom-up / top-down / **MinT**) · **intermittent / lumpy demand** (Croston / SBA / TSB, ADIDA temporal aggregation) · **probabilistic & quantile forecasting** · inventory theory — safety stock, newsvendor, (s,S) policies, service levels · **S&OP / IBP** cycle, demand sensing, new-product & promotional forecasting.
- **Frontier / advanced `⏱`:** **time-series foundation models** (zero-shot / covariate-aware) · **conformal prediction** for drift · hierarchical-Bayesian intermittent models · global deep forecasters (DeepAR/TFT/N-HiTS/PatchTST).
- **Data eng & domain:** SQL & data warehouses / lakehouse, feature engineering for time series, MLOps / monitoring · supply-chain planning (S&OP/IBP, MRP, inventory management), **forecast-value-added** governance, planning-platform data models (SAP IBP / o9).

## 6. Training Programme Design & Duration `✓`
Analytics + domain programme; ~1,300 hours, phase 3 = the planning-analytics core (hierarchical reconciliation, intermittent demand, probabilistic forecasts, inventory / S&OP).

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Python/data stack, statistics, classical ML | 2.0 mo | 6 mo | 300 | Data & ML fluency |
| 2. Time-series forecasting | ARIMA/ETS/Theta, ML forecasting, backtesting | 2.0 mo | 6 mo | 300 | Forecast & validate rigorously |
| 3. **Planning analytics (the niche core)** | Hierarchical reconciliation, intermittent demand, probabilistic forecasts, inventory & S&OP/IBP | 2.0 mo | 5–6 mo | 280 | The niche core |
| 4. Data eng & MLOps | Warehouse/lakehouse, feature pipelines, deploy/monitor, planning-platform data models | 1.5 mo | 4 mo | 200 | A running, monitored forecast pipeline |
| 5. Capstone + portfolio | Hierarchical probabilistic forecast on M5 with rolling-origin backtesting that beats ETS/naive + an FVA/accuracy dashboard | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,300 | Junior forecasting / demand-planning data scientist |

*For an existing data scientist, phases 2–3 (time-series forecasting + the planning domain) compress to ~4–6 months; for a demand planner already fluent in S&OP/IBP, the gap is the quantitative core (phases 1–2) instead.*

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** `🆕` = 2025–26 release.
- **Time-series foundation models (the covariate / multivariate leap is the story for planning):** **🆕 Amazon Chronos-2** (Oct 2025 — zero-shot **multivariate + native covariate** support via *group-attention*; the single biggest unlock, because real demand *is* price/promo/holidays/weather) · **🆕 Google TimesFM 2.5** (200M, 16k context, native **quantile head**) · **🆕 Salesforce Moirai 2.0** (quantile loss, 96% smaller) · **Nixtla TimeGPT** (managed API) · **Lag-Llama** (open probabilistic baseline). *Reality check `✓`: aggregate zero-shot SOTA ≠ better on your intermittent SKU; classical stats + gradient-boosting (M5-winning **LightGBM** ensembles) still run most production planning.*
- **Small & specialized vs. big & general (the counter-current):** **🆕 IBM Granite TinyTimeMixers** (from ~1M params, on-prem) · **🆕 TiRex** (35M **xLSTM**, Hochreiter / NX-AI) · **🆕 TabPFN-TS** (tabular-prior, zero-shot, briefly #1 on GIFT-Eval) — tiny models beating billion-parameter TSFMs on public leaderboards; the edge / on-prem / cost route.
- **Probabilistic forecasting & uncertainty:** quantile-native TSFMs (the 2025 generation emits distributions by default) · **🆕 conformal prediction for time series** — distribution-free intervals, with 2025 work on drift / non-exchangeability & change points (**CPTC**) — the "honest uncertainty" layer for safety-stock sizing.
- **Hierarchical forecasting & reconciliation (the S&OP backbone):** BottomUp / TopDown / MiddleOut + optimal **MinT (Minimum Trace)**; probabilistic-coherent variants — increasingly **layered over TSFM / deep base forecasts** rather than pure-statistical bases.
- **Intermittent / lumpy demand:** classical **Croston / SBA / TSB** still standard · **🆕 TSB-HB** (Nov 2025 — hierarchical-Bayesian TSB, partial pooling for sparse / cold-start SKUs) — the long-tail spare-parts refresh.
- **Benchmarks & evaluation:** **🆕 fev-bench** (Amazon, Sep 2025 — first to make **covariates** a first-class axis) · **GIFT-Eval** (Salesforce — the public leaderboard) · **M5/M4** (the operational, adversarial reference) · **Forecast Value Added (FVA)** governance vs. a seasonal-naive baseline · explicit **data-leakage** vigilance (train/test overlap inflates zero-shot scores).
- **Platform & buy-vs-build shifts:** **🆕 Amazon Forecast closed to new customers** (→ SageMaker Canvas / AutoGluon-TimeSeries / Bedrock Chronos) · **SAP APO → end of mainstream maintenance 2027** (→ SAP IBP + S/4HANA) · the loud **agentic planning layer** (Kinaxis Maestro Agents, Blue Yonder, o9 Digital Brain) is **Area 1** — the forecast engine underneath is this niche.

*Net trend: classical stats + gradient-boosting run production planning today; TSFMs crossed into serious piloting in 2025–26 specifically because they gained covariates + multivariate + native quantiles, while a small-model counter-current keeps them cheap/on-prem; probabilistic + hierarchical + intermittent methods are the enduring substance and conformal prediction the rising uncertainty wrapper. Counter-signal: the NeurIPS'24 ablation ("Are Language Models Actually Useful for Time Series Forecasting?" — removing the LLM didn't degrade accuracy) and Gartner placing supply-chain GenAI in the trough of disillusionment. Treat every vendor accuracy/ROI number (demand-sensing 5–20% accuracy / 5–25% inventory reduction) as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | **Forecast the M5 (Walmart) hierarchical retail dataset** — ETS/ARIMA + a LightGBM baseline | The forecasting pipeline + rolling-origin backtesting; beat seasonal-naive on RMSSE |
| Foundational | Classical baselines with **StatsForecast** (AutoARIMA/ETS/Theta) on a retail series | Time-series fundamentals; a reproducible baseline board |
| Applied | **Hierarchical reconciliation** (bottom-up / top-down / MinT) across a product×store hierarchy | Coherent multi-level plans; SKU sums to category sums to total |
| Applied | **Intermittent-demand** forecast (Croston/SBA/TSB) on spare-parts / long-tail data | Lumpy-demand methods; a service-level-aware spare-parts forecast |
| Advanced | **Probabilistic forecast** (quantiles + conformal intervals) sized into **safety stock** | Uncertainty → inventory decision; calibrated coverage, not just point MAPE |
| Advanced | Zero-shot vs. tuned: **Chronos-2 / TimesFM** vs. a LightGBM baseline on your own series with covariates | TSFM evaluation discipline; an honest win/lose call, leakage-checked |
| Capstone | End-to-end **demand-planning system**: ingest → features → hierarchical probabilistic forecast → reconcile → **FVA / accuracy dashboard + S&OP hand-off** | The full stack; a demoable forecast feeding an inventory / capacity decision |

## 9. Required Setup / Data / Compute / Platform Sandbox `✓` (not robots)
- **Compute:** modest — forecasting is mostly **CPU-bound** (classical stats, gradient boosting); a GPU (or cloud) only for deep forecasters / TSFM fine-tuning. The Python + R time-series stack.
- **Data infrastructure:** a **SQL warehouse / lakehouse** (Databricks / Snowflake / Fabric) — forecasting runs *next to the data*; a feature store; time-series DBs (InfluxDB / TimescaleDB) where plant capacity/constraint signals feed supply-side S&OP.
- **Datasets & benchmarks (start here before company data):** **M5** (Walmart hierarchical — 30,490 daily series with prices/promos/events, intermittent), **M4** (100k series), **Rossmann / Corporación Favorita / Walmart** Kaggle retail sets; **GIFT-Eval** and **fev-bench** for TSFM evaluation.
- **Business & external-signal data (the real inputs — not sensors):** ERP / POS / EDI orders–shipments–inventory history; prices, promotions, holiday & event calendars, weather, macro / web-search signals — the **covariates** that actually drive demand.
- **MLOps:** experiment tracking, a **rolling-origin backtesting harness**, model monitoring/retraining, and an **accuracy / FVA dashboard** (Power BI / Tableau).
- **Optional platform sandbox:** a planning platform (SAP IBP / o9 / Blue Yonder / Kinaxis) or AutoGluon-TimeSeries / SageMaker Canvas for the end-to-end story — where the forecast is *consumed*.

## 10. Partnerships & Ecosystem
- **Professional & standards bodies:** **IBF** (Institute of Business Forecasting — CPF/ACPF) · **ASCM / APICS** (CPIM, CSCP) · **International Institute of Forecasters** (IJF, the ISF conference — the academic society; standards-body analog of the PHM Society) · **ISCEA / Demand Driven Institute** (CDDP / DDP).
- **Academic forecasting / OR anchors:** **Monash — Econometrics & Business Statistics (Hyndman / FPP3)** · **Georgia Tech ISyE** · **MIT ORC & CTL** · **~Lancaster Centre for Forecasting**.
- **Open-source & TSFM ecosystem:** **Nixtla** (StatsForecast/MLForecast/NeuralForecast/HierarchicalForecast/TimeGPT) · **AutoGluon-TimeSeries** · Darts · sktime · GluonTS · **HuggingFace** (the TSFM distribution hub) · the R **fable/tsibble** ecosystem · builders **Amazon** (Chronos) / **Google** (TimesFM) / **Salesforce** (Moirai) / **IBM** (Granite TTM) / **NX-AI** (TiRex) / **Prior Labs** (TabPFN-TS).
- **Planning platforms & vendors:** SAP IBP · o9 Solutions · Blue Yonder · Kinaxis (Maestro) · RELEX · ToolsGroup · John Galt · Logility · GAINS · Anaplan · **SAS**.
- **Cloud / data platforms:** AWS (SageMaker) · Databricks · Snowflake · Microsoft Fabric · Google Cloud.
- **Employers:** big-tech & e-commerce DS orgs (**Amazon SCOT**) · retail / CPG / pharma manufacturers (demand planning) · supply-chain-planning vendors · retail-forecasting consultancies.

## 11. Assessment & Validation
- **Forecast-accuracy metrics as portable evidence:** point (**MASE, RMSSE, WAPE, bias**), probabilistic (**WQL / scaled quantile loss, CRPS, interval coverage**), and — critically — **Forecast Value Added (FVA)** vs. a seasonal-naive baseline (the niche's honesty metric). A ranked **M5 / M4** or Kaggle-retail finish is a public, verifiable signal.
- **Portfolio bar:** a **hierarchical, probabilistic forecast with proper rolling-origin backtesting that beats naive/ETS** (the boundary substance) + a system-design interview (ingest → features → forecast → reconcile → decision) + **planning-domain literacy** (can they turn a forecast into a safety-stock / capacity / S&OP number?).
- **Niche-specific check (the FVA discipline):** can they *prove their model adds value over a naive baseline* — and resist the trap that a fancier forecast is automatically a better one? Leakage-free, rolling-origin backtesting is the gate.

## 12. Adjacent & Related Niches
Sits in **Analytics / Predictive AI (Area 2)** alongside `Predictive Maintenance & Reliability`, `Quality, Yield & Defect Analytics`, `Process & Production Optimization`, and `Anomaly & Fault Detection` (the four share the time-series/ML core and the Area-2 data plumbing); pairs with **A10 data infrastructure** where plant-floor capacity/constraint signals (UNS, time-series DBs, digital twins) feed supply-side S&OP. Its home vertical is **B1 manufacturing** within this framework, but its demand-planning heartland is retail / CPG / pharma. **Critical boundary:** the *statistical / probabilistic forecast* is this niche; the **agentic ERP/MES/IBP copilot that reads the forecast and acts** — Kinaxis Maestro Agents, o9 Digital Brain, Blue Yonder agents — is **Area 1 · Operations, ERP & Manufacturing-Execution AI** (reference, don't absorb). Distinct too from the sibling `Anomaly & Fault Detection` (real-time detection *on* operational series, not forward demand/supply prediction). (Reference only — seniority ladder is in §2.)

---
*Applied-AI area profile. Template: `phase-1/_TEMPLATE.md` (v3, adapted). Area plan: `applied-ai-taxonomy.md`. §7 stamped mid-2026 — re-research before publish. Named products/models are fast-moving; verify at source.*
