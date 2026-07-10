# Credentials & Eligibility Research — LLMOps & AI Platform Engineering

> **Niche:** LLMOps & AI Platform Engineering (slug: `llmops-ai-platform`) · **Area:** 1 — Agentic & Applied AI (non-embodied) · **Niche #6**
> **Scope researched:** the PLATFORM/INFRA layer that ships the rest of Area 1 reliably — prompt engineering, evals, fine-tuning/adaptation (LoRA/QLoRA), serving & deployment, guardrails, cost/latency optimization, observability/monitoring.
> **Boundary:** NOT agent logic (that's `agentic-llm-orchestration`); NOT training foundation models from scratch ("consume, don't build"). Fine-tuning/adaptation IS in scope.
> Research pass: **as of mid-2026 (2026-07-10)**. `✓` grounded against a fetched source · `~` to-verify / market-reported / approximate.

---

## Headline finding

This is a **software-first, ops-first** role. The gate is **software/platform engineering + demonstrable LLM production ability** (serving, evals, cost, observability), not a specific degree. Across real postings, **degree requirements are frequently absent or offered as a "degree OR equivalent experience" alternative**, and every role-blueprint source explicitly ranks **hands-on production experience above formal credentials**. There is **no dedicated "LLMOps" degree**; the closest academic anchor is **CS/Software Engineering + a machine-learning-systems / ML-in-production course**. Certifications here are **stackable proof-of-competence** (cloud GenAI-engineer + Kubernetes + an NVIDIA GenAI cert), and the distinctive **moat certs are the AI-governance/assurance credentials** (IAPP AIGP, ISO/IEC 42001 Lead Auditor, ISACA AAISM) that the platform layer increasingly must speak.

---

## 1. Acceptable undergraduate degrees (tiered; strongest for THIS niche)

**Software-first `✓`** — the entry ticket is software + platform/SRE + applied-LLM ability. Domain (robotics/manufacturing) knowledge is **not** required for this infra niche; it is a differentiator that lives in the copilot/RAG niches, not here.

- **Tier 1 (strongest for this niche) `✓`** — **Computer Science / Software Engineering**, **Artificial Intelligence / Machine Learning**, **Data Science**. Real postings anchor here: Capital One's *Lead AI Engineer (Gen AI Platform)* lists *"Bachelor's degree in Computer Science, AI, Electrical Engineering, Computer Engineering, or related fields."* `✓`
- **Tier 2 (qualifying with evidence) `✓`** — **Electrical/Electronic & Computer Engineering (EE/ECE)**, **Computer Engineering**. These qualify when paired with strong software + a shipped LLM/MLOps project (Capital One explicitly accepts EE/CompE). `✓`
- **Adjacent-but-acceptable** `~` — Maths/Physics/Statistics with heavy programming, **if** backed by a production portfolio; treat as Tier 2 with a skills-checklist gate (Python packaging/testing, containers, CI/CD, a deployed model service).
- **Degree-optional in practice `✓`** — Scale AI's *Senior AI Infrastructure Engineer, Model Serving Platform* posting specifies **no degree at all**, only *"4+ years building large-scale, high-performance backend systems."* The LLMOps role-blueprint states a *"Bachelor's degree in Computer Science/Engineering preferred"* but that a *"Graduate degree is optional; not required if hands-on production experience is strong."* `✓`

**Strongest for THIS niche specifically:** **CS/Software Engineering** (the platform, SRE, and distributed-systems core) edges out a pure ML degree, because the daily work is systems/ops (serving, gateways, CI/CD, observability, cost) more than modeling. An AI/ML degree is co-equal Tier 1 when the person also has real software-engineering discipline.

---

## 2. Named, highly-valued university programs / courses

**There is NO dedicated "LLMOps / AI Platform Engineering" degree `✓`.** State this plainly. Strength for this niche = **CS/SWE depth + a machine-learning-systems / ML-in-production course + an LLM/NLP course**. The named anchors:

**The two canonical university courses (closest to this niche):**
- **Stanford CS329S — "Machine Learning Systems Design"** (Chip Huyen). Project-based; designing/developing/**deploying** ML systems at scale; monitoring, data/feature systems, deployment. Lecture notes became the O'Reilly book *Designing Machine Learning Systems* (2022). Materials are public on the course site. `✓` *(~ Note: last taught ~Winter 2021–22; verify whether it is currently offered — the book is the durable artifact.)*
- **CMU 17-645 / 17-445 — "Machine Learning in Production" (cross-listed 11-695 "AI Engineering")** (Christian Kästner). End-to-end lifecycle of building, deploying, **assuring**, and maintaining products with ML models; covers **MLOps + responsible AI** (safety, security, fairness, explainability). Corresponds to the 2025 textbook *Machine Learning in Production: From Models to Products*; slides/assignments public. **This is the strongest *currently-taught* university course for the niche.** `✓`

**Foundational LLM/NLP courses (name-brand, transfer directly):**
- **Stanford CS224N** — NLP with Deep Learning (transformers, attention, the LLM substrate). `✓`
- **Stanford CS336** — "Language Modeling from Scratch" (build-an-LLM; deep for the serving/fine-tuning axis). `✓` *(Per shared grounding: CS336 is an LLM course, NOT robotics.)*
- **UC Berkeley "LLM Agents" MOOC** (Dawn Song) — free; agent/production framing. `✓` *(shared grounding/exemplar)*

**Named non-degree programs that employers recognize for THIS niche:**
- **Made With ML** (Goku Mohandas / Anyscale) — the reference **MLOps** course: tracking, testing, serving, orchestration, monitoring, CI/CD end-to-end; free content, ~$150 live cohort; 30k+ GitHub stars. `✓`
- **Full Stack Deep Learning — "LLM Bootcamp"** (Charles Frye, Josh Tobin, Sergey Karayev; UC Berkeley alumni) — full stack from prompt engineering to **LLMOps** to UX; free materials. `✓` *(~ 2023 cohort; content dates fast.)*
- **DeepLearning.AI** short courses — **"LLMOps"** (supervised fine-tuning + deploy pipeline), plus "Evaluating and Debugging," "Efficiently Serving LLMs," and the standalone **"Machine Learning in Production"** course. `✓`
- **Duke University "MLOps" and "LLMOps" Specializations** (Coursera) — MLflow, SageMaker/Azure/Databricks, HF, fine-tune & deploy LLMs. `✓`

**The de-facto textbook `✓`:** **Chip Huyen, *AI Engineering: Building Applications with Foundation Models* (O'Reilly, 2025)** — covers prompt engineering, RAG, fine-tuning, evals, model selection, the new AI stack; **the most-read book on the O'Reilly platform in 2025.** Pair with her *Designing Machine Learning Systems* (2022) for the MLOps foundation.

---

## 3. Acceptable postgraduate degrees; can a portfolio outweigh a grad degree?

- **Acceptable postgraduate degrees `✓`** — **MS in Computer Science, AI, or Machine Learning** (or EE/ECE with an ML/systems specialization). Capital One's alternative path: *"Master's degree in Computer Science, AI, Electrical Engineering, Computer Engineering... plus at least 2 years of experience"* (vs. 4 years with only a bachelor's) — i.e., a master's substitutes for ~2 years of experience, not for the portfolio. `✓`
- **Named online master's that fit working engineers `✓`:**
  - **Georgia Tech OMSCS** (Online MS CS) — ~$8,950 total; **added a "Generative AI & LLM" track for 2026**; ML and AI specializations (CS 7641 Machine Learning). The most cost-effective credential-with-teeth. `✓`
  - **UT Austin MSAI** (Online MS in Artificial Intelligence) — ~$10k; pure-AI curriculum. `✓`
  - **Duke MEng in AI for Product Innovation (AIPI)** — part-time, capstone + industry project; strong placement. `~` (partly on-campus residencies; placement figures are program-reported.)
- **Can a portfolio outweigh a graduate degree? YES, strongly for this role `✓`.** Every role-oriented source says so:
  - LLMOps role-blueprint: *"Graduate degree is optional; not required if hands-on production experience is strong."* `✓`
  - LLMOps skills guide: *production experience with LLM systems is emphasized as more valuable than formal credentials — "production-readiness" over "demo notebooks."* `✓`
  - Scale AI's serving-platform role gates on **years building backend systems + serving-framework experience**, not on any degree. `✓`

  This is an **applied engineering / ops role, not an ML-research role** — a shipped, measured LLM platform (eval harness + SLOs + cost dashboards + a serving/gateway component) outweighs an additional degree. A PhD is neither required nor a differentiator here (unlike inference-research at a frontier lab).

---

## 4. Named certifications that carry weight (with prerequisites & issuing body)

Certifications here are **stackable proof-of-competence**, not a substitute for a portfolio. Group them in three bands.

### 4a. Practitioner / platform GenAI-engineer certs (the core stack)
| Cert | Body | Key facts `✓` | Prereqs |
|------|------|---------------|---------|
| **Databricks Certified Generative AI Engineer Associate** | Databricks | ~56 MC questions `~` / 90 min; Python; build & deploy RAG apps + LLM chains; Mosaic AI / Vector Search, **Model Serving, MLflow, Unity Catalog** governance; recert every 2 yrs | Rec. **6+ months** hands-on GenAI on Databricks |
| **AWS Certified Machine Learning Engineer – Associate (MLA-C01)** | AWS | 65 questions (**50 scored + 15 unscored**); scaled 100–1000, **pass 720**; domains: Data Prep 28% / Model Dev 26% / **Deploy & Orchestration 22% / Monitoring, Maintenance & Security 24%**; ~170 min `~` | Rec. **1 yr SageMaker + 1 yr** backend/DevOps/data role. **Replaced retired MLS-C01 (retired Mar 2026).** `✓` |
| **Google Cloud Professional Machine Learning Engineer (PMLE)** | Google Cloud | 50–60 Q, 2 hr, **$200**, 2-yr validity; **now GenAI-heavy: Vertex AI, Model Garden, Agent Builder**, responsible AI/eval | No hard prereq; assumes production GCP ML experience |
| **Microsoft Azure — AI-103 "Developing AI Apps and Agents on Azure"** | Microsoft | New **Azure AI Apps & Agents Developer Associate**; GenAI + multi-agent on **Azure AI Foundry** | **AI-102 retires 30 Jun 2026 → AI-103 successor.** `✓` |
| **NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)** | NVIDIA | 50 Q, 60 min, **$125**, 2-yr; LLM fundamentals, prompting, RAG, **fine-tuning, GPU deployment** (NeMo, NIM, Triton, TensorRT-LLM); ~70% platform-agnostic | Entry-level; none |
| **NVIDIA-Certified Professional: Generative AI LLMs (NCP-GENL)** | NVIDIA | 60–70 Q, 120 min; **design/train/fine-tune LLMs, distributed training, inference optimization** — maps directly to the serving/fine-tuning axis | Rec. **2–3 yrs** AI/ML with LLMs |
| **Google Cloud Generative AI Leader** | Google Cloud | Foundational, business-level GenAI; not technical | For any role; none |

### 4b. Platform / infra ops certs (the "AI Platform" half of the title)
| Cert | Body | Why it matters here `✓` | Prereqs |
|------|------|--------------------------|---------|
| **CKA — Certified Kubernetes Administrator** | CNCF / Linux Foundation | K8s is the substrate for model serving & multi-tenant platforms; cluster admin, GPU scheduling, networking, storage. ~18–25% salary premium `~` | None |
| **CKAD / CKS** | CNCF / Linux Foundation | CKAD = deploying cloud-native apps; **CKS = Kubernetes security** (highest premium) — fits guardrails/least-privilege | CKS requires a **current CKA** |

*Role-blueprint lists cloud **AWS/Azure/GCP Associate or Professional** + **Kubernetes (CKA/CKAD)** + Security+ as the "common/context-specific" certs for LLMOps engineers.* `✓`

### 4c. The moat: AI-governance / assurance / security certs (the domain differentiator for Area 1)
These are the **distinctive credentials** for this niche's reliability/governance mandate (the L4/L5 "owns governance" line). They shade toward the governance niche (#8), but the platform layer that owns guardrails, audit trails, and policy-as-code increasingly must hold or speak them.
| Cert | Body | Key facts `✓` | Prereqs |
|------|------|---------------|---------|
| **IAPP AIGP — Artificial Intelligence Governance Professional** | IAPP | **The** AI-governance credential; 100 Q, 2.75 hr, **pass 300/500**; 2-yr term + 20 CPE; covers AI lifecycle, risk, responsible deployment, EU AI Act framing | **No formal prereq**; IAPP recommends 1–2 yrs AI/privacy/risk experience |
| **ISO/IEC 42001 Lead Auditor** | PECB (also Schellman, SGS, BSI, Training Camp) | Audit an **AI Management System (AIMS)** to ISO/IEC 42001:2023 per ISO 19011/17021-1; exam **pass 70%** | Aimed at people with an **auditing background** (internal/external) |
| **ISACA AAISM — Advanced in AI Security Management** | ISACA | **First AI-security-management cert** (launched Aug 2025); 90 Q, 3 domains; $459 member / $599 non-member | **Hard prereq: hold a current CISM *or* CISSP** — no substitutions |

### 4d. Vendor training / prompt-engineering — completion certificates, NOT professional exams `✓`
- **Anthropic Academy** (launched Mar 2026, on Skilljar) — **AI Fluency** (the "Four Ds": Delegation, Description, Discernment, Diligence), **Prompt Engineering** (9 chapters), **MCP**, Claude Code; issues **completion certificates**. `✓`
- **Key caveat to record:** *"there is no OpenAI badge and no Anthropic credential — no industry-standard exam that proves 'this person can engineer prompts.'"* Prompt-engineering "certifications" are course completions, not proctored credentials — weight the **portfolio**, not the badge. `✓`
- **DeepLearning.AI's "Machine Learning Engineering for Production (MLOps)" Specialization enrollment CLOSED 8 May 2024** — replaced by the standalone **"Machine Learning in Production"** course. (Confirms shared-grounding note that the MLOps *specialization* is discontinued.) `✓`

---

## 5. Experience & portfolio expectations per seniority tier

Synthesized from the LLMOps role-blueprint (tiers, KPIs, feeder roles), the LLMOps skills guide (level bands), and real JDs. Comp figures are **US, market-reported `~`** (base unless noted).

| Tier | Title (typical) | Experience | Portfolio / "done" evidence | Comp `~` |
|------|-----------------|-----------|------------------------------|----------|
| **L1** | Junior / Associate LLMOps / AI Platform Engineer | 0–2 yrs | A **deployed LLM service** with a **golden-set eval harness**, prompt versioning, tracing/observability, and a basic cost/latency dashboard; runs the regression suite under supervision | ~$110–160k `~` |
| **L2** | LLMOps / AI Platform Engineer (mid) | 3–6 yrs total (1–2 in ML/AI ops) | **End-to-end ownership** of LLM productionization: CI/CD for prompts+configs+evals, SLOs/error budgets, incident response (MTTR), RAG serving, guardrails; a shipped platform component (gateway/eval infra) | ~$150–230k `~` |
| **L3** | Senior / Staff LLM Platform Engineer | 5–8 yrs | Sets **org-wide standards** ("paved road": shared SDK + eval harness + monitoring); **multi-provider routing/portability**, high-performance **inference serving** (vLLM/TensorRT-LLM), governance automation; mentors | ~$185–320k `~` (TC to ~$312k+) |
| **L4/L5** | Staff / Principal — AI Platform | 8+ yrs | **Platform direction & reliability strategy**; multi-tenant platform architecture, **policy-as-code / governance automation**, vendor strategy, AI-risk frameworks; owns on-call model & audit-evidence completeness | ~$320–450k+ `~` |

**Feeder roles `✓`:** MLOps Engineer → LLMOps; SRE / Platform Engineer → LLMOps; Backend Engineer (with LLM feature ownership) → LLMOps. **LLMOps / GPU-inference optimization commands a reported ~30–50% premium over standard senior devs `~`; "LLM deployment experience adds ~$20–30k" `~`.**

**Representative KPIs the portfolio should be able to show (mid-level) `✓`:** deployment lead time < 2 business days; 95%+ of LLM assets under version control; endpoint availability 99.9%; eval coverage 70–90% of intents; near-zero safety-violation rate; Sev2 MTTR < 60–120 min.

---

## 6. Real job-posting evidence (quoted requirement phrasing)

**Scale AI — Senior AI Infrastructure Engineer, Model Serving Platform `✓`**
- *"4+ years building large-scale, high-performance backend systems."*
- *"Strong programming skills in one or more languages (e.g., Python, Go, Rust, C++)."*
- *"Experience with LLM serving and routing fundamentals (e.g. rate limiting, token streaming, load balancing, budgets, etc.)."*
- Preferred: *"Experience with modern LLM serving frameworks such as vLLM, SGLang, TensorRT-LLM, or text-generation-inference."*
- **No degree requirement stated.**

**Capital One — Lead AI Engineer (Gen AI Platform, LLM Infrastructure & Orchestration) `✓`**
- *"Bachelor's degree in Computer Science, AI, Electrical Engineering, Computer Engineering, or related fields plus at least 4 years... OR Master's degree... plus at least 2 years developing AI and ML algorithms or technologies."*
- *"At least 4 years of experience programming with Python, Go, Scala, or Java."*
- Preferred: *"6 years... deploying scalable and responsible AI solutions on cloud platforms (AWS, Google Cloud, Azure...)"*; *"developing... LLM Inference, Similarity Search and VectorDBs, Guardrails, Memory"*; *"optimizing training and inference software to improve hardware utilization, latency, throughput, and cost."*
- Named tech: **PyTorch, Hugging Face, VectorDBs, NeMo Guardrails, AWS UltraClusters.**

**LLMOps Engineer (Databricks-centric posting) `✓`**
- *"Design, deploy, and operate LLMOps pipelines using Databricks (Delta Lake, MLflow, Model Serving) to ensure secure, auditable, production-grade GenAI systems."*
- *"Owning the prompt registry, the evaluation harness, the A/B testing of prompts and models, and the regression suite."*
- *"Enforce compliance and security best practices (PII handling, encryption at rest/in transit, network controls, secret management)."*
- Tools named: **Langfuse, GitHub Actions, LangChain, LlamaIndex, vLLM, MLflow, BentoML.**

**ML Platform Engineer — canonical stack that recurs across postings `✓`**
- Orchestration: **Kubernetes, Ray, Kubeflow, Metaflow, Argo Workflows**; feature stores: **Feast, Tecton**; tracking/registry: **MLflow, Weights & Biases**; serving: **KServe, Seldon, BentoML, Triton**; *"experience with KServe, Triton, vLLM, Kubeflow, Argo... is a strong plus."*

**LLMOps observability & eval tooling that appears in requirements `✓`**
- Observability: **Langfuse, Helicone, LangSmith, Arize Phoenix.**
- Eval frameworks: **Ragas, DeepEval, Promptfoo, Braintrust.**
- Security framework named repeatedly: **OWASP Top 10 for LLM Applications** (prompt injection #1) + red-teaming (e.g., **Garak**).

**Net JD signal:** employers ask for **(1) strong general software/backend engineering** (Python + one of Go/Rust/Scala/Java), **(2) containers/K8s + IaC + CI/CD**, **(3) LLM-serving & routing** (vLLM/TensorRT-LLM/SGLang/TGI, gateways, budgets), **(4) evals + observability + prompt/version management**, and **(5) guardrails/security/compliance** (PII, OWASP LLM Top 10, NeMo Guardrails). Degree is **secondary to demonstrated production experience.**

---

## Sources (URLs actually fetched or returned by search)

**Job postings / role blueprints**
- Scale AI — Senior AI Infrastructure Engineer, Model Serving Platform: https://scale.com/careers/4520320005 (fetched)
- Capital One — Lead AI Engineer (Gen AI Platform, Agentic AI & LLM Infrastructure): https://www.capitalonecareers.com/job/san-jose/lead-ai-engineer-gen-ai-platform-agentic-ai-and-llm-infrastructure-and-orchestration/1732/92978245968 (fetched)
- DevOpsSchool — LLMOps Engineer Role Blueprint (tiers, KPIs, career path): https://www.devopsschool.com/blog/llmops-engineer-role-blueprint-responsibilities-skills-kpis-and-career-path/ (fetched)
- Second Talent — LLMOps Engineer skills & compensation: https://www.secondtalent.com/occupations/llmops-engineer/ (fetched)
- CrowdStrike — Senior AI Infrastructure Engineer, LLM/AI Platforms: https://crowdstrike.wd5.myworkdayjobs.com/en-US/crowdstrikecareers/job/Senior-AI-Infrastructure-Engineer--LLM-AI-Platforms_R29213 (JS-rendered; not extractable)
- SimpliSafe — Staff ML Engineer, ML Infrastructure: https://job-boards.greenhouse.io/simplisafe/jobs/7950288
- KORE1 — Hire ML Platform Engineers 2026 / salary guides: https://www.kore1.com/hire-ml-platform-engineers-2026/ · https://www.kore1.com/mlops-engineer-salary-guide/ · https://www.kore1.com/llm-engineer-salary-guide/

**Certifications (issuing bodies)**
- AWS MLA-C01 official exam guide: https://docs.aws.amazon.com/aws-certification/latest/machine-learning-engineer-associate-01/machine-learning-engineer-associate-01.html (fetched)
- Databricks Certified Generative AI Engineer Associate: https://www.databricks.com/learn/certification/genai-engineer-associate
- Google Cloud Professional ML Engineer: https://cloud.google.com/learn/certification/machine-learning-engineer · Generative AI Leader: https://cloud.google.com/learn/certification/generative-ai-leader
- Microsoft AI-102 retirement / AI-103: https://learn.microsoft.com/en-us/answers/questions/5893448/ai-102-retires-on-30th-june-2026 · https://examinotion.com/blog/ai-102-retirement-ai-103-successor-path
- NVIDIA NCA-GENL (Associate): https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/ · NCP-GENL (Professional): https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/
- IAPP AIGP: https://iapp.org/certify/aigp
- ISO/IEC 42001 Lead Auditor (PECB): https://pecb.com/en/education-and-certification-for-individuals/iso-iec-42001/iso-iec-42001-lead-auditor
- ISACA AAISM (Advanced in AI Security Management): https://www.isaca.org/credentialing/aaism
- Kubernetes CKA (CNCF/Linux Foundation): https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/

**Courses / programs / books**
- Stanford CS329S — Machine Learning Systems Design: https://stanford-cs329s.github.io/ · syllabus: https://stanford-cs329s.github.io/syllabus.html
- CMU 17-645 / 17-445 — Machine Learning in Production / AI Engineering: https://mlip-cmu.github.io/ · book: https://mlip-cmu.github.io/book/
- Chip Huyen — *AI Engineering* (O'Reilly 2025): https://www.oreilly.com/library/view/ai-engineering/9781098166298/ · resources: https://github.com/chiphuyen/aie-book
- Made With ML (Goku Mohandas / Anyscale): https://madewithml.com/courses/mlops/
- Full Stack Deep Learning — LLM Bootcamp: https://fullstackdeeplearning.com/llm-bootcamp/
- DeepLearning.AI LLMOps short course: https://www.deeplearning.ai/short-courses/llmops/ · MLOps Specialization enrollment closed: https://community.deeplearning.ai/t/enrollment-for-the-ml-engineering-for-production-specialization-will-be-closed/621190
- Duke MLOps / LLMOps Specializations (Coursera): https://www.coursera.org/specializations/large-language-model-operations
- Anthropic Academy: https://anthropic.skilljar.com/ · https://www.anthropic.com/learn

**Degrees**
- Georgia Tech OMSCS (ML/AI specializations; GenAI & LLM track): https://omscs.gatech.edu/specialization-machine-learning · https://omscs.gatech.edu/cs-7641-machine-learning
- UT Austin MSAI / Duke AIPI comparisons: https://aidegreeonline.com/georgia-tech-vs-ut-austin-which-online-ai-masters-degree-is-worth-it/

**Skills / frameworks context**
- OWASP Top 10 for LLM Applications (2025): https://www.mend.io/blog/2025-owasp-top-10-for-llm-applications-a-quick-guide/
- LoRA/QLoRA fine-tuning role context: https://workgenius.com/find/llm-engineer/

---

### Confidence ledger
- **Grounded `✓`:** the no-dedicated-degree finding; CS/SWE Tier-1 + EE/CompE Tier-2; portfolio-outweighs-grad-degree; all cert facts drawn from issuing-body/official pages (AWS MLA-C01 domains & scoring, IAPP AIGP format, ISO 42001 LA pass mark, ISACA AAISM prereq, NVIDIA NCA/NCP formats, Azure AI-102→AI-103 retirement, Databricks GenAI cert scope); Stanford CS329S & CMU 17-645 as the anchor courses; the quoted JD phrasing (Scale AI, Capital One, Databricks-LLMOps); feeder roles & KPI targets.
- **To-verify `~`:** exact Databricks GenAI question count (~56); AWS MLA-C01 exact minutes (~170); whether Stanford CS329S is *currently* taught (materials are ~2022-era; book is the durable artifact); all salary bands and the "30–50% LLMOps premium" (market-reported aggregators, not employer filings); Duke AIPI placement figures (program-reported); the ">$2B LLMOps tooling market by 2027" analyst projection.
- **Not invented:** every course code, cert name, prerequisite, and issuing body above traces to a fetched page or a search result returned this session.
