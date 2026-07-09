# Human-Robot Interaction & Collaborative Robots — Trending Research (mid-2026)

*Scope: HRI, intent/communication, shared autonomy, cobots, safety of human-adjacent operation. Bias: newest (2025–2026). `[2026]` = 2026 release. arXiv IDs encode date (`25xx`=2025, `26xx`=2026).*

Unlike vision, HRI has no single SAM2/DINO — it is consolidating around **three substrates**: (a) **LLM/VLM/VLA "brains"** (Gemini Robotics, GR00T) adapted to parse natural-language intent and converse; (b) **shared autonomy that blends human teleop with a *frozen* generalist policy** (diffusion→VLA) rather than a hand-coded assistant; and (c) **Habitat 3.0** as the shared human-in-the-loop simulator. Classical **ISO-grounded safety** (CBFs, speed-and-separation) hardens underneath.

---

## 1. Foundation-model brains for interaction (the closest thing to a "DINO moment")
- **Gemini Robotics / -ER** (Google DeepMind, 2025) — VLA + embodied-reasoning models that respond to conversational language and re-plan live; `[2026]` on-device model + CES-2026 Atlas partnership. [deepmind](https://deepmind.google/models/gemini-robotics/)
- **NVIDIA Isaac GR00T N-series** — open humanoid foundation model cobot behaviors fine-tune from; `[2026]` **N1.6** (Jan 2026). [therobotreport](https://www.therobotreport.com/google-deepmind-introduces-on-device-gemini-ai-model-robots/)
- **Towards Embodied Agentic AI** (survey, 2025) — reference taxonomy of LLM/VLM-driven robot autonomy & interaction. [2508.05294](https://arxiv.org/abs/2508.05294)
- `[2026]` **How Do We Research HRI in the Age of LLMs** — systematic review reframing the whole field around LLMs. [2602.15063](https://arxiv.org/abs/2602.15063)
- Applied: LLM/VLM-assisted assembly cells; `[2026]` intuitive programming + dynamic role allocation [2511.08732](https://arxiv.org/pdf/2511.08732).

## 2. Shared autonomy & assistive teleoperation (the hottest thread)
The shift: from goal-inference copilots to **blending human input with a pretrained generalist policy**, no retraining.
- **Diffusion for Shared Autonomy ("To the Noise and Back")** (RSS 2023) — the diffusion-copilot origin; nudges human actions toward the expert distribution. [2302.12244](https://arxiv.org/abs/2302.12244)
- **IDA — Interventional Diffusion Assistance** (2024) — intervenes only when the human action is bad across *all* goals. [2409.15317](https://arxiv.org/abs/2409.15317)
- `[2026]` **SAPS** — blends teleop with a pretrained VLA at the action level (cosine-similarity arbitration); +up to 82% success. [2606.15568](https://arxiv.org/abs/2606.15568)
- `[2026]` **Assistron** — Bayesian shared autonomy toggling a frozen VLA vs. human refinement for low-bandwidth interfaces. [2606.23147](https://arxiv.org/abs/2606.23147)
- **Consistency-model copilots** (2025) — one-step generation → 100 Hz+ real-time shared control. [2505.16892](https://arxiv.org/abs/2505.16892)
- `[2026]` **AURA** — multimodal shared autonomy for real-world urban navigation [2604.01659](https://arxiv.org/abs/2604.01659); **REALM** — real-time assistance estimates [2504.09243](https://arxiv.org/abs/2504.09243).

## 3. Human intent & motion prediction (the anticipation layer)
- `[2026]` **Joint Prediction of Human Motions and Actions in HRC** — couples trajectory + action forecasting for collaboration. [2604.03065](https://arxiv.org/abs/2604.03065)
- **Uncertainty-aware Probabilistic 3D Human Motion Forecasting** (invertible nets, 2025) — calibrated forecasts sized for safety margins. [2507.14694](https://arxiv.org/abs/2507.14694)
- `[2026]` **Int3DNet** — scene-motion cross-attention for 3D intention prediction in mixed reality. [2603.13355](https://arxiv.org/abs/2603.13355)
- `[2026]` **Open-Ended Goal Inference through Actions & Language** — infers a partner's goal from both channels. [2512.04453](https://arxiv.org/abs/2512.04453)

## 4. Social / human-aware navigation
- **Habitat 3.0** (Meta, ICLR 2024) — co-habitat sim with humanoid avatars + robots; the social-rearrangement / social-nav benchmark substrate. [2310.13724](https://arxiv.org/abs/2310.13724)
- **VLM-Social-Nav** (2024) — VLM scores socially appropriate actions; the VLM-nav reference. [2404.00210](https://arxiv.org/abs/2404.00210)
- `[2026]` **LISN** — first language-instructed social-nav benchmark + fast/slow VLM cost-map modulator [2512.09920](https://arxiv.org/abs/2512.09920); `[2026]` **From Obstacles to Etiquette** [2602.09002](https://arxiv.org/abs/2602.09002).
- **SocialNav-SUB** (2025) — benchmarks VLM scene-understanding for social nav. [2509.08757](https://arxiv.org/abs/2509.08757)
- `[2026]` **NavIsaacLab** — parallel crowd sim for human-aware-nav benchmarking [2606.26265](https://arxiv.org/abs/2606.26265); **Arena 4.0** (ICRA 2025) generative human-centric nav platform.

## 5. Safety of human-adjacent operation (the deployment gate)
Keep learned behavior inside certified envelopes.
- `[2026]` **Embedding ISO 10218 Safety Compliance via CBFs** — forward-predicts worst-case stopping distance, encodes the cobot standard as control-barrier constraints. [2606.13203](https://arxiv.org/abs/2606.13203)
- **Variable Impedance Control per ISO/TS 15066** (2023) — the power-and-force-limiting reference. [2311.13814](https://arxiv.org/abs/2311.13814)
- `[2026]` **Safety-Aware Shared Autonomy with BarrierIK** — CBF-based safe inverse kinematics for teleop. [2603.01705](https://arxiv.org/abs/2603.01705)
- Context: revised **ISO 10218 / ISO/TS 15066** (2025) — speed-and-separation-monitoring + power-force-limiting are now the compliance baseline. [standardbots](https://standardbots.com/blog/collaborative-robot-safety-standards)

## 6. Intent communication (robot → human) & legibility
- **CoRI** (2025) — communicates robot intent for physical HRI. [2505.20537](https://arxiv.org/abs/2505.20537)
- **Controlling Intent Expressiveness with Diffusion** (2025) — one model spanning legible↔ambiguous motion. [2510.12370](https://arxiv.org/abs/2510.12370)
- `[2026]` **Do Robots Need Body Language?** — compares modalities (light, AR, motion) for legible intent in shared spaces. [2604.03451](https://arxiv.org/abs/2604.03451)

## 7. Handovers & physical-HRI data
- **MobileH2R** (CVPR 2025) — generalizable human→mobile-robot handover from scalable synthetic data.
- **ContactHandover** (2024) — contact-guided robot→human handover. [2404.01402](https://arxiv.org/abs/2404.01402)
- `[2026]` **R2HandoverSim** — sim framework + benchmark for robot-to-human handovers. [2606.21011](https://arxiv.org/abs/2606.21011)
- `[2026]` **Human2robot** (AAAI 2026) — robot actions from paired human-robot video; `[2026]` **HRDexDB** paired cross-embodiment dexterous set [2604.14944](https://arxiv.org/abs/2604.14944).

## 8. Learning from human feedback & proactive collaboration
- **MEReQ** (2024) — sample-efficient alignment from human *intervention* (max-ent residual-Q IRL). [2406.16258](https://arxiv.org/abs/2406.16258)
- **ProVox** (2025) — personalization + proactive planning for situated HRC. [2506.12248](https://arxiv.org/abs/2506.12248)
- `[2026]` **RoDiF** — robust fine-tuning of diffusion policies under *corrupted* human feedback. [2602.00886](https://arxiv.org/abs/2602.00886)
- **Comparative Language Feedback** (2024) — reward learning from language comparisons. [2410.06401](https://arxiv.org/abs/2410.06401)

## 9. Assistive / caregiving pHRI & datasets (the substrate)
- **GRACE** (2025) — generalizes robot-assisted caregiving via user-functionality embeddings [2501.17855](https://arxiv.org/abs/2501.17855); **Physical Caregiving Robots @ HRI 2025** workshop framed the subfield. [site](https://caregivingrobots.github.io/)
- **Kaiwu** (2025) — multimodal manipulation + HRI dataset/framework. [2503.05231](https://arxiv.org/abs/2503.05231)
- `[2026]` **EgoVerse** (~1,362 h egocentric human demos, multi-institution) and `[2026]` **TPT-Bench** (robot-egocentric person-following) — the human-data engines feeding interaction policies. [TPT-Bench](https://arxiv.org/abs/2505.07446)
- `[2026]` **NavWareSet** — socially-compliant vs. non-compliant navigation recordings. [SAGE](https://doi.org/10.1177/02783649261447305)

---

**Net trend (mid-2026):** HRI has no single canonical model; it is fusing three lineages — foundation-model **brains** (Gemini Robotics, GR00T) for language/intent, a **shared-autonomy recipe** that blends human teleop with a *frozen* diffusion/VLA policy (IDA→SAPS→Assistron), and **anticipation + legibility** layers (intent/motion forecasting, expressive-motion diffusion) — all gated by **ISO-grounded, CBF-enforced safety** and trained in **Habitat-3.0-class human-in-the-loop sim**. Treat `[2026]` preprints and vendor demo numbers as unverified.
