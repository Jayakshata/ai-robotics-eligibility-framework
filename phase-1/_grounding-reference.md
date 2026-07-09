# Phase 1 — Shared Grounding Reference

**Purpose.** The reusable, cited credential / subject / duration backbone that **every** niche profile draws from — researched once here so per-niche profiles don't re-derive it. Niche profiles reference this for §3 (eligibility credentials), §4 (subject list), and §5 (training programme). Data is 2024–2026, verified via a 4-agent research pass; sources at the end.

> ⚠️ **Load-bearing corrections for the eligibility engine** (each multiply-sourced):
> - **Oxford, Imperial, and Edinburgh have NO degree literally titled "Robotics MSc"** — match on real names (Imperial *MSc Human & Biological Robotics* or *MSc Computing (Visual Computing & Robotics)*; Edinburgh *MSc AI*; Oxford = research-only ORI / AIMS CDT).
> - **Stanford CS336 is NOT robotics** — it is now "Language Modeling from Scratch." Don't use it as a robotics marker.
> - **CMU launched a dedicated BS in Robotics (Fall 2023);** MIT restructured majors (Fall 2024): 6-1/6-2 discontinued, robotics now lives in **6-4 (AI & Decision Making)**; **ETH & TUM teach dedicated Robotics only at master's level.**
> - **AWS ML Specialty (MLS-C01) retired Mar 2026** → use **MLA-C01**. **Azure AI-102 retired Jun 2026** → **AI-103**. **DeepLearning.AI MLOps spec discontinued.**
> - **Open Robotics issues NO official ROS certification** (the well-known one is The Construct's third-party program). **NVIDIA has NO dedicated robotics exam** (closest formal = NCP-OpenUSD).

---

## A. Valued Degrees

### A.1 Undergraduate — two-tier eligibility
- **Tier 1 (auto-qualifying):** Computer Science (esp. with AI/ML), **Robotics Engineering**, Electrical/Electronic & Computer Engineering (EE/ECE), Artificial Intelligence.
- **Tier 2 (qualifying *with evidence* — robotics/AI coursework or a robotics project/ROS capstone):** Mechanical Engineering, Mechatronics, Mathematics/Applied Maths, Physics.
- **The shared foundation ("big three"):** CS + EE + ME. *Build-the-intelligence* roles (perception, learning, planning, VLAs) tilt CS/AI/Math/Physics; *build-the-embodiment* roles (actuation, control, embedded, sim-to-real) tilt Robotics/EE/ME/Mechatronics. The strongest engineers are bilingual across both.
- **Renowned dedicated undergrad programs:** WPI BS Robotics Engineering (the "Unified Robotics" sequence), University of Michigan Robotics BSE, CMU BS Robotics (2023). Strong via CS/EE/ME + robotics: MIT (6-4, Course 2), UPenn (AI BSE w/ Robotics track; GRASP), Georgia Tech (CS threads + 15-cr Robotics minor), ETH/TUM (ME/EE/CS foundation).

### A.2 Postgraduate
- **Acceptable:** MS or PhD in Robotics, CS/AI, EE, or ME (with a robotics/relevant specialization).
- **Renowned taught master's** (firm-core vs. elective-driven noted, matters for transcript checks):
  - *Firm required core:* **CMU MSR** (one course from each of 4 areas: Perception/Cognition/Action/Math), **Michigan MS Robotics** (ROB 501 Math + ROB 550 Lab), **EPFL MSc Robotics**, **TU Delft MSc Robotics**.
  - *Elective-driven (little fixed core):* **ETH MSc Robotics, Systems & Control**, **TUM MSc Robotics, Cognition, Intelligence**.
  - *No single "Robotics MSc" — assembled from departments:* **MIT** (EECS 6-4 / MechE 2), **Stanford** (MSCS, AI track).
  - *Also strong:* **UPenn MSE Robotics (GRASP)**, **Georgia Tech MS Robotics**.

### A.3 Suggested eligibility rule
Tier-1 majors auto-eligible; Tier-2 majors eligible with a transcript/skills checklist: linear algebra + probability; Python & C++; data structures/algorithms; a controls course; signals/embedded exposure; an intro-AI/ML course; and ≥1 robotics course or capstone/ROS project.

---

## B. Canonical Subject Sets

### B.1 Undergraduate foundation (union across flagship programs)
- **Maths:** calculus + differential equations; **linear algebra** (single most load-bearing — a named first-year core at Michigan/Penn); probability & statistics; optimization + numerical methods.
- **Programming & CS:** intro programming (Python + C/C++); data structures & algorithms; software engineering/OOP; computer systems & architecture; embedded/real-time (ROS/ROS2).
- **Physics & mechanics:** mechanics + E&M; statics & rigid-body dynamics; robot kinematics & dynamics; mechatronic/actuation design.
- **Circuits, electronics & signals:** circuits/electronics; signals & systems / DSP; sensors; microcontrollers.
- **Control:** feedback/classical control (a near-universal named requirement); state estimation; localization/mapping/navigation; motion planning.
- **Intro AI/ML:** intro AI; machine learning (+ deep learning); computer vision/perception; RL/imitation learning; planning/decision-making.
- **Integrative:** a dedicated intro-robotics course; a robotics **capstone / systems-integration project** (universal); human-robot interaction (emerging core).

### B.2 Graduate canonical set (ranked by prevalence across 13 taught programs)
- **Near-universal (12–13/13):** kinematics & dynamics / "intro robotics"; machine learning; computer vision/perception; control (feedback/optimal/MPC/nonlinear); RL / robot learning; motion planning & decision-making; classical AI; mathematical foundations.
- **Next tier (10–11/13):** robotic manipulation & grasping (8 programs have a *dedicated* course); SLAM / state estimation / mobile robotics; deep learning.
- **Specialized (4–7/13):** human-robot interaction; 3D/multi-view geometry; legged/aerial/bio-inspired locomotion; convex optimization; haptics/medical/rehab robotics.

---

## C. Certifications (ranked; role-split; 2024–2026)

**Tier 1 — blue-chip (rigor + recognition):** DeepLearning.AI **Machine Learning Specialization** (Ng/Stanford); DeepLearning.AI **Deep Learning Specialization**; **Google Cloud Professional ML Engineer** (top salary premium, experience-gated); **Modern Robotics** (Northwestern, Lynch — gold-standard robotics theory); **edX MicroMasters** — Penn Robotics, Columbia AI, MITx Stats & DS (the *only* credentials here with real master's-credit pathways).

**Tier 2 — strong:** **AWS ML Engineer – Associate (MLA-C01)** (rising MLOps standard); **Azure AI (AI-102 → AI-103)**; **NVIDIA NCA/NCP** (NCP-OpenUSD most robotics-relevant); **Udacity Nanodegrees** (Self-Driving Car, Sensor Fusion, Robotics Software Engineer, Deep RL); **FANUC Academy / FANUC-NOCTI** (strongest US industrial signal); Penn Robotics Specialization (Coursera, Vijay Kumar).

**Tier 3 — role-specific / entry:** **ROS-Industrial** (SwRI, factory-floor ROS); **The Construct** ROS2 courses; **Hugging Face Deep RL** (free, real certificate) and **LeRobot** robotics course (cutting-edge embodied AI, no cert yet); **NVIDIA Jetson AI Specialist** + DLI Isaac path (free); **UR Academy / KUKA College / ABB University** (vendor-locked applied); **SACA / Siemens SMSCP** (cross-vendor).

**Role split:**
- *Research / AI-robotics:* Modern Robotics · Penn/Columbia/MIT edX MicroMasters · DeepLearning.AI ML+DL · Udacity Deep RL · Hugging Face Deep RL + LeRobot · NVIDIA Isaac Lab/GR00T + NCP-OpenUSD · Google PMLE.
- *Applied / industrial:* FANUC/KUKA/ABB/UR · ROS-Industrial · The Construct · Udacity SDC/Sensor Fusion/Robotics SW Eng · Jetson AI Specialist + Isaac ROS · Penn Robotics (Coursera) · cloud ML certs (perception/MLOps layer).

---

## D. Training Duration Model

**Target:** a **job-ready junior AI/robotics engineer** (≈ MS-scope depth minus the research/thesis). Budget **~1,400 learning hours**, 5 phases:

| Phase | Content | ~Hours | Anchor programs |
|-------|---------|--------|-----------------|
| 1. Foundations | Python, linear algebra, probability, calculus, classical ML | ~300 | ML Specialization (Ng) |
| 2. Core robotics | Kinematics/dynamics, control, motion planning, **ROS 2**, SLAM/nav | ~320 | Modern Robotics + Udacity Robotics ND + The Construct |
| 3. AI/ML depth | Deep learning, computer vision, RL/imitation | ~300 | Deep Learning Specialization + RL/CV courses |
| 4. AI-for-robotics specialization | Perception→action, sim-to-real, Isaac/Jetson, learned control | ~260 | NVIDIA DLI/Jetson + Self-Driving Car ND |
| 5. Capstone + portfolio + job prep | End-to-end integrated project, interview prep | ~220 | self-directed capstone |

**Pace → calendar (same ~1,400 h):**
| Weekly pace | Time to job-ready |
|-------------|-------------------|
| 40 h/wk (full-time) | **~9–11 months** |
| 20 h/wk (heavy part-time) | ~16–18 months |
| 12 h/wk (steady part-time) | **~24–30 months** |
| 8 h/wk (light) | ~34–40 months |

Then **+3–9 months of employer ramp** to full productivity — **"job-ready" ≠ "fully productive"**; set the exit bar at job-ready and say so.

**Design principles:** (1) cap foundations — ML fundamentals compress to ~2–3 months part-time; (2) **ROS 2 + a capstone are what make it robotics** vs. a generic AI bootcamp; (3) explicitly budget hardware/sim debug friction (robotics debugging is slower than pure software); (4) give a **stackable certificate spine** (e.g. Jetson AI Specialist + a ROS cert + a cloud ML cert) as verifiable milestones around Phases 3–4.

**Anchors:** BS = 4 yrs; MS Robotics = 16–24 mo (CMU MRSD = 21 mo); PhD = 4–6 yrs. Full-time AI bootcamp ≈ 6 mo (but ML-only, thin on robotics). Coursera Modern Robotics ≈ 120 h; DeepLearning.AI DL Spec ≈ 129 h; Udacity Robotics ND ≈ 4 mo.

---

## Sources (primary/representative)
- Undergrad value & curricula: Coursera robotics career guides; Northeastern; WPI/Michigan/CMU/MIT/Penn/GT/ETH/TUM catalog pages; CMU RI Course of Study; Georgia Tech robotics core areas.
- Graduate syllabi: CMU MSR Handbook & curriculum; UPenn GRASP/catalog; MIT registrar Course 6/2; Stanford ExploreCourses & MSCS AI sheet; Michigan/GT/ETH/EPFL/TUM/Imperial/QMUL/Edinburgh/Delft/Oxford official pages.
- Certifications: DeepLearning.AI/Coursera, Google Cloud, AWS, Microsoft Learn, NVIDIA, Udacity, edX, Hugging Face, The Construct, ROS-Industrial, FANUC/KUKA/ABB/UR, SACA/Siemens official pages.
- Durations: CMU MRSD; Coursera/Udacity/NVIDIA DLI program pages; AI-bootcamp market reviews; engineer onboarding/ramp studies.

*Full per-source URLs are preserved in the research task transcripts. Re-verify time-sensitive items (retiring exams, program restructurings) before publishing eligibility rules.*
