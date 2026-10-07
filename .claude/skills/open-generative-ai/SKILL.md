---
name: open-generative-ai
description: "Generate AI videos (text-to-video, image-to-video, lip sync) and images through the MuAPI gateway that powers Open Generative AI (Anil-matcha/Open-Generative-AI): 300+ video models including Veo 3.1, Kling 3.0, Sora 2, Seedance 2.0, Hailuo, Wan and Grok Imagine. Use when the user asks to generate a video or image with MuAPI or Open Generative AI, names one of these models through MuAPI, or wants the submit-and-poll API pattern that app uses. Needs MUAPI_API_KEY and network access to api.muapi.ai."
---

# Open Generative AI (MuAPI) generation

[Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) (MIT) is a self-hostable studio app.
All of its cloud generation goes through one REST gateway, **MuAPI** (`https://api.muapi.ai`). This skill
calls that gateway directly with the same request shapes the app sends, so no app install is needed.

Source of truth: `packages/studio/src/muapi.js` (client) and `packages/studio/src/models.js` (model
definitions), at commit `00132ec`.

## Requirements

- `MUAPI_API_KEY`: the key **value** from https://muapi.ai/access-keys (not its label). Generations spend
  MuAPI credits; check with `node scripts/muapi.mjs balance`.
- Outbound HTTPS to `api.muapi.ai` and to wherever the output files are hosted. In a Claude Code cloud
  session, the environment's network policy must allow these hosts. If a request fails with a proxy or
  connect error, say so and point the user to the environment's network settings. Don't retry in a loop.
- Node 18+ for the bundled script (it uses only built-in `fetch`).

## API in one page

| Step | Request |
|---|---|
| Auth | Header `x-api-key: $MUAPI_API_KEY` on every call. **Not** `Authorization: Bearer`. |
| Submit | `POST /api/v1/{endpoint}` with a JSON body → `{ "request_id": "..." }` |
| Poll | `GET /api/v1/predictions/{request_id}/result` every 2 s until `status` is `completed` / `succeeded` / `success` (done) or `failed` / `error` / `cancelled` (stop). Retry quietly on 5xx. |
| Output | First of `outputs[0]`, `url`, `output.url`. These are hosted URLs; download them to keep them. |
| Upload | `POST /api/v1/upload_file`, multipart field `file` → `{ "url": ... }`. Pass that URL as `image_url`, an `images_list` entry, `audio_url` and so on. |
| Balance | `GET /api/v1/account/balance` |

Video jobs often take 1–10 minutes. The app polls for up to 30 minutes (900 × 2 s).

## Bundled script

`scripts/muapi.mjs` implements the steps above:

```bash
S=.claude/skills/open-generative-ai/scripts/muapi.mjs

# Text-to-video, then download the result
node $S generate veo3.1-text-to-video \
  '{"prompt":"A red fox trotting through fresh snow at dawn, low tracking shot","aspect_ratio":"16:9","duration":8,"resolution":"1080p"}' \
  --out fox.mp4

# Image-to-video: upload a local start frame, then animate it
IMG=$(node $S upload ./frame.png)
node $S generate kling-v3.0-pro-image-to-video \
  "{\"prompt\":\"slow push-in, hair moving in the wind\",\"image_url\":\"$IMG\",\"duration\":5}" --out clip.mp4

# Resume a job that timed out locally (the job keeps running on MuAPI)
node $S result <request_id> --out clip.mp4
```

It prints JSON with `request_id`, `status` and `url` to stdout and progress to stderr. `--timeout-min`
defaults to 30.

## Building a request

1. **Pick the model.** Look it up in `references/video-models.md`: text-to-video (111), image-to-video
   (182) and lip sync (15), each with its endpoint and accepted values. If the user named no model, suggest
   a strong default and say which you picked:
   - Best quality with native audio: `veo3.1-text-to-video` / `veo3.1-image-to-video` (8 s, up to 4k).
   - Long or multi-shot clips: `kling-v3.0-pro-text-to-video` (3–15 s) or `openai-sora-2-pro-text-to-video` (up to 20 s).
   - Cheap drafts: `seedance-2-mini-text-to-video` or `veo3.1-lite-text-to-video`.
2. **Use only parameters that model accepts.** The payload is the prompt plus the model's own fields:
   `aspect_ratio`, `duration`, `resolution`, and sometimes `quality`, `mode`, `generate_audio`, `seed`.
   Use values from the model's row in the catalog. Leave out anything the row doesn't list; the API
   applies the defaults.
3. **Put media in the model's own field.** The "Media inputs" column gives the exact field name:
   `image_url` (single start frame), `images_list` (array of reference images), `last_image` or
   `end_image_url` (end frame), `video_files` or `videos_list`, `audio_url`. Upload local files first. For
   lip sync, send `image_url` or `video_url` plus `audio_url`.
4. **Write the prompt like a shot description.** Include subject, action, camera move, lighting and mood;
   for audio-capable models (Veo 3.x, Sora 2, Seedance 2.0), add sound or a quoted line of dialogue. Models
   marked "Prompt required" reject an empty prompt.
5. **Confirm before spending.** Before submitting, state the model, duration and resolution. For anything
   long, 4K or batched, check the balance first.

Image models (`t2iModels`, `i2iModels` in upstream `models.js`) use the same submit-and-poll flow, but
they aren't in the bundled catalog; look up their endpoint and fields there.

The catalog is a snapshot. For newer models or the full parameter schema (min/max, defaults,
descriptions), read the matching entry in upstream `models.js`. A model with no `endpoint` field uses its
`id` as the endpoint.

## Errors

- `401` / `403`: the key is missing, wrong, or the label was pasted instead of the value.
- `402` or a balance error: out of credits.
- `422` / `400` on submit: a parameter value isn't in the model's allowed set, or a required media field is
  missing. Re-check the catalog row.
- `status: failed` while polling: report `error` / `message` from the result. MuAPI may refund the credits;
  the result's `cost.refunded` field says whether it did.

## Not covered

The desktop app's local engines (sd.cpp, Wan2GP) and its workflow and agent studios aren't covered here.
For those, install the app itself (see the upstream README).
