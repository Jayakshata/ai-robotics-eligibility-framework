# Per-Niche Profile — Engineering & Robot-Programming Copilots

> **Applied-AI area exemplar (Agentic & Applied AI, Area 1).** The software-agent layer that helps *engineers* build/program/troubleshoot robots & cells — NOT the robot's own control. Uses the standard 12-section template, adapted: eligibility tilts to software+LLM (not kinematics); §9 is compute/APIs/data-tooling (not robots); §7 is the agent-framework frontier. Research-backed (mid-2026). `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Niche:** Engineering & Robot-Programming Copilots · **Area:** Agentic & Applied AI (non-embodied) · **Type:** `[S][★]` frontier
**Draws on:** LLM/agent/RAG software engineering **+** robotics/manufacturing domain literacy · **Serves platforms (C):** C1 fixed arm, all industrial · **Verticals (B):** B1 manufacturing (welding, CAM, PLC), B2 logistics

---

## 1. Definition & Scope
Building **AI copilots and agents that help engineers program, configure, and troubleshoot robots and manufacturing cells** — an AI welding assistant, a robot offline-programming (OLP) copilot, a CAM/CAD copilot, a PLC-code copilot, or a RAG assistant over manuals, standards and weld-procedure specs (WPS). This is the **software-agent layer**: it augments the *person*, it does **not** drive the robot's motion. **In scope:** LLM/agent orchestration, RAG over technical documents, tool-use into robot/CAM/PLC systems, evals, human-in-the-loop. **Out of scope:** the robot's embodied control (the A-Embodied niches), and training the underlying foundation models (out of framework scope — you *consume* Claude/GPT/Gemini).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior AI / Applied-AI Engineer | Builds RAG pipelines and simple tool-using agents under supervision; runs evals; integrates LLM APIs. |
| **L2** | AI / Agentic Engineer | Owns a copilot end-to-end (RAG + agent + tools + evals + deploy); debugs retrieval quality, cost, latency, guardrails. |
| **L3** | Senior Applied-AI Engineer | Designs the agent architecture (orchestration, memory, MCP tool surface); makes model/framework tradeoffs; sets eval strategy; mentors. |
| **L4/L5** | Staff / Principal AI Engineer — Industrial Copilots | Sets the copilot platform direction; advances agentic patterns for safety-critical engineering; owns reliability/governance. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials
**Software-first role `✓`:** the gate is **software engineering + demonstrable LLM/agent/RAG/eval ability**; robotics/manufacturing domain knowledge is the **differentiator that stacks on top**, not the entry ticket (the ideal hire is "a strong AI engineer who learns robot-programming & CAM vocabulary," not "a roboticist who dabbles in LLMs").

**Acceptable undergraduate degrees** — Tier 1: **Computer Science / Software Engineering**, **AI / ML / Data Science**. Tier 2: EE/ECE, Mechatronics. **Domain differentiator (with SWE skills):** Mechanical / Manufacturing / Industrial / Robotics Engineering — someone who understands CAD/CAM, GD&T, welding and robot cells builds copilots that stay grounded and traceable.

**Highly-valued programs / courses `✓`** — no dedicated "AI-copilot" degree; strength = CS-with-LLM/agent depth: Stanford (**CS224N** NLP, **CS336** build-an-LLM, **CS25** Transformers), CMU **MSAII/MSML**, Georgia Tech **OMSCS** (added a Generative-AI/LLM track), UIUC MCS, and **UC Berkeley's free "LLM Agents" MOOC** (Dawn Song). The de-facto textbook is **Chip Huyen, *AI Engineering* (O'Reilly, 2025)**. A robotics/manufacturing MS + a strong software portfolio is an equally credible *differentiated* path.

**Acceptable postgraduate degrees** — MS in CS/AI/ML (or a portfolio-driven path). **Distinctive `✓`: a strong shipped-copilot portfolio with real eval metrics can outweigh a graduate degree** — this is an applied-engineering role, not an ML-research one.

**Highly-valued certifications `✓`** — **DeepLearning.AI *Agentic AI*** + *AI Agents in LangGraph*; **Hugging Face *AI Agents Course*** (free + certified); **NVIDIA NCA-GENL** / **Agentic AI (Professional)**; **IBM RAG & Agentic AI**; **Databricks Certified GenAI Engineer**; a cloud AI cert (**AWS AI Practitioner/ML-Specialty**, **Azure AI-102**, **Google PMLE**). Certs supplement a portfolio; they don't replace a shipped project.

**Experience & portfolio** — L1: a RAG assistant + a tool-using agent, with eval numbers. L2: 2–4 yr, a **shipped copilot** on real hardware/CAM/PLC integration with eval metrics. L3: 5–8 yr, led a copilot platform to production. L4/L5: 8+ yr and/or notable applied-AI/agent work.

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong **Python** (incl. async); REST APIs (**FastAPI**), Git, Docker, a cloud, SQL
- **LLM app development** — prompt engineering, **tool-use / function-calling**, structured outputs, LLM APIs (Claude, GPT, Gemini)
- **RAG** — chunking/parsing of complex technical docs (tables, diagrams), embeddings, **vector DBs**, **hybrid search (BM25 + vector)**, reranking, recall diagnosis
- **Agents / orchestration** — **LangGraph / LangChain**; multi-agent patterns; state & memory; **MCP (Model Context Protocol)**
- **Evals & observability** — golden sets, **LLM-as-judge**, RAGAS; tracing (LangSmith / Langfuse / Phoenix)
- **Production** — streaming, caching, **cost & latency** optimization (model routing), **guardrails / safety** (prompt-injection, OWASP LLM Top 10, least-privilege tools)

**Preferred / differentiating**
- Fine-tuning / adaptation (**LoRA/QLoRA**), model selection/benchmarking
- Multimodal (VLM for drawings/parts), **knowledge graphs** + **GraphRAG**, on-prem / air-gapped serving
- **Domain (the moat):** robot-programming languages (**ABB RAPID, KUKA KRL, FANUC TP/Karel, Yaskawa INFORM**), OLP/sim tools (**RobotStudio, RoboDK, Process Simulate**), CAD/CAM + **G-code** + GD&T + DFM, PLC / **IEC 61131-3**, and structuring **standards & manuals** so a RAG assistant stays *traceable to the exact page*

**Tools & tech stack** — *Languages:* Python (+ TypeScript) · *Agents:* LangGraph/LangChain, **Claude Agent SDK**, CrewAI, smolagents; **MCP** · *RAG:* pgvector/Weaviate/Qdrant, hybrid search, rerankers (Cohere/Voyage/Jina), doc parsing (LlamaParse/Unstructured/**Docling**/**ColPali**) · *Evals:* RAGAS, LangSmith, Braintrust, Phoenix · *Models:* Claude (Fable 5 / Opus 4.8), GPT-5.5, Gemini 3.1 Pro; **DeepSeek V4** for on-prem/air-gapped · *Domain integration:* RoboDK/RobotStudio, a CAM tool, a PLC IDE (TIA Portal/CODESYS)

**Bar by tier** — L1: builds RAG + a tool-agent with evals · L2: ships a real copilot, fluent across RAG→agent→eval→deploy · L3: architects the agent platform, deep in ≥1 area (retrieval, evals, or domain integration) · L4/L5: sets platform direction, owns reliability/governance.

## 5. Core Subject List `✓`
- **Foundational maths & CS:** Python + software engineering (APIs, async, testing, Git, Docker, cloud) · linear algebra & probability · ML/DL basics · **NLP, transformers & attention, tokenization, embeddings**.
- **LLM & agent core:** prompt engineering (system prompts, few-shot, CoT) · **function-calling / tool use**, structured outputs · **agent design patterns** (reflection, tool-use, planning, multi-agent) · memory & context management · **MCP**.
- **Niche-specific (RAG & production):** document parsing/chunking for technical docs, embeddings, vector DBs, **hybrid search + rerankers**, **GraphRAG** · **evals** (golden sets, LLM-as-judge, RAGAS), observability, **cost/latency**, **safety** (prompt injection, OWASP LLM Top 10, guardrails).
- **Domain (the differentiator):** robot programming + **offline-programming/simulation** · CAD/CAM, G-code, GD&T, DFM · PLC / IEC 61131-3 · reading **standards, manuals & WPS**; industrial safety.

## 6. Training Programme Design & Duration `✓`
Software-conversion programme — **faster than the embodied tracks** for someone already coding, because there's no kinematics/hardware core. ~1,000–1,150 hours; phase 4 = the robotics/manufacturing domain + build a copilot.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Python/SWE, ML/NLP basics, transformers | 1.5 mo | 5 mo | 260 | Build & ship a Python service |
| 2. LLM & agent core | Prompting, tool-use, agent patterns, MCP | 1.5 mo | 4 mo | 240 | A working tool-using agent |
| 3. RAG & production (LLMOps) | Retrieval, hybrid search, evals, cost/safety | 2.0 mo | 5 mo | 280 | A grounded, evaluated RAG assistant |
| 4. **Domain specialization** | Robot programming/CAM/PLC + integrate via MCP | 1.5 mo | 4 mo | 220 | The niche core |
| 5. Capstone + portfolio | Ship a weld/robot-programming copilot with evals + HITL | 1.0–1.5 mo | 3–4 mo | 180 | Job-ready evidence |
| **Total** | | **≈ 7–9 months** (full-time) | **≈ 18–24 months** (part-time) | ~1,180 | Junior applied-AI / copilot engineer |

*For an existing software engineer, phases 2–4 (the LLM/agent + domain layer) compress to ~3–5 months.*

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** `🆕` = 2025–26 release.
- **Agent frameworks (consolidating; "less framework, more model"):** **🆕 LangGraph 1.0 / LangChain 1.0** (GA Oct 2025 — the production-auditable standard) · **CrewAI** · **🆕 Microsoft Agent Framework** (unifies AutoGen + Semantic Kernel) · **LlamaIndex Workflows 1.0** · **OpenAI Agents SDK** · **Google ADK** · **Anthropic Claude Agent SDK** (subagent context isolation — a fit for copilots) · thin tier (Pydantic AI, smolagents, Strands).
- **Interop protocols (load-bearing):** **MCP** (Anthropic; 10k+ servers; now under the Linux-Foundation Agentic AI Foundation) and **A2A** (Google; LF, 150+ orgs) — how a copilot exposes "the robot controller / WPS DB / CAM / PLC" as agent tools.
- **RAG frontier:** **Contextual Retrieval** (Anthropic — highest-leverage for manuals) · **Agentic/Adaptive RAG** (plan→retrieve→grade→re-retrieve) · **GraphRAG / 🆕 LazyGraphRAG** · **🆕 rerankers** (Cohere Rerank 4, Voyage instruction-following, Jina v3) · **ColPali visual retrieval** for weld symbols/drawings · doc parsing (**Docling**, LlamaParse V2).
- **Shipping robotics/manufacturing copilots (proof the pattern works):** **Path Robotics Obsidian/🆕 Rove** (foundational welding model), **Hirebotics Beacon** (AI weld-parameter copilot), **Siemens TIA Portal Engineering Copilot** (IEC 61131-3 code-gen), **CloudNC CAM Assist** (1,000+ shops), **Wandelbots NOVA Copilot**, **KUKA iiQWorks.Copilot**. *(Note: a pure "describe the weld in English → program" LLM copilot is still greenfield.)*
- **Frontier LLMs & evals:** Claude **Fable 5 / Opus 4.8**, GPT-5.5, Gemini 3.1 Pro; **DeepSeek V4** (on-prem) · **SWE-bench Verified deprecated** (OpenAI stopped reporting it) → **SWE-bench Pro / Terminal-Bench**; **agent trajectory testing** (LangSmith, Braintrust, Phoenix) — non-negotiable for a safety-adjacent copilot.
- **Factory context:** standards going **"AI-ready"** (OPC Foundation converting 430+ OPC UA specs to MCP-queryable form); **edge / SLM / sovereign** deployment for latency, air-gap and IP.

*Net trend: copilots → agentic manufacturing, with a strong analyst counter-signal (Gartner: >40% of agentic projects may be cancelled by 2027, plus "agent-washing"). Treat vendor ROI/GA claims as vendor-reported.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | RAG assistant over a real machine manual / a standard | Chunking, embeddings, hybrid search; grounded, cited answers |
| Applied | A tool-using agent (MCP) that queries a CAM/robot **simulator** | Agent loop + tool-use; completes a multi-step task |
| Applied | A **weld-parameter recommender** from a process-spec corpus | Domain-grounded generation; sensible "good/better/best" settings |
| Advanced | NL → **RobotStudio/RoboDK** program for a simple pick/weld path | Robot-programming grounding; a runnable OLP program |
| Advanced | Add **evals + guardrails** (RAGAS groundedness, trajectory tests, prompt-injection defenses) | Safety/quality discipline; measured faithfulness |
| Capstone | End-to-end **engineering copilot** (RAG + agent + tool integration + eval + human approval) | The full stack; a demoable, evaluated copilot |

## 9. Required Setup / Compute / Tooling `✓` (not robots)
- **LLM access:** API budget for Claude/GPT/Gemini; a GPU workstation or cloud for **open/on-prem models** (DeepSeek V4, Qwen).
- **Agent & RAG stack:** LangGraph / Claude Agent SDK; a vector DB (pgvector/Qdrant); doc parsing (LlamaParse/Docling/ColPali); **MCP servers**.
- **Evals & observability:** RAGAS, LangSmith / Braintrust / Phoenix.
- **Domain integration sandboxes:** **RoboDK / RobotStudio** (robot sim), a CAM tool, a PLC IDE (**TIA Portal / CODESYS**) — to build & test the tool surface.
- **Corpus:** manuals, standards (ISO/ANSI/AWS), and WPS to RAG over.

## 10. Partnerships & Ecosystem
- **LLM / agent providers:** Anthropic (Claude + Agent SDK + MCP) · OpenAI · Google · LangChain · Hugging Face.
- **Robotics / CAM / PLC vendors (domain integration):** Siemens · ABB · KUKA · FANUC · Wandelbots · RoboDK · CloudNC · Rockwell.
- **Compute / sim:** NVIDIA (Isaac, DLI, Inception).
- **Standards bodies:** OPC Foundation (AI-ready OPC UA specs).
- **Employers / proof:** Siemens (Industrial AI Copilot), Cognite, Path Robotics, Hirebotics, CloudNC, robotics integrators.

## 11. Assessment & Validation
- **Eval metrics** as portable evidence: retrieval recall, **groundedness/faithfulness (RAGAS)**, task success, **trajectory correctness**, cost/latency.
- **Portfolio:** a shipped copilot + system-design interview (RAG + agent architecture, safety, cost) + live debugging (a retrieval-failure or prompt-injection case).
- **Domain grounding check:** does the copilot's output respect the relevant standard/safety constraint and stay traceable to source?

## 12. Adjacent & Related Niches
Sits in **Agentic & Applied AI (Area 1)** alongside `Knowledge & RAG Systems`, `Operations/ERP AI`, and `LLMOps & AI Platform Engineering`; pairs with **A1 perception** (VLM document parsing) and meets the **A7 VLA** frontier where agentic and embodied AI converge; its home vertical is **B1 manufacturing** and it can serve any platform (C). (Reference only — seniority ladder is in §2.)

---
*Applied-AI area exemplar. Template: `phase-1/_TEMPLATE.md` (v3, adapted). Area plan: `applied-ai-taxonomy.md`. §7 stamped mid-2026 — re-research before publish. Named products/models are fast-moving; verify at source.*
