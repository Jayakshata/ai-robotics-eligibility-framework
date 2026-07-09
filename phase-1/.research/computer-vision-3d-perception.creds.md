# Niche Research — Computer Vision & 3D Scene Understanding for Robotics

> **Scope (Axis A · A1):** object detection/segmentation/tracking · 6-DoF pose estimation · depth/LiDAR/radar perception · 3D scene understanding & reconstruction · active perception & visual servoing.
> Niche-specific credentials + subjects only. Shared backbone (valued-degree tiers, canonical subjects, duration model) lives in `phase-1/_grounding-reference.md` — **not re-derived here.** `✓` grounded 2024–2026.

---

## 1. Strongest University Programs (with the courses that make them strong)

**Postgraduate — ranked by CV/3D-perception depth `✓`**

| Tier | Programs | The load-bearing courses |
|------|----------|--------------------------|
| **World-leading** | **CMU RI · Stanford · MIT · UPenn (GRASP)** | **CMU** has the deepest bench: **16-720 Computer Vision**, **16-825 Learning for 3D Vision** (Tulsiani — implicit/neural 3D reps + differentiable rendering), **16-822 Geometry-based Methods in Vision** (epipolar/fundamental matrix, SfM, auto-calibration), **16-824 Visual Learning & Recognition**, **16-833 Robot Localization & Mapping / SLAM** (Kaess). **Stanford**: **CS231A** *Computer Vision: From 3D Perception to 3D Reconstruction* (Savarese/Bohg) + **CS231N** *Deep Learning for Computer Vision*. **MIT**: **6.8300/6.8301 Advances in Computer Vision** (successor to 6.869) + **16.485 Visual Navigation for Autonomous Vehicles (VNAV)** (Carlone — VIO, place recognition, SLAM, geometric deep learning — the standout robotics-perception course). **Penn**: **CIS 5800 Machine Perception** (Daniilidis — projective geometry, calibration, stereopsis, SfM). |
| **Strong (geometric / SLAM powerhouses)** | **ETH Zürich · TUM · U-Michigan · Imperial** | **ETH**: **263-5902 Computer Vision** (Pollefeys/CVG), the **3D Vision** seminar course, and UZH/ETH **151-0632 Vision Algorithms for Mobile Robotics** (Scaramuzza — visual odometry/VIO, the applied-VO gold standard). **TUM**: **IN2228 Multiple View Geometry (3D Computer Vision)** (Cremers) + **IN2392 Machine Learning for 3D Geometry** (Angela Dai — learned 3D reconstruction/point clouds). **Michigan Robotics**: **EECS 442 Computer Vision** + **ROB 530 / NA 568 Mobile Robotics** (state estimation, SLAM). **Imperial** (Davison / Dyson Robotics Lab): Robot Vision — the SLAM lineage (MonoSLAM, KinectFusion). |
| **Present** | **Georgia Tech · UC Berkeley · Oxford** | GT **CS 6476 Computer Vision** + **CS 7643 Deep Learning**; Berkeley **CS 280**; Oxford VGG (Zisserman — author of Hartley & Zisserman *Multiple View Geometry*, the canonical MVG text) = research-led, not coursework. |

**Undergraduate — where the niche is reachable pre-master's `✓`:** **Michigan Robotics BSE** (EECS 442 Computer Vision in-major), **CMU BS Robotics** (16-385 Computer Vision; can reach 16-720), **UPenn** (CIS 580 Machine Perception, GRASP access), **MIT** (6.8301 undergrad CV; 6-4), **Georgia Tech** (CS 4476/6476), **Stanford** (CS231A/N are UG-accessible). ETH/TUM feed the niche through a heavy EE/CS + signal-processing core rather than a named UG robotics-vision track.

---

## 2. Certifications & MOOCs (most valued for THIS niche) `✓`

- **First Principles of Computer Vision** — Columbia, **Shree Nayar** (5-course Coursera specialization: Camera & Imaging · Features & Boundaries · **3D Reconstruction – Single Viewpoint** · **3D Reconstruction – Multiple Viewpoints** · Perception). The gold-standard *fundamentals* MOOC — physics/optics + geometry underpinnings. **Most niche-relevant single credential.**
- **Robotics: Perception** — UPenn on Coursera (Daniilidis/Shi; course 4 of the Penn Robotics Specialization) — two-view geometry, homographies, RANSAC, epipolar constraint, **SfM + bundle adjustment**, visual odometry, 3D pose.
- **Udacity Sensor Fusion Engineer Nanodegree (ND313)** — **the credential for the depth/LiDAR/radar slice**: LiDAR (PCL, RANSAC segmentation, Euclidean clustering/k-d trees), Radar (FMCW, range-Doppler, FFT), Camera (keypoints BRISK/SIFT, time-to-collision), and Kalman/EKF/UKF LiDAR-radar fusion. Built with Mercedes-Benz.
- **ETH "Vision Algorithms for Mobile Robotics"** (Scaramuzza) — free, the applied **visual odometry / VIO** course.
- **Stanford CS231N + CS231A** (free public materials) — deep-learning CV and 3D reconstruction respectively.
- **OpenCV University** — *CVDL Master*, *Fundamentals of CV & Image Processing*, *Advanced Vision with Deep Learning & Transformers* — applied/portfolio-oriented, OpenCV-certified.
- **NVIDIA DLI** — *Fundamentals of Deep Learning for Computer Vision*, *Computer Vision for Industrial Inspection*, *Synthetic Data Generation for CV*, and the **Isaac ROS** perception path (FoundationPose, FoundationStereo, nvblox).
- **DeepLearning.AI** — the **CNN course** within the Deep Learning Specialization is the niche's deep-learning backbone (spec itself already in grounding ref §C).
- *(Also relevant: Udacity Self-Driving Car ND, Kaggle CV competitions.)*

---

## 3. Subject List (grounded in the syllabi above) `✓`

**Foundational maths & CS**
- **Linear algebra** — the single most load-bearing subject here (projective geometry, SVD, least squares) *(MIT 18.06; CS231A math primer)*
- Multivariable calculus; **probability & estimation**; **optimization / nonlinear least squares** (bundle-adjustment math); numerical methods
- **Signal & image processing** (rises for this niche — filtering, sampling, Fourier) *(EECS 442, FPCV)*
- Python + **C++** (real-time perception); data structures & algorithms

**Core robotics**
- **State estimation & filtering** — Kalman/EKF/UKF/particle filters, factor graphs *(ROB 530, Udacity Sensor Fusion)*
- **SLAM & localization**, coordinate frames/TF, sensor models & extrinsic/intrinsic **calibration** *(CMU 16-833, MIT 16.485, ROB 530)*
- **ROS 2** + perception stack (Isaac ROS, PCL, Open3D)

**Niche-specific**
- **Image formation & camera models / calibration** *(FPCV, CS231A, Penn CIS 5800)*
- **Feature detection, description & matching** (SIFT/ORB, optical flow) *(16-720, EECS 442)*
- **Multi-view geometry** — epipolar geometry, fundamental/essential matrix, homography, **stereo & triangulation, structure-from-motion, bundle adjustment** *(CMU 16-822, TUM IN2228, Penn CIS 5800, Robotics: Perception)*
- **Depth & range sensing** — stereo/structured-light/ToF; **LiDAR & point-cloud processing** (RANSAC, clustering, **ICP/registration**); **radar (FMCW/Doppler)** *(Udacity Sensor Fusion)*
- **Deep learning for vision** — CNNs, Vision Transformers, **object detection, semantic/instance segmentation, multi-object tracking** *(CS231N, MIT 6.8300, GT CS 6476/7643)*
- **6-DoF object pose estimation** *(CS231A; FoundationPose)*
- **3D representations & reconstruction** — point clouds/voxels/meshes/SDF, **multi-view stereo**, learned 3D, differentiable rendering *(CMU 16-825, TUM IN2392)*
- **Visual odometry & visual-inertial navigation** *(ETH VAMR, MIT 16.485)*
- **3D scene understanding** — semantic mapping, **scene graphs**, BEV/occupancy, open-vocabulary
- **Active perception & visual servoing** — next-best-view; **IBVS/PBVS** *(the `[S]` sub-area)*

**Frontier / advanced** `⏱ mid-2026`
- **Visual foundation models** — **DINOv2/v3** (dense features), **SAM / SAM2** (promptable segmentation & video), CLIP (open-vocabulary)
- **3D foundation models** — **VGGT** (feed-forward pose+depth+tracks), **FoundationStereo** (CVPR'25), **FoundationPose**, **DUSt3R/MASt3R**
- **Neural rendering** — **NeRF** and **3D Gaussian Splatting**; feature/semantic splatting; **Gaussian-Splat SLAM** (OpenGS-SLAM, Gaussian-LIC2)
- **BEV & occupancy networks** (autonomous-driving perception); **learned/neural SLAM** (DROID-SLAM, implicit-neural maps, PIN-SLAM)
- **Spatially-grounded 3D reasoning for VLAs**; **event-based vision**

---

## 4. Niche-Specific Eligibility Adjustment (vs. grounding-ref general set)

**Degrees that RISE for this niche `✓`**
- **EE / ECE → unambiguous Tier 1** (the most EE-friendly of all perception niches). Image/signal processing, sensor & camera physics, and **LiDAR/radar DSP** (FMCW, range-Doppler/FFT) are directly load-bearing — the radar layer is essentially DSP.
- **Applied Mathematics → rises toward Tier 1 with vision electives.** Projective geometry, SVD/least-squares, and optimization/bundle-adjustment are the theoretical spine.
- **Physics → rises.** Optics, radiometry, image formation, sensor physics (FPCV is explicitly "the physical underpinnings of vision").
- **Photogrammetry / Geomatics / Geodesy / Remote-Sensing / Surveying Engineering → add as niche-specific Tier-2 (with-evidence).** Not on the general robotics list, but genuinely valued for point-cloud, SfM/MVS, 3D-reconstruction, HD-mapping and LiDAR roles — these fields share the point-cloud/registration toolchain with robotics CV.

**Degrees that FALL / are less central `✓`**
- **Mechanical Engineering → falls** relative to its manipulation-niche prominence (where it rises to Tier 1). Rigid-body dynamics, actuation and contact mechanics are not load-bearing for a pure-perception role; ME stays Tier-2-with-evidence.
- Heavy **controls** background matters mainly for the narrow **active-perception / visual-servoing** sub-area, not the niche core.

**Net:** the "build-the-intelligence" tilt holds, but this niche pulls the mix toward **CS/AI + EE + Math/Physics + geospatial**, more than the robotics average.

---

## Sources (representative, 2024–2026)
- CMU: `andrew.cmu.edu/course/16-720`, `learning3d.github.io` (16-825), `geometric3d.github.io` (16-822), `visual-learning.cs.cmu.edu` (16-824), `cs.cmu.edu/~kaess` (16-833)
- Stanford: `web.stanford.edu/class/cs231a`, `cs231n.stanford.edu/2024`
- MIT: `advances-in-vision.github.io` (6.8300/1), `ocw.mit.edu/.../16-485-...vnav`
- Penn: `coursicle.com/penn/courses/CIS/5800`, Coursera `robotics-perception`
- ETH/TUM: `vvz.ethz.ch` 151-0632 & `video.ethz.ch/.../263-5902-00L`, `rpg.ifi.uzh.ch/teaching`, `cvg.cit.tum.de/teaching/ss2025/mvg` (IN2228), `cs.cit.tum.de/cg/...` (IN2392)
- Michigan/GT: `eecs.umich.edu/courses/eecs442`, `bulletin.engin.umich.edu` (ROB 530), GT CS 6476
- Imperial: `imperial.ac.uk/dyson-robotics-lab`, `wp.doc.ic.ac.uk/robotvision`
- MOOCs/certs: `fpcv.cs.columbia.edu` + Coursera FPCV spec, `udacity.com/course/sensor-fusion-engineer-nanodegree--nd313`, `opencv.org/university`, `learn.nvidia.com` (DLI CV/Isaac ROS)
- Frontier: NVIDIA R²D² blog (`developer.nvidia.com/blog/r2d2-...`), FoundationPose/FoundationStereo (NGC), VGGT, 3DGS surveys (arXiv 2508.09977)
- Eligibility (geospatial): photogrammetry/geomatics career guides (himalayas.app), point-cloud survey arXiv 2411.x
