# AI for Robotics — Master Niche Taxonomy (Phase 0)

**Purpose.** This is the master niche map for a program that defines *engineer eligibility criteria* and *per-niche curricula, labs, and partnerships* across the whole "AI for robotics" domain. Phase 0 deliverable = the finalized niche list only. Curricula, syllabi, hardware/lab specs, and partnership plans come in Phase 1, built on top of this skeleton.

**Status:** v2 (2026-07-09) — core A/B axes verified via deep-research; **scope, platform, and rollout decisions now locked**; **Axis C (platform tracks) added**. A capabilities-only edition is split out to `capabilities-only-taxonomy.md`. Phase 1 exemplar (Manipulation & Dexterous Grasping) lives in `phase-1/`.

---

## The Taxonomy Model — Two Core Axes + a Platform Dimension

The domain resolves cleanly into **two orthogonal core axes** (A capabilities × B verticals), navigated via a **third platform dimension** (Axis C — platform tracks that bundle capabilities into real engineer archetypes). The A/B separation is the single most important structural decision and it is evidence-backed (multiple 2025–2026 surveys treat capabilities as horizontal competencies imported *across* domains, while verticals layer requirements *on top*).

- **Axis A — Technical Capability Niches.** The engineering competencies. This is the *spine* of eligibility and curriculum. It's what makes someone "a manipulation engineer" or "a perception engineer." A capability is deployed across many industries.
- **Axis B — Industry / Application Verticals.** The domains where capabilities get applied. Each vertical adds four things on top of a shared capability core: **domain knowledge + regulation/certification + specialized hardware + a distinct safety envelope.** Verticals are *overlays*, not standalone curricula.

**Why overlays, not parallel modules:** a welding robot and a surgical robot share ~70% of the same Axis-A foundation (perception, kinematics, planning, control). Duplicating full curricula per industry creates an N-capabilities × M-industries combinatorial explosion. Instead, an engineer's profile = **core competency in one or more Axis-A niches + a vertical overlay** that adds the last-mile domain/compliance/hardware/safety layer.

**Two meta-notes (see dedicated sections below):**
1. A **meta-layer** term — "Physical AI" / "Embodied AI" — sits *above* the whole capability stack. Treat as framing, not a peer niche.
2. **Axis C — Embodiment / Platform Tracks** (humanoid, mobile manipulator, AMR, quadruped, drone, AUV, soft, swarm, micro). **LOCKED as a first-class third dimension** (chosen to maximize depth/coverage per the "don't miss anything" brief). Platform tracks are curated *bundles* that pre-select the load-bearing Axis-A capabilities for a given robot form factor, then take an Axis-B overlay. See the Axis C section below.

**Legend:** `[F]` foundational · `[S]` specialized · `[★]` emerging/frontier (2024–2026) · `[◆]` integrative (composes primitives from multiple clusters — a MECE stress point handled by tagging) · `✓` research-verified this pass · `~` field-standard scaffolding (carried, not independently re-verified this pass).

---

## AXIS A — Technical Capability Niches

Organized into 10 capability clusters. Clusters are for readability and eventual curriculum grouping; the *niches* (bold) and *sub-niches* are the atomic units eligibility/curricula attach to.

### A1 · Sensing & Perception `✓`
- **Computer vision for robotics** `[F]` — detection, segmentation, pose estimation, tracking for embodied use.
- **Tactile / force / touch sensing** `[F]` — contact, slip, force-torque. *(Common misplacement: this is a perception capability, NOT an industry vertical. `✓`)*
- **Proprioception & kinesthetic sensing** `[F]` — joint encoders, IMU, internal state.
- **Depth / LiDAR / radar perception** `[F]` — range sensing, point clouds.
- **Event-based / neuromorphic vision** `[S][★]` — asynchronous, low-latency sensing.
- **Multimodal sensor fusion** `[F]` — combining camera + LiDAR + proprioceptive + force streams. `✓`
- **3D scene understanding** `[F]` — semantic mapping, object/affordance reasoning, scene graphs.
- **Active perception & visual servoing** `[S]` — next-best-view, perception-in-the-control-loop.

### A2 · State Estimation & Spatial AI `✓`
- **State estimation** `[F]` — EKF/UKF, factor graphs, sensor-fusion filtering.
- **Localization** `[F]` — where am I, relative to a map.
- **SLAM** `[F]` — visual, LiDAR, and multi-sensor simultaneous localization & mapping.
- **Mapping** `[F]` — metric, semantic, topological.
- **Neural / implicit mapping** `[S][★]` — NeRF / 3D Gaussian Splatting for robotic maps.

### A3 · Planning & Navigation `~`
- **Motion planning** `[F]` — classical, sampling-based (RRT/PRM), optimization-based/trajectory optimization.
- **Task & motion planning (TAMP)** `[S]` — coupling symbolic task plans with feasible motion.
- **Navigation** `[F]` — global/local, social/crowd navigation.
- **Learned planning** `[S][★]` — neural planners, planning with learned models.
- **Decision architectures** `[S]` — behavior trees, state machines, robot autonomy stacks.

### A4 · Control `✓ (model-based vs. learned split verified)`
- **Classical & optimal control** `[F]` — PID, LQR, robust control.
- **Model-predictive control (MPC)** `[F]` — receding-horizon optimal control.
- **Compliant / force / impedance control** `[F]` — contact-safe interaction control.
- **Learned control** `[S][★]` — neural / data-driven controllers.
- **Whole-body control** `[S][◆]` — coordinating many DoF under constraints (humanoids, mobile manipulators).
- **Robot kinematics & dynamics modeling** `[F]` — the analytical mechanics layer under all control.

### A5 · Embodied Skills — Manipulation & Locomotion `✓`
- **Manipulation & grasping** `[F]` — grasp synthesis, pick-and-place. `✓`
- **Dexterous / in-hand manipulation** `[S]` — multi-finger reorientation.
- **Bimanual manipulation** `[S][★]` — two-arm coordination.
- **Contact-rich manipulation** `[S][★]` — insertion, assembly; bridges force control + tactile sensing. `✓`
- **Loco-manipulation** `[S][◆][★]` — combining locomotion + manipulation on one platform.
- **Locomotion** `[F]` — legged (bipedal/quadruped), wheeled, aerial, underwater. *(model-based & learned paradigms both verified `✓`)*

### A6 · Robot Learning `✓`
- **Reinforcement learning for control** `[F]` — policy learning via reward.
- **Imitation learning / learning-from-demonstration** `[F]` — behavior cloning, contact-rich IL. `✓`
- **Teleoperation & data-collection pipelines** `[S][◆]` — the human-data supply chain for robot learning (e.g. ALOHA/UMI-style rigs).
- **Sim-to-real transfer & domain randomization** `[F]` — closing the simulation→reality gap. `✓` *(NOTE: a proposed 5-method internal breakdown was refuted in verification — internal sub-structure is unsettled; see Open Decisions.)*
- **Self-supervised / representation learning for robotics** `[S][★]` — learned state/visual representations.

### A7 · Foundation Models & Generative AI for Robotics — THE FRONTIER `✓ [★]`
*Strongest-evidenced region of the whole taxonomy; corroborated by ≥5 independent 2025–2026 surveys.*
- **Robot foundation models / Vision-Language-Action (VLA) models** `[S][★]` — generalist policies unifying vision+language+action; generalize across tasks/objects/embodiments. Sub-niches by FM type (LLM / Vision FM / VLM / VLA) and by architecture (autoregressive, diffusion, RL-based, hybrid; end-to-end vs. modular vs. compact). Exemplars: RT-1/RT-2/RT-X, OpenVLA, Physical Intelligence π0, NVIDIA GR00T N1, Google Gemini Robotics. `✓`
- **World models / predictive models** `[F][★]` — learned models of how environments evolve under actions; support policy learning, planning, simulation, evaluation, data generation. `✓`
- **World foundation models & synthetic data generation** `[S][★]` — e.g. NVIDIA Cosmos; generate training data at scale. `✓`
- **Language grounding & LLM task planners** `[S][★]` — instruction following, long-horizon reasoning for robots.

### A8 · Simulation & Digital Twins `✓`
- **Physics simulation** `[F]` — Isaac Sim/Lab, MuJoCo, Gazebo, Genesis. `✓`
- **Digital twins** `[S]` — physically-accurate virtual replicas of real systems.
- **Differentiable simulation** `[S][★]` — gradients through physics (e.g. Genesis).
- **Synthetic data generation** `[S][★]` — sim-generated perception/training data (overlaps A7).

### A9 · Interaction & Multi-Agent `~`
- **Human-robot interaction (HRI)** `[F]` — intent, communication, shared autonomy.
- **Collaborative robots (cobots)** `[S]` — safe human-adjacent operation. `✓ (as an industrial-RFM requirement)`
- **Multi-robot systems / swarm** `[S]` — coordination, distributed control.
- **Fleet orchestration / management** `[S][◆]` — coordinating many deployed robots (ops layer).

### A10 · Systems, Safety & Infrastructure `~`
- **Robotics middleware** `[F]` — ROS/ROS2, DDS, real-time comms.
- **Embedded / edge AI & real-time systems** `[F]` — on-robot inference, latency/compute constraints. `✓ (as industrial constraint)`
- **Safety, verification, formal methods, runtime assurance** `[S]` — provable/monitored safety, fault detection & recovery. `✓ (as industrial requirement)`
- **Calibration & systems integration** `[F]` — sensor/actuator calibration, hand-eye, bring-up.
- **Robot learning data infrastructure / MLOps for robotics** `[S][◆]` — pipelines, dataset management, training infra.
- **Soft robotics & compliant mechanisms** `[S]` — soft-body actuation, modeling, control. *(mechanism paradigm with AI-control implications)*

**Also flagged for consideration (specialized, thin):** micro/nano robotics, bio-inspired/bio-hybrid robotics, aerial manipulation, robot hardware-software co-design, haptics/tele-robotics.

---

## AXIS B — Industry / Application Verticals

Each vertical = the shared Axis-A core **+** these four differentiators. Regulations listed are the headline anchors (Phase 1 will expand each).

| # | Vertical | Key regulations / standards | Specialized hardware / sensors | Safety-criticality |
|---|----------|------------------------------|-------------------------------|--------------------|
| B1 | **Industrial manufacturing** (welding/seam-tracking, assembly, machine tending, painting, palletizing, bin picking) | ISO 10218-1/2, ANSI/RIA R15.06, ISO/TS 15066 (cobots) | Arc/seam sensors, force control, machine vision | High |
| B2 | **Logistics & warehouse** (AMRs/AGVs, sortation, last-mile delivery) | ANSI/ITSDF B56.5, ISO 3691-4 | Fleet nav stacks, LiDAR, floor markers | Medium |
| B3 | **Defense & security** | ITAR / EAR export control, security clearances, MIL-STD; LOAC/autonomy policy | Ruggedized/EMI-hardened, secure comms | High |
| B4 | **Healthcare & surgical** | FDA 510(k)/PMA, IEC 60601, IEC 62304, ISO 13485 | Cable-driven micro-instruments, haptics | Critical |
| B5 | **Agriculture** | ISO 18497 | Multispectral cameras, GNSS-RTK, field ruggedization | Medium |
| B6 | **Construction** | Site safety codes, BIM integration | Rugged outdoor, large-payload | High |
| B7 | **Mining** | ISO 19296, EMESRT, ATEX/IECEx (underground) | Explosion-proof, dust/vibration hardened | High |
| B8 | **Oil & gas / hazardous & explosive** `✓` | ATEX / IECEx, IEC 60079 series; Zone 0/1/2 (gas), 20/21/22 (dust) | Ex-rated enclosures (Ex i / Ex d / Ex p) — cert is zone-specific & non-transferable | Critical |
| B9 | **Humanoid & domestic/service** `[★]` | ISO 13482 (personal care robots) | Bipedal/whole-body platforms, safe actuation | High |
| B10 | **Autonomous vehicles / self-driving** | ISO 26262, ISO 21448 (SOTIF), SAE J3016, UNECE | Automotive sensor suites, redundancy | Critical |
| B11 | **Aerial / UAS / drones** | FAA Part 107, BVLOS waivers, EASA, Remote ID, DO-178C | Flight controllers, airframes | High |
| B12 | **Space robotics** | NASA/ESA/ECSS, planetary protection | Radiation-hardened, extreme-environment | Critical |
| B13 | **Marine / underwater (ROV/AUV)** | Classification societies (e.g. DNV) | Pressure/corrosion-rated, acoustic comms | High |
| B14 | **Inspection & maintenance** | NDT standards (cross-vertical) | Sensors per domain, climbing/crawling platforms | Medium–High |
| B15 | **Food processing & handling** | FDA food safety, EHEDG hygienic design | Washdown/IP69K, food-safe materials | Medium |
| B16 | **Nuclear / decommissioning / hazmat** | IAEA, radiation-safety codes | Radiation-hardened, teleop-heavy | Critical |

**Candidate additional verticals** (not yet built out — for exhaustiveness review): retail/hospitality service robots, rehabilitation/assistive & exoskeletons, hospital logistics/disinfection, sidewalk/public-space delivery, entertainment/animatronics, education & research platforms.

> ⚠️ **Exhaustiveness caveat:** the research pass verified the *structure* (verticals layer distinct envelopes on the shared core) using hazardous-environments as the concrete proof case, but did NOT independently confirm this list is collectively exhaustive. Treat B1–B16 as a comprehensive working set, extensible.

---

## AXIS C — Embodiment / Platform Tracks

**Why this exists.** Real engineering roles are often organized by *robot form factor* ("humanoid robotics engineer", "AMR engineer", "drone autonomy engineer"), because the platform decides *which* Axis-A capabilities are load-bearing and *which* Axis-B verticals it typically serves. A platform track is therefore a **curated bundle**: a signature capability stack (Axis A) + typical verticals (Axis B) + platform-specific hardware and skills. This adds depth and captures job-market reality without enumerating every A×B×C cell.

**How the three axes interlock:** an engineer profile = **Capability (A) operating on a Platform (C) within a Vertical (B)** — e.g., *a manipulation engineer (A5) for humanoids (C5) in manufacturing (B1)*. Platform tracks pre-select A; the vertical overlays compliance/hardware/safety.

| Track | Signature capability stack (Axis A) | Typical verticals (Axis B) | Platform-specific additions |
|-------|-------------------------------------|----------------------------|-----------------------------|
| **C1 · Fixed Manipulator / Arm** | Manipulation & grasping, motion planning, force/compliant control, calibration, perception | Manufacturing, logistics (bin picking), food, surgical | Cobot safety (ISO/TS 15066), reach/payload sizing |
| **C2 · Mobile Manipulator** `[◆]` | C1 stack + navigation + whole-body control | Warehouse, service, lab automation | Base–arm coordination, mobile power/compute |
| **C3 · AMR / AGV (wheeled)** | SLAM, navigation, perception, fleet orchestration | Logistics, inspection, service | Fleet traffic mgmt, ISO 3691-4 |
| **C4 · Quadruped** `[★]` | Legged locomotion, RL/learned control, rough-terrain perception & nav | Inspection, defense, construction, mining | Dynamic-balance control, ruggedization |
| **C5 · Humanoid / Bipedal** `[★]` | Whole-body & bipedal control, loco-manipulation, dexterous manipulation, VLAs, HRI | Manufacturing, logistics, domestic/service | Bipedal balance, high-DoF safety envelope |
| **C6 · Aerial / UAV / Drone** | Aerial control, state estimation, SLAM, path planning, (aerial manipulation) | Inspection, agriculture, defense, delivery, mapping | Flight control, FAA Part 107 / BVLOS |
| **C7 · Underwater / Marine (ROV/AUV)** | Underwater nav, acoustic perception, disturbance-robust control | Oil & gas, marine inspection, defense, science | Pressure/corrosion, acoustic comms, DVL/USBL |
| **C8 · Soft / Continuum** `[S]` | Soft-body modeling & control, compliant manipulation | Surgical, delicate handling, wearables | Continuum kinematics, novel actuation |
| **C9 · Swarm / Multi-Robot** | Multi-robot coordination, distributed control, comms | Agriculture, defense, mapping, warehouse | Decentralized algorithms, comms constraints |
| **C10 · Micro / Nano** `[S][★]` | Micro-actuation, specialized micro-perception & control | Medical, lab automation | Microfabrication, low-Reynolds physics |

Platform tracks are the natural home for the integrative `[◆]` capabilities (whole-body control, loco-manipulation, mobile manipulation, fleet orchestration).

---

## Meta-Layer: "Physical AI" / "Embodied AI"

An umbrella framing that sits *above* the capability stack — "systems combining perception, reasoning, and action in the real world," with VLA/foundation/world models as implementation categories *within* it. **Recommendation: keep as a top-level framing label, not a peer niche.** Caveat: the sources split on whether it's a genuine field or partly a marketing rebrand (weakest, most-contested finding in the pass). Useful for positioning/branding the program; not a curriculum unit.

---

## Cross-Cutting Capabilities (integrative niches)

A few Axis-A niches are **integrative** — they compose primitives from several clusters (tagged `[◆]` above): whole-body control, loco-manipulation, mobile manipulation, visual servoing, teleoperation/data pipelines, fleet orchestration. They live under their most-natural parent cluster but explicitly span others. The related problem of *embodiments that bundle many capabilities* (humanoids, AMRs, drones) is resolved by **Axis C — Platform Tracks** (above), which is exactly the mechanism for these bundles.

---

## Open Design Decisions to Lock (before Phase 1)

1. **Embodiment/Platform — RESOLVED ✅** → elevated to **Axis C (first-class platform tracks)**, chosen to maximize depth/coverage per the "don't miss anything" brief. See the Axis C section.
2. **Vertical scope — RESOLVED ✅** → **broad/even across all verticals now**, with manufacturing + frontier (and other niches TBD) to be deepened in a later pass. A **capabilities-only (Axis A) edition** is maintained separately in `capabilities-only-taxonomy.md`.
   - **Rollout — RESOLVED ✅** → **one exemplar niche built end-to-end first** (Manipulation & Dexterous Grasping) to validate the per-niche template, then fan out. See `phase-1/`.
3. **Sim-to-real internal structure** — left deliberately shallow; the tidy "5 methods" breakdown was refuted in verification. Phase 1 to settle from a better source.
4. **"Physical AI" umbrella** — include as program-level framing/branding, or omit as a buzzword. (Recommend: keep as framing only.)
5. **Confidence backfill** — many classical Axis-A niches and most Axis-B verticals are carried on field-standard scaffolding (`~`), not independently verified this pass. Phase 1 per-niche research verifies each as it builds curricula.

---

## Provenance & Confidence

**Method:** deep-research workflow — 5 search angles → 23 sources fetched → 105 claims extracted → 25 adversarially verified (3-vote, need 2/3 to kill) → 24 confirmed, 1 refuted.

**High-confidence (`✓`, verified this pass):**
- The two-axis capability-vs-vertical separation itself.
- Axis-A frontier cluster A7 (VLA/robot foundation models, world models, sim-to-real, simulation/digital twins) and learning-based manipulation/imitation learning — all confirmed as *capabilities*, not verticals.
- Classical clusters A1–A2, A4 (model-based vs. learned split), A5 locomotion — confirmed as distinct compartmentalized areas.
- Tactile/multimodal sensing = perception capability (the most common misplacement) — confirmed.
- Axis-B differentiator structure, proven concretely via hazardous/explosive-environment robotics (ATEX/IECEx, IEC 60079, zone classification).

**Refuted (excluded):** the proposed 5-method sim-to-real sub-taxonomy (domain randomization / domain adaptation / imitation learning / meta-learning / knowledge distillation) — did not survive verification (1-2).

**Scaffolding (`~`, not independently re-verified this pass):** most of A3, A9, A10; specialized perception/control sub-niches; and nearly all Axis-B verticals except B1 and B8. Asserted as comprehensive, to be verified per-niche in Phase 1.

**Time-sensitivity:** named frontier exemplars (π0, GR00T N1, Gemini Robotics, Cosmos, Isaac Sim 5.0 / Lab 2.2) and vendor metrics are point-in-time mid-2026 and will date quickly; several `[★]` items will migrate to `[F]` within the window.

**Key sources:** arXiv 2404.18201 (FMs for manipulation), 2605.00080 (world models survey), 2509.19012 & vla-survey.github.io (VLA), 2603.06749 (industrial RFMs), 2406.01152 (legged locomotion, IJRR 2025), PMC10222985 (SLAM/perception compartmentalization), NVIDIA Cosmos/Isaac announcements, IEC 60079 series (hazardous environments).
