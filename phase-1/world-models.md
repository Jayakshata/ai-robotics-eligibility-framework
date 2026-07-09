# Per-Niche Profile — World Models & Predictive Models

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; world-model-specific and trending-research signals are research-backed. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** World Models & Predictive Models · **Axis A cluster:** A7 (Foundation Models & Generative AI — the Frontier) · **Type:** `[F][★]` (world-foundation-model & synthetic-data sub-areas `[S][★]`)
**Related capabilities:** A6 RL / self-supervised learning · A3 learned planning · A4 MPC / learned control · A7 VLAs · A8 simulation & synthetic data · **Platforms (C):** C1 fixed arm · C2 mobile manipulator · C5 humanoid · **Verticals (B):** B10 autonomous vehicles · B1 manufacturing · B9 humanoid/service · B2 logistics

---

## 1. Definition & Scope
Building a **learned model of how an environment evolves under actions** — a model that predicts future states (pixels, latent features, or physical state) conditioned on what the robot does — so the system can *imagine* outcomes before acting. World models serve quadruple duty: **policy learning** (train in imagination), **planning** (MPC/search over learned dynamics), **simulation & evaluation** (a neural simulator), and **synthetic-data generation** at scale — collapsing the old sim↔data↔policy boundary. **In scope:** learned dynamics / model-based RL, latent world models (RSSM/Dreamer, JEPA), world *foundation* models (NVIDIA Cosmos, Genie), action-conditioned video prediction, imagination-based planning (visual foresight / visual MPC), neural-simulator synthetic-data generation, and the emerging world-action ("WM-as-policy") class. **Out of scope (adjacent):** generalist VLA policies as such (A7 sibling — the two are converging), hand-coded physics engines (A8 — a world model *learns* dynamics rather than scripting them), classical state estimation (A2), the perception stack (A1). **Where it sits:** the **most ML-theory-heavy, least embodiment-heavy** niche in the taxonomy — a "pure intelligence / generative-simulation" profile — yet foundational (`[F][★]`): it is an enabling substrate under learning, planning, sim, and eval.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior World-Model / ML Research Engineer | Implements & trains dynamics / generative models under supervision; runs rollout experiments; reproduces baselines (DreamerV3, DINO-WM, TD-MPC2). |
| **L2** | World-Model Engineer | Owns a world-model subsystem end-to-end (data → train latent/video WM → plan or generate data → eval); debugs long-horizon drift & compounding error; ships a WM into a policy or data pipeline. |
| **L3** | Senior World-Model Research Engineer | Designs the world-model architecture; makes the generative-vs-latent, pixel-vs-feature, model-vs-policy tradeoffs; sets the evaluation protocol; mentors. |
| **L4/L5** | Staff / Principal World-Model Research Engineer | Sets the world-model research agenda; advances world-foundation-model / imagination-planning SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (esp. with AI/ML), Artificial Intelligence, EE/ECE. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **World-model-specific `✓`: Applied Mathematics / Statistics and Physics rise toward Tier 1** — probabilistic & latent-variable modeling, variational inference, information theory, stochastic processes, dynamical systems and (via diffusion's non-equilibrium-thermodynamics / energy-based-model roots) statistical mechanics are the literal substance of the job. **Computer Graphics / Simulation** is a genuine niche-specific Tier-2-with-evidence entry (world foundation models are generative video/3D-scene engines). **Mechanical / EE-hardware / embedded / actuation *fall*** — this is among the least embodiment-heavy niches and they matter mostly at the sim-to-real boundary.

**Highly-valued undergraduate access `✓`** — no dedicated UG "world models" track exists; it is assembled from **intro-AI + deep learning + RL + deep generative models + a robot-learning capstone**. Strongest access: **UC Berkeley** (CS 188 AI, CS 182 Deep Learning; CS 285 / CS 236-equivalents UG-accessible), **CMU** (**10-403 Intro Deep RL**, 10-301/601 ML; BS AI / BS Robotics), **Stanford** (CS 234 / CS 224R / CS 236 UG-accessible), **MIT 6-4** (6.7900 ML → 6.8210 Underactuated). ETH/TUM reach it through a heavy ML/estimation core rather than a named track.

**Acceptable postgraduate degrees** — MS/PhD in CS/AI, Machine Learning, EE, or Robotics (with a model-based-RL, deep-generative, or self-supervised-representation focus); Applied Math / Statistics MS/PhD is strongly acceptable here.

**Highly-valued postgraduate programs — ranked by model-based-RL + generative depth `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **UC Berkeley (BAIR) · Stanford · MIT · CMU** | Berkeley = deepest bench: **CS 285 Deep RL** (Levine — L15–16 *Model-Based RL*, VI/control-as-inference lectures, **HW4 = train a neural dynamics model & plan with it**) + **CS 294-158 Deep Unsupervised Learning** (Abbeel — VAE/AR/flow/**diffusion**); origin of **Visual Foresight**. Stanford **CS 224R** (Finn — model-based/offline RL) + **CS 236 Deep Generative Models** (Ermon) + **CS 234** (Brunskill). MIT **6.7920 RL: Foundations & Methods** + **6.8210 Underactuated Robotics** (Tedrake — learned dynamics, planning-through-a-model). CMU **10-703 Deep RL & Control** + **16-831 Statistical Techniques in Robotics** (model-based RL, sim-to-real). |
| Strong (world-model / JEPA / generative homes) | **NYU (CILVR) · U-Toronto + Vector · Mila (Montréal)** | NYU = LeCun's group, origin of the **JEPA / world-model** thesis and **V-JEPA 2** (DS-GA 1008 covers energy-based & self-supervised prediction). Toronto/Vector: **Fidler** — world models for AV + deep-generative research. Mila: **Bengio**; RL + generative + a dedicated **World Modeling Workshop (2026)**. |
| Present | **Georgia Tech · UT Austin · U-Michigan** | GT **CS 7642 RL** + **CS 8803 Deep RL**; UT Austin (**Peter Stone**, model-based RL); Michigan deep-RL electives feeding robot learning. |

**Highly-valued certifications `✓`** — **Berkeley CS 285 (Deep RL)** — the single most niche-relevant free course (teaches model-based RL & latent-dynamics models explicitly) · **Stanford CS 236 / paid XCS236 with certificate** (VAEs→AR→**diffusion** = the generative spine of Cosmos/Genie) · **Berkeley CS 294-158** (generative + self-supervised backbone) · **NVIDIA Cosmos learning path** (Cosmos Cookbook + guides for post-training world foundation models — forward/inverse dynamics, Predict/Transfer/Reason — the most niche-specific vendor resource) · **NVIDIA DLI Synthetic Data Generation** (S-OV-30 Isaac Sim; X-OV-01 Omniverse Replicator) · **Hugging Face Deep RL** (free, real cert; Dreamer-style imagination units + LeRobot rollout) · **DeepLearning.AI "How Diffusion Models Work."** *(Grounding-ref caveats hold: no dedicated NVIDIA robotics exam — NCP-OpenUSD is the closest formal credential.)*

**Experience & portfolio** — L1: internship/academic; a reproduced Dreamer/DINO-WM in sim. L2: 2–4 yr; a world model that either *plans* (visual MPC) or *generates data*, with rollout/eval numbers; a long-horizon-drift debugging story. L3: 5–8 yr; ≥1 WM taken into a real policy/data pipeline. L4/L5: 8+ yr and/or first-author papers (NeurIPS/ICML/ICLR/CoRL/RSS).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and deep-learning-framework fluency (**PyTorch**, **JAX/Flax**)
- **Deep generative modeling**: VAEs, autoregressive models, **diffusion / score-based** models, GANs, discrete **tokenizers / VQ**
- **Model-based RL**: learned dynamics, Dyna, **PETS, MBPO**; planning with a model (**CEM / MPPI / MPC**)
- **Latent-dynamics & sequence models**: **RSSM**, PlaNet, **Dreamer**, transformers, state-space models
- **Probabilistic modeling & variational inference**: latent-variable models, **ELBO**, KL, information theory
- **Self-supervised / representation learning** (**JEPA**, frozen **DINOv2** features)
- **Simulation & rollout data pipelines** (Isaac Sim/Lab, MuJoCo, Genesis; trajectory collection)
- **Large-scale training** (multi-GPU, mixed precision, distributed)
- **Spatiotemporal / video modeling** (action-conditioned future-frame prediction)
- **Evaluating generative/predictive models** (rollout accuracy, long-horizon consistency, FVD)

**Preferred / differentiating**
- **World foundation models**: post-training **NVIDIA Cosmos** (Predict / Transfer / Reason); Genie-style interactive WMs
- **JEPA latent planning** (V-JEPA 2-AC); **reconstruction-free** WMs (DINO-WM, TD-MPC2)
- **World-action models / WM-as-policy** (Cosmos Policy, GR00T world-action models, WorldVLA)
- **Imagination-based RL for VLAs** (WMPO, DiWA, DreamGen)
- **Synthetic-trajectory generation** (Isaac GR00T-Dreams, Cosmos-Transfer)
- **Differentiable simulation** (Genesis); driving world models (GAIA-2, Vista)
- Publications at **NeurIPS / ICML / ICLR / CoRL / RSS**

**Tools & tech stack** — *Languages:* Python (+ some C++/CUDA) · *DL:* PyTorch, JAX/Flax · *WM repos:* DreamerV3, TD-MPC2, DINO-WM, V-JEPA 2, Genie Envisioner (GE-Base/Act/Sim), **NVIDIA Cosmos** (cosmos-predict2.5) · *Generative:* diffusers, VQ/tokenizer libs · *Sim / data:* Isaac Sim/Lab, MuJoCo Playground, **Genesis**, Omniverse Replicator; LeRobot for rollout · *Compute:* A100/H100/GB200 clusters (WFM/video training is compute-heavy) · *Benchmarks:* WorldModelBench, EWMBench, WorldArena.

**Bar by tier** — L1: solid on the required list; trains latent WMs & MBRL in sim · L2: ships a WM that plans or generates data, fluent across the generative + RL stack · L3: architects WM systems, deep in ≥1 differentiating area · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
World-model slice of the canonical robotics/AI subject set, tilted hard toward probabilistic + generative ML, annotated with representative courses.
- **Foundational maths & CS:** **probability, statistics & stochastic processes** — the single most load-bearing block *(CS 236, MIT 6.7920)* · **information theory & variational inference** — KL, **ELBO**, the exact machinery of latent-dynamics WMs *(CS 285 VI lectures, CS 236)* · linear algebra · multivariable calculus · **optimization** (SGD, trajectory opt) · Python + **PyTorch/JAX** · data structures & algorithms.
- **Core robotics:** **RL & optimal control** — MDPs, dynamic programming, policy/value iteration *(CS 234, MIT 6.7920)* · **robot dynamics & kinematics** — forward dynamics is *what a world model learns to predict* *(MIT 6.8210)* · **MPC / trajectory optimization** — the planner that consumes the learned model *(MIT 6.8210)* · **state estimation & latent state** — Kalman/particle filters → the **RSSM** lineage · ROS 2 · Isaac Sim / simulation (rollout & data collection).
- **Niche-specific:** **model-based RL** — PETS, MBPO, Dyna; planning with a model *(CS 285 L15–16; CMU 10-703 / 16-831)* · **latent dynamics & world models** — RSSM, PlaNet, **Dreamer / DreamerV3** (imagination rollouts in latent space) · **deep generative models** — VAEs, GANs, autoregressive, flows, energy-based, **diffusion/score-based**, discrete **tokenizers** *(CS 236, CS 294-158)* · **action-conditioned video prediction** *(world-foundation-model literature)* · **imagination-based planning** — visual foresight / visual MPC *(Finn/Levine)* · **self-supervised predictive representations** — **JEPA** *(V-JEPA 2)* · **synthetic-data generation & sim-to-real** — domain randomization, Omniverse Replicator, Cosmos-Transfer *(NVIDIA DLI)*.
- **Frontier/advanced `⏱ mid-2026`:** **world foundation models** — NVIDIA **Cosmos** (Predict/Transfer/Reason; Cosmos 3 action post-training), DeepMind **Genie 2/3**, Wayve **GAIA-2**, 1X world model · **joint-embedding predictive architectures** — **V-JEPA 2 / 2-AC** (zero-shot robot control from web video), value-guided & hierarchical latent planning · **large world models / spatial intelligence** — World Labs **"Marble"** (Fei-Fei Li) · **video-generation-as-neural-simulator** (UniSim lineage, OmniDreams) · **physics-informed / intuitive-physics prediction**; differentiable simulation; long-horizon world-state consistency.

## 6. Training Programme Design & Duration `✓`
World-model-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), **re-weighted for this niche**: because it is the most ML-theory-heavy and least embodiment-heavy niche, Phase 2 (core robotics) is trimmed and Phase 3 (deep learning + generative depth) is expanded; Phase 4 + capstone are world-model-specific.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Prob/stats + **variational-inference-heavy** maths, Python/PyTorch, classical ML | 2.0 mo | 6 mo | 300 | Probabilistic-ML fluency |
| 2. Core robotics + RL | MDPs/RL, dynamics, **MPC/trajectory opt**, state estimation, ROS 2/Isaac (lighter embodiment) | 1.5 mo | 5 mo | 280 | Command a sim + RL/control base |
| 3. Deep learning + **generative depth** | Deep learning, **deep generative models** (diffusion), sequence & video models | 2.5 mo | 6–7 mo | 340 | Generative-modeling depth |
| 4. **World-model specialization** | Model-based RL, latent WMs (Dreamer/JEPA), action-conditioned video, **WFM post-training (Cosmos)**, synthetic-data gen, imagination planning | 2.0 mo | 5–6 mo | 280 | The niche core |
| 5. Capstone + portfolio | A WM that **plans or generates data** on a real/sim robot + interview prep | 1.5–2.0 mo | 4–5 mo | 200 | Job-ready evidence |
| **Total** | | **≈ 9.5–11 months** (full-time) | **≈ 27–29 months** (part-time) | ~1,400 | Junior world-model engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**. *(Budget extra GPU-time and training-run wall-clock here — WFM/video-model iteration is slower and more compute-bound than most robotics niches.)*

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The named world/dynamics models everyone now forks, benchmarks against, and post-trains. `🆕` = 2026 release.

- **World foundation models (the Cosmos anchor — the "SAM/DINO" of physical AI):** NVIDIA **Cosmos** (Jan 2025 — named the category) · **Cosmos-Predict / -Transfer / -Reason** (Mar 2025; Predict = future-state video, Transfer = sim→real photoreal, Reason = physics-aware VLM filter; adopted by 1X, Figure, Agility, Skild) · **Cosmos-Predict 2.5 / -Transfer 2.5** (Oct 2025) · 🆕 **Cosmos 3** (Jun 2026 — open "omnimodel" generating text/image/video/audio *and actions*; collapses training/eval months→days; the current frontier) · 🆕 **Cosmos Policy** (fine-tunes the Cosmos video model directly into a visuomotor policy — the world model *becomes* the controller).
- **Interactive / playable world models (neural game engines):** DeepMind **Genie 2** (Dec 2024 — image→minutes-long playable 3D world) · **Genie 3** (Aug 2025 — real-time 24 fps/720p text-promptable worlds w/ emergent physics; the flagship) · 🆕 **Project Genie** (Jan 2026 — first broad public real-time WM) · 🆕 **Matrix-Game 3.0** (streaming interactive WM w/ long-horizon memory; open-weights answer to Genie 3) · **Mirage 2 / Oasis / GameNGen** (competing pixel-predicting neural engines).
- **JEPA & latent predictive world models (planning without pixels):** **V-JEPA 2 + V-JEPA 2-AC** (Meta, Jun 2025 — self-supervised video WM on 1M+ hrs; AC variant fine-tunes on ~62 h Droid video for **zero-shot** pick-place via MPC at ~16 s/step vs ~4 min for diffusion WMs) · **DINO-WM** (NYU, ICML 2025 — WM over *frozen DINOv2 features*, no reconstruction; the reconstruction-free template) · **TD-MPC2** (decoder-free latent WM + MPC; the standard MBRL baseline).
- **Imagination-based planning (the Dreamer / model-based-RL lineage):** **DreamerV3** (Nature 2025 — RSSM WM; policies from imagined rollouts, one config across 150+ tasks; first to mine diamond in Minecraft from scratch — the MBRL anchor) · **DiWA / World4RL / World-Gymnast** (2025 — adapt diffusion policies *inside* a frozen WM) · 🆕 **DreamPlan** (RL-tunes VL planners entirely within an action-conditioned video WM) · **DreamerNav / DreamerV3-XP** (navigation + exploration variants).
- **Robot world-action models (the WM-as-policy convergence):** **Genie Envisioner** (AgiBot, Aug 2025 — **GE-Base** video diffusion + **GE-Act** flow-matching decoder + **GE-Sim** neural simulator + **EWMBench**; the most complete open WM-for-manipulation stack) · **WorldVLA** (unifies a VLA + action WM in one transformer) · **WMPO** (Nov 2025 — world-model policy optimization for VLAs) · **Ctrl-World** (Oct 2025 — controllable closed-loop manipulation rollouts) · 🆕 **NVIDIA GR00T N2 / DreamZero** (humanoid FM on a world-action architecture; ~2× VLA task success, #1 on RoboArena) · 🆕 **OSCAR / LaWAM / MotuBrain** (the emerging omni-embodiment "WAM" class).
- **Synthetic-data generation & neural simulators:** **DreamGen / Isaac GR00T-Dreams** (NVIDIA GEAR, 2025 — "neural trajectories" via Cosmos-Predict2 + inverse dynamics; 780K trajectories in 11 h ≈ 6,500 human-demo hrs, ~10× multiplier) · **Cosmos-Transfer** (sim→real domain-gap closing) · **Genesis** (Dec 2024 — generative *universal* physics engine; differentiable; 10–80× faster) · 🆕 **NVIDIA Isaac Sim / Isaac Lab** (the GPU sim backbone WMs increasingly co-train with).
- **Driving world models (adjacent, large):** Wayve **GAIA-2** (Mar 2025 — controllable multi-view generative driving WM) · **Vista / DriveDreamer** (open action-controllable baselines) · 🆕 **NVIDIA OmniDreams** (real-time generative WM for closed-loop AV sim) · 🆕 **Metis** (generalizable world-action model for driving + urban nav).
- **Benchmarks & surveys (the scoreboard):** **WorldModelBench** (CVPR'25 workshop) · 🆕 **WorldArena / 2.0** (unified perception *and* functional-utility benchmark for embodied WMs) · **EWMBench** (visual fidelity + physical consistency + instruction-action alignment) · 🆕 **"World Model for Robot Learning: A Comprehensive Survey"** (arXiv 2605.00080 — the reference taxonomy).

*Net trend: world models are consolidating into a few **action-conditioned** foundation stacks — video-generative (Cosmos, Genie Envisioner), latent/JEPA (V-JEPA 2, DINO-WM), and interactive-neural-engine (Genie 3) — that increasingly serve triple duty as **synthetic-data engines, in-imagination RL/MPC planners, and the policy itself** (Cosmos Policy, GR00T world-action models), collapsing the old sim↔data↔policy boundary. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Train a **VAE + a diffusion model** on images (CS 236-style) | Generative-modeling fundamentals; reasonable samples + FID |
| Foundational | Reproduce a **latent dynamics model** (RSSM/PlaNet) on a control task | Latent prediction + rollout; multi-step future-frame accuracy |
| Applied | **DreamerV3** on a DMControl/Atari/Crafter task | Policy from imagined rollouts; match published return on ≥1 task |
| Applied | **Reconstruction-free WM + MPC** (DINO-WM / TD-MPC2-style) | Zero-shot goal-reaching via MPC on Push-T/maze; beat a Dreamer baseline |
| Advanced | **Action-conditioned video-prediction WM** (fine-tune a video-diffusion model) | Conditioned rollouts; FVD + physical-consistency on **EWMBench** |
| Advanced | **Synthetic-trajectory generation** (Cosmos-Transfer / GR00T-Dreams) → train a policy | Data multiplication; measurable real-task gain from synthetic data |
| Capstone | **World-model-as-planner/policy** on a real/sim robot: post-train a WFM (**Cosmos**) or JEPA (**V-JEPA 2-AC**) into a visual-MPC controller | End-to-end frontier stack; executes a manipulation task from a goal image; report step latency + success |

## 9. Required Lab Setup / Hardware / Resources
- **Compute (the load-bearing resource — this is the compute-heaviest niche):** **A100 / H100 / GB200** multi-GPU nodes for WFM & video-model training `~`; **RTX 4090 / A6000** workstations for latent-WM & MBRL dev; cloud credits for burst training.
- **World-model frameworks / models:** **DreamerV3** · **TD-MPC2** · **DINO-WM** · **V-JEPA 2** · **Genie Envisioner** (GE-Base/Act/Sim) · **NVIDIA Cosmos** (Predict/Transfer/Reason 2.5; Cosmos 3) · Hugging Face **diffusers**.
- **Simulators / data engines:** **Isaac Sim / Isaac Lab** · **MuJoCo / MuJoCo Playground** · **Genesis** (differentiable) · **Omniverse Replicator** · **LeRobot** (rollout & data).
- **Robots (light — sim/data-first niche):** an optional **Franka / UR / xArm** or **ALOHA** rig for real rollout & data collection; the niche is largely simulation- and data-driven.
- **Datasets:** **Open X-Embodiment**, **DROID**, **AgiBot World** (robot video for WM pretraining) · **Ego4D** / large web-video corpora (V-JEPA-style pretraining) `~` · **nuScenes / Waymo Open** for driving WMs `~`.
- **Benchmarks:** **WorldModelBench** · **EWMBench** · **WorldArena / 2.0** · DMControl / Atari / **Crafter** / Minecraft (Dreamer) · **Push-T** / maze (DINO-WM) · SIMPLER-style downstream policy eval.

## 10. Partnerships & Ecosystem
- **Sim / compute / WFM vendors:** **NVIDIA** (Cosmos, Isaac, **GEAR** lab, DLI, Inception) — the anchor · **Google DeepMind** (Genie, MuJoCo) · **Wayve** (GAIA driving WMs) · **World Labs** (Marble — spatial intelligence).
- **Academic labs (world-model powerhouses):** UC Berkeley **BAIR** (Levine/Abbeel) · Stanford (Finn/Ermon) · MIT (Tedrake) · CMU · **NYU CILVR** (LeCun — JEPA) · **Mila** (Bengio) · Toronto/**Vector** (Fidler).
- **Industry (world-action-model adopters):** **1X**, **Figure**, **Agility**, **Skild**, **AgiBot** (Genie Envisioner), Physical Intelligence.
- **Open-source communities:** Hugging Face **LeRobot** · **nvidia-cosmos** (open weights) · **Genesis** · `danijar/dreamerv3`.
- **Venues / programs:** NeurIPS / ICML / ICLR / CoRL / RSS · **Mila World Modeling Workshop (2026)** · **WorldModelBench** (CVPR workshop).

## 11. Assessment & Validation
- **Knowledge checks** per subject theme (VI/ELBO derivations, MBRL, generative-model families).
- **Project rubrics** with objective metrics: multi-step **rollout prediction accuracy**, **long-horizon consistency / drift**, **FVD**/visual fidelity, **imagined-policy return vs. a model-free baseline**, **MPC goal-reaching success**, **synthetic-data downstream gain**, planning **step latency**.
- **Standardized benchmarks** as portable evidence: WorldModelBench · EWMBench · WorldArena; DMControl / Crafter / Minecraft (Dreamer); Push-T (DINO-WM).
- **Recognized certifications as evidence:** Berkeley CS 285 / Stanford XCS236 completion; NVIDIA Cosmos learning path + DLI Synthetic Data; Hugging Face Deep RL.
- **Senior tiers:** portfolio + system-design interview (design a WM-based data/planning pipeline) + live debugging of **long-horizon drift** and **reward-hacking-in-imagination**.

## 12. Adjacent & Related Niches
Converges with **A7 VLAs / foundation models** (the WM-as-policy trend) and feeds **A6 robot learning** (RL / imitation / self-supervised), **A8 simulation & synthetic data** (neural simulators), **A3 learned planning**, and **A4 MPC / learned control**. Platform tracks: **C1 fixed arm · C2 mobile manipulator · C5 humanoid**; verticals: **B10 autonomous vehicles** (driving world models), **B1 manufacturing**, **B9 humanoid/service**. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A7 (`✓`). §7 stamped mid-2026 — re-research before publish.*
