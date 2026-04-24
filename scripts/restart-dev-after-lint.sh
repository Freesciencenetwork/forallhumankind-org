#!/usr/bin/env bash
# Run ESLint; if it passes, stop the Next dev server on PORT (if any) and start a fresh one.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

PORT="${PORT:-3000}"

echo "==> npm run lint"
npm run lint

if command -v lsof >/dev/null 2>&1; then
  PIDS="$(lsof -ti tcp:"$PORT" -sTCP:LISTEN 2>/dev/null || true)"
  if [ -n "${PIDS}" ]; then
    echo "==> Stopping listener(s) on port ${PORT}: ${PIDS}"
    # Try graceful stop first
    kill ${PIDS} 2>/dev/null || true
    sleep 0.75
    PIDS="$(lsof -ti tcp:"$PORT" -sTCP:LISTEN 2>/dev/null || true)"
    if [ -n "${PIDS}" ]; then
      echo "==> Force killing remaining PIDs: ${PIDS}"
      kill -9 ${PIDS} 2>/dev/null || true
      sleep 0.25
    fi
  else
    echo "==> No process listening on port ${PORT}"
  fi
else
  echo "==> lsof not found; skip port cleanup (install lsof or stop dev server manually)"
fi

echo "==> npm run dev (port ${PORT})"
exec npm run dev -- -p "${PORT}"
