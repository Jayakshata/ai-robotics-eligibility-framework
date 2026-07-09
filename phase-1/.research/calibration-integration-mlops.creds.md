# Research — Credentials & Subjects: **Calibration, Systems Integration & Robot-Learning Infrastructure** (A10)

> Niche-specific supplement to `phase-1/_grounding-reference.md` (Axis A cluster **A10**). Scope: sensor/actuator & **hand-eye calibration**, **systems integration & bring-up**, and **robot-learning data infrastructure / MLOps**. Does **not** re-derive the shared valued-degree tiers, canonical subjects, or duration model — only what is *specific* here. This is a **two-headed niche**: a hardware-facing *integration/calibration* head and a software/data-facing *infrastructure/MLOps* head; strong engineers span both, but programs/credentials cleanly split. Sources favor 2024–2026 + stable syllabi; URLs inline. `✓` grounded · `~` re-verify.

---

## 1. Strongest University Programs (named courses that make them strong for THIS niche) `✓`

Unlike theory niches, this one rewards **systems-development / integration project courses** and **ML-systems (not ML-theory) courses**. Split by head:

### A. Integration, calibration & bring-up (hardware-facing)
- **CMU — MSc Robotic Systems Development (MRSD)** is *the* flagship: the program is literally systems-integration. Required spine **16-681 / 16-682 MRSD Project I & II** (two-semester team build: requirements → system spec → sensor/IO interfacing, motor control, test-plan development, integration, results analysis) plus **16-662 Robot Autonomy**, **16-665 Robot Mobility**, **16-720/16-820 Computer Vision** (camera calibration), a mandatory internship, and **16-697/16-698 Robotics Business** — the only major program built end-to-end around *bring-up and product integration*. `✓` [[curriculum](https://mrsd.ri.cmu.edu/curriculum/)] [[handbook 24-25](https://www.ri.cmu.edu/app/uploads/2024/09/MRSD-Handbook-2024-25.pdf)]
- **U-Michigan Robotics — ROB 550 "Robotic Systems Laboratory"** (BotLab + ArmLab): hands-on bring-up of a full stack — encoders/IMU, PID, kinematics, calibration, SLAM, object detection — the canonical integration lab. `✓` [[docs](https://rob550-docs.github.io/)] [[bulletin](https://bulletin.engin.umich.edu/courses/robotics-courses/)]
- **UPenn — MEAM 510/5100 "Design of Mechatronic Systems"** (mechanical+analog/digital+sensing+actuation+microcontroller **system integration**); GRASP integration labs. `✓` [[MEAM510](https://medesign.seas.upenn.edu/index.php/Courses/MEAM510-11C)]
- **WPI Robotics Engineering** — the "Unified Robotics" ME+EE+CS sequence + system-integration capstone is the undergrad archetype for this niche.
- **Sensor/calibration depth is embedded, not standalone:** CMU **16-722 Sensing & Sensors** (transducers, noise, imaging), Columbia **First Principles of Computer Vision** (Nayar) with a dedicated **Camera Calibration** module/monograph (FPCV-4-1) — intrinsics/extrinsics, projection matrices, Zhang's method. `✓` [[FPCV](https://fpcv.cs.columbia.edu/)] [[calib monograph](https://cave.cs.columbia.edu/Statics/monographs/Camera%20Calibration%20FPCV-4-1.pdf)]

### B. Robot-learning data infrastructure & MLOps (software-facing)
| Tier | Program / Course | Why it's the niche signal |
|------|------------------|---------------------------|
| **World-leading** | **CMU — 17-645/17-445 "Machine Learning in Production" (MLIP)** (Kästner) | Full ML-system lifecycle: build/deploy/assure/maintain, MLOps, pipelines, testing, monitoring; open MIT-Press textbook. `✓` [[site](https://mlip-cmu.github.io/)] |
| **World-leading** | **Stanford — CS 329S "Machine Learning Systems Design"** (Chip Huyen) | Data pipelines, model deployment, scaling, monitoring; basis of *Designing ML Systems* (O'Reilly). `✓` [[syllabus](https://stanford-cs329s.github.io/syllabus.html)] |
| **Strong** | **CMU — 10-605 "ML with Large Datasets"** & **10-414/714 "Deep Learning Systems"** (Tianqi Chen/Kolter) | Distributed/parallel training, Spark, low-latency inference; building a DL framework + hardware acceleration from scratch. `✓` [[10-605](https://10605.github.io/)] [[dlsys](https://dlsyscourse.org/)] |
| **Strong** | **UC Berkeley — Full Stack Deep Learning** (Tobin/Karayev/Abbeel) | End-to-end ML engineering: infra, tooling, data management, deployment, monitoring — the applied ML-platform reference. `✓` [[site](https://fullstackdeeplearning.com/)] |
| **Strong (edge)** | **MIT — 6.5940 "TinyML & Efficient Deep Learning Computing"** (Song Han) | Quantization/pruning/compilation for on-robot deployment — the embedded-inference infra layer. `✓` [[course](https://hanlab.mit.edu/courses/2024-fall-65940)] |

**Undergrad note:** the niche is taught mainly at MS level; undergrad strength = a **CS/software-engineering + systems** spine (databases, distributed systems, OS, cloud) **plus** a hands-on integration capstone (WPI/Michigan ROB 550/CMU/GT). Georgia Tech OMSCS and strong SWE programs feed the MLOps head well.

---

## 2. Most-valued Certifications & MOOCs (niche-specific) `✓`

**Infrastructure / MLOps head:**
1. **Made With ML** (Anyscale / Goku Mohandas) — the on-target MLOps course: end-to-end system wiring **tracking, testing, serving, orchestration, monitoring**, local-laptop → distributed (Ray) cluster. Free content. `✓` [[link](https://madewithml.com/)]
2. **DeepLearning.AI — "Machine Learning in Production"** (Ng/Crowe) — the surviving standalone Course 1 (the full 4-course *MLOps Specialization* enrollment **closed May 2024**, courses 3–4 removed — per grounding ref). `✓` [[link](https://www.coursera.org/learn/introduction-to-machine-learning-in-production)]
3. **Google Cloud — Professional ML Engineer** (heavy MLOps/pipelines) and **AWS — Certified Machine Learning Engineer – Associate (MLA-C01)** (data ingestion/transform, deployment infra, **CI/CD for ML**) — the two blue-chip cloud MLOps certs. `✓` [[GCP](https://cloud.google.com/learn/certification/machine-learning-engineer)] [[AWS MLA-C01](https://aws.amazon.com/certification/certified-machine-learning-engineer-associate/)]
4. **Databricks — ML Associate / ML Professional** (SparkML pipelines, distributed training, **MLflow** model registry/monitoring). `✓` [[Assoc](https://www.databricks.com/learn/certification/machine-learning-associate)]
5. **Hugging Face — Robot Learning Course (LeRobot)** — the robotics-specific data/training/deploy MOOC: LeRobotDataset, imitation/VLA policies, real-robot deploy. `✓` [[course](https://huggingface.co/learn/robotics-course/en/unit0/1)] [[repo](https://github.com/huggingface/lerobot)]

**Integration / calibration head:**
6. **ROS-Industrial Developers Training** (SwRI) — factory-floor ROS 2 integration, `ros2_control`, MoveIt2 on real manipulators — the applied bring-up credential. `✓` [[training](https://rosindustrial.org/training)]
7. **NVIDIA Isaac ROS / DLI** — GPU-accelerated perception, hardware bring-up, deployment on Jetson; **PickNik MoveIt Pro** as the professional integration runtime. `✓` [[Isaac ROS](https://developer.nvidia.com/isaac/ros)]
8. **Toolchain "credentials" (learn-by-doing, no exam):** **OpenCV** `calibrateCamera` (Zhang) + `calibrateHandEye` (Tsai/Park/Horaud/Daniilidis), **Kalibr** (camera-IMU spatio-temporal calibration, ethz-asl), **MoveIt Calibration** (eye-in-hand / eye-to-hand). `✓` [[Kalibr](https://github.com/ethz-asl/kalibr/wiki/camera-imu-calibration)] [[MoveIt Calib](https://moveit.ai/moveit/ros/2020/08/26/moveit-calibration.html)]

*(Weak/irrelevant for this niche: Modern Robotics — kinematics/control theory, no integration or infra content.)*

---

## 3. Explicit Subject List (grounded in syllabi; representative courses annotated) `✓`

**Foundational maths & CS**
- Linear algebra; probability & optimization (nonlinear least-squares for calibration) *(FPCV, 16-722)*
- **Software engineering rigor** — version control, testing, CI/CD, packaging *(MLIP, Made With ML)* — the load-bearing base here
- **Distributed systems, databases, OS, cloud computing** *(10-605, CS 329S)*
- **Python + C++**, containerization (Docker/K8s)

**Core robotics**
- Rigid-body transforms, coordinate frames / **tf2**, robot kinematics *(ROB 550, MRSD)*
- Sensors & sensor models (camera/LiDAR/IMU/encoders/F-T); signals, timing *(16-722)*
- **ROS 2** middleware, `ros2_control`, DDS, real-time comms *(ROS-Industrial, Isaac ROS)*
- Embedded / edge deployment & efficient inference *(MIT 6.5940)*

**Niche-specific — the two cores**
- *Calibration:* **camera intrinsic calibration (Zhang)**; lens distortion; **hand-eye calibration (AX=XB, Tsai-Lenz)** eye-in-hand vs eye-to-hand; **robot-world / AX=YB**; **camera-IMU spatio-temporal calibration & time-sync** (Kalibr); **kinematic / DH-parameter robot calibration**; multi-sensor **extrinsic registration**; IMU noise / Allan-variance; calibration-target design & uncertainty *(FPCV, Kalibr, MoveIt Calib, MathWorks)*
- *Systems integration & bring-up:* **requirements → system spec → test-plan** (V-model); sensor/IO interfacing, motor control; end-to-end integration & validation; failure/fault diagnosis *(MRSD 16-681/682, ROB 550)*
- *Data infrastructure:* robot **data formats & pipelines** — **RLDS/TFDS, LeRobotDataset v3, HDF5, rosbag2/MCAP** (Foxglove); dataset curation/versioning (**DVC/LakeFS**); data validation *(HF LeRobot, CS 329S)*
- *MLOps:* **experiment tracking (Weights & Biases, MLflow)**, orchestration (**Kubeflow, Ray, Airflow/Dagster, Metaflow**), model registry, serving, **monitoring & drift**, CI/CD for ML *(MLIP, Made With ML, Databricks)*

**Frontier / advanced**
- **Robot data flywheels & cross-embodiment datasets** — **Open X-Embodiment / RT-X**, LeRobot Hub, InternData; real+sim+distilled data mixing *(OXE)* [[OXE](https://arxiv.org/abs/2310.08864)]
- **Large-scale distributed VLA/foundation-model training infra** — **Ray/Anyscale** streaming data + `Ray Train` DDP; **NVIDIA OSMO** orchestration; thousand-GPU embodied pipelines (GR00T N1) *(Anyscale VLA, GR00T)* [[Ray-VLA](https://www.anyscale.com/blog/vision-language-action-pipelines-vla-robotics-ray-anyscale)] [[GR00T](https://arxiv.org/pdf/2503.14734)]
- **Robot dataset management systems** — Robo-DM, efficient large-trajectory storage/streaming *(Robo-DM)* [[paper](https://arxiv.org/html/2505.15558v1)]
- **Learned / self- / differentiable calibration** (Gaussian-process, online auto-calibration); target-less extrinsic calibration
- **Fleet learning / cloud robotics**, continuous eval harnesses, sim-in-the-loop CI, RL/RLHF infrastructure for robotics

---

## 4. Niche-specific Eligibility Adjustment (vs. the general set) `✓`

This niche is defined by **engineering breadth and systems glue over deep theory** — the value is in shipping and integrating, not deriving.

**Rises in value**
- **Computer Science / Software Engineering → strongest single fit for the infra/MLOps head.** The most software-engineering-heavy A-niche: distributed systems, databases, cloud, DevOps/SRE, CI/CD, data engineering *are* the core. `✓`
- **Computer Engineering / EE/ECE → strongest for the calibration/bring-up head** (embedded, real-time, sensor interfacing, timing/synchronization, signals). `✓`
- **Robotics Engineering / Mechatronics → rise** — the discipline of integrating mechanical+electrical+software+sensing; systems-integration project courses (WPI Unified Robotics, MRSD Project, ROB 550) are the differentiator. `✓`
- **Systems / Industrial Engineering → newly relevant (near-unique to A10):** requirements engineering, V-model, integration & test — valued here, marginal elsewhere. `✓`
- **DevOps / SRE / Data-Engineering *professional* backgrounds → become first-class feeders** — unusual for a robotics niche; a data-platform engineer converts directly to the MLOps head. `✓`

**Falls / less central**
- **Pure Applied Mathematics / Physics / theoretical-ML profiles → fall** relative to their value in estimation/control/learning niches — deep theory is not the bottleneck; integration and reliable pipelines are. Still qualify, but **not differentiating**. `✓`
- Narrow single-domain specialists (pure control, pure perception) are **less central than generalist integrators**.

**Net rule:** weight transcripts toward **software engineering + systems (distributed/cloud/embedded)** and **a hands-on integration/bring-up project OR a data-pipeline/MLOps project**; treat **CS/SWE, Computer-Eng/EE, Robotics/Mechatronics, and (uniquely) Systems-Eng + DevOps/data-eng backgrounds** as first-class feeders alongside general Robotics/CS.

---
*Sources: program/course pages linked inline — CMU MRSD (curriculum + 2024-25 handbook), CMU MLIP (mlip-cmu), 10-605, dlsyscourse, Stanford CS 329S, Michigan ROB 550, Penn MEAM 510, Columbia FPCV, MIT 6.5940, Full Stack Deep Learning; certs — Made With ML, DeepLearning.AI MLIP, Google Cloud PMLE, AWS MLA-C01, Databricks, HF LeRobot course, ROS-Industrial/SwRI, NVIDIA Isaac ROS; toolchains — OpenCV calib3d, Kalibr (ethz-asl), MoveIt Calibration, MathWorks hand-eye; data/infra — Open X-Embodiment (arXiv 2310.08864), LeRobot, RLDS/roboticscenter format guide, Robo-DM (arXiv 2505.15558), Anyscale Ray-VLA, GR00T N1 (arXiv 2503.14734), thousand-GPU embodied infra (arXiv 2603.11101). Re-verify time-sensitive frontier items (LeRobot/OXE versions, OSMO, cloud-cert exam codes) at publish.*
</content>
</invoke>
