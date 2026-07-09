# Per-Niche Profile — Locomotion & Loco-Manipulation

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; locomotion-specific and trending-research signals are research-backed (`phase-1/.research/locomotion.*`). `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Locomotion & Loco-Manipulation · **Axis A cluster:** A5 (Embodied Skills) · **Type:** `[F]` (loco-manipulation sub-area `[S][◆][★]`)
**Related capabilities:** A2 state estimation · A3 planning/navigation · A4 model-based & learned control · A6 RL/robot learning · A7 loco-manip VLAs · **Platforms (C):** C4 quadruped · C5 humanoid/bipedal · C6 aerial · C7 underwater · **Verticals (B):** B9 humanoid/service · B14 inspection · B11 aerial/UAS · B13 marine

---

## 1. Definition & Scope
Enabling a robot to **move its own body through the world** — generating and stabilizing gait across **legged (bipedal/quadruped), wheeled, aerial, and underwater** platforms, and, at the frontier, coordinating that whole-body motion with an onboard arm (**loco-manipulation**). It is the A5 counterpart to manipulation: it turns dynamics, control and learning into the physical acts of walking, running, flying, swimming and traversing rough terrain, and it splits cleanly into a **model-based** paradigm (ZMP / HZD / MPC) and a **learned** one (massively-parallel RL). **In scope:** gait generation & stability, model-based and learned control for balance, legged/wheeled/aerial/underwater locomotion, whole-body & contact-implicit control, terrain-aware perceptive locomotion, sim-to-real for gait, and loco-manipulation. **Out of scope (adjacent):** the general perception stack (A1), SLAM/state-estimation as a field (A2), generic motion-planning theory (A3), and stationary/dexterous manipulation (A5 Manipulation).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Locomotion / Controls Engineer | Implements/tunes gait controllers & RL training pipelines under supervision; runs sim experiments; deploys policies on real legged/aerial hardware. |
| **L2** | Locomotion Engineer | Owns a locomotion subsystem end-to-end (state estimation→gait→whole-body control→deployment); debugs sim-to-real; ships a walking/flying/swimming behavior to a real platform. |
| **L3** | Senior Locomotion Engineer | Designs the locomotion architecture; makes model-based-vs-learned tradeoffs; sets gait/agility benchmarks; owns the whole-body / loco-manip stack; mentors. |
| **L4/L5** | Staff / Principal Locomotion Research Engineer | Sets the locomotion research agenda; advances agile-legged / humanoid whole-body / loco-manip-VLA SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **Locomotion-specific adjustments `✓`: Mechanical Engineering rises to Tier 1** — rigid-body & contact dynamics, actuation/SEA design and legged-mechanism synthesis are load-bearing (Michigan/OSU/Caltech/ETH all route locomotion through ME); **Control/Systems/Applied-Math (nonlinear & hybrid dynamics) → Tier-1-adjacent** (legged locomotion *is* a hybrid-dynamics + optimal-control problem); **Aerospace/Aeronautical → rises for the *aerial* sub-niche**; **Ocean/Naval/Marine Engineering → rises for *underwater*** (normally not even Tier 2 elsewhere). **Falls:** pure-CS / pure-vision / data-science profiles are *less self-sufficient* here than in perception/VLA niches — CS stays Tier 1 (learned gait is RL-heavy) but **cannot skip dynamics + control**. Rule of thumb `✓`: require **≥1 dynamics course AND ≥1 control course**, plus a locomotion-flavored artifact (legged RL sim-to-real, quadrotor controller, or AUV autonomy), replacing the generic "≥1 robotics course" gate.

**Highly-valued undergraduate programs `✓`** — **University of Michigan Robotics BSE** (the standout: **ROB 413 "Legged Locomotion"** — a rare *undergraduate* course on hybrid dynamics, gait optimization and agile control, Grizzle/HZD lineage) · **Oregon State Robotics/ME** (Cassie/Digit heritage; Dynamic Robotics Lab) · **Caltech ME + Control & Dynamical Systems** (AMBER Lab; nonlinear/hybrid-control spine) · CMU BS Robotics · MIT (Course 2 MechE / 6-4) · WPI BS Robotics · UPenn (AI/CIS + GRASP — the aerial on-ramp, Kumar).

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI, EE, ME, or Aerospace/Ocean engineering with a locomotion / legged / control / robot-learning focus.

**Highly-valued postgraduate programs — ranked by locomotion strength, grouped by modality `✓`**
| Group | Programs (ranked) | The signal |
|-------|-------------------|-----------|
| Legged / humanoid / loco-manip (world-leading) | **ETH Zurich · MIT · CMU (RI) · Oregon State · UC Berkeley** | ETH **151-0851 Robot Dynamics** (Hutter/Siegwart; RSL/ANYmal) + open RSL "Legged Robots" lectures · MIT **6.8210 Underactuated Robotics** (Tedrake — gold standard for walking/running/flying/swimming) + **2.740 Bio-inspired** (Sangbae Kim, Cheetah) · CMU **16-715 Advanced Robot Dynamics** + **16-745 Optimal Control & RL** (Manchester; hybrid-systems/legged lecture) · OSU **ROB 542/537** (Cassie/Digit) · Berkeley **EE C106B/206B** (Sreenath legged control + Abbeel RL) |
| Legged (strong; dedicated course) | **Caltech · U-Michigan · EPFL · IIT Genoa · TUM** | Caltech **AMBER** (Ames, bipedal) · Michigan **ROB 413** (Grizzle/HZD) · EPFL **MICRO-507 "Legged Robots"** (Ijspeert — SLIP/ZMP/HZD/CPG + optimal control + RL) · IIT **HyQ** |
| Aerial (UAV / agile flight / aerial manipulation) | **UZH (Scaramuzza RPG) · UPenn GRASP (Kumar) · ETH ASL · Caltech CAST · TU Delft MAVLab** | UZH agile vision-based flight + "Vision-Based Drone Flight" seminar · Penn quadrotor dynamics, **differential flatness, SE(3) geometric control** (mirrored in Coursera Aerial Robotics) |
| Underwater / marine (AUV/ROV) | **Erasmus Mundus "MIR" · MIT–WHOI · U. Girona (CIRS) · Heriot-Watt · NTNU** | dedicated joint MSc **MIR** (Toulon → Girona/NTNU/IST) · MIT **2.680 Unmanned Marine Vehicle Autonomy** (MOOS-IvP stack) |

*(Wheeled locomotion has no prestige-degree cluster — it is served by mobile-robot courses (ETH AMR, Modern Robotics Ch.13) and the certs below. Stanford/Berkeley/Penn assemble locomotion from optimal-control + RL electives rather than one named degree.)*

**Highly-valued certifications `✓`** — MIT **Underactuated Robotics** (6.832x / OCW, Tedrake — *the* free gold-standard for legged/flying/swimming dynamics & optimal control) · UPenn **Aerial Robotics** (Coursera/edX MicroMasters, Kumar — flagship aerial MOOC) · Udacity **Flying Car & Autonomous Flight Engineer (ND787)** (Thrun/Roy/Schoellig/D'Andrea) · ETH **"Legged Robots" lecture series** (RSL, YouTube, open — reference legged curriculum) · NVIDIA **Isaac Lab / Isaac Gym legged RL + DLI** (`legged_gym` ANYmal & Spot sim-to-real — the applied learned-gait path) · Northwestern **Modern Robotics** (Ch.13 Wheeled Mobile Robots) · **Self-Driving Cars with Duckietown** (edX — wheeled locomotion on real hardware) · Hugging Face **Deep RL** + The Construct **ROS 2**. *(Per grounding ref: no official ROS cert / no NVIDIA robotics exam — Isaac Lab tutorials are the practical signal.)*

**Experience & portfolio** — L1: internship/academic; a legged RL sim-to-real in Isaac Lab **or** a quadrotor SE(3) controller **or** AUV autonomy in sim. L2: 2–4 yr, a walking/flying/swimming behavior deployed on real hardware (Go2 / Spot / Cassie / G1 / quadrotor) + benchmark numbers, a sim-to-real project. L3: 5–8 yr, ≥1 real locomotion deployment led. L4/L5: 8+ yr and/or first-author papers (RSS/CoRL/ICRA/RA-L/Science Robotics).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and **C++** for real-time control loops
- **Rigid-body & floating-base dynamics** (Lagrangian / Newton-Euler); kinematics; frame transforms (TF)
- **Nonlinear & hybrid dynamical systems** — limit cycles, Poincaré maps, contact/impact events
- **Feedback, optimal control & MPC** — LQR, iLQR/DDP, whole-body QP
- **Legged gait & balance**: ZMP, capture point, SLIP / inverted-pendulum templates, whole-body control
- **RL for control**: PPO, massively-parallel GPU sim (Isaac Lab/Gym), teacher-student / privileged learning
- **State estimation for locomotion** (IMU + joint encoders + contact; floating-base estimators)
- **Sim-to-real** transfer and domain randomization; debugging on real legged/aerial hardware
- **Physics simulation**: MuJoCo (MJX), Isaac Sim/Lab, or Drake
- **ROS 2** development and real-robot integration

**Preferred / differentiating**
- **Humanoid whole-body control** & motion tracking/retargeting (HOVER / ExBody-style)
- **Loco-manipulation** — whole-body MPC coupling base + arm; mobile whole-body policies
- **Contact-implicit / trajectory optimization** (contact-rich MPC)
- **Perceptive / terrain-aware locomotion** (elevation maps, learned map encoding)
- **Aerial**: differential flatness, SE(3) geometric control, VIO, agile flight
- **Underwater**: hydrodynamics / added-mass, thruster allocation, acoustic nav (DVL/USBL)
- **Loco-manip VLA / foundation-model** fine-tuning (GR00T, Ψ₀)
- Publications at **RSS / CoRL / ICRA / RA-L / Science Robotics**; real-world deployment experience

**Tools & tech stack** — *Languages:* Python, C++ · *Middleware:* ROS 2 · *Sim:* MuJoCo/MJX, Isaac Sim/Lab, Isaac Gym, Genesis, Drake, PyBullet · *RL/policy:* `legged_gym` / `rsl_rl`, Isaac Lab, `rl_games`, Stable-Baselines3, PyTorch, LeRobot · *Control/opt `~`:* Pinocchio, OCS2, Crocoddyl, TSID, OSQP/qpOASES, ACADOS, Drake · *Loco-manip FMs:* GR00T, Ψ₀ · *Hardware:* Unitree Go2/B2/G1/H1, Boston Dynamics Spot, ANYmal, Agility Cassie/Digit; PX4/ArduPilot drones; BlueROV2.

**Bar by tier** — L1: solid on the required list in sim + basic real hardware · L2: ships a real locomotion subsystem, fluent across **both** model-based and learned control · L3: architects systems, deep in ≥1 differentiating area (humanoid WBC / loco-manip / agile flight) · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Locomotion slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** linear algebra · multivariable calculus & **differential equations** · **nonlinear & hybrid dynamical systems** (limit cycles, Poincaré maps) *(MIT 6.8210)* · probability · **convex/numerical optimization** · Python + C++ *(CMU 16-715)*.
- **Core robotics:** **rigid-body & floating-base kinematics/dynamics** (Lagrangian / Newton-Euler) *(ETH 151-0851, CMU 16-715, OSU ROB 545)* · **feedback / optimal control & MPC** *(CMU 16-745)* · state estimation & mobile-robot localization *(ETH 151-0854)* · motion planning · ROS 2 · physics simulation (MuJoCo/Isaac/Drake).
- **Niche-specific:**
  - **Legged:** gait & stability (**ZMP, capture point, SLIP/inverted-pendulum templates**, Raibert hopping) · **Hybrid Zero Dynamics** & underactuated walking *(MIT 6.8210, Michigan ROB 413, EPFL MICRO-507)* · whole-body & contact-implicit control · **actuator / series-elastic dynamics** *(OSU ROB 542)* · quadruped/biped trajectory optimization.
  - **Wheeled:** differential-drive / Ackermann kinematics, nonholonomic constraints *(Modern Robotics Ch.13, ETH AMR)*.
  - **Aerial:** quadrotor dynamics, **differential flatness, geometric control on SE(3)**, VIO *(UPenn Aerial Robotics, UZH RPG)*.
  - **Underwater:** hydrodynamics / added mass, thruster allocation, acoustic nav (DVL/USBL), disturbance-robust control *(MIT 2.680, MIR)*.
  - **Loco-manipulation:** whole-body MPC coupling base + arm; mobile-manipulation planning.
- **Frontier/advanced:** **RL for locomotion** (PPO, teacher-student/privileged learning, massively-parallel sim) *(Isaac Lab; ETH RSL)* · sim-to-real & domain randomization · terrain-aware perceptive locomotion · learned + sampling-based/GPU MPC (DIAL-MPC, MuJoCo Playground) · **central pattern generators / bio-inspired gaits** *(EPFL, MIT 2.740)* · humanoid whole-body loco-manipulation & VLA-conditioned control.

## 6. Training Programme Design & Duration `✓`
Locomotion-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D); specialization + capstone tuned to locomotion. Note the phase-1 tilt toward **ODEs / dynamical systems**, which locomotion leans on harder than most niches.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths, **ODEs / dynamical systems**, Python/C++, classical ML | 2.0 mo | 6 mo | 300 | ML & dynamics-maths fluency |
| 2. Core robotics | Kinematics/dynamics, control, planning, **ROS 2**, state estimation | 2.0 mo | 6–7 mo | 320 | Command a mobile/legged robot in sim + real |
| 3. AI/ML depth | Deep learning, **RL (PPO)**, computer vision | 2.0 mo | 6 mo | 300 | Policy learning + perception |
| 4. **Locomotion specialization** | Gait & stability (ZMP/HZD/MPC), whole-body control, **legged RL + sim-to-real**, aerial/underwater electives, loco-manip | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | **Legged RL policy → sim-to-real on a real quadruped** (or agile-flight / AUV capstone) + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior locomotion engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**. Budget extra hardware/sim-debug friction — legged sim-to-real and real-flight loops are slower to close than pure-software iteration.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The locomotion frontier is collapsing into whole-body **foundation models**; these are the named substrates everyone now fine-tunes and benchmarks against. `🆕` = 2026 release.

- **Humanoid whole-body control & motion tracking (the center of gravity):** the dominant paradigm — one neural policy tracks retargeted human motion, distilling many modes into a single controller. **HOVER** (NVIDIA — multi-mode WBC reference) · **OmniH2O / ExBody2** (kinematic pose as universal control interface; foundational baselines) · **ASAP** (CMU, RSS'25 — residual "delta-action" model closes the sim-real gap for agile skills on Unitree G1; the go-to sim→real→sim recipe) · **TWIST** (teleoperated whole-body imitation) · 🆕 **GMT** (ICRA'26 — unified tracker via adaptive sampling + Motion Mixture-of-Experts) · **SONIC / UniTracker** ("supersizing" universal tracking) · **BFM-Zero** (LeCAR, late-2025 — promptable Behavioral Foundation Model via forward-backward/unsupervised RL, zero-shot prompting on G1; extends Motivo/MaskedMimic onto hardware) · 🆕 also *Robust & Generalized Motion Tracking*, *CoRe-MoE* multi-terrain gait.
- **Loco-manip foundation models / VLA (fastest-moving; heavily 2026):** shift from motion tracking to **language-conditioned, video-pretrained generalist** loco-manipulation. NVIDIA **GR00T N1 → N1.5 → 🆕 N1.6** (open humanoid VLA; dual-system VLM System-2 + diffusion-transformer System-1 — the default open base) · 🆕 **Ψ₀ (Psi-0)** (USC + NVIDIA, RSS'26 — open 2.5B VLM + flow MM-DiT; SOTA long-horizon loco-manip, ~+40% success at ~10× less robot data than GR00T-N1.6) · 🆕 **WholeBodyVLA** (OpenDriveLab, ICLR'26 — unified latent VLA from action-free egocentric video + a loco-manip RL policy) · 🆕 **SUGAR** (unlabeled human video → deployable whole-body skills, no reward engineering; 6 tasks on G1) · **VIRAL** (visual sim-to-real at scale; privileged RL teacher → vision student, zero-shot to G1) · 🆕 **OmniContact / LEGS / PhysHSI**.
- **Quadruped & generalized legged (maturing — now generalization, not "can it walk"):** **ANYmal Parkour** (agile learned nav reference) · **AllGaits** (single policy for all gaits + transitions) · **Attention-Based Map Encoding** (perceptive locomotion generalizing over terrain via learned map attention) · 🆕 **REAL** (robust extreme agility via spatio-temporal policy + physics-guided filtering).
- **Cross-embodiment & scaling laws (structural trend):** 🆕 **Embodiment Scaling Laws in Robot Locomotion** (RSS'26 — ~1,000 procedurally-generated embodiments; *more embodiments beats more data-per-embodiment*; one distilled generalist zero-shots to Go2/H1). The "scaling laws" thesis for locomotion.
- **Model-based & hybrid control (alive, converging with learning):** **Whole-Body MPC with MuJoCo** (real-time iLQR WBC on quadruped + full-size humanoid — the "MJX-as-MPC-engine" trend) · **RL-augmented adaptive MPC** (bipedal over challenging terrain) · 🆕 **Diffusion-MPC** (diffusion generative model inside MPC; retrain-free changes of speed/direction/gait).
- **Wheeled-legged & new morphologies:** 🆕 **Sparse-MoE DRL** (Top-K expert gating for multi-mode bipedal wheel-legged) · 🆕 **WiXus** (wheeled-legged + wire-driven mobility/manipulation; constrained-RL 1 m obstacle climbing on a 340 kg platform).
- **Aerial (agile flight):** **Swift** (Nature'23 — champion-level drone racing, the canonical RL-beats-humans result) · **2025 A2RL Abu Dhabi** (TU Delft MAVLab + ESA autonomous drone beat human FPV world champions head-to-head) · 🆕 **Swooper** (high-speed aerial grasping) · 🆕 superhuman **multi-agent MARL racing**.
- **Underwater / amphibious (bio-inspired, earlier stage):** soft robotic fish with DRL undulatory control · multi-agent RL path-tracking with reaction wheels · 🆕 **Amphibious Robots review** (design/locomotion/control survey) · 🆕 **ZBot** (zebrafish visuomotor rheotaxis).
- **Shared plumbing — datasets, retargeting & sim substrate:** **AMASS + LAFAN1** (the human-motion sources every tracker retargets from) · 🆕 **GMR** ("Retargeting Matters", ICRA'26 — real-time CPU human→humanoid; the retargeter behind TWIST) · 🆕 **PHUMA** (physically-grounded humanoid loco dataset; cleans foot-slide/penetration retargeting artifacts) · **Isaac Lab/Sim · Genesis · MuJoCo (MJX)** — "IsaacGym → Genesis/IsaacSim → real" is now the standard evaluation protocol.

*Net trend: locomotion is collapsing into language-conditioned, video-pretrained whole-body **foundation models** (GR00T, Ψ₀, BFM-Zero) that unify locomotion + manipulation on humanoids — sim-to-real closed by residual/physics alignment (ASAP) and scaled across embodiments (Embodiment Scaling Laws) — while model-based MPC survives by fusing with diffusion and RL. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Passive-dynamic / compass-gait walker + SLIP hopper in MuJoCo/Drake | Hybrid dynamics + limit cycles; a stable walking limit cycle in sim |
| Foundational | Quadrotor dynamics + **SE(3) geometric controller** (hover → trajectory) | Differential flatness / geometric control; track an aggressive trajectory in sim |
| Applied | **Model-based MPC / ZMP walking** on a simulated biped/quadruped | Whole-body / optimal control; robust walking over flat + mild rough terrain |
| Applied | **Legged RL in Isaac Lab / `legged_gym`** → deploy on a real quadruped (Go2 / Spot) | Massively-parallel RL + sim-to-real; zero-shot walk on real hardware |
| Advanced | **Perceptive / terrain-aware locomotion** (elevation map → policy) over stairs/gaps | Perception-in-the-loop gait; traverse stairs and obstacles |
| Advanced | **Humanoid whole-body motion tracking** (retarget AMASS → track on a G1 in sim) | Retargeting + WBC; imitate reference motions on a humanoid |
| Capstone | **Loco-manipulation**: fine-tune a whole-body policy / VLA (GR00T / Ψ₀) *or* whole-body MPC to walk-and-manipulate | End-to-end frontier stack; mobile whole-body pick-carry-place |
| Capstone (alt.) | **Agile-flight racing policy** (Swift-style) *or* **AUV autonomy** (MOOS-IvP) | Modality-specific mastery — aerial or underwater |

## 9. Required Lab Setup / Hardware / Resources
- **Legged platforms:** Unitree **Go2 / B2** (quadruped, budget→mid) · Boston Dynamics **Spot** · ANYbotics **ANYmal** · Unitree **G1 / H1** & Agility **Digit** (humanoid) · **Cassie** heritage.
- **Aerial:** PX4/ArduPilot quadrotors · Betaflight FPV · **Crazyflie** (research/swarm) `~`.
- **Underwater:** **BlueROV2** · research AUVs (marine labs) `~`.
- **Actuation:** quasi-direct-drive / **series-elastic actuators (SEA)**; torque-controlled motors.
- **Sensors:** IMUs, joint encoders, **contact/force** sensors, depth cameras (RealSense), LiDAR; **DVL/USBL** (marine).
- **Compute:** RTX 4090 / A6000 workstation for massively-parallel RL; A100/H100 for large-scale training; onboard **Jetson Orin**.
- **Software / sim:** MuJoCo (**MJX**) · Isaac Sim/Lab · Isaac Gym · Genesis · Drake · PyBullet · ROS 2; control libs Pinocchio / OCS2 / Crocoddyl / TSID `~`.
- **RL / policy libs:** `legged_gym`, `rsl_rl`, Isaac Lab, `rl_games`, Stable-Baselines3, LeRobot.
- **Datasets & benchmarks:** **AMASS**, **LAFAN1** (human motion for retargeting) · 🆕 **PHUMA** (cleaned humanoid loco data) · **GMR** retargeter · loco benchmarks — Isaac Lab legged tasks · **MuJoCo Playground** · **Humanoid-Bench** / **LocoMuJoCo** `~` · IsaacGym legged tasks.

## 10. Partnerships & Ecosystem
- **Hardware vendors:** Unitree · Boston Dynamics · ANYbotics · Agility Robotics · Ghost Robotics `~` · Skydio / DJI (aerial) · Blue Robotics (marine).
- **Sim / compute:** NVIDIA (Isaac Lab/Gym, GR00T, DLI, Inception) · Google DeepMind (MuJoCo/MJX) · Genesis.
- **Academic labs (locomotion powerhouses):** **ETH RSL (Hutter)** · MIT **Biomimetic (Sangbae Kim)** + **Robot Locomotion Group (Tedrake)** · CMU (Manchester) · **Oregon State DRL (Hurst/Fern)** · **Caltech AMBER (Ames)** · Michigan (Grizzle) · UC Berkeley **Hybrid Robotics (Sreenath)** + Abbeel · **UZH RPG (Scaramuzza)** · **UPenn GRASP (Kumar)** · EPFL **BioRob (Ijspeert)**.
- **Open-source communities:** Isaac Lab / `legged_gym` / `rsl_rl` · MuJoCo Menagerie / Playground · Hugging Face **LeRobot** · PX4 / ArduPilot · MOOS-IvP.
- **Industry programs:** Boston Dynamics · Agility Robotics · Unitree · humanoid players (Figure, 1X, Tesla Optimus, Sanctuary) · Skydio.
- **Standards (applied):** ISO 13482 (personal-care/service robots) · FAA **Part 107 / BVLOS** (aerial) · DNV / classification societies (marine).

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (hybrid dynamics, ZMP/capture point, MPC, RL fundamentals).
- **Project rubrics** with objective metrics: limit-cycle stability, **push-recovery / disturbance rejection**, sim-to-real transfer success (zero-shot walk), terrain-traversal success rate, **cost-of-transport**, reference-motion tracking error, aerial trajectory-tracking error.
- **Standardized benchmarks** as portable evidence: Isaac Lab legged tasks · MuJoCo Playground · Humanoid-Bench / LocoMuJoCo `~`; increasingly **cross-embodiment** zero-shot eval.
- **Recognized certifications as evidence:** Underactuated Robotics completion; UPenn Aerial Robotics; an Isaac Lab legged-RL project; Modern Robotics.
- **Senior tiers:** portfolio + system-design interview + live control-loop / sim-to-real debugging.

## 12. Adjacent & Related Niches
Feeds the **C4 Quadruped · C5 Humanoid/Bipedal · C6 Aerial · C7 Underwater** platform tracks and **A7 loco-manip VLAs / foundation models**; pairs closely with **A4 model-based & learned control**, **A2 state estimation**, **A3 planning/navigation**, **A6 RL/robot learning**, and **A5 Manipulation** (for loco-manipulation). (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Niche research: `phase-1/.research/locomotion.creds.md` + `locomotion.trending.md`. Taxonomy: `master-niche-taxonomy.md` cluster A5 (`✓`). §7 stamped mid-2026 — re-research before publish.*
