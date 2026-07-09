# Per-Niche Profile — Motion Planning & Navigation

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; planning/navigation-specific and trending-research signals are research-backed. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Motion Planning & Navigation · **Axis A cluster:** A3 (Planning & Navigation) · **Type:** `[F]` (learned-planning / social-nav / VLN sub-areas `[S][★]`)
**Related capabilities:** A1 perception · A2 state estimation/SLAM · A4 control/MPC · A5 loco-manipulation · A6 RL/imitation · A7 VLN/foundation models · **Platforms (C):** C3 AMR/AGV · C2 mobile manipulator · C4 quadruped · C6 drone · **Verticals (B):** B2 logistics · B10 autonomous vehicles · B11 aerial · B14 inspection

---

## 1. Definition & Scope
Computing **how a robot moves** from where it is to where it needs to be — safely, efficiently, respecting its dynamics, and (increasingly) legibly around people. It is the algorithmic bridge between *"where am I / what's around me"* (perception + SLAM) and *"actuate the wheels/joints"* (control), and it is the **most algorithms-, geometry-, and optimization-heavy slice of robotics**. **In scope:** search-based planning (A\*/D\*/lattice), sampling-based planning (PRM/RRT/RRT\*/BIT\*), optimization-based motion planning & trajectory optimization (CHOMP/TrajOpt/min-snap), global/local navigation (costmaps, DWA/TEB, MPPI), social/crowd navigation, learned/neural planning, and vision-language navigation (VLN). **Out of scope (adjacent):** the perception stack (A1), SLAM/state estimation itself (A2), the low-level controller that *tracks* the planned trajectory (A4), and the symbolic task layer / full **TAMP** (its own A3 sibling niche — motion planning feeds it).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Motion-Planning / Navigation Engineer | Implements/tunes planners & nav pipelines under supervision (OMPL / Nav2); runs experiments; integrates libraries on real mobile robots. |
| **L2** | Motion-Planning / Navigation (Autonomy) Engineer | Owns a planning/navigation subsystem end-to-end (global→local→recovery); tunes costmaps & planners; debugs on hardware; ships to a real deployment. |
| **L3** | Senior Motion-Planning / Autonomy Engineer | Designs the autonomy/planning architecture; makes sampling-vs-optimization and classical-vs-learned tradeoffs; sets benchmarks; mentors. |
| **L4/L5** | Staff / Principal Planning & Autonomy Research Engineer | Sets the planning research agenda; advances learned/neural planning, GPU planning, or social-nav SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (esp. with AI/algorithms), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **A3-specific `✓`: Mathematics/Applied Math *and* Aerospace/Aeronautical Engineering rise to Tier 1** — optimization, graph theory, differential geometry and probability *are* the substance of trajectory optimization and sampling-based planning, and the Guidance-Navigation-Control heritage maps directly onto path/trajectory planning (Stanford's core autonomy course AA 274 *is* an Aero/Astro course). Operations Research / Industrial Engineering qualifies-with-evidence (search, MDPs, combinatorial optimization). **Mechanical Engineering *falls* relative** to Manipulation — it still qualifies via dynamics + controls but is not a differentiator here (A3 rewards little of ME's contact-mechanics core).

**Highly-valued undergraduate programs `✓`** — CMU **16-350 Planning Techniques for Robotics** (Likhachev — the single most on-target UG course, feeder to 16-782) · WPI **RBE 3002 Unified Robotics IV** (nav, path planning, frontier exploration capstone) · Michigan **ROB 330 Localization, Mapping & Navigation + ROB 422 Algorithmic Robotics** · Georgia Tech **CS 4649 Robot Intelligence: Planning** · UPenn (GRASP; planning via the GRASP pipeline → MEAM 6200).

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI, EE, **Aero/Astro**, or ME with a planning / autonomy / controls focus.

**Highly-valued postgraduate programs — ranked by A3 strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **CMU (RI) · MIT · Stanford · UC Berkeley** | CMU **16-782 Planning & Decision-making in Robotics** (Likhachev) — *the* flagship graduate planning course · MIT **6.832 Underactuated Robotics** (Tedrake — trajectory optimization / motion planning as optimization) · Stanford **AA 274A/B Principles of Robot Autonomy** (x-listed CS 237A/B; GNC lineage) · Berkeley **CS287 Advanced Robotics** (Abbeel — MPC/LQR/iLQR + RRT/A\* variants) |
| Strong | **Michigan · UPenn · Georgia Tech** | Michigan **ROB 520 Motion Planning** (Berenson — high-dim sampling, non-holonomic, constraint-manifold, multi-robot) · Penn **MEAM 6200 Advanced Robotics** + **ESE 650 Learning in Robotics** · GT **CS 7649 Robot Intelligence: Planning** |
| Present (EU) | **TU Delft · ETH · EPFL · TUM** | Delft **RO47005 Planning & Decision Making** (global PRM/A\* + local + trajopt, project-based) · ETH **Autonomous Mobile Robots** (Siegwart — the anchor nav course) · EPFL/TUM teach planning within MSc-Robotics electives |

*(Oxford = research-only (ORI / AIMS CDT); Imperial & Edinburgh teach planning inside a broader MSc AI/robotics rather than a dedicated planning course.)*

**Highly-valued certifications `✓`** — UPenn/Coursera **Robotics: Computational Motion Planning** (CJ Taylor — the single most *on-topic* MOOC: A\*/Dijkstra, C-space, PRM/RRT, potential fields) · Northwestern **Modern Robotics Course 4: Motion Planning & Control** (Lynch — gold-standard theory) · ETHx **Autonomous Mobile Robots** (Siegwart/Scaramuzza/Chli) · The Construct **ROS2 Navigation (Nav2)** + Advanced Nav2 (de-facto applied stack, shareable pro cert) · Udacity **Self-Driving Car Engineer** (path-planning module) + **Robotics Software Engineer** ND · NVIDIA DLI **Isaac ROS / cuMotion (cuRobo)** path. *(No official "motion-planning certification" exists; per grounding ref there is no NVIDIA robotics exam and no official ROS cert — validate via the theory MOOCs + a Nav2/OMPL portfolio.)*

**Experience & portfolio** — L1: internship/academic; RRT/A\* implemented + sim navigation. L2: 2–4 yr, a real robot autonomously navigating an unknown environment (Nav2/OMPL) + benchmark numbers. L3: 5–8 yr, ≥1 real autonomy deployment led. L4/L5: 8+ yr and/or first-author papers (**RSS / CoRL / ICRA / RA-L / WAFR**).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and **C++** for real-time robotics (**OMPL / Nav2 are C++**)
- **Graph/search-based planning**: Dijkstra, A\*, ARA\*, D\* Lite; lattice planners
- **Sampling-based planning**: PRM, RRT, RRT\*, RRT-Connect, BIT\* (+ configuration space, collision checking)
- **Trajectory optimization**: CHOMP / TrajOpt, minimum-snap, direct collocation; convex & numerical optimization
- The **ROS 2 Nav2 stack**: global/local planners, costmaps, AMCL localization, recovery behaviors, DWA/TEB
- Robot **kinematics & dynamics** — holonomic vs non-holonomic; kinodynamic constraints
- **Local planning / MPC** (DWA, TEB, **MPPI**) and its coupling to the controller
- Consuming **state estimation / localization / SLAM** (odometry, TF, pose)
- Robot **simulation**: Isaac Sim/Lab, Gazebo, MuJoCo, or PyBullet
- Real-robot integration and on-hardware debugging

**Preferred / differentiating**
- **Learned / neural motion planning** (MPNet, MπNets/Motion Policy Networks, Neural MP)
- **Diffusion / generative trajectory planners** (Motion Planning Diffusion, EDMP)
- **GPU/SIMD-accelerated planning** (cuRobo, VAMP, pRRTC)
- **Social / crowd navigation** and human-aware / legible planning
- **Vision-Language Navigation (VLN)** and navigation foundation models (ViNT/NoMaD, NavFoM)
- **Multi-robot path planning** (CBS, prioritized planning)
- **Whole-body / loco-manipulation planning** on legged & humanoid platforms
- Publications at **RSS / CoRL / ICRA / RA-L / WAFR**; real-world autonomy deployment

**Tools & tech stack** — *Languages:* Python, C++ · *Middleware/stacks:* ROS 2, **Nav2**, MoveIt 2 · *Planning libs:* **OMPL**, **cuRobo/cuMotion**, **VAMP**, **SBPL** (Likhachev search-based), OctoMap · *Optimization:* TrajOpt, CHOMP, Drake, OSQP / CasADi / IPOPT `~` · *Sim:* Isaac Sim/Lab, Gazebo, MuJoCo, PyBullet, **CARLA** (driving), **Habitat** (embodied nav/VLN) · *Learning:* PyTorch, general-navigation-models (ViNT/NoMaD), diffusion-planner libs · *Hardware:* TurtleBot 4, Clearpath Jackal/Husky, Unitree Go2; RPLIDAR / Velodyne / Ouster / Livox; RealSense.

**Bar by tier** — L1: solid on the required list in sim + basic real-robot nav · L2: ships a real navigation subsystem, fluent across the Nav2/OMPL stack · L3: architects autonomy systems, deep in ≥1 differentiating area · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Planning/navigation slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS** *(heavier here than any other A-niche):* **graph theory & search algorithms** (Dijkstra, A\*, D\*/ARA\*) *(CMU 16-350/782, UPenn Comp. Motion Planning)* · linear algebra · probability & statistics *(Stanford AA274A prereqs)* · **convex & numerical optimization** *(MIT 6.832, Berkeley CS287 — load-bearing for trajectory optimization)* · **computational geometry** — configuration space, collision detection *(UPenn, Michigan ROB 520)* · data structures & algorithms; Python + C++.
- **Core robotics:** kinematics & dynamics, holonomic vs non-holonomic *(Modern Robotics C2, MEAM 6200)* · feedback/optimal control, MPC/LQR *(Berkeley CS287, MIT 6.832, Modern Robotics C4)* · state estimation, localization & SLAM *(ETH AMR, Stanford AA274A, Michigan ROB 330)* · ROS 2 / Nav2 stack *(The Construct, WPI RBE 3002)*.
- **Niche-specific (the A3 core):** **sampling-based planning** (PRM/RRT/RRT\*/BIT\*) *(Michigan ROB 520, CMU 16-782)* · **search-based planning** (grid/lattice A\*, ARA\*, D\* Lite) *(CMU 16-350/782)* · **trajectory optimization** (CHOMP/TrajOpt, min-snap, direct collocation) *(MIT 6.832, TU Delft RO47005)* · planning under uncertainty / kinodynamic / non-holonomic / constraint-manifold planning *(Michigan ROB 520, CMU 16-782)* · global vs local navigation, costmaps, potential fields, DWA/TEB *(ETH AMR, Nav2)* · multi-robot path planning *(Michigan ROB 520, MEAM 6200)*.
- **Frontier/advanced `⏱`:** learned/neural motion planning (MPNet, MπNets, Neural MP, cuRobo, diffusion planners) · social/crowd navigation (CrowdNav, SCAND/MuSoHu) · VLN & navigation foundation models · task & motion planning (PDDLStream — A3 sibling) · decision architectures — behavior trees, FSMs, autonomy stacks *(Stanford AA274B)*.

## 6. Training Programme Design & Duration `✓`
Planning/navigation-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), with specialization + capstone tuned to motion planning & navigation.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths (**optimization + graph theory emphasis**), Python/C++, classical ML | 2.0 mo | 6 mo | 300 | ML & maths fluency |
| 2. Core robotics | Kinematics/dynamics, control, **ROS 2/Nav2**, SLAM/localization | 2.0 mo | 6–7 mo | 320 | Command a mobile robot in sim + real |
| 3. AI/ML depth | Deep learning, computer vision, RL/imitation | 2.0 mo | 6 mo | 300 | Perception + policy learning |
| 4. **Planning & navigation specialization** | Sampling/search-based planning, trajectory optimization, local planning/MPPI, social nav, learned/neural + GPU planning | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Autonomous navigation of an unknown, dynamic, human-populated environment + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior motion-planning / navigation engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** Motion planning is bifurcating into *ultra-fast classical* (SIMD/GPU) infrastructure and *learned generative* planners — the field's "SAM2/DINO moment." `🆕` = 2026 release.

- **Classical planning got *fast* (SIMD + GPU — the new "build-on" substrate):** NVIDIA **cuRobo** (CUDA IK + geometric planning + trajopt; full motion-gen in ~30–100 ms, ~60× prior trajopt — the de-facto GPU stack) · Kavraki Lab **VAMP** (vectorized collision-checking + FK; RRT-Connect for a Franka in ~35 µs on one CPU core — now upstreamed into **OMPL**) · its algorithmic core **CAPT** (RSS 2024) + **FCIT\*** (ICRA 2025) · **pRRTC** (GPU-parallel RRT-Connect) · **cpRRTC** (RSS 2025 — GPU-parallel *constrained* RRT-Connect, ~53× over cuRobo on Fetch) · 🆕 **VAMP-MR** (vectorized multi-arm planning, ~2-orders speedup).
- **Learned / generalist neural motion planners:** **MπNets / Motion Policy Networks** (CoRL 2022 — the reference large-scale neural planner + dataset) · **MotionBenchMaker** (the community's shared procedural benchmark — 40 datasets/5 robots) · **Neural MP** (CMU, 2024–25 — generalist planner trained on ~1M+ scenes, generalizes where MotionBenchMaker-trained policies fail) · 🆕 **"Toward Generalist Neural Motion Planners"** (2026 survey framing generalization/guarantees/speed).
- **Diffusion & generative trajectory optimization (the hottest methodological theme):** **Motion Planning Diffusion (MPD)** (learned trajectory priors — the template others extend) · **SafeDiffuser** (ICLR 2025 — certified safety constraints) · **Cascaded Diffusion** (coarse-to-fine, 2025) · **M2Diffuser** (mobile-manipulation trajopt in 3D scenes) · **Diffusion Trees / Train-Once-Plan-Anywhere** (kinodynamic, transfers across envs, 2025) · **Discrete-Guided Diffusion** (safe *multi-robot*, 2025) · **SafeBimanual** (2025).
- **Sampling-based MPC & local planning:** **MPPI (Model Predictive Path Integral)** — the de-facto GPU-parallel local planner/controller for hard, non-differentiable dynamics at 50–100 Hz: **Legged MPPI** (whole-body loco-MPC; 🆕 2026 sampling-strategy design) · **PA-MPPI** (perception-aware quadrotor nav in unknown space, 2025) · **CAHSOR** (competence-aware high-speed off-road nav in SE(3) — the learned-costmap off-road line).
- **Mobile-navigation foundation models & world models (the "SAM2/DINO of navigation"):** Berkeley **GNM → ViNT → NoMaD** (the cross-embodiment goal-conditioned visual-nav family; released checkpoints everyone fine-tunes; NoMaD adds a diffusion action head) · **NavFoM** (2025 — 8M cross-embodiment samples across quadruped/drone/wheeled/car; one VLA for VLN/object-search/tracking/driving) · **Navigation World Models (NWM)** (Bar/LeCun, Meta, CVPR 2025 — 1B-param conditional diffusion transformer that *plans by imagining* future observations; ranks NoMaD rollouts) · **From Seeing to Experiencing** (2025 — scaling nav FMs with RL beyond imitation).
- **Vision-Language Navigation (VLN) & embodied-nav VLAs:** **Uni-NaVid** (first video-based VLA unifying VLN / object-goal / EQA / human-following, 5 Hz, 3.6M samples) · **InternVLA-N1** (2025 — open dual-system "slow reasoning + fast planner" with learned latent plans) · **LH-VLN** (CVPR 2025 — long-horizon VLN platform + benchmark) · 🆕 **VLNVerse** (2026 — versatile embodied-VLN benchmark, SR/SPL leaderboard).
- **Social / crowd navigation (benchmark-driven):** **SCAND** (UT Austin — the standard socially-compliant-nav dataset, 8h+ teleop, LiDAR/RGB-D) · **Arena 4.0** (ICRA 2025 — ROS2 benchmarking platform w/ generative env-generation for human-centric nav) · **awesome-robot-social-navigation** (the living index the field tracks) · Frontiers 2025 learning-based social-nav review.
- **Whole-body / humanoid loco-manipulation planning (fastest-growing frontier):** 🆕 **WholebodyVLA** (ICLR 2026 — unified latent VLA for whole-body loco-manipulation) · **Physically-Consistent Humanoid Loco-Manipulation with Latent Diffusion** (2025) · 🆕 **OpenHLM** (2026 — empirical whole-body recipe).

*Net trend: motion planning is bifurcating into (a) ultra-fast **classical** planners on SIMD/GPU (VAMP, cuRobo) as reliable infrastructure and (b) **learned generative** planners — diffusion trajectory models, navigation world models, and cross-embodiment nav/VLN foundation models (NavFoM, NWM, Uni-NaVid) — becoming the deployable SAM2/DINO-style checkpoints of navigation. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Implement **A\*/Dijkstra + RRT/RRT\*** in a 2D grid / C-space | Search + sampling fundamentals; optimal path through a maze / around C-obstacles |
| Foundational | Bring up **ROS 2 Nav2** on **TurtleBot 4** (sim) — SLAM map → global+local nav | Full nav stack; robot autonomously reaches goals with obstacle avoidance |
| Applied | **Trajectory optimization** — minimum-snap quadrotor / CHOMP arm through clutter | Optimization-based planning; smooth, dynamically-feasible trajectory |
| Applied | **Kinodynamic / non-holonomic** planning for a car-like robot (lattice + **MPPI** local) | Motion under differential constraints; parking / narrow-passage nav |
| Advanced | **Social navigation** — deploy a crowd-aware planner, eval on **SCAND / Arena** | Human-aware nav; SPL + social-compliance metrics on a benchmark |
| Advanced | **Learned / GPU planning** — **cuRobo** or a neural planner (MπNets / Neural MP) on a Franka in clutter | Fast/learned planning; sub-100 ms plans that generalize to held-out scenes |
| Capstone | **Autonomous nav of an unknown, dynamic, human-populated environment** — or fine-tune a VLN model (**ViNT/NoMaD**) for language-goal navigation | End-to-end autonomy stack; robust nav + recovery; language-conditioned goal reaching |

## 9. Required Lab Setup / Hardware / Resources
- **Mobile robots:** **TurtleBot 4** · Clearpath **Jackal / Husky** · iRobot **Create 3** · **Unitree Go2** (quadruped) · **AgileX** LIMO/Scout · PX4/Holybro drones (aerial nav). `~`
- **Manipulators (for arm planning):** Franka Panda / Research 3 · **UR5e** — plan-in-clutter.
- **Sensors:** 2D/3D LiDAR — **RPLIDAR, Velodyne, Ouster, Livox** · Intel RealSense D435/D455 · IMU + wheel odometry.
- **Compute:** RTX 4090 / A6000 workstation (GPU planning — cuRobo/VAMP) · **Jetson Orin** on-robot · A100/H100 for training nav foundation models.
- **Software / sim:** **ROS 2 + Nav2** · **OMPL** · **MoveIt 2** · **cuRobo** · **VAMP** · Isaac Sim/Lab · Gazebo · MuJoCo · PyBullet · **CARLA** (driving) · **Habitat** (embodied nav/VLN).
- **Datasets & benchmarks:** **MotionBenchMaker** · MπNets dataset · OMPL benchmark suite · navigation — **BARN Challenge** `~`, **Habitat / HM3D** · social — **SCAND / MuSoHu**, **Arena 4.0**, **SocNavBench** · VLN — **R2R / RxR**, **VLN-CE**, LH-VLN.

## 10. Partnerships & Ecosystem
- **Hardware vendors:** Clearpath Robotics · Unitree · AgileX · iRobot (Create/TurtleBot) · Ouster / Velodyne / SICK / Livox (LiDAR) · Intel RealSense.
- **Sim / compute:** NVIDIA (Isaac, **cuRobo**, DLI, Inception) · Open Robotics (**Gazebo**) · Google DeepMind (MuJoCo) · Meta AI (**Habitat**).
- **Academic labs (planning/nav powerhouses):** CMU RI (**Likhachev / SBPL**, Choset) · **Rice Kavraki Lab** (OMPL / VAMP) · MIT (Tedrake / RLG) · **Stanford ASL** (Pavone) · **Michigan (Berenson)** · UC Berkeley (Abbeel; **Levine — nav foundation models**) · ETH ASL (Siegwart) · **UT Austin (Biswas — social nav / SCAND)**. `~`
- **Open-source communities:** **Open Navigation / Nav2** (Macenski) · **OMPL** (Kavraki Lab) · MoveIt · general-navigation-models (ViNT/NoMaD).
- **Industry programs:** NVIDIA Inception · AMR & autonomous-vehicle players (Locus Robotics, Fetch/Zebra, Symbotic, Waymo, Nuro) · humanoid players (Figure, Agility, 1X).
- **Standards (applied):** **ISO 3691-4** (driverless industrial trucks / AMRs) · **ANSI/RIA R15.08** (industrial mobile robots) · ISO 26262 / ISO 21448 SOTIF (driving).

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (search, sampling, trajopt, local planning, social nav).
- **Project rubrics** with objective metrics: success rate, path optimality / length, **planning time / latency**, collision & clearance, **SPL** (Success weighted by Path Length), cycle time, social-compliance scores.
- **Standardized benchmarks** as portable evidence: **MotionBenchMaker** & OMPL benchmark (manipulator planning); **BARN Challenge** & Habitat nav; **SocNavBench / Arena** (social); VLN **R2R / RxR** leaderboards.
- **Recognized certifications as evidence:** Computational Motion Planning (Penn); Modern Robotics C4; ETHx Autonomous Mobile Robots; a Nav2 credential.
- **Senior tiers:** portfolio + system-design interview (design an autonomy stack) + live planner/costmap debugging.

## 12. Adjacent & Related Niches
Pairs closely with **A1 perception**, **A2 state estimation/SLAM**, and **A4 control/MPC** (which tracks its trajectories); feeds the **A3 sibling TAMP & decision architectures**, **A6 learned planning**, and **A7 VLN / navigation foundation models**. Signature platform tracks: **C3 AMR/AGV**, **C2 mobile manipulator**, **C4 quadruped**, **C6 drone**, and **C5 humanoid** (loco-manipulation). (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A3 (verified per-niche this pass). §7 stamped mid-2026 — re-research before publish.*
