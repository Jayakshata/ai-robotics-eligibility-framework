# Sim-to-Real Transfer & Representation Learning — Credentials & Subjects (niche-specific)

Niche: A6 Robot Learning → **Sim-to-real transfer, domain randomization/adaptation, self-supervised & representation learning for robotics.** This file records only what is **specific** to this niche; the shared valued-degree tiers, canonical subjects, and duration model live in `_grounding-reference.md`. Sources are cited inline; 2024–2026 where possible.

**One-line character of the niche:** this is the *most deep-learning-heavy corner of robotics* — it is applied deep RL + generative/representation learning pointed at embodiment. Credentials that signal strong ML/RL research skew matter more here than hardware breadth.

---

## 1. Strongest programs & the specific courses that make them strong

This niche is **graduate-course-driven**: the defining skills live in named deep-RL, meta-learning, and unsupervised/representation-learning courses, not in a "robotics" core. The load-bearing courses:

**Postgraduate (the anchors)**
- **Stanford** — **CS 224R Deep Reinforcement Learning** (Finn) has an explicit **"RL for Robots: Sim-to-Real Transfer"** lecture plus Meta-RL, Offline RL, Model-Based RL, Multi-Task/Goal-Conditioned RL. **CS 330 Deep Multi-Task and Meta Learning** (Finn) is the niche's domain-adaptation/generalization + contrastive self-supervised-pretraining course. **CS 236 Deep Generative Models** (feeds domain randomization + world models). [cs224r.stanford.edu, cs330.stanford.edu]
- **UC Berkeley** — **CS 285 Deep Reinforcement Learning** (Levine): its **Transfer/Meta-Learning lecture (lec-22)** teaches **domain randomization** (Tobin 2017) and sim-to-real directly; plus model-based + offline RL. **CS 294-158 Deep Unsupervised Learning** (Abbeel) is *the* self-supervised/representation-learning + deep-generative course. **CS 287 Advanced Robotics** (Abbeel) has a named **"Sim2Real and Domain Randomization"** lecture. [rail.eecs.berkeley.edu/deeprlcourse]
- **UT Austin** — **CS 391R Robot Learning** (Yuke Zhu) is the tightest single-course fit: named lectures **"Representation Learning for Robotics," "Sim-to-Real Gap," "State Estimation," "Imitation as Supervised Learning," "Model-based RL," "Learning to Learn."** [cs.utexas.edu/~yukez/cs391r_fall2023]
- **CMU** — **16-831 Introduction to Robot Learning** (Guanya Shi): RL (model-based/-free/offline), imitation (BC/DAgger/inverse RL), generative models for robotics, and explicitly **"transfer policies from simulation to the real world."** Backed by **10-703 Deep RL**. [16-831.github.io]
- **ETH Zurich** — **263-5911-00L "Robot Learning: From Fundamentals to Foundation Models"** (Oier Mees, CVG): imitation → RL → generative/diffusion policies → sequence models → **world models** → generalist/VLA. The **Robotic Systems Lab (Hutter)** is the sim-to-real powerhouse (ANYmal RL locomotion). [cvg.ethz.ch/lectures/Robot-Learning, rsl.ethz.ch]
- **NYU** — **DS-GA 1008 Deep Learning** (LeCun/Canziani): self-supervised learning, energy-based models, **world models**, representation learning — the canonical SSL/representation course, fully online. [atcold.github.io/NYU-DLSP20]
- **University of Michigan** — **DeepRob (ROB 498/599) "Deep Learning for Robot Perception"** (Jenkins/Opipari/Desingh): deep representation learning for robot perception. [deeprob.org]

**Undergraduate.** No flagship BS carries a *dedicated* sim-to-real course — it is a senior-elective + project layer. Strongest entry points: **Berkeley** (CS 188/189 → CS 285, open to seniors), **Stanford** (CS 221/229 → CS 224R), **Michigan DeepRob** (ROB 498, undergrad-numbered), **CMU 16-831** (open to undergrads), **Georgia Tech CS 7643 Deep Learning**, and the **WPI/Michigan/CMU robotics BS** sim+RL sequences. The signal at undergrad is a *sim-to-real RL capstone* (Isaac Lab/MuJoCo → real robot), not a course title.

---

## 2. Certifications & MOOCs (niche-specific, named)

- **University of Alberta — Reinforcement Learning Specialization** (Coursera; A. & M. White; Sutton & Barto): the RL-theory gold standard, 4 courses / 17 modules. *The* foundational MOOC for this niche. [coursera.org/specializations/reinforcement-learning]
- **Hugging Face — Deep RL Course** (free, real certificate; 8 units; SB3/RLlib; PyBullet): the accessible hands-on RL entry. [huggingface.co/learn/deep-rl-course]
- **Pieter Abbeel — "Foundations of Deep RL"** (free 6-lecture series): compact deep-RL spine (DQN→PPO→SAC→model-based). [YouTube playlist]
- **NVIDIA DLI / Isaac learning path** — Isaac Sim/Lab policy training, **domain randomization**, and sim-to-real deployment ("Reinforcement Learning for Robots — Getting Started with Isaac Lab"). Domain randomization is the core sim-to-real technique and **Isaac Lab is its industry-standard platform**, so this is the most niche-relevant applied credential. [nvidia.com/learn/learning-path/robotics, developer.nvidia.com/isaac/lab]
- **Free full-course materials as de-facto credentials:** Berkeley **CS 285** and **CS 294-158**, NYU **DS-GA 1008** (all public) — completing them + published code is strong portfolio evidence.
- **The Construct — "Mastering Reinforcement Learning for Robotics"** (ROS-integrated, applied). **Hugging Face LeRobot** (imitation/representation, cutting-edge).
- Prereq layer (from `_grounding-reference.md` Tier 1): DeepLearning.AI **ML** + **Deep Learning** Specializations.

---

## 3. Subject list (grounded in the syllabi above)

**Foundational maths & CS**
- Linear algebra; **probability & stochastic processes / MDP math** (Alberta RL Spec); **optimization** (SGD, convex); **information theory** (InfoNCE/contrastive objectives); Python + **PyTorch**; data structures & algorithms.

**Core robotics**
- Kinematics & dynamics; feedback/optimal control & **MPC**; **state estimation** (CS 391R); computer vision / 3D perception; **ROS 2**; **simulation** (Isaac Sim/Lab, MuJoCo, Gazebo) — the substrate the whole niche runs on.

**Niche-specific (the defining layer)**
- **Deep RL** — model-free, model-based, offline (CS 285, CS 224R, Alberta Spec).
- **Imitation learning / LfD** — BC, DAgger, inverse RL (CMU 16-831, CS 391R).
- **Sim-to-real transfer & domain randomization** (CS 285 lec-22, CS 287, Isaac Lab).
- **Domain adaptation & domain generalization** (CS 330).
- **Meta-learning / multi-task / learning-to-learn** (CS 330, CS 224R Meta-RL, CS 391R).
- **Self-supervised & representation learning for robotics** — contrastive, masked autoencoders, DINO-style, **state-representation learning** (CS 391R "Representation Learning for Robotics," CS 294-158, NYU DL).
- **Deep generative models** — VAEs, GANs, diffusion (for randomization + world models) (CS 236, CS 294-158).

**Frontier / advanced**
- **World models & latent-space planning** (ETH, NYU DL); **diffusion/flow policies**; **sequence models / decision transformers** (ETH); representation transfer via **VLA/foundation models**; **real2sim & sim data generation** (Gaussian-splatting digital twins); **goal-conditioned & unsupervised skill discovery** (CS 224R); **online/test-time domain adaptation**.

---

## 4. Niche-specific eligibility adjustment (vs. the general set)

This niche shifts weights **toward the ML/research side** more than any other A-cluster:

- **Rises:** **CS (with ML/AI)** and **AI/ML** degrees move to the clear top — the niche is fundamentally deep learning + RL. **Mathematics/Statistics** and **Physics** rise from general Tier-2 to *near Tier-1* (probability, optimization, information theory, and generative modeling are load-bearing; a Math/Stats or Physics grad with ML coursework outcompetes here far more than in hardware-facing niches).
- **Holds:** **EE/ECE** stays Tier-1 but tilts to the ML side (signals/estimation/embedded still matter for real-robot deployment).
- **Falls:** **Mechanical Engineering** drops relative to its manipulation/control standing — contact mechanics and mechanism design are much less load-bearing; ME qualifies only with substantial RL/deep-learning coursework.
- **PhD premium is higher than the general set,** and unusually the *venue mix skews to ML conferences*: **NeurIPS / ICLR / ICML** count alongside **CoRL / RSS / ICRA**. First-author sim-to-real / representation-learning papers are the strongest senior signal.

---

## Sources
- Stanford CS 224R — https://cs224r.stanford.edu/ ; CS 330 — https://cs330.stanford.edu/ , https://web.stanford.edu/class/cs330/
- UC Berkeley CS 285 — https://rail.eecs.berkeley.edu/deeprlcourse/ ; lec-22 (domain randomization/sim2real) — https://rail.eecs.berkeley.edu/deeprlcourse/static/slides/lec-22.pdf ; CS 294-158 — https://sites.google.com/view/berkeley-cs294-158-sp24/home ; CS 287 "Sim2Real and Domain Randomization" — https://www.youtube.com/watch?v=ac_W9IgKX2c
- UT Austin CS 391R Robot Learning — https://www.cs.utexas.edu/~yukez/cs391r_fall2023/ , /syllabus.html
- CMU 16-831 Introduction to Robot Learning — https://16-831.github.io/fall25/
- ETH Zurich 263-5911-00L Robot Learning — https://cvg.ethz.ch/lectures/Robot-Learning/ ; RSL RL-for-robotics — https://rsl.ethz.ch/research/researchtopics/rl-robotics.html
- University of Michigan DeepRob (ROB 498/599) — https://deeprob.org/w25/syllabus/
- NYU DS-GA 1008 Deep Learning (LeCun/Canziani) — https://atcold.github.io/NYU-DLSP20/
- Alberta RL Specialization — https://www.coursera.org/specializations/reinforcement-learning ; Hugging Face Deep RL — https://huggingface.co/learn/deep-rl-course/ ; Abbeel Foundations of Deep RL — https://www.youtube.com/playlist?list=PLwRJQ4m4UJjNymuBM9RdmB3Z9N5-0IlY0
- NVIDIA Isaac Lab + RL/sim-to-real learning path — https://developer.nvidia.com/isaac/lab , https://www.nvidia.com/en-us/learn/learning-path/robotics/ ; The Construct RL for Robotics — https://www.theconstruct.ai/robotigniteacademy_learnros/ros-courses-library/reinforcement-learning-for-robotics/
