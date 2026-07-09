# Trending Research — Soft Robotics & Compliant Mechanisms

`⏱ as of July 2026` · Scope: soft-body actuation · modeling & control of soft/continuum robots · compliant mechanisms. The named substrates people simulate on, benchmark against, and build on in 2024–2026 (biased newest). **`🆕` = 2026 release.** URLs inline; arXiv IDs encode date (`25xx`=2025, `26xx`=2026).

---

## 1. Modeling backbones — the substrates everyone forks
The "DINO layer": the physics engines and parameterizations every learned method wraps.
- **PyElastica** (GazzolaLab) — Cosserat-rod simulator for slender soft bodies; the de-facto RL environment for continuum arms. [github](https://github.com/GazzolaLab/PyElastica)
- **SOFA + SoftRobots plugin** (INRIA/DEFROST) — real-time FEM for soft robots; the model-based deployment workhorse. [project](https://project.inria.fr/softrobot/)
- **PCC / Piecewise-Constant-Strain (Cosserat)** — the classical low-dim kinematic/dynamic parameterizations underneath most controllers; see rod-models review [2407.05886](https://arxiv.org/pdf/2407.05886) and the 2026 control review [Copernicus 17/313](https://ms.copernicus.org/articles/17/313/2026/).

## 2. Physics-informed & learned surrogates (the hottest direction)
The dominant 2025–26 move: replace slow FEM/Cosserat with a fast NN surrogate so real-time MPC becomes tractable.
- **DD-PINN Cosserat MPC** — domain-decoupled physics-informed net surrogate for the dynamic Cosserat rod; ~44,000× speedup, 70 Hz GPU-MPC (2025). [2508.12681](https://arxiv.org/abs/2508.12681)
- **Learned Condensed FEM** — distills a SOFA FEM scene into a compact model for embedded control/design; open plugin [SofaDefrost/CondensedFEMModel](https://github.com/SofaDefrost/CondensedFEMModel) (2025). [2503.15009](https://arxiv.org/pdf/2503.15009)
- **Generalizable PINN surrogates for articulated soft robots** — physics-informed MPC that transfers across configs (2025). [2502.01916](https://arxiv.org/pdf/2502.01916)
- **Active-Exploration dynamics learning** — data-efficient online model-building for soft arms (2025). [2510.27428](https://arxiv.org/pdf/2510.27428)

## 3. Koopman & data-driven linear embeddings
Lift nonlinear soft dynamics into a (near-)linear latent so classic MPC applies — a maturing, deployable line.
- **Residual Koopman** (Bruder/Bombara/Wood, IJRR 2025) — physics Koopman + learned residual; more accurate, less data, linear for MPC. [Sage](https://journals.sagepub.com/doi/abs/10.1177/02783649241272114)
- **Deep Koopman MPC** — multi-segment soft-arm control via learned Koopman embedding (2025). [2505.00354](https://arxiv.org/pdf/2505.00354)
- **Data-driven model-reduction for dynamic shape control** (2025). [2511.03931](https://arxiv.org/pdf/2511.03931)
- 🆕 **Neural Koopman catheter** — pneumatic soft robotic catheter modeling/control (2026). [2603.04118](https://arxiv.org/pdf/2603.04118)

## 4. Differentiable-physics gyms & co-design benchmarks (the "SoftGym moment")
Standardized, gradient-friendly environments — the shared fuel for learning + morphology co-design.
- **DiffTaichi / PlasticineLab** — differentiable MPM soft-body manipulation benchmark; the reference gym. [2104.03311](https://arxiv.org/abs/2104.03311)
- **SoftZoo** (MIT) — soft-robot co-design benchmark; jointly optimizes morphology + control over diverse terrains. [2303.09555](https://arxiv.org/abs/2303.09555)
- **DittoGym** (ICLR 2024) — control benchmark for reconfigurable, shape-shifting MPM soft robots. [2401.13231](https://arxiv.org/pdf/2401.13231)
- **SoftGym** — cloth/rope/fluid deformable manipulation environments (still a standard baseline).
- **Genesis** (Dec 2024) — universal differentiable engine unifying rigid/MPM/FEM/PBD with generative data synthesis; fast-rising soft-body substrate. [digialps](https://digialps.com/genesis-a-universal-physics-engine-to-build-smarter-robots-through-better-simulation/)
- 🆕 **DLO-Lab** — differentiable benchmark for deformable-linear-object manipulation (2026). [2606.04206](https://arxiv.org/pdf/2606.04206) · 🆕 **Embodied Co-Design** taxonomy of brain-body co-optimization. [2512.04770](https://arxiv.org/pdf/2512.04770)

## 5. Actuation — the physical layer (soft-body actuation + biohybrid)
Where 2026 is loudest: reconfigurable, self-healing, and living actuators.
- 🆕 **Reconfigurable DEA via phase-transitional ferrofluid** — one dielectric-elastomer actuator whose electrodes reshape post-fabrication to switch roles (Science Advances 2026). Context: npj Robotics DEA/fluid-actuator review [s44182-026-00074-3](https://www.nature.com/articles/s44182-026-00074-3).
- 🆕 **Self-healing artificial muscle** (SNU) — ~91% recovery after damage (2026). [interestingengineering](https://interestingengineering.com/ai-robotics/snu-artificial-muscle-self-healing-soft-robotics) · 🆕 **slime-like reconfigurable muscle** that heals and splits one robot into many. [techxplore](https://techxplore.com/news/2026-04-slime-artificial-muscle-reshapes-robot.html)
- **Biohybrid / living-muscle actuators** — npj Robotics 2025 review [s44182-025-00049-w](https://www.nature.com/articles/s44182-025-00049-w); meter-scale homeostatic biohybrids (Chem. Rev. [4c00785](https://pubs.acs.org/doi/10.1021/acs.chemrev.4c00785)); **Xenobots/Anthrobots** lineage; 🆕 wireless bioelectronic control of biohybrids. [2603.24959](https://arxiv.org/pdf/2603.24959)
- **Physics-grounded differentiable sim for soft growing (vine) robots** (2025). [2501.17963](https://arxiv.org/pdf/2501.17963)

## 6. Compliant-mechanism design (topology-opt + generative/RL)
Compliant mechanisms are converging on learning-augmented topology optimization.
- **Neural-network compliant-mechanism design** — data-driven shape prediction/generative design (Struct. Multidisc. Optim. 2025). [s00158-025-04064-1](https://link.springer.com/article/10.1007/s00158-025-04064-1)
- **Deep-RL topology optimization** — PPO learns material layouts for lightweight/compliant structures and digitized cell designs (2025). [PMC12355488](https://pmc.ncbi.nlm.nih.gov/articles/PMC12355488/) · [S095219762500702X](https://www.sciencedirect.com/science/article/abs/pii/S095219762500702X)
- **Fluidic pressure-driven multi-material compliant-mechanism TO** — soft-actuator design via topology optimization. [2310.10355](https://arxiv.org/pdf/2310.10355)

## 7. Perception, state estimation & the foundation-model frontier
Neural reconstruction closes the sim-real loop; generalist policies are the 2026 edge.
- **PhysTwin** (ICCV 2025) — physics-informed reconstruction + sim of deformables from video; digital-twin substrate. · **Particle-Grid Neural Dynamics** — learn deformable models from RGB-D (2025). [2506.15680](https://arxiv.org/pdf/2506.15680)
- **Gaussian-splatting real-to-sim** for soft-body interaction (2025); 🆕 **GaussTwin** unified sim + correction digital twins (2026). [2603.05108](https://arxiv.org/pdf/2603.05108)
- **PINN pose estimation** for real-time continuum shape reconstruction (RA-L 2025); stochastic continuous-time continuum state estimation. [2510.01381](https://arxiv.org/pdf/2510.01381)
- 🆕 **Continuum Robot Modeling with Action-Conditioned Flow Matching** — generative-model framing of continuum dynamics (2026). [2605.09216](https://arxiv.org/pdf/2605.09216)
- **Deformable-manipulation policies** — FoldNet [2505.09109](https://arxiv.org/pdf/2505.09109), MetaFold (IROS 2025); 🆕 DexKnot [2603.07136](https://arxiv.org/pdf/2603.07136), 🆕 DeformGen topology augmentation [2606.25939](https://arxiv.org/pdf/2606.25939); diffusion VLAs (RDT-1B) crossing into deformables.

---

**Net trend (mid-2026):** soft/continuum control is consolidating on physics-informed *learned surrogates* — DD-PINN Cosserat and condensed-FEM nets that make real-time MPC tractable — plus Koopman linear embeddings, all trained in differentiable-physics gyms (PlasticineLab/SoftZoo/DittoGym, now Genesis) and closed to reality via neural/Gaussian-splat digital twins (PhysTwin, GaussTwin); actuation is the 2026 headline (reconfigurable/self-healing DEAs, living biohybrid muscle) while compliant-mechanism design and even continuum dynamics are being swallowed by generative methods (RL topology-opt, flow matching). Treat `🆕` 2026 preprints and press-release actuator numbers as unverified.
