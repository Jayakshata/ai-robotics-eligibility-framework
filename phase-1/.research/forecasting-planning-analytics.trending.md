> Provenance: background research agent (trending pass) for the applied-AI niche **Forecasting & Planning Analytics** (Area 2 — Analytics / Predictive AI), mid-2026. Raw agent report, preserved verbatim.

I have comprehensive, well-cited coverage across all six themes. Here is the structured research report.

---

# Forecasting & Planning Analytics — Current Landscape (as of mid-2026, 2026-07-10)

**Niche:** demand/supply forecasting, capacity planning, inventory optimization, S&OP/IBP analytics — the **statistical forecast** layer. **Boundary:** the *agentic* ERP/MES/planning copilot that consumes the forecast (Kinaxis Maestro Agents, Blue Yonder agents, o9 AI agents) is **Area 1 · operations-erp-ai** — referenced here, not absorbed. The substance of *this* niche is hierarchical forecasting, intermittent demand, probabilistic/quantile forecasts, backtesting, and time-series foundation models (TSFMs).

**Scope note:** bias to 2025–2026 sources. Claims are web-cited unless marked *[assessment]* (my synthesis) or prefixed **~** (could not verify to a primary source — treat as unconfirmed). Vendor accuracy/ROI numbers are labeled **vendor-reported**. `🆕` = 2025–26 release.

## TL;DR — what actually changed for 2026

- **Time-series foundation models (TSFMs) matured on the exact axis this niche needs: native covariates + multivariate.** `🆕` **Amazon Chronos-2** (Oct 20 2025) added zero-shot **covariate-informed and multivariate** forecasting via "group attention" — the single biggest unlock, because real demand planning *is* covariates (price, promotions, holidays, weather). `🆕` **Google TimesFM 2.5** (Sep 2025) and `🆕` **Salesforce Moirai 2.0** (Aug 2025) traded the GIFT-Eval #1 spot through the year. [assessment, backed below]
- **The frontier consolidated around two evaluation harnesses** — **GIFT-Eval** (Salesforce) and `🆕` **fev-bench** (Amazon, Sep 2025, the first to make *covariates* a first-class benchmark axis). These are now the scoreboard everyone cites.
- **"Small and specialized" is a real counter-movement to "big and general":** `🆕` **IBM Granite TinyTimeMixers (TTM)** (from ~1M params), `🆕` **TiRex** (35M, xLSTM, NX-AI/Hochreiter), and `🆕` **TabPFN-TS** (tabular-prior, zero-shot) all beat billion-parameter models on public leaderboards — important for edge/on-prem planning and cost.
- **Two platform exits reshaped the buy-vs-build map:** **Amazon Forecast is closed to new customers** (since Jul 29 2024 → SageMaker Canvas / AutoGluon-TimeSeries / Bedrock Chronos), and **SAP APO hits end of mainstream maintenance in 2027** (→ SAP IBP + S/4HANA). Migration off both is a live 2026 project theme.
- **Agentic AI is the loud vendor narrative** (Kinaxis Maestro Agents, Blue Yonder, o9 Digital Brain) — but that orchestration layer is **Area 1**; the forecast engine underneath is this niche. Gartner has simultaneously put supply-chain GenAI in the **trough of disillusionment**. [assessment]
- **Classical statistics + gradient-boosting still run most production planning.** The M5 competition (won by LightGBM ensembles) has not been dethroned in operational practice; TSFMs are the growth edge, not yet the default, and a NeurIPS'24 result showed LLM-based forecasters add nothing over a plain attention/linear layer. [assessment]

---

## 1. The methods / models frontier — what changed in 2025–2026

### 1a. Time-series foundation models (TSFMs) — the covariate/multivariate leap is the story for planning

The pretrained-zero-shot-forecaster race that started in 2023–24 (TimeGPT, Chronos, TimesFM, Moirai, Lag-Llama) matured in 2025–26 in the one direction that matters for demand/supply planning: **exogenous covariates and joint multivariate forecasting**. Univariate zero-shot was a demo; covariates (price, promo, holidays, weather, macro) are the job.

- `🆕` **Amazon Chronos-2** — **[Oct 20 2025]** universal TSFM with zero-shot **univariate + multivariate + covariate-informed** forecasting via a novel **group-attention** mechanism (cross-series in-context learning), plus synthetic-data pretraining. *Why it matters:* first mature open TSFM that natively ingests future-known covariates (promotions/holidays) and co-evolving series — the actual shape of a demand-planning problem. Reports **>90% win rate vs Chronos-Bolt** and #1 among pretrained models on fev-bench and GIFT-Eval, with the **largest gains on tasks with exogenous features**. ([Amazon Science](https://www.amazon.science/blog/introducing-chronos-2-from-univariate-to-universal-forecasting), [arXiv 2510.15821](https://arxiv.org/abs/2510.15821))
- `🆕` **Google TimesFM 2.5** — **[Sep 2025]** decoder-only, **200M params (down from 500M)**, context extended **512 → 16,384** points, optional **quantile head** for native probabilistic output; **covariate support via XReg added Oct 2025**; LoRA fine-tuning via HuggingFace/PEFT added ~Apr 2026. Ranked **#1 on GIFT-Eval** (MASE + CRPS) at release. *Why it matters:* long context + probabilistic + covariates in a small model that's "battle-tested at Google scale." ([MarkTechPost](https://www.marktechpost.com/2025/09/16/google-ai-ships-timesfm-2-5-smaller-longer-context-foundation-model-that-now-leads-gift-eval-zero-shot-forecasting/), [HF model card](https://huggingface.co/google/timesfm-2.5-200m-transformers))
- `🆕` **Salesforce Moirai 2.0** — **[Aug 2025; tech report Nov 2025]** decoder-only rebuild, switched distributional→**quantile loss**, multi-token prediction, trained on **36M series / ~295B observations**; **44% faster, 96% smaller** than Moirai 1, topped **GIFT-Eval by MASE** among non-leaking models at release. *Why it matters:* efficiency + quantile forecasts for planning at scale. ([Salesforce](https://www.salesforce.com/blog/moirai-2-0/), [arXiv 2511.11698](https://arxiv.org/abs/2511.11698))
- `🆕` **TiRex** — **[arXiv May 2025; NeurIPS 2025]** NX-AI (Sepp Hochreiter's lab); **35M-param xLSTM** model with **state tracking**, zero-shot across short+long horizons; punches far above its size on leaderboards (Chronos-2 cites beating it as a bar). *Why it matters:* proof that a tiny recurrent architecture rivals giant transformers — attractive for on-prem/edge planning. ([arXiv 2505.23719](https://arxiv.org/html/2505.23719v1), [NX-AI](https://www.nx-ai.com/en/news/tirex))
- `🆕` **IBM Granite TinyTimeMixers (TTM)** — **[NeurIPS'24; r2/r2.1 through 2025, TSPulse-R1 Aug 2025]** "tiny" pretrained models **from ~1M params**, multivariate via channel-mixing, few-shot competitive with ~5% of training data; **7.7M+ downloads** by Sep 2025; importable into watsonx.ai. *Why it matters:* the credible small/cheap/on-prem TSFM for enterprises that won't call a cloud API per forecast. ([granite-tsfm](https://github.com/ibm-granite/granite-tsfm/wiki), [IBM](https://www.ibm.com/granite/docs/models/time-series))
- `🆕` **TabPFN-TS** (Prior Labs) — **[v1.0 May 2025; #1 GIFT-Eval Jan 27 2025; v1.1 May 2026]** reframes forecasting as **tabular regression** over a pretrained tabular prior-fitted network (TabPFN-v2) + light calendar/season features; zero-shot point + probabilistic, supports **known-future covariates**. *Why it matters:* a genuinely different (non-transformer-TS) route that led GIFT-Eval — signals the field isn't settled. ([tabpfn-time-series](https://github.com/PriorLabs/tabpfn-time-series), [arXiv 2501.02945](https://arxiv.org/html/2501.02945v3))
- **Nixtla TimeGPT** — the original (Oct 2023) TSFM, delivered as a **commercial managed API** (not open weights), with covariate + anomaly support. *Why it matters:* lowest-friction managed entry point for planning teams without ML infra. ([Nixtla](https://www.nixtla.io/))
- **Lag-Llama** — open-source decoder-only **probabilistic** univariate model; still the reference "open probabilistic baseline." ([survey context, arXiv 2401.13912](https://arxiv.org/html/2401.13912))
- **~Aurora (ICLR 2026)** — reported as the first TSFM to fuse text + visual structure at pretraining and to benchmark above Chronos/Moirai/TimesFM. Single secondary source; **treat as unconfirmed** until a primary lands.
- **~Alibaba production retail test** — a reported study found Chronos-2 beat Moirai/TimesFM (and a live retail forecasting system) on monthly demand + daily dynamics. From a search snippet only; **unconfirmed**, but the kind of "does it beat our incumbent" test the niche now runs.

### 1b. Probabilistic forecasting & uncertainty quantification — moving from point to distribution

Planning decisions are inventory/newsvendor decisions, so **quantiles and coverage** matter more than a point MAPE. Two live threads:
- **Quantile-native TSFMs:** the 2025 model generation (TimesFM 2.5 quantile head, Moirai 2.0 quantile loss, Chronos-2, Lag-Llama) all emit distributions/quantiles by default — a real shift from the point-forecast era.
- **Conformal prediction for time series** is the fast-moving academic wrapper for **distribution-free prediction intervals**. 2025 work targets the two things that break it operationally: **non-exchangeability** (drift/streaming) and **change points** — e.g. `🆕` **CPTC** (Conformal Prediction for Time-series with Change points, [arXiv 2509.02844](https://arxiv.org/abs/2509.02844)) and drift-aware/adaptive variants. *Why it matters:* gives a model-agnostic, calibrated interval on top of any forecaster — increasingly the "honest uncertainty" layer for safety-stock sizing. ([survey, arXiv 2511.13608](https://arxiv.org/html/2511.13608v1))

### 1c. Hierarchical forecasting & reconciliation — still the backbone of S&OP

Demand plans must be **coherent** across product/channel/geography hierarchies (SKU sums to category sums to total) and across time (weekly sums to monthly). This is unglamorous but load-bearing.
- **Reconciliation methods** — BottomUp, TopDown, MiddleOut, and optimal **MinT (Minimum Trace)** / trace-minimization, plus **ERM**; probabilistic-coherent variants (Bootstrap, Normality, PERMBU). *Why it matters:* the standard way to make base ML/TSFM forecasts internally consistent for planning. ([Nixtla HierarchicalForecast](https://github.com/Nixtla/hierarchicalforecast))
- 2025 trend: reconciliation is being **layered over TSFM/deep base forecasts** (e.g. DeepAR/TFT/Chronos base + MinT coherence across hierarchy) rather than over pure-statistical bases. [assessment]

### 1d. Intermittent / lumpy demand — the spare-parts & long-tail problem, getting a Bayesian refresh

Slow-moving SKUs (spare parts, long tail) violate normal forecasting assumptions; this remains a distinct, high-value sub-discipline.
- **Classical core (still standard):** **Croston's**, **SBA (Syntetos-Boylan Approximation)**, **TSB (Teunter-Syntetos-Babai)** (updates demand *probability* each period), ADIDA/IMAPA temporal aggregation.
- `🆕` **TSB-HB** (**[Nov 2025]**, [arXiv 2511.12749](https://arxiv.org/abs/2511.12749)) — a **hierarchical-Bayesian** extension of TSB (Beta-Binomial occurrence + Log-Normal size, partial pooling across items) that reported the lowest RMSE/RMSSE on UCI Online Retail and a better sharpness-calibration tradeoff. *Why it matters:* stabilizes sparse/cold-start series — the exact pain point of long-tail inventory. — plus TSFMs are now being tested zero-shot on intermittent series (mixed results).

### 1e. Where generative AI actually enters *this* workflow (vs. Area 1)

Keeping the boundary crisp: the **statistical forecast** is this niche; the **LLM agent that reads it and acts** is Area 1. Inside the analytics workflow, GenAI shows up as: (1) **synthetic time-series generation** for pretraining/augmentation (central to how Chronos-2/Moirai-2 were trained); (2) **forecast narrative/explanation** ("why did the forecast move"); (3) **LLM-assisted feature/hierarchy config**. The NeurIPS'24 caution (§5) is that wrapping an LLM *around* the numeric forecast itself adds cost without accuracy. [assessment]

---

## 2. The tooling / framework landscape — consolidation & versions

### 2a. Open-source forecasting stacks

- **Nixtla "…Forecast" suite** — the de-facto modern open stack: **StatsForecast** (fast classical: AutoARIMA, ETS, Croston/TSB, Theta), **MLForecast** (gradient-boosting on lag features), **NeuralForecast** (30+ deep models: NHITS, NBEATSx, TFT, PatchTST, TimeMixer, DeepAR), **HierarchicalForecast** (reconciliation), plus **TimeGPT** managed API. *Why it matters:* covers the whole niche — classical → ML → deep → reconciliation → foundation — under one API. ([Nixtla GitHub](https://github.com/nixtla))
- **AutoGluon-TimeSeries** — **[v1.5.0 ships Chronos-2 integration]** AWS's AutoML forecaster; bundles statistical + deep + **Chronos-Bolt** (T5-based, ~100B obs, 4 sizes 9M–205M, CPU-capable) and now **Chronos-2**. *Why it matters:* the recommended migration target off Amazon Forecast; one-call ensembling + zero-shot. ([AutoGluon docs](https://auto.gluon.ai/stable/tutorials/timeseries/forecasting-chronos.html), [AWS blog](https://aws.amazon.com/blogs/machine-learning/fast-and-accurate-zero-shot-forecasting-with-chronos-bolt-and-autogluon/))
- **fev** (autogluon/fev) — the lightweight eval library behind fev-bench (see §4). ([GitHub](https://github.com/autogluon/fev))
- **Darts, sktime, GluonTS** — still the broad "many-models-one-API" libraries; GluonTS remains the probabilistic-deep reference (DeepAR/TFT). **IBM granite-tsfm** is the TTM/TSPulse toolkit. *[assessment: these are the established base; the 2025 energy is in Nixtla + AutoGluon + the TSFM model cards on HuggingFace.]*
- **HuggingFace** is now the effective **distribution hub** for TSFMs (Chronos, TimesFM, Moirai, TTM, TiRex, TabPFN-TS all ship model cards there) — a real consolidation vs. bespoke repos.

### 2b. Cloud / lakehouse forecasting

- **Databricks** — **AutoML forecasting** (classic + **serverless/Mosaic AI**) for at-scale SKU forecasting on the lakehouse. ([MS Learn](https://learn.microsoft.com/en-us/azure/databricks/machine-learning/automl/forecasting))
- **Amazon SageMaker Canvas / JumpStart** — the no-code + Chronos path AWS now steers Forecast refugees toward.
- **Snowflake Cortex** and **Microsoft Fabric** — forecasting/ML folded into the warehouse/lakehouse so planning runs next to the data. *[assessment: the pattern is "forecasting as a feature of the data platform," not a standalone service.]*
- **MATLAB** and classical BI (Power BI/Tableau) remain in the enterprise mix for reporting the plan.

### 2c. The data backbone (shared plumbing with the rest of Area 2)

For **demand** forecasting the enabling data is ERP/POS/EDI + external signals (see demand sensing, §3c). For **supply/capacity** planning the plant-floor backbone matters: **Unified Namespace (UNS)** over **OPC UA + MQTT/Sparkplug B**, time-series DBs (InfluxDB, TimescaleDB, TDengine), and **digital twins** feed real capacity/constraint signals into S&OP. *Why it matters:* this is the same plumbing the predictive-maintenance and anomaly-detection siblings depend on — a shared Area-2 investment, not niche-specific. [assessment]

---

## 3. Shipping industrial products & deployments — the pattern works (name the companies)

> **Boundary:** these platforms bundle a **statistical/ML forecast engine** (this niche) *under* an increasingly **agentic** orchestration layer (**Area 1**). I name the forecasting substance and flag the agentic wrapper.

### 3a. Enterprise supply-chain planning suites (the incumbents)

The **2026 Gartner Magic Quadrant for Supply Chain Planning Solutions (Discrete Industries)** — *first-ever* edition, published Mar 23 2026 — evaluated **Anaplan, Aptean (Logility), Baxter Planning, Blue Yonder, Board, Coupa, Dassault, E2open, GAINS, ICRON, John Galt Solutions, Kinaxis, o9 Solutions, Oracle, PTC, SAP, Slimstock, ToolsGroup**. ([ToolsGroup](https://www.toolsgroup.com/news/toolsgroup-recognized-in-the-first-ever-2026-gartner-magic-quadrant-for-supply-chain-planning-solutions-discrete-industries/)) Named substance:

- **Kinaxis** — **Maestro** (rebranded from **RapidResponse**, 2024), the concurrent-planning engine; **`🆕` Maestro Agents** launched 2025 with **Maestro Agent Studio** (limited availability) + an **agent marketplace in 2026**. Forecast/concurrent-planning = this niche; the agents = Area 1. ([Kinaxis](https://www.kinaxis.com/en/news/press-releases/2025/kinaxis-accelerates-agentic-era-supply-chain-orchestration-launch-maestro))
- **Blue Yonder** (Panasonic-owned) — **Cognitive Demand Planning** (cloud-native, microservices ML forecasting); GenAI embedded in the planner UX; **vendor-reported** 2025 roadmap target of a "self-healing supply chain" where agents resolve ~80% of routine exceptions. Named a Leader in the 2026 Gartner MQ. ([Blue Yonder](https://blueyonder.com/solutions/supply-chain-planning/demand-forecasting))
- **o9 Solutions** — **Digital Brain** + **Enterprise Knowledge Graph**; AI agents + self-learning models; **30+ go-lives in 2025**. Named deployment: **Coca-Cola Bottlers Japan** (capacity-/constraint-aware supply planning). *(o9-announced.)* ([o9](https://o9solutions.com/news/o9-q2-2025-results))
- **SAP IBP** — Integrated Business Planning; ML forecasting + **demand sensing**, tied to S/4HANA finance. The strategic successor to APO (§6).
- **RELEX Solutions** — retail/CPG demand + inventory with heavy **demand sensing**; **ToolsGroup** — **probabilistic, decision-centric** planning (service-level + price/promo/markdown optimization); **John Galt Solutions** (Atlas Planning), **Logility**, **GAINS**, **Anaplan (PlanIQ)** round out the field.

### 3b. Proof the *forecast engine* pattern works

- **Public leaderboards** (GIFT-Eval, fev-bench) are the reproducible proof that 2025 TSFMs beat tuned statistical baselines zero-shot on *aggregate* — the credible, non-vendor evidence. (§4)
- **Amazon's own retail/supply chain** is the canonical internal deployment lineage behind Chronos; **Nixtla** reports its platform serving **500,000+ forecasts/month** via TimeGPT (**vendor-reported**). ([Nixtla](https://www.nixtla.io/))

### 3c. Demand sensing — the short-horizon product category

**Demand sensing** (0–13 week, often 1–4 week horizon) blends **POS-by-store/SKU, orders, shipments, weather, promotions, web/search/social signals** to correct the baseline statistical forecast in near-real-time. Offered by RELEX, Kinaxis, o9, SAP IBP, Blue Yonder, Solvoyo, Invent.ai. **Industry-reported** impact: **5–20% forecast-accuracy gain, 5–25% inventory/safety-stock reduction** (treat as vendor/industry-reported, not independently audited). ([Kinaxis](https://www.kinaxis.com/en/what-demand-sensing), [RELEX](https://www.relexsolutions.com/resources/demand-sensing/))

---

## 4. Benchmarks & evaluation practice

- `🆕` **fev-bench** (Amazon, **[Sep 30 2025]**) — **100 forecasting tasks / 7 domains, 46 with covariates**; the first major benchmark to treat **covariates as a first-class axis**; reports **win rate + skill score with bootstrapped confidence intervals** on scaled quantile loss. *Why it matters:* finally scores models on the covariate-driven tasks planning actually faces. ([arXiv 2509.26468](https://arxiv.org/abs/2509.26468))
- **GIFT-Eval** (Salesforce) — **23 datasets / 97 configs, 144k+ series, 177M observations, 7 domains**; the continuously-updated **public leaderboard** everyone benchmarks zero-shot/probabilistic TSFMs against (MASE + CRPS). *Why it matters:* the community scoreboard; TimesFM 2.5 / Moirai 2.0 / Chronos-2 / TabPFN-TS all traded #1 here in 2025–26. ([GIFT-Eval](https://github.com/SalesforceAIResearch/gift-eval))
- **TSFM-Bench / FoundTS** — academic unified benchmarks built specifically to expose **unfair comparisons** across TSFMs (KDD'25 / OpenReview). *Why it matters:* the "trust but verify" counterweight to vendor leaderboard claims. ([arXiv 2410.11802](https://arxiv.org/abs/2410.11802))
- **The M-competitions** remain the reference for *operational* practice: **M5** (2020, Walmart hierarchical retail) — **won by LightGBM/gradient-boosting ensembles**, first M-competition where pure ML beat all statistical baselines and combinations; **M6** (2022–23) — financial forecasting + investment, notable for showing how hard it is to beat the market/naive. *Why it matters:* the honest, adversarial, real-data benchmark that keeps hype grounded. ([Wikipedia: Makridakis Competitions](https://en.wikipedia.org/wiki/Makridakis_Competitions))
- **Metrics practitioners actually report:** **MASE** and **RMSSE** (scale-free, M5's metric), **WQL/scaled quantile loss** and **CRPS** (probabilistic), **MAPE/WAPE/bias** (business-facing), plus **backtesting** via rolling-origin/expanding-window cross-validation. **Forecast Value Added (FVA)** — the incremental accuracy of each process step vs. a **naive/seasonal-naive baseline** — is the standard *governance* metric (see §5). ([FVA — Lokad](https://www.lokad.com/forecast-value-added/))
- **Data-leakage vigilance** is now an explicit evaluation requirement: 2025 survey work flags **train/test overlap, pandemic/crisis memorization, and obscure overlapping datasets** as inflating TSFM zero-shot scores. ([Benchmarking challenges, arXiv 2510.13654](https://arxiv.org/html/2510.13654v1))

---

## 5. Counter-signals — skepticism, failure rates, hype (a profile of only-hype is useless)

- **LLM-based forecasters add nothing (peer-reviewed):** *"Are Language Models Actually Useful for Time Series Forecasting?"* (Tan et al., **NeurIPS 2024**) — ablations on 3 popular LLM-based methods found that **removing the LLM or replacing it with a basic attention layer does not degrade performance, and often improves it**; pretrained LLMs did no better than models trained from scratch and did not help in few-shot. *Direct caution against LLM-for-forecasting hype.* ([NeurIPS 2024](https://proceedings.neurips.cc/paper_files/paper/2024/hash/6ed5bf446f59e2c6646d23058c86424b-Abstract-Conference.html))
- **TSFM leaderboard wins may not transfer to your data:** benchmarking-methodology papers (TSFM-Bench, FoundTS, [arXiv 2510.13654](https://arxiv.org/html/2510.13654v1), and an *"Operational Viability of Foundation Models"* study, [arXiv 2605.24381](https://arxiv.org/pdf/2605.24381)) document leakage, dataset representativeness, and memorization risks — i.e. **aggregate zero-shot SOTA ≠ better on your intermittent SKU.**
- **Gartner has cooled on supply-chain GenAI:** its **2025 Hype Cycle for Supply Chain Strategy** places generative AI in the **trough of disillusionment**; Gartner projects **60% of supply-chain digital-adoption efforts will fail to deliver promised value by 2028** ([Gartner, May 2025](https://www.gartner.com/en/newsroom/press-releases/2025-05-07-gartner-predicts-60-percent-of-supply-chain-digital-adoption-efforts-will-fail-to-deliver-promised-value-by-2028)), and a **May 2026** survey found **AI is *not* driving supply-chain operating-model transformation** ([Gartner, May 2026](https://www.gartner.com/en/newsroom/press-releases/2026-05-06-gartner-survey-shows-ai-is-not-driving-supply-chain-operating-model-transformation)). The same analyst still predicts **70% of large orgs adopt AI-based demand forecasting by 2030** — optimism and disillusionment coexist.
- **~Pilot-to-production is where it dies:** secondary aggregators cite Gartner to the effect that **fewer than ~30% of supply-chain AI pilots reach production** and that **~60% of AI projects will be abandoned by end-2026 for want of a data foundation.** Directionally consistent with the primary Gartner releases above; **the specific <30% figure is from a secondary source — treat as ~unconfirmed.**
- **Many "improved" forecasts fail to beat naive:** the **FVA** literature (incl. peer-reviewed *IJF* work, [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S0169207024000736)) repeatedly finds human/consensus adjustments add limited or **negative** value versus a simple baseline, and that FVA can become "a political mechanism to signal value rather than add it." *The niche's own honesty metric says a lot of forecasting effort is wasted motion.*
- **Data foundation, not the model, is the bottleneck:** the recurring 2026 message (Gartner + vendors alike) is that **garbage/siloed master data** — not the forecasting algorithm — is what kills deployments. [assessment]

---

## 6. Being retired / consolidated

- **Amazon Forecast — closed to new customers since Jul 29 2024.** Existing customers continue; new users are steered to **SageMaker Canvas / SageMaker AutoGluon-TimeSeries / Bedrock (Chronos)**. Part of a broader AWS service-sunset wave (alongside CodeCommit, Cloud9). *A named managed-forecasting service is effectively EOL — a real buy-vs-build signal.* ([Signisys guide](https://www.signisys.com/blog/amazon-forecast-the-complete-guide-to-aws-time-series-forecasting/), [InfoQ](https://www.infoq.com/news/2024/08/aws-discontinue-services/))
- **SAP APO → end of mainstream maintenance in 2027.** SAP's demand/supply planning legacy (DP/SNP) migrates to **SAP IBP**; PP/DS + gATP move into **S/4HANA embedded**. Large installed base is mid-migration now. ([techradar.info](https://techradar.info/what-is-replacing-sap-apo-the-shift-to-sap-ibp-and-s-4hana/))
- **Kinaxis RapidResponse → Maestro** (2024 rebrand) — a consolidation of naming/positioning toward "orchestration"; the older RapidResponse brand is retired.
- **DeepLearning.AI MLOps Specialization discontinued; AWS ML-Specialty (MLS-C01) retired Mar 2026 → MLA-C01; Azure AI-102 retired Jun 2026 → AI-103** — credential churn relevant to the DS/ML core of this niche (from the shared grounding reference; re-verify at source before publishing eligibility).
- **Model-generation churn:** within the TSFMs themselves, **Chronos-1/Chronos-Bolt, Moirai 1.x, TimesFM 1.0/2.0** are already superseded by the 2025 releases — anything citing a specific TSFM version dates within ~6 months. [assessment]

---

## Net trend (for the profile's §7)

Classical statistics + gradient-boosting (M5-style) still run most production planning; **TSFMs crossed into serious piloting in 2025–26 specifically because they gained covariates + multivariate + native quantiles** (Chronos-2, TimesFM 2.5, Moirai 2.0), while a **small-model counter-current** (TTM, TiRex, TabPFN-TS) keeps them cheap/on-prem. **Probabilistic + hierarchical + intermittent** methods are the enduring substance; **conformal prediction** is the rising uncertainty wrapper. The **agentic planning layer is Area 1** — reference it, don't absorb it. Ground every vendor accuracy/ROI number as **vendor-reported**, and pair the hype with the **NeurIPS'24 LLM-ablation** and **Gartner trough-of-disillusionment** counter-signals. Re-research before publish — TSFM versions date fastest.

---

## Sources (URLs actually fetched or surfaced in search this pass)

**TSFMs & methods**
- Amazon Chronos-2 blog — https://www.amazon.science/blog/introducing-chronos-2-from-univariate-to-universal-forecasting
- Chronos-2 paper — https://arxiv.org/abs/2510.15821
- Chronos GitHub/releases — https://github.com/amazon-science/chronos-forecasting
- TimesFM 2.5 (MarkTechPost) — https://www.marktechpost.com/2025/09/16/google-ai-ships-timesfm-2-5-smaller-longer-context-foundation-model-that-now-leads-gift-eval-zero-shot-forecasting/
- TimesFM 2.5 HF card — https://huggingface.co/google/timesfm-2.5-200m-transformers
- Moirai 2.0 (Salesforce) — https://www.salesforce.com/blog/moirai-2-0/
- Moirai 2.0 paper — https://arxiv.org/abs/2511.11698
- TiRex paper — https://arxiv.org/html/2505.23719v1 ; NX-AI — https://www.nx-ai.com/en/news/tirex
- IBM Granite TTM wiki — https://github.com/ibm-granite/granite-tsfm/wiki ; IBM Granite TS — https://www.ibm.com/granite/docs/models/time-series
- TabPFN-TS — https://github.com/PriorLabs/tabpfn-time-series ; paper — https://arxiv.org/html/2501.02945v3
- Nixtla — https://www.nixtla.io/ ; HierarchicalForecast — https://github.com/Nixtla/hierarchicalforecast
- TSFM survey — https://arxiv.org/html/2401.13912
- Conformal TS survey — https://arxiv.org/html/2511.13608v1 ; CPTC — https://arxiv.org/abs/2509.02844
- Intermittent TSB-HB — https://arxiv.org/abs/2511.12749

**Tooling**
- AutoGluon-TimeSeries Chronos docs — https://auto.gluon.ai/stable/tutorials/timeseries/forecasting-chronos.html
- AWS Chronos-Bolt + AutoGluon blog — https://aws.amazon.com/blogs/machine-learning/fast-and-accurate-zero-shot-forecasting-with-chronos-bolt-and-autogluon/
- fev library — https://github.com/autogluon/fev
- Databricks AutoML forecasting — https://learn.microsoft.com/en-us/azure/databricks/machine-learning/automl/forecasting

**Products / deployments / benchmarks**
- Kinaxis Maestro Agents — https://www.kinaxis.com/en/news/press-releases/2025/kinaxis-accelerates-agentic-era-supply-chain-orchestration-launch-maestro
- Blue Yonder demand forecasting — https://blueyonder.com/solutions/supply-chain-planning/demand-forecasting
- o9 Q2 2025 results/go-lives — https://o9solutions.com/news/o9-q2-2025-results
- ToolsGroup / 2026 Gartner MQ SCP Discrete — https://www.toolsgroup.com/news/toolsgroup-recognized-in-the-first-ever-2026-gartner-magic-quadrant-for-supply-chain-planning-solutions-discrete-industries/
- Kinaxis demand sensing — https://www.kinaxis.com/en/what-demand-sensing ; RELEX — https://www.relexsolutions.com/resources/demand-sensing/
- fev-bench — https://arxiv.org/abs/2509.26468
- GIFT-Eval — https://github.com/SalesforceAIResearch/gift-eval
- TSFM-Bench — https://arxiv.org/abs/2410.11802 ; benchmarking challenges — https://arxiv.org/html/2510.13654v1
- Makridakis Competitions (M5/M6) — https://en.wikipedia.org/wiki/Makridakis_Competitions

**Counter-signals**
- Tan et al., "Are Language Models Actually Useful for Time Series Forecasting?" NeurIPS 2024 — https://proceedings.neurips.cc/paper_files/paper/2024/hash/6ed5bf446f59e2c6646d23058c86424b-Abstract-Conference.html
- Operational viability of foundation models — https://arxiv.org/pdf/2605.24381
- Gartner — 60% SC digital adoption fail by 2028 — https://www.gartner.com/en/newsroom/press-releases/2025-05-07-gartner-predicts-60-percent-of-supply-chain-digital-adoption-efforts-will-fail-to-deliver-promised-value-by-2028
- Gartner — AI not driving SC operating-model transformation (May 2026) — https://www.gartner.com/en/newsroom/press-releases/2026-05-06-gartner-survey-shows-ai-is-not-driving-supply-chain-operating-model-transformation
- Gartner — 70% adopt AI forecasting by 2030 — https://www.gartner.com/en/newsroom/press-releases/2025-09-16-gartner-predicts-70-percent-of-large-orgs-will-adopt-ai-based-supply-chain-forecasting-to-predict-future-demand-by-2030
- Forecast Value Added — https://www.lokad.com/forecast-value-added/ ; IJF FVA — https://www.sciencedirect.com/science/article/pii/S0169207024000736

**Retired / consolidated**
- Amazon Forecast status/guide — https://www.signisys.com/blog/amazon-forecast-the-complete-guide-to-aws-time-series-forecasting/ ; AWS discontinuations — https://www.infoq.com/news/2024/08/aws-discontinue-services/
- SAP APO → IBP/S4 — https://techradar.info/what-is-replacing-sap-apo-the-shift-to-sap-ibp-and-s-4hana/

*Unverified/only-secondary claims are marked **~** inline: Aurora (ICLR 2026), the Alibaba Chronos-2 retail production test, and the specific "<30% of pilots reach production" figure. Vendor accuracy/ROI figures (Blue Yonder ~80% exceptions; demand-sensing 5–20%/5–25%; Nixtla 500k forecasts/mo) are labeled vendor/industry-reported.*
