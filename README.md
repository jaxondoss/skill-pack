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

## Process, security and pixel-art packs (2026-10-20)

Same convention as above: upstream copied without `.git`, licenses beside each copy, skills in `.claude/skills/`,
everything else in `vendor/<repo>/`, upstream `CLAUDE.md` renamed `UPSTREAM-CLAUDE.md`. Nothing was run, no plugin
was enabled, `.claude/settings.json` is unchanged.

| Upstream | Commit | License | Where |
| --- | --- | --- | --- |
| [obra/superpowers](https://github.com/obra/superpowers) | `bb92a77` | MIT | 14 skills in `.claude/skills/`, rest in `vendor/superpowers/` |
| [multica-ai/andrej-karpathy-skills](https://github.com/multica-ai/andrej-karpathy-skills) | `2c60614` | MIT (declared; no license text upstream, see `LICENSE-NOTE.md`) | `.claude/skills/karpathy-guidelines/` (+ `vendor/`) |
| [trailofbits/skills](https://github.com/trailofbits/skills) | `5c99c03` | CC BY-SA 4.0 (`ATTRIBUTION.md` in each skill) | 9 skills in `.claude/skills/`, whole marketplace in `vendor/trailofbits-skills/` |
| [Gamezxz/pixel-art-studio](https://github.com/Gamezxz/pixel-art-studio) | `f8c2466` | MIT | `.claude/skills/pixel-art-studio/` (+ `vendor/`) |
| [superdesigndev/superdesign-skill](https://github.com/superdesigndev/superdesign-skill) | `f9f05cd` | MIT | `vendor/superdesign-skill/`, plus a ready copy in `vendor/superdesign-skill-disabled/` (not active) |
| [superdesigndev/superdesign](https://github.com/superdesigndev/superdesign) | `49e2b9d` | Super Design License (mostly AGPL-3.0) | `vendor/superdesign/` (reference only) |

- **superpowers**: process skills (brainstorming, writing-plans, executing-plans, subagent-driven-development,
  test-driven-development, systematic-debugging, requesting/receiving-code-review, verification-before-completion,
  using-git-worktrees, finishing-a-development-branch, dispatching-parallel-agents, writing-skills,
  diagnosing-superpowers). Left out on purpose: the `using-superpowers` skill and the SessionStart hook, which make the
  agent invoke a skill before every reply in every session. The skills still mention each other as
  `superpowers:<name>`; here they are unnamespaced. Some skills tell the agent to run long plans without checking in,
  and `using-git-worktrees` runs dependency installs. The brainstorming visual companion loads a logo from
  primeradiant.com (set `SUPERPOWERS_DISABLE_TELEMETRY=1` to stop it).
- **karpathy-guidelines**: four coding-behaviour rules (think before coding, simplicity first, surgical changes,
  goal-driven execution). Markdown only.
- **Trail of Bits**: differential-review, sharp-edges, supply-chain-risk-auditor (queries package registries and
  advisory databases), codeql, semgrep, sarif-parsing (the static-analysis plugin; CodeQL and Semgrep must be
  installed to scan), property-based-testing, fp-check, agentic-actions-auditor. Not copied as skills: insecure-defaults
  (it ships commands and workflows, no skill), gh-cli (its hooks redirect web fetches to the gh CLI), and the smart
  contract, C/C++, Rust, firmware and other plugins. The plugins' agents and hooks are not active.
- **pixel-art-studio**: Claude draws pixel art through Python/Pillow build scripts (`scripts/pixelstudio.py`), with a
  see, critique, fix loop, palette locking and `pixelpipe.py` to clean generated images. Needs Pillow only. See
  `LOCAL-NOTES.md` for the scripts path in this pack.
- **superdesign**: the current skill drives the hosted superdesign.dev service. It needs a superdesign.dev login and
  credits, uploads UI source files, prompts and your messages (stored server-side), writes a `.superdesign/` folder into
  the project, runs setup on its own, and requires designing on its canvas before UI code. It is therefore **not
  active**. To turn it on, move `vendor/superdesign-skill-disabled/` to `.claude/skills/superdesign/` and run
  `npx @superdesign/cli@latest login`. The old IDE extension in `vendor/superdesign/` is archived and is never to be
  run: its defaults route prompts through the maintainers' logging proxy and start the claude CLI with permissions
  skipped.

## effortless (Claude Code mod, reference copy, not enabled)

[HeyCubit/effortless](https://github.com/HeyCubit/effortless) (`df5602e`, MIT, v1.71.0) picks the reasoning effort for
every prompt (Low for quick questions, High for hard jobs), shows a bar above the prompt with context fullness and how
long the prompt cache stays warm, offers one-click Handoff or compact, and summarizes compaction with Haiku 5.5. Its
code (without the website, docs media and the separate textless mod) is in `vendor/effortless/` for reference.

It is a plugin with a hooks module (`hooks/register.tsx`) that runs on every prompt, so it is not enabled here. It
sends each prompt to the judge: Haiku on your own Claude login by default; the optional `jev` judge sends prompts to
TypeSafe (`api.typesafe.ai`) only if you add a key. Cheaper-model switching is experimental and off by default. It also
checks GitHub for updates. To use it, run `claude plugin marketplace add HeyCubit/effortless` and
`claude plugin install effortless@effortless`, then `/reload-plugins`; settings via `/effortless settings`.
