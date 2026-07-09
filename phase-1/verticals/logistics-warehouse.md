# Vertical Overlay — Logistics & Warehouse Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. Standard codes verified against issuing-body / ANSI / UL pages. `✓` web-verified · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Logistics & Warehouse · **Axis B:** B2 · **Safety-criticality:** **Medium**
**Core capabilities it builds on (Axis A, load-bearing first):** A3 planning & navigation · A2 state estimation/SLAM · A9 fleet orchestration & multi-agent · A1 perception (LiDAR + pick vision) · A5 manipulation & grasping · A10 systems/functional-safety · **Typical platforms (C):** C3 AMR/AGV · C2 mobile manipulator · C1 fixed arm (pick/palletize) · C9 swarm/fleet · C5 humanoid (emerging)

---

## 1. Definition & Scope
Robots that move, store, pick, sort, and deliver goods across the fulfillment chain. Sub-segments: **goods-to-person AMR/AGV & tote/pod movers** (Kiva-lineage), **grid ASRS** (AutoStore/Ocado/Exotec), **robotic piece/each & case picking**, **palletizing/depalletizing**, **sortation & induction**, **trailer/container unload**, and **last-mile / sidewalk delivery**. It is the highest-volume commercial robotics vertical — Amazon alone crossed **~1M deployed robots** in 2025 — with the warehouse-robotics market roughly **$8–12B in 2025–26** at a mid-teens CAGR `~`. The defining commercial pressures are labor shortage, SKU proliferation, e-commerce peak surge, and **Robots-as-a-Service (RaaS)** economics. `✓`

## 2. Core Capabilities It Builds On
- **A3 Planning & Navigation** (`motion-planning-navigation`) *(load-bearing)* — reliable nav in large, dynamic, human/forklift-shared spaces; local reactive avoidance + global routing under traffic rules.
- **A2 State Estimation / SLAM** (`state-estimation-slam`) *(load-bearing)* — LiDAR/visual SLAM and reflector/QR/natural-feature localization at warehouse scale, robust to constantly-changing inventory.
- **A9 Fleet Orchestration & Multi-Agent** (`multi-robot-swarm`) *(load-bearing)* — traffic management, deadlock/congestion resolution, and task allocation across **100s–1000s** of robots (the vertical's signature scaling problem).
- **A1 Perception** (`computer-vision-3d-perception`) — 3D depth for **bin/piece picking**, package/label/barcode reading, pallet/tote detection.
- **A5 Manipulation & Grasping** (`manipulation-and-grasping`) — vacuum/suction & multimodal grasping of arbitrary SKUs from cluttered totes; palletizing stability.
- **A10 Systems, Safety & Integration** (`safety-verification-assurance`, `robotics-middleware-realtime`) — functional safety plus middleware and WMS/WES/WCS integration (see §3–4).

## 3. Domain Knowledge Required
The generalist roboticist's gap here is **intralogistics + warehouse IT**, not physics. Must acquire: **material-handling & fulfillment operations** — goods-to-person vs. person-to-goods, wave/batch/zone picking, slotting, replenishment, cross-docking, handling units (each/tote/case/pallet); the **software stack the robot must slot into — WMS (management) ↔ WES (execution) ↔ WCS (equipment control)** and their ERP/MES interfaces; **throughput economics** — UPH / lines-per-hour, order cycle time, pick accuracy, OEE, cost-per-pick, peak (Prime Day / Black Friday) surge, and the RaaS model; facility & traffic geometry (aisle/rack, dock, conveyor & sortation interfaces, mixed forklift traffic); **GS1 barcodes / SKU / RFID** identification; and parcel / last-mile network basics. `✓`

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ANSI/A3 (RIA) R15.08** — US safety standard for **Industrial Mobile Robots** (AMRs, AGVs, mobile manipulators). **Part 1 (R15.08-1-2020)** = the robot, for manufacturers; **Part 2 (R15.08-2-2023)** = IMR system integration & application; **Part 3 (users)** forthcoming `~`.
- **ISO 3691-4:2023** — international safety standard for **driverless industrial trucks & their systems**; explicitly requires **Performance-Level (PLr)** ratings on safety functions. **Hard gate:** EU market access = CE marking via **EN ISO 3691-4** (supersedes EN 1525).
- **ANSI/ITSDF B56.5-2019** — US "Safety Standard for Driverless, Automatic Guided Industrial Vehicles and Automated Functions of Manned Industrial Vehicles" — the AGV predecessor to R15.08.
- **ISO 13849-1 (PLd, Cat 3) / IEC 61508 (SIL 2) / IEC 61496-3 (Type 3)** — the **functional-safety chain** each safety function (e-stop, speed-and-separation, safety laser scanner) must meet. **Hard gate on safety functions.**
- **UL 3100** — US "Standard for Safety for Automated Mobile Platforms (AMPs)": battery **thermal-runaway** / fire, object detection, and product integration — the **NRTL-listing** pathway increasingly demanded by facilities and insurers.
- **VDA 5050 (v2.1.0)** — de-facto **interoperability** interface (JSON over MQTT) between AGVs/AMRs and a master fleet controller; enables mixed-vendor fleets. *Interoperability, not safety.*
- **MassRobotics AMR Interoperability Standard** — open US alternative for cross-vendor AMR data sharing (not navigation / fleet-management / safety).
- **OSHA 29 CFR 1910.178 (Powered Industrial Trucks) + General Duty Clause 5(a)(1)** — US federal workplace backstop; mobile robots are enforced via the General Duty Clause **plus** the consensus standards above.
- **ISO 10218-1/-2 & ISO/TS 15066** — govern the *arm* when a piece-picking / mobile manipulator collaborates with people; 10218 was revised in 2025 `~` (cross-link to B1).
- **Last-mile: Personal Delivery Device (PDD) statutes** in **~20 US states** `~` — weight, speed (often ≤10 mph), sidewalk-yield, and insurance rules. No federal framework; **state authorization is the legal gate** to operate on public sidewalks.

## 5. Specialized Hardware, Sensors & Environment
**Safety-rated 2D/3D laser scanners** (SICK, Hokuyo, Pilz, Omron — Type 3, PLd) for speed-and-separation, plus safety bumpers and e-stops. **Nav sensors:** LiDAR, wheel odometry, IMU, 2D/3D cameras, and floor QR / AprilTag / reflector markers. **Pick sensors:** structured-light / ToF depth (Zivid, Photoneo, Intel RealSense) with vacuum/suction & multimodal grippers and force sensing. **Bases:** differential-drive / omni AMRs, tote & pod lifts, roller-deck and conveyor tops. **Environment:** indoor-structured but dynamic (people, forklifts, shifting inventory), 24/7 duty cycle, **cold-storage / freezer-rated** variants (condensation), dust, opportunity/auto-charging, and dense **Wi-Fi / 5G** fleet comms. Last-mile adds weatherproofing, curb/terrain handling, and GNSS + vision. `✓`

## 6. Safety Envelope & Criticality
**Medium.** The dominant hazards are **collision** (robot↔pedestrian, robot↔forklift), pinch points, and falling/unstable loads — outcomes are worker injury, product loss, and throughput disruption, not the mass-casualty / patient-death profile of Critical verticals. Because robots share floor space with many workers, **collision-avoidance is the load-bearing safety function**. Governance: risk assessment (ISO 12100) → safety functions validated to **PLd Cat 3 / SIL 2**, scanner field-of-view and **stopping-distance verification**, plus fleet-level deadlock / failure handling and UL 3100 battery/fire. The V&V burden is real — functional-safety validation and NRTL listing are non-trivial — but far lighter than IEC 62304 medical: no clinical trials. `✓`

## 7. Delta-Eligibility (what the vertical adds)
On top of base capability eligibility (nav/SLAM/manipulation), this vertical **adds**:
- **Valued degrees:** **Industrial Engineering / Operations Research / Supply-Chain & Logistics Engineering** rise to first-class (throughput, queuing, fleet optimization) alongside the CS/robotics/EE core.
- **Domain credentials:** machinery **functional-safety** training (**TÜV FSE**, **CMSE — Certified Machinery Safety Expert**), ISO 13849 / ISO 3691-4 / R15.08 literacy; **ASCM/APICS CPIM or CSCP** (supply chain); Lean / Six Sigma; forklift / PIT safety; and WMS-platform familiarity (Manhattan, Blue Yonder, SAP EWM).
- **Clearances:** none typically required.
- **Feeder capability profiles:** `motion-planning-navigation`, `state-estimation-slam`, `multi-robot-swarm` (fleet orchestration), `computer-vision-3d-perception`, `manipulation-and-grasping`, `safety-verification-assurance`, `robotics-middleware-realtime`.
- **Conversion:** "navigation/SLAM **or** fleet-orchestration engineer + intralogistics/WMS domain + machinery functional-safety literacy," **or** "manipulation/perception engineer + bin-picking vision + warehouse throughput context."

## 8. Trending & Notable `⏱ as of mid-2026`
**Humanoids enter the warehouse:** Agility **Digit** (industry-first commercial RaaS at **GXO**, plus Amazon/Spanx trials; RoboFab scaling), **Figure**, and **Apptronik Apollo** (GXO trials + Google DeepMind foundation models) — mostly tote handling so far. **Robotic foundation models for picking:** **Covariant RFM-1** (founders/tech absorbed into **Amazon** in 2024) `~`, **Physical Intelligence π0**, and Figure/DeepMind push generalist grasping of never-seen SKUs (ties to `robot-foundation-models-vla`). **Amazon at scale:** **DeepFleet** (a generative-AI foundation model coordinating the whole fleet) and agentic **Project Eluna** `~`, atop named systems **Sequoia, Proteus, Sparrow, Cardinal/Robin, Blue Jay**; the Shreveport "most-automated" facility reportedly cut processing time ~25% `~`. **Consolidation:** **Symbotic** (~$31B `~`; 40+ Walmart DCs; acquired Walmart's Advanced Systems & Robotics business in 2025 `~`), **Locus Robotics** (13k+ bots across 300+ sites `~`), and **Geek+** (an AMR market-share leader; HK IPO 2025 `~`). **Interoperability & standards maturing:** VDA 5050 v2.1.0 mixed-vendor fleets, R15.08 Part 3 (users) forthcoming, and spreading UL 3100 listings. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** Amazon Robotics · Symbotic · Locus Robotics · Geek+ · GreyOrange · AutoStore · Ocado · Exotec · Dexterity · RightHand Robotics · Zebra/Fetch · KION-Dematic · Honeywell Intelligrated · Vanderlande · Körber · SSI Schäfer · Agility/Figure/Apptronik. **3PLs/operators:** GXO · DHL · FedEx · UPS · Walmart.
- **Regulators/standards:** **A3** (Association for Advancing Automation / RIA) · **ITSDF** · **ISO/TC 110** · **UL Standards & Engagement** · **VDA/VDMA** · **MassRobotics** · **OSHA** · ANSI · state DOTs (PDD).
- **Academic/partners:** MassRobotics · Fraunhofer IML · Georgia Tech (supply-chain & material-handling) · **MHI / CICMHE** · NVIDIA Isaac (fleet/AMR simulation).

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **B1 manufacturing** (shared cobot & bin-picking; ISO 10218 / TS 15066), **B15 food processing** (cold-chain / washdown), and **B14 inspection**; last-mile bridges toward **B10 autonomous vehicles** (road) and sidewalk delivery. Most-used platforms: **C3 AMR/AGV** (primary), **C2 mobile manipulator**, **C1 fixed arm**, **C9 swarm/fleet**, and **C5 humanoid** (emerging — ties to the `robot-foundation-models-vla` and `locomotion` capability profiles); fleet-scale validation leans on `simulation-digital-twins`.

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B2. Standard codes verified 2026-07 against A3/ISO/ANSI/UL/ITSDF pages; §8 is time-sensitive — re-research before publish.*
