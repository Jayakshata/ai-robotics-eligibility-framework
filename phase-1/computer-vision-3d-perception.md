# Per-Niche Profile — Computer Vision & 3D Scene Understanding for Robotics

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; CV/3D-perception-specific and trending-research signals are research-backed (`phase-1/.research/computer-vision-3d-perception.*`). `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Computer Vision & 3D Scene Understanding for Robotics · **Axis A cluster:** A1 (Sensing & Perception) · **Type:** `[F]` (active-perception & visual-servoing sub-area `[S]`; event-based / foundation-perception frontier `[★]`)
**Related capabilities:** A2 state estimation & SLAM · A5 manipulation · A6 self-supervised representation learning · A7 VLAs & spatial-reasoning VLMs · A8 simulation / synthetic data · **Platforms (C):** C1 fixed arm (bin picking) · C3 AMR · C5 humanoid · C6 aerial/drone · **Verticals (B):** B1 manufacturing · B2 logistics · B10 autonomous vehicles · B14 inspection

---

## 1. Definition & Scope
Giving a robot the ability to **see and spatially understand its environment** — turning raw camera / depth / LiDAR / radar streams into objects, poses, geometry, and semantic 3D structure the rest of the stack can act on. It is the sensory front-end of embodied AI: nearly every manipulation, navigation, and VLA system consumes its output. **In scope:** 2D/video object detection, segmentation & tracking; 6-DoF object pose estimation; depth / stereo / LiDAR / radar range perception & point-cloud processing; 3D scene understanding & reconstruction (semantic mapping, scene graphs, BEV/occupancy, neural rendering); active perception & visual servoing. **Out of scope (adjacent):** SLAM / state estimation *as a discipline* (A2 — though visual odometry, VIO and neural mapping straddle the boundary and are covered here as consumers); tactile/force sensing and multimodal fusion as standalone niches (A1 siblings); the downstream manipulation (A5) and navigation (A3) that act on perception.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Perception Engineer | Implements/tunes detection, segmentation, pose & depth pipelines under supervision; curates/annotates data; integrates perception libraries on real sensors. |
| **L2** | Perception / Computer Vision Engineer | Owns a perception subsystem end-to-end (sensor→detect/segment/pose→3D map); calibrates rigs; debugs on real hardware; ships to a deployment. |
| **L3** | Senior Perception Engineer | Designs the perception architecture; makes classical-geometry-vs-learned tradeoffs; sets accuracy/latency budgets and benchmarks; mentors. |
| **L4/L5** | Staff / Principal Perception Research Engineer | Sets the perception research agenda; advances 3D-vision / foundation-perception SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **CV/3D-perception-specific `✓`: EE/ECE is the strongest Tier-1 major of any perception niche** — image/signal processing, camera & sensor physics, and **LiDAR/radar DSP** (FMCW, range-Doppler/FFT) are directly load-bearing. **Applied Mathematics rises toward Tier 1** (projective geometry, SVD/least-squares, optimization are the theoretical spine) and **Physics rises** (optics, radiometry, image formation). **Add Photogrammetry / Geomatics / Geodesy / Remote-Sensing / Surveying as niche-specific Tier-2** — off the general robotics list but genuinely valued for point-cloud / SfM-MVS / 3D-reconstruction / HD-mapping roles. **Mechanical Engineering falls** here relative to its manipulation-niche prominence and stays Tier-2-with-evidence.

**Highly-valued undergraduate programs `✓`** — Michigan Robotics BSE (**EECS 442 Computer Vision** in-major), CMU BS Robotics (16-385 CV → 16-720), UPenn (CIS 580 Machine Perception; GRASP access), MIT (6.8301 undergrad CV; 6-4), Georgia Tech (CS 4476/6476), Stanford (CS231A/N are UG-accessible). ETH/TUM feed the niche through a heavy EE/CS + signal-processing core rather than a named UG robotics-vision track.

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI, EE, or ME with a **computer-vision / 3D-perception / SLAM** focus; also a Photogrammetry/Geomatics MS for the 3D-reconstruction & mapping slice.

**Highly-valued postgraduate programs — ranked by CV/3D-perception strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **CMU (RI) · Stanford · MIT · UPenn (GRASP)** | CMU has the deepest bench: **16-720 Computer Vision**, **16-825 Learning for 3D Vision** (Tulsiani), **16-822 Geometry-based Methods in Vision**, **16-824 Visual Learning & Recognition**, **16-833 SLAM** (Kaess) · Stanford **CS231A** *3D Perception→Reconstruction* (Savarese/Bohg) + **CS231N** · MIT **6.8300/6.8301 Advances in Computer Vision** + **16.485 VNAV** (Carlone — VIO/place-recognition/SLAM) · Penn **CIS 5800 Machine Perception** (Daniilidis) |
| Strong (geometric / SLAM powerhouses) | **ETH Zürich · TUM · U-Michigan · Imperial** | ETH **263-5902 Computer Vision** (Pollefeys) + 3D-Vision seminar + UZH/ETH **151-0632 Vision Algorithms for Mobile Robotics** (Scaramuzza — applied VO/VIO) · TUM **IN2228 Multiple View Geometry** (Cremers) + **IN2392 ML for 3D Geometry** (Angela Dai) · Michigan **EECS 442** + **ROB 530 Mobile Robotics** · Imperial Dyson Robotics Lab (Davison — MonoSLAM/KinectFusion lineage) |
| Present | **Georgia Tech · UC Berkeley · Oxford** | GT **CS 6476 CV** + **CS 7643 DL** · Berkeley **CS 280** · Oxford VGG (Zisserman — author of *Multiple View Geometry*) |

*(Oxford = vision-by-research via VGG, not a named taught track; ETH/TUM are elective-driven — check transcripts for the geometry/3D courses above.)*

**Highly-valued certifications `✓`** — Columbia **First Principles of Computer Vision** (Shree Nayar, 5-course Coursera spec covering camera/imaging, features, single- & multi-view 3D reconstruction, perception — **the most niche-relevant single credential**) · UPenn **Robotics: Perception** (Coursera, Daniilidis/Shi — two-view geometry, RANSAC, SfM + bundle adjustment, visual odometry) · **Udacity Sensor Fusion Engineer Nanodegree (ND313)** — *the* depth/LiDAR/radar credential (LiDAR PCL/RANSAC/clustering, radar FMCW/range-Doppler, EKF/UKF fusion; built with Mercedes-Benz) · ETH **Vision Algorithms for Mobile Robotics** (Scaramuzza, free — applied VO/VIO) · Stanford **CS231N + CS231A** (free public materials) · **OpenCV University** (CVDL Master) · **NVIDIA DLI** (CV for Industrial Inspection, Synthetic Data Generation for CV, and the **Isaac ROS** perception path — FoundationPose, FoundationStereo, nvblox) · DeepLearning.AI **CNN course** within the Deep Learning Specialization (the DL-vision backbone). *(No official ROS cert / no NVIDIA robotics exam — see grounding ref.)*

**Experience & portfolio** — L1: internship/academic; a working detection/segmentation or stereo-depth demo on a public benchmark. L2: 2–4 yr, a real-sensor perception subsystem (calibrated rig → 6-DoF pose or 3D map) with benchmark numbers + a sim-to-real or deployment project. L3: 5–8 yr, ≥1 real perception deployment led. L4/L5: 8+ yr and/or first-author papers (CVPR/ICCV/ECCV/CoRL/ICRA/RA-L).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and **C++** for real-time perception
- **Camera models & calibration** (intrinsics/extrinsics, distortion, hand-eye); coordinate frames (TF)
- **Classical CV & multi-view geometry**: features (SIFT/ORB), optical flow, epipolar/fundamental/essential matrix, homography, **stereo & triangulation, SfM, bundle adjustment**, RANSAC
- **Deep learning for vision**: CNNs & Vision Transformers; **object detection, semantic/instance segmentation, multi-object tracking**; PyTorch
- **6-DoF object pose estimation** from RGB-D / point clouds
- **Depth & range sensing**: stereo/structured-light/ToF; **LiDAR & point-cloud processing** (RANSAC, clustering, **ICP/registration**) with PCL / Open3D
- **3D representations & reconstruction**: point clouds/voxels/meshes/SDF, multi-view stereo
- **ROS 2** perception-stack integration on real sensors
- **State-estimation basics for perception**: Kalman/EKF, visual odometry
- Data curation, annotation & **evaluation metrics** (mAP, IoU/PQ, ADD(-S), Chamfer, ATE/RPE)

**Preferred / differentiating**
- **Visual foundation models**: DINOv2/v3, SAM / SAM2 / SAM3, CLIP open-vocab; frozen-backbone fine-tuning
- **Feed-forward 3D**: VGGT, DUSt3R/MASt3R, Depth Anything 3, FoundationStereo / FoundationPose
- **Neural rendering**: NeRF and **3D Gaussian Splatting**; splat-based SLAM & manipulation scene reps
- **BEV / occupancy networks** and **LiDAR–radar–camera fusion** (autonomous-driving perception)
- **Radar DSP** (FMCW, range-Doppler / FFT) — the sensor-physics slice
- **Spatial-reasoning VLMs** (SpatialVLM / RoboSpatial) — perception → language → action
- **Active perception & visual servoing** (next-best-view; IBVS/PBVS)
- **Event-based vision**; **synthetic-data generation** for perception
- Publications at **CVPR / ICCV / ECCV / CoRL / ICRA / RA-L**; real-world deployment experience

**Tools & tech stack** — *Languages:* Python, C++ · *CV/3D libs:* OpenCV, **PCL, Open3D**, COLMAP, Kornia, PyTorch3D · *DL:* PyTorch, MMDetection/Detectron2, Ultralytics YOLO, timm · *Middleware:* ROS 2, **Isaac ROS** (FoundationPose, FoundationStereo, nvblox), TF2 · *Foundation-perception:* DINOv3, SAM 3, Grounded-SAM 2, Depth Anything 3, VGGT, Sonata · *Sim / synthetic data:* Isaac Sim/Lab Replicator, Blender, NVIDIA Cosmos · *Sensors:* Intel RealSense, ZED, Ouster/Hesai LiDAR, TI mmWave radar, event cameras · *Datasets/benchmarks:* COCO/LVIS, nuScenes/Waymo, BOP, KITTI, ScanNet

**Bar by tier** — L1: solid on the required list on public benchmarks · L2: ships a real-sensor perception subsystem, calibrates rigs, fluent across the stack · L3: architects perception systems under latency/accuracy budgets, deep in ≥1 differentiating area (3D FMs, BEV/occupancy, or splat-SLAM) · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
CV/3D-perception slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** **linear algebra** — the single most load-bearing subject here (projective geometry, SVD, least squares) *(MIT 18.06, CS231A math primer)* · multivariable calculus · **probability & estimation** · **optimization / nonlinear least squares** (bundle-adjustment math) · **signal & image processing** — rises for this niche (filtering, sampling, Fourier) *(EECS 442, FPCV)* · Python + **C++** · data structures & algorithms.
- **Core robotics:** **state estimation & filtering** — Kalman/EKF/UKF/particle, factor graphs *(ROB 530, Udacity Sensor Fusion)* · **SLAM & localization**, coordinate frames/TF, sensor models & intrinsic/extrinsic **calibration** *(CMU 16-833, MIT 16.485, ROB 530)* · **ROS 2** + perception stack (Isaac ROS, PCL, Open3D).
- **Niche-specific:** image formation & camera models / calibration *(FPCV, CS231A, Penn CIS 5800)* · feature detection/description/matching, optical flow *(16-720, EECS 442)* · **multi-view geometry** — epipolar geometry, fundamental/essential matrix, homography, **stereo & triangulation, SfM, bundle adjustment** *(CMU 16-822, TUM IN2228, Penn CIS 5800, Robotics: Perception)* · **depth & range sensing** — stereo/structured-light/ToF, **LiDAR & point clouds** (RANSAC, clustering, **ICP/registration**), **radar (FMCW/Doppler)** *(Udacity Sensor Fusion)* · **deep learning for vision** — CNNs, ViTs, **detection, segmentation, MOT** *(CS231N, MIT 6.8300, GT CS 6476/7643)* · **6-DoF object pose estimation** *(CS231A, FoundationPose)* · **3D representations & reconstruction** — point clouds/voxels/meshes/SDF, multi-view stereo, learned 3D, differentiable rendering *(CMU 16-825, TUM IN2392)* · **visual odometry & visual-inertial navigation** *(ETH VAMR, MIT 16.485)* · **3D scene understanding** — semantic mapping, scene graphs, BEV/occupancy, open-vocabulary · **active perception & visual servoing** — next-best-view, IBVS/PBVS *(the `[S]` sub-area)*.
- **Frontier/advanced `⏱`:** visual foundation models (DINOv2/v3, SAM/SAM2/3, CLIP) · 3D foundation models (VGGT, FoundationStereo, FoundationPose, DUSt3R/MASt3R) · neural rendering (NeRF, 3D Gaussian Splatting, Gaussian-Splat SLAM — DROID-SLAM/PIN-SLAM lineage) · BEV/occupancy networks & learned/neural SLAM · spatially-grounded 3D reasoning for VLAs · event-based vision.

## 6. Training Programme Design & Duration `✓`
CV/3D-perception-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), specialization + capstone tuned to perception.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths (esp. **linear algebra**), Python/C++, classical ML, **signal/image processing** | 2.0 mo | 6 mo | 300 | ML & maths fluency |
| 2. Core robotics | Coordinate frames/calibration, **state estimation & SLAM basics**, **ROS 2** + perception stack | 2.0 mo | 6–7 mo | 320 | Command sensors + a perception node in sim + real |
| 3. AI/ML depth | Deep learning, **CNNs/ViTs**, detection/segmentation/tracking | 2.0 mo | 6 mo | 300 | Deep-learning vision fluency |
| 4. **CV & 3D-perception specialization** | Multi-view geometry, stereo/LiDAR/radar, 6-DoF pose, 3D reconstruction, VO/VIO, foundation-perception (SAM3/DINOv3/VGGT), Gaussian-splat 3D | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Real-sensor 3D scene-understanding stack (detect→pose→reconstruct→semantic map) + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior perception engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** Perception's "SAM2/DINO moment" is in full swing: the field is converging on feed-forward, promptable, pose-free 3D foundation models that emit geometry + semantics in one pass. `🆕` = 2026 release.

- **Promptable 2D/video segmentation, detection & tracking (the SAM/DINO lineage):** **SAM 3** (Meta, Nov 2025 — Promptable Concept Segmentation: segments/tracks *every* instance of a text/exemplar concept, ~2× prior SOTA on SA-Co; the open-vocab workhorse) · **DINOv3** (Meta, Aug 2025 — 7B ViT, "Gram Anchoring" fixes dense-feature decay; the default frozen backbone) · **Grounded SAM 2 / SAM 2.1** (open-set detect → segment → video-mask-propagate — the standard zero-shot detect-segment-track pipeline for robots) · **RF-DETR / YOLO26** (NMS-free real-time detection; RF-DETR on a DINOv2 backbone, ~54.7 mAP <5 ms).
- **6-DoF object pose & tracking:** **FoundationPose** (NVIDIA, CVPR 2024 — still the anchor: unified model-based + model-free zero-shot 6D pose *and* tracking of novel objects) · **SAM-6D / Co-op / SingRef6D** (2025 — pose from CAD or a single RGB reference) · **ActivePose** (Sept 2025 — closes perception with viewpoint control) · **BOP Challenge 2024/2025** (the scoreboard; added model-free onboarding-from-video, new **BOP-H3** & **BOP-Industrial** sets; MUSE beats CNOS).
- **Feed-forward 3D reconstruction (the "SfM / bundle-adjustment killers"):** **DUSt3R / MASt3R** (2024 — regress dense pointmaps + relative pose from uncalibrated pairs; the paradigm) · **VGGT** (Meta/Oxford, CVPR 2025 — one 1.2B forward pass → intrinsics, extrinsics, depth, point maps, 2D tracks; the reference architecture) · **MapAnything** (Sept 2025 — universal feed-forward *metric* 3D) · **π³ / Fast3R / Dens3R / FastVGGT** (scale to thousands of frames / training-free speedups) · **WorldMirror** (Oct 2025) · 🆕 **PanoVGGT / VGGT-in-the-Wild / EO-VGGT** (2026 — panoramic / distractor-robust / satellite fan-out).
- **Depth foundation models (mono → multi-view):** **Depth Anything 3** (Nov 2025 — consistent geometry from *any number* of views, plain DINO backbone + single depth-ray target; converging with feed-forward 3D) · **Depth Anything V2** (NeurIPS 2024 — the most-used mono-depth backbone) · **Video Depth Anything** (CVPR 2025 — temporally consistent over >5-min clips) · **Prompt Depth Anything** (LiDAR-prompted 4K metric) · **UniDepthV2** (universal metric depth).
- **LiDAR / point-cloud / radar 3D:** **Sonata** (Meta, CVPR 2025 — self-supervised Point Transformer V3; the emerging point-cloud FM backbone) · **Concerto** (Oct 2025 — 2D-3D self-distillation beating DINOv2+Sonata individually) · **Point Transformer V3 / Point-JEPA** · **MetaOcc** (Jan 2025), **DORACAMOM**, 🆕 **4DRC-OCC** (2026 — 4D-radar + camera 3D semantic occupancy in adverse weather; benchmarks **Occ3D / SSCBench**) · 🆕 **DriveX @ CVPR 2026** (FMs + cooperative driving perception).
- **3D scene representation & open-vocab understanding:** **SAM 3D** (Meta, Nov 2025 — single image → full 3D object; "SAM for 3D") · **3D Gaussian Splatting for manipulation** — **GaussianGrasper, GraspSplats, ManiGaussian, POGS** (ICRA 2025), **SplatSim** (real2sim2real) — splatting is now the go-to manipulation scene rep · **GWM (Gaussian World Models)** + 🆕 **GaussianDream** (2026 — feed-forward 3D Gaussian world models for policy learning) · **ConceptGraphs** (open-vocab 3D scene graphs fusing CLIP/2D-FM features into geometry) + **HOV-SG / BBQ** — the semantic-map standard.
- **Spatial-reasoning VLMs (3D understanding meets language):** **SpatialVLM** (Jan 2024 — seeded metric spatial reasoning in VLMs) · **RoboSpatial** (CVPR 2025 — real indoor/tabletop spatial dataset) · **SpatialLM** (2025 — LLM ingests point clouds → structured 3D layout) · **SpatialThinker** (Nov 2025 — RL with dense spatial rewards) · 🆕 **SpatialAct / SaPaVe** (2026 — spatial-reasoning-to-action inside VLAs).
- **Active perception & visual servoing:** 🆕 **OA-NBV** (2026 — occlusion-aware next-best-view for mobile robots) · 🆕 **SaPaVe** (2026 — active perception + manipulation folded into a VLA) · trend: unified continuous **next-best-view + visual-servo** control driven by uncertainty over neural/Gaussian fields, conditioned on VLA foundation models (π0, GR00T N1).

*Net trend: perception is collapsing into feed-forward, promptable, pose-free 3D foundation models (VGGT / Depth Anything 3 / SAM 3 / Sonata) that emit geometry + semantics in one pass, then fuse with language via spatial-reasoning VLMs and render into Gaussian-splat scene reps for manipulation and active perception. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | **Camera calibration + stereo depth** from a RealSense/ZED pair | Camera models, calibration, rectification; dense disparity → clean metric depth map |
| Foundational | **2D detection/segmentation** fine-tune (YOLO / Detectron2) on a custom set | DL vision pipeline; target mAP/IoU on a held-out split |
| Applied | **SfM/MVS reconstruction** with COLMAP → compare to a feed-forward **VGGT/DUSt3R** pass | Multi-view geometry vs. learned 3D; metric point cloud from an image set |
| Applied | **6-DoF pose estimation** on real objects (**FoundationPose** / a BOP object) → grasp hand-off | Pose pipeline; ADD(-S) / BOP score; drives a real pick |
| Applied | **LiDAR point-cloud perception**: ground removal (RANSAC) + Euclidean clustering + tracking | Point-cloud stack; detect/track objects from a LiDAR stream |
| Advanced | **Visual(-inertial) odometry** on a mobile/handheld rig | VO/VIO; drift-bounded trajectory vs. ground truth (ATE/RPE) |
| Advanced | **Open-vocab 3D scene graph** (Grounded-SAM 2 + DINOv3 + depth → ConceptGraphs-style map) | Fuse 2D foundation features into 3D semantics; query objects by language |
| Advanced | **3D Gaussian-Splat reconstruction** of a tabletop → novel-view render / feature splat | Neural rendering; photorealistic + queryable scene representation |
| Capstone | **Real-sensor 3D scene-understanding stack** on a robot: detect→segment→6-DoF pose→reconstruct→semantic map, wired into **ROS 2** | End-to-end perception front-end; a live semantic 3D map feeding a downstream task |

## 9. Required Lab Setup / Hardware / Resources
- **Cameras / RGB-D:** Intel **RealSense** D435/D455/D405 · **Stereolabs ZED** 2i/X · Luxonis OAK-D · industrial 3D (**Zivid**, Photoneo) · machine-vision (Basler / FLIR).
- **LiDAR:** **Ouster** OS1 · Hesai / Velodyne · **Livox** (solid-state, budget) · RPLIDAR (2D, budget).
- **Radar:** **TI mmWave** (AWR/IWR FMCW eval boards) · Continental ARS.
- **Event cameras:** iniVation DVXplorer · Prophesee EVK.
- **IMU / rigs:** VIO-grade IMU (VectorNav / Xsens); handheld & mobile capture rigs.
- **Compute:** RTX 4090 / A6000 workstation; **NVIDIA Jetson Orin** for on-robot inference; A100/H100 for foundation-model training.
- **Software / libs:** OpenCV · **PCL · Open3D** · COLMAP · PyTorch (+3D, Kornia) · MMDetection / Detectron2 · Ultralytics · ROS 2 + **Isaac ROS** (FoundationPose, FoundationStereo, nvblox) · Isaac Sim/Lab **Replicator** + Blender (synthetic data).
- **Datasets & benchmarks:** COCO / LVIS (2D) · **nuScenes · Waymo Open · KITTI · Argoverse 2** (driving/LiDAR) · **BOP** (6-DoF pose) · **ScanNet(++) · Matterport3D · Replica** (3D scenes) · **Occ3D / SSCBench** (occupancy) · Middlebury / ETH3D (stereo/MVS) · TUM-RGBD / EuRoC (VO/VIO) · SA-Co (SAM 3).

## 10. Partnerships & Ecosystem
- **Sensor / hardware vendors:** Intel RealSense · Stereolabs · Luxonis · Ouster · Hesai · Livox · Texas Instruments (mmWave radar) · Prophesee / iniVation (event) · Zivid / Photoneo · Basler / FLIR.
- **Sim / compute:** NVIDIA (Isaac ROS/Sim, DLI, Inception) · Meta AI / FAIR (DINO, SAM, Sonata, VGGT lineage).
- **Academic labs (perception powerhouses):** CMU RI (Kaess / Tulsiani) · Stanford (Savarese / Bohg) · MIT SPARK (Carlone) · UPenn (Daniilidis) · ETH CVG (Pollefeys) + UZH RPG (Scaramuzza) · TUM (Cremers / Dai) · Imperial Dyson Robotics (Davison) · Oxford VGG (Zisserman).
- **Open-source communities:** OpenCV · Open3D / PCL · ROS (Isaac ROS, perception_pcl) · Hugging Face (SAM / DINO / Depth-Anything hubs) · COLMAP.
- **Benchmarks / consortia:** **BOP Challenge** · nuScenes / Waymo Open Dataset · KITTI · ScanNet · the CVPR/ICCV workshop circuit (DriveX, BOP).
- **Industry programs:** NVIDIA Inception · autonomous-driving perception teams · industrial machine-vision (Cognex / Keyence-adjacent).

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (calibration, multi-view geometry, detection, 3D reconstruction).
- **Project rubrics** with objective metrics: detection **mAP**, segmentation **IoU/PQ**, 6-DoF pose **ADD(-S) / BOP score**, depth & reconstruction **RMSE / Chamfer**, VO/SLAM **ATE/RPE**, and a **latency budget** (ms/frame).
- **Standardized benchmarks** as portable evidence: COCO/LVIS, **BOP**, nuScenes/Waymo, KITTI, ScanNet, Occ3D — with leaderboard placements.
- **Recognized certifications as evidence:** First Principles of CV; Robotics: Perception; Udacity Sensor Fusion ND; an Isaac ROS / DLI perception credential.
- **Senior tiers:** portfolio + system-design interview (design a perception stack under a latency/accuracy budget) + live debugging (calibration / point-cloud registration).

## 12. Adjacent & Related Niches
Feeds nearly the entire stack: it is the sensory front-end for **A5 manipulation**, **A3 navigation**, and **A7 VLAs**. Pairs most closely with **A2 state estimation & SLAM** (VO/VIO and neural mapping share its geometry), the **A1 siblings** tactile & multimodal fusion, **A6 self-supervised representation learning**, and **A8 simulation / synthetic data**; the active-perception & visual-servoing sub-area ties into **A4 control**. Load-bearing on the **C3 AMR**, **C6 aerial**, **C5 humanoid** and **C1 fixed-arm (bin-picking)** platform tracks and the **B10 autonomous-vehicle**, **B1 manufacturing**, **B2 logistics** and **B14 inspection** verticals. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A1 (`✓`). §7 stamped mid-2026 — re-research before publish.*
