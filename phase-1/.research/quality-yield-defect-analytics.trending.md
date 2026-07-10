# Trending Research & Practice — Quality, Yield & Defect Analytics

> **Niche:** Quality, Yield & Defect Analytics (Area 2 — Analytics / Predictive AI) · **Stamp:** as of **mid-2026 (2026-07-10)**.
> Scope reminder: the **analytics underneath quality** — SPC, DOE/Six Sigma, Gauge R&R, yield modeling, defect classification & inspection analytics, root-cause. Vision+LLM inspection *copilots* are Area 1 (referenced, not absorbed). "Quality of the **product**," distinct from anomaly/fault-detection ("health of the **process/asset**").
> `🆕` = 2025–26 release/result · `~` = single-source or snippet-level, treat as to-verify · vendor numbers explicitly labeled **vendor-reported**.
> This is raw research to populate the profile's §7; named products/models are fast-moving — verify at source before publishing.

---

## Theme 1 — Methods & models frontier (what changed in 2025–26)

**The headline shift: visual anomaly detection went "unified multi-class," and the classic benchmark saturated.** One model that covers *all* product types (not one model per SKU) is now competitive with per-class specialists — the practical unlock for high-mix lines.
- `🆕` **Dinomaly** (CVPR 2025) — "less is more" multi-class unsupervised AD built on DINOv2 features; *first* multi-class model to match single-class SOTA. `🆕` **Dinomaly2** (arXiv 2510.17611, Oct 2025) — full-spectrum unified framework; ~99.9% image-AUROC on MVTec-AD `~`.
- `🆕` **INP-Former / INP-Former++** (arXiv 2503.02424 CVPR 2025 / 2506.03660) — "intrinsic normal prototypes" extracted per-image + residual learning; SOTA across MVTec-AD, VisA, Real-IAD `~`.
- **MambaAD** (arXiv 2404.06564, NeurIPS 2024) — state-space (Mamba) backbone for multi-class UAD; the 2024 baseline the 2025 models beat. `🆕` **ResAD++** (arXiv 2509.23741) — class-agnostic AD via residual feature learning.
- *Established production baselines still in wide use:* **PatchCore**, **EfficientAD**, **PaDiM**, **Reverse Distillation / RD++**, **SimpleNet**, **FastFlow/MSFlow**, **DRAEM** — all shipped in Anomalib.

**Zero-/few-shot & vision-language AD** — inspect new parts with **few or zero** "good" images, the answer to cold-start.
- **WinCLIP** (CVPR 2023) — first to bend CLIP to zero-/few-shot AD via windowed prompt ensembles. **AnomalyCLIP** — object-agnostic learned prompts for generic normal/abnormal. **APRIL-GAN** (VAND 2023 winner).
- `🆕` **"A Survey on Foundation-Model-Based Industrial Defect Detection"** (arXiv 2502.19106, Feb 2025) — the map of this subfield.

**Logical / structural anomaly detection** — beyond surface scratches to *constraint violations* (missing part, wrong count, object in the wrong place). A distinct 2024–25 frontier.
- Benchmark: **MVTec LOCO AD** (3,644 imgs, 5 categories, structural **and** logical anomalies).
- `🆕` **LogicAD** (arXiv 2501.01767, Jan 2025) — explainable logical AD via VLM text-feature extraction. **LogiCode** (arXiv 2406.04687) — LLM writes code to check logical rules.

**Multimodal-LLM defect reasoning & agentic RCA** — where Area 2 meets Area 1; still immature (see counter-signals).
- `🆕` **MMAD** (arXiv 2410.09453, ICLR 2025) — first full-spectrum benchmark for MLLMs in industrial AD (39,672 Q over 8,366 imgs, 7 subtasks). **AnomalyGPT** is one of the evaluated systems.
- Semiconductor agentic RCA: `🆕` **SemiFA** (arXiv 2604.13236 `~`) — autonomous failure-analysis report generation; `🆕` **WaferSAGE** (arXiv 2604.27629 `~`) — LLM wafer-defect analysis via synthetic data + rubric-guided RL.

**Generative / diffusion synthetic defect data** — manufacture rare-defect images to fix class imbalance; the most practically adopted generative use here.
- `🆕` **SeaS** (ICCV 2025), `🆕` **Dual-Interrelated Diffusion Model** (CVPR 2025), `🆕` **MAGIC** (mask-guided anomaly inpainting, arXiv 2507.02314), **stableIDG** (steel), **G2LGAN** (imbalanced wafer maps). Reported recall lifts on steel defects from ~0.66→0.91 `~` **(paper-reported)**.

**Uncertainty quantification & conformal prediction** — the fastest-rising *rigor* theme; give quality decisions a statistical guarantee instead of a bare point estimate.
- `🆕` **Conformal Segmentation in Industrial Surface Defect Detection with Statistical Guarantees** (arXiv 2504.17721 / MDPI *Mathematics* 13/15/2430, 2025). `🆕` **Robust & Reliable AI for Predictive Quality in Semiconductor Materials Mfg with MLOps + UQ** (arXiv 2605.07752 `~`). Motivation: point predictions cause out-of-control escapes; conformal intervals bound the risk.

**Causal AI / root-cause analysis** — move from correlation (which SPC flags) to true cause.
- **Databricks** "Manufacturing Root Cause Analysis with Causal AI" (industry pattern). **Ensemble Bayesian Networks** for product-defect RCA (ScienceDirect 2024). **Causal Bayesian Network + Knowledge Graph** hybrid (arXiv 2402.00043) to inject expert knowledge and scale. `🆕` **PRIM** (meta-learned Bayesian RCA, arXiv 2605.08786 `~`), `🆕` **LMT** (causal discovery from textual alarm records, arXiv 2606.09892 `~`).

**Time-series foundation models** — relevant to this niche for **virtual metrology, yield-trend and process-parameter forecasting** (not the vision path). Same TSFM wave as predictive-maintenance.
- `🆕` **Amazon Chronos-2** (arXiv 2510.15821, Oct 2025) — univariate→universal; **native multivariate + covariate** support (the industrial unlock), 5 sizes 9M–710M params. `🆕` **Google TimesFM 2.5** (univariate backbone + covariate regressor at inference). `🆕` **Salesforce Moirai-2** (strong but still covariate-limited `~`). `🆕` **UniCA** (unified covariate adaptation, arXiv 2506.22039). `🆕` **Time-LLM** applied to wafer-level etch spatial profiling (arXiv 2603.23576 `~`).

**Physics-informed ML (PIML)** — inject process physics (heat transfer, melt-pool dynamics) so models generalize from little data; strongest in additive/materials quality.
- `🆕` **"Physics-Informed Machine Learning in Design and Manufacturing: Status and Challenges"** (ASME *J. Comput. Inf. Sci. Eng.* 25(12), 2025) — the status survey.

**ML-augmented SPC** — the classical backbone getting a predictive layer, not replaced.
- Pattern: keep control charts central, add ML to flag drift **earlier** (reported 3–12 time-units ahead of the chart `~`) and to monitor high-dimensional Industry-4.0 processes. See "AI-Enabled SPC for Semiconductor Manufacturing" (IJSRM 2025) and Qiu's "ML Approaches for SPC" review.
- **Semiconductor yield modeling:** `🆕` two-step ML — screen FDC outliers, then predict yield on "good" data only (*Int. J. Production Research*, doi 10.1080/00207543.2025.2601804, 2025). FDC + virtual metrology + APC remain the core loop.

---

## Theme 2 — Tooling & framework landscape (versions, consolidation)

**Open-source AD:**
- `🆕` **Anomalib 2.2.0** (Intel Open Edge Platform, **Oct 2025**) — 23 algorithms behind one API, PyTorch-Lightning core, **OpenVINO** export for edge. The de-facto reference library. **PyOD** for tabular outlier detection. Community index: **M-3LAB/awesome-industrial-anomaly-detection** (GitHub).

**Deep-learning vision inspection platforms (COTS):**
- **Cognex** — VisionPro Deep Learning; **ViDi** tools (blue = locate, red = segment/anomaly, green = classify); `🆕` **ViDi EL** (edge-learning, "most accessible" DL inspection tier).
- **MVTec** — **HALCON** (HALCON DL) + the **MVTec Deep Learning Tool**; also the source of the field's benchmark datasets (MVTec AD / AD 2 / LOCO).

**Classical quality / SPC / Six Sigma stats (incumbents adding ML):**
- `🆕` **Minitab 22** — integrated **Predictive Analytics** module (CART decision trees, Random Forest, gradient boosting/TreeNet) + an **AI data-assistant dashboard** + web app. The signal that Six-Sigma tooling is absorbing ML in-place.
- **JMP** (SAS) — visual discovery, What-If, R/Python integration. **Statgraphics**, **QI Macros**. `🆕` **DMAIC Suite** automates Gage R&R / ANOVA MSA with AI-assisted interpretation.

**Semiconductor yield-analytics suites (enterprise):**
- **PDF Solutions Exensio** (yield-management analytics) + **Cimetrix** factory connectivity; **KLA Klarity** analytics; **Applied Materials** (FAB300 / SmartFactory). These are the mature, decade-deployed platforms for FDC/yield/defect analytics.

**No-code / data-centric platforms (democratizing the model-building):**
- **Landing AI — LandingLens**, **Averroes.ai**, **Instrumental**, **Elementary**, **Sight Machine** — domain experts label/train/deploy without a data-science team ("data-centric AI" workflow).

**Edge & deployment:**
- **OpenVINO** (Intel), **NVIDIA Metropolis** (Jetson + TAO Toolkit + DeepStream) turning IP cameras into inspection nodes; `🆕` NVIDIA **FOX / Factory Operations** and **VSS** blueprints wire inspection into agentic factory ops.

**Data backbone (the enabling plumbing):**
- **Unified Namespace (UNS)** — hub-and-spoke **MQTT** broker as single source of truth; **Sparkplug B** (ratified **ISO/IEC** international standard, 2023) for payload structure; **OPC UA** Companion Specs for semantics, and OPC UA carries per-tag **quality metadata** (value + timestamp + Good/Bad status) — directly useful to quality analytics. Same UNS/OPC-UA/MQTT backbone as predictive-maintenance.

---

## Theme 3 — Shipping products & deployments (named companies)

- **Landing AI (LandingLens)** — Andrew Ng's data-centric inspection platform; **~1B image inferences/yr, 99.99% uptime (vendor-reported)**; `🆕` **ABB made a strategic investment** to fold LandingAI vision into its robot-vision stack (2025–26).
- **Averroes.ai** — no-code PCB/electronics inspection overlaying existing AOI + virtual metrology; **reported ~$18M/yr savings at a medical-device maker, 99%+ accuracy (vendor-reported)**.
- **Instrumental** — electronics-manufacturing AI inspection; **"$50B telecom brand broke even in one month" (vendor-reported)**.
- **Sight Machine** — `🆕` **NVIDIA venture investment**; launched AI agents letting non-technical operators **query plant data in natural language** (the Area-2→Area-1 bridge).
- **PDF Solutions** — `🆕` landmark semiconductor contract + raised 2025 outlook (Sep 2025); **11 of the companies in Yole's 2025 Power-Electronics report are 10-yr+ Exensio users**.
- **NVIDIA + Foxconn** — `🆕` Metropolis/agentic blueprints on Foxconn lines (GB300 board assembly) **improving first-pass yield ~3% (vendor-reported)**; Advantech, Pegatron, Wistron among first deployers.
- **Cognex + Keyence** — together ~**half** the global machine-vision market; the installed base most quality analytics actually runs beside.

---

## Theme 4 — Benchmarks & evaluation practice

**Vision AD benchmarks (the ladder, easiest→hardest):**
- **MVTec AD** — the classic; now **saturated** (SOTA ~99.9% image-AUROC), no longer discriminative.
- **VisA** — larger, also approaching saturation (<1 pt separates leaders on AU-PRO).
- `🆕` **MVTec AD 2** (arXiv 2503.21622, Mar 2025; IJCV 2026) — **the new hard benchmark**: 8,000+ high-res imgs, 8 categories, transparent/overlapping parts, back-light/dark-field, tiny defects. **SOTA sits below ~60% average AU-PRO** — deliberately unsaturated.
- **MVTec LOCO AD** — logical + structural anomalies (see Theme 1).
- **Real-IAD** (arXiv 2403.12580, CVPR 2024) — real-world **multi-view**, 150K imgs / 30 objects, an order of magnitude larger; `🆕` **Real-IAD Variety** (arXiv 2511.00540, Nov 2025) and `🆕` **Real-IAD MVN** (multi-view normal vectors, arXiv 2605.07149 `~`) extend it.

**Domain-specific benchmarks:**
- **WM-811K** — 811,457 wafer maps (172,950 labeled), 9 defect patterns, **extreme class imbalance** (None 85% vs Near-Full 0.086%). 2025 methods report ~98%+ accuracy `~` but imbalance/rare-class is the live problem.
- **SECOM**, **DAGM 2007**, **Severstal steel**, **KolektorSDD** — classical tabular/surface-defect sets still used for baselines.

**MLLM / reasoning benchmarks (new):** `🆕` **MMAD** (ICLR 2025); `🆕` **FORGE** (fine-grained multimodal manufacturing eval, arXiv 2604.07413 `~`); `🆕` **M3-AD** (arXiv 2603.00055 `~`).

**Evaluation-practice shifts:**
- Metrics: image/pixel **AUROC**, **AUPRO** (per-region overlap), **AP / F1-max**; `🆕` **AUPIMO** (arXiv 2401.01984) — per-image, high-speed, low-false-positive-tolerance metric, a direct answer to "AUROC hides the false-alarm cost that kills factory adoption."
- Training regime is **one-class / unsupervised on "good" parts only** (defects are rare/undefined), increasingly **few-normal-shot**; and **conformal** guarantees layered on top for risk-bounded acceptance.
- Task is split three ways for scoring — **detect** (is there a defect) / **classify** (which type) / **segment/localize** (where) — profiles should validate against the relevant one.

---

## Theme 5 — Counter-signals (skepticism, failure rates, hype)

**Macro AI-project failure rates (context, not niche-specific):**
- ~**80.3%** of enterprise AI projects fail to deliver promised value — **RAND** (2025) `~`.
- **85%** of AI projects fail due to poor/irrelevant data — **Gartner** `~`.
- **88%** of firms use AI in ≥1 function but only **~39%** see EBIT impact — **McKinsey 2025** `~`.
- **~95%** of enterprise **GenAI** pilots showed no measurable P&L impact (~5% reach rapid value) — **MIT State of AI in Business 2025 / NANDA** `~`.

**Niche-specific reality checks (the useful ones):**
- **The hard benchmark isn't solved:** SOTA is **<60% AU-PRO on MVTec AD 2** — real transparent/tiny-defect/illumination cases still break current models.
- **MLLMs aren't inspection-grade yet:** best model (GPT-4o) scores **~74.9% on MMAD**, "far short of industrial requirements," and is markedly worse on *anomaly* questions than object questions — fine-grained defect reasoning is unsolved.
- **The false-call / overkill problem is the real adoption tax:** rule-based **AOI** over-rejects on lighting/cosmetic/process drift; deep learning is reported to cut false positives **70–90%** `~` **(research/vendor-reported)** — but this is precisely why "high accuracy" claims need the false-alarm number attached (hence AUPIMO).
- **Cold-start & rare defects:** defect data is scarce and imbalanced; the whole diffusion-synthetic-data subfield exists because of this, and it remains an open problem, not a solved one.
- **Data quality is the actual bottleneck:** *Quality Magazine* "Why AI in Manufacturing Fails Without Quality Data"; **PDF Solutions** "AI in Production: What It Really Takes to Improve Semiconductor Cost & Quality" — both credible, non-hype, from inside the industry.
- **TSFM caveat (carried from PdM):** foundation-model fine-tuning is unstable at low data fractions; classical ML + purpose-built nets still run most production quality models.
- **Data-backbone caveat:** **Sparkplug B adoption remains limited** beyond certain vendors despite the UNS hype; OPC UA + plain MQTT are the safer bet.
- **Causal/Bayesian scaling:** pure data-driven Causal Bayesian Networks don't scale to full fabs (combinatorial cause-effect space, spurious edges) — the reason expert-knowledge/KG hybrids exist.

**Vendor ROI claims to treat as vendor-reported (do not present as independent):** ~35% average defect reduction (Ontario manufacturers); >90% AI vs 70–80% manual inspection accuracy; $18M/yr (Averroes); one-month breakeven (Instrumental); +3% first-pass yield (Foxconn/NVIDIA); 1B inferences @ 99.99% uptime (Landing AI).

---

## Theme 6 — Retired / consolidated

**Retired (confirmed):**
- 🔻 **Amazon Lookout for Vision** — the AWS managed defect-inspection service — **discontinued 31 Oct 2025** (new customers cut off 10 Oct 2024). AWS steers users to **SageMaker** and **Bedrock** to build custom inspection instead. Clean example of a hyperscaler exiting turnkey visual inspection.
- 🔻 (adjacent, cert spine) **AWS ML Specialty (MLS-C01) retired Mar 2026** → MLA-C01; **DeepLearning.AI MLOps specialization discontinued** (per `_grounding-reference.md`).

**NOT retired (checked, to correct a likely assumption):**
- **Google Cloud Visual Inspection AI** — I found **no deprecation notice**; the Vision-API deprecations page lists only **Celebrity Recognition** (shutdown Sep 16 2025) and **OCR On-Prem**, *not* Visual Inspection AI. Treat as **still listed/active** — do not claim it was sunset without a fresh check.

**Consolidation / M&A in the quality-vision space:**
- **Zebra Technologies** acquired **Photoneo** (3D machine vision) — **Dec 2024**.
- **Cognex** acquired **Schott-Moritex** (~$275M, optics/lenses) — Aug 2023.
- **Teledyne Imaging** acquired **Adimec** (cameras) — Feb 2024.
- Strategic investments folding startups into incumbents: `🆕` **ABB → Landing AI**; `🆕` **NVIDIA → Sight Machine**.
- Market structure: **Cognex + Keyence ≈ 50%** of a ~**$15.8B (2025) → ~$23.6B (2030)** machine-vision market (~8.3% CAGR) — a consolidated top with a long specialist tail.

**Absorption pattern (not a shutdown, but a consolidation of methods):**
- Rule-based standalone **AOI** is being displaced/augmented by deep-learning inspection.
- **SPC / Six-Sigma desktop tools** (Minitab, JMP) are absorbing ML in-place rather than ceding to separate ML platforms — so "learn ML *and* Minitab," not "ML instead of."

---

## Net read (for §7 framing)

Classical statistics (SPC, DOE, Gauge R&R, capability) + purpose-built CNN/anomaly-detection models run production quality analytics **today**. The 2025–26 growth edges are: (1) **unified multi-class + few-/zero-shot** visual AD (Dinomaly, INP-Former, VLM prompts) that cut the cold-start cost; (2) **uncertainty quantification / conformal prediction** giving quality decisions statistical guarantees; (3) **causal AI** for genuine root-cause; (4) **diffusion synthetic data** for rare defects; and (5) **generative/agentic AI** entering the *workflow* (NL querying, anomaly explanation, failure-analysis reports) — the Area-2↔Area-1 seam. The enabling investment is the **data backbone** (UNS / OPC UA / MQTT). The honest counter-signal: hard real-world benchmarks (**MVTec AD 2 <60%**, **MMAD ~75%**) and false-alarm cost show the frontier is *not* solved, and most headline ROI is vendor-reported.

---

## Sources (fetched / retrieved this pass)

Benchmarks & datasets
- MVTec AD 2 — https://arxiv.org/abs/2503.21622 · https://link.springer.com/article/10.1007/s11263-026-02743-0
- Real-IAD — https://arxiv.org/abs/2403.12580 · https://realiad4ad.github.io/Real-IAD/ · Real-IAD Variety https://arxiv.org/html/2511.00540v2 · Real-IAD MVN https://arxiv.org/abs/2605.07149
- MVTec LOCO AD — https://www.mvtec.com/research-teaching/datasets/mvtec-loco-ad
- WM-811K wafer maps (2025 DL) — https://jivp-eurasipjournals.springeropen.com/articles/10.1186/s13640-025-00666-3
- AUPIMO metric — https://arxiv.org/pdf/2401.01984
- MMAD (MLLM benchmark) — https://arxiv.org/abs/2410.09453
- awesome-industrial-anomaly-detection index — https://github.com/m-3lab/awesome-industrial-anomaly-detection

Methods / models
- Dinomaly2 — https://arxiv.org/html/2510.17611 · Dinomaly (CVPR25) — https://github.com/guojiajeremy/dinomaly
- INP-Former++ — https://arxiv.org/pdf/2506.03660 · INP-Former — https://arxiv.org/html/2503.02424v1
- MambaAD — https://arxiv.org/pdf/2404.06564 · ResAD++ — https://arxiv.org/pdf/2509.23741
- WinCLIP — https://arxiv.org/abs/2303.14814 · Foundation-model defect-detection survey — https://arxiv.org/pdf/2502.19106
- LogicAD — https://arxiv.org/pdf/2501.01767 · LogiCode — https://arxiv.org/pdf/2406.04687
- Diffusion synthetic defects (steel) — https://www.mdpi.com/1424-8220/25/10/3038 · MAGIC — https://arxiv.org/pdf/2507.02314 · few-shot defect-gen list — https://github.com/bcmi/Awesome-Few-Shot-Defect-Image-Generation
- Conformal segmentation (defects) — https://arxiv.org/html/2504.17721v1 · https://www.mdpi.com/2227-7390/13/15/2430 · Semiconductor predictive-quality UQ+MLOps — https://arxiv.org/pdf/2605.07752
- Causal RCA — https://www.databricks.com/blog/manufacturing-root-cause-analysis-causal-ai · CBN+KG — https://arxiv.org/abs/2402.00043 · Ensemble BN — https://www.sciencedirect.com/science/article/pii/S0278612524001213
- Chronos-2 — https://arxiv.org/pdf/2510.15821 · TSFM 2026 toolkit — https://machinelearningmastery.com/the-2026-time-series-toolkit-5-foundation-models-for-autonomous-forecasting/ · UniCA — https://arxiv.org/pdf/2506.22039
- Semiconductor 2-step yield ML — https://www.tandfonline.com/doi/full/10.1080/00207543.2025.2601804 · AI-enabled SPC — https://ijsrm.net/index.php/ijsrm/article/view/6439 · ML approaches to SPC (Qiu) — https://users.phhp.ufl.edu/pqiu/research/Qiu24StatsRef.pdf
- Physics-informed ML in mfg (ASME) — https://asmedigitalcollection.asme.org/computingengineering/article/25/12/120804/1225302/
- WaferSAGE — https://arxiv.org/pdf/2604.27629 · SemiFA — https://arxiv.org/pdf/2604.13236

Tooling
- Anomalib 2.2.0 / OpenVINO — https://anomalib.readthedocs.io/ · https://www.intel.com/content/www/us/en/developer/articles/training/defect-detection-with-anomalib.html · Datature 2026 guide — https://datature.io/blog/visual-anomaly-detection-with-anomalib-a-hands-on-guide-2026
- Cognex ViDi — https://fishersmith.co.uk/components/vision-software-solutions/cognex-vidi · ViDi EL — https://amdmachines.com/blog/cognex-releases-vidi-el-deep-learning-inspection-system/ · HALCON vs VisionPro — https://www.jmakautomation.com/halcon-vs-cognex-visionpro
- Minitab vs JMP (2026) — https://www.selecthub.com/statistical-analysis-software/minitab-vs-jmp/ · Minitab ML/Six-Sigma — https://aigproexcellence.com/blog/will-ai-replace-minitab-six-sigma/
- Gage R&R / MSA automation — https://www.qualitymag.com/articles/99178-making-sense-of-gage-r-and-r-analysis · https://www.dmaicsuite.com/resources/gage-rr
- PDF Solutions Exensio / KLA / Applied Materials — https://www.stocksmantra.com/top-10-semiconductor-yield-management-software-features-pros-cons-comparison/ · https://www.pdf.com/ai-in-production-what-it-really-takes-to-improve-semiconductor-cost-and-quality/
- Unified Namespace / MQTT / Sparkplug — https://teeptrak.com/en/unified-namespace-uns-mqtt-sparkplug-iiot-2027/ · https://www.hivemq.com/blog/semantic-data-structuring-mqtt-sparkplug-unified-namespace-uns-smart-manufacturing/
- NVIDIA Metropolis / FOX — https://oxmaint.com/blog/post/nvidia-metropolis-industrial-inspection-vision-ai-edge · https://blogs.nvidia.com/blog/factory-operations-fox-blueprint-ai-brain/

Products / deployments
- Landing AI + ABB — https://analyticsindiamag.com/ai-news-updates/landing-ai-unveils-ai-visual-inspection-platform-to-help-manufacturers-improve-quality-reduce-costs/ · https://landing.ai/industries/manufacturing
- Averroes.ai — https://averroes.ai/ · https://averroes.ai/industry/ai-electronics · Instrumental — https://instrumental.com/build-better-handbook/machine-vision-vs-manual-inspection-vs-instrumental · Elementary — https://www.elementaryml.com/blog/top-6-machine-vision-systems-for-manufacturing-in-2025
- GenAI in manufacturing analytics (2026) — https://ifactoryapp.com/analytics-reporting/generative-ai-manufacturing-analytics-2026

Counter-signals / retirements / M&A
- Amazon Lookout for Vision discontinuation (Oct 31 2025) — https://aws.amazon.com/blogs/machine-learning/exploring-alternatives-and-seamlessly-migrating-data-from-amazon-lookout-for-vision/ · https://datamigrationai.beehiiv.com/p/amazon-lookout-for-vision-discontinuation-exploring-options-and-moving-data-effortlessly
- Google Vision API deprecations (VIA NOT listed) — https://cloud.google.com/vision/docs/deprecations
- AOI false-call / overkill — https://www.overview.ai/blog/aoi-vs-ai-vision-electronics-pcb/ · https://semiengineering.com/using-deep-learning-adc-for-defect-classification-for-automatic-defect-inspection/
- AI failure rates — https://mybusinessfuture.com/en/80-ai-failure-rate-2026-how-rand-and-gartner-expose-the-ai/ · https://medium.com/ai-analytics-diaries/mckinsey-2025-ai-report-88-of-companies-are-failing-at-ai-053f1ac746d3 · Why AI in mfg fails without quality data — https://www.qualitymag.com/articles/99678-why-ai-in-manufacturing-fails-without-quality-data
- Machine-vision M&A / market — https://www.qualitymag.com/articles/97937-large-machine-vision-companies-acquire-partner-to-grow · https://www.marketsandmarkets.com/Market-Reports/north-america-machine-vision-market-26856537.html

*Stamped mid-2026. `~` items and 2026 arXiv preprints are snippet-level — re-verify at source before publishing §7.*
