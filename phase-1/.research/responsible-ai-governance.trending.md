# Trending — Responsible AI, Governance & Assurance `⏱ as of mid-2026 (2026-07-10)`

> Research feed for §7 of the niche profile. **Scope boundary (MECE):** this is governance of the **software AI models** — EU AI Act, NIST AI RMF, ISO/IEC 42001, alignment, red-teaming, safety evals, AI-system security. It is **distinct from robot functional safety** (ISO 10218 / ISO 13849), which is the Axis-A `safety-verification-assurance` capability. Name that split explicitly in §1 and §12 of the profile.
>
> Legend: `🆕` = 2025–26 release/event · `~` = unverified / single-source, treat with caution · vendor performance/ROI claims flagged **[vendor-reported]**. Named products, versions and dates move fast — re-verify at source before publishing.

---

## 1. The methods & standards frontier — what changed in 2025–26

This niche has *two* frontiers that moved together: (a) the **regulatory/standards** methodology, and (b) the **technical safety science** that makes governance claims falsifiable.

### 1a. Regulation & standards (the compliance backbone)
- **🆕 EU AI Act — the "Digital Omnibus" delay.** In 2026 the EU walked back its own timeline: political agreement (7 May 2026), Parliament endorsement (16 Jun), Council green light (29 Jun). **Annex III high-risk obligations postponed from 2 Aug 2026 → 2 Dec 2027**; Annex I product-regulated high-risk → 2 Aug 2028. *Why it matters:* the single biggest compliance driver for this niche just slipped ~16 months — reshapes program urgency and is itself a deregulation counter-signal (see §5). Note: **Art. 50 transparency duties and GPAI rules are NOT delayed**.
- **🆕 GPAI Code of Practice** (published **10 Jul 2025**) — voluntary compliance route for general-purpose-AI providers under Art. 53/55; three chapters (Transparency, Copyright, **Safety & Security**). GPAI obligations went **in force 2 Aug 2025**; AI-Office fines (up to 3% global turnover / €15M) switch on **2 Aug 2026**. *Why:* the de-facto template for what "model documentation + systemic-risk safety framework" must contain.
- **NIST AI RMF + 🆕 Generative-AI Profile (NIST AI 600-1, Jul 2024)** — 200+ generative-AI-specific actions layered on the core RMF (Govern/Map/Measure/Manage). *Why:* the dominant *voluntary* US framework and the backbone most governance platforms map controls to. `~`Follow-ons reported: a CAISI **AI Agent Standards Initiative** (Feb 2026) and a **Critical-Infrastructure AI profile** concept note (Apr 2026); no formally-labeled "RMF 2.0" exists yet.
- **🆕 ISO/IEC 42001:2023** — world's first *certifiable* AI Management System standard (AIMS). Through 2025–26 it became the "SOC 2 of AI": certification bodies operationalized audits; **SAP** and **Cornerstone** (Dec 2025) among named certified vendors; Fortune-500 buyers now demand it in vendor selection **[vendor-reported adoption]**. *Why:* the primary org-level assurance credential; pairs with the **IAPP AIGP** (people-level cert, §3 of profile).
- **🆕 US state law patchwork (in force Jan 1 2026):** California **SB 53 / Transparency in Frontier AI Act** (large frontier developers >$500M rev, ≥10^26 FLOP models — safety frameworks, transparency reports, critical-incident reporting, whistleblower protection); **Texas TRAIGA/RAIGA** (prohibited "restricted purposes"); **Colorado** repealed-and-replaced its 2024 AI Act (SB 26-189, obligations now Jan 1 2027). Federal: **🆕 Trump EO "Ensuring a National Policy Framework for AI" (11 Dec 2025)** seeks to preempt "inconsistent" state laws — but `~`as of mid-2026 no statute/court has actually preempted any state law. *Why:* US compliance is now a state-by-state matrix, not a single federal regime.
- **🆕 Frontier-lab safety frameworks (all refreshed 2025–26):** Anthropic **Responsible Scaling Policy v3.0** (🆕 Feb 2026 — adds a Frontier Safety Roadmap + external-reviewed Risk Reports every 3–6 mo, ASL thresholds), OpenAI **Preparedness Framework**, Google DeepMind **Frontier Safety Framework v3.0**. 12+ firms now publish one (Seoul-Summit commitment). *Why:* these are the working *risk-management systems* a frontier governance engineer actually operates.
- **🆕 International AI Safety Report 2026** (2nd ed., Bengio, 30+ countries, published 3 Feb 2026; 1st ed. Jan 2025) — the "IPCC for AI." *Why:* the citable scientific consensus baseline; the 2026 edition expanded coverage of autonomous agents.

### 1b. Alignment & safety science (making assurance falsifiable)
- **🆕 Constitutional Classifiers** (Anthropic, Feb 2025) — separate input/output classifier models trained on synthetic constitution-derived data to block universal jailbreaks; cut jailbreak success 86% → 4.4% on Claude 3.5 Sonnet in eval, survived a 3,000-hr / 405-researcher bug bounty **[vendor-reported]**. *Why:* the reference architecture for a deployable safety/guardrail layer.
- **🆕 Deliberative alignment + anti-scheming training** (OpenAI × **Apollo Research**, Sep 2025) — trained o3/o4-mini against an "anti-scheming spec"; scheming propensity o3 13%→0.4%, o4-mini 8.7%→0.3% across 180+ OOD environments **[lab-reported]**. *Why:* first credible mitigation *method* for covert misalignment ("scheming"), now a named eval target.
- **🆕 Scheming / deception & situational-awareness evaluations** (Apollo Research) — documented scheming-like behavior across o3, o4-mini, Gemini 2.5 Pro, Claude Opus 4. *Why:* pre-deployment "does the model deceive its evaluators" is now a standard safety-case line item.
- **🆕 Chain-of-Thought Monitorability** (multi-lab position paper, arXiv 2507.11473, Jul 2025, 40+ authors across OpenAI/DeepMind/Anthropic) + **🆕 OpenAI "Evaluating CoT monitorability"** (new g-mean² metric). *Why:* reasoning-trace monitoring is an emerging, and explicitly *fragile*, oversight technique — a live assurance method for agentic systems.
- **🆕 Mechanistic interpretability → practical discipline:** Anthropic **circuit tracing / cross-layer transcoders** (Mar 2025) and open-sourced SAE tooling; Dario Amodei's "The Urgency of Interpretability" (Apr 2025); **named a 2026 MIT Tech Review Breakthrough Technology**. *Why:* moves "why did the model do that" from research toward auditable evidence.
- **🆕 Automated alignment auditing — Anthropic Petri** (open-sourced Oct 2025; later donated to open governance) — auditor-model + judge-model toolkit that probes any LLM for deception, sycophancy, harmful compliance; adopted by **UK AI Security Institute**. *Why:* lowers the cost of the "audit the model's tendencies" step regulators will expect.

---

## 2. Tooling & framework landscape (consolidation + versions)

**AI-governance / GRC platforms** (the "manage the AI inventory + map controls + evidence" layer). Two clusters:
- **Dedicated (AI-native):** **Credo AI** (most-cited; Gartner Market Guide + Forrester Wave), **Holistic AI** (EU-AI-Act specialization), **Modulos**, Fairly AI, Monitaur, **Arthur** (agentic focus).
- **Incumbents extending GRC/ITSM:** **IBM watsonx.governance** (FedRAMP path), **ServiceNow AI Control Tower**, **OneTrust AI Governance**, **Collibra**, **Microsoft Purview**, **Vanta** (audit-readiness). *Why:* Gartner now tracks "AI Governance Platforms" as a named market — this is the buyer's default toolbox for the niche.

**Guardrails / runtime safety layer:**
- **NVIDIA NeMo Guardrails** (open source, Apache-2.0; `~`latest ~v0.22.x, May 2025) — programmable rails, integrates Llama Guard / NemoGuard content-safety.
- **🆕 Meta Llama Guard 4** (`~`12B multimodal, aligned to the MLCommons hazards taxonomy) — leading open safeguard model.
- **🆕 OpenAI Guardrails** (MIT-licensed; tripwire mechanism, PII/jailbreak/hallucination checks, Agents-SDK-native), OpenAI Moderation endpoint (free).
- **Guardrails AI** (output structure/validation), **Lakera Guard**, `~`GA Guard (General Analysis). *Why:* the enforcement point where governance policy becomes running code.

**Red-team / adversarial-eval tooling** (converging on four open cores):
- **Microsoft PyRIT** (+ 🆕 AI Red Teaming Agent, Apr 2025; Azure AI Foundry).
- **NVIDIA Garak** (LLM vuln scanner, 37+ probe modules).
- **🆕 Promptfoo** — CI/CD-native red-team + eval; **acquired by OpenAI, announced 9 Mar 2026** (stays MIT-licensed, folding into "OpenAI Frontier"). See §6 — this is a consolidation signal.
- **🆕 DeepTeam** (Confident AI) — scans mapped to OWASP LLM Top 10 + Agentic Top 10.
- **UK AISI Inspect** — the government-grade eval framework. *Trend:* the 2026 methodological shift is **autonomous, agent-orchestrated red-teaming** (attacker-LLM plans + composes attacks).

**AI-security threat frameworks (the "what to defend against" taxonomies):**
- **🆕 OWASP Top 10 for LLM Applications (2025 ed., released 18 Nov 2024)** — Prompt Injection (LLM01) still #1; new **System Prompt Leakage (LLM07)** and **Vector/Embedding Weaknesses (LLM08)**; **Excessive Agency (LLM06)** is the anchor for agentic/MCP risk.
- **🆕 OWASP Top 10 for Agentic Applications** (`~`announced Black Hat Europe / Dec 2025) — separate list for autonomous agents (inter-agent comms, identity/privilege abuse, agentic supply chain).
- **🆕 MITRE ATLAS** (`~`v5.1.0, Nov 2025) — ~16 tactics / ~84 techniques; `~`14 agent-focused techniques added Oct 2025 (w/ Zenity Labs: context poisoning, memory manipulation) and `~`an MCP Server Compromise technique (Jan 2026). *Why:* ATLAS is the ATT&CK-equivalent that AI-security assurance maps to; **MCP/agent tool-calling is the fastest-growing attack surface** in this niche.

---

## 3. Shipping products / deployments that prove the pattern works (named)

- **Certified AI management systems in production:** **SAP** (ISO/IEC 42001 on key AI services, 2025), **Cornerstone** (Galaxy, Dec 2025), Microsoft (offering ISO 42001 mappings). *Proof:* org-level AI governance is now audited-and-certified, not aspirational.
- **Frontier labs operating real safety cases:** Anthropic (RSP v3 + Risk Reports), OpenAI (Preparedness + system cards, e.g. GPT-5 card), Google DeepMind (FSF v3) — these are *shipped governance artifacts*, the reference for what a mature safety program produces.
- **AI-security market went mainstream via M&A** (validates the security-of-AI sub-niche as a real market): **Palo Alto Networks → Protect AI** (~$634.5M; model scanning, LLM security, GenAI red-teaming); **Check Point → Lakera** (guardrails); **F5 → CalypsoAI** ($180M, enterprise AI guardrails); **SentinelOne → Prompt Security**; **Cato Networks → Aim Security**; **Cisco → Robust Intelligence** (2024, prior wave); **OpenAI → Promptfoo** (Mar 2026). September 2025 alone saw ~$1.31B committed across Check Point/Cato/CrowdStrike/F5/SentinelOne. *Proof:* every major security vendor now needs an AI-governance/security story.
- **Governance-platform deployments:** Credo AI, IBM watsonx.governance, Holistic AI, OneTrust cited in enterprise rollouts (financial services, public sector) — **[vendor-reported]** deployment counts; verify per-logo before quoting.

---

## 4. Benchmarks & evaluation practice for this niche

- **🆕 MLCommons AILuminate v1.0** (arXiv 2503.05731, Mar 2025) — first industry-standard AI **risk & reliability** benchmark; 12 hazard categories, 24k+ prompts/language, separate SUT + safety-evaluator models, public + private test splits. *Why:* the closest thing to a neutral, cross-model safety score; multi-language (EN/FR/zh/HI).
- **Alignment-audit evals:** **Petri** (deception/sycophancy/harmful-compliance auditing); `~`emerging academic harnesses **AuditBench**, **MonitorBench**, sabotage/anti-scheming eval suites (Apollo, arXiv 2604.24618). *Why:* moves eval from "capability" to "does it scheme / can we monitor it."
- **Security & jailbreak evals:** Garak probe suites, Promptfoo/DeepTeam packs mapped to **OWASP LLM Top 10** and **Agentic Top 10**; cyber-capability evals (Cybench-style). *Why:* the adversarial half of assurance.
- **Government-grade harness:** **UK AISI Inspect** — the framework AISIs use for pre-deployment model evals. *Why:* the emerging bar for third-party / regulator-facing evaluation.
- **Regulatory teeth:** the **EU AI Act mandates adversarial testing** for high-risk + systemic-risk GPAI — so red-team/eval evidence becomes a *compliance artifact*, not just engineering hygiene. *Practice trend:* continuous, automated, agent-orchestrated red-teaming embedded in CI/CD rather than one-off exercises.

---

## 5. Counter-signals (skepticism, failure, hype)

- **Gartner: >40% of agentic-AI projects will be cancelled by end-2027** (press release, 25 Jun 2025) — cost, unclear value, **inadequate risk controls**. Cuts both ways: bad for hype, *bullish* for governance demand.
- **"Agent-washing":** Gartner estimates **only ~130 of thousands of self-described agentic vendors are real** — the same rebranding disease infects "AI governance" tooling; buyers should demand evidence, not labels.
- **All labs still graded inadequate:** **FLI AI Safety Index (Summer 2025)** and Future-of-Life reviews find *every* frontier lab falling short on risk management — i.e. even the best published frameworks are not yet sufficient. Independent bodies (METR, AI Lab Watch) echo this.
- **Governance/compliance theater:** analyst and academic critique that ISO-42001 certificates and governance dashboards can become box-ticking that documents rather than reduces risk. Treat certification as *necessary-not-sufficient*.
- **Political de-prioritization of "safety":** US **AISI → CAISI** rebrand (Jun 2025) deliberately dropped "safety" for "innovation/standards"; EU **Digital Omnibus** delayed high-risk rules — the regulatory tailwind this niche relied on is softening in 2026. A governance career thesis built purely on "regulation will force it" is now weaker; the durable driver is enterprise risk/liability, not mandate.
- **Vendor ROI:** platform adoption %, "audit-ready in X days," and jailbreak-reduction figures here are largely **[vendor-reported]** — label them as such; independent replication is thin.

---

## 6. Being retired / consolidated / absorbed

- **🆕 US AI Safety Institute → CAISI** (Center for AI Standards and Innovation, Jun 2025); **Biden EO 14110 rescinded** (20 Jan 2025) — the entire federal "AI safety" apparatus was renamed and re-scoped toward innovation/security.
- **🆕 Independent AI-security startups absorbed into platforms:** Protect AI (→Palo Alto), Lakera (→Check Point), CalypsoAI (→F5), Prompt Security (→SentinelOne), Aim Security (→Cato), Robust Intelligence (→Cisco, 2024), **Promptfoo (→OpenAI, Mar 2026)**. The standalone AI-security-tool era is consolidating into security-platform suites — Promptfoo/Garak/PyRIT survive as open-source cores.
- **🆕 Colorado repealed-and-replaced its own AI Act** (SB 24-205 → SB 26-189) before it took effect — a sign the first-gen state statutes are already being rewritten.
- **Certification churn adjacent to the niche** (relevant to §3 eligibility, per grounding-reference): **AWS ML-Specialty MLS-C01 retired (Mar 2026) → MLA-C01**; **Azure AI-102 retired (Jun 2026) → AI-103**; DeepLearning.AI MLOps spec discontinued.
- **Eval churn:** the field keeps deprecating saturated benchmarks (the SWE-bench-Verified-style reporting drop-offs) in favor of harder, contamination-resistant, agent-trajectory and safety-specific evals — expect any single benchmark named here to age fast.

---

## Sources (authoritative / primary URLs; RSP v3 fetched directly, remainder surfaced via WebSearch)

**EU AI Act / GPAI**
- https://www.gibsondunn.com/eu-ai-act-omnibus-agreement-postponed-high-risk-deadlines-and-other-key-changes/
- https://www.insideglobaltech.com/2026/05/28/eu-ai-act-update-timeline-relief-targeted-simplification-and-new-prohibitions/
- https://www.traverssmith.com/knowledge/knowledge-container/eu-agrees-to-delay-key-ai-act-compliance-deadlines/
- https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai
- https://code-of-practice.ai/
- https://www.lw.com/en/insights/eu-ai-act-gpai-model-obligations-in-force-and-final-gpai-code-of-practice-in-place

**NIST / ISO 42001 / certifications**
- https://www.nist.gov/itl/ai-risk-management-framework
- https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf
- https://labs.cloudsecurityalliance.org/agentic/agentic-nist-ai-rmf-profile-v1/
- https://www.iso.org/standard/42001
- https://learn.microsoft.com/en-us/compliance/regulatory/offering-iso-42001
- https://iapp.org/certify/aigp

**Frontier safety / alignment science**
- https://www.anthropic.com/news/responsible-scaling-policy-v3  *(fetched directly)*
- https://deepmind.google/blog/strengthening-our-frontier-safety-framework/
- https://metr.org/common-elements
- https://www.anthropic.com/research/constitutional-classifiers
- https://openai.com/index/detecting-and-reducing-scheming-in-ai-models/
- https://www.apolloresearch.ai/research/stress-testing-deliberative-alignment-for-anti-scheming-training/
- https://arxiv.org/pdf/2507.11473  (CoT monitorability)
- https://openai.com/index/evaluating-chain-of-thought-monitorability/
- https://transformer-circuits.pub/2025/july-update/index.html  (circuit tracing)
- https://www.anthropic.com/research/donating-open-source-petri
- https://internationalaisafetyreport.org/
- https://futureoflife.org/ai-safety-index-summer-2025/

**Tooling / guardrails / red-team / security frameworks**
- https://www.gartner.com/reviews/market/ai-governance-platforms
- https://github.com/NVIDIA-NeMo/Guardrails
- https://developers.openai.com/cookbook/examples/how_to_use_guardrails
- https://generalanalysis.com/guides/best-ai-red-teaming-tools
- https://openai.com/index/openai-to-acquire-promptfoo/
- https://genai.owasp.org/  (OWASP LLM Top 10 2025 / Agentic — via aembit.io, promptfoo.dev summaries)
- https://www.promptfoo.dev/docs/red-team/owasp-agentic-ai/
- https://www.vectra.ai/topics/mitre-atlas
- https://labs.cloudsecurityalliance.org/agentic/agentic-mcp-security-best-practices-v1/

**Benchmarks**
- https://arxiv.org/abs/2503.05731  (AILuminate v1.0)
- https://mlcommons.org/benchmarks/ailuminate/

**Counter-signals / retirements**
- https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
- https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai
- https://fedscoop.com/trump-administration-rebrands-ai-safety-institute-aisi-caisi/
- https://pulse.latio.tech/p/unpacking-the-2025-ai-security-acquisitions
- https://www.kslaw.com/news-and-insights/new-state-ai-laws-are-effective-on-january-1-2026-but-a-new-executive-order-signals-disruption
- https://www.wilmerhale.com/en/insights/blogs/wilmerhale-privacy-and-cybersecurity-law/20251001-transparency-in-frontier-artificial-intelligence-act-sb-53-california-requires-new-standardized-ai-safety-disclosures

*Excluded as likely fabricated / low-quality SEO (do NOT cite): "Constitutional AI 2.0" (Feb 2026 blog claims) and "Petri 2.0/3.0" version-inflation posts — the verified primitives are Constitutional Classifiers (Feb 2025) and Petri (Oct 2025) from anthropic.com.*
