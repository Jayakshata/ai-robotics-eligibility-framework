# Simulation & Digital Twins — Trending Research (mid-2026)

_The named models, engines, and datasets people are actively building on in 2024–2026. **[2026]** flags this-year releases._

## 1. The "Newton era" — unified GPU physics engines

- **Newton** — open-source GPU physics engine on NVIDIA Warp + OpenUSD, co-developed by NVIDIA, Google DeepMind, Disney Research; targets contact-rich manipulation/locomotion. **[2026] Newton 1.0 GA shipped at GTC 2026**, claimed ~475x faster than MJX on Blackwell. This is the field's new center of gravity. ([newton](https://developer.nvidia.com/newton-physics), [blog](https://developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics/))
- **MuJoCo-Warp (MJWarp)** — DeepMind+NVIDIA GPU rewrite of MuJoCo on Warp, >100x faster than MJX on manipulation; the physics core inside Newton. Announced GTC 2025, maturing through 2026. ([github](https://github.com/google-deepmind/mujoco_warp))
- **MuJoCo Playground / MJX** — JAX-native MuJoCo on GPU + Madrona batch renderer; pip-installable RL-to-real for quadrupeds, humanoids, hands. Won RSS 2025 Outstanding Demo. Still the default academic sim-to-real stack. ([arxiv](https://arxiv.org/abs/2502.08844))
- **mjlab** — **[2026]** lightweight Isaac-Lab-style API built directly on MuJoCo-Warp; signals community migration off MJX. ([arxiv](https://arxiv.org/html/2601.22074v1))
- **Genesis** — generative, universal multi-physics engine (rigid/soft/fluid), ultra-fast Pythonic sim + photoreal renderer (Nyx) + natural-language data engine; ICRA 2025. Genesis AI raised $105M (Jul 2025) to build a robotics foundation model on it. ([github](https://github.com/Genesis-Embodied-AI/genesis-world), [funding](https://www.genesis.ai/press/genesis-ai-emerges-from-stealth-with-dollar105m-to-build-universal-robotics-found))
- **Isaac Sim 6.0 / Isaac Lab 3.0** — **[2026]** GTC'26 releases; swappable multi-backend physics (PhysX **and** Newton), Warp-based Core API, multiphysics/dexterous manipulation, DGX-scale learning. The production simulation platform. ([arxiv](https://arxiv.org/pdf/2511.04831), [discussion](https://github.com/isaac-sim/IsaacSim/discussions/655))

## 2. World foundation models as neural simulators + synthetic data

- **NVIDIA Cosmos** — world foundation models generating photoreal synthetic video of factories/warehouses/roads at ~$1/clip vs real capture. **[2026] Cosmos Predict 2.5, Transfer 2.5, Reason 2** released; adopters include Figure, Agility, Skild, Uber. The dominant synthetic-data engine for physical AI. ([newsroom](https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools), [blog](https://developer.nvidia.com/blog/scale-synthetic-data-and-physical-ai-reasoning-with-nvidia-cosmos-world-foundation-models/))
- **Isaac GR00T-Dreams / DreamGen** — blueprint generating massive synthetic robot trajectories from one image + prompt; produced 780k trajectories (~9 months of demos) in 11 hrs, and built GR00T N1.5 in 36 hrs (+40% over real-only data). The template for "world-model-in-the-loop" data scaling. ([blog](https://developer.nvidia.com/blog/enhance-robot-learning-with-synthetic-trajectory-data-generated-by-world-foundation-models/))
- **Genie 3** (Google DeepMind) — real-time, persistent, interactive 3D world model; generates egocentric data for navigation/long-horizon embodied learning. Aug 2025; **[2026] Project Genie opened to users Jan 29, 2026**. The frontier neural-simulator reference point. ([wiki](https://en.wikipedia.org/wiki/Genie_(world_model)))
- **AGIBOT Genie Sim 3.0 + Genie Envisioner 2.0 / GE-Sim** — **[2026, Apr 8]** unified embodied-AI platform: text/image→3D scenes in minutes, 1000Hz physics, RL (RLinf), plus a neural simulator for closed-loop policy eval. Shows world-models and classical sim converging into one stack. ([robotreport](https://www.therobotreport.com/agibot-introduces-genie-sim-3-0-simulation-platform-embodied-ai/))

## 3. Real2Sim2Real & Gaussian-splatting digital twins

- **RoboGSim** — real2sim2real simulator pairing 3DGS reconstruction with a physics engine (Gaussian Reconstructor + Digital-Twin Builder + Scene Composer); zero-shot sim-trained policies match real-data policies. Anchor of the 3DGS-sim wave. ([arxiv](https://arxiv.org/abs/2411.11839))
- **GSWorld / SplatSim / RE3SIM / DREMA** — closed-loop photoreal 3DGS simulation suites embedding splats in RL/manipulation to collapse the visual sim-to-real gap. ([arxiv](https://arxiv.org/pdf/2510.20813))
- **Real2Render2Real** — scales robot demonstration data *without* dynamics sim or hardware; a widely-cited 2025 shortcut for data generation. ([paper-list](https://github.com/YanjieZe/Paper-List))
- **HyperSim / EmbodiedDreamer** — **[2026]** holistic real2sim2real frameworks combining reconstruction, world modeling, and domain randomization for robust manipulation transfer. ([arxiv](https://arxiv.org/html/2605.26638))

## 4. Differentiable simulation

- **Brax / MJX-diff** — JAX-native differentiable rigid-body sim; still the go-to for gradient-based locomotion/control research.
- **SDRS (Shape-Differentiable Robot Simulator)** and **D-REX** — **[2026]** differentiable real-to-sim-to-real engine for dexterous grasping; gradients through contact/geometry for design + policy optimization. Niche but resurgent as engines expose analytic gradients. ([SDRS](https://arxiv.org/pdf/2412.19127), [D-REX](https://arxiv.org/pdf/2603.01151))

## 5. Industrial digital twins (OpenUSD + Omniverse)

- **NVIDIA Omniverse + OpenUSD** — de-facto interoperability layer for physically-accurate facility twins; BMW Regensburg runs a live twin syncing 400+ robots (<200ms path updates, 30% faster changeover). ([blog](https://blogs.nvidia.com/blog/openusd-digital-twins-industrial-physical-ai/))
- **Alliance for OpenUSD (AOUSD)** — **[2026]** widening membership (e.g., Aras, Apr 2026) standardizing lifecycle-connected twins; Siemens, Rockwell, Schaeffler, Amazon building on it. USD is becoming the twin substrate. ([news](https://www.manufacturingtomorrow.com/news/2026/04/14/aras-joins-the-alliance-for-openusd-to-advance-interoperable-lifecycle-connected-digital-twins-with-nvidia-omniverse/27382/))

## 6. Datasets, benchmarks & eval

- **NVIDIA Physical AI Dataset** — open HF collection of thousands of synthetic+real robot trajectories; >4.8M downloads. The reference synthetic-data corpus. ([newsroom](https://nvidianews.nvidia.com/news/nvidia-accelerates-robotics-research-and-development-with-new-open-models-and-simulation-libraries))
- **Isaac Lab – Arena** — **[2025/26]** open standardized policy-evaluation framework (with Lightwheel); addresses fragmented sim benchmarking. ([newsroom](https://nvidianews.nvidia.com/news/nvidia-accelerates-robotics-research-and-development-with-new-open-models-and-simulation-libraries))
- **Real2Sim policy-evaluation (3DGS)** and **RoboTrustBench** — **[2026]** benchmarks for evaluating policies and the *trustworthiness* of video world models for manipulation. ([real2sim-eval](https://real2sim-eval.github.io/files/paper.pdf), [RoboTrustBench](https://arxiv.org/pdf/2606.01600))
- Framing surveys: "Learning Embodied Intelligence from Physical Simulators and World Models" (2025) and Isaac Sim scalability report (2026). ([survey](https://arxiv.org/pdf/2507.00917), [isaacsim](https://arxiv.org/pdf/2606.03551))

---

**Net trend:** Simulation is consolidating onto GPU-native, Warp/OpenUSD-based engines (Newton, MuJoCo-Warp, Isaac Lab 3.0) while generative world models (Cosmos, Genie 3, GR00T-Dreams) and 3DGS real2sim2real twins increasingly *replace* hand-authored scenes and real data collection — physics engines and neural simulators are merging into one data-generation stack for physical AI.
