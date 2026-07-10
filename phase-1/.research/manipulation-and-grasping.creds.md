# Manipulation & Dexterous Grasping — Niche Credentials & Subjects (research)

> Niche-specific research for **A5 · Manipulation & Dexterous Grasping** (grasp synthesis, 6-DoF grasp perception, reach/manipulation planning, force/compliant contact control, learned manipulation policies, dexterous/in-hand & bimanual). **Does NOT re-derive the shared backbone** (valued-degree tiers, canonical subjects, duration model) — that lives in `phase-1/_grounding-reference.md`. This file captures only what is *specific* to manipulation. Sources favor 2024–2026; URLs at end. `✓` course/number/claim web-verified this pass · `~` to re-verify / could not fully confirm at source.
>
> ⚠️ **Backfilled 2026-07-10 by re-research; the original report was never persisted.** This is a fresh re-research pass against live catalog/course pages and job postings — NOT a recovery of the report that was supposed to sit behind the `manipulation-and-grasping.md` profile. Where this pass diverges from the profile's assertions, the divergence is called out inline and summarized for the audit.

---

## 1. Highly-valued UNDERGRADUATE programs (named + courses)

The UG manipulation differentiator is a program with an **actual arm-manipulation build course** (kinematics → grasp → control → integrate on real hardware), not just a general robotics track. The mechanics/hardware content is why manipulation routes through ME as much as CS/EE.

- **WPI — BS Robotics Engineering** `✓` — the standout: **RBE 3001 "Unified Robotics III: Manipulation"** is a genuine *undergraduate* manipulation course (transformations, position/velocity kinematics, trajectory planning, robot forces & dynamics, computer vision, control) culminating in building & programming a vision-guided multi-DoF manipulator. Part of the 4-course Unified Robotics sequence. [wpi.cleancatalog.net]
- **MIT — Course 2 (MechE)** `✓` — **2.12 "Introduction to Robotics"** (Asada & Youcef-Toumi): robot mechanisms, planar/spatial kinematics, mechanism design *for manipulators*, multi-rigid-body dynamics, actuators/sensors, ROS labs, build-a-robot term project. This is the Course-2 (mechanical) on-ramp; Course 6 (6-4 AI & Decision-Making) supplies the learning side. [meche.mit.edu, web.mit.edu/2.12]
- **UPenn — AI BSE / CIS + GRASP** `✓` — **CIS 3900 "Robotics: Planning Perception"** (CS-flavored intro: planning + perception algorithms implemented in Python on real ground/aerial platforms). GRASP is the undergrad→grad manipulation on-ramp. *(Note: CIS 3900 is planning/perception, not a manipulation-only course — it's the undergrad robotics marker, not a grasp course.)* [catalog.upenn.edu]
- **University of Michigan — Robotics BSE** `✓` · **CMU BS Robotics (2023)** · **Georgia Tech** — strong via a dynamics/controls + kinematics core plus a capstone; Michigan's undergrad **ROB 380/511 (AutoRob)** mobile-manipulation stack is unusually deep for UG. [robotics.umich.edu, autorob.org]

---

## 2. Highly-valued POSTGRADUATE programs (named + courses)

Grouped strongest-first by manipulation coursework depth. This is where the niche concentrates.

**World-leading (dedicated, actively-running manipulation courses)**
- **MIT** `✓` — **6.4210 / 6.4212 "Robotic Manipulation: Perception, Planning, and Control"** (Tedrake, Drake-based) — *the* reference manipulation course; live **Fall 2025** (`manipulation.csail.mit.edu/Fall2025`). Covers deep-learning + 3D-geometry perception, kinematics/trajectory-gen, collision-free motion planning, **task-and-motion planning**, planning under uncertainty, model-based + learned control. 6.4212 = grad variant (harder psets, deeper final project); course notes numbered **6.421**. Plus **6.8200 "(Computational) Sensorimotor Learning"** (Pulkit Agrawal): RL, self-supervised, imitation, model-based learning for control (prev. 6.884 / 6.S897). [manipulation.csail.mit.edu, pulkitag.github.io/6.8200]
- **CMU Robotics Institute** `✓` — **16-741 "Mechanics of Manipulation"** — the classic (Matt Mason, 30+ yrs; recent offerings taught by Zackory Erickson): kinematics/statics/dynamics of manipulators, intelligent use of kinematic constraint, gravity & **frictional forces**, rigid-body mechanics, planning-based-on-mechanics, deformable & dynamic manipulation. **Live through Fall 2025** (`zackory.com/16741-25`); listed on the **MechE** course pages, 12 units, Fall. Complemented by **16-740 "Learning for Manipulation"** and **16-711 "Kinematics, Dynamic Systems & Control"** (Action core-area, also MechE-listed). *(On the profile's "(core)": 16-741 is a core-**area** course toward RI requirements, not a single universally-required course — accurate as "foundational/core-area," precise-worded.)* [meche.engineering.cmu.edu/16-741, mrsd.ri.cmu.edu]
- **UPenn GRASP** `✓ / ~` — **MEAM 5200 "Introduction to Robotics"** `✓` (Holladay; live Fall 2026). **MEAM 6200 "Advanced Robotics"** `~` (real course, formerly MEAM 620 → 6200; NOT in the Fall-2026 listing this pass). **ESE 6510 "Physical Intelligence: Science & Systems"** `~` (catalog-confirmed via Coursicle; also not in the Fall-2026 GRASP list — likely off-cycle). GRASP's Fall-2026 manipulation-adjacent electives that *are* live: **MEAM 5170 "Control & Optimization with Applications in Robotics"** and **ESE 6180 "Learning for Dynamics & Control."** [grasp.upenn.edu, coursicle.com]
- **Stanford** `✓` — **CS 326 "Topics in Advanced Robotic Manipulation"** (exact title; survey of classical + learning-based manipulation, motion planning/control with visual + **tactile** perception, generalization/exploration/representation; prereq CS 223A/229). Feeds off **CS 223A "Introduction to Robotics"** (Khatib). [web.stanford.edu/class/cs326, cs.stanford.edu/groups/manips]

**Strong**
- **EPFL** `✓` — **MICRO-450 "Basics of Robotics for Manipulation"** is a **named core course** of the MSc Robotics (alongside MICRO-452 mobile, MICRO-455 ML I, ME-425 MPC): serial/parallel/Cartesian architectures, sensors, kinematics & dynamic modelling, control (Bouri). Plus **MICRO-462 "Learning & Adaptive Control for Robots"** (Billard/LASA; dynamical-systems approach to reactive/compliant control — MIT-Press book). [edu.epfl.ch]
- **University of Michigan** `✓` — **ROB 511 "Mobile Manipulation Systems"** (full-stack autonomous manipulation: robot description, path/motion planning, reactive control, FK/IK, dynamical sim, middleware; cross-listed UG as ROB 380 "AutoRob," Chad Jenkins). **ROB 599** = *Special Topics* (generic umbrella — manipulation content depends on the term's offering, not a fixed course). [bulletin.engin.umich.edu, autorob.org]
- **ETH Zurich** `✓` — **"Real-World Robotics"** (Katzschmann, Soft Robotics Lab): teams **design, build & control a dexterous robotic hand from scratch** with RL — one of the few courses anywhere centered on physical dexterous-hand manipulation; student projects have yielded IROS papers. [srl.ethz.ch/education/real-world-robotics]

**Present (industrial / embedded / manipulation-by-faculty)**
- **TUM** `✓` — **MW0084 "Montage, Handhabung und Industrieroboter" (Assembly, Handling & Industrial Robots)** (Daub; live WS 2025/26) — an *industrial handling/manipulation* module, not a learning-manipulation course; the profile's "(industrial/embedded)" placement is accurate. **EI7210 "Humanoid Robotic Systems"** (elective across MSc Robotics-Cognition-Intelligence / ME / ECE). [campus.tum.de]
- **Georgia Tech** `✓ / ~` — **CS 8803 "Mobile Manipulation"** (Dellaert & Hutchinson): perception→planning→manipulation skills → layered software architecture on hardware. Real course, but **CS 8803 is a Special-Topics number** and the public materials are 2020–2021 — treat *current* offering as `~`. [dellaert.github.io/teaching/8803MM]
- **QMUL** `✓` — **EMS628U "Advanced Robotics Systems"** (Jamone; motion planning, visual perception, ROS) + **EMS729P "Cognitive Robotics"** (Jamone). Manipulation signal is via Jamone's group ("The Intelligence of the Hand": grasping, dexterous manipulation, visuo-haptic, tool use), not the module titles. [sems.qmul.ac.uk/staff/l.jamone, qmul.ac.uk/modules]
- **Edinburgh** `✓` — **INFR11213 "Advanced Robotics"** (20 cr, School of Informatics / IPAB). General advanced-robotics course; manipulation depth is research-led, not a dedicated grasp course. [drps.ed.ac.uk]

*(Imperial, TU Delft, Oxford = manipulation-by-research rather than named coursework — consistent with the profile's parenthetical.)*

---

## 3. Certifications & MOOCs (named, with provider)

| Credential | Provider | Manipulation relevance |
|---|---|---|
| **Modern Robotics, Course 5** `✓ (title corrected)` | Coursera / Northwestern (Lynch) | Covers Ch. 12 **Grasping & Manipulation** (rigid-body contact modelling, form/force closure). **Correction:** the course is **"Robot Manipulation *and Wheeled Mobile Robots*"** — it is **NOT a dedicated manipulation course**; manipulation shares the course with wheeled-mobile (Ch. 13). The profile's "has a dedicated manipulation course" is **overstated**. Still the most relevant *theory* MOOC. |
| **🤗 Robotics Course (LeRobot)** `✓` | Hugging Face | Now a structured multi-unit course (classical robotics → learning): datasets, SOTA policies, real hardware. Supports **ALOHA/ALOHA-2 bimanual** + SO-100/SO-101 arms — the cutting-edge learning-based-manipulation path. [huggingface.co/learn/robotics-course] |
| **Robotics MicroMasters (PennX)** `✓` | edX / UPenn GRASP | 4 × 12-wk courses (Robotics Fundamentals, Vision Intelligence & ML, Dynamics & Control, **Locomotion Engineering**); stackable to Penn MSE Robotics (3 of 10 courses). **Note:** its dedicated-modality course is *Locomotion*, **not Manipulation** — it's a general-robotics credential here, not manipulation-specific. [edx.org/micromasters/pennx-robotics] |
| **DeepLearning.AI ML + Deep Learning Specializations** `✓` | Coursera / DeepLearning.AI | Baseline ML/DL for learned manipulation (imitation/diffusion/VLA). *(Per grounding ref.)* |
| **The Construct — ROS 2 / MoveIt** `✓` | The Construct | Applied MoveIt 2 motion-planning + real-arm integration — the practical manipulation-pipeline skill. *(Per grounding ref: no *official* ROS cert; The Construct is the third-party standard.)* |
| **NVIDIA Isaac / Jetson AI Specialist + DLI** `✓` | NVIDIA | Isaac Sim/Lab manipulation RL & sim-to-real; Jetson deployment. *(Per grounding ref: no dedicated NVIDIA robotics *exam*; DLI/Isaac tutorials are the signal.)* |

*(No manipulation-specific vendor certification exists as of mid-2026 — the credential spine is theory MOOC + LeRobot + a ROS 2/MoveIt course + an ML/DL specialization, plus a portfolio artifact.)*

---

## 4. Subject list (grounded in the syllabi above)

**Foundational maths & CS** — linear algebra · probability & statistics · optimization · data structures & algorithms · **Python + C++** *(MIT 6.4210/6.4212, CMU 16-711)*.

**Core robotics** — **rigid-body kinematics & dynamics** of serial manipulators (FK/IK, Jacobians, Newton-Euler/Lagrangian) *(CMU 16-711, MIT 2.12, EPFL MICRO-450, WPI RBE 3001)* · **motion planning for arms** (sampling-based + optimization-based; collision-free; **task-and-motion planning**) *(MIT 6.4210)* · **feedback / optimal control & MPC** *(EPFL ME-425, MEAM 5170)* · 6-DoF object-pose & 3D perception *(Stanford CS 223A/326)* · **ROS 2 + MoveIt 2** *(The Construct, Michigan ROB 511)*.

**Niche-specific (the manipulation core)** —
- **Grasp mechanics & synthesis:** contact modelling, friction, **form-/force-closure**, grasp quality *(CMU 16-741, Modern Robotics Ch. 12)*.
- **Contact-rich / force / impedance / compliant control:** interaction control for insertion/assembly, reactive control via dynamical systems *(EPFL MICRO-462 Billard/LASA)*.
- **Manipulation planning** (kinematic-constraint / gravity / friction exploitation), deformable & dynamic manipulation *(CMU 16-741)*.
- **Tactile & force sensing** and visuo-tactile perception *(Stanford CS 326)*.
- **Dexterous / in-hand manipulation** on multi-finger hands *(ETH Real-World Robotics)* · **bimanual** *(HF LeRobot / ALOHA)* · **mobile manipulation** *(Michigan ROB 511, GT CS 8803)*.

**Frontier / advanced** — **imitation learning / LfD** · **RL for manipulation** (PPO, massively-parallel sim) · **diffusion & flow-matching policies** · **VLAs for manipulation** (OpenVLA / π0 / GR00T) · **sim-to-real & domain randomization** *(MIT 6.8200, Stanford CS 326, UPenn ESE 6510 "Physical Intelligence")*.

---

## 5. Niche-specific ELIGIBILITY adjustment (vs. the general A5 set)

Baseline (grounding ref): Tier 1 = CS/AI, Robotics, EE/ECE; Tier 2 = ME, Mechatronics, Math, Physics.

**Rises**
- **Mechanical Engineering → Tier 1** `✓ (supported, with a scope caveat)` — **rigid-body dynamics, contact mechanics, friction/grasp mechanics, and gripper/end-effector design are load-bearing** for manipulation in a way they are not for perception/VLA niches. The *coursework itself routes through ME*: MIT **2.12** is Course-2 (MechE); CMU **16-741** and **16-711** sit on the **MechE** course pages; EPFL **MICRO-450** is a robotics-master core; Northwestern's *Modern Robotics* author (Lynch) **chairs MechE**. General career guidance is explicit: *"manipulation is all about the physical body of the robot… rooted in mechanical engineering — designing the limbs, joints, and grippers."* [standardbots.com, coursera.org, roboticscareer.org]
- **Mechatronics → Tier-1-adjacent** — end-effector/gripper integration, actuation, and sensor/actuator co-design.
- **Applied mechanics / tribology (contact & friction modelling)** is a genuine differentiator for contact-rich assembly.

**Falls / less sufficient alone**
- **Perception-only or NLP-flavored ML** carries less weight here than in A1/A7 unless paired with a real-arm manipulation artifact.
- A **CS/AI profile stays Tier 1** (the learned-policy frontier is deeply ML) but a pure-CS candidate must add manipulation *mechanics + a contact/force-control* course to be self-sufficient — you cannot skip contact dynamics for contact-rich tasks.

**⚠️ Adversarial counter-evidence (scope caveat on the ME→Tier-1 claim).** The *load-bearing-mechanics* argument is real, but the **flagship learned-manipulation job postings are CS/ML-centric, not ME-centric**:
- **Dexterity — "Senior Robotics Manipulation Engineer"** (a manipulation-first company) requires **"BS/MS/PhD in Computer Science or a related discipline"** — Python, modern C++, **imitation/RL/deep learning**, distributed training, task-and-motion planning. ME/EE are named only on Dexterity's separate **field-service / "Mech Specialist"** roles. [builtin.com]
- **Physical Intelligence** (VLA foundation-model manipulation) and **Tesla "AI Engineer / Deep-Learning Manipulation Engineer, Optimus"** emphasize C++/Python + imitation/RL + tactile/vision learning; the degree signal is CS/ML with *"comfort working hands-on with robotic hardware,"* not an ME requirement. [ziprecruiter.com, tesla.com] `~` (Tesla degree line not directly fetchable — inferred from the stated skill profile).

**Reconciliation.** Both are true, and they split by *sub-role*: ME **does** rise to Tier 1 for the **embodiment / hardware / contact-mechanics / gripper-design** side and is elevated versus perception/VLA niches by the mechanics content and program routing — **but it rises *on the strength of the mechanics*, not because frontier learned-manipulation employers ask for an ME degree** (they ask for CS/ML). The strongest manipulation engineers are bilingual: ME-grade contact/rigid-body mechanics **plus** ML. The profile's headline ("ME rises to Tier 1") is **supportable and correctly directional**, provided it is read as *ME-alongside-CS/Robotics/EE/AI*, not *ME-instead-of-ML*.

**Rule of thumb:** require **≥1 course in manipulation mechanics/kinematics AND ≥1 in force/compliant control**, plus a manipulation artifact (a real-arm 6-DoF grasp pipeline, a force-controlled peg-in-hole, or a learned manipulation policy taken sim-to-real). This replaces the generic "≥1 robotics course / ROS capstone" gate for this niche.

---

## Sources

*(Directly WebFetched this pass are marked ⬇; the rest are authoritative course/catalog/job pages surfaced and read via search this pass.)*

- MIT 6.4210/6.4212 Robotic Manipulation: https://manipulation.csail.mit.edu/ · Fall 2025: https://manipulation.csail.mit.edu/Fall2025/ · OCW: https://ocw.mit.edu/courses/6-4210-robotic-manipulation-fall-2022/ · 6.8200 Sensorimotor Learning: https://pulkitag.github.io/6.8200/ · 2.12 Intro to Robotics: https://meche.mit.edu/featured-classes/introduction-robotics · https://web.mit.edu/2.12/
- CMU 16-741 Mechanics of Manipulation ⬇: https://www.meche.engineering.cmu.edu/education/courses/16-741.html · offerings https://zackory.com/16741-25/ · 16-711 KDC: https://www.meche.engineering.cmu.edu/education/courses/16-711.html · MRSD/RI curriculum: https://mrsd.ri.cmu.edu/curriculum/
- Stanford CS 326 Topics in Advanced Robotic Manipulation: https://web.stanford.edu/class/cs326/ · CS 223A (Khatib): https://cs.stanford.edu/groups/manips/teaching/cs223a/
- UPenn CIS courses (CIS 3900 Robotics: Planning Perception) ⬇: https://catalog.upenn.edu/courses/cis/ · GRASP grad courses Fall 2026 ⬇: https://www.grasp.upenn.edu/academics/masters-degree-program/current-students/robotics-graduate-courses-fall/ · ESE 6510 Physical Intelligence: https://www.coursicle.com/penn/courses/ESE/6510/ · Robotics MicroMasters: https://www.edx.org/micromasters/pennx-robotics · https://penntoday.upenn.edu/news/penn-engineering-offers-online-micromasters-robotics
- EPFL MICRO-450 Basics of Robotics for Manipulation: https://edu.epfl.ch/coursebook/en/basics-of-robotics-for-manipulation-MICRO-450 · MICRO-462 Learning & Adaptive Control (Billard): https://edu.epfl.ch/coursebook/en/learning-and-adaptive-control-for-robots-MICRO-462 · MSc Robotics study plan: https://edu.epfl.ch/studyplan/en/master/robotics/
- Michigan ROB 511 / AutoRob: https://autorob.org/ · Robotics bulletin: https://bulletin.engin.umich.edu/courses/robotics-courses/ · course list: https://robotics.umich.edu/academics/courses/complete-course-list/
- ETH Real-World Robotics (Katzschmann): https://srl.ethz.ch/education/real-world-robotics.html
- TUM MW0084 (Assembly, Handling & Industrial Robots): https://campus.tum.de/tumonline/wbModHBReport.wbGenHTMLForBeschr?pKnotenNr=261279 · EI7210 Humanoid Robotic Systems / RSI teaching: https://www.ce.cit.tum.de/en/rsi/teaching/tum-courses-single-view/
- Georgia Tech CS 8803 Mobile Manipulation (Dellaert/Hutchinson): https://dellaert.github.io/teaching/8803MM
- QMUL EMS628U Advanced Robotics Systems: https://www.qmul.ac.uk/modules/items/ems628u-advanced-robotics-systems.html · Jamone teaching: https://www.sems.qmul.ac.uk/staff/l.jamone/teaching/
- Edinburgh INFR11213 Advanced Robotics: https://www.drps.ed.ac.uk/22-23/dpt/cxinfr11213.htm
- WPI RBE 3001 Unified Robotics III: Manipulation: https://wpi.cleancatalog.net/robotics-engineering/rbe-3001
- Northwestern Modern Robotics specialization: https://www.coursera.org/specializations/modernrobotics · Course 5 "Robot Manipulation and Wheeled Mobile Robots": https://www.coursera.org/learn/modernrobotics-course5
- Hugging Face Robotics Course (LeRobot): https://huggingface.co/learn/robotics-course/en/unit0/1 · https://github.com/huggingface/lerobot
- Dexterity "Senior Robotics Manipulation Engineer" JD ⬇: https://builtin.com/job/senior-robotics-manipulation-engineer/4338739 · Physical Intelligence Robotics Research Engineer: https://www.ziprecruiter.com/c/Physical-Intelligence/Job/Robotics-Research-Engineer/ · Tesla "AI Engineer, Manipulation, Optimus": https://www.tesla.com/careers/search/job/ai-engineer-manipulation-optimus-224501
- ME-in-manipulation framing: https://standardbots.com/blog/mechanical-engineering-robotics · https://www.coursera.org/articles/robotics-engineering · https://www.roboticscareer.org/news-and-events/news/27373
