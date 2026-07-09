# Robot Foundation Models & Vision-Language-Action (VLA) Models — Credentials & Subjects (Research)

> **Niche:** Robot Foundation Models & VLA Models · **Axis A cluster:** A7 `[★] frontier` · **Scope:** VLAs, robot foundation models, FM types (LLM/VFM/VLM/VLA), action representations, language grounding & LLM task planners.
> Complements `phase-1/_grounding-reference.md` — does **not** re-derive valued-degree tiers, the canonical subject union, or the duration model. Only what is **specific** to A7. Data 2024–2026; sources inline. `✓` grounded · `⏱` time-sensitive.

---

## 1. Strongest programs + the named courses that make them strong

This is the **most ML-heavy, least hardware-heavy** slice of robotics. The defining programs are not the classical "MSc Robotics" cores but the **robot-learning courses run by the labs that ship the actual VLAs** (Levine/RAIL, Finn/IRIS, Zhu/RPL, Pathak & Shi/LeCAR, Agrawal/Improbable AI). A dedicated *robot-learning* course — not "learning folded into intro robotics" — is the on-target marker.

### Postgraduate — ranked by A7 strength `✓`

| Tier | Program | The load-bearing course(s) |
|------|---------|----------------------------|
| **World-leading (single most on-target)** | **ETH Zürich (CVG)** | **263-5911-00L "Robot Learning: From Fundamentals to Foundation Models"** (Oier Mees) — the only flagship course whose *title and spine are this niche*: imitation learning → RL → generative/diffusion policies → **sequence modeling & transformers → world models → generalist robot policies (Gato, π*0.6 VLA) → embodied reasoning & test-time scaling**. [cvg.ethz.ch/lectures/Robot-Learning](https://cvg.ethz.ch/lectures/Robot-Learning/) |
| **World-leading** | **UC Berkeley** | **CS 285 Deep Reinforcement Learning** (Sergey Levine, RAIL) — imitation, offline RL, model-based RL; Levine's lab authored Octo/OpenVLA-adjacent work and co-led RT-X/Open X-Embodiment. [rail.eecs.berkeley.edu/deeprlcourse](https://rail.eecs.berkeley.edu/deeprlcourse/) |
| **World-leading** | **Stanford** | **CS 224R Deep Reinforcement Learning** (Finn/Hausman) — imitation, offline/meta/goal-conditioned RL, explicit LM-and-robotics applications; backed by **ILIAD "Foundation Models for Robotics"** (Sadigh) and the IRIS lab. [iliad.stanford.edu/research/foundation](https://iliad.stanford.edu/research/foundation) |
| **World-leading** | **CMU (RI)** | **16-831 Introduction to Robot Learning** (Guanya Shi, LeCAR) — deep/visual/RL for robot decision-making; imitation (BC, DAgger, inverse RL), **generative models for robotics, learning from human & internet video, language models**. [16-831.github.io/fall25](https://16-831.github.io/fall25/) |
| **World-leading** | **UT Austin** | **CS 391R Robot Learning** (Yuke Zhu, RPL — co-leads NVIDIA **GEAR/GR00T**) — grad + ambitious UG; perception-to-action learning explicitly aimed at **robotic foundation models / data flywheel**. [cs.utexas.edu/~yukez/cs391r](https://www.cs.utexas.edu/~yukez/cs391r_fall2023/logistics.html) |
| **Strong** | **MIT** | **6.421x Robotic Manipulation** (Tedrake/Lozano-Pérez) — deep-perception + learning-based control that *grounds* actions; **6.884 Computational Sensorimotor Learning** (Pulkit Agrawal, Improbable AI) — the learning-centric complement. [manipulation.csail.mit.edu](https://manipulation.csail.mit.edu/Fall2025/) · [pulkitag.github.io/6.884](https://pulkitag.github.io/6.884/sp20/) |
| **Strong (research)** | **Princeton** | Majumdar (IRoM) — VLA research anchor ("Actions as Language: fine-tuning VLMs into VLAs without catastrophic forgetting," ICLR 2025); taught via Intro Robotics / ROB 577. [robotics.princeton.edu/courses](https://robotics.princeton.edu/courses) |

### Undergraduate `✓`
No dedicated UG "VLA" course exists yet — this is a graduate/research frontier. UG strength comes from **CS-with-deep-learning + NLP + CV**: Stanford **CS 231N** (deep learning for vision) + **CS 224N** (NLP/transformers), CMU 16-831 (UG-accessible), Berkeley CS 182/188, UT Austin CS 391R (open to strong UGs). The transformer/tokenization backbone is the load-bearing UG prep, not classical mechanics.

---

## 2. Certifications & MOOCs — niche-specific `✓`

| Tier | Credential (provider) | Why it fits A7 |
|------|----------------------|----------------|
| **Blue-chip (most on-topic)** | **🤗 Robotics Course (Hugging Face / LeRobot)** | The only free MOOC built around this niche: Classical Robotics → RL → Imitation Learning → **Unit 7 Foundation Models**; hands-on with **LeRobot + SmolVLA / π0**. ⏱ Note: page states *"no formal certification"* (unlike HF Deep RL) — value is the portfolio, not a cert. [huggingface.co/learn/robotics-course](https://huggingface.co/learn/robotics-course/en/unit0/1) |
| **Blue-chip (applied)** | **NVIDIA DLI — Isaac Sim / Isaac Lab Learning Path + Isaac GR00T** | GPU-accelerated robot learning, synthetic-data pipelines, and **GR00T N1** (an open humanoid VLA); DLI certificate on select courses. The de-facto industrial FM-training stack. [learn.nvidia.com](https://www.nvidia.com/en-us/training/) · [developer.nvidia.com/isaac/gr00t](https://developer.nvidia.com/isaac/gr00t) |
| **Strong** | **Hugging Face Deep RL Course** | Free, real certificate; the RL/imitation foundation under every VLA (already grounding-ref Tier 3, but directly on-path here). [huggingface.co/learn/deep-rl-course](https://huggingface.co/learn/deep-rl-course) |
| **Strong (LLM-planner side)** | **DeepLearning.AI LLM specializations** (Prompt Eng., RAG, LangChain, *Post-training/RLHF*) | Supplies the **language-grounding & LLM-task-planner** half of the niche (SayCan/Code-as-Policies lineage). |
| **Supplementary** | **Stanford CS25 "Transformers United"** (public lectures) · **LearnOpenCV VLA/LeRobot tutorials** | Free frontier lectures incl. VLA guest talks; keeps the transformer/VLA frontier current. |

*(No formal "VLA certification" exists. The niche is validated by the HF Robotics Course + **an OpenVLA/π0/SmolVLA fine-tuning project on real or LeRobot-sim hardware**, plus an Open-X-Embodiment/LIBERO benchmark result.)*

---

## 3. Subject list — grounded in the syllabi above `✓`

**Foundational maths & CS** *(tilts to large-model ML, not mechanics)*
- **Deep learning; transformers & attention; sequence modeling & tokenization** — ETH Wk 7, Stanford CS 224N/231N (the single most load-bearing block)
- **Probability, linear algebra, optimization** — universal FM prereqs
- **Large-scale / distributed training, GPU compute, JAX & PyTorch** — Isaac Lab, LeRobot (PyTorch), openpi (JAX)
- **NLP / LLMs + multimodal (VLM) pretraining** — the "L" and "V" of VLA

**Core robotics**
- **Imitation learning** (BC, DAgger, inverse RL, **ACT / action chunking**) — CMU 16-831, ETH Wk 3, Stanford CS 224R
- **Reinforcement learning** (model-free/based, **offline RL**, RL fine-tuning) — Berkeley CS 285, ETH Wk 4–5
- **Robot manipulation & control basics** (to ground continuous actions) — MIT 6.421x
- **Visual foundation models for perception** (CLIP, DINOv2, SAM) — CMU 16-831, Zhu CS 391R

**Niche-specific (the A7 core)**
- **FM taxonomy for robotics: LLM / VFM / VLM / VLA** — Firoozi et al. IJRR 2025 (arXiv 2312.07843)
- **Vision-Language-Action models** — RT-1/RT-2/**RT-X**, OpenVLA, Octo, **π0 / π0-FAST / π0.5**, **GR00T N1**, Gemini Robotics, SmolVLA — ETH Wk 9, all courses
- **Action representations & tokenization** — discretized action tokens (RT-2/OpenVLA), **action chunking (ACT)**, **diffusion / flow-matching policies**, **FAST/DCT frequency tokenization** — arXiv 2501.09747, 2508.20072
- **Language grounding & LLM task planners** — SayCan, Inner Monologue, **Code-as-Policies**, ProgPrompt, VoxPoser
- **Generalist / cross-embodiment policies; Open X-Embodiment data** — RT-X
- **World models for robotics** — ETH Wk 8

**Frontier / advanced** `⏱`
- **Embodied reasoning, embodied chain-of-thought (ECoT), test-time scaling** — ETH Wk 10, arXiv 2606.03784
- **Dual-system / hierarchical VLAs** (System-1/2; π0.5, GR00T N1's dual architecture)
- **VLA inference acceleration & real-time execution** — arXiv 2501.09747, 2606.13355
- **Self-improving / RL-finetuned VLAs** ("π*0.6 that learns from experience," self-improving embodied FMs) — arXiv 2509.15155
- **Data pipelines / data flywheel & teleop-at-scale; co-training on internet video** — Zhu (RPL/GEAR)
- **World foundation models & synthetic data** (NVIDIA Cosmos) — overlaps A7/A8

---

## 4. Niche eligibility adjustment vs. the general set `✓`

Baseline (grounding ref A.1): Tier-1 = CS/AI, Robotics Eng, EE/ECE; Tier-2 = ME, Mechatronics, Math, Physics. For **Robot Foundation Models & VLA**, the center of gravity moves decisively toward large-model ML:

- **RISES — CS with a Deep-Learning / NLP / ML specialization → the single dominant fit.** This niche is "apply frontier large-model ML to robots." A **pure ML/AI master's (not even titled robotics)** is highly competitive here — uniquely among A-niches. Transformer, tokenization and RLHF/post-training experience transfers *directly* to VLA design.
- **RISES — Artificial Intelligence / Machine Learning degrees → effectively co-Tier-1 with CS**, ahead of their general-set standing. **NLP is unusually valuable** — a rare robotics niche where a strong LLM/CV background substitutes for much classical robotics.
- **RISES — Data Science / Computational & Applied Math (large-scale ML, optimization) → qualifying-with-evidence**, where the general set often would not count them; FM pretraining and data-scaling are core.
- **HOLDS — EE/ECE** via embedded deployment/inference, but the differentiator is deep learning, not circuits/DSP.
- **FALLS (relative) — Mechanical Engineering / Mechatronics.** The learned end-to-end policy **abstracts away** the actuation/contact-mechanics/design core that lifts ME to Tier-1 in Manipulation (A-manip) or Locomotion (A5). ME still qualifies via dynamics but is the **least differentiating** background for A7.
- **Distinctive signal:** unlike every hardware-facing niche, **a top-tier LLM/VLM/CV portfolio can outweigh a classical robotics pedigree** — hiring here rewards "can you train and fine-tune a large multimodal policy," verified by an OpenVLA/π0 fine-tune, not a ROS/controls transcript.

---

## Sources (representative, 2024–2026 favored)
ETH 263-5911-00L Robot Learning (Mees, cvg.ethz.ch/lectures/Robot-Learning); Berkeley CS 285 (Levine, rail.eecs.berkeley.edu/deeprlcourse); Stanford CS 224R (Finn/Hausman) & ILIAD Foundation Models (iliad.stanford.edu/research/foundation); CMU 16-831 (Shi, 16-831.github.io/fall25); UT Austin CS 391R (Zhu); MIT 6.421x Manipulation (Tedrake, manipulation.csail.mit.edu) & 6.884 Computational Sensorimotor Learning (Agrawal); Princeton IRoM/robotics.princeton.edu. MOOCs: Hugging Face Robotics Course/LeRobot (huggingface.co/learn/robotics-course), HF Deep RL, NVIDIA DLI Isaac + GR00T (developer.nvidia.com/isaac/gr00t). Technical anchors: Firoozi et al. "Foundation Models in Robotics" IJRR 2025 (arXiv 2312.07843); VLA survey (arXiv 2509.19012); FAST tokenization (arXiv 2501.09747); Discrete Diffusion VLA (arXiv 2508.20072); Embodied CoT (arXiv 2606.03784); self-improving embodied FMs (arXiv 2509.15155). Full URLs inline above.
