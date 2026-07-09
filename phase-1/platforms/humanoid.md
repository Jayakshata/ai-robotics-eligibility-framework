# Platform Track — Humanoid / Bipedal Robots

> **Platform exemplar (Axis C).** Bundles Axis-A capabilities into the "humanoid robotics engineer" archetype — it references the capability profiles rather than restating them. Specifics are draft-from-knowledge for format validation; the fan-out web-verifies each. `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Platform:** Humanoid / Bipedal Robots · **Axis C:** C5 · **Frontier:** `[★]` yes
**Signature capabilities (Axis A, load-bearing first):** A4 whole-body control · A5 locomotion (bipedal) + loco-manipulation + dexterous manipulation · A7 VLAs/foundation models · A1 perception · A6 imitation/RL · A9 HRI · A10 safety · **Typical verticals (B):** B1 manufacturing · B2 logistics · B9 domestic/service

---

## 1. Definition & Scope
Bipedal, roughly human-form robots aimed at **general-purpose physical work** in human environments. The highest-profile frontier platform — the bet that a human form factor + a learned "brain" can generalize across tasks built for people. Distinct from every other platform in that it must solve **dynamic balance, whole-body coordination, bipedal locomotion, and dexterous manipulation simultaneously**, on-board and in real time.

## 2. Signature Capability Stack
- **A4 Whole-Body & Balance Control** *(load-bearing)* — coordinating many DoF under balance/contact constraints.
- **A5 Locomotion (bipedal) + Loco-Manipulation + Dexterous Manipulation** — dynamic walking + manipulating while moving + multi-finger hands.
- **A7 Robot Foundation Models / VLAs** *(the "brain," frontier)* — generalist policies (GR00T, Helix, π) driving the humanoid.
- **A6 Imitation & RL** — sim-trained locomotion/whole-body policies; teleop-demo learning.
- **A1 Perception** — egocentric 3D perception for navigation + manipulation.
- **A9 HRI** and **A10 Safety** — operating a heavy, dynamic robot around people.

## 3. Integration & Platform-Specific Skills
The "integration tax" no single capability owns: **dynamic bipedal balance** (ZMP/centroidal/MPC + learned), **whole-body loco-manipulation**, high-DoF real-time control on-board, **sim-to-real for legged + manipulation together** (Isaac Lab), **safety envelope** for a fall-capable heavy robot near humans, power/thermal/compute budgeting, and dexterous-hand integration.

## 4. Typical Verticals
**B1 manufacturing** (Figure–BMW, Tesla, Apptronik pilots) · **B2 logistics/warehouse** (Agility Digit) · **B9 domestic/service** (1X, longer-horizon). Chosen because these are built for human bodies and reach/dexterity.

## 5. Eligibility Profile
The archetypal **"humanoid robotics engineer"** bundles **control (whole-body/RL) + legged locomotion + manipulation**, increasingly + **VLA/robot-learning**. Strongest backgrounds: Robotics/ME/EE/CS with deep **controls + RL + sim-to-real**; frontier "brain" roles want `robot-foundation-models-vla` skills. Feeder capability profiles: `whole-body-compliant-control`, `locomotion`, `reinforcement-learning-control`, `manipulation-and-grasping`, `robot-foundation-models-vla`. Tiers track the capability ladders; the platform premium is proven whole-body sim-to-real on real bipeds.

## 6. Platform-Specific Hardware & Stack `~`
Robots: **Tesla Optimus** · **Figure 02/03** · **Boston Dynamics (electric) Atlas** · **Unitree G1/H1** · **Agility Digit** · **1X Neo** · **Apptronik Apollo** · Sanctuary. Stack: high-torque actuators, dexterous hands, on-board GPU (**NVIDIA Jetson Thor**), Isaac Sim/Lab for training, MuJoCo/Newton; humanoid foundation-model stacks (Isaac GR00T).

## 7. Trending & Notable `⏱ as of mid-2026`
**Humanoid foundation models** (NVIDIA GR00T N1→N2, Figure **Helix**, Physical Intelligence π) · large-scale **RL sim-to-real for whole-body** (Isaac Lab) · the **teleoperation/data race** for humanoid demonstrations · dexterous-hand advances · **Jetson Thor**-class on-board compute · commercial pilots moving from demo to paid deployment. *(Re-research before publish.)*

## 8. Key Players & Ecosystem
- **Companies:** Tesla · Figure · Boston Dynamics · Unitree · Agility Robotics · 1X · Apptronik · Sanctuary AI · NVIDIA (GR00T/GEAR).
- **Academic labs:** IHMC · ETH (RSL) · UC Berkeley · CMU · Oregon State (Agility roots).
- **Programs/stacks:** NVIDIA Isaac GR00T + Isaac Lab; Hugging Face LeRobot (humanoid data).

## 9. Adjacent Platforms & Capabilities
Adjacent platforms: **C2 mobile manipulator**, **C4 quadruped** (shared legged-locomotion + RL heritage). Most-central capability profiles: `whole-body-compliant-control`, `locomotion`, `robot-foundation-models-vla`, `manipulation-and-grasping`.

---
*Template: `phase-1/platforms/_TEMPLATE-platform.md`. Bundles Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` C5.*
