# skill-pack

Claude Code skills and plugins that load in any Claude Code session (cloud or local) that opens this repo.

## Ruflo: `ruflo-core` plugin

[ruvnet/ruflo](https://github.com/ruvnet/ruflo) is a multi-agent orchestration framework. `.claude/settings.json`
registers its plugin marketplace (`ruvnet/ruflo`) and enables only the foundation plugin, `ruflo-core@ruflo`
(MCP server with memory, swarm, agent and hook tools; 4 agents; 5 skills). Its 30+ other plugins are available
from the same marketplace but not enabled. The plugin is fetched from GitHub when a session starts, so it tracks
Ruflo's latest version (audited at `be9c767`).

What it does once loaded:

- **Hooks on every step**: runs before and after each shell command and file edit, before compaction and when a
  session ends. Hook output is hidden and the hooks always report success. Commands and edited files are logged to a
  local database.
- **Code from npm**: if Ruflo isn't installed locally, its MCP server and hooks download and run the newest published
  version (`@claude-flow/cli@latest`, `ruflo@latest`).
- **GitHub**: its GitHub tools use whatever `gh`/git credentials the session has and can merge and close pull requests.
- **Chat history**: its memory tools can read `~/.claude/projects`, where Claude Code stores transcripts.
- **Network**: has built-in endpoints at `funnel.ruv.io` and `x.ruv.io`.

To turn it off, set `"ruflo-core@ruflo": false` in `.claude/settings.json` (or delete the Ruflo entries).

## OmniRoute: 46 agent skills

Copied from [diegosouzapw/OmniRoute](https://github.com/diegosouzapw/OmniRoute) `skills/` at `8ad6b1c4` into
`.claude/skills/` (MIT, see `.claude/skills/OMNIROUTE-LICENSE`). They're markdown instructions only, no scripts:

- `omni-*` (23): calling an OmniRoute server's REST API (auth, providers, models, routing combos, API keys, usage,
  budgets, cache, compression, webhooks and more).
- `cli-*` (21): using the `omniroute` command-line tool.
- `config-codex-cli` and `ponytail`.

**These only work against a running OmniRoute server**, which isn't set up here. OmniRoute is an AI gateway: every
prompt and piece of code sent through it passes through that server, and it stores your provider API keys.

## Design and browser packs

Copied from upstream (no `.git`), licenses kept beside each copy. Skills go in `.claude/skills/`; everything else
from each repo is kept verbatim in `vendor/<repo>/`. Upstream `CLAUDE.md` files and `.claude/` folders in `vendor/`
are renamed (`UPSTREAM-CLAUDE.md`, `.claude-upstream/`) so their maintainer instructions don't load in this repo.

| Upstream | Commit | License | Where |
| --- | --- | --- | --- |
| [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) | `f624f37` | MIT (`.claude/skills/TASTE-SKILL-LICENSE`) | 14 skills in `.claude/skills/`, rest in `vendor/taste-skill/` |
| [vercel-labs/web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines) | `434b7f9` | MIT | `.claude/skills/web-interface-guidelines/` (+ `vendor/`) |
| [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) | `3b60532` | MIT | `.claude/skills/design-md-library/` |
| [microsoft/playwright-cli](https://github.com/microsoft/playwright-cli) | `b85c7a7` | Apache-2.0 | `.claude/skills/playwright-cli/`, rest in `vendor/playwright-cli/` |
| [hardikvasa/google-images-download](https://github.com/hardikvasa/google-images-download) | `9057dad` | MIT | `vendor/google-images-download/` (not a skill) |

- **taste-skill** (art direction for frontend work): `taste-skill` (`design-taste-frontend`, the main one, with
  references, a library of researched directions, and scripts), plus `taste-skill-v1`, `taste-skill-v2-experimental`,
  `gpt-tasteskill`, `soft-skill`, `minimalist-skill`, `brutalist-skill`, `redesign-skill`, `image-to-code-skill`,
  `imagegen-frontend-web`, `imagegen-frontend-mobile`, `brandkit`, `stitch-skill`, `output-skill`. Its scripts are
  optional Node tools: `inspect.mjs` launches a local Chromium to check a page; `assets.mjs` fetches images from open
  collections.
- **web-interface-guidelines** and **design-md-library** don't ship a `SKILL.md` upstream; each has a short wrapper
  `SKILL.md` here that points at the unchanged upstream files.
- **playwright-cli** needs the `playwright-cli` command (`npm install -g @playwright/cli`), which isn't installed by
  this repo.
- **google-images-download** is a Python library and CLI that scrapes Google Images, kept for reference only. It
  isn't installed, depends on Google's page markup (the upstream project has long been unmaintained and often
  breaks), and scraping may conflict with Google's terms.
