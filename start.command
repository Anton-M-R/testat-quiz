#!/bin/bash
# Doppelklick im Finder startet das Quiz.
cd "$(dirname "$0")" || exit 1
exec python3 server.py
