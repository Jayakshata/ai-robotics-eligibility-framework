# Phase 2 — Progression Paths & Career Lattice

**Purpose.** The **career map** of the AI-for-robotics eligibility program: how an engineer climbs *within* a niche (the vertical ladder), how niches *connect and combine* (the horizontal lattice), how cross-niche **platform roles** bundle several capabilities into one hireable archetype, and a set of **worked end-to-end paths** from an entry degree to a destination role. Where `common-core-vs-specialization.md` answers *"what do I study,"* this file answers *"where do I go, and how do I get there."*

**Grounding.** The vertical ladder is synthesized from the **§2 (Role Archetypes & Seniority Tiers)** tables of all **23 Axis-A capability profiles** — their L1→L4/L5 mandates are strikingly uniform, which is what makes a single generic ladder legitimate. The horizontal lattice is built from each profile's **§12 (Adjacent & Related Niches)**. The platform archetypes are pulled from the **§5 (Eligibility Profile)** and **§2 signature capability stacks** of the **10 Axis-C platform bundles** (`phase-1/platforms/*.md`). Niche shorthands follow `master-niche-taxonomy.md` clusters A1–A10 / platforms C1–C10.

**The one-line model:** `pick a niche → climb L1→L5 (deepen)` **×** `add an adjacent niche or a platform bundle (broaden)` = **a career, not just a job.**

---

## Part 1 — Vertical Progression Within a Niche (the generic ladder)

Every capability profile's §2 uses the **same four-rung ladder** with near-identical mandates — only the noun changes ("perception subsystem," "control subsystem," "SLAM subsystem," "policy," "world-model subsystem"…). The shared shape:

| Stage | The rung | What you own | What changes vs. the rung below (from §2 mandates) |
|---|---|---|---|
| **Undergrad** | Foundation degree | Coursework + first hardware/sim projects | The entry gate. A core-four/five degree (**Robotics · CS · EE · ME · Mechatronics**), plus niche-specific first-class degrees (Aerospace for aerial, Ocean/Marine Eng for subsea, Materials/ME for soft & micro). Builds the shared common core. |
| **Postgrad / specialization** | MS or PhD, niche-focused | A thesis / niche project | You *choose the niche*. MS = specialization + portfolio for L1–L2 entry; **PhD = the differentiator for the L4/L5 research track** (the §2 "Staff/Principal Research" rungs assume it). |
| **L1** | Junior *[niche]* Engineer | Well-scoped tasks **under supervision** | You implement/tune pipelines under supervision, integrate existing libraries onto real hardware, run experiments, and collect/curate data. You work *inside* someone else's architecture. |
| **L2** | *[niche]* Engineer | **One subsystem, end-to-end** | The first real leap: you **own a subsystem input-to-output**, debug it on real hardware, and **ship it to a real deployment** — no longer "runs experiments" but "owns a pipeline and deploys it." |
| **L3** | **Senior** *[niche]* Engineer | The **architecture** + the key tradeoff | You *design* the architecture and own the signature decision — **model-based vs. learned**, classical vs. neural, centralized vs. decentralized, build-vs-buy. You set the accuracy/latency/robustness **benchmarks** and **mentor**. |
| **L4 / L5** | **Staff / Principal** *[niche]* Research Engineer / Scientist | The **agenda** + the field | You set the org-wide research agenda, **advance SOTA**, publish (RSS/CoRL/ICRA — or *Science/Nature*-family for micro/bio/soft), or drive the reference open-source stack. Org-wide direction. |

**The three inflection points (what actually gets you promoted):**
- **L1 → L2 — from *executing* to *owning + shipping*.** The mandate verb flips from "implements/tunes under supervision" to "owns … end-to-end … ships to a real deployment." Evidence = a subsystem you took to real hardware yourself.
- **L2 → L3 — from *owning* to *architecting*.** You stop being handed the design and start making it: the tradeoff calls, the benchmarks, the mentoring. Evidence = an architecture others build against.
- **L3 → L4/L5 — from *team* to *field*.** You move from designing within a team to setting the agenda and moving the state of the art (or, in safety, holding **sign-off / legal-of-record authority** — see `safety-verification-assurance` §2 L4/L5).

**The ladder is not monolithic — several niches fork into two lanes**, and strong seniors bridge them (this is the scarce, high-value profile in each):

| Niche (profile) | Lane A — *builds the substrate* | Lane B — *makes it learn / useful* |
|---|---|---|
| **Imitation Learning & Teleop** (`imitation-learning-teleoperation` §2) | Teleop-rig / data-infra (Mechatronics/EE + SW — leader-follower arms, gloves, low-latency comms) | Policy-learning (CS/ML/Stats — BC, diffusion/flow, VLA fine-tune) |
| **Tactile & Force Sensing** (`tactile-force-sensing` §2) | Sensor-builder (materials/MEMS/mechatronics — fabricates the transducer) | Touch-learning (representation/policy — makes the signal useful) |
| **Simulation & Digital Twins** (`simulation-digital-twins` §2) | Engine/solver R&D · industrial digital twins (OpenUSD/Omniverse) | Sim-for-robot-learning (RL, domain randomization, sim-to-real) |
| **Micro/Nano & Bio Robotics** (`micro-nano-bio-robotics` §2) | Fabricator/physicist (MEMS, materials, scaling-law physics, wet-lab) | Control/autonomy (micro-visual-servoing, magnetic/RL swarm control) — plus a **co-design** third pole |
| **Calibration / Integration / MLOps** (`calibration-integration-mlops` §2) | Systems integration / bring-up / calibration `[F]` | Robot-learning data-infra / MLOps — the data flywheel `[S][◆]` |

> **Two universal splits at the top.** (1) Almost every §2 L4/L5 rung is a **"Research Engineer / Research Scientist"** — the senior IC track is a *research* track, PhD-gated, publishing-measured. (2) Within a platform, the ladder also runs **deployment → software → research** (e.g. quadruped: L1 field deployer → L2–L3 locomotion software → L4/L5 learned-locomotion research), so an engineer can top out at high-value **L3 deployment/integration** without ever entering the research lane.

---

## Part 2 — The Horizontal Lattice (how niches connect & combine)

Each §12 names the capabilities a niche pairs with, the platforms it feeds, and the verticals it serves. Collapsing all 23 §12 sections yields **nine tightly-linked clusters** plus a set of **hub niches** whose edges cross cluster boundaries (the lattice's connective tissue).

### 2a. The nine clusters (tightly-linked niches)

| Cluster | Niches (profiles) | Internal glue (from §12) |
|---|---|---|
| **I · Perception & Spatial AI** (A1+A2) | Computer Vision & 3D · Multimodal Fusion · Tactile & Force · SLAM/State-Estimation | CV↔SLAM share the geometry (VO/VIO, neural mapping); fusion is SLAM's multi-sensor front-end; tactile is the contact-sensing sibling (but pulls hard toward Cluster IV). |
| **II · Planning, Navigation & Decision** (A3) | Motion Planning & Navigation · Task & Motion Planning | TAMP sits *atop* motion planning (its geometric backend); both feed the semantic/LLM-planner boundary. |
| **III · Control & Dynamics** (A4) | Classical/Optimal/MPC · Whole-Body/Compliant/Force | MPC is the optimizer *under* whole-body control; shared kinematics & dynamics. |
| **IV · Embodied Skills** (A5) | Manipulation & Grasping · Locomotion & Loco-Manipulation | Loco-manipulation is the bridge between them; each pulls perception + control + robot-learning. |
| **V · Robot Learning** (A6) | RL for Control · Imitation & Teleop · Sim-to-Real & Representation | RL & IL are siblings (RL post-trains IL/VLA); sim-to-real is the deployment bridge; all three ride the simulation substrate. |
| **VI · Foundation Models & Simulation** (A7+A8) | Robot FMs / VLAs · World Models · Simulation & Digital Twins | VLA↔world-model (WM-as-policy); simulation is the shared data-engine / neural-simulator substrate. |
| **VII · Interaction & Multi-Agent** (A9) | Human-Robot Interaction · Multi-Robot / Swarm / Fleet | A9 siblings — the *human* side and the *fleet* side of coordination. |
| **VIII · Cross-Cutting Substrate** (A10) | Middleware / Real-Time · Safety / Verification / Assurance · Calibration / Integration / MLOps | The "under everything" trio: transport + assurance + the calibrated-data supply chain. |
| **IX · Materials-Forward / Non-Rigid** (A10) | Soft Robotics · Micro/Nano & Bio Robotics | Shared fabrication (soft actuators, magnetic/biohybrid materials); both **invert the degree weighting** (ME/Materials Tier 1). |

### 2b. Hub niches — the edges that cross clusters

A handful of niches appear in *many* other §12 sections; they are the lattice's connectors and the natural "second niche" for a T-shape:

- **VLAs / Robot Foundation Models (A7) — the universal "brain."** Nearly every embodied niche's §12 names VLAs as its frontier top layer. It sits *atop* manipulation & embodied skills, consumes perception (VFMs), imitation & RL (its training methods), and world models (co-training) — then feeds C1/C2/C5 and service/logistics/manufacturing. *Bridges Clusters I, IV, V → VI.*
- **Whole-Body / Compliant Control (A4) — the humanoid hub.** Couples control + locomotion + contact-rich manipulation + tactile + RL + whole-body VLAs; feeds C5/C4/C2. *Bridges Clusters III, IV → the humanoid platform.*
- **SLAM / State-Estimation (A2) — the mobility hub.** Pairs with perception & fusion, feeds navigation (consumes pose+map), touches simulation and world models; load-bearing on AMR / aerial / quadruped / underwater. *Bridges Cluster I → II and every mobile platform.*
- **Simulation + Sim-to-Real (A8/A6) — the training hub.** The horizontal enabler: the training ground for RL/IL, the synthetic-data source for perception & VLAs, most battle-tested on legged/humanoid. *Bridges Cluster V ↔ VI ↔ IV.*
- **Cross-cutting substrate (A10: middleware · safety · calibration).** Explicitly the "infrastructure substrate under all of Axis A." **Safety/V&V** is an *assurance overlay every capability eventually requires* and a **hard certification gate** in surgical/AV/aerial/space/nuclear. *Edges into every cluster.*
- **Multi-Robot / Swarm (A9) — the fleet hub.** Aggregates nav (MAPF), SLAM (collaborative), control (decentralized), MARL, and multi-agent FMs across a fleet. *Bridges II, III, V, VI at scale.*

### 2c. The canonical combos (named in §12, realized by platforms)

These recurring chains are the field's most common multi-niche verticals — each is what a platform archetype (Part 3) hires for:

- **Perception ↔ SLAM ↔ Navigation** → the mobile-autonomy stack (AMR / self-driving / drone). *(CV §12 names SLAM as closest pair; SLAM §12 feeds navigation.)*
- **RL + Locomotion ↔ Control/Whole-Body** → quadruped / humanoid legs. *(Locomotion §12 pairs with control + RL; RL §12 feeds A5 and C4/C5.)*
- **Manipulation ↔ Tactile ↔ Force Control ↔ VLA** → dexterous arms & humanoid hands. *(Manipulation §12 → VLAs + force control; tactile §12 → manipulation + VLAs.)*
- **Control ↔ Whole-Body ↔ Locomotion + Manipulation ↔ VLA** → the full humanoid. *(Whole-body §12 feeds C5, couples locomotion + manipulation + whole-body VLAs.)*
- **TAMP ↔ VLA / LLM-planner ↔ Multi-Robot** → the decision/orchestration layer. *(TAMP §12 → LLM task planners + multi-agent planning.)*
- **Soft ↔ Micro/Nano/Bio ↔ Tactile ↔ Differentiable-Sim** → the materials-frontier stack. *(Soft §12 names micro/nano as closest A10 sibling; both share fabrication + diff-sim.)*

---

## Part 3 — Platform-Track Archetypes (Axis C)

A platform track is a **cross-niche role**: it bundles several capability profiles into one hireable archetype (e.g. "humanoid robotics engineer"). Below, each platform's archetype, its **feeder capability profiles** (from §5), the integration skill no single profile owns, the **degree tilt** relative to the CS/Robotics/EE/ME core, and the platform's own L1→L5 ladder (from §5).

| Platform (C#) | Archetype | Feeder capability profiles (§5) | Integrative skill / "premium" | Degree tilt | Tier ladder (§5) |
|---|---|---|---|---|---|
| **Fixed Arm** (C1) | Manipulation / robot-arm engineer | manipulation · motion-planning · whole-body-compliant-control · calibration-integration · computer-vision | Hand-eye calibration + contact-rich/force work; ROS 2 + MoveIt 2 + a vendor stack (FANUC/ABB/KUKA/UR) | **Mechatronics unusually strong**; ME/EE embodiment + CS/AI learning | L1 cell integrator → L2–L3 manip software → L4/L5 learned-manip / RFM research |
| **Mobile Manipulator** (C2) `[◆]` | Mobile-manipulation engineer *(bilingual)* | manipulation · motion-planning · state-estimation-slam · whole-body-compliant-control · calibration · imitation-learning | **Base–arm whole-body coordination** — stitching the C1 arm bundle to the AMR stack (the hard part) | Robotics/Mechatronics/EE/ME + CS/AI | L1 integrator (marry AMR to arm) → L2–L3 mobile-manip software → L4/L5 learned whole-body mobile-manip |
| **AMR / AGV** (C3) | AMR / mobile-robot navigation engineer | state-estimation-slam · motion-planning · multimodal-fusion · multi-robot-swarm · safety-verification | Fleet orchestration (VDA5050 / Open-RMF) + AMR-safety (ISO 3691-4); ROS 2 + Nav2 | CS/Robotics/EE (nav stack) + ME/Mechatronics (drive base) | L1 deploy/commission → L2–L3 nav software → L4 fleet-orchestration → L5 learned-nav research |
| **Quadruped** (C4) `[★]` | Legged / quadruped robotics engineer | locomotion · reinforcement-learning · sim-to-real · state-estimation-slam · motion-planning · control-mpc | **Sim-to-real RL locomotion** (Isaac Lab/legged_gym) + LiDAR-inertial odometry + ruggedization | Robotics/ME/EE (floating-base dynamics, QDD) + CS/AI (RL) | L1 field deployer → L2–L3 loco+perception+nav software → L4/L5 learned-loco / loco-manip research |
| **Humanoid** (C5) `[★]` | Humanoid robotics engineer | whole-body-compliant-control · locomotion · reinforcement-learning · manipulation · robot-foundation-models-vla | **Whole-body + balance** control of many DoF; the VLA "brain" (GR00T/Helix/π) | Robotics/ME/EE/CS with deep controls + RL + sim-to-real | Tiers track the capability ladders; premium = whole-body sim-to-real on real bipeds |
| **Aerial / Drone** (C6) `[★]` | Drone / UAV autonomy engineer | state-estimation-slam · control-mpc · motion-planning · multimodal-fusion · multi-robot-swarm | GPS-denied VIO + SE(3) flight control + PX4/ArduPilot; FAA Part 107 (defense adds Blue-UAS/clearance) | **Aerospace/Aeronautical rises to first-class** alongside Robotics/EE/CS | L1 test-pilot/integrator → L2–L3 autonomy software → L4/L5 GPS-denied / agile-flight research |
| **Underwater / Marine** (C7) | Subsea / marine-robotics engineer | state-estimation-slam · multimodal-fusion · control-mpc · computer-vision · motion-planning | Acoustic nav (USBL/DVL/INS) + pressure/corrosion design + sonar DSP; ArduSub; IMCA/BOSIET | **Ocean/Marine Eng & Naval Architecture rise to first-class** | L1 ROV pilot-tech → L2–L3 autonomy/nav/perception software → L4/L5 marine-autonomy research |
| **Soft / Continuum** (C8) `[S]` | Soft / continuum robotics engineer | soft-robotics · whole-body-compliant-control · simulation · sim-to-real · manipulation · tactile | Continuum kinematics (PCC/Cosserat) + FEM/SOFA + soft-actuator fabrication + a learned surrogate | **ME & Materials Science rise to Tier 1** (CS Tier 1 only for the learned-control sub-area) | L1 fabricate+characterize+sim → L2–L3 build→model→control → L4/L5 actuation/modeling SOTA |
| **Swarm / Multi-Robot** (C9) `[★]` | Swarm / multi-robot engineer | multi-robot-swarm · motion-planning · state-estimation-slam · reinforcement-learning · middleware-realtime | Fleet-scale coordination + MAPF (CBS/LaCAM) + DDS-at-scale; Open-RMF / VDA5050 | **CS (distributed systems) is the strongest single fit**; Aerospace/EE/Applied-Math/OR Tier-1; **ME weakest** | L1 fleet integrator → L2–L3 coordination software → L4/L5 swarm/MARL/multi-agent-FM research |
| **Micro / Nano** (C10) `[★]` | Micro/nano robotics engineer | micro-nano-bio-robotics · control-mpc · reinforcement-learning · computer-vision · multi-robot-swarm · soft-robotics | Microfabrication (2-photon/soft-litho) + external-field control + low-Re/imaging-guided control | **Inverts the CS-forward weighting** — ME/EE/Applied-Physics/Materials/BME Tier-1; CS supporting | L1 fab/characterization tech → L2–L3 microrobot control/vision + actuation → L4/L5 clinical-translation / learned-control |

**Reading the table:** three platforms **re-weight the degree** away from the CS-forward norm — aerial adds Aerospace, underwater adds Ocean/Marine Eng, and **soft & micro invert it entirely toward ME/Materials** (a CS-only profile is weak there). Swarm is the mirror image — **CS/distributed-systems is *strongest*, ME weakest**. The others share the CS/Robotics/EE/ME core and differ mainly in *which* feeder profiles dominate and *what* integration skill stitches them together.

**Platforms as niche-bundlers (the humanoid example):** C5 pulls **A4 whole-body + A5 locomotion + A5 manipulation + A6 RL + A7 VLA** into one role — which is exactly why the three canonical T-shapes (RL+locomotion, manipulation+VLA, control+whole-body) all converge on it. C2 mobile-manipulator is the other great convergence point, fusing the **C1 arm bundle** with the **C3 AMR stack**.

---

## Part 4 — Worked End-to-End Example Paths

Six illustrative careers, each spanning a different **entry degree** → **specialization** → **tier climb** → **destination role**, with the load-bearing capability profiles and platform named. All transitions follow §12 adjacencies and §5 platform feeders — no invented jumps.

### Path A — *The humanoid "brain": CS → manipulation → VLA → humanoid lead*
**CS undergrad** → **MS Robotics, manipulation focus** → **L1 Manipulation Engineer** (C1 fixed arm: grasp/pick pipelines under supervision) → **L2** (owns perception→grasp→plan→execute end-to-end, debugs sim-to-real, ships) → **cross into Robot Foundation Model / VLA Engineer** (IL is *how* VLAs are fine-tuned; manipulation *feeds* VLAs — `manipulation` §12 → `robot-foundation-models-vla`) → **L3/L4 Humanoid team lead** owning the VLA "brain" on C5.
*Load-bearing:* manipulation-and-grasping → imitation-learning-teleoperation → robot-foundation-models-vla; platforms C1 → C5. *The purest expression of the manipulation↔VLA↔humanoid combo.*

### Path B — *The legged controls track: ME → quadruped → humanoid whole-body*
**Mechanical Engineering undergrad** → **MS with controls + RL focus** → **L1 Locomotion / Controls Engineer** (C4 quadruped: tunes gait controllers & RL pipelines in sim) → **L2 Locomotion Engineer** (owns state-estimation→gait→whole-body→deploy; debugs sim-to-real on real legs) → **L3 Senior Locomotion Engineer** (owns the whole-body / loco-manip stack, makes model-based-vs-learned calls) → **moves to Humanoid whole-body control** (`whole-body-compliant-control` §12 feeds C5; the analytical layer transfers).
*Load-bearing:* locomotion + reinforcement-learning + sim-to-real → whole-body-compliant-control; platforms C4 → C5. *Realizes the RL+locomotion and control↔whole-body combos.*

### Path C — *The spatial-AI / autonomy track: EE → SLAM → AV or drone*
**EE undergrad** → **MS, perception + estimation focus** → **L1 SLAM / State-Estimation Engineer** (tunes SLAM pipelines, calibrates & time-syncs sensors) → **L2 SLAM / Localization Engineer** (owns a SLAM subsystem end-to-end, diagnoses drift/scale/degeneracy) → **L3 Senior State-Estimation / SLAM Engineer** (designs the estimation architecture, filter-vs-smoother calls) → **destination splits**: **(C3/AV)** autonomous-vehicle perception-localization lead (perception + SLAM + fusion feed B10), *or* **(C6)** drone GPS-denied-autonomy engineer (VIO is the aerial frontier per `aerial-drone` §5).
*Load-bearing:* state-estimation-slam + computer-vision + multimodal-fusion + motion-planning; platforms C3/C6. *Realizes the perception↔SLAM↔navigation combo.*

### Path D — *The materials-forward frontier: Materials Science → soft/micro (inverted weighting)*
**Materials Science / ME undergrad** → **MS Microengineering** (e.g. EPFL Microengineering ME-436 / ETH MAVT Microrobotics — named in `micro-nano` §5) → **L1 Fabrication & Characterization Technician** (cleanroom / soft-litho; runs FEM & field-actuation rigs) → **L2 Micro/Soft-Robotics Engineer** (owns a device subsystem: fabricate→actuate→closed-loop control on real hardware) → **L3 Senior** (owns morphology↔control co-design, actuation/fabrication tradeoffs) → **L4/L5 Research Scientist** in clinical-translation or actuation SOTA (*Science / Nature*-family venues, not the RSS/CoRL circuit).
*Load-bearing:* micro-nano-bio-robotics / soft-robotics + control + sim-to-real; platforms C10 / C8. *The deliberately CS-light path — fabrication + physics + materials are load-bearing; a steered real device (not a sim swimmer) is the premium.*

### Path E — *The fleet / distributed-systems track: CS-backend → swarm/fleet*
**CS undergrad (distributed systems / backend)** → **direct entry or MS** → **L1 Multi-Robot / Fleet Engineer** (Open-RMF / VDA5050 deploy, MAPF solvers, MARL baselines) → **L2 Fleet Orchestration Engineer** (owns coordination end-to-end: task allocation→path planning→traffic deconfliction; debugs deadlock/collision) → **L3 Senior Multi-Robot / Fleet Architect** (centralized-vs-decentralized calls, scalability benchmarks) → **L4/L5 Swarm / MARL / multi-agent-FM Researcher**. Destination: warehouse-logistics fleet orchestration (B2, the killer app).
*Load-bearing:* multi-robot-swarm + motion-planning + state-estimation-slam + middleware-realtime; platforms C9 / C3. *Uses `swarm-multi-robot` §5's explicit note that backend/distributed-systems experience partially transfers — the rare on-ramp into robotics for a pure-software engineer.*

### Path F — *The systems → safety authority track: embedded EE/CS → middleware → safety architect*
**EE / CS undergrad (embedded)** → **L1 Robotics Software / Middleware Engineer** (ROS 2 nodes, device drivers, QoS, sensor/actuator bring-up under supervision) → **L2 Middleware / Embedded / Real-Time Engineer** (owns a subsystem: bring-up→RMW/QoS→real-time loop→deploy; fixes latency/jitter) → **L3 Senior Robotics Systems Engineer** (RMW / RTOS / edge-inference architecture) → **overlay into Safety / V&V** (middleware is the substrate assurance runs on — `safety-verification-assurance` §12 sits atop its A10 siblings) → **L4/L5 Staff Safety Architect** and **safety-case owner with sign-off / legal-of-record authority**. Destination: safety-critical verticals (AV ISO 26262, aerial DO-178C, surgical).
*Load-bearing:* robotics-middleware-realtime → safety-verification-assurance (+ calibration-integration-mlops); cross-cutting substrate (Cluster VIII). *Shows a high-value, non-research destination — the assurance gate the frontier niches all depend on.*

**Across the six:** entry degrees span **CS, ME, EE, Materials Science, CS-backend, and embedded EE/CS**; destinations span **humanoid brain, humanoid controls, autonomous-vehicle/drone autonomy, medical micro/soft frontier, warehouse fleet orchestration, and safety-architect authority** — deliberately covering the CS-forward, embodiment-forward, materials-forward, and infrastructure/assurance quadrants of the field.

---

*Inputs: Phase-1 capability profiles §2 (Role Archetypes & Seniority Tiers) + §12 (Adjacent & Related Niches) across all 23 Axis-A niches; Phase-1 platform bundles §5 (Eligibility Profile) + §2 (Signature Capability Stack) across all 10 Axis-C platforms; `master-niche-taxonomy.md` clusters A1–A10 / C1–C10. Companion: `common-core-vs-specialization.md` (the study map; §"Niches that pair naturally" overlaps Part 2 here). Tier titles/mandates are quoted/condensed from each profile's §2; degree tilts and feeder lists from each platform's §5. Next in Phase 2: eligibility matrix, consolidated lab/partnership plan → Phase 3 shareable website.*
