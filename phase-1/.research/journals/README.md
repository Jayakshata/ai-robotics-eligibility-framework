# Workflow journals — agent provenance

Claude Code stores multi-agent workflow output under `~/.claude/projects/<slug>/subagents/`,
outside the repo, so it never survived a `git clone`. These are copies of the four
`journal.jsonl` files: **one record per agent, holding that agent's full return value.**

| File | Agents | What it produced |
|---|---:|---|
| `wf-phase0-deep-research.jsonl` | 105 | The verified deep-research pass behind the taxonomy. **Wrote no files** — its agents returned findings directly, so this journal is the *only* surviving record of that research. Its conclusions live in `master-niche-taxonomy.md`. |
| `wf-capabilities.jsonl` | 66 | Research → write for the 23 Axis-A capability profiles. |
| `wf-verticals-platforms.jsonl` | 48 | Research → write for the 16 vertical overlays and 10 platform bundles. |
| `wf-applied-ai.jsonl` | 44 | Research → write → adversarial-verify for the 13 applied-AI profiles. The verifier records list exactly which fabricated product and vendor names were caught and removed. |

## Format

JSON Lines. Two record types per agent:

- `{"type":"started", "agentId":…, "key":…}`
- `{"type":"result",  "agentId":…, "key":…, "result": <the agent's return value>}`

`result` is a string for prose-returning agents, or an object for agents that were given
a schema (research reports carry `file`, `findings`, `sources`, `uncertain`).

Read one with, e.g.:

```bash
python3 -c "import json;[print(json.loads(l)['result']) for l in open('wf-applied-ai.jsonl') if json.loads(l)['type']=='result']" | head
```

The raw agent conversations (~48 MB) are deliberately **not** committed. These journals hold
the returns, which is the part with evidentiary value.

## Coverage caveat

Three profiles have **no persisted research report** in `phase-1/.research/` — their reports
were never written to disk by the sessions that produced them:

- `manipulation-and-grasping` (no `.creds.md`, no `.trending.md`)
- `verticals/healthcare-surgical`
- `platforms/humanoid`

The profiles themselves are complete and cited. Absence of a report here does **not** mean the
claim was unresearched — but it does mean the trail stops at the profile.
