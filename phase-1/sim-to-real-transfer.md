# Per-Niche Profile — Sim-to-Real Transfer & Representation Learning

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; sim-to-real/representation-specific and trending-research signals are research-backed. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Sim-to-Real Transfer & Representation Learning · **Axis A cluster:** A6 (Robot Learning) · **Type:** `[F]` (sim-to-real / domain-randomization core; self-supervised / representation-learning & world-model sub-areas `[S][★]`)
**Related capabilities:** A1 perception · A5 locomotion · A6 RL/imitation · A7 world models / VLAs · A8 simulation & digital twins · **Platforms (C):** C1 fixed arm · C4 quadruped · C5 humanoid · **Verticals (B):** B1 manufacturing · B9 humanoid/service · B10 autonomous vehicles · B14 inspection

---

## 1. Definition & Scope
Closing the gap between where robot policies are **trained** (simulation, video, offline data) and where they must **run** (the physical world) — and learning the compact visual/state **representations** that make that transfer possible and sample-efficient. This is the **most deep-learning-heavy corner of robotics**: applied deep RL plus generative and self-supervised learning pointed at embodiment. **In scope:** sim-to-real transfer, domain randomization & adaptation, teacher-student privileged distillation, self-supervised & representation learning (contrastive / masked / DINO-style), world-model data engines, real2sim2real digital twins. **Out of scope (adjacent):** the RL/imitation algorithms themselves (A6 core), simulators as engineering artifacts (A8), the general perception stack (A1), and VLA/foundation-model policy design (A7) — though this niche consumes and feeds all four.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Robot Learning Engineer (Sim-to-Real) | Trains/tunes RL & representation policies in sim under supervision; runs domain-randomization sweeps; deploys to real hardware and logs the reality gap. |
| **L2** | Sim-to-Real / Robot Learning Engineer | Owns a transfer pipeline end-to-end (sim setup → randomization → training → real deployment); debugs the reality gap; ships a working transferred policy. |
| **L3** | Senior Robot Learning Engineer | Designs the transfer strategy (DR vs. adaptation vs. real2sim vs. world-model data); chooses representation backbones; sets sim-fidelity/randomization budgets; mentors. |
| **L4/L5** | Staff / Principal Research Scientist (Robot Learning) | Sets the sim-to-real / representation research agenda; advances SOTA; publishes at NeurIPS/ICLR/CoRL/RSS; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Artificial Intelligence, EE/ECE, Robotics Engineering. Tier 2 (with evidence): Mathematics/Statistics, Physics, Mechanical Engineering, Mechatronics. **Sim-to-real-specific `✓`: this niche shifts weight toward the ML/research side harder than any other A-cluster — Maths/Statistics and Physics rise from Tier 2 to *near Tier 1*** (probability, optimization, information theory and generative modeling are load-bearing; a Math/Stats or Physics grad with ML coursework outcompetes here). **Mechanical Engineering *falls*** relative to its manipulation/control standing — contact mechanics and mechanism design matter much less; ME qualifies only with substantial RL/deep-learning coursework.

**Highly-valued undergraduate programs `✓`** — No flagship BS carries a *dedicated* sim-to-real course; it is a senior-elective + capstone layer, so the signal is a **sim-to-real RL capstone (Isaac Lab/MuJoCo → real robot), not a course title.** Strongest entry points: **UC Berkeley** (CS 188/189 → CS 285, open to seniors), **Stanford** (CS 221/229 → CS 224R), **Michigan Robotics BSE** (DeepRob ROB 498), **CMU BS Robotics** (16-831, open to undergrads), **Georgia Tech** (CS 7643 Deep Learning), and the **WPI / Michigan / CMU** robotics-BS sim+RL sequences.

**Acceptable postgraduate degrees** — MS/PhD in CS/AI, Machine Learning, EE, or Robotics with a **deep-RL / representation-learning / robot-learning** focus. (Leans ML/CS harder than the general robotics set.)

**Highly-valued postgraduate programs — ranked by sim-to-real / representation strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **UC Berkeley · Stanford · CMU · UT Austin** | Berkeley **CS 285 Deep RL** (Levine; lec-22 = *domain randomization / sim2real*) + **CS 294-158 Deep Unsupervised Learning** (Abbeel; the SSL/representation course) + **CS 287** "Sim2Real and Domain Randomization" · Stanford **CS 224R Deep RL** (Finn; explicit "RL for Robots: Sim-to-Real" lecture) + **CS 330 Multi-Task & Meta-Learning** + CS 236 Deep Generative Models · CMU **16-831 Intro to Robot Learning** (Shi; "transfer policies from sim to real") + 10-703 Deep RL · UT Austin **CS 391R Robot Learning** (Yuke Zhu; "Representation Learning for Robotics," "Sim-to-Real Gap") — the tightest single-course fit |
| Strong | **ETH Zurich · NYU · Michigan** | ETH **263-5911 Robot Learning: Fundamentals → Foundation Models** (Mees) + **RSL (Hutter)** — the sim-to-real *locomotion* powerhouse (ANYmal RL) · NYU **DS-GA 1008 Deep Learning** (LeCun/Canziani; SSL, energy-based models, world models — the canonical representation course, fully online) · Michigan **DeepRob ROB 498/599** (Jenkins; deep representation learning for perception) |
| Present (research-led) `~` | **MIT · Oxford ORI · Toronto/Vector** | MIT 6.8200 Sensorimotor Learning + world-model/JEPA research · Oxford ORI / AIMS CDT (research-only) · Toronto/Vector deep-RL & representation depth |

*(These are ML-research-driven; the signal is deep-RL/representation coursework + published code, not a "robotics" core.)*

**Highly-valued certifications `✓`** — **University of Alberta Reinforcement Learning Specialization** (Coursera; White & White; Sutton & Barto — the RL-theory gold standard, *the* foundational MOOC for this niche) · **NVIDIA DLI / Isaac Lab path** ("Reinforcement Learning for Robots — Getting Started with Isaac Lab" — domain randomization + sim-to-real on the industry-standard platform; the most niche-relevant applied credential) · **Hugging Face Deep RL Course** (free, real cert; SB3/RLlib) · **Pieter Abbeel "Foundations of Deep RL"** (free 6-lecture spine) · **Hugging Face LeRobot** (imitation/representation) · The Construct **"Mastering RL for Robotics"** (ROS-integrated). *De-facto credentials:* completing Berkeley **CS 285** / **CS 294-158** or NYU **DS-GA 1008** + published code. *Prereq layer:* DeepLearning.AI **ML** + **Deep Learning** Specializations. *(No dedicated sim-to-real exam exists; the credential spine is RL + Isaac Lab. Per grounding ref, NVIDIA has no dedicated robotics exam — closest formal = NCP-OpenUSD.)*

**Experience & portfolio** — L1: internship/academic; a sim-trained RL policy (Isaac Lab/MuJoCo) with a domain-randomization sweep. L2: 2–4 yr; ≥1 sim-to-real transfer that works on real hardware with the sim-vs-real gap measured. L3: 5–8 yr; ≥1 real deployment where transfer was the hard part (legged/dexterous/humanoid). L4/L5: 8+ yr and/or first-author papers — and note the **venue mix skews to ML conferences: NeurIPS / ICLR / ICML count alongside CoRL / RSS / ICRA**.

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** + **PyTorch**; engineering for large-scale GPU training
- **Deep reinforcement learning** — PPO/SAC/DQN, model-free & model-based, on- & off-policy
- **Robot simulation at scale**: Isaac Sim/Lab, MuJoCo (MJX), or Genesis — massively parallel GPU training
- **Domain randomization** (physics + visual) and automatic-DR curricula
- **Sim-to-real deployment** and reality-gap debugging on physical hardware
- **Representation learning**: contrastive (InfoNCE), masked autoencoders, using frozen SSL backbones (DINOv2/v3, R3M, VC-1)
- **Imitation learning / LfD** — BC, DAgger (the transfer alternative to RL)
- Robot **kinematics/dynamics** and **feedback control / MPC** fundamentals (to know what the sim must model)
- **ROS 2** for real-robot integration
- Solid **probability / MDP math** and **optimization**

**Preferred / differentiating**
- **Teacher-student privileged distillation** (RMA-style online adaptation)
- **Domain adaptation / meta-learning** (CS 330 material; test-time / online adaptation)
- **World models** & latent-space planning (V-JEPA 2, DINO-WM, Dreamer-style)
- **Real2sim2real** with **Gaussian-splatting digital twins** (SplatSim, RoboGSim)
- **World-foundation-model data engines** (NVIDIA Cosmos, DreamGen) for synthetic rollouts
- **Generative visual augmentation** (diffusion inpainting — RoboEngine, GenAug/ROSIE)
- **Differentiable simulation** (Newton, Genesis) & residual/real-data physics alignment (ASAP)
- **Deep generative models** (VAEs, diffusion) for randomization & world models
- Publications at **NeurIPS / ICLR / ICML / CoRL / RSS**; deployment on legged/humanoid/dexterous platforms

**Tools & tech stack** — *Languages:* Python (+ some C++) · *Learning:* PyTorch, JAX; SB3, RLlib, CleanRL; rsl_rl / rl_games · *Sim:* Isaac Sim/Lab, MuJoCo/MJX + Playground, Genesis, Newton, Gazebo · *Representation:* DINOv2/v3, V-JEPA 2, R3M/MVP/VC-1/Voltron/Theia · *Data engines:* NVIDIA Cosmos (Predict/Transfer/Reason), DreamGen · *Real2sim:* 3D Gaussian Splatting (SplatSim, RoboGSim), NeRF · *Middleware:* ROS 2 · *Eval:* SIMPLER, RoboArena-style real evals · *Hardware:* Franka, UR, Unitree Go2/G1, ANYmal.

**Bar by tier** — L1: trains + transfers a sim policy with DR on real hardware · L2: owns a sim-to-real pipeline, fluent across sim/representation/deploy · L3: architects the transfer strategy, deep in ≥1 differentiating area (world models / real2sim / privileged distillation) · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
The sim-to-real/representation slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** linear algebra · **probability & stochastic processes / MDP math** *(Alberta RL Spec)* · **optimization** (SGD, convex) · **information theory** (InfoNCE / contrastive objectives) · Python + **PyTorch** · data structures & algorithms.
- **Core robotics:** kinematics & dynamics · feedback/optimal control & **MPC** · **state estimation** *(UT Austin CS 391R)* · computer vision / 3D perception · **ROS 2** · **physics simulation** *(Isaac Sim/Lab, MuJoCo, Gazebo)* — the substrate the whole niche runs on.
- **Niche-specific:** **deep RL** — model-free/-based/offline *(Berkeley CS 285, Stanford CS 224R, Alberta Spec)* · **imitation learning / LfD** — BC/DAgger/inverse RL *(CMU 16-831, CS 391R)* · **sim-to-real transfer & domain randomization** *(CS 285 lec-22, CS 287, Isaac Lab)* · **domain adaptation & generalization** *(Stanford CS 330)* · **meta-learning / multi-task / learning-to-learn** *(CS 330, CS 224R Meta-RL)* · **self-supervised & representation learning for robotics** — contrastive, masked AE, DINO-style, state-representation learning *(CS 391R "Representation Learning for Robotics," Berkeley CS 294-158, NYU DS-GA 1008)* · **deep generative models** — VAEs/GANs/diffusion *(Stanford CS 236, CS 294-158)*.
- **Frontier/advanced:** **world models & latent-space planning** *(ETH 263-5911, NYU DL)* · **diffusion/flow policies** · **sequence models / decision transformers** *(ETH)* · representation transfer via **VLA/foundation models** · **real2sim & sim data generation** (Gaussian-splat twins, world-model data engines) · **goal-conditioned & unsupervised skill discovery** *(CS 224R)* · **online/test-time domain adaptation**.

## 6. Training Programme Design & Duration `✓`
Sim-to-real/representation-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D); specialization + capstone tuned to this niche.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths (prob/optim/info-theory), Python/**PyTorch**, classical ML | 2.0 mo | 6 mo | 300 | ML & maths fluency |
| 2. Core robotics | Kinematics/dynamics, control/MPC, **ROS 2**, **simulation (Isaac Lab/MuJoCo)** | 2.0 mo | 6–7 mo | 320 | Command a robot in sim + real |
| 3. AI/ML depth | Deep learning, computer vision, **deep RL + imitation** | 2.0 mo | 6 mo | 300 | Policy learning + perception |
| 4. **Sim-to-real & representation specialization** | Domain randomization, teacher-student adaptation, SSL/representation backbones, world models, real2sim2real | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Sim-trained RL policy transferred to a real quadruped/arm + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior robot-learning (sim-to-real) engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**. Niche note: because this is the most DL-heavy niche, **Phase 3 (AI/ML depth) is the crux** and core-robotics can run lighter than in hardware niches — but budget for real sim/GPU debug friction in Phase 4 (the reality gap is slow to close).

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The center of gravity has moved: brute-force **domain randomization** is giving way to **photoreal Gaussian-splat digital twins** and **world-model data engines** (Cosmos, DreamGen, V-JEPA 2) that manufacture near-real training data, while **frozen self-supervised backbones** (DINOv2/v3, V-JEPA 2) have become the default robot-perception substrate — the DINO/SAM analog for control. `🆕` = 2026 release.

- **Real2sim2real & Gaussian-splat digital twins (collapse the *visual* gap):** **SplatSim** (CMU, ICRA 2025 — 3DGS replaces mesh rendering; ~86% zero-shot sim2real RGB manipulation) — the canonical GS real2sim2real · **RoboGSim** (GS reconstructor + digital-twin builder + interactive engine) · **RL-GSBridge**, **GSWorld** (closed-loop photoreal GS suite) · **Real-is-Sim** (dynamic twin for real-world policy eval) · 🆕 **D-REX** (differentiable real2sim2real, MJX + real2sim MJCF, for dexterous grasping).
- **World-model data engines (video world models as the new sim — hottest theme):** NVIDIA **Cosmos** — World Foundation Models for Physical AI: **Cosmos-Predict2.5** (Text/Image/Video2World) + **Cosmos-Transfer2.5** control-net for Sim2Real render translation + **Cosmos-Reason** physical-AI VLM; 🆕 Predict2.5 Robot/Policy checkpoints for RoboCasa/LIBERO (Feb 2026) — the dominant synthetic-data stack · **DreamGen** (NVIDIA GEAR, CoRL 2025 — photoreal "neural trajectories"; a GR1 humanoid learns 22 behaviors from one demo) · **V-JEPA 2 / V-JEPA 2-AC** (Meta, 2025 — self-supervised video world model; zero-shot MPC on unseen Franka arms from <62 hrs DROID) · 🆕 **World-Gymnast** (RL inside a WM), 🆕 **DreamDojo**, 🆕 **WMPO / VLA-RFT**.
- **Self-supervised representation encoders (the "DINO of robot control"):** **R3M · MVP · VC-1 · Voltron** (2022–23 — the legacy robot-pretraining anchors every new encoder benchmarks against) · **Theia** (2024 — distills DINOv2/CLIP/SAM/depth into one compact robot-learning encoder) · **DINO-WM** (LeCun/Pinto — world model on *frozen DINOv2 patch features*; zero-shot MPC planning without reward/demos) · **DINOv2 → DINOv3** the actual default frozen backbone; *"A Data-Centric Revisit"* (2025 — data curation, not architecture, drives gains) · 🆕 **V-JEPA 2.1** (dense features in video SSL).
- **Domain randomization, adaptation & privileged learning (the classical last-mile — still deployed):** **Domain Randomization / ADR** (Tobin 2017; OpenAI 2019 — still standard) · **RMA (Rapid Motor Adaptation)** (Kumar 2021 — teacher-with-privileged-info → student infers "extrinsics" online in <1 s; the template for teacher-student distillation) · **ASAP** (CMU/NVIDIA 2025 — residual delta-action model aligns sim physics for agile humanoid whole-body skills; the leading "close the dynamics gap") · **Simulation-Guided Fine-Tuning** (2025 — adapt sim policies with minimal real interaction).
- **Generative visual augmentation (multiply one demo into many scenes):** **GenAug · ROSIE** (2023 — text-to-image inpainting of backgrounds/distractors; the origin) · **RoboEngine** (2025 — robot-aware segmentation + background gen; +200% across 6 new scenes) · 🆕 **RoboAug** (one annotation → hundreds of scenes) · **Cosmos-Transfer** (sim → photoreal control-net).
- **GPU simulators & physics substrate (sim throughput is the bottleneck):** NVIDIA **Isaac Sim / Isaac Lab** (Omniverse/PhysX standard for massively parallel sim + synthetic data) · **MuJoCo Playground** (MJX, RSS 2025 best-demo — zero-shot sim-to-real from state *and* pixels across quadrupeds/humanoids/hands) · 🆕 **Newton** (NVIDIA + Google DeepMind + Disney — open differentiable engine on Warp; MuJoCo-Warp ~70× humanoid / ~100× in-hand speedups) · **Genesis** (Taichi — claimed 43M FPS Franka; differentiable/residual-physics, e.g. 🆕 **RAFL** for soft robots).
- **Humanoid & locomotion sim-to-real (the application frontier, battle-tested at scale):** **HumanPlus** (CoRL 2024) & **ASAP** (2025 — human-video shadowing + physics-aligned whole-body skills) · 🆕 **SUGAR** (human-video-driven humanoid loco-manipulation) · 🆕 **Deep Whole-body Parkour**, 🆕 **TTT-Parkour** (rapid test-time training for perceptive parkour). *(ETH RSL / ANYmal remains the reference legged-RL lineage.)*
- **Benchmarks — real-to-sim policy evaluation (measuring the gap is now its own subfield):** **SIMPLER** (2024 — simulated evals for real manipulation policies that *correlate* with real success; the reference) · **Real-is-Sim** (2025), 🆕 **REALM** (real-to-sim validated generalization), *Robot Policy Evaluation for Sim-to-Real* (2025), and *The Reality Gap in Robotics* survey (Oct 2025).

*Net trend: sim-to-real is being absorbed into *generative* world-building — photoreal Gaussian-splat digital twins and video world models (Cosmos / DreamGen / V-JEPA 2) manufacture near-real data, frozen self-supervised backbones (DINOv2/v3, V-JEPA 2) supply the perception substrate, and classical domain randomization + teacher-student privileged learning (RMA / ASAP) survive as the reliable last-mile for legged and dexterous deployment. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Train a PPO/SAC policy in **Isaac Lab / MuJoCo** (cartpole → quadruped locomotion) | RL + GPU-sim workflow; stable locomotion in sim |
| Foundational | **Domain-randomization sweep**: randomize mass/friction/visuals, measure robustness | DR mechanics; policy survives held-out physics params |
| Applied | **Sim-to-real transfer** of a quadruped/arm policy to real hardware (Unitree Go2 / Franka) | Reality-gap debugging; sim policy runs on real robot, gap measured |
| Applied | **Frozen-backbone policy**: train BC/RL on **DINOv2 / R3M / VC-1** features vs. from-scratch | Representation payoff; higher sample efficiency on held-out scenes |
| Advanced | **Teacher-student privileged distillation (RMA-style)**: privileged-sim teacher → online-adapting student | Privileged distillation; student infers extrinsics in <1 s, robust on real terrain |
| Advanced | **Real2sim2real with Gaussian splatting** (SplatSim/RoboGSim): reconstruct real scene → train → deploy | Photoreal twin transfer; closes the visual gap zero-shot |
| Advanced | **World-model MPC**: plan in latent space on frozen DINOv2/V-JEPA features (DINO-WM style) | Latent-space planning; zero-shot goal reaching without reward/demos |
| Capstone | **End-to-end sim-to-real**: DR + representation backbone (+ optional Cosmos/DreamGen-augmented data) → deploy an agile skill on a real quadruped/humanoid, scored with SIMPLER-style sim eval | Full frontier transfer stack; robust real-world skill with measured sim-vs-real correlation |

## 9. Required Lab Setup / Hardware / Resources
- **Robots / platforms:** Quadrupeds — **Unitree Go2 / B2**, **ANYmal**, Boston Dynamics Spot · Humanoids — **Unitree G1 / H1**, Fourier GR-1 (sim-to-real proving grounds) · Arms — Franka **Panda / FR3**, UR5e, **xArm** (budget) · dexterous hands (Allegro / LEAP) for in-hand sim2real.
- **Sensors:** Intel RealSense D435/D455 · onboard IMU + joint encoders (the proprioception vs. privileged/observed split) · cameras for visual-gap experiments.
- **Compute:** RTX 4090 / A6000 workstation for parallel sim; **A100/H100** clusters for large-scale RL, world-model and SSL pretraining (this niche is GPU-hungrier than most).
- **Software / sim:** **Isaac Sim / Isaac Lab** · **MuJoCo (MJX) + Playground** · **Genesis** · **Newton** (differentiable) · Gazebo · ROS 2 · RL libs (rsl_rl, rl_games, SB3, CleanRL, RLlib) · **3D Gaussian Splatting** toolchains (real2sim) · **NVIDIA Cosmos** + **DreamGen** (data engines).
- **Representation backbones:** DINOv2/v3 · V-JEPA 2 · R3M · MVP · VC-1 · Voltron · Theia (pretrained, frozen).
- **Datasets & benchmarks:** **DROID**, Open X-Embodiment (real data for real2sim / action-conditioning) · **SIMPLER**, REALM, RoboArena-style real evals · sim task suites — **Isaac Lab tasks**, **MuJoCo Playground**, RLBench, Meta-World, robosuite, ManiSkill.

## 10. Partnerships & Ecosystem
- **Sim / compute providers:** **NVIDIA** (Isaac Sim/Lab, Cosmos, Newton, DLI, Inception) · **Google DeepMind** (MuJoCo, MuJoCo Playground, Newton co-dev) · Genesis community.
- **Hardware vendors:** Unitree · ANYbotics (ANYmal) · Boston Dynamics · Franka Robotics · Universal Robots · Fourier Intelligence.
- **Academic labs (sim-to-real / representation powerhouses):** **UC Berkeley** (Levine RAIL; Abbeel) · **Stanford** (Finn IRIS; IPRL) · **ETH RSL (Hutter)** — the legged sim-to-real reference · **CMU** (Shi) · **UT Austin** (Yuke Zhu RobIn) · **NYU/Meta** (LeCun/Pinto representation line) · **Meta FAIR** (V-JEPA, DINO, R3M/VC-1) · **NVIDIA GEAR** (DreamGen, Cosmos, GR00T).
- **Open-source communities:** Isaac Lab · MuJoCo / Playground · Hugging Face **LeRobot** + Deep RL · Open X-Embodiment / DROID consortium · Genesis.
- **Industry programs:** NVIDIA Inception · humanoid players (Figure, 1X, Unitree, Agility) running sim-to-real at scale.
- **Standards (applied) `~`:** less regulated than hardware niches — inherits the deployment platform's envelope (e.g. ISO 13482 service, ISO 10218 industrial) when fielded.

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (MDP math, DR, representation objectives, world models).
- **Project rubrics** with objective metrics: **sim-vs-real success gap**, zero-shot transfer success rate, sample efficiency vs. from-scratch baseline, online-adaptation time, robustness across randomized/held-out physics.
- **Standardized benchmarks** as portable evidence: **SIMPLER** (sim-eval that correlates with real success), REALM, Isaac Lab / MuJoCo Playground task suites, RLBench / Meta-World; increasingly **RoboArena-style** real-world eval.
- **Recognized certifications as evidence:** Alberta RL Specialization; NVIDIA Isaac Lab / DLI RL path; Hugging Face Deep RL + LeRobot; completed Berkeley CS 285 / CS 294-158 with published code.
- **Senior tiers:** portfolio + system-design interview (design a transfer strategy for a given gap) + live reality-gap debugging; **first-author papers at NeurIPS/ICLR/ICML/CoRL/RSS** as the strongest senior signal.

## 12. Adjacent & Related Niches
Feeds and is fed by **A7 world models / VLAs / world-foundation-models** (Cosmos, V-JEPA — the data-engine and representation frontier), **A8 simulation & digital twins** (the substrate; real2sim2real), and **A6 RL/imitation** (the policy-learning core). Pairs closely with **A1 perception** (frozen SSL backbones) and **A5 locomotion** (where sim-to-real is most battle-tested — legged/humanoid). Platform-agnostic but most load-bearing on the **C4 quadruped** and **C5 humanoid** tracks. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A6 (`✓`). §7 stamped mid-2026 — re-research before publish.*
