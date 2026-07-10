> Provenance: background research agent (creds pass) for the applied-AI niche **Conversational HMI & Operator Assistants** (slug `conversational-hmi-agents`), Area 1 — Agentic & Applied AI. Researched mid-2026 via WebSearch/WebFetch. `✓` grounded against a fetched/searched source · `~` to-verify (leading `~` on the claim) · `⏱` time-sensitive.

# Eligibility, Credentials & Hiring Landscape — **Conversational HMI & Operator Assistants**

**Scope of this niche.** The **natural-language and voice software layer** between a human operator and machines, robots, and fleets on the factory floor: operator "ask-the-machine" assistants, voice-directed work, spoken command of cells/AMR fleets, speech in **noisy industrial environments**, wake-word + intent grounding, and **safety-gated command confirmation**. The correct job titles are **"Conversational AI Engineer," "Voice AI Engineer," "Speech/Dialogue Engineer,"** and — for the deep-model tier — **"Speech Recognition (ASR) Scientist / ML Engineer."** Adjacent HMI-domain titles: "Industrial/Operations Copilot Engineer," "HMI Engineer."

**Boundary (MECE — keep strictly non-overlapping).** This is the **language/voice SOFTWARE** layer. It is **not** the robot's own social/physical human-robot interaction (that is the Axis A `human-robot-interaction` capability — reference it, do not absorb it), and it is **not** the robot's embodied motion control (Axis A). The substance unique to this niche: **industrial ASR under noise, wake-word/keyword spotting, intent grounding & slot-filling, dialogue management, and never letting an LLM directly command motion** (the LLM proposes; a deterministic, safety-rated layer confirms and gates). `✓`

**Base + delta framing.** The base is the **same AI-Engineer gate as the rest of Area 1** — software engineering + demonstrable LLM/agent/RAG/eval ability (see the sibling `engineering-robotics-copilots.creds.md` and `_grounding-reference.md`). This report documents the **delta that defines THIS niche**: (a) the **speech/voice stack** (ASR/TTS, wake-word, VAD, real-time low-latency audio, noise robustness); (b) **conversation design** (dialogue/turn-taking, intent, grounding, error recovery); (c) the **industrial-HMI + functional-safety domain** (the operator-interface and command-gating moat). `✓`

---

## 1. Acceptable Undergraduate Degrees (tiered; strongest for THIS niche)

The gate is still **software engineering + applied-LLM ability**. What is *distinctive* about this niche vs. the other Area-1 niches: **speech/ASR is historically a signal-processing (EE) discipline**, and **dialogue/voice-UX draws on linguistics and HCI** — so the acceptable-degree fan is genuinely wider here than for a pure RAG/agent role.

| Tier | Field | Why it's valued for THIS niche |
|---|---|---|
| **1 (core)** | **Computer Science / Software Engineering** (esp. with an **NLP / speech** specialization) | The role is ~80% software engineering "with a probabilistic + real-time-audio component." Ships reliable, low-latency, observable voice services. Baseline in essentially every JD. `✓` |
| **1 (core, tie)** | **AI / ML / Data Science / NLP** | Directly relevant for ASR/NLU, embeddings, intent models, evals. `✓` |
| **1 (core for the ASR tier)** | **Electrical / Electronic Engineering — Signal/Speech Processing / DSP** | *Distinctive to this niche.* Speech recognition, wake-word, VAD, beamforming/microphone-array, and **noise-robust ASR** are DSP problems. SoundHound and ASR-scientist JDs explicitly list **EE / signal processing**; senior ASR roles want acoustic-modeling theory. `✓` |
| **2 (differentiator — the conversation layer)** | **Computational Linguistics / Linguistics** | For dialogue design, intent/slot grounding, phonetics, multilingual/accent robustness. Cerence lists **"Computational Linguistics"** as an accepted major; Edinburgh/Indiana build dedicated degrees on it. `✓` |
| **2 (differentiator — the interface layer)** | **Human-Computer Interaction / Interaction Design** | Voice-UX, turn-taking, confirmation UX, and **operator situational awareness** are HCI problems; conversation design is "one of the most product-design-sensitive disciplines in modern AI." `✓` |
| **2 (differentiator — the DOMAIN moat)** | **Industrial / Automation / Control / Mechatronics Engineering** | *This is the factory-floor edge.* Someone who understands **HMI/SCADA, PLCs, OPC UA, ISA-101 operator interfaces, and functional safety** builds a voice HMI that grounds commands in real machine state and gates them safely — the thing a generic voice-AI engineer cannot. HMI/SCADA engineer JDs list EE/CompEng/CS. `✓` |
| **3 (supporting)** | **Mathematics / Physics / Statistics** | Underpins ML, acoustic modeling, evals; common feeder. `✓` |

**Strongest single major for this niche:** **CS with an NLP/speech concentration** — but with a genuine, near-equal **EE/signal-processing** path that is *stronger than in any other Area-1 niche* because the ASR/noise-robustness core is DSP. The **domain differentiator** (Industrial/Automation/Control engineering, or hands-on HMI/SCADA/PLC experience) is what turns a "voice-AI engineer" into a "factory-floor operator-assistant engineer." As with the rest of Area 1: **nobody needs kinematics or control theory to command motion — precisely because the LLM must never command motion directly.** `✓`

---

## 2. Named University Programs / Courses (real codes; no dedicated niche degree exists)

**There is no degree titled "Conversational HMI" or "Industrial Voice Interfaces."** `✓` Strength is assembled from (a) a strong CS/EE base, (b) a **spoken-language-processing / speech-&-language** specialization, and optionally (c) HCI or industrial-automation domain courses. The name-drop set:

**The single most on-target course — speech + dialogue + assistants:**
- **Stanford CS224S / LINGUIST 285 — "Spoken Language Processing."** `✓` The closest thing to a course *for this niche*: explicitly covers **automatic speech recognition, speech synthesis, affect detection, dialogue management, and applications to digital assistants and spoken language understanding systems.** Homeworks: audio/phonetics → speech tools/synthesis → **build a neural ASR model** → **fine-tune ASR on non-English speech.** Prereqs: CS 124 / CS 129 / CS 221 / **CS 224N** / CS 229 (i.e., an ML/NLP foundation) + Python/PyTorch.
- **Stanford CS224N** (NLP w/ Deep Learning) — the NLP feeder into CS224S. `✓`

**Deep speech / human-language-technology programs (the specialist pipeline):**
- **CMU — Language Technologies Institute (LTI).** `✓` **11-751 / 18-781 "Speech Recognition and Understanding"** (Shinji Watanabe; cross-listed CS↔ECE) and **11-785 "Introduction to Deep Learning."** Degree homes: **MS in Intelligent Information Systems (MIIS)**, MLT, MCDS — LTI is one of the largest speech/NLP faculties in the world.
- **Johns Hopkins — Center for Language & Speech Processing (CLSP).** `✓` The **Human Language Technology (HLT)** master's concentration inside the **MSE in CS or ECE**; ~3–4 semesters; explicit prep "for work in industry"; research spans **acoustic processing, ASR, machine translation.** JHU CLSP is a canonical ASR pedigree.
- **University of Edinburgh — MSc "Speech and Language Processing."** `✓` A **dedicated named degree** (run by PPLS + School of Informatics, teaching from the **Centre for Speech Technology Research / CSTR**): phonetics, **speech synthesis, speech recognition**, NLG, MT, and large generative speech/language models. 1 yr FT. Entry: 2:1 in CS/Eng/linguistics/maths/psychology + evidence of maths & CS.
- **Indiana University Bloomington — MS Computational Linguistics.** `✓` Speech recognition & production, IR/IE, MT, **conversational NLU & generation.**
- ~ Other strong speech/HLT-adjacent groups often named: **University of Washington** (CLMS — Computational Linguistics Master's), **MIT** (spoken-language systems lineage), **University of Sheffield / Saarland / RWTH Aachen / Cambridge** for European speech research. (Program existence is well-established; verify current course titles at source before quoting.)

**The domain / HMI-interface side (the factory-floor half):**
- ~ HMI/operator-interface design is taught mostly through **industrial-automation programs and the ISA-101 standard body-of-knowledge** rather than a specific university course code; pair CS/EE with an **Industrial/Automation/Control** track or ISA training (see §4). `✓` for ISA-101 existing; `~` that no single flagship "HMI design" university course is the canonical marker.

**Textbook anchor:** **Jurafsky & Martin, *Speech and Language Processing*** — the field-standard text used across CS224S/CMU/JHU/Edinburgh. `✓`

---

## 3. Acceptable Postgraduate Degrees — and can a portfolio outweigh a graduate degree?

**Acceptable postgrad fields:** MS/PhD in **CS/AI/ML**, **Computational Linguistics / Human Language Technology**, **Speech & Language Processing** (Edinburgh), **Electrical Eng / Signal Processing** (for the ASR tier), or **HCI** (for the voice-UX tier). Named strong programs: **CMU MIIS/MLT**, **JHU HLT (MSE)**, **Edinburgh MSc Speech & Language Processing**, **UW CLMS**, plus generalist AI MS with an NLP/speech concentration (**Stanford MSCS-AI**, **Georgia Tech OMSCS**). `✓`

**The portfolio-vs-degree answer is bimodal for this niche — this is the key nuance:**
- **Applied "Conversational / Voice AI Engineer" (the volume of hiring): portfolio-first.** `✓` For the person wiring **STT → LLM → TTS** with sub-second latency, interruption handling, and a safety-gated command flow, guidance is explicit that **"no degree required; portfolios matter more than credentials"** and that the required background is *"either ML engineering (adding speech specialization) or audio/signal-processing (adding ML skills)."* A shipped, evaluated voice agent (with latency, WER, and task-success numbers) can **outweigh** a graduate degree here.
- **Deep "Speech Recognition Scientist / ASR ML Engineer" (the moat model tier): degree-heavy.** `✓` For custom acoustic modeling, low-resource/streaming ASR (RNN-Transducer/CTC), and noise robustness, JDs "require a **Master's or PhD in CS, Signal Processing or similar**," value **ICASSP/Interspeech** publications, and a portfolio rarely substitutes for the maths depth. This is where a graduate degree still dominates.

**Net:** for the **operator-assistant / voice-HMI engineer** this framework is training toward, **a shipped-and-evaluated voice-agent portfolio + domain (HMI/safety) literacy can outweigh a master's**; the graduate degree becomes near-mandatory only if the role is *building the ASR/acoustic model itself* rather than *consuming* Whisper/Deepgram/Riva.

---

## 4. Named Certifications That Carry Weight (incl. the DOMAIN moat)

Certs **supplement a portfolio**, they don't replace a shipped project. For this niche they stack in **four layers** — the base agent/LLM layer, the **voice/speech** layer, the **conversation-design** craft, and the **industrial-HMI + functional-safety domain moat.**

**A. Base agent/LLM/cloud (shared with all of Area 1 — see sibling doc):** `✓`
- **DeepLearning.AI *Agentic AI*** + *AI Agents in LangGraph*; **Hugging Face *AI Agents Course*** (free + certified); **NVIDIA NCA-GENL** (Gen AI + LLMs, Associate).
- Cloud: **AWS AI Practitioner** / ML-Engineer Associate (MLA-C01); **Google Cloud PMLE.**

**B. Voice / speech-specific (the niche's technical layer):** `✓`
- **NVIDIA — Speech AI / Riva path.** DLI courses **"Building Conversational AI Applications"** and **"Get Started with Highly Accurate Custom ASR for Speech AI"** (DLI `S-FX-04`) — build/deploy **ASR + NLP + TTS** pipelines on **Riva**; ties into NVIDIA's **Multimodal Generative AI (Associate)** certification. Highest-signal *speech* cert line for GPU/edge deployment.
- **Microsoft Azure AI Engineer** — **AI-102** (covers **Speech service**, LUIS/CLU, Bot Framework). `⏱` **AI-102 retires 30 June 2026 → successor AI-103 "Developing AI Apps and Agents on Azure"** (Azure AI Apps & Agents Developer Associate). Use **AI-103** going forward. `✓`
- **Google Cloud — Contact Center AI (CCAI) / Conversational Agents (Dialogflow CX).** `✓` No standalone Google *certification* dedicated to Dialogflow CX; the recognized signals are the **"Customer Experiences with CCAI / Dialogflow CX" course** + a **Dialogflow CX skill badge**, with Professional Cloud Developer as the umbrella cert. CCAI architecture = **Speech Recognition + Dialogflow + Speech Synthesis + Agent Assist** — directly the voice-HMI shape.

**C. Conversation-design craft (the voice-UX moat):** `✓`
- **Conversation Design Institute (CDI) — CxD1 / CxD2** (and the CDI-Method Foundation). Described as the **"gold standard" for conversation design**; **1,600+ certified**; enterprise-adopted (T-Mobile, NatWest, JP Morgan, Vodafone). **CxD1 exam: $499, 50 min, 70% to pass**, prereqs = CDI Workflow + Conversation Design Fundamentals modules (exam may be taken standalone). This is the credential that certifies the *dialogue/turn-taking/error-recovery* skill an ASR cert doesn't.

**D. Enterprise conversational-AI platform certs (employer-recognized, product-locked):** `✓`
- **Rasa Developer Certification** — NLU + dialogue management, forms/custom actions, conversation-driven development (open-source, self-hostable — relevant for **on-prem/air-gapped factory** deployments).
- **Cognigy Mastery Program** — **Specialist** (50-Q exam) → **Master Builder** (in-person hands-on); enterprise contact-center/agent focus.
- **Kore.ai Academy** — certification on the Kore.ai agent platform.
- (Others named in JDs: **IBM watsonx / Watson Assistant**, **Microsoft Bot Framework**, **Teneo.)

**E. The DOMAIN MOAT — industrial HMI + functional safety (what makes it a *factory-floor* niche):** `✓`
- **ISA Certified Automation Professional (CAP®)** — **issuing body: International Society of Automation (ISA).** The single best **domain** credential for "interfaces to machines on the floor": its body of knowledge explicitly includes **operator interface / HMI**, industrial communication protocols, MES/business integration, and security; exam = **175 questions, 4 hours**; valid 3 yrs (150 PDPs to recertify). **Prereqs (moat-forming):** a **4-year technical degree + 5 years (7,500 h) automation experience**, *or* **10 years (15,000 h)** without a degree; a **CAP Associate** exists as an earlier-career stepping stone. This is the credential a pure software engineer almost never has — hence the moat.
- **ISA Certified Control Systems Technician (CCST®)** — earlier-career industrial/controls domain signal. `~` (named ISA program; verify current tiers.)
- **TÜV Rheinland (or TÜV SÜD) "FS Engineer" — Functional Safety Engineer, IEC 61508 / IEC 61511.** `✓` The moat for **safety-gated command confirmation** — the discipline behind "the LLM proposes, a deterministic safety-rated layer disposes." **Prereqs: an engineering degree + ≥3 years practical functional-safety experience**, plus the training course and exam; yields a worldwide-recognized certificate ID and application area. Signals that the holder understands **SIL, safety functions, and why voice must never be the sole path to motion.**
- **Standards to *know* (not certs but domain grounding):** **ISA-101 (HMI design & lifecycle — human-centered design, operator situational awareness)**, ISA-18.2 (alarm management), **IEC 62443** (OT security), **OPC UA** (machine-data access). `✓`
- **Governance layer (lighter for this niche, but real):** `~`/`✓` **IAPP AIGP** and **ISO/IEC 42001** lead-auditor training apply if the operator assistant falls under EU-AI-Act obligations — relevant, but for THIS niche the **ISA CAP + TÜV FS Engineer** pairing is the more differentiating domain moat than pure AI-governance certs.

---

## 5. Experience & Portfolio Expectations per Tier

Two career shapes coexist (see §3): the **applied voice-agent engineer** (the volume) and the **speech scientist** (the deep tier). Both ladders below; the domain (HMI/safety) literacy stacks on top at every tier and is what makes it *this* niche.

| Tier | Title(s) | Experience & portfolio bar |
|---|---|---|
| **L1** | Junior Conversational / Voice AI Engineer | 0–2 yr. Built and **demoed a working voice agent**: STT→LLM→TTS loop with **wake-word + VAD + basic intent/slot handling**, streaming/low-latency, and a **confirmation step** before any consequential action. Can report **WER on noisy audio** and **latency**. `✓` |
| **L2** | Conversational / Voice AI Engineer | 2–4 yr. **Shipped an operator/voice assistant end-to-end** — noise-robust ASR tuned for the floor, dialogue management, tool-use into a **read-only** machine-data/MES surface, **evals** (intent accuracy, task success, false-accept/false-reject rates), and a **safety-gated command path** (LLM proposes → deterministic layer confirms). Owns latency, cost, and grounding. `✓` |
| **L3** | Senior Voice/Dialogue Engineer · Operations-Copilot Engineer | 5–8 yr. **Architects the voice-HMI system**: far-field/microphone-array capture, ASR model selection (Whisper/Deepgram/Riva vs. on-prem), turn-taking/interruption handling, **command-gating against ISA-101/functional-safety constraints**, on-prem/air-gapped deployment. Sets eval strategy; mentors. `✓` |
| **L4/L5** | Staff / Principal — Voice HMI / Industrial Conversational AI | 8+ yr and/or notable speech/voice-agent work. Sets platform direction; owns **reliability, safety-case, and governance** for spoken command of machines/fleets; interfaces with functional-safety and controls teams. `✓` |
| **(parallel)** | **Speech Recognition (ASR) Scientist / ML Engineer** | **MS/PhD-gated.** Senior ASR JDs: BS + ~8 yr **or** MS + ~6 yr; research roles want **PhD + ICASSP/Interspeech** publications, acoustic modeling, streaming RNN-T/CTC, low-resource/noise-robust ASR. Comp for PhD/publication-record scientists reported **$200k–$350k+**. `~` (comp figures are secondary-source; treat as indicative.) |

~ **Indicative comp bands (single-/secondary-source blogs — verify):** applied Conversational/Voice AI Engineer entry ≈ $110–150k; mid ≈ $150–220k; senior ≈ $220–310k; principal ≈ $310–420k+. Mark as market-color, not authoritative.

---

## 6. Real Job-Posting Evidence (what employers actually ask for)

**A. The applied voice/conversational stack (dominant requirement phrasing).** `✓`
- Conversational-AI-engineer guidance and JDs converge on: *"Real-time voice stacks (**LiveKit, Daily, Twilio Voice, Telnyx, Vonage**)," "Speech APIs (**Deepgram, Whisper, AssemblyAI, ElevenLabs, Cartesia, PlayHT**)," "Conversation orchestration (**Pipecat, LiveKit Agents**, custom WebSocket layers)," "Telephony fundamentals (SIP, WebRTC, codec selection)."*
- Knowledge asked for verbatim: *"**Intent understanding, slot filling, and structured extraction from free text**," "**Context management across multi-turn conversations**," "**interruption handling** where users interrupt mid-response," "**error recovery patterns when the model fails or misunderstands**," and "**latency first**" with sub-second responses.*
- A representative bar: *"2+ years with Conversational AI orchestration platforms, e.g., **Cognigy.AI, Teneo, IBM Watson, Google Dialogflow CX, MS Bot Framework**"* and *"Master at least one voice provider deeply: **Deepgram, Whisper, or AssemblyAI for STT; ElevenLabs or Cartesia for TTS**"* with *"**Voice needs sub-200ms response times.**"*

**B. The speech-science tier (deep-model roles).** `✓`
- **SoundHound** (voice AI): *"excellent coding skills in **C++** and at least one scripting language (Python…)," Linux, "experience with **automatic speech recognition, keyword detection or natural language understanding**," deep-learning frameworks; BS in **CS or Electrical Engineering** + 8 yr, or MS + 6 yr for senior.*
- **Cerence** (in-car voice assistants; Nuance lineage): *"Master's in **Computer Science, Computational Linguistics, or a related field**," C++/Java/Python, "developing and improving **NLU** systems," and — notably for 2026 — "**experience with RAG systems and LLM prompting.**"*
- ASR research roles: *"**Master's or PhD in CS, Signal Processing** or similar," "**acoustic modeling**," "streaming architectures like **RNN-Transducer and CTC**," bonus **ICASSP/Interspeech** publications.*

**C. The industrial / factory-floor intersection (the niche proper).** `✓`
- **Siemens Industrial Copilot** and the planned **Operations Copilot for shop-floor workers**: designed so *"shop floor operators, service technicians, and maintenance engineers … **query machine data and receive error-resolution guidance through natural language**,"* and so employees *"can **chat with machines** … in natural language like with ChatGPT."* Direct evidence the operator-assistant role exists at a robotics/automation OEM.
- **Voice-directed work / voice picking** (the mature, at-scale industrial voice market): **Honeywell Voice (formerly Vocollect)** and **Lucas Systems "Jennifer"** — hands-free, eyes-free spoken workflows on rugged headsets; Jennifer reported to handle **30+ languages** and **non-standard accents/speech in warehouse noise** (vendor-reported). This is the proven "speech in noisy industrial environments + spoken confirmation" pattern.
- **Fleet / robot NL command (emerging):** ~ **Amazon "Proteus"** reported (June 2026, secondary source) to interpret **tasks described in plain natural language** — market signal that spoken/NL command of **AMR fleets** is arriving; note this edges toward the Axis A robot-side boundary and is cited as context, not core.
- **HMI/SCADA engineer** JDs (the domain half): BSc **Electrical/Computer Engineering or CS**; proficiency with **HMI/SCADA software (Wonderware, Ignition, GE iFIX)**; *"develop **HMI/SCADA screens and graphics for operator interfaces**"*; network protocols + OT security. This is the operator-interface literacy a voice HMI must integrate with.

**D. Cross-cutting safety signal (grounds the "never command motion directly" rule).** `✓`
- Research on voice-commanded industrial robots/cobots reports the exact **safety-gating pattern** this niche must implement: **each voice command accepted only above a confidence threshold (~70%) else rejected**, hands-free **"stop"** as a first-class command, **multimodal (voice + visual/tactile) confirmation**, and measured degradation in noise (e.g., ~**91%** recognition at a 10 dB command-to-noise margin). Wake-word engines like **Picovoice Porcupine** advertise **97%+ on-device detection with <1 false alarm / 10 h in background speech/HVAC/crowd noise**, running in ~20 KB on an MCU — the noise-robust, on-device layer a factory voice HMI needs. (Vendor/academic-reported.)

---

## Sources (URLs actually fetched or searched)

**Speech/NLP courses & degrees**
- Stanford CS224S Spoken Language Processing: https://web.stanford.edu/class/cs224s/ · bulletin: https://bulletin.stanford.edu/courses/2036822
- CMU LTI 11-751 Speech Recognition & Understanding: https://www.cs.cmu.edu/afs/cs/project/lti-web/Courses/11-751-desc.html · ECE 18-781: https://courses.ece.cmu.edu/18781 · 11-785 Deep Learning: https://deeplearning.cs.cmu.edu/S22/ · CMU MIIS: https://miis.cs.cmu.edu/learn-us-curriculum
- Johns Hopkins CLSP HLT Masters: https://www.clsp.jhu.edu/human-language-technology-masters/ · CLSP: https://www.clsp.jhu.edu/
- Edinburgh MSc Speech and Language Processing (CSTR): https://study.ed.ac.uk/programmes/postgraduate-taught/290-speech-and-language-processing
- Program landscape / computational linguistics: https://research.com/online-degrees/artificial-intelligence/nlp-courses-in-ai-masters-programs · https://aidegreecenter.org/masters/computational-linguistics/

**Certifications**
- NVIDIA Riva / Speech AI: https://developer.nvidia.com/topics/ai/generative-ai/riva · DLI custom ASR (S-FX-04): https://learn.nvidia.com/courses/course-detail?course_id=course-v1:DLI+S-FX-04+V2 · Multimodal GenAI cert: https://www.nvidia.com/en-us/learn/certification/generative-ai-multimodal-associate/
- Azure AI-102 → AI-103: https://learn.microsoft.com/en-us/answers/questions/5893448/ai-102-retires-on-30th-june-2026 · https://examinotion.com/blog/ai-102-retirement-ai-103-successor-path
- Google CCAI / Dialogflow CX: https://docs.cloud.google.com/dialogflow/cx/docs · https://www.cloudsens.ai/blogs/dialogflow-cx-google-cloud-contact-center/
- Conversation Design Institute CxD1: https://www.conversationdesigninstitute.com/courses/conversation-designer/cxd1 · https://www.conversationdesigninstitute.com/
- Rasa Developer Certification: https://info.rasa.com/rasa-developer-certification-exam · Cognigy Mastery: https://www.cognigy.com/product-updates/cognigy-mastery-program · Kore.ai Academy: https://academy.kore.ai/home
- ISA CAP (Certified Automation Professional): https://www.isa.org/certification/cap · requirements: https://www.isa.org/certification/cap/cap-requirements
- TÜV Rheinland FS Engineer (IEC 61508/61511): https://www.tuv.com/landingpage/en/training-functional-safety-cyber-security/detail-pages/zertifikate/fs-engineer.html · TÜV SÜD IEC 61508: https://www.tuvsud.com/en-us/store/academy-us/transportation-industry/safety/22-05-20-0101
- ISA-101 HMI design standard: https://www.isa.org/standards-and-publications/isa-standards/isa-101-standards · https://blog.ansi.org/ansi/ansi-isa-101-01-2015-hmi-for-process-automation/

**Job-market evidence & tech stack**
- Conversational AI Engineer skills/JD: https://www.secondtalent.com/occupations/conversational-ai-engineer/ · https://www.frejun.ai/what-skills-do-engineers-need-before-building-voice-bots/
- Voice AI Engineer jobs/tiers: https://zenvanriel.com/job/voice-ai-engineer-jobs/
- SoundHound roles: https://www.themuse.com/jobs/soundhoundinc/software-engineer-speech-recognition-and-nlu-chound-e43355 · https://startup.jobs/senior-machine-learning-engineer-asr-soundhound-inc-5560640
- Cerence roles: https://cerence.wd5.myworkdayjobs.com/en-US/Cerence/job/Senior-Speech---Language-R-D-Engineer_R0005842 · https://www.cerence.com/products/speech-input-output
- ASR scientist market: https://speechtechjobs.com/asr-research-jobs · https://www.ziprecruiter.com/Jobs/Speech-Recognition-Engineer
- Voice agent frameworks (Pipecat/LiveKit/Vapi): https://www.assemblyai.com/blog/orchestration-tools-ai-voice-agents · https://github.com/livekit/agents
- Wake word / noise-robust (Picovoice Porcupine): https://picovoice.ai/products/voice/wake-word/ · https://picovoice.ai/blog/complete-guide-to-wake-word/
- Voice-directed warehousing: https://www.lucasware.com/jennifer-voice-picking/ · https://automation.honeywell.com/us/en/products/productivity-solutions/voice-automated-solutions
- Siemens Industrial/Operations Copilot: https://www.siemens.com/en-us/company/insights/digital-transformation-industrial-copilot/ · https://www.siemens.com/global/en/products/automation/topic-areas/industrial-ai/industrial-copilot.html
- Voice command of robots/cobots (safety-gating research): https://pmc.ncbi.nlm.nih.gov/articles/PMC7664672/ · https://www.researchgate.net/publication/387993577_Vocal_Communication_Between_Cobots_and_Humans
- HMI/SCADA engineer JDs: https://www.velvetjobs.com/job-descriptions/scada-engineer · https://careers.gevernova.com/scada-hmi-communication-system-lead-engineer/job/R5028296
- ~ Amazon Proteus NL warehouse robot (secondary): https://theplanettools.ai/blog/amazon-proteus-natural-language-warehouse-robot-pilot-june-2026

---

**Key takeaways for the eligibility engine (this niche):**
1. **Gate the same as Area 1** (software + LLM/agent/RAG/eval) — but this niche uniquely widens the acceptable base to **EE/signal-processing** (ASR is DSP) and **computational linguistics / HCI** (dialogue + voice-UX). `✓`
2. **No dedicated degree exists**; the closest strong markers are **Stanford CS224S**, **CMU LTI (11-751)**, **JHU CLSP HLT**, and **Edinburgh MSc Speech & Language Processing.** `✓`
3. **Portfolio-vs-degree is bimodal:** a shipped, evaluated **voice agent** can outweigh a master's for the *applied* operator-assistant engineer; an **MS/PhD** stays load-bearing only for the *ASR-scientist* tier. `✓`
4. **The domain moat is industrial, not just AI:** **ISA CAP** (operator-interface/HMI + automation, experience-gated) and **TÜV Rheinland FS Engineer** (functional safety, IEC 61508 — the discipline behind safety-gated command confirmation), plus **CDI CxD** for the conversation-design craft. These are what a generic voice-AI engineer lacks. `✓`
5. **The load-bearing safety rule is a hiring signal:** employers/researchers implement **confidence-thresholded, multimodal-confirmed, deterministically-gated** voice commands — the LLM proposes, a safety-rated layer disposes; **never wire the model straight to motion.** `✓`

*Caveat: model names, cert versions, exam retirements, and comp figures move fast — `⏱` re-verify at source before publishing eligibility rules. Vendor product claims (Jennifer languages, Porcupine accuracy) are vendor-reported; the Amazon Proteus item is a single secondary source (`~`).*
