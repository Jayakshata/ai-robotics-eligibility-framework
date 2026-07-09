# Vertical Overlay — Agriculture & Agri-Robotics

> **Overlay (Axis B).** Adds domain + regulation + hardware + safety + delta-eligibility on top of the Axis-A capability profiles — it does NOT restate their curricula. `✓` grounded · `~` to-verify · `⏱` time-sensitive.

**Vertical:** Agriculture & Agri-Robotics · **Axis B:** B5 · **Safety-criticality:** **Medium**
**Core capabilities it builds on (Axis A, load-bearing first):** A1 perception (crop/weed vision, multispectral) · A2 state estimation/SLAM (GNSS-RTK, crop-row localization) · A3 planning & navigation (coverage paths, row-following, Ag-ODD) · A5 manipulation (selective harvesting) · A4 control (traction/implement) · A9 multi-robot/swarm · A10 systems, safety & ISOBUS · **Typical platforms (C):** C6 aerial/drone · C9 swarm · C2 mobile manipulator · C1 fixed arm · large autonomous ground vehicle/tractor (wheeled-UGV, C3-adjacent)

---

## 1. Definition & Scope
Robots that automate open-field, orchard and barn work: **autonomous tractors & tillage**, **precision weeding** (laser and targeted-spray), **See-&-Spray / variable-rate application**, **robotic harvesting** of specialty crops (fruit, vegetables), **crop scouting & phenotyping** (ground + aerial), **spray/scouting drones**, and **dairy/livestock robots** (automated milking, feed-push, barn cleaning). The global agricultural-robots market runs ~USD 15–18 B in 2025–26, projected toward USD 40–55 B by 2030–31 (CAGR ~18–26%). The defining trait vs. general robotics: robots operate in **unstructured outdoor environments with biological variability and hard seasonal work-windows** — not a controlled factory, and often sharing open, unfenced terrain with people and animals.

## 2. Core Capabilities It Builds On
- **A1 Perception** (`computer-vision-3d-perception`, `multimodal-sensor-fusion`) *(most load-bearing)* — crop/weed/disease discrimination and fruit detection/ripeness under variable sunlight, occlusion, dust and enormous biological variability; multispectral/hyperspectral beyond RGB.
- **A2 State Estimation / SLAM** (`state-estimation-slam`) — cm-level **GNSS-RTK** fused with IMU/wheel/visual odometry; crop-row and under-canopy localization where GNSS degrades or drops out.
- **A3 Planning & Navigation** (`motion-planning-navigation`) — field **coverage-path planning**, row-following, headland turns, and obstacle avoidance bounded by an **agricultural operational design domain (Ag-ODD)**.
- **A5 Manipulation** (`manipulation-and-grasping`, `soft-robotics`) — **soft/compliant** end-effectors for delicate, non-uniform produce; detach without bruising (selective-harvesting sub-segment).
- **A4 Control** (`control-classical-optimal-mpc`) — traction/steering on soft, uneven, sloped terrain; tractor–implement coordination and implement-depth/rate control.
- **A9 Multi-robot / Swarm** (`multi-robot-swarm`) — fleets of small collaborating robots covering a field; scheduling and area partitioning.
- **A10 Systems & Safety** (`safety-verification-assurance`, `robotics-middleware-realtime`) — **ISOBUS** integration, ruggedization, and offline/edge autonomy in connectivity-poor rural sites.

## 3. Domain Knowledge Required
The generalist roboticist's gap: **agronomy & crop science** (growth stages/phenology, canopy architecture), **soil science** (texture, moisture, compaction, tilth), **weed/pest/disease identification** and **integrated pest management (IPM)**, **plant-phenotyping** traits, **agrochemical application** (spray drift, droplet size, label-rate compliance, variable-rate prescription maps), **precision-agriculture** concepts (management zones, yield mapping), the **agricultural-machinery** domain (implements, three-point hitch, PTO, ISOBUS Tractor-Implement Management), **post-harvest quality/bruising**, **dairy/livestock husbandry**, and the **agronomic calendar** (short, weather-bound seasonal windows). This is what a generalist roboticist lacks.

## 4. Regulatory, Standards & Certification Landscape `✓` (the defining differentiator)
- **ISO 18497-1…-4:2024** — *Agricultural machinery and tractors — Safety of partially automated, semi-autonomous and autonomous machinery*: **-1** machine design principles & vocabulary, **-2** design principles for obstacle-protection systems, **-3** autonomous operating zones (boundary containment), **-4** verification methods & validation principles. The core autonomy-safety anchor (supersedes ISO 18497:2018). **Hard gate** via state-of-the-art / EN-harmonized CE presumption.
- **ISO 25119-1…-4** — *Tractors and machinery for agriculture and forestry — Safety-related parts of control systems*: sector-specific **functional safety** (the ag derivative of IEC 61508; cf. ISO 13849 / ISO 26262), grading risk as **AgPL a–e** with software requirement levels SRL B/1/2/3. Hard gate for safety-rated control electronics.
- **ISO 10975:2023** — *Auto-guidance systems for operator-controlled tractors and self-propelled machines — Safety requirements* (covers factory-fit and retrofit).
- **ISO 4254-1:2013** (EN ISO 4254-1:2015/A1:2021) — *Agricultural machinery — Safety — Part 1: General requirements*; the base machinery-safety layer (tractors covered separately).
- **ISO 11783 (ISOBUS)** — tractor↔implement serial control/comms network; the **AEF** (Agricultural Industry Electronics Foundation) runs **ISOBUS conformance certification** and the functionality database. Commercial/interoperability gate, not a legal safety gate.
- **EU Machinery Regulation (EU) 2023/1230** — replaces Directive 2006/42/EC, **applies 20 Jan 2027**; first EU law to cover autonomous mobile machinery / AI safety functions, and it mandates a **remote-supervisor / supervisory-stop** capability. **Hard gate** (CE marking) for the EU market.
- **Regulation (EU) 167/2013** — agricultural/forestry vehicle **type-approval** ("mother regulation") for road-going tractors, which are excluded from the Machinery Regulation. Hard gate for on-road EU tractors.
- **US spray drones — FAA 14 CFR Part 137** (Agricultural Aircraft Operator Certificate) is the **hard gate** to dispense chemicals; **Part 107** covers scouting/mapping; drones ≥55 lb need §44807 exemptions. **EPA FIFRA** pesticide registration/label compliance plus (often restricted-use) applicator certification and state aerial-applicator licensing are additional hard gates.
- **US ground autonomy** — **ANSI/ASAE S318** (safety for agricultural field equipment); no single federal autonomy approval — a patchwork of state rules, with **ASABE** and ISO **TC 23** setting the standards. `~`

## 5. Specialized Hardware, Sensors & Environment
**Multispectral/hyperspectral + RGB + stereo/depth** cameras, LiDAR, **GNSS-RTK** receivers, IMUs; **high-power laser** weeding modules (laser-safety-class) and PWM/nozzle **targeted sprayers**; **soft/compliant grippers** for produce. Environmental constraints: dust ingress (IP6x), washdown/water and mud, vibration, wide temperature and UV exposure, soft-soil traction and slopes, canopy occlusion, and **connectivity-poor** operation demanding edge/offline autonomy. Electrification, large battery packs, and modular multi-carrier platforms are the 2026 direction. `✓`

## 6. Safety Envelope & Criticality
**Medium.** Typical failure consequences are equipment/crop damage plus risk to **farmworkers, bystanders and livestock** sharing open, unfenced terrain — serious but rarely mass-casualty, hence Medium (below Critical healthcare, below High construction/mining). The floor rises sharply for **>30 t, 900 hp autonomous tractors** and for high-power lasers and agrochemicals. The V&V burden centers on **obstacle-detection performance validation across the Ag-ODD** (ISO 18497-2/-4), **operating-zone containment** (-3), **AgPL functional-safety** rigor (ISO 25119), auto-guidance safety (ISO 10975), and the EU-mandated **remote-supervision/stop** function. Field validation across weather, crop and lighting conditions is the dominant, un-glamorous cost. `✓`

## 7. Delta-Eligibility (what the vertical adds)
On top of the base capability eligibility (perception/navigation/manipulation), this vertical **adds**:
- **Valued degrees:** **Agricultural / Biosystems / Biological Systems Engineering** (ASABE-accredited) and **Agronomy / Crop & Soil Science** rise to first-class alongside CS/EE/ME/Robotics; environmental science is useful.
- **Domain credentials:** **Certified Crop Adviser (CCA)** (American Society of Agronomy); **pesticide-applicator certification** (EPA/state); **FAA Part 107 + Part 137 AAOC** for drone roles; **ISOBUS/AEF** literacy; **ISO 25119 / ISO 18497** functional-safety training.
- **Feeder capability profiles:** `computer-vision-3d-perception`, `multimodal-sensor-fusion`, `state-estimation-slam`, `motion-planning-navigation`, `manipulation-and-grasping`, `multi-robot-swarm`, `safety-verification-assurance` (plus `soft-robotics` for produce grippers and `control-classical-optimal-mpc` for traction/implement control).
- **Conversion:** "perception/outdoor-autonomy engineer + agronomy domain + Ag-ODD safety (ISO 18497/25119) literacy." Perception, SLAM/nav, AMR-autonomy, manipulation, swarm and drone-autonomy engineers all convert directly.

## 8. Trending & Notable `⏱ as of mid-2026`
**Physical-AI foundation models for the field** (e.g. John Deere's 2026 Startup Collaborator TorqueAGI) for real-world reasoning; **John Deere 2nd-gen autonomy** on the **9RX** (16-camera 360° perception pods, driverless >900 hp) shown from CES 2025; **laser weeding** and **AI tillage** reading soil density/moisture in real time (Carbon Robotics); **See-&-Spray** targeted application cutting herbicide volumes; a **>USD 500 M** capital shift toward autonomous heavy tractors; and momentum in **specialty-crop harvesting**, modular multi-carrier platforms, electrification, and **robotics-as-a-service** business models. *(Re-research before publish.)*

## 9. Ecosystem — Employers, Regulators & Partners
- **Employers/integrators:** John Deere (incl. Bear Flag Robotics) · CNH Industrial (Case IH / New Holland) · AGCO (Fendt / PTx) · Kubota · CLAAS · Lely (dairy) · **Carbon Robotics · Monarch Tractor · Naïo Technologies · FarmWise · Verdant Robotics · Bluewhite · Agtonomy · FarmDroid · Ecorobotix · Burro** · DJI Agriculture / XAG (spray drones).
- **Regulators/standards:** ISO **TC 23** · **ASABE** · **AEF** · FAA · EPA · USDA · EU CEMA / VDMA · national agriculture ministries.
- **Academic labs:** Wageningen University · UC Davis / UC ANR · CMU Field Robotics · Univ. Illinois (AIFARMS) · Washington State (tree fruit) · Harper Adams (Hands Free Farm) · QUT.

## 10. Adjacent Verticals & Platforms
Adjacent verticals: **construction (B6)** and **mining (B7)** outdoor-UGV autonomy, **logistics (B2)** fleet nav, **forestry** (shares the ISO "agriculture and forestry" safety standards), plus dairy/livestock and **food processing (B15)**. Most-used platforms: **C6 aerial/drone**, **C9 swarm/multi-robot**, **C2 mobile manipulator** and **C1 fixed arm**, plus large autonomous ground vehicles / tractors (a wheeled-UGV form closest to **C3 AMR/AGV**, loosely mapped).

---
*Template: `phase-1/verticals/_TEMPLATE-vertical.md`. Sits atop the Axis-A capability profiles in `phase-1/`. Taxonomy: `master-niche-taxonomy.md` B5.*
