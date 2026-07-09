# Trending Research — Classical, Optimal & Predictive Control (AI-for-Robotics)

Scope: PID/LQR/robust, optimal control, MPC, robot kinematics/dynamics. Snapshot mid-2026, biased to 2025–2026. **Bold = 2026 release.** The center of gravity has shifted from convex/reduced-order MPC to **GPU sampling-based MPC over full-order dynamics** and **learned-model / RL–MPC hybrids**.

## 1. Sampling-based / GPU MPC — the field's "SAM2 moment"
The dominant 2024–2026 wave: gradient-free, GPU-parallel rollout MPC that needs no linearization or contact schedule.
- **DIAL-MPC** (LeCAR/CMU, ICRA 2025 best-paper finalist) — training-free, full-order torque-level legged control via diffusion-style annealing of MPPI; runs real-time on hardware. https://lecar-lab.github.io/dial-mpc/
- **MuJoCo MPC (MJPC)** (Google DeepMind) — reference real-time predictive-control app; Predictive Sampling + iLQG/Gradient planners. The de-facto sampling-MPC baseline. https://github.com/google-deepmind/mujoco_mpc
- **Hydrax** (V. Kurtz) — sampling-based MPC on GPU via JAX/MJX (MPPI, CEM, annealed covariance) with online domain randomization. https://github.com/vincekurtz/hydrax
- **Judo** — user-friendly open-source sampling-MPC package standardizing planners/benchmarks (RSS 2025 workshop). https://arxiv.org/html/2506.17184v1
- **Real-World Massively Parallel Sampling MPC for Contact-Rich Manipulation** — JAX+MJX, real-to-sim-to-real Franka Push-T; "MTP" structured global sampling beats CEM/MPPI/PS. https://arxiv.org/pdf/2606.20712
- **Feedback-MPPI** — adds LQR-style feedback via rollout differentiation, removing the low-level tracking controller. https://arxiv.org/pdf/2506.14855
- Generative Predictive Control / flow-matching policies (2025) — generative models as the MPC sampler for hard-to-demonstrate tasks. https://arxiv.org/pdf/2502.13406

## 2. Whole-body & contact-implicit MPC on real hardware
Model-based MPC is closing the agility gap by optimizing over full-order dynamics and discovering contacts.
- **Whole-Body MPC with MuJoCo** (2025) — iLQR + MuJoCo finite-difference derivatives; real-time on quadrupeds and full-size humanoids. https://arxiv.org/abs/2503.04613
- **Inverse-Dynamics Trajectory Optimization for Contact-Implicit MPC** (Kurtz et al., IJRR, **Jan 2026**) — CI-MPC at >100 Hz on a 20-DoF bimanual task; no predefined contact sequence. https://journals.sagepub.com/doi/abs/10.1177/02783649251344635
- **Whole-Body Inverse-Dynamics MPC for Legged Loco-Manipulation** (**2026**) — extends WB-MPC to mobile manipulation. https://arxiv.org/pdf/2511.19709

## 3. Classical solver stacks & embedded/edge optimal control
The mature OCP/NMPC toolchain everyone still builds on, now with learning hooks and GPU/microcontroller backends.
- **acados** — embedded NMPC standard; multi-phase OCP support. **L4acados** (IEEE TCST **2026**) plugs Python NN/Gaussian-Process residual models into acados for real-time learning-based MPC. https://arxiv.org/abs/2411.19258
- **Crocoddyl** — DDP/FDDP optimal control under contact; ICRA 2025 endpoint-explicit DDP work. https://github.com/loco-3d/crocoddyl
- **OCS2** — switched-systems MPC toolbox for legged/mobile robots.
- **TinyMPC** — ADMM MPC on microcontrollers (cached factorizations); **Conic-TinyMPC** adds SOC constraints; ReLU-QP unrolls ADMM for GPU. https://a2r-lab.org/projects/gpuoptimization/
- **GATO** (ICRA **2026**) — GPU-accelerated batched trajectory optimization for scalable edge MPC. https://arxiv.org/html/2510.07625
- **Primal-Dual iLQR** (2025) — GPU-accelerated iLQR for legged learning+control. https://arxiv.org/pdf/2506.07823

## 4. Differentiable kinematics/dynamics engines (the "backbone" layer)
Autodiff rigid-body dynamics is the substrate for both MPC and RL — this is where the DINO-style reusable primitives live.
- **Pinocchio** — the foundational fast rigid-body-dynamics library with analytical derivatives (CasADi/CppAD autodiff); cited across nearly all model-based work. https://ieeexplore.ieee.org/document/8700380/
- **frax** (Stanford ASL, **2026**) — pure-Python JAX kinematics/dynamics; autodiff, JIT, CPU/GPU/TPU; ~C++ speed, ~100M dyn-computations/s batched. https://arxiv.org/abs/2604.04310
- **MuJoCo MJX + MuJoCo Warp** — GPU-resident MuJoCo (JAX / NVIDIA-Warp backends); **MuJoCoUni** (2026) adds persistent batched runtime primitives. https://mujoco.readthedocs.io/en/stable/mjx.html
- **Brax / Dojo / jaxsim** — differentiable physics engines for large-scale/analytical-gradient control.
- **DiffTune-MPC / DiffCoTune** (2024–2025) — differentiate through closed-loop MPC to auto-tune controller gains. https://arxiv.org/pdf/2505.24068

## 5. Koopman & learned-linear-model predictive control
Lift nonlinear/contact dynamics into a linear space so LQR/linear-MPC applies — a fast-growing 2025–2026 thread.
- **Koopman global linearization of contact dynamics** (2025) — first Koopman locomotion/manipulation control scaling to high-DoF humanoid/quadruped. https://arxiv.org/pdf/2511.06515
- **MPPI-DK** (**2026**) — learned linear deep-Koopman model accelerates sampling-based MPC; validated on quadruped hardware. https://arxiv.org/abs/2603.05385
- Koopman-MPC for bipedal navigation & soft robots (2024–2025) — deep-Koopman lifting of learned RL locomotion policies. https://arxiv.org/abs/2409.14736

## 6. MPC × RL hybrids (the convergence story)
Two directions dominate: MPC as a training-time teacher, and MPC as a runtime planner over RL skills.
- **MPC-Guided RL / πⁿMPC** (**2026**) — construction-free batched GPU MPC guides humanoid loco+manipulation RL; hardware-validated. https://arxiv.org/abs/2606.05687
- **Sumo** (RAI Institute + CMU, **2026**) — sampling-MPC steers a pretrained whole-body RL policy; retasks Spot/Unitree-G1 by editing only the cost/object model. https://arxiv.org/pdf/2606.26425
- **MPC-Injection** (**2026**) — biases off-policy locomotion RL toward MPC-induced behavior basins. https://arxiv.org/pdf/2606.26392
- **TD-MPC2** — latent world-model + MPC planning; a widely adopted model-based-RL baseline bridging control and learning.

## 7. Learned/neural dynamics & world-model control
Structure-preserving and world-model dynamics for planning "in imagination."
- **Deep Lagrangian Networks / Hamiltonian NNs** — impose Lagrangian/Hamiltonian structure on learned robot dynamics (energy-consistent, extrapolate better).
- **Sparse Neural Dynamics** — sparsify learned dynamics so they're tractable inside MPC/model-based control. https://robopil.github.io/Sparse-Dynamics/
- **DreamerV3 / TD-MPC2** — recommended default latent world-models for robot model-based control in 2026 surveys. https://arxiv.org/html/2605.00080v1
- *Science Robotics* review of learning-based dynamics models for manipulation (**2026**) — signals field consolidation. https://www.science.org/doi/10.1126/scirobotics.adt1497

## Benchmarks / datasets
- **MuJoCo Playground** (MJX, RSS 2025 Outstanding Demo) — de-facto sim-to-real training/benchmark suite (quadruped/humanoid/hand/arm). https://github.com/google-deepmind/mujoco_playground
- MPC-vs-RL legged-locomotion benchmark in MuJoCo (2025). https://arxiv.org/html/2501.16590v1
- **D4RL** — standard offline benchmark for diffusion/model-based-MPC decision-making.

## Net trend
Control is converging on **GPU-parallel, sampling- and learned-model MPC over full-order differentiable dynamics**, fused with RL — displacing hand-tuned reduced-order convex MPC as the default for agile legged/humanoid and contact-rich manipulation.
