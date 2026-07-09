# Niche Research — World Models & Predictive Models for Robotics

> **Scope (Axis A · cluster A7):** learned world/dynamics models · world foundation models (e.g. NVIDIA Cosmos) · synthetic-data generation · imagination-based planning · action-conditioned video prediction.
> Niche-specific credentials + subjects only. Shared backbone (valued-degree tiers, canonical subjects, duration model) lives in `phase-1/_grounding-reference.md` — **not re-derived here.** `✓` grounded 2024–2026.

---

## 1. Strongest University Programs (with the courses that make them strong)

This is the most **ML-theory-heavy** niche in the taxonomy: strength comes from *deep-RL + deep-generative-modeling* benches, not from a named "world models" course (few exist). The intellectual home is the model-based-RL / self-supervised-prediction lineage (Ha & Schmidhuber's 2018 *World Models*; LeCun's JEPA).

**Postgraduate — ranked by model-based-RL + generative depth `✓`**

| Tier | Programs | The load-bearing courses |
|------|----------|--------------------------|
| **World-leading** | **UC Berkeley (BAIR) · Stanford · MIT · CMU** | **Berkeley** = deepest bench: **CS 285 Deep Reinforcement Learning** (Levine) — Lectures 15–16 *Model-Based RL I & II*, Lectures 11–13 *Variational Inference / VI in RL / Control as Inference* (the latent-variable machinery of world models), **HW4 = train a neural dynamics model and plan with it**; **CS 294-158 Deep Unsupervised Learning** (Abbeel) — autoregressive/flow/VAE/GAN/**diffusion**, the generative engine of world foundation models. Levine/Finn originated **Visual Foresight** (visual MPC). **Stanford**: **CS 224R Deep Reinforcement Learning** (Finn — model-based & offline RL, imitation) + **CS 236 Deep Generative Models** (Ermon — VAEs→autoregressive→**score-based/diffusion**) + **CS 234 RL** (Brunskill). **MIT**: **6.7920 Reinforcement Learning: Foundations & Methods** (DP/MDP/approximate-DP theory) + **6.8210 Underactuated Robotics** (Tedrake — learned dynamics, trajectory optimization, planning-through-a-model). **CMU**: **10-703 Deep RL & Control** + **16-831 Statistical Techniques in Robotics** (now deep-RL for robot decision-making: **model-based RL**, imitation, sim-to-real). |
| **Strong (world-models / JEPA / generative research homes)** | **NYU (CILVR) · U-Toronto + Vector · Mila (Montréal)** | **NYU** = LeCun's group, the origin of the **JEPA / world-model** thesis and **V-JEPA 2**; **DS-GA 1008 Deep Learning** covers energy-based models & self-supervised prediction. **Toronto/Vector**: Fidler (UofT/NVIDIA) *world models for AV*; deep generative + AV-world-model research. **Mila**: Bengio; RL + generative + a dedicated **World Modeling Workshop (2026)**. |
| **Present** | **Georgia Tech · UT Austin · U-Michigan** | GT **CS 7642 RL** + **CS 8803 Deep RL**; UT Austin (Peter Stone, model-based RL); Michigan deep-RL electives feeding robot learning. |

**Undergraduate — where the niche is reachable pre-master's `✓`:** no dedicated UG "world models" track exists; it is assembled from **intro-AI + deep learning + RL + deep generative models + a robot-learning capstone**. Strongest access: **Berkeley** (CS 188 AI, CS 182 Deep Learning; CS 285/236-equivalents UG-accessible), **CMU** (**10-403 Intro Deep RL**, 10-301/601 ML; BS AI / BS Robotics), **Stanford** (CS 234 / CS 224R / CS 236 UG-accessible), **MIT 6-4** (6.7900 ML → 6.8210). ETH/TUM reach it through a heavy ML/estimation core rather than a named track.

---

## 2. Certifications & MOOCs (most valued for THIS niche) `✓`

- **Berkeley CS 285 — Deep Reinforcement Learning** (Levine; full lectures + HW public). The single best *free* course that teaches model-based RL and world/latent-dynamics models explicitly. **Most niche-relevant single course.**
- **Stanford CS 236 — Deep Generative Models** (Ermon) — free lectures; also the paid **Stanford Online XCS236** *with certificate*. VAEs → autoregressive → **diffusion/score-based** = the generative spine of Cosmos/GAIA/Genie.
- **Berkeley CS 294-158 — Deep Unsupervised Learning** (Abbeel) — free; generative-model + self-supervised backbone.
- **NVIDIA Cosmos learning path** — the **Cosmos Cookbook** + developer guides for **post-training World Foundation Models** (forward/inverse dynamics, policy generation, **Cosmos Predict / Transfer / Reason**). The most niche-specific vendor resource for world foundation models.
- **NVIDIA DLI — Synthetic Data Generation** — *"Synthetic Data Generation for Perception Model Training in Isaac Sim"* (S-OV-30) and *"Generate Synthetic Data Using Omniverse Replicator"* (X-OV-01) — the synthetic-data-generation slice, DLI certificate.
- **Hugging Face Deep RL Course** — free, real certificate; model-based/imagination units (Dreamer-style) plus **LeRobot** for embodied rollout.
- **DeepLearning.AI — "How Diffusion Models Work"** (Sharon Zhou) — the diffusion engine behind modern predictive world models (the DL Specialization sequence/RL backbone stays in grounding-ref §C).
- *(Also relevant: David Silver's DeepMind RL lectures — RL theory; Sutton & Barto as the canonical text.)*

---

## 3. Subject List (grounded in the syllabi above) `✓`

**Foundational maths & CS**
- **Probability, statistics & stochastic processes** — the single most load-bearing block (latent-variable models, uncertainty) *(CS 236, MIT 6.7920)*
- **Information theory & variational inference** — KL divergence, **ELBO**, the exact machinery of latent-dynamics world models *(CS 285 VI lectures, CS 236)*
- Linear algebra; multivariable calculus; **optimization** (SGD, trajectory optimization)
- Python + **PyTorch/JAX**; data structures & algorithms

**Core robotics**
- **Reinforcement learning & optimal control** — MDPs, dynamic programming, policy/value iteration *(CS 234, MIT 6.7920)*
- **Robot dynamics & kinematics** — forward dynamics is *what a world model learns to predict* *(MIT 6.8210)*
- **Model predictive control / trajectory optimization** — the planner that consumes the learned model *(MIT 6.8210)*
- **State estimation & latent state** — Kalman/particle filters → the **RSSM** recurrent-state lineage
- **ROS 2 · Isaac Sim / simulation** (rollout & data collection)

**Niche-specific**
- **Model-based reinforcement learning** — learned dynamics, Dyna, **PETS, MBPO**; planning with a model *(CS 285 L15–16; CMU 10-703 / 16-831)*
- **Latent dynamics & world models** — RSSM, PlaNet, **Dreamer / DreamerV3** (imagination rollouts in latent space) *(CS 285; DreamerV3)*
- **Deep generative models** — VAEs, GANs, autoregressive, normalizing flows, energy-based, **diffusion/score-based**, discrete **tokenizers** *(CS 236, CS 294-158)*
- **Action-conditioned video prediction** — spatiotemporal generative modeling of future frames *(world-foundation-model literature)*
- **Imagination-based planning** — **visual foresight / visual MPC**; plan by rolling out a learned model *(Finn/Levine Visual Foresight)*
- **Self-supervised predictive representations** — **JEPA / joint-embedding predictive architectures** *(V-JEPA 2)*
- **Synthetic data generation & sim-to-real** — domain randomization, **Omniverse Replicator**, Cosmos Transfer *(NVIDIA DLI)*

**Frontier / advanced** `⏱ mid-2026`
- **World foundation models** — **NVIDIA Cosmos** (Predict/Transfer/Reason; **Cosmos 3** action post-training: forward/inverse dynamics + policy); **DeepMind Genie 2/3** (real-time interactive 3D worlds from a prompt); **Wayve GAIA-2** (controllable multi-view driving, latent-diffusion); **1X world model**
- **Joint-embedding predictive architectures** — **V-JEPA 2 / 2.1** (zero-shot robot control from web video + ~62 h robot footage); value-guided & hierarchical latent planning
- **Large world models / spatial intelligence** — **World Labs "Marble"** (Fei-Fei Li) — persistent generative 3D worlds
- **Video-generation-as-neural-simulator** — diffusion/autoregressive video models for closed-loop eval & RL post-training (UniSim lineage, NVIDIA OmniDreams)
- **Physics-informed & intuitive-physics prediction**; differentiable simulation; long-horizon world-state consistency

---

## 4. Niche-Specific Eligibility Adjustment (vs. grounding-ref general set)

**Degrees that RISE for this niche `✓`**
- **CS / AI → the dominant Tier 1**, more so than any other robotics niche — deep generative modeling + model-based RL *are* the job.
- **Applied Mathematics / Statistics → rises strongly toward Tier 1.** Probabilistic modeling, **variational inference**, information theory, stochastic processes and optimization are the literal substance of latent-dynamics world models — more load-bearing here than in the robotics average.
- **Physics → rises.** Dynamical systems, statistical mechanics / **energy-based models**, "intuitive physics," and diffusion's non-equilibrium-thermodynamics roots all transfer directly.
- **Computer Graphics / Simulation background → add as niche-specific Tier-2 (with-evidence).** World foundation models are generative video/3D-scene engines; rendering, neural rendering and simulation skills (Omniverse) transfer directly — not on the general robotics list but genuinely valued here.

**Degrees that FALL / are less central `✓`**
- **Mechanical Engineering & EE hardware / embedded / actuation → fall.** This is among the *least* embodiment-heavy niches — largely a learning + simulation problem; ME/EE stay Tier-2-with-evidence and mostly matter at the **sim-to-real** boundary.
- **Classical controls** matters only where a learned model feeds an **MPC/imagination** planner, not for the generative-world-model core.
- **Sensor/perception hardware** is less central than in the CV, SLAM or sensor-fusion niches.

**Net:** this niche tilts hardest of all toward **CS/AI + Math/Statistics + Physics/Graphics** — a "pure intelligence / generative-simulation" profile where strong ML-theory or generative-modeling depth outweighs any robotics-hardware exposure.

---

## Sources (representative, 2024–2026)
- Berkeley: `rail.eecs.berkeley.edu/deeprlcourse` (CS 285 lecture list, model-based HW4), `sites.google.com/view/berkeley-cs294-158-sp24` (CS 294-158)
- Stanford: `deepgenerativemodels.github.io` + `online.stanford.edu/courses/xcs236-deep-generative-models` (CS 236/XCS236), `cs224r.stanford.edu` (CS 224R)
- MIT/CMU: `web.mit.edu/6.7920/www`, `underactuated.csail.mit.edu` (6.8210), `cmudeeprl.github.io/703website_f20` (10-703), `sites.google.com/view/16-831-cmu` (16-831)
- World foundation models: `nvidia.com/en-us/ai/cosmos`, `developer.nvidia.com/blog/develop-physical-ai-reasoning-world-and-action-models-with-nvidia-cosmos-3`, `nvidianews.nvidia.com` (Cosmos release), arXiv `2501.03575` (Cosmos platform)
- Genie / GAIA / JEPA / World Labs: `deepmind.google/blog/genie-3-a-new-frontier-for-world-models`, `wayve.ai/thinking/gaia-2` + arXiv `2503.20523`, `ai.meta.com/research/vjepa` + arXiv `2506.09985` (V-JEPA 2), `worldlabs.ai/blog` (Marble)
- Dreamer / imagination planning: arXiv `2301.04104` + `github.com/danijar/dreamerv3`, `ar5iv.labs.arxiv.org/html/1610.00696` (Deep Visual Foresight)
- Synthetic data: `learn.nvidia.com` DLI S-OV-30 & `courses.nvidia.com/.../DLI+X-OV-01` (Replicator), `developer.nvidia.com/isaac/sim`
- Surveys: arXiv `2605.00080` (World Model for Robot Learning), `2606.00113` (World Models for Robotic Manipulation), `world-model-mila.github.io` (Mila 2026 workshop)
