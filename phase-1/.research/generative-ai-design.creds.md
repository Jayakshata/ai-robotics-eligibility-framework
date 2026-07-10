> Provenance: background research agent (creds pass) for niche **Generative & AI-Driven Design** (slug `generative-ai-design`), Area 1 — Agentic & Applied AI. Mid-2026 (all time-sensitive claims stamped "as of mid-2026"). Raw agent report, preserved verbatim. `✓` grounded (verified against a fetched/searched source) · `~` to-verify (inferred or not fully confirmed).

# Credentials & Eligibility — Engineers Who Build **Generative & AI-Driven Design** (AI acting on ENGINEERING ARTIFACTS)

**Scope reminder (from the niche brief):** AI acting on *engineering artifacts* — generative design, AI-assisted CAD/CAE, topology optimization, **ML surrogate models / neural operators for FEA/CFD**, synthetic-data generation, and hardware-software co-design (grippers, mechanisms, humanoid parts). **NOT** simulation/digital-twins-to-train-robot-policies (Axis A), **NOT** world models (Axis A). The substance is scientific ML + generative models + engineering optimization applied to CAD/CAE.

---

## ⚠️ Load-bearing framing correction for the eligibility engine

**This niche is the outlier inside Area 1.** The Area-1 house shape ("software-first; the gate is SWE + applied-LLM/agent/RAG/eval; nobody needs kinematics") is the correct shape for the *copilots / RAG / agentic* niches — but it is **only half-right here**. Real hiring evidence (SpaceX, PhysicsX, Autodesk Research, Ansys/Altair product teams) shows this niche splits into **two distinct hire archetypes on a shared base**, and the dominant one is *not* an LLM/agent hire at all:

- **Track A — AI-for-Simulation / ML-Surrogate Engineer `✓` (the substance & the harder gate).** Builds **neural-operator / GNN / PINN surrogates** that replace or accelerate FEA/CFD/thermal solvers, plus **generative models (diffusion/GAN/VAE) for inverse design & topology optimization**. This is a **deep-learning + scientific-computing + engineering-physics** hire. It needs **numerical methods, PDEs, and CFD/FEA literacy** — *not* robot kinematics/control, but genuinely more quantitative/physics-heavy than the copilots niche. **PhD/MS-common.** LLM/agent/RAG is largely irrelevant to this track.
- **Track B — AI-CAD / Generative-Design / Design-Automation Engineer `✓` (the software-first, portfolio-friendly track).** Builds **text-to-CAD, CAD-copilots, geometry/knowledge-based-engineering automation, and topology-optimization workflows** (Fusion/nTop/Creo). This track *is* closer to the Area-1 applied-software shape — Python + CAD APIs + some LLM + geometry — and here a portfolio can outweigh a graduate degree.

**Net:** for Track A the entry ticket is *strong ML/DL + numerical-methods + a physics/engineering degree*; robotics/manufacturing domain is baked in, not a bolt-on. For Track B the entry ticket is *software + CAD-API + geometry/generative-ML*, with mechanical-design domain as the differentiator. Do **not** flatten this niche into "applied-LLM engineer."

---

## 1. Acceptable undergraduate degrees (tiered; strongest FOR THIS NICHE)

Grounded in real postings: SpaceX *ML Engineer, Surrogate Modeling* requires **"Bachelor's degree in computer science, data science, engineering, math, physics, or related field"** (or 4+ yrs software dev in lieu). PhysicsX wants **"a background in Physics, Engineering, or equivalent."** Autodesk generative-design roles and aerospace-lightweighting postings list **Mechanical/Aerospace Engineering** bachelor's. `✓`

| Tier | Field | Why it's valued for THIS niche |
|---|---|---|
| **Tier 1 (strongest, Track A)** | **Mechanical / Aerospace / Civil-Structural Engineering** *with heavy computational/ML electives*, **Engineering Physics**, **Applied Math** | The rare double literacy this niche actually rewards: someone who understands FEA/CFD/continuum mechanics *and* can train a neural operator. SpaceX/PhysicsX both name "engineering" and "physics." A ME/AE who added deep learning is the archetypal surrogate/generative-design hire. |
| **Tier 1 (strongest, Track A tie)** | **Computer Science / Data Science / AI-ML** | The DL/optimization/software half of the surrogate & generative-model work. Named first in the SpaceX posting. Strongest when paired with numerical-methods and a physics/engineering minor or project. |
| **Tier 1 (strongest, Track B)** | **Mechanical / Manufacturing / Industrial Engineering** (+ CAD/CAE fluency) | Generative design, topology optimization and AI-CAD are *design-engineering* work first. GD&T, DFM, additive-manufacturing and CAD-modeling literacy is the entry ticket here; software/ML stacks on top. |
| **Tier 2 (qualifying with ML/coding evidence)** | **EE/ECE, Materials Science, Computational Science** | Strong quantitative bases; qualify with demonstrated Python/DL + a CAD/CAE or simulation project. |
| **Tier 3 (supporting)** | **Pure Math / Physics / Statistics** | Underpin neural operators, UQ and generative modeling; feed Track A well but need a domain/CAD bridge. |

**Strongest single profile for this niche `✓`:** a **Mechanical/Aerospace or Engineering-Physics bachelor's who is genuinely fluent in deep learning + numerical methods** (or the mirror image: a CS/Applied-Math grad who took continuum mechanics / FEA / CFD). The niche's differentiator is *bilingualism* between engineering-physics and modern ML — more than in any other Area-1 niche.

---

## 2. Named, highly-valued university programs / courses

**There is NO dedicated "Generative & AI-Driven Design" degree `✓`** — and the two closest-named engineering programs are being wound down (a signal the field is still assembled from parts, not packaged):
- **CMU MS in Computational Design & Manufacturing (MechE)** — *no longer admitting after Spring 2025.* `✓` Do not recommend.
- **MIT CCSE — MS in Computational Science & Engineering (CSE SM)** — strong on paper but **currently NOT accepting external applications.** `✓`

**The real path is assembled from three named program families:**

**(a) Computational Science & Engineering (CSE/CSEM) master's — the premier feeder for Track A `✓`:**
- **UT Austin — Oden Institute, MS/PhD in Computational Science, Engineering & Mathematics (CSEM)** — the flagship US program; three areas (applicable math · numerical analysis & scientific computation · mathematical modeling & applications); faculty across 23 departments. `✓`
- **MIT — Center for Computational Science & Engineering (CCSE)**, incl. the standalone SM and the interdisciplinary CSE PhD. `✓`
- **Harvard SEAS — SM/ME in Computational Science & Engineering (CSE)**; **Brown — ScM in Data-Enabled Computational Engineering & Science (DECES)** (Brown is a scientific-ML powerhouse via **George Karniadakis**, PINN co-originator); **Rice — MCSE.** `✓`

**(b) Engineering-department AI master's — best packaged bridge for this niche `✓`:**
- **CMU — MS in Artificial Intelligence Engineering – Mechanical Engineering** (3 semesters, 120 units, capstone) — an AI master's taught *from an engineering perspective*; the single most on-target named degree found. `✓` (CMU MechE also markets an "AI Engineering" certificate/track.)

**(c) The specific courses that actually teach the methods (name-drop set) `✓`:**
- **MIT 18.337J / 6.338J — "Parallel Computing and Scientific Machine Learning (SciML)"** (Chris Rackauckas; open lecture-book at book.sciml.ai) — neural ODEs/PDEs, surrogates, differentiable simulation. `✓`
- **Stanford CS236 — "Deep Generative Models"** (Stefano Ermon / Aditya Grover) — VAEs, GANs, autoregressive, normalizing flows, energy-based, **score-based diffusion**, and *inverse-problem solving*. Prereq: one of CS221/228/229/230 + probability/calculus. `✓` The core generative-model course for Track A/B.
- **Caltech — AI4Science initiative (Anima Anandkumar / Yisong Yue)** — home of the **Fourier Neural Operator**; the reference group for neural operators (no single public course code found — `~` on a specific code). `✓` initiative / `~` course code.
- **Stanford CS229/CS230** (ML / Deep Learning) and a **numerical-methods / FEM / CFD** course remain the load-bearing prerequisites regardless of school. `✓`

---

## 3. Acceptable postgraduate degrees — and can a portfolio outweigh a graduate degree?

**Acceptable postgrad fields `✓`:** MS/PhD in **Computational Science & Engineering (CSE/CSEM)**, **Mechanical/Aerospace Engineering (computational/ML focus)**, **CS/ML**, **Applied Math**, or **Engineering Physics**. SpaceX prefers **"Master's or PhD in computer science, ML, engineering, or related field."** `✓`

**Portfolio vs. degree — the answer splits by track (this is the key nuance) `✓`:**
- **Track A (ML surrogates / neural operators / generative-for-simulation): a graduate degree carries more weight here than anywhere else in Area 1.** The work is research-adjacent (novel architectures, UQ, PDE learning); **PhD/MS is common and often expected.** A portfolio *can* substitute, but it has to be unusually strong — published neural-operator/surrogate work, a reproduced FNO/DeepONet/MeshGraphNet result on real FEA/CFD data, or Kaggle-grade physics-ML — because the bar is "can you invent/adapt an architecture," not "can you wire an API." `~` (strong inference from SpaceX/PhysicsX "preferred PhD/MS" phrasing + research-heavy responsibilities).
- **Track B (AI-CAD / generative-design / design-automation): yes, a portfolio can outweigh a graduate degree `✓`.** This is applied engineering software — a shipped text-to-CAD tool, a topology-optimization/generative-design case study with real weight/stress numbers, or a CAD-API automation library is job-ready evidence. Autodesk Research's *ML Engineer* baseline is "**at least one internship or equivalent project** involving ML model training and deployment" — i.e., demonstrated projects, not a mandated PhD. `✓`

---

## 4. Named certifications that carry weight (with the DOMAIN moat)

Unlike the copilots niche (where agent/LLM/cloud certs dominate), this niche's highest-signal credentials are **engineering-simulation and CAD/CAE vendor certifications** — the domain moat — **plus** a deep-learning/generative-AI cert for the ML half. Certs supplement a portfolio; they do not replace shipped work.

**THE DOMAIN MOAT — simulation/CAE competency `✓`:**
- **NAFEMS — Professional Simulation Engineer (PSE) Certification.** Issuing body: **NAFEMS** (international association for engineering modelling, analysis & simulation). **Three levels: Entry · Standard · Advanced**; competency-based across Technical Areas (structural mechanics, vibration & dynamics, non-linear effects, **optimisation**, etc.). **Prerequisite is accumulated workplace competency** (specification, planning, execution & interpretation of numerical analysis), tracked via the online **PSE Competency Tracker** — not a single exam. This is the vendor-neutral badge that says "this person actually understands FEA/CAE," which is exactly the credibility a surrogate/generative-design engineer needs to be trusted. **The moat cert for this niche.** `✓`

**Generative-design / CAD-CAE vendor certifications `✓`:**
- **Autodesk Certified Professional / Expert — Generative Design for Manufacturing.** Issuing body: **Autodesk** (Fusion). Ladder: **User → Associate → Professional → Expert**; the Expert exam signals mastery of generative-design workflows (additive, part consolidation, weight reduction, static simulation). There is also an **"Autodesk Certified Credential in Generative Design for Manufacturing"** earned via the **Coursera "Autodesk Generative Design for Manufacturing Specialization"** (4 courses: Additive Manufacturing · Performance & Weight Reduction · Industrial Applications · Part Consolidation). `✓`
- **Dassault Systèmes SOLIDWORKS — CSWA → CSWP → CSWE**, incl. **CSWA-Simulation / CSWP-Simulation / CSWE-Simulation** variants. Baseline CAD/CAE credibility; CSWA = 3-hour exam, ≥70%; CSWP recommends ~6 months full-time SOLIDWORKS use. Issuing body: **Dassault Systèmes.** `✓`
- **~ Ansys certification / learning credentials** — Ansys runs "Ansys Learning" with course credentials and (as of mid-2026) is pushing **Ansys SimAI**; a formal individual "Ansys Certified" exam analogous to SOLIDWORKS is **`~` not fully confirmed** — treat as vendor training credentials rather than a proctored professional cert.

**Deep-learning / generative-AI certifications (for the ML half) `✓`:**
- **NVIDIA Deep Learning Institute (DLI) — physics-informed ML with PhysicsNeMo** (project-based course **co-developed with Prof. George Karniadakis, Brown**); plus the DLI **"Deep Learning for Science and Engineering" Teaching Kit**. DLI issues completion certificates. `✓` (that DLI grants a *formal* named certificate for this exact physics-ML course = `~`).
- **DeepLearning.AI Deep Learning Specialization** (Andrew Ng) — the canonical DL foundation; and **generative/diffusion** short courses. `✓` (widely recognized; specific-to-niche value is foundational, not domain).
- A **cloud ML cert** (AWS ML–Associate / Google PMLE / Azure AI) for the deployment/MLOps layer — same as the shared backbone. `✓`

**What a hiring manager weights most (this niche):** a **NAFEMS PSE (simulation credibility) + a shipped surrogate/generative-design portfolio + PyTorch/JAX depth** beats any stack of MOOC certificates. For Track B, **Autodesk GD-for-Manufacturing Expert + a real lightweighting case study** is the strongest signal.

---

## 5. Experience & portfolio expectations per seniority tier

Synthesized from SpaceX (Level I/II bands, degree-or-4-yrs gate) and the PhysicsX ladder (ML Engineer → Senior → Principal; "2+ years in a data-driven role"). `✓` levels/bands grounded; per-tier YOE partly `~` inference.

| Tier | Typical title(s) | Experience & portfolio bar |
|---|---|---|
| **L1** | Junior ML/Applied-AI Engineer (Surrogate/Generative Design); Generative-Design Engineer I | Bachelor's (CS/eng/physics/math) **or 4+ yrs software dev** (SpaceX gate); **~1 yr Python-for-ML**. Portfolio: one trained surrogate (e.g. reproduce an FNO/GNN on a benchmark PDE/FEA set) **or** a topology-optimization / text-to-CAD case study with real numbers. (SpaceX Level I ≈ $125–145k `✓`.) |
| **L2** | ML/Generative-Design Engineer II | **~2–4 yrs**; PhysicsX names **"2+ years in a data-driven role"** with SWE best-practices (versioning, testing, CI/CD, API design, MLOps). Owns a surrogate or generative-design pipeline end-to-end (data → train → tune → **deploy** into an engineering workflow); understands CFD/FEA well enough to validate outputs. (SpaceX Level II ≈ $145–175k `✓`.) |
| **L3** | Senior ML Engineer / Senior Surrogate-Modeling Engineer; Senior Generative-Design Engineer | **~5–8 yrs**; expert in ≥1 architecture class (FNO/neural operators, MeshGraphNet, Transolver, GNNs, PINNs) *or* generative models (diffusion/GAN for inverse design); leads UQ / active-learning / inverse-design strategy; mentors. MS/PhD common on Track A. `~` |
| **L4/L5** | Principal / Staff ML Engineer; Principal Research Scientist | **~8+ yrs and/or notable published work**; PhysicsX lists **Principal ML Engineer / Principal Research Scientist** roles. Sets the surrogate/generative-design platform direction; owns architecture strategy, physics-fidelity/validation standards, and reliability of AI-generated engineering artifacts. `✓` role tier / `~` YOE. |

**Portfolio artifacts that read as "hireable" for this niche:** a neural-operator/GNN surrogate benchmarked against a real solver (speedup **and** accuracy/error bars); a diffusion/GAN **inverse-design** demo (airfoil, bracket, metamaterial, gripper) with performance validated in FEA/CFD; a topology-optimization or generative-design study with mass/stress deltas; a text-to-CAD or CAD-API automation tool. **UQ and physics-validation are the maturity signal** — anyone can overfit a surrogate; the hire is the one who quantifies where it fails.

---

## 6. Real job-posting evidence (quoted requirement phrasing)

**SpaceX — *ML Engineer, Surrogate Modeling (Vehicle Engineering)* `✓`** (the cleanest single JD for Track A):
- Degree: *"Bachelor's degree in computer science, data science, engineering, math, physics, or related field"* (or 4+ yrs software dev); *preferred Master's or PhD.*
- Core: *"Develop, train, evaluate, and deploy production-grade AI surrogate models that accelerate critical engineering simulation workflows."*
- Methods (preferred): expert knowledge of *"Fourier Neural Operators (FNO), neural operators, MeshGraphNet, Transolver, graph neural networks, physics-informed neural networks."*
- Simulation literacy: *"Strong understanding of traditional simulation and numerical methods (CFD, FEA, thermal analysis)."*
- Stack: *"Proficiency with PyTorch, TensorFlow, or JAX"*; *"experience with NVIDIA PhysicsNeMo or similar surrogate libraries"*; GPU + Linux; **inverse problems / geometry optimization**; UQ + active learning. Bands: Level I $125–145k, Level II $145–175k. **ITAR** (US-person) gated.

**PhysicsX — *Machine Learning Engineer* / *ML Software Engineer, Research* `✓`:**
- *"2+ years' experience in a data-driven role"* with SWE best practices *"(e.g., versioning, testing, CI/CD, API design, MLOps)"*; ability to *"build machine learning models and pipelines in Python"* (TensorFlow/MLflow); distributed compute (Spark/Dask), cloud (AWS/Azure/GCP), Docker/Kubernetes; *"a background in Physics, Engineering, or equivalent."* Roles ladder from ML Engineer → Senior → **Principal**, alongside dedicated **CFD Engineer / FEA Engineer / Research Scientist** posts — i.e., ML and simulation hires sit side-by-side.

**Autodesk Research — *ML Engineer* / *Research Engineer (Manufacturing)* `✓`:**
- ML Engineer: *"at least one internship or equivalent project experience involving machine learning model training and deployment,"* deep-learning framework *"such as PyTorch or TensorFlow,"* RESTful backends (FastAPI/Flask), cloud. Research areas explicitly include *"deep learning, machine learning, computer vision, reinforcement learning ... and generative design."*
- Manufacturing Research Engineer: *"Bachelor's or Master's degree in Engineering, Computer Science, Manufacturing, Robotics, Mechanical Engineering, Industrial Engineering, or a related field."*

**Generative-design / aerospace-lightweighting postings (Track B) `✓`:** typically *"Bachelor's degree in Aerospace Engineering, Mechanical Engineering, or a related field,"* CAD proficiency, *"experience with 3D machine learning techniques and their applications in design, engineering, or manufacturing"* (Autodesk), with lightweighting/topology-optimization framed around automotive & aerospace mass reduction.

**Market/product proof the roles are real & funded (as of mid-2026) `✓`:** **Ansys SimAI** (2026 R1; SimAI Pro/Premium — GenAI trained on simulation history, "10×–100× more design alternatives"); **Altair PhysicsAI** (geometric deep learning on mesh/CAD, "up to 1,000× faster"); **NVIDIA PhysicsNeMo** (open-source physics-ML framework); text-to-CAD from **Zoo.dev (formerly KittyCAD)**, **AdamCAD**, **Spectral Labs SGS-1**; **PTC Creo 11** & **Autodesk Fusion** generative design; and specialist employers **PhysicsX, Monolith AI, Neural Concept** building AI-simulation platforms.

---

## Sources (URLs actually fetched/searched)

- SpaceX — ML Engineer, Surrogate Modeling (Vehicle Engineering): https://job-boards.greenhouse.io/spacex/jobs/8559035002
- PhysicsX careers / job board: https://www.physicsx.ai/careers · https://job-boards.eu.greenhouse.io/physicsx · https://www.builtinnyc.com/job/machine-learning-software-engineer-research/4505041 (403 on direct fetch; details via search snippet)
- NAFEMS Professional Simulation Engineer (PSE) certification: https://www.nafems.org/professional-development/certification/ · https://www.nafems.org/professional-development/certification/about/
- Autodesk certification (Design & Manufacturing; Generative Design for Manufacturing Expert): https://www.autodesk.com/certification/design-manufacturing-certification · https://www.autodesk.com/certification/all-certifications/generative-design-manufacturing-expert (403 direct) · Credly badge: https://www.credly.com/org/autodesk/badge/autodesk-certified-credential-in-generative-design-for-manufacturing
- SOLIDWORKS / Dassault Systèmes certification program (CSWA/CSWP/CSWE + Simulation): https://www.solidworks.com/solidworks-certification-program · https://sourcecad.com/blog/all-about-solidworks-cswa-and-cswp-exam
- Stanford CS236 Deep Generative Models: https://deepgenerativemodels.github.io/ · https://bulletin.stanford.edu/courses/2205691
- MIT 18.337/6.338 Parallel Computing & Scientific ML (SciML, Rackauckas): https://book.sciml.ai/ · https://github.com/mitmath/18337 · https://toc.csail.mit.edu/node/1811
- Caltech AI4Science / neural operators (Anandkumar): https://www.ai4science.caltech.edu/projects/neural-operator.html · https://arxiv.org/pdf/2309.15325 (Neural Operators for Accelerating Scientific Simulations and Design)
- UT Austin Oden Institute — CSEM MS/PhD: https://www.oden.utexas.edu/graduate-studies/ · https://catalog.utexas.edu/graduate/areas-of-study/intercollegial-programs/computational-science-engineering-mathematics/
- MIT CCSE — CSE SM: https://cse.mit.edu/programs-admissions/cse-sm/ · https://catalog.mit.edu/interdisciplinary/graduate-programs/computational-science-engineering/
- Harvard SEAS CSE: https://seas.harvard.edu/masters-computational-science-and-engineering · Brown DECES: https://graduateprograms.brown.edu/graduate-program/data-enabled-computational-engineering-and-science-scm · Rice MCSE: https://ga.rice.edu/programs-study/departments-programs/engineering/computational-science-engineering/computational-science-engineering-mcse/
- CMU MechE — MS in AI Engineering & (discontinued) Computational Design & Manufacturing: https://meche.engineering.cmu.edu/education/graduate-programs/masters-artificial-intelligence-engineering.html · https://www.meche.engineering.cmu.edu/education/graduate-programs/masters/index.html
- NVIDIA DLI physics-ML / PhysicsNeMo (co-dev. Karniadakis, Brown): https://developer.nvidia.com/physicsnemo · https://www.nvidia.com/en-us/training/ · https://resources.nvidia.com/en-us-modulus-pathfactory/science-engineering-kit · https://github.com/NVIDIA/physicsnemo
- Ansys SimAI / Altair PhysicsAI (product proof): https://www.ansys.com/products/ai/simai · https://www.colabsoftware.com/guides/ai-powered-simulation-tools-smarter-faster-design-validation
- Text-to-CAD (Zoo/KittyCAD, AdamCAD, SGS-1, Creo/Fusion): https://zoo.dev/zookeeper · https://thecadhub.com/blog/ai-cad-software/ · https://www.getleo.ai/blog/text-to-cad-tools-comparison-guide
- Autodesk Research careers (AI/ML/generative design): https://www.research.autodesk.com/careers/
- Frontier methods (diffusion/inverse design; Transolver): https://www.nature.com/articles/s44455-025-00005-6 · https://arxiv.org/pdf/2602.04940 (Transolver-3) · https://www.neuralconcept.com/post/applying-machine-learning-in-cfd-to-accelerate-simulation
- Autodesk — topology optimization vs generative design: https://www.autodesk.com/products/fusion-360/blog/topology-optimization-is-not-generative-design/

*Confidence: named degrees, courses, certifications, employers and JD phrasing above are grounded in the sources listed. Items marked `~`: per-tier YOE bands (partly inferred from SpaceX/PhysicsX levels), a formal Ansys individual certification, a specific Caltech neural-operator course code, and whether NVIDIA DLI grants a named certificate for the exact PhysicsNeMo physics-ML course. Re-verify time-sensitive items (SimAI 2026 R1, program admissions status, product claims) before publish.*
