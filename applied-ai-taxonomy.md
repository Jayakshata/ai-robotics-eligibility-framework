# AI for Robotics — Applied / Non-Embodied AI Areas

> Extends the framework beyond the robot's *own* intelligence. Records the decision (2026-07-09) to add the **non-embodied AI** a robotics/manufacturing company also builds. Framed by the mental model below; per-niche profiles are TBD (build plan at the end). Supersedes the earlier agentic-only draft.

## The mental model — five kinds of AI, by *what the AI acts on*

| # | Kind | Acts on | In this framework |
|---|------|---------|-------------------|
| 1 | **Embodied AI** | the **robot** | = existing **Axis A** (23 niches) — perception, control, manipulation, VLAs, locomotion… |
| 2 | **Agentic / assistive AI** | your **people & workflows** | **new** — copilots, LLM agents, RAG, operator/ops assistants |
| 3 | **Analytics / predictive AI** | your **data** | **new** — the Industry-4.0 / IIoT data-science layer |
| 4 | **Generative / design AI** | your **engineering** | **new** — generative design, AI CAD/CAE, synthetic data |
| 5 | **Governance / assurance AI** | the **AI itself** | **new** — model governance, compliance, security |
| (6) | Foundation-model research | building the base models | **out of scope** — you *consume* these (fine-tune GR00T, use Claude/GPT), you don't build them; one-line acknowledgment only |

*Things that sound like new kinds but are already covered (not gaps):* world models / generative simulators & synthetic data (Axis A A7/A8), edge/embedded AI (Axis A A10), conversational/voice HMI (split across HRI in Axis A and the agentic area).

## Organization — two new build areas

The four in-scope non-embodied kinds are organized into **two areas** (generative-design and governance fold in as smaller niches; analytics stands on its own because it's core to manufacturing).

### Area 1 — Agentic & Applied AI  *(kinds 2 + 4 + 5)*
The software-agent layer that augments people, engineering, and the AI itself. Backgrounds: **software + LLM/agent engineering** (CS/ML).
1. **Agentic Systems & LLM Orchestration** — multi-agent systems, tool-use, planning/reasoning agents, agent frameworks. The core the rest build on.
2. **Engineering & Robot-Programming Copilots** — AI assistants for robot offline-programming, weld/CAM/CAD/CAE setup, cell config, code-gen. *(The "AI welding assistant" — most robotics-specific.)*
3. **Knowledge & RAG Systems** — retrieval assistants over manuals, specs, standards, maintenance docs; technical Q&A.
4. **Operations, ERP & Manufacturing-Execution AI** — intelligent ERP/MES agents, scheduling, supply-chain, agentic RPA. *(The "intelligent ERP.")*
5. **Conversational HMI & Operator Assistants** — natural-language/voice interfaces to machines, robots and fleets on the floor.
6. **LLMOps & AI Platform Engineering** — the infra to ship the above reliably: prompt eng, evals, fine-tuning, deployment, guardrails, cost/latency, monitoring.
7. **Generative & AI-Driven Design** *(kind 4, folded in)* — generative design, AI CAD/CAE, topology optimization, synthetic-data generation, hardware-software co-design (grippers, mechanisms, humanoid parts).
8. **Responsible AI, Governance & Assurance** *(kind 5, folded in)* — model governance, AI regulatory compliance (EU AI Act), alignment, red-teaming, AI-system security.

### Area 2 — Analytics / Predictive AI  *(kind 3 — the under-covered gap for manufacturing)*
Industrial data science: statistical/ML modeling on operational, sensor, and business data. Different hire again — **data scientists / ML engineers**, not roboticists or LLM-agent engineers.
1. **Predictive Maintenance & Reliability** — predict equipment failure before it stops the line.
2. **Quality, Yield & Defect Analytics** — root-cause and reduce defects; optimize yield.
3. **Process & Production Optimization** — tune parameters, throughput, energy.
4. **Forecasting & Planning Analytics** — demand/supply, capacity, inventory.
5. **Anomaly & Fault Detection** — real-time detection on operational/sensor time-series.

## Boundaries (kept MECE)
- **Agentic ops-AI (1·#4)** = LLM *agents* that assist/automate operations via language & tools. **Analytics (Area 2)** = *statistical/ML prediction* from data. An "intelligent ERP" copilot is agentic; the demand forecast under it is analytics.
- **AI-governance (1·#8)** concerns the **software models** (EU AI Act, alignment, security) — distinct from **robot functional safety** (ISO 10218), which is already covered by Axis A `safety-verification-assurance`.
- **AI-assisted inspection**: the vision+LLM *copilot* is agentic; the *quality/yield analytics* underneath is Area 2.

## How it fits the framework
- Same **v3 profile template**, adapted per niche: §3 eligibility tilts to **CS / ML / data-science / software + LLM-agent** experience (not kinematics/hardware); §9 "labs/hardware" → **compute / GPUs / APIs / data / agent-tooling** (not robots); §7 trending → the **agentic + data-science frontier** (agent frameworks, frontier LLMs, RAG advances, evals, MLOps) rather than VLAs.
- The **A×B×C coordinate model still holds** — these capabilities apply within a **vertical (B)** and can support a **platform (C)**. Especially high-value for the **manufacturing** vertical.

## Build plan — COMPLETE (2026-07-10)
1. ~~**Exemplars first (two, one per area):**~~ **DONE** — `engineering-robotics-copilots` + `predictive-maintenance`, hand-built and signed off. Validated the adapted template for both the software-AI and data-science domains.
2. ~~On sign-off, **fan out** the remaining 11~~ **DONE** — a 44-agent research→write→adversarial-verify workflow (2 web-research agents + 1 writer + 1 verifier per niche). All 22 research reports persisted in `phase-1/.research/`. The verify pass caught and removed real fabrications (ungrounded vendor and tool names) and downgraded unverifiable claims to `~`.
3. ~~Wire the two areas into the site~~ **DONE** — sidebar groups `Area 1` / `Area 2` (ids `AG1–AG8`, `AN1–AN5`) + two tree-map branches. Site now carries **62 profiles**.

**The adapted template (signed off):** 8 of the 12 sections carried over from the embodied template untouched. Four were adapted — §3 eligibility (software/LLM or data-science/reliability, never kinematics), §6 duration (Area 1 ~8–10 mo as a software conversion; Area 2 ~9–11 mo), §7 frontier (agent frameworks vs time-series foundation models), and §9, which both areas rename away from "Required Lab Setup / Hardware / Resources" and qualify with "(not robots)".

*Status: all 13 profiles built, verified and live. `⏱` sections stamped mid-2026 — re-research before external publish.*
