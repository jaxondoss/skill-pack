---
name: web-interface-guidelines
description: Review or build web UI against Vercel's Web Interface Guidelines (accessibility, focus, forms, animation, typography, content handling, performance, touch, safe areas, theming, i18n, hydration, copy). Use when reviewing UI code for compliance, auditing a page or component, or as a checklist while building interface code.
---

# Web Interface Guidelines (Vercel)

Upstream: [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines) (MIT, see `LICENSE`).
This folder holds the upstream files unchanged; this SKILL.md is only a wrapper so Claude Code loads them as a skill.

- `command.md`: the review rules and output format. **Read it first.** When asked to review files, check them against
  every rule and report findings grouped by file as `file:line - issue`, terse, no preamble.
- `AGENTS.md`: the same guidelines written for agents building UI (MUST / SHOULD / NEVER).
- `README.md`: upstream overview and install notes.

A project's own rules win where they conflict (for example its copy style, casing, or punctuation rules).
