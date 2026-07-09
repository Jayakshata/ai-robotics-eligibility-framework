# Per-Niche Profile — Tactile & Force Sensing

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; tactile/force-specific and trending-research signals are research-backed (`phase-1/.research/tactile-force-sensing.creds.md` + `.trending.md`). `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Tactile & Force Sensing · **Axis A cluster:** A1 (Sensing & Perception) · **Type:** `[F]` (visuo-tactile perception, touch foundation models & neuromorphic tactile as frontier sub-areas `[★]`)
**Related capabilities:** A4 compliant/force control · A5 manipulation (contact-rich, dexterous) · A6 imitation/RL & representation learning · A7 VLAs / world models · A9 HRI/haptics · **Platforms (C):** C1 fixed arm · C2 mobile manipulator · C5 humanoid (dexterous hands) · **Verticals (B):** B1 manufacturing · B4 surgical/healthcare · B9 humanoid & service · (+ rehab/prosthetics)

---

## 1. Definition & Scope
Giving a robot the **sense of touch and force** — measuring what happens at the contact interface: pressure, slip, shear, local geometry, and the 6-axis force-torque of interaction, plus proprioceptive/kinesthetic self-sensing. It closes the loop for the contact-rich tasks vision alone cannot see (occluded contacts, in-hand object state, insertion, delicate/deformable grasping). **The defining trait vs the rest of A1: the sensor is not off-the-shelf** — vision buys a camera; touch means *building the transducer* (elastomer gel + camera, capacitive/piezoresistive/magnetic array, MEMS F/T), which pulls the niche across three homes: robot-learning labs, mechatronics/haptics groups, and materials/flexible-electronics labs. **In scope:** tactile transduction (contact, pressure, slip, shear); vision-based tactile sensing (GelSight/DIGIT/TacTip); 6-axis force-torque sensing & wrench estimation; proprioception & kinesthetic sensing (per this niche's defined scope); model-based/"sensorless" external-force estimation; tactile representation learning & touch foundation models; visuo-tactile fusion & policies; tactile simulation; e-skin / soft-sensor materials; haptics as the human-facing dual. **Out of scope (adjacent):** the visual perception stack (A1 vision), the design of force/impedance *control laws* that consume these signals (A4), manipulation policy/skill learning (A5), and generic SLAM/state estimation (A2).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Tactile/Force Sensing Engineer | Integrates, wires & calibrates tactile/F-T sensors on hardware; collects & labels tactile datasets; implements readout pipelines; runs experiments under supervision. |
| **L2** | Tactile & Force Sensing Engineer | Owns a sensing subsystem end-to-end (transducer→readout→representation→downstream signal); characterizes a sensor or fuses tactile+proprioceptive wrench; ships to a real deployment. |
| **L3** | Senior Tactile/Force Sensing Engineer | Designs the touch-sensing architecture; makes transduction-technology and vision-based-vs-taxel-vs-magnetic tradeoffs; sets tactile benchmarks; owns sensor-model-vs-learning calls; mentors. |
| **L4/L5** | Staff / Principal Tactile Sensing Research Engineer (or Research Scientist) | Sets the touch research agenda; advances novel transducers / touch foundation models / tactile-VLA SOTA; publishes; org-wide direction. |

*Two flavors run through every tier: the **sensor-builder** (materials/MEMS/mechatronics — fabricates the transducer) and the **touch-learning** engineer (representation/policy — makes the signal useful). Strong seniors bridge both.*

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **Tactile-specific shift `✓` — this is the A1 niche where hardware & materials degrees rise most (the sensor is fabricated, not bought):** **EE/ECE rises to Tier 1** (transduction, read-out electronics, MEMS, flexible/printed electronics, DSP — arguably *the* load-bearing degree for the sensor side) and **Mechanical Engineering rises to Tier 1** (contact mechanics, elastomer/soft-body mechanics, sensor mechanical design, and the whole force/impedance half). **Newly valued (niche-unique):** **Materials Science & Engineering** (soft/stretchable/piezoresistive materials, e-skin — a first-class entry path here and almost nowhere else in robotics), **Applied Physics / MEMS / microfabrication**, **BME / Neuroscience** (for the haptics + psychophysics and neuromorphic/e-skin sub-areas). CS/AI stays essential for the visuo-tactile & learning pole but is **weaker alone here** — a CS-only candidate must pair with signals/EE/materials evidence.

**Highly-valued undergraduate programs `✓`** — no dedicated *undergraduate* tactile course exists; UG is a **feeder**, so weight programs strong in robotics + the hardware pillars: WPI BS Robotics (Unified Robotics), Michigan Robotics BSE, MIT (6.4210 *Robotic Manipulation* runs as an advanced-UG version with a dedicated tactile chapter), Bristol (feeds the Bristol Robotics Lab), plus **EE/materials-strong** schools for the transducer path — Stanford, Northwestern (Rogers epidermal electronics), CMU, Georgia Tech. Real depth is at graduate/lab level.

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI, EE, or ME **or Materials Science / Applied Physics**, with a tactile / haptics / e-skin / contact-mechanics focus.

**Highly-valued postgraduate programs — ranked by tactile/force strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **Stanford · MIT · CMU (RI) · Bristol** | Stanford **ME 327 Design & Control of Haptic Systems** (Okamura/CHARM) + **Zhenan Bao** e-skin (materials pole) · MIT **GelSight birthplace** (Adelson/CSAIL) + **6.4210/6.4212** Ch. 12 "Soft Robots & Tactile Sensing" (Tedrake, free OCW) · CMU **ROB 16-885 Tactile Sensing & Haptics** (dedicated) + RI "Force & Tactile Sensors" area · **Bristol MSc Robotics** (BRL) — home of **TacTip**, Lepora's Tactile Robotics Group — **the single strongest tactile-branded degree** |
| Strong | **UT Austin · Northwestern · QMUL** | UT **ECE 382N Tactile Sensing for Robotics** + **ME 397 Haptics & Teleoperated Systems** (rare *double* coverage) · Northwestern **MECH_ENG 495 Haptics** (Colgate, cobot co-inventor) + **John Rogers** flexible/epidermal electronics · QMUL **Robotics & AI MSc** — ARQ centre (Althoefer/Jamone/Farkhatdinov): soft/tactile + surgical touch |
| Present (haptics / materials / legacy → migrated) | **UPenn · Rice · TUM · ETH/Imperial · Max Planck (research)** | Penn **MEAM 625 Haptic Interfaces** (legacy; Kuchenbecker → MPI 2017) · Rice **MAHI Lab** (O'Malley; via MECH mechatronics + research) · TUM **Gordon Cheng** multi-modal robot skin (CellularSkin) + **MSNE** Neuroengineering · ETH Real-World Robotics/artificial skin; Imperial Personal Robotics · **Max Planck IS — Kuchenbecker Haptic Intelligence Dept** (world-leading, but a PhD/research route, not coursework) |

*(The **materials pole** — Stanford Bao, Northwestern Rogers, TUM robot skin — is unique to this niche; Penn haptics wound down and the strength moved to Stuttgart.)*

**Highly-valued certifications `✓ ⏱`** — the honest finding: **a thin formal-credential landscape; this niche is research/portfolio-credentialed, not certificate-credentialed.** The valued items: **Stanford Online "Introduction to Haptics"** (Okamura — the one cert genuinely branded to this niche; hands-on with the DIY **Hapkit**) · Northwestern **Modern Robotics** (grounding-ref Tier 1 — the wrench / force-control / Jacobian-transpose material is the force-sensing theory backbone) · **Hugging Face LeRobot** (now ships DIGIT tactile integration). *Applied/vendor training (not exams):* **GelSight**, **Bota Systems** (6-axis F/T + data platform), **ATI Industrial Automation** (F/T selection/integration) — the signal for applied force-integration roles. Recognition venue is the **IEEE Technical Committee on Haptics / World Haptics / EuroHaptics** community, not an exam board. *(Research canon functions as credential-by-fluency — see §7.)*

**Experience & portfolio** — L1: internship/academic; a GelSight/DIGIT or F/T integration + calibration project. L2: 2–4 yr; a *characterized* sensor or a visuo-tactile task demo with benchmark numbers, plus a tactile sim-to-real project. L3: 5–8 yr; ≥1 real deployment led with tactile/force in the loop. L4/L5: 8+ yr and/or first-author papers (RSS/CoRL/ICRA/RA-L; **IEEE ToH / Haptics Symposium / World Haptics**).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and **C++** (real-time sensor I/O; embedded/microcontroller read-out literacy)
- **Signal processing** for tactile streams (time-series **and** image sequences); filtering, bias/gravity comp, calibration
- **Computer vision + deep learning** — load-bearing because GelSight/DIGIT/TacTip are *cameras* → CNN/transformer read-out
- **Force / impedance / admittance control** fundamentals — the "force" half of the niche
- **6-axis force-torque sensing & wrench estimation**; frames/transforms; contact detection
- **Contact mechanics & friction** (Hertzian contact, stick-slip) fundamentals
- **Sensor calibration & characterization**; **state estimation / sensor fusion** (tactile + proprioceptive)
- **ROS 2** integration with real sensors and hardware
- **Tactile data pipelines**: collection, labeling, handling mixed image+force time-series
- Real-robot sensor integration (mounting, wiring, mechanical fit)

**Preferred / differentiating**
- **Tactile sensor design & fabrication** — elastomer/gel casting, photometric-stereo optics, marker tracking; capacitive/piezoresistive/**magnetic** arrays; MEMS F/T
- **Touch representation / foundation models** — fine-tuning **Sparsh / T3 / UniTouch / AnyTouch**
- **Visuo-tactile policies & multimodal fusion** (3D-ViTac, ManiWAV); **tactile VLAs**
- **Tactile simulation & sim-to-real** (TACTO, TacSL, Taccel)
- **Soft/flexible materials & e-skin** fabrication; microfabrication / cleanroom
- **Slip / incipient-slip detection**, **tactile servoing**
- **Sensorless/model-based external-force estimation** (joint-torque / motor-current)
- **Haptics** — device design & control, rendering, **psychophysics** (the human-facing dual)
- **Neuromorphic / event-based tactile**
- Publications at **RSS / CoRL / ICRA / RA-L / IEEE ToH / World Haptics**

**Tools & tech stack** — *Languages:* Python, C++ (+ embedded C) · *Middleware:* ROS 2 · *Vision-based tactile:* GelSight (Mini/commercial), DIGIT / DIGIT 360, TacTip, Tac3D, DuraGel · *Other tactile:* ReSkin / AnySkin, e-Flesh (magnetic), BioTac `~` · *Force-torque:* ATI, Bota, OptoForce `~`; joint-torque arms (Franka, KUKA iiwa) · *Sim:* TACTO, TacSL (Isaac), Taccel, Taxim/FOTS, Tacchi; Isaac Sim/Lab, MuJoCo, PyBullet · *Learning:* PyTorch, Sparsh/TacBench, T3/FoTa, AnyTouch, LeRobot · *Fabrication:* Ecoflex/silicone casting, 3D-printed molds, photometric-stereo LED rigs; (materials pole) cleanroom/MEMS, screen/inkjet printing · *Haptics:* Hapkit, 3D Systems Touch, Force Dimension, Haply `~`

**Bar by tier** — L1: solid on the required list; integrates & calibrates sensors, collects data · L2: ships a sensing subsystem (a characterized sensor **or** a working visuo-tactile task), fluent read-out→representation · L3: architects the sensing stack, deep in ≥1 differentiating area (sensor design **or** touch-learning) · L4/L5: advances SOTA — a novel transducer or a touch FM — publishes / sets direction.

## 5. Core Subject List `✓`
Tactile/force slice of the canonical robotics/AI subject set, annotated with representative courses. **Bold** = what makes it tactile-specific vs generic robotics.

- **Foundational maths & CS:** linear algebra · probability & **estimation theory** (contact/wrench estimation) · calculus/ODEs · optimization · **signal processing** (tactile = time-series + image sequences) · Python + C++ · **computer vision + deep learning** (GelSight/DIGIT/TacTip are cameras → CNN/transformer read-out) *(Stanford CS231A/CS231n; CMU 16-720)*.
- **Core robotics:** kinematics & dynamics · **force / impedance / admittance control** *(Modern Robotics; Northwestern ME 449)* · **contact mechanics & friction** (Hertzian, stick-slip) · state estimation & **sensor fusion** (tactile + proprioceptive wrench) · ROS 2.
- **Niche-specific:** **tactile sensor design & transduction** — piezoresistive / capacitive / **optical (vision-based)** / magnetic / barometric *(CMU ROB 16-885; UT ECE 382N)* · **vision-based tactile sensing** — GelSight/DIGIT/TacTip, marker vs intensity, photometric-stereo depth *(MIT 6.4210 Ch. 12; Bristol)* · **force-torque sensing & wrench estimation** — 6-axis F/T, model-based external-force from joint torques *(UT ME 397)* · **proprioception & kinesthetic sensing** — encoders, IMU, joint-torque, motor-current force estimation · **haptics** — kinesthetic vs cutaneous, device design & control, **psychophysics** / human touch perception, teleoperation rendering *(Stanford ME 327; UPenn MEAM 625; NU MECH 495)* · **soft/flexible sensor materials & e-skin, MEMS/microfabrication** *(Stanford Bao; NU Rogers; TUM robot skin)* · **slip / incipient-slip detection**, tactile servoing.
- **Frontier/advanced `⏱`:** **touch foundation models / tactile representation** (Sparsh, T3, UniTouch, AnyTouch/AnyTouch 2) · **visuo-tactile policies & multimodal fusion** (3D-ViTac, ManiWAV) · **tactile simulation & sim-to-real** (TACTO, Taccel, Tacchi, ETac) · **neuromorphic / event-based tactile** (NeuroTac, Evetac) · tactile-language / VLA integration.

## 6. Training Programme Design & Duration `✓`
Tactile/force-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), specialization + capstone tuned to touch.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths, Python/C++, **signal processing**, classical ML | 2.0 mo | 6 mo | 300 | ML/maths + signals fluency |
| 2. Core robotics | Kinematics/dynamics, **force/impedance control**, contact mechanics, **ROS 2**, state estimation | 2.0 mo | 6–7 mo | 320 | Command an arm + force control in sim + real |
| 3. AI/ML depth | Deep learning, computer vision, representation learning | 2.0 mo | 6 mo | 300 | CV/DL for tactile images + policy basics |
| 4. **Tactile & force specialization** | Sensor design & transduction, vision-based tactile, F/T & wrench estimation, touch foundation models, visuo-tactile fusion, tactile sim-to-real | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Visuo-tactile contact-rich task on a real arm (insertion / in-hand) with a tactile sensor + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior tactile/force sensing engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**. *Track fork in Phase 4:* the **sensor-builder** path spends its hours on fabrication/materials/cleanroom (extend Phase 4, lean on hardware); the **touch-learning** path leans on Phase 3's ML depth and touch-FM fine-tuning. Budget extra hardware/sim-debug friction — building and characterizing a transducer is slower than pure software.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The field is having its **"foundation-model moment"**: consolidating around **sensor-invariant, self-supervised touch encoders** (the DINO/SAM analog for touch) that plug into VLA policies and world models, fed by GPU tactile sim and cheap magnetic skins. `🆕` = 2026 release.

- **General-purpose touch encoders (the "DINO of touch"):** **Sparsh** (Meta FAIR — first general SSL encoder for vision-based tactile, MAE/DINO/JEPA on 460k+ frames; ships **TacBench** — the reference backbone everyone benchmarks against) + **Sparsh-X** (multimodal: image + force/audio + proprioception) · **T3 / Transferable Tactile Transformers** (shared-trunk + per-sensor encoders; introduced **FoTa**, largest tactile dataset — 3M+ points, 13 sensors) · **UniTouch** (binds touch to CLIP → zero-shot touch-QA) · **AnyTouch** (unified static+dynamic across 4 sensors; **TacQuad** dataset) · **🆕 AnyTouch 2** (adds fine-grained deformation + force-property) · **SITR** (sensor-invariant across 7 GelSight/DIGIT variants) · **UniT** (data-efficient) · **🆕 Tac-DINO** (explicitly ports DINO to touch) · **🆕 FTP-1 Foundation Tactile Policy** (generalist *policy*, not just encoder, across sensors).
- **Tactile VLAs & visuo-tactile world models (the 2026 frontier):** **🆕 Dream-Tac** (tactile *world-action* model, contact-gated fusion; +31.7% action accuracy) · **🆕 Visuo-Tactile World Models** (touch grounds visual rollouts in contact physics, cutting hallucination) · **🆕 OmniVTA** · **ViTacFormer** (predicts future tactile; strong long-horizon in-hand) · **OmniVTLA** (semantic-aligned tactile tokens) · **VLA-Touch** (dual-level tactile into *frozen* VLAs) · **🆕 TacVLA / 🆕 AT-VLA** (contact-aware / adaptive tactile injection) · **🆕 T-Rex** (tactile-reactive dexterity) · **🆕 GeoTLM** (geometry-aware tactile-language).
- **Force-torque & "sensorless" force:** **🆕 NEXT / FACTR 2** (external F/T estimation on *commodity* arms with no F/T sensor; force-informed resampling boosts policy learning) · **🆕 PhaForce** (phase-scheduled visual-force: slow plan + fast correction) · **"Towards Forceful Robotic Foundation Models"** (2025 survey — the reference map) · **🆕 FingerEye** (continuous vision-tactile dexterity).
- **Simulation & sim-to-real (the data engine):** **TacSL** (GPU visuotactile sim in Isaac, ~1631 FPS / 200× Taxim; AACD distillation) · **Taccel** (GPU sim to scale vision-based tactile) · **🆕 HydroShear** (hydroelastic shear sim — closes the shear-force gap) · **🆕 Tacmap** (penetration-depth maps bridge sim-to-real) · **Taxim / FOTS** (the baselines newer sims beat).
- **Hardware & datasets (the substrate):** **AnySkin** (plug-and-play magnetic skin, swap ~12 s, generalizes across instances — the low-cost skin many 2025–26 papers build on) · **e-Flesh** (magnetic cut-cell microstructures, large-area) · **DIGIT 360** (Meta high-res photometric-stereo fingertip) · active stack: **GelSight Mini, DIGIT, Tac3D, DuraGel, ReSkin** · benchmarks **VTDexManip** (visual-tactile dexterous pretraining), **Tactile MNIST** (active perception, 153k touches), **🆕 TaCo** (first tactile-compression benchmark — bandwidth is now a real constraint) · **Awesome-Touch** (living community index).
- **Locomotion / whole-body touch:** **LocoTouch** (tactile for dynamic quadruped transport/balance) · **TACT** (humanoid whole-body *contact* manipulation via imitation) · **🆕 Tactile-Aware Quadrupedal Loco-Manipulation**.
- **Community signal:** **🆕 RSS 2026 Workshop "Tactile Sensing for Robotic Foundation Models"** (Jul 2026; speakers from Amazon, NVIDIA, Columbia, Stanford — the field openly framing touch as an FM problem) · industry bets on standard fingertip touch by ~2026 (**DAIMON Robotics**, Tesla Optimus, Amazon Sparrow).

*Net trend: touch is consolidating into a foundation-model stack — sensor-invariant SSL encoders → tactile VLAs & visuo-tactile world models → learned/sensorless force — powered by GPU tactile sim and cheap swappable magnetic skins. Many 2026 items are fresh preprints; treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Integrate & calibrate a **GelSight Mini / DIGIT**; reconstruct contact depth via photometric stereo | Sensor read-out + calibration; live contact depth/normal map |
| Foundational | Read a **6-axis F/T sensor** (ATI/Bota) with gravity/bias compensation → contact detection | F/T pipeline; reliable contact/no-contact + wrench in world frame |
| Applied | **Slip detection & tactile servoing** — hold a slipping object by regulating grip force from touch | Incipient-slip detection; no drop, minimal crush force |
| Applied | Force-controlled **peg-in-hole** with F/T + tactile feedback | Contact-rich insertion with touch in the loop; robust, <1 mm |
| Applied | **Fine-tune a touch foundation model** (Sparsh/T3) for texture/material ID or contact-pose | Tactile representation learning; beat a from-scratch CNN on a TacBench-style eval |
| Advanced | **Tactile sim-to-real** — train in TACTO/TacSL, transfer to a real GelSight/DIGIT | Tactile sim + domain randomization; sim-trained read-out works on real sensor |
| Advanced | **Visuo-tactile manipulation policy** (imitation) — fuse camera + touch for a contact-rich task | Multimodal fusion; tactile measurably beats vision-only |
| Advanced | **Build a low-cost magnetic skin** (AnySkin / e-Flesh) and use it on a real gripper | Sensor fabrication + integration; working swappable skin |
| Capstone | **Tactile-in-the-loop dexterous / in-hand task** on a real hand+sensor, or a **tactile-VLA fine-tune** | End-to-end frontier stack; contact-rich task succeeds with touch as a first-class modality |

## 9. Required Lab Setup / Hardware / Resources
- **Vision-based tactile sensors:** **GelSight** (Mini / commercial) · **DIGIT / DIGIT 360** · **TacTip** · **Tac3D** · DuraGel.
- **Other tactile:** **ReSkin / AnySkin** (magnetic) · **e-Flesh** · barometric/capacitive arrays · TUM CellularSkin-style research skin · BioTac (legacy SynTouch) `~`.
- **Force-torque & proprioceptive:** **ATI** (Nano/Mini/Gamma) · **Bota Systems** · OptoForce `~`; joint-torque-sensing arms — **Franka Panda / Research 3**, **KUKA iiwa**.
- **Robots / end-effectors:** Franka, UR, xArm (budget); dexterous hands for fingertip touch — **Allegro**, **LEAP Hand** `~` (low-cost), **Shadow**; Robotiq grippers with tactile fingers.
- **Haptics devices (the dual):** **Hapkit** (DIY) · 3D Systems Touch/Phantom · Force Dimension · Haply `~`.
- **Fabrication:** silicone/elastomer casting (Ecoflex, Solaris) · 3D-printed molds · photometric-stereo LED rigs + cameras · (materials pole) cleanroom / MEMS / screen-inkjet printing for e-skin.
- **Compute:** RTX 4090 / A6000 workstation; A100/H100 for touch-FM pretraining.
- **Software / sim:** **TACTO** · **TacSL** (Isaac) · **Taccel** · Taxim/FOTS · Tacchi · Isaac Sim/Lab · MuJoCo · PyBullet · ROS 2 · PyTorch · Sparsh/**TacBench**, T3/FoTa, AnyTouch code.
- **Datasets & benchmarks:** **Sparsh TacBench** · **FoTa** (T3) · **TacQuad** (AnyTouch) · **VTDexManip** · **Tactile MNIST** · Touch-and-Go `~` · ObjectFolder `~` · **TaCo** (compression) · **Awesome-Touch** index.

## 10. Partnerships & Ecosystem
- **Sensor / hardware vendors:** **GelSight Inc.** · **Meta** (DIGIT / DIGIT 360 open hardware) · **Bristol Robotics Lab** (TacTip) · **Bota Systems** · **ATI Industrial Automation** · OnRobot/OptoForce · Tac3D/PaXini · SynTouch (BioTac, legacy) · **DAIMON Robotics** (2026 fingertip touch).
- **Sim / compute & open-source:** **Meta FAIR** (Sparsh, **TACTO**, DIGIT) · **NVIDIA** (Isaac, TacSL) · **Awesome-Touch** index · Hugging Face **LeRobot** (DIGIT).
- **Academic labs (tactile powerhouses):** MIT CSAIL (**Adelson** — GelSight) · Stanford (**Okamura** CHARM; **Bao** e-skin) · CMU RI (Force & Tactile Sensors) · **Bristol** (**Lepora** Tactile Robotics) · **Max Planck IS** (**Kuchenbecker** Haptic Intelligence) · UT Austin · Northwestern (**Colgate**; **Rogers**) · QMUL ARQ · TUM (**Cheng**) · Rice (**O'Malley** MAHI).
- **Industry programs:** Meta FAIR · NVIDIA · Amazon (Sparrow; RSS-2026 tactile-FM workshop) · humanoid players (Tesla Optimus, 1X, Figure) betting on fingertip touch.
- **Standards / recognition bodies:** **IEEE Technical Committee on Haptics** · **World Haptics / EuroHaptics / IEEE Haptics Symposium** · **IEEE Transactions on Haptics (ToH)**. *(Applied force integration inherits general robot-safety standards — ISO 10218, ISO/TS 15066 — no tactile-specific standard.)*

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (transduction, force/impedance, contact mechanics, vision-based tactile, touch FMs).
- **Project rubrics** with objective metrics: sensor calibration error, contact-localization accuracy, slip-detection precision/recall, insertion success & tolerance, texture/material classification accuracy, tactile sim-to-real transfer success, and the **tactile-improves-over-vision-only delta**.
- **Standardized benchmarks** as portable evidence: **Sparsh TacBench**, **Tactile MNIST** (active perception), **VTDexManip**, T3/FoTa tasks; increasingly touch-FM leaderboards.
- **Recognized certifications as evidence:** Stanford **Introduction to Haptics** (Hapkit) completion; **Modern Robotics**; a ROS 2 credential; HF LeRobot.
- **Senior tiers:** portfolio + system-design interview (sensor selection / architecture) + live **signal-debugging / sensor-characterization**; publications at IEEE **ToH** / Haptics Symposium / World Haptics / RSS / CoRL.

## 12. Adjacent & Related Niches
Primary consumer is **A4 compliant/force control** (this niche supplies the signals it closes loops on); feeds **A5 manipulation & grasping** (contact-rich, dexterous/in-hand via visuo-tactile policies) and **A7 VLAs / world models** (tactile VLAs, visuo-tactile world models). Pairs closely with **A1 vision perception** (visuo-tactile fusion), **A6 imitation/RL & representation learning**, and **A10 soft robotics** (e-skin/soft sensors share fabrication). **Haptics** is the human-facing dual (A9 HRI). Platform tracks: **C5 humanoid** (dexterous hands) and **C1 fixed arm**; verticals **B1 manufacturing** (assembly/insertion), **B4 surgical/healthcare** (haptic teleoperation), and rehab/prosthetics. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Niche research: `phase-1/.research/tactile-force-sensing.creds.md` + `.trending.md`. Taxonomy: `master-niche-taxonomy.md` cluster A1 (`✓`). §7 stamped mid-2026 — re-research before publish.*
