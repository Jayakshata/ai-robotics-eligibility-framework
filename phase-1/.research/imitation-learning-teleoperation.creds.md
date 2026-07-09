# Imitation Learning & Teleoperation Data — Credentials & Subjects (research input)

*Niche: Axis A cluster **A6** — behavior cloning, learning-from-demonstration (LfD), diffusion/flow policies **as a learning method**, teleoperation rigs & data-collection pipelines. Scope-specific research only; the shared valued-degree tiers, canonical subject set, and duration model live in `_grounding-reference.md` and are NOT re-derived here. Sources favor 2024–2026. `✓` grounded · `~` verify at publish.*

**One-line framing:** of all embodied-AI niches this is the **most "pure-ML"** one — behavior cloning *is* supervised learning, diffusion/flow policies *are* generative modeling — so it tilts hardest toward CS/AI/ML/Stats, with a distinctive **HCI / human-factors** lift (teleoperation interfaces, learning-from-humans) and a **data-engineering** lift (the demonstration supply chain) that the other niches don't have.

---

## 1. Strongest university programs for THIS niche (named courses)

Almost all niche-specific teaching is **graduate**; undergrad strength = a strong ML/DL core + one robot-learning elective (behavior cloning is reachable from a good CS/ML BS + capstone).

### Postgraduate — ranked by strength for imitation learning & teleoperation `✓`

| Tier | Program | The load-bearing course(s) / signal |
|------|---------|-------------------------------------|
| **World-leading** | **UC Berkeley (RAIL/BAIR — Levine, Abbeel)** | **CS 285 Deep RL, Decision Making & Control** — the canonical course; **HW1 = behavior cloning + DAgger**; dedicated imitation-learning + offline-RL units. Largest IL research output in the field. (https://rail.eecs.berkeley.edu/deeprlcourse/) |
| **World-leading** | **Stanford (Finn, Sadigh/ILIAD, Bohg/IPRL, Song)** | **CS 224R Deep RL** (Finn/Hausman) — first assignment is imitation learning; **the teleoperation-data epicenter**: Diffusion Policy, **ALOHA/Mobile ALOHA**, **UMI**, **RoboTurk** all originated here. (https://cs.stanford.edu/) |
| **World-leading** | **CMU (Robotics Institute)** | **16-831 Introduction to Robot Learning** — a *dedicated* course whose core is **behavior cloning, DAgger, inverse RL**, generative models for robotics, and **learning from human/internet video**. (https://16-831.github.io/fall25/) |
| **World-leading** | **MIT** | **6.4210/6.4212 Robotic Manipulation** (Tedrake) — diffusion-policy + IL chapters; **Underactuated Robotics Ch. 21 "Imitation Learning"** (https://underactuated.mit.edu/imitation.html); **6.8200 Sensorimotor Learning** (Agrawal). (https://manipulation.csail.mit.edu/Fall2025/) |
| **Strong** | **UT Austin (RPL — Yuke Zhu; Peter Stone)** | **CS 391R Robot Learning** — IL for visuomotor skills; home of **RoboTurk** (crowdsourced teleop dataset) + **robomimic** (the standard IL-from-demos benchmark). (https://www.cs.utexas.edu/~yukez/cs391r_fall2023/logistics.html) |
| **Strong** | **Cornell (Choudhury)** | **CS 4756/5756 Robot Learning** — explicitly built on **imitation & interactive no-regret learning** and distribution shift (DAgger); now offered Fall **and** Spring. (https://www.cs.cornell.edu/courses/cs4756/2025sp/) |
| **Strong** | **Georgia Tech (Chernova)** | **CS 7648 Interactive Robot Learning** — the dedicated **Learning-from-Demonstration** course (learning from novice/noisy demos, active querying, human-subject eval); textbook *Robot Learning from Human Teachers*. Plus **CS 7633 HRI**. (https://www.critique.gatech.edu/course?courseID=CS+7648) |
| **Strong** | **Univ. of Washington** | **CSE 599G Deep Robotic Learning** — imitation learning, offline RL, multi-task/meta learning. (https://courses.cs.washington.edu/courses/cse599g/23wi/) |
| **Strong** | **USC (Nikolaidis, Sukhatme)** | **CSCI 699 Robot Learning** (robotics × ML × cog-sci × control) + **CSCI 545 Robotics** foundation. (https://liralab.usc.edu/csci699/) |
| **Strong (EU/UK)** | **EPFL (Billard/LASA)** | **MICRO-462 Learning & Adaptive Control for Robots** — a firm-core MSc course teaching **LfD via dynamical systems** (stable, reactive control from demonstrations); MIT-Press textbook. (https://edu.epfl.ch/coursebook/en/learning-and-adaptive-control-for-robots-MICRO-462) |
| **Strong (EU/UK)** | **Imperial College London (Johns — Robot Learning Lab)** | **70067 Robot Learning** MSc module — dedicated 7-week module on **behavioural cloning, inverse RL, learning interactively with humans**. (https://www.imperial.ac.uk/engineering/departments/computing/current-students/courses/70067/) |
| **Strong (EU/UK)** | **ETH Zurich (Mees)** | **263-5911-00L Robot Learning: From Fundamentals to Foundation Models** — imitation learning, RL, policy optimization → large-scale VLA policies. (https://vvzapi.ch/unit/201901) |
| Present (seminar) | **Princeton** | **COS/ROB 598A** robot perception & learning seminar (IL among topics). (https://robotics.princeton.edu/courses) |

### Undergraduate `~`
No dedicated IL undergrad degree. Strongest paths = programs with a heavy ML/DL core **plus** an accessible robot-learning elective: **UC Berkeley** (CS 285 is graduate but famously public/accessible), **CMU BS Robotics**, **MIT (6-4)**, **Stanford CS**, **UMich Robotics BSE**, **Georgia Tech CS** (Robotics/ML threads), **Cornell CS** (CS 4756 is offered at the 4000 level). The differentiator vs. general robotics is **strength in deep learning + generative models**, not mechanics.

---

## 2. Most relevant certifications & MOOCs `✓`

| Credential (provider) | Why it fits THIS niche | Cert? |
|---|---|---|
| **Hugging Face LeRobot / Robotics Course** | THE most niche-native: end-to-end **teleoperation → record demonstrations → train an imitation policy → deploy**, using leader-follower **SO-100/SO-101** arms; datasets pushed to the Hub; Unit 6 is *Imitation Learning*. (https://huggingface.co/learn/robotics-course/unit0/1 · https://huggingface.co/docs/lerobot/il_robots) | **No formal cert yet** (self-paced) `⏱` |
| **Hugging Face Deep RL Course** | Free, genuinely certificated (80% = completion, 100% = "excellence"); covers the policy-learning/decision backbone IL shares. (https://huggingface.co/learn/deep-rl-course/communication/certification) | **Yes (PDF/PNG)** |
| **Coursera RL Specialization — Univ. of Alberta** (White & White) | 4-course MDP/decision-making foundation underpinning behavior cloning & offline RL. (https://www.coursera.org/specializations/reinforcement-learning) | Yes (Coursera) |
| **UC Berkeley CS 285** (public lectures + HW) | Canonical BC + DAgger assignment; the reference IL curriculum. | No (audit) |
| **DeepLearning.AI ML + Deep Learning Specializations** | Behavior cloning *is* supervised learning; diffusion/flow policies need solid DL — this is the prerequisite spine (per `_grounding-reference.md` §C). | Yes |
| **The Construct — ROS 2** | The deploy/integration layer for policies + teleop rigs (per grounding ref). | Yes (3rd-party) |

*(No official ROS cert and no NVIDIA robotics exam exist — see grounding ref. NVIDIA **Isaac Lab / Isaac-GR00T** DLI material is the closest vendor path for sim-demo generation.)*

---

## 3. Subject list for THIS niche (grounded in real syllabi)

**Foundational maths & CS**
- Linear algebra; **probability & statistics** (heavier here — MLE, distribution/covariate shift, the compounding-error problem). — *Berkeley CS 285, CMU 16-831*
- Optimization + numerical methods.
- **Deep learning & generative modeling** (transformers, VAEs, **diffusion models, flow matching**) — the mathematical core of modern policies. — *MIT 6.4212, Stanford CS 224R*
- Python + **PyTorch**; data structures/algorithms.
- **Data engineering / large-scale data pipelines & dataset curation** (RLDS / LeRobot dataset format, demonstration quality) — distinctive to the teleop-data sub-scope. — *HF LeRobot, UT Austin robomimic*

**Core robotics**
- Kinematics & dynamics, frames/**TF**, and **motion retargeting** (leader→follower, human-hand→gripper). — *EPFL MICRO-462*
- **ROS 2**; robot simulation (**Isaac Sim/Lab, MuJoCo, robosuite, PyBullet**).
- Trajectory/action representation; enough feedback control to execute learned policies.

**Niche-specific**
- **Behavior cloning** (visuomotor policy learning). — *Berkeley CS 285 HW1, Imperial 70067, CMU 16-831*
- **Interactive / no-regret imitation & distribution shift** (**DAgger**, DART). — *Cornell CS 4756, CMU 16-831*
- **Inverse reinforcement learning** (reward learning). — *CMU 16-831, Imperial 70067*
- **Learning from human teachers / LfD** — active learning, learning from novice/noisy demos, human-subject eval. — *Georgia Tech CS 7648*
- **LfD via dynamical systems** (stable/reactive control from demos). — *EPFL MICRO-462*
- **Teleoperation systems & rigs** — leader-follower (**ALOHA/GELLO**), portable **UMI**, **RoboTurk** crowdsourcing, **DexCap** mocap; retargeting & latency.
- **Demonstration data collection, quality & curation**; **offline RL** (learning from logged/demo data). — *UW CSE 599G, UT Austin CS 391R*
- **Learning from observation / human & internet video**. — *CMU 16-831*

**Frontier / advanced**
- **Diffusion policies & flow-matching policies** (the dominant action heads). — *MIT 6.4212, Stanford (Song)*
- **Action tokenization** (FAST) & **VLA policies** as the IL target; **cross-embodiment** learning (**Open X-Embodiment / DROID**). — *ETH 263-5911*
- **Sim demonstration multiplication** (MimicGen/DexMimicGen); **egocentric / in-the-wild data scaling** (UMI, DexCap, EgoMimic).
- Reproducible **real-world policy evaluation** (RoboArena / SIMPLER).

---

## 4. Niche-specific eligibility adjustment (Δ vs. the general set)

**Rises in value**
- **CS / AI / Machine Learning → clear top major.** This is the most deep-learning-centric embodied niche; a strong ML/DL + generative-modeling background out-values a hardware/controls background. `✓`
- **Statistics / Applied Math** rises (supervised-learning-under-shift, generative models, MLE). `✓`
- **HCI / Human-Robot Interaction / Cognitive Science** rises — *specific to this niche* — for teleoperation interface design, learning-from-humans, and active/interactive learning (Georgia Tech CS 7648 is explicitly **CS + CogSci**; Chernova's *Robot Learning from Human Teachers*). `✓`
- **Data Engineering / MLOps** rises for the **teleoperation-data-pipeline** sub-scope (multi-hundred-hour datasets, curation, quality scoring, Hub/RLDS tooling). `✓`

**Falls (or splits) in relative value**
- **Mechanical Engineering & heavy classical control recede on the *learning* side** — you don't need contact mechanics or analytic control design to do behavior cloning; IL deliberately sidesteps model-based control. (Contrast: ME *rose* to Tier-1 for the Manipulation niche.) `✓`
- **BUT ME / Mechatronics / EE stay relevant for the *rig-building* half** — designing leader-follower arms, exoskeletons, haptic/mocap gloves and low-latency teleop electronics (GELLO, DexCap, ALOHA hardware). So the niche **splits**: *policy-learning roles* → CS/ML/Stats; *teleop-rig / data-infra roles* → Mechatronics/EE + software.

**Net:** relative to the general robotics backbone, weight CS/AI/ML/Stats **up**, HCI/human-factors and data-engineering **up** (niche-distinctive), and mechanics/model-based-control **down** for the core learning track while preserving a mechatronics/EE lane for the teleoperation-hardware track.

---
*Sources: Berkeley CS 285 (rail.eecs.berkeley.edu), Stanford CS 224R + IRIS/IPRL + Diffusion Policy/ALOHA/UMI/RoboTurk, CMU 16-831 (16-831.github.io), MIT 6.4212 (manipulation.csail.mit.edu) + Underactuated Ch.21, UT Austin CS 391R (cs.utexas.edu/~yukez) + RPL, Cornell CS 4756 (cs.cornell.edu), Georgia Tech CS 7648 (critique.gatech.edu), UW CSE 599G, USC CSCI 699 (liralab.usc.edu), EPFL MICRO-462 (edu.epfl.ch), Imperial 70067 (imperial.ac.uk), ETH 263-5911 (vvzapi.ch), Princeton robotics.princeton.edu, Hugging Face LeRobot/Robotics + Deep RL courses (huggingface.co), Coursera/U-Alberta RL Specialization. Course codes/offerings `~` re-verify at publish — several are annually renumbered/retitled.*
