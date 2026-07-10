# Per-Niche Profile — Manipulation & Dexterous Grasping

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; manipulation-specific and trending-research signals are research-backed. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Manipulation & Dexterous Grasping · **Axis A cluster:** A5 (Embodied Skills) · **Type:** `[F]` (dexterous / contact-rich / bimanual sub-areas `[S][★]`)
**Related capabilities:** A1 perception · A3 motion planning · A4 force/compliant control · A6 imitation/RL · A7 VLAs · **Platforms (C):** C1 fixed arm · C2 mobile manipulator · C5 humanoid · **Verticals (B):** B1 manufacturing · B2 logistics · B4 surgical · B9 service

---

## 1. Definition & Scope
Enabling a robot to **grasp, move, and rearrange objects** — from pick-and-place to dexterous in-hand reorientation and contact-rich assembly. It turns perception and planning into physical work and underpins nearly every applied robotics vertical. **In scope:** grasp synthesis, grasp/pose perception, reach planning, force/compliant interaction, learning-based manipulation policies, dexterous & bimanual skills. **Out of scope (adjacent):** the general perception stack (A1), generic motion-planning theory (A3), locomotion (A5).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Manipulation Engineer | Implements/tunes grasp & pick pipelines under supervision; runs experiments; integrates libraries on real hardware. |
| **L2** | Manipulation Engineer | Owns a manipulation subsystem end-to-end (perception→grasp→plan→execute); debugs sim-to-real; ships to a real deployment. |
| **L3** | Senior Manipulation Engineer | Designs the manipulation architecture; makes model-vs-learning tradeoffs; sets benchmarks; mentors. |
| **L4/L5** | Staff / Principal Manipulation Research Engineer | Sets the manipulation research agenda; advances dexterous/learned manipulation SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **Manipulation-specific `✓`: Mechanical Engineering rises to Tier 1** — rigid-body dynamics, kinematics, contact mechanics and gripper design are load-bearing here.

**Highly-valued undergraduate programs `✓`** — WPI BS Robotics (RBE 3001 Manipulation), Michigan Robotics BSE, CMU BS Robotics, MIT (Course 2 *2.12* / Course 6), UPenn (GRASP; CIS 3900), Georgia Tech.

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI, EE, or ME with a manipulation / robot-learning focus.

**Highly-valued postgraduate programs — ranked by manipulation strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **MIT · CMU (RI) · UPenn (GRASP) · Stanford** | MIT 6.4210/6.4212 (Tedrake) + 6.8200 Sensorimotor Learning · CMU **16-741 Mechanics of Manipulation (core)** · Penn MEAM 5200→6200, ESE 6510 Physical Intelligence · Stanford **CS326 Advanced Robotic Manipulation** |
| Strong | **Michigan · EPFL · ETH** | Michigan ROB 599 + ROB 511 Mobile Manipulation · EPFL **MICRO-450 (core)** + MICRO-462 (Billard/LASA) · ETH Real World Robotics |
| Present (industrial/embedded) | **TUM · Georgia Tech · QMUL · Edinburgh** | TUM MW0084 + EI7210 Humanoid · GT CS 8803 Mobile Manipulation · QMUL EMS628U + Cognitive Robotics (Jamone) · Edinburgh INFR11213 |

*(Imperial, TU Delft, Oxford = manipulation-by-research, not coursework.)*

**Highly-valued certifications `✓`** — Northwestern **Modern Robotics** (Course 5 — "Robot Manipulation *and Wheeled Mobile Robots*"; manipulation is half a course, not a dedicated one) · **Hugging Face LeRobot** (learning-based manipulation) · DeepLearning.AI ML + Deep Learning · The Construct **ROS 2** (MoveIt) · NVIDIA **Isaac / Jetson AI Specialist** · Penn Robotics MicroMasters (edX). *(No official ROS cert / no NVIDIA robotics exam — see grounding ref.)*

**Experience & portfolio** — L1: internship/academic, sim pick-and-place. L2: 2–4 yr, real-arm grasping demo + benchmark numbers, a sim-to-real project. L3: 5–8 yr, ≥1 real deployment led. L4/L5: 8+ yr and/or first-author papers (RSS/CoRL/ICRA/RA-L).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and **C++** for real-time robotics
- Robot **kinematics & dynamics**; forward/inverse kinematics; frame transforms (TF)
- **Motion planning** for manipulators (MoveIt / OMPL; sampling-based & optimization-based)
- **Grasp synthesis** and 6-DoF grasp detection from RGB-D / point clouds
- **Force / impedance / compliant control** for contact-rich tasks
- Manipulation **perception**: 6-DoF object pose estimation, point-cloud processing
- **ROS 2** development and real-robot integration
- Robot **simulation**: Isaac Sim/Lab, MuJoCo, PyBullet, or Drake
- **ML for manipulation**: behavior cloning, RL fundamentals, PyTorch
- **Sim-to-real** transfer and debugging on physical hardware

**Preferred / differentiating**
- **Dexterous / in-hand** and **bimanual** manipulation
- Imitation learning at scale; **diffusion / flow-matching policies**
- **VLA / foundation-model fine-tuning** (OpenVLA, π0, GR00T)
- **Tactile sensing** integration (GelSight/DIGIT) and visuo-tactile policies
- **Teleoperation & data-pipeline** design (ALOHA / UMI-style)
- Large-scale **sim data generation** (MimicGen/DexMimicGen, RoboCasa)
- Publications at **RSS / CoRL / ICRA / RA-L**; real-world deployment experience

**Tools & tech stack** — *Languages:* Python, C++ · *Middleware:* ROS 2, MoveIt 2 · *Sim:* Isaac Sim/Lab, MuJoCo, PyBullet, Drake, Genesis · *Learning:* PyTorch, LeRobot, Open X-Embodiment, diffusion/flow-policy libs · *Grasping:* GraspNet / Contact-GraspNet / AnyGrasp, GraspGen · *Hardware:* Franka, UR, Kinova; Robotiq / Allegro / Shadow hands; GelSight/DIGIT; RealSense

**Bar by tier** — L1: solid on the required list in sim + basic real-robot · L2: ships a real manipulation subsystem, fluent across the stack · L3: architects systems, deep in ≥1 differentiating area · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Manipulation slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** linear algebra · probability & statistics · optimization · data structures & algorithms · Python + C++.
- **Core robotics:** kinematics & dynamics *(CMU 16-711, MIT 2.12, EPFL MICRO-450)* · feedback/optimal/MPC & impedance control *(MIT 6.8210)* · motion planning *(CMU 16-782, Michigan ROB 520)* · computer vision / 3D perception *(CMU 16-720, Stanford CS231A)* · ROS 2 & MoveIt.
- **Niche-specific:** grasp mechanics & synthesis · contact/force/impedance control · manipulation planning · tactile & force sensing · dexterous/in-hand · bimanual · mobile manipulation *(Michigan ROB 511)*.
- **Frontier/advanced:** imitation learning / LfD · RL for manipulation · diffusion & flow policies · VLAs for manipulation · sim-to-real & domain randomization *(MIT 6.8200, UPenn ESE 6510)*.

## 6. Training Programme Design & Duration `✓`
Manipulation-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), specialization + capstone tuned to manipulation.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths, Python/C++, classical ML | 2.0 mo | 6 mo | 300 | ML & maths fluency |
| 2. Core robotics | Kinematics/dynamics, control, planning, **ROS 2/MoveIt** | 2.0 mo | 6–7 mo | 320 | Command an arm in sim + real |
| 3. AI/ML depth | Deep learning, computer vision, RL/imitation | 2.0 mo | 6 mo | 300 | Perception + policy learning |
| 4. **Manipulation specialization** | Grasp synthesis, force control, tactile, dexterous/bimanual, sim-to-real, VLA fine-tune | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Language-conditioned manipulation on a real arm + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior manipulation engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The manipulation frontier's "SAM2/DINO moment": named substrates everyone now fine-tunes and benchmarks against. `🆕` = 2026 release.

- **VLA foundation models (the generalist-policy race):** Physical Intelligence **π0 → π0.5 → π*0.6/RECAP** (reference flow-matching VLAs; π*0.6 adds self-improvement via RL + corrections) · **Gemini Robotics 1.5 / 🆕 ER 1.6** (leading *closed* "think-before-acting" stack) · NVIDIA **GR00T N1→N1.5→🆕 N2** (open humanoid FM; N2 reframed as a "world-action model") · **OpenVLA / OpenVLA-OFT** (the open workhorse — "the DINO of VLAs") · 🆕 **MolmoAct2** (Ai2; fully-open action-reasoning, claims to beat π0.5) · also **RDT-1B**, ByteDance **GR-3**, **SmolVLA** (edge), **Figure Helix** (humanoid), Toyota **LBM** (Atlas).
- **Action representation & policy heads:** **Diffusion Policy** (+ **3D Diffusion Policy**) — the foundational action head · **flow-matching policies** — the successor trend (real-time; now dominant in π0/GR-3/GR00T/SmolVLA) · **FAST / FAST+** action tokenizer + **LAPA** latent-action pretraining — the tokenized-AR vs continuous-flow debate, and using action-free video.
- **Reasoning + manipulation:** **Embodied Chain-of-Thought (ECoT)** (+28% on OpenVLA) · Gemini Robotics-**ER** · 🆕 **RoboBrain 2.5** (open embodied planner).
- **Data engines (scale demonstrations):** **UMI (Universal Manipulation Interface)** + ecosystem (DexUMI, 🆕 **YUBI**) — cheap in-the-wild data · **ALOHA / Mobile ALOHA** (bimanual teleop) · **MimicGen / DexMimicGen** (sim demo-multiplication, 60→21K) · egocentric-video scaling (**DexWild**, EgoMimic, EgoDex) · substrate corpora **Open X-Embodiment**, **DROID**, **AgiBot World**.
- **Tactile / touch foundation models:** **Sparsh** (Meta FAIR — self-supervised touch representation, "the DINO of touch") + **Digit 360/Plexus** hardware · **AnyTouch / 🆕 AnyTouch 2**, T3, UniTouch (cross-sensor) · visuo-tactile policies (3D-ViTac, ManiWAV).
- **Dexterous & in-hand:** RL sim2real lineage — Dactyl → AnyRotate → **DextrAH-G/RGB** → the 2025 humanoid vision-based dexterity "recipe" (Lin et al.).
- **Sim, real2sim & data-gen:** **RoboCasa** (+ 🆕 RoboCasa365) generative sim · **Gaussian-splatting real2sim** (RoboGSim) · **asset-retrieval real2sim** (Digital Cousins — real2sim, but not Gaussian-splatting-based) · GPU substrate **Isaac Lab / MuJoCo Playground / Genesis / 🆕 Newton** (differentiable engine) · evaluation **RoboArena** (distributed real-world "Chatbot Arena for policies") & SIMPLER.
- **Grasping foundations:** **AnyGrasp** (generalist dense 6/7-DoF grasp perception) · **GraspGen** (2025 diffusion-transformer + 53M-grasp open dataset) · **DexGraspNet 2.0** · language-guided grasping (DexGraspVLA).
- **Equivariant / geometric methods:** **EquiBot**, Equivariant Diffusion Policy, RiEMann — symmetry for extreme sample efficiency.

*Net trend: converging on continuous chunked action generation (flow matching), foundation-model pretraining on pooled + human-video + sim-multiplied data, touch as a first-class modality, and reproducible real-world eval (RoboArena). Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | FK/IK + pick-and-place in PyBullet/Isaac Sim | Kinematics + sim workflow; reliable sim pick-and-place |
| Applied | 6-DoF grasp detection → execute on **UR5e / Franka** via **MoveIt2** | Perception→plan→execute; >80% grasp success on novel objects |
| Applied | Force-controlled **peg-in-hole** insertion | Compliant/force control; robust insertion <1 mm |
| Advanced | **Imitation learning** from teleop (ALOHA-style bimanual) | Data collection + BC/diffusion policy; multi-step task |
| Advanced | **RL grasping + domain randomization → sim-to-real** | Learning + transfer; sim-trained policy works on real hardware |
| Capstone | **Language-conditioned manipulation**: fine-tune a VLA (OpenVLA / π0) on a real arm | End-to-end frontier stack; executes natural-language pick/place |

## 9. Required Lab Setup / Hardware / Resources
- **Robot arms:** Franka **Panda / Research 3** · Universal Robots **UR5e/UR10e** · **Kinova Gen3** · **xArm** (budget) · **Trossen ViperX / ALOHA** (bimanual + teleop).
- **End-effectors:** Robotiq 2F-85 / Hand-E · **Allegro Hand / Shadow Dexterous Hand** · suction.
- **Tactile & force:** **GelSight**, **DIGIT** · ATI / Bota F/T sensors.
- **Vision:** Intel RealSense D435/D455 · Zivid / Photoneo (industrial 3D).
- **Compute:** RTX 4090 / A6000 workstation; A100/H100 for large-scale RL / VLA training.
- **Software / sim:** Isaac Sim/Lab · MuJoCo · PyBullet · Drake · ROS2 + MoveIt2 · Genesis.
- **Datasets & benchmarks:** Open X-Embodiment · DROID · RoboMimic · YCB (+ physical kit) · GraspNet-1Billion · ACRONYM/EGAD · **ManiSkill · RLBench · robosuite · Meta-World**.

## 10. Partnerships & Ecosystem
- **Hardware vendors:** Franka Robotics · Universal Robots · Kinova · Robotiq · Shadow Robot · Trossen Robotics · Intel RealSense · ATI.
- **Sim / compute:** NVIDIA (Isaac, DLI, Inception) · Google DeepMind (MuJoCo).
- **Academic labs (manipulation powerhouses):** MIT (Tedrake/RLG) · CMU RI · **UPenn GRASP** · Stanford (IPRL; Bohg/Finn) · **EPFL LASA (Billard)** · ETH · UC Berkeley (Abbeel; Goldberg/AUTOLAB).
- **Open-source communities:** Open Robotics (ROS/MoveIt) · Hugging Face **LeRobot** · Open X-Embodiment consortium.
- **Industry programs:** NVIDIA Inception · Toyota Research Institute · Physical Intelligence · humanoid players (Figure, Agility, 1X).
- **Standards (applied):** ISO 10218-1/2, ISO/TS 15066.

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme.
- **Project rubrics** with objective metrics: grasp success rate on held-out YCB, sim-to-real transfer success, insertion tolerance, task completion, cycle time.
- **Standardized benchmarks** as portable evidence: ManiSkill / RLBench / Meta-World; increasingly **RoboArena**-style real-world eval.
- **Recognized certifications as evidence:** Modern Robotics completion; Hugging Face LeRobot; a ROS 2 credential.
- **Senior tiers:** portfolio + system-design interview + live pipeline debugging.

## 12. Adjacent & Related Niches
Feeds into **A7 VLAs / foundation models** and the **C5 Humanoid** platform track; pairs closely with **A1 perception**, **A4 force/compliant control**, **A6 imitation/RL**. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A5 (`✓`). §7 stamped mid-2026 — re-research before publish.*
