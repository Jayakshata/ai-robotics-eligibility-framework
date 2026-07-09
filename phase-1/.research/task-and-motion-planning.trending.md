# Task & Motion Planning and Decision Architectures — Trending Research (mid-2026)

Scope: TAMP (symbolic + geometric), behavior trees, autonomy/decision architectures. Bias: newest (2025–2026). **2026 releases flagged.**

## 1. LLM/VLM-driven TAMP (semantic layer over symbolic+geometric planning)
- **LLM3** — foundation-model TAMP that proposes symbolic action sequences *and* continuous motion params, with motion-failure reasoning as feedback; the reference template for "LLM-in-the-loop TAMP." https://openreview.net/forum?id=55UkYJLTs8
- **AutoTAMP** — LLMs translate natural language into task+motion specs a symbolic planner checks for geometric/kinematic feasibility; a canonical NL→plan pipeline. https://arxiv.org/abs/2510.00182
- **VLM-TAMP / "Guiding Long-Horizon TAMP with VLMs"** — VLM proposes geometrically grounded subgoals to prune the TAMP search; widely cited long-horizon recipe. https://arxiv.org/abs/2410.02193
- **"Prime the Search"** (2025) — LLM warm-starts geometric-TAMP tree search, cutting search time; shows LLMs as heuristics, not planners. https://arxiv.org/pdf/2506.07062
- **A Systematic Study of LLMs for TAMP with PDDLStream** (Sep 2025) — 16 Gemini-2.5 variants over 4,950 problems; blunt finding: LLM planners still trail engineered PDDLStream on success + speed. https://arxiv.org/abs/2510.00182
- **Onto-LLM-TAMP** (2026) — ontology/knowledge-grounded LLM TAMP to curb abstract, infeasible plans. https://www.sciencedirect.com/science/article/pii/S0921889026000771
- **LLM-guided State Estimation for Partially-Observable TAMP** (Mar 2026) — LLM priors for belief-space/POMDP TAMP; pushes TAMP toward partial observability. https://arxiv.org/pdf/2603.03704

## 2. Classical TAMP goes GPU-parallel + differentiable
- **cuTAMP** (NVLabs, RSS 2025) — first GPU-parallelized, differentiable TAMP; samples thousands of particle solutions and jointly optimizes, solving long-horizon problems in seconds atop cuRobo. https://github.com/NVlabs/cuTAMP
- **Differentiable Particle Optimization for Fast Sequential Manipulation** (2025) — batched differentiable optimization for manipulation sequences; same "make TAMP GPU-native" thrust. https://arxiv.org/pdf/2510.07674

## 3. Diffusion & generative planning (bridging symbolic + continuous)
- **Hybrid Diffusion for Simultaneous Symbolic and Continuous Planning** (RSS 2025) — jointly diffuses discrete symbols + continuous params, beating staged baselines; hottest "generative TAMP" idea. https://arxiv.org/pdf/2509.21983
- **Multi-robot Multi-model Diffusion (MMD)** + **Projected/Discrete-Guided Diffusion (SMD)** (2025) — diffusion + search for collision-free multi-robot motion under constraints. https://arxiv.org/html/2502.03607v2
- **Hierarchical Diffusion Motion Planning w/ Task-Conditioned Priors** (2025). https://arxiv.org/pdf/2509.25685

## 4. Behavior trees + LLM/VLM generation (the deployable autonomy substrate)
- **BehaviorTree.CPP v4 + Groot2 / Nav2** — the de-facto ROS 2 autonomy-orchestration stack; the "runtime" most learned planners now target. https://www.behaviortree.dev/docs/ros2_integration/
- **BTGenBot** — lightweight LLMs generate executable BTs for robot tasks; showed small models suffice. https://arxiv.org/html/2403.12761v1
- **LLM-as-BT-Planner** — LLM in-context BT generation for assembly/manipulation. https://arxiv.org/html/2409.10444v2
- **Code-BT** (IJCAI 2025) — code-driven BT synthesis exploiting LLM coding ability. https://www.ijcai.org/proceedings/2025/0980.pdf
- **VLM-driven Behavior Tree for Context-aware Task Planning** (Jan 2025) — closes the perception→BT loop with a VLM. https://arxiv.org/pdf/2501.03968

## 5. Hierarchical VLA / dual-system decision architectures (the "brain + hands" pattern)
- **Gemini Robotics-ER 1.5 + GR 1.5** (DeepMind, Oct 2025) — explicit dual-agent stack: an embodied-reasoning VLM orchestrator that thinks, plans multi-step, calls tools; a VLA executes. The dominant reference architecture. https://arxiv.org/pdf/2510.03342
- **π0.5** (Apr 2025) / **π0.6** (Nov 2025, Physical Intelligence) — hierarchical VLA: high-level subtask prediction + low-level action tokens, open-world generalization. https://arxiv.org/html/2504.16054v1
- **NVIDIA GR00T** — humanoid foundation-model line feeding the same high-level/low-level split. https://arxiv.org/html/2508.10399v1
- **OneTwoVLA** (2025) — single model that adaptively switches between reasoning ("System 2") and acting ("System 1"). https://arxiv.org/pdf/2505.11917
- **Embodied Chain-of-Thought / HALO / GTA-VLA** — reason-before-act VLAs; **HALO** (Feb 2026) unifies multimodal EM-CoT reasoning + action via Mixture-of-Transformers. https://arxiv.org/pdf/2602.21157
- **"VLAs-as-Tools"** (2026) — VLM does temporal planning/recovery; specialized VLAs are callable tools for bounded subtasks. https://arxiv.org/abs/2605.13119

## 6. World models for planning (imagine-then-act)
- **H-WM** (Feb 2026) — bilevel *logical* (LLM symbolic-transition) + *visual* world model guiding a π0.5 VLA; 64.8% vs 6.4% SR on LIBERO-LoHo. Flagship 2026 "world-model-guided TAMP." https://arxiv.org/html/2602.11291v1
- **Hierarchical Planning with Latent World Models** (Apr 2026) — long-horizon planning via learned latent dynamics. https://arxiv.org/html/2604.03208v1
- **World Model for Robot Learning: A Survey** (2026) — maps the surge. https://arxiv.org/html/2605.00080v1

## 7. Neuro-symbolic resurgence (efficiency counter-narrative to end-to-end VLAs)
- **"The Price Is Not Right"** (Feb 22, 2026) — PDDL planning + diffusion control beats π0 on structured long-horizon tasks (95% vs 34%) using ~80× less energy and 34 min vs 40 h training; strong 2026 case for symbolic structure. https://arxiv.org/html/2602.19260
- **NOD-TAMP** — Neural Object Descriptors + TAMP for few-demo generalizable long-horizon skills. https://arxiv.org/abs/2311.01530
- **VL-guided Neuro-Symbolic Imitation** (2026) — data-efficient real-world manipulation from priors. https://arxiv.org/html/2604.03759

## 8. Benchmarks & datasets (what people evaluate on)
- **PARTNR** (Meta FAIR) — 100k NL tasks, 60 multi-room houses; the reference for long-horizon, multi-agent embodied planning. https://arxiv.org/html/2411.00081v1
- **Embodied Agent Interface** — unifies tasks/modules/metrics to benchmark LLMs for embodied decision-making over BEHAVIOR + VirtualHome. https://embodied-agent-interface.github.io/
- **VLABench** (2025) — large-scale language-conditioned, long-horizon-reasoning manipulation. https://arxiv.org/html/2508.10399v1
- **CookBench** (2025) — long-horizon embodied cooking planning. https://arxiv.org/pdf/2508.03232
- **WorldLines** (Jun 2026) — benchmarks/models *stateful* long-horizon embodied agents. https://arxiv.org/pdf/2606.18847
- **PlanBench / "Can LLM-Reasoning Replace Classical Planning?"** (Jul 2025) — PDDL/IPC-style stress tests exposing LLM planning gaps. https://arxiv.org/html/2507.23589v1
- Overview: **Foundation Models in Robotics: A Comprehensive Review** (2026). https://arxiv.org/html/2604.15395v1

**Net trend:** the field is converging on hierarchical "reasoning-VLM brain + TAMP/VLA/BT executor" stacks, with 2026 work (H-WM, "Price Is Not Right", neuro-symbolic + GPU/differentiable and diffusion TAMP) reasserting that explicit symbolic/geometric structure still beats end-to-end VLAs on long-horizon reliability and energy.
