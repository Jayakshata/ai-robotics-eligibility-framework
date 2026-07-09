# Multi-Robot Systems, Swarm & Fleet Orchestration — Trending Research (mid-2026)

Scope: multi-robot coordination, swarm, distributed control, fleet orchestration/management. Biased to 2025–2026. **2026 releases flagged 🆕.** (arXiv ids encode date: `25xx`=2025, `26xx`=2026.)

## 1. Multi-agent foundation models — "the fleet brain"
The defining 2025–26 shift: replace hand-tuned planners with large models trained on real fleet data.
- **DeepFleet** (Amazon, Aug 2025) — suite of multi-agent foundation models (robot-centric decision transformer, robot/image/graph-floor variants) trained on hundreds of thousands of warehouse robots; ~10% travel-time gain; the SAM2-equivalent landmark for fleets. [2508.08574](https://arxiv.org/abs/2508.08574), [Amazon/Open-RMF context](https://www.open-rmf.org/)
- **MAPF-GPT** (AAAI 2025) — transformer imitation-learned on LaCAM traces; solves pathfinding at scale under partial observability, no comms/heuristics; 2M–85M params, beats DCC/SCRIMP. [2409.00134](https://arxiv.org/abs/2409.00134)
- 🆕 **MAPF-World** (Aug 2025) — action world-model predicting environment dynamics for MAPF. [2508.12087](https://arxiv.org/abs/2508.12087)
- 🆕 **MARL-GPT** (2026) — foundation-model framing for multi-agent RL. [2604.05943](https://arxiv.org/abs/2604.05943)

## 2. Multi-Agent Path Finding (MAPF) — the warehouse-orchestration workhorse
- **LaCAM** — fast search-based solver; de-facto expert/oracle for learned solvers. [2211.13432](https://arxiv.org/abs/2211.13432)
- **POGEMA** (ICLR 2025) — standard benchmark platform unifying learnable + search MAPF baselines. [2407.14931](https://arxiv.org/abs/2407.14931)
- 🆕 **RL-RH-PP / learning-guided prioritized planning** (JAIR 2026) — first RL+search hybrid for lifelong warehouse MAPF. [2603.23838](https://arxiv.org/abs/2603.23838)
- 🆕 **"It Takes Two to Tango"** (2026) — joint order-scheduling + MAPF simulator, closing the plan→throughput gap. [2602.13999](https://arxiv.org/abs/2602.13999)
- 🆕 **Prorok Lab**: Graph-Attention-Guided Search for dense MAPF (AAAI 2026); "Pairwise is Not Enough" hypergraph-NN MAPF (ICLR 2026). [proroklab.org](https://proroklab.org/publications/)
- **"Where Paths Collide"** (May 2025) — comprehensive classic + learning MAPF survey. [2505.19219](https://arxiv.org/abs/2505.19219)

## 3. LLM/VLA-orchestrated heterogeneous teams
Natural-language mission specs → coordinated multi-robot policies.
- **RoCo** (ICRA 2024) & **CoELA** (2023) — foundational: LLM dialogue for multi-arm / embodied household teams. [2307.02485](https://arxiv.org/abs/2307.02485)
- 🆕 **GenSwarm** (npj Robotics 2026) — LLM code-policy generation + real-robot deployment; zero-shot, beats MetaGPT/CaP/LLM2Swarm by ~34–37%. [2503.23875](https://arxiv.org/abs/2503.23875)
- **RoboOS** (May 2025) — hierarchical framework for cross-embodiment multi-agent collaboration. [2505.03673](https://arxiv.org/abs/2505.03673)
- **EMOS** (Oct 2024) / **COHERENT** — embodiment-aware heterogeneous multi-robot OS with LLM agents. [2410.22662](https://arxiv.org/abs/2410.22662)
- 🆕 **DynaHMRC** & **Adaptive Group Negotiation** (2026) — decentralized heterogeneous collaboration for dynamic tasks. [2606.14882](https://arxiv.org/abs/2606.14882), [2602.06967](https://arxiv.org/abs/2602.06967)
- **Compositional Coordination for Multi-Robot Teams w/ LLMs** (Jul 2025). [2507.16068](https://arxiv.org/abs/2507.16068)
- **NVIDIA GR00T N1** (2025) — dual-system VLA increasingly used as the per-robot policy backbone under a multi-agent planner.
- Surveys: **LLMs for Multi-Robot Systems** ([2502.03814](https://arxiv.org/abs/2502.03814); Springer *Auton. Robots* 2026); **Multi-Agent Embodied AI** (May 2025, [2505.05108](https://arxiv.org/abs/2505.05108)).

## 4. Simulators, benchmarks & datasets (shared substrate)
- **VMAS** + **BenchMARL** (Prorok/Bettini) — GPU-vectorized 2D multi-robot sim (~100× faster) + standardized MARL benchmarking; the community default. [2207.03530](https://arxiv.org/abs/2207.03530)
- 🆕 **GRACE** (2026) — unified 2D multi-robot path-planning simulator/benchmark across grid/roadmap/continuous. [2603.10858](https://arxiv.org/abs/2603.10858)
- 🆕 **HERCULES** (2026) — open-source heterogeneous multi-robot SLAM + collaborative-perception + exploration sim. [2606.22756](https://arxiv.org/abs/2606.22756)
- **Cambridge RoboMaster** — agile physical multi-robot research platform. [2405.02198](https://arxiv.org/abs/2405.02198)
- Datasets: **CoPeD** (2024, air-ground collaborative perception, [2405.14731](https://arxiv.org/abs/2405.14731)); 🆕 **CU-Multi** (2025) multi-robot data-association/SLAM. [2509.19463](https://arxiv.org/abs/2509.19463)

## 5. Distributed & decentralized control (classical × learning hybrids)
- **GNN decentralized policies** (Prorok line) — message-passing for comms-constrained path planning & task allocation; still the backbone abstraction.
- 🆕 Diffusion multi-robot trajectory generation (IROS 2025, ≤16 robots) & hybrid optimization+MARL learned constraints (CoRL 2025). [proroklab.org](https://www.proroklab.org/)
- 🆕 Decentralized MPC for cooperative object transport (Sci. Reports 2026). [s41598-026-41881-w](https://www.nature.com/articles/s41598-026-41881-w)

## 6. Swarms & production interoperability
- **Drone swarms**: EGO-Swarm (foundational decentralized quadrotors), PACNav (comms/GPS-free); 🆕 2026 defense-scale systems (L3Harris AMORPHOUS, ATLAS); Toshiba real-time 5G swarm control (Oct 2025). [Yenra 2026](https://yenra.com/ai20/drone-swarm-coordination/)
- **Interoperability standards**: **VDA5050** + **Open-RMF** (OSRA-governed since 2024) are the de-facto mixed-fleet substrate; 🆕 MiR VDA5050 Adapter (Mar 2025) marks vendor convergence. [Open-RMF](https://www.open-rmf.org/), [VDA5050 explainer](https://www.synaos.com/en/blog/vda-5050-massrobotics-open-rmf)

---

**Net trend:** Fleet/swarm coordination is migrating from hand-tuned optimal MAPF planners to *learned multi-agent foundation models* (DeepFleet, MAPF-GPT) and *LLM/VLA-orchestrated heterogeneous teams* (GenSwarm, RoboOS), all riding GPU-vectorized sims (VMAS) and open interoperability standards (VDA5050/Open-RMF).
