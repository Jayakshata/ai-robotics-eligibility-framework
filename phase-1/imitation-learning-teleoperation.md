# Per-Niche Profile — Imitation Learning & Teleoperation Data

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; imitation-learning / teleoperation-specific and trending-research signals are research-backed. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Imitation Learning & Teleoperation Data · **Axis A cluster:** A6 (Robot Learning) · **Type:** `[F]` imitation learning / LfD **+** `[S][◆]` teleoperation & data-collection pipelines
**Related capabilities:** A7 VLAs · A5 manipulation · A6 RL / offline RL · A1 perception · A9 HRI · A10 robot-data infra / MLOps · **Platforms (C):** C1 fixed arm · C2 mobile manipulator · C5 humanoid · **Verticals (B):** B1 manufacturing · B2 logistics · B9 domestic/service

---

## 1. Definition & Scope
Teaching robots skills by **learning from demonstrations** instead of hand-coded control or hand-designed reward. Two tightly-coupled halves: **(a) the learning method** — behavior cloning (BC), interactive/no-regret imitation (DAgger), inverse RL, LfD, and the modern diffusion/flow policies that map observations directly to actions; **(b) the demonstration supply chain** — teleoperation rigs (ALOHA/GELLO), handheld/in-the-wild collectors (UMI), human-video, and the data pipelines and curation that feed the policies. This is the **most "pure-ML" embodied niche** — BC *is* supervised learning and diffusion/flow policies *are* generative modeling — so it tilts hardest toward CS/AI/ML/Stats, with a distinctive HCI (teleop interface) and data-engineering (the demo pipeline) lift. **In scope:** BC, DAgger/DART, IRL, LfD via dynamical systems, diffusion/flow policies **as a learning method**, teleop hardware & the data-collection/curation pipeline. **Out of scope (adjacent):** RL-from-reward as the primary signal (A6 RL), the VLA foundation models *as artifacts* (A7), the manipulation skill area where IL is applied (A5), the generic perception stack (A1).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Robot Learning Engineer / Data-Collection Engineer | Runs teleop sessions; collects & curates demonstrations; trains/tunes BC & diffusion policies under supervision; integrates LeRobot-style pipelines on real hardware. |
| **L2** | Robot Learning Engineer (Imitation) | Owns a **demonstration→policy pipeline** end-to-end; designs/operates a teleop rig; ships a trained policy to a real deployment; diagnoses distribution shift / compounding error. |
| **L3** | Senior Robot Learning Engineer | Architects the **data engine + policy stack**; makes BC-vs-diffusion-vs-flow and data-collection-modality tradeoffs; sets eval protocol; mentors. |
| **L4/L5** | Staff / Principal Research Engineer | Sets the imitation-learning research agenda; advances policy-learning / data-scaling SOTA; publishes; org-wide direction. |

*The niche **splits into two lanes** `✓`: a **policy-learning lane** (CS/ML/Stats — BC, diffusion/flow, VLA fine-tune) and a **teleop-rig / data-infra lane** (Mechatronics/EE + software — leader-follower arms, mocap gloves, low-latency comms, dataset tooling). Large orgs staff both; small teams hire the bilingual engineer.*

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (esp. AI/ML), AI, Robotics Engineering, EE/ECE. Tier 2 (with evidence): Mathematics/Statistics, Mechatronics, Mechanical Engineering, Physics. **Imitation-specific `✓`: CS/AI/ML is the clear top major** (the most deep-learning-centric embodied niche); **Statistics/Applied Math rises** (supervised-learning-under-shift, generative models, MLE) and — *niche-distinctively* — **HCI / Cognitive Science rises** (teleop interface design, learning-from-humans, active/interactive learning). **ME & heavy classical control recede on the learning side** (IL deliberately sidesteps model-based control) but stay relevant for the **teleop-rig lane**.

**Highly-valued undergraduate programs `~`** — No dedicated IL undergrad degree; strongest paths pair a heavy DL/ML core with an accessible robot-learning elective: **UC Berkeley** (CS 285 is graduate but famously public), **CMU BS Robotics**, **MIT (6-4)**, **Stanford CS**, **UMich Robotics BSE**, **Georgia Tech CS** (ML/Robotics threads), **Cornell CS** (CS 4756 offered at the 4000 level). Differentiator vs. general robotics = strength in **deep learning + generative models**, not mechanics.

**Acceptable postgraduate degrees** — MS/PhD in CS/AI, Robotics, EE, or Statistics/ML with an imitation-learning / robot-learning focus.

**Highly-valued postgraduate programs — ranked by imitation-learning strength `✓`**
| Tier | Programs | The load-bearing course(s) / signal |
|------|----------|-------------------------------------|
| World-leading | **UC Berkeley (RAIL/BAIR) · Stanford · CMU (RI) · MIT** | Berkeley **CS 285 Deep RL** (Levine/Abbeel) — **HW1 = BC + DAgger**, largest IL research output · Stanford **CS 224R** (Finn/Hausman; first assignment is IL) + the **teleop-data epicenter** (Diffusion Policy, ALOHA/Mobile ALOHA, UMI, RoboTurk all originated here) · CMU **16-831 Introduction to Robot Learning** (dedicated: BC, DAgger, inverse RL, learning from human/internet video) · MIT **6.4210/6.4212** (Tedrake — diffusion-policy chapters) + **Underactuated Ch. 21 "Imitation Learning"** + **6.8200 Sensorimotor Learning** (Agrawal) |
| Strong (US) | **UT Austin (RPL) · Cornell · Georgia Tech · UW · USC** | UT Austin **CS 391R Robot Learning** (Yuke Zhu/Stone) — home of **RoboTurk** + **robomimic** (the standard IL-from-demos benchmark) · Cornell **CS 4756/5756** (Choudhury — imitation & no-regret interactive learning, DAgger) · Georgia Tech **CS 7648 Interactive Robot Learning** (Chernova — the dedicated **learning-from-demonstration** course; textbook *Robot Learning from Human Teachers*) · UW **CSE 599G** · USC **CSCI 699** |
| Strong (EU/UK) | **EPFL (LASA) · Imperial · ETH** | EPFL **MICRO-462 Learning & Adaptive Control for Robots** (Billard — firm-core **LfD via dynamical systems**) · Imperial **70067 Robot Learning** (Johns — BC, inverse RL, interactive learning with humans) · ETH **263-5911 Robot Learning: From Fundamentals to Foundation Models** (Mees) |
| Present (seminar) | **Princeton** | **COS/ROB 598A** robot perception & learning seminar (IL among topics) |

*(Course codes `~` re-verify at publish — several are annually renumbered/retitled.)*

**Highly-valued certifications `✓`** — Hugging Face **LeRobot / Robotics Course** (THE niche-native credential — end-to-end **teleoperate → record demonstrations → train an imitation policy → deploy** on leader-follower **SO-100/SO-101** arms; Unit 6 is *Imitation Learning*; **no formal cert yet** `⏱`) · Hugging Face **Deep RL Course** (free, genuinely certificated) · Coursera **RL Specialization** (U. Alberta, White & White — the MDP/decision backbone) · **UC Berkeley CS 285** (public lectures + BC/DAgger HW; audit) · DeepLearning.AI **ML + Deep Learning** (the prerequisite spine — BC *is* supervised learning) · The Construct **ROS 2** (policy/rig deploy layer). *(No official ROS cert / no NVIDIA robotics exam — see grounding ref; NVIDIA **Isaac Lab / Isaac-GR00T** DLI is the closest vendor path for sim-demo generation.)*

**Experience & portfolio** — L1: internship/academic; a trained BC policy in sim + a self-recorded teleop dataset. L2: 2–4 yr; a **real-robot IL policy from a self-collected, curated dataset** (ALOHA/GELLO/SO-101) with eval numbers + a diffusion/flow policy. L3: 5–8 yr; ≥1 real deployment or data-engine led. L4/L5: 8+ yr and/or first-author papers (RSS/CoRL/ICRA/RA-L/NeurIPS).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and **PyTorch**; solid ML/DL fundamentals (the most ML-centric robotics niche)
- **Behavior cloning** / visuomotor policy learning (observation→action)
- **Probability & statistics**; the **distribution/covariate-shift & compounding-error** problem
- **Interactive / no-regret imitation** (**DAgger**) and learning from logged demos (**offline RL** basics)
- **Diffusion & flow-matching policy** training — the dominant modern action heads
- **Teleoperation & data collection**: operate leader-follower rigs (**ALOHA/GELLO**), record & curate demonstrations
- Robot **data formats & pipelines** (**LeRobotDataset / RLDS**), dataset curation & quality scoring
- Robot **simulation** for demo-gen & eval (Isaac Sim/Lab, **MuJoCo, robosuite**, PyBullet)
- **ROS 2** + real-robot integration to deploy policies
- **Motion retargeting** (leader→follower, human-hand→gripper) and frames/TF basics

**Preferred / differentiating**
- **VLA fine-tuning** as the IL target (**OpenVLA, π0, GR00T N1.5, SmolVLA**) — where IL meets A7
- **Handheld / in-the-wild** data collection (**UMI** + variant zoo)
- **Human / egocentric-video** learning (EgoMimic, EgoDex, EgoZero)
- **Sim demonstration multiplication** (**MimicGen / DexMimicGen**)
- **Inverse RL** / reward learning; **RL layered on top of BC** (π*0.6 / RECAP)
- **Teleop-rig hardware design** (GELLO/ALOHA/DexCap) for the rig-building lane
- Reproducible **real-world policy eval** (**RoboArena / SIMPLER**)
- Publications at **RSS / CoRL / ICRA / RA-L / NeurIPS**

**Tools & tech stack** — *Languages:* Python (+ some C++) · *Learning:* PyTorch, **LeRobot**, **robomimic**, Diffusion Policy, Open X-Embodiment / RLDS · *Sim:* Isaac Sim/Lab, MuJoCo, robosuite, PyBullet, RoboCasa, MimicGen/DexMimicGen · *Teleop & data:* ALOHA / ALOHA 2, GELLO, **UMI** (+ variants), DexCap, RoboTurk, VR controllers (Meta Quest / Apple Vision Pro) · *Middleware:* ROS 2 · *Hardware:* Trossen ViperX/ALOHA, SO-100/SO-101, Franka, UR, Intel RealSense · *VLA:* OpenVLA, π0, GR00T N1.5, SmolVLA

**Bar by tier** — L1: trains BC in sim + collects clean teleop data · L2: ships a real IL policy from a self-collected/curated dataset, fluent across data→policy→deploy · L3: architects the data engine + policy stack, deep in ≥1 differentiating area · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Imitation-learning slice of the canonical robotics/AI subject set, annotated with representative courses. Note the **heavier probability/generative-modeling and data-engineering weighting** vs. other niches.
- **Foundational maths & CS:** linear algebra · **probability & statistics** (MLE, distribution/covariate shift, the compounding-error problem) · optimization · **deep learning & generative modeling** (transformers, VAEs, **diffusion, flow matching**) · Python + **PyTorch** · data structures/algorithms · **data engineering / dataset curation** (RLDS / LeRobot format, demo quality) *(Berkeley CS 285, CMU 16-831, MIT 6.4212, Stanford CS 224R, HF LeRobot, UT Austin robomimic)*.
- **Core robotics:** kinematics & dynamics, frames/**TF**, **motion retargeting** (leader→follower, human-hand→gripper) *(EPFL MICRO-462)* · **ROS 2** & simulation (Isaac Sim/Lab, MuJoCo, robosuite) · trajectory/action representation + enough feedback control to execute learned policies.
- **Niche-specific:** **behavior cloning** / visuomotor policy learning *(Berkeley CS 285 HW1, Imperial 70067, CMU 16-831)* · **interactive / no-regret imitation & distribution shift** — DAgger/DART *(Cornell CS 4756, CMU 16-831)* · **inverse RL** / reward learning *(CMU 16-831, Imperial 70067)* · **learning from human teachers / LfD** — active learning, noisy demos, human-subject eval *(Georgia Tech CS 7648)* · **LfD via dynamical systems** *(EPFL MICRO-462)* · **teleoperation systems & rigs** — leader-follower (ALOHA/GELLO), portable UMI, RoboTurk crowdsourcing, DexCap mocap, retargeting & latency · **demonstration collection, quality & curation** + offline RL *(UW CSE 599G, UT Austin CS 391R)* · **learning from observation / human & internet video** *(CMU 16-831)*.
- **Frontier/advanced:** **diffusion & flow-matching policies** *(MIT 6.4212, Stanford/Song)* · **action tokenization** (FAST) & **VLA policies as the IL target**; **cross-embodiment** learning (Open X-Embodiment / DROID) *(ETH 263-5911)* · **sim demo multiplication** (MimicGen/DexMimicGen); **egocentric / in-the-wild scaling** (UMI, DexCap, EgoMimic) · reproducible **real-world eval** (RoboArena / SIMPLER).

## 6. Training Programme Design & Duration `✓`
Imitation-learning specialization on the shared 5-phase, ~1,400-hour base (grounding ref §D), with phase 4 tuned to **imitation learning & teleoperation data** and a **heavier DL/generative-modeling weighting** in phases 1 & 3 (this is the most pure-ML niche).

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths, Python/**PyTorch**, probability & statistics, classical→**deep** ML | 2.0 mo | 6–7 mo | 320 | ML/DL & stats fluency |
| 2. Core robotics | Kinematics/frames, **ROS 2**, simulation (MuJoCo/robosuite/Isaac), enough control to execute policies | 1.5 mo | 5 mo | 260 | Command an arm in sim + real; run a teleop rig |
| 3. AI/ML depth | Deep learning, computer vision, **generative models (diffusion/flow)**, RL/offline-RL | 2.0 mo | 6 mo | 300 | Visuomotor + generative policy learning |
| 4. **Imitation-learning & teleop-data specialization** | BC/DAgger/IRL, diffusion & flow policies, teleop rigs (ALOHA/GELLO/UMI), demonstration collection & curation, sim demo-gen, VLA fine-tune | 2.0 mo | 5–6 mo | 300 | The niche core |
| 5. Capstone + portfolio | Collect a dataset on a real rig → train a diffusion/flow (or VLA-fine-tune) policy → eval → interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior robot-learning (imitation) engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The niche has consolidated on **internet-pretrained VLA policies fine-tuned from ever-larger teleop + handheld-UMI + human-video demonstration corpora**. `🆕` = 2026 release/update.

- **Generalist VLA policies (the IL target everyone fine-tunes):** Physical Intelligence **π0 → π0.5 → π*0.6/RECAP** (flow-matching VLAs; π*0.6 layers RL-from-experience + teleop corrections on top of BC — ~2× throughput / ~half the failure rate — the "RL is back on top of imitation" signal) · **OpenVLA (7B)** (open baseline, 970k Open-X demos) · **RDT-1B** (1.2B diffusion-transformer bimanual, ICLR 2025) · NVIDIA **GR00T N1/N1.5** (open dual-system humanoid VLA; 🆕 **GR00T 1.7 shipped into LeRobot**) · **GO-1** (AgiBot ViLLA, +32% over RDT) · **SmolVLA** (HF, edge/accessible endpoint).
- **Learning method — diffusion → flow matching → one-step:** **Diffusion Policy** (still the workhorse) · **flow-matching policies** (~10× lower latency at matched multimodality) · **VITA / FlowPolicy / ActionFlow** (3D vision-to-action, 70–100% real-robot success) · **MP1 (MeanFlow)** — 1-step action generation for high-frequency control.
- **Action tokenization / autoregressive VLA:** **FAST / FAST+** (DCT+BPE frequency tokenizer, ~10× action-chunk compression; universal, trained on 1M sequences) · 🆕 **FASTer** (learnable neural tokenizer + block-wise AR decoding, Dec 2025).
- **Teleoperation rigs (the ALOHA lineage):** **ALOHA 2** (sub-$20k bimanual leader-follower; 1000s of demos/day) · **Mobile ALOHA** (whole-body + mobile base) · **GELLO** (low-cost leader arms). These underpin most lab demonstration data.
- **In-the-wild / handheld collection (the UMI explosion):** **UMI** (wrist-fisheye handheld gripper — end-effector trajectories in the wild; the template) · variant zoo **DexUMI, FastUMI, MV-UMI, ActiveUMI, UMI-on-Legs, UMI-on-Air, exUMI** · 🆕 **YUBI** (bimanual dexterous), 🆕 **VISTA** (physics-validated UMI→VLA), 🆕 **TacUMI** (tactile) · **FastUMI-100K** dataset + 🆕 **UMI-Bench 1.0** (reproducible eval).
- **Human video as passively-scalable demo data:** **EgoMimic** (wearable egocentric video + hand tracking) · **EgoDex** (Apple, 829h / 338k demos via Vision Pro — largest of its kind) · **EgoZero** (smart-glasses) · **H-RDT** (human-video-enhanced bimanual) · 🆕 **EgoVerse / EgoLive / HumanNet (1M hours)** — scaling human-centric video for robot learning.
- **Large-scale demonstration datasets:** **Open X-Embodiment** (2M+ trajectories, 22 robots — the cross-embodiment substrate) · **DROID** (76k in-the-wild teleop on a standardized Franka — the generalization/eval standard) · **AgiBot World Colosseo** (1M+ bimanual humanoid teleop, +30% over OXE) · **Galaxea Open-World (100k)** / FastUMI-100K.
- **Open ecosystem & real-world eval:** **LeRobot (Hugging Face)** — the "PyTorch for robot learning"; 🆕 **58k+ community datasets (~50× YoY)**, 🆕 **v0.6 (July 2026)** adds world-model policies (**VLA-JEPA, FastWAM, LingBot-VA**), reward models, human-correction rollout tooling, and Isaac GR00T/Teleop integration · **RoboArena** (CoRL 2025 — distributed, double-blind real-world VLA eval on DROID) · 🆕 **RobotArena∞** (real-to-sim) & **RoboChallenge**.

*Net trend: internet-pretrained VLA policies fine-tuned from pooled teleop + handheld-UMI + human-video demonstrations, with flow-matching (now one-step) action heads and DCT action-chunk tokenization for AR variants — and the newest 2025/2026 shift, **RL and world-models layered on top of behavior cloning** so robots learn from their own experience, all increasingly plumbed through the open LeRobot stack. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | **Behavior cloning** in sim (robomimic / MuJoCo) on provided demos | Supervised policy learning; matches robomimic BC baseline on a task |
| Foundational | Implement & compare **BC vs. DAgger** on a sim task | Distribution shift / compounding error; DAgger closes the gap |
| Applied | Build/operate a **teleop rig** (GELLO or SO-101 leader-follower) → record 50+ demos → train BC | End-to-end data→policy; a real policy from self-collected data |
| Applied | Train a **Diffusion Policy** on ALOHA-style bimanual demos | Generative action head; multimodal multi-step task, >80% success |
| Advanced | **Flow-matching policy** + eval vs. diffusion (latency & success) | Modern action head; real-time inference at matched success |
| Advanced | **Sim demo multiplication** (MimicGen) → train on multiplied data | Data-scaling; tens of demos → thousands, policy improves |
| Advanced | **Handheld UMI-style** in-the-wild collection → train a policy | Decoupled data collection; a policy from non-robot data |
| Capstone | **Fine-tune a VLA** (OpenVLA / π0 / SmolVLA) on a self-collected dataset, deploy on a real arm, eval RoboArena/SIMPLER-style | End-to-end frontier IL stack; language-conditioned policy from your own data engine |

## 9. Required Lab Setup / Hardware / Resources
- **Teleoperation rigs:** Trossen **ViperX / ALOHA & ALOHA 2** (bimanual leader-follower) · **GELLO** (low-cost leader arms) · Hugging Face **SO-100/SO-101** (budget, LeRobot-native) · **Mobile ALOHA** (mobile base) · VR teleop (**Meta Quest, Apple Vision Pro**) · **DexCap** (mocap gloves).
- **Handheld / in-the-wild collectors:** **UMI** grippers (+ variants) · wrist/fisheye action cameras (GoPro).
- **Robot arms (execution):** Franka **Panda / FR3** · Universal Robots **UR5e/UR10e** · **xArm** · **SO-101** · Trossen **ViperX**.
- **Vision & sensors:** Intel **RealSense D435/D455** · fisheye (UMI) · optional **GelSight/DIGIT** for visuo-tactile IL.
- **Compute:** RTX 4090 / A6000 workstation for policy training; **A100/H100** for VLA fine-tuning / large diffusion policies.
- **Software / sim:** **LeRobot** · **robomimic** · Diffusion Policy / flow-policy libs · Isaac Sim/Lab · **MuJoCo** · **robosuite** · PyBullet · RoboCasa · **MimicGen/DexMimicGen** · ROS 2.
- **Datasets & benchmarks:** **Open X-Embodiment** · **DROID** · **AgiBot World Colosseo** · **RoboMimic** · **RoboTurk** · robosuite/RoboCasa tasks · RLBench / Meta-World · eval: **RoboArena**, **SIMPLER**.

## 10. Partnerships & Ecosystem
- **Hardware / rig vendors:** Trossen Robotics (ALOHA/ViperX) · Hugging Face (SO-100/SO-101) · Franka Robotics · Universal Robots · Intel RealSense · GELLO (open-hardware).
- **Sim / compute:** NVIDIA (Isaac Sim/Lab, GR00T, DLI) · Google DeepMind (MuJoCo).
- **Academic labs (IL powerhouses):** **UC Berkeley RAIL/BAIR** (Levine, Abbeel) · **Stanford** (Finn; Sadigh/ILIAD; Bohg/IPRL; Song) · **CMU RI** · **MIT** (Tedrake; Agrawal) · **UT Austin RPL** (Yuke Zhu; Stone) · **Cornell** (Choudhury) · **Georgia Tech** (Chernova) · **EPFL LASA** (Billard) · **Imperial** Robot Learning Lab (Johns).
- **Open-source communities:** Hugging Face **LeRobot** (the hub — 58k+ datasets) · **Open X-Embodiment** consortium · **DROID** consortium · **UMI** ecosystem.
- **Industry programs:** **Physical Intelligence** (π0) · NVIDIA (GR00T) · **AgiBot** (AgiBot World) · Toyota Research Institute (Diffusion Policy) · humanoid data players (Figure, 1X, Tesla teleop ops).
- **Standards (applied):** general robot-safety **ISO 10218-1/2, ISO/TS 15066** apply on the execution side; **no IL-specific standard yet** `~`.

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (BC vs. DAgger, distribution shift, diffusion vs. flow, retargeting).
- **Project rubrics** with objective metrics: policy **success rate on held-out tasks**, **demonstrations-to-success** (sample efficiency), robustness to distribution shift, **teleop throughput** (demos/hour) & dataset-quality scoring, action-head latency.
- **Standardized benchmarks** as portable evidence: **robomimic**, RLBench, Meta-World, RoboCasa; real-world eval via **RoboArena / SIMPLER** (distributed, double-blind).
- **Recognized certifications as evidence:** Hugging Face LeRobot course completion; Hugging Face Deep RL certificate; a ROS 2 credential.
- **Senior tiers:** portfolio (a **data engine + trained policy**) + system-design interview (design a demonstration pipeline) + live debugging of a failing BC policy (diagnose distribution shift).

## 12. Adjacent & Related Niches
Feeds directly into **A7 VLAs / foundation models** (IL is *how* VLAs are fine-tuned) and the **C5 humanoid / C1 arm / C2 mobile-manipulator** platform tracks; pairs closely with **A5 manipulation** (the main skill domain), **A6 RL / offline RL** (RL-on-top-of-BC), **A1 perception** (visuomotor inputs), **A9 HRI** (teleop interfaces, learning-from-humans), and **A10 robot-learning data infra / MLOps** (the demonstration supply chain). (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A6 (`✓`). §7 stamped mid-2026 — re-research before publish.*
