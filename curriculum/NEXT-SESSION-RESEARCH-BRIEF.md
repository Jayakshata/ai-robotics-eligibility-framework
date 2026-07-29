# Next session — placement verification research brief

**Written:** 29 July 2026 · **Why:** this session exhausted its 200 web searches on the syllabus validation pass. The placement claim is the last unverified piece.

> **How to use this:** start a fresh session in this repo and paste the section below marked **THE ASK**. Everything above it is context the new session needs.

---

## Where things stand

Three programmes are designed, validated and published. Nothing about the syllabus needs re-opening.

| Programme | Hours | Calendar | Award | Status |
|---|---:|---|---|---|
| PG Diploma in Applied AI for Industrial Robotics | 1,200 | 48 weeks | Loyola College (autonomous, UGC) | Designed, verified |
| Engineer Training | 810 | 26 weeks | CoE certificate + vendor certs | Designed, verified |
| Automation Uptime Technician (post-ITI) | 1,215 | 32 weeks | 2 × NSQF Level 4 `⚠` | Designed, verified |

**Key files**

- `curriculum/pages/pg-diploma-syllabus.html` — diploma syllabus, 24 modules, 88 submodules, 8 exit roles, 10 employer categories
- `curriculum/pages/iti-lesson-plan.html` — technician syllabus, 24 modules, 101 submodules, 48-scenario fault library, 8 exit roles, 8 employer categories
- `curriculum/VALIDATION-REPORT.md` — the 13-agent research + adversarial validation, with sources
- `curriculum/syllabus-architecture.md` · `annexure-syllabus-and-lab.md` · `iti-operator-technician-programme.md` — the underlying design documents
- `curriculum/Annexure-A-Syllabus-and-Lab.pdf` / `.docx` — print deliverables
- `curriculum/build/build-all.sh` — rebuilds the PDF and DOCX from the markdown

**Published artifacts** (private, owned by the user)

- PG Diploma syllabus — `https://claude.ai/code/artifact/b7746ce6-f077-4b66-87b6-2db55a6624a8`
- ITI technician syllabus — `https://claude.ai/code/artifact/71a532b6-679c-4259-911c-c08b48506f60`
- Programme design (both tiers) — `https://claude.ai/code/artifact/62140c7f-3af9-46f5-b544-8c6dfdd6d019`
- Validation report — `https://claude.ai/code/artifact/360e1478-de95-41b9-8baa-ea7a97961ee2`

To update any of these, republish the same file path with the artifact URL passed as `url`.

---

## THE ASK

Verify the placement claim on both syllabus pages against real job postings, then correct the pages.

Every employer block on both pages currently carries a **Verified** or **To verify** flag. Most are *To verify* — assembled from sector knowledge, not from live vacancies. That is not good enough for a prospectus or a placement promise.

### 1. Verify the 16 role titles against live postings

**PG Diploma exit roles (8):** Robotics Application Engineer · Controls / Automation Engineer · Machine Vision Engineer · Manufacturing Data / Predictive Maintenance Engineer · Applied AI Engineer (Manufacturing) · Simulation / Digital Twin Engineer · Systems Integration / Commissioning Engineer · Robot Service Engineer (OEM)

**ITI technician exit roles (8):** Automation Cell Operator · Robot Operator / Robot Technician · Automation Maintenance Technician · PLC / Panel Maintenance Technician · Field Service Technician · Line / Shift Maintenance Technician · Installation & Commissioning Assistant · *(plus the progression route into the engineer track)*

For each title, establish from **live advertisements** — Naukri, Indeed India, LinkedIn, apna.co, company career pages, and the same for global postings:

- Does the title actually exist as advertised, and under what alternative names?
- **Stated minimum qualification.** This is the critical one. Where a B.E. or B.Tech is demanded, is a PG Diploma accepted? Where an ITI NTC is demanded, which trades are named?
- Years of experience demanded for entry level — and whether "fresher" postings exist at all
- The stated skills list, verbatim
- Salary band, if published
- Volume of live postings in Tamil Nadu, in India, and globally

### 2. Score each role against the syllabus, module by module

Produce a coverage table: for each role, which modules deliver each stated requirement, and **what the syllabus does not cover**. The gaps matter more than the matches — they are what the next revision fixes.

### 3. Verify the employer lists

Confirm or remove each named company. Categories currently on the pages:

*Diploma* — robot manufacturers · system integrators · automotive OEMs and tier-1 · electronics manufacturing · machine vision vendors · automation and digital-twin platform vendors · warehouse and logistics automation · industrial AI companies · global capability centres · heavy engineering and FMCG

*ITI* — automotive plants and tier-1 · system integrators · robot manufacturers (field service) · electronics manufacturing · FMCG, food and pharma · warehouse and logistics · heavy engineering and process · automation service and AMC contractors

Already verified in the earlier research pass, do not re-check: FANUC India academy centres (Chennai, Coimbatore, Bengaluru, Pune, Manesar, Ahmedabad, Rajkot) · Yaskawa India Academy (Chennai, Pune, Bengaluru, Gurugram, Gujarat) · Siemens presence in Tamil Nadu via TANSAM and the t-SDI network · Delta Electronics running a TNSDC robotics CoE at Bargur · Kaustya Robotics and IRATI/WO Group (Pune integrators training ITI graduates).

### 4. Answer the one question the whole claim turns on

**Do global capability centres and OEM engineering teams accept a PG Diploma where they advertise for a B.E.?** These are the highest-paying destinations and the most degree-sensitive. If the answer is no, the diploma's positioning changes — and it is better to know now.

### Rules for this research

- Mark every finding **VERIFIED** with a URL, **LIKELY**, or **UNVERIFIED**. "I could not confirm this" is an acceptable answer; a confident wrong number is not.
- Job-board counts move constantly — record the date of every count.
- Do not extrapolate a global claim from Indian postings, or vice versa. Keep them separate.
- The earlier validation pass found that the most damaging errors were confident claims about schemes and qualifications that turned out not to exist. Apply the same suspicion here.

### Deliverable

Update both syllabus pages so every employer block is **Verified** with a source, or removed. Add the role-to-module coverage table. Then republish both artifacts to their existing URLs using the `url` parameter.

---

## Still open elsewhere (not this session's job)

From `VALIDATION-REPORT.md` §6, unresolved and needing a phone call rather than a search:

- Trainee liability and insurance on a live production cell; written customer consent
- Tamil Nadu electrical licensing constraints on panel work by an unlicensed graduate
- Current ISO 10218 edition
- Which Sector Skill Council qualification the technician tier maps to — **name no QP code until confirmed in writing**, the published lists have colliding codes
- Whether TNSDC would sponsor a new NSQC qualification, as Karnataka's skill corporation did in 2022
- Placement outcomes of Tamil Nadu's 71 Industry 4.0 ITI centres — only intake is published, and this single answer decides how the pitch is framed
- BGR Neo's own technician-to-cell ratio from its installed base
