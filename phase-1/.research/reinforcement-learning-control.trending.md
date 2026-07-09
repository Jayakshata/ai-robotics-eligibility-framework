# Reinforcement Learning for Control — Trending Research (as of July 2026)

Scope: RL for robot control, policy optimization, model-based/offline RL, large-scale RL sim training. Snapshot mid-2026, biased to 2025–2026. **2026 releases flagged.** Center of gravity: a two-layer stack — *massively-parallel GPU sim + fast off-policy RL* — feeding two frontiers: *promptable behavioral/cross-embodiment foundation policies* and *RL post-training of imitation-learned VLA/diffusion policies*.

---

## 1. Massively-parallel GPU sim — the training substrate
The base everyone builds on: thousands of GPU-resident environments running the whole agent–env loop on-device.
- **Isaac Lab** (NVIDIA, paper Nov 2025) — GPU-accelerated multi-modal robot-learning framework; ~4096 parallel humanoids at ~150K steps/s on one RTX 4090; de-facto industrial RL sim. [arxiv](https://arxiv.org/pdf/2511.04831)
- **MuJoCo Playground** (DeepMind, RSS 2025) — GPU sim + training + sim-to-real on MJX; PPO/SAC out-of-box; the open, contact-accurate counterpart to Isaac. [roboticscenter](https://www.roboticscenter.ai/rl-environments/mujoco-vs-isaac-sim)
- **Genesis** — fast-rising open GPU physics engine claiming very high throughput; increasingly a third training target.
- **RSL-RL** (ETH, Sept 2025) — robotics-first, GPU-only PPO/BC library with symmetry + curiosity; powers most legged/humanoid sim-to-real; runs in Isaac Lab, MuJoCo Playground and Genesis. [arxiv](https://arxiv.org/html/2509.10771v1)
- **rl_games / skrl / Stable-Baselines3** — the interchangeable trainer backends Isaac Lab ships with. [isaaclab](https://github.com/isaac-sim/IsaacLab/discussions/1398)

## 2. Off-policy RL at scale — the "FastTD3 moment"
2025's big shift: off-policy TD3/SAC — long sample-efficient-but-slow — now beat PPO on wall-clock at massive parallelism.
- **FastTD3** (Berkeley, May 2025) — parallel-sim + large-batch + distributional-critic TD3; solves HumanoidBench in <3 h on one GPU; first off-policy RL deployed on a full-size humanoid (Booster T1). [younggyo.me](https://younggyo.me/fast_td3/) · [arxiv](https://arxiv.org/abs/2505.22642)
- **FastSAC** — SAC port of the recipe; faster than vanilla SAC but less stable in high-D action spaces.
- **FlashSAC (2026)** — stabilized fast off-policy SAC for high-dimensional robot control. [arxiv](https://arxiv.org/html/2604.04539v1)
- **Sim-to-Real Humanoid Locomotion in 15 Minutes** (Dec 2025) — FastSAC/FastTD3-style recipe trains G1/T1 walking in 15 min on one RTX 4090. [arxiv](https://arxiv.org/abs/2512.01996)
- **SimBa / SimbaV2** — simplicity-bias network scaling that lets deep RL exploit bigger nets; widely adopted for sample-efficient control. [arxiv](https://arxiv.org/pdf/2410.09754)

## 3. Humanoid whole-body control & motion tracking
The hottest applied niche: RL policies that track/synthesize agile whole-body motion learned from human MoCap.
- **OmniH2O** (CMU, CoRL 2024) — universal human-to-humanoid whole-body teleop + autonomy; kinematic pose as interface; teacher–student sim-to-real. [mlr](https://proceedings.mlr.press/v270/he25b.html)
- **HOVER** (NVIDIA/CMU, 2025) — single versatile neural whole-body controller multiplexing many command modes.
- **ExBody2** (2025) — expressive whole-body control scaling to agile human motions.
- **ASAP** (2025) — real-to-sim-to-real delta-action model closing the dynamics gap for agile humanoid skills.
- **BeyondMimic** (Aug 2025) — motion-tracking primitives distilled into a guided-diffusion policy; cartwheels/spin-kicks/sprinting with shared hyperparameters, SOTA human-likeness. [arxiv](https://arxiv.org/abs/2508.08241)
- **General WBC via Pretraining + Fast Adaptation / ResMimic / EGM (2026)** — 2026 wave pushing general, high-dynamic tracking and loco-manipulation. [arxiv](https://arxiv.org/pdf/2602.11929)

## 4. Behavioral & cross-embodiment foundation policies (the SAM2/DINO analog)
The clearest "foundation model" story in control: one promptable/general policy across tasks or bodies.
- **Meta Motivo** (Meta FAIR, Dec 2024) — behavioral foundation model via unsupervised RL (Forward-Backward); zero-shot prompt to tracking/goal/reward tasks on a humanoid.
- **BFM-Zero** (CMU/Meta, Nov 2025) — first off-policy unsupervised-RL behavioral FM on a real Unitree G1; shared latent for motion/goal/reward prompting + few-shot adaptation. [arxiv](https://arxiv.org/abs/2511.04131)
- **Cross-Humanoid WBC / XHugWBC (2026)** — zero-shot whole-body control across seven real humanoids via a hybrid-mask Transformer. [arxiv](https://arxiv.org/pdf/2602.05791)
- **H-Zero (Dec 2025) · Multi-Loco · MOTIF (2026)** — cross-embodiment pretraining + few-shot transfer to novel bodies. [arxiv](https://arxiv.org/pdf/2512.00971)

## 5. Model-based RL & world models
Learn a dynamics/world model, then plan or imagine — the sample-efficiency frontier.
- **TD-MPC2** (2024) — latent world model + MPPI planning; one hyperparameter set solves 104 continuous-control tasks; the default model-based-RL baseline. [tdmpc2.com](https://www.tdmpc2.com/)
- **DreamerV3** (Nature 2025) — general world-model actor-critic learning purely in imagination; symlog + fixed hyperparameters across domains; 2026 surveys name it/TD-MPC2 the default robot dynamics model.
- **Codebook / diffusion world-model RL (2025–26)** — discrete-codebook and diffusion-policy-optimization extensions scaling world-model RL. [arxiv](https://arxiv.org/pdf/2605.26282)
- **World Models for Robotic Manipulation: A Survey (2026)** — signals field consolidation. [arxiv](https://arxiv.org/pdf/2606.00113)

## 6. RL fine-tuning of VLAs, diffusion & flow policies
2025–26's fastest-growing thread: post-train imitation-learned generalist policies with RL to fix distribution shift.
- **SimpleVLA-RL** (Sept 2025) — GRPO-based (KL-free) online RL scales VLA training; 1 demo/task lifts LIBERO-Long 17→92%; sim policies transfer to real. [arxiv](https://arxiv.org/pdf/2509.09674)
- **π_RL (Oct 2025)** — online RL fine-tuning for flow-based (π0-style) VLAs. [arxiv](https://arxiv.org/html/2510.25889v1)
- **DSRL · ReinFlow** — RL in a diffusion policy's latent-noise space (no weight changes) / policy-gradient RL for flow policies.
- **RIPT-VLA · VLA-RL · iRe-VLA · RL4VLA** — REINFORCE-LOO, process-reward, and PPO/GRPO/DPO comparisons for VLA post-training (PPO wins).
- **dVLA-RL (2026)** — RL over denoising trajectories for discrete-diffusion VLAs. [arxiv](https://arxiv.org/pdf/2606.23623)

## 7. Real-world & human-in-the-loop RL
Training on hardware directly, made practical by off-policy learning + human corrections.
- **HIL-SERL** (Berkeley, Science Robotics 2025) — de-facto real-world recipe: SAC + RLPD replay + SpaceMouse interventions reach near-100% on contact-rich tasks in a few hours. [arxiv](https://arxiv.org/pdf/2410.21845)
- **SERL** — the sample-efficient real-robot RL software suite it builds on. [arxiv](https://arxiv.org/pdf/2401.16013)
- **RLPD** — foundational off-policy "RL with prior data" that seeds real-world learners with demos.
- **RL-100 (Oct 2025)** — real-world RL reaching high reliability on precise manipulation. [arxiv](https://arxiv.org/pdf/2510.14830)

## 8. Dexterous manipulation RL & LLM-driven reward design
- **Sim-to-Real RL recipe for vision-based dexterous manipulation** (Berkeley, CoRL 2025) — trains bimanual multi-fingered humanoid hands; real-to-sim tuning + policy distillation. [project](https://toruowo.github.io/recipe/)
- **DemoStart** (DeepMind, 2024) · **ClutterDexGrasp** (2025) · **zero-shot force-based grasping (2026)** — auto-curriculum + tactile sim for dexterous sim-to-real. [arxiv](https://arxiv.org/html/2601.02778v2)
- **Eureka** (ICLR 2024) & **DrEureka** (RSS 2024) — LLMs write/evolve reward functions and domain-randomization ranges; beat human reward engineering on 83% of tasks and enable hands-off sim-to-real. [github](https://github.com/eureka-research/Eureka)

## Benchmarks / datasets
- **HumanoidBench** — Unitree H1 + Shadow hands in MuJoCo; 31 whole-body loco+manip tasks; the humanoid-RL standard. [emergentmind](https://www.emergentmind.com/papers/2403.10506)
- **MuJoCo Playground** — de-facto GPU training/sim-to-real suite (quadruped/humanoid/hand/arm).
- **RoboVerse** (2025) — unified platform/dataset/benchmark for scalable robot learning.
- **OGBench** (ICLR 2025) — offline goal-conditioned RL benchmark; **D4RL** — the offline-RL classic still universally cited.
- **LocoMuJoCo** — locomotion imitation/RL benchmark across many embodiments.

## Net trend
Control RL has crystallized into a **GPU-parallel-sim + fast off-policy RL** stack (Isaac Lab/MuJoCo Playground + FastTD3) feeding two frontiers — **promptable behavioral & cross-embodiment foundation policies** for humanoids (BFM-Zero, Motivo) and **RL post-training of imitation-learned VLA/diffusion policies** (SimpleVLA-RL, π_RL) — with HIL-SERL owning real-world fine-tuning; PPO is no longer the automatic default.
