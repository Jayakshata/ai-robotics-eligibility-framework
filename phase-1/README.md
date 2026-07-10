# Phase 1 — Niche Profiles Index

**62 profiles — 49 across the three-axis taxonomy, plus 13 applied / non-embodied AI niches.** Each capability profile is a full 12-section credential/skill/subject/training/trending dossier; verticals and platforms are lighter overlays/bundles that reference the capabilities. The applied-AI profiles use the same 12-section template, adapted (§3 eligibility, §6 duration, §7 frontier, §9 setup).

- Taxonomy: [`../master-niche-taxonomy.md`](../master-niche-taxonomy.md) · Capabilities-only: [`../capabilities-only-taxonomy.md`](../capabilities-only-taxonomy.md)
- Shared backbone: [`_grounding-reference.md`](_grounding-reference.md) (valued degrees, canonical subjects, ranked certifications, training-duration model)
- Templates: [capability v3](_TEMPLATE.md) · [vertical overlay](verticals/_TEMPLATE-vertical.md) · [platform bundle](platforms/_TEMPLATE-platform.md)
- Per-niche research provenance: `.research/`

---

## Axis A — Capability Profiles (23)

**A1 · Sensing & Perception**
- [Computer Vision & 3D Scene Understanding](computer-vision-3d-perception.md)
- [Tactile & Force Sensing](tactile-force-sensing.md)
- [Multimodal Sensor Fusion](multimodal-sensor-fusion.md)

**A2 · State Estimation & Spatial AI**
- [State Estimation, SLAM & Mapping](state-estimation-slam.md)

**A3 · Planning & Navigation**
- [Motion Planning & Navigation](motion-planning-navigation.md)
- [Task & Motion Planning and Decision Architectures](task-and-motion-planning.md)

**A4 · Control**
- [Classical, Optimal & Predictive Control](control-classical-optimal-mpc.md)
- [Whole-Body, Compliant & Force Control](whole-body-compliant-control.md)

**A5 · Embodied Skills**
- [Manipulation & Dexterous Grasping](manipulation-and-grasping.md)
- [Locomotion & Loco-Manipulation](locomotion.md)

**A6 · Robot Learning**
- [Reinforcement Learning for Control](reinforcement-learning-control.md)
- [Imitation Learning & Teleoperation Data](imitation-learning-teleoperation.md)
- [Sim-to-Real Transfer & Representation Learning](sim-to-real-transfer.md)

**A7 · Foundation Models & Generative AI**
- [Robot Foundation Models & VLA Models](robot-foundation-models-vla.md)
- [World Models & Predictive Models](world-models.md)

**A8 · Simulation & Digital Twins**
- [Simulation & Digital Twins](simulation-digital-twins.md)

**A9 · Interaction & Multi-Agent**
- [Human-Robot Interaction & Collaborative Robots](human-robot-interaction.md)
- [Multi-Robot Systems, Swarm & Fleet Orchestration](multi-robot-swarm.md)

**A10 · Systems, Safety & Infrastructure**
- [Robotics Middleware, Embedded & Real-Time Systems](robotics-middleware-realtime.md)
- [Safety, Verification & Runtime Assurance](safety-verification-assurance.md)
- [Calibration, Systems Integration & Robot-Learning Infrastructure](calibration-integration-mlops.md)
- [Soft Robotics & Compliant Mechanisms](soft-robotics.md)
- [Micro/Nano & Bio-Inspired Robotics](micro-nano-bio-robotics.md)

---

## Axis B — Vertical Overlays (16)

| Vertical | Safety-criticality |
|----------|--------------------|
| [Industrial Manufacturing](verticals/manufacturing.md) | High |
| [Logistics & Warehouse](verticals/logistics-warehouse.md) | Medium |
| [Defense & Security](verticals/defense-security.md) | High |
| [Healthcare & Surgical](verticals/healthcare-surgical.md) | Critical |
| [Agriculture & Agri-Robotics](verticals/agriculture.md) | Medium |
| [Construction](verticals/construction.md) | High |
| [Mining](verticals/mining.md) | High |
| [Oil & Gas / Hazardous & Explosive](verticals/oil-gas-hazardous.md) | Critical |
| [Domestic & Service Robots](verticals/domestic-service.md) | Medium |
| [Autonomous Vehicles / Self-Driving](verticals/autonomous-vehicles.md) | Critical |
| [Aerial / UAS / Drones](verticals/aerial-uas-drones.md) | High |
| [Space Robotics](verticals/space-robotics.md) | Critical |
| [Marine / Underwater (ROV/AUV)](verticals/marine-underwater.md) | High |
| [Inspection & Maintenance](verticals/inspection-maintenance.md) | Medium-High |
| [Food Processing & Handling](verticals/food-processing.md) | Medium |
| [Nuclear / Decommissioning / Hazmat](verticals/nuclear-decommissioning.md) | Critical |

---

## Axis C — Platform Bundles (10)

- [Fixed Manipulator / Robot Arm](platforms/fixed-manipulator-arm.md) (C1)
- [Mobile Manipulator](platforms/mobile-manipulator.md) (C2)
- [AMR / AGV (Wheeled)](platforms/amr-agv.md) (C3)
- [Quadruped](platforms/quadruped.md) (C4)
- [Humanoid / Bipedal](platforms/humanoid.md) (C5) `[★]`
- [Aerial / UAV / Drone](platforms/aerial-drone.md) (C6)
- [Underwater / Marine (ROV/AUV)](platforms/underwater-marine.md) (C7)
- [Soft / Continuum](platforms/soft-continuum.md) (C8)
- [Swarm / Multi-Robot](platforms/swarm-multi-robot.md) (C9)
- [Micro / Nano](platforms/micro-nano.md) (C10)

---

## Applied / Non-Embodied AI — two areas (13)

Not a fourth axis. These are the **other kinds of AI a robotics company builds** — software that acts on *people, engineering, the AI itself* (Area 1) and on *data* (Area 2), rather than on the robot. Different hires, different eligibility, no kinematics. Mental model and boundaries: [`../applied-ai-taxonomy.md`](../applied-ai-taxonomy.md).

**Area 1 · Agentic & Applied AI** — *software + LLM/agent engineering*
- [Agentic Systems & LLM Orchestration](agentic/agentic-llm-orchestration.md) (AG1) `[F][★]`
- [Engineering & Robot-Programming Copilots](agentic/engineering-robotics-copilots.md) (AG2) `[S][★]`
- [Knowledge & RAG Systems](agentic/knowledge-rag-systems.md) (AG3) `[F]`
- [Operations, ERP & Manufacturing-Execution AI](agentic/operations-erp-ai.md) (AG4) `[S]`
- [Conversational HMI & Operator Assistants](agentic/conversational-hmi-agents.md) (AG5) `[S]`
- [LLMOps & AI Platform Engineering](agentic/llmops-ai-platform.md) (AG6) `[F]`
- [Generative & AI-Driven Design](agentic/generative-ai-design.md) (AG7) `[S][★]`
- [Responsible AI, Governance & Assurance](agentic/responsible-ai-governance.md) (AG8) `[S]`

**Area 2 · Analytics / Predictive AI** — *industrial data science*
- [Predictive Maintenance & Reliability](analytics/predictive-maintenance.md) (AN1) `[F]`
- [Quality, Yield & Defect Analytics](analytics/quality-yield-defect-analytics.md) (AN2) `[F]`
- [Process & Production Optimization](analytics/process-production-optimization.md) (AN3) `[S]`
- [Forecasting & Planning Analytics](analytics/forecasting-planning-analytics.md) (AN4) `[S]`
- [Anomaly & Fault Detection](analytics/anomaly-fault-detection.md) (AN5) `[F]`

Foundation-model *research* is out of scope throughout — you consume Claude/GPT/Gemini and fine-tune open models; you do not build base models.

---

*Confidence tags across all profiles: `✓` research-grounded · `~` to-verify at publish · `⏱` time-sensitive (trending sections stamped mid-2026 — re-research before publish). Next: Phase 2 synthesis (eligibility matrix, common-core vs specialization, consolidated lab/partnership plan) → Phase 3 shareable website.*
