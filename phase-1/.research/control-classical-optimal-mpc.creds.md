# Niche Research — Classical, Optimal & Predictive Control (A4)

> Scope: PID/LQR/robust control · optimal control · model-predictive control (MPC) · robot kinematics & dynamics modeling.
> **Niche-specific only** — the shared valued-degree tiers, canonical subjects, and duration model live in `_grounding-reference.md`; this file records what is *different* for A4. Sources inline (2024–2026 favored). `✓` grounded · `~` verify at publish.

**Headline signal:** A4 is the most *theory-and-continuous-math-heavy* niche in Axis A. Its center of gravity is **control-first departments and dedicated Systems-&-Control MSc programs**, not generic "Robotics" degrees — and the discipline's home turf is **EE / ME / Aerospace / Applied Math**, not CS/AI. This shifts both the program list and the eligibility weighting versus the shared backbone.

---

## 1. Strongest programs for THIS niche (named courses)

### Undergraduate
Control theory is taught deepest inside **EE, ME and Aero** cores, so the strongest *undergrad* signals are named feedback-control courses, not the robotics-major brand:
- **Caltech — Control & Dynamical Systems (CDS):** `CDS 110 Introduction to Control Theory` (feedback, transfer functions, Bode/Nyquist, state-space, Lyapunov); text is Åström & Murray *Feedback Systems*. A control-first institution. [cds.caltech.edu](https://www.cds.caltech.edu/~murray/courses/cds110/)
- **UC Berkeley:** `EE C128 / ME C134 Feedback Control Systems` (root locus, frequency response, state-space). [eecs.berkeley.edu](https://www2.eecs.berkeley.edu/Courses/EEC128/)
- **Michigan — Robotics BSE:** `ROB 501 Mathematics for Robotics` (Grizzle; open-sourced) as the gateway to the controls track. [grizzle.robotics.umich.edu](https://grizzle.robotics.umich.edu/education/rob501)
- **MIT (AeroAstro / MechE):** `16.30–16.31 Feedback Control Systems`, `2.004 Dynamics & Control`.
- **Georgia Tech:** undergrad controls + Egerstedt's mobile-robot control sequence.

### Postgraduate — ranked by A4 strength `✓`
| Tier | Programs | The niche-defining courses |
|------|----------|----------------------------|
| **World-leading (control epicenters)** | **UC Berkeley · ETH Zürich · CMU · Stanford · MIT · Caltech** | Berkeley `ME C231A / EE C220 Experiential Advanced Control Design` (Borrelli, **MPC Lab**; Cambridge MPC textbook) + `ME 233 Advanced Control Systems II` (LQR, Kalman, LQG, dynamic programming, stochastic control) · ETH (IDSC + Automatic Control Lab) `Model Predictive Control` + `Advanced MPC` + `Distributed MPC` (Zeilinger) + `151-0563 Dynamic Programming & Optimal Control` (D'Andrea, Bertsekas text) + `151-0851 Robot Dynamics` (Hutter) · CMU `16-745 Optimal Control & Reinforcement Learning` (Z. Manchester — nonlinear dynamics, LQR, trajectory optimization, MPC in Julia) + `24-677 Modern Control Theory` · Stanford `AA203 Optimal & Learning-Based Control` (Pavone — DP, HJ-reachability, trajectory opt, MPC, model-based RL) + `EE364a/b Convex Optimization` (Boyd) + `CS223A Introduction to Robotics` (Khatib — kinematics/dynamics/operational-space control) · MIT **`6.832 Underactuated Robotics`** (Tedrake — trajectory opt, LQR, Lyapunov; the single most A4-relevant course, free + edX) + `2.152 Nonlinear Control` (Slotine) + `6.231 Dynamic Programming & Stochastic Control` (Bertsekas) + `16.323 Principles of Optimal Control` · Caltech `CDS 112 Optimal Control & Estimation` (receding-horizon control, Kalman/nonlinear filtering) |
| **Strong / dedicated Systems-&-Control MSc** *(these RISE above a generic Robotics MSc for A4)* | **TU Delft (DCSC) · KTH · Michigan · Georgia Tech** | TU Delft **`MSc Systems & Control`** (robust control, MPC, filtering & identification, nonlinear/hybrid systems) · KTH **`MSc Systems, Control & Robotics`** · Michigan `EECS 560 Linear Systems` + `EECS 562 / AE 551 Nonlinear Systems & Control` (Grizzle) · Georgia Tech `ECE 6553 Optimal Control & Optimization` + `ECE 6550 Linear Systems` |
| **Also strong (control-deep faculty)** | Lund (control dept, Åström legacy) · Cambridge (Information Engineering) · UC San Diego (Krstić — nonlinear/adaptive) · UT Austin · Imperial · EPFL | H∞/robust, adaptive, and GNC/aerospace-control specializations |

*Note: ETH's flagship MSc is literally "**Robotics, Systems and Control**" — its name encodes the A4 fit; Berkeley's MPC Lab (Borrelli) is the global MPC hub.* [me.berkeley.edu MPC Lab](https://me.berkeley.edu/research-areas-and-major-fields/laboratories/model-predictive-control-lab/) · [idsc.ethz.ch MPC](https://idsc.ethz.ch/education/lectures/model-predictive-control.html) · [optimalcontrol.ri.cmu.edu](https://optimalcontrol.ri.cmu.edu/) · [AA203](https://online.stanford.edu/courses/aa203-optimal-and-learning-based-control) · [MIT 6.832](https://github.com/RussTedrake/underactuated) · [CDS 112](https://murray.cds.caltech.edu/CDS_112/Ae_103a,_Winter_2022) · [ECE 6553](https://pe.gatech.edu/courses/ece-6553-optimal-control-and-optimization-noncredit) · [TU Delft S&C](https://www.tudelft.nl/en/education/programmes/masters/sc/msc-systems-control) · [KTH SCR](https://www.kth.se/en/studies/master/systems-control-robotics/msc-systems-control-and-robotics-1.8733)

---

## 2. Certifications & MOOCs for THIS niche `✓`

- **Northwestern *Modern Robotics*** (Coursera, Lynch & Park) — **Course 3 "Robot Dynamics"** + **Course 4 "Robot Motion Planning and Control"** (Ch. 11: motion/force/hybrid control). Gold-standard MOOC touching kinematics→dynamics→control. [coursera](https://www.coursera.org/specializations/modernrobotics)
- **MathWorks Certified MATLAB Associate → Professional** — the recognized *vendor* credential; MATLAB/Simulink is control engineering's lingua franca. Free prep: **Control Design Onramp with Simulink** (PID design), Simulink Onramp, MATLAB Onramp. [mathworks certification](https://www.mathworks.com/learn/training/certification.html) · [Control Design Onramp](https://matlabacademy.mathworks.com/details/control-design-onramp-with-simulink/controls)
- **Steve Brunton — *Control Bootcamp*** (YouTube, U. Washington) — free, ubiquitous: linear systems, controllability/observability, LQR, LQG/Kalman, robust control, MPC. [youtube](https://www.youtube.com/playlist?list=PL_Ig1a5kxu541NyYRgZg-dKjRmZsqCWiB)
- **CU Boulder — *Control Systems Analysis* specialization** (Coursera, Lucy Pao): `ECEA 5800 Modeling` / `5801 Frequency Domain` / `5802 State-Space Design`; stackable to CU MS-EE credit. Plus **Spacecraft Dynamics & Control** (Schaub) for the GNC slant. [coursera](https://www.coursera.org/learn/modeling-feedback-systems)
- **Georgia Tech — *Control of Mobile Robots*** (Coursera, Egerstedt) — modern control on real robots in MATLAB (legacy MOOC, still widely referenced). [classcentral](https://www.classcentral.com/course/conrob-404)
- **MIT 6.832x Underactuated Robotics** (edX/free, Tedrake) — model-based control for dynamic robots. **NPTEL / IIT-Madras "Model Predictive Control: Theory & Applications"** — dedicated MPC MOOC with MATLAB labs. [nptel MPC](https://www.classcentral.com/course/swayam-model-predictive-control-theory-and-applications-23052)
- **Free advanced lecture sets** (used as de-facto curricula): **Berkeley MPC Lab** course material (Borrelli), **ETH IDSC** MPC/optimal-control lectures, **Bemporad** MPC course (IMT Lucca), CMU 16-745 notebooks. [berkeley MPC material](https://sites.google.com/site/mpclaboratory/mpc-course-material)

*(Grounding-ref caveat holds: no official ROS cert, no NVIDIA robotics exam. A4 has no single "MPC certificate" — the MathWorks cert + Modern Robotics + a control MOOC form the credential spine.)*

---

## 3. Subject list (grouped; representative courses) `✓`

**Foundational maths & CS** *(optimization is disproportionately load-bearing here)*
- Linear algebra & matrix analysis · ODEs & **dynamical-systems theory** · probability & stochastic processes.
- **Numerical & convex optimization** — the mathematical engine of optimal control/MPC *(Stanford EE364a; CMU 16-745)*.
- Real-time programming: **C++ / Python**, **MATLAB·Simulink** (control's standard toolchain), increasingly **Julia**.

**Core robotics**
- **Robot kinematics & dynamics modeling** *(Stanford CS223A, ETH 151-0851 Robot Dynamics, Modern Robotics Course 3)* — the "modeling" half of A4's scope.
- State estimation / Kalman & nonlinear filtering *(Caltech CDS 112; Berkeley ME 233)* · ROS 2 · simulation (Drake, MuJoCo, Isaac Sim).

**Niche-specific (the A4 core)**
- **Classical feedback control** — PID, root locus, frequency-domain, Bode/Nyquist *(Caltech CDS 110, Berkeley EE C128, CU ECEA 5801)*.
- **Linear systems / state-space** — controllability, observability, pole placement *(Michigan EECS 560, GT ECE 6550)*.
- **Optimal control** — LQR/LQG, Pontryagin's maximum principle, dynamic programming *(Berkeley ME 233, MIT 6.231, Caltech CDS 112, GT ECE 6553)*.
- **Model-Predictive Control** — receding-horizon, constrained QP/NLP, robust·stochastic·distributed MPC *(Berkeley ME C231A, ETH MPC / Advanced MPC / Distributed MPC)*.
- **Nonlinear & Lyapunov-based control** *(MIT 2.152, Michigan EECS 562)* · **robust/H∞ & adaptive control** *(UCSD; TU Delft robust control)*.
- **Trajectory optimization** — direct/indirect methods, DDP/iLQR, collocation *(CMU 16-745, MIT 6.832, Stanford AA203)*.

**Frontier / advanced** `~`
- **Learning-based & data-driven MPC**, safe-learning control, **control barrier functions** (Zeilinger/Ames) · differentiable & GPU-accelerated MPC (**acados, CasADi, OSQP**) · **RL↔optimal-control unification** (DP as common root; CMU 16-745, MIT 6.7920) · MPC + world/predictive models.

---

## 4. Niche-specific eligibility adjustment (vs. the general set) `✓`

A4 **reweights the shared degree tiers** more than any other Axis-A niche:

- **RISE to Tier 1 (auto-qualifying for A4):**
  - **Electrical/Electronic Engineering** — feedback, signals & systems, state-space is EE's native home.
  - **Mechanical Engineering** and **Aerospace/Aeronautical Engineering** — rigid-body **dynamics modeling**, vehicle/flight **GNC**, and **trajectory optimization** are core; Aero's GNC track is a direct A4 feeder.
  - **Applied Mathematics** — optimization, dynamical systems, real analysis map straight onto optimal control/MPC theory.
  - **A dedicated *Systems & Control / Control Engineering* degree is the single strongest match** and outranks a generic "Robotics" degree here.
- **HOLDS (Tier 1–2):** Robotics Engineering, Mechatronics — good, but only if the transcript shows the control+optimization+dynamics spine (many robotics majors are perception/software-heavy).
- **RELATIVELY LOWER for A4 (vs. perception/learning niches where it dominates):** a pure **CS / AI** degree *without* controls, dynamics and optimization coursework — CS is necessary for real-time implementation but under-weights A4's continuous-math theory core. Admit only with transcript evidence: a controls course **+ convex/numerical optimization + a dynamics/dynamical-systems course**.
- **Program-name preference:** value **control-first departments** (Caltech CDS, Berkeley, Michigan controls, ETH IDSC/Automatic Control Lab) and **dedicated MSc Systems & Control** (TU Delft DCSC, KTH, ETH RSC) *above* a generic Robotics MSc — the reverse of the general-set default. `~`

**Suggested A4 transcript checklist (replaces the general controls-elective line):** linear algebra + ODEs/dynamical systems · convex/numerical optimization · a *sequence* of ≥2 control courses (classical **and** state-space/optimal) · robot or system dynamics modeling · MATLAB/Simulink (or CasADi/acados) evidence · ≥1 MPC or trajectory-optimization project.

---

### Sources (primary)
Berkeley MPC Lab & courses (me.berkeley.edu, eecs.berkeley.edu EE C128); ETH IDSC (MPC / Advanced MPC / Distributed MPC / 151-0563 DP&OC) + RSL 151-0851 Robot Dynamics; CMU 16-745 (optimalcontrol.ri.cmu.edu); Stanford AA203 (online.stanford.edu), EE364a, CS223A (see.stanford.edu); MIT 6.832 Underactuated (RussTedrake/underactuated), OCW 6.231/16.323; Caltech CDS 110/112 (cds.caltech.edu, murray.cds.caltech.edu); Michigan (grizzle.robotics.umich.edu, web.eecs.umich.edu control courses); Georgia Tech ECE 6553 (pe.gatech.edu); TU Delft MSc Systems & Control (tudelft.nl); KTH SCR (kth.se); Coursera Modern Robotics & CU Boulder Control Systems Analysis; MathWorks certification & Onramps (mathworks.com); Steve Brunton Control Bootcamp (YouTube); NPTEL MPC (classcentral.com). All accessed Jul 2026; re-verify course codes/retirements at publish.
