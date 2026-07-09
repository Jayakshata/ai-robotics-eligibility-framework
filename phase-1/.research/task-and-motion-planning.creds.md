# Niche Research — Task & Motion Planning and Decision Architectures (Axis A · A3)

> Scope: TAMP (symbolic + geometric planning), behavior trees, autonomy/decision-making architectures. This note captures ONLY what is niche-specific; the shared valued-degree tiers, canonical subjects, and duration model live in `phase-1/_grounding-reference.md`. Data 2024–2026, web-verified. `✓` grounded · `~` to re-verify.

**One-line framing.** Of all robotics niches this is the **most classical-AI / CS-theory-centric**: graph search, logic, PDDL, MDP/POMDP and software architecture dominate; hardware/actuation is comparatively light. That single fact drives both the program picks and the eligibility shifts below.

---

## 1. Strongest university programs + the specific courses that make them strong `✓`

### Postgraduate (ranked by strength for THIS niche)
- **CMU — Robotics Institute (the #1 dedicated home).** **16-782 Planning & Decision-making in Robotics** (Maxim Likhachev) is *the* canonical course: planning representations (cell-decomposition, lattice graphs), A*/weighted/anytime/incremental search, PRM/RRT/RRT*, **symbolic task planning**, MDPs/POMDPs, multi-robot coordination, with autonomous-driving / mobile-manipulation / legged case studies. Paired with **15-887 Planning, Execution and Learning** (Likhachev/Veloso/Simmons — replanning in partially-known/dynamic environments, execution monitoring, deep RL) and **15-780 Graduate AI**. [cs.cmu.edu/~maxim/classes/robotplanning_grad](https://www.cs.cmu.edu/~maxim/classes/robotplanning_grad/) · [cs.cmu.edu/~mmv/planning/schedule.html](http://www.cs.cmu.edu/~mmv/planning/schedule.html)
- **MIT — the birthplace of TAMP and model-based autonomy.** **6.4110 / 16.420 Representation, Inference & Reasoning in AI** (Kaelbling & Lozano-Pérez — the TAMP pioneers): CSP, logic, Monte-Carlo tree search, **planning in discrete AND continuous deterministic/probabilistic models, MDPs/POMDPs** — the direct TAMP substrate. **16.412J / 6.834J Cognitive Robotics** (Brian Williams): activity/temporal planning, risk-aware planning, model-based execution (RMPL), plan monitoring/diagnosis. **16.410/16.413 Principles of Autonomy and Decision Making** (Williams & Roy): search, activity+motion planning, adversarial/probabilistic planning, Markov models, Bayesian filtering. [ocw.mit.edu/courses/16-412j-cognitive-robotics-spring-2016](https://ocw.mit.edu/courses/16-412j-cognitive-robotics-spring-2016/) · [coursicle.com/mit/courses/6/4110](https://www.coursicle.com/mit/courses/6/4110/)
- **Stanford.** **AA 228 / CS 238 Decision Making under Uncertainty** (Mykel Kochenderfer) — the canonical decision-architecture course (Bayesian nets, dynamic programming, RL, **MDP/POMDP**; MIT-Press textbook *Algorithms for Decision Making*, free online); its sequel **AA 229 / CS 239** (sequential/multi-agent). **AA 274A / CS 237A Principles of Robot Autonomy I** (planning + reasoning under uncertainty on ROS) and **CS 237B Principles of Robot Autonomy II** (learning + interaction). [aa228.stanford.edu](https://aa228.stanford.edu/) · [mykel.kochenderfer.com/teaching](https://mykel.kochenderfer.com/teaching/)
- **UC Berkeley — CS 287 Advanced Robotics** (Pieter Abbeel): value iteration / optimal control + **motion planning (RRT/A* and variants)**, MDPs, mobile-manipulation & autonomous-driving case studies. [people.eecs.berkeley.edu/~pabbeel/cs287-fa19](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/)
- **Georgia Tech — CS 7649 Robot Intelligence: Planning** (grad): classical + geometric + stochastic/dynamic planning with symbolic, numerical, geometric and physical constraints; hybrid control of dynamic systems. [research.gatech.edu/robotics/ms-robotics-detailed-curriculum](https://research.gatech.edu/robotics/ms-robotics-detailed-curriculum)
- **Also strong / niche-flavored:** **KTH (RPL)** — Petter Ögren's group is the academic home of **behavior trees**; **ETH ASL** — Autonomous Mobile Robots (Siegwart) for motion planning + navigation stacks; **UPenn GRASP** and **U-Michigan Robotics** (ROB 422/522 planning) via strong CS/AI cores.

### Undergraduate
- **CMU — 16-350 Planning Techniques for Robotics** (Likhachev): the undergrad twin of 16-782 — symbolic representations, heuristic/weighted search, PRM/RRT/RRT*, MDPs, multi-robot — plus **15-281 AI: Representation & Problem Solving**. Uniquely strong at UG level. [cs.cmu.edu/~maxim/classes/robotplanning](https://www.cs.cmu.edu/~maxim/classes/robotplanning/)
- **MIT — 16.410** (UG half of Principles of Autonomy) + **6.4110**; **Stanford — AA 174A/CS 237A**; **Georgia Tech — CS 4649** (UG twin of 7649) + CS 3600 AI. WPI, Michigan Robotics BSE, and UPenn AI-BSE qualify via CS/AI + a planning elective, but none match CMU's dedicated UG planning course.

---

## 2. Most relevant certifications & MOOCs `✓`
Split by the niche's two halves (symbolic/decision vs. geometric/applied):

- **University of Edinburgh — "Artificial Intelligence Planning"** (Coursera; Austin Tate & Gerhard Wickler). THE symbolic/task-planning MOOC: **PDDL**, state-space & HTN planning, plan-space search. Most on-point single credential for the symbolic half. [open.ed.ac.uk/artificial-intelligence-planning](https://open.ed.ac.uk/artificial-intelligence-planning/)
- **Northwestern — Modern Robotics, Course 4: "Robot Motion Planning and Control"** (Kevin Lynch; Coursera). C-space obstacles, grid/graph search, **sampling-based planners (PRM/RRT)**, potential fields — the geometric half; part of the grounding-ref's gold-standard specialization. [coursera.org/learn/modernrobotics-course4](https://www.coursera.org/learn/modernrobotics-course4)
- **Columbia — "Artificial Intelligence (AI)" MicroMasters, CSMM.101x** (edX). Search, **CSP (AC-3, backtracking)**, adversarial search, logic, MDPs — classical-AI decision/planning foundation with a real master's-credit pathway. [edx.org/course/artificial-intelligence-ai-columbiax-csmm-101x](https://edx.org/course/artificial-intelligence-ai-columbiax-csmm-101x-3)
- **The Construct — "Behavior Trees for ROS2"** + **"ROS2 Navigation (Nav2)"** (shareable certificate, 75% to pass). The applied **decision-architecture / behavior-tree** signal — BTs as used in Nav2 and MoveIt2. [theconstruct.ai/one-day-training/behavior-trees-for-ros2](https://www.theconstruct.ai/one-day-training/behavior-trees-for-ros2/)
- **Kochenderfer, *Algorithms for Decision Making*** (MIT Press, free online) — de-facto self-study standard for MDP/POMDP decision architectures (the AA228 text). [algorithmsbook.com]
- **Udacity — "AI for Robotics"** (Sebastian Thrun; free — A*/dynamic-programming path planning, localization) and **Georgia Tech OMSCS CS 6601 AI** (search, game trees, planning) as a low-cost graded credential.
- **Applied stacks (evidence, not exams):** ROS 2 **Nav2** (behavior-tree navigation) and **MoveIt 2 / OMPL** (sampling-based motion planning); the **Colledanchise & Ögren** BT textbook (free preprint) is the canonical BT reference.
- **Gap to flag `~`:** there is **no dedicated "TAMP" or "behavior-tree" certification** — capability here is proven by coursework + portfolio (planner implementations, an autonomy stack), not a badge.

---

## 3. Subject list for this niche (grounded in the syllabi above)

**Foundational maths & CS** *(this niche leans hardest on CS theory of any robotics niche)*
- Discrete math & **logic** (propositional/first-order — the language of symbolic planning)
- **Algorithms & data structures**, esp. **graph search** — the single most load-bearing subject here *(CMU 15-281/16-350)*
- Probability & decision theory; linear algebra
- **Optimization** — LP/IP/**MIP**, convex, dynamic programming *(Berkeley CS287)*
- Computational complexity / theory of computation

**Core robotics**
- Configuration space & kinematics
- **Motion planning** — sampling-based (PRM, RRT, RRT*), search-based (A*/D* lattice), trajectory optimization *(CMU 16-350/16-782; Modern Robotics C4; Berkeley CS287)*
- State estimation / localization; feedback control basics
- **ROS 2** + Nav2 / MoveIt 2

**Niche-specific**
- **Classical / symbolic AI planning** — STRIPS, **PDDL**, HTN, plan-graphs *(Edinburgh AI Planning; MIT 16.410)*
- **Task & Motion Planning (TAMP)** — coupling symbolic task plans with feasible geometric motion *(MIT 6.4110, Kaelbling/Lozano-Pérez; Garrett et al. survey)*
- **Decision-making under uncertainty** — MDPs, **POMDPs**, dynamic programming, MCTS *(Stanford AA228; CMU 16-782)*
- **Behavior trees, finite-state machines & autonomy/decision architectures** *(KTH/Ögren; Colledanchise-Ögren; Nav2)*
- **Temporal & constraint-based planning / scheduling**, risk-aware planning *(MIT 16.412J Cognitive Robotics)*
- **Model-based execution, plan monitoring & replanning**; multi-robot / multi-agent planning *(CMU 15-887)*

**Frontier / advanced**
- **Learned planning** — neural planners, learned heuristics, planning with learned world models
- **LLM/VLM task planning** — SayCan, Code-as-Policies, LLM+PDDL, Text2Motion *(integrating language models with symbolic planners)*
- Integrated **task–motion–learning**; large-scale / online **POMDP** solvers; chance-constrained & risk-aware planning *(Stanford AA229)*; differentiable planning *(CMU 15-887 deep-RL module)*

---

## 4. Niche-specific eligibility adjustment (vs. the general set) `✓`

This niche shifts the general valued-degree tiers more than most, in the **CS/AI-theory direction**:

**Rise in value**
- **Computer Science (esp. AI)** and a dedicated **Artificial Intelligence** degree → the clearest Tier-1 top here; classical AI (search/logic/planning/CSP) is the literal core.
- **Mathematics / Applied Math** rises (logic, discrete math, optimization) from general Tier-2 toward Tier-1-with-evidence.
- **Operations Research / Industrial & Systems Engineering** rises *uniquely to this niche* — MDPs, stochastic planning, scheduling and optimization are OR's home turf (reflected in Kochenderfer's AA228 lineage).
- **Aerospace / Aeronautics (GNC & autonomous systems)** rises — MIT's flagship autonomy courses (16.410/16.412J) live in AeroAstro; guidance-navigation-control is a strong adjacent.
- **Software Engineering / CS-systems** rises — decision architectures ARE software architecture (behavior trees, state machines, ROS 2 autonomy stacks).

**Fall in value (relative)**
- **Mechanical Engineering** falls — the exact inverse of the Manipulation niche: little contact mechanics, actuation or hardware dynamics is load-bearing here.
- **EE/ECE** stays useful only for the real-time-execution/embedded layer, not the planning core; **Physics** is neutral-to-down.

**Net rule:** the strongest single backgrounds are **CS(AI) + Math/OR**; the "embodiment" majors (ME, Mechatronics) that rise for manipulation/control instead **fall** here, while AI/CS-theory, OR, and aerospace-autonomy backgrounds rise.

---
*Sources: CMU 16-782 & 16-350 & 15-887 (Likhachev/Veloso course pages); MIT OCW 16-412J & 16.410 & Coursicle 6.4110; Stanford aa228.stanford.edu & Kochenderfer teaching page & bulletin CS237A/B; Berkeley CS287 (Abbeel); Georgia Tech MS-Robotics curriculum & CS4649/7649; Coursera Modern Robotics C4 & Edinburgh AI Planning (open.ed.ac.uk); edX Columbia CSMM.101x; The Construct BT/Nav2 training. Full URLs inline. Re-verify course numbers (MIT renumbering) and MOOC availability at publish.*
