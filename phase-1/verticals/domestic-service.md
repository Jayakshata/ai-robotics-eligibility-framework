# Vertical Overlay — Domestic & Service Robots

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified 2024–2026 · `~` to-verify · `⏱` time-sensitive. **Scope note:** the taxonomy pairs B9 as "Humanoid & domestic/service" (rated High for the bipedal form factor); this overlay scopes B9 to **domestic & professional-service applications** and rates it **Medium** — the consumer/service envelope — with the bipedal form factor carried by platform track **C5**, and flags that **person-carrier, elder-care, and blade-bearing** sub-segments rise toward High.

**Vertical:** Domestic & Service Robots · **Axis B:** B9 · **Safety-criticality:** **Medium**
**Core capabilities it builds on (Axis A, load-bearing first):** A3 navigation (social/indoor) · A2 SLAM/state-estimation · A1 perception · A9 HRI & fleet · A10 safety & verification · A5 manipulation (emerging) · A7 VLA/foundation models (emerging) · **Typical platforms (C):** C3 AMR · C2 mobile manipulator · C5 humanoid

---

## 1. Definition & Scope
Robots that operate *in human living and service spaces* rather than structured plants. Two IFR-recognized halves: **consumer/domestic** — robot vacuums & mops, robotic lawn mowers, pool/window cleaners, home companions — and **professional service** — hospitality/food delivery, commercial floor cleaning, reception/guidance, security patrol, retail shelf-scan, telepresence, elder-care/assistive. This is the **highest-*volume* robotics vertical by units**: IFR *World Robotics 2025* counts ~**20 M consumer service robots** sold in 2024 (+11%; domestic floor-care & mowing the largest group) and ~**200,000 professional** units (+9%; transport/logistics 102,900, hospitality 42,000, cleaning 25,000). `✓` The defining constraint is **consumer price points + unstructured, populated environments** — cost engineering and non-expert-user safety matter as much as autonomy.

## 2. Core Capabilities It Builds On
- **A3 Navigation** (`motion-planning-navigation`) *(load-bearing)* — social/crowd navigation, dynamic-obstacle avoidance, and coverage-path planning in cluttered, GPS-denied homes and venues.
- **A2 SLAM / State Estimation** (`state-estimation-slam`) — persistent multi-room/multi-floor maps, relocalization on power-up, low-cost VSLAM / LiDAR-SLAM.
- **A1 Perception** (`computer-vision-3d-perception`, `multimodal-sensor-fusion`) — obstacle/object/person detection, semantic understanding (cables, pet waste), and cliff/stair & floor-type sensing at BOM-constrained cost.
- **A9 HRI & Fleet** (`human-robot-interaction`, `multi-robot-swarm`) — natural interaction for untrained users; **multi-robot fleet orchestration** for commercial robotics-as-a-service.
- **A10 Safety & Verification** (`safety-verification-assurance`) — specialized to appliance safety + ISO 13482 (see §6).
- **A5 Manipulation** & **A7 VLA / Foundation & World Models** *(both emerging)* (`manipulation-and-grasping`, `robot-foundation-models-vla`) — arm-equipped vacuums, tidying, loco-manipulation, and generalist home-task policies on home humanoids.

## 3. Domain Knowledge Required
Beyond robotics: **consumer-product engineering** — DFM, aggressive **BOM/cost engineering**, high-volume NPI, reliability at scale; **household-appliance safety engineering** (an appliance mindset, not an industrial-robot one); **unstructured home/venue environments** (diverse floors, thresholds, stairs, glass, dynamic clutter); **human factors & UX for non-expert, vulnerable users** — accessibility, and for elder care, basic **gerontology and care workflows**; **privacy & data governance** for in-home cameras/mics; plus **battery/charging/docking, thermal, acoustics, and industrial design**. This is the body a generalist roboticist lacks.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ISO 13482:2014** — *Robots and robotic devices — Safety requirements for personal care robots*; the headline standard, three types — **mobile servant, physical assistant, person carrier** — earthbound, non-medical, ≤20 km/h. Recognized state-of-the-art (revision underway as **prEN ISO 13482**); invoked via risk assessment → de-facto gate for care robots. `✓`
- **ISO/TR 23482-1:2020** (safety-related **test methods**) & **ISO/TR 23482-2:2019** (**application guidelines**) — how to test/apply ISO 13482. `✓`
- **IEC 60335-1 + IEC 60335-2-2** — household-appliance safety; **Part 2-2 = vacuum cleaners incl. automatic battery-operated cleaners** (robot vacuums). **HARD GATE** for appliance market access. `✓`
- **IEC 60335-2-107:2017 (+A1:2020, +A2:2021)** — *robotic battery-powered electrical lawnmowers* (battery ≤75 V DC); blade-contact/entrapment. **HARD GATE** for mowers. US **ANSI/OPEI 60335-2-107**; Canada **CSA C22.2 No. 60335-2-107**. `✓`
- **ANSI/CAN/UL 3300:2024** — *Service, Communication, Information, Education & Entertainment (**SCIEE**) Robots*; the North-American consumer/commercial service-robot safety standard (obstacle avoidance, stability/tip, human-contact incl. child-target dummy tests); ANSI-approved Apr 2025. `✓`
- **ISO 18646** series — *Robotics — Performance criteria & related test methods for service robots*: Part 1 locomotion, **Part 2:2024 navigation**, Part 3 manipulation, Part 4 lower-back-support — benchmarking, not safety. `✓`
- **ISO 8373:2021** — *Robotics — Vocabulary*; definitional backbone ("service robot", "personal care robot"). `✓`
- **EU market access** — CE under **LVD 2014/35/EU**, **EMC 2014/30/EU**, **RED 2014/53/EU** (wireless); **Machinery Regulation (EU) 2023/1230** (replaces Directive 2006/42/EC, **applies 20 Jan 2027**, explicitly covers **autonomous mobile machinery & AI safety functions**); **GPSR (EU) 2023/988** consumer baseline (live since 13 Dec 2024); **EU AI Act** for the AI layer. `✓`
- **US:** **FCC Part 15** (radio/EMC) + NRTL (UL) listing. **Privacy:** **GDPR / CCPA** for in-home audio-video. `✓`

**Hard gates** = appliance safety (IEC 60335-2-2 / -2-107) + regional radio/EMC + CE/UL listing; ISO 13482 is the recognized *safety benchmark* (voluntary but decisive for personal-care robots).

## 5. Specialized Hardware, Sensors & Environment
Cost-constrained sensor suites: **solid-state/spinning dToF LiDAR, structured-light/RGB-D, monocular VSLAM, ToF, ultrasonic, IR cliff sensors, bump/collision, wheel odometry + IMU**; mowers shifting from **perimeter boundary-wire → RTK-GNSS + vision** (wire-free). **Auto-empty/self-wash docking**, battery/charge management, **blade-stop & pinch guards** (mowers), and **soft/low-force actuation** (care & home humanoids). **IP ratings** for wet mopping / outdoor mowers / pool robots; washdown for commercial units. On-device inference on **low-cost ARM SoCs** under power/thermal/BOM limits; noise, consumer ID and aesthetics are real design constraints.

## 6. Safety Envelope & Criticality
**Medium.** Typical failures — collision/property damage, tripping-fall or pinch/entrapment, pet/child contact, mower-blade laceration, mop water damage, stair falls, **privacy/data breach** — are rarely life-threatening (vs. Critical AV/surgical), hence Medium; but **person-carrier, elder-care, and blade-bearing** sub-segments push toward High. The V&V burden is lighter than Critical verticals yet real: ISO 13482 risk assessment (+ ISO/TR 23482 test methods), IEC 60335 appliance testing, **functional safety** (ISO 13849 / IEC 62061 / IEC 61508) for safety functions, and standardized **obstacle-avoidance, cliff, stability/tip, blade-stop-timing, and EMC** tests (UL 3300 dummy / child-target protocol).

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (navigation/SLAM/perception/HRI), this vertical **adds**:
- **Valued degrees:** no new degree becomes first-class, but **consumer-product / industrial-design / appliance (ME+EE) engineering** and **HCI/UX** rise; a **gerontology/nursing** grounding differentiates for elder care. The base CS/robotics core still dominates.
- **Domain credentials:** **product-safety & compliance literacy** (CE/UL/FCC, IEC 60335, ISO 13482 test methods); **functional-safety** training (e.g. TÜV FS Eng); privacy/data-protection literacy. **No security clearances** (unlike defense).
- **Feeder capability profiles:** `motion-planning-navigation`, `state-estimation-slam`, `computer-vision-3d-perception`, `human-robot-interaction`, `safety-verification-assurance`; plus `manipulation-and-grasping` / `robot-foundation-models-vla` (home-humanoid frontier) and `multi-robot-swarm` (commercial fleets).
- **Conversion:** "navigation/SLAM/perception engineer + consumer-product cost/DFM + appliance-safety & privacy literacy"; the fleet side adds RaaS ops.

## 8. Trending & Notable `⏱ as of mid-2026`
- **Home humanoids crossing to consumer:** **1X NEO** (~$20k or $499/mo, US deliveries 2026, ~30 kg, soft/tendon actuators — early units teleop-assisted), **Figure 03** (Helix AI, home focus, late-2026), **Tesla Optimus**. `✓`
- **Foundation / world models for the home:** **NVIDIA Isaac GR00T N1**, **1X World Model Lab** — VLA-driven general home manipulation. `✓`
- **Manipulation in consumer floor-care:** **Roborock Saros Z70** — first mass-produced vacuum with a **5-axis OmniGrip arm** (CES Jan 2025); stair-climbing vacuums following. `✓`
- **Wire-free RTK+vision mowers** the fastest-growing category (+63.8% YoY 2025; wire-free segment +182% `~`); window/pool robots surging; **Chinese brands (Roborock, Ecovacs, Dreame, Segway-Ninebot) dominate** consumer cleaning. `~`
- **Commercial RaaS scaling** (~$2.4 B 2025 → ~$12.4 B 2035 projected `~`); **Pudu** all-robot hotel targeted 2027 `~`; **LG took a controlling stake in Bear Robotics** (2025). `✓`
- **Elder-care/social robots** amid aging + care-labor shortage: **ElliQ** (Intuition Robotics; NY State Office for the Aging deployment). Regulatory front: EU **Machinery Regulation 2023/1230** (2027) pulls autonomous-mobile & AI-safety robots into scope; **ISO 13482** revision (prEN) underway. `✓`
*(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Consumer employers:** iRobot · Roborock · Ecovacs · Dreame · Narwal · Husqvarna · Segway-Ninebot · Mammotion · Worx/Positec · Bosch · STIHL · Honda · Amazon (Astro) · Samsung · LG · **1X · Figure · Tesla** (home humanoids).
- **Professional-service employers:** Bear Robotics (LG) · Pudu · Keenon · Avidbots · Brain Corp · SoftBank (Whiz) · Tennant · Knightscope (security) · Simbe (retail) · Diligent Robotics (Moxi) · Intuition Robotics · Labrador Systems.
- **Regulators/standards bodies:** ISO **TC 299** · IEC (appliance safety) · **UL Standards & Engagement** (UL 3300) · ANSI/OPEI · CSA · notified bodies / NRTLs (TÜV, Intertek, SGS) · FCC · European Commission · **IFR**.
- **Academic:** socially-assistive & HRI labs — USC (Matarić) · Yale · MIT Media Lab · Cornell · Bielefeld; the ACM/IEEE **HRI** community.

## 10. Adjacent Verticals & Platforms
Adjacent Axis-B: **B2 logistics** (sidewalk/last-mile delivery), **B4 healthcare** (assistive & hospital-logistics border), **B15 food** (kitchen/service). Several taxonomy "candidate verticals" — retail/hospitality service, rehab/assistive & exoskeletons, sidewalk delivery, entertainment/animatronics, education platforms — are effectively domestic/service sub-segments. Most-used platforms: **C3 AMR** (dominant), **C2 mobile manipulator**, **C5 humanoid/bipedal** (home-humanoid frontier), and **C8 soft/continuum** (safe actuation).

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B9.*

**Sources (2024–2026):** IFR *World Robotics 2025 — Service Robots* (ifr.org press release + executive summary) · ISO 13482:2014 + ISO/TR 23482-1:2020 / -2:2019 (iso.org) · IEC 60335-2-2 (vacuum cleaners) & IEC 60335-2-107:2017 +A1:2020 +A2:2021 (robotic mowers), incl. ANSI/OPEI 60335-2-107 & CSA C22.2 No. 60335-2-107 (webstore.iec.ch; webstore.ansi.org) · ANSI/CAN/UL 3300:2024 SCIEE robots (webstore.ansi.org; ul.com) · ISO 18646-2:2024 & ISO 8373:2021 (iso.org) · EU Machinery Regulation (EU) 2023/1230 (eur-lex.europa.eu; osha.europa.eu; tuv.com) + GPSR (EU) 2023/988 · 1X NEO pre-order (therobotreport.com) · Roborock Saros Z70 OmniGrip (us.roborock.com) · home-cleaning-robot & robotic-mower markets (idc.com; mordorintelligence.com) · professional service robots — Bear/Pudu/Keenon/Avidbots (restauranttechnologynews.com) · ElliQ (elliq.com).
