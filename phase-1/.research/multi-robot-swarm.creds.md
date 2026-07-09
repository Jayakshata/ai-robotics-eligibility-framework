# Multi-Robot Systems, Swarm & Fleet Orchestration — Credentials & Subjects (Research)

> **Niche:** Multi-Robot Systems, Swarm & Fleet Orchestration · **Axis A cluster:** A9 · **Scope:** multi-robot coordination, swarm robotics, distributed/networked control & estimation, multi-agent path finding (MAPF), multi-robot task allocation, and fleet orchestration/management (AMR/AGV fleets).
> Complements `phase-1/_grounding-reference.md` — does **not** re-derive the valued-degree tiers, canonical subject union, or duration model. Only what is **specific** to A9. Data 2024–2026; sources inline. `✓` grounded · `⏱` time-sensitive.

**Headline signal.** A9 splits into two poles that hire differently: (a) an **algorithms/systems research** pole — distributed control, consensus, swarm intelligence, MARL, MAPF — centered on *control + CS-distributed-systems + aerospace-GNC* departments, and (b) an **applied fleet-orchestration** pole — heterogeneous AMR/AGV fleets, traffic deconfliction, task scheduling — which is essentially *distributed-systems software + operations-research/logistics* wearing a robotics hat. A "robotics major" alone under-serves both poles.

---

## 1. Strongest programs + the named courses that make them strong

### Undergraduate `✓`
A9 is almost entirely a **graduate/research specialization** — there is *no* standard dedicated UG "multi-robot systems" course. Closest UG signals:
- **Georgia Tech** — networked/multi-agent control exposure via ECE + the **Robotarium** swarm testbed (200+ groups use it; ground + aerial robots), the anchor UG-accessible swarm facility. [robotarium.gatech.edu](https://www.robotarium.gatech.edu/) · Egerstedt's **"Control of Mobile Robots"** (Coursera, UG-accessible) reaches formation/multi-agent control. [classcentral conrob-404](https://www.classcentral.com/course/conrob-404)
- **UPenn (GRASP)** — GRASP pipeline + Coursera **"Robotics: Aerial Robotics"** (Kumar): quadrotor teams "operating autonomously in teams." [classcentral robotics-flight-5025](https://www.classcentral.com/course/robotics-flight-5025)
- **USC intro-AI MAPF assignment** (Koenig/Li/Hoenig; 2020 Model-AI-Assignment) puts multi-agent path finding into UG AI courses. [idm-lab.org/project-p](https://idm-lab.org/project-p/project-content.html)

### Postgraduate — ranked by A9 strength `✓`

| Tier | Program | The load-bearing course(s) / lab |
|------|---------|----------------------------------|
| **World-leading** | **Georgia Tech (Egerstedt lineage)** | **ECE 8823 Networked Control Systems** — graph/network models, decentralized control, multi-agent robotics (formation control), mobile sensor networks (coverage/Voronoi), connectivity maintenance; text = Mesbahi & Egerstedt *Graph Theoretic Methods in Multiagent Networks*. The most on-target graduate course in the niche. `⏱`Egerstedt is now dean at UC Irvine — verify current GT instructor. |
| **World-leading** | **UPenn (GRASP)** | **MEAM 624 Distributed Robotics** (multi-robot control/estimation) + MEAM 620 Advanced Robotics; Kumar/Hsieh aerial-swarm & distributed-perception research. [coursicle MEAM 624](https://www.coursicle.com/penn/courses/MEAM/624/) |
| **World-leading** | **MIT** | **Distributed Robotics Laboratory** (Daniela Rus — provable multi-robot collaboration, self-assembly) + **Aerospace Controls Lab** (Jonathan How — multi-agent planning & MARL). [csail DRL](https://www.csail.mit.edu/research/distributed-robotics-laboratory) |
| **World-leading** | **Stanford** | **Multi-Robot Systems Lab** (Mac Schwager, AeroAstro — distributed control/estimation/learning for robot groups) + **AA228/CS238 Decision Making Under Uncertainty** (Kochenderfer; multi-agent, POMDPs). [msl.stanford.edu](https://msl.stanford.edu/) · [aa228.stanford.edu](https://aa228.stanford.edu/) |
| **World-leading** | **Caltech** | **Autonomous Robotics & Control Lab** (Soon-Jo Chung, CDS/AeroAstro) — aerial/spacecraft/drone **swarms**; nonlinear control & synchronization of distributed multi-agent systems (Neural-Swarm). [aerospacerobotics.caltech.edu](http://aerospacerobotics.caltech.edu/) |
| **Strong — swarm epicenters** | **ULB IRIDIA (Brussels)** | **INFO-H-414 Swarm Intelligence** (Dorigo & Birattari) — decentralized control, self-organization, ACO, swarm-robotics project; IRIDIA is *the* founding swarm-intelligence lab. [ulb.be/info-h414](https://www.ulb.be/en/programme/info-h414) |
| **Strong — swarm** | **EPFL (DISAL)** | **Distributed Intelligent Systems** (Martinoli) — 14 wks: swarm intelligence/ACO, flocking & formation, threshold & **market-based task allocation**, collective decision-making, PSO, mobile sensor networks (e-puck/Webots). [epfl.ch/labs/disal](https://www.epfl.ch/labs/disal/teaching/) |
| **Strong** | **CMU (RI)** | Multi-robot coordination (Sycara), swarm (Choset); **16-883** safety for learning robots includes multi-agent analysis. [ri.cmu.edu/katia-sycara](https://www.ri.cmu.edu/ri-faculty/katia-sycara/) |
| **Strong — MAPF hub** | **UC Irvine / CMU / TU Berlin** | Koenig (now UCI), **Jiaoyang Li (CMU)**, Hoenig (TU Berlin) — the **Multi-Agent Path Finding (CBS/PBS/MAPF-LNS)** research nucleus behind warehouse fleet coordination. [JAIR MAPF track](https://jair.org/index.php/jair/SpecialTrack-MAPF) |
| **Present (control/networks & swarm)** | **UCSB · Sheffield · Bristol · Cornell · Harvard** | UCSB **ME/ECE 269 Network Systems** (Bullo — consensus/distributed averaging; text *Distributed Control of Robotic Networks*). Sheffield (Gross), Bristol Robotics Lab (Hauert), Cornell (Petersen), Harvard (Nagpal, Kilobots) = swarm-hardware/bio-inspired. [motion.me.ucsb.edu ME269](http://motion.me.ucsb.edu/ME269-Fall2021/) |

---

## 2. Certifications & MOOCs — niche-specific `✓`

| Tier | Credential (provider) | Why it fits A9 |
|------|----------------------|----------------|
| **Applied flagship** | **Robot Fleet Management in ROS 2 with Open-RMF** — The Construct | The one *fleet-orchestration* MOOC: Open-RMF structure, fleet adapters, multi-fleet task allocation & traffic deconfliction on real multi-robot lab; shareable cert (75% pass). [theconstruct.ai open-rmf](https://www.theconstruct.ai/robot-fleet-management-ros2-open-rmf-training/) |
| **Blue-chip (theory)** | **Robotics: Aerial Robotics** — UPenn / Coursera (Kumar) | Quadrotor dynamics/control **+ autonomous teams**; part of the Penn Robotics Specialization. [classcentral](https://www.classcentral.com/course/robotics-flight-5025) |
| **Blue-chip (theory)** | **Control of Mobile Robots** — Georgia Tech / Coursera (Egerstedt) | Feedback control on mobile robots reaching **formation/multi-agent** behaviors. [classcentral conrob-404](https://www.classcentral.com/course/conrob-404) |
| **Academic (swarm)** | **INFO-H-414 Swarm Intelligence** (ULB, open materials) + **Distributed Intelligent Systems** (EPFL DISAL) | The definitive swarm curricula; used as de-facto syllabi. [iridia INFO-H-414](https://iridia.ulb.ac.be/~mdorigo/INFO-H-414/) |
| **Reference text / self-study** | **MARL** book (Albrecht, Christianos, Schäfer — MIT Press 2024, `marl-book.com`) + IIIA-CSIC MARL course | Canonical multi-agent-RL reference: CTDE, MADDPG, QMIX, MAPPO. [marl-book.com](https://www.marl-book.com/) |
| **Standards literacy** | **VDA 5050** (VDA/VDMA, v2.1.0 Jan 2025) + **MassRobotics AMR Interoperability Standard** | Not exams but the *interface standards* every fleet engineer must know — JSON/MQTT master-control ↔ AGV/AMR. [VDA 5050 guide](https://navitecsystems.com/what-is-vda-5050/) · [MassRobotics AMR](https://www.robotics247.com/article/what_is_massrobotics_amr_interoperability_standard/manufacturing) |

*(No formal "multi-robot certification" exists — validated by the Open-RMF course + a swarm/MAPF/MARL project portfolio + standards literacy.)*

---

## 3. Subject list — grouped, grounded in the syllabi above `✓`

**Foundational maths & CS** *(graph theory + distributed systems are disproportionately load-bearing here)*
- **(Algebraic) graph theory & network science** — Laplacians, connectivity, spectra *(GT ECE 8823, UCSB ME/ECE 269)*
- **Distributed algorithms & distributed systems** — consensus, fault tolerance, message passing *(CS-distributed-systems core — the fleet-orchestration substrate)*
- **Optimization** (convex, combinatorial, **distributed** optimization) + **game theory** *(cooperative/competitive multi-agent)*
- Probability & stochastic processes; linear algebra; Python + **C++** (Open-RMF/ROS 2 are C++); MQTT/networking basics

**Core robotics**
- Robot kinematics/dynamics; feedback & optimal control; state estimation/SLAM *(single-robot foundation)*
- **ROS 2** + multi-robot namespacing, DDS, Nav2 *(prereq for Open-RMF)*
- Motion planning & navigation *(the per-agent layer beneath coordination)*

**Niche-specific (the A9 core)**
- **Consensus, flocking, rendezvous & formation control** *(GT ECE 8823, EPFL DIS, UCSB 269)*
- **Coverage control** (Voronoi/Lloyd), distributed sensing, mobile sensor networks *(GT ECE 8823, EPFL DIS)*
- **Multi-Robot Task Allocation (MRTA)** — auction/market-based & threshold methods *(EPFL DIS)*
- **Multi-Agent Path Finding (MAPF)** — CBS, prioritized planning, lifelong MAPF *(Koenig/Li)*
- **Swarm intelligence & self-organization** — ACO, PSO, stigmergy, scalability/robustness *(ULB INFO-H-414, EPFL DIS)*
- **Networked/decentralized control & estimation**; connectivity maintenance; communication constraints *(GT ECE 8823)*
- **Fleet orchestration** — heterogeneous-fleet interoperability, traffic deconfliction, resource (lift/door) mgmt, task scheduling *(Open-RMF; VDA 5050; MassRobotics)*

**Frontier / advanced** `⏱`
- **Multi-Agent Reinforcement Learning (MARL)** — CTDE, QMIX/MAPPO, emergent coordination *(marl-book)*
- **Graph Neural Networks for decentralized policies** — learned communication/coordination *(GRASP, MIT)*
- **Learning-augmented swarm/aerial control** — Neural-Swarm, learned interaction models *(Caltech Chung)*
- **LLM/foundation-model multi-agent orchestration**; large-scale lifelong MAPF for warehouses; sim-to-real for swarms.

---

## 4. Niche eligibility adjustment vs. the general set `✓`

Baseline (grounding ref A.1): Tier-1 = CS/AI, Robotics Eng, EE/ECE; Tier-2 = ME, Mechatronics, Math, Physics. For **Multi-Robot Systems, Swarm & Fleet Orchestration**:

- **RISES — Computer Science → strongest single fit, esp. the *distributed-systems / algorithms* track.** Consensus, fault tolerance, MAPF search, MARL and the entire orchestration software layer are CS. A CS grad with a distributed-systems + AI background is ideal — and, uniquely for A9, *backend/distributed-systems software experience partially transfers to fleet orchestration.*
- **RISES — Aerospace/Aeronautical Engineering → Tier 1 (distinctive).** Multi-vehicle GNC, formation flying and swarm flight anchor the field — Caltech (Chung), Stanford (Schwager) and MIT (How) multi-robot groups all sit in AeroAstro. Not Tier-1 in the general set.
- **RISES — Operations Research / Industrial Engineering → qualifying-with-evidence (distinctive to A9).** Fleet orchestration *is* logistics optimization: task assignment, scheduling, vehicle routing (VRP), queueing, combinatorial optimization. A genuinely A9-specific entrant, especially for the applied fleet pole.
- **RISES — Applied Mathematics → effectively Tier 1** via graph theory, distributed optimization, dynamical systems on networks and game theory.
- **EE/ECE holds Tier 1** through networked/decentralized control, consensus and distributed estimation (the Egerstedt/Bullo control-theoretic core).
- **FALLS (relative) — Mechanical Engineering.** Like Motion Planning (A3), A9 rewards little of ME's single-robot design/contact-mechanics core; the value is in *coordination algorithms and systems*, not embodiment. ME qualifies via dynamics/controls but is not a differentiator.
- **Program-name note:** for the applied pole, value **distributed-systems + ROS 2 + Open-RMF/VDA-5050** evidence over a generic robotics brand; for the research pole, value **networked-control / swarm / multi-agent** coursework and a labeled lab (GRASP, IRIDIA, DISAL, GT Robotarium, Stanford MSL, Caltech ARCL).

**Suggested A9 transcript checklist:** graph theory / linear algebra · a distributed-algorithms **or** networked/multi-agent-control course · optimization (convex + combinatorial) · ROS 2 fluency · ≥1 multi-robot project (swarm sim, MAPF, MARL, **or** an Open-RMF/VDA-5050 fleet integration).

---

### Sources (representative, 2024–2026 favored)
GT ECE 8823 Networked Control Systems (Egerstedt) & Robotarium (robotarium.gatech.edu; arXiv 1609.04730); Mesbahi & Egerstedt *Graph Theoretic Methods in Multiagent Networks*; UPenn MEAM 624 Distributed Robotics (coursicle) & GRASP; Penn Coursera Robotics: Aerial Robotics (classcentral robotics-flight-5025); MIT Distributed Robotics Lab (Rus) & Aerospace Controls Lab (How); Stanford MSL (Schwager) + AA228/CS238 (Kochenderfer); Caltech ARCL (Chung, Neural-Swarm arXiv 2012.05457); ULB IRIDIA INFO-H-414 Swarm Intelligence (Dorigo/Birattari); EPFL DISAL Distributed Intelligent Systems (Martinoli); CMU Sycara / 16-883; Koenig/Li MAPF (idm-lab.org/project-p; JAIR MAPF track); Bullo UCSB ME/ECE 269 Network Systems + *Distributed Control of Robotic Networks*; Open-RMF ("Programming Multiple Robots with ROS 2", osrf.github.io/ros2multirobotbook; github.com/open-rmf/rmf); The Construct Open-RMF fleet course; VDA 5050 v2.1.0 (navitecsystems.com); MassRobotics AMR Interoperability Standard (robotics247); MARL book (marl-book.com) & IIIA-CSIC MARL course. All accessed Jul 2026; re-verify course instructors/codes (esp. GT ECE 8823 post-Egerstedt) at publish.
