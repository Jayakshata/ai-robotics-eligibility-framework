# Research — Credentials & Subjects: **Multimodal Sensor Fusion** (A1)

> Niche-specific research feeding the per-niche profile (§3 eligibility, §4/§5 subjects). **Scope:** multi-sensor fusion (camera + LiDAR + proprioceptive/IMU + force) and **event-based/neuromorphic vision**. Does **not** re-derive the shared backbone (valued-degree tiers, canonical subjects, duration model) — see `_grounding-reference.md`. Only what is *specific* to sensor fusion is captured here. Sources 2024–2026 favored; syllabi pages are stable multi-year. `✓` grounded · `~` to re-verify.

---

## 1. Niche-specific ELIGIBILITY adjustment (vs. the general set) `✓`

This niche is an **estimation-and-signals** discipline, not an actuation/dynamics one. Degrees shift accordingly:

**Rise in value:**
- **Electrical / Electronic & Computer Eng. (EE/ECE) → strongest single fit.** Signals & systems, DSP, detection & estimation theory, stochastic processes, and sensor electronics *are* the fusion core. At Michigan the sensing electives are literally EECS courses (551 Matrix Methods, 559 Advanced SP, **564 Estimation, Filtering & Detection**). EE outranks its general-set Tier-1 slot here.
- **Aerospace / Aeronautical Eng. → rises to Tier 1 (niche-specific).** Kalman filtering was *born* in aerospace navigation; GNC, INS/GNSS integration and attitude estimation are direct transfers. Evidence: Stanford **AA 273** and MIT **16.485** live in the *Aero/Astro* departments; Michigan's **AEROSP 567 Inference, Estimation & Learning** and **AEROSP 566** sit on the robotics Sensing list.
- **Applied Mathematics / Statistics → rises.** Estimation theory, Bayesian inference, stochastic processes, nonlinear least-squares/optimization on manifolds.
- **Geomatics / Geodesy / Photogrammetry / Surveying Eng. → rises from ~zero to genuinely relevant (a riser almost no other A-niche shares).** This is the home discipline of LiDAR point clouds, GNSS/INS georeferencing, multi-sensor calibration and registration — mobile-mapping programs (ETH/TUM/Stuttgart, Wuhan, Calgary, UNSW) train exactly this stack.
- **Physics → stays relevant** (sensor physics, optics, noise) — and for neuromorphic, **neuroscience / neuromorphic-engineering** backgrounds become uniquely valuable.

**Fall in relative value (vs. manipulation/locomotion niches):**
- **Mechanical Eng. / Mechatronics → soft fall.** Rigid-body dynamics and actuation matter less than estimation; still partly relevant via proprioceptive/force streams and robot kinematics, so *de-emphasized, not excluded*.
- Pure **control-theory**-heavy profiles are less central than **estimation/perception**-heavy ones.

*Net: for this niche the "big three" reorders to **EE ≈ CS ≈ Aero > Applied-Math > ME**, plus Geomatics as a specialist entry.*

---

## 2. Strongest UNIVERSITY PROGRAMS & the specific courses that make them strong `✓`

### Undergraduate
- **U-Michigan Robotics BSE / EECS** — deepest named undergrad sensing spine: **EECS 442 Computer Vision**, sensing/estimation electives feeding into ROB 530. [sensing list]
- **UPenn (GRASP)** — undergrad-accessible **MEAM 620 Advanced Robotics** (EKF sensor fusion, visual-inertial state estimation) and the GRASP perception sequence.
- **CMU** (BS Robotics) and **WPI/MIT/GaTech** provide the CV + estimation + signals foundation, but the *sensor-fusion-defining* courses are graduate-level (below).
- **ETH Zürich / UZH** — **Autonomous Mobile Robots** (Siegwart; also an edX MOOC) is the classic undergrad/early-grad perception-and-estimation entry.

### Postgraduate — ranked by strength *for this niche* `✓`
| Tier | Program | The sensor-fusion signal (named courses) |
|------|---------|------------------------------------------|
| **World-leading** | **CMU (RI)** | **16-833 Robot Localization & Mapping** (Kaess — SLAM as probabilistic inference / **factor graphs**, GTSAM); **16-722 Sensing & Sensors** (MechE/RI — transducers, noise, end-to-end sensing, imaging); **16-720 Computer Vision** (multi-view geometry, 3D reconstruction). |
| **World-leading** | **U-Michigan (Robotics)** | **ROB 530 / EECS 568 / NAVARCH 568 Mobile Robotics** (Bayesian filtering, motion & **sensor models**, mapping — the canonical fusion course, public GitHub); **EECS 564 Estimation, Filtering & Detection**; **ROB 599 Deep Learning for Robot Perception**; **AEROSP 567 Inference, Estimation & Learning**. Michigan's *Sensing core-area* list is the most explicit fusion curriculum published. |
| **World-leading** | **Stanford** | **AA 273 State Estimation & Filtering for Robotic Perception** (Schwager — KF/EKF/UKF, particle filters, SLAM, attitude estimation); **AA 274A Principles of Robot Autonomy** (dedicated sensor-fusion lectures); CS231A 3D vision. |
| **World-leading** | **MIT** | **16.485 Visual Navigation for Autonomous Vehicles (VNAV)** (Carlone — **factor-graph SLAM**, **visual-inertial odometry**, Lie groups, iSAM/GTSAM; free on OCW) — arguably the single best-targeted course for camera+IMU fusion. |
| **Top** | **UPenn (GRASP)** | **ESE 650 Learning in Robotics** (Daniilidis/Chaudhari — HMMs, **KF/EKF/UKF, particle filters**, quaternion attitude UKF); **MEAM 620** (VIO/EKF fusion). |
| **Top** | **ETH Zürich / UZH (RPG, Scaramuzza)** | **Vision Algorithms for Mobile Robotics** (151-0632-00L) — the definitive fusion syllabus: *multiple-view geometry, tracking, **event-based vision**, **visual-inertial odometry**, SLAM*; slides/videos/exercises open. UZH RPG is the **world-leading group for event-camera / neuromorphic** perception. |
| **Strong** | **TUM** (Cremers CVG), **U-Toronto** (Barfoot STARS — state estimation for robotics), **KTH, TU Delft** | Multiple-view geometry, visual SLAM, batch/graph state estimation, LiDAR mapping. |
| **Neuromorphic specialist** | **UZH/ETH Institute of Neuroinformatics (INI)**, **TU Berlin (Gallego)** | Neuromorphic engineering, event/spiking vision; feed the **Telluride** & **Capo Caccia** summer schools (the field's training venues). |

---

## 3. Most-valued CERTIFICATIONS & MOOCs for this niche `✓`

Ranked by on-target relevance (named + provider):

1. **Udacity — Sensor Fusion Engineer Nanodegree (nd313).** THE most on-topic credential: four courses — **LiDAR** (point-cloud obstacle detection), **Radar** (signal processing, CFAR, Doppler), **Camera** (camera-LiDAR fusion, TTC), **Kalman Filters** (EKF then **UKF** for nonlinear tracking; Thrun). Directly maps to camera+LiDAR+radar fusion.
2. **Coursera — "State Estimation & Localization for Self-Driving Cars"** (U-Toronto, Self-Driving Cars Specialization). Least-squares → **ES-EKF** → **UKF**; GPS/IMU/LiDAR sensor models; **ICP** scan matching; capstone fuses multiple streams into one pose estimate.
3. **ETH/UZH — "Vision Algorithms for Mobile Robotics"** (Scaramuzza; open slides + video + exercises). De-facto gold-standard open course for **VIO, event-based vision, SLAM**. Free.
4. **MIT OCW — 16.485 VNAV** (free). Factor-graph VIO/SLAM with hands-on GTSAM.
5. **Coursera — UPenn "Robotics: Estimation & Learning"** + **"Robotics: Perception"** (GRASP; Daniel Lee / Daniilidis). Bayesian filtering, Gaussian models, mapping; camera perception & optical flow.
6. **Udacity — Self-Driving Car Engineer Nanodegree.** EKF Lidar+Radar fusion module + **particle-filter** localization.
7. **The Construct — ROS 2 perception/SLAM** paths (`robot_localization` EKF/UKF, Cartographer, RTAB-Map) — the applied ROS integration layer.
8. **Event/neuromorphic ecosystem (no formal exam yet):** **Prophesee Metavision SDK** & **iniVation** developer courses; the **Event-based Vision** resource hub + Gallego/Scaramuzza tutorial; **Intel Loihi / Lava** neuromorphic tutorials. Treat as ecosystem credentials, not certifications.

*(General-set anchors — Modern Robotics, DeepLearning.AI ML/DL — still apply per grounding ref; not repeated.)*

---

## 4. Explicit SUBJECT LIST for this niche `✓`
Grounded in the syllabi above; grouped, with representative courses.

**Foundational maths & CS**
- **Linear algebra** & matrix methods *(Michigan EECS 551)*
- **Probability, stochastic processes & estimation theory** *(Michigan EECS 564; AEROSP 567)*
- **Detection & statistical inference / Bayesian inference** *(EECS 564)*
- **Optimization: nonlinear least-squares, MAP, optimization on manifolds / Lie groups (SO(3), SE(3))** *(MIT 16.485; CMU 16-833)*
- **Python + C++** (real-time perception)

**Core robotics / perception**
- **Rigid-body transforms & robot kinematics**; frames/TF
- **Computer vision & multiple-view geometry** *(CMU 16-720; ETH VAMR; CS231A)*
- **Signals & systems / DSP**; radar signal processing *(EE core; Udacity Radar)*
- **Sensor modeling & noise characterization** (camera, LiDAR, IMU, radar, F/T) *(CMU 16-722)*
- **Multi-sensor spatiotemporal calibration & time synchronization** (intrinsic/extrinsic, hand-eye, IMU-camera)
- **ROS 2 + robot_localization / MoveIt perception**

**Niche-specific (the fusion core)**
- **Recursive Bayesian filtering: KF / EKF / ES-EKF / UKF** *(AA 273; ESE 650; Udacity/Toronto)*
- **Particle filters & nonparametric estimation** *(ROB 530; ESE 650)*
- **Factor graphs & smoothing (iSAM/GTSAM), pose-graph optimization** *(CMU 16-833; MIT 16.485)*
- **SLAM** — visual, LiDAR, and **visual-inertial (VIO)** / **LiDAR-inertial (LIO)** *(ETH VAMR; MIT 16.485; ROB 530)*
- **IMU preintegration; GNSS/INS integration; attitude/orientation estimation** *(AA 273; ESE 650 quaternion UKF)*
- **Point-cloud processing & registration: ICP / NDT; range-image fusion** *(Toronto MOOC; ROB 530)*
- **Occupancy / semantic / metric-semantic mapping**
- **Proprioceptive & force/tactile fusion** (encoder/IMU/F-T state estimation for legged & manipulation)

**Frontier / advanced**
- **Deep multimodal fusion: BEV representations & cross-modal transformers** — *BEVFusion, TransFusion, DeepFusion* (camera-LiDAR 3D detection, nuScenes SOTA) *(ROB 599 Deep Learning for Perception)*
- **Radar-camera & 4D-radar learned fusion**; robustness under **sensor degradation / dropout** (adaptive, uncertainty-aware fusion)
- **Learned / differentiable filtering** (differentiable KF, deep VIO)
- **Event-based / neuromorphic vision** — async event representations, event-VIO, event SLAM, **spiking neural networks (SNNs)**, Loihi/Lava *(ETH VAMR event module; INI; Telluride)*
- **Neural-implicit / Gaussian-splat SLAM** and metric-semantic fusion
- **Cross-modal foundation models & alignment** for perception

---

## Sources (representative; 2024–2026 favored)
- Michigan Sensing core-area course list: https://robotics.umich.edu/academics/graduate/degree-requirements/robotics-sensing-core-area-course-list/ · ROB course bulletin: https://bulletin.engin.umich.edu/courses/robotics-courses/ · ROB 530 public repo: https://github.com/UMich-CURLY-teaching/UMich-ROB-530-public
- CMU 16-833 (Kaess): https://www.cs.cmu.edu/~kaess/teaching/16833/ · 16-722 Sensing & Sensors: https://www.meche.engineering.cmu.edu/education/courses/16-722.html · 16-720 CV: https://www.andrew.cmu.edu/course/16-720/
- Stanford AA 273: https://online.stanford.edu/courses/aa273-state-estimation-and-filtering-robotic-perception
- MIT 16.485 VNAV: https://vnav.mit.edu/ · OCW: https://ocw.mit.edu/courses/16-485-visual-navigation-for-autonomous-vehicles-vnav-fall-2020/
- UPenn ESE 650 (Chaudhari, 2023): https://pratikac.github.io/pub/23_ese650.pdf · Coursera Perception: https://www.coursera.org/learn/robotics-perception
- ETH/UZH RPG teaching (VAMR, event vision): https://rpg.ifi.uzh.ch/teaching.html · event-camera tutorial: https://rpg.ifi.uzh.ch/docs/scaramuzza/Tutorial_on_Event_Cameras_Scaramuzza.pdf · DVS research: https://rpg.ifi.uzh.ch/research_dvs.html
- Udacity Sensor Fusion ND: https://www.udacity.com/course/sensor-fusion-engineer-nanodegree--nd313
- Coursera State Estimation & Localization (Toronto): https://www.coursera.org/learn/state-estimation-localization-self-driving-cars
- Telluride Neuromorphic Workshop: https://neuromorphs.github.io/activities/telluride/ · Institute of Neuromorphic Eng: https://www.ine-web.org/activities/
- Event-based Vision survey (Gallego et al., T-PAMI): https://rpg.ifi.uzh.ch/docs/EventVisionSurvey.pdf
- Fusion SOTA: BEVFusion https://arxiv.org/abs/2205.13790 · TransFusion https://arxiv.org/pdf/2203.11496 · Multi-Sensor Fusion review (Sensors, 2025) https://www.mdpi.com/1424-8220/25/19/6033 · LiDAR-IMU-camera SLAM review (AI Review, 2025) https://link.springer.com/article/10.1007/s10462-025-11187-w
- Geomatics/GNSS-INS-LiDAR eligibility angle: https://www.tandfonline.com/doi/full/10.1080/10095020.2024.2377800
