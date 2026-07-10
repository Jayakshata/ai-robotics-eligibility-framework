# Manipulation & Dexterous Grasping — Trending Research (mid-2026)

*Scope: grasp synthesis & 6-DoF grasp detection; contact-rich, dexterous, in-hand & bimanual manipulation; imitation / diffusion / flow-matching policies; VLA fine-tuning for manipulation; tactile integration; benchmarks & reproducible real-world eval. Bias toward 2025–2026; **2026** releases flagged `🆕`. Vendor/self-reported numbers labelled as such.*

> **Backfilled 2026-07-10 by re-research.** This provenance file for `manipulation-and-grasping.md` §7 was never saved; it is a **fresh re-research pass on 2026-07-10, not a recovery of the original**. Every named system below was checked against a primary or credible secondary source (arXiv, project page, or vendor blog). Where mid-2026 evidence diverges from the profile's §7, it is called out in **§ Provenance, corrections & caveats** at the bottom — the profile itself was not edited.

---

## 1. VLA foundation models (the generalist-policy race)
The center of gravity: a pretrained VLM backbone + an action head, fine-tuned into a language-conditioned generalist manipulation policy.
- **Physical Intelligence π0** (Oct 2024) — reference flow-matching VLA; VLM backbone + a flow-matching "action expert" emitting 50 Hz action chunks across 7 embodiments. The template everyone forked. https://www.pi.website/blog/pi0
- **π0.5** (Apr 2025) — adds open-world generalization via a two-stage inference: predict a high-level language subtask, then the low-level flow-matching action. https://www.physicalintelligence.company/blog/pi05
- **🆕 π*0.6 + RECAP** (Nov 2025, arXiv 2511.14759) — a VLA that *learns from experience*: RECAP = RL with Experience & Corrections via Advantage-conditioned Policies (demos + teleop corrections + autonomous RL). *Vendor-reported:* ~2× throughput and >2× fewer failures; 18 h espresso runs, 50 novel laundry items, 59 factory boxes. Lineage **π0 → π0.5 → π*0.6** confirmed. https://arxiv.org/abs/2511.14759
- **Gemini Robotics 1.5 + Gemini Robotics-ER 1.5** (Oct 2025, arXiv 2510.03342) — leading *closed* "think-before-acting" stack; a dual setup where ER 1.5 does embodied reasoning/planning and the VLA (1.5) executes, with cross-embodiment Motion Transfer. https://arxiv.org/abs/2510.03342
- **🆕 Gemini Robotics-ER 1.6** (Apr 2026) — upgraded embodied-reasoning model (pointing, counting, success detection, gauge reading via Boston Dynamics Spot); served through the Gemini API. Note: it is the **ER** model that reached 1.6; the acting VLA is still "1.5". https://deepmind.google/blog/gemini-robotics-er-1-6/
- **NVIDIA GR00T** — open humanoid VLA, dual-system (VLM System-2 + diffusion-transformer System-1). Shipped lineage **N1 (Mar 2025, arXiv 2503.14734) → N1.5 → 🆕 N1.6 (15 Dec 2025) → N1.7 (GitHub HEAD)**. https://research.nvidia.com/labs/gear/gr00t-n1_6/ · https://github.com/NVIDIA/Isaac-GR00T  *(The profile's "N2 / world-action model" is not attested at an NVIDIA primary source — see caveats §.)*
- **OpenVLA / OpenVLA-OFT** — the open workhorse ("the DINO of VLAs"). OFT (arXiv 2502.19645, RSS 2025) is an Optimized Fine-Tuning recipe: parallel decoding + action chunking + continuous actions + L1 regression → LIBERO avg 76.5% → **97.1%**, ~26× faster action generation. https://openvla-oft.github.io/ · https://github.com/openvla/openvla
- **🆕 MolmoAct / MolmoAct 2** (Ai2; v1 arXiv 2508.07917 Aug 2025, v2 arXiv 2605.02881 May 2026) — fully-open "Action Reasoning Model" that reasons in 3D before acting; embodied-reasoning backbone + flow-matching action expert. *Ai2-reported:* MolmoAct 2 "beats π0.5" on internal benchmarks, ~37× faster than v1, ships with a 720-hour open bimanual YAM dataset. https://allenai.org/blog/molmoact2
- **RDT-1B** — diffusion-transformer foundation model for bimanual manipulation; a common open baseline (e.g. in OpenVLA-OFT comparisons). *(confirmed as a real model / baseline)*
- **🆕 ByteDance GR-3** (Jul 2025, arXiv 2507.15493) — 4B mixture-of-transformers VLA with a flow-matching DiT action module; strong on long-horizon, bimanual, deformable-object tasks. https://arxiv.org/abs/2507.15493
- **SmolVLA** (Jun 2025, arXiv 2506.01844) — 450M edge VLA (SmolVLM-2 + flow-matching transformer), trainable on one GPU; outperforms larger VLAs / ACT on LIBERO + Meta-World. https://huggingface.co/blog/smolvla
- **Figure Helix** (Feb 2025) — closed humanoid VLA claiming first high-rate continuous control of the full humanoid upper body (fingers/wrists/torso) from language; ~7B VLM + 80M control transformer. https://www.figure.ai/news/helix
- **Toyota LBM on Atlas** (Aug 2025) — TRI + Boston Dynamics Large Behavior Model driving the whole Atlas humanoid (hands and feet treated alike) for long-horizon loco-manipulation. https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/

## 2. Action representation & policy heads
The tokenized-autoregressive vs continuous-flow debate, plus the diffusion foundation.
- **Diffusion Policy** (Chi et al., RSS 2023, arXiv 2303.04137) — represents the visuomotor policy as conditional action denoising; the foundational learned action head and near-universal baseline. https://arxiv.org/abs/2303.04137
- **3D Diffusion Policy (DP3)** (arXiv 2403.03954) — diffusion policy on a compact point-cloud 3D representation; strong sample efficiency (tasks from ~10 demos). https://arxiv.org/abs/2403.03954
- **flow-matching policies** — the successor trend: real-time continuous action generation now dominant in π0/π0.5, GR-3, SmolVLA, MolmoAct 2. *(GR00T's System-1 head is a diffusion transformer, adjacent but not strictly flow matching.)*
- **FAST / FAST+** (Jan 2025, arXiv 2501.09747) — Physical Intelligence's Frequency-space Action Sequence Tokenization for autoregressive VLAs; FAST+ is a universal tokenizer trained on 1M real action sequences. https://www.pi.website/research/fast
- **LAPA** (Latent Action Pretraining from videos) — unsupervised VLA pretraining with VQ-VAE latent actions, no ground-truth action labels; uses action-free video. https://latentactionpretraining.github.io/

## 3. Reasoning + manipulation
- **Embodied Chain-of-Thought (ECoT)** (arXiv 2407.08693) — trains a VLA to reason over plan/subtask/motion/bounding-boxes before acting; **+28% absolute** success on OpenVLA with no extra robot data. https://embodied-cot.github.io/
- **Gemini Robotics-ER** (1.5 → 🆕 1.6) — the embodied-reasoning "planner brain" that calls a VLA to execute (see §1).
- **🆕 RoboBrain 2.0 → 2.5** (BAAI; 2.0 arXiv 2507.02029, 3B/7B/32B open) — open embodied planner unifying perception/reasoning/planning; 2.5 adds depth-aware 3D spatial reasoning + dense temporal value estimation. https://huggingface.co/BAAI/RoboBrain2.0-32B *(2.5 confirmed via secondary sources this pass.)*

## 4. Data engines (scaling demonstrations)
- **UMI (Universal Manipulation Interface)** (arXiv 2402.10329) — handheld-gripper, embodiment-agnostic in-the-wild data collection without robots. https://umi-gripper.github.io/
- **DexUMI** (May 2025, arXiv 2505.21864) — human hand as the interface via a wearable exoskeleton + robot-hand inpainting; ~86% task success bridging the hand embodiment gap.
- **🆕 YUBI** (Jun 2026, arXiv 2606.10244) — yielding bidigital UMI-style interface; the *largest* UMI-based bimanual dexterous dataset: **8,434 h, 1.20M episodes, 119 tasks**, one policy on UR/Franka/Toyota ELEY. https://arxiv.org/abs/2606.10244
- **ALOHA / Mobile ALOHA + ACT** (Stanford, 2023–24) — low-cost bimanual teleop; ACT (Action Chunking with Transformers) predicts ~100-step action chunks from ~50 demos. The reference bimanual imitation stack. https://mobile-aloha.github.io/
- **MimicGen / DexMimicGen** (DexMimicGen arXiv 2410.24185) — automated demo multiplication: DexMimicGen generated **>20K bimanual-dexterous demos from ~60 source demos** across 9 tasks. https://dexmimicgen.github.io/
- **Egocentric-video scaling** — **EgoDex** (Apple, arXiv 2505.11709; 829 h video + 3D hand tracking via Vision Pro), **EgoMimic** (human+robot co-training), **DexWild** (in-the-wild human hand video → robot). https://machinelearning.apple.com/research/egodex-learning-dexterous-manipulation
- **Substrate corpora** — **Open X-Embodiment** (~1.4M pooled trajectories), **DROID** (crowd-sourced Franka scenes), **🆕 AgiBot World** (arXiv 2503.06669; million-scale, long-horizon, visuo-tactile humanoid data). https://agibot-world.com/

## 5. Tactile / touch foundation models
Touch becoming a first-class modality.
- **Sparsh** (Meta FAIR, arXiv 2410.24090) — self-supervised touch representation across DIGIT/GelSight ("the DINO of touch"), pretrained on 460K+ tactile images; **Sparsh-X** extends to multisensory touch. https://github.com/facebookresearch/sparsh
- **Digit 360** (Meta) — artificial-fingertip sensor (>8M taxels, force/heat/multimodal) with on-device compute; part of Meta's open tactile hardware line. https://ai.meta.com/blog/fair-robotics-open-source/
- **AnyTouch → 🆕 AnyTouch 2** (v1 ICLR 2025, arXiv 2502.12191; v2 Feb 2026, arXiv 2602.09617) — unified cross-sensor visuo-tactile representation (TacQuad dataset); v2 adds dynamic, force-aware perception. Related cross-sensor work: **T3**, **UniTouch**. https://arxiv.org/abs/2602.09617
- **Visuo-tactile policies** — **3D-ViTac** (arXiv 2410.24091; fuse dense tactile + vision into a 3D field for diffusion-policy imitation), **ManiWAV** (learn manipulation from in-the-wild contact audio-visual data). https://arxiv.org/abs/2410.24091

## 6. Dexterous & in-hand manipulation
The RL-sim2real lineage from single-object rotation to vision-based humanoid dexterity.
- **Dactyl** (OpenAI, 2018–19) — the canonical in-hand reorientation (Rubik's cube) sim2real result; the ancestor everyone cites.
- **AnyRotate** (arXiv 2405.07391) — multi-axis, gravity-invariant in-hand rotation with dense sim-to-real touch.
- **DextrAH-G → DextrAH-RGB** (NVIDIA; arXiv 2407.02274, 2412.01791) — arm-hand grasping via RL + geometric fabrics + teacher-student; DextrAH-RGB claims first robust sim2real of an end-to-end RGB dexterous grasping policy.
- **🆕 Vision-based dexterity "recipe" (Lin et al.)** (arXiv 2502.20396, **CoRL 2025**) — a reproducible sim-to-real RL recipe (auto real-to-sim tuning, contact/object rewards, policy distillation) for grasp-reach / box-lift / bimanual handover on humanoid hands. https://toruowo.github.io/recipe/

## 7. Grasp synthesis & 6-DoF grasp detection
- **AnyGrasp** (Fang et al., IEEE T-RO 2023) — generalist dense 6/7-DoF grasp perception robust to sensor noise; the standard grasp-detection baseline. https://dl.acm.org/doi/10.1109/TRO.2023.3281153
- **🆕 GraspGen** (NVIDIA, Jul 2025, arXiv 2507.13097) — Diffusion-Transformer grasp generator + discriminator on SE(3), trained on Objaverse; open **~53M-grasp** simulated dataset (57M across three grippers). *Paper-reported:* 81.3% real success (UR10 + Robotiq). **GraspGen-X** (2026) adds cross-embodiment. https://graspgen.github.io/
- **DexGraspNet 2.0** (arXiv 2410.23004) — generative dexterous grasping in large-scale synthetic cluttered scenes.
- **DexGraspVLA** — hierarchical VLA for language-guided dexterous grasping (VLM planner + diffusion low-level controller). https://dexgraspvla.github.io/

## 8. Equivariant / geometric methods
Symmetry for extreme sample efficiency.
- **EquiBot** (arXiv 2407.01479) — SIM(3)-equivariant diffusion policy invariant to scale/rotation/translation; strong data efficiency without augmentation. https://arxiv.org/abs/2407.01479
- **Equivariant Diffusion Policy** (ICLR 2025) — bakes domain symmetry into the denoiser for better sample efficiency/generalization.
- **RiEMann** (arXiv 2403.19460) — near-real-time SE(3)-equivariant manipulation directly from scene point clouds, no segmentation, 5–10 demos. https://arxiv.org/abs/2403.19460

## 9. Sim, real2sim & reproducible evaluation
- **RoboCasa → 🆕 RoboCasa365** (robosuite/MuJoCo generative sim; RoboCasa365 arXiv 2603.04356, released 18 Feb 2026: 365 tasks, 2,500+ kitchens, 2,200+ h demos). https://robocasa.ai/
- **Gaussian-splatting real2sim** — **RoboGSim** (arXiv 2411.11839; real2sim2real 3DGS simulator, zero-shot to real). *(The profile also lists "Digital Cousins" here — a real real2sim asset-retrieval method, but it is not itself Gaussian-splatting-based.)*
- **GPU sim substrate** — **Isaac Lab / Isaac Sim**, **MuJoCo Playground** (MJX, arXiv 2502.08844), **Genesis** (generative Pythonic engine, Dec 2024), **🆕 Newton** (NVIDIA + Google DeepMind + Disney; GPU-accelerated *differentiable* engine on Warp + OpenUSD + MuJoCo-Warp, Linux Foundation, Sep 2025). https://developer.nvidia.com/newton-physics · https://playground.mujoco.org/
- **Reproducible real-world eval** — **RoboArena** (arXiv 2506.18123; distributed, double-blind, crowd-sourced pairwise policy eval on DROID across 7 universities — "Chatbot Arena for policies") and **SIMPLER** (simulated eval aligned to real robots). https://arxiv.org/abs/2506.18123

## 10. Counter-signals & honest failure modes
Where the field is honest about what is *not* working — treat every vendor/self-reported success rate above as vendor-reported until independently reproduced.
- **Rodney Brooks — "Why Today's Humanoids Won't Learn Dexterity"** (Sep 2025) — argues video-only imitation cannot reach human dexterity because tactile data is essentially absent (humans have ~17,000 hand touch receptors and no medium to record/share touch); "more than ten years away from the first profitable deployment of humanoid robots even with minimal dexterity." The single most credible skeptical anchor. https://rodneybrooks.com/why-todays-humanoids-wont-learn-dexterity/
- **Ken Goldberg — the "100,000-year data gap"** (2025) — real-world manipulation lacks an internet-scale corpus, so robot skill cannot bootstrap the way LLMs did; tempers the "just scale demos" thesis. https://citris-uc.org/citris-researcher-publishes-papers-on-reality-of-humanoid-robots/
- **Scientific American — "Why Humanoid Robots and Embodied AI Still Struggle in the Real World"** (2025) — reality-check on generalization, robustness, and staged demos. https://www.scientificamerican.com/article/why-humanoid-robots-and-embodied-ai-still-struggle-in-the-real-world/
- **The eval-honesty movement itself is a counter-signal.** RoboArena and SIMPLER exist *because* centralized/simulated and vendor "cherry-picked" numbers overstate real-world performance; out-of-the-box π0-class models report only ~40% average task progress on hard unseen tasks in third-party reviews. Sim-eval ≠ real-eval, and leaderboard rank ≠ deployment reliability.

---

**Net trend:** manipulation is converging on **continuous chunked action generation** (flow matching), **foundation-model pretraining** on pooled + human-video + sim-multiplied data, **touch as a first-class modality**, and **reproducible real-world eval** (RoboArena) — while a credible skeptical camp (Brooks, Goldberg) insists the tactile-data and real-data gaps make robust dexterity a >10-year problem. Several 2026 items are fresh preprints; vendor benchmark claims are vendor-reported.

## Provenance, corrections & caveats
- **CONTRADICTED / STALE — "GR00T N2 (world-action model)".** As of mid-2026 the shipped/named lineage is **N1 → N1.5 → N1.6 (15 Dec 2025, GEAR page) → N1.7 (GitHub HEAD)**, all described by NVIDIA as an open humanoid **VLA**. NVIDIA does promote **"world-action models"** as a next paradigm, but its own primary blog *classifies GR00T N1 as a VLM-based VLA, not a WAM*, and never names a "GR00T N2." "GR00T N2" surfaces only on low-credibility SEO blogs. The sibling `locomotion.trending.md` already lists the correct "N1 → N1.5 → N1.6" — the manipulation profile's "N2" is internally inconsistent with it. Sources: https://research.nvidia.com/labs/gear/gr00t-n1_6/ · https://developer.nvidia.com/blog/pretrained-to-imagine-fine-tuned-to-act-the-rise-of-world-action-models/ · https://github.com/NVIDIA/Isaac-GR00T
- **Vendor-reported labels applied:** π*0.6 (espresso/laundry/box throughput), MolmoAct 2 ("beats π0.5", 37×), GR00T N1.6 ("outperforms N1.5"), GraspGen (81.3%), Figure Helix capability claims — all self/vendor-reported.
- **Minor imprecisions (not fabrications):** AnyGrasp actually emits **7-DoF** grasps (commonly shorthand'd "6-DoF"); "flow-matching dominant in … GR00T" — GR00T's action head is a **diffusion transformer**, adjacent to but not strictly flow matching; "Digital Cousins" is real real2sim but not Gaussian-splatting-based; LIBERO is **NeurIPS 2023** Datasets & Benchmarks (not 2024).
- **Confirmed-via-secondary this pass (lower confidence):** RoboBrain **2.5** (2.0 is primary-confirmed), DexWild, EgoMimic, Digit **Plexus** (Digit **360** is primary-confirmed).

## Sources
Fetched directly this pass (WebFetch):
- https://research.nvidia.com/labs/gear/gr00t-n1_6/
- https://developer.nvidia.com/blog/pretrained-to-imagine-fine-tuned-to-act-the-rise-of-world-action-models/
- https://developer.nvidia.com/isaac/gr00t

Primary / credible sources relied on (surfaced via search):
- π0 https://www.pi.website/blog/pi0 · π0.5 https://www.physicalintelligence.company/blog/pi05 · π*0.6/RECAP https://arxiv.org/abs/2511.14759
- Gemini Robotics 1.5 https://arxiv.org/abs/2510.03342 · Gemini Robotics-ER 1.6 https://deepmind.google/blog/gemini-robotics-er-1-6/
- GR00T N1 https://arxiv.org/abs/2503.14734 · N1.6 https://huggingface.co/nvidia/GR00T-N1.6-3B · Isaac-GR00T (N1.7) https://github.com/NVIDIA/Isaac-GR00T
- OpenVLA https://github.com/openvla/openvla · OpenVLA-OFT https://openvla-oft.github.io/ (arXiv 2502.19645)
- MolmoAct https://allenai.org/blog/molmoact (arXiv 2508.07917) · MolmoAct 2 https://allenai.org/blog/molmoact2 (arXiv 2605.02881)
- GR-3 https://arxiv.org/abs/2507.15493 · SmolVLA https://huggingface.co/blog/smolvla (arXiv 2506.01844) · Figure Helix https://www.figure.ai/news/helix · Toyota/BD LBM (Atlas) https://bostondynamics.com/blog/large-behavior-models-atlas-find-new-footing/
- Diffusion Policy https://arxiv.org/abs/2303.04137 · DP3 https://arxiv.org/abs/2403.03954 · FAST https://www.pi.website/research/fast (arXiv 2501.09747) · LAPA https://latentactionpretraining.github.io/
- ECoT https://embodied-cot.github.io/ (arXiv 2407.08693) · RoboBrain 2.0 https://huggingface.co/BAAI/RoboBrain2.0-32B (arXiv 2507.02029)
- UMI https://umi-gripper.github.io/ (arXiv 2402.10329) · DexUMI arXiv 2505.21864 · YUBI https://arxiv.org/abs/2606.10244 · Mobile ALOHA https://mobile-aloha.github.io/ (arXiv 2401.02117) · DexMimicGen https://dexmimicgen.github.io/ (arXiv 2410.24185) · EgoDex https://machinelearning.apple.com/research/egodex-learning-dexterous-manipulation (arXiv 2505.11709) · AgiBot World https://agibot-world.com/ (arXiv 2503.06669)
- Sparsh https://github.com/facebookresearch/sparsh (arXiv 2410.24090) · Digit 360 https://ai.meta.com/blog/fair-robotics-open-source/ · AnyTouch arXiv 2502.12191 · AnyTouch 2 https://arxiv.org/abs/2602.09617 · 3D-ViTac https://arxiv.org/abs/2410.24091
- AnyRotate arXiv 2405.07391 · DextrAH-G arXiv 2407.02274 · DextrAH-RGB arXiv 2412.01791 · Lin et al. recipe https://toruowo.github.io/recipe/ (arXiv 2502.20396)
- AnyGrasp https://dl.acm.org/doi/10.1109/TRO.2023.3281153 · GraspGen https://graspgen.github.io/ (arXiv 2507.13097) · DexGraspNet 2.0 arXiv 2410.23004 · DexGraspVLA https://dexgraspvla.github.io/
- EquiBot https://arxiv.org/abs/2407.01479 · RiEMann https://arxiv.org/abs/2403.19460
- RoboCasa https://robocasa.ai/ · RoboCasa365 arXiv 2603.04356 · RoboGSim arXiv 2411.11839 · MuJoCo Playground https://playground.mujoco.org/ (arXiv 2502.08844) · Newton https://developer.nvidia.com/newton-physics · RoboArena https://arxiv.org/abs/2506.18123
- LIBERO (NeurIPS 2023 D&B) https://papers.neurips.cc/paper_files/paper/2023/file/8c3c666820ea055a77726d66fc7d447f-Paper-Datasets_and_Benchmarks.pdf
- Counter-signals: Brooks https://rodneybrooks.com/why-todays-humanoids-wont-learn-dexterity/ · Goldberg https://citris-uc.org/citris-researcher-publishes-papers-on-reality-of-humanoid-robots/ · Sci-Am https://www.scientificamerican.com/article/why-humanoid-robots-and-embodied-ai-still-struggle-in-the-real-world/
