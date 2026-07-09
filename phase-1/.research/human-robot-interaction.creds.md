# Niche Credentials & Subjects — Human-Robot Interaction & Collaborative Robots (A9)

> **Research note** feeding the §3/§4/§5 slots of the A9 niche profile. **Scope:** HRI · intent/communication · shared autonomy · collaborative robots (cobots) · safety of human-adjacent operation. Does **not** re-derive the shared backbone (degree tiers, canonical subjects, duration model) in `phase-1/_grounding-reference.md` — only what is *specific* to HRI/cobots. Data 2024–2026, cited. `✓` web-verified this pass · `~` to re-verify.

This is the **most interdisciplinary and human-facing** slice of AI-for-robotics: it fuses robotics/AI with **HCI, cognitive science, psychology, design, and human-factors/safety engineering**. Two sub-poles run through everything below — (a) **social / assistive / interactive HRI** (communication, teaming, shared autonomy, learning-from-humans) and (b) **collaborative-robot (cobot) / physical-HRI + safety** (contact-safe operation, ISO/TS 15066). That breadth reshapes which programs, credentials, and degrees rank strongest — see §4.

---

## 1. Strongest University Programs for THIS niche

### Postgraduate — ranked by HRI strength `✓`

| Tier | Programs | The niche signal (named courses / labs) |
|------|----------|------------------------------------------|
| **World-leading** | **CMU · Stanford · MIT · UC Berkeley** | **CMU 16-467 Introduction to Human-Robot Interaction** (Reid Simmons → Admoni/Zackory Erickson) — *the* anchor survey: anthropomorphism, verbal/nonverbal & implicit communication, theory-of-mind & intent recognition (MDPs/intent inference), trust & persuasion, social navigation, learning-from-humans, collaboration, assistive robotics; RI + **HCII** give CMU unmatched HRI depth. **Stanford CS 333 Safe and Interactive Robotics** (Dorsa Sadigh) — human modeling, shared autonomy, safety of interaction; **CS 237B Principles of Robot Autonomy II**. **MIT** — **Julie Shah's Interactive Robotics Group** (human-robot *teaming*, collaborative manufacturing, planning/scheduling, AeroAstro) + **Cynthia Breazeal's Personal Robots Group** (Media Lab, social robotics — the field's origin). **UC Berkeley — Anca Dragan / InterACT Lab**: grad **"Algorithmic Foundations of Human-Robot Interaction"** — legible/predictable motion, learning from user feedback, **assistive teleoperation & shared autonomy**. |
| **Very strong** | **Georgia Tech · USC · Univ. of Washington** | **Georgia Tech CS 7633 Human-Robot Interaction** (Sonia Chernova, RAIL lab; School of Interactive Computing) — case studies, metrics & evaluation, engagement, speech/emotion, collaborative task execution & decision-making authority, learning-from-demonstration, ethics. **USC — Maja Matarić** coined & leads **socially assistive robotics (SAR)** (Interaction Lab; long-term personalized interaction for health/rehab). **UW — Maya Cakmak, Human-Centered Robotics Lab** (end-user programming, teaching robots, assistive HRI; CSE HRI course + capstone). |
| **Strong / specialized** | **Cornell · Tufts · Yale · UT Austin · (EU) Twente · KTH · Bielefeld · Plymouth** | **Cornell** — Guy Hoffman (HRC² Lab) + Malte Jung (Information Science); dedicated **"Introduction to HRI"** course. **Tufts** — Matthias Scheutz (cognitive/verbal HRI). **Yale** — Scassellati (social robots). **UT Austin** — Andrea Thomaz (interactive robot learning). **EU:** **Univ. of Twente MSc Robotics — dedicated "Human-Robot Interaction & Social AI" specialisation** (the clearest niche-named master's track); **KTH MSc Systems, Control & Robotics** (Iolanda Leite, social robotics); **Bielefeld CITEC** (Eyssel — social psychology of HRI); **Plymouth/Ghent** (Belpaeme, cognitive/social robotics). |

### Undergraduate — strongest for this niche `✓`
HRI rewards a **robotics + HCI/cognitive-science** foundation more than pure ME/EE, so the strongest UG homes pair a robotics core with a serious human-facing school:
- **CMU** — uniquely offers **16-467 as an undergraduate course** (rare dedicated UG HRI), plus RI + HCII; the standout.
- **Georgia Tech** — **School of Interactive Computing** (HCI + robotics threads) feeds CS 7633.
- **UW (Allen School)** — human-centered robotics + strong HCI (Cakmak).
- **Cornell** — **Information Science** + robotics (Hoffman/Jung), an HRI-friendly UG path.
- **MIT** (6-4 + Media Lab UROPs), **Tufts** (CS + cognitive science) round out.

---

## 2. Certifications & MOOCs for this niche `✓`

- **edX "Human-Robot Interaction" Professional Certificate — University of Canterbury (Christoph Bartneck).** Two self-paced courses: **"Introduction to Human-Robot Interaction"** + **"Methods and Application in Human-Robot Interaction."** Covers anthropomorphism, spatial/nonverbal/verbal interaction, emotion, and **how to design & run an HRI user study**. The single most niche-relevant MOOC. `✓`
- **Bartneck, Belpaeme, Eyssel, Kanda, Keijsers & Šabanović — *Human-Robot Interaction: An Introduction*** (Cambridge, 2nd ed.). The field's **standard textbook**, chapters free at `human-robot-interaction.org`. De-facto curriculum anchor for HRI courses worldwide.
- **Universal Robots Academy** — free online **cobot** e-learning (55,000+ users, 130+ countries) + the **first IACET-accredited (CEU) cobot Core/Education certification** for cobot programming & deployment. The applied-cobot gold standard; vendor peers: **KUKA College** (LBR iiwa sensitive robot), **FANUC CRX**, **ABB YuMi** academies.
- **Collaborative-robot safety credentials (safety of human-adjacent operation):** **A3 (RIA) robot-safety training** on **ISO 10218 / ISO/TS 15066 & ANSI/A3 R15.06-2025** (power-&-force-limiting, speed-&-separation-monitoring, hand-guiding, biomechanical thresholds, risk assessment); **A3 Certified Robot Integrator** program (organization-level); **TÜV Rheinland Functional Safety for Machinery Engineer** (ISO 13849-1, IEC 62061) for the safety-control layer.
- **Substrate (from grounding-ref, not niche-specific):** Northwestern **Modern Robotics** and **Penn Robotics** (Coursera/edX) for the kinematics/perception base; **Hugging Face Deep RL** for the learning-from-humans layer.

---

## 3. Subject List (grounded in real syllabi) `✓`
Grouped; annotated with representative courses.

**Foundational maths & CS**
- **Probability, statistics & experimental design / hypothesis testing** — *unusually central here (HRI validates via human-subjects studies)* — *CMU 16-467 (study design + data analysis), GT CS 7633 (Metrics & Evaluation)*
- **Python + ROS/ROS 2**, intro ML — *UW CSE, CMU 16-467 term project*
- (linear algebra, probability core inherited from backbone)

**Core robotics**
- **Human sensing / perception for HRI** — pose, gaze, gesture, activity & speech recognition — *GT CS 7633, CMU 16-467*
- **Motion planning & (social) navigation** — *CMU 16-467 (social navigation)*
- **Manipulation & physical contact basics** — *feeds pHRI below*

**Niche-specific**
- **HRI foundations, taxonomy & autonomy levels; interaction paradigms** — *Bartneck text, CMU 16-467, GT CS 7633*
- **Verbal & nonverbal communication** (gaze, gesture, proxemics, emotion expression, implicit signals) — *CMU 16-467, GT CS 7633, edX*
- **Anthropomorphism & social-robot design** (embodiment, the "uncanny valley") — *edX, GT CS 7633*
- **Trust, transparency, legibility & predictability of robot motion** — *Berkeley (Dragan), CMU 16-467 (trust & persuasion)*
- **Intent recognition / theory-of-mind / plan-&-goal inference** (Bayesian inference, MDPs) — *CMU 16-467 (MDPs + intent inference), Berkeley*
- **Shared autonomy & assistive teleoperation** (blending human input with autonomy, latent actions) — *Berkeley (Dragan), Stanford CS 333*
- **Human-robot teaming & collaboration** — task allocation, scheduling, decision-making authority, mixed-initiative — *MIT (Shah), GT CS 7633*
- **Learning from humans** — learning-from-demonstration/imitation, learning from preferences/feedback, active & interactive learning, end-user programming — *GT CS 7633 (LfD), Berkeley, UW (Cakmak)*
- **Social & socially-assistive robotics** — affect, engagement, long-term personalization — *USC (Matarić), GT*
- **HRI research methods** — user studies, Wizard-of-Oz, IRB/ethics, standardized metrics (Godspeed), qualitative + quantitative analysis — *edX Methods course, CMU 16-467, GT CS 7633*
- **Cobot safety engineering** — ISO 10218/ISO/TS 15066, **speed-&-separation-monitoring**, **power-&-force-limiting**, hand-guiding, biomechanical injury limits, risk assessment; functional safety (ISO 13849) — *A3/RIA, TÜV, NIST*
- **Physical HRI (pHRI)** — compliant/impedance control for contact safety, collision detection & reaction — *links to A4 control niche (DLR/Albu-Schäffer)*

**Frontier / advanced**
- **LLM/VLM-driven interaction & language grounding** for conversational, instructable robots — *2024–26 "HRI in the age of LLMs" literature*
- **Learning human reward/preferences** (RLHF-style, inverse RL for interaction) — *Berkeley / Stanford*
- **Adjustable / mixed-initiative autonomy & explainable robot behavior** — *MIT (Shah), CMU*
- **Multimodal social-signal processing & affective computing** — *USC, Bielefeld*
- **Trust calibration, value alignment & safe interaction; ethics & societal impact** — *CMU 16-467 (Nourbakhsh ethics lecture), GT CS 7633*
- **Long-term interaction, adaptation & personalization** (SAR at deployment) — *USC*

---

## 4. Niche-specific eligibility adjustment `✓`
This is the **only** AI-for-robotics niche where **non-engineering, human-science degrees become first-class**. Relative to the shared A.1/A.2 tiers:

**Rise in value**
- **HCI / Human-Computer Interaction → Tier 1 (unique to this niche).** Interaction design, evaluation, and user studies are the daily work; CMU HCII / GT Interactive Computing pedigrees are prime signals.
- **Cognitive Science / (experimental & social) Psychology → rise from "not typically counted" to *valued-with-evidence*.** Theory-of-mind, trust, social perception, and study design are core (the USC/Bielefeld model).
- **Design / Interaction Design → rise** (social-robot embodiment and interaction).
- **Human Factors / Ergonomics & Industrial/Safety Engineering → rise for the cobot sub-pole** (physical-HRI, functional safety, workspace ergonomics).
- **ME / Mechatronics → rise for cobots/pHRI** (compliant control, contact safety) — though less than in the manipulation/control niches.
- **CS / AI stays Tier 1** (perception, human modeling, learning-from-humans, planning, LLM interaction).

**Fall / need extra evidence**
- **Pure hardware-EE or pure controls, with no human-subjects, HCI, or ML exposure → less differentiated.** Fine for the cobot-safety/pHRI hardware layer, under-prepared for the interaction/social core without evidence.
- **A CS/AI grad still needs a signal** (an HCI course, a user study, or human-modeling/learning-from-humans work) to be credible on the social side.

**Net:** the "big three" (CS+EE+ME) **gains a fourth leg — HCI/Cognitive Science** — and splits into two hiring poles: **(a) social/assistive/interactive HRI** tilts *CS + HCI + CogSci/Psych*; **(b) collaborative-robot/pHRI/safety** tilts *ME/Mechatronics + Human-Factors + controls*. A psychology or design degree — nearly disqualifying elsewhere in robotics — can be a genuine asset here.

---

## Sources (primary, 2024–2026)
- CMU 16-467 Human-Robot Interaction — https://www.cs.cmu.edu/~reids/16-467/ ; Spring 2025 (Erickson) — http://zackory.com/16467-25/ ; Admoni teaching — https://hennyadmoni.com/teaching/
- Stanford CS 333 Safe & Interactive Robotics / CS 237B (Sadigh) — https://dorsa.fyi/teaching/
- UC Berkeley "Algorithmic Foundations of HRI" (Dragan) — https://people.eecs.berkeley.edu/~anca/AHRI-F2016.html ; InterACT — https://people.eecs.berkeley.edu/~anca/
- Georgia Tech CS 7633 HRI (Chernova) — https://faculty.cc.gatech.edu/~chernova/CS7633/syllabus.html
- MIT Interactive Robotics Group (Shah) — https://interactive.mit.edu/ ; Personal Robots Group (Breazeal) — https://robots.media.mit.edu/
- USC socially assistive robotics (Matarić) — https://robotics.usc.edu/~maja/bio.html
- UW Human-Centered Robotics Lab (Cakmak) — https://www.cs.washington.edu/people/faculty/maya-cakmak/
- Cornell HRI (Hoffman / Taylor course) — https://hrc2.io/ ; https://hriclass.cis.cornell.edu/
- Univ. of Twente MSc Robotics — HRI & Social AI — https://www.utwente.nl/en/education/master/programmes/robotics/specialisations/human-robot-interaction-social-ai/ ; KTH Systems, Control & Robotics — https://www.kth.se/en/studies/master/systems-control-robotics/
- edX HRI Professional Certificate (Univ. Canterbury / Bartneck) — https://www.edx.org/certificates/professional-certificate/ucx-human-robot-interaction ; textbook (free) — https://www.human-robot-interaction.org/ ; Cambridge — https://www.cambridge.org/9781108735407
- Universal Robots Academy / cobot certification — https://www.universal-robots.com/about-universal-robots/news-centre/universal-robots-launches-first-collaborative-robot-certifications-for-education/
- ISO/TS 15066 — https://www.iso.org/standard/62996.html ; A3 ISO/TS 15066 & R15.06 — https://www.automate.org/robotics/blogs/the-iso-ts-15066-safety-standard ; A3 Certified Robot Integrator — https://www.automate.org/robotics/robotics-certifications/robotic-integrator-certification-program ; TÜV Functional Safety for Machinery Engineer — https://www.tuv.com/landingpage/en/robotics/
- Safe pHRI (SSM + PFL) — https://ieeexplore.ieee.org/abstract/document/9143390 ; NIST SSM — https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=914783
