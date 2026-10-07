# Open Generative AI video model catalog

Generated from `packages/studio/src/models.js` in Anil-matcha/Open-Generative-AI at `00132ec`.
Endpoint is `POST https://api.muapi.ai/api/v1/<endpoint>`. Empty cells mean the model doesn't take that parameter.
Default values are in `models.js`; a range like `3–12` means any integer in it.

## Text-to-video (111)

| Model | Endpoint | Aspect ratio | Duration (s) | Resolution | Media inputs | Prompt required |
|---|---|---|---|---|---|---|
| Seedance 1.0 Lite | `seedance-lite-t2v` | 16:9, 9:16, 1:1, 4:3, 3:4, 9:21 | 3–12 | 480p, 720p, 1080p |  |  |
| Seedance 1.0 Pro | `seedance-pro-t2v` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 | 3–12 | 480p, 720p, 1080p |  |  |
| Seedance 1.0 Pro Fast | `seedance-pro-t2v-fast` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 | 2–12 | 480p, 720p, 1080p |  |  |
| Seedance 1.5 Pro | `seedance-v1.5-pro-t2v` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–12 | 480p, 720p, 1080p |  |  |
| Seedance v1.5 Pro Fast | `seedance-v1.5-pro-t2v-fast` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–12 | 720p, 1080p |  |  |
| Seedance 2.0 | `seedance-v2.0-t2v` | 16:9, 9:16, 4:3, 3:4 | 5, 10, 15 |  |  |  |
| Seedance 2.0 Extend | `seedance-v2.0-extend` |  | 5, 10, 15 |  | images_list, video_files |  |
| Kling 2.1 Master | `kling-v2.1-master-t2v` | 16:9, 9:16, 1:1 | 5–10 |  |  |  |
| Kling 2.5 Turbo Pro | `kling-v2.5-turbo-pro-t2v` | 16:9, 9:16, 1:1 | 5–10 |  |  |  |
| Kling 2.6 Pro | `kling-v2.6-pro-t2v` | 16:9, 9:16, 1:1 | 5, 10 |  |  |  |
| Kling O1 Pro | `kling-o1-text-to-video` | 16:9, 9:16, 1:1 | 5, 10 |  |  |  |
| Kling 3.0 Pro | `kling-v3.0-pro-text-to-video` | 16:9, 9:16, 1:1 | 3–15 |  |  |  |
| Kling 3.0 Standard | `kling-v3.0-standard-text-to-video` | 16:9, 9:16, 1:1 | 3–15 |  |  |  |
| Veo 3 | `veo3-text-to-video` | 16:9, 9:16 |  |  |  |  |
| Veo 3 Fast | `veo3-fast-text-to-video` | 16:9, 9:16 |  |  |  |  |
| Veo 3.1 | `veo3.1-text-to-video` | 16:9, 9:16 | 8 | 720p, 1080p, 4k |  |  |
| Veo 3.1 Fast | `veo3.1-fast-text-to-video` | 16:9, 9:16 | 8 | 720p, 1080p, 4k |  |  |
| Veo 3.1 Lite | `veo3.1-lite-text-to-video` | 16:9, 9:16 | 8 | 720p, 1080p, 4k |  |  |
| Runway Gen-3 | `runway-text-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 5, 8 | 720p, 1080p |  |  |
| Wan 2.1 | `wan2.1-text-to-video` | 16:9, 9:16 | 5–10 | 480p, 720p |  |  |
| Wan 2.2 | `wan2.2-text-to-video` | 16:9, 9:16 | 5–8 | 480p, 720p |  |  |
| Wan 2.2 Fast | `wan2.2-5b-fast-t2v` | 16:9, 9:16, 1:1 |  | 480p, 580p, 720p |  |  |
| Wan 2.5 | `wan2.5-text-to-video` | 16:9, 9:16 | 5–10 | 480p, 720p, 1080p | audio_url |  |
| Wan 2.5 Fast | `wan2.5-text-to-video-fast` | 16:9, 9:16 | 5–10 | 720p, 1080p | audio_url |  |
| Wan 2.6 | `wan2.6-text-to-video` | 16:9, 9:16 | 5, 10, 15 | 720p, 1080p | audio_url |  |
| Hunyuan | `hunyuan-text-to-video` | 16:9, 9:16, 1:1 |  |  |  |  |
| Hunyuan Fast | `hunyuan-fast-text-to-video` | 16:9, 9:16, 1:1 |  |  |  |  |
| PixVerse V4.5 | `pixverse-v4.5-t2v` | 16:9, 9:16, 1:1, 4:3, 3:4 | 5, 8 | 360p, 540p, 720p, 1080p |  |  |
| PixVerse V5 | `pixverse-v5-t2v` | 16:9, 9:16, 1:1, 4:3, 3:4 | 5–8 | 360p, 540p, 720p, 1080p |  |  |
| PixVerse V5.5 | `pixverse-v5.5-t2v` | 16:9, 9:16, 1:1, 4:3, 3:4 | 5, 8, 10 | 360p, 540p, 720p, 1080p |  |  |
| MiniMax Hailuo 02 Standard | `minimax-hailuo-02-standard-t2v` |  | 6, 10 | 768P |  |  |
| MiniMax Hailuo 02 Pro | `minimax-hailuo-02-pro-t2v` |  | 6 | 1080P |  |  |
| MiniMax Hailuo 2.3 Pro | `minimax-hailuo-2.3-pro-t2v` |  |  | 1080p |  |  |
| MiniMax Hailuo 2.3 Standard | `minimax-hailuo-2.3-standard-t2v` |  | 6, 10 |  |  |  |
| Sora | `openai-sora` | 16:9, 9:16, 1:1 |  | 480p, 720p, 1080p |  |  |
| Sora 2 | `openai-sora-2-text-to-video` | 16:9, 9:16 | 4, 8, 12, 16, 20 |  |  |  |
| Sora 2 Pro | `openai-sora-2-pro-text-to-video` | 16:9, 9:16 | 4, 8, 12, 16, 20 | 720p, 1080p |  |  |
| Vidu 2.0 | `vidu-v2.0-t2v` | 9:16 | 4 | 1080p |  |  |
| Ovi | `ovi-text-to-video` | 16:9, 9:16 |  |  |  |  |
| Grok Imagine | `grok-imagine-text-to-video` | 9:16, 16:9, 2:3, 3:2, 1:1 | 6–30 | 480p, 720p |  |  |
| LTX 2 Pro | `ltx-2-pro-text-to-video` |  | 6, 8, 10 |  |  |  |
| LTX 2 Fast | `ltx-2-fast-text-to-video` |  | 6, 8, 10, 12, 14, 16, 18, 20 |  |  |  |
| LTX 2 19B | `ltx-2-19b-text-to-video` | 16:9, 9:16 | 5–20 | 480p, 720p, 1080p |  |  |
| Veo 3.1 Extend | `veo3.1-extend-video` |  |  |  |  |  |
| Veo 3.1 4K | `veo3.1-4k-video` |  |  |  |  |  |
| Seedance 2 T2V | `seedance-v2.0-t2v` | 16:9, 9:16, 4:3, 3:4 | 5, 10, 15 |  |  |  |
| Seedance 2 Extend | `seedance-v2.0-extend` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list, video_files, audio_files |  |
| LTX 2.3 | `ltx-2.3-text-to-video` | 16:9, 9:16 | 5–20 | 480p, 720p, 1080p |  |  |
| Seedance 2 New T2V | `seedance-2.0-new-t2v` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| Grok Imagine Extend | `grok-imagine-extend` |  |  | 480p, 720p |  | yes |
| PixVerse V6 | `pixverse-v6-t2v` | 16:9, 4:3, 1:1, 3:4, 9:16, 2:3, 3:2, 21:9 | 1–15 | 360p, 540p, 720p, 1080p |  |  |
| Wan2.7 | `wan2.7-text-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 2–15 | 720p, 1080p | audio_url |  |
| Seedance 2 T2V 480P | `seedance-2.0-t2v-480p` | 16:9, 9:16, 4:3, 3:4 | 4–15 |  |  |  |
| Seedance 2 | `seedance-2-text-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| Seedance 2.0 Fast | `seedance-2-text-to-video-fast` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| Seedance 2 VIP | `seedance-2-vip-text-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| Seedance 2 VIP Text to Video Fast | `seedance-2-vip-text-to-video-fast` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| HappyHorse 1.0 1080P | `happy-horse-1-text-to-video-1080p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  |  |  |
| HappyHorse 1.0 720P | `happy-horse-1-text-to-video-720p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  |  |  |
| Veo 4 | `veo-4-text-to-video` | 16:9, 9:16, 1:1 | 5–30 |  |  |  |
| Seedance 2 VIP Text to Video 1080P | `sd-2-vip-text-to-video-1080p` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| Seedance 2 VIP Text to Video Fast 1080P | `sd-2-vip-text-to-video-fast-1080p` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| Kling 3.0 4K | `kling-v3.0-4k-text-to-video` | 16:9, 9:16, 1:1 | 3–15 |  |  |  |
| Vidu Q3 Pro | `vidu-q3-pro-text-to-video` | 16:9, 9:16, 4:3, 3:4, 1:1 | 1–16 | 360p, 540p, 720p, 1080p |  |  |
| Vidu Q3 Turbo | `vidu-q3-turbo-text-to-video` | 16:9, 9:16, 4:3, 3:4, 1:1 | 1–16 | 360p, 540p, 720p, 1080p |  |  |
| Vidu Q2 Pro | `vidu-q2-pro-text-to-video` | 16:9, 9:16, 1:1 | 2–8 | 720p, 1080p |  |  |
| Vidu Q2 Turbo | `vidu-q2-turbo-text-to-video` | 16:9, 9:16, 1:1 | 2–8 | 720p, 1080p |  |  |
| Seedance 2 VIP Extend | `sd-2-vip-extend` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list, video_files, audio_files |  |
| Seedance 2 VIP Extend 1080P | `sd-2-vip-extend-1080p` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list, video_files, audio_files |  |
| Kling 3.0 Omni Standard | `kling-v3.0-omni-standard-text-to-video` | 9:16, 16:9, 1:1 | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 |  |  |  |
| Kling 3.0 Omni Pro | `kling-v3.0-omni-pro-text-to-video` | 9:16, 16:9, 1:1 | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 |  |  |  |
| Kling 3.0 Omni 4K | `kling-v3.0-omni-4k-text-to-video` | 9:16, 16:9, 1:1 | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 |  |  |  |
| Gemini Omni Flash | `gemini-omni-text-to-video` | 16:9, 9:16 | 4, 6, 8, 10 | 720p, 1080p, 4k |  |  |
| Kling 3.0 Turbo Standard | `kling-v3-turbo-standard-text-to-video` | 16:9, 9:16, 1:1 | 3–15 |  |  |  |
| Kling 3.0 Turbo Pro | `kling-v3-turbo-pro-text-to-video` | 16:9, 9:16, 1:1 | 3–15 |  |  |  |
| Seedance 2.5 | `seedance-2.5-text-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.5 480p | `seedance-2.5-text-to-video-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.0 Mini | `seedance-2-mini-text-to-video` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–15 | 480p, 720p |  |  |
| HappyHorse 1.1 1080P | `happy-horse-1.1-text-to-video-1080p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  |  |  |
| HappyHorse 1.1 720P | `happy-horse-1.1-text-to-video-720p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  |  |  |
| Seedance 2 Mini Omni Reference | `seedance-2-mini-omni-reference` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–15 | 480p, 720p | images_list, video_files, audio_files | yes |
| Seedance 2 VIP Text to Video 4K | `sd-2-vip-text-to-video-4k` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| Seedance 2.5 Spicy | `seedance-2.5-spicy-text-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 | 480p, 720p, 1080p, 4K |  |  |
| Seedance 2 Spicy | `seedance-2-spicy-text-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| Seedance 2 Spicy Text to Video Fast | `seedance-2-spicy-text-to-video-fast` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  |  |  |
| Seedance 2 Mini Spicy | `seedance-2-mini-spicy-text-to-video` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–15 | 480p, 720p |  |  |
| MiniMax H3 | `minimax-h3-text-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 2k |  |  |
| MiniMax H3 Base FL2VA | `minimax-h3-open-text-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 480p, 768p |  |  |
| FLUX 3 | `flux-3-text-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 | 5–20 | 720p, 1080p |  |  |
| Wan 3.0 | `wan3.0-text-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4 | 2–30 | 480p, 720p, 1080p |  |  |
| Wan 3.0 Spicy | `wan3.0-spicy-text-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4 | 2–30 | 480p, 720p, 1080p |  |  |
| Seedance 2.5 1080p | `seedance-2.5-text-to-video-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.5 4K | `seedance-2.5-text-to-video-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.5 Intl | `seedance-2.5-intl-text-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.5 Intl 480p | `seedance-2.5-intl-text-to-video-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.5 Spicy 480p | `seedance-2.5-spicy-text-to-video-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.5 Intl 1080p | `seedance-2.5-intl-text-to-video-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.5 Spicy 1080p | `seedance-2.5-spicy-text-to-video-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.5 Intl 4K | `seedance-2.5-intl-text-to-video-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| Seedance 2.5 Spicy 4K | `seedance-2.5-spicy-text-to-video-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  |  |  |
| MiniMax H3 Text to Video LoRA | `minimax-h3-text-to-video-lora` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 3–15 | 480p, 768p |  |  |
| LTX 2.5 | `ltx-2.5-text-to-video` | 16:9, 9:16 | 5–20 | 720p, 1080p, 2k, 4k |  |  |
| Wan 3.0 Prime | `wan3.0-prime-text-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4 | 2–30 | 480p, 720p, 1080p |  |  |
| FLUX 3 Text to Video Draft | `flux-3-text-to-video-draft` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 | 5–20 |  |  |  |
| Gemini Omni 1.1 Flash | `gemini-omni-flash-1-1-text-to-video` | 16:9, 9:16 | 4, 6, 8, 10 | 720p, 1080p, 4k | image_urls, video_url |  |
| OpenAI Sora 2 Pro Storyboard | `openai-sora-2-pro-storyboard` | 16:9, 9:16 | 10, 15, 25 |  | images_list |  |
| Happy Horse 1 Text to Video | `happy-horse-1-text-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 | 720p, 1080p |  | yes |
| Happy Horse 1.1 Text to Video | `happy-horse-1.1-text-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 | 720p, 1080p |  | yes |
| MiniMax H3 Max Text to Video | `minimax-h3-max-text-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 480p, 768p, 1080p |  | yes |
| MiniMax H3 Max Turbo Text to Video | `minimax-h3-max-turbo-text-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 480p, 768p, 1080p |  | yes |
| Seedance 2 Mini Spicy Omni Reference | `seedance-2-mini-spicy-omni-reference` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–15 | 480p, 720p | images_list, video_files, audio_files | yes |

## Image-to-video (182)

| Model | Endpoint | Aspect ratio | Duration (s) | Resolution | Media inputs | Prompt required |
|---|---|---|---|---|---|---|
| AI Video Effects | `generate_wan_ai_effects` | 16:9, 9:16 | 5, 10 | 480p, 720p | image_url |  |
| Motion Controls | `generate_wan_ai_effects` | 16:9, 9:16 | 5, 10 | 480p, 720p | image_url |  |
| VFX | `generate_wan_ai_effects` | 16:9, 9:16 | 5, 10 | 480p, 720p | image_url |  |
| Veo 3 | `veo3-image-to-video` | 16:9, 9:16 |  |  | images_list | yes |
| Veo 3 Fast | `veo3-fast-image-to-video` | 16:9, 9:16 |  |  | images_list | yes |
| Runway Image To Video | `runway-image-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 5, 8 | 720p, 1080p | image_url |  |
| Wan2.1 Image To Video | `wan2.1-image-to-video` | 16:9, 9:16 | 5–10 | 480p, 720p | image_url | yes |
| Hunyuan Image To Video | `hunyuan-image-to-video` | 16:9, 9:16, 1:1 |  |  | image_url |  |
| Kling v2.1 Master I2V | `kling-v2.1-master-i2v` | 16:9, 9:16, 1:1 | 5–10 |  | image_url | yes |
| Kling 2.1 Standard | `kling-v2.1-standard-i2v` | 16:9, 9:16, 1:1 | 5–10 |  | image_url | yes |
| Kling 2.1 Pro | `kling-v2.1-pro-i2v` | 16:9, 9:16, 1:1 | 5–10 |  | image_url, last_image | yes |
| Wan2.2 Image To Video | `wan2.2-image-to-video` | 16:9, 9:16 | 5–8 | 480p, 720p | image_url, last_image | yes |
| Runway Act-Two | `runway-act-two-i2v` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 |  |  | image_url |  |
| Pixverse v4.5 I2V | `pixverse-v4.5-i2v` | 16:9, 9:16, 1:1, 4:3, 3:4 | 5, 8 | 360p, 540p, 720p, 1080p | images_list | yes |
| Vidu v2.0 I2V | `vidu-v2.0-i2v` | 16:9, 1:1 | 4 | 360p, 720p, 1080p | images_list | yes |
| Vidu Q1 Reference | `vidu-q1-reference` | 16:9, 9:16, 1:1 |  |  | images_list | yes |
| Minimax Hailuo 02 Standard I2V | `minimax-hailuo-02-standard-i2v` |  | 6, 10 | 512P, 768P | image_url, end_image_url | yes |
| Minimax Hailuo 02 Pro I2V | `minimax-hailuo-02-pro-i2v` |  | 6 | 1080P | image_url, end_image_url | yes |
| Video Effects | `video-effects` |  |  |  | image_url |  |
| Seedance Lite I2V | `seedance-lite-i2v` |  | 3–12 | 480p, 720p, 1080p | image_url, last_image | yes |
| Seedance Pro I2V | `seedance-pro-i2v` |  | 3–12 | 480p, 720p, 1080p | image_url | yes |
| Pixverse v5 I2V | `pixverse-v5-i2v` | 16:9, 9:16, 1:1, 4:3, 3:4 | 5–8 | 360p, 540p, 720p, 1080p | images_list | yes |
| Seedance 1.0 Lite Reference | `seedance-lite-reference-to-video` |  | 3–12 | 480p, 720p | images_list | yes |
| Wan2.1 Reference Video | `wan2.1-reference-video` | 16:9, 9:16 | 5–10 | 480p, 720p | images_list | yes |
| Kling v2.5 Turbo Pro I2V | `kling-v2.5-turbo-pro-i2v` |  | 5–10 |  | image_url | yes |
| Wan2.5 Image To Video | `wan2.5-image-to-video` |  | 5–10 | 480p, 720p, 1080p | image_url, audio_url | yes |
| Wan2.5 Image To Video Fast | `wan2.5-image-to-video-fast` |  | 5–10 | 720p, 1080p | image_url, audio_url | yes |
| Sora 2 | `openai-sora-2-image-to-video` | 16:9, 9:16 | 4, 8, 12, 16, 20 |  | images_list | yes |
| Ovi Image To Video | `ovi-image-to-video` |  |  |  | image_url |  |
| Sora 2 Pro | `openai-sora-2-pro-image-to-video` | 16:9, 9:16 | 4, 8, 12, 16, 20 | 720p, 1080p | images_list | yes |
| Motion 2.0 | `leonardoai-motion-2.0` | 16:9, 9:16 |  |  | image_url |  |
| Veo 3.1 | `veo3.1-image-to-video` | 16:9, 9:16 | 8 | 720p, 1080p, 4k | image_url, last_image | yes |
| Veo 3.1 Fast | `veo3.1-fast-image-to-video` | 16:9, 9:16 | 8 | 720p, 1080p, 4k | image_url, last_image | yes |
| Veo 3.1 Lite | `veo3.1-lite-image-to-video` | 16:9, 9:16 | 8 | 720p, 1080p, 4k | image_url, last_image | yes |
| Veo 3.1 Reference | `veo3.1-reference-to-video` |  | 8 | 720p, 1080p, 4k | images_list | yes |
| Seedance Pro I2V Fast | `seedance-pro-i2v-fast` |  | 2–12 | 480p, 720p, 1080p | image_url | yes |
| LTX 2 Pro | `ltx-2-pro-image-to-video` |  | 6, 8, 10 |  | image_url | yes |
| LTX 2 Fast | `ltx-2-fast-image-to-video` |  | 6, 8, 10, 12, 14, 16, 18, 20 |  | image_url | yes |
| Vidu Q2 Reference | `vidu-q2-reference` | 16:9, 9:16, 4:3, 3:4, 1:1 | 2–8 | 360p, 540p, 720p, 1080p | images_list | yes |
| Vidu Q2 Turbo Start End | `vidu-q2-turbo-start-end-video` |  | 2–8 | 720p, 1080p | image_url, last_image | yes |
| Vidu Q2 Pro Start End | `vidu-q2-pro-start-end-video` |  | 1–8 | 540p, 720p, 1080p | image_url, last_image | yes |
| Minimax Hailuo 2.3 Pro I2V | `minimax-hailuo-2.3-pro-i2v` |  |  | 1080p | image_url | yes |
| Minimax Hailuo 2.3 Standard I2V | `minimax-hailuo-2.3-standard-i2v` |  | 6, 10 |  | image_url | yes |
| MiniMax Hailuo 2.3 Fast | `minimax-hailuo-2.3-fast` |  | 6, 10 |  | image_url | yes |
| Kling 2.5 Turbo Standard | `kling-v2.5-turbo-std-i2v` |  | 5–10 |  | image_url | yes |
| Grok Imagine Image To Video | `grok-imagine-image-to-video` | 9:16, 16:9, 2:3, 3:2, 1:1 | 6–30 | 480p, 720p | images_list | yes |
| Kling O1 Pro | `kling-o1-image-to-video` | 16:9, 9:16, 1:1 | 5, 10 |  | image_url, last_image | yes |
| Kling O1 Pro Reference | `kling-o1-reference-to-video` | 16:9, 9:16, 1:1 | 3–10 |  | images_list, video_url | yes |
| Kling v2.6 Pro I2V | `kling-v2.6-pro-i2v` |  | 5, 10 |  | image_url | yes |
| Pixverse v5.5 I2V | `pixverse-v5.5-i2v` | 16:9, 9:16, 1:1, 4:3, 3:4 | 5, 8, 10 | 360p, 540p, 720p, 1080p | images_list | yes |
| Wan2.2 Spicy Image To Video | `wan2.2-spicy-image-to-video` |  | 5, 8 | 480p, 720p | image_url | yes |
| Wan2.6 Image To Video | `wan2.6-image-to-video` |  | 5, 10, 15 | 720p, 1080p | image_url, audio_url | yes |
| Kling O1 Standard | `kling-o1-standard-image-to-video` |  | 5, 10 |  | image_url, last_image | yes |
| Kling O1 Standard Reference | `kling-o1-standard-reference-to-video` | 16:9, 9:16, 1:1 | 5, 10 |  | images_list | yes |
| Seedance v1.5 Pro I2V | `seedance-v1.5-pro-i2v` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–12 | 480p, 720p, 1080p | image_url, last_image | yes |
| Seedance v1.5 Pro I2V Fast | `seedance-v1.5-pro-i2v-fast` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–12 | 720p, 1080p | image_url, last_image | yes |
| LTX 2 19B | `ltx-2-19b-image-to-video` |  | 5–20 | 480p, 720p, 1080p | image_url | yes |
| Kling v3.0 Omni Standard Image To Video | `kling-v3.0-omni-standard-image-to-video` | 9:16, 16:9, 1:1 | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 |  | images_list | yes |
| Kling v3.0 Omni Pro Image To Video | `kling-v3.0-omni-pro-image-to-video` | 9:16, 16:9, 1:1 | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 |  | images_list | yes |
| Kling v3.0 Omni 4K Image To Video | `kling-v3.0-omni-4k-image-to-video` | 9:16, 16:9, 1:1 | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 |  | images_list | yes |
| Kling v3.0 Pro Image To Video | `kling-v3.0-pro-image-to-video` |  | 3–15 |  | image_url, last_image | yes |
| Kling v3.0 Standard Image To Video | `kling-v3.0-standard-image-to-video` |  | 3–15 |  | image_url, last_image | yes |
| Seedance 2.0 I2V | `seedance-v2.0-i2v` | 16:9, 9:16, 4:3, 3:4 | 5, 10, 15 |  | images_list | yes |
| Seedance 2 I2V | `seedance-v2.0-i2v` | 16:9, 9:16, 4:3, 3:4 | 5, 10, 15 |  | images_list | yes |
| LTX 2.3 | `ltx-2.3-image-to-video` |  | 5–20 | 480p, 720p, 1080p | image_url | yes |
| Seedance 2 New First Last | `seedance-2.0-new-first-last` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list |  |
| Seedance 2 Omni Reference | `seedance-2.0-omni-reference` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list, video_files, audio_files | yes |
| Pixverse v6 I2V | `pixverse-v6-i2v` |  | 1–15 | 360p, 540p, 720p, 1080p | images_list | yes |
| PixVerse V6 Transition | `pixverse-v6-transition` | 16:9, 4:3, 1:1, 3:4, 9:16, 2:3, 3:2, 21:9 | 1–15 | 360p, 540p, 720p, 1080p | image_url, last_image | yes |
| Wan2.7 | `wan2.7-image-to-video` |  | 2–15 | 720p, 1080p | image_url, last_image, audio_url | yes |
| Wan 2.7 Reference | `wan2.7-reference-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 2–10 | 720p, 1080p | images_list, videos_list, image_url | yes |
| Seedance 2 I2V 480P | `seedance-2.0-i2v-480p` | 16:9, 9:16, 4:3, 3:4 | 4–15 |  | images_list | yes |
| Seedance 2 Omni Reference 480P | `seedance-2.0-omni-reference-480p` | 16:9, 9:16, 4:3, 3:4 | 8–15 |  | images_list, video_files, audio_files | yes |
| Seedance 2 | `seedance-2-image-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 Image to Video Fast | `seedance-2-image-to-video-fast` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 First Last Frame | `seedance-2-first-last-frame` | adaptive, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 First Last Frame Fast | `seedance-2-first-last-frame-fast` | adaptive, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 Omni Reference No Video | `seedance-2-omni-reference-no-video` | 16:9, 9:16, 4:3, 3:4 | 4–15 |  | images_list, audio_files | yes |
| Seedance 2 Omni Reference No Video Fast | `seedance-2-omni-reference-no-video-fast` | 16:9, 9:16, 4:3, 3:4 | 4–15 |  | images_list, audio_files | yes |
| Seedance 2 VIP | `seedance-2-vip-image-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 VIP Image to Video Fast | `seedance-2-vip-image-to-video-fast` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 VIP First Last Frame | `seedance-2-vip-first-last-frame` | adaptive, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 VIP First Last Frame Fast | `seedance-2-vip-first-last-frame-fast` | adaptive, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 VIP Omni Reference | `seedance-2-vip-omni-reference` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list, video_files, audio_files | yes |
| Seedance 2 VIP Omni Reference Fast | `seedance-2-vip-omni-reference-fast` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list, video_files, audio_files | yes |
| Happy Horse 1 Image to Video 1080P | `happy-horse-1-image-to-video-1080p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  | images_list |  |
| Happy Horse 1 Image to Video 720P | `happy-horse-1-image-to-video-720p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  | images_list |  |
| Veo 4 | `veo-4-image-to-video` | 16:9, 9:16, 1:1 | 5–30 |  | images_list |  |
| Seedance 2 VIP Image to Video 1080P | `sd-2-vip-image-to-video-1080p` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 VIP Image to Video Fast 1080P | `sd-2-vip-image-to-video-fast-1080p` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 VIP Omni Reference 1080P | `sd-2-vip-omni-reference-1080p` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list, video_files, audio_files | yes |
| Seedance 2 VIP Omni Reference Fast 1080P | `sd-2-vip-omni-reference-fast-1080p` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list, video_files, audio_files | yes |
| Seedance 2 VIP First Last Frame 1080P | `sd-2-vip-first-last-frame-1080p` | adaptive, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Kling v3.0 4K | `kling-v3.0-4k-image-to-video` |  | 3–15 |  | image_url, last_image | yes |
| Vidu Q3 Pro | `vidu-q3-pro-image-to-video` | 16:9, 9:16, 4:3, 3:4, 1:1 | 1–16 | 360p, 540p, 720p, 1080p | image_url | yes |
| Vidu Q3 Pro First Last Frames | `vidu-q3-pro-first-last-frames` | 16:9, 9:16, 4:3, 3:4, 1:1 | 1–16 | 540p, 720p, 1080p | image_url, last_image | yes |
| Vidu Q3 Turbo | `vidu-q3-turbo-image-to-video` | 16:9, 9:16, 4:3, 3:4, 1:1 | 1–16 | 360p, 540p, 720p, 1080p | image_url | yes |
| Vidu Q3 Turbo First Last Frames | `vidu-q3-turbo-first-last-frames` | 16:9, 9:16, 4:3, 3:4, 1:1 | 1–16 | 360p, 540p, 720p, 1080p | image_url, last_image | yes |
| Vidu Q2 Pro | `vidu-q2-pro-image-to-video` | 16:9, 9:16, 1:1 | 2–8 | 720p, 1080p | image_url | yes |
| Vidu Q2 Turbo | `vidu-q2-turbo-image-to-video` | 16:9, 9:16, 1:1 | 2–8 | 720p, 1080p | image_url | yes |
| HappyHorse 1.0 Reference 1080P | `happy-horse-1-reference-to-video-1080p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  | images_list | yes |
| HappyHorse 1.0 Reference 720P | `happy-horse-1-reference-to-video-720p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  | images_list | yes |
| Gemini Omni | `gemini-omni-image-to-video` | 16:9, 9:16 | 4, 6, 8, 10 | 720p, 1080p, 4k | image_urls | yes |
| Grok Imagine Video 1.5 Preview | `grok-imagine-video-1-5-preview` | auto, 1:1, 16:9, 9:16, 4:3, 3:4, 3:2, 2:3 | 1–15 | 480p, 720p | images_list |  |
| Kling v3 Turbo Standard | `kling-v3-turbo-standard-image-to-video` |  | 3–15 |  | image_url | yes |
| Kling v3 Turbo Pro | `kling-v3-turbo-pro-image-to-video` |  | 3–15 |  | image_url | yes |
| Seedance 2.5 | `seedance-2.5-image-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2 Mini | `seedance-2-mini-image-to-video` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–15 | 480p, 720p | images_list |  |
| Happy Horse 1.1 Image to Video 1080P | `happy-horse-1.1-image-to-video-1080p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  | images_list |  |
| Happy Horse 1.1 Image to Video 720P | `happy-horse-1.1-image-to-video-720p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  | images_list |  |
| HappyHorse 1.1 Reference 1080P | `happy-horse-1.1-reference-to-video-1080p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  | images_list | yes |
| HappyHorse 1.1 Reference 720P | `happy-horse-1.1-reference-to-video-720p` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 |  | images_list | yes |
| Seedance 2 VIP Image to Video 4K | `sd-2-vip-image-to-video-4k` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 VIP First Last Frame 4K | `sd-2-vip-first-last-frame-4k` | adaptive, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 VIP Omni Reference 4K | `sd-2-vip-omni-reference-4k` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list, video_files, audio_files | yes |
| Seedance 2.5 Spicy | `seedance-2.5-spicy-image-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 | 480p, 720p, 1080p, 4K | image_url, last_image | yes |
| Seedance 2.5 Image to Video 480p | `seedance-2.5-image-to-video-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 First & Last Frame | `seedance-2.5-first-last-frame` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 First Last Frame 480p | `seedance-2.5-first-last-frame-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Omni Reference | `seedance-2.5-omni-reference` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Omni Reference 480p | `seedance-2.5-omni-reference-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2 Spicy | `seedance-2-spicy-image-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 Spicy Image to Video Fast | `seedance-2-spicy-image-to-video-fast` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 |  | images_list | yes |
| Seedance 2 Mini Spicy | `seedance-2-mini-spicy-image-to-video` | 16:9, 9:16, 1:1, 3:4, 4:3, 21:9 | 4–15 | 480p, 720p | images_list |  |
| MiniMax H3 Image to Video | `minimax-h3-image-to-video` |  | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 2k | image_url, last_image_url | yes |
| MiniMax H3 Reference | `minimax-h3-reference-to-video` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 2k | reference_images | yes |
| MiniMax H3 Open Image to Video | `minimax-h3-open-image-to-video` |  | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 480p, 768p | image_url, last_image | yes |
| MiniMax H3 Base Ref2VA | `minimax-h3-open-reference-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 480p, 768p | images_list, videos_list, audios_list | yes |
| FLUX 3 | `flux-3-image-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 | 5–20 | 720p, 1080p | image_url | yes |
| Wan 3.0 | `wan3.0-image-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4 | 2–30 | 480p, 720p, 1080p | image_url, last_image | yes |
| Wan 3.0 Spicy | `wan3.0-spicy-image-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4 | 2–30 | 480p, 720p, 1080p | image_url, last_image | yes |
| Seedance 2.5 Image to Video 1080p | `seedance-2.5-image-to-video-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 Image to Video 4K | `seedance-2.5-image-to-video-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 First Last Frame 1080p | `seedance-2.5-first-last-frame-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 First Last Frame 4K | `seedance-2.5-first-last-frame-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Omni Reference 1080p | `seedance-2.5-omni-reference-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Omni Reference 4K | `seedance-2.5-omni-reference-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Intl | `seedance-2.5-intl-image-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 Intl Image to Video 480p | `seedance-2.5-intl-image-to-video-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 Spicy Image to Video 480p | `seedance-2.5-spicy-image-to-video-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 Intl Image to Video 1080p | `seedance-2.5-intl-image-to-video-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 Spicy Image to Video 1080p | `seedance-2.5-spicy-image-to-video-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 Intl Image to Video 4K | `seedance-2.5-intl-image-to-video-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 Spicy Image to Video 4K | `seedance-2.5-spicy-image-to-video-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | image_url | yes |
| Seedance 2.5 Intl First Last Frame | `seedance-2.5-intl-first-last-frame` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Spicy First Last Frame | `seedance-2.5-spicy-first-last-frame` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Intl First Last Frame 480p | `seedance-2.5-intl-first-last-frame-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Spicy First Last Frame 480p | `seedance-2.5-spicy-first-last-frame-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Intl First Last Frame 1080p | `seedance-2.5-intl-first-last-frame-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Spicy First Last Frame 1080p | `seedance-2.5-spicy-first-last-frame-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Intl First Last Frame 4K | `seedance-2.5-intl-first-last-frame-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Spicy First Last Frame 4K | `seedance-2.5-spicy-first-last-frame-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list | yes |
| Seedance 2.5 Intl Omni Reference | `seedance-2.5-intl-omni-reference` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Spicy Omni Reference | `seedance-2.5-spicy-omni-reference` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Intl Omni Reference 480p | `seedance-2.5-intl-omni-reference-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Spicy Omni Reference 480p | `seedance-2.5-spicy-omni-reference-480p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Intl Omni Reference 1080p | `seedance-2.5-intl-omni-reference-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Spicy Omni Reference 1080p | `seedance-2.5-spicy-omni-reference-1080p` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Intl Omni Reference 4K | `seedance-2.5-intl-omni-reference-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Seedance 2.5 Spicy Omni Reference 4K | `seedance-2.5-spicy-omni-reference-4k` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 4–30 |  | images_list, videos_list, audios_list | yes |
| Wan 2.7 Spicy | `wan2.7-image-to-video-spicy` |  | 5, 10, 15 | 720p, 1080p | image_url, audio_url |  |
| Wan 2.6 Spicy | `wan2.6-image-to-video-spicy` |  | 5, 10, 15 | 720p, 1080p | image_url, audio_url |  |
| MiniMax H3 Image to Video LoRA | `minimax-h3-image-to-video-lora` |  | 3–15 | 480p, 768p | image_url, last_image | yes |
| MiniMax H3 Reference to Video LoRA | `minimax-h3-reference-to-video-lora` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9, 9:21 | 3–15 | 480p, 768p | images_list, videos_list, audios_list | yes |
| LTX 2.5 | `ltx-2.5-image-to-video` |  | 5–20 | 720p, 1080p, 2k, 4k | image_url, last_image | yes |
| Wan 3.0 Reference to Video | `wan3.0-reference-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4 | 2–30 | 480p, 720p, 1080p | images_list, videos_list, audios_list | yes |
| Wan 3.0 Prime | `wan3.0-prime-image-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4 | 2–30 | 480p, 720p, 1080p | image_url, last_image | yes |
| Wan 3.0 Prime Reference to Video | `wan3.0-prime-reference-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4 | 2–30 | 480p, 720p, 1080p | images_list, videos_list, audios_list | yes |
| Wan 3.0 Spicy Reference to Video | `wan3.0-spicy-reference-to-video` | adaptive, 16:9, 9:16, 1:1, 4:3, 3:4 | 2–30 | 480p, 720p, 1080p | images_list, videos_list, audios_list | yes |
| FLUX 3 Start End to Video | `flux-3-start-end-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4, 21:9 | 5–20 | 720p, 1080p | image_url, end_image_url | yes |
| Gemini Omni Flash 1.1 | `gemini-omni-flash-1-1-image-to-video` | 16:9, 9:16 | 4, 6, 8, 10 | 720p, 1080p, 4k | first_frame_url, last_frame_url | yes |
| Gemini Omni 1.1 Flash Reference | `gemini-omni-flash-1-1-reference-to-video` | 16:9, 9:16 | 3–10 | 360p, 720p, 1080p, 4k | image_urls, reference_video_urls | yes |
| MiniMax H3 Spicy | `minimax-h3-image-to-video-spicy` |  | 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 480p, 768p | image_url, last_image |  |
| Happy Horse 1 Image to Video | `happy-horse-1-image-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 | 720p, 1080p | images_list | yes |
| Happy Horse 1 Reference to Video | `happy-horse-1-reference-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 | 720p, 1080p | images_list | yes |
| Happy Horse 1.1 Image to Video | `happy-horse-1.1-image-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 | 720p, 1080p | images_list |  |
| Happy Horse 1.1 Reference to Video | `happy-horse-1.1-reference-to-video` | 16:9, 9:16, 1:1, 4:3, 3:4 | 3–15 | 720p, 1080p | images_list | yes |
| MiniMax H3 Max Image to Video | `minimax-h3-max-image-to-video` |  | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 480p, 768p, 1080p | image_url, end_image_url | yes |
| MiniMax H3 Max Reference to Video | `minimax-h3-max-reference-to-video` | adaptive, 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 480p, 768p, 1080p | reference_images, reference_videos | yes |
| MiniMax H3 Max Turbo Image to Video | `minimax-h3-max-turbo-image-to-video` |  | 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 | 480p, 768p, 1080p | image_url, end_image_url | yes |
| Seedance 2 Spicy Omni Reference | `seedance-2-spicy-omni-reference` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 | 720p, 1080p, 4k | images_list, video_files, audio_files | yes |
| Seedance 2 Spicy Omni Reference Fast | `seedance-2-spicy-omni-reference-fast` | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 | 4–15 | 720p, 1080p, 4k | images_list, video_files, audio_files | yes |

## Lip sync (15)

| Model | Endpoint | Aspect ratio | Duration (s) | Resolution | Media inputs | Prompt required |
|---|---|---|---|---|---|---|
| Infinite Talk | `infinitetalk-image-to-video` |  |  | 480p, 720p |  |  |
| Wan 2.2 Speech to Video | `wan2.2-speech-to-video` |  |  | 480p, 720p |  |  |
| LTX 2.3 Lipsync | `ltx-2.3-lipsync` |  |  | 480p, 720p, 1080p |  |  |
| LTX 2 19B Lipsync | `ltx-2-19b-lipsync` |  |  | 480p, 720p, 1080p |  |  |
| Sync Lipsync | `sync-lipsync` |  |  |  |  |  |
| LatentSync | `latentsync-video` |  |  |  |  |  |
| Creatify Lipsync | `creatify-lipsync` |  |  |  |  |  |
| Veed Lipsync | `veed-lipsync` |  |  |  |  |  |
| Infinite Talk V2V | `infinitetalk-video-to-video` |  |  | 480p, 720p |  |  |
| Volcengine Video to Video Lip Sync | `volcengine-video-to-video-lip-sync` |  |  |  |  |  |
| Kling v1 Avatar Standard | `kling-v1-avatar-standard` |  |  |  |  |  |
| Kling v1 Avatar Pro | `kling-v1-avatar-pro` |  |  |  |  |  |
| Kling v2 Avatar Standard | `kling-v2-avatar-standard` |  |  |  |  |  |
| Kling v2 Avatar Pro | `kling-v2-avatar-pro` |  |  |  |  |  |
| Omnihuman 1 5 | `omnihuman-1-5` |  |  |  |  |  |

