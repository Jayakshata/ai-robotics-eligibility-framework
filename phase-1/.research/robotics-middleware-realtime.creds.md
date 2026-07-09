# Research — Credentials & Subjects: Robotics Middleware, Embedded & Real-Time Systems

> Niche-specific supplement to `phase-1/_grounding-reference.md` (Axis A cluster **A10**). Scope: ROS/ROS 2 & middleware · DDS pub/sub · real-time systems (RTOS, scheduling, PREEMPT_RT) · embedded/edge robotics · on-robot / edge-AI inference. Does **not** re-derive the shared valued-degree tiers, canonical subjects, or duration model. Sources favor 2024–2026 + stable syllabi; URLs inline. `✓` grounded · `~` verify at publish.

**Headline signal:** A10 is the most **software-/systems-engineering-native** niche in Axis A. Its center of gravity is **Computer Engineering / ECE embedded + real-time + computer-architecture + OS coursework** and **dedicated Embedded-Systems MSc programs** — *not* a generic "Robotics" degree. The home turf is CompE/EE/systems-CS, and it is one of the few niches where a strong self-taught embedded-Linux/RTOS engineer is a first-class feeder. This shifts both the program list and the eligibility weighting versus the shared backbone.

---

## 1. Strongest programs for THIS niche (named courses)

### Undergraduate
Strength comes from a named **embedded + real-time + computer-architecture + OS** sequence in a CompE/ECE core, not the robotics-major brand:
- **UC Berkeley — `EECS 149/249A Introduction to Embedded Systems`** (Lee & Seshia): the reference cyber-physical-systems course — models of computation, timing, concurrency, real-time scheduling; their MIT-Press text *Introduction to Embedded Systems: A Cyber-Physical Systems Approach* is the field standard (adopted at ~300 institutions). [[ptolemy.berkeley.edu](https://ptolemy.berkeley.edu/projects/chess/eecs149/)]
- **CMU — `18-349 Introduction to Embedded Systems` (undergrad)** (Narasimhan): ARM/embedded processor architecture, RTOS, real-time/resource/memory management, robot targets. [[course.ece.cmu.edu](https://course.ece.cmu.edu/~ee349/)]
- **UT Austin — `EE 445L/M` embedded** (Valvano): bare-metal ARM Cortex-M, interrupts, drivers, RTOS-from-scratch — basis of the famous edX MOOCs. [[users.ece.utexas.edu](https://users.ece.utexas.edu/~valvano/edX/)]
- **Michigan — `EECS 373 Design of Microprocessor-Based Systems` + `EECS 461 Embedded Control Systems`**; **Georgia Tech — `ECE 4180 Embedded Systems Design`.**

### Postgraduate — ranked by A10 strength `✓`
| Tier | Programs | The niche-defining courses |
|------|----------|----------------------------|
| **World-leading (real-time/embedded + robotics-systems lineage)** | **CMU (ECE + RI) · UC Berkeley · MIT · UPenn (PRECISE) · UT Austin** | CMU **`18-648 Embedded Real-Time Systems`** (resource mgmt, **scheduling & schedulability analysis**, dependability/safety, multicore/SoC/comm-buses; Rajkumar real-time lineage) [[courses.ece.cmu.edu/18648](https://courses.ece.cmu.edu/18648)] · Berkeley `EECS 249A` CPS · MIT **`6.5940 TinyML & Efficient Deep Learning Computing`** (Song Han — pruning/quantization/NAS/on-device inference for the edge-AI slice) [[hanlab.mit.edu](https://hanlab.mit.edu/courses/2024-fall-65940)] · UPenn **`ESE 6150 F1TENTH Autonomous Racing`** (Mangharam, **PRECISE** center — real-time embedded autonomy on real hardware) [[f1tenth.org](https://f1tenth.org/)] |
| **Strong — dedicated Embedded-Systems MSc** *(these RISE above a generic Robotics MSc for A10)* | **TU Delft · KTH · ETH Zürich · Waterloo** | TU Delft **`MSc Computer & Embedded Systems Engineering (CESE)`** (RTOS, real-time, processor/architecture design) [[tudelft.nl](https://www.tudelft.nl/en/education/programmes/masters/cese/msc-computer-embedded-systems-engineering)] · KTH **`MSc Embedded Systems`** [[kth.se](https://www.kth.se/en/studies/master/embedded-systems/msc-embedded-systems-1.70455)] · ETH `227-0124 Embedded Systems` (Thiele/TEC Computer Engineering Group — timing, real-time scheduling) [[lehrbetrieb.ethz.ch](https://www.lehrbetrieb.ethz.ch/)] · Waterloo `ECE 423 Embedded Computer Systems` (Pellizzoni, Real-time Embedded Software Group / CAESR) [[ece.uwaterloo.ca](https://ece.uwaterloo.ca/~rpellizz/ECE423.php)] |
| **Also strong (systems/robotics faculty)** | **TUM · Michigan · Georgia Tech** | TUM **Chair of Robotics, AI & Real-Time Systems** (Knoll — cyber-physical & embedded robotics) [[ce.cit.tum.de/air](https://www.ce.cit.tum.de/en/air/)] · Michigan EECS 461/467 · GT ECE 6122 |

*Note: the niche's brand-name assets are courses and labs (Berkeley Ptolemy/CPS, CMU real-time, Penn PRECISE, TU Delft CESE), not "Robotics MSc" programs — a direct inversion of the general default.*

---

## 2. Certifications & MOOCs for THIS niche `✓`

- **CU Boulder — *Real-Time Embedded Systems* Specialization** (Coursera, Sam Siewert) — the single most on-target MOOC: 4 courses `ECEA 5315 Concepts & Practices` → … → `ECEA 5318 Real-Time Embedded Systems Project`; concurrency, Linux kernel modules, RTOS, machine-vision co-processors, correctness under timing constraints; stackable to CU MS-EE/MS-ECE credit. [[coursera](https://www.coursera.org/specializations/real-time-embedded-systems)]
- **UT Austin — *Embedded Systems: Shape the World*** (edX `UT.6.10x`/`UT.6.20x`, Valvano) **+ *Real-Time Bluetooth Networks: Shape the World*** (`UT.RTBN.12.01x` — **build an RTOS from scratch**). Gold-standard hands-on bare-metal + RTOS MOOC (TI TM4C123 Cortex-M kit). [[edX](https://www.edx.org/learn/embedded-systems/the-university-of-texas-at-austin-embedded-systems-shape-the-world-microcontroller-input-output)]
- **Harvard — *Tiny Machine Learning (TinyML)* Professional Certificate** (edX, Vijay Janapa Reddi + Pete Warden/Google): Fundamentals / Applications / Deploying TinyML — on-device inference with TF-Lite Micro; open **CS249r "Machine Learning Systems"** textbook. The edge-AI credential. [[edx.org](https://www.edx.org/certificates/professional-certificate/harvardx-tiny-machine-learning)]
- **MIT `6.5940` TinyML & Efficient Deep Learning Computing** (Han, free lectures) — the deeper edge-AI optimization curriculum: quantization, pruning, NAS, on-device fine-tuning, LLM/diffusion acceleration. [[hanlab.mit.edu](https://hanlab.mit.edu/courses/2024-fall-65940)]
- **The Construct — ROS 2 courses + *Robotics Developer Masterclass*** (mentored): ROS 2 Basics, Real-Time in ROS 2, Nav2/MoveIt2. The applied ROS 2 credential. [[theconstruct.ai](https://www.theconstruct.ai/robotics-developer/)] *(Grounding-ref caveat: no official Open Robotics ROS cert.)*
- **NVIDIA — *Jetson AI Specialist* certification** (DLI, project-based) + Jetson AI Fundamentals + **Isaac ROS DNN Inference** (TensorRT/Triton) — the on-robot edge-inference deployment signal. [[developer.nvidia.com](https://developer.nvidia.com/embedded/learn/jetson-ai-certification-programs)]
- **Berkeley `EECS149.1x` Cyber-Physical Systems** (edX, legacy but foundational). Vendor/RTOS tracks (FreeRTOS, **Zephyr**, QNX; **RTI Connext DDS** training) are role-specific applied add-ons.

*Weak for this niche:* Northwestern **Modern Robotics** (kinematics/control — no systems/middleware content) and generic cloud-ML certs; useful backbone, not niche evidence.

---

## 3. Subject list (grouped; representative courses) `✓`

**Foundational maths & CS** *(systems-heavy; less continuous math than Control/SLAM)*
- Discrete math & logic · probability/stats (lighter here) · data structures & algorithms.
- **C / C++ systems programming, concurrency & multithreading**, Python; **Rust** emerging *(all programs)*.
- **Computer architecture & organization** — pipelines, caches, memory hierarchy, SoC/heterogeneous compute *(disproportionately load-bearing; Berkeley, CMU)*.
- **Operating systems** — processes/threads, scheduling, memory management, device drivers *(near-universal prereq)*.
- Digital logic / hardware design.

**Core robotics**
- **ROS / ROS 2** — nodes, topics/services/actions, tf, lifecycle, RMW abstraction *(The Construct; all programs)*.
- Robot kinematics/dynamics & feedback-control basics; sensor/actuator interfacing; on-robot perception/estimation basics (integration context).

**Niche-specific (the A10 core)**
- **Real-time systems & scheduling theory** — RMS/EDF, WCET, priority inversion/inheritance, schedulability analysis, mixed-criticality *(Berkeley EECS 149/249A, CMU 18-648, CU ECEA 5318)*.
- **Embedded systems programming** — MCUs, ARM Cortex-M, bare-metal, interrupts/DMA, memory-mapped I/O, drivers *(UT Austin Valvano, CMU 18-349, Michigan EECS 373)*.
- **Real-Time Operating Systems** — FreeRTOS, Zephyr, NuttX, QNX; **PREEMPT_RT / Xenomai real-time Linux** *(UT Austin RTBN, micro-ROS docs)*.
- **Robotics middleware & DDS** — ROS 2 architecture, RMW; **DDS pub/sub, QoS policies, discovery**; RTI Connext / eProsima Fast DDS / Eclipse Cyclone DDS; **DDS-XRCE / micro-ROS** *(ROS 2 design docs)* [[design.ros2.org](https://design.ros2.org/articles/ros_on_dds.html)].
- **Real-time networking & fieldbuses** — EtherCAT, CAN/CAN-FD, **TSN**, real-time Ethernet; serialization/zero-copy.
- **Cyber-physical systems** — models of computation, timing, HW/SW co-design *(Berkeley EECS 149; Lee & Seshia)*.
- **Edge / on-device AI inference & optimization** — quantization, pruning, distillation, NAS; **TensorRT / TVM / ONNX Runtime / TF-Lite Micro**; Jetson & edge accelerators *(MIT 6.5940, Harvard TinyML)*.

**Frontier / advanced** `~`
- **Real-time analysis of ROS 2** — executor response-time analysis, callback-group/DAG-chain latency, **deterministic executors** (rclc budget-based, **PiCAS**) *(arXiv 2408.08440; "Survey of Real-Time Support in ROS 2," arXiv 2601.10722; ReDAG-RT 2603.18238)*.
- **Zenoh / `rmw_zenoh`** — the non-DDS alternative RMW (ROS 2 Jazzy+; better on multi-robot/lossy/constrained networks) [[Eclipse/ROS 2](https://github.com/ros2/rmw_zenoh)].
- **micro-ROS on MCUs** — Micro XRCE-DDS, rclc executor, robotics middleware in <100 KB RAM (FreeRTOS/Zephyr/NuttX) [[micro.ros.org](https://micro.ros.org/docs/concepts/middleware/Micro_XRCE-DDS/)].
- **GPU-accelerated ROS 2** — Isaac ROS, **NITROS** type-adaptation/negotiation, zero-copy CUDA.
- **On-robot foundation-model inference** — edge LLM/VLM/VLA (TensorRT Edge-LLM SDK; Jetson Thor / JetPack 7) [[developer.nvidia.com](https://developer.nvidia.com/blog/getting-started-with-edge-ai-on-nvidia-jetson-llms-vlms-and-foundation-models-for-robotics/)].
- **Safety-critical / mixed-criticality** — ISO 26262, DO-178C, real-time hypervisors/virtualization, functional-safety certification.

---

## 4. Niche-specific eligibility adjustment (vs. the general set) `✓`

A10 reweights the shared tiers harder than almost any Axis-A niche — toward **Computer Engineering / EE / systems-CS** and *away* from a generic Robotics degree.

**RISE to Tier 1 (auto-qualifying for A10):**
- **Computer Engineering — the single strongest match** (embedded, computer architecture, OS, digital design are its core). Elsewhere CompE ≈ EE/CS; here it is the *headline* degree.
- **Electrical/Electronic Engineering** — microcontrollers, signals, hardware, real-time is native.
- **A dedicated *Embedded Systems* MSc (TU Delft CESE, KTH) outranks a generic Robotics MSc here** — the reverse of the general-set default.
- **CS with a systems concentration** (OS, computer architecture, distributed systems, networking, compilers) — rises; a pure ML/AI-track CS degree does **not** auto-qualify.

**HOLDS:** Robotics Engineering / Mechatronics — qualify **only with** the systems spine on the transcript; many robotics majors are perception/ML-heavy and thin on RTOS/architecture/systems-programming.

**FALL / less central (vs. their value elsewhere):**
- **Mechanical Engineering** — drops (dynamics/actuation peripheral to middleware/RTOS); contrast Manipulation, where ME *rose* to Tier 1.
- **Applied Math / Physics** — less central than in Control/SLAM: this niche's math is discrete/systems, not continuous/estimation.
- **Pure AI/ML degrees** — the *edge-AI* slice needs them, but only with C/C++, OS, computer-architecture and an embedded/real-time project as evidence.

**Unique feeder:** **self-taught / non-degree systems engineers** with deep embedded-Linux, RTOS, C and concurrency experience are first-class here in a way they are not in theory-heavy niches — the most software/systems-engineering-native robotics niche.

**Suggested A10 transcript checklist (replaces the general controls-elective line):** computer architecture **+** operating systems **+** a real-time/embedded course · C/C++ & concurrency · a scheduling/RTOS **or** ROS 2 middleware project · (for edge-AI roles) a model-optimization / on-device-inference project.

---
*Sources: all program/course/cert pages linked inline (Berkeley EECS 149, CMU 18-349/18-648, MIT 6.5940, UT Austin edX, UPenn F1TENTH/PRECISE, TU Delft CESE, KTH, ETH TEC, Waterloo ECE 423, TUM AIR; CU Boulder RTES Coursera, Harvard TinyML, The Construct, NVIDIA Jetson/DLI + Isaac ROS; ROS 2 design docs, rmw_zenoh, micro-ROS; real-time-ROS 2 surveys arXiv 2601.10722 / 2408.08440 / 2603.18238). Accessed Jul 2026; re-verify course codes, retiring exams, and frontier items at publish.*
