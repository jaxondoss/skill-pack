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

## Open Generative AI: `open-generative-ai` skill

Built for this pack from [Anil-matcha/Open-Generative-AI](https://github.com/Anil-matcha/Open-Generative-AI) at
`00132ec` (MIT, see `.claude/skills/open-generative-ai/LICENSE`). That repo is a studio app, not a skill, so this
skill calls the API the app uses, **MuAPI** (`api.muapi.ai`), directly:

- `SKILL.md`: the submit → poll → download flow, how to build a request, and how to read errors.
- `references/video-models.md`: 111 text-to-video, 182 image-to-video and 15 lip-sync models (Veo 3.1, Kling 3.0,
  Sora 2, Seedance 2.0, Hailuo, Wan…), each with its endpoint and allowed aspect ratio, duration, resolution and media
  fields, generated from the app's `models.js`.
- `scripts/muapi.mjs`: a dependency-free Node 18+ client (`generate`, `upload`, `result`, `balance`).

**Needs a `MUAPI_API_KEY`, and generations spend MuAPI credits.** Cloud sessions also need `api.muapi.ai` allowed by
the environment's network policy.
