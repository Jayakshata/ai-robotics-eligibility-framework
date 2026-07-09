# Per-Niche Profile — Simulation & Digital Twins

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; simulation-specific and trending-research signals are research-backed. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Simulation & Digital Twins · **Axis A cluster:** A8 (Simulation & Digital Twins) · **Type:** `[F]` horizontal enabler (differentiable-sim / neural-simulator / generative-world-model sub-areas `[S][★]`)
**Related capabilities:** A1 perception (synthetic data) · A5 embodied skills · A6 imitation/RL (the training ground) · A7 VLAs / world models · **Platforms (C):** platform-agnostic — C1 fixed arm · C2 mobile manipulator · C5 humanoid · legged/AMR/AV · **Verticals (B):** B1 manufacturing (industrial digital twins) · B2 logistics · automotive/AV

---

## 1. Definition & Scope
Building and using **virtual environments that reproduce a robot's physics, sensing, and appearance** faithfully enough to design, train, and validate systems before — and alongside — real hardware. It is the training ground for modern robot learning (RL, imitation), the source of cheap labeled **synthetic data**, and, as a **digital twin**, the live virtual replica of a physical asset, cell, or factory. This is the one A-cluster whose academic home is **not** core robotics but **computer graphics (physically-based animation) + computational mechanics + numerical scientific computing**. **In scope:** physics simulation (rigid/soft/fluid, contact & friction), physics-engine/solver R&D, GPU-parallel sim, differentiable simulation, rendering & sensor simulation, synthetic data generation, sim-to-real, OpenUSD/Omniverse digital twins, and neural/generative simulators (world models). **Out of scope (adjacent):** the learning algorithms that consume sim (A6), the perception models trained on synthetic data (A1), and the manipulation/locomotion policies themselves (A5). Treat it as a **horizontal enabler** that feeds nearly every other niche.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior Simulation Engineer | Builds/tunes sim environments and robot models (URDF/MJCF/USD); runs sim experiments; integrates assets and sensors under supervision. |
| **L2** | Simulation / Digital-Twin Engineer | Owns a sim environment or twin end-to-end (asset→physics→sensor→data pipeline); tunes sim-to-real; ships a training env or a deployed twin. |
| **L3** | Senior Simulation Engineer | Designs the simulation architecture/stack; makes engine / fidelity / cost tradeoffs; owns the sim-to-real-gap strategy; sets benchmarks; mentors. |
| **L4/L5** | Staff / Principal Simulation Research Engineer | Sets the simulation research agenda; advances engine / differentiable-sim / world-model SOTA; publishes; org-wide direction. |

*Titles bend to the **three tracks**: **(a) engine/solver R&D**, **(b) sim-for-robot-learning** (RL, domain randomization, sim-to-real), and **(c) industrial digital twins** (OpenUSD/Omniverse, CAE) — "Digital Twin Engineer," "Physics-Sim Engineer," "Synthetic-Data Engineer" are common L2/L3 variants.*

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (esp. with **Computer Graphics / animation** or AI/ML), Robotics Engineering, AI. **Simulation-specific `✓`: ME/Aerospace rises to Tier 1** (multibody dynamics, FEM/FEA, CFD, continuum mechanics, CAD/CAE = the computational-mechanics core of high-fidelity sim and industrial twins) — a sharp contrast with perception/estimation niches where ME falls. **CSE/Applied Maths and Physics/Computational Physics also rise** (numerical methods for ODE/PDE, sparse solvers, optimization = the solver's numerical spine). Tier 2 (with evidence): EE/ECE (**less differentiating here** — no heavy signals/sensor-electronics load), Systems/Industrial/Manufacturing (for the twins track only). **Game development / real-time graphics is a legitimate feeder** for the engine track — unusual for robotics, valid here.

**Highly-valued undergraduate programs `✓`** — reachable pre-master's via the **graphics + numerical-methods spine**, not a named UG track: **MIT** (6.837 Graphics → 6.4210 Manipulation/Drake), **Stanford** (CS148/248 → CS348C), **CMU** (15-462 Graphics → 15-863; 16-745), **Georgia Tech** (CS 4496 Computer Animation), **ETH/TUM** (CS/ME + numerical methods + graphics). Twins track: **ME/AE** with CAD/CAE/FEA + multibody dynamics. Engine track: **USC Games, DigiPen** (game physics / real-time graphics).

**Acceptable postgraduate degrees** — MS/PhD in CS (graphics/animation), Robotics, ME/AE (computational mechanics), CSE/Applied Maths, or Physics with a **simulation / physically-based-animation / differentiable-physics** focus.

**Highly-valued postgraduate programs — ranked by simulation strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **CMU · Stanford · MIT · ETH Zürich** | CMU **15-769/15-763 Physics-based Animation of Solids & Fluids**, **15-863 Physically Based Modeling** (Doug James), **16-745 Optimal Control & RL** (Manchester/Dojo); leads **Genesis** (Zhou Xian) · Stanford **CS348C Animation & Simulation**, **CS448Z Physically Based Animation & Sound** (James), C. Karen Liu (differentiable physics) · MIT **6.8210 Underactuated** + **6.4210 Manipulation** (Tedrake/**Drake**), Matusik CDL, **DiffTaichi** lineage · ETH **252-0546 Physically-Based Simulation** (Solenthaler) + **CRL** (Coros) |
| Strong | **TU München · UW · Georgia Tech · Toronto/Columbia** | TUM **IN2298 Advanced Deep Learning for Physics** / Thuerey **PBDL** (differentiable solvers) · UW **Movement Control Lab** (Todorov — origin of **MuJoCo**) · GT **CS 7496 Computer Animation** (origin lab of **DART**) · Toronto/Columbia **Grinspun** (discrete differential geometry; cloth/rods/shells) |
| Present (industrial / twins) | **SMU · UConn · UCF · Purdue** | **SMU MS in Digital Twin Technology** (sim + AI + real-time data; lives in Mechanical Eng) · UConn M.Eng Digital Design & Manufacturing · UCF Digital Twins Graduate Certificate · Purdue DigiT-IO |

**Highly-valued certifications `✓`** — **NVIDIA-Certified Professional: OpenUSD Development (NCP-OUSD)** — the single most on-target *formal* credential (validates building/optimizing OpenUSD 3D pipelines, the backbone of Omniverse twins; the closest thing to a "robotics-sim exam" that exists) · **NVIDIA DLI "Digital Twins for Physical AI" learning path** (Assembling Digital Twins with Omniverse & OpenUSD) · **Omniverse Replicator / Isaac Sim SDG** (synthetic-data slice) · **Isaac Lab / Isaac Sim** official tutorials (GPU-parallel RL, domain randomization) · **Coursera "Digital Twins"** (U-Michigan × **Siemens**) + edX HKPolyU intro · **TUM PBDL** (free reference curriculum for differentiable/learned sim). *(Weaker as niche evidence: Northwestern Modern Robotics and generic cloud-ML certs — useful backbone, not on-target. No NVIDIA robotics exam beyond NCP-OpenUSD — see grounding ref.)*

**Experience & portfolio** — L1: coursework/internship, a built sim env or a working RL/twin scene. L2: 2–4 yr, a shipped training env **with sim-to-real numbers** or a deployed twin, plus a synthetic-data pipeline. L3: 5–8 yr, ≥1 sim stack / twin led to production. L4/L5: 8+ yr and/or first-author papers (**SIGGRAPH / CoRL / RSS / NeurIPS / ICRA**).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **C++** (engine performance) and **Python**
- **Numerical methods:** explicit/implicit/**symplectic** time integration, sparse linear solvers (CG/Cholesky), Newton's method, stability
- Robot **rigid-body & multibody dynamics** (articulated-body / Featherstone; generalized coordinates)
- **Contact & friction modeling** (Coulomb, LCP/convex, compliant, position-based)
- One physics simulator in depth: **Isaac Sim/Lab, MuJoCo, Gazebo, PyBullet, or Drake**
- Robot & scene description: **URDF / MJCF / USD**; asset & actuator/sensor pipelines
- **GPU / parallel computing** (CUDA / Warp / JAX); **vectorized/tensorized** environments
- **Sim-to-real** transfer and **domain randomization**
- RL / imitation fundamentals (simulation is the training ground); **PyTorch**
- **Rendering & sensor simulation** basics (RGB / depth / LiDAR)

**Preferred / differentiating**
- **Physics-engine / solver internals** — broadphase/narrowphase collision, PGS/**TGS**/**XPBD** solvers, integrators
- **Physically-based animation** — FEM elasticity, cloth/rods/shells, fluids (**SPH / MPM** / Eulerian), fracture
- **Differentiable simulation** — autodiff through contact; gradient-based **system ID** & trajectory optimization
- **OpenUSD / Omniverse** digital-twin development; **CAD/CAE/FEA** integration; real-time data assimilation
- **Synthetic data generation** — Replicator, procedural scene gen, auto-labeling
- **3DGS / NeRF real2sim**; photoreal sensor simulation
- **World foundation models / neural simulators** (Cosmos, Genie, Graph Network Simulators)
- Publications at **SIGGRAPH / CoRL / RSS / NeurIPS**

**Tools & tech stack** — *Languages:* C++, Python, CUDA · *Engines:* Isaac Sim/Lab, MuJoCo (+ MJX / Playground / MuJoCo-Warp), Gazebo, PyBullet, Drake, Genesis, **Newton** · *Differentiable/GPU:* **Warp**, Brax (JAX), DiffTaichi/Taichi, Dojo, Nimble · *Rendering/twins:* **OpenUSD**, Omniverse, Replicator; Unreal/Unity (engine track) · *Learning:* PyTorch, JAX, Isaac Lab RL (RSL-RL / rl_games / SKRL) · *CAE (twins):* Ansys, Siemens NX/Simcenter, MATLAB/Simulink · *Hardware:* RTX workstation; A100/H100/Blackwell for large-scale GPU RL & world-model training

**Bar by tier** — L1: solid on the required list, builds and tunes envs · L2: ships a training env / twin with sim-to-real evidence, fluent across the stack · L3: architects the sim stack, deep in ≥1 differentiating area (engine internals / diff-sim / OpenUSD twins) · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
Simulation slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** **numerical linear algebra** — sparse solvers, CG/Cholesky (implicit integration & FEM) *(CMU 15-769, ETH 252-0546)* · **ODEs/PDEs + numerical integration** — explicit/implicit/symplectic, Newton's method, stability *(Stanford CS348C, ETH 252-0546)* · **optimization** — convex/nonlinear, **complementarity (LCP)** for contact, adjoint methods *(CMU 16-745, Dojo)* · probability & statistics · **C++ + Python; GPU/CUDA & parallel computing; automatic differentiation** *(Warp, DiffTaichi)*.
- **Core robotics:** **rigid-body & multibody dynamics** — articulated-body/Featherstone, generalized coordinates *(MIT 6.8210, Stanford CS223A)* · **contact & friction modeling** — Coulomb, LCP/convex, compliant/PBD *(MuJoCo, Dojo, CMU 15-763)* · classical/optimal control & **RL** (sim = training ground) *(CMU 16-745)* · robot/scene description — **URDF / MJCF / USD**, ROS 2, actuator & sensor models.
- **Niche-specific:** **physically-based animation & simulation** — mass-spring, **FEM elasticity**, cloth/rods/shells, fluids (SPH/MPM/Eulerian), collision detection & response, fracture *(CMU 15-769, ETH 252-0546, Stanford CS448Z, GT CS7496)* · **physics-engine architecture** — solvers (PGS/TGS/XPBD), broadphase/narrowphase, integrators *(CMU 15-863)* · **GPU-parallel / vectorized simulation** — tensorized envs, domain randomization at scale *(Isaac Lab, MJX)* · **digital twins** — MBSE, real-time data assimilation/calibration, **OpenUSD**/Omniverse, CAD/CAE/FEA *(NCP-OUSD, SMU MS, Coursera×Siemens)* · **rendering for simulation** — RTX/ray tracing, photorealism, **sensor sim** (RGB/depth/LiDAR) *(Omniverse, Isaac Sim)* · **synthetic data generation** — Replicator, procedural gen, domain randomization, sim-to-real *(NVIDIA SDG)* · **differentiable simulation** — autodiff through physics, gradient-based system ID & trajopt *(DiffTaichi, Dojo, TUM PBDL)*.
- **Frontier/advanced:** differentiable engines (Warp/Brax/Dojo/**Genesis**) · neural/learned simulators (GNS, surrogates, learned closures) · generative simulation & **world foundation models** (NVIDIA **Cosmos**, Genie 3, GR00T-Dreams) · **real2sim2real via 3DGS/NeRF** · large-scale GPU RL & sim-to-real (Isaac Lab, MuJoCo Playground, **Newton**) *(TUM PBDL, MIT DiffTaichi lineage)*.

## 6. Training Programme Design & Duration `✓`
Simulation-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), specialization + capstone tuned to simulation & digital twins.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Numerical linear algebra, ODE/PDE + integration, Python/C++, classical ML | 2.0 mo | 6 mo | 300 | ML & numerical-methods fluency |
| 2. Core robotics | Rigid-body/multibody dynamics, contact, control, **ROS 2**, URDF/MJCF/USD | 2.0 mo | 6–7 mo | 320 | Model & drive a robot in sim |
| 3. AI/ML depth | Deep learning, RL/imitation, computer vision (for sensor sim / synthetic data) | 2.0 mo | 6 mo | 300 | Policy learning + perception |
| 4. **Simulation & digital-twin specialization** | Physics engines, GPU-parallel sim, differentiable sim, rendering/sensor sim, synthetic data, OpenUSD twins, domain randomization & sim-to-real | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | GPU-parallel RL env → sim-to-real on a real robot **or** an OpenUSD digital twin + synthetic-data pipeline + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior simulation engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** Simulation's "Newton moment": the field is consolidating onto GPU-native, Warp/OpenUSD engines while generative world models replace hand-authored scenes. `🆕` = 2026 release.

- **Unified GPU physics engines (the "Newton era"):** 🆕 **Newton** (NVIDIA + Google DeepMind + Disney Research; open, Warp + OpenUSD; **1.0 GA at GTC 2026**, claimed ~475× MJX on Blackwell — the field's new center of gravity) · **MuJoCo-Warp (MJWarp)** (DeepMind + NVIDIA GPU rewrite of MuJoCo, >100× MJX; the physics core inside Newton) · **MuJoCo Playground / MJX** (JAX-native MuJoCo + Madrona batch renderer; RSS 2025 Outstanding Demo; still the default academic sim-to-real stack) · 🆕 **mjlab** (Isaac-Lab-style API on MuJoCo-Warp — signals community migration off MJX) · **Genesis** (generative, universal multi-physics; ultra-fast Pythonic + photoreal Nyx renderer; ICRA 2025; Genesis AI raised $105M, Jul 2025) · 🆕 **Isaac Sim 6.0 / Isaac Lab 3.0** (GTC'26; swappable multi-backend physics — PhysX **and** Newton — Warp Core API; the production platform).
- **World foundation models as neural simulators + synthetic data:** 🆕 **NVIDIA Cosmos** (world FMs generating photoreal synthetic video of factories/warehouses/roads at ~$1/clip; **Predict 2.5 / Transfer 2.5 / Reason 2**; adopters Figure/Agility/Skild/Uber — the dominant synthetic-data engine for physical AI) · **Isaac GR00T-Dreams / DreamGen** (world-model-in-the-loop data scaling: 780k trajectories in 11 hrs, built GR00T N1.5 in 36 hrs, +40% over real-only) · **Genie 3** (DeepMind real-time, persistent, interactive 3D world model; 🆕 Project Genie opened to users Jan 2026) · 🆕 **AGIBOT Genie Sim 3.0 / Genie Envisioner 2.0 (GE-Sim)** (text/image→3D scene in minutes, 1000 Hz physics + a neural simulator for closed-loop policy eval — world-models and classical sim converging into one stack).
- **Real2Sim2Real & Gaussian-splatting twins:** **RoboGSim** (3DGS reconstruction + physics engine; zero-shot sim-trained policies match real-data policies — anchor of the 3DGS-sim wave) · **GSWorld / SplatSim / RE3SIM / DREMA** (closed-loop photoreal 3DGS suites collapsing the visual sim-to-real gap) · **Real2Render2Real** (scales demo data with **no** dynamics sim or hardware) · 🆕 **HyperSim / EmbodiedDreamer** (holistic real2sim2real: reconstruction + world modeling + domain randomization).
- **Differentiable simulation:** **Brax / MJX-diff** (JAX-native differentiable rigid-body — go-to for gradient-based locomotion/control) · **Dojo** (contact-implicit, analytic gradients) · 🆕 **SDRS / D-REX** (shape-differentiable real-to-sim-to-real for dexterous grasping — resurgent as engines expose analytic gradients through contact/geometry).
- **Industrial digital twins (OpenUSD + Omniverse):** **NVIDIA Omniverse + OpenUSD** (de-facto interoperability layer for physically-accurate facility twins; **BMW Regensburg** runs a live twin syncing 400+ robots, <200 ms path updates, 30% faster changeover) · 🆕 **Alliance for OpenUSD (AOUSD)** (widening membership — Aras joined Apr 2026; Siemens/Rockwell/Schaeffler/Amazon standardizing lifecycle-connected twins — USD is becoming the twin substrate).
- **Datasets, benchmarks & eval:** **NVIDIA Physical AI Dataset** (open HF corpus of synthetic + real trajectories, >4.8M downloads — the reference synthetic-data set) · **Isaac Lab – Arena** (open standardized policy-evaluation framework, with Lightwheel) · 🆕 **Real2Sim policy-eval (3DGS) / RoboTrustBench** (benchmarks for policy quality and the *trustworthiness* of video world models for manipulation).

*Net trend: physics engines and neural simulators are merging into one GPU-native data-generation stack for physical AI — Warp/OpenUSD engines (Newton, MJWarp, Isaac Lab 3.0) underneath, generative world models (Cosmos, Genie 3, GR00T-Dreams) and 3DGS real2sim2real twins on top, increasingly replacing hand-authored scenes and real data collection. Several 2026 items are fresh releases — treat vendor throughput/benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Author a robot model (**URDF/MJCF**) → load into **MuJoCo / Isaac Sim**, tune physics, reproduce a known dynamics behavior | Sim workflow + dynamics; a stable, correctly-behaving model |
| Foundational | Implement a mass-spring + rigid-body integrator (explicit vs. implicit) from scratch | Numerical integration & stability; a working mini-simulator |
| Applied | Build a **GPU-parallel RL environment** in **Isaac Lab / MJX** (quadruped or arm) and train a policy | Vectorized sim + RL; thousands of parallel envs, a trained policy |
| Applied | **Synthetic-data pipeline** with Omniverse **Replicator** — randomized scenes → auto-labeled dataset → train a detector | SDG + domain randomization; a sim-only-trained detector that works on real images |
| Advanced | **Sim-to-real transfer** — train in sim with domain randomization → deploy on a real quadruped/arm | Closing the sim-to-real gap; sim-trained policy runs on hardware |
| Advanced | **Differentiable simulation** — use **Warp / DiffTaichi / Brax** for gradient-based system ID or trajectory optimization | Autodiff through contact; gradients recover parameters / optimize a trajectory |
| Advanced | **3DGS real2sim** — reconstruct a real scene (Gaussian splats) → build a simulatable twin → close the loop | Real2sim2real; a photoreal twin a policy can train in |
| Capstone | End-to-end: an **OpenUSD digital twin** of a robot cell **or** a GPU-parallel sim env → generate synthetic data / train a policy → **validate sim-to-real on real hardware** | Full stack; a deployed twin or a sim-trained policy validated on a real robot |

## 9. Required Lab Setup / Hardware / Resources
- **Simulators / engines:** Isaac Sim / **Isaac Lab** · **MuJoCo** (+ MJX / Playground / MuJoCo-Warp) · **Gazebo** · PyBullet · **Drake** · **Genesis** · **Newton**.
- **Differentiable / GPU:** **Warp** · **Brax** (JAX) · DiffTaichi / Taichi · **Dojo** · Nimble.
- **Rendering / twins:** **OpenUSD** · NVIDIA **Omniverse** · **Replicator** · Unreal Engine / Unity (engine track).
- **CAE / twins (industrial):** Ansys · Siemens NX / Simcenter / Tecnomatix · MATLAB/Simulink · Autodesk.
- **Learning stacks:** PyTorch · JAX · Isaac Lab RL (RSL-RL / rl_games / SKRL) · Stable-Baselines3.
- **Compute:** RTX 4090 / A6000 workstation for sim + dev (RTX GPU required for Omniverse/RTX rendering); A100 / H100 / **Blackwell (GB200)** for large-scale GPU RL and world-model training.
- **Robots (for sim-to-real validation):** Unitree **Go2 / G1** · Franka · Universal Robots · ANYmal — plus their official sim models (MJCF/USD).
- **Datasets & benchmarks:** **NVIDIA Physical AI Dataset** · Open X-Embodiment / DROID (policy training) · **Isaac Lab** benchmark tasks + **Isaac Lab – Arena** · **MuJoCo Playground** suites · **ManiSkill** · robosuite · **Meta-World** · **Real2Sim policy-eval / RoboTrustBench**.

## 10. Partnerships & Ecosystem
- **Sim / compute vendors:** **NVIDIA** (Isaac, Omniverse, Warp, Cosmos, DLI, Inception) · **Google DeepMind** (MuJoCo, MJX, Genie) · **Genesis AI** · **Disney Research** (Newton co-developer).
- **Standards / interoperability:** **Alliance for OpenUSD (AOUSD)** + OpenUSD · Open Robotics (ROS / Gazebo) · **ISO 23247** (digital-twin framework for manufacturing) `~`.
- **Academic labs (simulation powerhouses):** CMU (Manchester/**Dojo**; Doug James; **Genesis**/Zhou Xian) · Stanford (Doug James; C. Karen Liu) · MIT (Tedrake/**Drake**; Matusik; **DiffTaichi** lineage) · ETH (Coros **CRL**; Solenthaler **CGL**) · TUM (Thuerey/**PBDL**) · UW (Todorov/**MuJoCo**) · Georgia Tech (**DART**) · Toronto/Columbia (Grinspun).
- **Industrial digital-twin partners:** Siemens · Ansys · Rockwell · Schaeffler · **BMW** (Regensburg live twin) · Amazon · Aras.
- **Open-source communities:** MuJoCo · Isaac Lab · Genesis · Gazebo · Taichi / Warp · Hugging Face (Physical AI Dataset, LeRobot).
- **Industry programs:** NVIDIA Inception / DLI; world-model + humanoid adopters (Figure, Agility, Skild, 1X) building on Cosmos / GR00T.

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme (integration stability, contact models, solver types, USD composition).
- **Project rubrics** with objective metrics: **sim-to-real transfer success rate**; sim **throughput** (steps/sec, parallel-env count); **physics accuracy** vs. an analytic solution or real measurements; **synthetic-data → real-task accuracy** (sim-only detector on real images); twin **calibration error / update latency**.
- **Standardized benchmarks** as portable evidence: **Isaac Lab tasks / Arena**, **MuJoCo Playground**, ManiSkill, Meta-World; **Real2Sim policy-eval** and **RoboTrustBench** for world-model trustworthiness.
- **Recognized certifications as evidence:** **NCP-OpenUSD**; NVIDIA DLI Digital Twins path; Isaac Lab tutorials completion.
- **Senior tiers:** portfolio + **system-design interview** (design a sim stack / twin architecture) + live debugging (unstable solver, sim-to-real-gap diagnosis).

## 12. Adjacent & Related Niches
A **horizontal enabler**: feeds **A6 imitation/RL** (the training ground), **A1 perception** (synthetic data & sensor sim), **A5 embodied skills** — manipulation & locomotion (sim-to-real), and **A7 VLAs / world foundation models** (synthetic trajectories, neural simulators). Pairs with the C-platform tracks broadly (fixed arms, mobile manipulators, legged, humanoids) and the **B1 manufacturing / automotive / logistics** verticals (industrial digital twins). (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A8 (`✓`). §7 stamped mid-2026 — re-research before publish.*
