> Provenance: background research agent (creds pass) for the applied-AI exemplar, mid-2026. Raw agent report, preserved verbatim.

I have comprehensive, current, well-sourced material across all five dimensions, including real target-role JDs (Siemens Industrial AI Copilot, Cognite industrial multi-agent) and concrete domain research. Here is the structured report.

---

# Eligibility, Skills, Subjects & Training — Engineers Who Build **AI Copilots / Agents for Robotics Engineering & Robot Programming**

**Scope:** the *applied-AI / agentic software layer* — an AI welding assistant, robot offline-programming (OLP) copilot, CAM/CAD copilot, or RAG assistant over machine manuals & standards — **not** the robot's own motion control. The correct job title for this person is **"AI Engineer" / "Applied AI Engineer" / "Agentic AI Engineer" / "GenAI Engineer,"** sometimes "Industrial AI Copilot Engineer."

**Framing (important):** This is a **software-first role**, not an ML-research role. As swyx's canonical essay *The Rise of the AI Engineer* argues, an AI Engineer is "a software engineer who builds with AI — using LLMs, agents, RAG pipelines and APIs to ship products," distinct from ML engineers who train/optimize models. There are ~5,000 LLM researchers but ~50M software engineers, so this "in-between" applied class is the fastest-growing title. ([latent.space](https://www.latent.space/p/ai-engineer)) Real target JDs confirm it: Siemens' *Industrial AI Copilot* intern builds "LLM-powered capabilities... across the GenAI stack including RAG, prompt and context design, automated evaluation, LLMOps monitoring"; Siemens' *Python & AI Engineer* builds "RESTful APIs in Python FastAPI... agentic workflows using LangGraph... RAG pipelines with Weaviate"; Cognite's industrial AI engineer designs "multi-agent workflows that combine LLMs, tool use, and reasoning over industrial data." ([jobs.siemens.com](https://jobs.siemens.com/en_US/externaljobs/JobDetail/494995), [job-boards.eu.greenhouse.io/cognite](https://job-boards.eu.greenhouse.io/cognite/jobs/4740862101))

---

## 1. Valued Degrees / Backgrounds (ranked, with rationale)

The gate is **software engineering + applied-LLM ability**; robotics/manufacturing knowledge is a **differentiator that stacks on top**, not the entry ticket.

| Rank | Field | Why it's valued for THIS role |
|---|---|---|
| **1 (core)** | **Computer Science / Software Engineering** | The role is ~80% distributed-systems/software engineering "with a probabilistic component." You ship reliable, observable, cost-controlled services. Most JDs list a CS/SE bachelor's as baseline. ([indeed.com/hire](https://www.indeed.com/hire/job-description/ai-engineer), [zenvanriel.com](https://zenvanriel.com/job/llm-engineer-career/)) |
| **1 (core, tie)** | **AI / ML / Data Science / NLP** | Directly relevant for RAG, embeddings, evals, fine-tuning, and "why the model does that." NLP was the single most-requested skill (19.7% of AI postings); deep learning 28.1%. ([intuitionlabs.ai](https://intuitionlabs.ai/articles/ai-engineer-job-market-2025)) |
| **2 (strong adjacent)** | **Electrical / Computer / Mechatronics Engineering** | Strong coders who also read schematics, PLC logic, and controls — natural bridge to a robotics copilot. |
| **2 (differentiator)** | **Mechanical / Manufacturing / Industrial / Robotics Engineering** | *This is the edge for a robotics copilot builder.* Someone who understands CAD/CAM, GD&T, welding, fixturing, and robot cells can design a copilot that actually grounds outputs in reality — provided they can also engineer software. Domain-naïve LLM engineers routinely mis-model tolerances, assemblies and manufacturability. ([getleo.ai](https://www.getleo.ai/blog/ai-driven-cad-copilot-mechanical-engineering)) |
| **3 (supporting)** | **Mathematics / Physics / Statistics** | Underpins ML, evals, and retrieval quality; common feeder into AI engineering. |

**How much robotics/manufacturing domain knowledge matters:** *Moderate but distinguishing.* You can be hired as an AI engineer at a robotics company without robotics training — but the best robotics-copilot builders pair AI-engineering with domain literacy (robot programming languages, OLP tooling, process physics, standards). The domain knowledge is what makes the copilot trustworthy and traceable; the SWE+LLM skills are what make it exist. The ideal hire is **"strong AI/software engineer who has learned — or is fast at learning — the manufacturing domain,"** not "roboticist who dabbles in LLMs."

**Postgrad (valued, not required):**
- **Stanford MSCS – AI**, **CMU MSAII / MSML** (MSAII explicitly teaches "AI engineering" + industry capstone), **Georgia Tech OMSCS** (very cheap, added a dedicated **"Generative AI & LLM" track for 2026**), **UIUC MCS-AI**. ([mastersinai.org](https://www.mastersinai.org/degrees/best-masters-in-artificial-intelligence/), [omscs.gatech.edu](https://omscs.gatech.edu/specialization-artificial-intelligence-formerly-interactive-intelligence))
- A **domain MS in Robotics/Manufacturing + a strong SWE portfolio** is an equally credible path for the *differentiated* robotics-copilot builder.

**Renowned courses that actually teach agent/LLM engineering (name-drop set):**
- **Stanford CS224N** (NLP w/ Deep Learning), **CS336** (Language Modeling from Scratch — build an LLM end to end), **CS25** (Transformers United). ([web.stanford.edu/cs224n](https://web.stanford.edu/class/cs224n/), [cs336.stanford.edu](https://cs336.stanford.edu/), [web.stanford.edu/cs25](https://web.stanford.edu/class/cs25/))
- **UC Berkeley CS294/194 "Large Language Model Agents" + "Advanced LLM Agents"** — offered as a free global **MOOC** (Prof. Dawn Song); covers reasoning, planning, tool use, memory, code-gen, agent safety. ([rdi.berkeley.edu](https://rdi.berkeley.edu/adv-llm-agents/sp25), [llmagents-learning.org](https://llmagents-learning.org/sp25))
- **Chip Huyen, *AI Engineering: Building Applications with Foundation Models* (O'Reilly, 2025)** — the de-facto textbook for this exact role. ([oreilly.com](https://www.oreilly.com/library/view/ai-engineering/9781098166298/), [github.com/chiphuyen/aie-book](https://github.com/chiphuyen/aie-book))

---

## 2. Certifications & MOOCs (what each covers)

Certs are **supplements to a portfolio**, not substitutes. Employers weight NVIDIA / IBM / cloud + *demonstrable projects with real eval metrics* most. ([logicmojo.com](https://logicmojo.com/best-ai-courses-llm-rag-agentic-ai/))

**Agent / LLM-specific (highest signal for this role):**
- **DeepLearning.AI (Andrew Ng)** — the core canon:
  - **Agentic AI** (intermediate; 4 design patterns: Reflection, Tool Use, Planning, Multi-Agent; plus MCP, evals/error analysis, cost/latency, deployment). ([deeplearning.ai/agentic-ai](https://www.deeplearning.ai/courses/agentic-ai))
  - **AI Agents in LangGraph**, **LangChain for LLM App Development** (w/ Harrison Chase), **Building Code Agents with Hugging Face smolagents**. ([deeplearning.ai/courses](https://www.deeplearning.ai/courses))
  - **Generative AI Engineering with LLMs** Specialization (Coursera). ([coursera.org](https://www.coursera.org/specializations/generative-ai-engineering-with-llms))
- **Hugging Face AI Agents Course** — **free + certified**; hands-on with **smolagents, LlamaIndex, LangGraph** (tools, thought/action/observation loop, multi-agent). ([huggingface.co/agents-course](https://huggingface.co/learn/agents-course/en/unit0/introduction))
- **NVIDIA certifications:**
  - **NCA-GENL (Gen AI + LLMs, Associate)** — ML/NN foundations, transformers/attention, prompt engineering, LangChain/LangGraph orchestration, embeddings, deployment (50 Q / 60 min). ([nvidia.com](https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/))
  - **Gen AI LLMs (Professional)** — architecture, fine-tuning, distributed training/optimization. ([nvidia.com](https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-professional/))
  - **Agentic AI (Professional)** — agent design/cognition, memory, multi-agent coordination, retrieval pipelines, deployment/governance (needs 1–2 yrs AI/ML experience). ([nvidia.com](https://www.nvidia.com/en-us/learn/certification/agentic-ai-professional/))
- **IBM RAG and Agentic AI Professional Certificate** (Coursera) — build RAG with **LangChain, LlamaIndex, FAISS, Gradio**; agentic patterns (updated 2025). ([coursera.org](https://www.coursera.org/professional-certificates/ibm-rag-and-agentic-ai))
- **Databricks Certified Generative AI Engineer Associate** — design/deploy production RAG + LLM chains. ([dataquest.io](https://www.dataquest.io/blog/best-ai-certifications/))
- **LangChain Academy** — LangGraph/agent build-outs from the framework authors. ([academy.langchain.com](https://academy.langchain.com/))

**Cloud AI certs (valued for production/employer signaling):**
- **AWS** — **AI Practitioner** (entry; Bedrock/SageMaker, GenAI concepts) and **ML – Specialty** (deeper). Largest job-market share (~40% of AI jobs). ([cio.com](https://www.cio.com/article/2128415/generative-ai-certifications-and-certificate-programs.html), [flashgenius.net](https://flashgenius.net/blog-article/aws-vs-azure-vs-google-cloud-certifications-which-cloud-path-should-you-choose-in-2025))
- **Microsoft Azure** — **AI-900** (Fundamentals) → **AI-102 Azure AI Engineer Associate**; strongest for OpenAI/GPT enterprise stacks. ([hashmeta.com](https://hashmeta.com/blog/aws-vs-microsoft-azure-vs-google-cloud-which-ai-certification-wins/))
- **Google Cloud** — **Professional Machine Learning Engineer** (+ Vertex AI GenAI). Tops salary tables. ([pertamapartners.com](https://www.pertamapartners.com/insights/aws-google-ai-certifications))

**Free MOOCs to anchor fundamentals:** Berkeley LLM-Agents MOOC (above), Stanford CS224N lectures (YouTube), Hugging Face course, DeepLearning.AI short courses.

---

## 3. JD-Style Skill Set (required vs preferred + tools)

Synthesized from 2025–26 hiring guides and real robotics-industry JDs (Siemens, Cognite). ([digitalapplied.com](https://www.digitalapplied.com/blog/ai-developer-hiring-skills-that-matter-2026), [zenvanriel.com](https://zenvanriel.com/job/llm-engineer-career/), [novelvista.com](https://www.novelvista.com/blogs/ai-and-ml/agentic-ai-engineer-career-guide))

### REQUIRED (non-negotiable core)
- **Software engineering:** **Python (incl. async)**, Git, REST APIs (**FastAPI**), testing, containers (Docker), a cloud (AWS/Azure/GCP), SQL. "Without async, throughput dies."
- **LLM application development:** prompt engineering (system prompts, few-shot, prompt caching), **tool-use / function-calling**, structured outputs, LLM APIs (**OpenAI, Anthropic**, open models).
- **RAG:** chunking/parsing (incl. tables & diagrams in technical docs), embeddings, **vector DBs** (pgvector, Pinecone, Qdrant, **Weaviate**), **hybrid search (BM25 + vector)**, reranking, recall diagnosis.
- **Agents / orchestration:** **LangGraph / LangChain**, CrewAI, smolagents; multi-agent supervisor/worker patterns; state & memory; **MCP (Model Context Protocol)**.
- **Evals & observability:** golden datasets, **LLM-as-judge**, RAGAS; tracing platforms (**LangSmith, Langfuse, Phoenix/Arize, Braintrust**). Eval design is called "the single biggest signal the person actually built with LLMs."
- **Production:** streaming, caching, rate-limiting, **cost & latency optimization** (model routing Opus→Sonnet→Haiku), **guardrails/safety** (prompt-injection, **OWASP LLM Top 10**, least-privilege tools).

### PREFERRED (raises the bar)
- Fine-tuning / adaptation (**LoRA/QLoRA**), dataset engineering, model selection/benchmarking.
- Multimodal (vision for drawings/parts), **knowledge graphs** (increasingly paired with RAG for manufacturing process planning), distributed-systems depth, LLMOps/CI-CD, TypeScript for full-stack copilots.

### DOMAIN KNOWLEDGE that differentiates a *robotics* copilot builder
*(the layer a generic AI engineer lacks — this is your moat)*
- **Robot programming & OLP:** vendor languages — **ABB RAPID, KUKA KRL, FANUC TP/Karel, Yaskawa INFORM**; **offline-programming/simulation tools** — **ABB RobotStudio, RoboDK, Siemens Process Simulate**; CAD-to-path, collision detection, motion planning concepts, calibration. ([amdmachines.com](https://amdmachines.com/blog/complete-guide-to-robot-programming-languages/), [robodk.com](https://robodk.com/blog/off-line-programming/))
- **CAD/CAM & making things:** parametric CAD, **G-code** (NL-to-G-code is the most direct LLM use in subtractive mfg), **GD&T**, tolerances/assemblies, **DFM/DFMA**, process physics (welding parameters, dispensing, milling). ([arxiv 2508.00843](https://arxiv.org/html/2508.00843v1), [getleo.ai](https://www.getleo.ai/blog/ai-driven-cad-copilot-mechanical-engineering))
- **Controls-adjacent literacy:** PLC / **IEC 61131-3** structured text (KRL feels familiar to ST users), digital twins/simulation, and — critically — **reading and structuring machine manuals & industrial standards** so a RAG assistant stays grounded and *traceable to the exact page* (safety warnings must stay attached to procedures). ([techbuddies.io](https://www.techbuddies.io/2026/02/03/why-most-rag-pipelines-fail-on-technical-manuals-and-how-semantic-chunking-fixes-them/), [oxmaint.com](https://oxmaint.com/sap-integration/on-prem-ai/private-llm-equipment-manuals-rag))
- Familiarity (nice-to-have) with **ROS**, on-prem/air-gapped deployment (factory data sovereignty — cf. PLCAutoPilot's offline local models). ([plcautopilot.com](https://www.plcautopilot.com/))

---

## 4. Subject List (what to actually learn)

**A. Foundations**
- Python + software engineering (APIs, async, testing, Git, Docker, cloud)
- Math: linear algebra, probability/statistics
- ML/DL basics, **NLP**, **transformers & attention**, tokenization, embeddings

**B. LLM & Agent Core**
- Prompt engineering (system prompts, few-shot, CoT/ToT, caching)
- Function-calling / tool use, structured outputs (JSON/schema)
- **Agent design patterns:** reflection, tool use, planning, multi-agent
- Memory & context management, **MCP**, reasoning/self-debugging

**C. RAG & Data Engineering**
- Embeddings, vector DBs, indexing (HNSW vs IVFFlat)
- Document parsing/chunking for **complex technical docs** (tables, diagrams, revisions), hybrid search + rerankers
- **Knowledge graphs** for process planning; dataset/context engineering

**D. Systems & Production (LLMOps)**
- **Evals:** offline/online, golden sets, LLM-as-judge, RAGAS; error analysis
- Observability/tracing, latency & **cost optimization**, caching, model routing
- **Safety/security:** prompt injection, OWASP LLM Top 10, guardrails, least-privilege tools, sandboxing/kill-switches for computer-use
- Deployment, CI/CD, on-prem/air-gapped serving

**E. Domain (robotics/manufacturing) — the differentiator**
- Robot programming languages + **offline programming/simulation** workflows
- CAD/CAM, **G-code**, GD&T, DFM, tolerances/assemblies
- Manufacturing processes (welding, dispensing, machining), fixturing, cells
- PLC/controls basics (IEC 61131-3), digital twins, **reading standards & manuals**, industrial safety
- (Optional bridge) fine-tuning, multimodal/vision, VLA concepts

---

## 5. How This Role's Eligibility DIFFERS from an Embodied-Robotics Engineer

The copilot/agent builder and the robot-control engineer are **different disciplines that meet only at the VLA/"physical AI" frontier.**

| Dimension | **AI Copilot / Agent Engineer (this role)** | **Embodied-Robotics / Control Engineer** |
|---|---|---|
| Core discipline | Software engineering + applied LLM/NLP | Mechatronics / control systems / EE |
| Math emphasis | ML/eval/retrieval math; systems thinking | **Kinematics, dynamics, control theory, optimization** |
| Signature skills | Prompting, **RAG, agents, tool-use, evals**, LLMOps, cloud | **Forward/inverse kinematics, motion planning, control loops, sensor fusion, real-time/embedded** ([americanprofessionguide.com](https://americanprofessionguide.com/robotics-ai-engineer/), [odsc.medium.com](https://odsc.medium.com/building-the-foundations-essential-skills-for-ai-in-robotics-770a335adeeb)) |
| Languages | **Python / TypeScript** | **C/C++ / MATLAB** + RAPID/KRL, **ROS** |
| Output | Chat/agent copilots that generate code, programs, answers, plans | Robots that **physically move** (RL/imitation policies, **VLA** models) |
| Dominant failure modes | Hallucination, cost, latency, poor recall, prompt injection | Collision, real-time determinism, mechanical safety |
| Degree signal | CS / SE / AI-ML | Robotics / Mechatronics / EE / ME |
| Frontier overlap | — | **VLA / "physical AI"** (RT-2/RT-X, NVIDIA GR00T, Physical Intelligence π) is a **separate, research-heavy** track that *does* need both ([evsint.com](https://www.evsint.com/embodied-ai-industrial-robotics-vla-models/), [arxiv 2405.14093](https://arxiv.org/html/2405.14093v8)) |

**Bottom line:** For the copilot/agent role you do **not** need kinematics, dynamics, control loops, or embedded/real-time programming. You need **software engineering + LLM/agent/RAG/eval engineering, plus enough robotics-manufacturing domain literacy to ground the copilot**. A control engineer who can't build agents is not a fit; a strong AI engineer who learns robot-programming and CAM vocabulary is the target hire. (Market tailwind: AI-specialist postings grew ~**74% YoY** vs ~**28%** for robotics roles. ([research.com](https://research.com/online-degrees/artificial-intelligence/artificial-intelligence-degrees-vs-robotics-degrees)))

---

## Concrete proof the role exists (robotics/manufacturing copilots in the wild)
- **Siemens Industrial AI Copilot** (RAG + prompt/context design + automated eval + LLMOps) and **Python & AI Engineer** (FastAPI, LangGraph agents, Weaviate RAG). ([jobs.siemens.com](https://jobs.siemens.com/en_US/externaljobs/JobDetail/494995))
- **Cognite** industrial AI engineers building **multi-agent workflows over industrial data**. ([cognite.com/careers](https://www.cognite.com/en/company/careers))
- **Path Robotics** (AI + CV for adaptive welding robots). ([path-robotics.com](https://www.path-robotics.com/careers))
- Research: *LLM-Based Copilot for Manufacturing Equipment Selection* ([arxiv 2412.13774](https://arxiv.org/pdf/2412.13774)); *SmartPilot multiagent manufacturing copilot* ([arxiv 2505.06492](https://arxiv.org/pdf/2505.06492)); *Generative AI meets CAD* ([Springer](https://link.springer.com/article/10.1007/s00170-025-15830-2)); *Knowledge-Graph + LLM for process planning* ([arxiv 2506.13026](https://arxiv.org/pdf/2506.13026)); **PLCAutoPilot** offline PLC copilot ([plcautopilot.com](https://www.plcautopilot.com/)).

---

### Sources
- Rise of the AI Engineer: https://www.latent.space/p/ai-engineer
- AI developer skills 2026 (10 core): https://www.digitalapplied.com/blog/ai-developer-hiring-skills-that-matter-2026
- LLM Engineer career guide: https://zenvanriel.com/job/llm-engineer-career/
- Agentic AI Engineer roadmap: https://www.novelvista.com/blogs/ai-and-ml/agentic-ai-engineer-career-guide
- AI Engineer job description: https://www.indeed.com/hire/job-description/ai-engineer
- AI engineer job market/skills 2025: https://intuitionlabs.ai/articles/ai-engineer-job-market-2025
- DeepLearning.AI courses: https://www.deeplearning.ai/courses ; Agentic AI: https://www.deeplearning.ai/courses/agentic-ai
- Hugging Face AI Agents Course: https://huggingface.co/learn/agents-course/en/unit0/introduction
- Berkeley LLM Agents MOOC: https://rdi.berkeley.edu/adv-llm-agents/sp25 ; https://llmagents-learning.org/sp25
- Stanford CS224N: https://web.stanford.edu/class/cs224n/ ; CS336: https://cs336.stanford.edu/ ; CS25: https://web.stanford.edu/class/cs25/
- Chip Huyen, AI Engineering: https://www.oreilly.com/library/view/ai-engineering/9781098166298/ ; https://github.com/chiphuyen/aie-book
- NVIDIA certs: https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/ ; .../agentic-ai-professional/
- IBM RAG & Agentic AI: https://www.coursera.org/professional-certificates/ibm-rag-and-agentic-ai
- Best AI certs 2026: https://www.dataquest.io/blog/best-ai-certifications/ ; https://www.cio.com/article/2128415/generative-ai-certifications-and-certificate-programs.html
- Cloud cert comparison: https://hashmeta.com/blog/aws-vs-microsoft-azure-vs-google-cloud-which-ai-certification-wins/ ; https://flashgenius.net/blog-article/aws-vs-azure-vs-google-cloud-certifications-which-cloud-path-should-you-choose-in-2025
- Master's programs: https://www.mastersinai.org/degrees/best-masters-in-artificial-intelligence/ ; OMSCS: https://omscs.gatech.edu/specialization-artificial-intelligence-formerly-interactive-intelligence
- Robotics vs AI engineer: https://americanprofessionguide.com/robotics-ai-engineer/ ; https://research.com/online-degrees/artificial-intelligence/artificial-intelligence-degrees-vs-robotics-degrees
- Robot programming languages / OLP: https://amdmachines.com/blog/complete-guide-to-robot-programming-languages/ ; https://robodk.com/blog/off-line-programming/
- Embodied AI / VLA: https://www.evsint.com/embodied-ai-industrial-robotics-vla-models/ ; https://arxiv.org/html/2405.14093v8
- RAG on technical manuals: https://www.techbuddies.io/2026/02/03/why-most-rag-pipelines-fail-on-technical-manuals-and-how-semantic-chunking-fixes-them/ ; https://oxmaint.com/sap-integration/on-prem-ai/private-llm-equipment-manuals-rag
- CAD/CAM copilots: https://www.getleo.ai/blog/ai-driven-cad-copilot-mechanical-engineering ; https://link.springer.com/article/10.1007/s00170-025-15830-2 ; https://arxiv.org/html/2508.00843v1
- Manufacturing copilots (research): https://arxiv.org/pdf/2412.13774 ; https://arxiv.org/pdf/2505.06492 ; https://arxiv.org/pdf/2506.13026
- Industrial copilot jobs: https://jobs.siemens.com/en_US/externaljobs/JobDetail/494995 ; https://www.cognite.com/en/company/careers ; https://www.path-robotics.com/careers ; https://www.plcautopilot.com/

*Caveat: specific model names/prices and cert exam details move fast; verify current versions at source before quoting.*

---

**Key takeaways for a hiring rubric:** (1) Gate on **software engineering + demonstrable LLM/agent/RAG/eval projects with real metrics**, not on robotics degrees. (2) Treat **robot-programming + CAM/standards literacy as the differentiator** that turns a generic AI engineer into a *robotics-copilot* engineer. (3) Best-signal training = **DeepLearning.AI Agentic AI + Hugging Face Agents cert + NVIDIA Gen-AI/Agentic certs + Chip Huyen's book + a cloud AI cert**, backed by a shipped copilot project. (4) This is **not** an embodied-robotics/control role — no kinematics/dynamics/embedded required unless you move into the VLA/physical-AI frontier.
