# Vertical Overlay — Logistics & Warehouse Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified · `~` to-verify · `⏱` time-sensitive. Sources are 2024–2026; standard codes verified against issuing-body / ANSI webstore pages.

**Vertical:** Logistics & Warehouse · **Axis B:** B2 · **Safety-criticality:** **Medium**
**Core capabilities it builds on (Axis A, load-bearing first):** A3 planning & navigation · A2 state estimation/SLAM · A9 fleet orchestration & multi-agent · A1 perception (LiDAR + pick vision) · A5 manipulation & grasping · A10 systems/functional-safety · **Typical platforms (C):** C3 AMR/AGV · C2 mobile manipulator · C1 fixed arm (pick/palletize) · C9 swarm/fleet · C5 humanoid (emerging)

---

## 1. Definition & Scope
Robots that move, store, pick, sort, and deliver goods across the fulfillment chain. Sub-segments: **goods-to-person AMR/AGV & tote/pod movers** (Kiva-lineage), **grid ASRS** (AutoStore/Ocado/Exotec), **robotic piece/each & case picking**, **palletizing/depalletizing**, **sortation & induction**, **trailer/container unload**, and **last-mile / sidewalk delivery**. It is the highest-volume commercial robotics vertical — Amazon alone crossed **1M+ deployed robots** in 2025 — with the warehouse-robotics market ~**$7–11B in 2025–26** growing ~15–18% CAGR ([Amazon](https://www.geekwire.com/2025/amazons-robot-workforce-hits-1-million-heres-what-they-all-do/), [Mordor](https://www.mordorintelligence.com/industry-reports/warehouse-robotics-market)). The defining pressures: labor shortage, SKU proliferation, e-commerce peak surge, and RaaS economics. `✓`

## 2. Core Capabilities It Builds On
- **A3 Planning & Navigation** *(load-bearing)* — reliable nav in large, dynamic, human/forklift-shared spaces; local reactive avoidance + global route planning under traffic rules.
- **A2 State Estimation / SLAM** *(load-bearing)* — LiDAR/visual SLAM and reflector/QR/natural-feature localization at warehouse scale, robust to changing inventory.
- **A9 Fleet Orchestration & Multi-Agent** — traffic management, deadlock/congestion resolution, and task allocation across **100s–1000s** of robots (the vertical's signature scaling problem).
- **A1 Perception** — 3D depth for **bin/piece picking**, package/label/barcode reading, pallet/tote detection.
- **A5 Manipulation & Grasping** — vacuum/suction & multimodal grasping of arbitrary SKUs from cluttered totes; palletizing stability.
- **A10 Systems, Safety & Integration** — functional safety, middleware, and WMS/WES/WCS integration (see §3–4).

## 3. Domain Knowledge Required
The generalist roboticist's gap here is **intralogistics + warehouse IT**, not physics. Must acquire: **material-handling & fulfillment operations** — goods-to-person vs. person-to-goods, wave/batch/zone picking, slotting, replenishment, cross-docking, handling units (each/tote/case/pallet); the **software stack the robot must slot into — WMS (management) ↔ WES (execution) ↔ WCS (equipment control)** and their ERP/MES interfaces ([AutoStore](https://www.autostoresystem.com/insights/wes-vs-wms-vs-wcs-unveiling-the-differences)); **throughput economics** — UPH/lines-per-hour, order cycle time, pick accuracy, OEE, cost-per-pick, peak (Prime/Black Friday) surge, and the **Robots-as-a-Service** model; facility/traffic geometry (aisle/rack, dock, conveyor & sortation interfaces, mixed forklift traffic); **GS1 barcodes/SKU/RFID** identification; supply-chain and parcel/last-mile network basics. `✓`

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ANSI/A3 (RIA) R15.08** — US safety standard for **Industrial Mobile Robots** (AMRs, AGVs, mobile manipulators). **Part 1 (R15.08-1-2020)** = the robot, for manufacturers; **Part 2 (R15.08-2-2023)** = IMR system integration & application; **Part 3 (users)** forthcoming `~` ([A3](https://www.automate.org/store/products/part-2-ansi-a3-r15-08-2-2023-american-national-standard-for-industrial-mobile-robots-safety-requirements-part-2-printed-copy)).
- **ISO 3691-4:2023** — international safety standard for **driverless industrial trucks & their systems**; explicitly requires **Performance-Level (PLr)** ratings for safety functions ([ISO](https://www.iso.org/standard/83545.html)). **Hard gate:** EU market access = CE marking via **EN ISO 3691-4:2023** (supersedes EN 1525).
- **ANSI/ITSDF B56.5-2019** — US "Safety Standard for Driverless, Automatic Guided Industrial Vehicles and Automated Functions of Manned Industrial Vehicles" — the AGV predecessor to R15.08 ([ANSI webstore](https://webstore.ansi.org/standards/ansi/ansiitsdfb562019-2388609)).
- **ISO 13849-1 (PLd, Cat 3) / IEC 61508 (SIL 2) / IEC 61496-3 (Type 3)** — the **functional-safety chain** each safety function (e-stop, speed-and-separation, safety scanner) must meet ([functional-safety](https://industrialsafetysensor.com/blog/functional-safety-standards/)). **Hard gate on safety functions.**
- **UL 3100** — US "Standard for Safety for Automated Mobile Platforms (AMPs)": fire/battery **thermal-runaway**, object detection, product integration — the **NRTL listing** pathway increasingly required by facilities/insurers ([ULSE](https://ulse.org/insight/ul-standards-engagement-robotics-introducing-standard-safety-automated-mobile-platforms-amps/)).
- **VDA 5050 (v2.1.0, Jan 2025)** — de-facto **interoperability** interface (JSON over MQTT) between AGVs/AMRs and a master fleet controller; enables mixed-vendor fleets. *Interoperability, not safety* ([Navitec](https://navitecsystems.com/what-is-vda-5050/)).
- **MassRobotics AMR Interoperability Standard** — open US alternative for cross-vendor AMR data sharing (not nav/fleet-mgmt/safety) ([MassRobotics](https://www.massrobotics.org/what-is-the-massrobotics-amr-interoperability-standard/)).
- **OSHA 29 CFR 1910.178 (Powered Industrial Trucks) + General Duty Clause 5(a)(1)** — US federal workplace backstop; AGVs/AMRs are governed via the General Duty Clause **plus** these consensus standards.
- **ISO 10218-1/2 & ISO/TS 15066** — apply to the **arm** when a piece-picking/mobile manipulator collaborates with people (cross-link to B1).
- **Last-mile:** **Personal Delivery Device (PDD)** statutes in **20+ US states** — weight, speed (often ≤10 mph), sidewalk-yield, insurance. No federal framework; **state authorization is a legal gate** to operate on public sidewalks ([Supply Chain Dive](https://www.supplychaindive.com/news/delivery-robot-bills-laws-proliferate-state-legislatures/648303/)).

## 5. Specialized Hardware, Sensors & Environment
**Safety-rated 2D/3D laser scanners** (SICK, Hokuyo, Pilz, Omron — Type 3, PLd) for speed-and-separation; safety bumpers/e-stops. **Nav sensors:** LiDAR, wheel odometry, IMU, 2D/3D cameras, floor QR/AprilTag/reflector markers. **Pick sensors:** structured-light/ToF depth (Zivid, Photoneo, RealSense) + vacuum/suction & multimodal grippers with force sensing. **Bases:** differential-drive/omni AMRs, tote/pod lifts, roller-deck & conveyor tops. **Environment:** indoor-structured but dynamic (people, forklifts, shifting inventory), 24/7 duty cycle, **cold-storage/freezer-rated** variants (condensation), dust, opportunity/auto-charging, dense **Wi-Fi/5G** fleet comms. Last-mile adds weatherproofing, curb/terrain handling, GNSS+vision. `✓`

## 6. Safety Envelope & Criticality
**Medium.** Dominant hazard is **collision** (robot↔pedestrian, robot↔forklift), pinch points, and falling/unstable loads — outcomes are worker injury, product loss, and throughput disruption, not the mass-casualty/patient-death profile of Critical verticals. Robots share floor space with many workers, so **collision-avoidance is the load-bearing safety function**. Governance: risk assessment (ISO 12100) → safety functions validated to **PLd Cat 3 / SIL 2**, scanner field-of-view & **stopping-distance verification**, plus fleet-level deadlock/failure handling and UL 3100 battery/fire. V&V burden is real but lighter than IEC 62304 medical — no clinical trials, but functional-safety validation and NRTL listing are non-trivial. `✓`

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (nav/SLAM/manipulation), this vertical **adds**:
- **Valued degrees:** **Industrial Engineering / Operations Research / Supply-Chain & Logistics Engineering** rise to first-class (throughput, queuing, fleet optimization) alongside the CS/robotics/EE core.
- **Domain credentials:** machinery **functional-safety** training (**TÜV FSE**, **CMSE — Certified Machinery Safety Expert**), ISO 13849 / ISO 3691-4 / R15.08 literacy; **ASCM/APICS CPIM or CSCP** (supply chain); Lean/Six Sigma; forklift/PIT safety; WMS-platform familiarity (Manhattan, Blue Yonder, SAP EWM).
- **Clearances:** none typically required.
- **Feeder capability profiles:** `motion-planning-navigation`, `state-estimation-slam`, `multi-robot-swarm` (fleet orchestration), `computer-vision-3d-perception`, `manipulation-and-grasping`, `safety-verification-assurance`, `robotics-middleware-realtime`.
- **Conversion:** "navigation/SLAM **or** fleet-orchestration engineer + intralogistics/WMS domain + machinery functional-safety literacy," **or** "manipulation/perception engineer + bin-picking vision + warehouse throughput context."

## 8. Trending & Notable `⏱ as of mid-2026`
- **Humanoids enter the warehouse:** Agility **Digit** (industry-first commercial + RaaS at **GXO**, plus Amazon/Spanx; RoboFab scaling) ([GXO](https://gxo.com/news_article/gxo-signs-industry-first-multi-year-agreement-with-agility-robotics/)); **Figure**, **Apptronik Apollo** (GXO trials + Google DeepMind foundation models) — mostly tote handling.
- **Robotic foundation models for picking:** **Covariant RFM-1** (100+ arms, absorbed into **Amazon** in 2024), **Physical Intelligence π0**, Figure/DeepMind — generalist grasping of never-seen SKUs ([Covariant](https://covariant.ai/insights/introducing-rfm-1-giving-robots-human-like-reasoning-capabilities/)).
- **Amazon at scale:** **DeepFleet** (generative-AI foundation model coordinating the whole fleet) + **Project Eluna** (agentic); named systems **Sequoia, Proteus, Sparrow, Cardinal/Robin, Blue Jay**; Shreveport "most-automated" facility cut processing time ~25% ([Amazon](https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center)).
- **Consolidation:** **Symbotic** (~$31B; 42+ Walmart DCs, acquiring Walmart Advanced Systems & Robotics Jan 2026); **Locus** 13k+ bots/300+ sites; **Geek+** largest AMR provider ([Standard Bots](https://standardbots.com/blog/warehouse-robotics-companies)).
- **Interoperability & standards maturing:** VDA 5050 v2.1.0 mixed-vendor fleets; R15.08 Part 3 (users) forthcoming; UL 3100 listings spreading.

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** Amazon Robotics · Symbotic · Locus · Geek+ · GreyOrange · AutoStore · Ocado · Exotec · Dexterity · RightHand · Zebra/Fetch · KION-Dematic · Honeywell Intelligrated · Vanderlande · Körber · SSI Schäfer · Agility/Figure/Apptronik. **3PLs/operators:** GXO · DHL · FedEx · UPS · Walmart.
- **Regulators/standards:** **A3** (RIA) · **ITSDF** · **ISO/TC 110** · **UL Standards & Engagement** · **VDA/VDMA** · **MassRobotics** · **OSHA** · ANSI · state DOTs (PDD).
- **Academic/partners:** MassRobotics · Fraunhofer IML · Georgia Tech (supply-chain/material-handling) · **MHI/CICMHE** · NVIDIA Isaac (fleet/AMR sim).

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B1 manufacturing** (shared cobot/bin-picking, ISO 10218/TS 15066), **B15 food** (cold-chain/washdown), **B14 inspection**; last-mile bridges toward **B10 autonomous vehicles** (road) and sidewalk delivery. Most-used platforms: **C3 AMR/AGV** (primary), **C2 mobile manipulator**, **C1 fixed arm**, **C9 swarm/fleet**, **C5 humanoid** (emerging).

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B2. Standard codes verified 2026-07 against A3/ISO/ANSI/UL/ITSDF pages; §8 is time-sensitive — re-research before publish.*
