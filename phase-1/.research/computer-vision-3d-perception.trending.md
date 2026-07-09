# Computer Vision & 3D Scene Understanding for Robotics — Trending Research (mid-2026)

The named models/datasets people are actively building on in 2024-2026. **[2026]** flags 2026 releases. Biased toward newest.

---

## 1. 2D/Video Segmentation, Detection & Tracking — the SAM/DINO lineage
- **SAM 3** (Meta, Nov 2025) — introduces Promptable Concept Segmentation: segments/tracks *every* instance of a text- or exemplar-specified concept in image/video; ~2x prior SOTA on the SA-Co benchmark. The new open-vocab workhorse. https://arxiv.org/abs/2511.16719
- **DINOv3** (Meta, Aug 2025) — 7B ViT trained on 1.7B unlabeled images; "Gram Anchoring" fixes dense-feature decay. The default frozen backbone for detection/depth/segmentation without finetuning. https://arxiv.org/abs/2508.10104
- **Grounded SAM 2 / SAM 2.1** — open-set detection (Grounding DINO) + pixel segmentation + video mask propagation; the standard zero-shot detect-segment-track pipeline for robotics. https://pyimagesearch.com/2026/01/19/grounded-sam-2-from-open-set-detection-to-segmentation-and-tracking/
- **RF-DETR / YOLO26 (YOLOv12)** — NMS-free real-time detection (RF-DETR uses a DINOv2 backbone, ~54.7% mAP <5ms); current production-detector standard. https://blog.roboflow.com/best-object-detection-models/

## 2. 6-DoF Object Pose Estimation & Tracking
- **FoundationPose** (NVIDIA, CVPR 2024) — still the anchor: unified model-based + model-free zero-shot 6D pose *and* tracking of novel objects. https://github.com/NVlabs/FoundationPose
- **SAM-6D / Co-op / SingRef6D** (2025) — novel-object pose from CAD or a single RGB reference; push zero-shot onboarding. https://arxiv.org/pdf/2509.21927
- **ActivePose** (Sept 2025) — active 6D pose estimation + tracking, closing perception with viewpoint control for manipulation. https://arxiv.org/pdf/2509.11364
- **BOP Challenge 2024/2025** (dataset/benchmark) — added model-free onboarding-from-video and a harder 6D detection task; new **BOP-H3** (HOT3D, HOPEv2, HANDAL) and **BOP-Industrial** (XYZ-IBD, ITODD-MV, IPD) sets; MUSE beats 2023's CNOS. The field's scoreboard. https://arxiv.org/abs/2504.02812

## 3. Feed-Forward 3D Reconstruction — the "SfM/bundle-adjustment killers"
- **DUSt3R / MASt3R** (2024) — origin: regress dense pointmaps + relative pose from uncalibrated image pairs. The paradigm everything else extends.
- **VGGT (Visual Geometry Grounded Transformer)** (Meta/Oxford, CVPR 2025) — single 1.2B-param forward pass jointly predicts intrinsics, extrinsics, depth, point maps, and 2D tracks. The reference architecture. https://arxiv.org/abs/2507.08448
- **MapAnything** (Sept 2025) — universal feed-forward *metric* 3D reconstruction with optional priors. https://arxiv.org/pdf/2509.13414
- **π³, Fast3R, Dens3R, FastVGGT** (2025) — scale to thousands of frames / training-free acceleration of VGGT. https://arxiv.org/pdf/2509.02560
- **WorldMirror** (Oct 2025) — any-prior-prompting universal 3D world reconstruction. https://arxiv.org/pdf/2510.10726
- **[2026] PanoVGGT** (Mar), **VGGT-in-the-Wild** distractor-free (June), **EO-VGGT** satellite multi-view (July) — the VGGT family fans out to panoramic/robust/remote-sensing. https://arxiv.org/html/2603.17571v1

## 4. Depth Foundation Models (mono → multi-view)
- **Depth Anything 3 (DA3)** (Nov 2025) — spatially consistent geometry from *any number* of views, with/without poses; plain DINO backbone + single depth-ray target. The new depth frontier, converging with feed-forward 3D. https://arxiv.org/abs/2511.10647
- **Depth Anything V2** (NeurIPS 2024) — still the most-used mono-depth backbone. https://github.com/DepthAnything/Depth-Anything-V2
- **Video Depth Anything** (CVPR 2025 Highlight) — temporally consistent depth over >5-min videos. https://github.com/DepthAnything/Video-Depth-Anything
- **Prompt Depth Anything** (Dec 2024) — low-res LiDAR "prompts" 4K metric depth; **UniDepthV2** (2025) — universal metric depth across cameras.

## 5. LiDAR / Point-Cloud / Radar 3D Perception
- **Sonata** (Meta, CVPR 2025 Highlight) — self-supervised Point Transformer V3; the emerging point-cloud foundation backbone. https://github.com/facebookresearch/sonata
- **Concerto** (Oct 2025) — joint 2D-3D self-distillation; spatial reps beating DINOv2+Sonata individually. https://arxiv.org/html/2510.23607v1
- **Point Transformer V3 / Point-JEPA** — the dominant point backbone and JEPA-style SSL variant.
- **MetaOcc** (Jan 2025), **[2026] 4DRC-OCC** (Mar), **DORACAMOM** — 4D-radar + camera fusion for 3D semantic occupancy in adverse conditions; benchmarks **Occ3D**, **SSCBench**. https://arxiv.org/pdf/2501.15384
- **[2026] DriveX @ CVPR 2026** — workshop consolidating foundation models + cooperative perception for driving (occupancy, 3D detection, scene understanding). https://drivex-workshop.github.io/cvpr2026/

## 6. 3D Scene Representation & Open-Vocab Understanding for Robots
- **SAM 3D** (Meta, Nov 2025) — generative single-image → full 3D object (shape, texture, layout); "SAM for 3D." https://ai.meta.com/research/dinov3/
- **3D Gaussian Splatting for manipulation** — **GaussianGrasper**, **GraspSplats** (2025), **ManiGaussian**, **POGS** (ICRA 2025, persistent object tracking), **SplatSim** (real2sim2real). Splatting is now the go-to manipulation scene rep. https://arxiv.org/pdf/2503.05189
- **GWM (Gaussian World Models)** (2025) and **[2026] GaussianDream** (May) — feed-forward 3D Gaussian *world models* for policy learning. https://arxiv.org/pdf/2605.20752
- **ConceptGraphs** — open-vocab 3D scene graphs fusing CLIP/2D-foundation features into geometry for planning; extended by **HOV-SG**, **BBQ**. The semantic-map standard. https://concept-graphs.github.io/

## 7. Spatial Reasoning VLMs (3D understanding meets language)
- **SpatialVLM** (Jan 2024) — seeded the "endow VLMs with metric spatial reasoning" line. https://arxiv.org/abs/2401.12168
- **RoboSpatial** (CVPR 2025) — large real indoor/tabletop dataset (3D scans + egocentric) teaching spatial understanding to 2D/3D VLMs. https://arxiv.org/abs/2411.16537
- **SpatialLM** (2025, ManyCore) — LLM that ingests point clouds and outputs structured 3D layout.
- **SpatialThinker** (Nov 2025) — RL with dense spatial rewards for 3D reasoning; **[2026] SpatialAct** (May), **SaPaVe** (Mar) push spatial-reasoning-to-action inside VLAs. https://arxiv.org/pdf/2511.07403

## 8. Active Perception & Visual Servoing
- **[2026] OA-NBV** (Mar) — occlusion-aware next-best-view planning for mobile-robot active perception. https://arxiv.org/abs/2603.11072
- **[2026] SaPaVe** (Mar) — active perception + manipulation folded into a VLA. https://arxiv.org/pdf/2603.12193
- Trend: unified continuous **next-best-view + visual-servo** control driven by uncertainty over neural/Gaussian fields, increasingly conditioned on VLA foundation models (π0, GR00T N1).

---

**Net trend:** Perception is converging on *feed-forward, promptable, pose-free 3D foundation models* (VGGT / Depth Anything 3 / SAM 3 / Sonata) that emit geometry + semantics in one pass, then get fused with language via spatial-reasoning VLMs and rendered into Gaussian-splat scene reps for manipulation and active perception.
