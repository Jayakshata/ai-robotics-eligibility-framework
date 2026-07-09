# Research — Credentials & Subjects: State Estimation, SLAM & Mapping

> Niche-specific supplement to `phase-1/_grounding-reference.md` (Axis A cluster **A2**). Scope: state estimation (EKF/UKF/factor graphs), localization, SLAM (visual/LiDAR/multi-sensor), metric/semantic/topological mapping, neural/implicit mapping (NeRF/3DGS). Does **not** re-derive the shared valued-degree tiers, canonical subjects, or duration model. Sources favor 2024–2026 + stable syllabi; URLs inline. `✓` grounded.

---

## 1. Strongest University Programs (named courses that make them strong for THIS niche)

This niche is unusually **course-legible**: several flagship schools run a *dedicated* state-estimation/SLAM course, not just a mention inside intro-robotics. Ranked by niche strength:

**World-leading (dedicated SLAM/estimation course + lab lineage)**
- **University of Michigan — ROB 530 / NA 568 / EECS 568 "Mobile Robotics: Methods and Algorithms"** (Maani Ghaffari). The reference course: Bayesian filtering, motion/sensor models, mapping & localization, SLAM; fully public (GitHub + YouTube). Paired with **ROB 501 "Mathematics for Robotics"** (Grizzle) for estimation foundations. `✓` [[bulletin](https://bulletin.engin.umich.edu/courses/robotics-courses/)] [[repo](https://github.com/UMich-CURLY-teaching/UMich-ROB-530-public)]
- **CMU (Robotics Institute) — 16-833 "Robot Localization and Mapping"** (Michael Kaess, author of iSAM/GTSAM). Dedicated SLAM course: filtering, pose-graph/factor-graph optimization, bundle adjustment, real-time inference. `✓` [[course](https://www.cs.cmu.edu/~kaess/teaching/16833/)]
- **MIT (AeroAstro) — 16.485 "Visual Navigation for Autonomous Vehicles (VNAV)"** (Luca Carlone / SPARK Lab). Optimization on manifolds (SO(3)/SE(3)), 2-/multi-view geometry, visual & visual-inertial odometry, place recognition, SLAM; open-sourced on OCW with drone/racecar labs. `✓` [[OCW](https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/)] [[paper](https://arxiv.org/abs/2206.00777)]
- **Stanford — AA 273 "State Estimation and Filtering for Robotic Perception"** (Bayes/Kalman/EKF/UKF/particle filters, SLAM applications) + **CS231A "Computer Vision, From 3D Reconstruction to Recognition"** + **AA 274A "Principles of Robot Autonomy."** `✓` [[AA273](https://online.stanford.edu/courses/aa273-state-estimation-and-filtering-robotic-perception)]

**Strong**
- **ETH Zürich — 151-0854 "Autonomous Mobile Robots"** (Siegwart/Chli; localization, mapping, probabilistic navigation) **+ 151-0632 "Vision Algorithms for Mobile Robotics"** (Davide Scaramuzza, UZH-cross-listed; VO, VIO, place recognition, event cameras). Two complementary niche courses. `✓` [[AMR](https://asl.ethz.ch/education/lectures/autonomous_mobile_robots.html)] [[VAMR](https://rpg.ifi.uzh.ch/teaching.html)]
- **TU München — IN2228 "Computer Vision II: Multiple View Geometry"** (Daniel Cremers) + practical **"Vision-Based Navigation"** (Cremers/Leutenegger lineage; DSO/LSD-SLAM). `✓` [[MVG](https://cvg.cit.tum.de/teaching/ss2025/mvg)]
- **UPenn (GRASP) — ESE 650 "Learning in Robotics"** (Daniilidis/Chaudhari): EKF/UKF/particle filters, visual-inertial odometry, SLAM. `✓` [[ESE650](https://pratikac.github.io/pub/23_ese650.pdf)]
- **HKUST — ELEC 5660 "Introduction to Aerial Robotics"** (Shaojie Shen, author of VINS-Mono/Fusion): sensor fusion, vision-based state estimation, EKF quadrotor localization, VIO. `✓` [[course](https://researchportal.hkust.edu.hk/en/courses/2022-23-spring-elec5660-introduction-to-aerial-robotics-2/)]

**Notable / research-lineage**
- **University of Bonn — Stachniss "Mobile Sensing and Robotics 1/2" + SLAM course** (Photogrammetry & Robotics Lab): graph-based SLAM, pose graphs, bundle adjustment, robust least squares — the de-facto free global reference. `✓` [[teaching](http://www.ipb.uni-bonn.de/teaching/)] [[MSR2](https://www.ipb.uni-bonn.de/msr2-2021/index.html)]
- **Georgia Tech — Frank Dellaert** (factor graphs / GTSAM; "Factor Graphs for Robot Perception"). `✓` [[GTSAM](https://gtsam.org/)]
- **Imperial College — Andrew Davison** (Dyson Robotics Lab; MonoSLAM→Spatial AI) "Robotics" course w/ dedicated SLAM lecture; research-heavy. `✓` [[course](https://www.doc.ic.ac.uk/~ajd/Robotics/)]
- **Oxford (ORI — Newman/Fallon):** research-only; estimation/inference via the ORI, not a named taught SLAM module.

**Undergraduate note:** the niche is taught mostly at MS/PhD level. At undergrad, strength comes from the *estimation/vision spine* — Michigan Robotics BSE (ROB 501/530 accessible to seniors), CMU BS Robotics, MIT (6-4 + 16.485), UPenn (GRASP), ETH/TUM — plus a self-driving/drone capstone.

---

## 2. Most-valued Certifications & MOOCs (niche-specific)

- **Coursera — "State Estimation and Localization for Self-Driving Cars"** (U. Toronto; Course 2 of the Self-Driving Cars Specialization). The single most on-target MOOC: least squares, error-state EKF, GPS/IMU models, LiDAR ICP/scan-matching, sensor fusion, CARLA. `✓` [[link](https://www.coursera.org/learn/state-estimation-localization-self-driving-cars)]
- **Coursera — "Robotics: Estimation and Learning"** (UPenn; Dan Lee, Robotics Specialization): Kalman filtering, occupancy-grid mapping, particle-filter localization. `✓` [[repo](https://github.com/pgeedh/RoboticsSpecialization-UPenn-Estimation-and-Learning)]
- **Udacity — Sensor Fusion Engineer Nanodegree** (LiDAR/radar/camera, EKF & UKF; Mercedes-Benz) and **Self-Driving Car Engineer ND** (localization: Kalman/particle filters, scan matching). `✓` [[nd313](https://www.udacity.com/course/sensor-fusion-engineer-nanodegree--nd313)]
- **ETH/UZH "Vision Algorithms for Mobile Robotics"** (Scaramuzza) — public slides/exercises/exams; the VO/VIO gold standard. `✓` [[link](https://rpg.ifi.uzh.ch/teaching.html)]
- **Cyrill Stachniss SLAM lectures** (Bonn, free YouTube + "Online Training – Mobile Robotics") — no certificate, but the reference open curriculum. `✓` [[link](https://www.ipb.uni-bonn.de/online-training-robotics/index.html)]
- **NVIDIA Isaac ROS Visual SLAM (cuVSLAM)** + DLI Isaac path — the applied/industrial deployment signal (GPU VSLAM, ROS 2). `✓` [[docs](https://nvidia-isaac-ros.github.io/repositories_and_packages/isaac_ros_visual_slam/index.html)]

*Weak for this niche:* Northwestern **Modern Robotics** (kinematics/control-centric — no SLAM) and generic cloud-ML certs; useful backbone, not niche evidence.

---

## 3. Explicit Subject List (grounded in syllabi; representative courses annotated)

**Foundational maths & CS**
- Linear algebra & **numerical linear algebra** — sparse least squares, Cholesky/QR *(ROB 530, 16-833)*
- Probability & **Bayesian estimation** *(AA 273, ESE 650)*
- Multivariable calculus / Taylor linearization; **optimization** — nonlinear least squares, Gauss-Newton/Levenberg-Marquardt, convex *(16-833, IN2228)*
- **Lie groups & optimization on manifolds** — SO(3)/SE(3), quaternions *(16.485, ROB 530)*
- **C++ & Python** for real-time systems *(ELEC5660, ROB 530)*

**Core robotics**
- Rigid-body kinematics, 3D transforms, coordinate frames *(AMR, VNAV)*
- Sensors & sensor models — **IMU, LiDAR, cameras (calibration), GNSS, wheel odometry** *(ROB 530, UofT C2)*
- Signals & systems / DSP; feedback-control basics
- **ROS 2** integration & robot middleware *(Isaac ROS, The Construct)*

**Niche-specific (the core)**
- **Recursive filtering** — Kalman, EKF, UKF, **error-state EKF**, particle filters *(AA 273, UofT C2, ESE 650)*
- **Probabilistic robotics** (Thrun/Burgard/Fox) — Bayes filter, **occupancy-grid mapping**, Monte-Carlo localization *(AMR, Bonn MSR)*
- **Factor-graph / smoothing SLAM** — pose-graph optimization, **bundle adjustment**, iSAM/GTSAM, MAP inference *(16-833, Bonn MSR2, GT/Dellaert)*
- **Multi-view geometry** — epipolar geometry, essential/fundamental matrix, triangulation, PnP *(IN2228, CS231A)*
- **Visual & visual-inertial odometry (VIO)**; IMU pre-integration *(VAMR, 16.485, ELEC5660)*
- **LiDAR odometry & registration** — ICP, NDT, scan matching, LiDAR-inertial (LIO) *(UofT C2, ROB 530)*
- **Loop closure & place recognition** — bag-of-words (DBoW), descriptors *(16.485)*
- **Map representations** — metric (point cloud/TSDF/occupancy), topological, **semantic** *(AMR, Bonn)*
- **Data association & robust estimation** — RANSAC, robust kernels/M-estimators, switchable constraints *(16-833)*

**Frontier / advanced**
- **Learned features & deep VO/SLAM** — SuperPoint/SuperGlue/LightGlue, **DROID-SLAM**, DPVO
- **Neural implicit mapping** — iMAP, **NICE-SLAM**, Co-SLAM, NeRF-SLAM
- **3D Gaussian-Splatting SLAM** — MonoGS, SplaTAM, Photo-SLAM *(survey: "How NeRFs & 3DGS are Reshaping SLAM," 2024)* [[survey](https://arxiv.org/html/2402.13255v1)]
- **3D foundation models for SLAM** — DUSt3R/MASt3R, **MASt3R-SLAM**, VGGT
- **Semantic / object-level "Spatial AI"** — Kimera, SLAM++, 3D scene graphs (Hydra)
- **Multi-robot/collaborative SLAM, lifelong mapping, event-camera VO** *(Scaramuzza/RPG)*

---

## 4. Niche-specific Eligibility Adjustment (vs. the general set)

**Rises in value**
- **EE/ECE → strongest single fit.** This is the most "EE-flavored" robotics niche: estimation theory, Kalman filtering, sensor fusion, signals/DSP and sensor electronics are EE-core. `✓`
- **Aerospace / Aeronautical Engineering → rises to Tier 1 (niche-unique).** Guidance-Navigation-Control (GNC), inertial navigation and state estimation are aero staples — MIT 16.485 and Stanford AA 273 both live in **Aero/Astro** departments. `✓`
- **Applied Mathematics → rises** — optimization on manifolds, numerical linear algebra, estimation theory are the mathematical spine of factor-graph SLAM. `✓`
- **Geomatics / Geodesy / Photogrammetry / Surveying & Remote Sensing → a legitimate feeder here only.** Bundle adjustment and multi-view geometry originate in photogrammetry (Duane Brown, 1950s); Bonn's program is literally "Photogrammetry & Robotics." Irrelevant to most other A-clusters but valued here. `✓` [[origins](https://grokipedia.com/page/Bundle_adjustment)]
- **Physics → rises modestly** (sensor modeling, estimation, optics for cameras/LiDAR).

**Falls / less central**
- **Mechanical Engineering & Mechatronics → drop** relative to their manipulation/locomotion value: rigid-body dynamics, actuation and contact mechanics are peripheral to SLAM. They still qualify (motion models, platform integration) but are **not differentiating** here — a direct contrast with Manipulation, where ME *rose* to Tier 1.

**Net rule:** for A2, weight a transcript toward **estimation/probability, optimization, linear algebra, computer-vision/multi-view geometry, and a sensor-fusion or SLAM project** — and treat EE/ECE, Aerospace(GNC), Applied Math and (uniquely) Geomatics as first-class feeders alongside CS/Robotics.

---
*Sources: program/course pages (Michigan, CMU, MIT OCW, Stanford, ETH/UZH, TUM, UPenn, HKUST, Bonn, GT/GTSAM, Imperial) linked inline; Coursera (Toronto, Penn), Udacity nd313, NVIDIA Isaac ROS docs; NeRF/3DGS-SLAM survey (arXiv 2402.13255, 2024). Re-verify time-sensitive frontier items at publish.*
