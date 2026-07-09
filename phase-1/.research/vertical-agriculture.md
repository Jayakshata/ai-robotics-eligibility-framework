# Vertical Overlay — Agriculture & Agri-Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` web-verified this pass · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Agriculture & Agri-Robotics · **Axis B:** B5 · **Safety-criticality:** **Medium**
**Core capabilities it builds on (Axis A, load-bearing first):** A1 perception (crop/weed vision, multispectral) · A2 state estimation/SLAM (GNSS-RTK, crop-row localization) · A3 planning & navigation (coverage paths, row-following, Ag-ODD) · A5 manipulation (selective harvesting) · A4 control (traction/implement) · A9 multi-robot/swarm · A10 safety, ISOBUS integration & ruggedization · **Typical platforms (C):** C6 aerial/drone · C9 swarm · C2 mobile manipulator · C1 fixed arm (+ large autonomous ground vehicle / tractor)

---

## 1. Definition & Scope
Robots that automate field and orchard work: **autonomous tractors & tillage**, **precision weeding** (laser and targeted-spray), **See-&-Spray / variable-rate application**, **robotic harvesting** of specialty crops (fruit, vegetables), **crop scouting & phenotyping** (ground + aerial), **spray/scouting drones**, and **dairy/livestock robots** (milking, feed-push). The global agricultural-robots market is ~USD 15–18 B in 2025–2026, projected to USD 41–56 B by 2030–2031 (CAGR ~18–26%). The defining trait vs. general robotics: **unstructured outdoor environments, biological variability, and seasonality** — not a controlled factory. `✓`

## 2. Core Capabilities It Builds On
- **A1 Perception** *(most load-bearing)* — crop/weed/disease discrimination and fruit detection/ripeness under variable sunlight, occlusion, dust and enormous biological variability; multispectral/hyperspectral beyond RGB.
- **A2 State Estimation / SLAM** — cm-level **GNSS-RTK** fused with IMU/visual odometry; crop-row and under-canopy localization where GNSS degrades.
- **A3 Planning & Navigation** — field **coverage-path planning**, row-following, headland turns, and obstacle avoidance bounded by an **agricultural operational design domain (Ag-ODD)**.
- **A5 Manipulation** — **soft/compliant** end-effectors for delicate, non-uniform produce (selective harvesting sub-segment).
- **A4 Control** — traction/steering on soft, uneven, sloped terrain; tractor-implement coordination.
- **A9 Multi-robot/swarm & A10 systems** — fleets of small robots; **ISOBUS** integration, ruggedization, offline autonomy in poor-connectivity rural sites.

## 3. Domain Knowledge Required
The generalist roboticist's gap: **agronomy & crop science** (growth stages/phenology, canopy architecture), **soil science** (texture, moisture, compaction, tilth), **weed/pest/disease identification** and **integrated pest management (IPM)**, **plant phenotyping** traits, **agrochemical application** (spray drift, droplet size, label-rate compliance, variable-rate prescription maps), **precision-agriculture** concepts (management zones, yield mapping), the **agricultural-machinery** domain (implements, three-point hitch, PTO, ISOBUS Tractor-Implement Management), **post-harvest quality/bruising**, and the **agronomic calendar** (short seasonal work windows). `✓`

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ISO 18497-1…-4:2024** — *Safety of partially automated, semi-autonomous and autonomous agricultural machinery*: **-1** design principles/vocabulary, **-2** obstacle-protection systems, **-3** autonomous operating zones (boundary containment), **-4** verification/validation. The core autonomy-safety anchor (replaced ISO 18497:2018). **Hard gate** via state-of-the-art/CE presumption.
- **ISO 25119-1…-4** — *Safety-related parts of control systems* for ag/forestry machinery: **functional safety** (ag analogue of IEC 61508 / ISO 13849 / ISO 26262), grades risk as **AgPL a–e**. Hard gate for safety-rated control electronics.
- **ISO 10975:2023** — *Auto-guidance systems* for operator-controlled tractors/self-propelled machines — safety requirements (factory-fit and retrofit).
- **ISO 4254-1:2013** (EN ISO 4254-1:2015/A1:2021) — *Agricultural machinery — Safety — Part 1: General requirements*; base machinery-safety layer (excludes tractors, covered separately).
- **ISO 11783 (ISOBUS)** — tractor↔implement serial control/comms network; **AEF** (Agricultural Industry Electronics Foundation) runs **ISOBUS conformance certification** + database. Commercial/interoperability gate, not a legal safety gate.
- **EU Machinery Regulation (EU) 2023/1230** — replaces Directive 2006/42/EC, applies **20 Jan 2027**; first EU law to cover autonomous mobile machinery/AI safety functions and mandates a **remote supervisor / supervisory-stop** capability. **Hard gate** (CE marking) for the EU market.
- **Regulation (EU) 167/2013** — agricultural/forestry vehicle **type-approval** ("mother regulation") for road-going tractors; such tractors are excluded from the Machinery Regulation. Hard gate for on-road EU tractors.
- **US spray drones — FAA 14 CFR Part 137** (Agricultural Aircraft Operator Certificate/AAOC) is the **hard gate** to dispense chemicals; **Part 107** remote-pilot cert covers scouting/mapping; drones ≥55 lb need Part 61/91/137 exemptions (§44807). **EPA FIFRA** pesticide registration/label compliance + (often restricted-use) applicator certification and state aerial-applicator licensing are additional hard gates.
- **US ground autonomy** — **ANSI/ASAE S318.19** (safety for agricultural field equipment); no single federal autonomy approval — a patchwork of state rules. ASABE + ISO **TC 23** set the standards. `~`

## 5. Specialized Hardware, Sensors & Environment
**Multispectral/hyperspectral + RGB + stereo/depth** cameras, LiDAR, **GNSS-RTK** receivers, IMUs; **high-power laser** weeding modules (laser-safety class) and PWM/nozzle **targeted sprayers**; **soft/compliant grippers** for produce. Environmental constraints: dust ingress (IP6x), washdown/water, mud, vibration, wide temperature/UV exposure, soft-soil traction and slopes, canopy occlusion, and **connectivity-poor** operation (edge/offline autonomy). Electrification, large batteries, and modular multi-carrier platforms are the 2026 direction. `✓`

## 6. Safety Envelope & Criticality
**Medium.** Typical failure consequences are equipment/crop damage plus risk to **farmworkers, bystanders and livestock** sharing open, unfenced terrain — serious but rarely mass-casualty, hence Medium (below Critical healthcare / High construction). The floor rises for **>30 t, 900 hp autonomous tractors** and high-power lasers/agrochemicals. V&V burden centers on **obstacle-detection performance validation across the Ag-ODD** (ISO 18497-2/-4), **operating-zone containment** (-3), **AgPL functional-safety** rigor (ISO 25119), auto-guidance safety (ISO 10975), and the EU-mandated **remote-supervision/stop** function. Field validation across weather, crop and lighting conditions is the dominant, un-glamorous cost. `✓`

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (perception/navigation/manipulation), this vertical **adds**:
- **Valued degrees:** **Agricultural / Biosystems / Biological Systems Engineering** (ASABE-accredited) and **Agronomy / Crop & Soil Science** rise to first-class alongside CS/EE/ME/Robotics; environmental science useful.
- **Domain credentials:** **Certified Crop Adviser (CCA)** (American Society of Agronomy); **pesticide-applicator certification** (EPA/state); **FAA Part 107 + Part 137 AAOC** for drone roles; **ISOBUS/AEF** literacy; **ISO 25119 / ISO 18497** functional-safety training.
- **Feeder capability profiles:** `computer-vision-3d-perception`, `state-estimation-slam`, `motion-planning-navigation`, `multimodal-sensor-fusion`, `manipulation-and-grasping`, `multi-robot-swarm`, `safety-verification-assurance`.
- **Conversion:** "perception/outdoor-autonomy engineer + agronomy domain + Ag-ODD safety (ISO 18497/25119) literacy." Perception, SLAM/nav, AMR-autonomy, manipulation, swarm and drone-autonomy engineers all convert directly.

## 8. Trending & Notable `⏱ as of mid-2026`
**Physical-AI foundation models for the field** (e.g. John Deere's 2026 Startup Collaborator TorqueAGI) for real-world reasoning; **John Deere 2nd-gen autonomy** on the **9RX** (16-camera 360° pods, driverless >900 hp) shown from CES 2025; **laser weeding** and **AI tillage** reading soil density/moisture in real time (**Carbon Robotics**); **See-&-Spray** targeted application; a **>USD 500 M** capital shift toward autonomous heavy tractors; momentum in **specialty-crop harvesting**, modular multi-carrier platforms, electrification, and **robotics-as-a-service**. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** John Deere (incl. Bear Flag Robotics) · CNH Industrial (Case IH/New Holland) · AGCO (Fendt/PTx) · Kubota · CLAAS · Lely (dairy) · **Carbon Robotics · Monarch Tractor · Naïo Technologies · FarmWise · Verdant Robotics · Bluewhite · Agtonomy · FarmDroid · Ecorobotix · Burro** · DJI Agriculture / XAG (spray drones).
- **Regulators/standards:** ISO **TC 23** · **ASABE** · **AEF** · FAA · EPA · USDA · EU CEMA / VDMA · national ag ministries.
- **Academic partners:** Wageningen University · UC Davis / UC ANR · CMU Field Robotics · Univ. Illinois (AIFARMS) · Washington State (tree fruit) · Harper Adams (Hands Free Farm) · QUT.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **construction (B6)** and **mining (B7)** outdoor-UGV autonomy, **logistics (B2)** fleet nav, **forestry** (shares the ISO "agriculture and forestry" standards), dairy/livestock and food processing. Most-used platforms: **C6 aerial/drone**, **C9 swarm/multi-robot**, **C2 mobile manipulator** and **C1 fixed arm**, plus large autonomous ground vehicles/tractors (AMR-adjacent, C-track loosely mapped).

---
### Sources (2024–2026, verified)
- ISO 18497-1/-2/-3/-4:2024 — iso.org/standard/82684, /82686, /82687, /82688; standards.iteh.ai (EN ISO 18497-3:2024)
- ISO 25119 series — iso.org/standard/78306, /69027, /69028; tuvsud.com functional-safety-assessment-iso-25119
- ISO 10975:2023 — iso.org/standard/82670 · ISO 4254-1:2013 — iso.org/standard/55910; cencenelec.eu (EN ISO 4254-1/A1:2021)
- ISO 11783 / AEF — aef-online.org/about-us/isobus.html; oemoffhighway.com AEF ISOBUS certification
- EU Machinery Reg. (EU) 2023/1230 — eur-lex.europa.eu/eli/reg/2023/1230; osha.europa.eu; cema-agri.org · Reg. (EU) 167/2013 (type-approval)
- FAA Part 137 / Part 107 — faa.gov/uas/advanced_operations/dispensing_chemicals; ask.ifas.ufl.edu/publication/AE608 · ANSI/ASAE S318.19 — webstore.ansi.org
- Market/companies/trends — marketsandmarkets.com agricultural-robot-market; deere.com/en/news/all-news/autonomous-9RX; futurefarming.com; michiganfarmnews.com (Deere 2026 collaborators); Ag-ODD framework arxiv.org/pdf/2511.02937
