# Per-Niche Profile — Reinforcement Learning for Control

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; RL-for-control-specific and trending-research signals are research-backed (`phase-1/.research/reinforcement-learning-control.{creds,trending}.md`). `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Reinforcement Learning for Control · **Axis A cluster:** A6 (Robot Learning) · **Type:** `[F]` (offline / model-based / large-scale-sim RL sub-areas `[S][★]`)
**Related capabilities:** A4 optimal control/MPC · A5 locomotion & manipulation · A6 imitation learning (sibling) · A7 VLAs / world models · A8 simulation · **Platforms (C):** C4 quadruped · C5 humanoid · C1 fixed arm · C2 mobile manipulator · **Verticals (B):** B1 manufacturing · B2 logistics · B9 humanoid/service

---

## 1. Definition & Scope
Training robot **control policies by optimizing a reward through interaction** — rather than hand-designing a controller or cloning demonstrations. It is the learning-based counterpart to A4 optimal control, and it is the engine behind the recent leap in legged locomotion and whole-body humanoid skills. **In scope:** policy optimization (policy gradients, actor-critic), model-based RL, offline RL, exploration, large-scale GPU-parallel sim training, sim-to-real of learned policies, and RL post-training of imitation/VLA policies. **Out of scope (adjacent):** classical/optimal control & MPC *theory* (A4 — though the optimal-control↔RL bridge is load-bearing here), pure imitation/behavior cloning (A6 sibling), the VLA architectures themselves (A7), and simulators-as-software (A8).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior RL / Robot-Learning Engineer | Implements & tunes RL training pipelines in sim under supervision; runs sweeps; reward shaping; integrates environments and logs. |
| **L2** | RL / Robot-Learning Engineer | Owns a learned policy end-to-end (env design→reward→train→sim-to-real→deploy); debugs the sim-to-real gap; ships a learned controller to real hardware. |
| **L3** | Senior RL / Robot-Learning Engineer | Designs the RL training architecture; makes model-free vs. model-based vs. offline tradeoffs; sets reward/curriculum & evaluation protocol; mentors. |
| **L4/L5** | Staff / Principal Robot-Learning Research Engineer / Research Scientist | Sets the RL research agenda; advances policy-optimization / sim-to-real / behavioral-FM SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **RL-for-control-specific `✓`: this niche is math/algorithms-first, not embodiment-first** — **Mathematics/Applied Maths and EE-with-controls rise to Tier 1** (RL-for-control *is* probability + optimization + dynamic programming; optimal control ↔ RL is the same Bellman/LQR/stochastic-control math), and **Operations Research / Industrial Engineering / Statistics newly qualify** (with an RL/ML elective) — MDPs & *approximate/neuro-dynamic programming* are OR-native (Bertsekas/Powell lineage). **Pure Mechanical Engineering / Mechatronics fall** relative to embodiment-heavy niches (CAD/actuation design is not load-bearing); ME-with-controls stays relevant for the "control" half.

**Highly-valued undergraduate programs `✓`** — **University of Alberta** (CMPUT 365 Intro to RL — a genuine UG RL course, Sutton & Barto home turf) and **UC Berkeley** (CS 185 — the UG twin of CS 285) are the standout UG destinations *specifically* for this niche; then **CMU** (10-403 Deep RL & Control), **Georgia Tech** (CS threads + RL), **Stanford / MIT** (RL reachable senior year on a strong CS/EE/math base).

**Acceptable postgraduate degrees** — MS/PhD in CS/AI, EE (controls/systems), Robotics, or **Applied Maths / Operations Research** with an RL / learning-control focus. This niche is **graduate-weighted** — its depth lives in dedicated deep-RL and optimal-control courses.

**Highly-valued postgraduate programs — ranked by RL-for-control strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading (applied RL↔control) | **UC Berkeley · Stanford · CMU** | Berkeley **CS 285 Deep RL** (Levine — field-reference curriculum: policy gradients, model-based & **offline RL**) + **CS 287** (Abbeel, optimal control + RL) · Stanford **CS234** + **CS224R** (Finn) + **AA 203 Optimal & Learning-based Control** (Pavone) · CMU **16-745 Optimal Control & RL** (on real robots) + **10-703 Deep RL & Control** |
| World-leading (RL theory/foundations) | **University of Alberta** (RLAI / AMII) | The deepest *dedicated RL sequence* anywhere: **CMPUT 365 → 397 → 609 RL II** (Sutton) + **653 Theoretical Foundations of RL** (Szepesvári). Unmatched for RL algorithms/theory |
| Strong | **MIT · ETH Zurich** | MIT **6.7920 RL: Foundations & Methods** (rigorous DP/MDP math core) + **6.832/6.8210 Underactuated Robotics** (Tedrake — RL as approximate optimal control) · ETH **Foundations of RL** (Niao He — NPG/TRPO/PPO, model-based & offline RL) + **RSL Optimal & Learning Control** (Hutter — legged sim-to-real powerhouse, ANYmal) |
| Accessible / notable | **Georgia Tech (OMSCS) · UCL–DeepMind · UT Austin · Caltech** | GT **CS 7642 RL & Decision Making** (low-cost, scalable OMSCS credential) · UCL **David Silver RL course** (the classic lecture canon, DeepMind feeder) · UT Austin (Stone) · Caltech (Yue) |

*(Oxford = RL-by-research, thin dedicated coursework; UCL's value is the Silver lecture canon, not a taught RL degree.)*

**Highly-valued certifications `✓`** — **University of Alberta / AMII Reinforcement Learning Specialization** (Coursera; White & White; 4 courses following Sutton & Barto — the canonical RL MOOC-with-certificate) · **Hugging Face Deep RL Course** (free, *real* certificate; hands-on Stable-Baselines3 / CleanRL / Sample Factory; PPO/SAC, offline-RL & RLHF units) · **NVIDIA DLI / Isaac Lab RL** ("RL for Robots — Getting Started with Isaac Lab"; GPU-parallel sim, sim-to-real) · **Udacity Deep RL Nanodegree** (project-based DQN/DDPG/PPO/multi-agent). High-signal *no-cert* self-study: **Berkeley CS 285** (open lectures+assignments), **OpenAI Spinning Up in Deep RL**, **UCL Silver lectures**. *(No blue-chip vendor RL exam exists; DeepLearning.AI has no dedicated RL course — the Alberta Spec + HF cert + CS 285 self-study is the strongest verifiable stack.)*

**Experience & portfolio** — L1: internship/academic, a trained sim policy (classic-control → MuJoCo/Isaac locomotion). L2: 2–4 yr, a sim-to-real learned controller on real hardware + benchmark returns, a domain-randomization project. L3: 5–8 yr, ≥1 real deployment of a learned policy led. L4/L5: 8+ yr and/or first-author papers (**NeurIPS / ICML / ICLR / CoRL / RSS / L4DC**).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python**; **PyTorch** and/or **JAX**
- **RL fundamentals:** MDPs, Bellman equations & dynamic programming; value-based (**DQN**); **policy gradients** (REINFORCE, TRPO, **PPO**); **actor-critic** (A2C, DDPG, **TD3**, **SAC**)
- **Reward design / shaping** and environment (**Gymnasium** / DM Control) design
- **Deep-RL training at scale:** vectorized/parallel environments, hyperparameter tuning, reproducibility & logging
- Robot **simulation**: **Isaac Lab / Isaac Gym**, **MuJoCo / MJX**, or **Genesis**
- **Control & dynamics** fundamentals: rigid-body dynamics, LQR / optimal control, **MPC** (the RL↔optimal-control bridge)
- **Sim-to-real transfer** & domain randomization; debugging learned policies on real hardware
- RL libraries: **Stable-Baselines3 / CleanRL / RSL-RL / rl_games**
- Probability & stochastic processes, convex/nonlinear **optimization**, linear algebra fluency

**Preferred / differentiating**
- **Model-based RL / world models** (DreamerV3, TD-MPC2, MBPO)
- **Offline RL** (CQL, IQL; D4RL / OGBench)
- **Large-scale GPU-parallel sim training** (thousands of envs; the **FastTD3 / FastSAC** off-policy-at-scale recipe)
- **Legged-locomotion & humanoid whole-body RL** (sim-to-real on quadrupeds/humanoids; motion tracking)
- **RL fine-tuning of VLA / diffusion / flow policies** (SimpleVLA-RL, π_RL, HIL-SERL)
- **Real-world / human-in-the-loop RL** (HIL-SERL, SERL, RLPD)
- **LLM-driven reward design** (Eureka / DrEureka); safe & robust RL; meta-/multi-task RL
- Publications at **NeurIPS / ICML / ICLR / CoRL / RSS / L4DC**

**Tools & tech stack** — *Languages:* Python (C++ for real-time deployment) · *Frameworks:* PyTorch, JAX · *RL libs:* Stable-Baselines3, CleanRL, RSL-RL, rl_games, skrl, Sample Factory, TorchRL · *Sim:* Isaac Lab / Isaac Gym, MuJoCo / MJX / MuJoCo Playground, Genesis, Brax, PyBullet · *Env APIs:* Gymnasium, DM Control · *Model-based:* DreamerV3, TD-MPC2 · *Real-world RL:* SERL / HIL-SERL, RLPD (+ SpaceMouse for interventions) · *Hardware:* Unitree Go2/G1, ANYmal, Booster T1, Franka/UR arms · *Infra:* Weights & Biases, Hydra, Ray/RLlib, SLURM/GPU clusters

**Bar by tier** — L1: solid RL fundamentals, trains *stable* policies in sim · L2: ships a sim-to-real learned controller, fluent across the stack · L3: architects RL training systems, deep in ≥1 differentiating area (model-based / offline / humanoid WBC) · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
RL-for-control slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** linear algebra · **probability & stochastic processes** · multivariable calculus · **convex + nonlinear optimization** · **Markov chains & dynamic programming** · statistics / statistical learning · Python + **PyTorch/JAX** · numerical methods *(MIT 6.7920, Alberta CMPUT 653, ETH FoRL)*.
- **Core robotics & control:** rigid-body **dynamics** · **classical + optimal control (LQR/LQG)** · **model-predictive control (MPC)** · **trajectory optimization (iLQR/DDP, collocation)** · state estimation · system identification *(CMU 16-745, Stanford AA 203, MIT 6.832)*.
- **Niche-specific (RL core):** **MDPs & Bellman/dynamic programming** · value-based RL (TD, Q-learning, **DQN**) · **policy gradients (REINFORCE, TRPO, PPO)** · **actor-critic (A2C, DDPG, TD3, SAC)** · **model-based RL** · imitation learning & inverse RL · exploration–exploitation & bandits · continuous control *(Berkeley CS 285, Stanford CS234/CS224R, CMU 10-703, Alberta RL Spec)*.
- **Frontier / advanced:** **offline RL** (CQL, IQL, D4RL) · **sim-to-real & domain randomization** · **large-scale GPU-parallel sim training** (Isaac Lab/Isaac Gym, RSL-RL, rl_games) · world-model / **model-based RL** (Dreamer, MBPO) · **legged-locomotion RL** · RLHF · diffusion/flow policies · safe & robust RL · meta-/multi-task RL · control-as-inference *(Berkeley CS 285 offline-RL lecture, ETH FoRL/RSL, MIT 6.8200, NVIDIA Isaac Lab)*.

## 6. Training Programme Design & Duration `✓`
RL-for-control-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D); specialization + capstone tuned to RL-for-control.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths (prob/optimization/linear algebra), Python, classical ML | 2.0 mo | 6 mo | 300 | ML & maths fluency |
| 2. Core robotics & **control** | Dynamics, classical/optimal control, **MPC & trajectory opt**, ROS 2 | 2.0 mo | 6–7 mo | 320 | The optimal-control base (the RL↔OC bridge) |
| 3. AI/ML + **RL depth** | Deep learning, **deep RL** (value / policy-gradient / actor-critic), imitation | 2.0 mo | 6 mo | 300 | Train stable RL policies in sim |
| 4. **RL-for-control specialization** | Model-based & **offline RL**, **large-scale GPU-parallel sim**, sim-to-real, legged/WBC, RL post-training of VLAs | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | **Sim-to-real learned controller** on a real robot (quadruped/arm) + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior RL / robot-learning engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**. (Note vs. embodiment-heavy niches: Phase 2 here is deliberately *control-weighted* — LQR/MPC/trajectory-opt are the mathematical spine RL is built on, not incidental.)

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** Center of gravity: a two-layer stack — *massively-parallel GPU sim + fast off-policy RL* — feeding two frontiers: *promptable behavioral / cross-embodiment foundation policies* and *RL post-training of imitation-learned VLA/diffusion policies*. `🆕` = 2026 release; PPO is **no longer** the automatic default.

- **Massively-parallel GPU sim (the training substrate):** **Isaac Lab** (NVIDIA, paper Nov 2025 — ~4096 parallel humanoids at ~150K steps/s on one RTX 4090; de-facto industrial RL sim) · **MuJoCo Playground** (DeepMind, RSS 2025 — GPU sim + training + sim-to-real on MJX; PPO/SAC out-of-box) · **Genesis** (fast-rising open GPU physics; increasingly a third target) · **RSL-RL** (ETH, Sept 2025 — robotics-first GPU-only PPO/BC with symmetry + curiosity; powers most legged/humanoid sim-to-real) · **rl_games / skrl / Stable-Baselines3** (interchangeable trainer backends).
- **Off-policy RL at scale — the "FastTD3 moment":** **FastTD3** (Berkeley, May 2025 — parallel-sim + large-batch + distributional-critic TD3; solves HumanoidBench in <3 h on one GPU; first off-policy RL on a full-size humanoid, Booster T1) · **FastSAC** · `🆕` **FlashSAC** (stabilized fast off-policy SAC for high-D control) · **Sim-to-Real Humanoid Locomotion in 15 Minutes** (Dec 2025 — G1/T1 walking in 15 min on one RTX 4090) · **SimBa / SimbaV2** (simplicity-bias net scaling for sample-efficient control).
- **Humanoid whole-body control & motion tracking (hottest applied niche):** **OmniH2O** (CMU, CoRL 2024 — universal human-to-humanoid teleop+autonomy) · **HOVER** (NVIDIA/CMU 2025 — one neural WBC multiplexing many command modes) · **ExBody2** · **ASAP** (real-to-sim-to-real delta-action, closes the dynamics gap for agile skills) · **BeyondMimic** (Aug 2025 — motion tracking distilled into a guided-diffusion policy; cartwheels/spin-kicks, SOTA human-likeness) · `🆕` **General WBC via Pretraining / ResMimic / EGM** (2026 wave pushing general high-dynamic tracking + loco-manipulation).
- **Behavioral & cross-embodiment foundation policies (the SAM2/DINO analog):** **Meta Motivo** (Meta FAIR, Dec 2024 — behavioral FM via unsupervised Forward-Backward RL; zero-shot prompt to tracking/goal/reward) · **BFM-Zero** (CMU/Meta, Nov 2025 — first off-policy unsupervised-RL behavioral FM on a real Unitree G1) · `🆕` **XHugWBC / Cross-Humanoid WBC** (zero-shot WBC across seven real humanoids) · **H-Zero** (Dec 2025) · `🆕` **Multi-Loco / MOTIF** (cross-embodiment pretraining + few-shot transfer to novel bodies).
- **Model-based RL & world models (the sample-efficiency frontier):** **TD-MPC2** (2024 — latent world model + MPPI planning; one hyperparameter set solves 104 continuous-control tasks; the default model-based baseline) · **DreamerV3** (Nature 2025 — general actor-critic learning purely in imagination; fixed hyperparameters across domains) · `🆕` codebook / diffusion world-model RL (scaling world-model RL) · `🆕` **World Models for Robotic Manipulation: A Survey** (2026 — field consolidation).
- **RL fine-tuning of VLAs, diffusion & flow policies (fastest-growing thread):** **SimpleVLA-RL** (Sept 2025 — GRPO-based online RL; 1 demo/task lifts LIBERO-Long 17→92%; sim→real transfer) · **π_RL** (Oct 2025 — online RL for flow-based π0-style VLAs) · **DSRL / ReinFlow** (RL in a diffusion policy's latent-noise space / policy-gradient RL for flow policies) · **RIPT-VLA / VLA-RL / iRe-VLA / RL4VLA** (PPO/GRPO/DPO comparisons — **PPO wins**) · `🆕` **dVLA-RL** (RL over denoising trajectories for discrete-diffusion VLAs).
- **Real-world & human-in-the-loop RL:** **HIL-SERL** (Berkeley, Science Robotics 2025 — the de-facto real-world recipe: SAC + RLPD replay + SpaceMouse interventions reach near-100% on contact-rich tasks in a few hours) · **SERL** (the sample-efficient real-robot RL suite it builds on) · **RLPD** (foundational "RL with prior data," seeds learners with demos) · **RL-100** (Oct 2025 — real-world RL at high reliability on precise manipulation).
- **Dexterous manipulation RL & LLM-driven reward design:** Berkeley **vision-based dexterous sim-to-real recipe** (CoRL 2025 — bimanual multi-fingered humanoid hands) · **DemoStart** (DeepMind 2024) / **ClutterDexGrasp** (2025) / `🆕` zero-shot force-based grasping · **Eureka** (ICLR 2024) & **DrEureka** (RSS 2024 — LLMs write/evolve reward functions + domain-randomization ranges; beat human reward engineering on 83% of tasks, enable hands-off sim-to-real).
- **Benchmarks & eval:** **HumanoidBench** (Unitree H1 + Shadow hands in MuJoCo; 31 whole-body loco+manip tasks — the humanoid-RL standard) · **MuJoCo Playground** suite (quadruped/humanoid/hand/arm sim-to-real) · **RoboVerse** (2025 — unified platform/dataset/benchmark) · **OGBench** (ICLR 2025 — offline goal-conditioned RL) · **D4RL** (the offline-RL classic, still universally cited) · **LocoMuJoCo** (cross-embodiment locomotion imitation/RL).

*Net trend: control RL has crystallized into a **GPU-parallel-sim + fast off-policy RL** stack (Isaac Lab / MuJoCo Playground + FastTD3) feeding two frontiers — **promptable behavioral & cross-embodiment foundation policies** for humanoids (BFM-Zero, Motivo) and **RL post-training of imitation-learned VLA/diffusion policies** (SimpleVLA-RL, π_RL) — with HIL-SERL owning real-world fine-tuning. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Implement **DQN & PPO from scratch** on Gymnasium classic control (CartPole / LunarLander) | RL fundamentals + the training loop; stable convergence, understood loss curves |
| Foundational | **PPO/SAC for MuJoCo continuous control** (Hopper / HalfCheetah / Ant) | Continuous-control RL; matches published returns |
| Applied | **Quadruped locomotion** in Isaac Lab / MuJoCo Playground with domain randomization | GPU-parallel sim + reward/curriculum design; robust walking gait in sim |
| Applied | **Sim-to-real** transfer of that policy to a real **Unitree Go2** | Domain randomization + the sim-to-real gap; policy walks on real hardware |
| Advanced | **Model-based RL** — DreamerV3 / TD-MPC2 on a control suite | World-model learning + planning; beats a model-free baseline on sample efficiency |
| Advanced | **Offline RL** on D4RL / OGBench (CQL / IQL) | Learning from a fixed dataset; beats behavior-cloning on held-out returns |
| Advanced | **Real-world RL with HIL-SERL** on a contact-rich arm task (insertion) | Off-policy real-robot RL + human interventions; near-100% success in a few hours |
| Capstone | **Humanoid whole-body motion-tracking** *(BeyondMimic-style)* **or RL fine-tuning of a VLA/flow policy** *(SimpleVLA-RL / π_RL)* | End-to-end frontier stack; a sim-to-real agile skill or an RL-improved generalist policy |

## 9. Required Lab Setup / Hardware / Resources
- **Robots:** **Unitree Go2 / G1** (the accessible quadruped/humanoid RL sim-to-real platforms) · **ANYmal** (ETH legged) · **Booster T1** (humanoid) · **Franka / UR** arms (contact-rich RL) · Trossen / xArm (budget).
- **Compute:** **RTX 4090** (single-GPU large-scale sim — the FastTD3 / Isaac Lab sweet spot) · A100 / H100 for larger training; GPU cluster for sweeps.
- **Simulators:** Isaac Lab / Isaac Gym · MuJoCo / MJX / **MuJoCo Playground** · Genesis · Brax · PyBullet.
- **RL frameworks:** Stable-Baselines3 · CleanRL · **RSL-RL** · rl_games · skrl · Sample Factory · TorchRL; DreamerV3 / TD-MPC2 reference code; **SERL / HIL-SERL** for real-world.
- **Env APIs & teleop:** Gymnasium · DM Control · 3Dconnexion **SpaceMouse** (HIL-SERL interventions).
- **Datasets & benchmarks:** **D4RL · OGBench** (offline) · **HumanoidBench** · **LocoMuJoCo** · RoboVerse · DM Control Suite · Meta-World · ManiSkill · MuJoCo Playground suite.
- **Experiment infra:** Weights & Biases · Hydra · Ray / RLlib.

## 10. Partnerships & Ecosystem
- **Sim / compute:** NVIDIA (Isaac Lab / Isaac Gym, DLI, Inception) · Google DeepMind (MuJoCo / MJX, MuJoCo Playground).
- **Academic labs (RL-for-control powerhouses):** UC Berkeley (**RAIL** — Levine; Abbeel) · Stanford (Finn; **ASL** Pavone; Brunskill) · CMU (RI/MLD — Fragkiadaki) · **University of Alberta (RLAI / AMII** — Sutton, Szepesvári, White & White) · ETH Zurich (**RSL** Hutter; He; Krause) · MIT (Tedrake) · UT Austin (Stone).
- **Hardware vendors:** Unitree · ANYbotics · Booster Robotics · Franka Robotics · Universal Robots.
- **Open-source communities:** Hugging Face (**Deep RL course**, LeRobot) · **Farama Foundation** (Gymnasium, D4RL/Minari, PettingZoo) · CleanRL · Stable-Baselines3.
- **Industry programs:** NVIDIA (Isaac ecosystem) · Meta FAIR (Motivo / BFM-Zero) · Google DeepMind · humanoid players doing RL post-training (Figure, 1X, Booster, Unitree) · Physical Intelligence (RL fine-tuning of VLAs).
- **"Standards" (applied):** less standards-heavy than applied manipulation — the de-facto standards here are **benchmarks** (HumanoidBench, D4RL, OGBench); cobot/humanoid deployment still touches ISO 10218 / ISO/TS 15066 and ISO 13482.

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (MDPs & Bellman, policy gradients, model-based vs. offline RL, the RL↔optimal-control bridge).
- **Project rubrics** with objective metrics: normalized return vs. published baselines · **sample efficiency** (env-steps to threshold) · **sim-to-real success rate** · real-world task success / reliability · wall-clock training time.
- **Standardized benchmarks** as portable evidence: HumanoidBench · D4RL / OGBench (offline) · DM Control · Meta-World · LocoMuJoCo; MuJoCo Playground sim-to-real.
- **Recognized certifications as evidence:** Alberta RL Specialization · Hugging Face Deep RL certificate · CS 285 assignment completion.
- **Senior tiers:** portfolio + system-design interview (reward / curriculum / eval-protocol design) + live debugging of a **non-converging training run**.

## 12. Adjacent & Related Niches
Feeds the **A5 locomotion & manipulation** skills (where learned policies deploy) and the **C4 quadruped / C5 humanoid** platform tracks; pairs closely with **A4 optimal control / MPC** (the RL↔OC bridge), **A6 imitation learning** (sibling — RL post-trains IL/VLA policies), **A7 VLAs & world models** (RL fine-tuning; model-based RL), and **A8 simulation** (the GPU-sim training substrate). (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Niche research: `phase-1/.research/reinforcement-learning-control.{creds,trending}.md`. Taxonomy: `master-niche-taxonomy.md` cluster A6 (`✓`). §7 stamped mid-2026 — re-research before publish.*
