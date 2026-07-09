# Robot Foundation Models & Vision-Language-Action (VLA) Models — Trending Research (mid-2026)

Snapshot of the named models, methods, datasets and benchmarks people actively build on, biased to 2025–2026. **2026 releases flagged 🆕.** These are the field's "SAM2/DINO equivalents."

## 1. Foundation VLAs — the open-weight backbones

- **OpenVLA** (Stanford/Berkeley, 2024) — 7B LLaMA-2 + DINOv2/SigLIP, trained on Open X-Embodiment; still the default open baseline & LoRA-tunable reference. [arxiv](https://arxiv.org/abs/2503.14734) / [SVRC](https://www.roboticscenter.ai/research/foundation-models-robot-manipulation-2025)
- **π0 / π0.5 / π0.6** (Physical Intelligence) — π0 (late-2024) VLM (PaliGemma) + flow-matching action expert; **π0.5** (Apr 2025) adds open-world generalization via co-training + "knowledge insulation"; **π0.6 🆕** (Nov 2025) learns from experience with RL (RECAP), boosting real-world success/throughput. [π0.5 arxiv](https://arxiv.org/html/2504.16054v1) / [π0.6 card](https://website.pi-asset.com/pi06star/PI06_model_card.pdf) / [openpi](https://github.com/Physical-Intelligence/openpi)
- **SmolVLA** (Hugging Face, Jun 2025) — 450M compact, flow-matching, runs on consumer/on-device hardware; the "affordable VLA." [arxiv](https://arxiv.org/pdf/2506.01844)
- **RT-2 / RT-2-X → Octo** (2023–24) — the ancestry: RT-2 first cast actions as LM tokens; Octo added an open cross-embodiment diffusion policy. [SVRC](https://www.roboticscenter.ai/research/foundation-models-robot-manipulation-2025)
- **New open challengers 🆕**: **WALL-OSS-0.5** (X Square Robot, May 2026, strong zero-shot manipulation), **LingBot-VLA** (Ant Group, Jan 2026, flow-matching on 20k hrs bimanual teleop across 9 embodiments), **EO-1**, **Qwen-RobotManip**, **Hy-Embodied-0.5**. [WALL-OSS](https://www.prnewswire.com/news-releases/x-square-robot-open-sources-wall-oss-0-5--bringing-pretrained-vla-performance-closer-to-post-training-levels-302784293.html) / [LingBot](https://www.marktechpost.com/2026/01/29/ant-group-releases-lingbot-vla-a-vision-language-action-foundation-model-for-real-world-robot-manipulation/)

## 2. Dual-system architectures (slow VLM planner + fast action expert)

The consolidating design: a heavyweight VLM re-plans at 5–10 Hz while a lightweight diffusion/flow expert emits action chunks at 50–100 Hz.

- **NVIDIA Isaac GR00T** — **N1** (Mar 2025) first open humanoid foundation model (System 2 VLM + System 1 diffusion transformer); **N1.5/N1.6/N1.7 🆕** add EgoScale human-video pretraining & better language-following; **GR00T N2 🆕** (based on **DreamZero**) roughly doubles new-task success and tops RoboArena/MolmoSpaces. [GR00T N1.5](https://research.nvidia.com/labs/gear/gr00t-n1_5/) / [N2/newsroom](https://nvidianews.nvidia.com/news/nvidia-expands-open-model-families-to-power-the-next-wave-of-agentic-physical-and-healthcare-ai)
- **Gemini Robotics** (Google DeepMind) — VLA + **Gemini Robotics-ER** (embodied reasoning/planning), Mar 2025; **On-Device** (Jun 2025) fine-tunes from 50–100 demos; **Gemini Robotics 1.5 + ER 1.6 🆕** add agentic "think-before-act", tool-calling, sharper spatial reasoning. [DeepMind](https://deepmind.google/models/gemini-robotics/) / [ER 1.6](https://deepmind.google/blog/gemini-robotics-er-1-6/)
- **Figure Helix** (Feb 2025) — commercial dual-system VLA driving whole-upper-body control on Figure 03 humanoids; **Tesla Optimus Gen 3** leverages FSD nets. [Helix](https://humanoid.guide/figure-helix/)

## 3. Action representations — the tokenization arms race

- **FAST / FAST+** (Physical Intelligence, Jan 2025) — DCT frequency-space action tokenizer; universal tokenizer trained on 1M sequences; makes autoregressive VLAs viable for high-frequency dexterous tasks. [pi](https://www.pi.website/research/fast)
- **FASTer 🆕** (Dec 2025), **ActionCodec 🆕** (2026), **OMNISAT**, **BEAST** — learnable/RVQ and B-spline tokenizers for smoother, more compact action chunks. [FASTer](https://arxiv.org/abs/2512.04952)
- **Flow-matching & discrete-diffusion action heads** are the trend winners over autoregressive quantization: **Discrete Diffusion VLA, dVLA, DIVA, Unified Diffusion VLA** generate action chunks (and sometimes future frames) in parallel. [ICLR'26 survey](https://mbreuss.github.io/blog_post_iclr_26_vla.html)

## 4. Reasoning, embodied CoT & LLM task planners

- **ECoT (Embodied Chain-of-Thought)** — reason in text/space before emitting actions; the template most 2025–26 "reasoning VLAs" extend. [ECoT'26](https://arxiv.org/pdf/2606.03784)
- **MolmoAct / MolmoAct 2 🆕** (Allen AI) — "action reasoning model" using depth/spatial grounding; **ThinkAct** (NeurIPS 2025) reinforced visual-latent planning; **Embodied-R1** pointing-VLM + RL on Embodied-Points-200K; **InstructVLA** (instruction-tuning + MoE); **Cosmos-Reason1** (physical-commonsense reasoning). [ThinkAct](https://jasper0314-huang.github.io/assets/pdf/neurips25_thinkact.pdf)
- LLM planners have moved from **SayCan / Code-as-Policies** toward closed-loop, feedback-driven hierarchical planners (BrainBody-LLM, RoboAgent) — now often folded directly into the VLA's System-2. [review](https://arxiv.org/pdf/2510.23357)

## 5. World models & world-action models (WAMs)

- **NVIDIA Cosmos** (CES 2025) — world foundation models (Predict/Transfer/Reason) for synthetic data; **Cosmos 3 🆕** (Jun 2026) omnimodal, the backbone for **World-Action Models** and **Cosmos Policy**. [Cosmos](https://www.nvidia.com/en-us/ai/cosmos/) / [WAMs](https://developer.nvidia.com/blog/pretrained-to-imagine-fine-tuned-to-act-the-rise-of-world-action-models/)
- **DeepMind Genie 3** (2025) — real-time interactive 3D world model (24 fps) for embodied training environments.
- **GR00T-Dreams / DreamZero** and **WMPO** (world-model policy optimization, Nov 2025) — "dreamed" rollouts generate training data and RL signal (GR00T N1.5 trained in 36 hrs vs ~3 months manual). [WMPO](https://arxiv.org/pdf/2511.09515)

## 6. Datasets

- **Open X-Embodiment (OXE)** — 22 robots / 21 labs, 527 skills, 2M+ trajectories (RLDS); the ImageNet of manipulation.
- **DROID** — 76k in-the-wild Franka trajectories, 564 scenes.
- **AgiBot World** — 1M+ trajectories on 100+ G1 bimanual humanoids (~2,400 hrs). [RoboMIND HF](https://huggingface.co/datasets/x-humanoid-robomind/RoboMIND)
- **RoboMIND / RoboMIND 2.0** — 107k demos, 479 tasks, 4–6 embodiments.
- **Human-video corpora**: **EgoDex / EgoScale**, **RoboCasa365** (365 kitchen tasks, 2k+ scenes), **Embodied-Points-200K** — human egocentric video as the scaling bridge.

## 7. Benchmarks & evaluation

- Sim benches **LIBERO** (saturating ~95–98%), **CALVIN**, **SIMPLER**, **RLBench** are giving way to real-world/open-ended evaluation: **RoboArena** (Elo-style real-robot arena; Apr 2026 snapshot: DreamZero 1750 > π0.5 1622), **MolmoSpaces**, **RobotArena ∞** (real-to-sim), and the AI2 **VLA leaderboard**. [ICLR'26 survey](https://mbreuss.github.io/blog_post_iclr_26_vla.html) / [RoboArena](https://github.com/robo-arena/roboarena)
- Scale signal: **164 VLA submissions at ICLR 2026.**

---

**Net trend:** the field is consolidating on a *dual-system VLA* — a reasoning VLM plus a flow-matching action expert — pretrained on pooled cross-embodiment + human-video data, increasingly sharpened by RL and world-model "dreams," and judged on real-world arenas (RoboArena) as sim benchmarks saturate.
