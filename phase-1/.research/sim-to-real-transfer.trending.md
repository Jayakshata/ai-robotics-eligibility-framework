# Sim-to-Real Transfer & Representation Learning — Trending Research (mid-2026)

*Scope: sim-to-real transfer, domain randomization/adaptation, self-supervised & representation learning for robotics. Bias: newest (2025–2026). `[2026]` = 2026 release.*

The field's center of gravity has moved: brute-force **domain randomization** is giving way to **photorealistic digital twins** (Gaussian splatting) and **world-model data engines** (Cosmos, DreamGen, V-JEPA 2) that manufacture near-real training data, while **frozen self-supervised backbones** (DINOv2/v3, V-JEPA 2) have become the default robot perception substrate — the DINO/SAM analog for control.

---

## 1. Real2Sim2Real & Gaussian-splat digital twins
Reconstruct the real scene as a radiance field, drop it into a physics sim, train, deploy — collapses the *visual* gap.
- **SplatSim** (CMU, ICRA 2025) — replaces mesh rendering with 3D Gaussian Splats; zero-shot sim2real for RGB manipulation at ~86% (vs 97.5% real-trained). The canonical GS real2sim2real. https://arxiv.org/abs/2409.10161
- **RoboGSim** — Gaussian reconstructor + digital-twin builder + interactive engine; synthesizes novel views/objects/trajectories for demo generation and policy eval. https://robogsim.github.io/
- **RL-GSBridge** (2025) — 3DGS real2sim2real for RL manipulation. **GSWorld** (Oct 2025) — closed-loop photorealistic GS sim suite. https://arxiv.org/pdf/2510.20813
- **Real-is-Sim** (2025) — dynamic digital twin for real-world policy eval; **[2026] D-REX** — differentiable real2sim2real engine (MJX + real2sim MJCF) for dexterous grasping. https://arxiv.org/html/2504.03597v1 · https://arxiv.org/pdf/2603.01151

## 2. World-model data engines (video world models as the new sim)
Hottest theme: generative video models manufacture synthetic rollouts / "neural trajectories," bypassing hand-built sim.
- **NVIDIA Cosmos** — World Foundation Models for Physical AI: **Cosmos-Predict2.5** (Text/Image/Video2World) + **Cosmos-Transfer2.5** control-net for Sim2Real/Real2Real render translation + **Cosmos-Reason** physical-AI VLM. **[2026]** Predict2.5 Robot/Policy checkpoints for RoboCasa/LIBERO (Feb 2026). The dominant synthetic-data stack. https://arxiv.org/abs/2511.00062 · https://github.com/nvidia-cosmos/cosmos-predict2.5
- **DreamGen** (NVIDIA GEAR, CoRL 2025) — video world model generates photoreal "neural trajectories"; a GR1 humanoid learns 22 new behaviors from a single pick-place demo. https://arxiv.org/abs/2505.12705
- **V-JEPA 2 / V-JEPA 2-AC** (Meta, Jun 2025) — self-supervised video world model (1M+ hrs); action-conditioned head post-trained on <62 hrs DROID gives zero-shot MPC on unseen Franka arms (65–80%). https://arxiv.org/abs/2506.09985
- **[2026] World-Gymnast** (RL inside a WM), **DreamDojo** (generalist WM from human video), **WMPO/VLA-RFT**. Survey: *World Models for Robot Learning* (2026). https://arxiv.org/pdf/2602.02454 · https://arxiv.org/pdf/2602.06949 · https://arxiv.org/html/2605.00080v1

## 3. Self-supervised representation encoders (the "DINO of robot control")
Frozen SSL backbones as the perception substrate; data-centric verdict: generic DINO beats robotics-specific encoders.
- **R3M · MVP · VC-1 · Voltron** (2022–23) — the legacy robot-pretraining anchors every new encoder benchmarks against.
- **Theia** (2024) — distills multiple vision foundation models (DINOv2/CLIP/SAM/depth) into one compact robot-learning encoder. https://arxiv.org/pdf/2407.20179
- **DINO-WM** (LeCun/Pinto, 2024) — world model *on frozen DINOv2 patch features* → zero-shot planning via MPC without reward/demos; seeded the JEPA-planning line. https://arxiv.org/abs/2411.04983
- **DINOv2 → DINOv3** — the actual default frozen backbone; *"A Data-Centric Revisit"* (2025) shows data curation, not architecture, drives robot-learning gains. https://arxiv.org/pdf/2503.06960
- **[2026] V-JEPA 2.1** — unlocking dense features in video SSL; **Bootstrap Dynamic-Aware 3D reps** (Dec 2025). https://arxiv.org/html/2603.14482v1

## 4. Domain randomization, adaptation & privileged learning
The classical sim-to-real workhorses — still the backbone of deployed legged/dexterous policies.
- **Domain Randomization / ADR** (Tobin 2017; OpenAI 2019) — randomize physics and visuals so reality looks like one more variation; automatic DR curricula. Still standard.
- **RMA (Rapid Motor Adaptation)** (Kumar 2021) — teacher-with-privileged-info → student that infers "extrinsics" online in <1 s; the template for teacher-student privileged distillation. https://arxiv.org/pdf/2107.04034
- **ASAP** (CMU/NVIDIA, 2025) — learns a *residual delta-action* model on real data to align sim physics for agile humanoid whole-body skills; the leading "close the dynamics gap" method. https://arxiv.org/html/2502.01143v1
- **Simulation-Guided Fine-Tuning** (2025) — rapidly adapt sim policies to the real world with minimal real interaction. https://arxiv.org/pdf/2502.02705

## 5. Generative visual augmentation
Diffusion/inpainting multiply one demo into many scenes — the cheap way to close the visual gap.
- **GenAug · ROSIE** (2023) — text-to-image inpainting of backgrounds/distractors onto real demos; the origin.
- **RoboEngine** (2025) — plug-and-play robot-aware segmentation + background generation; +200% over no-aug across 6 new scenes. https://arxiv.org/abs/2503.18738
- **[2026] RoboAug** — one annotation → hundreds of scenes via region-contrastive augmentation. https://arxiv.org/pdf/2602.14032
- **Cosmos-Transfer** — sim renders → photoreal via multimodal control-net (see §2).

## 6. GPU simulators & physics substrate (the data engine)
Sim throughput is the bottleneck; 2025–26 is the "GPU physics + zero-shot" era.
- **NVIDIA Isaac Sim / Isaac Lab** — the high-fidelity Omniverse/PhysX standard for massively parallel sim + synthetic data. https://arxiv.org/pdf/2606.03551
- **MuJoCo Playground** (MJX, RSS 2025 best-demo) — open framework for zero-shot sim-to-real from state *and* pixels across quadrupeds/humanoids/hands. https://playground.mujoco.org/
- **Newton** (NVIDIA + Google DeepMind + Disney, GTC 2025) — open differentiable physics engine on Warp; **MuJoCo-Warp** gives ~70× humanoid / ~100× in-hand speedups. https://developer.nvidia.com/newton-physics
- **Genesis** (Taichi, 2024/25) — cross-platform GPU sim, claimed 43M FPS Franka. Differentiable/residual-physics sim-to-real: **[2026] RAFL** learned residual-acceleration fields for soft robots. https://arxiv.org/html/2603.22039

## 7. Humanoid & locomotion sim-to-real (the application frontier)
Where sim-to-real is being battle-tested at scale in 2025–26.
- **HumanPlus** (CoRL 2024) & **ASAP** (2025) — human-video shadowing + physics-aligned whole-body skills.
- **[2026] SUGAR** — scalable human-video-driven humanoid loco-manipulation; **[2026] Deep Whole-body Parkour**; **[2026] TTT-Parkour** — rapid test-time training for perceptive parkour. https://arxiv.org/pdf/2605.20373 · https://arxiv.org/pdf/2601.07701 · https://arxiv.org/pdf/2602.02331

## 8. Benchmarks — real-to-sim policy evaluation
Measuring (and predicting) the gap is now its own subfield.
- **SIMPLER** (2024) — simulated evals for real manipulation policies (Google Robot / WidowX) that *correlate* with real success; the reference. https://simpler-env.github.io/
- **Real-is-Sim** (2025), **REALM** (real-to-sim validated generalization benchmark, Dec 2025), *Robot Policy Evaluation for Sim-to-Real: A Benchmarking Perspective* (2025), and *The Reality Gap in Robotics* survey (Oct 2025). https://arxiv.org/html/2512.19562v1 · https://arxiv.org/pdf/2510.20808

---

**Net trend:** Sim-to-real is being absorbed into *generative* world-building — photoreal Gaussian-splat digital twins and video world models (Cosmos / DreamGen / V-JEPA 2) manufacture near-real data, frozen self-supervised backbones (DINOv2/v3, V-JEPA 2) supply the perception substrate, and classical domain randomization + teacher-student privileged learning (RMA / ASAP) survive as the reliable last-mile for legged and dexterous deployment.
