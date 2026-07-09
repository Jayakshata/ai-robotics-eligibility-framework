# World Models & Predictive Models for Robotics — Trending Research (mid-2026)

The named world/dynamics models, systems, and datasets people are actively building on in 2024-2026. **[2026]** flags 2026 releases. Biased toward newest.

---

## 1. World Foundation Models — the Cosmos anchor (the "SAM/DINO" of physical AI)
- **NVIDIA Cosmos** (Jan 2025) — the platform that named the category: general-purpose world foundation models (WFMs) for Physical AI, forkable into robot/AV world models. The reference stack everyone benchmarks against. https://arxiv.org/abs/2501.03575
- **Cosmos-Predict / -Transfer / -Reason** (major release Mar 2025) — Predict = future-state video from text/video/frames; Transfer = sim→real photoreal augmentation; Reason = physics-aware VLM filter. Adopted by 1X, Figure, Agility, Skild. https://nvidianews.nvidia.com/news/nvidia-announces-major-release-of-cosmos-world-foundation-models-and-physical-ai-data-tools
- **Cosmos-Predict 2.5 / -Transfer 2.5** (Oct 2025) — unified 2.5 line, better long-tail scenario fidelity and multi-control conditioning. https://github.com/nvidia-cosmos/cosmos-predict2.5
- **[2026] Cosmos 3** (Jun 2026) — open "omnimodel": natively generates text, image, video, ambient audio *and actions* with leading physics accuracy; collapses training/eval cycles months→days. The current frontier. https://nvidianews.nvidia.com/news/nvidia-launches-cosmos-3-the-open-frontier-foundation-model-for-physical-ai
- **[2026] Cosmos Policy** (arXiv 2601.16163) — fine-tunes the Cosmos video model directly into a visuomotor policy/planner; world model *becomes* the controller. https://www.therobotreport.com/nvidia-adds-cosmos-policy-world-foundation-models/

## 2. Interactive / Playable World Models — neural game engines
- **Genie 2** (DeepMind, Dec 2024) — foundation world model that turns a single image into a minutes-long, action-playable 3D environment; seeded the "trainable-environment" thesis.
- **Genie 3** (DeepMind, Aug 2025) — real-time (24 fps, 720p) text-promptable interactive worlds with emergent physics, coherent for minutes; the flagship. https://deepmind.google/blog/genie-3-a-new-frontier-for-world-models/
- **[2026] Project Genie** (Jan 2026) — Genie 3 productized to US subscribers (generate→explore→remix); first broad public access to a real-time world model. https://www.theregister.com/2026/01/29/googles_project_genie_ai
- **[2026] Matrix-Game 3.0** (arXiv 2604.08995) — real-time *streaming* interactive world model with long-horizon memory; open-weights answer to Genie 3. https://arxiv.org/pdf/2604.08995
- **Mirage 2** (Dynamics Labs) / **Oasis, GameNGen** lineage — competing neural-game-engine WMs; predict every pixel from action history, no game engine.

## 3. JEPA & Latent Predictive World Models — planning without pixels
- **V-JEPA 2 + V-JEPA 2-AC** (Meta, Jun 2025) — self-supervised video WM on 1M+ hrs; the **AC** variant fine-tunes on just 62 hrs of Droid robot video to enable *zero-shot* pick-place via MPC in ~16 s/step (vs ~4 min for diffusion WMs). LeCun's latent-planning bet. https://arxiv.org/abs/2506.09985
- **DINO-WM** (NYU, Nov 2024; ICML 2025) — world model over *frozen DINOv2 patch features*, no reconstruction; zero-shot goal-reaching via MPC, beats DreamerV3/TD-MPC2 on Push-T/rope. The reconstruction-free template. https://arxiv.org/abs/2411.04983
- **TD-MPC2** (2024) — decoder-free latent WM + MPC; the standard MBRL baseline for continuous control.

## 4. Imagination-Based Planning — the Dreamer / model-based-RL lineage
- **DreamerV3** (Nature 2025) — RSSM latent WM; learns policies purely from imagined rollouts, one config across 150+ tasks, first to mine diamonds in Minecraft from scratch. The MBRL anchor. https://www.emergentmind.com/topics/dreamerv3
- **DiWA / World4RL / World-Gymnast** (2025) — offline/imagined RL that adapts diffusion policies *inside* a frozen world model, beating SFT and software sims.
- **[2026] DreamPlan** (arXiv 2603.16860) — RL fine-tuning of vision-language planners entirely within an action-conditioned video WM (deformable manipulation).
- **DreamerNav / DreamerV3-XP** (2025) — navigation + exploration-boosted Dreamer variants for real robots.

## 5. Robot World-Action Models — the video-WM-as-policy convergence
- **Genie Envisioner** (AgiBot, Aug 2025) — unified platform: **GE-Base** (instruction-conditioned video diffusion) + **GE-Act** (flow-matching action decoder) + **GE-Sim** (action-conditioned neural simulator) + **EWMBench**. The most complete open WM-for-manipulation stack. https://arxiv.org/abs/2508.05635
- **WorldVLA** (2025) — autoregressive model that *unifies* a VLA and an action world model in one transformer.
- **WMPO** (Nov 2025) — world-model-based policy optimization for VLAs (imagined on-policy RL). https://arxiv.org/pdf/2511.09515
- **Ctrl-World** (Oct 2025) — controllable generative WM for closed-loop manipulation rollouts. https://arxiv.org/html/2510.10125v1
- **[2026] NVIDIA GR00T N2 / DreamZero** — humanoid foundation model on a new world-action-model architecture; ~2x VLA task success, #1 on RoboArena. https://developer.nvidia.com/blog/pretrained-to-imagine-fine-tuned-to-act-the-rise-of-world-action-models/
- **[2026] OSCAR / LaWAM / MotuBrain** (arXiv 2606.04463 / 2606.15768 / 2604.27792) — omni-embodiment & latent world-action models; the emerging "WAM" class.

## 6. Synthetic-Data Generation & Neural Simulators
- **DreamGen / Isaac GR00T-Dreams** (NVIDIA GEAR, Computex 2025) — generates "neural trajectories" via Cosmos-Predict2 + inverse-dynamics; 780K trajectories in 11 hrs (~6,500 human-demo hrs), ~10x data multiplier. The headline synthetic-data play. https://github.com/nvidia/gr00t-dreams
- **Cosmos-Transfer** — sim→real photoreal augmentation to close the domain gap for policy training. https://developer.nvidia.com/blog/enhance-robot-learning-with-synthetic-trajectory-data-generated-by-world-foundation-models/
- **Genesis** (Dec 2024) — generative *universal* physics engine: language-prompted scene/task/policy synthesis, differentiable, 10-80x faster than prior GPU sims. https://genesis-embodied-ai.github.io/
- **[2026] NVIDIA Isaac Sim / Isaac Lab** (arXiv 2606.03551) — the GPU simulation backbone WMs increasingly co-train with. https://arxiv.org/pdf/2606.03551

## 7. Driving World Models (adjacent, large)
- **GAIA-2** (Wayve, Mar 2025) — controllable multi-view generative driving WM; ego-dynamics + agent + map conditioning, multi-camera consistency. https://arxiv.org/html/2503.20523v1
- **Vista / DriveDreamer** (2024-25) — high-fidelity, action-controllable driving video generation; the open baselines.
- **[2026] NVIDIA OmniDreams** (arXiv 2606.03159) — real-time generative WM for *closed-loop* AV simulation. https://arxiv.org/pdf/2606.03159
- **[2026] Metis** (arXiv 2606.15869) — generalizable, efficient world-action model for driving + urban navigation.

## 8. Benchmarks & Surveys (the scoreboard)
- **WorldModelBench** (CVPR'25 workshop) — the community forum/benchmark for WM evaluation. https://worldmodelbench.github.io/
- **[2026] WorldArena / WorldArena 2.0** (arXiv 2602.08971 / 2605.17912) — unified benchmark for perception *and* functional utility of embodied WMs, across modalities/platforms.
- **EWMBench** (2025) — visual fidelity + physical consistency + instruction-action alignment (from Genie Envisioner).
- **[2026] "World Model for Robot Learning: A Comprehensive Survey"** (arXiv 2605.00080) — the reference taxonomy: WMs for policy, WMs as simulators, robotic video generation. https://arxiv.org/html/2605.00080v1

---

**Net trend:** World models are consolidating into a few *action-conditioned* foundation stacks — video-generative (Cosmos, Genie Envisioner), latent/JEPA (V-JEPA 2, DINO-WM), and interactive-neural-engine (Genie 3) — that increasingly serve triple duty as **synthetic-data engines, in-imagination RL/MPC planners, and the policy itself** (Cosmos Policy, GR00T world-action models), collapsing the old sim↔data↔policy boundary.
