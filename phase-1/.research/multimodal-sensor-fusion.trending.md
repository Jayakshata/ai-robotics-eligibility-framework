# Multimodal Sensor Fusion — Trending Research (mid-2026)

Scope: multi-sensor fusion (camera + LiDAR + proprioceptive + force), event/neuromorphic vision. Focus on the named models, datasets, and methods people are actively building on, biased to 2025–2026. **[2026]** flags a 2026 release.

## 1. Unified self-supervised fusion backbones (the "DINO/SAM" of fusion)
The center of gravity: one masked-autoencoder pretrained across all sensors, producing a shared representation others fine-tune.
- **OctoSense** **[2026]** — late-fusion masked-autoencoder with per-modality tokenizers over stereo RGB + event + thermal + LiDAR + IMU + GPS + proprioception; open-source rig + 59 hrs/2,474 km. Beats image-only foundation models on flow/depth/segmentation/ego-motion and degrades gracefully at night. ECCV 2026. arxiv 2606.27317
- **UniPAD** — 3D differentiable-rendering SSL pretraining for camera/LiDAR/fusion; +6.9 NDS, the reference recipe for "pretrain once, fuse anything." arxiv 2310.08370
- **Sparsh / Sparsh-X** — Meta's self-supervised touch backbone; Sparsh-X (2025) is the first multisensory touch model spanning image+audio+motion+pressure. The tactile analog of DINO. arxiv 2410.24090, 2506.14754

## 2. Multimodal VLA policies — sensors as first-class modalities/experts
Fastest-moving area: bolt force/tactile/exotic sensors onto vision-language-action models as extra token streams or MoE experts.
- **OmniVLA** **[2026]** — unifies infrared + mmWave radar + acoustic via "sensor-masked images"; 84% success, +59% vs RGB-only. First VLA to fuse non-RGB sensing this broadly. arxiv 2511.01210
- **MuseVLA** **[2026]** — adaptive multimodal-sensing VLA that gates which sensors to attend to per task. arxiv 2606.17598
- **ForceVLA** — treats 6-axis force as a first-class modality via a force-aware Mixture-of-Experts (FVLMoE); ships ForceVLA-Data (synced vision+proprioception+force). NeurIPS 2025. Spawned a family: **ForceVLA2** **[2026]** (hybrid force-position control, 2603.15169), **FAVLA** **[2026]** (fast-slow force-adaptive, 2602.23648), **FAWAM** **[2026]** (force-aware world model, 2606.08555), **ForceFlow** **[2026]** (contact-driven flow matching, 2605.11048). arxiv 2505.22159
- **DreamTacVLA / DAM-VLA** **[2026]** — tactile-predictive and decoupled-asynchronous multimodal VLAs for contact-rich control. arxiv 2606.12105
- **Reactive Diffusion Policy** — slow-fast visual-tactile policy; the go-to for high-frequency contact reactivity.
- Context: generalist policies **π0.7** and world-model locomotion (**FALCON**, loco-manipulation, 2512.04381) fuse proprioception as standard.

## 3. Camera–LiDAR–radar fusion & occupancy (driving / mobile robots)
Mature core, now optimizing efficiency, occupancy, and robustness.
- **BEVFusion** lineage — still the standard camera+LiDAR BEV baseline; two dominant paradigms are unified-BEV and token-level cross-modal attention.
- **GaussianFormer-2 / MR-Occ / MS-OCC** — probabilistic-Gaussian and multi-resolution camera-LiDAR 3D semantic occupancy; occupancy is the field's convergence representation. arxiv 2412.04384, 2412.20480
- **4D-radar fusion surge**: **R4Det** **[2026]** (2603.11566), Wavelet multi-view 4D-radar+camera (2512.22972), and **4D Radar Meets LiDAR & Camera** **[2026]** cooperative perception under adverse weather (2606.00416). Radar is the trending "cheap all-weather" third modality; **CVFusion** (ICCV 2025) is a key method.
- **Robustness under sensor failure** is now its own subfield: **"Can BEV Perception Gracefully Degrade under Sensor Failures?"** **[2026]** (2605.30983) and **SEF-MAP** **[2026]** subspace-expert fusion for robust HD-map prediction (2602.21589).

## 4. Tactile & visuo-tactile foundation models
Cross-sensor generalization is the theme — one encoder across heterogeneous touch sensors.
- **AnyTouch / AnyTouch 2** **[2026]** — unified static-dynamic representation across multiple visuo-tactile sensors (ICLR 2025; v2 adds dynamic perception, 2602.09617).
- **UniTouch / T3 / UniT** — align touch with CLIP image/text embeddings via sensor-specific tokens for zero-shot tactile tasks.
- **Tac-DINO** **[2026]** — vision-tactile features via patch alignment (2606.12069); **Visuo-Tactile World Models** **[2026]** (2602.06001); **SARL** spatially-aware visuo-tactile SSL (2512.01908).
- **T-Rex** **[2026]** tactile-reactive dexterous manipulation (2606.17055) and multi-resolution tactile imitation learning (2606.06281).

## 5. Event-based / neuromorphic vision
The fastest-rising frontier — asynchronous, low-latency sensing for high-speed/low-light regimes, increasingly fused with RGB/LiDAR and language.
- **Event MLLMs**: **EventGPT** (first event-stream LLM, CVPR 2025, 2412.00832), **EventVL** (2501.13707), **EventFlash** **[2026]** efficient event MLLM (2602.03230), **RE-VLM** **[2026]** dual-stream RGB+event VLM (CVPR 2026, 2605.19329), **EventDrive** **[2026]** event VLM for driving (2606.18242).
- **Benchmarks**: **EventBench** comprehensive event-MLLM benchmark (2511.18448); **Event-LAB** standardized neuromorphic localization (2509.14516).
- **SNN control**: fully neuromorphic autonomous drone flight (Delft, Science Robotics 2024, 2303.08778); **EV-Planner** event-based energy-efficient navigation. Event+SNN is the low-power high-speed control stack.
- Venues signal momentum: NeVi @ ICCV 2025, NeuRobots @ IROS 2025, **EBMV @ ECCV 2026** (event + RGB + LiDAR + IMU + language).

## 6. Datasets & benchmarks (what people train/evaluate on)
- **M3ED** — multi-robot (car/quadruped/UAV), multi-sensor (Prophesee Gen4 event + RGB + 64-beam LiDAR + IMU), 3 TB; the reference event-fusion robotics benchmark (re-hosted on AWS 2025).
- **OctoSense dataset** **[2026]** — largest event-inclusive multimodal driving corpus (adds thermal + CAN proprioception).
- **RoboMIND 2.0** **[2026]** — bimanual mobile-manipulation multimodal dataset for embodied intelligence (2512.24653).
- **DSEC** (stereo event driving), **NYC-Event-VPR** (event place recognition, ICRA 2025), **ForceVLA-Data** (vision+proprioception+force), **V2X-R / Dual-Radar / NTU4DRadLM** (4D-radar multimodal).

## Net trend
Fusion is collapsing into one recipe — tokenize every sensor (force, tactile, event, thermal, radar, proprioception), pretrain a shared masked-autoencoder/VLA backbone, and fine-tune per task — with self-supervised cross-sensor generalization, graceful degradation under sensor failure, and event/neuromorphic sensing as the hottest 2026 frontiers.
