# Per-Niche Profile — LLMOps & AI Platform Engineering

> **Applied-AI area profile (Agentic & Applied AI, Area 1).** The platform/infra layer that ships the rest of Area 1 reliably — prompt/version management, evals, fine-tuning/adaptation, serving & deployment, guardrails, cost/latency, observability — NOT the agent logic and NOT training foundation models from scratch. Standard 12-section template, adapted: §3 tilts software/platform/SRE + applied-LLM (not kinematics); §7 is the serving/eval/fine-tuning frontier; §9 is compute/serving/eval tooling (not robots). Research-backed (mid-2026). `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Niche:** LLMOps & AI Platform Engineering · **Area:** Agentic & Applied AI (non-embodied) · **Type:** `[F]` foundational
**Draws on:** software / platform / SRE engineering **+** applied-LLM production ability (serving, evals, fine-tuning, guardrails) · **Serves platforms (C):** all (platform-agnostic infra) · **Verticals (B):** all; B1 manufacturing (on-prem / air-gapped / sovereign)

---

## 1. Definition & Scope
The **infrastructure and operations layer that ships the rest of Area 1 reliably** — the LLMOps platform under every copilot, RAG assistant, and ops agent: prompt/version management, eval harnesses, fine-tuning/adaptation, model serving & deployment, guardrails, cost/latency optimization, and production observability. This is the **platform/infra layer, not the application**: it is what turns a demo notebook into a governed, monitored, cost-controlled production service — the discipline that separates the ~5% of GenAI projects that ship from the pilots that die. **In scope:** LLM serving (vLLM/SGLang/TensorRT-LLM), eval-driven development, fine-tuning/adaptation (**LoRA/QLoRA/GRPO**), LLM gateways/routing/caching, guardrails (OWASP LLM Top 10), observability, and CI/CD for prompts+configs+evals. **Out of scope:** the agent logic itself (the `agentic-llm-orchestration` niche) and **training foundation models from scratch** (out of framework scope — you *consume* Claude/GPT/Gemini/DeepSeek; adaptation of open weights *is* in scope).

## 2. Role Archetypes & Seniority Tiers
| Tier | Title | Mandate |
|------|-------|---------|
| **L1** | Junior / Associate LLMOps / AI Platform Engineer | Ships a deployed LLM service under supervision: golden-set eval harness, prompt versioning, tracing/observability, a basic cost/latency dashboard; runs the regression suite. |
| **L2** | LLMOps / AI Platform Engineer | Owns LLM productionization end-to-end: CI/CD for prompts+configs+evals, SLOs/error budgets, RAG serving, guardrails, incident response (MTTR); ships a platform component (gateway or eval infra). |
| **L3** | Senior / Staff LLM Platform Engineer | Sets the org-wide "paved road" (shared SDK + eval harness + monitoring); multi-provider routing/portability, high-performance serving (vLLM/TensorRT-LLM), governance automation; mentors. |
| **L4/L5** | Staff / Principal AI Platform Engineer | Sets platform direction & reliability strategy: multi-tenant architecture, policy-as-code / governance automation, vendor & model strategy, AI-risk frameworks; owns the on-call model and audit-evidence completeness. |

## 3. Eligibility Criteria — Acceptable & Highly-Valued Credentials
**Software-first, ops-first role `✓`:** the gate is **software/platform engineering + demonstrable LLM *production* ability** (serving, evals, cost, observability) — not a degree and not kinematics; across real postings, degree requirements are frequently absent or offered as "degree OR equivalent experience," and every role-blueprint ranks shipped production experience above formal credentials. Robotics/manufacturing domain knowledge is **not** the entry ticket here (it lives in the copilot/RAG niches) — the manufacturing differentiator for *this* niche is **on-prem / air-gapped / sovereign serving**, not CAM or PLC vocabulary.

**Acceptable undergraduate degrees** — Tier 1 (strongest): **Computer Science / Software Engineering** (the platform, SRE, and distributed-systems core — it edges out a pure ML degree because the daily work is systems/ops), **AI / ML**, **Data Science**. Tier 2 (qualifying with a shipped LLM/MLOps project): **EE/ECE**, **Computer Engineering** — Capital One's *Lead AI Engineer (Gen AI Platform)* explicitly lists *"Computer Science, AI, Electrical Engineering, Computer Engineering, or related fields."* **Degree-optional in practice `✓`:** Scale AI's *Senior AI Infrastructure Engineer, Model Serving Platform* states no degree at all — only *"4+ years building large-scale, high-performance backend systems."*

**Highly-valued programs / courses `✓`** — no dedicated "LLMOps" degree exists; strength = **CS/SWE depth + a machine-learning-systems / ML-in-production course + an LLM/NLP course**. The two canonical anchors: **CMU 17-645 "Machine Learning in Production" / 11-695 "AI Engineering"** (Kästner — the strongest *currently-taught* course; covers MLOps + responsible AI; 2025 textbook) and **Stanford CS329S "Machine Learning Systems Design"** (Chip Huyen — the durable artifact is her book *Designing Machine Learning Systems*; `~` verify current offering). LLM substrate: **Stanford CS224N** (NLP/transformers), **CS336** (build-an-LLM), **UC Berkeley "LLM Agents" MOOC** (Dawn Song, free). Recognized non-degree programs: **Made With ML** (Goku Mohandas/Anyscale — the reference MLOps course), **Full Stack Deep Learning "LLM Bootcamp"** (`~` 2023 content dates fast), **DeepLearning.AI "LLMOps"** + "Efficiently Serving LLMs" short courses, **Duke MLOps/LLMOps Specializations** (Coursera). The de-facto textbook is **Chip Huyen, *AI Engineering* (O'Reilly, 2025)** — the most-read book on the O'Reilly platform in 2025.

**Acceptable postgraduate degrees** — MS in **CS / AI / ML** (or EE/ECE with an ML/systems specialization); a master's substitutes for ~2 years of experience (Capital One), **not** for the portfolio. Cost-effective online options that fit working engineers: **Georgia Tech OMSCS** (~$8,950; added a **Generative-AI & LLM track for 2026**), **UT Austin MSAI** (~$10k), **Duke MEng AIPI** (`~` program-reported placement). **Distinctive `✓`: a shipped, measured LLM *platform* — eval harness + SLOs + cost dashboards + a serving/gateway component — outweighs an additional degree.** This is an applied-engineering / ops role, not an ML-research one; a PhD is neither required nor a differentiator here (unlike inference-research at a frontier lab).

**Highly-valued certifications `✓`** — stackable proof-of-competence, not a portfolio substitute, in three bands. *Practitioner GenAI-engineer:* **Databricks Certified GenAI Engineer Associate**, **AWS Certified ML Engineer – Associate (MLA-C01)** (replaced the retired MLS-C01, Mar 2026), **Google PMLE** (now Vertex-AI/GenAI-heavy), **Azure AI-103** (successor to AI-102, retired Jun 2026), **NVIDIA NCA-GENL / NCP-GENL** (fine-tuning + GPU deployment — NeMo, NIM, Triton, TensorRT-LLM). *Platform/infra ops:* **CKA / CKAD / CKS** (Kubernetes is the serving substrate; CKS = security, fits guardrails/least-privilege). *The moat (governance/assurance — the L4/L5 line):* **IAPP AIGP** (the AI-governance credential), **ISO/IEC 42001 Lead Auditor** (audit an AI Management System), **ISACA AAISM** (first AI-security-management cert, Aug 2025; hard prereq: a current **CISM *or* CISSP**). **Caveat `✓`:** prompt-engineering "certifications" (incl. **Anthropic Academy** completion certificates) are course completions, not proctored exams — weight the portfolio, not the badge.

**Experience & portfolio** — L1: 0–2 yr, a deployed LLM service + golden-set eval harness + tracing + a cost/latency dashboard. L2: 3–6 yr (1–2 in ML/AI ops), end-to-end productionization with CI/CD for prompts+evals, SLOs, and a shipped gateway or eval-infra component. L3: 5–8 yr, an org-wide "paved road," multi-provider routing, high-performance serving. L4/L5: 8+ yr, platform direction, multi-tenant architecture, governance automation. Feeder roles: **MLOps → LLMOps · SRE/Platform → LLMOps · Backend (with LLM feature ownership) → LLMOps**; LLMOps/GPU-inference reportedly commands a ~30–50% premium over standard senior devs `~`.

## 4. Skill Profile (JD-style)

**Required / must-have**
- Strong general **software/backend engineering** — Python (incl. async) + one of **Go/Rust/Scala/Java**; REST APIs, Git, SQL
- **Containers & orchestration** — Docker, **Kubernetes**; IaC (Terraform); **CI/CD for prompts+configs+evals**
- **LLM serving & routing** — **vLLM / SGLang / TensorRT-LLM**; gateways, token streaming, rate-limiting, load-balancing, budgets; caching (incl. **prompt caching**)
- **Evals & observability** — golden sets, **LLM-as-judge (calibrated)**, **RAGAS / DeepEval / Promptfoo**; tracing (**Langfuse / LangSmith / Phoenix**); the eval pyramid gating CI
- **Prompt & version management** — prompt registry, A/B testing, regression suites; ≥95% of LLM assets under version control
- **Guardrails & security** — **OWASP LLM Top 10** (prompt injection = LLM01), **NeMo Guardrails / Llama Guard / Guardrails AI**, red-teaming (**Garak**), PII handling, secrets, least-privilege tools
- **Cost & latency** — model routing, **TTFT / TPOT / goodput** SLOs, GPU utilization

**Preferred / differentiating**
- **Fine-tuning / adaptation** — **LoRA/QLoRA** SFT → **DPO/ORPO** → **GRPO**; stacks: Unsloth, HF TRL, Axolotl, torchtune
- **Inference optimization** — quantization (FP8 → **FP4/NVFP4**), **disaggregated prefill/decode** serving, KV-cache management
- **The manufacturing moat** — **on-prem / air-gapped / sovereign serving** of open weights (**NVIDIA NIM**, DeepSeek/Qwen/Mistral SLMs) for IP, latency, and factory-floor sovereignty
- **Governance automation** — policy-as-code, audit-evidence pipelines, model-risk frameworks (EU AI Act / **ISO/IEC 42001** framing)
- **Standards fluency** — **OpenTelemetry GenAI semantic conventions** for vendor-neutral tracing

**Tools & tech stack** — *Languages:* Python (+ Go/Rust) · *Serving:* vLLM, SGLang, TensorRT-LLM, **NVIDIA Dynamo / NIM**, BentoML, KServe/Triton · *Gateways/routing:* **LiteLLM**, Portkey, OpenRouter, Cloudflare/Kong AI Gateway · *Fine-tuning:* Unsloth, HF TRL, Axolotl, torchtune · *Evals/observability:* RAGAS, DeepEval, Promptfoo, Braintrust, **Langfuse**, LangSmith, Phoenix, **MLflow 3** · *Guardrails:* NeMo Guardrails, Llama Guard, Guardrails AI, LLM Guard, Lakera · *Orchestration/infra:* Kubernetes, Ray, Kubeflow, Argo, MLflow/W&B registry · *Models:* Claude, GPT, Gemini (API); **DeepSeek V4 / Qwen / Mistral** (open-weight, on-prem)

**Bar by tier** — L1: ships a deployed LLM service + eval harness + observability · L2: owns end-to-end productionization, fluent serving→eval→guardrails→deploy · L3: architects the platform "paved road," deep in ≥1 area (serving, evals, or governance) · L4/L5: sets platform direction, owns reliability/governance.

## 5. Core Subject List `✓`
- **Foundational maths & CS:** Python + strong software engineering (APIs, async, testing, packaging, Git, **containers/K8s**, CI/CD, cloud, distributed systems) · linear algebra & probability · ML/DL basics · **transformers, attention, tokenization, embeddings**.
- **Core LLM & production:** prompt engineering (system prompts, few-shot, structured outputs) · **model serving & inference** (continuous batching, KV-cache, streaming) · LLM APIs & function-calling · retrieval/RAG serving basics · the AI-application stack (Chip Huyen, *AI Engineering*).
- **Niche-specific (LLMOps / platform):** **eval-driven development** (golden sets, LLM-as-judge, RAGAS/DeepEval, the eval pyramid) · **observability** (tracing, **OTel GenAI conventions**, cost/latency dashboards) · **serving engines** (vLLM/SGLang/TensorRT-LLM) and **gateways/routing/caching** · **CI/CD for prompts+configs+evals**, prompt registries, regression suites · SLOs/error budgets, incident response.
- **Frontier / advanced:** **fine-tuning/adaptation** (LoRA/QLoRA → DPO → **GRPO**), programmatic prompt optimization (**DSPy/GEPA**) · **inference optimization** (FP8/**FP4-NVFP4** quantization, **disaggregated serving**, speculative decoding) · **guardrails & LLM security** (OWASP LLM Top 10, red-teaming) · multi-model routing & portability.
- **Domain (the differentiator):** **on-prem / air-gapped / sovereign** serving of open weights (NIM, SLMs) · **AI governance & assurance** (EU AI Act, **ISO/IEC 42001** AIMS, policy-as-code, audit evidence) — the manufacturing/regulated-industry moat, distinct from the copilot niches' CAM/PLC vocabulary.

## 6. Training Programme Design & Duration `✓`
Software-conversion programme — no kinematics/hardware core, but LLMOps carries a heavier **platform/SRE + serving** core (containers/K8s, inference engines, distributed systems) than the pure app-LLM copilot track, so it runs a touch longer. ~1,200 hours; phases 3–4 are the LLMOps differentiators — evals/observability, then fine-tuning/serving/guardrails.

| Phase | Focus | Fast-track | Thorough | ~Hrs | Outcome |
|-------|-------|-----------|----------|------|---------|
| 1. Foundations | Python/SWE, **containers/K8s/CI-CD**, ML/transformers basics | 2.0 mo | 5 mo | 280 | Ship a containerized Python service on K8s |
| 2. LLM core & serving | Prompting, LLM APIs, **serving engines (vLLM)**, gateways/routing/caching | 1.5 mo | 4 mo | 240 | A self-hosted model served behind a gateway |
| 3. Evals & observability (LLMOps core) | Eval-driven dev, RAGAS, tracing/**OTel**, cost/latency, SLOs | 2.0 mo | 5 mo | 280 | An eval harness gating CI + cost/trace dashboards |
| 4. **Fine-tuning, guardrails & inference opt** | LoRA/QLoRA→GRPO, quantization, OWASP LLM Top 10, on-prem | 1.5 mo | 4 mo | 220 | A QLoRA-adapted, guardrailed, quantized deploy |
| 5. Capstone + portfolio | Ship a governed LLM platform (serving+eval+gateway+guardrails+dashboards) | 1.0–1.5 mo | 3–4 mo | 180 | Job-ready evidence |
| **Total** | | **≈ 8–10 months** (full-time) | **≈ 18–24 months** (part-time) | ~1,200 | Junior LLMOps / AI-platform engineer |

*For an existing software/backend, MLOps, or SRE engineer, phase 1 largely collapses and phases 2–4 (serving + LLMOps + fine-tuning/guardrails) compress to ~3–4 months — the fastest conversion of any Area-1 niche for someone already operating production systems.*

## 7. Trending Research Topics `⏱ as of mid-2026`
> **Time-sensitive — re-research on a schedule.** `🆕` = 2025–26 release.
- **Serving & inference (the biggest 2025–26 shift):** **🆕 vLLM** (PagedAttention; HF Inference Endpoints now default to it) & **🆕 SGLang** (RadixAttention) are the two-horse race · **TensorRT-LLM** (most mature **🆕 NVFP4** support) · **🆕 NVIDIA Dynamo 1.0** (GA Mar 2026 — datacenter orchestration *above* the engines: KV-aware routing, **disaggregated prefill/decode**, tiered KV-cache offload; ~7× throughput on DeepSeek-R1/Blackwell *vendor-reported*) · **🆕 NVIDIA NIM** (model+engine+OpenAI-compatible API in one container, cloud→edge→air-gapped). Deploy-gating metrics: **TTFT / TPOT / 🆕 goodput**.
- **Quantization & efficiency:** **🆕 NVFP4** — NVIDIA's Blackwell-exclusive 4-bit float (~1.8× memory cut vs FP8, <1% degradation reported on DeepSeek-R1 PTQ; needs B200-class hardware). The field is moving FP16→FP8→FP4, roughly halving the GPU footprint of self-hosting — straight at this niche's cost mandate.
- **Fine-tuning & prompt optimization:** the ladder **🆕 QLoRA SFT → DPO/ORPO → GRPO** (GRPO popularized by **DeepSeek-R1**, now single-GPU via **HF TRL `GRPOTrainer`** + **Unsloth**) · **🆕 DSPy + GEPA** programmatic prompt optimization (GEPA reports beating GRPO by ~20% with ~35× fewer rollouts — *author-reported*) — evidence that "optimize the prompt/program" often beats "fine-tune the weights," the cheaper lever.
- **Cost levers (this niche's mandate):** **🆕 prompt caching** is the highest-ROI lever (Anthropic ~90% discount on cached reads; OpenAI/Gemini support it) — yet Datadog finds only **~28%** of calls use it · **🆕 LLM gateways/routing** (**LiteLLM**, Portkey, OpenRouter) + **semantic caching** — "model choice is a runtime decision" (claimed 40–70% cuts, *vendor-reported*).
- **Evals & observability — consolidating on a standard:** **🆕 eval-driven development** ("evals engineering" is now a named discipline — write the eval before the prompt) · **🆕 LLM-as-judge reliability openly contested** (calibrate against human labels — judges flip preference on ~¼ of hard cases; **JudgeBench / RewardBench 2**) · **🆕 OpenTelemetry GenAI semantic conventions** (`gen_ai.*` namespace; **MLflow 3** made OTel the default tracing substrate) — the single most important standards trend, ending observability lock-in.
- **Guardrails & LLM security:** **NeMo Guardrails** (Colang DSL), **Llama Guard 3**, **Guardrails AI**, **LLM Guard**, **Lakera** — mapped to the **OWASP LLM Top 10** (prompt injection = LLM01) + red-teaming (**Garak**); a hard requirement for any tool-using/industrial deployment.
- **Open-weight self-hosting, on-prem & reference stacks (the industrial differentiator):** **🆕 DeepSeek V4** (1M context, MIT license), **🆕 Kimi K2.6**, **🆕 GLM-5** now trade blows with closed models · **🆕 AirgapAI** (Iternal + Intel — fully offline), factory patterns on **NVIDIA DGX Spark** — SLMs at ~70–80% of cloud quality, running when the internet is down. Meanwhile the hyperscalers productized this exact stack: **🆕 Amazon Bedrock AgentCore**, **🆕 Databricks Agent Bricks / Mosaic AI + MLflow 3**, **🆕 Google Vertex AI Agent Builder**, **🆕 Azure AI Foundry** (model router). Consolidation the other way: **🆕 Humanloop sunset** (acqui-hired by Anthropic; shut Sept 2025), **🆕 HF TGI → maintenance mode** (Dec 2025).

*Net trend: LLMOps is the discipline that separates the ~5% of GenAI projects that ship from the pilots that die — but the deployment narrative is heavily hyped. The analyst counter-signal is strong: Gartner predicts **>40% of agentic-AI projects canceled by end-2027** ("agent-washing"), and MIT NANDA found **95% of enterprise GenAI pilots deliver no measurable P&L impact**. Treat serving/routing/caching speedups (Dynamo ~7×, semantic caching 40–70%, Unsloth 2–5×) as vendor-reported, and benchmark your own workload — real throughput drops ~30–60% vs marketed numbers.*

## 8. Hands-On Labs & Projects
| Level | Project | Teaches / "done" = |
|-------|---------|--------------------|
| Foundational | Deploy an open-weight model behind a **vLLM** server + OpenAI-compatible gateway | Serving basics (continuous batching, streaming, KV-cache); a live endpoint within a latency budget |
| Foundational | Build a **golden-set eval harness** (LLM-as-judge + deterministic checks) that runs in CI | Eval-driven development; measured faithfulness/accuracy; a failing eval blocks the merge |
| Applied | Add **observability + a cost/latency dashboard** (OTel GenAI tracing, alerting) | Production monitoring; TTFT/TPOT/cost-per-request visible; regressions caught early |
| Applied | Stand up an **LLM gateway** — multi-provider routing + fallback + prompt/semantic caching | Cost/latency optimization; measured cache-hit rate and cost cut, graceful failover |
| Advanced | **Fine-tune** an open model with QLoRA (→ optional GRPO); A/B it against the base | The adaptation ladder; a deployed adapter that beats base on your eval set |
| Advanced | **Guardrails + red-teaming** (NeMo/Llama Guard, OWASP LLM Top 10, Garak) + an on-prem SLM (**NIM**, FP8/FP4) | Security + sovereign serving; near-zero safety violations; runs fully offline within budget |
| Capstone | End-to-end **governed LLM platform** (serving + gateway + eval-in-CI + observability + guardrails + cost dashboard + SLOs) | The full LLMOps stack; a demoable, measured, production-grade platform |

## 9. Compute, Serving & Platform Stack `✓` (not robots)
- **Compute:** **GPUs are the core cost** — a workstation/cloud GPU for serving open weights (frontier open models need ~4–8× H100; **FP4/NVFP4 needs B200-class Blackwell**); a K8s cluster (or managed) for multi-tenant serving.
- **LLM access:** API budget for **Claude / GPT / Gemini** (multi-model is the default — Datadog: >70% of orgs run ≥3 models); open weights (**DeepSeek V4, Qwen, Mistral, Llama**) for self-host/on-prem.
- **Serving & gateway:** **vLLM / SGLang / TensorRT-LLM**; **NVIDIA Dynamo / NIM**; an **LLM gateway** (LiteLLM/Portkey) with routing + caching; BentoML / KServe / Triton.
- **Fine-tuning:** Unsloth / HF TRL / Axolotl / torchtune — a single GPU is enough for QLoRA/GRPO on small–mid models.
- **Evals & observability:** **RAGAS / DeepEval / Promptfoo**; **Langfuse / LangSmith / Phoenix**; **MLflow 3** (OTel substrate); dashboards for TTFT/TPOT/goodput/cost.
- **Guardrails:** NeMo Guardrails, Llama Guard, Guardrails AI, LLM Guard, Lakera; **Garak** for red-teaming.
- **On-prem / air-gapped sandbox (the manufacturing differentiator):** an offline **NIM** deployment (or DGX Spark-class box) to prove sovereign, no-data-leaves-premises serving — the platform-layer analog of the copilot niches' sim/CAM/PLC sandboxes, and where this niche earns its manufacturing keep.
- **Corpus/workload:** a realistic request mix + a golden eval set — benchmark your own (real throughput drops ~30–60% vs marketed numbers).

## 10. Partnerships & Ecosystem
- **LLM / model providers:** Anthropic (Claude) · OpenAI · Google (Gemini/Vertex) · **DeepSeek / Alibaba Qwen / Mistral / Moonshot `~` (Kimi)** (open-weight, self-host).
- **Serving & GPU infra:** **NVIDIA** (Dynamo, NIM, TensorRT-LLM, NCA/NCP-GENL) · vLLM · SGLang · BentoML · **CNCF / Linux Foundation** (Kubernetes, OpenTelemetry).
- **Platforms / managed LLMOps:** **Databricks** (Mosaic AI, MLflow, Unity Catalog) · **AWS** (Bedrock AgentCore, SageMaker) · **Google Cloud** (Vertex AI) · **Microsoft** (Azure AI Foundry).
- **Evals & observability vendors:** **Langfuse** · LangSmith · **Braintrust** · Arize / Phoenix · Datadog · Fiddler · Confident AI (DeepEval).
- **Fine-tuning / tooling:** **Unsloth** · Hugging Face (TRL, Inference Endpoints) · Anyscale (Ray, Made With ML) · Axolotl.
- **Governance / standards bodies (the moat):** **IAPP** (AIGP) · **ISO/IEC** (42001 AIMS) · **ISACA** (AAISM) · **OWASP** (LLM Top 10) · OpenTelemetry GenAI SIG.
- **On-prem / sovereign (manufacturing):** NVIDIA (DGX / NIM) · **Iternal + Intel** (AirgapAI) · edge/factory integrators.
- **Employers / proof:** Scale AI · Capital One · CrowdStrike · Databricks · the hyperscalers · any enterprise running ≥3 models in production.

## 11. Assessment & Validation
- **Portable metrics as evidence:** eval coverage (70–90% of intents), **groundedness/faithfulness (RAGAS)**, **serving SLOs** (TTFT/TPOT/goodput, 99.9% availability), **cost per request** + cache-hit rate, deployment lead time (< 2 business days), Sev2 **MTTR** (< 60–120 min), % of LLM assets under version control (≥95%), safety-violation rate (near-zero).
- **Portfolio bar:** a **shipped, measured LLM platform** — serving + eval harness gating CI + gateway/routing + observability + guardrails + a cost dashboard — plus a system-design interview (serving architecture, eval strategy, cost/latency, governance) and live debugging (a rate-limit storm, a prompt-injection case, or a retrieval/eval regression).
- **Niche-specific check (calibration & sovereignty):** does the eval suite **calibrate LLM-as-judge against human labels** (not trust it blindly), and can the platform demonstrate **governed, auditable, and — where required — fully on-prem/air-gapped** operation with policy-as-code and complete audit evidence?

## 12. Adjacent & Related Niches
Sits in **Agentic & Applied AI (Area 1)** as its **foundational `[F]` infrastructure** — the platform layer under every sibling: `Agentic Systems & LLM Orchestration`, `Engineering & Robot-Programming Copilots`, `Knowledge & RAG Systems`, `Operations, ERP & MES AI`, and `Conversational HMI & Operator Assistants` all ship *on* it; it shades into `Responsible AI, Governance & Assurance` (#8), where it owns the guardrail/audit/policy-as-code plumbing but not the full compliance mandate. On Axis A it underpins any software-heavy capability and meets **A10 edge/embedded AI** at the on-prem/SLM serving boundary; its manufacturing keep is **on-prem / air-gapped / sovereign** serving (vertical **B1**), and it is platform-agnostic across C. **Boundary to hold — vs. `Agentic Systems & LLM Orchestration`:** that niche writes the *agent logic* (planning, tool-use, multi-agent control); this niche is the *platform/infra that serves, evaluates, guardrails, monitors, and cost-optimizes it* — LLMOps runs the agent, it does not author it. (Reference only — seniority ladder is in §2.)

---
*Applied-AI area profile. Template: `phase-1/_TEMPLATE.md` (v3, adapted). Area plan: `applied-ai-taxonomy.md`. §7 stamped mid-2026 — re-research before publish. Named products/models are fast-moving; verify at source.*
