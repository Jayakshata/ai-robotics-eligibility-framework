# Micro/Nano & Bio-Inspired Robotics — Trending Research (as of mid-2026)

*Scope: micro/nano robotics, bio-inspired/bio-hybrid robotics, aerial manipulation, hardware-software co-design, haptics/tele-robotics. "Trending" = the named systems, methods and datasets people are actively building on in 2024-2026, biased to the newest. **2026 releases flagged inline.***

## Micro/Nano Robotics (medical + learned control)
- **Clinically-ready magnetic microrobots (ETH Zurich / Swiss Vascular)** — *Science* 2025 (doi:10.1126/science.adx1708): soluble gel capsule w/ iron-oxide (steering) + tantalum (X-ray) nanoparticles; navigates bloodstream/CSF, >95% delivery. The field's "SAM2 moment" — first credibly clinical microrobot, now commercialized. https://www.science.org/doi/10.1126/science.adx1708 · https://ethz.ch/en/news-and-events/eth-news/news/2025/11/microrobots-finding-their-way.html
- **Turbo — transformer RL for microrobotic swarms** — *Nature Machine Intelligence* **[2026]**: temporally-extended attention + multi-level domain randomization for sim-to-real swarm navigation in unknown environments. The reference RL recipe for real magnetic swarms. https://www.nature.com/articles/s42256-026-01252-6
- **Model-based RL for ultrasound-driven microrobots** — *Nature Machine Intelligence* 2025: sample-efficient autonomous control without magnetics; shows model-based RL beating model-free for real micro-actuation. https://www.nature.com/articles/s42256-025-01054-2
- **RL microrobot navigation in simulated blood capillaries** — arXiv **[2026]** (2606.26154): standard task/env being adopted for in-vessel autonomy benchmarking. https://arxiv.org/html/2606.26154
- **Dual-Mode Magnetic Continuum Robot** — arXiv 2025 (2510.01761): tethered continuum + untethered microrobot hybrid for targeted delivery. https://arxiv.org/pdf/2510.01761
- **2024 Motile Active Matter Roadmap** — arXiv (2411.19783): the community reference framing physics + control of active/micro-swimmers. https://arxiv.org/pdf/2411.19783

## Bio-Hybrid & Living Robots
- **MuMuTA — biohybrid hand from multiple human muscle tissues** — *Science Robotics* 2025 (scirobotics.adr5512): multi-jointed fingers, ~8 mN / ~4 mm contraction; the headline bio-actuator demo of 2025. https://www.science.org/doi/10.1126/scirobotics.adr5512
- **Meter-scale homeostatic biohybrid robots** — *Chemical Reviews* 2025 (acs.chemrev.4c00785): scaling biological actuators up from mm to meter scale w/ self-regulation. https://pubs.acs.org/doi/10.1021/acs.chemrev.4c00785
- **npj Robotics biohybrid reviews (2025)** — the two canonical survey anchors: living robotics (s44182-025-00056-x) and skeletal/cardiac muscle actuators (s44182-025-00049-w). https://www.nature.com/articles/s44182-025-00056-x · https://www.nature.com/articles/s44182-025-00049-w
- **Xenobots → Anthrobots → Neurobots (Levin/Bongard lineage)** — AI-designed self-assembling living machines; **Neurobots [early 2026]** add a self-built nervous system, moving the frontier from "build it" to "control it." https://www.science.org/doi/10.1126/scirobotics.abf1571

## Cyborg Insects (biohybrid, real-world ready)
- **Swarm-controlled cyborg insects (NTU Singapore + Osaka/RIKEN)** — Jan 2025: leader-follower swarm algorithm coordinating many beetles/roaches for search-and-rescue. https://www.eurekalert.org/news-releases/1069510
- **Cyborg Insect Factory** — *Nature Communications* 2025 (s41467-025-60779-1): vision-guided robotic-arm auto-assembly of insect-computer hybrids — the "manufacturing/scale" unlock. https://www.nature.com/articles/s41467-025-60779-1
- **Light-driven "Bio-Intelligent Cyborg" cockroach** — May 2025: steering via natural sensory system, no wires/surgery/electrodes. https://www.sciencedaily.com/releases/2025/05/250514181651.htm
- **Terrestrial Cyborg Insects for Real-Life Applications** — *Advanced Intelligent Systems* **[2026]** review: consolidates 7 insect platforms (walk/jump/climb). https://advanced.onlinelibrary.wiley.com/doi/10.1002/aisy.202501119

## Bio-Inspired Soft & Insect-Scale Robots
- **RoboBee w/ crane-fly landing legs (Harvard, R. Wood)** — *Science Robotics* 2025 (scirobotics.adq3059): jointed legs + decelerating controller solve safe landing for 100-mg flapping-wing MAVs. https://www.science.org/doi/10.1126/scirobotics.adq3059
- **MIT soft-actuated aerial microrobot (bumblebee-speed)** — Dec 2025: AI controller enables acrobatic flips; paired w/ **DRL hovering** for soft insect-scale MAVs (arXiv 2502.12355). https://news.mit.edu/2025/mit-engineers-design-aerial-microrobot-fly-like-bumblebee-1203 · https://arxiv.org/pdf/2502.12355
- **mCLARI** — shape-morphing insect-scale robot, omnidirectional terrain-adaptive locomotion in confined spaces. https://arxiv.org/pdf/2310.04538
- **Insect-scale aquatic surface robot (water-strider)** — IEEE 2025: piezo + asymmetric footpads, 21.8 BL/s. https://ieeexplore.ieee.org/document/10891884
- **Bioinspired intelligent soft robotics reviews** — *Matter* 2025 & *Advanced Science* 2025: the survey anchors integrating bio-principles + stimuli-responsive actuation + learned control. https://www.cell.com/matter/abstract/S2590-2385(25)00088-8

## Aerial Manipulation
- **Agile & cooperative cable-suspended aerial manipulation** — *Science Robotics* Oct 2025 (scirobotics.adu8015): whole-body kinodynamic planning, ~8× the acceleration of prior multi-lift systems. Flagship result of the year. https://www.science.org/doi/10.1126/scirobotics.adu8015
- **Flying Hand** — arXiv 2025 (2504.10334): end-effector-centric framework unifying aerial-manipulation teleoperation + policy learning. https://arxiv.org/pdf/2504.10334
- **Aerial Elephant Trunk / continuum manipulator** — *Nature Communications* 2024-25 (s41467-024-55157-2): dexterous compliant arm for cluttered/constrained reach. https://www.nature.com/articles/s41467-024-55157-2
- **VLA hits aerial manipulation [2026]** — DroneVLA (2601.13809), AIR-VLA (2601.21602), AERMANI-PLACE (2606.14531), and contextual-contrastive meta-RL (2606.08533): language-conditioned aerial manipulation is the 2026 wave. https://arxiv.org/html/2601.13809v2

## Haptics & Tele-Robotics
- **VLH — Vision-Language-Haptics foundation model** — arXiv 2025 (2508.01361): OpenVLA backbone + LoRA fusing touch/force with vision+language. https://arxiv.org/html/2508.01361
- **"Towards Forceful Robotic Foundation Models" survey** — arXiv 2025 (2504.11827): the reference map for force/contact-aware foundation models. https://arxiv.org/pdf/2504.11827
- **Teleop data-collection stack** — Mobile ALOHA (CoRL 2025), GELLO (IROS 2024), ALOHA 2, and **LeRobot [2026]** (HuggingFace, 2602.22818): the de-facto low-cost bimanual/whole-body pipeline everyone forks. https://mobile-aloha.github.io/ · https://arxiv.org/html/2602.22818v1
- **HACTS** — arXiv 2025 (2503.24070): human-as-copilot bilateral teleop w/ reverse-sync intervention; **HapCompass** rotational haptic device arXiv **[2026]** (2603.30042); **Universal Manipulation Exoskeleton** torque-feedback teleop **[2026]** (2606.14218). https://arxiv.org/pdf/2503.24070

## Tactile Sensing / Touch Foundation Models
- **Sparsh (Meta)** — arXiv 2024 (2410.24090): self-supervised touch representations + benchmark spanning DIGIT/GelSight; the "DINO for touch." https://arxiv.org/html/2410.24090v1
- **UniTouch / UniT** — unified cross-sensor tactile embeddings enabling transfer across heterogeneous sensors.
- **TacVerse** — arXiv **[2026]** (2606.25877): multi-sensor cross-sensor vision-based tactile dataset + benchmark (the emerging standard eval set). https://arxiv.org/html/2606.25877v1

## Hardware-Software Co-Design
- **Benchmark landscape**: SoftZoo (soft-robot co-design), Evolution Gym, PlasticineLab, SoftGym, FluidLab — the standard evaluation suites. https://arxiv.org/html/2505.01458v1
- **DiffuseBot** + **BodyGen** (2503.00533, 2025) + **Natural Selection via Foundation Models** (2503.02249, 2025): generative/foundation-model-driven morphology-control co-optimization is the hot direction. https://arxiv.org/pdf/2503.00533
- **Differentiable co-design tooling** — SDRS shape-differentiable simulator (2412.19127); **GNN-driven morphology+control co-design** arXiv **[2026]** (2603.19582); Design Co-Pilot for task-tailored manipulators (2509.13077, 2025). https://arxiv.org/pdf/2603.19582

---

**Net trend:** the field is converging on *learned, foundation-model-style control (RL + VLA + touch/force models) wrapped around increasingly clinical, self-assembling, and bio-hybrid hardware* — 2025-2026 is when micro/bio robots crossed from lab demos into deployable, autonomously-navigated, language-conditioned systems.
