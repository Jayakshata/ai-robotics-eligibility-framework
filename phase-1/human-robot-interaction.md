# Per-Niche Profile — Human-Robot Interaction & Collaborative Robots

> **Template v3.** Roadmap removed; credential-based eligibility, JD-style skill profile, explicit subject list, months-based training programme, and a current trending-research section. Credential/subject/duration data draws on the cited `phase-1/_grounding-reference.md`; HRI/cobot-specific and trending-research signals are research-backed. `✓` grounded · `~` to re-verify at publish · `⏱` time-sensitive (re-research on a schedule).

**Niche:** Human-Robot Interaction & Collaborative Robots · **Axis A cluster:** A9 (Interaction & Multi-Agent) · **Type:** `[F]` HRI · `[S]` cobots (social-assistive / shared-autonomy sub-areas `[★]`)
**Related capabilities:** A1 human-sensing perception · A3 social navigation · A4 compliant/force control (pHRI) · A6 learning-from-humans · A7 LLM/VLM/VLA interaction brains · A10 functional safety · **Platforms (C):** C1 fixed cobot arm · C2 mobile manipulator · C5 humanoid · C3 AMR (social nav) · **Verticals (B):** B1 manufacturing · B9 domestic/service · B4 healthcare/assistive

---

## 1. Definition & Scope
Enabling robots to work **with, around, and for people** — safely, legibly, and cooperatively. This is the field's **most interdisciplinary slice**, fusing robotics/AI with **HCI, cognitive science, psychology, design, and human-factors/safety engineering**. **In scope:** intent recognition & bidirectional communication (verbal/nonverbal), shared autonomy & assistive teleoperation, human-robot teaming, learning from humans, social/assistive robotics, collaborative-robot (cobot) programming, and the **safety of human-adjacent operation** (ISO 10218 / ISO/TS 15066). Two poles run through it — **(a) social/assistive/interactive HRI** and **(b) collaborative-robot / physical-HRI + safety**. **Out of scope (adjacent):** the generic perception stack (A1), the compliant-control theory it consumes (A4), and VLA policy internals (A7) — HRI *uses* these but centers the human.

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior HRI / Cobot Engineer | Implements interaction behaviors & cobot cells under supervision; runs user-study sessions; integrates human-sensing→interaction on real hardware; assists risk assessments. |
| **L2** | HRI / Cobot Engineer | Owns an interaction subsystem or a collaborative workcell end-to-end (human sensing→intent→behavior→safe execution); designs & runs a user study; delivers an ISO/TS 15066-validated deployment. |
| **L3** | Senior HRI Engineer / Interaction Designer-Engineer | Architects the interaction stack & shared-autonomy policy; sets HRI metrics & the safety envelope; makes teleop-vs-autonomy tradeoffs; mentors. |
| **L4/L5** | Staff / Principal HRI Research Scientist | Sets the interaction research agenda; advances shared-autonomy / social-HRI / trust SOTA; publishes at ACM/IEEE HRI, RSS, CoRL; org-wide direction. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials

**Acceptable undergraduate degrees** — Tier 1 (auto): CS (with AI/ML), Robotics Engineering, EE/ECE, AI. Tier 2 (with evidence): Mechanical Engineering, Mechatronics, Maths, Physics. **HRI-specific `✓`: this is the *only* AI-for-robotics niche where human-science degrees become first-class — HCI rises to Tier 1; Cognitive Science / experimental & social Psychology and Design/Interaction Design become valued-with-evidence.** For the cobot/pHRI sub-pole, **Human Factors / Ergonomics & Industrial/Safety Engineering also rise** (and ME/Mechatronics rises for contact safety). A CS/AI grad still needs a human-facing signal (an HCI course, a user study, or learning-from-humans work) to be credible on the social side.

**Highly-valued undergraduate programs `✓`** — **CMU** (uniquely offers **16-467 as a UG course** — rare dedicated UG HRI; RI + **HCII**) is the standout · **Georgia Tech** (School of Interactive Computing → CS 7633) · **UW Allen School** (Cakmak, human-centered robotics) · **Cornell** (Information Science + robotics; Hoffman/Jung) · **MIT** (6-4 + Media Lab UROPs) · **Tufts** (CS + cognitive science).

**Acceptable postgraduate degrees** — MS/PhD in Robotics, CS/AI, **HCI**, or ME with an HRI / interactive-robotics / human-factors focus. *(HCI master's — e.g. CMU MHCI — counts here uniquely.)*

**Highly-valued postgraduate programs — ranked by HRI strength `✓`**
| Tier | Programs | The signal |
|------|----------|-----------|
| World-leading | **CMU · Stanford · MIT · UC Berkeley** | CMU **16-467 Introduction to HRI** (Simmons→Admoni/Erickson) — *the* anchor survey (anthropomorphism, implicit communication, intent inference via MDPs, trust, social nav, learning-from-humans, assistive) + RI/HCII · Stanford **CS 333 Safe & Interactive Robotics** (Sadigh) + CS 237B · MIT **Shah Interactive Robotics Group** (human-robot *teaming*) + **Breazeal Personal Robots Group** (social — the field's origin) · Berkeley **Dragan / InterACT** "Algorithmic Foundations of HRI" (legible motion, assistive teleop & shared autonomy) |
| Very strong | **Georgia Tech · USC · UW** | GT **CS 7633 HRI** (Chernova, RAIL — metrics/evaluation, LfD, collaboration, ethics) · USC **Matarić** coined & leads **socially assistive robotics (SAR)** · UW **Cakmak** Human-Centered Robotics Lab (teaching robots, end-user programming, assistive) |
| Strong / specialized | **Cornell · Tufts · Yale · UT Austin · (EU) Twente · KTH · Bielefeld · Plymouth** | Cornell Hoffman/Jung · Tufts Scheutz (verbal/cognitive HRI) · Yale Scassellati (social robots) · UT Austin Thomaz (interactive robot learning) · **Twente MSc Robotics — dedicated "HRI & Social AI" track** (clearest niche-named master's) · KTH (Leite) · Bielefeld CITEC (Eyssel) · Plymouth/Ghent (Belpaeme) |

**Highly-valued certifications `✓`** — **edX "Human-Robot Interaction" Professional Certificate** (Univ. of Canterbury / Bartneck — Intro + Methods & Application, incl. **designing & running an HRI user study**; the single most niche-relevant MOOC) · the **Bartneck et al. *HRI: An Introduction*** textbook (free at `human-robot-interaction.org` — the field's standard, de-facto curriculum anchor) · **Universal Robots Academy** (first IACET/CEU-accredited **cobot** certification; vendor peers **KUKA College**, **FANUC CRX**, **ABB YuMi**) · **A3 (RIA) robot-safety training** on ISO 10218 / ISO/TS 15066 & **ANSI/A3 R15.06-2025** + **A3 Certified Robot Integrator** · **TÜV Rheinland Functional Safety for Machinery Engineer** (ISO 13849-1, IEC 62061). *Substrate:* Modern Robotics + Penn Robotics (kinematics base); Hugging Face Deep RL (learning-from-humans layer).

**Experience & portfolio** — L1: internship/academic; a Wizard-of-Oz or cobot demo + one user study. L2: 2–4 yr, a deployed interaction subsystem **or** an ISO/TS 15066-validated cobot cell, with a user study reporting standardized metrics (Godspeed/trust). L3: 5–8 yr, ≥1 real human-facing deployment led. L4/L5: 8+ yr and/or first-author papers (ACM/IEEE HRI, RSS, CoRL, THRI).

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python**; **C++** for real-time robot integration
- **ROS 2** development and real-robot integration
- **Human sensing**: pose/skeleton, gaze, gesture, activity & speech recognition; multimodal perception of people
- **HRI research methods**: user-study design, **Wizard-of-Oz**, IRB/ethics, standardized metrics (Godspeed, trust scales), quantitative + qualitative analysis — with real **probability, statistics & hypothesis testing**
- **Intent & goal inference** (Bayesian inference, MDPs/POMDPs, theory-of-mind modeling)
- **Interaction behavior design**: verbal & nonverbal communication (gaze, gesture, proxemics, expressive/**legible** motion)
- **Cobot programming** & collaborative-workcell integration on a major vendor (UR / KUKA / FANUC / ABB)
- **Cobot safety engineering**: ISO 10218 / ISO/TS 15066, **speed-&-separation-monitoring (SSM)**, **power-&-force-limiting (PFL)**, hand-guiding, biomechanical limits, risk assessment
- **Compliant / impedance control** & collision detection/reaction for physical-HRI contact safety
- **ML for interaction**: learning-from-demonstration/imitation, RL fundamentals, PyTorch

**Preferred / differentiating**
- **Shared autonomy & assistive teleoperation** (blending human input with a *frozen* generalist policy; latent actions)
- **LLM/VLM-driven interaction** & language grounding (conversational, instructable robots)
- **Learning human reward/preferences** (RLHF-style, inverse RL, learning from feedback/interventions/language)
- **Social & socially-assistive robotics** (affect/engagement, long-term personalization)
- **Human motion & intent forecasting** for safe collaboration; **social/crowd-aware navigation**
- **Functional-safety certification** workflow (ISO 13849 / IEC 62061; TÜV)
- Publications at **ACM/IEEE HRI, RSS, CoRL, THRI**; real human-subjects deployment

**Tools & tech stack** — *Languages:* Python, C++ · *Middleware:* ROS 2, Nav2 (social nav), MoveIt 2 · *Human sensing:* MediaPipe / OpenPose / RTMPose, Azure Kinect / Orbbec body tracking, Whisper (speech), OpenFace/eye-tracking · *Sim:* **Habitat 3.0** (human-in-the-loop), Isaac Sim/Lab, Gazebo, Arena / NavIsaacLab · *Learning/FM:* PyTorch, LeRobot, diffusion/flow copilots, Gemini Robotics-ER / GR00T interfaces, LLM APIs for language · *Cobots:* Universal Robots (URScript/PolyScope), KUKA iiwa (Sunrise), FANUC CRX, ABB YuMi/RobotStudio, Franka · *Safety:* SICK/Pilz/Keyence safety scanners & light curtains, safety PLCs (Pilz PNOZ), F/T sensors, ISO/TS 15066 force/pressure measurement kit `~` · *Study tooling:* Godspeed/NARS/trust instruments, PsychoPy/Qualtrics, ELAN/BORIS behavioral coding `~`

**Bar by tier** — L1: solid on the required list; can run a scripted study + a safe cobot cell · L2: ships a human-facing subsystem or validated cobot cell, fluent across sensing→interaction→safety · L3: architects interaction + shared-autonomy systems, deep in ≥1 differentiating area · L4/L5: advances SOTA / publishes / sets direction.

## 5. Core Subject List `✓`
HRI slice of the canonical robotics/AI subject set, annotated with representative courses.
- **Foundational maths & CS:** linear algebra · probability & statistics · **experimental design & hypothesis testing** *(unusually central — HRI validates via human-subjects studies; CMU 16-467 study design, GT CS 7633 Metrics & Evaluation)* · optimization · data structures & algorithms · Python + ROS 2.
- **Core robotics:** kinematics & dynamics · feedback/compliant/impedance control · motion planning & **(social) navigation** *(CMU 16-467)* · **human sensing / perception for HRI** — pose, gaze, gesture, activity, speech *(GT CS 7633, CMU 16-467)* · manipulation & physical-contact basics.
- **Niche-specific:** HRI foundations, taxonomy & autonomy levels *(Bartneck text, CMU 16-467, GT CS 7633)* · verbal & nonverbal communication — gaze/gesture/proxemics/emotion/implicit signals *(CMU 16-467, GT, edX)* · anthropomorphism & social-robot design, the "uncanny valley" *(edX, GT)* · trust, transparency, **legibility & predictability of motion** *(Berkeley/Dragan, CMU)* · intent recognition / theory-of-mind / plan-&-goal inference — Bayesian, MDPs *(CMU 16-467, Berkeley)* · **shared autonomy & assistive teleoperation** *(Berkeley/Dragan, Stanford CS 333)* · human-robot teaming — task allocation, scheduling, decision authority, mixed-initiative *(MIT/Shah, GT)* · learning from humans — LfD, preferences/feedback, active/interactive, end-user programming *(GT, Berkeley, UW/Cakmak)* · social & **socially-assistive robotics** *(USC/Matarić)* · HRI research methods — user studies, Wizard-of-Oz, IRB/ethics, Godspeed *(edX Methods, CMU, GT)* · **cobot safety engineering** — ISO 10218/TS 15066, SSM, PFL, hand-guiding, biomechanical limits, risk assessment; ISO 13849 functional safety *(A3/RIA, TÜV, NIST)* · **physical HRI (pHRI)** — compliant/impedance control, collision detection & reaction *(links A4; DLR/Albu-Schäffer)*.
- **Frontier/advanced:** LLM/VLM-driven interaction & language grounding *(2024–26 "HRI in the age of LLMs")* · learning human reward/preferences (RLHF/IRL for interaction) *(Berkeley/Stanford)* · adjustable/mixed-initiative autonomy & explainable robot behavior *(MIT/Shah, CMU)* · multimodal social-signal processing & affective computing *(USC, Bielefeld)* · trust calibration, value alignment & safe interaction; ethics & societal impact *(CMU 16-467 Nourbakhsh ethics, GT)* · long-term interaction, adaptation & personalization *(USC SAR)*.

## 6. Training Programme Design & Duration `✓`
HRI-specialization programme on the shared 5-phase, ~1,400-hour base (grounding ref §D), phase 4 + capstone tuned to HRI/cobots. Note the HRI twist: **statistics/experimental-design is weighted up** (Phase 1), and **human-subjects/IRB + safety-validation friction is budgeted into Phases 4–5** (running a study and certifying a cell are slow — the HRI analogue of sim-to-real debug).

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Maths, **probability & experimental design/stats**, Python/C++, classical ML | 2.0 mo | 6 mo | 300 | ML & stats fluency |
| 2. Core robotics | Kinematics/control, motion planning, **ROS 2/Nav2**, human sensing | 2.0 mo | 6–7 mo | 320 | Command a robot + perceive people, sim + real |
| 3. AI/ML depth | Deep learning, computer vision (human sensing), RL/imitation | 2.0 mo | 6 mo | 300 | Perception + learning-from-humans |
| 4. **HRI & cobot specialization** | Intent inference, communication/legibility, shared autonomy, teaming, LfD, **cobot programming + ISO/TS 15066 safety**, user-study methods | 1.5 mo | 5 mo | 260 | The niche core |
| 5. Capstone + portfolio | Human-facing capstone (shared-autonomy assist **or** ISO-validated cobot cell) + a real user study + interview prep | 1.5–2.0 mo | 4–5 mo | 220 | Job-ready evidence |
| **Total** | | **≈ 9–11 months** (full-time) | **≈ 24–30 months** (part-time) | ~1,400 | Junior HRI / cobot engineer |

Compressible to **~16–18 months at 20 h/wk**; then **+3–9 months employer ramp**.

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** HRI has no single SAM2/DINO; it's consolidating around **three substrates**: foundation-model **brains** (Gemini Robotics, GR00T) for language/intent, a **shared-autonomy recipe** that blends human teleop with a *frozen* diffusion/VLA policy, and **Habitat-3.0-class** human-in-the-loop sim — all gated by **ISO-grounded, CBF-enforced safety**. `🆕` = 2026 release. Treat 2026 preprints & vendor demo numbers as unverified.

- **Foundation-model brains for interaction (the closest thing to a "DINO moment"):** **Gemini Robotics / -ER** (Google DeepMind — VLA + embodied-reasoning that converse & re-plan live; 🆕 on-device model + CES-2026 Atlas partnership) · NVIDIA **Isaac GR00T N-series** (open humanoid FM cobot behaviors fine-tune from; 🆕 **N1.6**, Jan 2026) · **Towards Embodied Agentic AI** (2025 survey — LLM/VLM autonomy taxonomy) · 🆕 **How Do We Research HRI in the Age of LLMs** (systematic review reframing the field around LLMs) · applied LLM/VLM-assisted assembly cells with 🆕 intuitive programming + dynamic role allocation.
- **Shared autonomy & assistive teleoperation (the hottest thread):** the shift from goal-inference copilots to **blending human input with a pretrained generalist policy, no retraining** — **Diffusion for Shared Autonomy** ("To the Noise and Back", RSS 2023 — the diffusion-copilot origin) → **IDA / Interventional Diffusion Assistance** (2024, intervenes only when the human action is bad across *all* goals) → 🆕 **SAPS** (blends teleop with a pretrained VLA at action level; +up to 82% success) · 🆕 **Assistron** (Bayesian toggling of a frozen VLA vs. human refinement for low-bandwidth interfaces) · **consistency-model copilots** (2025, one-step → 100 Hz+ real-time) · 🆕 **AURA** (urban nav), **REALM** (real-time assistance estimates).
- **Human intent & motion prediction (the anticipation layer):** 🆕 **Joint Prediction of Human Motions and Actions in HRC** (couples trajectory + action forecasting) · **Uncertainty-aware Probabilistic 3D Human Motion Forecasting** (2025, calibrated for safety margins) · 🆕 **Int3DNet** (3D intention in mixed reality) · 🆕 **Open-Ended Goal Inference through Actions & Language**.
- **Social / human-aware navigation:** **Habitat 3.0** (Meta, ICLR 2024 — co-habitat sim + the social-nav/social-rearrangement benchmark substrate) · **VLM-Social-Nav** (2024 — VLM scores socially appropriate actions) · 🆕 **LISN** (first language-instructed social-nav benchmark) · 🆕 **From Obstacles to Etiquette** · **SocialNav-SUB** (2025) · 🆕 **NavIsaacLab** (parallel crowd sim); **Arena 4.0** (ICRA 2025).
- **Safety of human-adjacent operation (the deployment gate):** 🆕 **Embedding ISO 10218 Safety Compliance via CBFs** (encodes the cobot standard as control-barrier constraints; forward-predicts worst-case stopping distance) · **Variable Impedance Control per ISO/TS 15066** (2023 — the PFL reference) · 🆕 **Safety-Aware Shared Autonomy with BarrierIK** (CBF-based safe IK for teleop) · context: **revised ISO 10218 / ISO/TS 15066 (2025)** — SSM + PFL now the compliance baseline.
- **Intent communication (robot→human) & legibility:** **CoRI** (2025 — communicates robot intent for pHRI) · **Controlling Intent Expressiveness with Diffusion** (2025 — one model spanning legible↔ambiguous motion) · 🆕 **Do Robots Need Body Language?** (compares light / AR / motion for legible intent in shared spaces).
- **Handovers & physical-HRI data:** **MobileH2R** (CVPR 2025 — human→mobile-robot handover from synthetic data) · **ContactHandover** (2024 — contact-guided robot→human handover) · 🆕 **R2HandoverSim** (sim + benchmark) · 🆕 **Human2robot** (AAAI 2026) + 🆕 **HRDexDB** (paired cross-embodiment dexterous set).
- **Learning from human feedback & proactive collaboration:** **MEReQ** (2024 — alignment from human *intervention*, max-ent residual-Q IRL) · **ProVox** (2025 — personalization + proactive planning for situated HRC) · 🆕 **RoDiF** (robust diffusion-policy fine-tuning under *corrupted* human feedback) · **Comparative Language Feedback** (2024 — reward learning from language comparisons).
- **Assistive / caregiving pHRI & data engines:** **GRACE** (2025 — generalizes robot-assisted caregiving via user-functionality embeddings) + **Physical Caregiving Robots @ HRI 2025** workshop · **Kaiwu** (2025 — multimodal manipulation + HRI dataset) · 🆕 **EgoVerse** (~1,362 h egocentric human demos) & 🆕 **TPT-Bench** (robot-egocentric person-following) · 🆕 **NavWareSet** (socially-compliant vs. non-compliant navigation recordings).

*Net trend: HRI is fusing three lineages — foundation-model brains for language/intent, a shared-autonomy recipe blending human teleop with a frozen diffusion/VLA policy (IDA→SAPS→Assistron), and anticipation + legibility layers — all gated by ISO-grounded, CBF-enforced safety and trained in Habitat-3.0-class human-in-the-loop sim. Several 2026 items are fresh preprints — treat vendor benchmark claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Real-time **human-sensing pipeline** (skeleton + gaze + gesture) in ROS 2 (MediaPipe / Azure Kinect) | Human perception; stable multi-person tracking + gesture classification |
| Foundational | **Wizard-of-Oz** study on a tabletop/social robot, analyzed with **Godspeed** | HRI methods; a clean user study with reported metrics & basic stats |
| Applied | **Cobot pick-assist cell** on a UR5e with **SSM + PFL** per ISO/TS 15066 | Cobot programming + safety; a risk-assessed cell passing force/separation checks |
| Applied | **Legible/expressive motion**: Dragan-style legible reach + measure human goal-prediction | Intent communication; humans predict the goal faster vs. a baseline |
| Advanced | **Shared-autonomy teleoperation**: blend joystick input with a diffusion/VLA copilot (IDA/SAPS-style) | Shared autonomy; higher success + lower effort vs. pure teleop |
| Advanced | **Intent-aware collaboration**: forecast human motion/goal, re-plan a **handover** on a cobot | Anticipation + teaming; safe, fluent robot→human handover |
| Advanced | **LLM/VLM-driven instructable robot**: language→grounded action + clarification dialog | Conversational HRI; natural-language task with grounding & repair |
| Capstone | **End-to-end human-facing system**: human sensing → intent → legible behavior → ISO-safe execution, validated in an **IRB-style user study** | Full stack + evidence; deployed demo with a real study reporting trust/success/safety |

## 9. Required Lab Setup / Hardware / Resources
- **Cobot arms:** Universal Robots **UR5e/UR10e** · **KUKA LBR iiwa** (torque-sensing/sensitive) · **FANUC CRX** · **ABB YuMi** (dual-arm) · **Franka Research 3** (compliant, research-friendly).
- **Social / mobile / humanoid platforms:** **TIAGo** (PAL) · **Stretch** (Hello Robot — assistive) · Fetch/Freight · **Pepper / NAO** (social) · **Furhat / QTrobot** (affective faces) · **Unitree G1**-class humanoid (HRI on C5).
- **Human sensing:** Azure Kinect / Orbbec (body tracking) · Intel RealSense · Tobii / Pupil Labs eye trackers · ReSpeaker mic arrays · MediaPipe/OpenPose/RTMPose · Whisper (speech).
- **Safety hardware:** SICK / Pilz / Keyence safety laser scanners & light curtains · dual-channel safety relays/PLCs (Pilz PNOZ) · ATI / Bota F/T sensors · **ISO/TS 15066 force/pressure measurement kit** (e.g., GTE Pressure Profile, PILZ PROBms) `~`.
- **Compute:** RTX 4090 / A6000 workstation; A100/H100 for VLA/LLM fine-tuning.
- **Software / sim:** ROS 2 + Nav2 + MoveIt 2 · **Habitat 3.0** (human-in-the-loop) · Isaac Sim/Lab · Gazebo · Arena / NavIsaacLab (social nav) · PyTorch + LeRobot · study tooling (PsychoPy/Qualtrics, ELAN/BORIS) `~`.
- **Datasets & benchmarks:** Habitat 3.0 social-rearrangement/social-nav · **SocialNav-SUB** · **Kaiwu** · **EgoVerse** · **TPT-Bench** (person-following) · **NavWareSet** · handover sets (**R2HandoverSim**, **HRDexDB**) · JRDB / THÖR human-nav corpora `~` · Godspeed/NARS/trust questionnaire instruments.

## 10. Partnerships & Ecosystem
- **Cobot / hardware vendors:** Universal Robots · KUKA · FANUC · ABB · Franka Robotics · PAL Robotics · Hello Robot · SoftBank Robotics · Furhat Robotics.
- **Safety hardware & bodies:** SICK · Pilz · Keyence · **TÜV Rheinland** · **A3** (Association for Advancing Automation / RIA).
- **Sim / compute:** Meta AI (**Habitat**) · NVIDIA (Isaac, DLI, Inception) · Google DeepMind (**Gemini Robotics**).
- **Academic labs (HRI powerhouses):** CMU (RI + HCII — Admoni/Erickson/Simmons) · Stanford (Sadigh/ILIAD) · MIT (**Shah** Interactive Robotics; **Breazeal** Personal Robots) · UC Berkeley (**Dragan**/InterACT) · Georgia Tech (**Chernova**/RAIL) · USC (**Matarić** — SAR) · UW (**Cakmak**) · Cornell (Hoffman/Jung) · Yale (Scassellati) · Tufts (Scheutz) · UT Austin (Thomaz) · KTH (Leite) · Bielefeld CITEC (Eyssel) · Twente.
- **Open-source communities:** Open Robotics (ROS/Nav2/MoveIt) · Hugging Face **LeRobot** · Habitat.
- **Conferences & venues:** **ACM/IEEE International Conference on HRI** · RO-MAN · **ACM THRI** journal · RSS/CoRL (interaction tracks).
- **Standards / certification bodies:** ISO (**10218-1/2, ISO/TS 15066**, ISO 13482 personal-care, ISO 13849) · IEC (62061, 60204) · A3/RIA (**R15.06-2025**, Certified Robot Integrator) · TÜV (Functional Safety Engineer) · Universal Robots Academy (IACET/CEU).

## 11. Assessment & Validation
- **Knowledge checks** per subject-list theme — including an **experimental-design/statistics check** distinctive to this niche.
- **Project rubrics** with objective metrics: collaboration task success & fluency, teleoperation effort/time reduction under shared autonomy, human goal-prediction time (legibility), trust & Godspeed/NARS scores, and **safety-envelope compliance** (measured SSM separation, PFL force/pressure vs. ISO/TS 15066 biomechanical limits).
- **Human-subjects study quality** as the niche's signature deliverable: a properly designed, IRB-style study with a control condition, adequate N, and correct statistics.
- **Standardized benchmarks** as portable evidence: Habitat 3.0 social-nav/social-rearrangement, SocialNav-SUB, handover (R2HandoverSim), person-following (TPT-Bench).
- **Recognized certifications as evidence:** edX HRI Professional Certificate; Universal Robots Academy cobot cert; A3 ISO/TS 15066 safety training; TÜV Functional Safety.
- **Senior tiers:** portfolio + system-design interview (interaction + safety architecture) + live user-study / risk-assessment critique.

## 12. Adjacent & Related Niches
Feeds the **C5 Humanoid** and **C1/C2 cobot & mobile-manipulator** platform tracks and the **B1 manufacturing / B9 domestic-service / B4 healthcare-assistive** verticals; pairs closely with **A1 human-sensing perception**, **A4 compliant/force control (pHRI)**, **A6 learning-from-humans**, **A7 LLM/VLM/VLA brains**, and **A10 functional safety**. Sibling within **A9** = multi-robot / multi-agent coordination. (Reference only — seniority ladder is in §2.)

---
*Template: `phase-1/_TEMPLATE.md` (v3). Shared data: `phase-1/_grounding-reference.md`. Taxonomy: `master-niche-taxonomy.md` cluster A9 (`~`). §7 stamped mid-2026 — re-research before publish.*
