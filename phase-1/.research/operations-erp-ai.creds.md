> Provenance: background research agent (creds pass) for the applied-AI niche **Operations, ERP & Manufacturing-Execution AI** (`operations-erp-ai`), Area 1 — Agentic & Applied AI. Researched mid-2026 (2026-07-10). Raw agent report.
> **Confidence legend:** claims are grounded in a fetched source (URL in-line / in Sources) unless prefixed **`~`** = to-verify (secondary source, general reputation, or fast-moving detail). `⏱` = time-sensitive.

---

# Eligibility, Credentials & Skills — Engineers Who Build **Intelligent ERP / MES Agents, Production-Scheduling, Supply-Chain & Agentic-RPA Systems**

**Scope (and the load-bearing boundary):** the *agentic software layer over operations* — an "intelligent ERP" copilot, an MES/shop-floor agent, a production-scheduling agent, a supply-chain orchestration agent, or agentic RPA that automates back-office operations by **reasoning in language and acting through tools** (ERP/MES/WMS/TMS APIs, solvers, RPA bots). It is **NOT** the statistical demand forecast or the scheduling optimizer itself — those are **Area 2 (forecasting/analytics/OR)**. The agent *reads the forecast and calls the solver*; it does not build them. The correct job titles are **"AI Engineer / Applied AI Engineer / Agentic AI Engineer / GenAI Engineer,"** and — on the business side — **"Supply Chain AI Engineer," "Industrial AI Engineer,"** or the emerging ops-role **"Supply Chain Agent Manager."**

**Framing (identical software-first gate as the rest of Area 1):** this is a **software-first role**, not an ML-research or an industrial-engineering role. The gate is **software engineering + demonstrable LLM/agent/RAG/eval ability**; **operations / supply-chain / ERP domain literacy is the differentiator that stacks on top** — and for *this* niche it is the sharpest differentiator in all of Area 1, because an ops agent takes autonomous actions on inventory, purchase orders, schedules and money, so it must respect MRP logic, S&OP cadence, the ERP↔MES (ISA-95) boundary, and audit/governance. The ideal hire is **"a strong AI engineer who has learned — or learns fast — the operations/ERP domain,"** not "a supply-chain planner who dabbles in LLMs."

---

## 1. Acceptable Undergraduate Degrees (tiered; strongest for THIS niche)

The gate is software + applied-LLM. Domain degrees qualify **only when paired with real software engineering**.

| Tier | Field(s) | Why it's valued for THIS niche |
|---|---|---|
| **Tier 1 — core / auto-qualifying** | **Computer Science / Software Engineering**; **AI / ML / Data Science** | The role is ~80% distributed-systems/backend software "with a probabilistic component" — you ship reliable, observable, cost-controlled services that call transactional systems. Every real JD (Blue Yonder GenAI/LLM Engineer, Siemens, Cognite) lists a CS/SE bachelor's as baseline. Directly relevant for RAG, embeddings, tool-use, evals. |
| **Tier 2 — strong adjacent** | **Industrial & Systems Engineering (ISyE)**, **Operations Research**, **Management Information Systems (MIS) / Information Systems**, **EE/ECE** | ISyE/OR grads *who can code* understand the objects the agent manipulates — MRP, scheduling, inventory policy, queuing, optimization — and the solver it calls. MIS is the natural ERP-integration bridge. |
| **Tier 2 — domain differentiator (the moat, WITH SWE skills)** | **Supply-Chain Management / Operations Management / Logistics**; **Manufacturing / Industrial Engineering** | *This is the edge for an ops/ERP-agent builder.* Someone who understands S&OP, MRP/MRP-II, the ISA-95 ERP↔MES boundary, lead-time/inventory tradeoffs, and how an SAP/Oracle/Dynamics process actually runs designs agents that stay grounded, auditable and safe to give write-access. A domain-naïve LLM engineer will let an agent release a bad PO. |
| **Tier 3 — supporting** | **Mathematics / Statistics / Physics** | Underpins ML, evals, retrieval quality and the OR/solver literacy; common feeder into AI engineering. |

**Strongest for this niche:** **CS/SE or AI/ML for the entry ticket**, with **Industrial & Systems Engineering / Operations Research / Supply-Chain Management as the highest-value *second* signal.** The rare double — a CS grad with a supply-chain minor/OR coursework, or an ISyE grad who is genuinely a strong software engineer — is the bullseye.

---

## 2. Named, Highly-Valued University Programs / Courses

**There is NO dedicated "operations/ERP AI-agent" degree** (as of mid-2026). Strength = **CS-with-LLM/agent depth** for the base, **plus a named supply-chain/OR/ISyE program** for the domain moat. Name-drop set, split by layer:

**A. The agent/LLM base (shared across Area 1 — grounded in the shared reference & exemplar):**
- **Stanford CS224N** (NLP w/ Deep Learning), **CS336** ("Language Modeling from Scratch" — build an LLM end-to-end; note: *not* robotics), **CS25** (Transformers United).
- **UC Berkeley CS294/194 "Large Language Model Agents" + "Advanced LLM Agents"** — free global **MOOC** (Prof. Dawn Song): reasoning, planning, tool-use, memory, agent safety.
- The de-facto textbook: **Chip Huyen, *AI Engineering: Building Applications with Foundation Models* (O'Reilly, 2025).**
- Applied-AI graduate programs: **Stanford MSCS–AI**, **CMU MSAII / MSML**, **Georgia Tech OMSCS** (added a Generative-AI/LLM track; very low cost), **UIUC MCS-AI**.

**B. The operations/supply-chain domain moat (the differentiator — grounded):**
- **MIT Supply Chain Management MicroMasters** (MITx, via MIT SCALE / Center for Transportation & Logistics) — five courses + a comprehensive exam ≈ one semester of MIT SCM; a **credit pathway** into MIT's SCM Blended Master's and other MIT-SCALE master's. The single most name-brand, stackable, remote-accessible domain credential for this niche.
- **Georgia Tech H. Milton Stewart School of Industrial & Systems Engineering (ISyE)** — the **#1-ranked ISyE**: **MS in Supply Chain Engineering (MSSCE, 30 cr)** and **MS in Operations Research (30 cr; core across ISyE / Math / CS)**. The OR degree is the strongest bridge to the solver/optimization side an ops agent orchestrates.
- ~ **MIT Operations Research Center (ORC)** MS/PhD and **MIT Leaders for Global Operations (LGO)** dual-degree — elite OR/operations programs (well-known; not individually fetched this pass).
- ~ Strong domain undergrad/grad feeders (reputation, verify per-candidate): **Michigan State (Broad)** and **Penn State (Smeal)** supply-chain, **Purdue** and **ASU** ISE/SCM, **Northwestern IEMS**, **Wharton OIDD**.

**Net:** the closest thing to a "degree for this niche" is a **CS/AI degree (or the applied-AI master's above) + a supply-chain/OR credential** — most efficiently the **MITx SCM MicroMasters** or **Georgia Tech OMSCS + an ISyE/OR course load**.

---

## 3. Acceptable Postgraduate Degrees; can a portfolio outweigh one?

**Acceptable postgrad:** **MS in CS / AI / ML** (the core, valued-not-required path), or the **differentiated domain path** — **MS in Operations Research / Industrial & Systems Engineering / Supply-Chain Engineering** (Georgia Tech ISyE, MIT ORC/SCM, MIT LGO) **paired with a strong software portfolio**. A PhD is not expected (this is applied engineering, not ML research); an OR PhD is a *bonus* only where the niche edges into optimization-heavy scheduling.

**Portfolio vs. graduate degree — YES, a portfolio can outweigh a grad degree.** This is the same applied-engineering reality as the rest of Area 1: **a shipped ops copilot / agent — integrating a real ERP/MES/planning system (SAP, Oracle, Dynamics, Kinaxis/Blue Yonder/o9, or an OR solver), with real eval metrics and human-in-the-loop approval — outweighs an extra degree.** Employers weight *demonstrable agent/RAG/eval projects with metrics* over credentials; eval design over ERP-and-agent transactional systems is "the single biggest signal the person actually built with LLMs." The graduate degree is the fastest way to *acquire* the domain moat for someone who lacks it — not a gate.

---

## 4. Named Certifications That Carry Weight (incl. the DOMAIN MOAT)

Certs **supplement** a portfolio; they don't replace a shipped agent. Three stacks — the base agent/LLM/cloud stack (shared), the **ERP/automation-platform stack** (niche-specific), and the **operations-domain moat**.

**A. Base agent / LLM / cloud (shared with Area 1):**
- **DeepLearning.AI (Ng):** *Agentic AI* (Reflection/Tool-Use/Planning/Multi-Agent + MCP, evals, cost/latency), *AI Agents in LangGraph*, *Generative AI Engineering with LLMs*.
- **Hugging Face AI Agents Course** — free + certified (smolagents, LlamaIndex, LangGraph).
- **NVIDIA NCA-GENL** (Gen-AI & LLMs, Associate) and **Agentic AI (Professional)** (agent design, memory, multi-agent, retrieval, governance; needs ~1–2 yr AI/ML experience).
- **IBM RAG and Agentic AI Professional Certificate**; **Databricks Certified Generative AI Engineer Associate**.
- **Cloud:** **AWS AI Practitioner** (+ **MLA-C01**, the current ML-Engineer Associate after MLS-C01's Mar-2026 retirement), **Microsoft Azure AI-102 → AI-103** (AI-102 retiring ~Jun 2026), **Google Cloud Professional ML Engineer** (top salary signal).

**B. ERP / automation-platform stack (niche-specific — the "which systems can you make an agent act inside" signal):**
- **Microsoft — the deepest agentic-ops cert ladder (grounded):**
  - **AB-100 · Microsoft Certified: Agentic AI Business Solutions Architect** (Advanced/Expert). Covers **multi-agent orchestration, Copilot Studio, Microsoft Foundry (Tools/Models), Dynamics 365, Power Platform**, open protocols **A2A + MCP**, responsible AI, agent telemetry & ROI. 100-min exam; renews every 12 months. **Prerequisite:** at least one associate cert from a set that includes **D365 Supply Chain Management Functional Consultant**, **Power Automate RPA Developer**, **Azure AI Engineer**, or **AI Agent Builder Associate**. (English update landing 2026-07-22.)
  - **AB-620 · AI Agent Builder Associate** — for developers building production **Copilot Studio** agents & multi-agent solutions; **~beta/training April 2026, exam ~live June 2026** `~`.
  - **MB-335 · D365 Supply Chain Management Functional Consultant Expert** — the domain-in-Dynamics credential (feeds AB-100).
  - **PL-500 · Power Automate RPA Developer — RETIRED 2026-06-30** ⏱; Microsoft's explicit position is that "**RPA as a standalone practice is converging with agentic AI**" and directs former RPA devs to **AB-620 / AB-100**. (Signals the whole RPA→agentic-RPA shift this niche rides.)
- **SAP (grounded):** **C_AIG_2412 · SAP Certified Associate – SAP Generative AI Developer** — 60 Q / 120 min / 65% pass; covers **LLMs, SAP AI Core, Generative AI Hub, SAP Business AI**. Sits atop the **SAP Joule / Joule Studio** agent platform (Joule Studio agent-builder **GA Q1 2026**, 40+ prebuilt agents, 2,400+ "Joule Skills" `~` vendor-reported). The on-point cert for building agents *inside* the world's dominant ERP.
- **Oracle (grounded):** **Oracle Fusion Cloud SCM** role-based learning paths & certifications (Oracle University — incl. "**Oracle Fusion Cloud Applications SCM Process Essentials**"). Context: **Fusion SCM 26A/26B** ship built-in AI agents (e.g. **Planning Cycle Agent**; autonomous agents for inventory, procurement, manufacturing-readiness, replenishment; ~29 prebuilt SCM/CX agents `~`).
- **UiPath — the agentic-RPA moat (grounded):** **UiPath Certified Professional – Agentic Automation Associate** (design/collaborate-with agents in process automation; technical *and* non-technical roles) and **Agentic Automation Professional** (design, build & **govern** solutions that orchestrate autonomous agents + automation routines + enterprise systems + human decisions). Also **Automation Developer Professional (UiADP)** (REFramework, Studio/Orchestrator). Note: legacy **UiRPA / UiARD retired 2023, fully expire 2026-10-15** ⏱. (~ Automation Anywhere and Blue Prism offer parallel RPA/agent credentials — not fetched this pass.)

**C. The OPERATIONS-DOMAIN MOAT (the reliability/process-body equivalent for this niche — grounded):**
- **ASCM / APICS (Association for Supply Chain Management, formerly APICS)** — the gold-standard operations bodies, directly analogous to ASQ/SMRP in Area 2:
  - **CPIM · Certified in Planning and Inventory Management** — **no prerequisites.** Covers demand management, MRP/MRP-II, production & inventory planning, scheduling under variation/risk/disruption. **The single most on-point domain cert for a production-scheduling / MES / MRP agent** — it teaches the exact logic the agent must respect.
  - **CSCP · Certified Supply Chain Professional** — end-to-end supply-chain design/management. **2026: strict prerequisites removed** (open to all); ASCM **recommends** *"three years of related business experience, a Bachelor's degree, or an active APICS certification."*
  - **CLTD · Certified in Logistics, Transportation and Distribution** — logistics/warehouse/transport. **Prerequisite: an active prior credential** (CSCP, CPIM, CFPIM, SCOR-P, CTL, CPSM, etc.).
  - **CTSC · Certified in Transformation for Supply Chain** — digital/AI transformation of the supply chain.
  - *Exam mechanics:* 150 Q (130 scored + 20 pretest), 3.5 hr, ~100 recommended study hrs; maintain **75 professional-development points / 5 yr**. Issuing body: **ASCM**.
- **ISA-95 / IEC 62264 · Enterprise-Control System Integration Fundamentals Specialist Certificate** — issued by the **International Society of Automation (ISA)**; **no prerequisites**; multiple-choice exam after course **IC55 / IC55E / IC55M / IC55V**; launched ~Sept 2024. **This is the MES↔ERP moat:** ISA-95 defines the **Level-4 ERP ↔ Level-3 MES** boundary and the data objects that cross it — exactly the seam a "manufacturing-execution AI" agent operates on. Knowing it is what separates a real MES-agent builder from a generic chatbot dev.
- **Governance (Area 1 cross-cut — load-bearing here because ops agents take autonomous financial/inventory actions):**
  - **IAPP AIGP · Artificial Intelligence Governance Professional** — 100 Q / 180 min / no prereq / US$799 (US$649 members); built on **EU AI Act, NIST AI RMF, ISO/IEC 42001**.
  - **ISO/IEC 42001 Lead Implementer / Lead Auditor** — AI Management System (AIMS) auditing; ~US$1,500–3,500. Relevant for the L4/L5 who must make an agent that writes to the ERP *auditable*.

---

## 5. Experience & Portfolio Expectations per Tier (L1 / L2 / L3 / L4–L5)

Base bar mirrors Area 1; the **niche-specific twist is transactional-system integration + actions-with-side-effects governance** (an ops agent that releases POs/changes schedules is higher-stakes than a read-only Q&A copilot).

| Tier | Title (typical) | Experience & portfolio bar |
|---|---|---|
| **L1** | Junior / Applied-AI Engineer | Builds **RAG over ops data + a simple tool-using agent** (e.g. answers "why is this order late?" by reading an ERP/WMS API), **with eval numbers**. Python + one agent framework. No domain cert required; a CPIM-in-progress or MITx SCM course is a plus. |
| **L2** | AI / Agentic Engineer (Supply-Chain / Industrial AI) | 2–4 yr. **Ships one ops copilot/agent end-to-end** integrating a **real** ERP/MES/planning system or OR solver (SAP/Oracle/Dynamics/Kinaxis/Blue Yonder/o9, or OR-Tools/Gurobi as a tool), with RAG + tool-use + **evals + human-in-the-loop approval** for write actions. Owns retrieval quality, cost, latency, guardrails. |
| **L3** | Senior Applied-AI Engineer | 5–8 yr. **Architects the multi-agent ops platform** (orchestration, memory, the MCP/tool surface into transactional systems), sets the **eval + guardrail strategy for actions that mutate business state**, makes model/framework/build-vs-buy tradeoffs, respects the ISA-95 ERP↔MES boundary. Mentors. |
| **L4 / L5** | Staff / Principal AI Engineer — Industrial/Operations Copilots | 8+ yr and/or notable applied-agent work. Sets platform direction; advances agentic patterns for **safety- and audit-critical operations**; owns **reliability, governance (AIGP/ISO-42001-grade), and ROI**; is the interface to the Area-2 forecasting/OR teams whose outputs the agents consume. |

~ Market anchor (secondary): 2026 US **Agentic AI Engineer** base band cited at **~$185k–$320k** with equity at growth-stage.

---

## 6. Real Job-Posting & Product Evidence (what employers actually ask for)

Proof the role exists and the requirement phrasing employers use:

- **Blue Yonder — "Software Engineer II · GenAI / LLM Engineer" (req 511397)** *(grounded; mirror)*: build **"intelligent, multi-agent applications for supply chain automation at scale"**; wants hands-on **"LLM orchestration frameworks, Retrieval-Augmented Generation (RAG) pipelines, context graphs, and the Azure AI ecosystem,"** and **"chunking strategies, vector store management, embedding tuning, and retrieval relevance evaluation."** Blue Yonder markets every agent as a **"proprietary, fully Autonomous Domain Agent"** for supply chain.
- **Microsoft Dynamics 365 (agentic supply chain)** *(grounded)*: named **Procurement Agent** ("triages supplier updates, matches to purchase orders, summarizes downstream impact across inventory, sales orders, production schedules") and a **Demand Planning** copilot; the operating model keeps **"humans firmly in the loop… focused on oversight, exception handling, and strategic decisions,"** governed via **Microsoft Agent 365**. Implies build-skills (Copilot Studio, multi-agent) *and* ops-governance skills.
- **Kinaxis Maestro Agents / Agent Studio** *(grounded)*: composable **"agents, triggers, automation, tools, and approvals"** with **"governed data, role-based access, auditability, and explainable reasoning"**; delivered via **Forward Deployed Engineering** (co-build) — i.e. they hire engineers who can build agents grounded in a customer's real planning workflows.
- **Oracle Fusion Cloud SCM 26A/26B** *(grounded)*: **Planning Cycle Agent** and autonomous agents automating **order release, S&OP workflows, replenishment, procurement, manufacturing-readiness** — "without needing a human to kick it off."
- **AWS (reference architecture)** *(grounded)*: **Amazon Bedrock AgentCore** hierarchical multi-agent — a **"Logistics Agent"** persona coordinating specialist sub-agents ("one looks up order status, another checks inventory, another checks the expedite table and costs") over **ERP / TMS / WMS**. Names the exact tool-integration + sub-agent-orchestration skills.
- **Emerging ops role — "Supply Chain Agent Manager"** *(grounded)*: **"oversee the AI agents handling load booking, invoice reconciliation, and routine supplier communications, defining operational boundaries, setting escalation thresholds, and auditing agent performance."** (The business-side counterpart to the engineer.)
- **Cross-cutting requirement phrasing** *(grounded, aggregated)*: **"integrate LLMs, APIs, databases, and external tools into agent workflows… tool-calling using MCP,"** and specifically **"streaming real-time data from ERP, WMS, and supplier systems; using an LLM to interpret events; connecting to an algorithm/solver to compute recommendations; and pushing changes through APIs or RPA bots into planning or execution systems."** Note the explicit **solver-as-tool** pattern — reinforcing the Area-1/Area-2 boundary (the agent orchestrates the optimizer; it isn't the optimizer).
- **Research proof-points** *(grounded titles)*: *"Agentic LLMs in the supply chain: towards autonomous multi-agent consensus-seeking"* (Taylor & Francis / *Int. J. Production Research*, 2025); Databricks, *"Transforming Supply Chain Management with AI Agents."* Plus Siemens/Cognite industrial multi-agent JDs (from the sibling exemplar) confirm the same profile in the manufacturing-adjacent setting.

**Hiring-rubric takeaways:** (1) Gate on **software engineering + demonstrable LLM/agent/RAG/eval projects with real metrics**, not on a supply-chain degree. (2) Treat **operations/ERP/MES literacy (CPIM · ISA-95 · MITx-SCM · an ERP-platform cert) as the differentiator** that turns a generic AI engineer into an *operations* agent engineer. (3) Because ops agents **act on business state**, weight **HITL/approval design, guardrails, and governance (AIGP / ISO-42001)** more than in a read-only RAG niche. (4) Best-signal training = **DeepLearning.AI Agentic AI + Hugging Face Agents + an ERP-platform cert (Microsoft AB-620/AB-100, SAP C_AIG_2412, or UiPath Agentic Automation) + a domain cert (CPIM or ISA-95)**, backed by a **shipped agent that safely writes to a real ERP/MES/planning system**. (5) Keep the **forecast/optimizer in Area 2** — the agent *reads and calls* them.

---

### Sources (URLs actually fetched or returned by search this pass)

**Operations-domain moat (ASCM/APICS, ISA-95):**
- ASCM certifications overview: https://www.ascm.org/learning-development/certifications-credentials/
- ASCM exam details/process: https://www.ascm.org/learning-development/certifications-credentials/exam-details/
- ASCM CSCP: https://www.ascm.org/learning-development/certifications-credentials/cscp/
- CSCP 2026 eligibility (secondary): https://edudelphi.com/blog/cscp-eligibility-requirements/
- CPIM 2026 exam guide (secondary): https://open-exam-prep.com/blog/apics-cpim-certified-in-production-and-inventory-management-exam-guide-2026
- ISA-95/IEC 62264 certificate program: https://www.isa.org/certification/certificate-programs/isa-95-iec-62264-enterprise-control-system-integra
- ISA-95 standard: https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard
- ISA-95 program announcement (2024): https://www.isa.org/news-press-releases/2024/september/isa-announces-new-isa-95-iec-62264-enterprise-cont
- ISA MES/ERP boundary explainer: https://connect981.com/blog-posts/isa95-mes-erp-boundary-20260122

**ERP / automation-platform certs & agents:**
- Microsoft AB-100 Agentic AI Business Solutions Architect: https://learn.microsoft.com/en-us/credentials/certifications/agentic-ai-business-solutions-architect/
- Microsoft AI Agent Builder Associate (AB-620): https://learn.microsoft.com/en-us/credentials/certifications/ai-agent-builder-associate/
- Microsoft credentials for Dynamics 365 roles: https://learn.microsoft.com/en-us/dynamics365/guidance/roles/certifications
- Microsoft PL-500 study guide (retirement): https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/pl-500
- PL-500 retiring / RPA→agentic (secondary): https://certempire.com/pl-500-retiring/
- D365 SCM Copilot & agents: https://learn.microsoft.com/en-us/dynamics365/copilot/ai-get-started
- Microsoft "agentic AI reshaping supply chain" (named agents, HITL, Agent 365): https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2026/05/04/from-intelligence-to-impact-how-agentic-ai-is-reshaping-todays-supply-chain/
- SAP Certified Associate – SAP Generative AI Developer (C_AIG_2412): https://learning.sap.com/certifications/sap-certified-associate-sap-generative-ai-developer
- SAP C_AIG syllabus (secondary): https://www.erpprep.com/sap-business-technology-platform-btp/sap-c-aig-certification-exam-syllabus
- SAP Business AI Q1 2026 (Joule/agents): https://news.sap.com/2026/04/sap-business-ai-release-highlights-q1-2026/
- Oracle Fusion Cloud SCM certification path: https://education.oracle.com/oracle-certification-path/pPillar_646
- Oracle Fusion SCM Process Essentials learning path: https://learn.oracle.com/ols/learning-path/get-certified-oracle-fusion-cloud-applications-scm-process-essentials/118071/146919
- Oracle Fusion SCM 26B autonomous AI: https://blogs.oracle.com/scm/oracle-fusion-cloud-scm-26b-advancing-autonomous-supply-chains-with-built-in-ai
- Oracle AI agents in Fusion SCM (A-Team): https://www.ateam-oracle.com/a-quick-look-at-ai-agents-in-oracle-fusion-cloud-scm-supply-chain-management
- UiPath certifications: https://academy.uipath.com/certifications ; https://www.uipath.com/learning/certification
- UiPath Agentic Automation Associate quick facts (secondary): https://certificationpractice.com/exam-overviews/uipath-agentic-automation-associate-quick-facts
- UiPath Agentic Automation Developer training: https://academy.uipath.com/learning-plans/agentic-automation-developer-associate-training

**Agent/LLM base + governance:**
- IAPP AIGP: https://iapp.org/certify/aigp
- AIGP vs ISO 42001 (secondary): https://www.glacis.io/guide-ai-governance-certification
- ISO 42001 Lead Implementer/Auditor (NICCS): https://niccs.cisa.gov/training/catalog/cis/certified-iso-42001-ai-lead-implementer-and-iso-42001-ai-lead-auditor-training

**Domain university programs:**
- MIT SCM MicroMasters (pathways to master's): https://micromasters.mit.edu/scm/pathways-masters/
- Georgia Tech ISyE MS Supply Chain Engineering: https://www.isye.gatech.edu/academics/masters/degrees/ms-supply-chain-engineering
- Georgia Tech ISyE MS Operations Research: https://www.isye.gatech.edu/academics/masters/degrees/ms-operations-research

**Real jobs / vendor agents / architecture / research:**
- Kinaxis Maestro AI agents: https://www.kinaxis.com/en/solutions/ai-agents
- Kinaxis Maestro Agent Studio (press): http://investors.kinaxis.com/news-releases/news-release-details/2026/Kinaxis-Introduces-Maestro-Agent-Studio-Unlocking-Next-Level-Decision-Making-Through-Composable-AI-Agents/default.aspx
- Blue Yonder AI agents: https://blueyonder.com/why-blue-yonder/ai-and-machine-learning/ai-agents
- Blue Yonder GenAI/LLM Engineer JD (req 511397, mirror): https://nodeflair.com/jobs/blue-yonder-software-engineer-ii-genai-llm-engineer-511397
- AWS agentic supply-chain logistics (Bedrock AgentCore): https://aws.amazon.com/blogs/industries/transform-supply-chain-logistics-with-agentic-ai/
- Databricks — supply chain AI agents: https://www.databricks.com/blog/transforming-supply-chain-management-ai-agents
- Agentic LLMs in the supply chain (T&F, 2025): https://www.tandfonline.com/doi/full/10.1080/00207543.2025.2604311
- Agentic-AI job guide / "Supply Chain Agent Manager" (secondary): https://theaicareerlab.com/blog/agentic-ai-jobs-guide-2026
- Supply-chain skills for AI (secondary): https://www.scoperecruiting.com/blog/supply-chain-skills-ai

*Caveat: named products, agent counts, exam codes and retirement dates move fast — re-verify at source before publishing. Vendor agent-count / ROI figures (SAP "40+ agents / 2,400 skills", Oracle "29 agents") are vendor-reported.*
