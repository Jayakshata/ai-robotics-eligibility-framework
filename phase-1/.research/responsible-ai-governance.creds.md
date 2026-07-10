> Provenance: background research agent (creds pass) for the applied-AI niche **Responsible AI, Governance & Assurance** (Area 1 — Agentic & Applied AI), mid-2026. Raw agent report, preserved verbatim. `✓` grounded (verified at a real source) · `~` to-verify · `⏱` time-sensitive.

I have comprehensive, current, well-sourced material across all six requested dimensions, including a 146-posting job-market study, verbatim JD phrasing from a real technical safety role (Apple), the flagship domain certifications with prerequisites and issuing bodies (IAPP AIGP, ISO/IEC 42001 Lead Auditor, ISACA AAIA/AAISM/AAIR), and the robotics-specific regulatory moat (EU Machinery Regulation 2023/1230 × EU AI Act). Here is the structured report.

---

# Credentials & Eligibility — **Responsible AI, Governance & Assurance** (the AI that acts on *the AI itself*)

**Scope (the boundary — restate in profile §1 and §12).** This niche concerns the **software models**: EU AI Act / NIST AI RMF / ISO-IEC 42001 conformity, model governance & risk management, **alignment, red-teaming, safety evaluation**, and **AI-system security** (prompt injection, jailbreaks, model/data supply-chain). It is **DISTINCT from robot functional safety** (ISO 10218 / ISO 13849 / the machine's own e-stops and safety-rated controllers) — that is the Axis-A `safety-verification-assurance` capability. The two meet, but only at one seam (see the moat in §4): the **EU Machinery Regulation (EU) 2023/1230**, which routes ML-based safety functions into a stricter conformity regime and cross-links them to the AI Act. Your person governs the *model*; the functional-safety engineer certifies the *machine*.

**The single most important finding: this niche splits into two hireable tracks, and credentials diverge sharply between them.**

| | **Track A — Technical AI-Safety / Assurance Engineer** | **Track B — AI Governance / Risk / Compliance (GRC)** |
|---|---|---|
| Titles | AI Safety Engineer, ML Engineer – Responsible AI & Safety, Red-Team / Model-Evaluation Engineer, AI Security Engineer, Alignment RE | AI Governance Manager/Analyst, Responsible-AI Lead, AI Risk & Compliance Manager, AI Policy Analyst, AI Auditor |
| Gate | **Software + applied-LLM** (Python, evals, red-teaming, fine-tuning/alignment) — the framework's "software-first" shape | **Regulatory + risk fluency** (EU AI Act, NIST AI RMF, ISO 42001) + stakeholder/audit skills |
| Home degree | CS / ML / AI | CS / Data Science **or** Law / Public Policy (this is the one Area-1 niche where law/policy is genuinely competitive) |
| Currency | A **red-team/eval portfolio** > a specific grad degree | A **certification** (AIGP / ISO 42001 / ISACA) + demonstrated framework fluency |
| Employers | Anthropic, OpenAI, Apple, Google DeepMind, Microsoft AI, model labs, frontier-adjacent | Big-4 (PwC/Deloitte/EY/KPMG), banks/insurers/health, enterprise Responsible-AI offices |

The framework's stated eligibility shape ("CS/SE + applied-LLM, software-first; the gate is software engineering + demonstrable LLM/agent/eval ability") describes **Track A** precisely. Track B is real, large (`✓` hiring reportedly up ~150% YoY per an aggregator study — treat as ~vendor-reported) and more law/policy-tolerant; the two tracks are bridged by the certifications in §4. I cover both and flag which is which throughout.

---

## 1. Acceptable Undergraduate Degrees — tiered, strongest for THIS niche

Evidence base: a market analysis of **146 AI-governance job postings** found degree fields led by **Computer Science 29%, Data Science 22%, Information Systems 7%, Engineering 6%, Law 6%, Business 4%, Statistics 3%, Risk Management 3%, Cybersecurity 3%**; overall **66% of postings require a degree**. ([axialsearch.com](https://axialsearch.com/insights/ai-governance-jobs/)) `✓`

| Tier | Fields | Why for THIS niche |
|---|---|---|
| **Tier 1 — strongest (Track A spine)** | **Computer Science / Software Engineering**, **AI / ML / Data Science** | The assurance engineer *builds* the evals, red-team harnesses, guardrails and security tests — it is a software-engineering job "with a probabilistic component." CS+DS alone are ~51% of governance postings and are the only auto-qualifying path into Track A. `✓` |
| **Tier 1 — co-strongest for Track B only** | **Law / Public Policy / Philosophy (ethics)** | Unusually for an Area-1 niche, **law/policy is a first-class entry path** into the governance/compliance side (EU AI Act interpretation, regulatory mapping, policy authoring). Law appears in 6% of postings — small but real, and dominant at the *head-of-governance* level. This is the niche's distinctive credential signal. `✓` |
| **Tier 2 — qualifying with technical evidence** | **Cybersecurity / Information Systems**, EE/ECE, Statistics/Math | Strong for the **AI-security** sub-specialty (prompt-injection, model/data supply-chain, MITRE ATLAS). Cybersecurity + a CISSP is the natural feeder into ISACA AAISM. `✓` |
| **Tier 3 — supporting** | Business / Risk Management / Business Administration | Feeds the GRC/audit side (risk registers, controls, stakeholder management) but needs a framework cert to be competitive. `✓` |

**Strongest single answer for THIS niche:** **CS / SE with an ML concentration** is the strongest and most flexible — it satisfies Track A outright and, paired with a governance cert, satisfies Track B. The *differentiated* strongest profile is **CS/ML + regulatory literacy** (a coder who can read the EU AI Act), because that person can both implement and attest. Pure law/policy qualifies **only** for Track B and caps out without technical depth.

---

## 2. Named University Programs / Courses (real codes)

**Finding: there is NO single dedicated "Responsible-AI / AI-Assurance" undergraduate degree.** Strength comes from (a) a CS/ML degree + named AI-safety/governance courses, or (b) a dedicated *master's-level* AI-ethics/governance programme. Named, verified offerings:

**Dedicated courses inside strong CS programs (real codes) — Stanford is the deepest:** `✓`
- **Stanford CS 120 — Introduction to AI Safety** (model-specific vs. systemic safety; fairness, adversarial robustness, alignment). ([web.stanford.edu/class/cs120](https://web.stanford.edu/class/cs120/))
- **Stanford CS 329T — Trustworthy Machine Learning.** `✓`
- **Stanford CS 281 — Ethics of Artificial Intelligence.** ([stanfordaiethics.github.io](https://stanfordaiethics.github.io/)) `✓`
- **Stanford STS 14 / CS 134 — Introduction to AI Governance** (the policy/governance-specific course). ([web.stanford.edu/class/sts14](https://web.stanford.edu/class/sts14/index.html)) `✓`
- Also at Stanford: **CS 329H** (ML from Human Preferences / RLHF), **CS 521** (Seminar on AI Safety), **CS 362** (Research in AI Alignment), **MS&E 338** (Aligning Superintelligence), **STS 10SI** (Intro to AI Alignment). ([aisafety.stanford.edu/courses](https://aisafety.stanford.edu/pages/courses.html)) `~` (codes verified via Stanford AI-Safety course list; confirm current-year offering ⏱)

**Dedicated master's-level programmes (the closest thing to a "degree for this niche"):** `✓`
- **Cambridge — MSt in AI Ethics and Society** (Leverhulme CFI; part-time, 2 yr / 180 credits, residential blocks; requires an undergraduate degree + demonstrable commitment to ethical AI; competitive — ~49 offers from 113 applicants in 2021). ([pace.cam.ac.uk](https://www.pace.cam.ac.uk/courses/mst-ai-ethics-and-society), [lcfi.ac.uk/education/mst](https://www.lcfi.ac.uk/education/mst)) `✓`
- **Oxford (Saïd Business School) — AI Ethics, Regulation and Compliance Programme** (executive/online; hands-on with the "Oxethica" AI-governance platform; leaders/policymakers audience — Track B). ([sbs.ox.ac.uk](https://www.sbs.ox.ac.uk/programmes/online-learning/oxford-ai-ethics-regulation-and-compliance-programme)) `✓`
- **Oxford — Artificial Intelligence Ethics** (Dept. for Continuing Education / lifelong learning short course). ([lifelong-learning.ox.ac.uk](https://lifelong-learning.ox.ac.uk/courses/artificial-intelligence-ethics)) `✓`
- Market context: an education aggregator reports **>60% of 2026 AI master's programmes now offer an AI-ethics/governance track** — treat the percentage as ~aggregator-reported, but the *trend* (governance tracks bolted onto MSCS/MS-DS) is real. ([research.com](https://research.com/online-degrees/artificial-intelligence/ai-masters-degrees-with-ai-ethics-and-governance-tracks)) `~`

**For Track A depth, the same CS-with-LLM spine as the copilots niche applies** (Stanford CS224N NLP; UC Berkeley CS294/194 "LLM Agents" MOOC, Dawn Song — includes an *agent-safety* module), plus the AI-safety courses above. There is no course code that substitutes for a shipped red-team/eval portfolio (see §5). `~`

---

## 3. Acceptable Postgraduate Degrees + can a portfolio outweigh a graduate degree?

**Acceptable postgraduate degrees:** `✓`
- **Track A:** MS or PhD in **Computer Science / Machine Learning / AI** (or "related field, or equivalent experience" — see the verbatim Apple JD in §6). A PhD is common but explicitly *not* required at frontier labs; Anthropic's Alignment RE minimum is a **"Bachelor's degree or equivalent."** ([job-boards.greenhouse.io/anthropic](https://job-boards.greenhouse.io/anthropic/jobs/4631822008)) `✓`
- **Track B:** MS in CS/Data Science, **or** an **LLM/JD or master's in law, technology policy, or AI-ethics/governance** (Cambridge MSt, Oxford — §2). Postgraduate demand is thin overall — only **6–7% of governance postings require a master's**. ([axialsearch.com](https://axialsearch.com/insights/ai-governance-jobs/)) `✓`

**Can a portfolio outweigh a graduate degree? — YES for Track A, and a certification does it for Track B.**
- **Track A (strong yes):** this is applied engineering, not academic research. A demonstrable body of work **outweighs a specific grad degree**: published red-team findings / jailbreak write-ups, an open eval harness or benchmark, model cards, results in AI red-teaming CTFs / DEF CON AI Village / HackAPrompt, contributions to `garak`/`PyRIT`/Inspect-style eval tooling, or a documented AI Act conformity/eval package. This mirrors the copilots-niche rule ("a shipped project with real eval metrics can outweigh a graduate degree"). `✓` (pattern) / `~` (specific weighting varies by employer)
- **Track B (the substitute is a *cert*, not a portfolio):** because only **12% of governance postings require any certification** and **66% require a degree**, the realistic substitute for a niche master's is a **bachelor's + AIGP (or ISO 42001 / ISACA) + a portfolio of governance artifacts** (a completed AI Act risk classification, an ISO 42001 AIMS build, a model-risk policy). ([axialsearch.com](https://axialsearch.com/insights/ai-governance-jobs/)) `✓`

---

## 4. Named Certifications That Carry Weight — with prerequisites & issuing body

This is the niche's richest credential layer, and it contains the **domain moats**: **IAPP AIGP** (the flagship AI-governance credential) and the **ISO/IEC 42001** auditor/implementer family. Ranked by weight, with issuing body and prerequisites:

### Tier 1 — the AI-governance moats (Track B)
| Certification | Issuing body | Prerequisite | What it certifies | Weight |
|---|---|---|---|---|
| **AIGP — Artificial Intelligence Governance Professional** | **IAPP** (Int'l Assoc. of Privacy Professionals) | **No formal prerequisite**; IAPP recommends 1–2 yr experience in AI/privacy/compliance/risk. Exam: **100 questions, 180 min, linear, ~30% scenario, pass 300/500**; fee **$799** (non-member) / **$649** (member) + **$250/yr** membership; renew via **20 CPE / 2 yr**. BoK restructured 7→4 domains (Feb 2025), updated to **v2.1 (2 Feb 2026)**. | Responsible-AI principles, AI law/regulation (EU AI Act etc.), the AI lifecycle & risk governance. **The single most-recognized AI-governance credential.** Explicitly **"governance-first — not recommended for engineers building models"** (i.e., a Track-B cert). | ⭐ Flagship `✓` ⏱ |
| **ISO/IEC 42001 Lead Auditor** | **PECB** (also **BSI, SGS, CIS, GSDC**); accreditation via **IRMCB** | "Fundamental understanding of ISO/IEC 42001 and AI concepts." **5-day** course (day 5 = exam). Tiered credential post-exam: **Provisional Auditor** (exam only) → **Auditor** (2 yr total / 1 yr AI / 200 audit hrs) → **Lead Auditor** (5 yr / 2 yr AI / 300 hrs) → **Senior Lead Auditor** (10 yr / 7 yr AI / 1,000 hrs). | Auditing an organization's **AI Management System (AIMS)** against ISO/IEC 42001:2023 (world's first AI management-system standard). | ⭐ Moat (audit/conformity) `✓` |
| **ISO/IEC 42001 Lead Implementer** | **PECB** (+ IRMCB-authorized ATECs; CIS, GSDC) | Same tiered experience model as Lead Auditor. | *Building* the AIMS (translating AI strategy into a governed, ISO-42001-conformant system). | ⭐ Moat (build side) `✓` |

### Tier 2 — AI risk, audit & security (bridges Track A ↔ B)
| Certification | Issuing body | Prerequisite | Focus |
|---|---|---|---|
| **AAIA — Advanced in AI Audit** | **ISACA** | **Must already hold CISA** (or CIA / US CPA / ACCA-FCCA / Canadian CPA / Australian CPA-FCPA / Japanese CPA) in an IT-audit/advisory role. Computer-based at PSI centers. | Auditing complex AI systems & mitigating AI risk. `✓` |
| **AAISM — Advanced in AI Security Management** | **ISACA** | **Must already hold CISM or CISSP.** Exam: **90 questions, 3 job-practice domains.** | "First AI-centric security-management certification" — protecting the enterprise against AI-specific threats. **The key AI-security governance cert.** `✓` |
| **AAIR — Advanced in AI Risk** | **ISACA** (launched **2026**) | ~Likely CRISC or equivalent IT-risk designation (confirm at source ⏱). | AI risk management for IT-risk professionals; third member of ISACA's AI credential family. `✓` (existence) / `~` (exact prereq) |
| **NIST AI RMF 1.0 Architect** | **Certified Information Security (CIS)** — sole IRMCB-accredited provider/proctor | None stated. Covers the RMF's 4 Core Functions / 19 Categories / 72 Subcategories / ~431 implementation actions. | Implementing the **NIST AI Risk Management Framework** (the U.S. federal-aligned framework). `✓` |

### Tier 2 — technical AI red-teaming & security (Track A)
| Certification | Issuing body | Prerequisite | Focus |
|---|---|---|---|
| **OSAI — OffSec AI Red Teamer** (course **AI-300: Advanced AI Red Teaming**) | **OffSec** | ~Strong offensive-security/pentest background recommended. Exam = **24-hour practical** red-team engagement against an AI-enabled enterprise. | Assessing & exploiting GenAI, LLMs, multi-agent systems. `✓` |
| **COASP — Certified Offensive AI Security Professional** | **EC-Council** | ~None mandatory. "First AI-security cert built specifically for AI red-teamers." | Red-teaming LLMs/agents, building defenses. `✓` |
| **AIRTP+ — AI Red Teaming Professional** | **Learn Prompting** | None. **24+ hr** assessment. (Vendor claims trainees from Microsoft/Google/IBM/Capital One — ~vendor-reported.) | Prompt-hacking, jailbreaks, adversarial LLM testing. `✓` (exists) / `~` (marketing claims) |
| **GAISP — GIAC AI Security Professional** (courses **SEC545** GenAI/LLM App Security, **SEC411** AI Security Principles) | **SANS / GIAC** | None formal. Curriculum built on **OWASP Top 10 for LLMs + MITRE ATLAS + NIST AI RMF**. | Defending GenAI/LLM apps (prompt injection, RAG/vector-DB pipelines, MLOps hardening). SANS/GIAC announced **4 AI certs rolling out through end-2026** — confirm GAISP GA date. `✓` (announced) ⏱ |

### Tier 3 — adjacent credentials frequently requested (the actual JD list)
Only **12% of governance postings request a specific cert; when they do, CIPP / CISSP / CIPM lead**, then CRISC/CISA/CISM. ([axialsearch.com](https://axialsearch.com/insights/ai-governance-jobs/)) `✓` Issuing bodies: **CIPP, CIPM, AIGP → IAPP**; **CISSP → ISC2** (prereq: 5 yr security experience, or 4 yr + degree); **CISA / CISM / CRISC → ISACA** (all experience-gated); **CDMP → DAMA**; **PMP → PMI**. These are the *incumbent* privacy/security/risk credentials people already hold when they pivot into AI governance; the **AIGP + ISO 42001 + ISACA-AI family are the AI-specific layer stacked on top.** `✓`

### 🅑 The robotics-domain moat (the differentiator for a robotics/manufacturing employer) ⏱ `✓`
The credential that makes an AI-governance hire uniquely valuable **inside a robotics/manufacturing company** is fluency in the seam between AI-model governance and machinery safety — **without** being the functional-safety engineer:
- **EU Machinery Regulation (EU) 2023/1230** (replaces Directive 2006/42/EC; **applies 20 Jan 2027**) names, in **Annex I, Part A, item 5**, *"safety components with fully or partially self-evolving behaviour using machine learning approaches ensuring safety functions"* as a **high-risk category requiring third-party (Notified Body) conformity assessment.** ([inkog.io](https://inkog.io/labs/eu-machinery-regulation-ai-agents), [intertek.com](https://www.intertek.com/blog/2025/07-17-changes-to-robots-part-1/)) `✓`
- **Cross-link to the AI Act:** the Machinery Regulation is listed in **Annex I of the EU AI Act**, so under **AI Act Article 6** an AI system that is a machinery safety component is **automatically a high-risk AI system** — governed by *both* regimes, plus the Cyber Resilience Act (10-yr security-update duty). `✓`
- **This is exactly the boundary to name:** your governance person owns the **AI Act / NIST AI RMF / ISO 42001** obligations on the *model*; the **ISO 10218 / ISO 13849** functional-safety engineer (Axis-A) certifies the *machine*. The moat is the person who can **map an ML safety function to its AI-Act high-risk classification and hand a clean package to the Notified-Body conformity process** — bilingual across the two worlds, owning neither's core alone.

---

## 5. Experience & Portfolio Expectations per Tier (L1 / L2 / L3 / L4–L5)

Calibration from real data: the **governance (Track B) market skews senior** — **85% of postings target 5+ yr (mid-level), only 3% are junior (3 yr), 12% senior (11 yr avg)**. ([axialsearch.com](https://axialsearch.com/insights/ai-governance-jobs/)) `✓` The **technical (Track A) market is more accessible at entry** — Apple's Responsible-AI role opens at **3+ yr**, Anthropic Alignment at **bachelor's + some ML/research-eng experience**. ([job-boards.greenhouse.io/anthropic](https://job-boards.greenhouse.io/anthropic/jobs/4631822008)) `✓`

| Tier | Track A — Technical Assurance | Track B — Governance / Risk |
|---|---|---|
| **L1** (0–3 yr) | Junior AI Safety / Eval Engineer. Runs model evals & red-team probes under supervision; Python + PyTorch/HF; builds a guardrail or a jailbreak test suite. **Portfolio:** an eval harness on a public model, a red-team write-up, a model card. | AI Policy Analyst / AI Governance Administrator / Junior AI-Ethics Analyst — the ~3% explicitly entry-accessible titles. Bachelor's + framework literacy; **AIGP is the differentiator here** (no prereq, so juniors can hold it). Maintains the AI inventory/risk register. `✓` |
| **L2** (3–5 yr) | AI Safety / AI Security Engineer. **Owns** a model's eval + guardrail + red-team stack end-to-end; designs automated + human evals for "non-deterministic systems (quality, safety, alignment)"; may hold OSAI/COASP/AAISM. | AI Governance Analyst/Specialist. **Owns** an AI Act high-risk conformity workflow or a NIST-AI-RMF/ISO-42001 control set for a product line. Typically holds **AIGP** or **NIST AI RMF Architect**. |
| **L3** (5–8 yr) | Senior/Staff AI Safety Engineer. Designs the org's evaluation & red-team **strategy**; leads alignment-mitigation for a model family; sets AI-security standards (OWASP-LLM/MITRE-ATLAS). | Senior AI Governance / Responsible-AI Manager (the market's dense **5-yr "mid" band**). Runs the AIMS program; **ISO/IEC 42001 Lead Auditor** and/or **ISACA AAIA/AAISM** territory; PwC's "AI Governance Manager" requires *"at least 5 years of experience."* `✓` |
| **L4/L5** (10+ yr) | Principal AI Safety / Head of Model Assurance. Owns model-release governance, interpretability & safety-case direction across the org. | Head of Responsible AI / AI Risk Officer. Owns EU AI Act conformity, regulator relationships, board reporting; **ISO 42001 Senior Lead Auditor** (10 yr / 7 yr AI / 1,000 audit hrs); often law/policy leadership + CISSP+AAISM. `✓` |

**Portfolio currency by track (restated):** Track A trades on **red-team reports, eval frameworks, published safety research, and CTF/AI-Village results**; Track B trades on **certifications + shipped governance artifacts** (completed AI-Act conformity assessments, an ISO-42001 AIMS, model-risk policies, audit reports).

---

## 6. Real Job-Posting Evidence (verbatim where useful)

**A. The 146-posting AI-governance market study (Track B baseline)** ([axialsearch.com](https://axialsearch.com/insights/ai-governance-jobs/)) `✓`
- **Degrees:** 66% require one; fields CS 29% / Data Science 22% / Info Systems 7% / Engineering 6% / **Law 6%** / Business 4% / Statistics 3% / Risk Mgmt 3% / Cybersecurity 3%.
- **Experience:** Junior 3% (3 yr) · **Mid-level 85% (5 yr)** · Senior 12% (11 yr).
- **Certs:** only **12%** request any; when they do, **CIPP, CISSP, CIPM lead**, then CRISC/CISA; AIGP and ISO/IEC 42001 named as the AI-specific layer.
- **Frameworks = table stakes:** *"familiarity with frameworks like NIST AI Risk Management Framework, ISO/IEC 42001, EU AI Act and GDPR."*
- **Skills:** risk assessment ~50% of listings; stakeholder engagement ~40%; mentoring ~40%. **Tools:** Microsoft Purview, Python, cloud AI platforms.
- **Named posting:** **PwC — AI Governance Manager** requires *"at least 5 years of experience."*

**B. Apple — Senior ML Engineer, Responsible AI and Safety (Track A, verbatim)** ([dice.com](https://www.dice.com/job-detail/9e2b4f28-97ca-4171-8c2c-65d2b1fd7617)) `✓`
- Minimum: *"3+ years of proven ability in machine learning, including work with generative models (Transformers, LLMs, VLMs), NLP, or Computer Vision"*; *"Proficiency in Python and data science libraries (e.g. Pandas)"*; *"Experience designing and supporting human and automated evaluations, particularly with complex, nuanced, or multi-labeled data"*; *"Background in failure analysis, quality engineering, or robustness testing for ML-driven systems"*; *"Must be comfortable working with sensitive or potentially offensive content."*
- Preferred: *"BS, MS, or PhD in Computer Science, Machine Learning, or related field, or equivalent experience"*; *"Background in model explainability, uncertainty estimation, or interpretability"*; *"Curiosity and research interest in fairness, bias, and the societal impacts of generative AI."*
- Responsibilities: lead the *"responsible AI lifecycle end-to-end: assessing risks, defining policies, developing mitigation strategies…"*; *"architecture mitigation and safety alignment strategies for generative models"*; develop *"evaluation methods to monitor, diagnose failures, and improve the safety of generative models."*

**C. Anthropic — Research Engineer/Scientist, Alignment (Track A frontier)** ([job-boards.greenhouse.io/anthropic](https://job-boards.greenhouse.io/anthropic/jobs/4631822008), [anthropic.com/careers](https://www.anthropic.com/careers)) `✓`
- Minimum education: *"Bachelor's degree or equivalent combination of education, training, and/or experience."* Wants *"significant software, ML, or research engineering experience… some experience contributing to empirical AI research projects… some familiarity with technical AI safety research"*; must *"code well in Python."* Note the explicit values/mission-alignment bar.

**Net for a hiring rubric.** Track A hires like an ML/software-safety engineer (3+ yr, Python + evals + red-teaming, degree-flexible, **portfolio-led**); Track B hires like a GRC professional (5+ yr, framework fluency, **cert-led** — AIGP/ISO-42001/ISACA). A robotics/manufacturing employer should gate on **software + applied-LLM evaluation ability (Track A) or framework/cert fluency (Track B)**, then treat the **EU Machinery-Regulation-2023/1230 × AI-Act seam** as the domain moat — while keeping it explicitly separate from ISO-10218 robot functional safety (Axis A).

---

### Sources (URLs used; deep-fetched marked ✦)
- ✦ 146-posting AI-governance market study: https://axialsearch.com/insights/ai-governance-jobs/
- ✦ IAPP AIGP certification page: https://iapp.org/certify/aigp
- ✦ AIGP career/salary/cost guide (2026): https://techjacksolutions.com/it-certifications/iapp/aigp/
- ✦ Apple Senior ML Engineer, Responsible AI & Safety (verbatim JD): https://www.dice.com/job-detail/9e2b4f28-97ca-4171-8c2c-65d2b1fd7617
- ✦ PECB ISO/IEC 42001 Lead Auditor (tiers, prereqs, 5-day): https://pecb.com/en/education-and-certification-for-individuals/iso-iec-42001/iso-iec-42001-lead-auditor
- ✦ EU Machinery Regulation 2023/1230 × AI Act (the moat): https://inkog.io/labs/eu-machinery-regulation-ai-agents ; https://www.intertek.com/blog/2025/07-17-changes-to-robots-part-1/
- ISO/IEC 42001 Lead Implementer/Auditor (PECB overview): https://pecb.com/en/education-and-certification-for-individuals/iso-iec-42001
- ISACA AAISM: https://www.isaca.org/credentialing/aaism · AAIA: https://www.isaca.org/credentialing/aaia · AAIR launch (2026): https://www.isaca.org/about-us/newsroom/press-releases/2026/isaca-launches-advanced-in-ai-risk-aair-certification-to-equip-it-risk-professionals
- NIST AI RMF 1.0 Architect (CIS / NICCS): https://niccs.cisa.gov/training/catalog/cis/certified-nist-ai-risk-management-framework-10-architect-nist-ai-rmf-10-architect ; https://www.certifiedinfosec.com/services/certification-programs/ai/nist-ai-risk-management-framework
- OffSec AI-300 / OSAI: https://www.offsec.com/courses/ai-300/ · LLM red-teaming path: https://www.offsec.com/learning/paths/llm-red-teaming/
- EC-Council COASP: https://www.eccouncil.org/ai-courses/certified-offensive-ai-security-professional-coasp/
- Learn Prompting AIRTP+: https://learnprompting.org/courses/ai-security-masterclass
- SANS SEC545 (GenAI/LLM App Security): https://www.sans.org/cyber-security-courses/genai-llm-application-security-5day · SEC411: https://www.sans.org/cyber-security-courses/ai-security-principles-practices · SANS/GIAC AI certs launch: https://www.giac.org/about/press/announcements/sans-giac-launch-ai-focused-cybersecurity-certifications
- Stanford courses — CS120: https://web.stanford.edu/class/cs120/ · CS281 (Ethics of AI): https://stanfordaiethics.github.io/ · STS14/CS134 (AI Governance): https://web.stanford.edu/class/sts14/index.html · AI-Safety course list: https://aisafety.stanford.edu/pages/courses.html
- Cambridge MSt in AI Ethics & Society: https://www.pace.cam.ac.uk/courses/mst-ai-ethics-and-society ; https://www.lcfi.ac.uk/education/mst
- Oxford AI Ethics, Regulation & Compliance Programme (Saïd): https://www.sbs.ox.ac.uk/programmes/online-learning/oxford-ai-ethics-regulation-and-compliance-programme ; Oxford AI Ethics short course: https://lifelong-learning.ox.ac.uk/courses/artificial-intelligence-ethics
- AI-ethics/governance master's tracks (aggregator, ~unverified %): https://research.com/online-degrees/artificial-intelligence/ai-masters-degrees-with-ai-ethics-and-governance-tracks
- Anthropic Alignment RE / careers: https://job-boards.greenhouse.io/anthropic/jobs/4631822008 ; https://www.anthropic.com/careers
- AI-governance salary/entry aggregators (~vendor-reported): https://veriipro.com/blog/ai-governance-specialist-career/ ; https://techjacksolutions.com/careers/ai-governance-careers/

*Caveats & time-sensitive items ⏱: AIGP BoK v2.1 dated 2 Feb 2026; ISACA AAIR launched 2026 (confirm exact prerequisite); SANS/GIAC AI certs (incl. GAISP) rolling out through end-2026 — confirm GA; EU Machinery Regulation 2023/1230 applies 20 Jan 2027; salary/hiring-growth figures are aggregator-reported, not primary. Verify cert fees, exam formats and course codes at source before publishing eligibility rules.*
