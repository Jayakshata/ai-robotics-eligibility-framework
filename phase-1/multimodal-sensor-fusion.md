# Per-Niche Profile — Multimodal Sensor Fusion

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; sensor-fusion-specific and trending-research signals are research-backed. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Multimodal Sensor Fusion · **Axis A cluster:** A1 (Sensing & Perception) · **Type:** `[F]` (event-based / neuromorphic sub-area `[S][★]`)
**Related capabilities:** A2 state estimation / SLAM · A1 CV / depth-LiDAR / tactile / proprioception · A4 force/compliant control · A5 loco-manipulation · A7 multimodal VLAs · A10 calibration & systems-integration · **Platforms (C):** C3 AMR · C4 quadruped · C5 humanoid · C6 drone/UAV · **Verticals (B):** B10 autonomous vehicles · B11 UAS/drones · B2 logistics · B14 inspection · B5 agriculture

---

## 1. Definition & Scope
Combining **heterogeneous sensor streams** — camera, LiDAR, radar, IMU/proprioceptive, force/tactile, and event — into one coherent, robust estimate of the robot and its world. It is the **perception backbone** under localization, navigation, and safe interaction, and the layer that keeps a robot working when a single sensor is blinded, dropped, or degraded. **In scope:** sensor modeling & noise characterization, spatiotemporal calibration & time-sync, recursive Bayesian filtering (KF/EKF/UKF), factor-graph/smoothing fusion, tightly-coupled VIO/LIO, deep multimodal fusion (BEV / cross-modal transformers), radar-camera fusion, robustness under sensor degradation/dropout, event-based/neuromorphic vision & SNNs, proprioceptive & force fusion. **Out of scope (adjacent):** the SLAM back-end itself — loop closure, pose-graph mapping (A2, which this niche *feeds*); single-modality computer vision (A1 CV); the control loops that consume the estimate (A4). *Boundary note:* filtering machinery (EKF/UKF/factor graphs) is shared with A2 state estimation — this niche owns the **sensor-level** problem (calibrate → synchronize → fuse exotic + classical modalities into a representation), A2 owns the **map-level** problem.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Perception / Sensor-Fusion Engineer | Calibrates and time-syncs sensor suites; tunes filters; integrates fusion libraries on real hardware; runs data collection & experiments under supervision. |
| **L2** | Sensor Fusion Engineer | Owns a fusion subsystem end-to-end (calibrate→sync→fuse→estimate); debugs time-sync and sensor-degradation failures; ships to a real deployment. |
| **L3** | Senior Perception / Sensor Fusion Engineer | Designs the fusion architecture; makes classical-filter-vs-learned tradeoffs; specifies the sensor suite; sets benchmarks; mentors. |
| **L4/L5** | Staff / Principal Perception Research Engineer | Sets the multimodal-perception research agenda; advances fusion / event-vision SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), EE/ECE, Robotics Engineering, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **Sensor-fusion-specific reorder `✓`:** this is an **estimation-and-signals** discipline, so **EE/ECE is the single strongest fit** (signals & systems, DSP, detection & estimation theory *are* the fusion core), **Aerospace/Aeronautical rises to Tier 1** (Kalman filtering was born in aerospace GNC; INS/GNSS integration transfers directly), **Applied Maths/Statistics rises** (estimation theory, optimization on manifolds), and **Geomatics/Geodesy/Photogrammetry/Surveying rises from ~zero to genuinely relevant** — the home discipline of LiDAR point clouds, GNSS/INS georeferencing and multi-sensor registration (a riser almost no other A-niche shares). **ME/Mechatronics soft-*fall*** (rigid-body dynamics matters less than estimation). Net reorder: **EE ≈ CS ≈ Aero > Applied-Math > ME**, + Geomatics as a specialist entry.

**Highly-valued undergraduate programs `✓`** — **U-Michigan Robotics BSE / EECS** (deepest named sensing spine: EECS 442 Computer Vision → ROB 530), **UPenn (GRASP)** (undergrad-accessible MEAM 620 — EKF fusion + visual-inertial state estimation), **ETH Zürich / UZH** (*Autonomous Mobile Robots*, Siegwart — the classic perception-and-estimation entry, also an edX MOOC), plus **CMU · WPI · MIT · Georgia Tech** for the CV + estimation + signals foundation. *(The sensor-fusion-defining courses are graduate-level — below.)*

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI, EE/ECE, Aerospace (GNC), or Applied Maths with a perception / state-estimation focus.

**Highly-valued postgraduate programs — ranked by sensor-fusion strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **CMU (RI) · Michigan · Stanford · MIT** | CMU **16-833 Robot Localization & Mapping** (Kaess — factor graphs/GTSAM) + **16-722 Sensing & Sensors** · Michigan **ROB 530 / EECS 568 Mobile Robotics** (the canonical fusion course, public repo) + **EECS 564 Estimation, Filtering & Detection** + **AEROSP 567** · Stanford **AA 273 State Estimation & Filtering** + AA 274A · MIT **16.485 VNAV** (Carlone — factor-graph VIO/SLAM, free on OCW; the single best camera+IMU-fusion course) |
| Top | **UPenn (GRASP) · ETH / UZH (RPG)** | Penn **ESE 650 Learning in Robotics** (KF/EKF/UKF, particle filters, quaternion attitude UKF) + MEAM 620 (VIO/EKF) · ETH/UZH **Vision Algorithms for Mobile Robotics** (Scaramuzza — the definitive fusion syllabus: multi-view geometry, VIO, **event-based vision**, SLAM; slides/videos open) |
| Strong | **TUM (Cremers) · U-Toronto (Barfoot STARS) · KTH · TU Delft** | Multi-view geometry, visual SLAM, batch/graph state estimation, LiDAR mapping |
| Neuromorphic specialist | **UZH/ETH Institute of Neuroinformatics (INI) · TU Berlin (Gallego)** | Neuromorphic engineering, event / spiking vision; feed the **Telluride** & **Capo Caccia** summer schools (the field's training venues) |

**Highly-valued certifications / MOOCs `✓`** — **Udacity Sensor Fusion Engineer Nanodegree (nd313)** — THE most on-topic credential (LiDAR · Radar/CFAR · Camera-LiDAR fusion · EKF→UKF; Mercedes-Benz) · **Coursera "State Estimation & Localization for Self-Driving Cars"** (U-Toronto — least-squares → ES-EKF → UKF, GPS/IMU/LiDAR models, ICP, CARLA capstone) · **ETH/UZH VAMR** (Scaramuzza — open gold-standard for VIO / event vision) · **MIT OCW 16.485 VNAV** (hands-on GTSAM) · **UPenn "Robotics: Estimation & Learning" + "Robotics: Perception"** (Coursera) · Udacity **Self-Driving Car ND** (EKF LiDAR+Radar + particle-filter localization) · **The Construct ROS 2** (`robot_localization` EKF/UKF, Cartographer, RTAB-Map) · **event/neuromorphic ecosystem `~`** — Prophesee **Metavision SDK**, iniVation developer courses, Intel **Loihi / Lava** tutorials (ecosystem credentials, no formal exam yet). *(General anchors — Modern Robotics, DeepLearning.AI ML/DL — still apply per grounding ref.)*

**Experience & portfolio** — L1: internship/academic; a working EKF or calibration project. L2: 2–4 yr; a real multi-sensor state-estimation demo (VIO/LIO or camera-LiDAR fusion) with error numbers + a deployment. L3: 5–8 yr; ≥1 real fusion stack led. L4/L5: 8+ yr and/or first-author papers (CVPR/ICRA/IROS/RSS/RA-L).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and **C++** for real-time perception
- **Recursive Bayesian filtering:** KF, EKF, **error-state EKF**, UKF; particle filters
- **Multi-sensor spatiotemporal calibration & time-synchronization** (intrinsic/extrinsic, IMU-camera, hand-eye)
- **Sensor modeling & noise characterization** (camera, LiDAR, IMU, radar, F/T)
- **Rigid-body transforms**, frames/TF, **Lie groups SO(3)/SE(3)**, quaternions
- **Point-cloud processing & registration** (ICP / NDT)
- **Visual-inertial / LiDAR-inertial odometry** (VIO / LIO); IMU preintegration
- **Factor graphs & smoothing** (GTSAM / iSAM); nonlinear least-squares
- **ROS 2** + `robot_localization`; real-robot integration
- **Deep learning for perception** (PyTorch); camera-LiDAR **BEV fusion** basics

**Preferred / differentiating**
- **Deep multimodal fusion:** BEV & cross-modal transformers (**BEVFusion / TransFusion**)
- **4D-radar** & radar-camera **learned fusion**; all-weather perception
- **Robustness under sensor degradation / dropout** (uncertainty-aware, adaptive fusion)
- **Event-based / neuromorphic vision**; event-VIO; **spiking neural networks** (Loihi/Lava)
- **Learned / differentiable filtering** (deep VIO, differentiable KF)
- **Proprioceptive & force fusion** for legged / manipulation state estimation
- **Multimodal VLA / sensor-as-modality** integration (ForceVLA / OmniVLA-style)
- **Neural-implicit / Gaussian-splat** metric-semantic fusion
- Publications at **CVPR / ICRA / IROS / RSS / RA-L**; real-world deployment

**Tools & tech stack** — *Languages:* Python, C++ · *Middleware:* ROS 2, `robot_localization`, TF2 · *Estimation/opt:* GTSAM, Ceres `~`, g2o `~`, **Kalibr** (calibration) `~` · *Odometry front-ends:* VINS-Fusion, OpenVINS, **FAST-LIO2**, LIO-SAM, ORB-SLAM3 `~` · *Point cloud:* PCL, Open3D · *Deep fusion:* PyTorch, OpenPCDet, MMDetection3D, BEVFusion · *Event / neuromorphic:* Prophesee Metavision, iniVation DV, Intel **Lava**, snnTorch / Norse / Tonic `~` · *Hardware:* RealSense, Ouster/Velodyne/Livox LiDAR, Prophesee/iniVation event cameras, Xsens/VectorNav IMU, TI mmWave radar, ATI/Bota F/T

**Bar by tier** — L1: solid on the required list, can calibrate + run a filter on real hardware · L2: ships a real fusion subsystem, fluent across the stack · L3: architects fusion systems, deep in ≥1 differentiating area · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Fusion slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** linear algebra & matrix methods *(Michigan EECS 551)* · probability, stochastic processes & **estimation theory** *(EECS 564, AEROSP 567)* · detection & Bayesian inference *(EECS 564)* · optimization — **nonlinear least-squares, MAP, on-manifold / Lie groups** *(MIT 16.485, CMU 16-833)* · Python + C++.
- **Core robotics / perception:** rigid-body transforms & kinematics · computer vision & multiple-view geometry *(CMU 16-720, ETH VAMR, CS231A)* · signals & systems / DSP, radar SP *(EE core, Udacity Radar)* · **sensor modeling & noise characterization** *(CMU 16-722)* · **multi-sensor calibration & time-sync** · ROS 2 + `robot_localization`.
- **Niche-specific (the fusion core):** KF/EKF/ES-EKF/UKF *(AA 273, ESE 650)* · particle filters *(ROB 530)* · **factor graphs & smoothing (iSAM/GTSAM)** *(CMU 16-833, MIT 16.485)* · **VIO / LIO** *(ETH VAMR, 16.485, ROB 530)* · IMU preintegration; GNSS/INS integration; attitude estimation *(AA 273, ESE 650)* · point-cloud registration ICP/NDT · occupancy / semantic mapping · **proprioceptive & force/tactile fusion**.
- **Frontier / advanced:** **deep multimodal fusion — BEV & cross-modal transformers** (BEVFusion, TransFusion) *(Michigan ROB 599)* · radar-camera & 4D-radar learned fusion; robustness under dropout · learned / differentiable filtering (deep VIO) · **event-based / neuromorphic vision, SNNs, Loihi/Lava** *(ETH VAMR event module, INI, Telluride)* · neural-implicit / Gaussian-splat metric-semantic fusion · cross-modal foundation models.

## 6. Training Programme Design & Duration `✓`
Sensor-fusion-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), with **phase 4 + capstone tuned to multimodal fusion**.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Linear algebra, probability/estimation, Python/C++, classical ML | 2.0 mo | 6 mo | 300 | Maths & ML fluency |
| 2. Core robotics & perception | Transforms, CV/multi-view geometry, signals/DSP, sensor models, **ROS 2** | 2.0 mo | 6–7 mo | 320 | Model + read a sensor suite |
| 3. AI/ML depth | Deep learning, computer vision, deep perception | 2.0 mo | 6 mo | 300 | Perception + learned fusion |
| 4. **Sensor-fusion specialization** | Calibration/time-sync, KF/EKF/UKF, factor-graph fusion, VIO/LIO, deep BEV fusion, radar, event vision, robustness/dropout | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Multi-sensor state estimate on a real mobile robot (camera+LiDAR+IMU, degradation fallback) + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior sensor-fusion engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** Fusion is collapsing into one recipe: *tokenize every sensor → pretrain a shared backbone → fine-tune per task*, with self-supervised cross-sensor generalization, graceful degradation, and event/neuromorphic sensing as the hottest 2026 frontiers. `🆕` = 2026 release; treat vendor benchmark claims as vendor-reported.

- **Unified self-supervised fusion backbones (the "DINO/SAM" of fusion):** 🆕 **OctoSense** (ECCV 2026 — late-fusion masked-autoencoder with per-modality tokenizers over stereo-RGB + event + thermal + LiDAR + IMU + GPS + proprioception; open rig + 59 h/2,474 km; beats image-only FMs on flow/depth/seg/ego-motion, degrades gracefully at night) · **UniPAD** (3D differentiable-rendering SSL pretraining for camera/LiDAR/fusion; +6.9 NDS — the "pretrain once, fuse anything" recipe) · **Sparsh / 🆕 Sparsh-X** (Meta's self-supervised touch backbone; Sparsh-X spans image+audio+motion+pressure — the tactile DINO).
- **Multimodal VLA policies — sensors as first-class modalities/experts:** 🆕 **OmniVLA** (unifies infrared + mmWave-radar + acoustic via "sensor-masked images"; 84% success, +59% vs RGB-only — first VLA to fuse non-RGB this broadly) · 🆕 **MuseVLA** (adaptive multimodal-sensing VLA that *gates* which sensors to attend per task) · **ForceVLA** (6-axis force as a first-class modality via force-aware MoE; ships **ForceVLA-Data**; NeurIPS 2025) + 2026 family 🆕 **ForceVLA2 / FAVLA / FAWAM / ForceFlow** · 🆕 **DreamTacVLA / DAM-VLA** (tactile-predictive & decoupled-async multimodal VLAs) · **Reactive Diffusion Policy** (slow-fast visual-tactile; high-frequency contact reactivity). Context: **π0.7** and world-model loco (**FALCON**) fuse proprioception as standard.
- **Camera–LiDAR–radar fusion & occupancy (driving / mobile):** **BEVFusion** lineage (the standard camera+LiDAR BEV baseline; unified-BEV vs token-level cross-attention) · **GaussianFormer-2 / MR-Occ / MS-OCC** (probabilistic-Gaussian & multi-resolution 3D semantic **occupancy** — the field's convergence representation) · **4D-radar surge:** 🆕 **R4Det**, Wavelet multi-view 4D-radar+camera, 🆕 "**4D Radar Meets LiDAR & Camera**" (adverse-weather cooperative perception), **CVFusion** (ICCV 2025) — radar as the "cheap all-weather" third modality · **robustness under sensor failure** now its own subfield: 🆕 "*Can BEV Perception Gracefully Degrade under Sensor Failures?*" and 🆕 **SEF-MAP** (subspace-expert fusion for robust HD-map).
- **Tactile & visuo-tactile foundation models:** **AnyTouch / 🆕 AnyTouch 2** (unified static-dynamic across visuo-tactile sensors; ICLR 2025 + v2 dynamic perception) · **UniTouch / T3 / UniT** (align touch with CLIP image/text for zero-shot tactile) · 🆕 **Tac-DINO**, 🆕 **Visuo-Tactile World Models**, **SARL** (SSL touch) · 🆕 **T-Rex** (tactile-reactive dexterity) — cross-sensor generalization is the theme.
- **Event-based / neuromorphic vision (fastest-rising frontier):** **Event MLLMs** — **EventGPT** (first event-stream LLM, CVPR 2025), **EventVL**, 🆕 **EventFlash** (efficient), 🆕 **RE-VLM** (dual-stream RGB+event, CVPR 2026), 🆕 **EventDrive** (driving VLM) · **benchmarks EventBench & Event-LAB** (standardized neuromorphic localization) · **SNN control** — fully neuromorphic autonomous drone flight (Delft, *Science Robotics* 2024) & **EV-Planner** (event-based energy-efficient nav) — the low-power high-speed control stack · venues NeVi @ ICCV 2025, NeuRobots @ IROS 2025, **EBMV @ ECCV 2026** (event + RGB + LiDAR + IMU + language).
- **Datasets & benchmarks:** **M3ED** (multi-robot car/quadruped/UAV; Prophesee-Gen4 event + RGB + 64-beam LiDAR + IMU; 3 TB — the reference event-fusion benchmark) · 🆕 **OctoSense dataset** (largest event-inclusive driving corpus; +thermal +CAN proprioception) · 🆕 **RoboMIND 2.0** (bimanual mobile-manipulation multimodal) · **DSEC** (stereo event driving) · **NYC-Event-VPR** (event place recognition, ICRA 2025) · **ForceVLA-Data** · **V2X-R / Dual-Radar / NTU4DRadLM** (4D-radar multimodal).

*Net trend: one shared masked-autoencoder/VLA backbone over every tokenized sensor (force, tactile, event, thermal, radar, proprioception), self-supervised cross-sensor generalization, graceful degradation under failure, and event/neuromorphic as the 2026 frontier. Several 2026 items are fresh preprints.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Implement an **EKF** for IMU + GPS pose fusion (Python/sim) | Recursive filtering from scratch; converged, consistent estimate |
| Foundational | **Camera-LiDAR extrinsic + IMU-camera calibration** (Kalibr) | Spatiotemporal calibration & time-sync; sub-pixel/sub-cm reprojection |
| Applied | **ES-EKF / UKF fusion** of GPS+IMU+wheel odometry (CARLA / Toronto-style) | Nonlinear filtering + sensor models; low trajectory error vs ground truth |
| Applied | **VIO** on a recorded dataset (VINS-Fusion / OpenVINS on EuRoC / TUM-VI) | Tight camera+IMU coupling; ATE within benchmark range |
| Applied | **LiDAR-inertial odometry** (FAST-LIO2 / LIO-SAM) on a mobile robot | LIO front-end; drift-bounded mapping over a real trajectory |
| Advanced | **Camera-LiDAR BEV 3D detection** on nuScenes (BEVFusion / TransFusion) | Deep multimodal fusion; competitive mAP / NDS |
| Advanced | **Robustness-under-dropout:** degrade/drop a sensor at runtime | Graceful degradation; accuracy retained under single-sensor failure |
| Advanced | **Event-camera VIO** or event+RGB fusion (DSEC / M3ED) | Async event representations; low-latency estimate in high-speed/low-light |
| Capstone | Full **multi-sensor state estimate on a real mobile robot / quadruped** — camera+LiDAR+IMU tightly-coupled, with a degradation fallback | End-to-end fusion stack; robust real-world pose + a documented failure envelope |

## 9. Required Lab Setup / Hardware / Resources
- **Cameras:** Intel RealSense D435/D455 · global-shutter stereo (ZED, FLIR) `~`.
- **LiDAR:** **Ouster OS1** · Velodyne · **Livox** (solid-state, budget) · Hesai `~`.
- **Radar:** TI **mmWave** (AWR/IWR) · 4D imaging radar `~`.
- **Event cameras:** **Prophesee** (Gen4 / EVK) · **iniVation** DAVIS / DVXplorer.
- **IMU / GNSS:** Xsens MTi · VectorNav · u-blox RTK-GNSS `~`.
- **Force / tactile:** ATI / Bota F/T · GelSight / DIGIT (visuo-tactile).
- **Neuromorphic compute:** Intel **Loihi 2 / Kapoho Point** · SynSense `~` (via the **Lava** SDK).
- **Compute:** RTX 4090 / A6000 workstation; A100/H100 for large fusion/VLA training; **Jetson Orin** for on-robot edge deployment.
- **Software / sim:** ROS 2 + `robot_localization` · GTSAM · Ceres · **Kalibr** · PCL · Open3D · **VINS-Fusion / OpenVINS / FAST-LIO2 / ORB-SLAM3** · OpenPCDet / MMDetection3D / BEVFusion · Prophesee Metavision / Lava · CARLA / Isaac Sim / Gazebo (sim).
- **Datasets & benchmarks:** **nuScenes** · KITTI / KITTI-360 · Waymo Open · **EuRoC MAV** · TUM-VI · **M3ED** · **DSEC** · ForceVLA-Data · V2X-R / Dual-Radar / NTU4DRadLM · **nuScenes-C** (corruption/robustness) `~`.

## 10. Partnerships & Ecosystem
- **Sensor vendors:** Prophesee · iniVation (event) · Ouster · Velodyne · Livox · Hesai (LiDAR) · Intel RealSense · Luxonis `~` · Xsens/Movella · VectorNav (IMU) · Texas Instruments (mmWave radar) · ATI · Bota (F/T).
- **Neuromorphic compute:** Intel (Loihi / Lava) · SynSense · BrainChip `~` · the **Open Neuromorphic** community.
- **Sim / compute:** NVIDIA (**Isaac ROS cuVSLAM**, DLI, Inception) · CARLA (autonomous-driving sim).
- **Academic labs (fusion powerhouses):** **UZH RPG (Scaramuzza — event/VIO)** · Michigan (Ghaffari, CURLY) · CMU (Kaess) · **MIT SPARK (Carlone)** · Stanford (Schwager) · TUM CVG (Cremers) · **TU Berlin (Gallego — event)** · UZH/ETH INI (neuromorphic).
- **Open-source communities:** ROS / `robot_localization` · **GTSAM** (Dellaert / Georgia Tech) · OpenVINS · Open Neuromorphic · the **Event-based Vision** resource hub.
- **Training venues:** **Telluride Neuromorphic Workshop** · Capo Caccia.
- **Standards (applied):** ISO 26262, **ISO 21448 (SOTIF)** for automotive sensor fusion; multi-sensor calibration is a cross-cutting concern.

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (filtering, calibration, VIO/LIO, deep fusion).
- **Project rubrics** with objective metrics: **ATE / RPE** (absolute/relative trajectory error) for VIO/LIO; **mAP / NDS** on nuScenes; calibration reprojection error; **degradation test** (accuracy retained under sensor dropout); latency/throughput on **Jetson**-class edge.
- **Standardized benchmarks** as portable evidence: KITTI / nuScenes / Waymo leaderboards; **EuRoC / TUM-VI** VIO; **M3ED / DSEC** event fusion; **nuScenes-C** robustness.
- **Recognized certifications as evidence:** Udacity **Sensor Fusion ND**; Coursera **Toronto State Estimation**; ETH **VAMR** completion; a ROS 2 credential.
- **Senior tiers:** portfolio + **system-design interview** (sensor-suite selection, time-sync strategy, failure-mode reasoning) + live pipeline debugging.

## 12. Adjacent & Related Niches
Pairs most tightly with **A2 state estimation / SLAM** (shares the estimation backbone — this niche is its multi-sensor front-end); feeds **A3 navigation**, **A4 force/compliant control**, **A5 loco-manipulation**, and **A7 multimodal VLAs** (sensors as modalities). Underpins the **C3 AMR · C4 quadruped · C6 drone** platform tracks and the **B10 autonomous-vehicles / B11 UAS** verticals. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A1 (`✓`). §7 stamped mid-2026 — re-research before publish.*
