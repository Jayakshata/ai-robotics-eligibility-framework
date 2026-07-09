# AI for Robotics — Capabilities-Only Taxonomy (Axis A)

**What this is.** The **industry-agnostic technical capability spine** — Axis A only, stripped of industry verticals (Axis B) and platform tracks (Axis C). Use this when you want a pure *engineering-competency* framework independent of any application domain or robot form factor. For the full picture (verticals + platforms + the two-axis rationale), see `master-niche-taxonomy.md`.

**Legend:** `[F]` foundational · `[S]` specialized · `[★]` emerging/frontier (2024–2026) · `[◆]` integrative (composes primitives from multiple clusters) · `✓` research-verified · `~` field-standard scaffolding (to be verified per-niche in Phase 1).

10 capability clusters, ~50 niches. The bold **niches** and their sub-niches are the atomic units that eligibility criteria and curricula attach to.

---

## A1 · Sensing & Perception `✓`
- **Computer vision for robotics** `[F]` — detection, segmentation, pose estimation, tracking for embodied use.
- **Tactile / force / touch sensing** `[F]` — contact, slip, force-torque sensing.
- **Proprioception & kinesthetic sensing** `[F]` — joint encoders, IMU, internal state.
- **Depth / LiDAR / radar perception** `[F]` — range sensing, point clouds.
- **Event-based / neuromorphic vision** `[S][★]` — asynchronous, low-latency sensing.
- **Multimodal sensor fusion** `[F]` — combining camera + LiDAR + proprioceptive + force streams.
- **3D scene understanding** `[F]` — semantic mapping, object/affordance reasoning, scene graphs.
- **Active perception & visual servoing** `[S]` — next-best-view, perception-in-the-control-loop.

## A2 · State Estimation & Spatial AI `✓`
- **State estimation** `[F]` — EKF/UKF, factor graphs, sensor-fusion filtering.
- **Localization** `[F]` — pose relative to a map.
- **SLAM** `[F]` — visual, LiDAR, multi-sensor simultaneous localization & mapping.
- **Mapping** `[F]` — metric, semantic, topological.
- **Neural / implicit mapping** `[S][★]` — NeRF / 3D Gaussian Splatting for robotic maps.

## A3 · Planning & Navigation `~`
- **Motion planning** `[F]` — classical, sampling-based (RRT/PRM), optimization-based / trajectory optimization.
- **Task & motion planning (TAMP)** `[S]` — coupling symbolic task plans with feasible motion.
- **Navigation** `[F]` — global/local, social/crowd navigation.
- **Learned planning** `[S][★]` — neural planners, planning with learned models.
- **Decision architectures** `[S]` — behavior trees, state machines, autonomy stacks.

## A4 · Control `✓ (model-based vs. learned split verified)`
- **Classical & optimal control** `[F]` — PID, LQR, robust control.
- **Model-predictive control (MPC)** `[F]` — receding-horizon optimal control.
- **Compliant / force / impedance control** `[F]` — contact-safe interaction control.
- **Learned control** `[S][★]` — neural / data-driven controllers.
- **Whole-body control** `[S][◆]` — coordinating many DoF under constraints.
- **Robot kinematics & dynamics modeling** `[F]` — the analytical mechanics layer under all control.

## A5 · Embodied Skills — Manipulation & Locomotion `✓`
- **Manipulation & grasping** `[F]` — grasp synthesis, pick-and-place.
- **Dexterous / in-hand manipulation** `[S]` — multi-finger reorientation.
- **Bimanual manipulation** `[S][★]` — two-arm coordination.
- **Contact-rich manipulation** `[S][★]` — insertion, assembly; bridges force control + tactile sensing.
- **Loco-manipulation** `[S][◆][★]` — combining locomotion + manipulation on one platform.
- **Locomotion** `[F]` — legged (bipedal/quadruped), wheeled, aerial, underwater.

## A6 · Robot Learning `✓`
- **Reinforcement learning for control** `[F]` — policy learning via reward.
- **Imitation learning / learning-from-demonstration** `[F]` — behavior cloning, contact-rich IL.
- **Teleoperation & data-collection pipelines** `[S][◆]` — the human-data supply chain for robot learning.
- **Sim-to-real transfer & domain randomization** `[F]` — closing the sim→reality gap. *(internal sub-structure unsettled — a proposed 5-method breakdown was refuted in verification.)*
- **Self-supervised / representation learning for robotics** `[S][★]` — learned state/visual representations.

## A7 · Foundation Models & Generative AI for Robotics — THE FRONTIER `✓ [★]`
- **Robot foundation models / Vision-Language-Action (VLA) models** `[S][★]` — generalist policies unifying vision+language+action; generalize across tasks/objects/embodiments. Sub-niches by FM type (LLM / Vision FM / VLM / VLA) and architecture (autoregressive, diffusion, RL-based, hybrid; end-to-end vs. modular vs. compact). Exemplars: RT-1/RT-2/RT-X, OpenVLA, π0, GR00T N1, Gemini Robotics.
- **World models / predictive models** `[F][★]` — learned models of environment dynamics; support policy learning, planning, simulation, evaluation, data generation.
- **World foundation models & synthetic data generation** `[S][★]` — e.g. NVIDIA Cosmos.
- **Language grounding & LLM task planners** `[S][★]` — instruction following, long-horizon reasoning.

## A8 · Simulation & Digital Twins `✓`
- **Physics simulation** `[F]` — Isaac Sim/Lab, MuJoCo, Gazebo, Genesis.
- **Digital twins** `[S]` — physically-accurate virtual replicas.
- **Differentiable simulation** `[S][★]` — gradients through physics.
- **Synthetic data generation** `[S][★]` — sim-generated training data (overlaps A7).

## A9 · Interaction & Multi-Agent `~`
- **Human-robot interaction (HRI)** `[F]` — intent, communication, shared autonomy.
- **Collaborative robots (cobots)** `[S]` — safe human-adjacent operation.
- **Multi-robot systems / swarm** `[S]` — coordination, distributed control.
- **Fleet orchestration / management** `[S][◆]` — coordinating many deployed robots.

## A10 · Systems, Safety & Infrastructure `~`
- **Robotics middleware** `[F]` — ROS/ROS2, DDS, real-time comms.
- **Embedded / edge AI & real-time systems** `[F]` — on-robot inference under latency/compute constraints.
- **Safety, verification, formal methods, runtime assurance** `[S]` — provable/monitored safety, fault detection & recovery.
- **Calibration & systems integration** `[F]` — sensor/actuator calibration, hand-eye, bring-up.
- **Robot learning data infrastructure / MLOps for robotics** `[S][◆]` — pipelines, dataset management, training infra.
- **Soft robotics & compliant mechanisms** `[S]` — soft-body actuation, modeling, control.

**Also flagged (specialized, thin):** micro/nano robotics, bio-inspired/bio-hybrid robotics, aerial manipulation, robot hardware-software co-design, haptics/tele-robotics.

---

*Provenance: derived from the verified deep-research pass documented in `master-niche-taxonomy.md`. Clusters A1–A2, A4 (model/learned split), A5 (manipulation, locomotion), A6, A7, A8 are research-verified `✓`; A3, A9, A10 and specialized sub-niches are field-standard scaffolding `~` pending per-niche verification in Phase 1.*
