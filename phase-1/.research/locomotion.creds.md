# Locomotion & Loco-Manipulation — Niche Credentials & Subjects (research)

> Niche-specific research for **A5 · Locomotion & Loco-Manipulation** (legged bipedal/quadruped, wheeled, aerial, underwater; model-based vs. learned gait; loco-manipulation). **Does NOT re-derive the shared backbone** (valued-degree tiers, canonical subjects, duration model) — that lives in `phase-1/_grounding-reference.md`. This file captures only what is *specific* to locomotion. Sources favor 2024–2026; URLs at end. `✓` course/number web-verified this pass · `~` to re-verify.

---

## 1. Highly-valued UNDERGRADUATE programs (named + courses)

The locomotion differentiator at UG level is a program with **deep dynamics/controls + an actual locomotion or bio-inspired course**, not just a general robotics track.

- **University of Michigan — Robotics BSE** `✓` — the standout: **ROB 413 "Legged Locomotion"** is a rare *undergraduate* course on legged-robot modeling, hybrid dynamics, gait optimization and agile control (Grizzle/HZD lineage). Plus ROB 311 build-focused robotics and a dynamics/controls core. [bulletin.engin.umich.edu]
- **Oregon State University — Robotics / ME** `✓` — home of Cassie/Digit (Hurst, Agility Robotics spinout) + Alan Fern RL-on-Cassie. UG feeds the Dynamic Robotics Lab; ROB catalog has **ROB 542 Actuator Dynamics** (passive dynamics for legged), **ROB 537 Learning-Based Control**. [engineering.oregonstate.edu]
- **Caltech — ME + Control & Dynamical Systems** `~` — Ames AMBER Lab (bipedal); heavy nonlinear/hybrid-control undergrad grounding — the theory spine for locomotion.
- **CMU BS Robotics · MIT (Course 2 MechE / 6-4) · WPI BS Robotics · UPenn (AI/CIS + GRASP)** — strong via dynamics + controls + capstone; UPenn is the UG on-ramp to aerial (Kumar). ETH/TUM ME give the mechanics/control foundation Europe funnels into their master's.

---

## 2. Highly-valued POSTGRADUATE programs (named + courses)

Grouped by locomotion modality — this is where the niche concentrates. Ranked strongest-first within group.

**Legged / bipedal / quadruped / humanoid loco-manip (world-leading)**
- **ETH Zurich — MSc Robotics, Systems & Control** `✓` — Hutter's Robotic Systems Lab (ANYmal), the global center for learned + model-based legged loco-manipulation. Core course **151-0851-00L "Robot Dynamics"** (Hutter/Siegwart) + **151-0854-00L "Autonomous Mobile Robots"**; RSL's open **"Legged Robots" YouTube lecture series** is de-facto courseware. *(Note: 151-0662 is "Programming for Robotics/ROS", NOT a legged course.)*
- **MIT** `✓` — **6.8210 "Underactuated Robotics"** (Tedrake — the gold-standard course for walking/running/flying/swimming dynamics, Drake-based) + **2.740 "Bio-inspired Robotics"** (Sangbae Kim, MIT Cheetah). [underactuated.csail.mit.edu, meche.mit.edu]
- **CMU Robotics Institute** `✓` — **16-715 "Advanced Robot Dynamics"** and **16-745 "Optimal Control & Reinforcement Learning"** (Zachary Manchester; 16-745 includes a dedicated Hybrid Systems & Legged Robots lecture). [optimalcontrol.ri.cmu.edu]
- **Oregon State — MS/PhD Robotics** `✓` — Cassie/Digit heritage; **ROB 542 Actuator Dynamics**, **ROB 537 Learning-Based Control**, **ROB 534 Sequential Decision Making**, **ROB 545 Kinematics/Dynamics/Control**. [catalog.oregonstate.edu]
- **UC Berkeley** `✓` — Sreenath Hybrid Robotics + Abbeel RL; **EE C106B/206B** carries explicit "Modeling & Dynamics of Legged Robots" and "Control of Legged Robots" lectures. [www2.eecs.berkeley.edu]
- **Caltech (Ames AMBER) · U-Michigan (Grizzle/HZD, ROB 413) · EPFL (MICRO-507) · IIT Genoa (HyQ) · TUM** — EPFL **MICRO-507 "Legged Robots"** (Ijspeert) is a full dedicated course: SLIP/inverted-pendulum templates, ZMP/capturability, HZD, CPGs, optimal control + RL. [edu.epfl.ch]

**Aerial (UAV / agile flight / aerial manipulation)**
- **University of Zurich — Scaramuzza RPG** `✓` — agile vision-based flight; **"Vision Algorithms for Mobile Robotics" (151-0632-00L, ETH cross-listed)** + **"Vision-Based Drone Flight" seminar**. [rpg.ifi.uzh.ch]
- **UPenn GRASP (Vijay Kumar)** `✓` — quadrotor dynamics, differential flatness, SE(3) geometric control, swarms — the foundational aerial curriculum (mirrored in the Coursera Aerial Robotics course).
- **ETH ASL (Siegwart) · Caltech CAST · TU Delft MAVLab · Georgia Tech** — strong aerial GNC/perception.

**Underwater / marine (AUV/ROV)**
- **Erasmus Mundus "MIR" — Marine & Maritime Intelligent Robotics** `✓` — the dedicated joint MSc: Y1 U. Toulon, then UJI-Girona (underwater intervention) / NTNU (subsea autonomy) / IST-Lisbon. [master-mir.eu]
- **MIT–WHOI · MIT 2.680 "Unmanned Marine Vehicle Autonomy, Sensing & Communication"** `✓` (LAMSS, MOOS-IvP autonomy stack) · **U. Girona CIRS/VICOROB · Heriot-Watt Ocean Systems Lab · NTNU AUR-Lab**. [oceanai.mit.edu]

*(Stanford/Berkeley/Penn assemble locomotion from optimal-control + RL courses rather than a single named degree.)*

---

## 3. Certifications & MOOCs (named, with provider)

| Credential | Provider | Locomotion relevance |
|---|---|---|
| **Underactuated Robotics** (6.832x / notes) `✓` | MIT / edX-OCW (Tedrake) | *The* free gold-standard for legged/flying/swimming dynamics & optimal control |
| **Robotics: Aerial Robotics** `✓` | Coursera / UPenn (Kumar) — part of Penn Robotics Spec + edX MicroMasters | Quadrotor modeling, control, planning; flagship aerial MOOC |
| **Flying Car & Autonomous Flight Engineer** (ND787) `✓` | Udacity (Thrun, N. Roy, Schoellig, D'Andrea) | Full aerial GNC + real flight-control software |
| **ETH "Legged Robots" lecture series** `✓` | ETH RSL (YouTube, open) | Reference legged-control curriculum |
| **EPFL MICRO-507 Legged Robots** `~` | EPFL (on-campus/materials) | Dedicated legged theory + control |
| **NVIDIA Isaac Lab / Isaac Gym legged RL + DLI** `✓` | NVIDIA | `legged_gym`/Isaac Lab ANYmal & Spot sim-to-real RL — the applied learned-gait skill path |
| **Self-Driving Cars with Duckietown** `~` | edX / ETH-Montreal | Wheeled locomotion + nav on real hardware |
| **Modern Robotics** (Ch. 13 Wheeled Mobile Robots) `✓` | Coursera / Northwestern (Lynch) | Foundation incl. wheeled-mobile kinematics |
| Hugging Face **Deep RL** · The Construct **ROS 2** | HF / The Construct | RL fundamentals for learned gait; ROS integration |

*(Per grounding ref: no official ROS cert; NVIDIA has no dedicated robotics exam — Isaac Lab tutorials are the practical signal.)*

---

## 4. Subject list (grounded in the syllabi above)

**Foundational maths & CS** — linear algebra · multivariable calculus & **differential equations** · **nonlinear dynamical systems / hybrid systems** (limit cycles, Poincaré maps) · probability & optimization · Python + C++ *(MIT 6.8210, CMU 16-715)*.

**Core robotics** — **rigid-body kinematics & dynamics** (floating-base, Lagrangian/Newton-Euler) *(ETH 151-0851, CMU 16-715, OSU ROB 545)* · **feedback & optimal control / MPC** *(CMU 16-745)* · state estimation & mobile-robot localization *(ETH 151-0854)* · motion planning · ROS 2 · physics simulation (MuJoCo/Isaac/Drake).

**Niche-specific** —
- **Legged:** gait & stability (**ZMP, capture point, SLIP/inverted-pendulum templates**, Raibert hopping) · **Hybrid Zero Dynamics** & underactuated walking *(MIT 6.8210, Michigan ROB 413, EPFL MICRO-507)* · whole-body & contact-implicit control · **actuator/series-elastic dynamics** *(OSU ROB 542)* · quadruped/biped trajectory optimization.
- **Wheeled:** differential-drive/Ackermann kinematics, nonholonomic constraints *(Modern Robotics Ch.13, ETH AMR)*.
- **Aerial:** quadrotor dynamics, **differential flatness, geometric control on SE(3)**, VIO *(UPenn Aerial Robotics, UZH RPG)*.
- **Underwater:** hydrodynamics/added mass, thruster allocation, acoustic nav (DVL/USBL), disturbance-robust control *(MIT 2.680, MIR)*.
- **Loco-manipulation:** whole-body MPC coupling base + arm; mobile-manipulation planning.

**Frontier / advanced** — **RL for locomotion** (PPO, teacher-student/privileged learning, massively-parallel sim) *(Isaac Lab; ETH RSL)* · **sim-to-real & domain randomization** · terrain-aware perceptive locomotion · learned + sampling-based/GPU MPC (DIAL-MPC, MuJoCo Playground) · central pattern generators / bio-inspired gaits *(EPFL, MIT 2.740)* · humanoid whole-body loco-manipulation & VLA-conditioned control.

---

## 5. Niche-specific ELIGIBILITY adjustment (vs. the general A5 set)

Baseline (grounding ref): Tier 1 = CS/AI, Robotics, EE/ECE; Tier 2 = ME, Mechatronics, Math, Physics. For locomotion:

**Rises**
- **Mechanical Engineering → Tier 1** `✓` — rigid-body & contact dynamics, actuation/SEA design, legged-mechanism synthesis are load-bearing (Michigan/OSU/Caltech/ETH all route locomotion through ME).
- **Control / Systems / Applied-Math (nonlinear & hybrid dynamics) → Tier 1-adjacent** — legged locomotion *is* a hybrid-dynamics + optimal-control problem (HZD, MPC, ZMP); Aerospace/GNC control transfers directly.
- **Aerospace / Aeronautical Engineering → rises for the *aerial* sub-niche** (flight dynamics, aerodynamics, GNC).
- **Ocean / Naval / Marine Engineering → rises for the *underwater* sub-niche** (hydrodynamics, marine vehicles) — normally not even Tier 2 elsewhere.
- **Biomechanics / bio-inspired** is a genuine differentiator (Sangbae Kim, Ijspeert).

**Falls / less sufficient alone**
- **Pure CS/AI or pure-vision/data-science backgrounds** are *less self-sufficient* here than in perception/VLA niches — you cannot skip dynamics + control. CS remains Tier 1 (learned gait is RL-heavy) but needs an explicit dynamics/controls + a locomotion/underactuated course to qualify.
- Perception-only or NLP-flavored ML profiles carry less weight than in A1/A7.

**Rule of thumb:** require **≥1 course in dynamics AND ≥1 in control**, plus a locomotion-flavored artifact (a legged RL sim-to-real, quadrotor controller, or AUV autonomy project) — this replaces the generic "≥1 robotics course/ROS capstone" gate for this niche.

---

## Sources
- Michigan ROB 413 / bulletin: https://bulletin.engin.umich.edu/courses/robotics-courses/ · UG curriculum arXiv 2308.06905 · Grizzle: https://grizzle.robotics.umich.edu/
- Oregon State ROB catalog: https://catalog.oregonstate.edu/courses/rob/ · https://engineering.oregonstate.edu/academics/programs/robotics/graduate
- MIT 6.8210 Underactuated: https://underactuated.csail.mit.edu/ · 2.740 Bio-inspired: https://meche.mit.edu/featured-classes/bio-inspired-robotics · 2.680: https://oceanai.mit.edu/2.680/syllabus/
- CMU 16-715: https://github.com/dynamics-simulation-16-715/syllabus · 16-745: https://optimalcontrol.ri.cmu.edu/
- ETH RSL Robot Dynamics: https://rsl.ethz.ch/education-students/lectures/robotdynamics.html · Legged locomotion research: https://rsl.ethz.ch/research/researchtopics/legged-locomotion.html
- UC Berkeley EECS C106B: https://www2.eecs.berkeley.edu/Courses/EECSC106B/ · Sreenath: https://hybrid-robotics.berkeley.edu/koushil/
- EPFL MICRO-507 Legged Robots: https://edu.epfl.ch/coursebook/en/legged-robots-MICRO-507
- UZH RPG teaching (Scaramuzza): https://rpg.ifi.uzh.ch/teaching.html · Caltech AMBER: http://www.bipedalrobotics.com/
- UPenn Aerial Robotics (Coursera): https://www.classcentral.com/course/robotics-flight-5025 · Kumar Lab: https://www.kumarrobotics.org/
- Udacity Flying Car ND787: https://www.udacity.com/course/flying-car-nanodegree--nd787
- NVIDIA Isaac Lab legged RL: https://developer.nvidia.com/blog/closing-the-sim-to-real-gap-training-spot-quadruped-locomotion-with-nvidia-isaac-lab/ · Isaac Lab arXiv 2511.04831
- Erasmus Mundus MIR (marine): https://www.master-mir.eu/programme/ · U. Girona CIRS · Heriot-Watt Ocean Systems Lab · WHOI Center for Marine Robotics
- Learned-legged-locomotion survey (IJRR 2025): arXiv 2406.01152
