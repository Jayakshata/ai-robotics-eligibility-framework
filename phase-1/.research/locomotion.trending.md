# Locomotion & Loco-Manipulation — Trending Research (mid-2026)

*Scope: legged (biped/quadruped), wheeled, aerial, underwater; model-based vs learned gait; loco-manipulation. Bias toward 2025–2026; **2026** releases flagged.*

## 1. Humanoid whole-body control & motion tracking (the center of gravity)
Dominant paradigm: one neural policy tracks/imitates retargeted human motion; distill many modes into a single controller.
- **HOVER** (NVIDIA, 2024) — versatile neural whole-body controller distilling many modes (nav, loco-manip, tabletop) into one policy; the reference multi-mode controller. https://arxiv.org/abs/2410.21229
- **OmniH2O / ExBody2** (2024) — kinematic pose as a universal control interface; ExBody2 scales expressive tracking. Foundational baselines everyone cites. https://arxiv.org/html/2412.13196v1
- **ASAP** (CMU, RSS 2025) — learns a residual "delta-action" model from real rollouts to close the sim-real dynamics gap for agile skills on Unitree G1; the go-to sim→real→sim recipe. https://arxiv.org/abs/2502.01143
- **GMT** (ICRA 2026) — single unified motion-tracking policy via adaptive sampling + Motion Mixture-of-Experts. https://arxiv.org/abs/2506.14770
- **TWIST** (2025) — teleoperated whole-body imitation; one controller for locomotion, legged-manipulation and expressive motion. https://arxiv.org/abs/2505.02833
- **SONIC / UniTracker** (late 2025) — "supersizing" motion tracking toward natural, universal whole-body trackers. https://arxiv.org/pdf/2511.07820
- **BFM-Zero** (LeCAR, Nov 2025) — promptable Behavioral Foundation Model via forward-backward / unsupervised RL; one latent space, zero-shot prompting for many skills on G1. Extends Meta's Motivo and NVIDIA's MaskedMimic line onto hardware. https://arxiv.org/abs/2511.04131
- **2026:** *Robust & Generalized Humanoid Motion Tracking* (Jan, https://arxiv.org/abs/2601.23080); *CoRe-MoE* multi-terrain MoE gait (Jun, https://arxiv.org/pdf/2606.04718); *General Humanoid WBC via Pretraining + Fast Adaptation* (Feb, arXiv 2602.11929).

## 2. Loco-manipulation foundation models / VLA (fastest-moving; heavily 2026)
Shift from motion tracking to language-conditioned, video-pretrained generalist loco-manipulation.
- **GR00T N1 → N1.5 → N1.6** (NVIDIA, 2025–2026) — open humanoid VLA, dual-system (VLM System-2 + diffusion-transformer System-1); N1.5 adds FLARE loss, N1.6 adds embodiments (G1, YAM, AgiBot Genie-1). The default open base model. https://research.nvidia.com/labs/gear/gr00t-n1_6/
- **2026 — Ψ₀ (Psi-0)** (USC PSI Lab + NVIDIA, RSS 2026, arXiv 2603.12263) — open humanoid VLA (2.5B VLM + flow-based MM-DiT); SOTA long-horizon loco-manip, ~+40% success with ~10× less robot data than GR00T-N1.6; new skills from ~80 trajectories. CVPR'26 workshop best paper. https://arxiv.org/abs/2603.12263
- **2026 — WholeBodyVLA** (OpenDriveLab, ICLR 2026, arXiv 2512.11047) — unified latent VLA; learns latent actions from action-free egocentric video + a loco-manip-oriented RL policy. https://github.com/OpenDriveLab/WholebodyVLA
- **2026 — SUGAR** (May, arXiv 2605.20373) — converts unlabeled human video into deployable loco-manip skills, no reward engineering; 6 whole-body tasks on G1. https://arxiv.org/abs/2605.20373
- **VIRAL** (Nov 2025) — visual sim-to-real at scale; privileged RL teacher → vision student via tiled rendering + DAgger; zero-shot to G1. https://viral-humanoid.github.io/
- Also 2026: **OmniContact** (contact-flow meta-skills, arXiv 2606.26201), **LEGS** (teleop-free VLA fine-tuned in a Gaussian-splatting world, arXiv 2606.01458), **PhysHSI** (humanoid-scene interaction).

## 3. Quadruped & generalized legged locomotion
Maturing; now about generalization, perception, and gait libraries rather than "can it walk."
- **ANYmal Parkour** (2024) — agile learned navigation; the parkour reference.
- **AllGaits** (2024) — single policy for all quadruped gaits + transitions. https://arxiv.org/pdf/2411.04787
- **Attention-Based Map Encoding** (2025) — perceptive locomotion generalizing over terrain via learned map attention. https://arxiv.org/pdf/2506.09588
- **2026:** **REAL** — robust extreme agility via spatio-temporal policy + physics-guided filtering (arXiv 2603.17653); perceptive platform-adaptive controllers (arXiv 2606.25179).

## 4. Cross-embodiment & scaling laws (structural trend)
- **Towards Embodiment Scaling Laws in Robot Locomotion** (RSS 2026, arXiv 2505.05753) — ~1,000 procedurally-generated embodiments; more embodiments beats more data-per-embodiment; one distilled generalist zero-shots to Go2/H1. The "scaling laws" thesis for locomotion. https://arxiv.org/abs/2505.05753

## 5. Model-based & hybrid control (alive, converging with learning)
- **Whole-Body MPC with MuJoCo** (2025) — real-time iLQR whole-body MPC on quadruped and full-size humanoid; the "MuJoCo/MJX-as-MPC-engine" trend. https://arxiv.org/abs/2503.04613
- **RL-augmented adaptive MPC** (2025) — bipedal locomotion over challenging terrain. https://arxiv.org/pdf/2509.18466
- **2026 — Diffusion-MPC** (Jul) — diffusion generative model inside MPC; retrain-free changes of speed/direction/gait. https://techxplore.com/news/2026-07-ai-powered-robots-legs.html

## 6. Wheeled-legged
- **Sparse-MoE DRL** (2026) — multi-mode locomotion for bipedal wheel-legged robots via Top-K expert gating. https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2026.1788395/full
- **WiXus** (2026) — wheeled-legged + wire-driven mobility/manipulation (arXiv 2605.20932); plus safe/constrained-RL for 1 m obstacle climbing on a 340 kg platform.

## 7. Aerial
- **Swift — champion-level drone racing** (Nature 2023) — canonical RL-beats-humans result, still the reference. https://www.nature.com/
- **2025 A2RL Abu Dhabi** — autonomous drone (TU Delft MAVLab + ESA) beat human FPV world champions head-to-head. https://dronexl.co/2026/02/21/ai-drone-human-champions-abu-dhabi/
- **2026:** **Swooper** high-speed aerial grasping (arXiv 2603.05935); superhuman **multi-agent racing** via MARL (arXiv 2605.22748); async end-to-end aerial nav under latency (2025).

## 8. Underwater / amphibious (bio-inspired, earlier stage)
- Soft robotic fish with DRL undulatory control; multi-agent RL path-tracking with reaction wheels.
- **2026 — Amphibious Robots review** (arXiv 2602.19077) — design/locomotion/control survey; **ZBot** zebrafish visuomotor rheotaxis (npj Robotics 2026). https://www.nature.com/articles/s44182-026-00088-x

## 9. Datasets, retargeting & sim substrate (shared plumbing)
- **AMASS + LAFAN1** — the human-motion sources every tracker retargets from.
- **GMR / "Retargeting Matters"** (ICRA 2026) — General Motion Retargeting, real-time CPU human→humanoid; the retargeter behind TWIST. https://github.com/YanjieZe/GMR
- **2026 — PHUMA** — Physically-grounded Humanoid Locomotion dataset that cleans foot-slide/penetration retargeting artifacts.
- **Isaac Lab / Isaac Sim, Genesis, MuJoCo (MJX)** — the sim stack; "IsaacGym → Genesis/IsaacSim → real" transfer is now the standard evaluation protocol.

**Net trend:** locomotion is collapsing into language-conditioned, video-pretrained whole-body *foundation models* (GR00T, Ψ₀, BFM-Zero) that unify locomotion + manipulation on humanoids — sim-to-real closed by residual/physics-alignment (ASAP) and scaled across embodiments — while model-based MPC survives by fusing with diffusion and RL.
