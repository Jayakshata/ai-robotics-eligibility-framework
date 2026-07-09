# Per-Niche Profile — Multi-Robot Systems, Swarm & Fleet Orchestration

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; multi-robot / fleet-specific and trending-research signals are research-backed. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Multi-Robot Systems, Swarm & Fleet Orchestration · **Axis A cluster:** A9 (Multi-Robot & Coordination) · **Type:** `[F]` (swarm / MARL / multi-agent-foundation-model orchestration sub-areas `[S][★]`)
**Related capabilities:** A1 collaborative perception · A2 distributed estimation / collaborative SLAM · A3 motion planning (MAPF sits at the A3↔A9 boundary) · A4 networked/decentralized control · A6 MARL / learned coordination · A7 multi-agent foundation models · **Platforms (C):** C3 AMR/AGV fleet · C6 drone / aerial swarm · C4 quadruped team · C2 heterogeneous mobile-manipulator team · **Verticals (B):** B2 warehouse/logistics · B11 aerial · B14 inspection · defense / agriculture / search-&-rescue

---

## 1. Definition & Scope
Getting **many robots to act as one system** — coordinating a group toward a shared objective faster, more robustly, or at a scale no single robot can reach. It is the layer *above* single-robot autonomy, and it splits into two poles that hire differently: an **algorithms/systems research** pole (distributed control, consensus, swarm intelligence, MARL, multi-agent path finding) and an **applied fleet-orchestration** pole (heterogeneous AMR/AGV fleets, traffic deconfliction, task scheduling) that is essentially *distributed-systems software + operations research* wearing a robotics hat. **In scope:** consensus / flocking / rendezvous / formation control, coverage control (Voronoi/Lloyd), multi-robot task allocation (MRTA / auction & market-based), multi-agent path finding (MAPF — CBS, prioritized, lifelong), swarm intelligence & self-organization (ACO/PSO/stigmergy), networked & decentralized control/estimation, collaborative SLAM/perception, fleet orchestration (interoperability, traffic deconfliction, resource management, scheduling), MARL, GNN decentralized policies, and LLM / multi-agent-foundation-model orchestration. **Out of scope (adjacent):** the single-robot perception stack (A1), single-robot SLAM/state estimation (A2), single-robot motion planning (A3 — the per-agent layer *beneath* coordination; MAPF straddles the boundary), and the low-level per-robot controller (A4).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Multi-Robot / Fleet Engineer | Implements/tunes coordination & fleet pipelines under supervision (Open-RMF / Nav2, MAPF solvers, MARL baselines); runs multi-robot sim experiments; integrates libraries on real fleets. |
| **L2** | Multi-Robot / Fleet Orchestration Engineer | Owns a coordination subsystem end-to-end (task allocation → path planning → traffic deconfliction → execution); debugs deadlock/collision on hardware; ships to a real multi-robot deployment. |
| **L3** | Senior Multi-Robot Systems / Fleet Architect | Designs the coordination/orchestration architecture; makes centralized-vs-decentralized and optimal-vs-learned tradeoffs; sets scalability benchmarks; mentors. |
| **L4/L5** | Staff / Principal Multi-Robot Research Engineer | Sets the multi-robot research agenda; advances swarm / MAPF / MARL / multi-agent-foundation-model SOTA; publishes; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (esp. with AI/algorithms), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **A9-specific `✓`: Computer Science — particularly the *distributed-systems / algorithms* track — is the strongest single fit** (consensus, fault tolerance, MAPF search, MARL and the entire orchestration software layer are CS; uniquely for A9, *backend/distributed-systems software experience partially transfers to fleet orchestration*). **Aerospace/Aeronautical Engineering rises to Tier 1** (multi-vehicle GNC, formation flying and swarm flight anchor the field — Caltech, Stanford and MIT multi-robot groups all sit in AeroAstro). **Applied Mathematics is effectively Tier 1** via graph theory, distributed optimization, dynamical systems on networks and game theory. **Operations Research / Industrial Engineering qualifies-with-evidence** (distinctive to A9 — fleet orchestration *is* logistics optimization: task assignment, scheduling, vehicle routing, queueing, combinatorial optimization). **Mechanical Engineering *falls* relative** — like Motion Planning, A9 rewards coordination algorithms & systems, not embodiment; ME qualifies via dynamics/controls but is not a differentiator.

**Highly-valued undergraduate programs `✓`** — A9 is almost entirely a **graduate/research specialization** (there is *no* standard dedicated UG "multi-robot systems" course). Closest UG signals: **Georgia Tech** — networked/multi-agent control via ECE + the **Robotarium** swarm testbed (200+ groups; ground + aerial robots — the anchor UG-accessible swarm facility) and Egerstedt's **"Control of Mobile Robots"** (Coursera, reaching formation/multi-agent control) · **UPenn (GRASP)** — the GRASP pipeline + Coursera **"Robotics: Aerial Robotics"** (Kumar; quadrotor teams operating autonomously) · **USC** — the **MAPF assignment** (Koenig/Li/Hoenig, a Model-AI-Assignment) that puts multi-agent path finding into UG AI courses.

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI (distributed systems), EE (control/networks), **Aero/Astro** (multi-agent GNC), or Applied Math, with a multi-agent / networked-control / swarm focus.

**Highly-valued postgraduate programs — ranked by A9 strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **Georgia Tech (Egerstedt lineage) · UPenn (GRASP) · MIT · Stanford · Caltech** | GT **ECE 8823 Networked Control Systems** — graph/network models, decentralized control, formation control, coverage/Voronoi, connectivity maintenance (text = Mesbahi & Egerstedt *Graph Theoretic Methods in Multiagent Networks*); the most on-target graduate course `⏱ Egerstedt now dean at UC Irvine — verify current GT instructor` · Penn **MEAM 624 Distributed Robotics** + MEAM 620 (Kumar/Hsieh aerial-swarm & distributed perception) · MIT **Distributed Robotics Lab (Rus)** + **Aerospace Controls Lab (How — multi-agent planning & MARL)** · Stanford **Multi-Robot Systems Lab (Schwager)** + **AA228/CS238 Decision Making Under Uncertainty (Kochenderfer)** · Caltech **ARCL (Soon-Jo Chung)** — aerial/spacecraft/drone swarms, Neural-Swarm |
| Strong — swarm epicenters | **ULB IRIDIA · EPFL DISAL · CMU (RI)** | ULB **INFO-H-414 Swarm Intelligence (Dorigo & Birattari)** — *the* founding swarm-intelligence lab; ACO, self-organization, swarm-robotics project · EPFL **Distributed Intelligent Systems (Martinoli)** — flocking/formation, **market-based task allocation**, PSO, mobile sensor networks (e-puck/Webots) · CMU multi-robot coordination (Sycara), swarm (Choset), 16-883 |
| Strong — MAPF hub | **UC Irvine (Koenig) · CMU (Jiaoyang Li) · TU Berlin (Hoenig)** | The **CBS/PBS/MAPF-LNS** research nucleus behind warehouse fleet coordination |
| Present (networked control & swarm hardware) | **UCSB · Sheffield · Bristol · Cornell · Harvard** | UCSB **ME/ECE 269 Network Systems (Bullo)** — consensus/distributed averaging (text *Distributed Control of Robotic Networks*) · Sheffield (Gross), Bristol Robotics Lab (Hauert), Cornell (Petersen), Harvard (Nagpal, **Kilobots**) = swarm-hardware / bio-inspired |

*(Oxford = research-only ORI / AIMS CDT; Imperial & Edinburgh teach multi-agent inside a broader MSc AI/robotics rather than a dedicated course.)*

**Highly-valued certifications `✓`** — The Construct **Robot Fleet Management in ROS 2 with Open-RMF** (the one *fleet-orchestration* MOOC — fleet adapters, multi-fleet task allocation & traffic deconfliction on a real multi-robot lab; shareable cert, 75% pass) · UPenn/Coursera **Robotics: Aerial Robotics** (Kumar — quadrotor dynamics/control + autonomous teams) · Georgia Tech/Coursera **Control of Mobile Robots** (Egerstedt — feedback control reaching formation/multi-agent behaviors) · **INFO-H-414 Swarm Intelligence** (ULB, open materials) + **Distributed Intelligent Systems** (EPFL DISAL) — the de-facto swarm syllabi · the **MARL book** (Albrecht/Christianos/Schäfer, MIT Press 2024, `marl-book.com`) + IIIA-CSIC MARL course — the canonical multi-agent-RL reference (CTDE, MADDPG, QMIX, MAPPO) · **standards literacy: VDA 5050** (v2.1.0, Jan 2025) + **MassRobotics AMR Interoperability Standard** — not exams but the JSON/MQTT master-control ↔ AGV/AMR interface standards every fleet engineer must know. *(No formal "multi-robot certification" exists — validate via the Open-RMF course + a swarm/MAPF/MARL project portfolio + standards literacy.)*

**Experience & portfolio** — L1: internship/academic; a swarm/consensus sim, a MAPF solver, or a multi-robot ROS 2 demo. L2: 2–4 yr, a real multi-robot deployment (an Open-RMF fleet or a coordinated team) + benchmark numbers (throughput / makespan / scalability). L3: 5–8 yr, ≥1 real fleet / multi-robot deployment led. L4/L5: 8+ yr and/or first-author papers (**AAMAS / ICAPS / RSS / CoRL / ICRA / RA-L / NeurIPS**).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** and **C++** for real-time robotics (**Open-RMF / ROS 2 are C++**)
- **ROS 2 multi-robot**: namespacing, **DDS** discovery & domains, multi-robot Nav2
- **Distributed-systems fundamentals**: consensus, fault tolerance, message passing, eventual consistency (the orchestration substrate)
- **(Algebraic) graph theory & networked control**: Laplacians, connectivity, consensus / formation / flocking
- **Multi-Robot Task Allocation (MRTA)**: auction / market-based & threshold methods
- **Multi-Agent Path Finding (MAPF)**: CBS, prioritized planning, conflict resolution, lifelong MAPF
- **Fleet orchestration**: traffic deconfliction, shared-resource (lift / door / charger) management, task scheduling — **Open-RMF**
- **Interoperability standards**: **VDA 5050**, MassRobotics AMR (JSON/MQTT master-control ↔ AGV/AMR); MQTT
- Multi-robot **simulation** (Gazebo multi-robot, Isaac Sim, or a vectorized MARL sim) and on-fleet debugging
- Real multi-robot integration on physical hardware

**Preferred / differentiating**
- **Multi-Agent RL (MARL)**: CTDE, **QMIX / MAPPO / MADDPG**, emergent coordination
- **GNN decentralized policies**: learned communication under comms constraints (Prorok line)
- **Swarm intelligence**: ACO/PSO, stigmergy, self-organization, scalability & robustness
- **Distributed/decentralized estimation & collaborative SLAM**
- **Multi-agent foundation models** (DeepFleet, MAPF-GPT) & **LLM/VLA multi-robot orchestration** (RoboOS, GenSwarm)
- **Aerial swarms** (EGO-Swarm, formation flight, comms/GPS-free coordination)
- **Combinatorial / distributed optimization & OR** (VRP, scheduling, queueing — the fleet-throughput layer)
- Publications at **AAMAS / ICAPS / RSS / CoRL / ICRA / RA-L / NeurIPS**; real-world fleet deployment

**Tools & tech stack** — *Languages:* Python, C++ · *Middleware / fleet:* ROS 2, **Open-RMF**, Nav2, DDS · *Standards:* **VDA 5050**, MassRobotics AMR · *Multi-robot & MARL sim:* **VMAS + BenchMARL** (GPU-vectorized), **PettingZoo / EPyMARL / RLlib**, Gazebo (multi-robot), Isaac Sim, **Webots** & **ARGoS** (swarm), **POGEMA** (MAPF) · *MARL/learning:* PyTorch, TorchRL, MADDPG/QMIX/MAPPO impls · *MAPF:* CBS / **LaCAM**, MAPF-LNS · *Messaging:* MQTT, DDS · *Swarm hardware:* Bitcraze **Crazyflie** (aerial), **e-puck**, **Kilobots**, GT **Robotarium**.

**Bar by tier** — L1: solid on the required list in multi-robot sim + basic real fleet · L2: ships a real coordination/fleet subsystem, fluent across ROS 2 / Open-RMF / MAPF · L3: architects multi-robot systems, deep in ≥1 differentiating area (MARL, MAPF, swarm, or fleet OR) · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Multi-robot slice of the canonical robotics/AI subject set, annotated with representative courses. **Graph theory and distributed systems are disproportionately load-bearing here.**
- **Foundational maths & CS:** **(algebraic) graph theory & network science** — Laplacians, connectivity, spectra *(GT ECE 8823, UCSB ME/ECE 269)* · **distributed algorithms & distributed systems** — consensus, fault tolerance, message passing *(CS distributed-systems core — the fleet-orchestration substrate)* · **optimization** — convex, **combinatorial**, and **distributed** optimization + **game theory** (cooperative/competitive multi-agent) *(EPFL DIS)* · probability & stochastic processes · linear algebra · Python + C++ · MQTT/networking basics.
- **Core robotics:** kinematics/dynamics, feedback & optimal control, state estimation/SLAM *(single-robot foundation)* · **ROS 2 + multi-robot namespacing, DDS, Nav2** *(prereq for Open-RMF)* · motion planning & navigation *(the per-agent layer beneath coordination)*.
- **Niche-specific (the A9 core):** **consensus, flocking, rendezvous & formation control** *(GT ECE 8823, EPFL DIS, UCSB 269)* · **coverage control** (Voronoi/Lloyd), distributed sensing, mobile sensor networks *(GT ECE 8823, EPFL DIS)* · **Multi-Robot Task Allocation (MRTA)** — auction/market-based & threshold *(EPFL DIS)* · **Multi-Agent Path Finding (MAPF)** — CBS, prioritized planning, lifelong MAPF *(Koenig/Li)* · **swarm intelligence & self-organization** — ACO, PSO, stigmergy, scalability/robustness *(ULB INFO-H-414, EPFL DIS)* · **networked/decentralized control & estimation**, connectivity maintenance, communication constraints *(GT ECE 8823)* · **fleet orchestration** — heterogeneous-fleet interoperability, traffic deconfliction, resource management, task scheduling *(Open-RMF; VDA 5050; MassRobotics)*.
- **Frontier/advanced `⏱`:** **Multi-Agent RL (MARL)** — CTDE, QMIX/MAPPO, emergent coordination *(marl-book)* · **Graph Neural Networks for decentralized policies** — learned communication/coordination *(GRASP, MIT)* · **learning-augmented swarm/aerial control** — Neural-Swarm, learned interaction models *(Caltech Chung)* · **multi-agent foundation models & LLM/VLA multi-robot orchestration**; large-scale lifelong MAPF for warehouses; sim-to-real for swarms.

## 6. Training Programme Design & Duration `✓`
Multi-robot-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), with specialization + capstone tuned to multi-robot systems, swarm & fleet orchestration.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths (**graph theory + optimization + distributed-systems emphasis**), Python/C++, classical ML | 2.0 mo | 6 mo | 300 | ML & maths fluency |
| 2. Core robotics | Kinematics/dynamics, control, **ROS 2 (multi-robot) + Nav2**, SLAM/nav | 2.0 mo | 6–7 mo | 320 | Command a (single) robot in sim + real |
| 3. AI/ML depth | Deep learning, computer vision, RL/imitation (**→ MARL**) | 2.0 mo | 6 mo | 300 | Perception + policy learning |
| 4. **Multi-robot specialization** | Consensus/formation/coverage, MRTA, MAPF, swarm intelligence, networked control, MARL, **Open-RMF fleet orchestration + VDA 5050** | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | A coordinated multi-robot mission (Open-RMF heterogeneous fleet **or** a MARL/swarm coordination task) + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior multi-robot / fleet engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** The defining 2025–26 shift is the migration from hand-tuned optimal planners to *learned multi-agent foundation models* — the niche's "SAM2/DINO moment," with **DeepFleet** as the fleet-scale landmark. `🆕` = 2026 release. (arXiv ids encode date: `25xx`=2025, `26xx`=2026.)

- **Multi-agent foundation models — "the fleet brain":** **DeepFleet** (Amazon, Aug 2025 — a suite of multi-agent foundation models, robot-/image-/graph-floor variants, trained on *hundreds of thousands* of warehouse robots; ~10% travel-time gain — the SAM2-equivalent landmark for fleets) · **MAPF-GPT** (AAAI 2025 — transformer imitation-learned on LaCAM traces; solves pathfinding at scale under partial observability with no comms/heuristics; beats DCC/SCRIMP) · **MAPF-World** (2025 — action world-model predicting environment dynamics for MAPF) · 🆕 **MARL-GPT** (2026 — foundation-model framing for multi-agent RL).
- **Multi-Agent Path Finding (MAPF) — the warehouse-orchestration workhorse:** **LaCAM** (fast search-based solver; the de-facto expert/oracle for learned solvers) · **POGEMA** (ICLR 2025 — the standard benchmark platform unifying learnable + search MAPF baselines) · 🆕 **RL-RH-PP / learning-guided prioritized planning** (JAIR 2026 — first RL+search hybrid for lifelong warehouse MAPF) · 🆕 **"It Takes Two to Tango"** (2026 — joint order-scheduling + MAPF simulator, closing the plan→throughput gap) · 🆕 **Prorok Lab** Graph-Attention-Guided Search for dense MAPF (AAAI 2026) + "Pairwise is Not Enough" hypergraph-NN MAPF (ICLR 2026) · **"Where Paths Collide"** (May 2025 — comprehensive classic + learning MAPF survey).
- **LLM/VLA-orchestrated heterogeneous teams (natural-language mission specs → coordinated policies):** **RoCo** (ICRA 2024) & **CoELA** (2023) — foundational LLM-dialogue multi-arm / embodied household teams · 🆕 **GenSwarm** (npj Robotics 2026 — LLM code-policy generation + real-robot deployment; zero-shot, beats MetaGPT/CaP/LLM2Swarm by ~34–37%) · **RoboOS** (May 2025 — hierarchical cross-embodiment multi-agent collaboration) · **EMOS / COHERENT** (Oct 2024 — embodiment-aware heterogeneous multi-robot OS with LLM agents) · 🆕 **DynaHMRC** & **Adaptive Group Negotiation** (2026 — decentralized heterogeneous collaboration for dynamic tasks) · **NVIDIA GR00T N1** (2025 — increasingly the per-robot VLA backbone *under* a multi-agent planner). Surveys: **LLMs for Multi-Robot Systems** (*Auton. Robots* 2026), **Multi-Agent Embodied AI** (May 2025).
- **Distributed & decentralized control (classical × learning hybrids):** **GNN decentralized policies** (Prorok line — message-passing for comms-constrained path planning & task allocation; still the backbone abstraction) · 🆕 diffusion multi-robot trajectory generation (IROS 2025, ≤16 robots) & hybrid optimization+MARL learned constraints (CoRL 2025) · 🆕 decentralized MPC for cooperative object transport (*Sci. Reports* 2026).
- **Swarms & production interoperability:** drone swarms — **EGO-Swarm** (foundational decentralized quadrotors), **PACNav** (comms/GPS-free); 🆕 2026 defense-scale systems (L3Harris AMORPHOUS, ATLAS); Toshiba real-time 5G swarm control (Oct 2025) · **interoperability standards** — **VDA 5050** + **Open-RMF** (OSRA-governed since 2024) are the de-facto mixed-fleet substrate; the MiR VDA 5050 Adapter (Mar 2025) marks vendor convergence.
- **Simulators, benchmarks & datasets (shared substrate):** **VMAS + BenchMARL** (Prorok/Bettini — GPU-vectorized 2D multi-robot sim ~100× faster + standardized MARL benchmarking; the community default) · 🆕 **GRACE** (2026 — unified 2D multi-robot path-planning simulator/benchmark across grid/roadmap/continuous) · 🆕 **HERCULES** (2026 — open-source heterogeneous multi-robot SLAM + collaborative-perception + exploration sim) · **Cambridge RoboMaster** (agile physical multi-robot platform) · datasets **CoPeD** (2024, air-ground collaborative perception), **CU-Multi** (2025, multi-robot data-association/SLAM).

*Net trend: fleet/swarm coordination is migrating from hand-tuned optimal MAPF planners to learned multi-agent foundation models (DeepFleet, MAPF-GPT) and LLM/VLA-orchestrated heterogeneous teams (GenSwarm, RoboOS), all riding GPU-vectorized sims (VMAS) and open interoperability standards (VDA 5050 / Open-RMF). Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Implement **consensus / flocking (boids) + formation control** for N agents in 2D sim (or Webots e-puck) | Networked-control fundamentals; agents provably reach agreement / hold a formation |
| Foundational | Bring up a **multi-robot ROS 2** system (namespacing + DDS) — 3+ TurtleBots navigating shared space with Nav2 | Multi-robot ROS 2; robots reach goals without deadlock/collision |
| Applied | Implement **MAPF** (CBS + prioritized planning), benchmark on **POGEMA** / a warehouse grid | Conflict-free multi-agent pathfinding; solves dense instances, measured success/makespan |
| Applied | **Open-RMF fleet integration** — heterogeneous fleet, traffic deconfliction, shared-resource (door/lift) management, a **VDA 5050** adapter | Real fleet orchestration; multi-fleet task allocation with no collisions/deadlocks |
| Advanced | **MARL** coordination (MAPPO/QMIX) in **VMAS/BenchMARL** — cooperative navigation / coverage | CTDE MARL; trained policy beats a heuristic baseline on a standard MARL task |
| Advanced | **Swarm intelligence** — ACO/PSO or self-organized aggregation/foraging (ARGoS/Webots) scaling to 50–100 agents | Decentralized self-organization; robust, scalable emergent behavior |
| Capstone | A **coordinated multi-robot mission** — an Open-RMF heterogeneous warehouse fleet with lifelong MAPF, **or** an LLM-orchestrated heterogeneous team (RoboOS/GenSwarm-style), **or** a decentralized aerial swarm (EGO-Swarm/Crazyflie) | End-to-end multi-robot stack; scalable, deadlock-free coordination on real hardware or high-fidelity sim |

## 9. Required Lab Setup / Hardware / Resources
- **Ground robots (fleets/teams):** **TurtleBot 4** · Clearpath **Jackal / Husky** · **AgileX** LIMO/Scout · iRobot **Create 3** · low-cost swarm units — **e-puck**, **Kilobots** (Harvard), and the **GT Robotarium** (remote-access swarm testbed — free to use). `~`
- **Aerial swarms:** Bitcraze **Crazyflie** (the standard research nano-quad swarm) · PX4 / Holybro; **Cambridge RoboMaster** (agile ground-swarm platform).
- **Sensors:** 2D/3D LiDAR (RPLIDAR / Ouster / Velodyne) · Intel RealSense · **UWB** (relative localization) · V2V comms radios.
- **Compute:** RTX 4090 / A6000 workstation (MARL/GNN training on VMAS) · **Jetson Orin** on-robot · A100/H100 for large-scale MARL / multi-agent-foundation-model training.
- **Software / sim:** **ROS 2 (multi-robot) + Open-RMF** · Nav2 · **VMAS + BenchMARL** (GPU MARL) · **PettingZoo / EPyMARL / RLlib** · **Gazebo** (multi-robot) · **Webots** & **ARGoS** (swarm) · Isaac Sim (multi-robot) · **POGEMA** (MAPF) · MQTT broker + **VDA 5050** tooling.
- **Datasets & benchmarks:** **POGEMA** & the **MovingAI MAPF benchmark suite** (MAPF) · **GRACE** (multi-robot path planning) · **VMAS / BenchMARL**, **SMACv2**, **Melting Pot** (MARL) · **CoPeD** / **CU-Multi** (collaborative perception / SLAM) · **HERCULES** (heterogeneous multi-robot SLAM sim).

## 10. Partnerships & Ecosystem
- **Hardware vendors:** Clearpath Robotics · AgileX · **Bitcraze** (Crazyflie) · **MiR / OTTO Motors / Locus Robotics** (AMR fleets) · Fetch/Zebra · Ouster / Velodyne (LiDAR).
- **Sim / compute:** NVIDIA (Isaac, DLI, Inception) · Open Robotics (**Gazebo**) · Cambridge Prorok Lab / Meta (**VMAS / BenchMARL / TorchRL**).
- **Academic labs (multi-robot powerhouses):** **GT (Egerstedt lineage / Robotarium)** · **UPenn GRASP (Kumar / Hsieh)** · **MIT Distributed Robotics Lab (Rus)** + Aerospace Controls Lab (How) · **Stanford MSL (Schwager)** · **Caltech ARCL (Chung)** · **ULB IRIDIA (Dorigo)** · **EPFL DISAL (Martinoli)** · **UCSB (Bullo)** · **Cambridge (Prorok)** · CMU (Sycara / Choset) · MAPF nucleus (Koenig-UCI / Li-CMU / Hoenig-TU Berlin) · swarm-hardware (Sheffield-Gross, Bristol-Hauert, Cornell-Petersen, Harvard-Nagpal). `~`
- **Open-source communities:** **Open-RMF** (OSRA-governed) · ROS 2 / Nav2 · **VMAS / BenchMARL** · **PettingZoo** (Farama) · POGEMA.
- **Industry programs:** **Amazon Robotics** (DeepFleet; hundreds of thousands of warehouse robots) · Symbotic · Locus / 6 River Systems · defense-swarm players (L3Harris, Anduril, Shield AI) · NVIDIA Inception.
- **Standards / bodies:** **VDA 5050** (VDA/VDMA) · **MassRobotics AMR Interoperability Standard** · **Open-RMF** (interop substrate) · **OSRA** (Open Source Robotics Alliance — governs Open-RMF) · **ISO 3691-4** (driverless industrial trucks / AMRs).

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (consensus/formation, coverage, MRTA, MAPF, swarm, networked control, fleet orchestration).
- **Project rubrics** with objective metrics: MAPF **success rate / makespan / sum-of-costs / throughput**; fleet **task completion & deadlock/collision rate**; **scalability** (agents before performance degrades); formation error; coverage %; communication overhead; MARL **episodic return vs. baseline**.
- **Standardized benchmarks** as portable evidence: **POGEMA** & the MovingAI MAPF suite; **VMAS / BenchMARL**, **SMACv2**, **Melting Pot** (MARL); an **Open-RMF / VDA 5050** heterogeneous-fleet integration demo.
- **Recognized certifications as evidence:** The Construct **Open-RMF** fleet course; Penn **Aerial Robotics** / GT **Control of Mobile Robots**; a swarm (INFO-H-414) or MARL portfolio; **VDA 5050 / MassRobotics** standards literacy.
- **Senior tiers:** portfolio + system-design interview (design a fleet-orchestration or swarm architecture — centralized vs. decentralized, scaling to N robots) + live multi-robot / traffic-deconfliction debugging.

## 12. Adjacent & Related Niches
Pairs closely with **A3 motion planning** (MAPF sits at the A3↔A9 boundary; per-agent planning beneath coordination), **A4 networked/decentralized control**, **A2 collaborative SLAM / distributed estimation**, and **A1 collaborative perception**; leans on **A6 MARL / learned coordination** and increasingly consumes **A7 foundation models** (multi-agent FMs, LLM/VLA orchestration). Signature platform tracks: **C3 AMR/AGV fleets** (warehouse — the killer app), **C6 drone / aerial swarms**, **C4 quadruped teams**, **C2 heterogeneous mobile-manipulator teams**. Verticals: **B2 warehouse/logistics**, aerial, inspection, agriculture, defense, search-&-rescue. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A9 (verified per-niche this pass). §7 stamped mid-2026 — re-research before publish.*
