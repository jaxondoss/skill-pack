# Local notes (skill-pack)

- Upstream: https://github.com/Gamezxz/pixel-art-studio, MIT, commit f8c2466. Copied unchanged; the full repo (with docs/ GIFs) is in `vendor/pixel-art-studio/`.
- SKILL.md and the examples hardcode `sys.path.insert(0, "/Users/game/Projects/.claude/skills/pixel-art-studio/scripts")`. In this pack the scripts live at `<skill-pack>/.claude/skills/pixel-art-studio/scripts` (cloud sessions: `/home/user/skill-pack/.claude/skills/pixel-art-studio/scripts`). Build scripts should read the path from the `PIXELSTUDIO` environment variable and fall back to that location.
- Needs Pillow only (`python3 -c "import PIL"`). No network, no API key.
- Its "learning" feature writes study cards into this skill folder (`references/learned/`). Its conventions say to `open` deliverables; there is no GUI in cloud sessions, so read the preview PNG instead.
