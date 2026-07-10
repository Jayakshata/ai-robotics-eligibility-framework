# `.claude/` — portable Claude Code memory

Claude Code stores project memory **outside the repo**, at
`~/.claude/projects/<project-path-slug>/memory/`. It therefore does *not* travel
with a `git clone`, and a session on a new machine starts cold.

`memory/` here is a checked-in copy so it does travel. It is **not** loaded
automatically — Claude Code reads the store under `~/.claude`, not this folder.

## Use it on a new machine

```bash
git clone https://github.com/Jayakshata/ai-robotics-eligibility-framework.git
cd ai-robotics-eligibility-framework
.claude/install-memory.sh --dry-run   # check where it will land
.claude/install-memory.sh             # install
```

The destination is derived from the absolute path you cloned into (every
non-alphanumeric character becomes `-`), so it works regardless of where the
repo lives. Existing memory at the destination is backed up, never clobbered.

## Keeping it current

The checked-in copy is a snapshot. After a session that changes memory, refresh it:

```bash
cp ~/.claude/projects/"$(pwd | sed 's/[^a-zA-Z0-9]/-/g')"/memory/*.md .claude/memory/
```

## What may go in here

This repo is **public**. Memory is written for Claude, not for readers, and can
pick up things that should not be published — a personal email address was
removed from it on 2026-07-10. Before committing a memory refresh, check for:

- email addresses, tokens, API keys, credentials
- anything characterising a person rather than the work (see the copy rule in
  `HANDOFF.md`)
- customer names or commercial terms that are not already public
