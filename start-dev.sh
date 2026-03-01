#!/bin/bash
export PATH="/tmp/node-v20.11.1-darwin-arm64/bin:$PATH"
cd "$(dirname "$0")"
exec npx next dev --port 3001
