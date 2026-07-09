# Motion Planning & Navigation — Trending Research (mid-2026)

Scope: classical/sampling-based (RRT/PRM), optimization & trajectory optimization, global/local & social navigation, learned planning. Biased to 2025–2026. **2026 releases flagged.**

---

## 1. Classical planning got *fast* — SIMD + GPU are the new substrate
The dominant 2024–26 shift: sampling-based planning is no longer slow. These libraries are the "build-on" infrastructure.

- **cuRobo** (NVIDIA, NVlabs) — CUDA-accelerated IK + geometric planning + trajectory opt; full motion generation in ~30–100 ms, ~60× faster than prior trajopt. The de-facto GPU planning stack. [curobo.org](https://curobo.org/) · [github](https://github.com/NVlabs/curobo)
- **VAMP** (Kavraki Lab) — SIMD/vectorized collision-checking + FK; RRT-Connect for a Franka in ~35 µs on one CPU core. Now upstreamed into **OMPL**. [github](https://github.com/KavrakiLab/vamp)
- **CAPT** (Collision-Affording Point Trees, RSS 2024) & **FCIT\*** (ICRA 2025) — SIMD-amenable NN structures / nearest-neighbourless asymptotically-optimal planning; the algorithmic core inside VAMP. [FCIT*](https://arxiv.org/html/2411.17902)
- **pRRTC** (2025) — GPU-parallel RRT-Connect, integrated parallelism for large-scale GPU. [arxiv](https://arxiv.org/html/2503.06757)
- **cpRRTC** (RSS 2025) — GPU-parallel *constrained* RRT-Connect; reports ~53× over cuRobo on Fetch with higher success. [arxiv](https://arxiv.org/abs/2505.06791)
- **VAMP-MR (2026)** — vectorized multi-robot-arm planning, ~2 orders-of-magnitude speedup. [openreview](https://openreview.net/forum?id=ePPOoz8KKp)

## 2. Learned / generalist neural motion planners (manipulation)
Moving from per-scene planners toward "one policy, many scenes."

- **MπNets / Motion Policy Networks** (Fishman et al., CoRL 2022) — foundational large-scale neural end-to-end planner + its dataset; still the reference baseline. [arxiv](https://arxiv.org/pdf/2210.12209)
- **MotionBenchMaker** — standard procedural dataset/benchmark generator (40 datasets, 5 robots, 8 envs); the community's shared eval ground. [project](https://carlosquinterop.github.io/project/motionbenchmaker/)
- **Neural MP** (CMU, 2024/25) — generalist neural motion planner trained via modularity + scale (~1M+ scenes); pushes generalization to held-out scenes where MotionBenchMaker-trained policies fail. [arxiv](https://arxiv.org/html/2409.05864v1) · [scale](https://arxiv.org/pdf/2503.06814)
- **Toward Generalist Neural Motion Planners (2026)** — survey framing the open challenges (generalization, guarantees, speed). [arxiv](https://arxiv.org/pdf/2603.24318)

## 3. Diffusion & generative trajectory optimization
The hottest methodological theme — learn a distribution over trajectories, capture multimodality without hand-tuned costs.

- **Motion Planning Diffusion (MPD)** — diffusion models as learned trajectory priors for planning/optimization; the template many others extend. [arxiv](https://arxiv.org/pdf/2412.19948)
- **SafeDiffuser** (ICLR 2025) — diffusion planning with certified safety constraints. 
- **Cascaded Diffusion Models for Neural Motion Planning** (2025) — coarse-to-fine diffusion for manipulator planning. [arxiv](https://arxiv.org/pdf/2505.15157)
- **M2Diffuser** — diffusion trajectory optimization for *mobile* manipulation in 3D scenes. [arxiv](https://arxiv.org/pdf/2410.11402)
- **Train-Once Plan-Anywhere / Diffusion Trees** (2025) — kinodynamic planning via diffusion, transfers across environments. [arxiv](https://arxiv.org/pdf/2508.21001)
- **Discrete-Guided Diffusion** (2025) — scalable, safe *multi-robot* motion planning. [arxiv](https://arxiv.org/html/2508.20095v1)
- **SafeBimanual** (2025) — diffusion trajectory optimization for safe bimanual manipulation. [arxiv](https://arxiv.org/pdf/2508.18268)

## 4. Sampling-based MPC & local planning (MPPI)
**MPPI (Model Predictive Path Integral)** is the de-facto GPU-parallel local planner/controller for hard dynamics — non-differentiable costs, 50–100 Hz.

- **Legged MPPI** — whole-body MPC via optimized path integral for locomotion. [arxiv](https://arxiv.org/pdf/2508.11917) · sampling-strategy design **(2026)** [arxiv](https://arxiv.org/pdf/2601.01409)
- **PA-MPPI** (2025) — perception-aware MPPI for quadrotor nav in unknown space. [arxiv](https://arxiv.org/html/2509.14978v1)
- **CAHSOR** — competence-aware high-speed off-road nav in SE(3); representative of the learned-costmap off-road line. [arxiv](https://arxiv.org/pdf/2402.07065)

## 5. Mobile navigation foundation models & world models
The clearest "SAM2/DINO of navigation" candidates — cross-embodiment, deployable checkpoints.

- **GNM → ViNT → NoMaD** (Berkeley, 2022–23) — the foundational cross-embodiment goal-conditioned visual-nav family; released checkpoints everyone fine-tunes; NoMaD adds diffusion action heads. [general-navigation-models.github.io](https://general-navigation-models.github.io/) · [github](https://github.com/robodhruv/visualnav-transformer)
- **NavFoM / Embodied Navigation Foundation Model** (2025) — 8M cross-embodiment samples (quadruped/drone/wheeled/car), one VLA across VLN, object search, tracking, driving. [arxiv](https://arxiv.org/abs/2509.12129)
- **Navigation World Models (NWM)** (Bar/LeCun, Meta, CVPR 2025) — 1B-param Conditional Diffusion Transformer that simulates future observations to *plan by imagination*; can rank NoMaD trajectories. [project](https://www.amirbar.net/nwm/)
- **From Seeing to Experiencing** (2025) — scaling nav foundation models with RL beyond imitation. [arxiv](https://arxiv.org/pdf/2507.22028)

## 6. Vision-Language Navigation (VLN) & embodied nav VLAs
Language-conditioned navigation is converging on video-based VLA + dual-system architectures.

- **Uni-NaVid** (2024/25) — first video-based VLA unifying VLN, object-goal nav, EQA, human-following; 5 Hz, 3.6M samples. [arxiv](https://arxiv.org/abs/2412.06224)
- **InternVLA-N1** (InternRobotics, 2025) — open dual-system ("slow" reasoning + "fast" planner) nav foundation model with learned latent plans. 
- **LH-VLN** (CVPR 2025) — Long-Horizon VLN platform + benchmark + method. [github](https://github.com/HCPLab-SYSU/LH-VLN)
- **VLNVerse (2026)** — versatile embodied VLN benchmark w/ realistic sim + eval (SR/SPL leaderboard). [arxiv](https://arxiv.org/html/2512.19021v1)

## 7. Social navigation — datasets & benchmarks
Human-aware nav is benchmark-driven; these are the shared assets.

- **SCAND** (UT Austin) — large multimodal socially-compliant navigation dataset (8h+ teleop demos, LiDAR/RGB-D). The standard social-nav dataset. [emergentmind](https://www.emergentmind.com/topics/socially-compliant-navigation-dataset-scand)
- **Arena 4.0** (ICRA 2025) — ROS2 dev + benchmarking platform, generative-model env generation for human-centric nav. 
- **awesome-robot-social-navigation** — the living index the field tracks. [github](https://github.com/Shuijing725/awesome-robot-social-navigation)
- Learning-based social-nav review/benchmark, Frontiers 2025. [frontiers](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2025.1658643/full)

## 8. Whole-body / humanoid loco-manipulation planning (emerging frontier)
Fastest-growing niche: coordinating navigation + manipulation on legged/humanoid bodies.

- **WholebodyVLA (ICLR 2026)** — unified latent VLA for whole-body loco-manipulation control. [github](https://github.com/OpenDriveLab/WholebodyVLA)
- **Physically-Consistent Humanoid Loco-Manipulation w/ Latent Diffusion** (2025). [arxiv](https://arxiv.org/pdf/2504.16843)
- **OpenHLM (2026)** — empirical recipe for whole-body humanoid loco-manipulation. [arxiv](https://arxiv.org/pdf/2606.22174)

---

**Net trend:** Motion planning is bifurcating into (a) *ultra-fast classical* planners on SIMD/GPU (VAMP, cuRobo) as reliable infrastructure and (b) *learned generative* planners — diffusion trajectory models, world models, and cross-embodiment navigation/VLN foundation models (NavFoM, NWM, Uni-NaVid) — that are becoming the SAM2/DINO-style deployable checkpoints of robot navigation.
