# Per-Niche Profile — Process & Production Optimization

> **Applied-AI area profile (Analytics / Predictive AI, Area 2).** The industrial-data-science layer that **tunes the process/plant operating point** — parameters, throughput, yield, energy — via optimization, NOT the robot's own control loop and NOT LLM-agent engineering. Standard 12-section template, adapted: eligibility is a DS/optimization/stats core + a process-control/energy domain overlay; §9 is simulators/data/compute; §7 is the closed-loop-AI-optimization frontier. Research-backed (mid-2026). `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Niche:** Process & Production Optimization · **Area:** Analytics / Predictive AI (non-embodied) · **Type:** `[S]` specialized
**Draws on:** industrial data science / optimization (OR — Bayesian-opt, RL, surrogate modeling) **+** process-control & energy domain · **Serves platforms (C):** process/plant-agnostic · **Verticals (B):** B1 manufacturing (core — process & discrete), B8 oil & gas / petrochem (APC heartland), B7 mining / minerals, energy & utilities

---

## 1. Definition & Scope
Moving the **process/plant operating point** — setpoints, recipes, schedules, utility loads — to **maximize throughput, yield-at-fixed-quality, and energy efficiency** under process and safety constraints. This is the **analytics / predictive-AI layer that acts on the *process*:** process modeling, **Bayesian optimization** of parameters, **surrogate / soft sensors**, plant-level **APC/MPC**, **RL for process control**, digital-twin-driven optimization, and energy analytics. **In scope:** the optimization/control math that decides *where to run the plant* — BO, hybrid/gray-box models, soft sensors, plant-level MPC/APC and (offline/safe) RL, digital-twin optimization, energy M&V. **Out of scope:** the robot's *own* control loop and RL-control (Axis A `control-classical-optimal-mpc`, `reinforcement-learning-control` — **reference, don't absorb**); equipment-failure prediction (sibling `Predictive Maintenance`); product-defect / yield-conformance modeling (sibling `Quality/Yield`); and the LLM-agent "intelligent ERP/MES" copilot (Area 1 — the optimization/scheduling math *under* it is here).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Optimization / Process Data Scientist | Builds optimization, surrogate & soft-sensor models on process/simulator data under supervision; runs Bayesian-optimization / DOE experiments and RL-on-simulator studies. |
| **L2** | Process / Production Optimization Data Scientist | Owns one optimization use-case end-to-end (data → surrogate/optimizer → deployed operating-point change → monitored KPI); ties it to a throughput / yield / energy benefit. |
| **L3** | Senior Industrial Data Scientist / Optimization or APC Lead | Designs the optimization architecture; makes the method tradeoffs (steady-state vs dynamic, MPC vs RL vs Bayesian-opt, physics vs data-driven surrogate); sets validation & guardrails; mentors. |
| **L4/L5** | Staff / Principal — Process Optimization & Control | Sets the site/enterprise optimization strategy; advances methods (offline/safe RL, physics-informed surrogates, plant-wide optimization); owns the digital-twin / optimization backbone and its governance. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials
**The role = a data-science / optimization (OR) / statistics-ML core + a process-control-and-energy domain overlay `✓`.** The quantitative core (Bayesian optimization, RL, surrogate modeling) is the harder-to-substitute half; the domain credential is the moat — but *which* moat depends on the sub-domain (continuous-process APC vs discrete throughput vs energy). The control here is **plant-level APC/MPC**, not the robot's own control loop — no robot kinematics or embodied-control theory is needed.

**Acceptable undergraduate degrees** — Tier 1 (all co-strongest, unlike the PdM exemplar where these sat in Tier 2): **Chemical Engineering — Process Systems Engineering / process-control track** `✓` (the strongest single degree for process industries — refining, petrochem, pharma, food, semiconductor-process; APC/MPC, soft sensors and optimization-under-uncertainty are ChemE-PSE heritage); **Industrial & Systems Engineering / Operations Research — optimization track** `✓` (strongest for discrete manufacturing — LP/MILP, stochastic optimization, simulation, line-balancing); **Data Science / Statistics / Applied Maths / CS-ML** `✓` (the quantitative core — BO, RL, surrogate/soft-sensor modeling). Tier 2 (usually the overlay): **EE / Control / Systems Engineering** — control theory, MPC, DCS/PLC fluency (the *control* half of APC); **Mechanical / Manufacturing Engineering** — process + throughput for discrete; **Energy Systems / Environmental Science / Physics** — for the energy-analytics sub-area.

**Highly-valued programs `✓`** — the on-target named master's: **Imperial College London — MSc Machine Learning and Process Systems Engineering** (hosted by the **Sargent Centre for PSE**; named core: *Advanced Optimisation for Chemical Engineering*, *Machine Learning for Chemical Engineering*, *Advanced Process Operations*, *Dynamic Behaviour in Process Systems*) — the single most on-target degree; **Imperial — MSc Control and Optimisation** (EEE; the *control* half); **CMU — ChemE / Center for Advanced Process Decision-making (CAPD)** (the Grossmann–Biegler process-systems-optimization flagship; course **06-665 Process Systems Modeling**); **Georgia Tech — ISyE MS Operations Research** (*Deterministic Optimization* core; the largest single-program optimization faculty in the US; distance option); **Northwestern — IEMS** (named Optimization specialization); **UW-Madison — ChemE / Zavala Scalable Systems Lab** (data-science + control + optimization for energy & process systems). DS backbone (pairs with any of the above): **Berkeley, CMU, Stanford, Michigan, Georgia Tech OMS Analytics** (affordable, industry-heavy). Also strong `~` (verify at source): **UT-Austin (McKetta — Edgar/Baldea)**, **MIT (Braatz)**, **TU Delft (DCSC)**.

**Acceptable postgraduate degrees** — MS/PhD **ChemE (PSE / process control)** for the process-industry deep end; MS/PhD **OR / ISE (optimization)** for the discrete-throughput deep end; **MS Analytics / Data Science** (e.g. GT OMSA) for the ML-heavy BO / surrogate / energy-analytics side; **MSc Control and Optimisation** (Imperial-style) for the control half; **MS Statistics** (DOE/RSM, regression, Bayesian methods). Manufacturing-data-scientist postings list a quantitative/engineering/ChemE bachelor's "with **Master's or Ph.D. preferred**" `✓`.

**Highly-valued certifications `✓`** — pair a **core analytics/ML/OR cert** with a **sub-domain domain cert** (the moat here is a *cluster*, not one credential):
- *Core (analytics / ML / OR):* DeepLearning.AI **ML** + **Deep Learning** specializations; a cloud ML cert (**AWS MLA-C01** — MLS-C01 retired Mar 2026, **Google PMLE**, **Azure**); **INFORMS Certified Analytics Professional (CAP)** — the OR/analytics profession cert, the most niche-relevant of the core set, restructured into **CAP-Essentials / CAP-Pro / CAP-Expert** as of mid-2026 `⏱`.
- *Domain moat — a sub-domain-keyed cluster (the key niche finding):* **ASQ Six Sigma Black Belt (CSSBB)** — the single most-cited domain cert in process-optimization postings, for process-improvement / throughput (3 yr experience + a signed project); **ISA Certified Automation Professional (CAP)** + the vendor **AspenTech Aspen DMC3 User cert (ACU-DMC301)** — the process-industry APC/MPC moat; **AEE Certified Energy Manager (CEM)** + **Certified Measurement & Verification Professional (CMVP)** — for the energy sub-area (CMVP proves the saving via IPMVP); **ASCM APICS CPIM** — for throughput / production planning (no prerequisites; a good first credential).

**Experience & portfolio** — L1: a **Bayesian-optimization / DOE or RL-on-simulator project** on a public process benchmark (**PC-Gym**, **Tennessee Eastman**); a strong portfolio can substitute for a graduate degree here. L2: 2–4 yr, a **deployed optimizer tied to a real KPI** (throughput +X%, energy −Y% ideally **M&V-verified**, or yield-at-fixed-quality +Z%), a **soft sensor** in the control room, or a first **APC/MPC controller** commissioned. L3: 5–8 yr, **led a plant/line optimization programme**; frequently a domain cert (Six Sigma Black Belt / CEM / ISA CAP). L4/L5: 8+ yr and site/enterprise strategy — and for process-industry APC the **ChemE degree + ~10 yr (≥4 in APC) is a hard gate** (Marathon Petroleum, verbatim), where the moat is degree + DCS/APC experience + a vendor cert, *not* a public portfolio.

## 4. Skill Profile (JD-style)

**Required / must-have**
- **Python** (pandas, NumPy, **SciPy**, scikit-learn) + **SQL**
- **Optimization** — LP/MILP, nonlinear & stochastic optimization, **Bayesian optimization**
- **ML & statistics** — regression, **surrogate modeling**, applied statistics/probability
- **Design of Experiments (DOE)** / response-surface methodology (RSM)
- **Process / systems modeling** — steady-state & dynamic; **soft / inferential sensors**
- **Control fundamentals** — PID → **MPC/APC** concepts at the plant/unit level
- **Communication** — turn an optimizer's recommendation into an operating-point change ops will accept

**Preferred / differentiating**
- **RL for process control** — offline / safe RL on process environments
- **Hybrid / gray-box modeling** and **physics-informed NNs (PINNs)** as surrogates / soft sensors
- **Digital-twin / process-simulation** optimization
- **Energy analytics + M&V** (IPMVP); cloud + **MLOps**
- A **domain cert** — Six Sigma Black Belt / ISA CAP + Aspen DMC3 / CEM / CPIM

**Tools & tech stack** — *Languages:* Python (+ R, MATLAB) · *Optimization/BO:* **Meta Ax 1.0 + BoTorch**, **Pyomo / IDAES**, **CasADi + do-mpc**, acados; SciPy, HEBO/SMAC3 · *Process sim / twin:* **Aspen Plus / HYSYS**, **Siemens gPROMS**, **AVEVA Process Simulation**, **Dymola/Modelica** · *APC platforms:* **AspenTech DMC3/DMCplus (Emerson)**, **Honeywell Forge APC**, **Rockwell Pavilion8** · *RL:* Gymnasium, **Stable-Baselines3 / RLlib**, **PC-Gym** envs · *Time-series / DBs:* Nixtla, Darts; **AVEVA PI** historian, InfluxDB/TimescaleDB · *Data backbone:* **Unified Namespace** (OPC UA + MQTT/Sparkplug B), HiveMQ/HighByte/Ignition · *Benchmarks:* **Tennessee Eastman (TEP)**, **PC-Gym**

**Bar by tier** — L1: builds optimizers/surrogates on simulator/benchmark data · L2: ships an optimizer tied to a throughput/yield/energy KPI · L3: architects the optimization stack, deep in ≥1 area (BO, MPC/APC, or RL) · L4/L5: sets optimization strategy, owns the digital-twin backbone & governance.

## 5. Core Subject List `✓`
- **Foundational maths & CS:** probability & statistics · linear algebra · **optimization (convex, LP/MILP, nonlinear, stochastic)** · Python + data stack · classical ML · deep learning.
- **Core (optimization & modeling):** **Bayesian optimization** (GP surrogates + acquisition functions) · **Design of Experiments / response-surface methodology** · regression & **surrogate modeling** · steady-state & dynamic **process modeling** · **soft / inferential sensors**.
- **Niche-specific (process control & optimization):** **APC/MPC at plant level** (multivariable predictive control) · **RL for process control** (offline / safe RL) · **hybrid / gray-box models** (first-principles + ML residual) · **plant-wide & real-time optimization** · digital-twin-driven optimization.
- **Frontier / advanced `⏱`:** **closed-loop AI optimization** (deep-RL over a learned/hybrid process model) · **physics-informed NNs** as surrogates · **time-series foundation models** for the forecasting / soft-sensing *inputs* (not for control) · self-driving labs / autonomous experimentation · generative-AI natural-language layer over the optimizer.
- **Data eng & domain:** SQL & time-series/historian DBs, the **Unified Namespace** (OPC UA + MQTT/Sparkplug B), MLOps · process-engineering domain (unit operations, mass/energy balances), **Six Sigma / DMAIC**, **energy management & M&V (IPMVP)**, production planning / scheduling.

## 6. Training Programme Design & Duration `✓`
Analytics + optimization + domain programme; ~1,300 hours; phases 2–3 (Bayesian optimization / DOE + process modeling & control) are the niche core.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Python/data stack, statistics, classical ML, **optimization (LP/MILP, convex)** | 2.0 mo | 6 mo | 300 | Data, ML & optimization fluency |
| 2. **Optimization & DOE** | Bayesian optimization, DOE/RSM, surrogate modeling | 2.0 mo | 6 mo | 300 | Tune parameters data-efficiently |
| 3. **Process modeling & control** | Steady-state/dynamic models, soft sensors, MPC/APC, RL for control | 2.0 mo | 5–6 mo | 280 | The niche core |
| 4. Data eng & MLOps | Historians, UNS (OPC UA/MQTT), digital twin, deploy/monitor | 1.5 mo | 4 mo | 200 | A running, monitored optimizer |
| 5. Capstone + portfolio | BO on a process simulator + an MPC/RL controller on **PC-Gym/TEP** + an energy **M&V** study + a KPI dashboard | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,300 | Junior process-optimization data scientist |

*Same analytics-core-plus-domain-overlay shape as the exemplar, hence the same ~1,300 h / 9–11-month full-time envelope (`_grounding-reference.md` §D). For an existing data scientist or OR analyst, phases 2–3 (BO/optimization + process control) compress to ~4–6 months; a process/control engineer instead compresses phase 1 and the DS half.*

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** `🆕` = 2025–26 release.
- **Closed-loop AI optimization / RL for process control (the headline shift):** deep-RL over a learned or hybrid process model, *writing setpoints* to an economic objective inside constraints — 🆕 **Imubit Optimizing Brain** (ARC's new **Closed Loop AI Optimization** category) · **Yokogawa FKDPP** (RL; **35-day autonomous chemical-plant control at JSR**). The practical, safe form is **offline / safe RL** (online exploration on a live plant is unsafe): 🆕 **input-convex action correction** (CSTR grade-change), 🆕 AIChE offline-RL grade-change. Anchor survey: 🆕 **MDPI "RL for Chemical Process Control"** (*Processes* 2025). *Boundary: this is plant-level RL; the robot-embodied RL-control frontier is Axis A `reinforcement-learning-control` — do not merge.*
- **Hybrid / gray-box models (the credible modeling center):** first-principles equations + ML on the residual — the **data-efficiency, extrapolation and interpretability** a process engineer needs to trust a model that moves a real valve · **physics-informed NNs (PINNs)** as soft sensors / surrogates · **ML-accelerated MPC & surrogate optimization** (🆕 review *arXiv 2412.18529*).
- **Bayesian optimization & self-driving labs:** GP-surrogate + acquisition for parameter / recipe tuning, consolidating onto 🆕 **Meta Ax 1.0 + BoTorch** (Nov 2025) · 🆕 **active-constraint-learning BO** for feasible manufacturing windows (*IISE Transactions* 2025) · **self-driving labs / autonomous experimentation** (Acceleration Consortium; **Atlas** optimization brain).
- **Time-series foundation models — inputs, not control:** 🆕 **Amazon Chronos-2** (Oct 2025 — native multivariate + covariate), 🆕 **Google TimesFM 2.5**, **Salesforce Moirai-2**, **Nixtla TimeGPT** (🆕 $16M Series A, Feb 2026) — they forecast feeds/loads/energy prices and feed soft sensors (the *inputs* to optimization), but they **forecast, they don't control**; leaderboard **GIFT-Eval**.
- **Digital-twin-driven optimization:** 🆕 **Siemens + NVIDIA "Industrial AI Operating System"** (Omniverse twins that test changes virtually, then push validated setpoints to the floor), 🆕 **Digital Twin Composer** (CES 2026); process-industry **"golden-batch"** twins.
- **Generative AI as the interface (Area 2 meets Area 1):** natural-language layers *over* the optimizer — 🆕 Aspen **Virtual Advisor (AVA)**, 🆕 **Braincube Companion AI**, **Siemens Operations Copilot** — the GenAI is the assistant; the optimizer underneath is still MPC/RL/BO (the agentic copilot proper is Area 1).
- **Platform & data-backbone shifts:** 🆕 **Emerson completed its full acquisition of AspenTech** (Mar 2025, ~$7.2B — folds DMC3/DMCplus/GDOT into Emerson; the single biggest structural event for this niche) · APC incumbents **Honeywell Forge APC** and **Rockwell Pavilion8** add an explicit *augment-not-replace* AI overlay · the **Unified Namespace** (OPC UA + MQTT/Sparkplug B) and modern historians as the enabling plumbing · 🆕 **C3 AI restructuring** (Feb 2026) signals pressure on the standalone "industrial-AI-suite" model vs embedded-in-the-control-system incumbents.

*Net trend: classical **APC/MPC still runs production** process optimization; the 2025–26 growth edge is **closed-loop offline/safe RL** over learned/hybrid models and **Bayesian optimization** for parameter tuning, with **hybrid gray-box models** as the trusted substrate and **digital twins** as the integration surface; TSFMs serve the forecasting/soft-sensing inputs, not closed-loop control. Counter-signal: **APC/MPC benefit erosion** — models decay as the plant drifts (equipment, feed, instrument drift), a decades-documented failure mode — so the honest AI value is often *sustaining* benefit, not a one-time gain, layered on the broad ~80% enterprise-AI-project failure rate (RAND, late 2025). Treat Imubit / Rockwell / DeepMind ROI as **vendor-reported**, and score a controller economically against an **MPC oracle (PC-Gym)**, not on prediction error.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | **Bayesian optimization on a process simulator** with **Ax + BoTorch** — reach a target in the fewest trials | The BO loop; **regret / trials-to-target** vs a DoE baseline |
| Foundational | **DOE / response-surface** study on a benchmark process | Experimental design; a fitted response surface + optimum |
| Applied | **Soft sensor / surrogate** (gray-box or **PINN**) for an un-measured variable | Virtual sensing; prediction vs held-out lab values |
| Applied | **MPC/RL controller on PC-Gym** (CSTR/crystallizer) — or **offline RL on Tennessee Eastman** — scored vs the **NMPC oracle** | Closed-loop control; economic objective + constraint-violation rate |
| Advanced | **Energy-optimization + M&V** study (IPMVP-style) on a utility / plant dataset | Prove a saving: baseline vs optimized, **measured & verified** |
| Capstone | End-to-end **process-optimization system**: data → surrogate/soft-sensor → optimizer (BO or MPC/RL) → **deployed setpoint change + monitored KPI dashboard** | The full stack; a demoable, **benefit-quantified** optimizer |

## 9. Required Setup / Simulators / Data / Compute `✓` (not robots)
- **Compute:** a workstation/GPU (or cloud) for surrogate/RL training; the **Python optimization + ML stack** (Ax/BoTorch, Pyomo/IDAES, CasADi/do-mpc); optionally **MATLAB**.
- **Process simulators & digital-twin engines (the "plant" you optimize):** open **PC-Gym** RL environments and a **Tennessee Eastman** simulator; commercial **Aspen Plus / HYSYS**, **Siemens gPROMS**, **AVEVA Process Simulation**, **Dymola/Modelica** for the first-principles / hybrid half.
- **Datasets & benchmarks:** **Tennessee Eastman Process (TEP)** (+ extended/expanded variants), **PC-Gym** (with its NMPC oracle), **GIFT-Eval** for the TSFM forecasting inputs, public **energy / utility** datasets for the energy sub-area.
- **Time-series & historian DBs:** a **historian** feed (**AVEVA PI System**) or a modern TSDB (InfluxDB / TimescaleDB / TDengine); the **Unified Namespace** (OPC UA + MQTT/Sparkplug B) as the data backbone.
- **Process sensors / signals (for a hands-on rig or plant feed):** temperature / pressure / flow / level + analyzer streams off a DCS/PLC — or a small bench process (a tank-level / heat-exchanger / temperature rig) — to practice soft-sensing and setpoint control end-to-end.
- **MLOps / deployment:** Docker, model monitoring & retraining (critical here because of **benefit erosion**), a feature store; an optional IIoT/APC sandbox (Emerson/AspenTech, Honeywell Forge, Rockwell) for the end-to-end story.

## 10. Partnerships & Ecosystem
- **Professional & standards bodies:** **INFORMS** (CAP; OR/analytics) · **ASQ** (Six Sigma CSSBB) · **ISA** (Certified Automation Professional; APC) · **AEE** (CEM / CMVP; energy) · **ASCM / APICS** (CPIM) · **AIChE** (process-systems engineering).
- **Academic centers:** CMU **CAPD** (process-systems optimization; Grossmann/Biegler) · Imperial **Sargent Centre for PSE** · Georgia Tech **ISyE** (optimization) · Northwestern **IEMS** · UW-Madison (**Zavala**) · UT-Austin McKetta / MIT (Braatz) / TU Delft **DCSC** `~`.
- **APC / optimization vendors:** **AspenTech (Emerson)** — DMC3/DMCplus/GDOT · **Honeywell** Forge APC · **Rockwell** Pavilion8 · **Yokogawa** (FKDPP) · **Imubit** (closed-loop RL) · **AVEVA / Braincube** · **Seeq** · **Quartic.ai**.
- **Optimization / simulation software:** **Meta Ax + BoTorch** · **Pyomo / IDAES** · **CasADi + do-mpc** · **Aspen Plus / HYSYS**, **Siemens gPROMS**, **Dymola/Modelica** · **Siemens + NVIDIA** (digital-twin Omniverse).
- **Data infrastructure:** **AVEVA PI** historian · **HiveMQ / HighByte / Ignition** (Unified Namespace) · **Nixtla** · InfluxDB / TimescaleDB.
- **Employers:** refiners / petrochem & chemical plants (APC), discrete manufacturers (throughput / Six Sigma), pharma (process optimization & control), semiconductor fabs, energy & utilities, industrial-AI firms and optimization consultancies.

## 11. Assessment & Validation
- **Optimization / control metrics** as portable evidence: **regret / trials-to-target** vs a DoE baseline (BO); **economic objective, constraint-violation rate, and closed-loop stability vs an MPC oracle** (**PC-Gym**) for a controller; an **M&V-verified KPI delta** (throughput +%, energy −%, yield-at-fixed-quality +%) for a deployment — *never score a controller on prediction error alone.*
- **Portfolio:** a deployed optimizer with a measured (ideally **M&V-verified**) benefit + a system-design interview (data → surrogate/soft-sensor → optimizer → deployed setpoint → monitored KPI) + **process-domain literacy** (can they respect a real constraint / safety envelope?).
- **Niche-specific check (benefit erosion):** can they show the plan to *sustain* the benefit — monitoring, drift detection, model refresh — not just the day-one gain? This is the load-bearing skeptic's question for this niche.

## 12. Adjacent & Related Niches
Sits in **Analytics / Predictive AI (Area 2)** alongside `Predictive Maintenance & Reliability`, `Quality/Yield & Defect Analytics`, `Forecasting & Planning Analytics`, and `Anomaly & Fault Detection`; pairs with **A10 data infrastructure / edge** (shared UNS/historian plumbing), and it runs the *same optimal-control and RL math* as Axis A `control-classical-optimal-mpc` and `reinforcement-learning-control` — but on the **plant**, not the robot (reference those, don't absorb them). The sharpest boundary to restate is against **`Quality/Yield & Defect Analytics`**: **DOE/RSM and Six Sigma are shared tooling**, but Quality models the **product** (defect root-cause, yield conformance, SPC/Gauge R&R) while this niche moves the **process operating point** for throughput/energy — *product conformance* vs *operating point*. Against **Predictive Maintenance**, that sibling *predicts equipment failure*; here we *move the setpoint to optimize output/energy*. It increasingly meets **Area 1** where a generative-AI natural-language layer sits over the optimizer and where the agentic "intelligent ERP/MES" copilot wraps the scheduling/optimization math that lives here. Its home vertical is **B1 manufacturing** (process & discrete), with the deep end in **B8 oil & gas / petrochem** APC. (Reference only — seniority ladder is in §2.)

---
*Applied-AI area profile. Template: `phase-1/_TEMPLATE.md` (v3, adapted). Area plan: `applied-ai-taxonomy.md`. §7 stamped mid-2026 — re-research before publish. Named products/models are fast-moving; verify at source.*
