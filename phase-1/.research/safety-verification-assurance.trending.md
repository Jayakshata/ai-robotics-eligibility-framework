# Safety, Verification & Runtime Assurance — Trending Research (mid-2026)

Scope: functional safety, formal methods, runtime assurance/monitoring, fault detection & recovery for AI-driven robotics. Biased to newest work. **[2026]** = 2026 release. arXiv IDs `26xx` = 2026, `25xx` = 2025.

## 1. Neural-network & certificate verification (the "solver" layer)
- **α,β-CROWN** — GPU branch-and-bound NN verifier; won **VNN-COMP 2021–2025** (all 5 years), the de-facto standard tool. Now verifies continuous-time Lyapunov stability. https://github.com/Verified-Intelligence/alpha-beta-CROWN
- **VNN-COMP 2025** — the field's benchmark competition; results define what "verifiable" means today. https://www.researchgate.net/publication/398980425
- **Clip-and-Verify** (NeurIPS 2025) — handles linear constraints in BaB, cutting subproblems; folded into α,β-CROWN Dec 2025.
- **FOSSIL / NNV / ReachNN / Flow*** — recurring certificate-synthesis & reachability toolchain cited across surveys.
- **Neural Lyapunov / barrier certificates** — counterexample-guided + certified-training synthesis is the dominant paradigm. **k-Inductive Neural Barrier Certificates** for unknown dynamics **[2026]** (`2605.20108`); "Certified Training with Branch-and-Bound for Lyapunov-stable Neural Control" (`2411.18235`). Why: jointly learns controller + proof.

## 2. Runtime assurance & monitoring (the "always-on" layer)
- **Runtime Verification meets LLMs** (Nov 2025, `2511.14435`) — RV as guardrail for LLM-driven autonomy; the emerging pattern for open-world specs.
- **Embedding Temporal Logic for perception-based monitoring** **[2026]** (`2605.12651`) — monitors learned perception stacks against STL. Why: bridges symbolic specs and pixels.
- **Learning Robust Markov Models for Safe Runtime Monitoring** **[2026]** (`2602.14987`).
- **REDriver** (`2401.02253`) — runtime enforcement (shielding) for autonomous vehicles; representative of the "enforce, don't just detect" trend.
- **Simplex / RTA architecture** remains the backbone concept — a verified safety controller reverts the learned one; now wrapped around foundation-model policies (see §4).

## 3. Safety filters for learned policies (CBF + HJ reachability)
- **Policy-CBF "Safety on the fly"** (Knoedler et al., RA-L 2025) — constructs robust CBF safety filters at runtime over policy outputs.
- **CBF-RL** (Oct 2025, `2510.14959`) — bakes CBF safety filtering into RL training.
- **Reachability Barrier Networks** (May 2025, `2505.11755`) — learns HJ solutions as smooth, flexible CBFs.
- **DeepReach** lineage (neural HJ reachability) is the scaling story: **Certified Neural HJ Reachability / contingency-aware planning** **[2026]** (`2603.17022`); **NeHMO** decentralized multi-arm (Jul 2025, `2507.13940`). Why: makes formal reach-avoid tractable in high-D.
- **EigenSafe** (Sep 2025, `2509.17750`) — spectral framework for learning-based probabilistic safety assessment.
- **Path-Consistent Safety Filtering for Diffusion Policies** (Nov 2025, `2511.06385`) — safety filter tailored to diffusion-policy robots.

## 4. Foundation-model / VLA safety (the hottest cluster)
- **SafeVLA** (NeurIPS 2025 Spotlight, `2503.03480`) — constrained-RL/CMDP safety alignment of VLAs; -83.6% violations, no task loss; ships **Safety-CHORES** benchmark. https://github.com/PKU-Alignment/SafeVLA
- **VLSA** (Dec 2025, `2512.11891`) — plug-and-play safety-constraint layer on VLA action outputs.
- **Any-Body Guard** **[2026]** (`2606.22278`) — universal safeguarding of manipulation policies via action masking (embodiment-agnostic).
- **Modular Safety Guardrails Are Necessary for FM-Enabled Robots** **[2026]** (`2602.04056`) — position: physical filters + semantic reasoners must be layered.
- **Hide-and-Seek in Trajectories** **[2026]** (`2605.30834`) — discovers failure signals for VLA runtime monitoring.
- **Physical Risk Control survey** (2025, `2505.12583`) — taxonomy: planning-level / control-level / monitoring / recovery; the field's framing reference. Why: names RT-1/RT-2, SayCan, Code-as-Policies as the policies being wrapped.

## 5. Failure / OOD detection & fault recovery
- **FORTRESS** (May 2025, `2505.10547`) — foundation models pre-compute fallback goals; runtime synthesizes reach-avoid fallback plans; validated on ANYmal/drone. The reference "safe fallback" system.
- **Foresight** **[2026]** (`2606.23085`) — action-conditioned world-model latents for long-horizon manipulation failure detection.
- **Deployment-Time Reliability of Learned Robot Policies** **[2026]** (`2603.11400`).
- **"Detect Failures Without Failure Data"** (Mar 2025, `2503.08558`) — uncertainty-aware runtime failure detection for imitation learning.
- **OOD Detection for Safety Assurance** survey (Oct 2025, `2510.21254`) — consolidates OOD-as-safety-monitor.
- **Real-Time Anomaly Detection & Reactive Planning** (RSS 2024) — widely-cited baseline for monitor+replan loops.

## 6. Conformal prediction (distribution-free guarantees — rising fast)
- **Learning Robot Safety from Sparse Human Feedback** (Jan 2025, `2501.04823`) — conformal warning systems from little data.
- **Conformal Risk Control for HRI** **[2026]** (`2603.10392`) — pairs CBFs with conformal risk control for probabilistic constraint satisfaction.
- **State-Dependent Conformal Perception Bounds** (Feb 2025, `2502.21308`) — neuro-symbolic verification of autonomous systems. Why: turns a black-box perceptor into a certified interval.

## 7. Signal Temporal Logic tooling (spec language of record)
- **STLCG++** — differentiable STL, big speedups for online planning/control; the go-to library.
- **GradSTL** — verified robustness gradients for irregular signals; end-to-end neurosymbolic learning.
- **TGPO** (Oct 2025, `2510.00225`) & zero-shot STL planning (NeurIPS 2025) — STL as RL/planning objective.
- **ReasonSTL** **[2026]** (`2605.06483`) — LLM natural-language → STL translation.

## 8. Humanoid safety (new 2025–2026 subfield)
- **SPARK** (IFAC 2025) — modular humanoid safe-control benchmark/toolbox (CMU); **Adversarial Stress Testing of SPARK filters** **[2026]** (`2605.19009`).
- **SafeFall** (Nov 2025, `2511.18509`) — GRU fall predictor + RL protective control; first on full-scale humanoids.
- **Unified Humanoid Fall-Safety from a Few Demonstrations** (Nov 2025, `2511.07407`).
- **Learning Safe-Stoppability Monitors for Humanoids** **[2026]** (`2603.22703`).
- **Input-to-State-Safe CBF whole-body control** **[2026]** (`2605.25546`).

## 9. Standards & framing surveys (functional safety)
- **ISO/PAS 8800** (pub. 2024–25) — first functional-safety-for-AI standard (road vehicles); extends ISO 26262 + ISO 21448/SOTIF. The compliance anchor. https://www.sgs.com/en/news/2025/04/safeguards-04625
- **UL 4600** — autonomous-product safety-case standard, still central.
- **Formal Methods in Robot Policy Learning & Verification** survey **[2026]** (`2602.06971`) — the new field map (specs / verification / synthesis / learning integration).

## 10. Benchmarks & datasets
- **Safety-Gymnasium** + **SafePO** (NeurIPS 2023) — still the standard safe-RL benchmark/algorithm suite. https://github.com/PKU-Alignment/safety-gymnasium
- **LIBERO-Safety** **[2026]** (`2606.23686`) — physical + semantic safety benchmark for VLAs.
- **Safety-CHORES** (with SafeVLA) — long-horizon nav+manip safety scenes.
- **SafeOR-Gym** (Jun 2025, `2506.02255`) — safe-RL beyond robotics (OR/industrial constraints).
- **RoboMD** (`2412.02818`) — robot vulnerability discovery via semantic potential fields.

---

**Net trend:** The field is consolidating on a layered stack — formally-verified certificates/α,β-CROWN at the bottom, learned CBF/HJ-reachability safety *filters* in the middle, and conformal-calibrated runtime monitors + foundation-model fallback planners on top — increasingly wrapped around VLA/foundation-model policies and stress-tested on purpose-built VLA and humanoid safety benchmarks.
