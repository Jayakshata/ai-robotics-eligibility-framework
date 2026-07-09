# Platform Track — Fixed Manipulator / Robot Arm

> **Platform profile (Axis C).** Bundles Axis-A capabilities into the "fixed-arm / manipulation engineer" archetype — it references the capability profiles rather than restating them. `✓` grounded · `~` to-verify · `⏱` time-sensitive. Web-verified mid-2026; sources at end.

**Platform:** Fixed Manipulator / Robot Arm · **Axis C:** C1 · **Frontier:** `[ ]` no (mature, but its *learned-control* layer is frontier)
**Signature capabilities (Axis A, load-bearing first):** A5 manipulation & grasping · A3 motion planning · A4 compliant/force/impedance control · A10 calibration & integration · A1 perception + tactile · A7 VLAs / A6 imitation learning (emerging brain) · A10 safety · **Typical verticals (B):** B1 manufacturing · B2 logistics (bin picking) · B15 food · B4 surgical

---

## 1. Definition & Scope
A **base-anchored serial manipulator** (typically 6-DOF, or 7-DOF redundant) bolted to a floor, table, rail, or machine — the oldest, highest-installed-base, most commercially mature robot form factor. What makes it distinct as an engineering target: because the base is **fixed and the workspace is bounded**, the entire engineering problem collapses onto the **end-effector** — reach/payload envelope, grasp, contact, and cycle time — with no locomotion, balance, or SLAM to solve. This is simultaneously its strength (deterministic, certifiable, fast) and the frontier tension: the mature hardware is now the substrate for **learned manipulation** (VLAs, diffusion policies) that trades determinism for high-mix generality. Split into two sub-forms: **caged industrial arms** (high speed/payload, deterministic) and **collaborative arms / cobots** (force-limited, human-adjacent).

## 2. Signature Capability Stack
- **A5 Manipulation & Grasping** *(load-bearing — the arm's whole purpose)* — grasp synthesis, pick-and-place, bin picking from clutter; the fixed base *is* the manipulation workspace. → `manipulation-and-grasping`
- **A3 Motion Planning** — collision-free, cycle-time-optimal trajectories in a fixed, often cluttered cell; IK, singularity/redundancy resolution. → `motion-planning-navigation`
- **A4 Compliant / Force / Impedance Control** *(the contact-work differentiator)* — insertion (peg-in-hole), assembly, polishing, machine tending on joint-torque-sensing arms. → `whole-body-compliant-control`, `control-classical-optimal-mpc`
- **A10 Calibration & Systems Integration** *(the integration tax)* — hand-eye, tool-center-point, kinematic calibration; cell bring-up; fieldbus. → `calibration-integration-mlops`
- **A1 Perception + Tactile** — 2D/3D vision-guided picking, pose estimation, visual servoing; slip/contact feedback for insertion. → `computer-vision-3d-perception`, `tactile-force-sensing`
- **A7 VLAs / A6 Imitation Learning** *(emerging "brain")* — learned policies for high-mix picking and loose-tolerance assembly. → `robot-foundation-models-vla`, `imitation-learning-teleoperation`, `sim-to-real-transfer`
- **A10 Safety** — cobot power-force-limiting envelope. → `safety-verification-assurance`

## 3. Integration & Platform-Specific Skills
The "integration tax" no single capability owns: **cobot safety engineering** (ISO 10218:2025 / former ISO/TS 15066 PFL + SSM, biomechanical force/pressure limits, risk assessment, CE marking); **reach/payload/workspace-envelope sizing** and robot-cell layout/fixturing; **hand-eye + TCP + kinematic calibration**; **end-of-arm-tooling (EOAT) selection & integration** (grippers, F/T sensors, tool changers); **fixed-base kinematics** (analytic/redundant IK, singularity avoidance); **deterministic cycle-time/throughput optimization** and **PLC/fieldbus integration** (EtherCAT, PROFINET). The distinctive bar: making a stochastic learned policy pass **deterministic industrial process control** (e.g. IATF 16949).

## 4. Typical Verticals
**B1 manufacturing** (assembly, machine tending, welding/seam-tracking, palletizing, painting) — the arm's native home. **B2 logistics/warehouse** (high-mix bin/piece picking, sortation) — the fastest-growing AI-arm frontier. **B15 food** (hygienic washdown handling). **B4 surgical** (fixed-base cable-driven arms — da Vinci class). Also **B14 inspection** and lab/pharma automation. Chosen because all need **precise, repeatable end-effector work in a bounded, structured cell** — exactly what a fixed base optimizes.

## 5. Eligibility Profile
The archetypal **"manipulation / robot-arm engineer"** bundles **manipulation + motion planning + compliant/force control + calibration/integration + perception**, increasingly + **robot-learning (IL/VLA)**. Strongest backgrounds: **Robotics / Mechatronics / ME / EE** for the embodiment side (kinematics, force control, EOAT, cell integration — Mechatronics is unusually strong here); **CS / AI** for the perception-and-learning side. Platform-specific must-haves: **ROS 2 + MoveIt**, at least one **vendor stack** (FANUC/ABB/KUKA/UR programming), **hand-eye calibration**, **cobot-safety** literacy. Feeder capability profiles: `manipulation-and-grasping`, `motion-planning-navigation`, `whole-body-compliant-control`, `calibration-integration-mlops`, `computer-vision-3d-perception`. Tiers: **L1** cell integrator/deployer → **L2–L3** manipulation software (perception + planning + control) → **L4/L5** learned-manipulation / RFM research. The platform premium: proven **contact-rich or high-mix picking on real arms**, plus a safety-certified deployment.

## 6. Platform-Specific Hardware & Stack `~`
**Industrial arms:** FANUC (incl. CRX cobots — CRX-25iA, 25 kg / 1,889 mm, 2025) · ABB (IRB, GoFa, YuMi, SWIFTI) · KUKA (LBR iiwa 7-axis torque-controlled, LBR iisy) · Yaskawa Motoman. **Cobots / research arms:** Universal Robots (UR5e/10e/**UR20/UR30**, ~15% cobot share, #1) · **Franka Research 3 (FR3)/Panda** (7-DOF, joint-torque sensing — the research default) · Kinova Gen3 · Techman · Doosan · JAKA · AUBO · **Flexiv Rizon** (force-control specialist). **EOAT:** Robotiq 2F-85 (research default), Schunk, OnRobot grippers; **F/T sensors** ATI, Robotiq FT-300, OnRobot Hex; **tactile** GelSight, Meta **Digit / Digit 360**. **Actuators:** Harmonic Drive strain-wave gears + servo. **Software:** **ROS 2 + MoveIt 2**; **NVIDIA Isaac Manipulator / Isaac ROS cuMotion** (GPU-accelerated, collision-free planning as a MoveIt plugin), Isaac Sim/Lab, MuJoCo; behavior-tree orchestration; vendor IDEs (RoboDK, Vention). **Data/teleop rigs:** Stanford **ALOHA/ALOHA 2** (bimanual), **UMI** (Stanford/Columbia handheld gripper). **Compute:** industrial PC/PLC + NVIDIA Jetson/GPU for inference.

## 7. Trending & Notable `⏱ as of mid-2026`
**Industrial VLAs / manipulation foundation models** — production use concentrated in **high-mix bin picking + loose-tolerance flexible assembly**; **Covariant RFM-1** (now **Amazon Robotics**), **Physical Intelligence π0/π0.5**, **Google Gemini Robotics** are the reference systems. Amazon deployed its **1-millionth robot** (June 2025) and a new **fleet-wide generative-AI foundation model**. **Diffusion Policy** productization and **visuo-tactile** contact-rich policies (reactive slow-fast). **Sim-to-real tight-tolerance insertion** — IndustReal, FORGE; data-efficient assembly IL (JUICER). **ISO 10218-1/2:2025** in force (April 1, 2025) — first update since 2011, absorbs **ISO/TS 15066** into Annex M, adds Class I/II. Caveat: heavy-payload / Tier-1 automotive body shops **stay on deterministic controllers** (IATF 16949, downtime cost). *(Re-verify before publish.)*

## 8. Key Players & Ecosystem
- **Industrial/cobot OEMs:** FANUC · ABB · KUKA · Yaskawa · Universal Robots · Techman · Doosan · JAKA · Kinova · Franka Robotics · Flexiv.
- **AI-manipulation / picking:** Covariant (→ Amazon) · Dexterity · Mujin · RightHand Robotics · Plus One Robotics · Ambi Robotics · Berkshire Grey · robominds · Physical Intelligence.
- **Academic labs:** UC Berkeley **AUTOLAB** (Ken Goldberg — **Dex-Net**, universal picking) · Stanford (**ALOHA**, diffusion policy) · Columbia (**Shuran Song** — UMI/Diffusion Policy) · MIT (**GelSight**; Pulkit Agrawal) · CMU RI · Princeton · TU Delft.
- **Stacks/programs:** ROS 2/MoveIt (Open/PickNik) · NVIDIA Isaac Manipulator · ROS-Industrial (SwRI) · vendor academies (FANUC, KUKA, UR, ABB).

## 9. Adjacent Platforms & Capabilities
Adjacent platforms: **C2 mobile manipulator** (this exact stack + a mobile base), **C5 humanoid** and **C8 soft/continuum** (surgical arms). Most-central capability profiles: `manipulation-and-grasping`, `motion-planning-navigation`, `whole-body-compliant-control`, `calibration-integration-mlops`, `computer-vision-3d-perception`, `robot-foundation-models-vla`.

---
## Sources (2024–2026)
- Market/OEMs: ABI Research robotics outlook — https://www.abiresearch.com/blog/global-robotics-market-outlook ; MarketsandMarkets cobot market — https://www.marketsandmarkets.com/Market-Reports/collaborative-robot-market-194541294.html ; Visual Capitalist top industrial-robotics companies — https://www.visualcapitalist.com/the-worlds-top-industrial-robotics-companies-by-market-share/ ; EVS top cobot brands 2026 — https://www.evsint.com/top-collaborative-robot-brands/
- Foundation models / VLAs: EVS generative AI in industrial robotics 2026 — https://www.evsint.com/generative-ai-industrial-robotics-foundation-models-code-generation-2026/ ; Internet-Pros VLA 2026 — https://internet-pros.com/blog/vision-language-action-models-robotics-2026/
- Safety standards: EVS ISO 10218:2025 / TS 15066 — https://www.evsint.com/collaborative-robot-safety-standards-2026-iso-10218-2025-ts-15066/ ; arXiv 2602.17822 (ISO 10218 2011 vs 2025) — https://arxiv.org/pdf/2602.17822
- Hardware/EOAT: SVRC end-effector guide — https://www.roboticscenter.ai/learn/robot-end-effector-selection-guide ; Robotiq FT-300 — https://robotiq.com/products/ft-300-force-torque-sensor ; OnRobot Hex — https://onrobot.com/en/products/hex-6-axis-force-torque-sensor
- Software stack: NVIDIA Isaac ROS cuMotion — https://github.com/NVIDIA-ISAAC-ROS/isaac_ros_cumotion ; MoveIt 2 — https://github.com/moveit/moveit2 ; NVIDIA Isaac manipulation — https://nvidia-isaac-ros.github.io/concepts/manipulation/index.html
- Manipulation research/labs: Berkeley Dex-Net — https://berkeleyautomation.github.io/dex-net/ ; contact-rich assembly review (2026) — https://journals.sagepub.com/doi/10.1177/09596518251350353 ; IL for contact-rich survey (2026) — https://journals.sagepub.com/doi/10.1177/02783649261417694
- Warehouse picking/players: Inbound Logistics — https://www.inboundlogistics.com/articles/warehouse-robotics-gain-picking-prowess/ ; NAIOP AI warehouse (Amazon 1M robots) — https://blog.naiop.org/2025/11/the-rise-of-the-ai-powered-warehouse/
- Teleop/data rigs: EVS teleoperation guide 2026 — https://www.evsint.com/embodied-ai-data-collection-teleoperation-sim-to-real-2026/ ; UMI — https://www.emergentmind.com/topics/universal-manipulation-interface-umi

*Template: `phase-1/platforms/_TEMPLATE-platform.md`. Taxonomy: `master-niche-taxonomy.md` C1.*
