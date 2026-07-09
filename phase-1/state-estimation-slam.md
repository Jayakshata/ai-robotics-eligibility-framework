# Per-Niche Profile — State Estimation, SLAM & Mapping

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; SLAM/estimation-specific and trending-research signals are research-backed (`phase-1/.research/state-estimation-slam.*`). `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** State Estimation, SLAM & Mapping · **Axis A cluster:** A2 (State Estimation & Spatial AI) · **Type:** `[F]` (neural/implicit mapping — NeRF/3DGS — sub-area `[S][★]`)
**Related capabilities:** A1 perception / 3D vision · A1 multimodal sensor fusion · A3 navigation · A8 simulation · A10 calibration/middleware · **Platforms (C):** C3 AMR/AGV · C6 aerial/drone · C4 quadruped · C7 underwater · C5 humanoid · **Verticals (B):** B10 autonomous vehicles · B11 aerial/UAS · B2 logistics · B14 inspection · B12 space

---

## 1. Definition & Scope
Answering a robot's two most basic spatial questions — **"where am I?"** and **"what does the world around me look like?"** — by fusing noisy, asynchronous sensor streams into a consistent estimate of the robot's state and a map of its environment. It is the spatial substrate under all mobile autonomy: nothing navigates, inspects, returns home, or closes a loop without it. **In scope:** recursive state estimation (Kalman / EKF / UKF, error-state, particle filters), factor-graph smoothing, localization against a prior map, SLAM (visual, LiDAR, visual-inertial, multi-sensor), map representations (metric / occupancy / TSDF, topological, semantic), and neural / implicit mapping (NeRF / 3DGS). **Out of scope (adjacent):** the raw perception front-end — detection / segmentation (A1); path & motion planning that *consumes* the pose+map (A3); low-level control (A4).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior SLAM / State-Estimation Engineer | Implements and tunes estimation/SLAM pipelines under supervision; runs rosbag replays; calibrates and time-syncs sensors; integrates open-source SLAM libraries on real hardware. |
| **L2** | SLAM / Localization Engineer | Owns a localization or SLAM subsystem end-to-end (sensors→front-end→back-end→map); diagnoses drift, scale and degeneracy; ships a mapping/localization stack to a real deployment. |
| **L3** | Senior State-Estimation / SLAM Engineer | Designs the estimation architecture; makes filter-vs-smoother and classical-vs-learned tradeoffs; owns sensor-suite selection; sets accuracy/robustness benchmarks; mentors. |
| **L4/L5** | Staff / Principal Spatial-AI Research Engineer | Sets the spatial-AI research agenda; advances SLAM/estimation SOTA (GFM-SLAM, neural mapping, certifiable/continuous-time estimation); publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **SLAM-specific adjustment `✓`:** this is the most "EE-flavored" robotics niche — **EE/ECE is the strongest single fit** (estimation theory, Kalman filtering, sensor fusion, signals/DSP, sensor electronics are EE-core); **Aerospace / Aeronautical Engineering rises to Tier 1** (GNC, inertial navigation and state estimation are aero staples — MIT 16.485 and Stanford AA 273 both live in *Aero/Astro*); **Applied Mathematics rises** (optimization on manifolds, numerical linear algebra, estimation theory are the spine of factor-graph SLAM); and — uniquely to A2 — **Geomatics / Geodesy / Photogrammetry / Surveying** is a legitimate feeder (bundle adjustment and multi-view geometry *originate* in photogrammetry; Bonn's program is literally "Photogrammetry & Robotics"). **Mechanical Engineering / Mechatronics drop** relative to their manipulation/locomotion value — they still qualify (motion models, platform integration) but are **not differentiating** here (a direct contrast with Manipulation, where ME rose to Tier 1).

**Highly-valued undergraduate programs `✓`** — Michigan Robotics BSE (ROB 501 Math for Robotics → ROB 530 accessible to seniors), CMU BS Robotics, MIT (6-4 + AeroAstro **16.485**), UPenn (GRASP; ESE spine), ETH/TUM (EE/CS foundation). The niche is taught mostly at MS/PhD level, so undergrad strength comes from the **estimation/vision spine** plus a **self-driving or drone capstone**.

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI, EE, **Aerospace**, or **Applied Math** with an estimation / SLAM / perception focus.

**Highly-valued postgraduate programs — ranked by SLAM/estimation strength `✓`** *(this niche is unusually course-legible: several flagships run a dedicated estimation/SLAM course, not just a mention inside intro-robotics)*
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **Michigan · CMU (RI) · MIT (AeroAstro) · Stanford** | Michigan **ROB 530 / NA 568 / EECS 568 "Mobile Robotics"** (Ghaffari — the reference course; public GitHub+YouTube) + **ROB 501** Math · CMU **16-833 "Robot Localization & Mapping"** (Kaess, author of iSAM/GTSAM) · MIT **16.485 VNAV** (Carlone/SPARK — manifold optimization SO(3)/SE(3), VIO, place recognition; on OCW) · Stanford **AA 273 State Estimation & Filtering** + **CS231A** + AA 274A |
| Strong | **ETH · TUM · UPenn (GRASP) · HKUST** | ETH **151-0854 Autonomous Mobile Robots** (Siegwart/Chli) + **151-0632 Vision Algorithms for Mobile Robotics** (Scaramuzza — VO/VIO/event-camera gold standard) · TUM **IN2228 Multiple View Geometry** (Cremers) + Vision-Based Navigation (DSO/LSD-SLAM lineage) · Penn **ESE 650 Learning in Robotics** (EKF/UKF/PF, VIO, SLAM) · HKUST **ELEC 5660** (Shaojie Shen — author of VINS-Mono/Fusion) |
| Present (research-lineage / open) | **Bonn · Georgia Tech · Imperial · Oxford** | Bonn **Stachniss "Mobile Sensing & Robotics 1/2" + SLAM** (Photogrammetry & Robotics Lab — the de-facto free global reference) · GT **Dellaert / GTSAM** ("Factor Graphs for Robot Perception") · Imperial **Davison** (Dyson Robotics Lab; MonoSLAM→Spatial AI) · Oxford **ORI** (Newman/Fallon) |

*(Oxford ORI is SLAM-by-research, not a named taught module; Bonn's course is free/open, not a degree pathway.)*

**Highly-valued certifications `✓`** — Coursera **"State Estimation & Localization for Self-Driving Cars"** (U. Toronto — the single most on-target MOOC: least-squares, error-state EKF, GPS/IMU models, LiDAR ICP/scan-matching, sensor fusion in CARLA) · Coursera **"Robotics: Estimation & Learning"** (UPenn/Dan Lee — Kalman, occupancy-grid mapping, particle-filter localization) · **Udacity Sensor Fusion Engineer** + **Self-Driving Car Engineer** Nanodegrees (EKF/UKF, LiDAR/radar/camera) · ETH/UZH **"Vision Algorithms for Mobile Robotics"** (Scaramuzza — public slides/exercises/exams) · **Cyrill Stachniss SLAM lectures** (Bonn — free reference curriculum, no cert) · **NVIDIA Isaac ROS Visual SLAM (cuVSLAM)** + DLI Isaac path (the applied/industrial deployment signal). *(Northwestern **Modern Robotics** is **weak** for this niche — kinematics/control-centric, no SLAM; a useful backbone, not niche evidence.)*

**Experience & portfolio** — L1: internship/academic; a working VIO or LiDAR-SLAM demo on a public dataset (KITTI / EuRoC / TUM-VI) with an ATE number. L2: 2–4 yr; a deployed localization/mapping stack with drift/ATE numbers, real sensor calibration + a multi-sensor fusion project. L3: 5–8 yr; ≥1 real SLAM/localization deployment led (AV / drone / AMR / legged), sensor-suite ownership. L4/L5: 8+ yr and/or first-author papers (RSS / CVPR / ICRA / IROS / RA-L / T-RO).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **C++** (real-time, **Eigen**) and **Python**
- **Probability & Bayesian estimation**; **Kalman / EKF / UKF**, **error-state EKF**, particle filters
- **Nonlinear least squares & factor-graph optimization** (Gauss-Newton / Levenberg-Marquardt; Ceres / g2o / GTSAM)
- **Lie groups / optimization on manifolds** (SO(3)/SE(3), quaternions; Sophus)
- **Multi-view geometry**: epipolar geometry, essential/fundamental matrix, triangulation, PnP, **bundle adjustment**
- **Visual & visual-inertial odometry (VIO)**; **IMU pre-integration**
- **LiDAR odometry & registration** (ICP, NDT, scan matching, LiDAR-inertial)
- **Sensor calibration** (camera intrinsics/extrinsics, camera–IMU, LiDAR–camera) and **time synchronization**
- **Map representations** (occupancy grid, TSDF, point cloud, pose graph) and **loop closure / place recognition** (DBoW, learned descriptors)
- **ROS 2** integration, rosbag/tf debugging, real-sensor bring-up

**Preferred / differentiating**
- **Learned / deep VO/SLAM** (SuperPoint/SuperGlue/**LightGlue**, **DROID-SLAM**, **DPVO/DPV-SLAM**)
- **Neural implicit & Gaussian-splatting mapping** (NICE-SLAM, **SplaTAM**, **MonoGS**, Photo-SLAM)
- **Geometric foundation models for SLAM** (DUSt3R/**MASt3R**, **VGGT**, **MASt3R-SLAM**)
- **Semantic / open-vocabulary mapping & 3D scene graphs** (Kimera, **Hydra**, ConceptGraphs)
- **Legged / humanoid proprioceptive estimation** (contact-aided **Invariant EKF**)
- **Multi-robot / collaborative SLAM**; lifelong mapping; **event-camera VO**; **continuous-time** estimation
- **GPU/edge deployment** (CUDA, TensorRT, Isaac ROS cuVSLAM, Jetson Orin)
- Publications at **RSS / CVPR / ICRA / IROS / RA-L / T-RO**; real-world deployment experience

**Tools & tech stack** — *Languages:* C++ (Eigen), Python · *Estimation/optimization:* **GTSAM / iSAM2**, **Ceres Solver**, g2o, Sophus, robot_localization · *SLAM systems:* **ORB-SLAM3**, **VINS-Fusion**, **OpenVINS**, **FAST-LIO2**, **KISS-ICP**, RTAB-Map, Cartographer, DROID-SLAM · *Neural mapping:* nerfstudio, SplaTAM, MonoGS · *GFM:* DUSt3R/MASt3R, VGGT · *Middleware/deploy:* ROS 2, **PCL**, **Open3D**, OpenCV, NVIDIA **Isaac ROS (cuVSLAM)**, TensorRT · *Sensors:* RealSense, Ouster/Velodyne/Livox LiDAR, VectorNav/Xsens IMU, u-blox GNSS/RTK, event cameras.

**Bar by tier** — L1: solid on the required list on public datasets · L2: ships a real localization/SLAM subsystem, fluent front-end→back-end · L3: architects estimation systems, deep in ≥1 differentiating area, owns the sensor suite · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Estimation/SLAM slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** linear algebra & **numerical linear algebra** — sparse least squares, Cholesky/QR *(ROB 530, 16-833)* · probability & **Bayesian estimation** *(AA 273, ESE 650)* · calculus / Taylor linearization + **optimization** — nonlinear least squares, Gauss-Newton/LM, convex *(16-833, IN2228)* · **Lie groups & optimization on manifolds** — SO(3)/SE(3), quaternions *(16.485, ROB 530)* · C++ & Python for real-time systems *(ELEC 5660, ROB 530)*.
- **Core robotics:** rigid-body kinematics, 3D transforms, coordinate frames *(ETH AMR, MIT VNAV)* · sensors & sensor models — **IMU, LiDAR, cameras (calibration), GNSS, wheel odometry** *(ROB 530, UofT SDC C2)* · signals & systems / DSP; feedback-control basics · **ROS 2** integration & middleware *(Isaac ROS, The Construct)*.
- **Niche-specific (the core):** **recursive filtering** — Kalman, EKF, UKF, error-state EKF, particle filters *(AA 273, UofT C2, ESE 650)* · **probabilistic robotics** (Thrun/Burgard/Fox) — Bayes filter, **occupancy-grid mapping**, Monte-Carlo localization *(ETH AMR, Bonn MSR)* · **factor-graph / smoothing SLAM** — pose-graph optimization, **bundle adjustment**, iSAM/GTSAM, MAP inference *(16-833, Bonn MSR2, GT/Dellaert)* · **multi-view geometry** — epipolar, essential/fundamental, triangulation, PnP *(IN2228, CS231A)* · **visual & visual-inertial odometry**, IMU pre-integration *(Scaramuzza VAMR, 16.485, ELEC 5660)* · **LiDAR odometry & registration** — ICP, NDT, LiDAR-inertial *(UofT C2, ROB 530)* · **loop closure & place recognition** — bag-of-words (DBoW), descriptors *(16.485)* · **map representations** — metric (point cloud/TSDF/occupancy), topological, **semantic** *(ETH AMR, Bonn)* · **data association & robust estimation** — RANSAC, robust kernels/M-estimators, switchable constraints *(16-833)*.
- **Frontier / advanced:** learned features & **deep VO/SLAM** — SuperPoint/LightGlue, DROID-SLAM, DPVO · **neural implicit mapping** — iMAP, NICE-SLAM, Co-SLAM · **3D Gaussian-Splatting SLAM** — MonoGS, SplaTAM, Photo-SLAM · **3D foundation models for SLAM** — DUSt3R/MASt3R, MASt3R-SLAM, VGGT · **semantic / object-level "Spatial AI"** — Kimera, SLAM++, 3D scene graphs (Hydra) · **multi-robot/collaborative SLAM, lifelong mapping, event-camera VO** *(Scaramuzza/RPG)*.

## 6. Training Programme Design & Duration `✓`
SLAM/state-estimation-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), with phase 4 + capstone tuned to estimation & SLAM.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths (linear algebra, probability, optimization), Python/C++, classical ML | 2.0 mo | 6 mo | 300 | Estimation-maths & coding fluency |
| 2. Core robotics | 3D transforms, sensors & models, calibration, **ROS 2**, feedback control | 2.0 mo | 6–7 mo | 320 | Command sensors + robot in sim + real |
| 3. AI/ML depth | Deep learning, **computer vision / multi-view geometry**, RL/imitation basics | 2.0 mo | 6 mo | 300 | 3D-vision + learning foundations |
| 4. **SLAM & estimation specialization** | Filtering (EKF/UKF/error-state), factor-graph SLAM, VIO/LIO, loop closure, neural/3DGS mapping, GFM-SLAM | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Full multi-sensor SLAM/localization stack on a real robot + drift/ATE eval + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior SLAM / state-estimation engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** SLAM's "SAM2/DINO moment" is here: the front-end is being replaced by geometric foundation models, maps are becoming 3D-Gaussian, and the back-end stays factor-graph. `🆕` = 2026 release.

- **Geometric foundation models → feed-forward dense SLAM (the dominant shift):** **DUSt3R / MASt3R** (image pair → dense pointmap + poses, no calibration — the founding GFMs everything builds on) · **VGGT** (CVPR 2025 **Best Paper**; one transformer predicting cameras + 3D structure jointly — the backbone most 2025–26 systems adopt; 🆕 **VGGT-Omega** was a CVPR 2026 Best-Paper finalist) · **MASt3R-SLAM** (CVPR 2025; real-time ~15 FPS monocular dense SLAM on in-the-wild video, no parametric camera model) · **SLAM3R** (CVPR 2025 Highlight) · 🆕 **VGGT-SLAM / 2.0** (chains VGGT submaps via **SL(4) 15-DoF projective factor-graph** in GTSAM; v2.0 real-time onboard Jetson Thor; NeurIPS 2026) · **MASt3R-Fusion** (tightly fuses the GFM with IMU + GNSS) · 🆕 **FoundationSLAM** (AAAI 2026) · **ViPE** (NVIDIA video-pose data engine for spatial AI).
- **3D Gaussian-Splatting SLAM (photorealistic dense mapping):** 3DGS displaced NeRF as the map representation — real-time, differentiable, editable. **SplaTAM · MonoGS · Photo-SLAM** (CVPR 2024 foundations) · **LoopSplat** (loop closure by registering Gaussian submaps) · **Hi-SLAM2** (T-RO 2025) · **Splat-LOAM** (ICCV 2025; Gaussian LiDAR odometry) · 🆕 **4DTAM / D²GSLAM** (dynamic / 4D scenes) · **SemGauss-SLAM / OpenGS-SLAM / Hier-SLAM++** (semantic/open-set) · 🆕 **Spectral GS-SLAM** (observability-aware, degeneracy-robust); a dedicated **3DGS-SLAM survey** appeared 🆕 in 2026.
- **Learning-based VO/SLAM backbones (efficient, deployable):** **DROID-SLAM** (still the reference differentiable dense-BA baseline everyone beats) · **DPVO / DPV-SLAM** (sparse-patch VO, ~DROID accuracy at 3× speed and 1/3 VRAM — the practical deep-VO of choice) · **DINO-VO** (2025; feature-based VO on DINOv2 foundation features) · **DEVO** (DPVO adapted to event cameras).
- **LiDAR & multi-sensor state estimation:** FAST-LIO-lineage tight coupling remains production standard; frontier = continuous-time + degeneracy-robustness. **FAST-LIO2 · KISS-ICP** (baselines) · **Traj-LIO / CTE-MLO** (resilient multi-LiDAR/multi-IMU via sparse-Gaussian-process continuous-time; CTE-MLO T-FR 2025) · **GLO** (low-drift LiDAR-only) · **LVI-GS / SR-LIVO / LVIO-Fusion** (tightly-coupled LiDAR-visual-inertial, degeneracy-aware).
- **Factor graphs & classical estimation (still the optimization back-end):** **GTSAM / iSAM2** (incremental Bayes-tree smoothing at 100+ Hz — the substrate under most systems above) · 🆕 **Manifold / Lie Kalman-Filter hierarchy** (new GTSAM formalization, applied to legged estimation) · 🆕 GP motion-prior continuous-time factors & **chordal-sparsity globally-optimal / certifiable** estimation.
- **Legged / humanoid proprioceptive estimation:** contact-aided **Invariant EKF (Hartley et al.)** is the standard; 2025–26 trend = learned/iterated variants — 🆕 **CoCo-InEKF** (learned contact covariances), **Iterated InEKF**, **OCELOT**, **InEKFormer**, proprioceptive invariant estimation for humanoids on non-inertial ground.
- **Semantic / open-vocabulary / topological mapping:** "open-world" scene graphs replace fixed-class maps. **Hydra** (RSS 2022) + **ConceptGraphs** (ICRA 2024) — real-time 3D scene-graph foundations · **DualMap / OpenIN / KM-ViPE** (2025 online open-vocabulary SLAM for language navigation) · 🆕 **INHerit-SG / FOUND-IT / Affordance-RAG** (foundation-model-first, task-driven hierarchical scene graphs with retrieval).
- **Place recognition / loop closure (foundation-feature era):** **AnyLoc · SALAD · MegaLoc · SuperPlace** (DINOv2 global descriptors — near-universal VPR); 🆕 AnyLoc now plugged into **DPV-SLAM** loop closure.
- **Datasets & benchmarks (newest):** 🆕 **GrandTour** (ETH legged in-the-wild — synced multi-LiDAR/multi-camera/IMU + full proprioception) · **TAIL/TAIL-Plus** (deformable granular-terrain legged SLAM) · **FusionPortableV2** (cross-platform) · **4Seasons** (long-term seasonal AV localization) · 🆕 **SMAPPER** platform + "Sensor Configuration Matters" quadruped eval.

*Net trend: SLAM is being rebuilt on geometric foundation models (DUSt3R→VGGT) with 3D-Gaussian maps and factor-graph back-ends, converging with VLM-driven open-vocabulary scene graphs toward real-time, calibration-free, semantically-grounded spatial AI. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | **EKF/UKF for 2D robot localization** (dead-reckoning + landmark updates) | Recursive Bayesian estimation; filter converges and tracks ground truth |
| Foundational | **ICP / scan-matching + occupancy-grid mapping** from a 2D LiDAR bag | Registration + probabilistic mapping; consistent map, bounded drift |
| Applied | **Feature-based visual odometry on KITTI** (ORB features → PnP → local BA) | Multi-view-geometry pipeline; ATE within tolerance vs. ground truth |
| Applied | **Visual-inertial odometry on EuRoC** (run/tune **VINS-Fusion** or **OpenVINS**; IMU pre-integration) | Tight VIO; low drift and correct metric scale over the full trajectory |
| Applied | **LiDAR-inertial SLAM** on a robot / **Newer College** (deploy **FAST-LIO2** + loop closure) | Real LiDAR SLAM; globally consistent map, closed loops |
| Advanced | **Factor-graph pose-graph SLAM from scratch in GTSAM** (front-end + loop closures → iSAM2) | Smoothing back-end; matches library ATE, incremental real-time inference |
| Advanced | **Neural / 3DGS mapping** (train **SplaTAM / MonoGS** on RGB-D, or **NICE-SLAM**) | Dense differentiable mapping; photorealistic map + tracked trajectory |
| Advanced | **Multi-sensor fusion stack** (camera + LiDAR + IMU + GNSS with degeneracy handling) | Robust real-world estimation; survives sensor dropout / degenerate motion |
| Capstone | **Full SLAM/localization stack** on a real robot (AMR/drone) or **CARLA** AV — a **GFM front-end (MASt3R-SLAM / VGGT)** or classical VIO+LIO, evaluated with ATE/RPE | End-to-end spatial-AI system; deployed, benchmarked, drift-quantified |

## 9. Required Lab Setup / Hardware / Resources
- **Mobile platforms:** TurtleBot 4 · Clearpath **Husky / Jackal** · a quadruped (**Unitree Go2 / B2**) · a drone (**PX4 / Holybro** dev kit) · a scale AV (**F1TENTH**).
- **Sensors:** Intel **RealSense D435i/D455** (RGB-D+IMU) · **Stereolabs ZED** stereo · LiDAR — **Ouster OS1**, Velodyne, **Livox Avia / Mid-360** · IMU — **VectorNav VN-100**, Xsens, Bosch BMI · **GNSS/RTK** (u-blox ZED-F9P) · **event cameras** (Prophesee, iniVation DAVIS346) · wheel encoders.
- **Compute:** RTX 4090 / A6000 workstation for neural-mapping & GFM training/inference; **NVIDIA Jetson Orin / Thor** for on-robot deployment; A100/H100 for large-scale training.
- **Software / libraries:** ROS 2 · **GTSAM** · **Ceres Solver** · g2o · Sophus · **PCL** · **Open3D** · OpenCV · Eigen · nerfstudio · NVIDIA **Isaac ROS (cuVSLAM)** · SLAM systems (ORB-SLAM3, VINS-Fusion, OpenVINS, FAST-LIO2, KISS-ICP, RTAB-Map, Cartographer, DROID-SLAM).
- **Simulators:** **CARLA** (AV) · Isaac Sim · Gazebo · Flightmare / AirSim (drone).
- **Datasets & benchmarks:** **KITTI / KITTI-360** · **EuRoC MAV** · **TUM RGB-D / TUM-VI** · **nuScenes** · **Newer College** · Oxford RobotCar / **4Seasons** · **Hilti SLAM Challenge** · M2DGR · ICL-NUIM · GrandTour (legged). Metric tooling: ATE/RPE via **evo**.

## 10. Partnerships & Ecosystem
- **Hardware / sensor vendors:** Ouster · Velodyne · **Livox** · Intel RealSense · Stereolabs (ZED) · VectorNav · Xsens · Prophesee / iniVation (event) · u-blox (GNSS/RTK).
- **Sim / compute:** NVIDIA (**Isaac ROS cuVSLAM**, DLI, Inception) · CARLA (open AV sim) · Open Robotics (ROS 2 / Nav2).
- **Academic labs (SLAM powerhouses):** Michigan (**Ghaffari / CURLY**; Grizzle) · CMU (**Kaess**) · MIT **SPARK (Carlone)** · Stanford · **ETH ASL (Siegwart)** + **UZH RPG (Scaramuzza)** · TUM (Cremers) · **Bonn (Stachniss)** · GT (**Dellaert / GTSAM**) · **Imperial Dyson Robotics (Davison)** · HKUST (Shen) · Oxford ORI.
- **Open-source communities:** GTSAM · Ceres · **OpenVINS** · ORB-SLAM · **FAST-LIO** · KISS-ICP · nerfstudio · Awesome-3DGS-SLAM / awesome-dust3r.
- **Industry programs:** NVIDIA Inception · AV players (Waymo, Zoox, Nuro) · drone autonomy (**Skydio**) · spatial-mapping (**NavVis**, Leica / Hexagon) · legged inspection (Boston Dynamics, **ANYbotics**).
- **Standards (applied):** ISO 26262 / **ISO 21448 (SOTIF)** for AV localization · FAA Part 107 / BVLOS for drone navigation · GNSS integrity concepts (RAIM) for safety-of-life positioning.

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (filtering, factor graphs, multi-view geometry, map representations).
- **Project rubrics** with objective metrics: **Absolute Trajectory Error (ATE)** and **Relative Pose Error (RPE)** vs. ground truth, map accuracy/consistency, loop-closure recall, real-time factor (Hz), drift over distance, and robustness to sensor dropout / degenerate motion.
- **Standardized benchmarks** as portable evidence: **KITTI odometry** leaderboard, **EuRoC**, **TUM-VI**, **nuScenes**, **Hilti SLAM Challenge**, Newer College — reported with **evo**.
- **Recognized certifications as evidence:** U. Toronto State Estimation & Localization; Scaramuzza VAMR completion; a ROS 2 credential; NVIDIA Isaac ROS.
- **Senior tiers:** portfolio + system-design interview (sensor-suite & filter-vs-smoother selection, degeneracy handling) + live pipeline debugging (drift/scale diagnosis on a rosbag).

## 12. Adjacent & Related Niches
Feeds the **C3 AMR · C6 aerial/drone · C4 quadruped · C7 underwater** platform tracks and the **B10 autonomous-vehicles · B11 aerial/UAS · B14 inspection · B12 space** verticals; pairs closely with **A1 perception / 3D vision & multimodal sensor fusion**, **A3 navigation** (which consumes the pose+map), and **A8 simulation** (datasets/eval). Neural/implicit mapping bridges into **A1 3D scene understanding** and **A7 world models**. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Niche research: `phase-1/.research/state-estimation-slam.{creds,trending}.md`. Taxonomy: `master-niche-taxonomy.md` cluster A2 (`✓`). §7 stamped mid-2026 — re-research before publish.*
