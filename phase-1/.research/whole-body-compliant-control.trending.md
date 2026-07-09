# Trending Research — Whole-Body, Compliant & Force Control

`⏱ as of July 2026` · Scope: compliant/impedance/force control · whole-body control · loco-manipulation control · learned control. The named substrates people fine-tune, benchmark, and build on in 2024–2026 (biased newest). **`🆕` = 2026 release.** URLs inline; arXiv IDs encode date (`25xx`=2025, `26xx`=2026).

---

## 1. Whole-body motion tracking — the dominant learned-control paradigm (the "DINO moment")
The field consolidated around **one recipe**: retarget human MoCap → RL tracking policy in sim → sim-to-real. This is the substrate everyone forks.
- **H2O / OmniH2O** — human-to-humanoid whole-body teleop + tracking; the lineage origin (keypoint retargeting). [arxiv 2403.04436 / 2406.08858]
- **ExBody2** — large-scale expressive tracking; difficulty-weighted sampling over all motions (2024). [arxiv 2412.13196]
- **HOVER (NVIDIA)** — versatile *multi-mode* neural whole-body controller (one policy, many command spaces); ICRA 2025. [arxiv 2410.21229](https://arxiv.org/html/2410.21229v1)
- **ASAP** — closes the sim-real dynamics gap with a learned residual "delta-action" model; the agile-skills reference, RSS 2025. [arxiv 2502.01143](https://arxiv.org/abs/2502.01143)
- **GMT** — General Motion Tracking: single unified policy + motion Mixture-of-Experts + adaptive sampling (2025). [arxiv 2506.14770](https://arxiv.org/abs/2506.14770)
- **BeyondMimic** — tracking → versatile control via guided **diffusion**; test-time steerable (2025). [arxiv 2508.08241](https://arxiv.org/html/2508.08241v1)
- **TWIST / UniTracker / KungfuBot** — teleop-distilled whole-body imitation; universal tracker; physics-based highly-dynamic skills (2025). [2505.02833](https://arxiv.org/html/2505.02833v1) · [2507.07356](https://arxiv.org/pdf/2507.07356) · [2506.12851](https://arxiv.org/html/2506.12851v1)
- **HumanPlus** — humanoid shadowing/imitation from a single RGB camera; CoRL 2024. [github](https://github.com/MarkFzp/humanplus)
- 🆕 **Robust & Generalized Humanoid Motion Tracking** [2601.23080](https://arxiv.org/pdf/2601.23080) · 🆕 **Humanoid-GPT** — scaling data/structure for zero-shot tracking [2606.03985](https://arxiv.org/html/2606.03985).

## 2. Loco-manipulation control (humanoid + legged)
Coordinating locomotion with contact-rich upper-body/arm work — the hardest open problem in the niche.
- **FALCON** — dual-agent (lower = balance under disturbance, upper = EE tracking) with a **force curriculum**; the force-adaptive humanoid reference (2025). [arxiv 2505.06776](https://arxiv.org/abs/2505.06776)
- **SkillBlender** — versatile whole-body loco-manipulation via runtime **skill blending** of pretrained primitives (2025). [hf 2506.09366](https://huggingface.co/papers/2506.09366)
- **ResMimic** — general motion tracking → loco-manipulation via **residual** learning on top of a tracker (2025). [arxiv 2510.05070](https://arxiv.org/html/2510.05070v1)
- **DemoHLM / HDMI** — one demo → generalizable humanoid loco-manip; interactive whole-body control learned from human videos (2025). [2510.11258](https://arxiv.org/pdf/2510.11258) · [2509.16757](https://arxiv.org/pdf/2509.16757)
- **RoboDuet** — quadruped: two cooperating policies (loco + manip), cross-embodiment zero-shot; the legged-loco-manip reference (2024). [arxiv 2403.17367](https://arxiv.org/abs/2403.17367)
- **Visual Whole-Body Control (CoRL 2024) · WildLMa · MLM** — vision-driven legged loco-manip; in-the-wild VR-teleop skill library; multi-task WBC for quadruped+arm (2024–25). [MLM 2508.10538](https://arxiv.org/pdf/2508.10538)
- 🆕 **VOFA** — visual object-goal pushing with force-adaptive control [2605.01518](https://arxiv.org/pdf/2605.01518) · 🆕 **tactile-aware quadrupedal loco-manip** [2604.27224](https://arxiv.org/pdf/2604.27224).

## 3. Compliant / impedance / force control — learned
The shift: from hand-tuned gains to **policies that output stiffness/force**, often without wrist F/T sensors.
- **SoftMimic** — learns *compliant* whole-body control from example motions (yields naturally soft, safe contact) (2025). [arxiv 2510.17792](https://arxiv.org/pdf/2510.17792)
- **Learning Force Control for Legged Manipulation** — RL direct force control *without force sensing*, unlocking gravity-comp + impedance on a quadruped+arm (2024). [arxiv 2405.01402](https://arxiv.org/abs/2405.01402)
- 🆕 **FAME** — force-adaptive RL; conditions on a learned latent of interaction forces estimated from dynamics (no wrist sensor); H1-2 (2026). [arxiv 2603.08961](https://arxiv.org/abs/2603.08961)
- **Adaptive Compliance Policy · FILIC** — approximate compliance for diffusion-guided control; dual-loop force-guided IL + impedance torque control (2024–25). [2410.09309](https://arxiv.org/pdf/2410.09309) · [2509.17053](https://arxiv.org/pdf/2509.17053)
- 🆕 **Stiffness Copilot** — an impedance *policy* for contact-rich teleop [2603.14068](https://arxiv.org/pdf/2603.14068) · 🆕 **Minimalist Compliance Control** [2603.00913](https://arxiv.org/pdf/2603.00913) · **HMC** heterogeneous meta-control for contact-rich loco-manip (2025). [2511.14756](https://arxiv.org/pdf/2511.14756)
- **Surveys:** *Compliant Force Control: A Survey* (MDPI, Jul 2025) [link](https://www.mdpi.com/2227-7390/13/13/2204) · 🆕 *Safe Learning for Contact-Rich Tasks → Safe Foundation Models* [2512.11908](https://arxiv.org/pdf/2512.11908).

## 4. Classical WBC / optimization backbone (still the deployment workhorse)
Learned policies dominate papers, but model-based **QP/MPC** still ships on most humanoids and hybridizes with RL.
- **Whole-Body MPC with MuJoCo (MJPC)** — real-time full-dynamics MPC via sampling/iLQR (2025). [arxiv 2503.04613](https://arxiv.org/abs/2503.04613)
- **TSID-WBC · OCS2 · Pinocchio** — the task-space-inverse-dynamics + optimal-control + fast-dynamics stack underpinning nearly all deployed WBC.
- 🆕 **Whole-Body Inverse-Dynamics MPC for Legged Loco-Manipulation** [2511.19709](https://arxiv.org/pdf/2511.19709) · **WBC for humanoids with heavy limbs** (model-based, 2025). [2506.14278](https://arxiv.org/html/2506.14278v1)

## 5. Foundation / world-action models for whole-body control (the 2026 frontier)
The niche's "GR00T moment": pretrain a generalist whole-body controller; add language/vision.
- 🆕 **WholeBodyVLA** — unified *latent* VLA for whole-body loco-manipulation; ICLR 2026. [github](https://github.com/OpenDriveLab/WholebodyVLA)
- 🆕 **MotionWAM** — foundation **world-action model** for real-time humanoid loco-manip [2606.09215](https://arxiv.org/pdf/2606.09215).
- 🆕 **General Humanoid WBC via Pretraining + Fast Adaptation** [2602.11929](https://arxiv.org/pdf/2602.11929) · 🆕 **Scalable & General WBC for Cross-Humanoid Locomotion** [2602.05791](https://arxiv.org/html/2602.05791v2) · **From Experts to a Generalist** (2025). [2506.12779](https://arxiv.org/pdf/2506.12779)
- Adjacent: **NVIDIA GR00T N-series** (world-action framing) feeds this line.

## 6. Sim substrates, sim-to-real & benchmarks
- **Isaac Lab / IsaacGym · MuJoCo Playground · Genesis · Newton** (differentiable GPU physics) — the training substrates; **ASAP**-style real2sim residuals are the sim-to-real pattern.
- 🆕 **VIRAL** — visual sim-to-real *at scale* for humanoid loco-manip [2511.15200](https://arxiv.org/pdf/2511.15200).
- **HumanoidBench** — 31-task whole-body loco+manip benchmark (Unitree H1 + Shadow hands, MuJoCo); RSS 2024. [site](https://humanoid-bench.github.io/) · **LocoMuJoCo** — imitation-learning locomotion benchmark. Shared fuel: **AMASS** MoCap retargeting.
- Ecosystem trackers: **awesome-humanoid-robot-learning** [github](https://github.com/YanjieZe/awesome-humanoid-robot-learning) · **humanoid-wbc-review** survey [github](https://github.com/Earl000333/humanoid-wbc-review).

---

**Net trend (mid-2026):** whole-body control has collapsed onto a common learned recipe — human-MoCap-retargeted RL motion tracking, sim-to-real via learned residual/force models, force & stiffness now *learned* (often sensorless) rather than tuned — and is now being wrapped into pretrained, language-conditioned whole-body foundation/world-action models (WholeBodyVLA, MotionWAM), while classical whole-body QP/MPC (Pinocchio/OCS2/MJPC) remains the deployment backbone that these policies hybridize with. Treat `🆕` 2026 preprints and vendor benchmark numbers as unverified.
