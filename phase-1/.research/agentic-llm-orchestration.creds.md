> Provenance: background research agent (creds pass) for **Agentic Systems & LLM Orchestration** (Area 1, niche #1 — the core agent-loop layer). Researched mid-2026 via WebSearch/WebFetch. Raw agent report. `✓` = verified against a fetched/surfaced source this pass · `~` = to-verify (carried from grounding-reference/exemplar or single-source, not re-verified this pass).

# Credentials & Eligibility — **Agentic Systems & LLM Orchestration**

**Scope (MECE):** this is **the agent loop itself** — multi-agent systems, tool-use/function-calling, planning & reasoning agents, agent frameworks, memory & context management, and orchestration patterns. **NOT** domain copilots (`engineering-robotics-copilots`), **NOT** the retrieval layer (`knowledge-rag-systems`), **NOT** the infra to run agents reliably (`llmops-ai-platform`). You **consume** foundation models (Claude/GPT/Gemini), you don't build them.

**Job titles in the wild `✓`:** "AI Agent Engineer," "Agentic AI Engineer," "Senior AI Agent Engineer," "Multi-Agent Systems Engineer," "AI Engineer (Agents)," sometimes "Applied AI Engineer / GenAI Engineer" with an agent mandate. ([GE Vernova](https://careers.gevernova.com/senior-ai-agent-engineer/job/R5025220), [534-job analysis](https://agentic-engineering-jobs.com/langchain-job-market-2026), [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Ai-Agent-Developer))

**The one-line framing:** identical software-first gate to the copilots niche, but the **differentiator is different**. There the moat was a *vertical domain* (robot-programming/CAM/PLC). Here the moat is **depth in orchestration/reasoning/multi-agent coordination + the agent-interop protocol layer (MCP/A2A) + the emerging autonomy-governance stack** — because autonomous, tool-wielding, multi-agent systems are the highest-risk LLM deployments. Nobody needs kinematics, controls, or a manufacturing domain to enter.

---

## 1. Acceptable Undergraduate Degrees (tiered; strongest for THIS niche)

The gate is **software engineering + demonstrable LLM/agent ability**. This niche tilts *even harder* to CS/SE than the copilots niche because there is no vertical-domain differentiator pulling in ME/Mechatronics — the whole job is distributed-systems software "with a probabilistic, non-deterministic control loop."

| Tier | Fields | Why for THIS niche |
|---|---|---|
| **Tier 1 (strongest, auto-qualifying)** | **Computer Science / Software Engineering**; **Artificial Intelligence**; **Machine Learning**; **"AI Engineering"** (now a named degree field) | The role is ~80% software engineering (async services, APIs, state machines, retries, observability) wrapped around an LLM. Real senior JD asks for "Computer Science, Artificial Intelligence, Machine Learning, **AI Engineering**, or related fields." `✓` ([GE Vernova](https://careers.gevernova.com/senior-ai-agent-engineer/job/R5025220)) |
| **Tier 1 (tie) — Data Science / NLP / Computational Linguistics** | Directly relevant to reasoning, evaluation, tokenization, and "why the model chose that tool." `✓` ([grounding-ref A.1](../_grounding-reference.md)) |
| **Tier 2 (qualifying with evidence)** | **EE/ECE**, **Mathematics / Applied Maths**, **Physics**, **Cognitive Science** | Qualify **with a demonstrable agent/LLM project** (a shipped tool-using or multi-agent system). Strong-coder feeders; cog-sci is a genuine fit for planning/reasoning/memory design. `~` (grounding-ref Tier-2 pattern) |
| **Not a differentiator here** | Mechanical / Manufacturing / Robotics Engineering | Unlike the copilots niche, a *vertical* engineering degree gives **no edge** to the pure agent-loop role — the differentiator is orchestration depth, not a physical domain. `✓` (niche boundary) |

**Bottom line:** CS/SE/AI/ML is the ticket; anything else needs a shipped agent portfolio to convert. Entry-level postings confirm the baseline: *"typically a degree in computer science or a related field"* + *"solid background in programming (especially Python)."* `✓` ([junior AI agent dev market](https://www.ziprecruiter.com/Jobs/Junior-Ai-Agent-Developer))

---

## 2. Named, Highly-Valued University Programs / Courses

**There is no dedicated "Agentic Systems" degree** — strength = **CS-with-LLM/agent depth**, and (uniquely for this niche) a small but growing set of courses **explicitly about LLM agents**. These agent-specific courses are the single best academic signal for this niche and did **not** exist for most of the sibling niches:

**Agent-native courses (the highest-signal set for THIS niche) `✓`:**
- **UC Berkeley CS294/194-196 "Large Language Model Agents"** (Fall 2024, **Dawn Song** + Xinyun Chen/Google DeepMind) — the canonical university agent course. Syllabus: *foundation of LLMs, reasoning, planning, tool use, LLM-agent infrastructure, RAG, code generation, multimodal agents, evaluation & benchmarking, safety/ethics, multi-agent collaboration.* Offered as a **free global MOOC** via `llmagents-learning.org`; lectures on YouTube. `✓` ([RDI Berkeley f24](https://rdi.berkeley.edu/llm-agents/f24))
- **UC Berkeley CS294/194-280 "Advanced Large Language Model Agents"** (Spring 2025) — the advanced follow-up MOOC (reasoning, code generation, math, web/computer-use agents, safety). `✓` ([RDI Berkeley sp25](https://rdi.berkeley.edu/adv-llm-agents/sp25))
- **Stanford CS329A "Self-Improving AI Agents"** (Autumn 2025 graduate seminar) — self-improvement (constitutional AI, learned/domain verifiers, test-time compute, search+LLM), **tool use & retrieval**, **multi-step reasoning & planning for agentic workflows**, and **robust evaluation & orchestration frameworks**. `✓` ([cs329a.stanford.edu](https://cs329a.stanford.edu/))
- **Stanford CS224G "Building and Scaling LLM Applications"** — project-based, production LLM/agent apps. `✓` ([web.stanford.edu/class/cs224g](https://web.stanford.edu/class/cs224g/))

**Foundational LLM/NLP courses (name-drop set) `✓`:**
- **Stanford CS224N** (NLP w/ Deep Learning), **CS25** (Transformers United), **CS336** (Language Modeling from Scratch — build an LLM end-to-end; note: CS336 is *LM-from-scratch*, **not** robotics). `✓` ([cs336.stanford.edu](https://cs336.stanford.edu/))
- **CMU 11-667 "Large Language Models: Methods and Applications"** (Fall 2025) and **CMU 11-766 "Large Language Model Applications"** (Spring 2026) — LTI graduate LLM courses; course hub at `cmu-llms.org`. `✓` ([2025.cmu-llms.org](https://2025.cmu-llms.org/), [cmu-llms.org](https://cmu-llms.org/))
- **Georgia Tech OMSCS** (very low cost; added a Generative-AI/LLM track) and **UIUC MCS-AI** — strong, affordable CS-with-AI masters that feed this niche. `~` (carried from exemplar/grounding-ref; not re-verified this pass)

**De-facto textbook `~`:** **Chip Huyen, *AI Engineering: Building Applications with Foundation Models* (O'Reilly, 2025)** — the standard reference for the applied agent/LLM engineer (carried from exemplar; not re-fetched this pass).

---

## 3. Acceptable Postgraduate Degrees — and can a portfolio outweigh a grad degree?

**Acceptable postgraduate degrees `✓`:** **MS (or PhD) in CS / AI / ML / AI-Engineering**, with an NLP/LLM or agents/decision-making specialization. Named senior postings ask for a *"Master's or PhD degree in Computer Science, Artificial Intelligence, Machine Learning, AI Engineering, or related fields."* `✓` ([GE Vernova](https://careers.gevernova.com/senior-ai-agent-engineer/job/R5025220)). A PhD is **not** required for most applied agent roles — this is an **applied-engineering** discipline, not an ML-research one.

**Can a portfolio outweigh a graduate degree? — Yes, decisively, for this niche `✓`.** The 2025–26 hiring consensus for applied AI/agent roles: *"your GitHub speaks louder than your degree"*; *"a portfolio of deployed work tells you more than any credential"*; employers *"screen for shipped Python projects, GitHub evidence, and deployment experience before they care about a computer science title."* One aggregation reports **~48.6% of applied-AI positions accept a Master's *or* Bachelor's** (PhD not required). `~` (single-source figure) ([dataexpert.io portfolio guide](https://www.dataexpert.io/blog/ultimate-guide-ai-engineering-portfolios), [aiofferly "MLEs who ship"](https://www.aiofferly.com/career-guide/mles-who-ship))

**Nuance worth flagging:** some large enterprises still *list* MS/PhD at the **senior/staff** tier (GE Vernova senior = "5+ yrs **and** a Master's or PhD"), so the degree gate reappears at the top for big-company roles even as it disappears for startups/mid-market. The portable currency at every tier is a **shipped, evaluated agent system**, not the diploma.

---

## 4. Named Certifications That Carry Weight (+ the governance "moat")

Certs are **supplements to a portfolio**, never substitutes — but for this niche a distinct, *agent-native* cert layer now exists, and a second **autonomy-governance** layer is emerging as the senior-tier moat.

### 4a. Agent/LLM-specific certs (the technical moat for THIS niche)
- **NVIDIA-Certified Professional: Agentic AI (NCP-AAI)** `✓` — the only major vendor cert literally named "Agentic AI." Intermediate; **60–70 Q / 120 min / $200**; **prereq 1–2 yrs AI/ML + production agentic projects**. Domains: **Agent Design & Cognition** (architect agents, reasoning/planning, **memory**, **multi-agent workflows**), Knowledge Integration & Agent Development, NVIDIA Platform Implementation & Deployment. Valid 2 yrs. ([nvidia.com/agentic-ai-professional](https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/))
- **NVIDIA-Certified Associate: Generative AI LLMs (NCA-GENL)** `✓` — entry-level; **50 Q / 60 min / $125**; ML fundamentals, attention, tokenization, evaluation metrics, ethics + NVIDIA toolchain. Valid 2 yrs. ([nvidia.com/generative-ai-llm-associate](https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/))
- **DeepLearning.AI "Agentic AI" (Andrew Ng, 2025)** `✓` — the core canon; **vendor-neutral raw Python (no framework hiding)**; the **four agentic design patterns: Reflection, Tool Use, Planning, Multi-Agent Collaboration**, + evals/error-analysis. Certificate with Pro membership. ([deeplearning.ai/courses/agentic-ai](https://www.deeplearning.ai/courses/agentic-ai))
- **DeepLearning.AI multi-agent short courses (taught by the framework authors) `✓`:** **"Multi AI Agent Systems with crewAI"** (João Moura, crewAI CEO), **"AI Agentic Design Patterns with AutoGen"** (Chi Wang & Qingyun Wu, AutoGen creators), **"Design, Develop, and Deploy Multi-Agent Systems with CrewAI,"** and **"Agent Skills with Anthropic."** ([DLAI AutoGen](https://learn.deeplearning.ai/courses/ai-agentic-design-patterns-with-autogen/information), [DLAI crewAI](https://www.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai))
- **Hugging Face "AI Agents Course"** `✓` — **free + certified** (two levels: a fundamentals certificate after Unit 1; a certificate of completion after a use-case assignment + final challenge). Hands-on with **smolagents, LangGraph, LlamaIndex**. ([huggingface.co/learn/agents-course](https://huggingface.co/learn/agents-course/unit0/introduction))
- **LangChain Academy "Introduction to LangGraph"** `✓` — built/maintained by the LangChain team; **free with a LinkedIn completion certificate**; Modules 1–5 build multi-agent LangGraph apps (state, memory, human-in-the-loop). Companion: "LangGraph Essentials." ([academy.langchain.com/intro-to-langgraph](https://academy.langchain.com/courses/intro-to-langgraph))
- **Anthropic Academy — "Claude Platform 101" + "Introduction to Agent Skills"** `✓` — free; *build the agent loop by hand (Claude acts→observes→decides), then collapse it with the SDK's Tool Runner*; built-in tools, **Skills**, and **MCP servers** via the **Claude Agent SDK**. ([anthropic.com/learn/build-with-claude](https://www.anthropic.com/learn/build-with-claude), [Claude Platform 101](https://anthropic.skilljar.com/claude-platform-101))
- **Databricks Certified Generative AI Engineer Associate** `✓` — LLM/agent solutions on Databricks; **Mar-2026 update covers the Mosaic AI Agent Framework, Agent Bricks, MCP servers, multi-agent (Genie Spaces), MLflow 3 tracing**; rec. 6+ months hands-on with RAG & agents. ([databricks.com/genai-engineer-associate](https://www.databricks.com/learn/certification/genai-engineer-associate))
- **IBM RAG and Agentic AI Professional Certificate** (Coursera) `~` — LangChain/LlamaIndex + agentic patterns (carried from exemplar; not re-fetched this pass).
- **Cloud AI certs (employer signaling, production layer) `~`:** AWS **AI Practitioner** (entry) / **ML Engineer Associate MLA-C01** (MLS-C01 retired Mar 2026); Azure **AI Engineer AI-102 → AI-103** (AI-102 retired Jun 2026); **Google Cloud Professional ML Engineer**. Codes/retirements per grounding-reference §C; verify current version at source. ([grounding-ref §C](../_grounding-reference.md))

> **Leadership-not-engineer caveat `✓`:** **Google Cloud "Generative AI Leader"** ($99 / 90 min; includes a "Gen AI Agents: Transform your organization" module) is a **business/strategy** credential *"for anyone… with or without hands-on technical experience"* — good for PM/lead signaling, **not** evidence of build ability. ([cloud.google.com/generative-ai-leader](https://cloud.google.com/learn/certification/generative-ai-leader))

### 4b. The autonomy-governance moat (the senior-tier differentiator for THIS niche)
Autonomous, tool-executing, multi-agent systems are the **highest-risk** LLM deployments, so **AI-governance/assurance credentials** are becoming the differentiator that stacks on senior/staff agent engineers (the deep version of this is the sibling niche `responsible-ai-governance`; here it's a *differentiator*, not the entry ticket):
- **IAPP AIGP — Artificial Intelligence Governance Professional** `✓` — the leading AI-governance credential. **100 MCQ / 3 hrs; scaled 100–500, pass = 300; no formal prereq** (IAPP recommends 1–2 yrs AI/data-protection/compliance/risk experience); 2-yr term, 20 CPE credits. Issuing body: **IAPP**. Maps to EU AI Act / NIST AI RMF governance of exactly the autonomous systems this niche builds. ([iapp.org/certify/aigp](https://iapp.org/certify/aigp))
- **ISO/IEC 42001 Lead Auditor / Lead Implementer** (AI Management System) `✓` — training/certification via **PECB, BSI, Exemplar Global, GAQM, Schellman, SGS**; **Mastermind** was the first body accredited to *issue* ISO/IEC 42001 certs (Jul 2024 — a young, fast-moving space). The management-system counterpart to AIGP's practitioner credential. ([PECB ISO 42001 Lead Auditor](https://pecb.com/en/education-and-certification-for-individuals/iso-iec-42001/iso-iec-42001-lead-auditor))

**Ranking for a hiring rubric (this niche):** technical moat = **NVIDIA NCP-AAI (Agentic AI) + DeepLearning.AI Agentic AI + HF Agents cert + LangChain Academy LangGraph**, backed by a shipped multi-agent project; governance moat (senior+) = **IAPP AIGP** (and ISO/IEC 42001 for assurance-heavy orgs).

---

## 5. Experience & Portfolio Expectations per Tier (L1 / L2 / L3 / L4–L5)

**Market shape first `✓`:** the agentic-engineering job market is **senior-heavy** — of 534 analyzed agentic-AI postings, seniority skewed **senior ~45–50%, mid ~32–38%, staff+ ~9–12%, leadership ~4–8%, and junior only ~0.3–1.9%.** Entry-level openings are scarce; the ladder below reflects that reality. ([534-job analysis](https://agentic-engineering-jobs.com/langchain-job-market-2026))

| Tier | Title | Experience | Portfolio / evidence bar |
|---|---|---|---|
| **L1** | Junior AI / Agent Engineer | **0–2 yrs** (scarce openings) | CS-or-related degree **or** portfolio; **Python + ML basics + Git + APIs**; familiarity with **LangChain/LangGraph/CrewAI or custom**. Portfolio arc: single-tool agent → **multi-tool planning + self-critique (reflection) loops** → a deployed agent. Median pay ~**$67–89k** (ZipRecruiter). `✓` ([junior market](https://www.ziprecruiter.com/Jobs/Junior-Ai-Agent-Developer)) |
| **L2** | AI / Agentic Engineer (mid — market center of gravity) | ~**2–4 yrs** | Owns an agent **end-to-end**: orchestration + **tool-use/function-calling** + **memory/context management** + evals + deploy. Fluent in **≥1 framework** (multi-agent work **clusters on LangGraph**); uses **MCP**. `✓` |
| **L3** | Senior AI Agent Engineer | **5+ yrs** (often **+ MS/PhD** at big cos); **3+ yrs GenAI app dev w/ autonomous agent systems** | Designs the **multi-agent architecture** (supervisor/worker, planning, long-horizon reasoning), the **memory/context strategy**, and the **MCP tool surface**; makes model/framework tradeoffs; owns evals & guardrails. Verbatim: builds apps with *"agent orchestration, multi-step reasoning, prompt engineering, RAG integration, and model selection."* `✓` ([GE Vernova](https://careers.gevernova.com/senior-ai-agent-engineer/job/R5025220)) |
| **L4/L5** | Staff / Principal AI Engineer — Agents | **8+ yrs** and/or notable agent/orchestration work | Sets the **orchestration-platform direction**; advances agentic patterns for **autonomy, reliability & governance**; deep in ≥1 of {planning/reasoning, multi-agent coordination, memory, interop protocols}. Top comp bands: framework-agnostic median **$193k–$290k**; senior LangChain-specific avg ~**$264k**. `✓` ([534-job analysis](https://agentic-engineering-jobs.com/langchain-job-market-2026)) |

---

## 6. Real Job-Posting Evidence (what employers actually ask for)

**Framework demand, by frequency across 534 agentic-AI postings `✓`** ([source](https://agentic-engineering-jobs.com/langchain-job-market-2026)):

| Framework | % of listings | Notes |
|---|---|---|
| **LangChain** | 34.3% (183) | Broadest surface; "reasonable entry point" |
| **LangGraph** | 22.1% (118) | **Multi-agent/orchestration roles cluster here specifically** |
| **LlamaIndex** | 13.9% (74) | |
| **CrewAI** | 10.9% (58) | Role-based multi-agent |
| **AutoGen** | 7.9% (42) | |
| n8n / Semantic Kernel / Pydantic AI | each <3.4% | thin tier |

**Companion skills in the same 534 postings `✓`:** **Python 93.4%**; clouds **AWS 34.7% / GCP 29.1% / Azure 24.4%**; **Docker 32.4% / Kubernetes 27.2%**; **FastAPI 17.4%**; **TypeScript 17.4%**; vector DBs **Pinecone 18.8% / Weaviate 16.0%**; **MCP / Model Context Protocol 16.9%** (already a named, standalone requirement).

**Verbatim requirement phrasing — GE Vernova, "Senior AI Agent Engineer" `✓`** ([posting](https://careers.gevernova.com/senior-ai-agent-engineer/job/R5025220)):
- *"5+ years of relevant experience and a Master's or PhD degree in Computer Science, Artificial Intelligence, Machine Learning, AI Engineering, or related fields."*
- *"3+ years of experience in AI, GenAI application development & deployment particularly with **autonomous agent systems**."*
- *"3+ years… designing and building GenAI apps that… support features like **agent orchestration, multi-step reasoning, prompt engineering, RAG integration, and model selection**."*
- Frameworks/tools: *"LangChain, OpenAI APIs, PyTorch, TensorFlow…"*; *"agent orchestration platforms and multi-agent systems (e.g., **AutogenAI, LangGraph, MCP protocol**)"*; *"vector databases, semantic retrieval…"*; *"Docker, Kubernetes."*
- Languages: *"Proficiency in Python and/or… JavaScript, TypeScript, Node.js, Java, Go."*

**Cross-posting synthesis (Siemens, Deloitte, Advanced Energy, BharatGen agentic-AI reqs) `✓`** ([search set](https://www.novelvista.com/blogs/ai-and-ml/agentic-ai-engineer-career-guide)): *"design, build, and deploy intelligent AI agents capable of **reasoning, planning, and executing** complex tasks"*; *"develop scalable multi-AI-agent architectures supporting **long-horizon reasoning, autonomy, planning, interaction**"*; *"implementing **memory, context management, vector stores, and retrieval** pipelines"*; *"**observability for agent runs, logging and tracing of decisions, and safe interrupt mechanisms**"*; *"escalate to humans when required."*

**Salary bands `✓`:** framework-agnostic agentic roles median **$193k–$290k**; LangChain-specific **$160k–$210k**; broad AI-agent-orchestration band **$80k–$150k** (Indeed/ZipRecruiter mix). ([534-job analysis](https://agentic-engineering-jobs.com/langchain-job-market-2026), [ZipRecruiter](https://www.ziprecruiter.com/Jobs/Ai-Agent-Orchestration))

**Protocol context (load-bearing skill, not a credential) `✓`:** **MCP** (Anthropic, 2025; donated to the Linux-Foundation **Agentic AI Foundation** Dec 2025) is agent↔tool ("USB-C for tools"); **A2A** (Google, 2025; Linux-Foundation A2A project Jun 2025) is agent↔agent ("HTTP for agent collaboration"). Production stacks combine both; MCP already appears in ~17% of postings. ([MCP — Wikipedia](https://en.wikipedia.org/wiki/Model_Context_Protocol))

---

## Sources

**Fetched this pass (WebFetch):**
- LangChain, *State of Agent Engineering*: https://www.langchain.com/state-of-agent-engineering
- 534-job agentic-AI market analysis: https://agentic-engineering-jobs.com/langchain-job-market-2026
- UC Berkeley LLM Agents (Fall 2024) course page: https://rdi.berkeley.edu/llm-agents/f24
- GE Vernova "Senior AI Agent Engineer" posting (verbatim reqs): https://careers.gevernova.com/senior-ai-agent-engineer/job/R5025220
- Siemens "Agentic AI Engineer" posting: https://jobs.siemens.com/en_US/externaljobs/JobDetail/499278 *(HTTP 404 at fetch — listing likely expired; title/company corroborated via search)*

**Surfaced via WebSearch (primary URLs relied on):**
- UC Berkeley Advanced LLM Agents (Spring 2025) + MOOC: https://rdi.berkeley.edu/adv-llm-agents/sp25 · http://llmagents-learning.org/
- Stanford CS329A Self-Improving AI Agents: https://cs329a.stanford.edu/ · CS224G: https://web.stanford.edu/class/cs224g/ · CS336: https://cs336.stanford.edu/
- CMU LLM courses (11-667 / 11-766): https://2025.cmu-llms.org/ · https://cmu-llms.org/
- NVIDIA NCP-AAI (Agentic AI, Professional): https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/
- NVIDIA NCA-GENL (Gen AI LLMs, Associate): https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/
- DeepLearning.AI Agentic AI (Andrew Ng): https://www.deeplearning.ai/courses/agentic-ai
- DeepLearning.AI multi-agent short courses: https://learn.deeplearning.ai/courses/ai-agentic-design-patterns-with-autogen/information · https://www.deeplearning.ai/courses/multi-ai-agent-systems-with-crewai
- Hugging Face AI Agents Course (free + certified): https://huggingface.co/learn/agents-course/unit0/introduction
- LangChain Academy — Introduction to LangGraph: https://academy.langchain.com/courses/intro-to-langgraph
- Anthropic Academy (Claude Platform 101 / Agent Skills / Agent SDK): https://www.anthropic.com/learn/build-with-claude · https://anthropic.skilljar.com/claude-platform-101
- Databricks Certified Generative AI Engineer Associate: https://www.databricks.com/learn/certification/genai-engineer-associate
- Google Cloud Generative AI Leader (leadership cert): https://cloud.google.com/learn/certification/generative-ai-leader
- IAPP AIGP: https://iapp.org/certify/aigp
- ISO/IEC 42001 Lead Auditor (PECB): https://pecb.com/en/education-and-certification-for-individuals/iso-iec-42001/iso-iec-42001-lead-auditor
- Portfolio-over-degree evidence: https://www.dataexpert.io/blog/ultimate-guide-ai-engineering-portfolios · https://www.aiofferly.com/career-guide/mles-who-ship
- Junior / entry AI-agent-developer market: https://www.ziprecruiter.com/Jobs/Junior-Ai-Agent-Developer · https://www.udacity.com/course/agentic-ai-engineer-with-langchain-and-langgraph--nd901
- Agentic AI Engineer role synthesis: https://www.novelvista.com/blogs/ai-and-ml/agentic-ai-engineer-career-guide
- MCP / A2A interop protocols: https://en.wikipedia.org/wiki/Model_Context_Protocol

*Caveat: cert exam details (Q counts, prices, prerequisites), course numbers per term, and salary bands move fast — re-verify at source before publishing eligibility rules. Items marked `~` were carried from `_grounding-reference.md` / the copilots exemplar and not re-fetched this pass.*
