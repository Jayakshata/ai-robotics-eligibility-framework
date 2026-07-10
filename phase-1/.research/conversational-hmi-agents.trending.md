> Provenance: background research agent (trending pass) for the applied-AI niche **Conversational HMI & Operator Assistants** (slug `conversational-hmi-agents`), Area 1. Research date 2026-07-10. Raw agent report, preserved verbatim. Sourcing biased to 2025–2026.

> **Confidence tags:** **✓ [verified]** = fetched primary source or corroborated across ≥2 independent sources · **~** = single secondary source; specific date/version to re-confirm before publish · **🆕** = 2025–2026 release · **[vendor]** = self-reported/marketing figure · **[emerging]** = research/demo/beta, not GA. Frontier version numbers move weekly — re-verify at source.

---

# Conversational HMI & Operator Assistants — Trending Landscape (mid-2026)

**Niche boundary reminder.** This is the **language/voice *software* layer** — natural-language and voice interfaces to machines, robots and fleets on the floor; operator assistants; industrial ASR under noise; safety-gated command confirmation. It is **NOT** robot-side social/physical human-robot interaction (that is the Axis A `human-robot-interaction` capability — referenced, not absorbed). The substance of this niche is: **wake-word + noise-robust ASR + intent grounding + an agent that proposes an action + a safety gate that a human/text checkpoint clears — and never lets the LLM issue motion directly.**

## Orientation: what an industrial voice/operator-assistant stack looks like in 2026

The reference architecture that has consolidated for a *floor* deployment (as opposed to a call-center voice bot):

**wake-word / VAD** (Porcupine, Silero, openWakeWord) → **noise-robust ASR** (Deepgram Nova-3, NVIDIA Parakeet/Canary via Riva, Whisper-class, keyterm-biased on the plant's vocabulary) → **intent grounding / NLU** (map utterance → a *bounded* action set) → **agent loop** (LangGraph / Pipecat / LiveKit) that emits a **structured tool call over MCP** into the MES / robot controller / fleet manager → **a safety gate** (deterministic controller + human/text confirmation; the LLM proposes, it does not actuate) → **TTS spoken confirmation** back to the operator. The load-bearing 2025–26 debate is **cascaded (STT→LLM→TTS) vs. end-to-end speech-to-speech** — and for this niche cascaded keeps winning *because the text intermediary is the auditable checkpoint you gate and log on* (see §4, §5). ✓

---

## 1. Methods & models frontier — what changed in 2025–2026

**Speech recognition stopped being three boxes and became one model.** The 2024 pattern (separate VAD + language-ID + punctuation + acoustic model, stacked) is being replaced by **integrated ASR models** that fold voice-activity, language-ID, punctuation, and streaming into a single network — directly relevant to noisy-floor latency budgets.
- **🆕 NVIDIA Parakeet-TDT** (0.6B v3 expanded English-only → 25 EU languages, ~6.34% avg WER on the HF Open ASR Leaderboard) and **🆕 NVIDIA Canary-Qwen 2.5B** (open, took the top Open-ASR-Leaderboard slot at ~5.63% WER). ~ Parakeet's selling point is throughput (RTFx in the thousands) — it is the "run it on the edge, real-time" ASR. ([Northflank STT benchmarks 2026](https://northflank.com/blog/best-open-source-speech-to-text-stt-model-in-2026-benchmarks))
- **🆕 Deepgram Nova-3** (released Jan 2025, ~5.26% WER on its own real-world set, streaming ~450 ms) and **🆕 Deepgram Flux** — a *conversational* STT with **integrated end-of-turn detection** aimed specifically at voice agents. ✓ End-of-turn / turn-taking moving *into* the ASR model is a 2026 shift that matters for barge-in on a loud floor. ([Coval STT benchmarks 2026](https://www.coval.ai/blog/best-speech-to-text-providers-in-2026-independent-benchmarks-and-how-to-choose/))
- **🆕 ElevenLabs Scribe v2 Realtime** (announced ~Jan 6 2026; ~30–80 ms transcription latency, 90+ languages). ~ Turns ElevenLabs into an end-to-end STT+orchestration+TTS option instead of pairing its TTS with a separate STT. ([ElevenLabs realtime STT](https://elevenlabs.io/realtime-speech-to-text))
- **🆕 Integrated open ASR: FireRedASR-2, SenseVoice, Qwen3-ASR** — each bundles VAD+language-ID+punctuation (SenseVoice also emotion/audio-events; Qwen3-ASR adds streaming). ~ These are the self-hostable answer for air-gapped plants that cannot ship audio to a cloud API. ([ASR deep dive 2025–2026](https://ruoqijin.com/blog/asr-deep-dive-2025-2026))
- **AssemblyAI Universal-2 / 🆕 Universal-3** — streaming speech-language models with **natural-language keyterm prompting** (prime the model with plant/part vocabulary without retraining). ~ Keyterm biasing is the practical lever for domain jargon under noise. ([futureagi STT 2026](https://futureagi.com/blog/speech-to-text-apis-in-2026-benchmarks-pricing-developer-s-decision-guide/))

**Speech-to-speech (S2S) went mainstream, but stayed a poor fit for command-and-control.** End-to-end voice models that take audio in and emit audio out in one pass:
- **OpenAI Realtime API / `gpt-realtime`** — GA reached **Aug 2025**; speech-to-speech in a single model pass (better function-calling than the cascaded predecessor). ✓ A reported second generation (**🆕 "GPT-Realtime-2", plus GPT-Realtime-Whisper for streaming STT and GPT-Realtime-Translate**, ~May 2026) is single-secondary-sourced. ~ ([OpenAI deprecations/changelog](https://developers.openai.com/api/docs/deprecations))
- **Google Gemini Live API** — native-audio realtime (audio in → reason → audio out), with **🆕 Gemini 3.1 Flash Live** (~Mar 2026) as the current low-latency variant. ~ ([Gemini Live API](https://ai.google.dev/gemini-api/docs/live-api))
- **🆕 xAI Grok Voice Agent API** (~Dec 2025) — notable because it **adopts the OpenAI Realtime protocol/event schema**, so client code ports over. ~ **🆕 Inworld Realtime API** (~May 2026) bundles STT+LLM+TTS+VAD+turn-taking. ~
- **Why S2S is *not* the default for this niche:** no text intermediary to gate/redact/log on before an action fires (see §4/§5). For an operator assistant that can move a machine, the cascaded pipeline's text checkpoint is a safety feature, not a latency tax.

**Intent grounding is being reframed as "natural language → MCP action."** The live research pattern maps an utterance to a *formal, bounded* action via `f(utterance, context, available-actions) → action*`: **ASR → intent detection → match against the available MCP tool set → emit a structured MCP call.** ✓ This is the crux of the niche — the operator's words are grounded to a *pre-declared, safety-reviewed* action surface, not free-form code. ([Labelvisor: grounding NL to MCP actions for factory-floor robots](https://www.labelvisor.com/grounding-natural-language-to-mcp-actions-annotating-voice-commands-for-factory-floor-robots/))

**The "LLM proposes, controller disposes" safety pattern got a concrete architecture.** **🆕 LLM-Guided Safety Agent (ISO-compliant perception-compute-control)** — the LLM sits in the *compute* layer emitting **proposed** actions; a **pre-execution safety gate** validates before the *control* layer actuates; compliance framed against **ISO 13849** (functional safety of control systems). ✓ This is the published embodiment of "never let the LLM directly command motion." Complementary research adds **AI-reiteration / spoken read-back for human confirmation before execution** and **real-time voice supervision / barge-in to interrupt a running task.** ([arXiv 2604.20193](https://arxiv.org/pdf/2604.20193)) ([HMCF human-in-the-loop multi-robot LLM framework](https://arxiv.org/html/2505.00820v1))

---

## 2. Tooling & framework landscape (consolidation + real version numbers)

**Voice-agent frameworks consolidated to three archetypes** — a media-pipeline layer sits *underneath* the agent-orchestration layer:
- **🆕 Pipecat (Daily)** — open-source **Python** framework for real-time voice/multimodal agents; pipeline of frame processors (STT→LLM→TTS) with **Silero VAD** and pluggable turn detection; 20+ STT, 30+ LLM, 30+ TTS providers; WebSocket/WebRTC transports. **Current release v1.5.0, dated Jul 4 2026** (114 releases). ✓ Best fit for **self-hosted / edge / vendor-neutral** floor deployments. ([github.com/pipecat-ai/pipecat](https://github.com/pipecat-ai/pipecat))
- **LiveKit Agents** — **WebRTC-first** realtime framework; **semantic turn detection via a transformer model** (reduces false interruptions — valuable on a noisy floor), plus a SIP/telephony stack. ✓ Best for RTC-native, latency-sensitive, media-server deployments. ([github.com/livekit/agents](https://github.com/livekit/agents), [LiveKit sequential-pipeline architecture](https://livekit.com/blog/sequential-pipeline-architecture-voice-agents))
- **Vapi / Retell / Inworld** — managed voice-agent platforms (faster to stand up, less control); **ElevenLabs "ElevenAgents"** (formerly Conversational AI 2.0) is now an end-to-end STT+LLM+TTS platform with **🆕 Guardrails 2.0**. ~ ([Inworld: Vapi vs Pipecat vs LiveKit](https://inworld.ai/resources/vapi-vs-pipecat-vs-livekit))

**Wake-word / VAD / turn-taking (the front door of a hands-busy operator UX):**
- **Picovoice Porcupine** (custom on-device wake words) + **Picovoice Cobra** (on-device VAD); **Silero VAD** (the de-facto open VAD, ships in Pipecat); **openWakeWord** (open, trainable custom wake words). ✓ On-device wake-word + VAD is what keeps a floor mic passive until addressed and cuts uplink/latency/power. ([Picovoice wake-word guide 2026](https://picovoice.ai/blog/complete-guide-to-wake-word/), [openWakeWord](https://github.com/topics/openwakeword))
- **Noise-robust front-ends:** **Krisp, NVIDIA Maxine, RNNoise** as neural noise-suppression before ASR — the "layer 1" of the 2026 noisy-ASR stack (front-end suppression → noise-robust acoustic model → domain fine-tune + keyterm biasing). ✓ ([Deepgram: noise-robust ASR methods 2025](https://deepgram.com/learn/noise-robust-speech-recognition-methods-best-practices))

**Speech platform for industrial / edge / on-prem:**
- **NVIDIA Riva** — GPU-accelerated **Speech AI SDK** (ASR + TTS + translation, now drawing on the **Nemotron Speech** open model family, ~40 languages); runs **on-prem or at the edge on Jetson**, and is the ASR/TTS engine inside **NVIDIA ACE Agent**. ✓ Riva is the incumbent "keep the audio inside the plant" speech layer — and the one under Caterpillar's product (§3). ([NVIDIA Riva](https://developer.nvidia.com/topics/ai/generative-ai/riva), [ACE Agent speech](https://docs.nvidia.com/ace/ace-agent/latest/user/speech-ai.html))

**Agent-orchestration + interop layer (shared with the broader agentic area; load-bearing here because it is how a spoken command reaches a machine as a *tool call*):**
- **🆕 LangGraph 1.0 / LangChain 1.0** — GA **Oct 22 2025**; graph-based, durable, **human-in-the-loop**-native orchestration (LangChain 1.0 added a middleware system incl. HITL + PII redaction). ✓ The production-auditable default for the agent loop behind an operator assistant. ([LangGraph 1.0 GA](https://changelog.langchain.com/announcements/langgraph-1-0-is-now-generally-available))
- **MCP (Model Context Protocol, Anthropic)** — the standard for exposing "the robot controller / MES / fleet manager" as discoverable agent **tools**; now hosted under the **Linux Foundation Agentic AI Foundation**. **A2A (Agent2Agent)** — cross-agent delegation (e.g., a line-level assistant handing off to a fleet orchestrator); **150+ orgs, v1.0** under the Linux Foundation. ✓ MCP-in-robotics (exposing sensors/actuators/nav/manipulation as tools an operator's words invoke) is an explicit 2026 pattern. ([MCP + robotics/ROS](https://chatforest.com/guides/mcp-robotics-ros-integration/), [A2A LF press](https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year))
- **Anthropic Claude Agent SDK** — the Claude-native agent loop (subagent context isolation) usable to build the assistant's reasoning layer. ✓ ([exemplar-verified])

---

## 3. Shipping industrial products & deployments (proof the pattern works — named)

**Heavy equipment / in-cab voice (newest, and the clearest "voice HMI to a machine" proof):**
- **🆕 Caterpillar "Cat AI Assistant"** — debuted at **CES 2026**; a voice-activated assistant embedded in Cat onboard/digital products, **built on NVIDIA Riva speech models**, designed to **run on the edge (Jetson) inside the equipment cab** so it works with no cloud. Answers equipment/parts/maintenance questions and gives recommendations by voice. ✓ (corroborated across two sources) ([Equipment World: Cat voice assistant at CES 2026](https://www.equipmentworld.com/equipment-controls/machine-control/article/15814481/cat-demonstrates-voicecontrolled-ai-assistant-at-ces-2026), [Cat–NVIDIA collaboration](https://www.caterpillar.com/en/news/corporate-press-releases/h/cat-nvidia-collab.html))

**Warehouse voice-directed operations (the *proven, decades-deep* incumbent of this niche):**
- **Honeywell Voice (Vocollect)** — the "battle-tested" voice-directed picking system (pick/pack/replenish by continuous audio dialogue with the WMS/WES); alongside **Lucas Systems, Zebra Technologies, Dematic**. ✓ Modern versions add NLP/AI ASR that adapts to accents within minutes and reduces new-hire training from ~5 days to <2 [vendor]. Voice-directed warehousing is a **~$5.6B (2025) market**. ~ ([Honeywell voice-automated solutions](https://automation.honeywell.com/us/en/products/productivity-solutions/voice-automated-solutions), [CXTMS 2026](https://cxtms.com/blog/voice-directed-warehouse-picking-technology-fulfillment-2026))

**Connected-worker / frontline operator assistants (voice + chat copilots over SOPs and machine data):**
- **Tulip "Frontline Copilot"** — operator-facing contextual assistant inside the Tulip frontline-ops platform; **🆕 raised $120M Series D led by Mitsubishi Electric at a $1.3B valuation, Jan 2026**; ~60,000 frontline workers across ~1,000 sites [vendor]. ✓ (funding) ([Forbes: Tulip $120M](https://www.forbes.com/sites/gilpress/2026/01/15/tulip-raises-120m-towards-human-centric-ai-factory/), [Tulip AI](https://tulip.co/platform/tulip-ai/))
- **Augmentir, Parsable, Poka, Microsoft Connected Worker** — the connected-worker platform set now embedding "agentic" copilots for real-time troubleshooting and guided work. ✓ (as a category) ([Best connected-worker platforms 2026](https://reliamag.com/guides/best-connected-worker-platforms-2026/))

**NL/voice → robot action (emerging, mostly demo/research for *motion* commands):**
- **LLM-driven speech agent for industrial robot control — snow-crab quality-inspection case study** — a peer-reviewed 2025 case study of a speech-enabled LLM agent commanding an industrial robot in a real inspection task. ~ (paywalled; abstract-level) ([ScienceDirect S2590123025027276](https://www.sciencedirect.com/science/article/pii/S2590123025027276))
- **Modular speech-based cobot interface using LLMs** and **voice-controlled robot-arm via MCP** demos (e.g., make87) — the open pattern of exposing robot capabilities as MCP tools an operator addresses by voice. [emerging] ([Springer: voice-based collaborative robot interaction](https://link.springer.com/chapter/10.1007/978-3-032-15576-4_8))
- **Consumer signal worth noting:** **Amazon Alexa+** (generative-AI Alexa, Feb 2025) — the frontier-LLM-in-a-voice-assistant reference the whole field is chasing, even though it is not an industrial product. ✓

*Reality check on the "speak-to-move-a-robot" tier:* warehouse voice-picking and in-cab Q&A **ship at scale**; connected-worker voice copilots **ship**; **voice commands that directly drive robot *motion* on a production line remain pilots/research**, gated behind confirmation because of the safety and hallucination issues in §4–§5.

---

## 4. Benchmarks & evaluation practice for this niche

**WER alone is retired as the yardstick.** The 2026 consensus is that Word Error Rate must be joined by **task success, barge-in/latency, and hallucination-under-noise**:
- **🆕 τ-Voice** (arXiv:2603.13686, **Mar 14 2026**) — extends τ²-bench to **full-duplex voice agents** on realistic tasks with noise + accents. Headline finding: task completion **drops from ~85% (text) to 26–38% under realistic audio** (retaining only ~30–45% of text capability), and **79–90% of failures are agent behavior**, not the simulator. Named failure modes: **hallucinated completions (the agent says it did the task but made no tool call)**, authentication/spelling bottlenecks, multi-step forgetting, and accent vulnerability (one provider lost 38% under diverse accents). ✓ The "hallucinated completion" mode is *the* reason a floor assistant must verify tool-call execution, not trust the spoken confirmation. ([arXiv τ-Voice](https://arxiv.org/html/2603.13686v1))
- **🆕 VoiceBench** (TACL'26) — LLM-voice-assistant benchmark across knowledge, instruction-following, **safety**, and robustness to speaker/environment/content variation; explicitly **does not** cover barge-in or real-device task completion (so pair it with τ-Voice). ✓ ([github.com/matthewcym/voicebench](https://github.com/matthewcym/voicebench))
- **🆕 "Hallucination-under-noise" as a first-class metric** — fraction of fluent outputs that semantically disconnect from the audio under noise; a dedicated audio-hallucination benchmark (**🆕 "HalluAudio", ~Apr 2026**) appeared. ~ ([MarkTechPost: evaluating voice agents beyond WER](https://www.marktechpost.com/2025/10/05/how-to-evaluate-voice-agents-in-2025-beyond-automatic-speech-recognition-asr-and-word-error-rate-wer-to-task-success-barge-in-and-hallucination-under-noise/))
- **Standing ASR leaderboards:** the **HF Open ASR Leaderboard** (Canary/Parakeet at the top ~5.6–6.3% WER) for transcription quality; enterprise target is **<5% WER**, but **industrial/noisy WER still runs ~16–24% with standard approaches** — the noise gap is real and is the differentiator this niche exists to close. ~ ([Forasoft: noisy-env WER 2026](https://www.forasoft.com/blog/article/speech-recognition-accuracy-noisy-environments))
- **Voice-agent eval practice:** measure **end-of-turn accuracy, interrupt/barge-in rate, first-response & end-to-end latency, task success, and safety refusals** — vendors publishing eval frameworks include **Coval, Hamming, Cekura, ElevenLabs**. ✓ (as practice)

---

## 5. Counter-signals (skepticism, failure rates, hype)

- **Gartner: >40% of agentic-AI projects will be canceled by end of 2027** (escalating cost, unclear value, inadequate risk controls); **"agent washing"** — of thousands of vendors claiming agentic products, **only ~130 are judged genuinely agentic**; Gartner also predicts **one-third of companies will harm CX in 2026 by deploying AI prematurely**, and places agentic AI at the **Peak of Inflated Expectations**. ✓ [independent analyst] ([Gartner press release, 2025-06-25](https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027), [Gartner agentic hype cycle](https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai))
- **Voice agents collapse under real audio.** Per τ-Voice, agents retain **only ~30–45% of their text competence** once you add noise and accents, and most failures are the agent's own behavior — including **confidently confirming actions it never took**. ✓ For a safety-adjacent floor assistant this is disqualifying without a hard execution-verification gate.
- **The auditability argument against raw speech-to-speech.** As of 2026, **cascaded pipelines dominate enterprise/regulated deployments** precisely because the **text intermediary is where you apply compliance checks, redaction, and logging before content (or an action) reaches the world**; S2S gives you "audio in, audio out" with no gate-able checkpoint. ✓ This is the single strongest technical reason this niche does not just adopt the flashy end-to-end S2S models. ([Coval: S2S vs cascaded](https://www.coval.ai/blog/speech-to-speech-vs-cascaded-voice-ai-which-architecture-should-you-deploy/), [Deepgram: S2S vs cascade](https://deepgram.com/learn/speech-to-speech-vs-cascade-voice-agent-architecture))
- **Functional-safety mismatch.** AI perception/decisions are **probabilistic**, while industrial safety standards (ISO 13849, ISO 10218) require **deterministic** behavior — which is *why* the credible designs keep the LLM out of the control loop and behind a certified gate, and why "let the operator just talk to the robot and it moves" is not shipping. ✓ ([arXiv 2604.20193](https://arxiv.org/pdf/2604.20193))
- **Vendor ROI figures are vendor-reported.** Claims such as "voice AI + smart glasses cut training cost 40% / maintenance errors 32% / lift productivity ~20%," "<200 ms command latency in 85–100 dB," and "<100 ms for an e-stop" come from vendor/marketing blogs and should be treated as **[vendor]**, not independently benchmarked. ~ ([iFactory greenfield voice/AR](https://ifactoryapp.com/greenfield-consulting/voice-ai-smart-glasses-greenfield-factory-ramp-up), [HakunaMatata shop-floor AI](https://www.hakunamatatatech.com/our-resources/blog/ai-for-shop-floor))
- **Regulatory headwind:** **EU AI Act high-risk obligations become fully enforceable Aug 2, 2026** — an operator assistant tied to safety-relevant production decisions can land in the high-risk bucket, adding conformity/logging burden. ~

---

## 6. Being retired / consolidated

- **Amazon Alexa for Business — discontinued** (enterprise Alexa management product wound down); Amazon's voice strategy re-consolidated around consumer **Alexa+** and shopping. ✓ A concrete "the first-gen enterprise voice-assistant product is gone" data point. ([TrustRadius: Alexa for Business (discontinued)](https://www.trustradius.com/products/amazon-alexa-for-business/reviews))
- **Component-stacking is being absorbed into integrated models.** Separate VAD + language-ID + punctuation + acoustic-model pipelines are consolidating into single ASR models (FireRedASR-2, SenseVoice, Qwen3-ASR) and into **turn-detection-inside-the-ASR** (Deepgram Flux). ~ Fewer moving parts, but also fewer independent gate points — a design tension for safety-gated HMI.
- **Cascaded STT→LLM→TTS is *partially* consolidating into speech-to-speech** for latency/naturalness — but, per §5, **cascaded is deliberately retained** in regulated/industrial control settings. So this is a *bifurcation*, not a clean replacement. ✓
- **Agent-framework sprawl consolidated** ("less framework, more model"): the field settled on LangGraph/LangChain 1.0 + vendor-native SDKs + **MCP/A2A both folded under the Linux Foundation** (ACP merged into A2A). ✓
- **Speech-vendor consolidation:** **Nuance** (the historical industrial/clinical ASR incumbent) is fully absorbed into **Microsoft**; the ASR-API market has concentrated around Deepgram / AssemblyAI / ElevenLabs / NVIDIA / OpenAI / Google. ✓
- **Explicitly *not* retired:** **OpenAI Whisper is not deprecated** — it was extended (streaming/batch split), a useful negative to record so the profile does not wrongly retire it. ✓ ([OpenAI deprecations](https://developers.openai.com/api/docs/deprecations))

---

## Bottom line for a Conversational-HMI / operator-assistant profile

1. **The pattern ships — at two maturity levels.** Warehouse **voice-directed picking (Honeywell Voice/Vocollect, Lucas, Zebra)** and **in-cab voice Q&A (Caterpillar Cat AI Assistant on NVIDIA Riva, CES 2026)** and **connected-worker voice copilots (Tulip, Augmentir, Parsable)** are real and deployed. **Voice commands that directly drive robot *motion*** on a line are still pilots/research, gated behind confirmation.
2. **Recommended stack:** on-device **wake-word/VAD (Porcupine/Silero/openWakeWord)** → **noise-robust ASR (Deepgram Nova-3 / NVIDIA Parakeet-Canary via Riva for on-prem, keyterm-biased)** with a **neural noise front-end (Krisp/Maxine)** → **intent grounding to a bounded MCP action set** → agent loop (**Pipecat** for self-hosted/edge, **LiveKit** for RTC, **LangGraph** for orchestration) → **deterministic controller + human/text confirmation gate (LLM never actuates)** → **TTS read-back**. Keep it **cascaded** for the auditable text checkpoint.
3. **Design for the constraints the evidence confirms:** **noise** (WER still 16–24% industrially), **hallucinated completions** (verify the tool call actually fired — τ-Voice), **determinism vs. probabilistic AI** (ISO 13849/10218; the "LLM-Guided Safety Agent" pattern), **edge/air-gap** (Riva on Jetson, self-hostable integrated ASR + SLMs), and **EU AI Act high-risk** obligations from Aug 2026.
4. **Eval as portable evidence:** report **WER-under-noise, end-of-turn/barge-in accuracy, task success, hallucination-under-noise, and safety-refusal** — anchored to **τ-Voice** and **VoiceBench**, not WER alone.

**Sourcing notes:** τ-Voice, the ISO-13849 safety-agent architecture, Pipecat v1.5.0, the NL→MCP grounding pipeline, NVIDIA Riva, LangGraph 1.0 GA, and the Gartner counter-signals are **✓ verified** (fetched primary or ≥2 sources). Specific 2026 point-versions/dates for **GPT-Realtime-2, Gemini 3.1 Flash Live, Grok Voice API, Inworld/AssemblyAI/ElevenLabs point releases, HalluAudio, and the integrated-ASR feature claims** came from single secondary aggregators and are marked **~** to re-confirm at source before publish. All ROI/latency/noise-dB figures from vendor blogs are **[vendor]**. Caterpillar's Cat-AI-Assistant press page and the Gartner/ScienceDirect pages returned 403/paywall to the fetcher; their facts here rest on corroborating secondary coverage and should be re-fetched from primary before publish.

---

## Sources (URLs actually fetched or surfaced this pass)

**Fetched directly (primary/verified):**
- τ-Voice benchmark — https://arxiv.org/html/2603.13686v1
- LLM-Guided Safety Agent, ISO-13849 perception-compute-control — https://arxiv.org/pdf/2604.20193
- Pipecat (v1.5.0, Jul 4 2026) — https://github.com/pipecat-ai/pipecat
- Grounding NL to MCP actions for factory-floor robots — https://www.labelvisor.com/grounding-natural-language-to-mcp-actions-annotating-voice-commands-for-factory-floor-robots/

**Models / methods frontier:**
- Northflank open-source STT benchmarks 2026 — https://northflank.com/blog/best-open-source-speech-to-text-stt-model-in-2026-benchmarks
- Coval best STT providers 2026 — https://www.coval.ai/blog/best-speech-to-text-providers-in-2026-independent-benchmarks-and-how-to-choose/
- ASR deep dive 2025–2026 (integrated models) — https://ruoqijin.com/blog/asr-deep-dive-2025-2026
- Deepgram noise-robust ASR methods — https://deepgram.com/learn/noise-robust-speech-recognition-methods-best-practices
- Forasoft noisy-environment WER 2026 — https://www.forasoft.com/blog/article/speech-recognition-accuracy-noisy-environments
- ElevenLabs Scribe v2 Realtime — https://elevenlabs.io/realtime-speech-to-text
- OpenAI Realtime / deprecations — https://developers.openai.com/api/docs/deprecations
- Gemini Live API — https://ai.google.dev/gemini-api/docs/live-api

**Tooling / frameworks:**
- LiveKit Agents — https://github.com/livekit/agents ; https://livekit.com/blog/sequential-pipeline-architecture-voice-agents
- Vapi vs Pipecat vs LiveKit — https://inworld.ai/resources/vapi-vs-pipecat-vs-livekit
- Picovoice wake-word guide 2026 — https://picovoice.ai/blog/complete-guide-to-wake-word/ ; VAD — https://picovoice.ai/blog/complete-guide-voice-activity-detection-vad/
- openWakeWord — https://github.com/topics/openwakeword
- NVIDIA Riva — https://developer.nvidia.com/topics/ai/generative-ai/riva ; ACE Agent speech — https://docs.nvidia.com/ace/ace-agent/latest/user/speech-ai.html
- LangGraph 1.0 GA — https://changelog.langchain.com/announcements/langgraph-1-0-is-now-generally-available
- A2A Linux Foundation — https://www.linuxfoundation.org/press/a2a-protocol-surpasses-150-organizations-lands-in-major-cloud-platforms-and-sees-enterprise-production-use-in-first-year
- MCP + robotics/ROS — https://chatforest.com/guides/mcp-robotics-ros-integration/

**Shipping products / deployments:**
- Caterpillar Cat AI Assistant, CES 2026 — https://www.equipmentworld.com/equipment-controls/machine-control/article/15814481/cat-demonstrates-voicecontrolled-ai-assistant-at-ces-2026 ; https://www.caterpillar.com/en/news/corporate-press-releases/h/cat-nvidia-collab.html
- Honeywell Voice (Vocollect) — https://automation.honeywell.com/us/en/products/productivity-solutions/voice-automated-solutions
- Voice-directed warehousing 2026 — https://cxtms.com/blog/voice-directed-warehouse-picking-technology-fulfillment-2026
- Tulip $120M Series D — https://www.forbes.com/sites/gilpress/2026/01/15/tulip-raises-120m-towards-human-centric-ai-factory/ ; Tulip AI — https://tulip.co/platform/tulip-ai/
- Connected-worker platforms 2026 — https://reliamag.com/guides/best-connected-worker-platforms-2026/
- LLM speech agent for industrial robot (snow-crab inspection) — https://www.sciencedirect.com/science/article/pii/S2590123025027276
- Voice-based collaborative robot interaction (LLM) — https://link.springer.com/chapter/10.1007/978-3-032-15576-4_8
- Voice-enabled Operator 4.0 (academic framing) — https://www.sciencedirect.com/science/article/abs/pii/S2213846320301486

**Benchmarks / evaluation:**
- VoiceBench (TACL'26) — https://github.com/matthewcym/voicebench
- MarkTechPost: evaluating voice agents beyond WER — https://www.marktechpost.com/2025/10/05/how-to-evaluate-voice-agents-in-2025-beyond-automatic-speech-recognition-asr-and-word-error-rate-wer-to-task-success-barge-in-and-hallucination-under-noise/

**Counter-signals:**
- Gartner: >40% agentic AI projects canceled by 2027 — https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027
- Gartner agentic AI hype cycle — https://www.gartner.com/en/articles/hype-cycle-for-agentic-ai
- Coval: speech-to-speech vs cascaded — https://www.coval.ai/blog/speech-to-speech-vs-cascaded-voice-ai-which-architecture-should-you-deploy/
- Deepgram: S2S vs cascade — https://deepgram.com/learn/speech-to-speech-vs-cascade-voice-agent-architecture
- HMCF human-in-the-loop multi-robot LLM — https://arxiv.org/html/2505.00820v1
- iFactory voice/AR ramp-up [vendor] — https://ifactoryapp.com/greenfield-consulting/voice-ai-smart-glasses-greenfield-factory-ramp-up
- HakunaMatata shop-floor AI [vendor] — https://www.hakunamatatatech.com/our-resources/blog/ai-for-shop-floor

**Retired / consolidated:**
- Amazon Alexa for Business (discontinued) — https://www.trustradius.com/products/amazon-alexa-for-business/reviews
- Edge/air-gapped SLM guide 2026 — https://cogitx.ai/blog/small-language-models-slms-comprehensive-guide-2026

*Report stamped mid-2026 (2026-07-10). §-by-§ time-sensitive — re-verify named products/versions/dates at source before publishing the profile's §7.*
