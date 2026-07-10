> Provenance: background research agent (creds pass) for **Knowledge & RAG Systems** (Area 1 — Agentic & Applied AI), mid-2026. Raw agent report, preserved verbatim. `✓` grounded (verified against a fetched/searched source this session) · `~` to-verify (inferred, market-reported, or from a page that would not load) · `⏱` time-sensitive.

I have comprehensive, current, well-sourced material across all six requested dimensions, including real job-posting evidence (kore1 2026 RAG-hiring guide with verbatim requirement phrasing and salary bands; OpenAI "Research Engineer, Retrieval & Search"; Thomson Reuters "Applied Scientist, Search & IR"; upgrad RAG-engineer JD). Here is the structured report.

---

# Credentials & Eligibility — Engineers Who Build **Knowledge & RAG Systems** (Retrieval Assistants Over Manuals, Specs, Standards & Maintenance Docs)

**Scope (this niche only):** the **RETRIEVAL & GROUNDING** layer — a technical-Q&A / retrieval assistant over manuals, specifications, standards, engineering drawings and maintenance docs, whose defining requirement is that every answer stays **traceable to the exact source page**. The substance is retrieval quality, parsing of complex technical documents, hybrid search, rerankers, GraphRAG, and groundedness evaluation. **NOT** the agent loop (that's `agentic-llm-orchestration`) and **NOT** a domain copilot wired into CAM/PLC (that's `engineering-robotics-copilots`).

**Common job titles for this person:** "AI Engineer (RAG)" / "RAG Engineer" / "Applied AI Engineer" / "GenAI Engineer," and — for the harder-science end of the same niche — "Search Engineer," "Information Retrieval Engineer," "Applied Scientist, Search & IR." ✓ (all four appear as live 2026 postings; see §6)

**Framing (important, and it differs from the copilots niche):** This is a **software-first role** — the gate is software engineering + demonstrable LLM/RAG/eval ability, exactly as for the other Area-1 niches. What makes *this* niche distinctive is that its differentiator is **not** an agent framework — it is **classical information retrieval + document/knowledge engineering**. The best hire is "a strong software/AI engineer who also understands how search actually ranks, how to parse a 400-page standard without losing the safety note attached to a procedure, and how to prove groundedness with numbers." A generic LLM engineer who has only ever called `langchain.load_qa_chain` is *not* the same person as someone who can diagnose a recall@k collapse or design a hybrid BM25+dense index. ✓ (kore1 explicitly splits "retrieval-quality engineer" out as its own lane)

---

## 1. Acceptable undergraduate degrees (tiered — strongest FOR THIS NICHE marked)

The gate for all of Area 1 is **software engineering + applied-LLM ability**; robotics/manufacturing domain knowledge is a stacked differentiator, never the entry ticket (nobody needs kinematics or control). Within that shared gate, this niche has a *distinctive* second tier — because it is fundamentally about **organizing and retrieving documents**, the "information" degrees are a genuine differentiator here, not merely "acceptable."

| Tier | Fields | Why for THIS niche |
|---|---|---|
| **Tier 1 (auto-qualifying, core)** | **Computer Science / Software Engineering**; **AI / ML / Data Science** | The role is mostly distributed-systems + data engineering "with a retrieval/probabilistic component." A CS degree **with an NLP or Information-Retrieval concentration is the single strongest signal for this niche specifically** — it is the only undergrad path that teaches indexing, ranking models and IR evaluation directly. ✓ (job posts name CS as baseline; IR/NLP courses are CS-department courses — CS276, CS410, 11-642) |
| **Tier 2 (qualifying, and a real differentiator here)** | **Information Systems / Information Science / "iSchool" informatics**; **Data Engineering**; **Computational Linguistics** | Uniquely elevated for *this* niche. RAG-engineer JDs literally list "Bachelor's in Computer Science, **Data Engineering, Information Systems**." ✓ Information-science programs bring taxonomy/metadata/findability and enterprise-search literacy that maps 1:1 onto "make a manual corpus retrievable and traceable." Computational linguistics brings the text/NLP half. |
| **Tier 3 (supporting)** | **Mathematics / Statistics / Physics** | Underpins ranking math, embeddings and eval; a common feeder, but needs demonstrable software + a retrieval project to convert. |
| **Domain differentiator (stacked on SWE)** | **Mechanical / Manufacturing / Industrial / Library-&-Information-Science backgrounds** | For a *robotics/manufacturing* knowledge base, someone who can read a WPS, a GD&T callout or a maintenance manual knows what a "correct, complete, still-safe" answer looks like — the moat that keeps a technical-doc RAG grounded. LIS specifically brings records/taxonomy discipline. |

**Bottom line for §1:** Tier 1 = CS/SE/AI-ML (strongest = CS with an IR/NLP concentration). Tier 2 (a real edge *here*, unlike other Area-1 niches) = Information Systems / Information Science / Computational Linguistics. Domain literacy in the target corpus (manufacturing, maintenance) is the stacked differentiator.

---

## 2. Named, highly-valued university programs / courses

**There is no undergraduate or master's degree literally titled "RAG" or "Knowledge & Retrieval Systems" ✓ — say so plainly.** The field is assembled from (a) the classical **Information Retrieval** course sequence, (b) **NLP/LLM** courses, and (c) applied RAG training. The closest thing to a *dedicated* degree is a **Language-Technologies / Intelligent-Information-Systems** master's or an **iSchool** information master's.

**The canonical IR courses (real codes — these are the niche's academic backbone):**
- **Stanford CS276 / LING 286 — "Information Retrieval and Web Search."** ✓ Indexing, Boolean/vector-space/probabilistic retrieval models, ranking & rank aggregation, IR evaluation, crawling, link analysis, distributed word representations. The direct academic ancestor of modern RAG retrieval. ([web.stanford.edu/class/cs276](https://web.stanford.edu/class/cs276/))
- **CMU 11-642 / 11-442 — "Search Engines"** (Language Technologies Institute). ✓ Now explicitly covers **"text-based search engines, retrieval-augmented generation, and recommender systems"** — lexical retrieval models, **recent neural models**, experimental evaluation, fair ranking, large-scale distributed search-engine implementation. The most directly-on-target named course for this niche. ([boston.lti.cs.cmu.edu/classes/11-642](https://boston.lti.cs.cmu.edu/classes/11-642/description.html))
- **UIUC CS410 — "Text Information Systems."** ✓ Retrieval models (Boolean, vector space, probabilistic), text categorization/filtering/clustering, retrieval-system design; both text retrieval *and* text mining. (Prereq CS225.) ([siebelschool.illinois.edu/.../cs410](https://siebelschool.illinois.edu/academics/courses/cs410))
- **The shared textbook = the field's bible:** Manning, Raghavan & Schütze, ***Introduction to Information Retrieval*** (Cambridge, 2008) — the assigned text for *both* CS276 and CMU 11-642. ✓ If a candidate has genuinely worked this book, they have the IR foundation this niche rests on.

**NLP / LLM courses (the generation half):**
- **Stanford CS224N — "Natural Language Processing with Deep Learning"** (Manning). ✓ Word vectors → RNN/LSTM → attention → Transformers → LLMs; final project trains a **question-answering model on SQuAD** — i.e. retrieval-adjacent QA. The standard NLP-depth marker. ([web.stanford.edu/class/cs224n](https://web.stanford.edu/class/cs224n/))
- (Reference, shared with the wider Area-1 set) Stanford CS336 "Language Modeling from Scratch," and **UC Berkeley's free "LLM Agents" MOOC** (Dawn Song) for the agentic edge — useful context, but the agent loop is *out of scope* for this niche.

**Closest thing to a dedicated degree / renowned research groups:**
- **CMU MIIS — Master of Science in Intelligent Information Systems** (Language Technologies Institute, founded 2013). ✓ "The department's deepest exposure to content analysis and machine learning… recognizing and extracting meaning from text, spoken language and video," with a required capstone + industry internship. 16-month (MIIS-16) or 21-month (MIIS-21) tracks. **The single most on-target master's for this niche.** ([lti.cs.cmu.edu/.../miis](https://www.lti.cs.cmu.edu/academics/masters-programs/miis.html))
- **UMass Amherst — Center for Intelligent Information Retrieval (CIIR)**, Manning College of Information & Computer Sciences. ✓ "One of the leading research groups working in the areas of information retrieval and information extraction" — the historic home of IR research (Lemur/Galago, learning-to-rank). A PhD/MS out of CIIR is a blue-chip retrieval pedigree. ([ciir.cs.umass.edu](https://ciir.cs.umass.edu/))
- **iSchool information master's** (the taxonomy/knowledge-organization path): **UC Berkeley MIMS** (Master of Information Management & Systems, STEM-designated), **UW MSIM** (Master of Science in Information Management), **Michigan MSI** (Master of Science in Information, built on an LIS + CS + social-science core). ✓ These are the strongest fit for the *enterprise-knowledge / findability / governance* end of the niche rather than the neural-IR end. ([ischool.berkeley.edu/programs/mims](https://www.ischool.berkeley.edu/programs/mims), [ischool.uw.edu/programs/msim](https://ischool.uw.edu/programs/msim))
- **Applied anchor textbook (shared with all Area-1 niches):** **Chip Huyen, *AI Engineering* (O'Reilly, 2025)** — the de-facto text for building RAG/LLM applications in production. ✓ (grounded in the signed-off exemplar)

---

## 3. Acceptable postgraduate degrees — and portfolio vs. graduate degree

**Acceptable postgraduate degrees:** MS/PhD in **CS/AI/ML** (strongest with an **NLP or Information-Retrieval** specialization), **Language Technologies / Intelligent Information Systems** (CMU MIIS above), or an **iSchool information master's** (Berkeley MIMS / UW MSIM / Michigan MSI) for the knowledge-organization + governance flavor. ✓ A RAG-engineer JD states a **"Master's in Data Science, Artificial Intelligence, or Information Retrieval" is preferred.** ✓ — note "Information Retrieval" named explicitly as a graduate field, which is distinctive to this niche.

**Can a portfolio outweigh a graduate degree? — Yes for the *engineering* lane; less so for the *research-scientist* lane.** This split is real and worth encoding:
- **RAG / Applied-AI Engineer lane — portfolio wins. ✓** This is applied engineering, not ML research. The kore1 2026 hiring guide's mid-level *minimum* bar is behavioral, not credential-based: *"Has shipped at least one RAG system to real users. Can debug retrieval failures."* ✓ A shipped, evaluated RAG system (with recall@k / faithfulness numbers) + a blog post or GitHub repo is explicitly the preferred proof artifact. ✓ No degree is listed as mandatory in the hiring guide.
- **Applied-Scientist / Neural-IR lane — the degree is more gate-like. ~** For "Applied Scientist, Search & Information Retrieval" and "Research Engineer, Retrieval & Search" roles, postings lean on **"PhD or Master's in CS/AI/NLP + 3+ years shipping search/retrieval into production."** ~ (from search-result summaries of the OpenAI and Thomson Reuters postings; the pages themselves would not load for verbatim confirmation — see §6). So: portfolio outweighs the degree for building RAG products; a graduate degree still carries weight when the work is neural-IR model research or web-scale ranking.

---

## 4. Named certifications that carry weight — including the DOMAIN moat for this niche

No single body "owns" RAG certification the way ASQ owns quality — **so there is no one dominant cert; the weight comes from a stack.** ✓ The distinctive thing about *this* niche is **where the moat sits: not in agent-framework certs, but in (B) search/retrieval-infrastructure certs and (D) knowledge-governance certs** — the two things a generic LLM-app engineer usually lacks. Certs supplement a portfolio; they never replace a shipped, evaluated system.

**A. LLM / RAG-specific certs (direct signal):**
- **Databricks Certified Generative AI Engineer Associate.** ✓ **The most RAG-centric mainstream cert.** ~56 MCQ / 90 min, $200; six domains incl. Design Applications, **Data Preparation**, Application Development (30%), Deployment, **Governance (8%)**, Evaluation & Monitoring. Explicitly tests the RAG pipeline: **parsing → chunking → retrieval (vector search) → generation.** Recommends 6+ months hands-on. ([databricks.com/.../genai-engineer-associate](https://www.databricks.com/learn/certification/genai-engineer-associate))
- **NVIDIA NCA-GENL — "Certified Associate: Generative AI & LLMs."** ✓ Entry-level; 50 Q / 60 min; deep-learning + Transformer/attention + NLP/LLM + prompt engineering; valid 2 years. ([nvidia.com/.../generative-ai-llm-associate](https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/))
- **IBM RAG and Agentic AI Professional Certificate** (Coursera, 10 courses). ✓ Includes dedicated courses **"Build RAG Applications," "Vector Databases for RAG," "Advanced RAG with Vector Databases and Retrievers"** (LangChain, LlamaIndex, FAISS). Portfolio-oriented. ([coursera.org/.../ibm-rag-and-agentic-ai](https://www.coursera.org/professional-certificates/ibm-rag-and-agentic-ai))
- **DeepLearning.AI "Retrieval Augmented Generation (RAG)"** short course (Zain Hasan). ✓ Retrievers → vector DBs → LLMs → **evaluation**; 5 modules, ~$49 for the certificate. Good canonical anchor. ([deeplearning.ai/courses/retrieval-augmented-generation](https://www.deeplearning.ai/courses/retrieval-augmented-generation))

**B. Search / retrieval-infrastructure certs — THE TECHNICAL MOAT for this niche:**
- **Elastic Certified Engineer.** ✓ **Hands-on, performance-based, proctored** exam on a live cluster (cluster management, data processing, **data querying**). Employer-valued precisely because it is practical, not MCQ. This is the credential that proves someone can actually run the lexical/hybrid-search half of RAG at scale — the thing a pure-LLM engineer usually can't. ([elastic.co/training/elastic-certified-engineer-exam](https://www.elastic.co/training/elastic-certified-engineer-exam))
- **Neo4j Certified Professional** + **Neo4j & Generative AI (GraphRAG) certification.** ✓ Cypher, graph data modeling, drivers (Neo4j Certified Professional, 80% to pass, hands-on Cypher); the GenAI cert validates **"building production GraphRAG applications… designing graph schemas for RAG, configuring vector search, building RAG pipelines with neo4j-graphrag."** ✓ The moat cert for the **GraphRAG** frontier of this niche. (GraphAcademy, free.) ([graphacademy.neo4j.com/certifications](https://graphacademy.neo4j.com/categories/certification/))
- **Vector-database training** (Pinecone / Weaviate / Milvus / FAISS). ✓ Note the honesty caveat: these are mostly **vendor/DataCamp/LinkedIn-Learning *courses*, not rigorous proctored certifications** ~ — useful as evidence of tooling fluency, weak as a standalone credential. A LinkedIn-Learning Weaviate certificate (Zain Hasan / JP Hwang) and DataCamp's Pinecone course are the named ones. ([classcentral.com/subject/vector-databases](https://www.classcentral.com/subject/vector-databases))

**C. Cloud AI certs (production/employer signaling; shared with all Area-1 niches):**
- **AWS** — AI Practitioner (entry) and the ML Engineer – Associate (**MLA-C01**, after MLS-C01 retired Mar 2026 per the shared grounding reference ~⏱). **Google Cloud Professional ML Engineer (PMLE)** — tops salary tables. **Microsoft Azure AI Engineer Associate (AI-102 → AI-103** per grounding reference ~⏱). ~ (cert-code transitions come from the internal `_grounding-reference.md`, stamped mid-2026; re-verify exact retirement dates at source before quoting.)
- A RAG-engineer JD also names **"AWS Certified Data Analytics or Google Cloud Professional Data Engineer"** as preferred — reflecting this niche's data-engineering weight. ✓

**D. Knowledge-governance & information-management certs — THE ENTERPRISE/REGULATED MOAT:**
*(This is the §4 "domain certification that acts as the moat," analogous to what ASQ/SMRP are for Area 2. For a retrieval system whose whole value proposition is traceable, governed, correctly-organized knowledge, these are the differentiators a pure ML engineer never has.)*
- **IAPP AIGP — Artificial Intelligence Governance Professional.** ✓ No formal prerequisites; 100 Q / 3 hr; scaled 100–500, **300 to pass**; recommends 1–2 yrs in AI/privacy/data-governance. The credential for the **governance/compliance** layer of a regulated-document RAG (EU AI Act, auditability). ([iapp.org/certify/aigp](https://iapp.org/certify/aigp))
- **ISO/IEC 42001 Lead Auditor** (AI Management System). ✓ Multiple accredited bodies (PECB, SGS, DNV, Schellman); teaches auditing an AIMS to ISO 42001 per ISO 19011 / 17021-1; prereq = fundamental understanding of ISO/IEC 42001 + AI concepts. For the assurance/traceability posture of an enterprise knowledge base. ([pecb.com/.../iso-iec-42001-lead-auditor](https://pecb.com/en/education-and-certification-for-individuals/iso-iec-42001/iso-iec-42001-lead-auditor))
- **AIIM Certified Information Professional (CIP).** ✓ **The most niche-specific knowledge-organization cert.** Covers **taxonomies & classification schemes, metadata management, search & retrieval, knowledge management** — i.e. exactly "how to make a document corpus findable and governed." AIIM markets it as core to AI-implementation teams. This is the credential that formalizes the *information-architecture* moat of a RAG system. ([aiim.org/education-section/cip](https://www.aiim.org/education-section/cip))
- **KM Institute — Certified Knowledge Manager (CKM).** ✓ 20–30 hrs; no prior KM experience needed; 30,000+ graduates since 2001; knowledge capture/transfer, taxonomy, adoption. A lighter, broader knowledge-management signal (softer than CIP, but recognized). ([kminstitute.org/.../certified-knowledge-manager-ckm](https://www.kminstitute.org/classes/certified-knowledge-manager-ckm))

**Moat summary:** the differentiator certs for *this* niche are **Elastic Certified Engineer + Neo4j (GraphRAG)** on the retrieval-infrastructure side, and **AIIM CIP / IAPP AIGP / ISO 42001 Lead Auditor** on the knowledge-governance side. That stack — not an agent-framework cert — is what separates a "Knowledge & RAG Systems" engineer from a generic GenAI engineer.

---

## 5. Experience & portfolio expectations per seniority tier

Synthesized from the kore1 2026 RAG-hiring guide (behavioral bars + salary bands, ✓) and the upgrade/OpenAI/Thomson-Reuters postings (§6). Salary bands are **US-market, vendor/staffing-firm-reported ~⏱** — directional, not authoritative. "Domain premium: healthcare, legal or financial roles command ~10–18% above standard bands." ✓

| Tier | Years (typical) | Portfolio / experience bar | US base band ~ |
|---|---|---|---|
| **L1 — Junior / RAG-curious** | 0–2 | Built a **RAG assistant over a real document set** with **retrieval eval numbers** (recall@k, faithfulness); understands chunking, embeddings, vector DBs, and that hybrid search exists. Reproduces, doesn't yet architect. | $110K–$140K ✓ |
| **L2 — Mid RAG / Applied-AI Engineer** | 3–5 | **"Has shipped at least one RAG system to real users. Can debug retrieval failures."** ✓ Fluent across chunking → hybrid search → reranking → an eval pipeline (RAGAS/TruLens/Phoenix); implements **citation grounding tied to source spans**. ✓ | $145K–$200K ✓ |
| **L3 — Senior** | 6–9 | **"Owns architecture decisions. Has handled at least one production hallucination incident."** ✓ Designs retrieval architecture (hybrid/GraphRAG, reranker choice, index strategy), sets the eval/groundedness bar, tunes cost & latency (800 ms–3 s budgets ✓), mentors. | $200K–$275K ✓ |
| **L4/L5 — Staff / Principal** | 10+ | Sets the retrieval-platform direction; owns the traceability/groundedness standard and governance posture across many corpora; 8+ yrs and/or notable applied-retrieval work. | $280K–$340K+ ✓ |

**Portable evidence that matters most (all tiers):** a **shipped, evaluated retrieval system** where the candidate can show retrieval metrics (recall@k, MRR, **nDCG**), **groundedness/faithfulness** (RAGAS), and a real failure they diagnosed (a recall collapse, a chunking pathology on tables/diagrams, or a hallucination incident). ✓

---

## 6. Real job-posting evidence — what employers actually ask for

**kore1, "How to Hire RAG Engineers in 2026"** ✓ (fetched in full) — the richest single source. It defines the role as building "pipelines that pull relevant context from a vector database, feed it to an LLM, and return grounded answers," and — importantly for MECE boundaries — **splits the niche into three distinct lanes**, of which the first is *this* niche's core:
- **"Retrieval-quality engineer"** ($200K–$260K senior): *"Owns chunking, embeddings, hybrid search, reranking, evaluation."* ✓ ← this niche
- "Applied LLM engineer" (orchestration, prompting, tool use) ← that's `agentic-llm-orchestration`
- "Platform/infrastructure engineer" (serving, latency, vector-DB ops)
- Verbatim requirement phrasing: *"Chunking strategy, with reasoning"*; *"Hybrid search (vector + BM25)"*; *"Reranking (Cohere Rerank, ColBERT, cross-encoders)"*; *"Building retrieval eval pipelines using tools like RAGAS, TruLens, or Phoenix"*; *"Metrics fluency: recall@k, MRR, nDCG, faithfulness scoring"*; *"Citation grounding tied to source spans"*; *"Hallucination mitigation beyond prompt-level fixes."* ✓ Named vector stores: *"Pinecone, Weaviate, Qdrant, pgvector, Milvus."* ✓
- ("Treating 'RAG engineer' as one role is the single most common mistake" — vindicates the framework's decision to split retrieval from the agent loop. ✓)

**upgrad, "RAG Engineer Job Description"** ✓ (fetched) — verbatim:
- Degrees: *"Bachelor's degree in Computer Science, Data Engineering, Information Systems"*; *"Master's degree in Data Science, Artificial Intelligence, or Information Retrieval"* (preferred). ✓
- Experience: *"2–5 years of work experience in data engineering, backend search, or NLP"*; *"At least 1–2 years… working directly with LLM orchestration or vector databases."* ✓
- Skills: *"Vector search, ANN (Approximate Nearest Neighbor), and re-ranking evaluation skills"*; *"Strong knowledge of Python and SQL"*; *"data engineering and ETL pipeline"* abilities; *"ensuring factual grounding."* ✓

**OpenAI, "Research Engineer, Retrieval & Search, Applied Engineering"** ~ (page 403'd; from search-result summary) — works on *"retrieval & search algorithms in domains such as document search, enterprise search, knowledge retrieval, and web-scale search."* ~ Signals that the top end of this niche is a named, standalone role at frontier labs.

**Thomson Reuters, "Applied Scientist, Search & Information Retrieval (NLP/IR/GenAI)"** ~ (page returned empty; from search-result summary) — *"PhD or Master's in CS, AI, NLP, or related, with 3+ years post-degree industry experience shipping search or retrieval systems into production"*; neural IR, semantic/hybrid search, re-ranking, query understanding; integrating vector DBs (Pinecone, Weaviate, Milvus, FAISS, pgvector). ~ Confirms the credential-gated research-scientist lane (see §3).

**Cross-cutting patterns across all postings ✓:** Python + SQL are table stakes; vector DBs are named explicitly (Pinecone/Weaviate/Qdrant/pgvector/Milvus recur); **hybrid search (BM25 + dense)** and **reranking** are near-universal for anything above junior; an **eval/groundedness** capability (RAGAS/TruLens/Phoenix; recall@k, MRR, nDCG, faithfulness) is described as the clearest signal the person has actually built retrieval, not just chained an LLM; and **citation/traceability to source spans** is a stated requirement — which is precisely this niche's defining property.

---

### Sources (URLs actually fetched or searched this session)
- Stanford CS276 (Information Retrieval & Web Search): https://web.stanford.edu/class/cs276/
- Stanford CS224N (NLP w/ Deep Learning): https://web.stanford.edu/class/cs224n/
- CMU 11-642 / 11-442 (Search Engines, LTI): https://boston.lti.cs.cmu.edu/classes/11-642/description.html
- UIUC CS410 (Text Information Systems): https://siebelschool.illinois.edu/academics/courses/cs410
- CMU MIIS (MS Intelligent Information Systems, LTI): https://www.lti.cs.cmu.edu/academics/masters-programs/miis.html
- UMass Amherst CIIR (Center for Intelligent Information Retrieval): https://ciir.cs.umass.edu/
- UC Berkeley MIMS (School of Information): https://www.ischool.berkeley.edu/programs/mims
- UW MSIM (Information School): https://ischool.uw.edu/programs/msim
- Databricks Certified Generative AI Engineer Associate: https://www.databricks.com/learn/certification/genai-engineer-associate
- NVIDIA NCA-GENL (Gen AI & LLMs, Associate): https://www.nvidia.com/en-us/learn/certification/generative-ai-llm-associate/
- IBM RAG and Agentic AI Professional Certificate: https://www.coursera.org/professional-certificates/ibm-rag-and-agentic-ai
- DeepLearning.AI RAG course: https://www.deeplearning.ai/courses/retrieval-augmented-generation
- Elastic Certified Engineer exam: https://www.elastic.co/training/elastic-certified-engineer-exam
- Neo4j GraphAcademy certifications (Neo4j Certified Professional + GenAI/GraphRAG): https://graphacademy.neo4j.com/categories/certification/
- Vector-DB courses (Pinecone/Weaviate/Milvus/FAISS): https://www.classcentral.com/subject/vector-databases
- IAPP AIGP (AI Governance Professional): https://iapp.org/certify/aigp
- ISO/IEC 42001 Lead Auditor (PECB): https://pecb.com/en/education-and-certification-for-individuals/iso-iec-42001/iso-iec-42001-lead-auditor
- AIIM Certified Information Professional (CIP): https://www.aiim.org/education-section/cip
- KM Institute Certified Knowledge Manager (CKM): https://www.kminstitute.org/classes/certified-knowledge-manager-ckm
- kore1 — How to Hire RAG Engineers in 2026 (skills, lanes, salary, verbatim JD language): https://www.kore1.com/hire-rag-engineers-2026/
- upgrad — RAG Engineer Job Description (verbatim degrees/skills): https://www.upgrad.com/blog/rag-engineer-job-description/
- OpenAI — Research Engineer, Retrieval & Search (search-summary only; page 403'd): https://openai.com/careers/research-engineer-retrieval-and-search-applied-engineering-san-francisco/
- Thomson Reuters — Applied Scientist, Search & IR (search-summary only; page empty): https://thomsonreuters.wd5.myworkdayjobs.com/en-US/External_Career_Site/job/Applied-Scientist--NLP-IR-GenAI_JREQ194922-1
- RAG evaluation metrics (RAGAS, recall@k, MRR, nDCG, faithfulness; BEIR/MS MARCO/TREC): https://www.braintrust.dev/articles/what-is-rag-evaluation

*Caveats: (1) cert exam details and cloud-cert codes (AWS MLA-C01, Azure AI-103) move fast — the code transitions here derive from the internal `_grounding-reference.md` (mid-2026) and were not re-verified at source this session, so treat as `~⏱`. (2) Salary bands are staffing-firm/market-reported. (3) The OpenAI and Thomson-Reuters postings are paraphrased from search summaries, not verbatim page text — marked `~`.*

**Hiring-rubric takeaways for this niche:** (1) Gate on **software engineering + a shipped, *evaluated* retrieval system** (recall@k / nDCG / groundedness), not on a degree. (2) The strongest undergrad signal is **CS with an IR/NLP concentration**; Information Systems / Information Science is a *real* Tier-2 differentiator *here* specifically. (3) The niche's moat certs are **Elastic Certified Engineer + Neo4j (GraphRAG)** (retrieval infrastructure) and **AIIM CIP / IAPP AIGP / ISO 42001 Lead Auditor** (knowledge governance) — *not* agent-framework certs. (4) This is **retrieval & grounding**, kept strictly separate from the agent loop (`agentic-llm-orchestration`) and the CAM/PLC copilot (`engineering-robotics-copilots`) — the kore1 "three lanes" split confirms the boundary is how the market actually thinks.
