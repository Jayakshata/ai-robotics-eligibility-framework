# Imitation Learning & Teleoperation Data — Trending Research (mid-2026)

*Scope: behavior cloning / learning-from-demonstration, diffusion & flow policies as a learning method, teleoperation rigs & data-collection pipelines. Biased to the newest work. **[2026]** flags a 2026 release/update.*

## 1. Generalist VLA policies — the models everyone fine-tunes
The center of gravity has moved from single-task BC to internet-pretrained Vision-Language-Action (VLA) policies fine-tuned on demonstrations. These are the "SAM2/DINO" of the niche.
- **[π0 (Physical Intelligence)](https://www.therobotreport.com/physical-intelligence-open-sources-pi0-robotics-foundation-model/)** — flow-matching VLA for general robot control; open-sourced Feb 2025, now the de-facto reference architecture.
- **[π0.5](https://callsphere.ai/blog/td30-rp-physical-intelligence-pi-0-5-foundation-model)** — adds open-world / cross-environment generalization without per-robot fine-tuning (2025).
- **[π*0.6 + RECAP](https://arxiv.org/abs/2511.14759)** *(Nov 2025)* — layers RL-from-experience + teleop corrections on top of BC; ~2x throughput, ~half the failure rate on espresso / laundry / box tasks. The "RL is back on top of imitation" signal.
- **[OpenVLA (7B)](https://proceedings.mlr.press/v270/kim25c.html)** — open VLA trained on 970k Open-X demos (Llama-2 + DINOv2/SigLIP); the open baseline.
- **[RDT-1B](https://proceedings.iclr.cc/paper_files/paper/2025/file/49f80e4d2471ad4f2edf4f5f1ab62339-Paper-Conference.pdf)** — 1.2B diffusion-transformer bimanual foundation model (ICLR 2025).
- **[GR00T N1 / N1.5 (NVIDIA)](https://arxiv.org/abs/2503.14734)** — open dual-system VLA for humanoids (VLM + diffusion action head); N1.5 June 2025, **GR00T 1.7 shipped into LeRobot [2026]**.
- **[GO-1 (AgiBot)](https://agibot-world.com/blog/go1)** — Vision-Language-Latent-Action (ViLLA) policy, +32% over RDT; trained on AgiBot World.
- **SmolVLA (Hugging Face, June 2025)** — small π0-style flow-matching VLA trained on community data; the accessible/edge endpoint. ([LeRobot](https://github.com/huggingface/lerobot))

## 2. Learning method: diffusion → flow matching → one-step
Diffusion Policy is still the workhorse; the frontier is [flow matching](https://www.emergentmind.com/topics/flow-matching-policies) for ~10x cheaper, real-time inference.
- **Flow-matching policies** — replace iterative denoising with straight-line ODE flows; ~10x lower latency at matched multimodality vs diffusion.
- **[VITA](https://arxiv.org/pdf/2507.13231)** (July 2025), **FlowPolicy, ActionFlow** — vision-to-action / 3D flow policies hitting 70–100% real-robot success.
- **MP1 (MeanFlow, 2025)** — 1-step action generation; pushes policies to a single forward pass. Trend = distilled / one-step policies for high-frequency control.

## 3. Action tokenization / autoregressive VLA
- **[FAST / FAST+ (Physical Intelligence, Jan 2025)](https://www.pi.website/research/fast)** — DCT+BPE frequency tokenization compressing action chunks ~10x; universal tokenizer trained on 1M sequences. Standard for autoregressive VLAs.
- **[FASTer](https://arxiv.org/abs/2512.04952)** *(Dec 2025)* — learnable neural action tokenizer + block-wise AR decoding for faster inference.

## 4. Teleoperation rigs (the ALOHA lineage)
- **[ALOHA 2 (Stanford / Google DeepMind)](https://arxiv.org/abs/2405.02292)** — sub-$20k bimanual leader-follower; the standard academic teleop rig, 1000s of demos/day.
- **[Mobile ALOHA](https://proceedings.mlr.press/v270/fu25b.html)** — whole-body teleop + mobile base for mobile manipulation. These (plus GELLO-style low-cost arms) underpin most lab demonstration data.

## 5. In-the-wild / handheld data collection (the UMI explosion)
Handheld grippers decouple data collection from the robot — the biggest hardware trend.
- **[UMI (Universal Manipulation Interface)](https://umi-gripper.github.io/)** — wrist-fisheye handheld gripper capturing end-effector trajectories in the wild; the template.
- Fast-growing variant zoo: **DexUMI, FastUMI, MV-UMI, ActiveUMI, UMI-on-Legs, UMI-on-Air, exUMI**.
- **[YUBI](https://arxiv.org/abs/2606.10244)** *(2026, bimanual dexterous)*, **[VISTA](https://arxiv.org/pdf/2606.04708)** *(2026, physics-validated UMI→VLA)*, **TacUMI** *(2026, tactile)*; **[FastUMI-100K](https://arxiv.org/pdf/2510.08022)** dataset and **[UMI-Bench 1.0](https://arxiv.org/pdf/2606.10382)** *(2026)* for reproducible eval.

## 6. Human video as passively-scalable demonstration data
Fastest-emerging data source: egocentric human video → robot policy, sidestepping the teleop bottleneck.
- **EgoMimic** — wearable egocentric video + hand tracking, co-trained with robot data.
- **[EgoDex (Apple, 2025)](https://arxiv.org/html/2505.11709v3)** — 829h / 338k demos of dexterous human manipulation via Vision Pro; largest of its kind.
- **[EgoZero](https://arxiv.org/pdf/2505.20290)** — robot learning from smart glasses; **[H-RDT](https://arxiv.org/html/2507.23523)** — human-video-enhanced bimanual.
- **[EgoVerse](https://arxiv.org/pdf/2604.07607)**, **[EgoLive](https://arxiv.org/pdf/2604.23570)**, **[HumanNet (1M hours)](https://arxiv.org/pdf/2605.06747)** — all *[2026]*, scaling human-centric video for robot learning.

## 7. Large-scale demonstration datasets
- **[Open X-Embodiment](https://www.roboticscenter.ai/en/research/best-robot-learning-datasets-2025)** — 2M+ trajectories, 22 robots; the cross-embodiment substrate.
- **[DROID](https://arxiv.org/abs/2403.12945)** — 76k in-the-wild teleop trajectories on a standardized Franka; the generalization/eval standard.
- **[AgiBot World Colosseo](https://arxiv.org/abs/2503.06669)** — 1M+ bimanual humanoid teleop trajectories; +30% over OXE pretraining.
- **Galaxea Open-World (100k)** and **FastUMI-100K** — newer diverse open datasets (2025–26).

## 8. Open-source ecosystem & real-world evaluation
- **[LeRobot (Hugging Face)](https://github.com/huggingface/lerobot)** — the "PyTorch for robot learning" hub; **[58k+ community datasets](https://www.techtimes.com/articles/317129/20260525/open-source-robotics-ai-reaches-inflection-point-lerobot-hub-surpasses-58000-datasets-one-year.htm)** *(2026, ~50x YoY)*. **[v0.6 (July 2026)](https://blogs.nvidia.com/blog/hugging-face-lerobot-models-frameworks-open-robotics/)** adds world-model policies (**VLA-JEPA, FastWAM, LingBot-VA**), reward models, human-correction rollout tooling, and NVIDIA Isaac GR00T/Teleop integration.
- **[RoboArena (CoRL 2025)](https://arxiv.org/abs/2506.18123)** — distributed, double-blind real-world VLA evaluation on DROID; **[RobotArena∞](https://arxiv.org/html/2510.23571v1)** (real-to-sim) and **[RoboChallenge](https://arxiv.org/pdf/2510.17950)** — the field's answer to unreliable in-lab eval.

---

**Net trend:** the niche is consolidating on internet-pretrained VLA policies fine-tuned from ever-larger teleop + handheld-UMI + human-video demonstration corpora, with flow-matching (now one-step) action heads, DCT action-chunk tokenization for autoregressive variants, and — the newest late-2025/2026 shift — RL and world-models layered on top of behavior cloning so robots learn from their own experience, all increasingly plumbed through the open LeRobot stack.
