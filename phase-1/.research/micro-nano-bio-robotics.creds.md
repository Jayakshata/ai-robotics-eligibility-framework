# Micro/Nano & Bio-Inspired Robotics — Niche Credentials & Subjects (research)

> Niche-specific research for **A10 · Micro/Nano & Bio-Inspired Robotics** (scope: micro/nano robotics; bio-inspired & bio-hybrid robotics; aerial manipulation; hardware-software co-design; haptics/tele-robotics). **Does NOT re-derive the shared backbone** (valued-degree tiers, canonical subjects, duration model) — that lives in `phase-1/_grounding-reference.md`. Captures only what is *specific* to this niche. Sources favor 2024–2026; URLs at end. `✓` course/number web-verified this pass · `~` to re-verify.

**Defining trait vs the rest of Axis A: physics and fabrication dominate, not learning.** At the micro/nano scale the physics inverts — surface forces beat body forces, flows are low-Reynolds, there is no room for onboard batteries or computation, so the robot is *fabricated* (MEMS/soft-litho/two-photon) and *actuated by external fields* (magnetic, electrostatic, optical) or by *living cells*. This is arguably the **least software/CS-centric niche in the taxonomy**; the eligibility set shifts hard toward ME/EE/Applied-Physics/Materials/Bioengineering. Aerial manipulation, HW-SW co-design, and haptics/tele-robotics are adjacent scope items with their own homes (last two cross-reference `tactile-force-sensing.creds.md` and `locomotion.creds.md`).

---

## 1. Highly-valued UNDERGRADUATE programs (named + courses)

Micro/nano is overwhelmingly a **graduate/research** field; at UG the differentiator is a fabrication + dynamics core plus an actual micro- or bio-inspired course, not a general robotics track.

- **Harvard SEAS** `✓` — **ENG-SCI 159 / 259 "Introduction to Robotics"** (Robert Wood) carries dedicated special-topic lectures on **MEMS & microrobotics, soft robotics, surgical robots, biomimetic systems**; the UG on-ramp to the Harvard Microrobotics Lab / Wyss Institute (RoboBee, HAMR). [coursicle.com/harvard, micro.seas.harvard.edu]
- **MIT — Course 2 (MechE)** `✓` — **2.740 "Bio-inspired Robotics"** (Sangbae Kim, Biomimetic Robotics Lab) runs as an advanced-UG/grad course: extract locomotion/actuation principles from animals, exploit system dynamics. Course 6 feeds the TinyML/co-design side. [meche.mit.edu]
- **EPFL — Microengineering (SMT) BSc** `✓` — the standout small-scale feeder; funnels into the dedicated **ME-436 Micro/Nano robotics** (below) and MEMS/microfabrication core.
- **ETH Zürich / TUM (MAVT / ME + EE)** — dynamics + microfabrication foundation that Europe funnels into its master's (ETH's Microrobotics is MSc-level).
- **UC Berkeley (EECS/ME), Stanford (ME), Michigan, WPI** — general robotics + a bio-inspired or dynamics course as feeders into Fearing / Cutkosky / bio labs.

---

## 2. Highly-valued POSTGRADUATE programs (named + courses)

Grouped by pole; ranked strongest-first within group.

**Medical / magnetic micro & nanorobotics (world-leading)**
- **ETH Zürich — MSc Robotics/MAVT** `✓` — Bradley Nelson's Multi-Scale Robotics Lab; **151-0604-00 "Microrobotics"** (4 ECTS): scaling laws, electrostatics/electromagnetism, **low-Reynolds-number flows**, fabrication, bio-inspired robots, **biomedical microrobots**. The reference micro/nano course. [msrl.ethz.ch]
- **EPFL — MSc Robotics / Microengineering** `✓` — **ME-436 "Micro/Nano robotics"** (Mahmut Selman Sakar, MICROBS Lab): multiphysics & scaling laws, design/manufacturing, sensors, **micro-actuators**, power sources, **manipulation & locomotion**, **control & localization**, applications (recommended pair ME-426 Micro/Nanomechanical devices). [edu.epfl.ch]
- **Max Planck Stuttgart (IMPRS-IS PhD)** `✓` — Sitti's **Physical Intelligence Dept**: medical/implantable microrobots, **bacteria-based biohybrid** microrobots, soft micro-robots, physical intelligence. Research-credentialed. [is.mpg.de/pi]
- **U Toronto — Robotics Institute (MIE)** `✓` — Eric Diller's Microrobotics Lab (untethered **magnetic** microrobots) + Yu Sun (pioneer of **robotic cell/molecule/nanomaterial manipulation**). [microrobotics.mie.utoronto.ca, sun.mie.utoronto.ca]
- **CUHK — Mechanical & Automation Eng** `✓` — Li Zhang: **magnetic micro/nanorobot swarms**, artificial bacterial flagella, magnetic slime robot, translational biomedicine. [microbot.mae.cuhk.edu.hk]
- **Imperial Hamlyn Centre** `~` — surgical micro-robotics (medical-imaging-guided).

**Bio-inspired & bio-hybrid (world-leading)**
- **MIT** `✓` — **2.740 Bio-inspired Robotics** (Kim); **Kevin Chen** (EECS, insect-scale soft aerial microrobots); dynamics spine via **6.8210 Underactuated Robotics** (Tedrake — flying/swimming/running; see locomotion file).
- **Harvard — SEAS + Wyss** `✓` — Robert Wood Microrobotics Lab (RoboBee, HAMR, springtail jumper; PC-MEMS "pop-up" fabrication) + Kit Parker Disease Biophysics (bio-hybrid, robotic stingray/jellyfish). [micro.seas.harvard.edu, wyss.harvard.edu]
- **EPFL** `✓` — Ijspeert BioRob (**MICRO-507 Legged Robots**, CPGs; **BIOENG-404** locomotion modelling) + Floreano LIS (**MICRO-515 "Evolutionary Robotics"** — robots inspired by evolution/development/learning; aerial & soft robots — the *morphology↔control co-design* course). [edu.epfl.ch/coursebook, epfl.ch/labs/biorob]
- **UC Berkeley** `✓` — Fearing Biomimetic Millisystems Lab (millirobots, cooperative locomotion, gecko/parallel nano-grasping). [people.eecs.berkeley.edu/~ronf]
- **Stanford** `✓` — Cutkosky BDML (biomimetic climbing/jumping — Salto, SpinyBot, gecko adhesion). [bdml.stanford.edu]
- **Georgia Tech** `✓` — Goldman CRAB Lab **"robophysics"** (School of Physics; bio-inspired locomotion in granular/soft media). [crablab.gatech.edu]
- **UIUC** `✓` — Bashir (Bioengineering) + Saif (MechSE) **biohybrid "biobots"/eBiobots** (muscle-cell/cardiac-powered walkers & swimmers).

**Aerial manipulation**
- **U Seville — GRVC (Anibal Ollero)** `✓` — the global center; AEROARMS / AERIAL-CORE EU projects, dual-arm aerial manipulators; taught inside the Aerospace / Electronics-Robotics-Mechatronics master courses. [grvc.us.es]
- **U Twente RAM + LAAS-CNRS (Antonio Franchi)** `✓`; **UPenn GRASP (Kumar)** & **UZH RPG (Scaramuzza)** for aerial dynamics/perception (see locomotion file).

**Hardware-software co-design (embedded / TinyML)**
- **MIT** `✓` — **6.5940 "TinyML & Efficient Deep Learning Computing"** (Song Han): pruning, quantization, NAS, on-device training — compute↔power co-design for resource-constrained/insect-scale autonomy. [hanlab.mit.edu]
- **Harvard** — Vijay Janapa Reddi (edge-ML systems); see TinyML certificate below.

**Haptics / tele-robotics** — see `tactile-force-sensing.creds.md`: Stanford **ME 327** (Okamura), Max Planck **Kuchenbecker**. Niche twist here = **scaled bilateral micro-teleoperation** for micromanipulation.

---

## 3. Certifications & MOOCs (named, with provider)

**Honest finding (as with tactile): a thin, research/portfolio-credentialed landscape — no vendor/industrial cert exists at the small scale.** Named items:

| Credential | Provider | Relevance |
|---|---|---|
| **"Microrobotics"** `✓⏱` | edX / **ETHx** (Nelson; launched Nov 2024) | **The flagship niche-branded MOOC** — scaling laws → biomedical microrobots; free-to-audit |
| **Tiny Machine Learning (TinyML) Professional Certificate** `✓` | edX / **HarvardX** (Reddi + Google TensorFlow / Warden, Moroney) | HW-SW co-design / embedded-ML sub-scope; 3 courses (Fundamentals / Applied / Deploying) |
| **6.5940 / efficientml.ai** `✓` | MIT (Song Han), free lectures+labs | On-device efficient ML for compute-limited robots |
| **Robotics: Aerial Robotics** `✓` | Coursera / UPenn (Kumar) | Aerial-manipulation foundations (see locomotion file) |
| **Introduction to Haptics** `✓` | Stanford Online (Okamura) | Tele/haptics sub-scope (see tactile file) |
| **Underactuated Robotics (6.832x)** `✓` | MIT edX/OCW (Tedrake) | Bio-inspired flying/swimming/running dynamics |

Recognition-by-fluency substitutes for a cert: the micro/nano literature (Nelson/Sitti/Zhang/Wood/Diller) and venues **IEEE RAS TC on Micro/Nano Robotics & Automation**, **MARSS**, **IEEE-NANO**, **RoboSoft**, **Living Machines**.

---

## 4. Subject list (grounded in the syllabi above)

**Foundational maths & CS** — linear algebra · multivariable calculus · **ODEs/PDEs** · probability · **electromagnetism & electrostatics** (load-bearing — micro-actuation is field-driven) · **fluid mechanics at low Reynolds number / microfluidics** · Python + C/C++; embedded/real-time *(ETH 151-0604; EPFL ME-436)*.

**Core robotics** — kinematics/dynamics, feedback control, state estimation — **re-cast for externally-actuated, underactuated, non-inertial systems** · **micro-visual-servoing** (control & localization under a microscope) *(EPFL ME-436 "Control & Localization")* · ROS 2 for macro test rigs / aerial platforms.

**Niche-specific** —
- **Scaling laws & micro/nano multiphysics** — surface forces ≫ body forces, adhesion, capillarity, Brownian motion *(ETH 151-0604; EPFL ME-436)*.
- **Microfabrication & MEMS** — pop-up/PC-MEMS, soft lithography, two-photon 3D printing *(Harvard Wood; ETH; EPFL)*.
- **Micro-actuation** — magnetic (gradient/rotating fields), electrostatic, piezoelectric, dielectrophoretic, catalytic/chemical, light *(ETH; Toronto Diller; CUHK Zhang)*.
- **Micro-locomotion & manipulation** — low-Re swimming (helical/flagellar), rolling/walking, **magnetic microswarm control**, **robotic cell/molecule manipulation** *(Yu Sun)*.
- **Bio-inspiration** — flapping-wing flight, legged millirobots, gecko adhesion, CPGs, morphological computation *(MIT 2.740; Berkeley Fearing; EPFL BioRob; Stanford BDML; GT robophysics)*.
- **Bio-hybrid / living actuators** — muscle-cell & bacteria-powered biobots, tissue engineering, closed-loop bio-actuation *(UIUC Bashir/Saif; Max Planck Sitti; Harvard Kit Parker)*.
- **Biomedical microrobots** — targeted drug delivery, wireless/implantable, in-vivo imaging & magnetic steering *(ETH Nelson; Max Planck; CUHK; Toronto)*.
- **Aerial manipulation** (adjacent) — coupled UAV+arm dynamics, contact interaction, aerial grasping *(Seville GRVC; Twente/LAAS)*.
- **Hardware-software co-design** — morphology↔control co-optimization *(EPFL MICRO-515 Evolutionary Robotics)* + compute↔power/embedded-TinyML *(MIT 6.5940; HarvardX TinyML)*.

**Frontier / advanced** `⏱` — **learned control for microrobots** (RL/imitation for magnetic navigation & swarm control) · reconfigurable **microrobotic swarms / collective behaviors** *(CUHK; Max Planck)* · **medical micro/nanorobot translation** (biodegradable/biocompatible materials, US/MRI in-vivo tracking, clinical steering) · **physical intelligence** & soft micro-robots *(Sitti)* · power/compute-autonomous **insect-scale flight** *(Harvard RoboBee; MIT Kevin Chen)* · bio-hybrid closed-loop & neuromuscular interfaces.

---

## 5. Niche-specific ELIGIBILITY adjustment (vs the general set)

Baseline: Tier 1 = CS/AI, Robotics, EE/ECE; Tier 2 = ME, Mechatronics, Math, Physics. This niche **inverts the usual CS-forward weighting**.

**Rise to Tier 1**
- **Mechanical Engineering** `✓` — microfabrication, MEMS, fluid mechanics, mechanism/dynamics of fabricated micro-structures; the dominant degree across ETH/EPFL/Toronto/MIT/Harvard micro & bio labs.
- **Electrical Engineering / Applied Physics** — electromagnetics, MEMS, field-based actuation, micro-sensor readout, and the embedded co-design half.

**Newly valued (niche-unique, rise from "rarely listed")**
- **Materials Science & Engineering** — soft/magnetic/stimuli-responsive materials + micro/nano-fabrication (like tactile, a first-class entry path).
- **Applied Physics / Nanotechnology / MEMS** — scaling-law physics, low-Re dynamics, micro-optics.
- **Bioengineering / Biomedical Eng / Cell-&-Molecular Biology / Chemistry** — bio-hybrid actuators, cell manipulation, drug delivery, biocompatibility. A genuine first-class path (unique to this niche + tactile).
- **Aerospace / Aeronautical** — for the aerial-manipulation sub-scope (flight dynamics, GNC).

**Falls / insufficient alone**
- **Pure CS/AI / data-science** — the robot is governed by fabrication + scaling-law physics + external-field actuation, not learned policies. CS stays useful for closed-loop micro-vision, swarm algorithms, emerging RL navigation, and is *central* to the HW-SW co-design / TinyML sub-scope — but a CS-only candidate without physics/fabrication/materials/bio literacy is weak here. Perception/NLP-flavored ML profiles carry little weight.

**Rule of thumb:** require **≥1 course in microfabrication/MEMS *or* scaling-law micro-physics *or* bio-hybrid/biomechanics**, plus a fabricated-hardware or micro/bio artifact — this replaces the generic "≥1 robotics course/ROS capstone" gate. Net: weight toward **ME + EE/Applied-Physics + Materials + Bioengineering**; treat CS/AI as a supporting (not anchor) competency except in the co-design sub-scope.

---

## Sources (representative, 2024–2026)
- ETH 151-0604 Microrobotics: https://msrl.ethz.ch/education/microrobotics.html · ETHx MOOC: https://www.edx.org/learn/engineering/eth-zurich-microrobotics · https://msrl.ethz.ch/news-and-events/msrl-news/2024/11/edx-mooc-course-microrobotics.html · Nelson MSRL: https://msrl.ethz.ch/
- EPFL ME-436 Micro/Nano robotics: https://edu.epfl.ch/coursebook/en/micro-nano-robotics-ME-436 · MICRO-515 Evolutionary Robotics: https://edu.epfl.ch/coursebook/en/evolutionary-robotics-MICRO-515 · BioRob teaching: https://www.epfl.ch/labs/biorob/students/ · Robotics MSc: https://edu.epfl.ch/studyplan/en/master/robotics/
- MIT 2.740 Bio-inspired Robotics: https://meche.mit.edu/featured-classes/bio-inspired-robotics · 6.5940 TinyML: https://hanlab.mit.edu/courses/2024-fall-65940 · 6.8210 Underactuated: https://underactuated.csail.mit.edu/
- Harvard ES 159/259 Intro Robotics: https://www.coursicle.com/harvard/courses/ENGSCI/159/ · SEAS robotics courses: https://seas.harvard.edu/robotics/courses · Microrobotics Lab: https://www.micro.seas.harvard.edu/ · Wood: https://seas.harvard.edu/person/robert-wood · Wyss: https://wyss.harvard.edu/
- Max Planck Stuttgart Physical Intelligence (Sitti): https://is.mpg.de/pi
- U Toronto: https://microrobotics.mie.utoronto.ca/ · https://sun.mie.utoronto.ca/ · https://robotics.utoronto.ca/
- CUHK Li Zhang: http://microbot.mae.cuhk.edu.hk/
- UC Berkeley Fearing Biomimetic Millisystems: https://people.eecs.berkeley.edu/~ronf/ · Stanford Cutkosky BDML: https://bdml.stanford.edu/ · Georgia Tech Goldman robophysics: https://crablab.gatech.edu/pages/research/projects/robophysics.html
- UIUC biohybrid (Bashir/Saif) — npj Robotics review 2025: https://www.nature.com/articles/s44182-025-00056-x
- Seville GRVC aerial manipulation (Ollero): https://grvc.us.es/ · https://grvc.us.es/iros18tutorial/ · LAAS AEROARMS: https://laas.hal.science/hal-01870107
- HarvardX TinyML Professional Certificate: https://www.edx.org/certificates/professional-certificate/harvardx-tiny-machine-learning

*⏱ §3 MOOC list and §4 frontier date fastest — re-verify at publish (esp. ETHx MOOC status and new medical-microrobot translation milestones).*
