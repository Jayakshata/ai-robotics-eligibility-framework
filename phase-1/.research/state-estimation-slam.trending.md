# Trending Research — State Estimation, SLAM & Mapping (mid-2026)

Scope: state estimation (EKF/UKF/factor graphs), localization, SLAM (visual/LiDAR/multi-sensor), metric/semantic/topological + neural/implicit mapping. Biased to 2025–2026. **[2026]** = flagged 2026 release.

## 1. Geometric Foundation Models → feed-forward dense SLAM (the dominant shift)
The "SAM2/DINO moment" of this niche. Feed-forward transformers regress dense 3D points + poses directly from uncalibrated RGB, replacing hand-built front-ends.
- **DUSt3R / MASt3R** — the founding GFMs: image pair → dense pointmap + poses, no calibration; MASt3R adds a matching head. Everything below builds on these. ([awesome-dust3r](https://github.com/ruili3/awesome-dust3r))
- **VGGT** — CVPR 2025 **Best Paper**; single large transformer predicting cameras + 3D structure jointly; the backbone most 2025–26 systems adopt. **VGGT-Omega** was a CVPR 2026 **Best Paper finalist**. **[2026]** ([tandfonline](https://www.tandfonline.com/doi/full/10.1080/10095020.2025.2597491))
- **MASt3R-SLAM** — CVPR 2025; real-time (~15 FPS) monocular dense SLAM on in-the-wild video, no parametric camera model. ([GitHub](https://github.com/rmurai0610/MASt3R-SLAM))
- **SLAM3R** — CVPR 2025 Highlight; feed-forward 3D-point regression from video, no explicit camera params. ([GitHub](https://github.com/pku-vcl-3dv/slam3r))
- **VGGT-SLAM / VGGT-SLAM 2.0** — chains VGGT submaps via **SL(4) 15-DoF projective factor-graph optimization** in GTSAM; v2.0 runs real-time onboard a Jetson Thor. NeurIPS 2026. **[2026]** ([GTSAM](https://gtsam.org/2026/06/24/vggt-slam.html), [arXiv 2601.19887](https://arxiv.org/pdf/2601.19887))
- **MASt3R-Fusion** — tightly fuses the feed-forward model with IMU + GNSS for full-functionality SLAM (Sep 2025). ([arXiv](https://arxiv.org/html/2509.20757v1))
- **FoundationSLAM** — AAAI 2026; depth-foundation-model-guided end-to-end dense SLAM (hybrid flow net + bi-consistent BA). **[2026]**
- **ViPE (NVIDIA)** — 2025 video pose engine; DROID-style BA + monocular depth + segmentation, used as a data engine for spatial AI.
- **TALO** (Dec 2025) / **CoMo3R-SLAM**, **PRISM-SLAM** (2026) — push GFMs toward globally consistent, scale-aware, multi-agent online reconstruction. **[2026]**

## 2. 3D Gaussian Splatting SLAM (photorealistic dense mapping)
3DGS displaced NeRF as the map representation — real-time, differentiable, editable.
- **SplaTAM, MonoGS, Photo-SLAM** — CVPR 2024 foundations (RGB-D / monocular Gaussian SLAM). ([Awesome-3DGS-SLAM](https://github.com/KwanWaiPang/Awesome-3DGS-SLAM))
- **LoopSplat** — 3DV 2025; loop closure by directly registering 3D Gaussian submaps.
- **Hi-SLAM2** — T-RO 2025; geometry-aware Gaussian SLAM for fast monocular reconstruction.
- **Splat-LOAM** — ICCV 2025; Gaussian-splatting LiDAR odometry + mapping.
- **4DTAM** (CVPR 2025) / **DyGS-SLAM** (ICCV 2025) / **D²GSLAM** (4D dynamic, 2026) — non-rigid & dynamic-scene Gaussian SLAM. **[2026]**
- **SemGauss-SLAM, OpenGS-SLAM, Hier-SLAM++, GSFF-SLAM** — semantic/open-set Gaussian mapping.
- **Spectral GS-SLAM** — observability-aware, degeneracy-robust tracking (2026). **[2026]** ([arXiv 2606.21258](https://arxiv.org/pdf/2606.21258))
- A dedicated **3DGS-SLAM survey** appeared in 2026. **[2026]**

## 3. Learning-based VO/SLAM backbones (efficient, deployable)
- **DROID-SLAM** — still the reference differentiable dense-BA SLAM; baseline everyone beats.
- **DPVO / DPV-SLAM** — NeurIPS 2023 / ECCV 2024; sparse-patch VO, ~DROID accuracy at 3× speed, 1/3 VRAM; the practical deep-VO of choice. ([arXiv 2408.01654](https://arxiv.org/pdf/2408.01654))
- **DINO-VO** — 2025; feature-based VO leveraging DINO visual-foundation features. ([arXiv 2507.13145](https://arxiv.org/pdf/2507.13145))
- **DEVO** — DPVO adapted to event cameras.

## 4. LiDAR & multi-sensor state estimation
FAST-LIO-lineage tight coupling remains production standard; frontier is continuous-time + degeneracy-robustness.
- **Traj-LIO / CTE-MLO** — resilient multi-LiDAR/multi-IMU estimators via sparse Gaussian-process continuous-time; CTE-MLO in T-FR 2025. ([arXiv 2402.09189](https://arxiv.org/pdf/2402.09189))
- **GLO (General LiDAR-Only Odometry)** — RAL; high-efficiency low-drift LiDAR odometry.
- **LVI-GS, SR-LIVO, LVIO-Fusion** — tightly-coupled LiDAR-visual-inertial, degeneracy-aware. GPS-denied LiDAR-SLAM survey (IET 2025).

## 5. Factor graphs & classical estimation (still the optimization backbone)
- **GTSAM / iSAM2** — incremental Bayes-tree smoothing at 100+ Hz; substrate under most systems above.
- **Manifold/Lie Kalman Filter hierarchy** — new GTSAM formalization, applied to legged estimation (2026 series). **[2026]** ([GTSAM](https://gtsam.org/2026/03/17/legged-state-estimation-part2.html))
- **GP motion-prior continuous-time factors** & **chordal-sparsity globally-optimal estimation** — 2026 arXiv advances toward certifiable/continuous factor graphs. **[2026]** ([arXiv 2605.09073](https://arxiv.org/pdf/2605.09073), [2605.30617](https://arxiv.org/pdf/2605.30617))

## 6. Legged / humanoid proprioceptive estimation
Contact-aided **Invariant EKF (Hartley et al.)** is the standard; 2025–26 trend = learned/iterated variants.
- **CoCo-InEKF** (learned contact covariances), **Iterated InEKF**, **OCELOT**, **InEKFormer**, and **proprioceptive invariant estimation for humanoids on non-inertial ground** — all 2025–26. **[2026]** ([arXiv 2605.15122](https://arxiv.org/pdf/2605.15122), [2606.19512](https://arxiv.org/html/2606.19512v1))

## 7. Semantic / open-vocabulary / topological mapping
Convergence with VLMs + embodied AI; "open-world" scene graphs replace fixed-class maps.
- **Hydra** (RSS 2022) + **ConceptGraphs** (ICRA 2024) — real-time 3D scene-graph foundations. ([ieee](https://ieeexplore.ieee.org/document/10610243/footnotes))
- **DualMap, OpenIN, KM-ViPE** (2025) — online open-vocabulary semantic mapping/SLAM for language navigation in dynamic scenes.
- **INHerit-SG, FOUND-IT, Affordance-RAG** (2026) — foundation-model-first, task-driven hierarchical scene graphs with retrieval. **[2026]** ([arXiv 2605.25371](https://arxiv.org/pdf/2605.25371))

## 8. Place recognition / loop closure (foundation-feature era)
- **AnyLoc, SALAD, MegaLoc, SuperPlace** — DINOv2/foundation-feature global descriptors; near-universal VPR. AnyLoc now plugged into **DPV-SLAM** loop closure (Jan 2026). **[2026]** ([arXiv 2601.02723](https://arxiv.org/abs/2601.02723), [2506.13073](https://arxiv.org/pdf/2506.13073))

## 9. Datasets & benchmarks (newest)
- **GrandTour** — ETH legged-robot in-the-wild dataset; synced multi-LiDAR/multi-camera/IMU + full proprioception (2026). **[2026]** ([arXiv 2602.18164](https://arxiv.org/pdf/2602.18164))
- **TAIL / TAIL-Plus** — deformable granular-terrain legged SLAM; **FusionPortableV2** — cross-platform generalized SLAM; **4Seasons** — long-term seasonal AV localization (IJCV 2024).
- **SMAPPER** platform (2025) & **"Sensor Configuration Matters"** quadruped eval (2026) — systematic multimodal-SLAM benchmarking. **[2026]** ([arXiv 2606.19067](https://arxiv.org/html/2606.19067))

---
**Net trend:** SLAM is being rebuilt on geometric foundation models (DUSt3R→VGGT) with 3D-Gaussian maps and factor-graph back-ends, converging with VLM-driven open-vocabulary scene graphs toward real-time, calibration-free, semantically-grounded spatial AI for embodied robots.
