# Per-Niche Profile — Robot Foundation Models & Vision-Language-Action (VLA) Models

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; VLA-specific and trending-research signals are research-backed (`phase-1/.research/robot-foundation-models-vla.{creds,trending}.md`). `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Robot Foundation Models & Vision-Language-Action (VLA) Models · **Axis A cluster:** A7 (Robot Foundation Models) `[★] frontier` · **Type:** `[F]` (FM types LLM/VFM/VLM/VLA; action representations, language grounding & LLM task planners as sub-areas)
**Related capabilities:** A1 perception / VFMs · A5 manipulation & embodied skills · A6 imitation & RL · A8 world models · LLM/NLP grounding · **Platforms (C):** C1 fixed arm · C2 mobile manipulator · C5 humanoid · **Verticals (B):** B1 manufacturing · B2 logistics · B9 service · general-purpose / home

---

## 1. Definition & Scope
Training and adapting **large multimodal models that map vision + language (+ proprioception) directly to robot action** — the "generalist policy" bet that a single pretrained model, fine-tuned on modest demonstrations, can drive many tasks and many robots. It is the **most ML-heavy, least hardware-heavy** slice of robotics and the field's current frontier. **In scope:** VLAs; robot foundation models; the FM taxonomy for robotics (LLM / VFM / VLM / VLA); action representations & tokenization (discrete tokens, action chunking, diffusion / flow-matching heads); language grounding & LLM task planners; generalist / cross-embodiment policies. **Out of scope (adjacent):** the low-level skills a VLA *invokes* (A5 manipulation, A5 locomotion), the standalone perception stack (A1), classical control (A4), and pure video/world-model generation (A8) — each of which a VLA consumes but does not own.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Robot-Learning / VLA Engineer | Fine-tunes and evaluates existing VLAs under supervision; builds data pipelines; runs benchmarks and reproduces baselines. |
| **L2** | Robot Foundation Model Engineer | Owns a VLA fine-tune→deploy pipeline end-to-end (data → train → eval → real-robot); debugs action heads, tokenizers, and inference latency. |
| **L3** | Senior Robot-Learning / VLA Engineer | Designs the model architecture (backbone, action head, tokenizer); makes pretrain-vs-finetune and data-mix tradeoffs; sets eval; mentors. |
| **L4/L5** | Staff / Principal Research Scientist — Robot Foundation Models | Sets the FM research agenda; owns pretraining runs; advances generalist-policy SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (esp. with **deep learning / NLP / ML**), Artificial Intelligence, EE/ECE. Tier 2 (with evidence): Maths/Applied Maths, Physics, Robotics Engineering, Mechatronics. **A7-specific `✓` (center of gravity shifts to large-model ML):** **CS-with-DL/NLP is the single dominant fit**; **AI/ML degrees rise to co-Tier-1 with CS** (NLP unusually valuable); **Data Science / Computational & Applied Maths rise to qualifying-with-evidence** (FM pretraining + data-scaling). **Mechanical Engineering / Mechatronics *fall* relative to other A-niches** — the learned end-to-end policy abstracts away the actuation/contact-mechanics core; ME qualifies via dynamics but is the least-differentiating background here.

**Highly-valued undergraduate programs `✓`** — no dedicated UG "VLA" course exists (graduate/research frontier). UG strength = **CS-with-deep-learning + NLP + CV**: Stanford (**CS 231N** vision + **CS 224N** NLP/transformers), CMU (**16-831** UG-accessible), Berkeley (CS 182/188), UT Austin (**CS 391R**, open to strong UGs), MIT (**6-4** AI & Decision Making). The transformer / tokenization backbone — not classical mechanics — is the load-bearing UG prep.

**Acceptable postgraduate degrees** — MS/PhD in CS/AI/ML with a robot-learning or large-model focus, or Robotics with a robot-learning focus. **Distinctive `✓`: a pure ML/AI master's (not even titled "robotics") is uniquely competitive here** — transformer, tokenization and RLHF/post-training experience transfers *directly* to VLA design.

**Highly-valued postgraduate programs — ranked by A7 strength `✓`** (the labs that ship the actual VLAs; a dedicated *robot-learning* course, not "learning folded into intro robotics," is the on-target marker)
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading (single most on-target) | **ETH Zürich (CVG)** | **263-5911-00L "Robot Learning: From Fundamentals to Foundation Models"** (Mees) — the only flagship whose title *is* this niche: imitation→RL→generative/diffusion policies→sequence models & transformers→world models→**generalist policies (Gato, π0.6)→embodied reasoning & test-time scaling**. |
| World-leading | **UC Berkeley · Stanford · CMU (RI) · UT Austin** | Berkeley **CS 285 Deep RL** (Levine/RAIL — RT-X/OpenVLA lineage) · Stanford **CS 224R Deep RL** (Finn/Hausman) + **ILIAD "Foundation Models for Robotics"** (Sadigh) / IRIS · CMU **16-831 Intro to Robot Learning** (Shi/LeCAR) · UT Austin **CS 391R Robot Learning** (Zhu/RPL — co-leads NVIDIA GEAR/GR00T). |
| Strong | **MIT · Princeton** | MIT **6.421x Robotic Manipulation** (Tedrake/Lozano-Pérez, grounds continuous action) + **6.884 Computational Sensorimotor Learning** (Agrawal/Improbable AI) · Princeton IRoM (Majumdar — "Actions as Language" VLA research, ICLR 2025). |

**Highly-valued certifications `✓`** — **Hugging Face Robotics Course (LeRobot)** — the only MOOC built around this niche (Classical→RL→Imitation→**Unit 7 Foundation Models**, hands-on with SmolVLA/π0); *note: portfolio value, no formal cert yet* · **NVIDIA DLI — Isaac Sim/Lab Learning Path + Isaac GR00T** (the de-facto industrial FM-training stack; DLI certificate) · **Hugging Face Deep RL Course** (free real cert; the RL/imitation floor under every VLA) · **DeepLearning.AI LLM specializations** (Prompt Eng / RAG / Post-training-RLHF — supplies the language-grounding & LLM-planner half) · **Stanford CS25 "Transformers United"** (public frontier lectures). *(No formal "VLA certification" exists — see grounding ref; the niche is validated by a fine-tune project + benchmark result, not an exam.)*

**Experience & portfolio** — L1: internship/academic; an **OpenVLA/π0/SmolVLA fine-tune** in sim/LeRobot + a **LIBERO/SIMPLER benchmark** number. L2: 2–4 yr, a **real-robot VLA deployment** with eval + a data pipeline. L3: 5–8 yr, led a fine-tune/pretraining effort to a real deployment. L4/L5: 8+ yr and/or first-author papers (CoRL / RSS / NeurIPS / ICLR / ICRA).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python**; deep **PyTorch** (increasingly **JAX** for openpi/π0)
- **Transformers & attention**, sequence modeling, **tokenization**
- **VLM / multimodal** fundamentals (CLIP, SigLIP, DINOv2, PaliGemma backbones)
- **Imitation learning**: behavior cloning, DAgger, **ACT / action chunking**
- **RL fundamentals**: model-free/based, **offline RL**, RL fine-tuning
- **Fine-tuning large models**: **LoRA/PEFT**, multi-GPU / distributed training (FSDP/DeepSpeed)
- **VLA action heads**: discrete action tokens, **diffusion & flow-matching** policies
- **Robot data pipelines**: Open X-Embodiment / RLDS / **LeRobotDataset** formats
- **Evaluation**: sim benches (**LIBERO / SIMPLER / CALVIN**) *and* real robots
- Deploying/serving a policy on real hardware (ROS 2 basics, inference-rate budgeting)

**Preferred / differentiating**
- **Pretraining** a VLA / **cross-embodiment co-training** at scale
- **Action tokenizers** (FAST/DCT, RVQ) and **flow-matching action experts**
- **Dual-system / hierarchical VLAs** (System-1 fast expert + System-2 VLM planner)
- **Embodied reasoning / embodied chain-of-thought (ECoT)**, test-time scaling
- **LLM task planners** (SayCan, Code-as-Policies, VoxPoser)
- **Self-improving / RL-fine-tuned VLAs** (RECAP-style)
- **World-model co-training / synthetic data** (Cosmos, GR00T-Dreams)
- **VLA inference acceleration** & real-time execution; publications at **CoRL/RSS/NeurIPS/ICLR/ICRA**

**Tools & tech stack** — *Languages:* Python, JAX, C++ (deploy) · *VLA frameworks:* **openpi** (π0/π0.5), **OpenVLA / OpenVLA-OFT**, **LeRobot** (+ SmolVLA), Octo, **NVIDIA Isaac GR00T (N1/N1.5)** · *Backbones:* PaliGemma, SigLIP, DINOv2, Llama-2, Qwen-VL, SmolVLM · *Training:* HF Transformers + **PEFT/LoRA**, FSDP/DeepSpeed, Isaac Lab · *Data:* Open X-Embodiment (RLDS), DROID, AgiBot World, RoboMIND, LeRobot community datasets · *Sim/bench:* LIBERO, SIMPLER, CALVIN, RLBench, **RoboArena**; Isaac Sim/MuJoCo · *Hardware:* SO-100/SO-101 & Koch (LeRobot), ALOHA/Trossen, Franka, UR, Unitree G1 (humanoid).

**Bar by tier** — L1: fine-tunes and benchmarks a VLA in sim + basic real-robot deploy · L2: ships a real-robot VLA pipeline, fluent across data→train→eval · L3: architects models (backbone/head/tokenizer), deep in ≥1 differentiating area · L4/L5: runs pretraining, advances SOTA, sets direction.

## 5. Core Subject List `✓`
The A7 slice, tilted toward large-model ML, annotated with representative courses.
- **Foundational maths & CS:** linear algebra · probability · optimization · **deep learning; transformers & attention; sequence modeling & tokenization** *(Stanford CS 224N/231N, ETH Wk 7 — the single most load-bearing block)* · **large-scale/distributed training, GPU compute, JAX & PyTorch** · **NLP/LLMs + multimodal (VLM) pretraining** — the "L" and "V" of VLA.
- **Core robotics:** imitation learning — BC, DAgger, inverse RL, **ACT/action chunking** *(CMU 16-831, ETH Wk 3, Stanford CS 224R)* · reinforcement learning — model-free/based, **offline RL**, RL fine-tuning *(Berkeley CS 285, ETH Wk 4–5)* · robot manipulation & control basics to ground continuous actions *(MIT 6.421x)* · visual foundation models for perception — CLIP, DINOv2, SAM *(CMU 16-831, Zhu CS 391R)*.
- **Niche-specific (the A7 core):** FM taxonomy for robotics — LLM/VFM/VLM/VLA *(Firoozi et al., IJRR 2025)* · **Vision-Language-Action models** — RT-1/RT-2/RT-X, OpenVLA, Octo, π0/π0-FAST/π0.5, GR00T N1, Gemini Robotics, SmolVLA *(ETH Wk 9)* · **action representations & tokenization** — discrete action tokens, ACT, diffusion/flow-matching, FAST/DCT · **language grounding & LLM task planners** — SayCan, Inner Monologue, Code-as-Policies, ProgPrompt, VoxPoser · generalist / cross-embodiment policies (Open X-Embodiment) · world models for robotics *(ETH Wk 8)*.
- **Frontier/advanced `⏱`:** embodied reasoning, **ECoT**, test-time scaling *(ETH Wk 10)* · **dual-system / hierarchical VLAs** (System 1/2; π0.5, GR00T N1) · VLA inference acceleration & real-time execution · **self-improving / RL-fine-tuned VLAs** (RECAP) · data flywheel & teleop-at-scale; co-training on internet video · world foundation models & synthetic data (NVIDIA Cosmos).

## 6. Training Programme Design & Duration `✓`
VLA-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D). A7's tilt vs. the base: **core robotics compresses** (imitation/RL emphasis, minimal classical mechanics/hardware) and **AI/ML depth expands** (transformers, VLMs, distributed training); phase 4 + capstone are tuned to VLAs.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths, Python, classical ML, **PyTorch** | 2.0 mo | 6 mo | 300 | ML & maths fluency |
| 2. Core robot learning | **Imitation (BC/ACT), RL, offline RL**; just-enough ROS 2 to deploy | 1.5 mo | 5 mo | 260 | Train & run a policy on a real arm |
| 3. Large-model ML depth | Deep learning, **transformers/attention, VLMs**, distributed training | 2.0 mo | 6 mo | 340 | Build/fine-tune multimodal models |
| 4. **VLA specialization** | VLA architectures, action tokenization, flow-matching heads, LLM planners, dual-system, sim-to-real deploy, fine-tune | 1.5 mo | 5 mo | 280 | The niche core |
| 5. Capstone + portfolio | Fine-tune a VLA on a real robot / LeRobot + benchmark + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior robot-learning / VLA engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The A7 field's "SAM2/DINO moment": the named backbones everyone now fine-tunes and benchmarks against. `🆕` = 2026 release. *Net-net: consolidating on a **dual-system VLA** — reasoning VLM + flow-matching action expert — pretrained on pooled cross-embodiment + human-video data, sharpened by RL and world-model "dreams," judged on real-world arenas.*

- **Foundation VLAs (the open-weight backbones):** **OpenVLA / OpenVLA-OFT** (7B LLaMA-2 + DINOv2/SigLIP on Open X-Embodiment — the default LoRA-tunable baseline) · Physical Intelligence **π0 → π0.5 → π0.6** (flow-matching action expert on PaliGemma; π0.5 adds open-world generalization + "knowledge insulation"; π0.6/**RECAP** Nov 2025 learns from experience via RL) · **SmolVLA** (450M, flow-matching, on-device — the "affordable VLA") · ancestry **RT-2/RT-2-X → Octo**; open challengers **🆕 WALL-OSS-0.5** (X Square, May 2026), **🆕 LingBot-VLA** (Ant Group, Jan 2026; 20k-hr bimanual across 9 embodiments), **🆕 EO-1 / Qwen-RobotManip / Hy-Embodied-0.5**.
- **Dual-system architectures (slow VLM planner + fast action expert):** NVIDIA **Isaac GR00T N1 → N1.5 → 🆕 N1.6/N1.7 → 🆕 N2** (open humanoid FM; N2 on **DreamZero** ~doubles new-task success, tops RoboArena) · **Gemini Robotics** + **-ER** → **🆕 1.5 / ER 1.6** (agentic "think-before-act," tool-calling) · **Figure Helix** (commercial dual-system on Figure 03) · **Tesla Optimus Gen 3** (leverages FSD nets).
- **Action representations (the tokenization arms race):** **FAST / FAST+** (DCT frequency-space tokenizer; makes autoregressive VLAs viable for high-frequency dexterity) · **FASTer** (Dec 2025), **🆕 ActionCodec**, **OMNISAT**, **BEAST** (learnable/RVQ/B-spline tokenizers) · **flow-matching & discrete-diffusion action heads** are the trend winners over AR-quantization — **Discrete Diffusion VLA, dVLA, DIVA, Unified Diffusion VLA** (parallel chunk generation).
- **Reasoning, embodied CoT & LLM planners:** **ECoT** (reason in text/space before acting — the template most reasoning-VLAs extend) · Allen AI **MolmoAct / 🆕 MolmoAct 2** ("action reasoning model" w/ depth grounding) · **ThinkAct** (NeurIPS 2025), **Embodied-R1** (pointing-VLM + RL), **InstructVLA** (MoE), **Cosmos-Reason1** · planners moving from **SayCan / Code-as-Policies** → closed-loop hierarchical (BrainBody-LLM, RoboAgent), now often folded into the VLA's System-2.
- **World models & world-action models (WAMs):** NVIDIA **Cosmos** (Predict/Transfer/Reason for synthetic data) → **🆕 Cosmos 3** (omnimodal; backbone for **Cosmos Policy**) · DeepMind **Genie 3** (real-time interactive 3D worlds) · **GR00T-Dreams / DreamZero** & **WMPO** (world-model policy optimization; "dreamed" rollouts — GR00T N1.5 trained in 36 h vs. ~3 months manual).
- **Datasets (the scaling substrate):** **Open X-Embodiment** (22 robots / 527 skills / 2M+ trajectories — the ImageNet of manipulation) · **DROID** (76k in-the-wild Franka) · **AgiBot World** (1M+ trajectories on 100+ G1 humanoids) · **RoboMIND / 2.0** · human-video corpora **EgoDex / EgoScale**, **🆕 RoboCasa365** (365 kitchen tasks), **Embodied-Points-200K**.
- **Benchmarks & evaluation:** sim benches **LIBERO** (saturating ~95–98%), **CALVIN**, **SIMPLER**, **RLBench** give way to real-world/open-ended eval — **RoboArena** (Elo-style real-robot arena; Apr 2026 snapshot: DreamZero 1750 > π0.5 1622), **MolmoSpaces**, **🆕 RobotArena ∞** (real-to-sim), AI2 **VLA leaderboard**. *Scale signal: **164 VLA submissions at ICLR 2026**.*

*Several 2026 items are fresh preprints/model cards — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Run a pretrained **OpenVLA/Octo** on **SIMPLER/LIBERO**; reproduce a baseline | Inference + eval harness; match a published number |
| Foundational | **Fine-tune SmolVLA** (or OpenVLA + LoRA) on a LeRobot dataset → deploy on **SO-101** | End-to-end fine-tune + real-robot deploy; task success on a novel instruction |
| Applied | Build a **LeRobotDataset** from teleop; train an **ACT / diffusion policy** | Data pipeline + policy learning; a multi-step task executes |
| Applied | Implement a **FAST/DCT action tokenizer** or a **flow-matching head**; compare to discrete tokens | Action-representation tradeoffs; higher success or Hz at equal data |
| Advanced | **Fine-tune π0 (openpi)** on a custom task on a real bimanual/ALOHA | Flow-matching VLA on hardware; reported success rate on held-out variations |
| Advanced | **LLM task planner** (SayCan / Code-as-Policies / VoxPoser) driving a VLA/skill library | Long-horizon language grounding; completes a multi-stage instruction |
| Advanced | **Embodied chain-of-thought** — add reasoning traces to a VLA; measure delta | Reasoning-before-acting; success-rate lift over the no-CoT baseline |
| Capstone | **Fine-tune a dual-system VLA (or GR00T N)** on a real robot; eval on RoboArena-style real-world + LIBERO | The full frontier stack; natural-language multi-task on hardware with reported Elo/success |

## 9. Required Lab Setup / Hardware / Resources
- **Robots:** low-cost LeRobot arms **SO-100 / SO-101 / Koch / Moss** (entry) · **ALOHA / Trossen ViperX** (bimanual teleop) · **Franka**, **UR** (research arms) · **Unitree G1** / humanoids (advanced, dual-system VLAs).
- **Compute:** **A100/H100** multi-GPU for pretraining / large fine-tunes · RTX 4090 / A6000 for LoRA fine-tune + inference · **Jetson** for on-device (SmolVLA) deployment.
- **VLA frameworks & models:** **openpi** (π0/π0.5) · **OpenVLA / OpenVLA-OFT** · **LeRobot** (+ SmolVLA) · Octo · **NVIDIA Isaac GR00T N1/N1.5**.
- **Backbones & training libs:** PaliGemma · SigLIP · DINOv2 · Llama-2 · Qwen-VL · HF Transformers + **PEFT/LoRA** · FSDP/DeepSpeed · JAX · Isaac Lab.
- **Datasets:** **Open X-Embodiment** (RLDS) · **DROID** · **AgiBot World** · **RoboMIND** · LeRobot community datasets · RoboCasa365.
- **Benchmarks & sim:** **LIBERO · SIMPLER · CALVIN · RLBench · RoboArena** · Isaac Sim/Lab · MuJoCo · RoboCasa.

## 10. Partnerships & Ecosystem
- **FM / model labs (industry):** Physical Intelligence (π0) · Google DeepMind (Gemini Robotics) · NVIDIA **GEAR** (GR00T, Cosmos) · Allen AI (MolmoAct) · Hugging Face (LeRobot/SmolVLA) · Figure · 1X · X Square Robot · Ant Group.
- **Academic labs (VLA powerhouses):** Berkeley **RAIL** (Levine) · Stanford **IRIS/ILIAD** (Finn/Sadigh) · CMU **LeCAR** (Shi) · UT Austin **RPL** (Zhu) · MIT **Improbable AI** (Agrawal) · **ETH CVG** (Mees) · Princeton **IRoM** (Majumdar).
- **Sim / compute:** NVIDIA (Isaac, DLI, **Cosmos**) · Google DeepMind (MuJoCo).
- **Open-source communities:** Hugging Face **LeRobot** · **Open X-Embodiment** consortium (22 labs) · **openpi**.
- **Industry programs:** NVIDIA Inception · humanoid players (Figure, 1X, Agility, Unitree, Tesla Optimus).
- **Standards (applied at deployment):** no VLA-specific standard yet; general robot-safety ISO 10218-1/2 / ISO 15066 apply where a VLA drives real hardware.

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (transformers/tokenization, imitation/RL, VLA architectures, action heads).
- **Project rubrics** with objective metrics: **LIBERO/SIMPLER success rate**, real-robot task success, **generalization** to novel objects/instructions, **inference rate (Hz)**, **data efficiency** (demos to reach X%).
- **Standardized benchmarks** as portable evidence: LIBERO / SIMPLER / CALVIN / RLBench; increasingly **RoboArena**-style real-world Elo.
- **Recognized certifications as evidence:** Hugging Face Robotics Course completion; HF Deep RL cert; NVIDIA DLI Isaac / GR00T.
- **Senior tiers:** portfolio + a fine-tune/pretraining project + system-design interview (data pipeline, model architecture, eval design) + live debugging (action-head / distribution-shift failure).

## 12. Adjacent & Related Niches
Sits **atop A5 manipulation & embodied skills** (the skills a VLA invokes) and the **C5 Humanoid** platform track; pairs closely with **A1 perception/VFMs**, **A6 imitation & RL** (its training methods), **A8 world models** (co-training & WAMs), and **LLM/NLP** (the language half). Feeds general-purpose service, logistics, and manufacturing verticals. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Niche research: `phase-1/.research/robot-foundation-models-vla.{creds,trending}.md`. Taxonomy: `master-niche-taxonomy.md` cluster A7 (`✓`). §7 stamped mid-2026 — re-research before publish.*
