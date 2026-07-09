# Per-Niche Profile — Whole-Body, Compliant & Force Control

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; control-specific (whole-body / compliant / force) and trending-research signals are research-backed via `phase-1/.research/whole-body-compliant-control.*`. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Whole-Body, Compliant & Force Control · **Axis A cluster:** A4 (Control) · **Type:** `[F]` core (compliant/force/impedance) · whole-body `[S][◆]` · loco-manipulation & learned control `[S][★]`
**Related capabilities:** A1 tactile/force sensing · A4 classical/optimal/MPC + kinematics & dynamics (siblings) · A5 locomotion / loco-manipulation / contact-rich manip · A6 RL / imitation / sim-to-real · A7 whole-body VLAs / world-action models · **Platforms (C):** C5 humanoid · C4 quadruped · C2 mobile manipulator · C1 fixed arm · C8 soft/continuum · **Verticals (B):** B9 humanoid/service · B1 manufacturing (cobots) · B4 surgical/rehab · B14 inspection

---

## 1. Definition & Scope
Making a robot **regulate the forces and coordinated whole-body motion** it exerts on the world and on itself — so it can touch, push, carry, balance, and interact **safely and dynamically through contact** rather than treating contact as an error to be avoided. This is the **most classically-engineering slice** of AI-for-robotics: analytical mechanics, feedback/nonlinear control and numerical optimization dominate, and the "AI" enters as **learned control** (RL / sim-to-real) layered on model-based cores. **In scope:** impedance / admittance / compliant control, force & hybrid motion-force control, operational-space & whole-body (hierarchical-QP) control, loco-manipulation coordination, learned control for locomotion & whole-body, and the kinematics/dynamics + optimal-control/MPC layer *as applied to* these. **Out of scope (adjacent):** the sibling A4 niche of general classical/optimal/MPC theory (the receding-horizon toolbox itself), standalone locomotion gait design and grasp synthesis (A5), and tactile/force *sensing* hardware (A1).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Controls / Whole-Body Engineer | Implements/tunes impedance, force & whole-body controllers under supervision; runs sim + hardware experiments; integrates control libraries (Pinocchio/OCS2/MuJoCo) on real robots. |
| **L2** | Controls / Whole-Body Engineer | Owns a control subsystem end-to-end (dynamics model → WBC/MPC/RL policy → deploy); tunes gains & rewards; debugs sim-to-real; ships stable contact behaviour on real hardware. |
| **L3** | Senior Controls / Whole-Body Engineer | Designs the control architecture; makes model-based-vs-learned tradeoffs; sets stability/force benchmarks; owns the humanoid/loco-manip stack; mentors. |
| **L4/L5** | Staff / Principal Whole-Body Control Research Engineer | Sets the control research agenda; advances learned / whole-body / compliant SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **Control-specific re-weighting `✓`:** **Mechanical Engineering rises to Tier 1** — floating-base dynamics, Lagrangian mechanics, actuation and contact are home turf, and ME is arguably the *default* degree here; **Aerospace/Aeronautical → Tier-1-adjacent** (GNC / optimal-control / dynamics heritage transfers straight to trajectory-opt & MPC); **EE with a controls/systems concentration → strongly Tier 1** (state-space, feedback, Lyapunov/nonlinear); **Engineering Science / Applied Maths / "Systems & Control" degrees rise**. **Pure CS / AI-only** stays Tier 1 for the *learned-control* sub-area (RL, sim-to-real, software) but is **conditional** for the model-based whole-body/force core — require a transcript showing **dynamics + a controls course + optimization**.

**Highly-valued undergraduate programs `✓`** — **Michigan Robotics BSE** (the standout dedicated UG: **ROB 314 Introduction to Robot Controls** required core, **ROB 413 Legged Locomotion** elective) · **Caltech** (strongest control-theory undergrad — CDS/ME feedback foundation feeding CDS 110/112) · **MIT** (Course 2 MechE feedback sequence **2.004 / 2.14**, plus 6-4; 2.12 covers force/impedance) · **ETH Zürich / TUM** (deep ME + control-systems core) · **WPI Robotics Engineering** (the "Unified Robotics" dynamics/controls sequence) · **Georgia Tech** (ECE/ME controls).

**Acceptable postgraduate degrees** — MS/PhD in Robotics, **Mechanical / Aerospace Engineering** (dynamics & controls focus), **EE** (systems & control), CS/AI (for learned control), or **Applied Maths / "Systems & Control."**

**Highly-valued postgraduate programs — ranked by control strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **MIT · Stanford · ETH Zürich · CMU** | MIT **6.8210 Underactuated Robotics** (Tedrake, in Drake) — nonlinear dynamics, optimal/robust control, trajectory opt, LQR, legged locomotion & compliant manipulation — *the* anchor course · Stanford **CS327A** (Khatib) operational-space + **interactive whole-body control**, **CS223A / CS225A** joint/Cartesian/operational-space & real-robot **force control** · ETH **151-0851 Robot Dynamics** (Hutter/Siegwart) **floating-base** dynamics + IDSC **MPC**; RSL = world center for **learned legged locomotion** · CMU **16-745 Optimal Control & RL** (Z. Manchester) |
| Very strong | **Caltech · Michigan · UPenn (GRASP)** | Caltech **CDS 112** + the CDS **nonlinear-control** sequence (Lyapunov, feedback linearization, CLFs); Ames' lab = **control barrier functions + bipedal** (AMBER) · Michigan **ROB 314** (core) + **ROB 413 Legged Locomotion**; Grizzle = **hybrid zero dynamics** (Cassie) · UPenn **MEAM 5170 Control & Optimization** (Posa) — trajectory opt, underactuated systems, limit cycles, nonsmooth mechanics, MPC |
| Strong / specialized | **EPFL · Georgia Tech · TUM / DLR** | EPFL **MICRO-507 Legged Robots** (Ijspeert); **LASA** (Billard) = **compliant control via dynamical systems** (DS-based impedance) · GT **Ye Zhao** (contact-rich trajectory opt, legged), Egerstedt (networked/mobile control) · TUM / **DLR** (Albu-Schäffer) — **passivity-based & Cartesian impedance** of flexible-joint robots; the DLR-LWR → **KUKA iiwa** torque-control lineage |

*(Imperial, Oxford, TU Delft = control-by-research, thinner dedicated coursework for this niche.)*

**Highly-valued certifications `✓`** — **MIT Underactuated Robotics** (free at `underactuated.csail.mit.edu`; also **edX 6.832x**) — whole-body dynamics, trajectory optimization, legged locomotion, compliant manipulation, in Drake — **the single most niche-relevant open course** · Northwestern **Modern Robotics** (Lynch): **Course 4 "Robot Motion Planning and Control"** is *the* force-control MOOC (textbook Ch. 11: motion control, force control, hybrid motion-force), Course 3 = dynamics · **CMU 16-745 Optimal Control & RL** (open notes + full YouTube series — best free optimal-control-for-robots resource, no formal cert) · **Georgia Tech "Control of Mobile Robots"** (Egerstedt, Coursera) · **Hugging Face Deep RL** (free cert — the learned-control track) · **NVIDIA Isaac Lab / GR00T + DLI** (legged RL sim-to-real) · Penn Robotics **MicroMasters** (edX — the linear-systems/estimation layer). *(There is **no dedicated "force-control certification"** — interaction control lives inside broader courses; also **no official ROS cert / no NVIDIA robotics exam** — see grounding ref.)*

**Experience & portfolio** — L1: internship/academic; an impedance/force controller or MPC in sim + a legged/arm sim project. L2: 2–4 yr, a real-hardware compliant/force-controlled task (peg-in-hole, wiping, contact regulation) **or** a sim-to-real RL locomotion policy + benchmark numbers. L3: 5–8 yr, ≥1 real whole-body / loco-manipulation deployment led. L4/L5: 8+ yr and/or first-author papers (RSS / CoRL / ICRA / **Humanoids** / RA-L / IJRR / T-RO).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **C++** and **Python** for **hard real-time** control loops
- **Rigid-body & floating-base dynamics**; forward/inverse kinematics & dynamics; Jacobians; contact & friction-cone models
- **Classical & state-space feedback control** (PID, LQR, pole placement, observers/state estimation)
- **Impedance / admittance / compliant** and **force & hybrid motion-force** control
- **Operational-space** control + **task-priority / null-space** redundancy resolution
- **Whole-body control** via **hierarchical / weighted QP** under contact & friction constraints
- **Optimal control & MPC** (iLQR / DDP, whole-body MPC) and **trajectory optimization**
- **Numerical optimization** (QP / convex / NLP) and real-time solvers
- **Dynamics/control libraries**: Pinocchio, OCS2 / Crocoddyl, TSID; MuJoCo or Drake
- **ROS 2** + real-robot integration; **torque-control** interfaces (`ros2_control`)
- **Learned control**: RL fundamentals (PPO), **sim-to-real** transfer, PyTorch
- **Massively-parallel GPU RL** (Isaac Lab / IsaacGym)

**Preferred / differentiating**
- **Legged locomotion control** (ZMP / capture point, **hybrid zero dynamics**, **CBFs**)
- **Loco-manipulation** / mobile-manipulator whole-body coordination
- **Humanoid whole-body control**; **MoCap-retargeted RL motion tracking** (the H2O/ASAP recipe)
- **Learned / sensorless force** & **variable-impedance** control (policies that output stiffness/force)
- **Passivity- & energy-based** control; **safe / constrained learned control** (CBFs, safety filters, hierarchical opt)
- **Differentiable simulation & differentiable control**
- **Whole-body foundation / world-action models** (WholeBodyVLA, MotionWAM, GR00T)
- Publications at **RSS / CoRL / ICRA / Humanoids / RA-L**; real-world deployment

**Tools & tech stack** — *Languages:* C++ (real-time), Python; Julia/Drake for research · *Dynamics & opt:* Pinocchio, Crocoddyl, OCS2, TSID, Drake, CasADi, OSQP / qpOASES / ACADOS `~` · *Sim:* MuJoCo / MuJoCo Playground (**MJPC**), Isaac Sim/Lab, IsaacGym, Genesis, Newton · *Learning:* PyTorch, **RSL-RL** / `legged_gym` / `rl_games` `~`, Stable-Baselines3, Hugging Face LeRobot · *Middleware:* ROS 2, `ros2_control` · *Hardware:* Unitree (G1 / H1-2 / Go2), Boston Dynamics, ANYmal, Franka (torque), **KUKA iiwa**, Trossen; ATI / Bota F/T sensors

**Bar by tier** — L1: solid on the required list in sim + basic real hardware · L2: ships a real compliant / whole-body subsystem, fluent across **model-based *and* learned** control · L3: architects control stacks, deep in ≥1 differentiating area · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Control slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** linear algebra & matrix analysis *(ETH 151-0851, UPenn ESE 5000)* · ODEs & dynamical / nonlinear systems *(Caltech CDS, Michigan ROB 314)* · calculus of variations & numerical optimization — QP/convex/NLP *(CMU 16-745, UPenn MEAM 5170)* · probability & state estimation — Kalman *(Caltech CDS 112)* · Python + C++ real-time, Drake/Julia stack *(MIT 6.8210, CMU 16-745)*.
- **Core robotics:** rigid-body & floating-base kinematics/dynamics — Lagrangian / Newton-Euler / Featherstone *(ETH 151-0851, Modern Robotics C2/C3, UPenn MEAM 5200)* · classical & state-space feedback control — PID/LQR/pole placement *(Michigan ROB 314, Caltech CDS 110/112)* · motion planning & trajectory generation *(MIT 6.8210, UPenn MEAM 5170)* · sensors & actuation for control — torque sensing, series-elastic / flexible-joint *(TUM/DLR)*.
- **Niche-specific:** impedance / admittance / compliance control — Hogan *(Stanford CS223A, Modern Robotics C4)* · force & hybrid motion-force control *(Modern Robotics C4 Ch. 11, Stanford CS225A)* · operational-space & task-priority / null-space redundancy — Khatib *(Stanford CS327A)* · whole-body control — hierarchical/weighted QP, contact & friction-cone *(Stanford CS327A, MIT 6.8210, ETH RSL)* · passivity- / energy-based & variable-impedance *(TUM/DLR Albu-Schäffer)* · optimal control & MPC — DDP/iLQR, whole-body MPC *(CMU 16-745, UPenn MEAM 5170, ETH IDSC)* · underactuated & hybrid systems; legged-locomotion control — ZMP/capture point, HZD, CBFs *(MIT 6.8210, Michigan ROB 413, EPFL MICRO-507, Caltech/Ames)* · loco-manipulation & mobile-manipulator whole-body coordination *(ETH RSL, GT/Zhao)*.
- **Frontier/advanced:** learned control / RL for locomotion & whole-body + sim-to-real — domain randomization, massively-parallel GPU RL *(ETH RSL on Isaac Lab, Michigan)* · RL-augmented / residual model-based control — RL over MPC/WBC *(2024–26 loco-manip literature)* · differentiable simulation & differentiable control *(CMU 16-745, MIT/Drake)* · safe / constrained learned control — CBFs, safety filters, hierarchical optimization *(Caltech/Ames, Michigan/Vasudevan)* · humanoid whole-body & expressive/contact-rich WBC — teleop-retargeted, MPC+RL *(2024–26 humanoid research)*.

## 6. Training Programme Design & Duration `✓`
Whole-body/compliant-control specialization on the shared 5-phase, ~1,400-hour base (grounding ref §D), with Phase 4 + capstone tuned to this niche. This is the **maths/optimization/dynamics-heaviest** niche, so Phases 1–2 run dynamics- and control-forward, and Phase 4 deliberately blends the **model-based** WBC/MPC core with **learned** control.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Linear algebra, ODEs/dynamical systems, optimization, Python/C++, classical ML | 2.0 mo | 6 mo | 300 | Maths + optimization fluency |
| 2. Core robotics | Kinematics/dynamics, classical & state-space control, **ROS 2**, MPC basics | 2.0 mo | 6–7 mo | 320 | Model & command a robot in sim + real |
| 3. AI/ML depth | Deep learning, **RL (PPO)**, sim-to-real fundamentals | 2.0 mo | 6 mo | 300 | Policy learning + transfer |
| 4. **Whole-body / compliant-control specialization** | Impedance & force control, operational-space & whole-body QP, optimal control/MPC, legged & loco-manip, **learned WBC + sim-to-real** | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Sim-to-real whole-body **or** force-controlled contact task on real hardware + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior controls / whole-body engineer |

Anchor courses per phase: **Modern Robotics C3/C4** + **MIT Underactuated Robotics** (Phase 4 core), **CMU 16-745** (optimal control/MPC), **NVIDIA Isaac Lab / Hugging Face Deep RL** (learned-control + sim-to-real). Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp** (hardware/control-loop debug friction is real — budget it).

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** Whole-body control's "DINO moment" is a **recipe, not a single model**: retarget human MoCap → RL tracking policy in sim → sim-to-real, now being wrapped into pretrained whole-body foundation / world-action models. `🆕` = 2026 release; **treat 2026 preprints and vendor benchmark numbers as unverified.**

- **Whole-body motion tracking (the dominant learned-control paradigm):** **H2O / OmniH2O** (human-to-humanoid teleop + tracking — the keypoint-retargeting lineage origin) · **ExBody2** (large-scale expressive tracking, difficulty-weighted sampling) · **HOVER** (NVIDIA — one multi-mode neural WBC over many command spaces; ICRA 2025) · **ASAP** (closes the sim-real dynamics gap with a learned residual "delta-action" model — the agile-skills reference, RSS 2025) · **GMT** (single unified policy + motion Mixture-of-Experts) · **BeyondMimic** (tracking → versatile control via guided **diffusion**, test-time steerable) · **TWIST / UniTracker / KungfuBot** (teleop-distilled imitation; universal tracker; highly-dynamic skills) · **HumanPlus** (single-RGB shadowing; CoRL 2024) · 🆕 **Robust & Generalized Humanoid Motion Tracking**, 🆕 **Humanoid-GPT** (scaling data/structure for zero-shot tracking).
- **Loco-manipulation control (humanoid + legged) — the hardest open problem:** **FALCON** (dual-agent lower-balance / upper-EE-tracking with a **force curriculum** — the force-adaptive humanoid reference) · **SkillBlender** (runtime **skill blending** of pretrained primitives) · **ResMimic** (loco-manip via **residual** learning on a tracker) · **DemoHLM / HDMI** (one-demo generalizable loco-manip; interactive WBC from human video) · **RoboDuet** (quadruped: two cooperating loco+manip policies, cross-embodiment — the legged reference) · **Visual Whole-Body Control / WildLMa / MLM** (vision-driven, in-the-wild VR-teleop skill library, multi-task quadruped+arm WBC) · 🆕 **VOFA** (visual object-goal pushing, force-adaptive), 🆕 **tactile-aware quadrupedal loco-manip**.
- **Compliant / impedance / force control — learned (gains → *policies that output stiffness/force*, often sensorless):** **SoftMimic** (learns *compliant* WBC from example motions — naturally soft, safe contact) · **Learning Force Control for Legged Manipulation** (RL direct force control *without* force sensing) · 🆕 **FAME** (force-adaptive RL conditioned on a learned latent of interaction forces, no wrist sensor; H1-2) · **Adaptive Compliance Policy / FILIC** (approximate compliance for diffusion-guided control; dual-loop force-guided IL + impedance torque) · 🆕 **Stiffness Copilot** (impedance *policy* for contact-rich teleop), 🆕 **Minimalist Compliance Control**, **HMC** (heterogeneous meta-control) · **Surveys:** *Compliant Force Control: A Survey* (MDPI, Jul 2025), 🆕 *Safe Learning for Contact-Rich Tasks → Safe Foundation Models*.
- **Classical WBC / optimization backbone (still the deployment workhorse):** **Whole-Body MPC with MuJoCo (MJPC)** (real-time full-dynamics MPC via sampling/iLQR) · **TSID-WBC · OCS2 · Pinocchio** (task-space-inverse-dynamics + optimal-control + fast-dynamics stack under nearly all deployed WBC) · 🆕 **Whole-Body Inverse-Dynamics MPC for Legged Loco-Manipulation**, **WBC for humanoids with heavy limbs** (model-based). Learned policies dominate papers, but model-based **QP/MPC** still ships on most humanoids and **hybridizes** with RL.
- **Foundation / world-action models for whole-body control (the 2026 frontier — the niche's "GR00T moment"):** 🆕 **WholeBodyVLA** (unified *latent* VLA for whole-body loco-manip; ICLR 2026) · 🆕 **MotionWAM** (foundation **world-action model** for real-time humanoid loco-manip) · 🆕 **General Humanoid WBC via Pretraining + Fast Adaptation**, 🆕 **Scalable & General WBC for Cross-Humanoid Locomotion**, **From Experts to a Generalist** · fed by **NVIDIA GR00T N-series** (world-action framing).
- **Sim substrates, sim-to-real & benchmarks:** **Isaac Lab / IsaacGym · MuJoCo Playground · Genesis · Newton** (differentiable GPU physics) — the training substrates; **ASAP**-style real2sim residuals are the sim-to-real pattern · 🆕 **VIRAL** (visual sim-to-real at scale for humanoid loco-manip) · **HumanoidBench** (31-task whole-body loco+manip; Unitree H1 + Shadow hands, MuJoCo; RSS 2024) · **LocoMuJoCo** (imitation-learning locomotion benchmark) · shared fuel **AMASS** (MoCap retargeting) · trackers **awesome-humanoid-robot-learning**, **humanoid-wbc-review**.

*Net trend: whole-body control has collapsed onto a common learned recipe — human-MoCap-retargeted RL motion tracking, sim-to-real via learned residual/force models, and force & stiffness now *learned* (often sensorless) rather than tuned — and is now being wrapped into pretrained, language-conditioned whole-body foundation / world-action models (WholeBodyVLA, MotionWAM), while classical whole-body QP/MPC (Pinocchio / OCS2 / MJPC) remains the deployment backbone these policies hybridize with. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Cart-pole / Acrobot: **LQR** balance + trajectory optimization in **Drake / MuJoCo** | Dynamics + linear/optimal control; stabilizes an underactuated system |
| Foundational | Joint-space → **operational-space** control of a 7-DoF arm in sim | Kinematics/dynamics + Khatib formulation; tracks a Cartesian trajectory with null-space posture |
| Applied | **Impedance / hybrid force-motion** peg-in-hole or surface-wiping on **Franka / UR / iiwa** | Compliant & force control; robust insertion / regulated contact force (<1 mm, target N) |
| Applied | **Whole-body QP** controller for a mobile manipulator or humanoid in sim (Pinocchio / TSID / OCS2) | Hierarchical QP, contact & friction-cone constraints; balances while reaching |
| Advanced | **RL locomotion** + domain randomization → **sim-to-real** on a quadruped (Isaac Lab → Go2 / ANYmal) | Massively-parallel RL + transfer; sim-trained gait walks & recovers from pushes on real hardware |
| Advanced | **MoCap-retargeted whole-body motion tracking** (H2O / ASAP-style) on a humanoid | The learned-WBC recipe; tracks reference motion with a sim-to-real residual |
| Advanced | **Learned / sensorless force control** for a legged-manipulator (FAME / legged-force style) | Force control without a wrist F/T sensor; applies a regulated interaction force |
| Capstone | **Sim-to-real loco-manipulation**: legged+arm opens a door / pushes a cart with force adaptation | End-to-end frontier stack; whole-body coordination + compliant contact on real hardware |

## 9. Required Lab Setup / Hardware / Resources
- **Legged / humanoid platforms:** Unitree **Go2 / B2** (quadruped), Unitree **G1 / H1 / H1-2** (humanoid) · Boston Dynamics **Spot** (+ Atlas, research) · ANYbotics **ANYmal** · Fourier **GR-1** `~` · **Berkeley Humanoid / MIT Mini-Cheetah** open-hardware lineages `~`.
- **Arms — compliant / torque-controlled:** **Franka Research 3** (torque) · **KUKA LBR iiwa** (the DLR-LWR lineage) · **Kinova Gen3** · **UR e-series** (admittance) · **Trossen** (loco-manip arms).
- **Force/torque & actuation:** **ATI / Bota** 6-axis F/T sensors · series-elastic / quasi-direct-drive actuators (Unitree, Mini-Cheetah-style) `~`.
- **Compute:** RTX 4090 / A6000 workstation for GPU RL; A100/H100 for large-scale training; a **real-time Linux (PREEMPT_RT)** PC for the control loop.
- **Software / sim & control libs:** MuJoCo / **MuJoCo Playground (MJPC)** · Isaac Sim/Lab, IsaacGym · Drake · Genesis / Newton · **Pinocchio · Crocoddyl · OCS2 · TSID** · CasADi · OSQP / qpOASES / ACADOS `~` · ROS 2 + `ros2_control` · **RSL-RL / legged_gym** `~`.
- **Datasets & benchmarks:** **AMASS** (MoCap for retargeting) · **HumanoidBench** (31-task whole-body) · **LocoMuJoCo** (imitation locomotion) · LAFAN1 motion set `~` · loco-manip task suites. Trackers: **awesome-humanoid-robot-learning**, **humanoid-wbc-review**.

## 10. Partnerships & Ecosystem
- **Hardware vendors:** Unitree · Boston Dynamics · ANYbotics · Fourier Intelligence · Franka Robotics · KUKA · Universal Robots · Kinova · ATI / Bota.
- **Sim / compute:** NVIDIA (Isaac Lab, DLI, Inception) · Google DeepMind (MuJoCo / MuJoCo Playground).
- **Academic labs (control powerhouses):** MIT (Tedrake/RLG; Kim Biomimetics) · **ETH RSL (Hutter)** · Stanford (Khatib) · CMU (Manchester; Atkeson) · **Caltech (Ames / AMBER)** · **Michigan (Grizzle)** · UPenn GRASP (Posa) · EPFL (Ijspeert BioRob; **Billard LASA**) · **TUM / DLR (Albu-Schäffer)** · IIT.
- **Open-source communities:** **Pinocchio / Stack-of-Tasks** (Gepetto) · **OCS2** (ETH) · **Drake** (MIT/TRI) · MuJoCo · Hugging Face **LeRobot** · Isaac Lab / `legged_gym` community.
- **Industry programs:** NVIDIA Inception · humanoid players (Figure, 1X, Agility, Unitree, Boston Dynamics, Fourier, Booster `~`) · Toyota Research Institute (LBM / WBC) · Boston Dynamics AI Institute.
- **Standards (applied):** ISO 10218-1/2, **ISO/TS 15066** (cobots / force & power limiting), **ISO 13482** (personal-care robots).

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (dynamics derivations, controller-stability / passivity proofs, QP formulation).
- **Project rubrics** with objective metrics: contact/force-tracking error, impedance/stiffness fidelity, whole-body task success **under disturbance** (push recovery), locomotion sim-to-real success & robustness, MPC solve rate / real-time factor, energy / cost-of-transport.
- **Standardized benchmarks** as portable evidence: **HumanoidBench**, **LocoMuJoCo**; increasingly real-hardware push-recovery & force-tracking demos.
- **Recognized certifications as evidence:** MIT **Underactuated Robotics** completion; **Modern Robotics** Course 3/4; **Hugging Face Deep RL**; a ROS 2 credential.
- **Senior tiers:** portfolio + system-design interview (**design a WBC/MPC stack**) + live control-loop / sim-to-real debugging.

## 12. Adjacent & Related Niches
Pairs closely with the sibling **A4 Classical/Optimal control & MPC** and **kinematics & dynamics** niches (its analytical layer); feeds the **C5 Humanoid**, **C4 Quadruped**, and **C2 Mobile-Manipulator** platform tracks; couples with **A5 locomotion / loco-manipulation / contact-rich manipulation**, **A6 RL / imitation / sim-to-real**, **A1 tactile & force sensing**, and the **A7 whole-body VLAs / world-action models** frontier. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Niche research: `phase-1/.research/whole-body-compliant-control.{creds,trending}.md`. Taxonomy: `master-niche-taxonomy.md` cluster A4 (`✓`). §7 stamped mid-2026 — re-research before publish.*
