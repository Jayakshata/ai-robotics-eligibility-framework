# Knowledge & RAG Systems — Trending Research `⏱ as of mid-2026 (2026-07-10)`

> Research feed for the §7 "Trending Research Topics" of the **Knowledge & RAG Systems** niche (Area 1 — Agentic & Applied AI).
> **Niche boundary (MECE):** this is **RETRIEVAL & GROUNDING** — retrieval quality, parsing of complex technical docs, hybrid search, rerankers, GraphRAG, and groundedness eval. It is **NOT** the agent loop (`agentic-llm-orchestration`) and **NOT** the CAM/PLC-integrated domain copilot (`engineering-robotics-copilots`). Where "agentic RAG" appears below it is treated as a *retrieval strategy* (iterative/adaptive retrieval), not as agent orchestration.
> **Legend:** `🆕` = 2025–26 release/change · `~` = unverified / single-secondary-source / vendor-reported · dates and versions are cited to source and were web-checked at write time. Never invent a version — items I could not pin to a version are described without one.

---

## 1. The methods / models frontier — what changed in 2025–2026

**Contextual chunk enrichment (the highest-leverage move for manuals & specs)**
- **Anthropic Contextual Retrieval** `✓` (published **Sept 19, 2024**) — prepend a 50–100-token Claude-generated context blurb to each chunk *before* embedding and BM25 indexing. Measured on Anthropic's own eval: Contextual Embeddings alone cut top-20 retrieval-failure **35%** (5.7%→3.7%); + Contextual BM25 → **49%** (→2.9%); + reranking → **67%** (→1.9%). *Why it matters:* directly fixes the classic failure of chopping a manual into chunks that lose their section/figure context; the single most-cited "do this first" technique for technical-doc RAG.
- **🆕 Late Chunking** (Jina, arXiv 2409.04701; shipped in **jina-embeddings-v3**) — embed the *whole* document first with a long-context encoder, then pool token embeddings into chunks afterward, so each chunk embedding carries whole-document context. *Why it matters:* a cheaper alternative to Contextual Retrieval (no per-chunk LLM call) that solves the same "chunk lost its context" problem for long manuals.

**Late-interaction & visual (OCR-free) retrieval — the biggest structural shift for drawings/diagrams**
- **🆕 ColPali / ColQwen family** — late-interaction (ColBERT-style MaxSim) retrieval directly over *page images*. ColPali encodes each page into ~1,024 patch embeddings (SigLIP vision encoder); **🆕 ColQwen3-4B**, **ColNomic-3b/7b**, **Nemotron-ColEmbed**, and **🆕 ColModernVBERT** (250M params, within ~0.6 NDCG@5 of ColPali at 10× fewer params) extend it. *Why it matters:* retrieves from scanned drawings, weld symbols, P&IDs, and table-heavy spec sheets **without an OCR/parse step** — the parts of technical docs that text pipelines lose.
- **ColBERTv2 late interaction** — token-level multi-vector matching; still the reference for tight-latency self-hosted text retrieval. *Why it matters:* the theoretical backbone under all the "Col*" visual retrievers.

**Retrieval strategy: from single-shot to iterative/adaptive (the "agentic RAG" retrieval layer)**
- **🆕 Agentic / Adaptive / Corrective / Self-RAG** — retrieval becomes a loop: plan → retrieve → *grade the retrieved evidence* → re-retrieve or reformulate before answering. Named patterns consolidating in 2026: **router, ReAct-retrieve, plan-and-execute, self-RAG, corrective RAG (CRAG), adaptive RAG**. *Why it matters:* the retrieval-quality half of "agentic RAG" — how to recover when the first retrieval misses, which is common on ambiguous technical queries. (The agent-*orchestration* half belongs to the neighboring niche.)
- **🆕 RL-trained "deep research" retrieval** — models trained via RL to decide *when to search, what to read, when to stop* (often 20+ retrieval turns), rewarded on final answer rather than a hand-written script. *Why it matters:* the emerging way multi-hop technical questions ("trace this fault across three manuals") get answered; still research-stage for regulated industrial use.

**Graph-structured retrieval**
- **GraphRAG** (Microsoft Research, 2024) + **🆕 LazyGraphRAG** (Nov 2024) — LazyGraphRAG defers community summarization to *query time*, cutting indexing cost to **~0.1% of original** (original could hit ~$33k in LLM calls to index a large corpus) `~`. *Why it matters:* in head-to-head 2025 studies neither plain RAG nor GraphRAG won outright — **GraphRAG wins multi-hop and global "sense-making" queries** (relationships across many docs), which maps onto "how does this subsystem interact with that standard."
- **🆕 Robust-GraphRAG research thread** — 2026 papers (e.g. retrieval-drift / hallucination mitigation from imperfect KGs, TagRAG, AtomicRAG) target GraphRAG's brittleness on messy real-world graphs. *Why it matters:* the honest counter to GraphRAG hype — imperfect industrial knowledge graphs degrade it.

---

## 2. The tooling / framework landscape (consolidation + real versions)

**Embedding models (retrieval quality starts here)**
- **🆕 Cohere Embed v4** (released **Apr 15, 2025**) — multimodal, 128K context, natively handles tables/graphs/diagrams/handwritten notes; ~65.2 MTEB `~`. *Why it matters:* one model over text + page-image for messy technical docs.
- **🆕 Gemini Embedding** (`gemini-embedding-001`) — leads the **MTEB English** leaderboard (~68.32 as of Apr 2026) `~`; a newer multimodal Gemini embedding (text/image/video/audio/PDF into one space) is referenced `~`.
- **🆕 NVIDIA Llama-Embed-Nemotron-8B** — reported multilingual-MTEB leader; **NV-Embed-v2** strong on English `~`. *Why it matters:* open-weight, self-hostable — the on-prem/air-gapped option.
- **🆕 Qwen3-Embedding-8B** — ~70.58 multilingual MTEB `~`; competitive self-host pricing. **Voyage** embeddings (voyage-3.5 line; a **~voyage-4 MoE family** is referenced but not primary-verified) remain a common managed choice.

**Rerankers (the cheapest accuracy win after retrieval)**
- **Cohere Rerank v3.5** `✓` (**Dec 3, 2024**, Rerank API v2; 4,096 context; SOTA on BEIR + finance/e-commerce/etc.). Some 2026 comparison blogs reference a **"Rerank 4"** `~` (not confirmed from Cohere primary docs — do not assume the version).
- **🆕 jina-reranker-v3** (0.6B, "last-but-not-late interaction," arXiv 2509.25085, ~Sept 2025); **Voyage rerank-2.5**; open-weight **BGE-reranker-v2-m3** (Apache-2.0), **mxbai-rerank-large-v2**, **Qwen3-Reranker**. *Why it matters:* self-hostable rerankers now rival managed APIs — matters for air-gapped factories.

**Document parsing (garbage-in-garbage-out gate for technical docs)**
- **🆕 Docling** (IBM, open-source) — VLM reads each page as an image, emits unified structure across PDF/DOCX/PPTX/HTML; ~94%+ table accuracy, self-hostable (no cloud). *Why it matters:* the on-prem parser for manuals/spec sheets with tables.
- **🆕 LlamaParse** (LlamaCloud) — "agentic document processing," fastest + cleanest table fidelity in 2026 comparisons, but sends PDFs to cloud. **Marker**, **Unstructured** round out the field. *Why it matters:* 2026 framing is "**agentic document processing** replaces legacy IDP/OCR" — layout-aware, semantic table reconstruction.

**Vector stores (field consolidated to ~8)**
- The production set is now **Pinecone, Qdrant, Weaviate, Milvus, Chroma, pgvector, Vertex Vector Search, Vespa**. **pgvector is the default for ~70% of workloads** (<10M vectors, team already on Postgres); **Qdrant** leads open-source speed; **Vespa/Milvus** own >1B-vector scale `~`. *Why it matters:* "which vector DB" is largely settled — hybrid (BM25+vector) support and permissions/metadata filtering now matter more than raw ANN speed.

**Access / interop layer**
- **🆕 MCP (Model Context Protocol)** (Anthropic, late 2024) — **97M+ monthly SDK downloads, 81K+ GitHub stars, 10,000+ production servers as of early/Mar 2026**, supported by Anthropic/OpenAI/Google/Microsoft/AWS. *Why it matters:* the standard way a knowledge base / doc store is exposed to an LLM. **RAG and MCP are complementary — MCP is the governed data-access layer; RAG runs on top of it** to pick the right context at query time.
- **🆕 RAGFlow** (InfiniFlow, 80K+ GitHub stars, Apache-2.0) and **Onyx** (air-gapped; UC San Diego runs it on local GPUs for 37k+ users) — open-source, sovereign-first RAG platforms. *Why it matters:* the self-hosted stack for regulated/IP-sensitive industrial corpora.
- Orchestration for the iterative-retrieval loop typically rides on **LangGraph/LangChain (1.0 line)** or **LlamaIndex** — but that framework layer is the neighboring niche's substance, referenced only.

---

## 3. Shipping industrial / enterprise deployments (proof the pattern works)

- **Siemens Industrial Copilot** — expanded with a **🆕 generative-AI maintenance offering**; operators query machine status/manuals and get technically-grounded answers; distributed via the Xcelerator Marketplace. *(The RAG-over-maintenance-docs slice is this niche; the code-gen slice is the copilot niche.)*
- **Cognite Atlas AI** — industrial agent workbench that **autonomously traverses operational knowledge graphs** to answer engineering questions and trace root causes across disparate sources. *Why it matters:* GraphRAG-over-industrial-data in a shipping product — the clearest proof of the graph-retrieval pattern in manufacturing.
- **Glean** — enterprise "Work AI" platform: **hybrid search (keyword + vector + RAG)**, dual knowledge-graph (Enterprise + Personal), strict permissions enforcement. In its own eval, Glean answers were preferred ~2× more than generic ChatGPT company-knowledge `~ (vendor)`. The reference architecture for permissioned enterprise RAG.
- **Enterprise-search field:** Microsoft, Google, **ServiceNow**, **Perplexity Enterprise**, **Moveworks**, **Guru**, **Dust** all pushing "scattered internal content → grounded answers." *Why it matters:* the knowledge-RAG pattern is now a mainstream enterprise-software category, not a demo.
- **Industrial RAG-over-manuals** vendors claim **up to 70% MTTR reduction** and 40% faster information discovery `~ (vendor-reported)`. *Why it matters:* the standard business case (cut mean-time-to-repair by grounding technicians in the manual) — credible direction, but treat the specific % as vendor marketing.

---

## 4. Benchmarks & evaluation practice for this niche

**Eval frameworks**
- **RAGAS** — the most-adopted open-source RAG-eval library; core metrics **faithfulness/groundedness, answer relevancy, context precision/recall**. **🆕 2026:** extended to agentic/tool-use, text-to-SQL, and multimodal, adding **Multimodal Faithfulness** and **Noise Sensitivity**. *Why it matters:* the portable evidence a candidate ships ("faithfulness 0.9 on a golden set").
- **DeepEval, TruLens, Arize Phoenix, Braintrust, LangSmith, FutureAGI** — the surrounding eval/observability field; all now cover the three RAG layers (retrieval, generation, end-to-end).
- Working definition candidates should know: **groundedness = fraction of answer sentences supported by retrieved chunks** (e.g., 4/5 supported, 5th fabricated → 0.8).

**Retrieval & grounding benchmarks**
- **Retrieval:** BEIR, MTEB-retrieval, MIRACL, MS MARCO, KILT, HotpotQA (multi-hop). **MTEB caveat:** scores are **self-reported by providers** with no independent verification step. **MMTEB** spans 131 tasks / 250+ languages (Borda-count aggregation).
- **🆕 ViDoRe V3** (arXiv 2601.08620, **Jan 2026**) — multimodal RAG benchmark: 26K pages, 10 professional domains, 3K human-verified queries, 6 languages, ~12,000 annotation hours; scores **retrieval + bounding-box localization + reference answers** end-to-end. Finding: **visual retrievers beat text-only by 8+ points**; text+image best on hard queries (54.7% vs 52.1%). *Why it matters:* the benchmark that measures exactly what matters for drawings/diagrams RAG.
- **Faithfulness/hallucination:** RAGTruth, FELM, TruthfulQA, RAGBench; newer end-to-end harnesses **🆕 RAGPerf** and **🆕 LIT-RAGBench** (isolates the *generator's* grounding ability).
- **🆕 Vectara Hallucination Leaderboard (HHEM-2.3)** — measures **grounded** hallucination (unsupported claims when summarizing a *given* document); 2nd-gen dataset grown 1,000 → **7,700+ articles up to 32K tokens**, last updated **Mar 20, 2026**. *Why it matters:* the closest public proxy for "will this model stay faithful to the manual." (Its key finding is a counter-signal — see §5.)

---

## 5. Counter-signals (skepticism, failure rates, hype)

- **🆕 Gartner (June 25, 2025):** **>40% of agentic-AI projects will be canceled by end of 2027** — escalating costs, unclear business value, inadequate risk controls. Coined **"agent washing"** (rebranding RPA/chatbots/assistants as "agents") and estimated **only ~130 of thousands of "agentic" vendors are real**. Backed by a Jan-2025 poll of 3,412 orgs. *Why it matters:* the headline reason to lead a profile with eval-and-governance discipline, not hype.
- **🆕 Reasoning models hallucinate *more* on grounded tasks** (Vectara HHEM-2.3, Mar 2026): GPT-5, Claude Sonnet 4.5, Grok-4, Gemini-3-Pro all **exceeded 10%** grounded-hallucination on summarization; Grok-4-fast-reasoning hit **20.2%** `~`. *Why it matters:* directly rebuts "just use a bigger reasoning model" — grounding is a *retrieval+eval* problem, not solved by model scale.
- **"RAG is dead" vs long context** — 2026 consensus: *"naive RAG is dead, sophisticated RAG is thriving; knowing which to use is the skill."* Long context wins on small (<100-doc / <100K-token) static sets; RAG wins on cost (blog figure: **~$0.00008 vs ~$0.10 per query, ~1,250×** cheaper) `~`, freshness, and access control. Future is hybrid (retrieve to *choose* the evidence set, long-context to *reason* over it). *Why it matters:* the profile must teach *when not to build RAG*, and that "RAG" now means the sophisticated version.
- **Production economics `~`:** secondary/analyst figures cite RAG production cost overruns averaging **~380% vs pilot** and median **~14 months** pilot-to-shutdown (attributed to MIT Sloan) `~`; Gartner (Apr 2026, 782 I&O leaders) says **57% of AI failures = "expecting too much, too fast"** `~`. Treat exact numbers as directional.
- **All vendor ROI/adoption claims are vendor-reported** (25–30% cost cuts, 40% faster discovery, 70% MTTR reduction, "2× preferred") — cite as such, never as measured fact.

---

## 6. Being retired / consolidated / absorbed

- **🆕 OpenAI Assistants API deprecated** — notified **Aug 26, 2025**, **sunset Aug 26, 2026**; migrate to the **Responses API + Conversations API** (Assistants→Prompts, Threads→Conversations, Runs→Responses). *Why it matters:* the built-in "Assistants file-search / retrieval" RAG shortcut is going away — teams must own their retrieval stack (or move to Responses' `file_search`/MCP). Third-party tools (e.g., Zapier's ChatGPT/Assistants steps) break on that date.
- **🆕 OpenAI Evals platform + Agent Builder** reportedly deprecated (notified ~June 3, 2026) `~` — part of a broader OpenAI product consolidation toward Responses/Conversations `~`.
- **Vector-DB field consolidated** from dozens to **~8 production-grade options** (§2) — many niche vector stores absorbed or sidelined; **pgvector-in-Postgres** displacing standalone DBs for the majority of workloads.
- **Reranker/embedding version churn:** **Cohere Rerank 3.5** already flagged "Deprecated" on at least one cloud catalog (Oracle OCI) `~`, implying a newer model; some hosted embedding models (Qwen2-7B-Instruct, LaBSE, MPNet) slated for removal on specific platforms (~July 31, 2026) `~`. **Note:** OpenAI **text-embedding-ada-002 is *not* being deprecated** — still supported (a non-retirement worth stating so nobody over-claims).
- **Naive / single-shot RAG itself is the thing being "retired"** rhetorically — replaced by hybrid search + reranking + contextual chunking + iterative/agentic retrieval as the 2026 baseline.

---

## Net trend (one paragraph)

Retrieval quality is being won at the **chunk-context and reranking layer** (Contextual Retrieval, late chunking, hybrid BM25+vector, rerankers) and, for visually-rich technical docs, by **OCR-free late-interaction visual retrieval (ColPali/ColQwen)** measured on **ViDoRe V3**. The stack has **consolidated** — ~8 vector DBs, MCP as the data-access standard, RAGAS as the eval default, a settled parser field (Docling self-host / LlamaParse cloud). The frontier is **iterative/adaptive ("agentic") retrieval** and **GraphRAG for multi-hop**, with **groundedness/faithfulness eval** now table-stakes because **reasoning models hallucinate *more* on grounded tasks**. Strong counter-signal: **Gartner's >40% agentic-project-cancellation forecast + "agent washing,"** and the "naive RAG is dead" debate. For the industrial angle, the differentiator is **on-prem/air-gapped, permissioned RAG over manuals/specs/maintenance history** (Cognite, Siemens, Glean, RAGFlow/Onyx), where the value case is MTTR reduction and traceability-to-the-source-page. Treat all vendor ROI/GA claims as vendor-reported.

---

## Sources (fetched or surfaced at write time, 2026-07-10)

**Primary (directly fetched):**
- Anthropic — Contextual Retrieval (35%/49%/67% figures, Sept 19 2024): https://www.anthropic.com/engineering/contextual-retrieval

**Methods / models:**
- LazyGraphRAG / GraphRAG — Microsoft Research: https://www.microsoft.com/en-us/research/project/graphrag/
- Awesome-GraphRAG (survey/benchmarks list): https://github.com/DEEP-PolyU/Awesome-GraphRAG
- Robust GraphRAG (retrieval-drift/hallucination): https://arxiv.org/pdf/2603.14828
- ColPali / multimodal doc RAG overview: https://www.spheron.network/blog/colpali-multimodal-document-rag-gpu-cloud/
- Argus-Retriever (VLM late-interaction, 2026): https://arxiv.org/html/2606.04300
- Jina Late Chunking (paper + article): https://arxiv.org/pdf/2409.04701 · https://jina.ai/news/late-chunking-in-long-context-embedding-models/
- jina-reranker-v3 ("last but not late interaction"): https://arxiv.org/pdf/2509.25085
- Agentic RAG production patterns: https://www.brightter.com/articles/agentic-rag-five-retrieval-patterns-that-survive-production
- Active/Agentic RAG trends 2026: https://www.signitysolutions.com/blog/trends-in-active-retrieval-augmented-generation

**Tooling / frameworks:**
- Cohere Embed v4 (Apr 15 2025) on Bedrock: https://aws.amazon.com/about-aws/whats-new/2025/10/coheres-embed-v4-multimodal-embeddings-bedrock/
- Cohere Rerank v3.5 (Dec 3 2024): https://docs.cohere.com/changelog/rerank-v3.5 · https://cohere.com/blog/rerank-3pt5
- MTEB leaderboard 2026 (embedding rankings, self-reported caveat): https://awesomeagents.ai/leaderboards/embedding-model-leaderboard-mteb-april-2026/ · https://app.ailog.fr/en/blog/news/rag-benchmark-mteb-2026
- Rerankers compared 2026: https://futureagi.com/blog/best-rerankers-for-rag-2026/ · https://zeroentropy.dev/articles/open-source-alternatives-to-cohere-rerank/
- Doc parsers (Docling vs LlamaParse vs Marker/Unstructured): https://codecut.ai/docling-vs-marker-vs-llamaparse/ · https://www.llamaindex.ai/insights/best-ai-pdf-parsers · https://www.firecrawl.dev/blog/best-pdf-parsers
- Vector DB consolidation 2026: https://www.digitalapplied.com/blog/vector-databases-for-ai-agents-pinecone-qdrant-2026 · https://www.firecrawl.dev/blog/best-vector-databases
- MCP adoption + RAG relationship: https://www.digitalapplied.com/blog/mcp-adoption-statistics-2026-model-context-protocol · https://www.k2view.com/what-is-mcp-ai/ · https://github.com/modelcontextprotocol/servers
- Sovereign / air-gapped RAG (RAGFlow, Onyx, SLMs): https://www.sphereinc.com/blogs/best-enterprise-rag-platforms-2026 · https://onyx.app/insights/enterprise-rag-platforms-2026 · https://www.futurice.com/blog/sovereign-ai-rag-solution

**Shipping deployments:**
- Siemens Industrial Copilot — maintenance offering: https://press.siemens.com/global/en/pressrelease/siemens-expands-industrial-copilot-new-generative-ai-powered-maintenance-offering
- Cognite Atlas AI / industrial agents: https://www.overview.ai/blog/top-10-agentic-ai-tools-manufacturing-2026/ · https://www.activepieces.com/blog/best-ai-agents-for-industrial-firms
- Industrial RAG / MTTR case (vendor): https://baobabsoluciones.es/en/noticias/industry/mttr-and-downtime-costs-the-rag-model-that-turns-manuals-into-actionable-knowledge/
- Glean enterprise RAG: https://www.glean.com/perspectives/best-rag-features-in-enterprise-search · https://www.glean.com/blog/enterprise-search-evaluation-2026

**Benchmarks / eval:**
- ViDoRe V3 (arXiv 2601.08620, Jan 2026): https://arxiv.org/abs/2601.08620 · https://www.tekta.ai/ai-research-papers/vidore-v3-multimodal-rag-benchmark-2026
- RAG eval frameworks (RAGAS/DeepEval/Phoenix): https://atlan.com/know/llm-evaluation-frameworks-compared/ · https://qaskills.sh/blog/rag-evaluation-metrics-complete-2026
- RAG benchmarks leaderboard (BEIR/RAGTruth/etc.): https://awesomeagents.ai/leaderboards/rag-benchmarks-leaderboard/
- Vectara Hallucination Leaderboard / HHEM-2.3: https://awesomeagents.ai/leaderboards/hallucination-benchmarks-leaderboard/ · https://www.emergentmind.com/topics/vectara-s-hallucination-leaderboard

**Counter-signals:**
- Gartner — >40% agentic projects canceled by 2027 + "agent washing" (June 25 2025): https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027 (direct fetch 403; corroborated via) https://searchengineland.com/gartner-40-of-agentic-ai-projects-will-fail-making-humans-indispensable-474695 · https://martech.org/gartner-40-of-agentic-ai-projects-will-fail-making-humans-indispensable/
- Agent-washing scorecard: https://www.digitalapplied.com/blog/agent-washing-definition-buyers-scorecard-2026
- RAG vs long context debate 2026: https://byteiota.com/rag-vs-long-context-2026-retrieval-debate/ · https://lighton.ai/lighton-blogs/rag-is-dead-long-live-rag-retrieval-in-the-age-of-agents
- AI project failure economics (~secondary): https://www.folio3.ai/blog/ai-project-failure-rate-stats

**Retired / consolidated:**
- OpenAI Assistants API → Responses API (sunset Aug 26 2026): https://developers.openai.com/api/docs/assistants/migration · https://community.openai.com/t/assistants-api-beta-deprecation-august-26-2026-sunset/1354666
- OpenAI deprecations index: https://developers.openai.com/api/docs/deprecations
- text-embedding-ada-002 NOT deprecated: https://community.openai.com/t/any-plans-of-deprecating-text-embedding-ada-002/700561

**Frontier LLM landscape (grounding context, peripheral to niche):**
- Mid-2026 model lineup (Opus 4.8 / GPT-5.5 / Gemini 3.1 Pro): https://lmcouncil.ai/benchmarks

*Time-sensitive — re-research before publish. Named models/versions verified at source on 2026-07-10; `~` items are single-secondary-source or vendor-reported and should be re-checked.*
