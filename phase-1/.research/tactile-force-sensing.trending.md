# Tactile & Force Sensing — Trending Research (mid-2026)

*Scope: tactile/touch sensing, force-torque, proprioception, visuo-tactile perception. Bias: newest (2025–2026). `[2026]` = 2026 release.*

The field is having its "foundation-model moment": the community is consolidating around **sensor-invariant, self-supervised touch encoders** (the DINO/SAM analog for touch) that plug into VLA policies and world models, fed by GPU tactile sim and cheap magnetic/vision skins.

---

## 1. General-purpose touch encoders (the "DINO of touch")

- **Sparsh** (Meta FAIR, Oct 2024) — first general-purpose SSL encoder for vision-based tactile (DIGIT/GelSight), trained via MAE/DINO/JEPA on 460k+ images; ships with the **TacBench** eval suite; the reference backbone everyone benchmarks against. https://arxiv.org/abs/2410.24090
- **Sparsh-X** — multimodal Sparsh extension (image + force/audio + proprioception); pushes touch encoders beyond pixels. https://sparsh-ssl.github.io/
- **T3 / Transferable Tactile Transformers** (CoRL 2024) — shared-trunk transformer with per-sensor encoders; introduced **FoTa**, the largest tactile dataset (3M+ points, 13 sensors, 11 tasks). https://arxiv.org/abs/2406.13640
- **UniTouch / "Binding Touch to Everything"** (CVPR 2024) — aligns touch to CLIP/vision-language-audio; enables zero-shot touch tasks and touch-QA. https://arxiv.org/abs/2401.18084
- **AnyTouch** (ICLR 2025) — unified static+dynamic representation across 4 sensor types; released the aligned multi-sensor **TacQuad** dataset. https://arxiv.org/abs/2502.12191
- **AnyTouch 2** `[2026]` — successor adding fine-grained deformation, action dynamics and force-property perception. https://arxiv.org/abs/2602.09617
- **SITR (Sensor-Invariant Tactile Representation)** (ICLR 2025) — cross-sensor transfer across 7 GelSight/DIGIT variants; tackles the sensor-heterogeneity problem head-on. https://arxiv.org/abs/2502.19638
- **UniT** (2024) — data-efficient tactile representation generalizing to unseen objects. https://arxiv.org/abs/2406.13640
- **Tac-DINO** `[2026]` — vision–tactile features via patch alignment; explicitly ports the DINO recipe to touch. https://arxiv.org/abs/2606.12069
- **FTP-1: Foundation Tactile Policy** `[2026]` — generalist *policy* (not just encoder) across tactile sensors for contact-rich manipulation. https://arxiv.org/abs/2606.13102

## 2. Tactile VLAs & visuo-tactile world models (2026 frontier)

- **Dream-Tac** `[2026]` — unified tactile *world-action* model with contact-gated visuotactile fusion; +31.7% action accuracy on 6 contact-rich tasks. https://arxiv.org/abs/2606.08737
- **Visuo-Tactile World Models** `[2026]` — touch grounds visual world-model rollouts in contact physics, cutting hallucination. https://arxiv.org/abs/2602.06001
- **OmniVTA** `[2026]` — visuo-tactile world modeling for contact-rich manipulation. https://arxiv.org/abs/2603.19201
- **ViTacFormer** (2025) — cross-modal transformer predicting future tactile signals; strong on long-horizon in-hand tasks. https://arxiv.org/abs/2506.15953
- **OmniVTLA** (2025) — vision-tactile-language-action model with semantic-aligned tactile tokens. https://arxiv.org/abs/2508.08706
- **VLA-Touch** (2025) — adds dual-level tactile feedback to frozen VLAs. https://arxiv.org/abs/2507.17294
- **TacVLA** `[2026]` / **AT-VLA** `[2026]` — contact-aware tactile fusion / adaptive tactile injection into VLAs. https://arxiv.org/abs/2603.12665 · https://arxiv.org/abs/2605.07308
- **T-Rex** `[2026]` — tactile-reactive dexterous manipulation (fast contact-triggered reactions). https://arxiv.org/abs/2606.17055
- **GeoTLM** `[2026]` — geometry-aware tactile-language model for contact-motion reasoning. https://arxiv.org/abs/2606.15909

## 3. Force-torque & proprioceptive (sensorless) force

- **NEXT / FACTR 2** `[2026]` — learns external-force/torque estimation on *commodity* arms with no F/T sensor; force-informed resampling boosts policy learning. https://arxiv.org/abs/2606.12406
- **PhaForce** `[2026]` — phase-scheduled visual-force policy (slow plan + fast correction) for contact-rich tasks. https://arxiv.org/abs/2603.08342
- **Towards Forceful Robotic Foundation Models** (survey, 2025) — the reference map for adding force to foundation policies. https://arxiv.org/abs/2504.11827
- **FingerEye** `[2026]` — dexterous manipulation with continuous vision-tactile sensing. https://arxiv.org/abs/2604.20689

## 4. Simulation & sim-to-real (the data engine)

- **TacSL** (2024) — GPU visuotactile sim in Isaac; ~1631 FPS (200× faster than Taxim); AACD sim-to-real distillation. https://arxiv.org/abs/2408.06506
- **Taccel** (2025) — high-performance GPU sim to *scale up* vision-based tactile robotics. https://www.researchgate.net/publication/390892604
- **HydroShear** `[2026]` — hydroelastic shear sim closing the tactile shear-force sim-to-real gap for RL. https://arxiv.org/abs/2603.00446
- **Tacmap** `[2026]` — geometry-consistent penetration-depth maps to bridge tactile sim-to-real. https://arxiv.org/abs/2602.21625
- **Taxim / FOTS** (2021/2024) — example-based GelSight simulators; the baselines newer sims beat.

## 5. Hardware & datasets (the substrate)

- **AnySkin** (2024) — plug-and-play magnetic skin, swappable in ~12s, generalizes across instances; the low-cost skin many 2025–26 papers build on. https://arxiv.org/abs/2409.08276
- **e-Flesh** (2025) — customizable magnetic touch via cut-cell microstructures; scalable to large areas. https://visuotactile.com/
- **DIGIT 360** (Meta, 2024) — high-resolution photometric-stereo fingertip; widely adopted vision-tactile hardware.
- Sensor stack in active use: **GelSight Mini, DIGIT, Tac3D, DuraGel, ReSkin**.
- **VTDexManip** (ICLR 2025) — dataset + benchmark for visual-tactile dexterous manipulation pretraining. https://proceedings.iclr.cc/paper_files/paper/2025/file/e19b6f65791e350347bcff8a3955cb5b-Paper-Conference.pdf
- **Tactile MNIST** (2025) — benchmark for *active* tactile perception (153k touches). https://arxiv.org/abs/2506.06361
- **TaCo** `[2026]` — first benchmark for tactile-data compression/codecs (bandwidth is now a real constraint). https://arxiv.org/abs/2602.09893
- **Awesome-Touch** — the community's living index of tactile datasets/methods. https://github.com/linchangyi1/Awesome-Touch

## 6. Locomotion / whole-body tactile

- **LocoTouch** (2025) — tactile sensing for dynamic quadrupedal transport/balancing.
- **TACT** (2025) — humanoid whole-body *contact* manipulation via imitation with a tactile modality. https://arxiv.org/abs/2506.15146
- **Tactile-Aware Quadrupedal Loco-Manipulation** `[2026]` — foot/body touch for loco-manipulation. https://arxiv.org/abs/2604.27224

## Trend signal

- **RSS 2026 Workshop — "Tactile Sensing for Robotic Foundation Models"** (Jul 2026): speakers from **Amazon, NVIDIA, Columbia, Stanford** — the field openly framing touch as a foundation-model problem. https://tac-for-fm.github.io/rss2026/
- Industry: **DAIMON Robotics** and humanoid vendors (Tesla Optimus, Amazon Sparrow) betting on standard fingertip touch by ~2026. https://spectrum.ieee.org/daimon-robotics-physical-ai

---

**Net trend:** Touch is consolidating into a foundation-model stack — sensor-invariant SSL encoders (Sparsh/T3/AnyTouch) → tactile VLAs and visuotactile world models (Dream-Tac, OmniVTLA) → learned/sensorless force (NEXT), all powered by GPU tactile sim and cheap swappable magnetic skins (AnySkin/e-Flesh).
