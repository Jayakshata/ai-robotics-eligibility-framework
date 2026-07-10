# Trending Research — Operations, ERP & Manufacturing-Execution AI

> **Niche:** Operations, ERP & Manufacturing-Execution AI (`operations-erp-ai`) · **Area 1 — Agentic & Applied AI.**
> Backing research for §7 of the niche profile. **Stamped: as of mid-2026 (2026-07-10).** This section dates fastest — re-research on a schedule.
> Tags: `🆕` = 2025–26 release · `~` = unverified / single-source, treat with caution · **`[vendor-reported]`** = vendor's own or customer-reported number, not independently audited.
>
> **MECE boundary reminder (load-bearing):** this niche is the **agentic layer** — LLM agents that *assist and automate operations via language + tools* (intelligent ERP/MES copilots, scheduling agents, supply-chain agents, agentic RPA). The **statistical demand forecast / demand-sensing / predictive-maintenance model underneath** is **Area 2 (analytics)** — *reference it, do not absorb it*. Where a vendor (Blue Yonder, o9, Kinaxis) does both, only the **agent orchestration on top** belongs here; the ML forecast it reads is analytics.

---

## Theme 1 — The methods / models frontier (what changed 2025–2026)

**The category shift: "system of record" → "system of action."** The defining 2025–26 move in enterprise ops is from *predictive/assistive* AI (an alert, a suggestion, a chat answer) to *agentic* AI that **plans, decides, and executes multi-step work inside business systems** within guardrails. The canonical example given across vendors: instead of alerting a planner that a shipment will be late, the agent autonomously contacts the supplier, negotiates a spot-freight rate, and reroutes — then logs the transaction back to the ERP.

- **🆕 Frontier LLMs now ship "extended thinking by default"** — Claude **Opus 4.8** (and **Fable 5**), **GPT-5.5**, **Gemini 3.1 Pro**, **Grok 4.3**; **DeepSeek V4** (+ V4-Flash) for on-prem/air-gapped. *Why it matters:* reasoning-by-default plus long tool-use horizons are what make multi-step ERP/MES workflows (reconcile → post → notify) tractable; teams run a **hybrid stack** — cheap local/SLM model for the routine 70–80%, frontier API for the hard 20–30%.
- **🆕 Agentic memory & long-horizon execution (the live research front).** A wave of 2025–26 papers attacks the real blocker for ops agents — staying coherent across long, multi-turn, multi-day processes: **Agentic Memory** (unified long-/short-term memory management, ACL 2026), **Memory-as-Action** (autonomous context curation for long-horizon tasks), **IterResearch** (Markovian state reconstruction for long-horizon agents), **MemRL / Memory-R1 / MemSearcher** (managing memory via reinforcement learning), plus survey work *"The Landscape of Agentic Reinforcement Learning for LLMs."* *Why it matters:* an order-to-cash or month-end-close agent fails on **context explosion**, not on single-step accuracy — memory + RL is where that gets fixed.
- **🆕 LLM-agent + hard-constraint-solver hybrids for scheduling/planning.** The emerging pattern for production scheduling is **not** "LLM writes the schedule" — it is a **learned policy (PPO/RL) or LLM planner producing a candidate in milliseconds, then a constraint solver enforcing hard rules** (operator certs, tooling, material presence). Named work: **A4PS** ("Agentic AI-assisted Advanced Planning & Scheduling," peer-reviewed early 2026 — one of the first to formally define agentic APS as a discipline); ~**iFactory** (PPO policy + constraint-propagation solver, 15-min replan off live ERP/MES). *Why it matters:* this is the honest architecture for the "AI scheduler" — the LLM orchestrates and explains; a solver guarantees feasibility.
- **Process Intelligence as the grounding layer.** Convergence thesis, stated bluntly by Celonis ("**No AI without PI**"): agents need **process context** — how the business *actually* runs, mined from event logs — or they hallucinate the workflow. *Why it matters:* the differentiator for ops agents isn't the model, it's grounding them in the real process graph + the ERP's live state.
- **Interop protocols became load-bearing** (see Theme 2) — MCP for tool access, A2A for agent-to-agent hand-off — the "USB-C + HTTP of agents" that lets an ops agent treat the ERP, the WMS, the supplier portal, and the MES as callable tools.

---

## Theme 2 — Tooling / framework landscape (consolidation + version numbers)

**Consolidation thesis: "less framework, more model," and every ERP/ops suite now ships an agent builder.** Two things happened at once — the horizontal agent frameworks hit stable 1.0s, and the incumbents (SAP, Microsoft, Oracle, ServiceNow, Salesforce, Kinaxis, UiPath, Celonis, IBM) each shipped a **native low-code agent studio** so customers build agents *inside* the suite that owns the data.

**Horizontal agent frameworks (hit stable releases):**
- **🆕 LangGraph 1.0 + LangChain 1.0 — GA Oct 22, 2025.** First stable major release in the durable-agent space; durable state / built-in persistence / first-class human-in-the-loop; `create_agent` + a middleware system (HITL, summarization, PII redaction). Battle-tested at Uber, LinkedIn, Klarna. *The production-auditable default.*
- **🆕 Microsoft Agent Framework 1.0 — GA April 3, 2026** (public preview Oct 1, 2025). **Merges AutoGen + Semantic Kernel** into one SDK (.NET + Python); AutoGen and Semantic Kernel go to **maintenance mode** (see Theme 6). *Why it matters:* the default for Microsoft/Dynamics-shops.
- **Thin / specialist tier:** **Claude Agent SDK** (subagent context isolation), **Strands Agents** (AWS), **CrewAI**, **LlamaIndex Workflows**, **Pydantic AI**, **smolagents**, **OpenAI Agents SDK**, **Google ADK**.

**Runtime / deployment layer (new in 2026):**
- **🆕 Amazon Bedrock AgentCore — GA end of April 2026.** Framework-agnostic runtime to deploy/operate agents securely at scale (works with LangGraph, CrewAI, LlamaIndex, Strands, **Claude Agent SDK**, any model); agents can run autonomously up to ~8 hours with auto-scaling, plus a governance/observability layer. *Why it matters:* the "where does the ops agent actually run in prod" answer for AWS shops.

**Interop protocols (now governed, now the reference architecture):**
- **🆕 MCP (Model Context Protocol, Anthropic).** De-facto **agent→tool** standard; ~**18,000+** community servers and ~**97M+ monthly SDK downloads** (Python+TS) by Feb 2026 `~`; adopted by Anthropic, OpenAI, Google, Microsoft, AWS. This is how an ops agent exposes "the ERP / WMS / supplier API / MES" as tools.
- **🆕 A2A (Agent-to-Agent, Google).** Leading **agent↔agent** coordination standard; **150+ organizations**; production use across supply chain, financial services, IT ops.
- **🆕 Linux Foundation "Agentic AI Foundation" (AAIF) — launched Dec 2025**, co-founded by OpenAI, Anthropic, Google, Microsoft, AWS, Block; now governs **MCP, A2A, ACP**. *Why it matters:* the protocol layer is no longer a single-vendor bet — it's a neutral standard, which de-risks building on it. Emerging consensus stack: **MCP (tools) + A2A (agents) + WebMCP (web)**.

**Native agent studios shipped by the ops/ERP incumbents (all 🆕):**
| Vendor | Builder / platform | Note |
|---|---|---|
| **SAP** | **Joule Studio / Agent Builder — GA Q1 2026 (Jan 2026)** | Low/no-code; 40+ prebuilt Joule Agents, ~2,400 "Joule Skills"; multi-agent protocol across SAP + non-SAP |
| **Microsoft** | **Copilot Studio** + Dynamics 365 agents; MCP server support | 2026 Release Wave 1 = agentic across finance/SCM/commerce |
| **Oracle** | **AI Agent Studio for Fusion Applications** (+ Agentic Applications Builder, 2026) | *No extra cost*; orchestration, contextual memory, ROI measurement |
| **ServiceNow** | **AI Agent Studio + AI Agent Orchestrator**, governed by **AI Control Tower** | Otto (see Theme 6) |
| **Salesforce** | **Agentforce** (Agent Builder / Atlas reasoning) | CRM/service-led; ops-adjacent |
| **Kinaxis** | **🆕 Maestro Agent Studio** (no-code, composable supply-chain agents) | orchestrator agents coordinating multiple agents (roadmap 2026) |
| **UiPath** | **🆕 Maestro** (agentic orchestration; BPMN + DMN; RPA + agents + humans) | hybrid orchestration control plane |
| **Celonis** | **🆕 AgentC** + Agent Mining | agents grounded in Process Intelligence |
| **IBM** | **watsonx Orchestrate** (prebuilt Finance + Supply Chain domain agents, Nov 2025) | one control plane; integrates SAP, Oracle, Coupa, Sterling |

---

## Theme 3 — Shipping industrial products / deployments (proof the pattern works)

**ERP / finance-ops copilots (GA, named):**
- **🆕 SAP Joule Agents** — GA Q1 2026 across the suite. Named: **Cash Management Agent** (autonomous bank-statement analysis + reconciliation, vendor-claimed up to **80%** less manual cash-positioning time **`[vendor-reported]`**); **Joule Agents live in Ariba + Fieldglass** for procurement; Ariba Contracts NL contract-drafting slated GA June 2026.
- **🆕 Microsoft Dynamics 365 agentic ERP** — Business Central agents automate sales/purchase scenarios; **ERP-apps plugin for Copilot Cowork** announced May 5, **GA June 16, 2026**, pulling D365 ERP data/workflows into M365 Copilot for source-to-pay; MCP-server + "Immersive Home" agent-management workspace.
- **🆕 Oracle Fusion Agentic Applications** (GA 2026) — agents that plan/reason/execute across **finance, HR, supply chain, CX** on Fusion ERP + SCM.
- **🆕 Salesforce Agentforce** — the loudest proof point (CRM/service-led, ops-adjacent). Vendor/customer-reported: fastest-growing product in Salesforce history, tens of thousands of deals, **~85% of queries resolved autonomously**, ~**$100M+** annualized customer cost savings **`[vendor-reported]`**. (ARR figures vary wildly across secondary sources — treat any specific $ ARR as `~` **`[vendor-reported]`**.)
- **🆕 IBM watsonx Orchestrate** prebuilt **Supply Chain** + **Finance** domain agents (Nov 2025); **S&P Global** partnership embedding Orchestrate agents starting with supply-chain management.

**Supply-chain orchestration (agentic layer on top of planning):**
- **🆕 Kinaxis Maestro Agents / Maestro Agent Studio** — composable supply-chain agents grounded in the customer's live planning model ("concurrent planning"); orchestrator agents on the 2026 roadmap. *(The statistical planning engine underneath = Area 2.)*
- **Blue Yonder** (agentic layer over its demand-sensing ML) and **o9 Solutions** (agents over its Enterprise Knowledge Graph / "digital brain"). *Boundary: the demand-sensing / forecasting models are Area 2 analytics; only the autonomous agent actions belong here.*

**Manufacturing-execution / shop-floor (MES + ops):**
- **🆕 Siemens Industrial Copilot / Opcenter MES** — agentic orchestrator (Xcelerator) that generates PLC code, optimizes scheduling sequences, and adjusts production parameters against real-time demand; the **2026 Gartner MES Market Guide explicitly stresses open architectures + MCP for agentic workflows** — a standards signal. ~Siemens "Context Layer / Agentic Foundry" over the industrial digital twin (Realize LIVE 2026).
- **🆕 Rockwell Automation Plex MES + Fiix CMMS** — agentic maintenance layer that self-schedules work orders off correlated vibration/temp/cycle-count data. *(The failure-prediction model = Area 2; the work-order agent = here.)*
- **Agentic production scheduling** — ~iFactory-style RL-policy-+-solver agents doing 15-min replans off live ERP/MES; A4PS as the academic anchor.

**Agentic RPA / process automation:**
- **🆕 UiPath Maestro** — orchestrates RPA bots + AI agents + humans (BPMN/DMN), vendor-claimed up to **70%** fewer operational delays **`[vendor-reported]`**. The mature pattern: **agent reads/reasons on messy input → hands validated, structured output to an RPA bot** that executes on the legacy system.
- **🆕 SS&C Blue Prism WorkHQ** — agentic control plane consolidating people + agents + APIs + digital workers.
- **🆕 ServiceNow Autonomous Workforce / Otto** — AI-specialist portfolio executing IT/CRM/HR/security workflows with governance built in.

---

## Theme 4 — Benchmarks & evaluation practice for this niche

**The honest headline: on realistic enterprise tasks, current agents are far from reliable — and the benchmarks prove it.**

- **🆕 τ-bench / τ²-bench (Sierra Research; τ-bench arXiv 2406.12045, 2024 · τ²-bench arXiv 2506.07982, 2025).** Tool-Agent-User interaction in real domains (retail, airline, banking); τ²-bench adds a **dual-control** setting (both agent *and* user hold tools) and voice. **Checks the resulting database state, not just tool-call syntax.** *Why it matters:* this is the closest public analog to an ops agent acting on a live system; SOTA function-callers succeed on **<50%** of tasks and are highly **inconsistent** (pass^8 <25% in retail) — the reliability gap, quantified.
- **🆕 CRMArena-Pro (Salesforce AI; arXiv 2505.18878, June 2025).** First **multi-turn, enterprise-grade** LLM-agent benchmark: 19 tasks over sandboxed Salesforce orgs — DB querying, textual reasoning, workflow execution, policy compliance, plus **confidentiality awareness**. *Findings:* leading models hit ~**58%** on single-turn, **dropping to ~35%** in multi-turn dialogues; **confidentiality awareness is weak** and only improves with explicit prompting (at a task-accuracy cost). *Why it matters:* the definitive "agents struggle in real business scenarios" citation for this niche.
- **🆕 DynaSchedBench** (arXiv 2605.27566, 2026) — calibrated **dynamic-scheduling** benchmarks for LLM-based scheduling agents (+ an "observability paradox"). *Why it matters:* niche-specific eval for the production-scheduling use case.

**Evaluation *practice* (what teams actually do — non-negotiable for a safety/finance-adjacent ops agent):**
- **Three eval layers:** **final-answer** (score the last message) → **trajectory** (score the sequence of steps + tool calls) → **per-turn** (score each turn in production). Agents graded only on final output pass **20–40% more** cases than trajectory-level eval reveals — i.e., final-answer-only eval **lies**.
- **Tooling:** **LangSmith** (LangChain stacks), **Braintrust** (rigorous pre-deploy experiments), **Langfuse** (open-source / self-host, ClickHouse-backed after a 2026 rearchitecture), **Arize Phoenix**, **Latitude**; **LLM-as-judge** regression suites + continuous production trace sampling for drift.
- **Security eval:** **🆕 OWASP Top 10 for Agentic Applications (2026)** — released Dec 9, 2025; adds MCP + Agentic-Identity cheat-sheets. Top enterprise risks: **prompt injection, sensitive-data disclosure, excessive agency, unbounded consumption.** "LLM access is a governed identity path, not a feature toggle."

---

## Theme 5 — Counter-signals (skepticism, failure rates, hype)

**A profile that lists only vendor wins is useless. The credible counter-signals, most load-bearing first:**

- **🆕 Gartner (press release June 25, 2025): >40% of agentic-AI projects will be *cancelled* by end of 2027** — from escalating cost, unclear business value, inadequate risk controls. Same release: **"agent-washing"** — vendors rebranding chatbots/RPA/assistants as "agents" without substance; Gartner estimates **only ~130 of the thousands of "agentic-AI" vendors are real.** *(It also predicts ~15% of day-to-day work decisions made autonomously by 2028 and ~33% of enterprise software containing agentic AI by 2028 — up from ~0–1% in 2024, i.e., real but early.)*
- **🆕 MIT "The GenAI Divide: State of AI in Business 2025" (NANDA, Aug 2025): ~95% of enterprise GenAI pilots deliver no measurable P&L impact.** Only ~5% achieve rapid revenue acceleration. Cause is **flawed enterprise integration** (generic tools don't learn the workflow), not model quality. Two findings that matter for this niche: **buy-from-specialist-vendor succeeds ~67% of the time vs. internal builds ~1/3 as often**, and the **biggest real ROI is in back-office / ops automation** — exactly this niche — yet most budget went to sales/marketing. *(Note: the 95% figure was itself contested by some analysts as methodology-thin — cite it as directional, not gospel.)*
- **🆕 Forrester, *State of Agentic AI in 2026* — "Companies are chasing, few are catching."** Three-quarters of leaders say they're adopting agentic AI, but only a minority run it in **meaningful production** beyond "agentish" chatbots; true scaled multi-agent systems are rarer still. Pilot→production crossed in 2026 but is **incomplete and unevenly distributed.**
- **Empirical, not just analyst:** CRMArena-Pro and τ-bench (Theme 4) show frontier models **failing >50% of realistic enterprise tasks** and degrading sharply in multi-turn — the reliability data behind the skepticism.
- **The readiness gap (Celonis 2026 Process Optimization Report):** ~**85%** of orgs want to be an "agentic enterprise" in 3 years, but ~**76%** admit their **current processes hold them back** `~` — agents need AI-ready processes + grounding they mostly don't have yet.
- **ROI claims are vendor/customer-reported, not audited.** Circulating figures like "**171% average ROI** (192% US)" and the per-vendor productivity/savings numbers in Theme 3 are **`[vendor-reported]`** and concentrated in narrow use cases (customer-service deflection, invoice/close automation). Treat every ROI/GA/"autonomous-resolution" percentage as a vendor claim until independently verified.
- **Governance / excessive-agency is the top production risk** (OWASP 2026): an ops agent with write access to the ERP is a *financial* actor — prompt injection or over-broad tool scope is a direct money/compliance risk, which is precisely why real deployments keep human-in-the-loop on high-value actions.

---

## Theme 6 — Being retired / consolidated / absorbed

- **🆕 AutoGen + Semantic Kernel → maintenance mode** (bug/security fixes only, no new features); both **superseded by Microsoft Agent Framework 1.0** (GA Apr 3, 2026). Anyone learning MS agents should learn Agent Framework, not the predecessors.
- **"RPA" as a standalone category is fading — absorbed into agentic/hybrid orchestration.** Not literally retired: the consensus pattern is **agent-in-front-of-bot** (agent reasons on messy input, RPA executes on legacy systems). Term usage is declining even at the RPA vendors. **SS&C Blue Prism** consolidated its standalone RPA into **WorkHQ** (a single governed agentic control plane).
- **Vendor consolidation of "point AI" into suites (agent-washing's flip side — real M&A):**
  - **ServiceNow acquired Moveworks**, folded (with Now Assist + AI Experience) into **ServiceNow Otto** — one AI brand.
  - **Salesforce**: Einstein Copilot rebranded/absorbed into **Agentforce** (now "Agentforce 360"); heavy data-layer M&A (~Informatica) to feed agents `~`.
  - **SAP** bought **WalkMe** (~$1.5B), **LeanIX**, **Signavio**, and **SmartRecruiters** (closed Q4 2025) — assembling the process/adoption/data substrate under agents; LeanIX repositioned as the **agent registry / single source of truth** for Joule + third-party agents.
- **Benchmark churn (eval side):** the field is retiring "does the tool-call parse" benchmarks in favor of **state-verifying, multi-turn** ones (τ²-bench, CRMArena-Pro). In the adjacent coding-agent world, **SWE-bench Verified was effectively deprecated** as a headline metric (labs stopped reporting it) — a reminder that agent benchmarks saturate/retire fast, so eval choices need re-checking each cycle.
- **"Copilot/assistant" framing giving way to "agent/agentic."** Vendors are relabeling chat-assistant SKUs as agents; per Gartner this is often cosmetic (**agent-washing**) — a consolidation of *marketing language* that outran the underlying capability.

---

## Net read (for the profile author)

The frontier of this niche is **the agent-framework + frontier-LLM stack applied to systems of record** — LangGraph/LangChain 1.0 and Microsoft Agent Framework 1.0 as the horizontal runtimes; **MCP + A2A** (now Linux-Foundation-governed) as the load-bearing interop; **native agent studios** in every ERP/MES/supply-chain suite (SAP Joule Studio, Oracle AI Agent Studio, Kinaxis Maestro, UiPath Maestro, ServiceNow, Celonis AgentC, IBM watsonx Orchestrate); memory/long-horizon + solver-hybrid scheduling as the live research edge; and **trajectory-level evals + agentic-security guardrails** as the discipline that separates a demo from production. The **counter-signal is loud and credible** (Gartner 40%-cancel + agent-washing; MIT 95%-pilot-failure; Forrester "chasing not catching"; τ-bench/CRMArena-Pro sub-50% task success) — so the honest framing is **"high-leverage back-office automation that mostly still needs a human on high-value actions,"** not "autonomous enterprise." Keep the boundary clean: the agent is this niche; the **forecast/prediction it consumes is Area 2.**

---

## Sources (fetched / searched, mid-2026)

**Frontier models & methods**
- LM Council / techiehub / HyzenPro model comparisons (Jul 2026): https://lmcouncil.ai/benchmarks · https://hyzenpro.com/blog/top-5-frontier-ai-models-2026/ · https://fenxi.fr/en/blog/claude-opus-4-8-vs-gpt-5-5-vs-gemini-3-1-pro-business-2026/
- Agentic memory / long-horizon RL: https://arxiv.org/html/2601.01885 (Agentic Memory) · https://arxiv.org/pdf/2510.12635 (Memory as Action) · https://arxiv.org/pdf/2509.02547 (Agentic RL survey) · https://github.com/VoltAgent/awesome-ai-agent-papers
- Agentic scheduling: https://www.sciencedirect.com/science/article/abs/pii/S0278612526000154 (A4PS) · https://arxiv.org/pdf/2605.27566 (DynaSchedBench) · https://ifactoryapp.com/sap-integration/on-prem-ai/production-planning-ai-discrete

**Frameworks / protocols / runtime**
- LangGraph/LangChain 1.0 GA (Oct 22, 2025): https://www.langchain.com/blog/langchain-langgraph-1dot0 · https://changelog.langchain.com/announcements/langgraph-1-0-is-now-generally-available
- Microsoft Agent Framework 1.0 (GA Apr 3, 2026; AutoGen+SK merge): https://visualstudiomagazine.com/articles/2026/04/06/microsoft-ships-production-ready-agent-framework-1-0-for-net-and-python.aspx · https://learn.microsoft.com/en-us/agent-framework/overview/
- MCP / A2A / Linux Foundation AAIF: https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year · https://workos.com/blog/everything-your-team-needs-to-know-about-mcp-in-2026 · https://dev.to/alexmercedcoder/the-state-of-agentic-ai-standards-in-2026-mcp-a2a-webmcp-osi-and-the-protocol-stack-taking-3o2l
- Amazon Bedrock AgentCore + Claude Agent SDK: https://aws.amazon.com/bedrock/agentcore/ · https://aws.amazon.com/blogs/machine-learning/amazon-bedrock-agentcore-and-claude-transforming-business-with-agentic-ai/

**Shipping products / deployments**
- SAP Joule Studio / agents: https://news.sap.com/2026/05/new-joule-studio-enterprise-scale-agentic-development/ · https://www.savictech.com/insights/sap-joule-agentic-platform-40-agents-2026/ · https://erp.today/sap-joule-agents-ariba-fieldglass-procurement-automation-2026/
- Microsoft Dynamics 365 agentic ERP / Copilot Cowork: https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2026/03/18/2026-release-wave-1-plans-for-microsoft-dynamics-365-microsoft-power-platform-and-copilot-studio-offerings/ · https://erp.today/microsoft-dynamics-365-agentic-erp-copilot-cowork/ · https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2026/06/18/reinventing-source-to-pay-with-agentic-erp/
- Oracle Fusion Agentic Applications / AI Agent Studio: https://www.oracle.com/news/announcement/oracle-introduces-fusion-agentic-applications-2026-03-24/ · https://www.oracle.com/news/announcement/oracle-expands-ai-agent-studio-for-fusion-applications-with-agentic-applications-builder-2026-03-24/
- Salesforce Agentforce: https://futurumgroup.com/insights/salesforce-q3-fy-2026-ai-agents-data-360-lift-bookings-and-fy26-outlook/ · https://techhq.com/news/salesforce-agentforce-enterprise-agentic-ai/
- Kinaxis Maestro (supply chain): https://www.kinaxis.com/en/news/press-releases/2026/kinaxis-introduces-maestro-agent-studio-unlocking-next-level-decision · https://www.kinaxis.com/en/solutions/ai-agents
- UiPath Maestro (agentic RPA): https://www.uipath.com/platform/agentic-automation/agentic-orchestration · https://www.marketbeat.com/instant-alerts/uipath-unveils-agentic-automation-roadmap-pushing-maestro-orchestration-and-coding-agents-2026-04-06/
- ServiceNow Otto / Autonomous Workforce / Moveworks: https://newsroom.servicenow.com/press-releases/details/2026/ServiceNow-launches-Autonomous-Workforce-that-thinks-and-acts-adds-Moveworks-to-the-ServiceNow-AI-Platform/default.aspx
- Celonis AgentC / process intelligence: https://www.celonis.com/news/press/celonis-agentc-making-ai-agents-work-for-the-enterprise-with-process-intelligence/ · https://siliconangle.com/2026/02/05/celonis-process-intelligence-enterprise-ai-roi-celosphere/
- IBM watsonx Orchestrate (finance + supply chain agents): https://www.ibm.com/new/announcements/new-agentic-workflows-and-domain-agents-in-ibm-watsonx-orchestrate · https://newsroom.ibm.com/2025-10-08-s-p-global-and-ibm-deploy-agentic-ai-to-improve-enterprise-operations
- Siemens Opcenter MES / Gartner MES guide / Rockwell: https://blogs.sw.siemens.com/opcenter/2026-gartner-market-guide-for-manufacturing-execution-systems-how-ai-is-shaping-mes-and-where-opcenter-adds-customer-value/ · https://www.overview.ai/blog/top-10-agentic-ai-tools-manufacturing-2026/ · https://www.arcweb.com/blog/context-layer-agentic-foundry-siemens-operationalizes-industrial-digital-twin-realize-live

**Benchmarks / evals / security**
- τ-bench / τ²-bench: https://github.com/sierra-research/tau2-bench · https://arxiv.org/abs/2406.12045 · https://arxiv.org/pdf/2506.07982
- CRMArena-Pro: https://www.salesforce.com/blog/crmarena-pro/ · https://arxiv.org/html/2505.18878v1 · https://the-decoder.com/salesforces-crm-benchmark-finds-ai-agents-struggle-in-real-world-business-scenarios/
- Agent eval/observability tooling: https://latitude.so/blog/best-ai-agent-observability-tools-2026-comparison · https://www.digitalapplied.com/blog/agent-observability-2026-evals-traces-cost-guide
- OWASP Top 10 for Agentic Applications (2026): https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/ · https://genai.owasp.org/2025/12/09/owasp-genai-security-project-releases-top-10-risks-and-mitigations-for-agentic-ai-security/

**Counter-signals**
- Gartner 40% cancel / agent-washing (Jun 25, 2025): https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
- MIT NANDA "GenAI Divide" (Aug 2025, 95%): https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/ · https://www.marketingaiinstitute.com/blog/mit-study-ai-pilots (methodology critique)
- Forrester State of Agentic AI 2026: https://www.forrester.com/blogs/the-state-of-agentic-ai-in-2026-companies-are-chasing-few-are-catching/
- Celonis readiness gap: https://www.celonis.com/news/press/the-enterprise-ai-reality-check-high-ambitions-meet-operational-barriers/

**Retirement / consolidation**
- AutoGen/Semantic Kernel → maintenance: https://visualstudiomagazine.com/articles/2025/10/01/semantic-kernel-autogen--open-source-microsoft-agent-framework.aspx
- RPA → agentic / SS&C Blue Prism WorkHQ: https://www.blueprism.com/resources/blog/future-of-rpa-trends-predictions/ · https://realenterpriseinc.com/blog/agentic-ai-workflows-are-replacing-single-tool-automation-in-2026/
- SAP M&A (WalkMe/LeanIX/Signavio/SmartRecruiters): https://www.leanix.net/en/blog/ai-agents-and-omnipresent-ai-how-sap-leanix-and-walkme-unleash-business-ai · https://news.sap.com/2025/08/sap-to-acquire-smartrecruiters/

*Stamped mid-2026 (2026-07-10). `🆕` = 2025–26 release · `~` = single-source/unverified · `[vendor-reported]` = vendor/customer claim, not independently audited. Re-research before publish — this section dates fastest.*
