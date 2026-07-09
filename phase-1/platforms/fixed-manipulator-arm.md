# Platform Track — Fixed Manipulator / Robot Arm

> **Platform bundle (Axis C).** Bundles Axis-A capabilities into the "fixed-arm / manipulation engineer" archetype — it references the capability profiles rather than restating them. Web-verified mid-2026; sources in `.research/platform-fixed-manipulator-arm.md`. `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Platform:** Fixed Manipulator / Robot Arm · **Axis C:** C1 · **Frontier:** `[ ]` no (mature hardware; its *learned-control* layer is frontier)
**Signature capabilities (Axis A, load-bearing first):** A5 manipulation & grasping · A3 motion planning · A4 compliant/force/impedance control · A10 calibration & integration · A1 perception + tactile · A7 VLAs / A6 imitation learning (emerging brain) · A10 safety · **Typical verticals (B):** B1 manufacturing · B2 logistics (bin picking) · B15 food · B4 surgical

---

## 1. Definition & Scope
A **base-anchored serial manipulator** (6-DOF, or 7-DOF redundant) bolted to a floor, table, rail, or machine — the oldest, highest-installed-base, most commercially mature robot form factor. Because the base is **fixed and the workspace bounded**, the whole engineering problem collapses onto the **end-effector** — reach/payload envelope, grasp, contact, and cycle time — with no locomotion, balance, or SLAM to solve. That is simultaneously its strength (deterministic, certifiable, fast) and its frontier tension: the mature hardware is now the substrate for **learned manipulation** (VLAs, diffusion policies) that trades determinism for high-mix generality. Splits into two sub-forms: **caged industrial arms** (high speed/payload, deterministic) and **collaborative arms / cobots** (force-limited, human-adjacent).

## 2. Signature Capability Stack
- **A5 Manipulation & Grasping** *(load-bearing — the arm's whole purpose)* — grasp synthesis, pick-and-place, bin picking from clutter; the fixed base *is* the manipulation workspace. → `manipulation-and-grasping`
- **A3 Motion Planning** — collision-free, cycle-time-optimal trajectories in a fixed, often cluttered cell; IK, singularity/redundancy resolution. → `motion-planning-navigation`
- **A4 Compliant / Force / Impedance Control** *(the contact-work differentiator)* — insertion (peg-in-hole), assembly, polishing, machine tending on joint-torque-sensing arms. → `whole-body-compliant-control`, `control-classical-optimal-mpc`
- **A10 Calibration & Systems Integration** *(the integration tax)* — hand-eye, tool-center-point, kinematic calibration; cell bring-up; fieldbus. → `calibration-integration-mlops`
- **A1 Perception + Tactile** — 2D/3D vision-guided picking, pose estimation, visual servoing; slip/contact feedback for insertion. → `computer-vision-3d-perception`, `tactile-force-sensing`
- **A7 VLAs / A6 Imitation Learning** *(emerging "brain")* — learned policies for high-mix picking and loose-tolerance assembly. → `robot-foundation-models-vla`, `imitation-learning-teleoperation`, `sim-to-real-transfer`
- **A10 Safety** — cobot power-and-force-limiting envelope. → `safety-verification-assurance`

## 3. Integration & Platform-Specific Skills
The "integration tax" no single capability owns: **cobot safety engineering** (ISO 10218:2025 / former ISO/TS 15066 PFL + SSM, biomechanical force/pressure limits, risk assessment, CE marking); **reach/payload/workspace-envelope sizing** and cell layout/fixturing; **hand-eye + TCP + kinematic calibration**; **end-of-arm-tooling (EOAT) selection & integration** (grippers, F/T sensors, tool changers); **fixed-base kinematics** (analytic/redundant IK, singularity avoidance); **deterministic cycle-time/throughput optimization** and **PLC/fieldbus integration** (EtherCAT, PROFINET). The distinctive bar: making a stochastic learned policy pass **deterministic industrial process control** (e.g. IATF 16949).

## 4. Typical Verticals
**B1 manufacturing** (assembly, machine tending, welding/seam-tracking, palletizing, painting) — the arm's native home. **B2 logistics/warehouse** (high-mix bin/piece picking, sortation) — the fastest-growing AI-arm frontier. **B15 food** (hygienic washdown handling) · **B4 surgical** (fixed-base cable-driven arms, da Vinci class). Also **B14 inspection** and lab/pharma automation. Chosen because all need **precise, repeatable end-effector work in a bounded, structured cell** — exactly what a fixed base optimizes.

## 5. Eligibility Profile
The archetypal **"manipulation / robot-arm engineer"** bundles **manipulation + motion planning + compliant/force control + calibration/integration + perception**, increasingly + **robot-learning (IL/VLA)**. Strongest backgrounds: **Robotics / Mechatronics / ME / EE** for the embodiment side (kinematics, force control, EOAT, cell integration — Mechatronics is unusually strong here); **CS / AI** for the perception-and-learning side. Platform must-haves: **ROS 2 + MoveIt 2**, at least one **vendor stack** (FANUC/ABB/KUKA/UR programming), **hand-eye calibration**, **cobot-safety** literacy. Feeder capability profiles: `manipulation-and-grasping`, `motion-planning-navigation`, `whole-body-compliant-control`, `calibration-integration-mlops`, `computer-vision-3d-perception`. Tiers: **L1** cell integrator/deployer → **L2–L3** manipulation software (perception + planning + control) → **L4/L5** learned-manipulation / RFM research. The platform premium: proven **contact-rich or high-mix picking on real arms**, plus a safety-certified deployment.

## 6. Platform-Specific Hardware & Stack `~`
**Industrial arms:** FANUC (incl. CRX cobots — CRX-25iA, 25 kg / 1,889 mm) · ABB (IRB, GoFa, YuMi, SWIFTI) · KUKA (LBR iiwa 7-axis torque-controlled, LBR iisy) · Yaskawa Motoman. **Cobots / research arms:** Universal Robots (UR5e/10e, **UR20/UR30** — #1 cobot share) · **Franka Research 3 (FR3) / Panda** (7-DOF joint-torque sensing — the research default) · Kinova Gen3 · Techman · Doosan · JAKA · **Flexiv Rizon** (force-control specialist). **EOAT:** Robotiq 2F-85, Schunk, OnRobot grippers; **F/T sensors** ATI, Robotiq FT-300, OnRobot Hex; **tactile** GelSight, Meta **Digit / Digit 360**. **Actuators:** Harmonic Drive strain-wave gears + servo. **Software:** **ROS 2 + MoveIt 2**; **NVIDIA Isaac Manipulator / Isaac ROS cuMotion** (GPU collision-free planning, MoveIt plugin), Isaac Sim/Lab, MuJoCo; vendor IDEs (RoboDK, Vention). **Data/teleop rigs:** Stanford **ALOHA/ALOHA 2** (bimanual), **UMI** handheld gripper. **Compute:** industrial PC/PLC + NVIDIA Jetson/GPU for inference.

## 7. Trending & Notable `⏱ as of mid-2026`
**Industrial VLAs / manipulation foundation models** — production use concentrated in **high-mix bin picking + loose-tolerance flexible assembly**; **Covariant RFM-1** (now Amazon Robotics), **Physical Intelligence π0/π0.5**, **Google Gemini Robotics** are the reference systems. Amazon passed its **1-millionth robot** (2025) plus a fleet-wide generative-AI foundation model. **Diffusion Policy** productization and **visuo-tactile** contact-rich (slow-fast reactive) policies. **Sim-to-real tight-tolerance insertion** (IndustReal, FORGE) and data-efficient assembly IL (JUICER). **ISO 10218-1/2:2025** in force (April 2025) — first update since 2011, absorbs **ISO/TS 15066** into Annex M, adds Class I/II. Caveat: heavy-payload / Tier-1 automotive body shops **stay on deterministic controllers** (IATF 16949, downtime cost). *(Re-research before publish.)*

## 8. Key Players & Ecosystem
- **Industrial/cobot OEMs:** FANUC · ABB · KUKA · Yaskawa · Universal Robots · Techman · Doosan · JAKA · Kinova · Franka Robotics · Flexiv.
- **AI-manipulation / picking:** Covariant (→ Amazon) · Dexterity · Mujin · RightHand Robotics · Plus One Robotics · Ambi Robotics · Berkshire Grey · Physical Intelligence.
- **Academic labs:** UC Berkeley **AUTOLAB** (Ken Goldberg — Dex-Net) · Stanford (ALOHA, diffusion policy) · Columbia (Shuran Song — UMI) · MIT (GelSight; Pulkit Agrawal) · CMU RI · TU Delft.
- **Stacks/programs:** ROS 2 / MoveIt (PickNik) · NVIDIA Isaac Manipulator · ROS-Industrial (SwRI) · vendor academies (FANUC, KUKA, UR, ABB).

## 9. Adjacent Platforms & Capabilities
Adjacent platforms: **C2 mobile manipulator** (this exact stack + a mobile base), **C5 humanoid** and **C8 soft/continuum** (surgical arms). Most-central capability profiles: `manipulation-and-grasping`, `motion-planning-navigation`, `whole-body-compliant-control`, `calibration-integration-mlops`, `computer-vision-3d-perception`, `robot-foundation-models-vla`.

---
*Template: `phase-1/platforms/_TEMPLATE-platform.md`. Bundles Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` C1.*
