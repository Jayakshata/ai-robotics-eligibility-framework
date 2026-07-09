# Trending Research — Robotics Middleware, Embedded & Real-Time Systems (mid-2026)

Scope: ROS/ROS2, DDS, real-time systems, embedded/edge AI & on-robot inference. Biased to 2025–2026. **[2026]** = flagged 2026 release. The "SAM2/DINO" of this niche isn't one model — it's the substrate layer everyone builds on: **ROS 2 + a pluggable middleware (Zenoh rising over DDS)**, **micro-ROS** on MCUs, and **NVIDIA Isaac ROS / Jetson + NITROS** as the edge-compute plumbing under the foundation-model era.

## 1. ROS 2 middleware evolution — Zenoh's rise over the DDS incumbents
The defining 2025–26 shift: the RMW layer is being rebuilt to escape DDS's discovery/WAN pain.
- **rmw_zenoh / Eclipse Zenoh** — became a **Tier 1** ROS 2 middleware in **Kilted Kaiju (May 2025)**, shipping alongside Zenoh 1.0; data-centric protocol unifying pub/sub, query, storage; built for lossy/WAN/constrained links. The presumptive future default. https://github.com/ros2/rmw_zenoh / https://www.therobotreport.com/kilted-kaiju-ros-2-release-details/
- **Cyclone DDS / Fast DDS (eProsima) / RTI Connext** — the three incumbent DDS RMWs; Cyclone is the common default, Fast DDS/Connext trade latency vs throughput; still production standard for LAN robotics. https://www.rti.com/blog/latest-connext-dds-ros-2-performance-benchmarks
- **zenoh-plugin-ros2dds** — Zenoh↔DDS bridge for fleet/multi-robot and cloud without touching the RMW; the pragmatic migration path. https://github.com/eclipse-zenoh/zenoh-plugin-ros2dds
- **ROS 2 Kilted Kaiju (May 2025)** and next **Lyrical Luth (May 2026)** **[2026]** — release cadence carrying the Zenoh + real-time work. https://www.openrobotics.org/blog/2025/5/23/ros-2-kilted-kaiju-released
- Middleware benchmarking (FastDDS vs Zenoh vs vSomeIP; DDS vs Zenoh 2026): Zenoh ~2× DDS throughput in multi-machine/zonal topologies; DDS keeps best single-hop latency/QoS. https://arxiv.org/pdf/2505.02734 / https://iotdigitaltwinplm.com/ros2-dds-vs-zenoh-robotics-middleware-comparison-2026/

## 2. Real-time Linux & deterministic ROS 2 execution
Hard-timing is finally first-class; the frontier is the executor/scheduler.
- **PREEMPT_RT mainlined in Linux 6.12** (Sept 2024) — ~20-year effort landed; real-time Linux is now default-available (x86/ARM64/RISC-V), the base for on-robot control. https://www.linuxfoundation.org/blog/blog/intro-to-real-time-linux-for-embedded-developers
- **"A Survey of Real-Time Support, Analysis, and Advancements in ROS 2"** **[2026]** — the anchor reference consolidating scheduling analysis, executor timing, and middleware determinism. https://arxiv.org/pdf/2601.10722
- **ROSRT** (RTSS 2025) — per-callback priority/deadline assignment for arbitrary ROS graphs; flexible real-time scheduling. http://www.cs.unc.edu/~anderson/papers/rtss25b.pdf
- **ReDAG-RT** **[2026]** — global rate-priority scheduling for real-time multi-DAG execution. https://arxiv.org/pdf/2603.18238
- **LaME** (RTNS 2025), **CIL-EDF**, middleware-transparent callback enforcement — deadline-driven multi-threaded-executor enhancements fixing priority inversion. https://intra.ece.ucr.edu/~hyoseung/pdf/RTNS25_LaME.pdf / https://arxiv.org/pdf/2505.06546
- **ROSGuard** (2025) — bandwidth-regulation mechanism for ROS 2 apps. https://arxiv.org/pdf/2506.04640
- **ros2_control** — the real-time control framework (SCHED_FIFO loop, hardware-interface plugins); de-facto controller substrate. https://control.ros.org/

## 3. micro-ROS & embedded / MCU middleware
Bringing ROS 2 semantics onto microcontrollers is a stable, fast-moving pillar.
- **micro-ROS** — client-agent bridge over **Micro XRCE-DDS**; runs on FreeRTOS/Zephyr/bare-metal in ~60 KB RAM; standard for sensors/actuators/time-critical control. https://www.bosch.com/stories/bringing-robotics-middleware-onto-tiny-microcontrollers/
- **Meta-ROS** **[2026]** — proposed next-gen middleware architecture for adaptive/scalable robotic systems. https://arxiv.org/html/2601.21011v1
- **Budget-based real-time Executor for micro-ROS** — deterministic execution management on MCUs. https://arxiv.org/pdf/2105.05590
- **Zenoh-Pico / Micro XRCE-DDS** — embedded transports pushing the new middleware down to constrained devices.

## 4. GPU-accelerated & zero-copy transport (edge-compute plumbing)
Eliminating serialize/copy overhead is the enabler for on-robot ML pipelines.
- **NITROS (NVIDIA Isaac Transport for ROS)** — type adaptation + negotiation for **zero-copy** GPU-to-GPU message flow across ROS 2 nodes; core of accelerated perception graphs. https://nvidia-isaac-ros.github.io/concepts/nitros/index.html
- **Eclipse iceoryx** — shared-memory true zero-copy IPC; underpins large-pointcloud pipelines (Autoware) and DDS zero-copy.
- **PAAM** — coordinated, priority-driven accelerator (GPU) management framework in ROS 2. https://arxiv.org/pdf/2404.06452
- **HPRM** — high-performance robotic middleware for intelligent autonomous systems (low-latency IPC). https://arxiv.org/pdf/2412.01799

## 5. The edge hardware + stack layer — NVIDIA's physical-AI platform
The reference on-robot compute target the whole niche now optimizes against.
- **Jetson Thor / IGX Thor (2025)** — 2070 FP4 TFLOPS, 128 GB, 40–130 W; 7.5× AGX Orin AI perf; explicitly built to run VLA/LLM/VLM on-robot. https://developer.nvidia.com/blog/introducing-nvidia-jetson-thor-the-ultimate-platform-for-physical-ai/
- **Isaac ROS + Holoscan** — GPU-accelerated ROS 2 perception (VSLAM, detection, depth) + sensor-processing SDK; the deploy stack on Thor/Orin. https://developer.nvidia.com/isaac/ros
- **GR00T N1.5** running on-device on Thor — the concrete "foundation model on the robot" milestone tying middleware to the VLA era.

## 6. On-robot foundation-model inference — the live frontier
Making 1–7B VLAs run in real time on-robot is the hottest 2025–26 systems problem.
- **Real-Time Chunking (RTC)** — Physical Intelligence; inference-time algorithm for async execution of flow/diffusion VLAs (freeze-and-inpaint action chunks), robust to inference delay, no retraining. https://www.pi.website/research/real_time_chunking / https://arxiv.org/abs/2506.07339
- **FASTER: Rethinking Real-Time Flow VLAs** **[2026]** — Horizon-Aware Schedule compresses reaction latency to a single flow step. https://arxiv.org/abs/2603.19199
- **Masked Action Chunking** **[2026]** / **Leave No Observation Behind** (2025) — real-time correction/execution of action chunks under latency. https://arxiv.org/pdf/2601.20130 / https://arxiv.org/pdf/2509.23224
- **SmolVLA** (2025) — compact VLM + flow-matching action expert; trains on 1 GPU, runs on CPU/consumer GPU, ~10× smaller at comparable perf. https://arxiv.org/pdf/2506.01844
- **Lite VLA** (CPU-bound edge, 2025) / **LiteVLA-Edge** **[2026]** — 4-bit GGUF quantized on-device control, ~150 ms latency on Orin-class. https://arxiv.org/pdf/2511.05642 / https://arxiv.org/html/2603.03380v1
- **Characterizing VLAs across XPUs** **[2026]** & **VLA-Perf** ("How Fast Can I Run My VLA?") **[2026]** — the emerging benchmarking/analytical-modeling layer for on-robot inference latency/throughput. https://arxiv.org/pdf/2604.24447 / https://arxiv.org/html/2602.18397v1
- TensorRT Edge-LLM (FP8/NVFP4/INT4 + KV-cache) — the quantization toolchain everyone deploys through.

## 7. Data infrastructure & observability
- **MCAP** — self-describing log container; **rosbag2's default format since ROS 2 Iron**; the portable standard for multimodal robot data. https://foxglove.dev/product/mcap
- **Foxglove / Rerun** — the visualization+observability tools of record for ROS 2/MCAP pipelines. https://foxglove.dev/robotics/rviz-vs-foxglove-vs-rerun

---
**Net trend:** The middleware/RT/embedded stack is consolidating around **ROS 2 with a pluggable, Zenoh-forward RMW and mainline PREEMPT_RT determinism**, while **NVIDIA Jetson Thor + Isaac ROS/NITROS zero-copy** becomes the edge substrate — all now bending toward one goal: running big VLA foundation models on-robot in real time via chunked/async inference and aggressive quantization.
