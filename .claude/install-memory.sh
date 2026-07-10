#!/usr/bin/env bash
#
# Install this repo's checked-in Claude memory into the local Claude Code
# memory store, so a fresh `git clone` on a new machine starts with the
# project's accumulated context instead of cold.
#
# Claude Code keys memory by PROJECT DIRECTORY, not by repo. The directory it
# uses is the project's absolute path with every non-alphanumeric character
# replaced by '-':
#
#     /home/dee/Desktop/AI criterion  ->  -home-dee-Desktop-AI-criterion
#
# so the destination is computed from wherever you cloned to. Nothing is
# overwritten without a timestamped backup.
#
# Usage:
#   .claude/install-memory.sh              install
#   .claude/install-memory.sh --dry-run    show what would happen
#
set -euo pipefail

DRY_RUN=0
[[ "${1:-}" == "--dry-run" ]] && DRY_RUN=1

REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC="$REPO/.claude/memory"
SLUG="$(printf '%s' "$REPO" | sed 's/[^a-zA-Z0-9]/-/g')"
CLAUDE_DIR="${CLAUDE_CONFIG_DIR:-$HOME/.claude}"
DEST="$CLAUDE_DIR/projects/$SLUG/memory"

if [[ ! -d "$SRC" ]]; then
  echo "error: no memory to install at $SRC" >&2
  exit 1
fi

echo "repo   : $REPO"
echo "slug   : $SLUG"
echo "source : $SRC"
echo "dest   : $DEST"
echo

if [[ $DRY_RUN -eq 1 ]]; then
  echo "[dry run] would install:"
  for f in "$SRC"/*.md; do echo "  $(basename "$f")"; done
  [[ -d "$DEST" ]] && echo "[dry run] existing memory at dest WOULD BE BACKED UP first"
  exit 0
fi

# Back up anything already there, rather than clobbering another session's work.
if [[ -d "$DEST" ]] && compgen -G "$DEST/*.md" >/dev/null; then
  STAMP="$(date +%Y%m%d-%H%M%S)"
  BACKUP="$DEST.backup-$STAMP"
  cp -r "$DEST" "$BACKUP"
  echo "backed up existing memory -> $BACKUP"
fi

mkdir -p "$DEST"
for f in "$SRC"/*.md; do
  cp "$f" "$DEST/$(basename "$f")"
  echo "installed $(basename "$f")"
done

echo
echo "done. Claude Code will load MEMORY.md from $DEST on the next session in this directory."
