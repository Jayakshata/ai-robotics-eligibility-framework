# Per-Niche Profile — Classical, Optimal & Predictive Control

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; control-specific credential and trending-research signals are research-backed (`phase-1/.research/control-classical-optimal-mpc.{creds,trending}.md`). `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Classical, Optimal & Predictive Control · **Axis A cluster:** A4 (Control) · **Type:** `[F]` (learned / GPU-sampling / differentiable-MPC sub-areas `[S][★]`)
**Related capabilities:** A2 state estimation · A3 motion/trajectory planning · A4 compliant & whole-body control · A6 RL for control · A7 world/predictive models · A8 differentiable sim · **Platforms (C):** C4 quadruped · C5 humanoid · C6 drone/UAV · C1 fixed arm · **Verticals (B):** B1 manufacturing · B10 autonomous vehicles · B11 aerial/UAS · B12 space

---

## 1. Definition & Scope
The **model-based control spine of robotics** — turning a dynamics model into commanded torques/forces that make a robot **track a trajectory, reject disturbances, and respect constraints** in real time. It is the most theory-and-continuous-math-heavy capability in Axis A, sits *under* nearly every moving robot, and its home turf is EE / ME / Aerospace / Applied-Maths control theory rather than CS/AI. **In scope:** classical feedback control (PID, root-locus, frequency-domain/Bode-Nyquist), linear systems & state-space (controllability/observability, pole placement), optimal control (LQR/LQG, Pontryagin, dynamic programming), model-predictive control (receding-horizon QP/NLP; robust/stochastic/distributed/sampling-based MPC), nonlinear & Lyapunov-based control, trajectory optimization, and **robot kinematics & dynamics modeling** — the analytical-mechanics layer under all of it. **Out of scope (adjacent):** compliant/force/impedance interaction control and whole-body control (A4 siblings), pure learned/neural policies (A4 `[S][★]` / A6 RL), and state-estimation/filtering theory (A2 — used here, owned there).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Controls Engineer | Implements/tunes PID/LQR/MPC loops under supervision; models kinematics/dynamics; runs sim + bench experiments; integrates solver libraries on hardware. |
| **L2** | Controls / GNC / MPC Engineer | Owns a control subsystem end-to-end (model→controller→deploy); stabilizes and tunes on real hardware; ships an MPC or optimal controller to a real deployment. |
| **L3** | Senior Controls Engineer | Designs the control architecture; makes model-based-vs-learned and reduced-vs-full-order tradeoffs; sets stability/robustness margins and benchmarks; mentors. |
| **L4/L5** | Staff / Principal Control Research Engineer | Sets the control research agenda; advances MPC / optimal-control / learned-dynamics SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **A4-specific reweighting `✓` (the largest of any Axis-A niche): EE/ECE, Mechanical Engineering, Aerospace/Aeronautical Engineering, and Applied Mathematics all rise to Tier 1** — feedback/state-space (EE), rigid-body **dynamics modeling** (ME), flight **GNC** & trajectory optimization (Aero), and optimization/dynamical-systems theory (Applied Maths) are load-bearing here. **A dedicated *Systems & Control / Control Engineering* degree is the single strongest match and outranks a generic "Robotics" degree.** A **pure CS/AI degree ranks relatively lower** than in perception/learning niches — admit only with a transcript showing a controls course **+ convex/numerical optimization + a dynamics/dynamical-systems course**.

**Highly-valued undergraduate programs `✓`** (control-first, named feedback-control courses — not the robotics-major brand) — **Caltech CDS** (*CDS 110 Introduction to Control Theory*; Åström & Murray text) · **UC Berkeley** (*EE C128 / ME C134 Feedback Control Systems*) · **Michigan Robotics BSE** (*ROB 501 Mathematics for Robotics*, Grizzle — controls-track gateway) · **MIT** (*16.30–16.31 Feedback Control*, *2.004 Dynamics & Control*) · **Georgia Tech** (Egerstedt mobile-robot control sequence).

**Acceptable postgraduate degrees** — MS/PhD in **Systems & Control / Control Engineering**, EE, ME, Aerospace, or Applied Maths (with a controls/optimization focus); or Robotics/CS/AI with a demonstrated controls-and-dynamics spine.

**Highly-valued postgraduate programs — ranked by A4 strength `✓`**
| Tier | Programs | The niche-defining courses |
|------|----------|-----------|
| World-leading (control epicenters) | **UC Berkeley · ETH Zürich · CMU · Stanford · MIT · Caltech** | Berkeley **ME C231A** (Borrelli, **MPC Lab** — global MPC hub) + ME 233 (LQR/Kalman/LQG/DP) · ETH **Model Predictive Control / Advanced MPC / Distributed MPC** (Zeilinger) + 151-0563 Dynamic Programming & Optimal Control (D'Andrea) + **151-0851 Robot Dynamics** (Hutter) · CMU **16-745 Optimal Control & RL** (Z. Manchester, Julia) + 24-677 Modern Control · Stanford **AA203 Optimal & Learning-Based Control** (Pavone) + EE364a/b Convex Opt (Boyd) + CS223A (Khatib) · MIT **6.832 Underactuated Robotics** (Tedrake — the single most A4-relevant course) + 2.152 Nonlinear (Slotine) + 6.231 DP & Stochastic Control (Bertsekas) + 16.323 · Caltech **CDS 112 Optimal Control & Estimation** |
| Strong / dedicated Systems-&-Control MSc *(these RISE above a generic Robotics MSc for A4)* | **TU Delft (DCSC) · KTH · Michigan · Georgia Tech** | TU Delft **MSc Systems & Control** (robust control, MPC, filtering & ID, nonlinear/hybrid) · KTH **MSc Systems, Control & Robotics** · Michigan EECS 560 Linear Systems + EECS 562 / AE 551 Nonlinear (Grizzle) · GT **ECE 6553 Optimal Control & Optimization** + ECE 6550 Linear Systems |
| Also strong (control-deep faculty) | **Lund · Cambridge · UC San Diego · UT Austin · Imperial · EPFL** | Lund (Åström legacy) · Cambridge Information Engineering · UCSD (Krstić — nonlinear/adaptive) · H∞/robust, adaptive, and GNC/aerospace-control specializations |

*(ETH's flagship MSc is literally "**Robotics, Systems and Control**" — the name encodes the A4 fit. Note the inversion vs. the general set: control-first departments — Caltech CDS, Berkeley, Michigan controls, ETH IDSC/Automatic Control Lab — and dedicated MSc Systems & Control outrank a generic Robotics MSc here.)*

**Highly-valued certifications `✓`** — Northwestern **Modern Robotics** (Coursera; **Course 3 Robot Dynamics** + **Course 4 Motion Planning & Control** — the gold-standard MOOC touching kinematics→dynamics→control) · **MathWorks Certified MATLAB Associate → Professional** (the recognized vendor credential; MATLAB/Simulink is control's lingua franca — free prep: **Control Design Onramp with Simulink**) · **Steve Brunton *Control Bootcamp*** (free, ubiquitous — linear systems, LQR, LQG/Kalman, robust, MPC) · **CU Boulder *Control Systems Analysis*** specialization (Pao; ECEA 5800/5801/5802, stackable to CU MS-EE credit) + **Spacecraft Dynamics & Control** (Schaub, GNC slant) · **Georgia Tech *Control of Mobile Robots*** (Egerstedt) · **MIT 6.832x Underactuated** (edX) · **NPTEL/IIT-Madras *Model Predictive Control*** (dedicated MPC MOOC w/ MATLAB labs). *A4 has no single "MPC certificate" — the MathWorks cert + Modern Robotics + a control MOOC form the credential spine. (Grounding-ref caveat holds: no official ROS cert, no NVIDIA robotics exam.)*

**Experience & portfolio** — L1: internship/academic; a working PID/LQR + a sim MPC (cart-pole/quadrotor). L2: 2–4 yr, a deployed MPC or optimal controller on real hardware (arm/quadrotor/quadruped) with tuning + stability evidence, a trajectory-optimization project. L3: 5–8 yr, ≥1 real control system led end-to-end (model-ID→deployment). L4/L5: 8+ yr and/or first-author papers (**CDC / ACC / L-CSS / IEEE TAC / TCST**; ICRA/RSS/CoRL for robot control).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **linear algebra, ODEs / dynamical systems, and convex & numerical optimization** (the mathematical engine)
- **Classical feedback control**: PID, root locus, Bode/Nyquist, loop-shaping, gain/phase margins
- **Linear systems & state-space**: controllability/observability, pole placement, **LQR/LQG, Kalman filtering**
- **Model-predictive control**: receding-horizon formulation, constrained **QP/NLP**, feasibility & closed-loop stability
- **Optimal control & trajectory optimization**: Pontryagin / dynamic programming, **iLQR/DDP**, direct collocation
- **Robot kinematics & dynamics modeling**: FK/IK, Lagrangian / Newton–Euler dynamics, contact
- **MATLAB/Simulink** for control design + **C++/Python** for real-time implementation
- **Real-time deployment**: discretization, solver latency budgeting, embedded/edge execution
- **System identification & model validation**; simulation in Drake / MuJoCo / Isaac

**Preferred / differentiating**
- **Nonlinear & Lyapunov-based control**; **robust/H∞ & adaptive** control
- **Sampling-based / GPU MPC** (MPPI, MuJoCo MPC, DIAL-MPC, Hydrax)
- **Whole-body & contact-implicit MPC** on legged/humanoid hardware
- **Learning-based / data-driven MPC**, **control barrier functions (CBFs)**, safe learning
- **Differentiable dynamics** (Pinocchio, MuJoCo MJX) & **differentiable MPC / auto-tuned gains**
- **Koopman / learned-linear-model** predictive control
- **MPC × RL hybrids**; world-model / model-based-RL planning (TD-MPC2, Dreamer)
- **Julia** control ecosystem; embedded solvers (**acados, TinyMPC**)
- Publications at **CDC / ACC / L-CSS / TAC / TCST**, ICRA/RSS/CoRL

**Tools & tech stack** — *Languages:* C++, Python, **MATLAB/Simulink**, Julia · *OCP/QP solvers:* **acados, CasADi, OSQP**, IPOPT, Crocoddyl, OCS2, TinyMPC · *Dynamics:* **Pinocchio**, MuJoCo/MJX, Drake, RBDL · *Sim:* MuJoCo, Isaac Sim/Lab, Drake, Gazebo · *Sampling-MPC:* MuJoCo MPC, Hydrax, Judo · *Learning:* PyTorch/JAX, TD-MPC2 · *Middleware:* ROS 2, ros2_control · *Hardware/RT targets:* Franka, UR, Unitree Go2/G1, quadrotors, dSPACE/Speedgoat, STM32/Jetson.

**Bar by tier** — L1: solid on the required list in sim + basic hardware · L2: ships a real MPC/optimal controller, fluent across the OCP toolchain · L3: architects control systems, deep in ≥1 differentiating area · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Control slice of the canonical robotics/AI subject set, annotated with representative courses. **Optimization is disproportionately load-bearing here.**
- **Foundational maths & CS:** linear algebra & matrix analysis · ODEs & **dynamical-systems theory** · probability & stochastic processes · **numerical & convex optimization** *(Stanford EE364a, CMU 16-745)* — the engine of optimal control/MPC · C++/Python + **MATLAB·Simulink** (increasingly **Julia**).
- **Core robotics:** **robot kinematics & dynamics modeling** *(Stanford CS223A, ETH 151-0851 Robot Dynamics, Modern Robotics Course 3)* — the "modeling" half of A4's scope · state estimation / Kalman & nonlinear filtering *(Caltech CDS 112, Berkeley ME 233)* · ROS 2 · simulation (Drake/MuJoCo/Isaac).
- **Niche-specific (the A4 core):** classical feedback control — PID, root locus, Bode/Nyquist *(Caltech CDS 110, Berkeley EE C128, CU ECEA 5801)* · linear systems / state-space — controllability, observability, pole placement *(Michigan EECS 560, GT ECE 6550)* · optimal control — LQR/LQG, Pontryagin, DP *(Berkeley ME 233, MIT 6.231, Caltech CDS 112, GT ECE 6553)* · **MPC** — receding-horizon, constrained QP/NLP, robust·stochastic·distributed *(Berkeley ME C231A, ETH MPC/Advanced/Distributed MPC)* · nonlinear & Lyapunov-based control *(MIT 2.152, Michigan EECS 562)* · robust/H∞ & adaptive control *(UCSD; TU Delft)* · trajectory optimization — DDP/iLQR, collocation *(CMU 16-745, MIT 6.832, Stanford AA203)*.
- **Frontier/advanced `~`:** learning-based & data-driven MPC · safe-learning & **control barrier functions** (Zeilinger/Ames) · differentiable & GPU-accelerated MPC (acados, CasADi, OSQP) · **RL↔optimal-control unification** (DP as common root; CMU 16-745, MIT 6.7920) · MPC + world/predictive models.

## 6. Training Programme Design & Duration `✓`
Control-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), with Phase 4 tuned to this niche. Foundations tilt harder into **optimization**; Phase 3 substitutes the perception-heavy default with the estimation + RL/world-model bridge that A4 actually leans on.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths (linear algebra, ODEs, **convex optimization**), Python/C++/**MATLAB**, classical ML | 2.0 mo | 6 mo | 300 | Optimization & maths fluency |
| 2. Core robotics | **Kinematics/dynamics modeling**, classical + state-space control, ROS 2, sim (Drake/MuJoCo) | 2.0 mo | 6–7 mo | 320 | Model & stabilize a robot in sim + real |
| 3. AI/ML depth | Deep learning, **state estimation**, RL / model-based RL (the learned-control bridge) | 2.0 mo | 6 mo | 300 | Estimation + learning foundations |
| 4. **Control specialization** | Optimal control (LQR/DP), **MPC** (QP/NLP, robust, sampling/GPU), trajectory opt, nonlinear/Lyapunov, learned/differentiable MPC | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Whole-body / contact-implicit MPC on a real quadruped/arm + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior controls engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The center of gravity has shifted from convex/reduced-order MPC to **GPU sampling-based MPC over full-order differentiable dynamics** and **learned-model / RL–MPC hybrids**. `🆕` = 2026 release; treat vendor/benchmark claims as author-reported.

- **Sampling-based / GPU MPC (the field's "SAM2 moment"):** gradient-free, GPU-parallel rollout MPC needing no linearization or contact schedule — **DIAL-MPC** (LeCAR/CMU, ICRA 2025 — training-free full-order torque-level legged control via diffusion-style MPPI annealing) · **MuJoCo MPC / MJPC** (DeepMind — the de-facto sampling-MPC baseline: Predictive Sampling + iLQG) · **Hydrax** (Kurtz — MPPI/CEM on GPU via JAX/MJX) · **Judo** (RSS 2025 — standardizes planners/benchmarks) · 🆕 **Massively-Parallel Sampling MPC for contact-rich manipulation** (JAX+MJX real-to-sim-to-real Franka Push-T; "MTP" beats CEM/MPPI/PS) · 🆕 **Feedback-MPPI** (LQR-style feedback via rollout differentiation) · Generative Predictive Control / flow-matching samplers.
- **Whole-body & contact-implicit MPC on real hardware:** **Whole-Body MPC with MuJoCo** (2025 — iLQR + finite-difference derivatives, real-time on quadrupeds/humanoids) · 🆕 **Inverse-Dynamics Trajectory Optimization for CI-MPC** (Kurtz et al., IJRR **Jan 2026** — >100 Hz on a 20-DoF bimanual task, no predefined contact sequence) · 🆕 **WB Inverse-Dynamics MPC for legged loco-manipulation**.
- **Classical solver stacks & embedded/edge optimal control:** **acados** (embedded NMPC standard) + 🆕 **L4acados** (IEEE TCST 2026 — plugs NN/GP residual models into acados for real-time learning-based MPC) · **Crocoddyl** (DDP/FDDP under contact) · **OCS2** (switched-systems MPC for legged/mobile) · **TinyMPC** (ADMM MPC on microcontrollers) + Conic-TinyMPC + ReLU-QP · 🆕 **GATO** (ICRA 2026 — GPU batched trajectory optimization for edge MPC) · **Primal-Dual iLQR** (2025, GPU iLQR).
- **Differentiable kinematics/dynamics engines (the reusable "DINO-style" backbone):** **Pinocchio** (foundational fast rigid-body dynamics with analytical derivatives; cited across nearly all model-based work) · 🆕 **frax** (Stanford ASL — pure-Python JAX kinematics/dynamics, ~C++ speed, ~100M dyn-computations/s batched) · **MuJoCo MJX + MuJoCo Warp** (GPU-resident MuJoCo) + 🆕 **MuJoCoUni** · **Brax / Dojo / jaxsim** · **DiffTune-MPC / DiffCoTune** (differentiate through closed-loop MPC to auto-tune gains).
- **Koopman & learned-linear-model MPC:** lift nonlinear/contact dynamics into a linear space so LQR/linear-MPC applies — 🆕 **Koopman global linearization of contact dynamics** (first scaling to high-DoF humanoid/quadruped) · 🆕 **MPPI-DK** (deep-Koopman model accelerates sampling MPC; quadruped hardware) · Koopman-MPC for bipedal & soft robots.
- **MPC × RL hybrids (the convergence story):** MPC as training-time teacher *and* runtime planner over RL skills — 🆕 **MPC-Guided RL / πⁿMPC** (batched GPU MPC guides humanoid loco+manip RL) · 🆕 **Sumo** (RAI Institute + CMU — sampling-MPC steers a pretrained whole-body RL policy; retasks Spot/Unitree-G1 by editing only the cost/object model) · 🆕 **MPC-Injection** · **TD-MPC2** (latent world-model + MPC planning — the widely-adopted bridge baseline).
- **Learned/neural dynamics & world-model control:** **Deep Lagrangian Networks / Hamiltonian NNs** (energy-consistent structure-preserving dynamics) · **Sparse Neural Dynamics** (tractable inside MPC) · **DreamerV3 / TD-MPC2** (default latent world-models for model-based control) · 🆕 *Science Robotics* review of learning-based dynamics models (field-consolidation signal).

*Net trend: control is converging on **GPU-parallel, sampling- and learned-model MPC over full-order differentiable dynamics**, fused with RL — displacing hand-tuned reduced-order convex MPC as the default for agile legged/humanoid and contact-rich manipulation. Several 2026 items are fresh preprints; re-verify at publish.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | **PID + LQR** stabilization of a cart-pole / inverted pendulum in MuJoCo/Drake | Feedback + state-space; balances and rejects a push disturbance, meets settling-time spec |
| Foundational | Model a manipulator's **kinematics & dynamics** (FK/IK + Lagrangian) in **Pinocchio/Drake** | Dynamics modeling; computed torques match ground-truth sim |
| Applied | **Linear MPC** trajectory tracking on a quadrotor (constrained QP via **OSQP/acados**) | Receding-horizon + constraints; tracks an aggressive trajectory within tolerance, respects actuator limits |
| Applied | **iLQR/DDP** trajectory optimization for a swing-up / legged jump (Crocoddyl / 16-745 style) | Trajectory opt; finds a dynamic maneuver that transfers to sim hardware |
| Advanced | **Whole-body / contact-implicit MPC** on a quadruped (Unitree Go2) or bimanual arm — sampling (**MJPC/Hydrax**) or model-based (**OCS2**) | Full-order MPC; real-time (>50–100 Hz) locomotion/manipulation on hardware |
| Advanced | **Embedded MPC** on a microcontroller (**TinyMPC**) or **learning-based MPC** with residual model (**L4acados**) | Real-time/edge or learned-model MPC; runs on an MCU or adapts online |
| Capstone | **Agile legged/humanoid control**: GPU sampling-MPC or an **MPC×RL hybrid** on a real robot (DIAL-MPC / Sumo-style), retaskable via cost | End-to-end frontier control stack; robust agile behavior on real hardware, documented benchmark |

## 9. Required Lab Setup / Hardware / Resources
- **Robots / platforms:** **Unitree Go2 / G1** (accessible torque-controlled quadruped/humanoid) · Franka **Panda / FR3** · **UR5e** · quadrotors (**Crazyflie** cheap; PX4-based larger) · benchtop **cart-pole / Furuta pendulum / ball-balancer**; **Quanser** control kits (academic standard).
- **Actuation & real-time I/O:** torque-controlled actuators (MIT Mini-Cheetah / Unitree class) · **dSPACE / Speedgoat / NI** real-time targets · **STM32 / Teensy / Jetson** for embedded control.
- **Sensors:** IMU · joint encoders · F/T sensors · motion capture (**OptiTrack / Vicon**) for ground-truth state.
- **Compute:** RTX 4090 / A6000 workstation for GPU sampling-MPC & differentiable sim; A100/H100 for large-scale learned-dynamics / RL training.
- **Software / solvers:** **MATLAB/Simulink** · **acados · CasADi · OSQP** · Crocoddyl · OCS2 · TinyMPC · **Pinocchio** · Drake · **MuJoCo/MJX** · Isaac Sim/Lab · ROS 2 + ros2_control · Hydrax · MuJoCo MPC.
- **Datasets & benchmarks:** **MuJoCo Playground** (MJX; de-facto sim-to-real suite) · **MPC-vs-RL legged-locomotion benchmark** · **D4RL** (offline/model-based) · standard system-ID tasks. *(Control leans on standardized simulation tasks/benchmarks more than large labeled datasets — unlike perception niches.)*

## 10. Partnerships & Ecosystem
- **Hardware vendors:** Unitree · Boston Dynamics / RAI Institute · Franka Robotics · Universal Robots · **Quanser** (control education) · **dSPACE** · **Speedgoat** · **MathWorks** (tooling).
- **Sim / compute / tooling:** **MathWorks** (MATLAB/Simulink — control's lingua franca) · NVIDIA (Isaac) · Google DeepMind (MuJoCo/MJX, MuJoCo MPC).
- **Academic labs (control powerhouses):** **Berkeley MPC Lab (Borrelli)** · **ETH IDSC + Automatic Control Lab (Zeilinger, D'Andrea) + RSL (Hutter)** · **CMU Optimal Control / Robotic Exploration (Z. Manchester) + LeCAR** · Stanford ASL (Pavone) · **MIT Robot Locomotion Group (Tedrake)** · Caltech CDS · TU Delft DCSC · Michigan (Grizzle) · UCSD (Krstić) · Lund (Åström legacy).
- **Open-source communities:** acados / CasADi · **Pinocchio** & the Stack-of-Tasks / loco-3d ecosystem (Crocoddyl, OCS2) · MuJoCo / MJX · Drake · TinyMPC.
- **Standards / bodies:** **IEEE Control Systems Society** (CDC / ACC / L-CSS / TAC / TCST) · **IFAC** · applied safety envelopes: ISO 10218 / ISO/TS 15066 (cobot control), ISO 26262 (automotive MPC), DO-178C (flight control).

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme: stability proofs, LQR/MPC derivations, controllability/observability, discretization.
- **Project rubrics** with objective metrics: tracking error (RMSE), settling time, **gain/phase (robustness) margins**, constraint satisfaction, disturbance rejection, **control-loop rate (Hz) & solver latency**, sim-to-real transfer success.
- **Standardized benchmarks** as portable evidence: MuJoCo Playground tasks, the MPC-vs-RL legged benchmark, cart-pole/quadrotor/quadruped standard tasks.
- **Recognized certifications as evidence:** MathWorks Certified MATLAB Associate/Professional; Modern Robotics completion; a control MOOC (Control Bootcamp / CU Boulder / MIT 6.832x).
- **Senior tiers:** portfolio + control-system-design interview (given a plant, derive & justify a controller) + live tuning/debugging of an unstable loop + stability/robustness analysis.

## 12. Adjacent & Related Niches
Pairs closely with **A4 compliant/force control** and **A4 whole-body control** (MPC is the optimizer under both), **A3 motion/trajectory planning** (trajectory optimization is shared), and **A2 state estimation** (the feedback loop's other half). Bridges into **A6 RL for control** (the MPC×RL convergence) and **A7 world/predictive models** (learned dynamics for MPC), and depends on **A8 differentiable simulation** (differentiable dynamics engines). Feeds the **C4 quadruped**, **C5 humanoid**, and **C6 aerial/UAV** platform tracks; load-bearing in **B1 manufacturing**, **B10 autonomous vehicles**, **B11 aerial/UAS**, and **B12 space** (GNC). (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Niche research: `phase-1/.research/control-classical-optimal-mpc.{creds,trending}.md`. Taxonomy: `master-niche-taxonomy.md` cluster A4 (`✓`). §7 stamped mid-2026 — re-research before publish.*
