# Phase 2 — Consolidated Lab / Procurement + Partnership Plan

**AI-for-Robotics eligibility program · what to buy and who to partner with.**

Synthesized from Phase 1 across all 49 profiles: capability §9 (Required Lab Setup) + §10 (Partnerships) of the 23 capability profiles, vertical §5 (Specialized Hardware, Sensors & Environment) of the 16 vertical overlays, and platform §6 (Platform-Specific Hardware & Stack) + §8 (Key Players) of the 10 platform bundles. Deduplicated and grouped; the emphasis is on the named products and organizations that **recur** across profiles.

---

## How to read this

- **Cost / build-tier tags** — every item carries a tier: **`starter`** (foundational, low unit cost, near-universal) · **`mid`** (dexterous / tactile / training-GPU / legged class) · **`flagship`** (frontier: humanoids, premium quadrupeds, multi-GPU clusters, specialized rigs). These tier tags are **inferred relative-cost signals** unless a Phase-1 profile explicitly labeled the item (*budget / low-cost / accessible / frontier*). Because the tiering is a synthesis judgment, treat all tier tags as `~` by construction — inline `~` is reserved for items whose recurrence or a specific claim is itself to-verify.
- **No dollar figures are fabricated.** Where a Phase-1 profile stated a price (e.g. Hello Robot Stretch 3 ≈ $28K, Kilobot ≈ $14) it is carried through verbatim.
- **"Needed by" cluster shorthand:** *Perception* (computer-vision-3D · tactile · multimodal-fusion · SLAM) · *Manip* (manipulation-grasping · imitation) · *Legged/Control* (locomotion · whole-body · classical-MPC · RL-control) · *Learning/FM* (RL · imitation · sim-to-real · VLA · world-models) · *Planning* (motion-planning · TAMP) · *Sim* (simulation-digital-twins) · *Systems* (middleware-realtime · safety-verification · calibration-MLOps) · *Multi-robot* (multi-robot-swarm) · *HRI* · *Soft/Micro* (soft-robotics · micro-nano). Platform tracks (C1–C10) and verticals are named explicitly.
- Trending items inherit Phase-1's `⏱ mid-2026` stamp — **re-verify products, prices and vendor status before publish.**

---

# Part 1 — Consolidated Procurement

## A. Robot arms & mobile platforms

### Fixed / research arms
| Item | Needed by | Tier |
|---|---|---|
| **Universal Robots UR5e/UR10e** (UR20/UR30) | Manip, HRI, Legged/Control, Systems, sim-to-real; C1 Arm, C2 MobMan; verticals manufacturing, food-processing | `starter` |
| **Franka Research 3 / Panda (FR3)** — *the research default arm* | Manip, control, imitation, tactile, whole-body, sim-to-real, RL, VLA, safety, TAMP, calibration; C1 Arm | `starter`→`mid` |
| **xArm** (budget) | Manip, imitation, tactile, sim-to-real, RL | `starter` |
| **Hugging Face SO-100/SO-101** (+ Koch/Moss; LeRobot-native, budget) | calibration, imitation, VLA (entry) | `starter` |
| **GELLO** low-cost leader arms | imitation / teleop | `starter` |
| **Kinova Gen3** | Manip, whole-body, calibration; C1 Arm | `mid` |
| **Trossen ViperX / ALOHA / ALOHA 2** (bimanual leader-follower) | imitation, Manip, VLA, calibration, world-models; C1 Arm | `mid` |
| **KUKA LBR iiwa** (7-axis joint-torque; DLR-LWR lineage) | HRI, whole-body, tactile; C1 Arm; manufacturing | `mid`→`flagship` |
| **Flexiv Rizon** (force-control specialist) | C1 Arm; contact-rich Manip | `mid` |
| **ABB (YuMi/GoFa/IRB) · FANUC (CRX) · Yaskawa Motoman** ("Big Four" + cobots) | manufacturing, food-processing, HRI; C1 Arm | `mid` |

### Wheeled mobile bases & mobile manipulators
| Item | Needed by | Tier |
|---|---|---|
| **TurtleBot 4** — ROS 2 reference AMR | Planning, SLAM, Systems, TAMP, Multi-robot | `starter` |
| **iRobot Create 3** (budget) · **AgileX LIMO/Scout** | Planning, Multi-robot | `starter`→`mid` |
| **Clearpath Jackal / Husky / Ridgeback** | Planning, SLAM, Multi-robot; C2 MobMan | `mid` |
| **Hello Robot Stretch 3** (≈ $28K, telescoping arm) | HRI, TAMP, assistive; C2 MobMan | `mid` |
| **PAL TIAGo / TIAGo Pro** (7-DOF, ROS 2-native) | HRI, TAMP; C2 MobMan | `mid` |
| **Mobile ALOHA · TidyBot++** (research bimanual mobile) | imitation, C2 MobMan | `mid` |
| **NVIDIA Nova Carter / Isaac AMR** (Segway RMP + Jetson dev kit) | Planning, SLAM; C3 AMR reference | `mid` |

### Legged & humanoid
| Item | Needed by | Tier |
|---|---|---|
| **Unitree Go2** — *the accessible torque-controlled quadruped* | control, locomotion, SLAM, RL, whole-body, sim-to-real, safety, Planning; C4 Quad | `mid` |
| **Unitree B2 · DEEP Robotics X30** (industrial IP67 quadruped) | locomotion, inspection; C4 Quad | `flagship` |
| **Unitree G1** — *the accessible humanoid* | whole-body, RL, sim-to-real, VLA, HRI; C5 Humanoid | `flagship` |
| **Unitree H1 · Fourier GR-1 · Booster T1** (humanoids) | whole-body, RL, sim-to-real; C5 Humanoid | `flagship` |
| **Boston Dynamics Spot (+ Arm)** — broadest payload ecosystem | locomotion, whole-body, SLAM, inspection, loco-manip; C4 Quad | `flagship` |
| **ANYbotics ANYmal D / ANYmal X** (X = Ex-certified/ATEX Zone-1) | locomotion, whole-body, RL, sim-to-real, inspection, oil-gas; C4 Quad | `flagship` |
| **Agility Digit** (commercial humanoid) | locomotion; C5 Humanoid | `flagship` |

### Aerial, underwater & swarm units
| Item | Needed by | Tier |
|---|---|---|
| **Bitcraze Crazyflie** (nano-quad; the research/swarm default) | locomotion, Multi-robot, C6 Aerial, C9 Swarm, Micro | `starter` |
| **Kilobot** (≈ $14, Harvard) · **e-puck** (K-Team) | canonical large-N swarm testbeds; C9 Swarm | `starter` |
| **PX4/ArduPilot quadrotor + Pixhawk (Holybro)** | locomotion, SLAM, Planning, Multi-robot; C6 Aerial | `starter`→`mid` |
| **Skydio X10 · DJI Matrice/Enterprise** | agile autonomy / enterprise; C6 Aerial; inspection, agriculture, defense | `mid`→`flagship` |
| **Blue Robotics BlueROV2** (T200 thrusters, Navigator FC; de-facto research ROV) | locomotion; C7 Underwater; marine, oil-gas | `mid` |

## B. End-effectors & dexterous hands
| Item | Needed by | Tier |
|---|---|---|
| **Robotiq 2F-85 / Hand-E** (+ FT-300) | Manip; C1 Arm; manufacturing | `starter` |
| **Suction / vacuum grippers** | Manip; manufacturing, logistics, food-processing | `starter` |
| **Schunk · OnRobot** grippers (+ auto tool changers, servo/magnetic) | manufacturing, food-processing; C1 Arm | `starter`→`mid` |
| **UMI handheld gripper** (in-the-wild data collection) | imitation; C1 Arm | `starter` |
| **LEAP Hand** (low-cost dexterous) | tactile, sim-to-real, Manip | `mid` |
| **Allegro Hand** (16-DOF dexterous) | Manip, tactile, sim-to-real (in-hand) | `mid`→`flagship` |
| **Shadow Dexterous Hand** (premium anthropomorphic) | Manip, tactile | `flagship` |
| **Soft Robotics mGrip · Festo bionic · OnRobot Soft · Piab piSOFTGRIP** | Soft; food-processing; C8 Soft-continuum | `mid` |

## C. Tactile & force sensors
| Item | Needed by | Tier |
|---|---|---|
| **ATI (Nano/Mini/Gamma) 6-axis F/T** — *the F/T default* | Manip, tactile, whole-body, HRI, calibration, multimodal, Soft; manufacturing; C1 Arm | `mid` |
| **Bota Systems 6-axis F/T** | Manip, tactile, whole-body, Soft, multimodal; C1 Arm | `mid` |
| **GelSight (Mini / commercial)** — vision-based tactile | Manip, tactile, imitation, multimodal; C1 Arm | `mid` |
| **Meta DIGIT / DIGIT 360** (open-hardware, low-cost) | tactile, Manip, multimodal; C1 Arm | `mid` |
| **TacTip** (Bristol) · **Tac3D** | tactile | `mid` |
| **ReSkin / AnySkin** (magnetic) · **e-Flesh** | tactile | `mid` |
| Joint-torque arms as F/T source (Franka FR3, KUKA iiwa) | tactile, whole-body *(cross-ref Group A)* | `mid` |
| **BioTac** (SynTouch, legacy) · **DAIMON** fingertip touch `⏱` | tactile | `flagship` |
| Haptics dual: **Hapkit** (DIY) → **3D Systems Touch / Force Dimension** | tactile, HRI | `starter`→`flagship` |

## D. Vision / depth / LiDAR / radar sensors
| Item | Needed by | Tier |
|---|---|---|
| **Intel RealSense D435/D455/D405** — *near-universal depth camera* | core — nearly all niches (Perception, Manip, Planning, SLAM, locomotion, HRI, Soft; C2/C3/C4 platforms) | `starter` |
| **Luxonis OAK-D** | Perception, multimodal | `starter` |
| **Azure Kinect / Orbbec** (body tracking) | HRI | `starter` |
| **Stereolabs ZED 2i/X** (stereo) | Perception, SLAM, multimodal | `mid` |
| **Basler / FLIR** (machine vision) | Perception, multimodal; manufacturing | `mid` |
| **Zivid / Photoneo** (industrial 3D bin-picking) | Manip; manufacturing, logistics, food-processing | `mid`→`flagship` |
| **RPLIDAR** (2D, budget) | Perception, Planning, Multi-robot | `starter` |
| **Livox Avia / Mid-360** (solid-state 3D, budget) | Perception, multimodal, SLAM, Planning | `starter`→`mid` |
| **Ouster OS1** — *3D LiDAR default* | Perception, multimodal, SLAM, Planning, Multi-robot; C3 AMR, C4 Quad; mining | `mid` |
| **Velodyne · Hesai** (3D LiDAR) | Perception, multimodal, SLAM; C3/C4 | `mid` |
| **TI mmWave (AWR/IWR) · 4D imaging radar · Continental ARS** | Perception, multimodal; autonomous-vehicles | `mid` |
| **Prophesee (Gen4/EVK) · iniVation (DVXplorer/DAVIS)** event cameras | Perception, multimodal, SLAM | `mid`→`flagship` |
| **Xsens MTi · VectorNav · u-blox ZED-F9P RTK-GNSS** (IMU/GNSS) | SLAM, multimodal, control, calibration; outdoor verticals | `starter`→`mid` |
| **OptiTrack / Vicon** motion capture (state ground-truth) | control, Soft, tactile, Micro; C8 | `mid`→`flagship` |
| **SICK microScan3 · Hokuyo · Pilz · Omron** safety scanners & light curtains (Type 3/PLd) | HRI; logistics, manufacturing; C3 AMR | `mid` |

## E. Compute (workstation / training / edge tiers)
| Item | Needed by | Tier |
|---|---|---|
| **RTX 4090 / A6000 workstation** — *universal dev/sim node* | core — nearly all niches | `starter` |
| **Multi-core CPU workstation** (model-checking / search are CPU-bound) | safety-verification, TAMP | `starter`→`mid` |
| **NVIDIA Jetson Orin (Nano/NX/AGX)** — *universal on-robot edge* | Perception, SLAM, Planning, locomotion, Systems, Multi-robot; C3/C4/C6/C2 | `starter`→`mid` |
| **NVIDIA Jetson Thor / IGX Thor** (VLA-on-robot target) | Systems, SLAM, VLA; C5 Humanoid | `mid`→`flagship` |
| **Raspberry Pi 5 / Pi 4** (budget SBC) | Systems; C7 Underwater | `starter` |
| **MCU dev kits** — STM32 · ESP32 · Teensy · TI TM4C123 · Pi Pico | Systems (RTOS/micro-ROS), Micro, Soft | `starter` |
| **A100 / H100** (single node → cluster) — *universal training* | Learning/FM, sim-to-real, VLA, world-models — most niches | `mid` (few) → `flagship` (cluster) |
| **GB200 / Blackwell** node | frontier WFM & GPU-RL training; Sim, world-models | `flagship` |
| **EtherCAT master + CAN/CAN-FD + TSN NICs** (real-time buses) | Systems, control | `mid` |
| Real-time targets — **dSPACE / Speedgoat / NI** (HIL) | classical-MPC control | `flagship` |
| Neuromorphic — **Intel Loihi 2 / Kapoho Point · SynSense** (via Lava) | multimodal-fusion | `flagship` |
| Rad-hard flight compute — **BAE RAD750/5545 · HPSC PIC64** `⏱` | space, nuclear | `flagship` |
| Automotive AI SoCs — **NVIDIA DRIVE Thor/Orin · Qualcomm Snapdragon Ride · Mobileye EyeQ** (ASIL-D islands) | autonomous-vehicles | `flagship` |

## F. Simulation & software *(overwhelmingly open-source / low cost; GPU is the real spend)*
| Item | Needed by | Tier |
|---|---|---|
| **ROS 2** (+ ros2_control) — universal middleware | core — nearly all niches | `starter` |
| **NVIDIA Isaac Sim / Isaac Lab** — universal GPU sim | core — nearly all (needs RTX GPU) | `starter` |
| **Isaac ROS / NITROS** (cuVSLAM, cuMotion, Perceptor, nvblox, FoundationPose) | Perception, SLAM, Planning, Systems; C3 AMR, C2 MobMan | `starter` |
| **MuJoCo / MJX / MuJoCo Playground** — universal physics | control, locomotion, RL, sim-to-real, Manip, whole-body, world-models, Sim | `starter` |
| **Nav2** · **MoveIt 2** (+ Task Constructor) · **Gazebo** | Planning, Manip, HRI, Multi-robot, SLAM, Sim; C1/C2/C3 | `starter` |
| **PickNik MoveIt Pro** (commercial MoveIt) | calibration, Manip; C1/C2 | `mid` |
| **Genesis** (fast/differentiable) · **Drake** · **PyBullet** | Manip, locomotion, sim-to-real, Sim, Soft, world-models; C4/C8 | `starter` |
| **Newton** (NVIDIA + DeepMind + Disney differentiable engine) `⏱` | sim-to-real, Sim, whole-body; C4 Quad | `mid` |
| **Hugging Face LeRobot** (+ SmolVLA) — robot-learning/teleop hub | core — Learning/FM, VLA, Manip, most niches | `starter` |
| **openpi (π0/π0.5)** · **OpenVLA / OpenVLA-OFT** · **Octo** · **NVIDIA Isaac GR00T N1/N1.5** | VLA, calibration | `mid` |
| **MimicGen / DexMimicGen** (data generation) | imitation, calibration | `mid` |
| **NVIDIA Cosmos** (Predict/Transfer/Reason) — world-foundation-model / data engine | world-models, sim-to-real, VLA, Sim, calibration | `flagship` |
| RL libs — **RSL-RL · legged_gym · rl_games · Stable-Baselines3 · CleanRL · TorchRL · Gymnasium** | RL, locomotion, whole-body, sim-to-real | `starter` |
| Perception — **OpenCV · PCL · Open3D · COLMAP · nerfstudio** | Perception, SLAM, multimodal | `starter` |
| SLAM — **GTSAM · Ceres · g2o · OpenVINS · ORB-SLAM3 · FAST-LIO2 · KISS-ICP · Cartographer · RTAB-Map** | SLAM, multimodal | `starter` |
| **Kalibr** (multi-sensor calibration) | calibration, multimodal | `starter` |
| Control solvers — **acados · CasADi · OSQP · Pinocchio · Crocoddyl · OCS2 · TSID · TinyMPC** | control, whole-body, locomotion | `starter` |
| **MATLAB/Simulink** (control lingua franca; licensed) | control, Sim | `mid` |
| Embodied/AV sim — **CARLA · AI Habitat 3.0 · BEHAVIOR-1K / OmniGibson** | Planning, HRI, TAMP, SLAM, multimodal | `starter` |
| TAMP — **Fast Downward · PDDLStream · cuTAMP · Unified Planning · BehaviorTree.CPP + Groot2 · POMDPs.jl** | TAMP | `starter`→`mid` |
| Tactile sim — **TACTO · TacSL · Taccel · Taxim** | tactile | `mid` |
| Soft/co-design sim — **SOFA + SoftRobots · PyElastica · DiffPD-Taichi · SoftZoo · Evolution Gym · PlasticineLab · SoftGym** | Soft, Micro; C8 | `mid` |
| **COMSOL Multiphysics** (FEM/CFD; licensed) | Micro, Soft | `flagship` |
| MARL — **VMAS / BenchMARL · PettingZoo · RLlib · POGEMA** | Multi-robot | `starter`→`mid` |
| Fleet — **Open-RMF + VDA 5050** (+ MassRobotics AMR Interop) | Multi-robot; C3 AMR, C9 Swarm | `mid` |
| Verification — **KeYmaera X · SPIN · NuSMV · Z3 · Coq · CORA · α,β-CROWN · Marabou · NNV · PRISM · Storm · Scenic+VerifAI** | safety-verification | `mid` |
| MLOps — **MLflow · Weights & Biases · DVC/LakeFS · Kubeflow · Ray/Anyscale · Docker/Kubernetes · MCAP/Foxglove/Rerun** | calibration-MLOps, Systems, all training | `mid` |

## G. Datasets & benchmarks *(nearly all free / open)*
| Item | Needed by | Tier |
|---|---|---|
| **Open X-Embodiment (RT-X)** — cross-embodiment corpus | Learning/FM, VLA, Manip, imitation, sim-to-real, world-models, Sim, calibration | `starter` |
| **DROID** (teleop manipulation) | Manip, imitation, VLA, sim-to-real, world-models | `starter` |
| **AgiBot World (Colosseo)** (large teleop) | imitation, VLA, world-models | `mid` |
| **RoboMIND · LeRobot Hub datasets · RoboCasa365** | Learning/FM, VLA, calibration | `starter`→`mid` |
| Manip/sim eval — **RoboArena · SIMPLER · LIBERO · CALVIN · RLBench · Meta-World · ManiSkill · robosuite · RoboCasa** | Manip, imitation, VLA, sim-to-real, RL, Sim | `starter` |
| Grasp — **YCB object set (+ physical kit) · GraspNet-1Billion · ACRONYM · EGAD** | Manip | `starter` |
| RL/loco — **D4RL · OGBench · HumanoidBench · LocoMuJoCo · MuJoCo Playground** | RL, locomotion, whole-body | `starter` |
| Human-motion (retargeting) — **AMASS · LAFAN1 · PHUMA** (+ GMR retargeter) | locomotion, whole-body | `starter` |
| Perception — **COCO/LVIS · nuScenes · Waymo Open · KITTI(-360) · Argoverse 2 · BOP · ScanNet++ · Matterport3D · Occ3D** | Perception, multimodal | `starter` |
| SLAM — **EuRoC · TUM-RGBD/VI · Newer College · Hilti Challenge · M2DGR · 4Seasons** (+ `evo` tooling) | SLAM | `starter` |
| Tactile — **Sparsh TacBench · FoTa · TacQuad · VTDexManip · Tactile MNIST** | tactile | `mid` |
| Nav/social/VLN — **SCAND · MuSoHu · SocNavBench · Arena · R2R/RxR · VLN-CE · HM3D** | Planning, HRI | `starter` |
| MAPF/MARL — **POGEMA · MovingAI · VMAS/BenchMARL · SMACv2 · Melting Pot · GRACE** | Multi-robot | `starter` |
| World-models — **WorldModelBench · EWMBench · WorldArena · Ego4D** | world-models | `mid` |
| Safety — **VNN-COMP · Safety-Gymnasium · LIBERO-Safety · SafeOR-Gym** | safety-verification | `mid` |

## H. Vertical / environmental hardware (add-on kits, from vertical §5)
*Verticals mostly reuse the core lab (Groups A–G) plus a bolt-on environmental kit — they rarely need a bespoke lab. The recurring cross-vertical kits:*

| Kit | Needed by (verticals) | Tier |
|---|---|---|
| **Safety-rated laser scanners + light curtains** (SICK, Hokuyo, Pilz, Omron; Type 3/PLd) | logistics, manufacturing, HRI; C3 AMR | `mid` |
| **GNSS-RTK / PPK receivers** | agriculture, construction, autonomous-vehicles, aerial, mining, marine-surface | `mid` |
| **Multispectral / hyperspectral / thermal-IR cameras** | agriculture, inspection, defense, food-processing, oil-gas | `mid` |
| **Robotic total stations · ground-penetrating radar** | construction | `mid` |
| **IP-rated / IP69K washdown enclosures** (316L stainless, NSF-H1 lubricants; ISO 20653) | food-processing, agriculture, cold-logistics, construction, mining, marine | `mid` |
| **Ex-rated / explosion-proof enclosures** (Ex d/i/p; ATEX/IECEx) | mining, oil-gas, nuclear, inspection | `flagship` |
| **NDT payloads** — UT/PAUT, dry-coupled EMAT, eddy-current, ACFM, high-temp UT | inspection, oil-gas | `mid`→`flagship` |
| **Gas sensors / OGI methane cameras** (catalytic-bead, IR, PID, H₂S) | oil-gas, inspection | `mid` |
| **EO/IR gimbals · SAR · RF/SIGINT · anti-jam GNSS (M-code/CRPA) · MANET datalinks** | defense, aerial | `flagship` |
| **Sonar (multibeam/side-scan/sub-bottom) + DVL + USBL/LBL** (Sonardyne, Exail/iXblue, Water Linked, Nortek, Teledyne RDI) | marine, oil-gas subsea | `flagship` |
| **Rad-hardened actuators/cameras/compute + master–slave servo-manipulators** (e.g. Wälischmiller Telbot) | nuclear, space | `flagship` |
| **Surgical rig** — RCM mechanisms, cable/tendon-driven wristed micro-instruments, stereo-endoscope, EM/optical nav, autoclavable/biocompatible builds | healthcare-surgical; C8 Soft-continuum | `flagship` |
| **Micro/nano rig** — EM coil systems (Helmholtz/Maxwell, ETH OctoMag, MagnebotiX MFG-100) + Nanoscribe two-photon printer + COMSOL | micro-nano | `flagship` |
| **Soft-robotics fab** — multi-material printer (Stratasys PolyJet), silicone casting (Smooth-On Ecoflex/Dragon Skin), pneumatic control boards (Festo), DEA HV supplies | soft-robotics; C8 | `mid`→`flagship` |

---

# Part 2 — Lab Tiering

Three build tiers. Each is cumulative (Mid = Entry + additions; Flagship = Mid + additions). Cost signals are **relative** — no dollar figures fabricated. Software in every tier is overwhelmingly open-source; **GPU and frontier robots are where money goes.**

## Entry Lab — cost signal: **LOW** `~`
**Covers:** the common core (ROS 2 middleware, perception, basic manipulation & navigation, robot-learning fundamentals, simulation) + foundational niches — computer-vision-3D, motion-planning/nav, SLAM, middleware, manipulation basics, intro RL/IL, simulation-digital-twins.

**Indicative kit**
- **Arm:** 1× cobot — UR5e **or** Franka FR3 (or budget SO-101 / xArm for a pure-learning lab) + Robotiq 2F-85 gripper (+ suction).
- **Sensing:** 1× Intel RealSense D435/D455; 1× budget LiDAR (RPLIDAR or Livox Mid-360); an IMU.
- **Mobility:** 1× TurtleBot 4 (± iRobot Create 3 / AgileX).
- **Compute:** 1× RTX 4090 / A6000 workstation + 1× Jetson Orin Nano/NX (edge) + MCU dev kits (STM32/ESP32).
- **Software (all free):** ROS 2 + Nav2 + MoveIt 2 + ros2_control; Isaac Sim/Lab; MuJoCo/MJX + Playground; Gazebo; Drake; PyBullet; LeRobot; Isaac ROS.
- **Data/benchmarks (free):** Open X-Embodiment, DROID, YCB physical kit, COCO/KITTI, LIBERO/SIMPLER/Meta-World.

**Unlocks:** the "common core" every candidate needs, plus hands-on labs for ~10 capability niches — with no frontier spend.

## Mid Lab — cost signal: **MEDIUM** `~`
**Adds:** dexterous manipulation, tactile/force sensing, bimanual teleop data collection, a legged/upgraded mobile base, a single training GPU, and VLA + data-generation stacks.

**Indicative additions to Entry**
- **Dexterity:** LEAP Hand (budget) or Allegro Hand.
- **Tactile/force:** GelSight Mini + Meta DIGIT/DIGIT 360 + ATI or Bota 6-axis F/T.
- **Teleop rig:** Trossen ViperX / ALOHA 2 (or GELLO leaders) + UMI handheld collector; optional VR (Meta Quest).
- **Mobility upgrade:** Clearpath Jackal/Husky **or** a Unitree Go2 quadruped.
- **3D vision:** Ouster OS1 LiDAR + Zivid/Photoneo industrial 3D (bin-picking).
- **Training:** 1× A100/H100 node + Jetson Thor (VLA-on-robot) + MLOps (W&B/MLflow, DVC, MCAP/Foxglove).
- **Stacks:** openpi / OpenVLA / GR00T N1; MimicGen/DexMimicGen; Newton; PickNik MoveIt Pro.
- **Safety:** SICK microScan3 scanner for collaborative-cell / HRI labs.
- **± one vertical add-on kit** as the program's focus dictates (e.g. GNSS-RTK for field robotics, or an IP69K washdown enclosure).

**Unlocks:** dexterous & contact-rich manipulation, tactile-foundation-model work, imitation-learning data pipelines, VLA fine-tuning, real-robot sim-to-real on a quadruped, MLOps/integration niches, and HRI safety.

## Flagship Lab — cost signal: **HIGH** `~`
**Frontier:** a humanoid and/or premium quadruped, a multi-GPU training cluster, premium dexterous hands, full teleop + motion capture, and specialized domain rigs.

**Indicative additions to Mid**
- **Frontier platform(s):** a humanoid (Unitree G1/H1, Fourier GR-1) **and/or** a premium quadruped (Boston Dynamics Spot + Arm, ANYbotics ANYmal D/X).
- **Premium hands:** Shadow Dexterous Hand + Allegro (multi-fingered in-hand).
- **Full teleop & capture:** ALOHA 2 + Mobile ALOHA + Apple Vision Pro/Quest + DexCap gloves; OptiTrack/Vicon mocap volume.
- **Training:** multi-node H100 / GB200 (Blackwell) cluster for VLA pretraining + world-foundation-model training (NVIDIA Cosmos) + full Omniverse digital twin.
- **Advanced sensing:** Prophesee/iniVation event cameras; premium F/T; neuromorphic (Intel Loihi 2) or real-time control targets (dSPACE/Speedgoat) if control-focused.
- **Domain rigs (per mandate):** EM-coil microrobotics bench + Nanoscribe (micro/nano); SOFA + multi-material printer (soft); Ex-rated / rad-hard / NDT / sonar kits (hazardous, marine, nuclear, space); surgical RCM rig (healthcare).

**Unlocks:** whole-body / loco-manipulation, humanoid foundation models, frontier sim-to-real, world models, and the safety-critical vertical specializations — the top ~5–8 niches that genuinely require frontier hardware.

> **Sequencing note:** ~80% of the 23 capability niches are exercisable at Entry/Mid. Flagship spend is justified only for the frontier learning niches (VLA, world-models, whole-body, sim-to-real at scale) and the critical verticals. Verticals almost never need their own lab — budget them as **Group H bolt-on kits** on top of an Entry/Mid core.

---

# Part 3 — Partnership Targets

Deduplicated across all niches, grouped, each with a one-line "why / what it unlocks."

## Hardware vendors
| Partner | Why / what it unlocks |
|---|---|
| **Universal Robots** (+ UR Academy) | #1 cobot share; the accessible collaborative arm + IACET/CEU training pathway. |
| **Franka Robotics** | The research-default torque-controlled arm (FR3/Panda) across manipulation/learning niches. |
| **KUKA · ABB · FANUC · Yaskawa** ("Big Four") + vendor academies | Industrial arms + cobots; the manufacturing/food-processing platform base and installed-base credibility. |
| **Kinova · Flexiv · Techman · Doosan · JAKA** | Research and force-control arm diversity for manipulation/whole-body labs. |
| **Trossen Robotics** | ALOHA/ViperX bimanual teleop rigs — the imitation-learning data-collection standard. |
| **Unitree** | The accessible quadruped (Go2) and humanoid (G1) — highest-leverage single vendor for legged learning. |
| **Boston Dynamics / RAI Institute · ANYbotics · Agility Robotics · Fourier · Booster · DEEP Robotics · Ghost Robotics** | Premium/industrial quadrupeds & humanoids; inspection, Ex-certified and defense platforms. |
| **Robotiq · Schunk · OnRobot** | Grippers, F/T and EOAT — the manipulation end-of-arm ecosystem. |
| **Shadow Robot · (Allegro/Wonik) · LEAP Hand community** | Dexterous multi-fingered hands for in-hand manipulation. |
| **GelSight Inc. · Meta (DIGIT) · Bristol Robotics Lab (TacTip) · Bota Systems · ATI · DAIMON** | Vision-based tactile + 6-axis F/T — the touch-sensing supply base. |
| **Intel RealSense · Stereolabs · Luxonis · Zivid · Photoneo · Basler/FLIR** | Depth/stereo/industrial-3D cameras — the perception front-end. |
| **Ouster · Velodyne · Livox · Hesai · Texas Instruments (mmWave) · Prophesee · iniVation** | LiDAR, radar and event cameras for 3D perception and SLAM. |
| **Xsens/Movella · VectorNav · u-blox · OptiTrack · Vicon** | IMU/GNSS + motion-capture ground-truth for state estimation and control. |
| **SICK · Pilz · Keyence · Hokuyo · Omron** | Safety-rated scanners, light curtains and safety PLCs — the functional-safety hardware layer for HRI/AMR. |
| **Clearpath · AgileX · iRobot · Bitcraze · Segway (Nova Carter) · Hello Robot · PAL · NEURA · Robotnik** | Mobile bases, nano-quad swarm units, and mobile manipulators. |
| **Blue Robotics · Saab Seaeye · Kongsberg · Teledyne Marine · Reach Robotics · Sonardyne · Exail/iXblue · Water Linked** | Underwater ROV/AUV platforms, manipulators and acoustic navigation. |
| **Auterion · ModalAI · Holybro · ARK Electronics · Skydio · DJI** | Drone autopilots, onboard compute and enterprise airframes. |
| **Festo · Soft Robotics Inc. · Piab · Smooth-On · Stratasys · Parker · Artimus Robotics** | Soft grippers, pneumatics, silicones and multi-material printing for soft/continuum work. |
| **Nanoscribe/BICO · MagnebotiX · NanoFlex · Bionaut Labs · Physik Instrumente** | Two-photon fabrication + EM navigation for micro/nano robotics. |
| **Quanser · dSPACE · Speedgoat · NI · MathWorks** | Control-education kits, HIL real-time targets and MATLAB/Simulink tooling. |
| **NVIDIA · ARM · NXP/STMicro/Espressif · Qualcomm · BlackBerry QNX · Wind River** | Edge silicon (Jetson) and safety-certifiable RTOS for embedded/real-time. |

## Sim / compute providers
| Partner | Why / what it unlocks |
|---|---|
| **NVIDIA** (Isaac Sim/Lab, Isaac ROS, Omniverse, Cosmos, GR00T/GEAR, Newton, Jetson, **DLI**, **Inception**, OSMO) | The anchor of the entire stack — sim, GPU perception, VLA/world-foundation models, edge, training curriculum, and a startup program. |
| **Google DeepMind** | MuJoCo/MJX + Playground (open physics), Genie (world models), Gemini Robotics — the open-simulation backbone. |
| **Meta AI / FAIR** | AI Habitat (embodied nav/HRI), DINO/SAM (perception), DIGIT/Sparsh/TACTO (tactile), V-JEPA (world models), VMAS (MARL) — huge open-model/hardware contributor. |
| **Genesis AI · Disney Research** | Differentiable/fast simulation (Genesis; Newton co-development). |
| **Wayve · World Labs** | Driving world models (GAIA) and spatial-intelligence world models (Marble). |
| **Weights & Biases · Databricks (MLflow) · Anyscale (Ray)** | Experiment tracking, MLOps and distributed training substrate. |
| **AWS · Google Cloud · (CoreWeave-class GPU clouds)** | Burst GPU capacity for A100/H100/GB200 training without owning a cluster. |
| **CARLA** | Open autonomous-driving simulator for perception/planning/SLAM labs. |

## Academic labs (research pipeline + curriculum credibility)
| Cluster / lab | Why / what it unlocks |
|---|---|
| **CMU RI** (+ MRSD, HCII, LeCAR) | Broadest robotics powerhouse — systems integration, manipulation, planning, HRI, locomotion. |
| **Stanford** (ASL · IRIS/ILIAD · IPRL · SISL) | Manipulation (ALOHA/diffusion policy), imitation, VLA, decision-making, mobile manipulation. |
| **UC Berkeley** (RAIL/BAIR · AUTOLAB · Hybrid Robotics) | Robot learning / RL / VLA epicenter (Levine, Abbeel) + grasping (Goldberg) + legged (Sreenath). |
| **MIT** (CSAIL/RLG · LIS · Improbable AI · Biomimetics · Distributed Robotics · SPARK) | Control & simulation (Drake/Tedrake), TAMP (Kaelbling/Lozano-Pérez), legged (Kim), swarm (Rus), SLAM (Carlone), GelSight. |
| **ETH Zurich** (RSL · ASL · CVG · MSRL · SRL) | The legged sim-to-real reference (Hutter/ANYmal), mobile SLAM (Siegwart), perception (Pollefeys), micro-robotics (Nelson), soft (Katzschmann). |
| **UPenn GRASP** (+ PRECISE) | Aerial swarms & multi-robot (Kumar/Hsieh), perception (Daniilidis), real-time/F1TENTH (Mangharam). |
| **UZH RPG** (Scaramuzza) | Event cameras, agile flight and VIO — the vision-fusion/aerial reference. |
| **Georgia Tech** (Robotarium · GTSAM · RAIL) | Remote-access swarm testbed, factor-graph SLAM libraries, and HRI (Chernova). |
| **U Michigan · TUM · Caltech · Oregon State · EPFL** | SLAM/legged (Ghaffari, Grizzle), verification/CVG (Althoff, Cremers), CBFs/aerial (Ames, Chung), legged (Hurst), soft/bio & micro (LASA, BioRob, MICROBS). |
| **Harvard (Wyss) · Max Planck IS · Bristol Robotics Lab** | Soft/micro/bio-inspired robotics, haptics (Kuchenbecker), tactile (Lepora), swarm (Nagpal). |
| **University of Alberta (RLAI/AMII) · U York (AAIP)** | RL foundations (Sutton) and safety-assurance methodology (AMLAS). |
| **WHOI · MBARI · NTNU AMOS · IHMC** | Marine-robotics field labs and humanoid balance/control heritage. |

## Open-source communities
| Community | Why / what it unlocks |
|---|---|
| **Open Robotics / OSRA** | Stewards of ROS 2, ros2_control, Gazebo, Nav2, Open-RMF — the entire middleware substrate. |
| **Hugging Face LeRobot** | The robot-learning data & model hub (58k+ datasets) + SmolVLA — the training on-ramp. |
| **Open X-Embodiment consortium** (22 labs) · **DROID consortium** | Shared cross-embodiment datasets that anchor VLA/foundation-model work. |
| **Physical Intelligence openpi** | Open π0/π0.5 VLA weights and training code. |
| **MuJoCo / Menagerie / Playground · Isaac Lab / legged_gym / rsl_rl** | Open physics + legged-RL reference stacks (the sim-to-real ladder). |
| **Farama Foundation** (Gymnasium, PettingZoo, D4RL/Minari) | Canonical RL/MARL environment APIs and offline datasets. |
| **GTSAM · Ceres · OpenVINS · ORB-SLAM · FAST-LIO · KISS-ICP · nerfstudio** | The open SLAM/state-estimation toolchain. |
| **OpenCV · Open3D · PCL · COLMAP** | The open perception/3D toolchain. |
| **Eclipse Foundation (Zenoh, iceoryx, Cyclone DDS) · eProsima (Fast DDS) · micro-ROS** | Real-time middleware transports and MCU-class ROS. |
| **Pinocchio / Stack-of-Tasks · Crocoddyl · OCS2 · Drake · acados / CasADi** | Open rigid-body dynamics and optimal-control solvers. |
| **INRIA SOFA/SoftRobots · Harvard Soft Robotics Toolkit · PyElastica · Open Continuum Robotics Project** | Soft/continuum simulation and reference designs. |
| **VMAS/BenchMARL · POGEMA · Crazyswarm2 / Aerostack2** | MARL, MAPF and aerial-swarm coordination stacks. |
| **Verified-Intelligence (α,β-CROWN) · PRISM/Storm · Scenic/VerifAI · KeYmaera X · CORA · PKU-Alignment** | The neural-network & hybrid-system verification ecosystem. |
| **PX4 / ArduPilot / ArduSub · Autoware Foundation** | Open autopilot firmware and the open AV stack. |
| **Kalibr · Foxglove / Rerun / MCAP · Open Neuromorphic (Lava)** | Calibration, robot-data visualization/logging, and neuromorphic tooling. |

## Industry programs
| Program | Why / what it unlocks |
|---|---|
| **NVIDIA Inception + DLI** | Startup credits/compute + a ready-made deep-learning-for-robotics training curriculum. |
| **Physical Intelligence** | Frontier VLA (π0) research collaboration and open weights. |
| **Google DeepMind · Meta FAIR** | Frontier models (Gemini Robotics, world models) and open tooling. |
| **Toyota Research Institute** | Diffusion Policy / Large Behavior Models — manipulation learning at scale. |
| **Boston Dynamics AI Institute (RAI)** | Frontier legged/whole-body research. |
| **Amazon Robotics (DeepFleet)** | Warehouse multi-robot orchestration at hundreds-of-thousands scale — deployment credibility. |
| **Humanoid players — Figure · 1X · Agility · Tesla Optimus · Sanctuary · Apptronik · Booster · AgiBot** | Frontier data/deployment partners and hiring destinations for whole-body/VLA graduates. |
| **Intrinsic (Alphabet — Flowstate) · ROS-Industrial (SwRI)** | Industrial-integration tooling and the ROS-Industrial ecosystem. |
| **Vendor academies** — UR Academy, FANUC/KUKA/ABB, ETHx "Microrobotics" MOOC | Certifiable operator/integrator training that maps directly to eligibility credentials. |
| **DIU Blue UAS · DARPA (OFFSET/Gremlins heritage)** | Defense-drone/swarm accreditation and program funding paths. |

## Standards / certification bodies
| Body / standard | Why / what it unlocks (applied envelope) |
|---|---|
| **ISO 10218-1/2 + ISO/TS 15066** | The universal industrial-robot / cobot force-&-power-limiting safety envelope — applies wherever a policy drives real hardware. |
| **ISO 13482** | Personal-care / service-robot safety (domestic, assistive, humanoid). |
| **ISO 9283** | Manipulator pose accuracy/repeatability — the calibration-validation benchmark. |
| **ISO 3691-4 · ANSI/RIA R15.08 · VDA 5050 · MassRobotics AMR Interop** | Driverless industrial trucks / mobile-robot safety + fleet interoperability. |
| **ISO 26262 · ISO 21448 (SOTIF) · ISO/PAS 8800 · UL 4600** | Automotive functional safety + AI/autonomy safety cases (AV, ADAS). |
| **IEC 61508 · IEC 62443 · IEC 62061/60204** | Cross-industry functional safety and OT-security baselines. |
| **DO-178C / DO-330** (RTCA / EUROCAE) | Airborne-software certification (aerial, defense flight control). |
| **FDA 510(k)/PMA · IEC 60601 · IEC 62304 · ISO 13485** | Medical-device and surgical-robot clearance and quality systems. |
| **FAA Part 107 / BVLOS · EASA** | Drone airworthiness and operations authorization. |
| **ATEX / IECEx** | Explosion-protected equipment for mining, oil-&-gas and hazmat. |
| **IP / IP69K (ISO 20653) · MIL-STD-810H/461G** | Ingress protection / washdown and defense ruggedization qualification. |
| **IMCA · NORSOK · DNV** | Marine ROV classing and offshore operational standards. |
| **NDAA compliance** | Covered-foreign-parts exclusion — the gating supply-chain rule for defense. |
| **AEC-Q100 · ISO 16750** | Automotive silicon and electrical/environmental qualification. |
| **IEEE (CSS · RAS TCs · RTSS/RTAS · Haptics) · IFAC · OMG (DDS) · Alliance for OpenUSD · ISO 23247** | The professional societies, real-time/DDS specs and digital-twin/USD interoperability that define the field's venues and formats. |
| **A3/RIA (R15.06, Certified Robot Integrator) · TÜV SÜD/Rheinland · exida (CFSE/CFSP) · University of York AMLAS** | Personnel & integrator certification and assurance-case methodology — the human-credential side of eligibility. |
| **OSRA (Open Source Robotics Alliance)** | Governance body for ROS 2 / Open-RMF — the open-standard substrate. |

---

*Provenance: synthesized from Phase-1 §9/§10 (23 capability profiles), §5 (16 vertical overlays), §6/§8 (10 platform bundles). Inherits Phase-1 confidence tags — `~` to-verify, `⏱` trending (stamped mid-2026). Tier tags are inferred relative-cost signals; **re-verify products, prices and vendor status before publish.** Cross-references: Phase-2 eligibility matrix and common-core-vs-specialization deliverables; Phase-1 `_grounding-reference.md`.*
