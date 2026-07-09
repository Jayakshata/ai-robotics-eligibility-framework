# Niche Credentials & Subjects — Whole-Body, Compliant & Force Control (A4)

> **Research note** feeding the §3/§4/§5 slots of the A4 niche profile. **Scope:** compliant/impedance/force control · whole-body control · loco-manipulation control · learned control · the kinematics/dynamics + optimal-control/MPC analytical layer beneath them. Does **not** re-derive the shared backbone (degree tiers, canonical subjects, duration model) in `phase-1/_grounding-reference.md` — only what is *specific* to control. Data 2024–2026, cited. `✓` web-verified this pass · `~` to re-verify.

This is the **most classically-engineering slice** of AI-for-robotics: analytical mechanics, feedback/nonlinear control, and optimization dominate; the "AI" enters as *learned control* (RL/sim-to-real) layered on model-based cores. That shifts which programs and degrees are strongest — see §4.

---

## 1. Strongest University Programs for THIS niche

### Postgraduate — ranked by control strength `✓`

| Tier | Programs | The niche signal (named courses) |
|------|----------|----------------------------------|
| **World-leading** | **MIT · Stanford · ETH Zürich · CMU** | **MIT 6.8210 Underactuated Robotics** (Tedrake) — nonlinear dynamics, optimal/robust control, trajectory optimization, LQR, legged locomotion & compliant manipulation, in Drake — *the* anchor course. **Stanford CS327A Advanced Robotic Manipulation** (Khatib) — operational-space formulation + **interactive whole-body control**; **CS223A Intro to Robotics** — joint/Cartesian/**operational-space & force control**; **CS225A** real-robot force control. **ETH 151-0851 Robot Dynamics** (Hutter/Siegwart) — **floating-base** dynamics for legged/flying systems + whole-body; **IDSC Model Predictive Control**; RSL is the world center for **learned legged locomotion**. **CMU 16-745 Optimal Control & Reinforcement Learning** (Z. Manchester) — trajectory opt, MPC, LQR, RL for control. |
| **Very strong** | **Caltech · Michigan · UPenn (GRASP)** | **Caltech CDS 112 Optimal Control & Estimation** + the CDS **nonlinear-control** sequence (Lyapunov, feedback linearization, CLFs); **ME/CS/EE 133 Robotics**; Ames' lab = **control barrier functions + bipedal** (AMBER). **Michigan ROB 314 Introduction to Robot Controls** (core) + **ROB 413 Legged Locomotion** (hybrid dynamics, gait design, feedback control); Grizzle = **hybrid zero dynamics** (Cassie). **UPenn MEAM 5170 Control & Optimization with Applications in Robotics** (Posa) — trajectory opt, underactuated systems, limit cycles, nonsmooth mechanics, MPC; **MEAM 5200 Intro Robotics**; **ESE 5000 Linear Systems Theory**. |
| **Strong / specialized** | **EPFL · Georgia Tech · TUM** | **EPFL MICRO-507 Legged Robots** (Ijspeert); **LASA** (Billard) = **compliant control via dynamical systems** (DS-based impedance). **Georgia Tech** — Egerstedt (networked/mobile control), **Ye Zhao** (contact-rich trajectory opt, legged). **TUM / DLR** (Albu-Schäffer) — **passivity-based & Cartesian impedance control** of flexible-joint robots; the DLR-LWR → KUKA iiwa torque-control lineage. |

*(Imperial, Oxford, TU Delft = control-by-research, thinner dedicated coursework for this niche.)*

### Undergraduate — strongest for this niche `✓`
Control rewards a **dynamics + feedback-control** foundation more than any other niche, so the tilt is toward mechanical/control-heavy programs:
- **Michigan Robotics BSE** — the standout dedicated UG: **ROB 314 Introduction to Robot Controls** is required core, **ROB 413 Legged Locomotion** an elective.
- **Caltech** — strongest control-theory undergrad (CDS/ME feedback-control foundation feeding CDS 110/112).
- **MIT** — Course 2 (MechE) feedback-control sequence (2.004 Dynamics & Control, 2.14 Feedback Control) + 6-4; 2.12 Intro to Robotics covers force/impedance.
- **ETH Zürich / TUM** — deep ME + control systems core.
- **WPI Robotics Engineering** (RBE controls sequence, "Unified Robotics" dynamics/controls) · **Georgia Tech** (ECE/ME controls).

---

## 2. Certifications & MOOCs for this niche `✓`

There is **no dedicated "force-control certification"** — interaction control lives *inside* broader courses. The niche-relevant, named options:

- **MIT Underactuated Robotics** — free at `underactuated.csail.mit.edu` (also **edX 6.832x**), full lecture videos + Drake notebooks. **The single most niche-relevant open course**: whole-body dynamics, trajectory optimization, legged locomotion, compliant manipulation. Tedrake.
- **Northwestern Modern Robotics** (Coursera, Lynch — grounding-ref Tier 1). **Course 4 "Robot Motion Planning and Control"** is the force-control MOOC: textbook Ch. 11 covers **motion control, force control, and hybrid motion-force control**. Course 3 = dynamics.
- **CMU 16-745 Optimal Control & RL** — open lecture notes + full YouTube series (`optimalcontrol.ri.cmu.edu`). Best free **optimal-control-for-robots** resource (no formal cert).
- **Georgia Tech "Control of Mobile Robots"** (Egerstedt, Coursera) — classical feedback-control MOOC (quadrotors, bipeds); enrollment now limited but the reference intro.
- **MPC-specific:** ETH **IDSC Model Predictive Control** materials; **IIT-Madras MPC** on SWAYAM/NPTEL (MATLAB modules).
- **Learned-control track:** **Hugging Face Deep RL** (free cert) · **NVIDIA Isaac Lab / GR00T + DLI** (legged RL sim-to-real; grounding-ref Tier 2) · EPFL **Legged Robots** open materials.
- **General controls upskilling:** MathWorks/Coursera control-design courses; **Penn Robotics MicroMasters** (edX) for the linear-systems/estimation layer.

---

## 3. Subject List (grounded in real syllabi) `✓`
Grouped; annotated with representative courses.

**Foundational maths & CS**
- **Linear algebra** & matrix analysis — *ETH 151-0851, UPenn ESE 5000*
- **ODEs & dynamical systems / nonlinear systems** — *Caltech CDS, Michigan ROB 314*
- **Calculus of variations & numerical optimization** (QP/convex/NLP) — *CMU 16-745, UPenn MEAM 5170*
- **Probability & estimation** (Kalman/state estimation) — *Caltech CDS 112*
- **Python + C++ (real-time)**, Drake/Julia scientific stack — *MIT 6.8210, CMU 16-745*

**Core robotics**
- **Rigid-body & floating-base kinematics/dynamics** (Lagrangian/Newton-Euler, Featherstone) — *ETH 151-0851 Robot Dynamics, Modern Robotics C2/C3, UPenn MEAM 5200*
- **Classical & state-space feedback control** (PID, LQR, pole placement) — *Michigan ROB 314, Caltech CDS 110/112*
- **Motion planning & trajectory generation** — *MIT 6.8210, UPenn MEAM 5170*
- **Sensors & actuation for control** (torque sensing, series-elastic/flexible-joint actuation) — *TUM/DLR*

**Niche-specific**
- **Impedance / admittance / compliance control** (Hogan) — *Stanford CS223A, Modern Robotics C4*
- **Force & hybrid motion-force control** — *Modern Robotics C4 (Ch. 11), Stanford CS225A*
- **Operational-space control & task-priority / null-space redundancy** (Khatib) — *Stanford CS327A*
- **Whole-body control** (hierarchical/weighted QP, contact & friction-cone constraints) — *Stanford CS327A, MIT 6.8210, ETH RSL*
- **Passivity- & energy-based / variable-impedance control** — *TUM/DLR Albu-Schäffer*
- **Optimal control & MPC** (DDP/iLQR, whole-body MPC) — *CMU 16-745, UPenn MEAM 5170, ETH IDSC*
- **Underactuated & hybrid systems; legged locomotion control** (ZMP/capture point, hybrid zero dynamics, CBFs) — *MIT 6.8210, Michigan ROB 413, EPFL MICRO-507, Caltech (Ames)*
- **Loco-manipulation & mobile-manipulator whole-body coordination** — *ETH RSL, GT (Zhao)*

**Frontier / advanced**
- **Learned control / RL for locomotion & whole-body** + **sim-to-real** (domain randomization, massively-parallel GPU RL) — *ETH RSL (Isaac Lab), Michigan*
- **RL-augmented / residual model-based control** (RL over MPC/WBC) — *2024–26 loco-manipulation literature*
- **Differentiable simulation & differentiable control** — *CMU 16-745, MIT (Drake)*
- **Safe / constrained learned control** (CBFs, safety filters, hierarchical optimization) — *Caltech (Ames), Michigan (Vasudevan)*
- **Humanoid whole-body control & expressive/contact-rich WBC** (teleop-retargeted, MPC+RL) — *2024–26 humanoid research*

---

## 4. Niche-specific eligibility adjustment `✓`
Relative to the shared A.1/A.2 tiers, this control niche **re-weights degrees toward analytical-mechanics + control fields**:

**Rise in value**
- **Mechanical Engineering → Tier 1** (from Tier-2). Floating-base dynamics, Lagrangian mechanics, actuation and contact are home turf; ME is arguably the *default* degree here.
- **Aerospace / Aeronautical Engineering → Tier 1-adjacent.** GNC, optimal control, and dynamics heritage (Caltech CDS, MIT AeroAstro) transfer directly to trajectory optimization/MPC.
- **Electrical Engineering — controls/systems concentration → strongly Tier 1.** State-space, feedback, nonlinear/Lyapunov theory.
- **Engineering Science / Applied Mathematics / "Systems & Control" degrees → rise** (dynamical systems, optimization, nonlinear ODEs).

**Fall / need extra evidence**
- **Pure CS (no dynamics or feedback-control coursework) → conditional.** CS stays **Tier 1 for the *learned-control* sub-area** (RL, sim-to-real, software), but for the model-based whole-body/force core a CS grad is under-prepared without a transcript showing **dynamics + a controls course + optimization**. Require that evidence.
- **AI/ML-only backgrounds → strong for learned control, weak for the model-based core** — same evidence gate.

**Net:** the "big three" reorder from CS-forward to **ME/AE/EE(controls)-forward**, with CS/AI retained specifically for the learned-control frontier. Mirrors the manipulation profile's "ME rises to Tier 1," but with an added **Aerospace/Applied-Math** lift unique to control.

---

## Sources (primary, 2024–2026)
- MIT 6.8210 Underactuated Robotics — https://underactuated.csail.mit.edu/Spring2024/ ; edX 6.832x — https://www.mooc-list.com/course/6832x-underactuated-robotics-edx
- Stanford CS223A (Khatib) — https://khatib.stanford.edu/teaching/cs223a/ ; CS327A Advanced Robotic Manipulation — https://khatib.stanford.edu/teaching/old_cs327a/
- ETH 151-0851 Robot Dynamics — https://rsl.ethz.ch/education-students/lectures/robotdynamics.html ; RSL legged locomotion — https://rsl.ethz.ch/research/researchtopics/legged-locomotion.html ; IDSC MPC — https://idsc.ethz.ch/education/lectures/model-predictive-control.html
- CMU 16-745 Optimal Control & RL — https://optimalcontrol.ri.cmu.edu/
- Caltech CDS catalog (CDS 112, nonlinear control, ME/CS/EE 133) — https://catalog.caltech.edu/current/2025-26/department/CDS/ ; Ames (bipedal + CBFs) — http://ames.caltech.edu/
- Michigan Robotics courses (ROB 314, ROB 413) — https://robotics.umich.edu/academics/courses/ ; Legged focus — https://robotics.umich.edu/research/focus-areas/legged-robotics/ ; Grizzle — https://grizzle.robotics.umich.edu/research/
- UPenn MEAM 5170 (Posa) — https://www.seas.upenn.edu/~posa/files/syllabus.pdf ; GRASP MSE curriculum — https://www.grasp.upenn.edu/academics/masters-degree-program/curriculum-information/
- EPFL MICRO-507 Legged Robots — https://edu.epfl.ch/coursebook/en/legged-robots-MICRO-507
- Georgia Tech Control of Mobile Robots (Egerstedt, Coursera) — https://www.ece.gatech.edu/news/144281/egerstedt-among-first-georgia-tech-faculty-take-part-coursera
- Northwestern Modern Robotics Course 4 (force control) — https://www.coursera.org/learn/modernrobotics-course4
- TUM/DLR impedance control (Albu-Schäffer) — https://journals.sagepub.com/doi/10.1177/0278364907073776 ; https://www.professoren.tum.de/en/albu-schaeffer-alin
