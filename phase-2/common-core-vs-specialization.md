# Phase 2 — Common Core vs Specialization Map

**Purpose.** The organizing spine of the AI-for-robotics eligibility program: the **one shared foundation** every engineer builds, plus the **capability track(s)** that turn a generalist into a hireable specialist. This is the "T-shaped engineer" model made concrete — a broad horizontal bar (the common core) and a deep vertical (1–2 niches).

**Grounding.** Hours and subjects derive from `phase-1/_grounding-reference.md` — §B canonical subject sets and §D the ~1,400-hour, 5-phase training-duration model. Cluster characterizations reference the Phase-1 capability profiles (`master-niche-taxonomy.md` clusters A1–A10). Representative profiles read for this map: manipulation-and-grasping, computer-vision-3d-perception, motion-planning-navigation, control-classical-optimal-mpc, reinforcement-learning-control, state-estimation-slam, robot-foundation-models-vla.

**The one-line model:** `shared common core (Phases 1–3, ~920 h)` **+** `one or more capability tracks (Phases 4–5, ~480 h)` = **job-ready junior AI-for-robotics engineer (~1,400 h)**.

---

## Part 1 — The Common Core (Phases 1–3, ~920 h)

Every AI-for-robotics engineer shares the same foundation regardless of niche. It is the union of the near-universal canonical subjects (grounding-ref §B.1/§B.2) and it occupies the first three phases of the duration model (§D: ~300 + ~320 + ~300 h). Two design principles from the grounding ref govern it: **cap the foundations** (ML fundamentals compress to ~2–3 months part-time), and **ROS 2 + a capstone are what make it robotics** rather than a generic AI bootcamp.

### Phase 1 — Foundations (~300 h) → *maths & programming fluency*
| Common-core subject | ~Hours | Canonical anchor (grounding-ref §B) |
|---|---|---|
| Linear algebra · probability & statistics · calculus/ODEs | ~110 | "Maths" — **linear algebra is the single most load-bearing subject** |
| Optimization + numerical methods | ~40 | "Maths" — load-bearing for control, planning, learning |
| Programming: **Python** (+ intro **C/C++**) | ~90 | "Programming & CS" — Python + C/C++ are universal |
| Data structures & algorithms | ~30 | "Programming & CS" |
| Classical ML | ~30 | Anchor: DeepLearning.AI ML Specialization (Ng) |

### Phase 2 — Core robotics (~320 h) → *command a robot in sim + real*
| Common-core subject | ~Hours | Canonical anchor |
|---|---|---|
| Intro-robotics course + kinematics & dynamics | ~90 | "Integrative" (dedicated intro-robotics course) + near-universal §B.2 |
| **Controls basics** — feedback/classical control | ~60 | "Control" — a *near-universal named requirement*; Modern Robotics C4 |
| Motion planning basics | ~50 | "Control → motion planning" |
| **ROS 2** (+ embedded/real-time exposure, more C++) | ~70 | "embedded/real-time (ROS/ROS2)"; **the marker that makes it robotics** |
| State estimation · localization · SLAM/nav basics | ~50 | "Control → state estimation; localization/mapping/navigation" |

### Phase 3 — AI/ML depth (~300 h) → *deep-learning fluency*
| Common-core subject | ~Hours | Canonical anchor |
|---|---|---|
| Deep learning | ~130 | DeepLearning.AI DL Specialization (~129 h) |
| Computer vision / perception | ~90 | "Intro AI/ML → computer vision/perception"; near-universal §B.2 |
| RL / imitation learning basics | ~80 | "Intro AI/ML → RL/imitation learning" |

**Common-core subtotal: ~920 h (~66% of the 1,400-h budget).**

**The universal capstone (structurally core, substantively specialized).** A robotics **capstone / systems-integration project is universal** (grounding-ref §B.1) — every engineer ends the program with one, so the *scaffold* is common core even though it lives in Phase 5. Its *content*, however, is specialization-flavored (see Part 2). Budget explicitly for hardware/sim debug friction — robotics debugging is slower than pure software (design principle #3) — and hang a **stackable certificate spine** (e.g. Jetson AI Specialist + a ROS 2 cert + a cloud ML cert) off Phases 3–4 as verifiable milestones.

> **Every profile confirms this core.** All seven representative profiles list the identical "Foundational maths & CS" block (linear algebra · probability · optimization · DS&A · Python + C++) and the same Phase-1→3 structure in their §5/§6. What differs is only *emphasis within the core* (e.g. A3/A4 tilt Phase-1 toward optimization; A1/A2 add signal/image processing; A7 compresses Phase-2 robotics and expands Phase-3 ML) — the subjects are shared, the weighting flexes.

---

## Part 2 — The Specialization Model (Phases 4–5, ~480 h)

**"Shared core + one (or more) capability track."** Phase 4 (~260 h) is the niche core; Phase 5 (~220 h) is the specialization-tuned capstone + portfolio + job prep. This is the ~34% of the budget that makes an engineer *hireable in a niche* rather than a generalist. Below, cluster by cluster (A1–A10), what each adds **on top of** the common core.

| Cluster | What Phase 4 specializes on top of the core | Signature Phase-5 capstone |
|---|---|---|
| **A1 · Sensing & Perception** *(CV & 3D perception, tactile & force, multimodal fusion)* | Multi-view geometry (SfM, bundle adjustment, stereo/triangulation), 6-DoF pose, LiDAR/radar DSP + point clouds, 3D reconstruction & neural rendering, foundation-perception (SAM3/DINOv3/VGGT). **EE/ECE + applied-math rise toward Tier 1.** | Real-sensor 3D scene-understanding stack: detect→pose→reconstruct→semantic map, wired into ROS 2 |
| **A2 · State Estimation & Spatial AI** *(SLAM & mapping)* | Recursive filtering (EKF/UKF/error-state, particle filters), factor-graph/smoothing SLAM (GTSAM/Ceres), Lie groups & manifold optimization, VIO/LIO, loop closure, neural/3DGS + geometric-foundation-model mapping. **The most "EE-flavored" niche; aerospace/applied-math rise.** | Full multi-sensor SLAM/localization stack on a real robot, drift-quantified with ATE/RPE |
| **A3 · Planning & Navigation** *(motion planning & nav, TAMP)* | Search-based (A\*/D\*), sampling-based (PRM/RRT\*/BIT\*) and trajectory optimization (CHOMP/min-snap) planning; the Nav2 stack; local planning/MPPI; social nav; learned/GPU planning (cuRobo/VAMP); VLN. **The most algorithms/optimization-heavy slice; math + aerospace/GNC rise.** | Autonomous nav of an unknown, dynamic, human-populated environment |
| **A4 · Control** *(classical/optimal/MPC, whole-body/compliant/force)* | Classical feedback (PID/root-locus/Bode), state-space (LQR/LQG), MPC (QP/NLP, robust, sampling/GPU), trajectory optimization (iLQR/DDP), nonlinear/Lyapunov, full dynamics modeling. **The most theory/continuous-math-heavy niche; EE/ME/Aero/Applied-Math + a dedicated Systems-&-Control degree outrank generic "Robotics."** | Whole-body / contact-implicit MPC on a real quadruped or arm |
| **A5 · Embodied Skills** *(manipulation & grasping, locomotion & loco-manipulation)* | Grasp synthesis & 6-DoF grasp detection, force/impedance/compliant control, contact-rich & dexterous/in-hand/bimanual manipulation, tactile integration, imitation/diffusion policies, VLA fine-tuning; locomotion adds gait & legged control. **Mechanical Engineering rises to Tier 1 for manipulation.** | Language-conditioned manipulation on a real arm (fine-tune a VLA) |
| **A6 · Robot Learning** *(RL for control, imitation & teleop, sim-to-real & representation learning)* | Policy optimization (policy gradients / actor-critic / PPO / SAC), model-based & offline RL, large-scale GPU-parallel sim (Isaac Lab / MuJoCo Playground), sim-to-real & domain randomization, imitation (BC/ACT), RL post-training of VLAs. **Math/applied-math + OR/statistics rise; ME falls.** *(Phase-2 stays control-weighted — LQR/MPC/trajopt is the spine RL is built on.)* | A sim-to-real learned controller on a real quadruped/arm |
| **A7 · Foundation Models & Generative AI** *(robot FMs & VLAs, world models)* `[★] frontier` | Transformers/attention/tokenization, VLM backbones, VLA architectures (OpenVLA/π0/GR00T), action heads (diffusion/flow-matching), action tokenizers (FAST), LLM task planners, cross-embodiment pretraining, world models. **The most ML-heavy / least hardware-heavy niche — CS-with-DL/NLP dominates; core robotics compresses, ML depth expands.** | Fine-tune a (dual-system) VLA on a real robot + real-world/LIBERO benchmark |
| **A8 · Simulation & Digital Twins** | The sim substrate the whole field trains & validates in — physics engines (Isaac Sim/Lab, MuJoCo/MJX, Drake, Genesis), GPU-parallel simulation, differentiable sim, domain randomization, synthetic-data generation, digital twins, real2sim (Gaussian splatting). *Underpins A6 sim-to-real and A7 VLA training.* | A domain-randomized sim + synthetic-data pipeline that trains a transferable policy |
| **A9 · Interaction & Multi-Agent** *(HRI & cobots, multi-robot/swarm/fleet)* | The human and the fleet: human-robot interaction (intent/gesture/shared autonomy), safe collaborative-robot control (ISO 10218 / ISO-TS 15066); and multi-robot coordination (CBS/prioritized planning, swarm, fleet orchestration). *HRI is an emerging core per grounding-ref §B.1.* | A cobot that safely shares a workspace, or a coordinated multi-robot task |
| **A10 · Systems, Safety & Infrastructure** *(middleware/embedded/real-time, safety/verification, calibration/integration/MLOps, soft & micro/nano/bio)* | The plumbing & assurance layer: ROS 2 internals / DDS / real-time & embedded systems; safety verification & runtime assurance (CBFs, formal methods, standards); calibration + systems integration + robot-learning MLOps; plus the materials-frontier niches (soft, micro/nano, bio-inspired). *This is where the core's ROS 2 + systems skills go deep.* | A real-time, safety-monitored integrated robot stack (calibrated, deployable) |

---

## Part 3 — The T-Shaped Engineer

```
  ┌────────────────────────────────────────────────────────────┐
  │   COMMON CORE  ·  Phases 1–3  ·  ~920 h  (the horizontal)   │
  │  maths · Python/C++ · DS&A · ROS 2 · ML/DL · controls       │
  │  basics · intro robotics · CV/RL basics                     │
  └───────────────────────────┬────────────────────────────────┘
                              ██  Phases 4–5 · ~480 h
                              ██  deep expertise in 1–2 niches
                              ██  (the vertical)
```

- **The horizontal bar** = the common core (Part 1). Broad, shared, ~two-thirds of the budget. It is what lets a perception engineer read a control engineer's code and a VLA engineer wire into a real robot — the shared language of the field.
- **The vertical** = deep expertise in **1–2 capability niches** (Part 2). It is only ~one-third of the hours but it is what makes an engineer *employable in a specific role*. Depth in **one** niche is the minimum bar; **two adjacent** niches is the strongest, most flexible profile.

### Niches that pair naturally

The strongest engineers pick a **primary + an adjacent second** whose subjects and frontier overlap (pairings drawn from each profile's §12 "Adjacent & Related Niches"):

| Pair | Why they pair | Shared substrate |
|---|---|---|
| **Perception (A1) + SLAM (A2)** ★ | VO/VIO and neural mapping *are* geometry — the CV and SLAM profiles each name the other as their closest pair | Multi-view geometry, bundle adjustment, geometric foundation models (VGGT/DUSt3R), 3DGS |
| **RL (A6) + Locomotion (A5)** ★ | RL is the engine behind the leap in legged/humanoid locomotion; the RL profile feeds A5 and the C4/C5 platform tracks | GPU-parallel sim, sim-to-real, domain randomization, whole-body control |
| **Manipulation (A5) + VLAs (A7)** ★ | Manipulation feeds into VLAs; a VLA sits *atop* manipulation skills and is validated on manipulation benchmarks | Imitation/diffusion policies, LeRobot, action chunking, fine-tuning on real arms |
| **Control (A4) + RL (A6)** | The MPC×RL convergence — control's §12 bridges into A6, RL's §12 names the RL↔optimal-control bridge as load-bearing | Dynamics, LQR/MPC, trajectory optimization, the Bellman/DP common root |
| **Planning (A3) + Control (A4)** | The controller *tracks* what the planner produces; trajectory optimization is shared by both | Trajectory optimization, MPC/MPPI, optimization & numerical methods |
| **Perception (A1) + VLAs (A7)** | Perception is the sensory front-end a VLA consumes; spatial-reasoning VLMs bridge the two | Visual foundation models (DINOv2/CLIP/SAM), multimodal grounding |
| **Perception (A1) + SLAM (A2) + Planning (A3)** | The full mobile-autonomy stack (AMR / self-driving / drone): see→localize→plan | Sensors, 3D geometry, real-time C++, the Nav2/estimation toolchain |

★ = the three canonical pairings; the field's strongest T-shapes cluster around these.

**Platform pull.** Some platforms naturally demand a specific multi-niche vertical — e.g. the **humanoid (C5)** stack pulls **A6 RL + A4 whole-body control + A5 loco-manipulation + A7 VLAs** together, which is why humanoid roles reward the RL+locomotion and manipulation+VLA T-shapes above.

---

*Inputs: `phase-1/_grounding-reference.md` (§B canonical subjects, §D duration model); Phase-1 capability profiles (A1–A10); `master-niche-taxonomy.md`. Hour allocations are rough splits within the grounding-ref phase envelopes (Phase 1 ~300 h · Phase 2 ~320 h · Phase 3 ~300 h · Phase 4 ~260 h · Phase 5 ~220 h) and should be treated as planning estimates, not fixed curricula. Next in Phase 2: eligibility matrix, consolidated lab/partnership plan → Phase 3 shareable website.*
