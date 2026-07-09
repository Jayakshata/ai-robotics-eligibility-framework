# Per-Niche Profile — Task & Motion Planning and Decision Architectures

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; TAMP/decision-architecture-specific and trending-research signals are research-backed (`phase-1/.research/task-and-motion-planning.*`). `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Task & Motion Planning and Decision Architectures · **Axis A cluster:** A3 (Planning & Navigation) · **Type:** `[S]` (composes TAMP + decision architectures; learned / LLM-VLM & neuro-symbolic planning sub-areas `[★]`)
**Related capabilities:** A1 perception (symbol grounding) · A5 manipulation & loco-manipulation · A6 RL/imitation (learned planning) · A7 VLAs · world models · LLM task planners · A9 multi-robot · A10 safety/runtime assurance · **Platforms (C):** C2 mobile manipulator · C3 AMR · C5 humanoid · C6 aerial autonomy · **Verticals (B):** B2 logistics · B9 humanoid/service · B10 autonomous vehicles · B12 space

---

## 1. Definition & Scope
Deciding **what to do and in what order — then proving it is physically executable.** This niche couples **symbolic/task-level planning** (logic, PDDL, HTN) with **geometric/motion feasibility** (the TAMP loop), and wraps both in the **runtime decision architectures** (behavior trees, finite-state machines, autonomy stacks) that select, sequence, monitor and repair actions on a live robot. It is the **most classical-AI / CS-theory-centric** of the robotics niches — graph search, logic, and MDP/POMDP dominate; hardware/actuation is comparatively light. **In scope:** symbolic task planning (STRIPS/PDDL/HTN), TAMP (task↔motion integration), decision-making under uncertainty (MDP/POMDP/MCTS), behavior trees & FSMs, model-based execution / plan monitoring / replanning, multi-robot task allocation, and the LLM/VLM task-planning frontier. **Out of scope (adjacent):** the **A3 sibling *Motion Planning & Navigation*** (RRT/PRM/A* geometric planners and Nav2 local planning — used here as the geometric *backend* but owned there), the control/execution layer (A4), and the perception stack (A1).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Autonomy / Planning Engineer | Implements planner and behavior-tree nodes under supervision; encodes PDDL domains; wires/tunes an existing autonomy stack; runs planning experiments in sim. |
| **L2** | Autonomy / Planning Engineer | Owns a decision subsystem end-to-end (task planner + BT/state-machine + execution monitor); integrates a TAMP or Nav2 stack on a real robot; debugs plan failure & replanning. |
| **L3** | Senior Autonomy / TAMP Engineer | Designs the decision architecture; makes symbolic-vs-learned-vs-LLM tradeoffs; picks the planning representation (PDDL vs BT vs MDP); sets benchmarks; mentors. |
| **L4/L5** | Staff / Principal Autonomy Research Engineer | Sets the planning/autonomy research agenda; advances TAMP / decision-making-under-uncertainty / LLM-planning SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (esp. with AI/ML), **Artificial Intelligence**, Robotics Engineering, EE/ECE. Tier 2 (with evidence): Mathematics/Applied Maths, Mechatronics, Physics. **Niche-specific `✓` — the CS/AI-theory tilt (the inverse of Manipulation):** a dedicated **AI degree and CS-with-AI are the clearest Tier-1 top** here — classical AI (search/logic/PDDL/CSP) is the literal core; **Maths/Applied Maths rises toward Tier-1-with-evidence** (logic, discrete math, optimization); **Operations Research / Industrial & Systems Engineering rises *uniquely to this niche*** (MDPs, stochastic planning, scheduling, optimization are OR's home turf — the Kochenderfer/AA228 lineage); **Aerospace/Aeronautics (GNC & autonomous systems) rises** (MIT's flagship autonomy courses live in AeroAstro); **Software Engineering rises** (decision architectures *are* software architecture). **Mechanical Engineering falls** — the exact inverse of the Manipulation niche; little contact mechanics or actuation is load-bearing here.

**Highly-valued undergraduate programs `✓`** — **CMU BS Robotics / CS** (16-350 Planning Techniques for Robotics + 15-281 AI: Representation & Problem Solving — the uniquely strong *dedicated* UG planning course) · **MIT (6-4 AI & Decision Making)** (16.410 + 6.4110) · **Stanford CS** (AA 174A / CS 237A Robot Autonomy I) · **Georgia Tech** (CS 4649 + CS 3600 AI) · **UC Berkeley EECS**. UPenn AI-BSE, Michigan Robotics BSE, and WPI qualify via a strong CS/AI core + a planning elective — but none match CMU's dedicated UG planning course.

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI, EE, **OR/IE**, or **Aero/Astro** with a planning / decision-making / autonomy focus.

**Highly-valued postgraduate programs — ranked by planning/decision strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **CMU (RI) · MIT · Stanford** | CMU **16-782 Planning & Decision-making in Robotics (core, Likhachev)** + 15-887 Planning, Execution & Learning (Likhachev/Veloso/Simmons) + 15-780 Grad AI · MIT **6.4110 / 16.420 Representation, Inference & Reasoning in AI (Kaelbling & Lozano-Pérez — the TAMP pioneers)** + 16.412J Cognitive Robotics (Williams) + 16.410/16.413 Principles of Autonomy · Stanford **AA 228 / CS 238 Decision Making under Uncertainty (Kochenderfer)** + AA 229/CS 239 + AA 274A Robot Autonomy |
| Strong | **UC Berkeley · Georgia Tech · KTH** | Berkeley **CS 287 Advanced Robotics (Abbeel)** — value iteration/optimal control + planning + MDPs · GT **CS 7649 Robot Intelligence: Planning** · KTH RPL **(Ögren — the academic home of behavior trees)** |
| Present | **ETH ASL · UPenn GRASP · U-Michigan** | ETH Autonomous Mobile Robots (Siegwart) · Penn GRASP (strong CS/AI core) · Michigan **ROB 422/522 planning** |

**Highly-valued certifications `✓`** — **Edinburgh "Artificial Intelligence Planning"** (Coursera; Tate & Wickler — THE symbolic MOOC: PDDL, state-space & HTN planning; most on-point single credential for the symbolic half) · **Northwestern Modern Robotics Course 4 "Robot Motion Planning & Control"** (Lynch — the geometric half; grounding-ref gold standard) · **Columbia "AI" MicroMasters CSMM.101x** (edX — search, CSP/AC-3, logic, MDPs, with a real master's-credit pathway) · **The Construct "Behavior Trees for ROS2" + "ROS2 Navigation (Nav2)"** (the applied decision-architecture / BT signal) · Georgia Tech **OMSCS CS 6601 AI** (low-cost graded credential) · Udacity **"AI for Robotics"** (Thrun, free — A*/DP path planning). *Self-study standards: Kochenderfer,* **Algorithms for Decision Making** *(MIT Press, free — the AA228 text for MDP/POMDP) + Colledanchise & Ögren's* **Behavior Trees in Robotics and AI** *(free preprint, canonical BT reference).* **Gap `~`: there is no dedicated "TAMP" or "behavior-tree" certification — capability here is proven by coursework + portfolio (planner implementations, an autonomy stack), not a badge.**

**Experience & portfolio** — L1: internship/academic; a PDDL domain + planner run, or a BT autonomy demo in sim. L2: 2–4 yr; a real-robot autonomy stack (TAMP or Nav2 + BT) shipped, with plan-success / replanning metrics. L3: 5–8 yr; ≥1 autonomy architecture led to deployment. L4/L5: 8+ yr and/or first-author papers (**ICAPS / RSS / CoRL / ICRA / IROS / NeurIPS / AAAI**).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and **C++** for real-time autonomy
- **Graph search & classical AI** — A* / weighted-A* / D* / anytime & incremental search, admissible heuristics (the single most load-bearing skill)
- **Symbolic / task planning** — STRIPS, **PDDL / PDDLStream**, HTN; running a planner (**Fast Downward / FF**)
- **Motion planning as the geometric backend** — sampling-based (**OMPL**: RRT/PRM) integrated with a task layer
- **Task & Motion Planning (TAMP)** — coupling symbolic action sequences with geometric/kinematic feasibility checks
- **Decision-making under uncertainty** — MDPs, **POMDPs**, dynamic programming, **MCTS**
- **Behavior trees & finite-state machines** — BehaviorTree.CPP, Nav2, Groot2, SMACH/FlexBE
- **ROS 2** autonomy stack (Nav2 / MoveIt 2) and real-robot integration
- **Execution monitoring & replanning** — plan repair in dynamic / partially-known worlds
- Robot **simulation** for planning eval (Isaac Sim, PyBullet, AI Habitat)

**Preferred / differentiating**
- **LLM/VLM task planning** — SayCan, Code-as-Policies, LLM+PDDL, LLM-in-the-loop TAMP
- **Hierarchical / dual-system architectures** (reasoning-VLM "brain" + VLA/BT executor)
- **GPU-parallel / differentiable TAMP** (cuTAMP / cuRobo)
- **Diffusion / generative planning** (joint symbolic + continuous)
- **Neuro-symbolic planning**; planning with **learned world models**
- **Multi-robot / multi-agent** task allocation & coordination (MAPF)
- **Temporal & risk-aware / belief-space planning**, chance constraints
- Publications at **ICAPS / RSS / CoRL / ICRA / IROS / NeurIPS / AAAI**

**Tools & tech stack** — *Languages:* Python, C++ · *Symbolic planners:* Fast Downward, FF, ENHSP, POPF/OPTIC (temporal), pyperplan, **Unified Planning (AIPlan4EU)**, VAL (validator) · *TAMP:* **PDDLStream**, cuTAMP / cuRobo, PDDLGym · *Decision/POMDP:* POMDPs.jl / JuliaPOMDP, DESPOT / POMCP / SARSOP, MCTS libs · *Autonomy runtime:* **BehaviorTree.CPP v4 + Groot2**, Nav2, py_trees / py_trees_ros, SMACH / FlexBE, MoveIt 2 Task Constructor · *Motion backend:* OMPL, MoveIt 2, cuRobo · *Sim:* Isaac Sim/Lab, PyBullet, MuJoCo, AI Habitat, BEHAVIOR/OmniGibson · *Learning:* PyTorch; LLM APIs / open VLMs · *Middleware:* ROS 2

**Bar by tier** — L1: solid on graph search / PDDL / BTs in sim · L2: ships a real autonomy subsystem, fluent across symbolic↔geometric↔execution · L3: architects decision systems, deep in ≥1 differentiating area (TAMP, POMDP, or LLM-planning) · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
TAMP / decision-architecture slice of the canonical robotics/AI subject set (grounding-ref §B), annotated with representative courses. **Leans hardest on CS theory of any robotics niche.**
- **Foundational maths & CS:** discrete math & **logic** (propositional/first-order — the language of symbolic planning) · **algorithms & data structures, esp. graph search** — the single most load-bearing subject *(CMU 15-281 / 16-350)* · probability & decision theory · linear algebra · **optimization** — LP/IP/**MIP**, convex, dynamic programming *(Berkeley CS 287)* · computational complexity.
- **Core robotics:** configuration space & kinematics · **motion planning** — sampling-based (PRM/RRT/RRT*), search-based (A*/D* lattice), trajectory optimization *(CMU 16-350/16-782; Modern Robotics C4)* · state estimation / localization; feedback-control basics · **ROS 2 + Nav2 / MoveIt 2**.
- **Niche-specific:** **classical / symbolic AI planning** — STRIPS, **PDDL**, HTN, plan-graphs *(Edinburgh AI Planning; MIT 16.410)* · **TAMP** — coupling symbolic task plans with feasible geometric motion *(MIT 6.4110, Kaelbling/Lozano-Pérez; Garrett et al. survey)* · **decision-making under uncertainty** — MDPs, **POMDPs**, DP, MCTS *(Stanford AA 228; CMU 16-782)* · **behavior trees, FSMs & autonomy/decision architectures** *(KTH/Ögren; Colledanchise-Ögren; Nav2)* · **temporal & constraint-based planning / scheduling, risk-aware planning** *(MIT 16.412J Cognitive Robotics)* · **model-based execution, plan monitoring & replanning; multi-robot / multi-agent planning** *(CMU 15-887)*.
- **Frontier/advanced:** **learned planning** — neural planners, learned heuristics, planning with learned world models · **LLM/VLM task planning** — SayCan, Code-as-Policies, LLM+PDDL, Text2Motion · integrated **task–motion–learning**; large-scale / online **POMDP** solvers; chance-constrained & risk-aware planning *(Stanford AA 229)*; differentiable planning *(CMU 15-887 deep-RL module)*.

## 6. Training Programme Design & Duration `✓`
TAMP/decision-architecture specialization on the shared 5-phase, ~1,400-hour base (grounding ref §D), with **Phase 4 tuned to this niche.** Distinctively, this niche shifts effort from hardware/sim-debug toward **algorithm implementation** (planners, search, MDP/POMDP), so labs lean on PDDL/planner coding over hardware bring-up.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths, **logic & discrete math**, Python/C++, **graph search & algorithms**, classical ML | 2.0 mo | 6 mo | 300 | AI/maths + search fluency |
| 2. Core robotics | Kinematics, control basics, **motion planning (OMPL)**, **ROS 2 / Nav2 / MoveIt 2** | 2.0 mo | 6 mo | 300 | Command a robot; sampling-based planning in sim + real |
| 3. AI/ML + decision depth | Deep learning, RL, **MDP/POMDP decision-making**, some CV | 2.0 mo | 6 mo | 300 | Decision-making under uncertainty + learning |
| 4. **TAMP & decision-architecture specialization** | Symbolic planning (**PDDL/HTN**), TAMP (**PDDLStream**), behavior trees, execution monitoring/replanning, LLM task planning | 2.0 mo | 6 mo | 300 | The niche core |
| 5. Capstone + portfolio | Long-horizon autonomy stack (TAMP or LLM-planner + BT) on a sim / real mobile manipulator + interview prep | 1.5–2.0 mo | 4–5 mo | 200 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior autonomy/planning engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The field is converging on hierarchical **"reasoning-VLM brain + TAMP/VLA/BT executor"** stacks — while a 2026 **neuro-symbolic counter-current** reasserts that explicit symbolic/geometric structure still beats end-to-end VLAs on long-horizon reliability and energy. `🆕` = 2026 release.

- **LLM/VLM-driven TAMP (the semantic layer over symbolic+geometric planning):** **LLM3** (LLM proposes symbolic action sequences *and* continuous motion params, with motion-failure reasoning as feedback — the reference "LLM-in-the-loop TAMP" template) · **AutoTAMP** (NL → task+motion spec a symbolic planner checks for feasibility) · **VLM-TAMP** ("Guiding Long-Horizon TAMP with VLMs" — VLM proposes grounded subgoals to prune the search) · **"Prime the Search"** (LLM warm-starts geometric-TAMP tree search — LLMs as heuristics, not planners) · 🆕 **Onto-LLM-TAMP** (ontology/knowledge-grounded, curbs infeasible plans) · 🆕 **LLM-guided State Estimation for Partially-Observable TAMP** (LLM priors for belief-space/POMDP TAMP). *Blunt finding — **A Systematic Study of LLMs for TAMP with PDDLStream** (16 Gemini-2.5 variants, 4,950 problems): engineered PDDLStream still beats LLM planners on success + speed.*
- **Classical TAMP goes GPU-parallel & differentiable:** **cuTAMP** (NVLabs, RSS 2025 — first GPU-parallel differentiable TAMP; thousands of particle solutions jointly optimized, long-horizon problems in *seconds* atop cuRobo) · **Differentiable Particle Optimization for Fast Sequential Manipulation** (batched differentiable manipulation-sequence optimization — same "make TAMP GPU-native" thrust).
- **Diffusion & generative planning (bridging symbolic ↔ continuous):** **Hybrid Diffusion for Simultaneous Symbolic and Continuous Planning** (RSS 2025 — jointly diffuses discrete symbols + continuous params, beating staged baselines; the hottest "generative TAMP" idea) · **MMD / SMD** (diffusion + search for collision-free multi-robot motion under constraints) · **Hierarchical Diffusion Motion Planning** with task-conditioned priors.
- **Behavior trees + LLM/VLM generation (the deployable autonomy substrate):** **BehaviorTree.CPP v4 + Groot2 / Nav2** (the de-facto ROS 2 autonomy-orchestration runtime most learned planners now target) · **BTGenBot** (small LLMs generate executable BTs — small models suffice) · **LLM-as-BT-Planner** (in-context BT generation for assembly/manipulation) · 🆕 **Code-BT** (IJCAI 2025 — code-driven BT synthesis exploiting LLM coding) · **VLM-driven Behavior Tree** (closes the perception→BT loop).
- **Hierarchical VLA / dual-system decision architectures (the "brain + hands" pattern):** **Gemini Robotics-ER 1.5 + GR 1.5** (DeepMind, Oct 2025 — embodied-reasoning VLM orchestrator that thinks, plans multi-step, calls tools + a VLA executor; the **dominant reference architecture**) · **π0.5 → π0.6** (Physical Intelligence, Apr→Nov 2025 — hierarchical high-level subtask + low-level action tokens) · **NVIDIA GR00T** (humanoid FM, same high/low split) · **OneTwoVLA** (adaptively switches System-2 reasoning ↔ System-1 acting) · 🆕 **HALO** (unifies multimodal embodied-CoT reasoning + action via Mixture-of-Transformers) · 🆕 **"VLAs-as-Tools"** (VLM does temporal planning/recovery; specialized VLAs are callable tools for bounded subtasks).
- **World models for planning (imagine-then-act):** 🆕 **H-WM** (bilevel *logical* LLM-symbolic-transition + *visual* world model guiding a π0.5 VLA — **64.8% vs 6.4% SR** on LIBERO-LoHo; the flagship 2026 "world-model-guided TAMP") · 🆕 **Hierarchical Planning with Latent World Models** (long-horizon via learned latent dynamics) · 🆕 **World Model for Robot Learning: A Survey**.
- **Neuro-symbolic resurgence (the efficiency counter-narrative to end-to-end VLAs):** 🆕 **"The Price Is Not Right"** (Feb 2026 — PDDL planning + diffusion control beats π0 on structured long-horizon tasks, **95% vs 34%**, with ~80× less energy and 34 min vs 40 h training; the strong 2026 case for symbolic structure) · **NOD-TAMP** (Neural Object Descriptors + TAMP for few-demo generalizable long-horizon skills) · 🆕 **VL-guided Neuro-Symbolic Imitation** (data-efficient real-world manipulation from priors).
- **Benchmarks & datasets (what people evaluate on):** **PARTNR** (Meta FAIR — 100k NL tasks, 60 multi-room houses; the reference for long-horizon, multi-agent embodied planning) · **Embodied Agent Interface** (unifies tasks/modules/metrics over BEHAVIOR + VirtualHome) · **VLABench** & **CookBench** (large-scale language-conditioned, long-horizon reasoning) · 🆕 **WorldLines** (benchmarks *stateful* long-horizon embodied agents) · **PlanBench / "Can LLM-Reasoning Replace Classical Planning?"** (PDDL/IPC stress tests exposing LLM planning gaps).

*Net trend: hierarchical reasoning-VLM-brain + symbolic/geometric-executor stacks are consolidating, while 2026 neuro-symbolic, GPU/differentiable, and diffusion-TAMP work reasserts that explicit structure wins on long-horizon reliability and energy. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Implement **A* / weighted-A* + RRT/PRM** planners from scratch (grid + C-space) | Search & sampling foundations; optimal path on benchmark maps, RRT solves a bugtrap |
| Foundational | Model a domain in **PDDL** and solve with **Fast Downward** (Blocksworld → a tabletop/kitchen domain) | Symbolic planning; valid plans for held-out goals, validated by VAL |
| Applied | **Behavior-tree autonomy** for a mobile robot in **Nav2 + BehaviorTree.CPP** (patrol / fetch-and-deliver + recovery) | Decision architecture + execution; robust behavior under failure/preemption |
| Applied | **TAMP rearrangement** with **PDDLStream** on a sim arm (symbolic plan + geometric feasibility) | Task↔motion integration; solves a blocked-goal problem needing re-grasp/relocation |
| Applied | **MDP/POMDP agent** — value iteration + **MCTS/POMCP** on a partially-observable search-and-retrieve task | Decision-making under uncertainty; near-optimal policy that handles observation noise |
| Advanced | **Long-horizon replanning** — execution monitoring + plan repair in a dynamic / partially-known world | Model-based execution; recovers from disturbances without replanning from scratch |
| Advanced | **LLM-in-the-loop TAMP** — LLM proposes symbolic subgoals, a geometric planner verifies feasibility (LLM3 / AutoTAMP-style) | Grounding language in feasible plans; NL goal → executed multi-step task |
| Advanced | **Multi-robot task allocation + coordinated planning** (collision-free; MAPF or MMD-style) | Multi-agent planning; N robots complete tasks with no conflict |
| Capstone | **Language-conditioned long-horizon autonomy stack** — reasoning-VLM/LLM planner → TAMP/PDDL → behavior-tree executor on a sim (Habitat/Isaac) or real mobile manipulator, scored on a **PARTNR-style** benchmark | End-to-end frontier decision stack; completes a multi-step NL household/warehouse task with replanning |

## 9. Required Lab Setup / Hardware / Resources
*(Planning is comparatively hardware-light and sim-first — compute + software dominate over robots.)*
- **Compute:** strong multi-core **CPU** workstation (search/planning is largely CPU-bound) · **RTX 4090 / A6000** for GPU-parallel TAMP (cuTAMP/cuRobo), diffusion planning, and local VLM inference · A100/H100 or **LLM/VLM API access** for large reasoning-orchestrator experiments.
- **Robots (sim-first; any is optional):** ROS 2 mobile base (**TurtleBot 4**) · a mobile manipulator (**Fetch**, **Stretch 3**, **TIAGo**) or arm (**Franka**, **UR5e**) for embodied TAMP demos · a small **multi-robot** set (or sim fleet) for coordination.
- **Symbolic planners:** **Fast Downward**, FF, ENHSP, **POPF/OPTIC** (temporal), pyperplan · **Unified Planning (AIPlan4EU)** meta-framework · **VAL** plan validator · **editor.planning.domains / Planutils**.
- **TAMP frameworks:** **PDDLStream** (Garrett) · **cuTAMP / cuRobo** (GPU, differentiable) · **PDDLGym** · belief-space/Tampura-style TAMP.
- **Decision / POMDP:** **POMDPs.jl / JuliaPOMDP** · **DESPOT / POMCP / SARSOP** solvers · MCTS libraries.
- **Autonomy runtime:** **BehaviorTree.CPP v4 + Groot2** · **Nav2** · **py_trees / py_trees_ros** · **SMACH / FlexBE** (state machines) · **MoveIt 2 Task Constructor**.
- **Motion backend:** **OMPL**, MoveIt 2, cuRobo.
- **Simulators:** **AI Habitat** (long-horizon household planning) · Isaac Sim/Lab · PyBullet · MuJoCo · **BEHAVIOR / OmniGibson** · VirtualHome.
- **Datasets & benchmarks:** **PARTNR** · **BEHAVIOR-1K** · **Embodied Agent Interface** · **VLABench** · **CookBench** · WorldLines · **PlanBench** · **IPC (International Planning Competition) domains** · classical PDDL domain libraries.

## 10. Partnerships & Ecosystem
- **Academic labs (planning/decision powerhouses):** MIT **LIS (Kaelbling & Lozano-Pérez — TAMP)** & **MERS (Brian Williams — model-based autonomy)** · **CMU RI (Likhachev/SBPL; Veloso)** · Stanford **SISL (Kochenderfer — decision-making under uncertainty)** & IPRL · **KTH RPL (Ögren — behavior trees)** · UC Berkeley (Abbeel) · Georgia Tech.
- **Open-source communities / stewards:** **Open Robotics — Nav2 & MoveIt 2** (ROS 2 autonomy) · **BehaviorTree.CPP** (Davide Faconti) · **AIPlan4EU / Unified Planning** (EU planning consortium) · **planning.domains / Planutils** · **PDDLStream** (open TAMP).
- **Sim / benchmark stewards:** **Meta FAIR (AI Habitat, PARTNR, BEHAVIOR)** · **Stanford (BEHAVIOR-1K / OmniGibson)** · NVIDIA (Isaac, cuRobo/cuTAMP).
- **Industry programs:** NVIDIA (Isaac, cuTAMP) · Google DeepMind (Gemini Robotics reasoning stack) · Physical Intelligence (hierarchical VLA) · autonomous-driving **decision/behavior-planning** teams (Waymo, Zoox, Nuro, Aurora) · warehouse **multi-robot** orchestration (Amazon Robotics).
- **Venues / standards (the field's home):** **ICAPS** (International Conference on Automated Planning & Scheduling — *the* planning venue) · **AAAI / IJCAI** (classical AI) · **RSS / CoRL / ICRA / IROS** (robotics) · **NeurIPS / AAMAS** (decision & multi-agent) · runtime-assurance / decision-safety standards on the AV side (**ISO 21448 SOTIF**, ISO 22737). *(No dedicated TAMP/BT certification body — see §3.)*

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (logic/PDDL, graph search, MDP/POMDP, behavior trees, TAMP).
- **Project rubrics** with objective metrics: **plan success rate** on held-out goals · **plan length / optimality** vs. optimal · **planning time / nodes expanded** · **replanning success** under disturbance · POMDP **discounted return** · multi-robot **makespan & conflict-free rate**.
- **Standardized benchmarks** as portable evidence: **IPC domains / PlanBench** (symbolic) · **PARTNR / Embodied Agent Interface / VLABench** (long-horizon embodied) · **LIBERO-LoHo** (long-horizon); increasingly the LLM-planning stress tests ("Can LLM-Reasoning Replace Classical Planning?").
- **Recognized certifications as evidence:** Edinburgh AI Planning; Modern Robotics C4; Columbia AI MicroMasters; The Construct BT/Nav2.
- **Senior tiers:** portfolio (a planner / autonomy stack) + system-design interview (**choose the representation — PDDL vs BT vs MDP vs LLM-planner — and justify it**) + live plan-failure debugging.

## 12. Adjacent & Related Niches
Pairs most tightly with its **A3 sibling *Motion Planning & Navigation*** (the geometric backend) and with **A7 VLAs / world models / LLM task planners** (the semantic layer — the fastest-moving boundary); draws on **A6 RL/imitation** (learned planning & heuristics), **A9 multi-robot systems** (multi-agent planning), and **A10 safety / runtime assurance** (execution monitoring, formal verification of autonomy). Feeds the **C2 mobile-manipulator, C3 AMR, C5 humanoid, C6 aerial** platform tracks and the **B2 logistics, B9 humanoid/service, B10 autonomous-vehicle, B12 space** verticals. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Niche research: `phase-1/.research/task-and-motion-planning.{creds,trending}.md`. Taxonomy: `master-niche-taxonomy.md` cluster A3 (`~`). §7 stamped mid-2026 — re-research before publish.*
