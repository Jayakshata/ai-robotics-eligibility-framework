# Motion Planning & Navigation — Credentials & Subjects (Research)

> **Niche:** Motion Planning & Navigation · **Axis A cluster:** A3 · **Scope:** classical / sampling-based (RRT/PRM) / optimization-based motion planning, trajectory optimization, global/local & social navigation, TAMP, learned planning.
> Complements `phase-1/_grounding-reference.md` — does **not** re-derive the valued-degree tiers, canonical subject union, or duration model. Only what is **specific** to A3. Data 2024–2026; sources inline. `✓` grounded · `⏱` time-sensitive.

---

## 1. Strongest programs + the named courses that make them strong

This niche is the **most algorithms/CS-heavy** slice of robotics — the defining programs are those with a *dedicated, standalone planning course* (not planning folded into "intro robotics").

### Undergraduate `✓`
- **CMU — 16-350 Planning Techniques for Robotics** (Maxim Likhachev): heuristic/graph-search + sampling-based planners, implemented in programming projects; the undergrad feeder to 16-782. The single most on-target UG course in the niche. [cs.cmu.edu/~maxim/classes/robotplanning](https://www.cs.cmu.edu/~maxim/classes/robotplanning/)
- **WPI — RBE 3002 Unified Robotics IV**: navigation, position estimation, path planning, frontier exploration, ROS; capstone = autonomous nav of an unknown environment. [wpi.cleancatalog.net/.../rbe-3002](https://wpi.cleancatalog.net/robotics-engineering/rbe-3002)
- **Michigan — ROB 330 Localization, Mapping & Navigation** + **ROB 422 Introduction to Algorithmic Robotics**: full-stack mobile-robot nav, search/sampling planning. [bulletin.engin.umich.edu/courses/robotics-courses](https://bulletin.engin.umich.edu/courses/robotics-courses/)
- **Georgia Tech — CS 4649 Robot Intelligence: Planning**: symbolic/geometric/stochastic/dynamic planning (UG twin of 7649). [coursicle.com/gatech/courses/CS/7649](https://www.coursicle.com/gatech/courses/CS/7649/)
- **UPenn (GRASP)** — planning taught via the GRASP pipeline; feeds MEAM 6200.

### Postgraduate — ranked by A3 strength `✓`

| Tier | Program | The load-bearing course(s) |
|------|---------|----------------------------|
| **World-leading** | **CMU (RI)** | **16-782 Planning & Decision-making in Robotics** (Likhachev) — *the* flagship graduate planning course; search, sampling-based, planning under uncertainty, case studies on ground/aerial/mobile-manip/multi-robot. [cs.cmu.edu/~maxim/classes/robotplanning_grad](https://www.cs.cmu.edu/~maxim/classes/robotplanning_grad/) |
| **World-leading** | **MIT** | **6.832 Underactuated Robotics** (Tedrake) — trajectory optimization, optimal control, motion planning as optimization; **6.4210 Robotic Manipulation** for planning-in-clutter. [underactuated.mit.edu](https://underactuated.mit.edu/) |
| **World-leading** | **Stanford** | **AA 274A/B Principles of Robot Autonomy I & II** (cross-listed **CS 237A/B**) — trajectory optimization, motion planning, localization/SLAM, ROS; sits in Aero/Astro (GNC lineage). [stanfordasl.github.io/PoRA-I](https://stanfordasl.github.io//PoRA-I/aa274a_aut2324/) |
| **World-leading** | **UC Berkeley** | **CS287 Advanced Robotics** (Abbeel) — optimal control (MPC/LQR/iLQR), motion planning (RRT + variants, A* + variants), optimization+probabilistic core. [people.eecs.berkeley.edu/~pabbeel/cs287-fa19](https://people.eecs.berkeley.edu/~pabbeel/cs287-fa19/) |
| **Strong** | **Michigan** | **ROB 520 Motion Planning** (Berenson) — high-dimensional sampling-based planning, non-holonomic path planning, multi-robot, planning on constraint manifolds. [berenson.robotics.umich.edu/courses/winter2022motionplanning](https://berenson.robotics.umich.edu/courses/winter2022motionplanning/index.html) |
| **Strong** | **UPenn** | **MEAM 6200/620 Advanced Robotics** (kinematics, nonlinear control, planning, multi-robot) + **ESE 650 Learning in Robotics**. [seas.upenn.edu/~meam620](https://www.seas.upenn.edu/~meam620/) |
| **Strong** | **Georgia Tech** | **CS 7649 Robot Intelligence: Planning** — classical/geometric/stochastic/dynamic planning; conference-style final project. [omscs.gatech.edu/.../computational-perception-and-robotics](https://omscs.gatech.edu/specialization-computational-perception-and-robotics) |
| **Present (EU)** | **TU Delft** | **RO47005 Planning & Decision Making** — global (PRM/A*) + local + trajectory optimization; project-based. [autonomousrobots.nl/education](https://autonomousrobots.nl/education/) |
| **Present (EU)** | **ETH (ASL) · EPFL · TUM** | ETH **Autonomous Mobile Robots** (Siegwart) is the anchor nav course; EPFL/TUM teach planning within their MSc Robotics electives. |

---

## 2. Certifications & MOOCs — niche-specific `✓`

| Tier | Credential (provider) | Why it fits A3 |
|------|----------------------|----------------|
| **Blue-chip** | **Robotics: Computational Motion Planning** — UPenn / Coursera (CJ Taylor) | The single most *on-topic* MOOC: graph search (BFS/Dijkstra/A*), configuration space + C-obstacles, PRM/RRT, artificial potential fields. [coursera.org — computational-motion-planning](https://www.classcentral.com/course/robotics-computation-5029) |
| **Blue-chip** | **Modern Robotics, Course 4: Robot Motion Planning and Control** — Northwestern / Coursera (Lynch) | Gold-standard theory: grid-based, sampling-based planners, virtual potential fields, nonlinear/feedback control (textbook Ch. 10). [coursera.org/learn/modernrobotics-course4](https://www.coursera.org/learn/modernrobotics-course4) |
| **Blue-chip** | **Autonomous Mobile Robots (ETHx)** — ETH Zürich / edX (Siegwart, Scaramuzza, Chli) | Locomotion/kinematics, probabilistic localization + mapping, **motion planning** for wheeled/legged/aerial. [edx.org/learn/.../eth-zurich-autonomous-mobile-robots](https://www.edx.org/learn/autonomous-robotics/eth-zurich-autonomous-mobile-robots) |
| **Strong (applied)** | **ROS2 Navigation (Nav2)** + **Advanced ROS2 Navigation** — The Construct | The de-facto applied nav stack: mapping, AMCL localization, global/local planners, costmaps, obstacle avoidance; shareable pro certificate (75% pass). [theconstruct.ai/.../ros2-navigation](https://www.theconstruct.ai/robotigniteacademy_learnros/ros-courses-library/ros2-navigation/) |
| **Strong (applied)** | **Self-Driving Car Engineer Nanodegree** — Udacity (path-planning module: prediction → behavior planning → trajectory generation) + **Robotics Software Engineer ND** (localization/mapping/path planning). [udacity.com/.../self-driving-car-engineer-nanodegree](https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd0013) |
| **Entry / hands-on** | **Duckietown** (self-driving MOOC) · **NVIDIA DLI Isaac ROS** navigation + **cuMotion/cuRobo** GPU-accelerated planning (no formal exam — see grounding ref: no NVIDIA robotics cert). |

*(No official "motion-planning certification" exists — this niche is validated by the theory MOOCs above + a Nav2/OMPL project portfolio.)*

---

## 3. Subject list — grounded in the syllabi above `✓`

**Foundational maths & CS** *(heavier here than any other A-niche)*
- **Graph theory & search algorithms** (Dijkstra, A*, D*/ARA*) — CMU 16-350/782, UPenn Comp. Motion Planning
- **Linear algebra · probability & statistics** — Stanford AA274A prereqs (CME 100/106)
- **Convex & numerical optimization** — MIT 6.832, Berkeley CS287 (load-bearing for trajectory optimization)
- **Computational geometry** (configuration space, collision detection) — UPenn, Michigan ROB 520
- **Data structures & algorithms; Python + C++** — universal (OMPL/Nav2 are C++)

**Core robotics**
- **Robot kinematics & dynamics** (holonomic vs non-holonomic) — Modern Robotics C2, MEAM 6200
- **Feedback / optimal control · MPC / LQR** — Berkeley CS287, MIT 6.832, Modern Robotics C4
- **State estimation, localization & SLAM** — ETH AMR, Stanford AA274A, Michigan ROB 330
- **ROS 2 / Nav2 stack** — The Construct, WPI RBE 3002, Stanford AA274A

**Niche-specific (the A3 core)**
- **Sampling-based planning** (PRM, RRT, RRT*, PRM*, BIT*) — Michigan ROB 520, UPenn, CMU 16-782
- **Search-based planning** (grid/lattice A*, ARA*, D* Lite) — CMU 16-350/782
- **Trajectory optimization** (CHOMP/TrajOpt, minimum-snap, direct collocation) — MIT 6.832, TU Delft RO47005
- **Planning under uncertainty / kinodynamic & non-holonomic planning; constraint-manifold planning** — Michigan ROB 520, CMU 16-782
- **Global vs local navigation, costmaps, potential fields, DWA/TEB local planners** — ETH AMR, Nav2
- **Multi-robot path planning** — Michigan ROB 520, MEAM 6200

**Frontier / advanced** `⏱`
- **Task & Motion Planning (TAMP)** — PDDLStream (Garrett/Kaelbling/Lozano-Pérez, MIT LIS). [dspace.mit.edu/handle/1721.1/130316](https://dspace.mit.edu/handle/1721.1/130316)
- **Learned / neural motion planning** — MPNet, Motion Policy Networks (MπNets), **Neural MP** (generalist, 2024), **cuRobo** (GPU opt+sampling), diffusion planners (EDMP, ICRA'24). [arxiv.org/html/2409.05864](https://arxiv.org/html/2409.05864v1)
- **Social / crowd navigation** — CrowdNav, SocNavBench, **SCAND** & **MuSoHu** datasets; learning-based social-nav benchmark survey (Frontiers 2025). [frontiersin.org/.../frobt.2025.1658643](https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2025.1658643/full)
- **Decision architectures** — behavior trees, finite-state machines, autonomy stacks (Stanford AA274B).

---

## 4. Niche eligibility adjustment vs. the general set `✓`

Baseline (grounding ref A.1): Tier-1 = CS/AI, Robotics Eng, EE/ECE; Tier-2 = ME, Mechatronics, Math, Physics. For **Motion Planning & Navigation**:

- **RISES — Mathematics / Applied Math → effectively Tier 1.** Optimization, graph theory, differential geometry and probability are the substance of trajectory optimization and sampling-based planning; a strong maths degree with a planning project is a top-fit here (contrast: it stays Tier-2 for most niches).
- **RISES — Aerospace / Aeronautical Engineering → Tier 1 (distinctive to A3).** Guidance-Navigation-Control heritage maps directly onto trajectory optimization and path planning; Stanford's core autonomy course (AA 274) *is* an Aero/Astro course. Not a Tier-1 field in the general set.
- **RISES — Operations Research / Industrial Engineering → qualifying-with-evidence.** Search, MDPs, planning-under-uncertainty and combinatorial optimization overlap heavily; a distinctive A3-only entrant.
- **CS remains the single strongest fit** — this is the most algorithm-centric robotics niche; the CS-with-AI/algorithms track is ideal.
- **EE/ECE holds Tier 1** via control-theoretic local planning/MPC and state estimation.
- **FALLS (relative) — Mechanical Engineering.** Unlike Manipulation & Grasping (where ME rose to Tier 1 for contact/gripper mechanics), A3 rewards little of ME's contact-mechanics/design core; ME still qualifies via dynamics + controls but is **not** a differentiator here.

---

## Sources (representative, 2024–2026 favored)
CMU 16-350 / 16-782 (Likhachev course pages); Michigan ROB bulletin, ROB 520 (Berenson); MIT Underactuated Robotics (Tedrake); Stanford ASL PoRA-I (AA274A/CS237A); Berkeley CS287 (Abbeel); UPenn MEAM 620/GRASP; Georgia Tech OMSCS CPR / CS 7649; TU Delft AMR Lab RO47005; ETH ASL / ETHx edX; WPI RBE 3002 catalog; Coursera UPenn Computational Motion Planning & Modern Robotics C4; The Construct ROS2 Navigation; Udacity SDC/Robotics ND; PDDLStream (MIT DSpace); Neural MP (arXiv 2409.05864); Frontiers social-nav benchmark 2025 (frobt.2025.1658643). Full URLs inline above.
