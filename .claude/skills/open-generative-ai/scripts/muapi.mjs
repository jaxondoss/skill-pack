#!/usr/bin/env node
// Minimal MuAPI client mirroring Open Generative AI's packages/studio/src/muapi.js:
// submit -> poll /predictions/{id}/result -> output URL. Node 18+, no dependencies.
//
//   node muapi.mjs generate <endpoint> '<json payload>' [--out file] [--timeout-min N]
//   node muapi.mjs upload <local-file>
//   node muapi.mjs result <request_id> [--out file]
//   node muapi.mjs balance
//
// Reads the key from MUAPI_API_KEY. Sends it as `x-api-key` (not a Bearer token).

import { readFile, writeFile } from 'node:fs/promises';
import { basename } from 'node:path';

const BASE_URL = process.env.MUAPI_BASE_URL || 'https://api.muapi.ai';
const SUCCESS = new Set(['completed', 'succeeded', 'success']);
const FAILURE = new Set(['failed', 'error', 'cancelled', 'canceled']);
const POLL_INTERVAL_MS = 2000;

const key = process.env.MUAPI_API_KEY;
if (!key) die('MUAPI_API_KEY is not set. Create a key at https://muapi.ai/access-keys and export it.');

const [cmd, ...rest] = process.argv.slice(2);
const flag = (name) => {
  const i = rest.indexOf(name);
  return i === -1 ? undefined : rest.splice(i, 2)[1];
};

function die(msg) {
  console.error(msg);
  process.exit(1);
}

async function api(path, init = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: { 'x-api-key': key, ...(init.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }), ...init.headers },
  });
  const text = await res.text();
  if (!res.ok) throw Object.assign(new Error(`${res.status} ${res.statusText}: ${text.slice(0, 300)}`), { status: res.status });
  return text ? JSON.parse(text) : {};
}

const outputUrl = (r) => r.outputs?.[0] || r.url || r.output?.url || r.video?.url || r.image?.url;

async function poll(requestId, timeoutMin) {
  const deadline = Date.now() + timeoutMin * 60_000;
  while (Date.now() < deadline) {
    await new Promise((r) => setTimeout(r, POLL_INTERVAL_MS));
    let result;
    try {
      result = await api(`/api/v1/predictions/${requestId}/result`);
    } catch (e) {
      if (e.status >= 500 || e.status === undefined) continue; // transient, same as the app
      throw e;
    }
    const status = String(result.status || '').toLowerCase();
    if (SUCCESS.has(status) || FAILURE.has(status)) process.stderr.write('\n');
    if (SUCCESS.has(status)) return result;
    if (FAILURE.has(status)) {
      const detail = result.error?.message || result.error || result.message || 'Unknown error';
      throw new Error(`Generation failed (request ${requestId}): ${detail}`);
    }
    process.stderr.write(`\r${status || 'pending'}… ${Math.round((deadline - Date.now()) / 1000)}s left `);
  }
  throw new Error(`Timed out. Resume later with: node muapi.mjs result ${requestId}`);
}

async function download(url, out) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Download failed: ${res.status}`);
  await writeFile(out, Buffer.from(await res.arrayBuffer()));
  console.error(`Saved ${out}`);
}

async function finish(result, out) {
  const url = outputUrl(result);
  console.log(JSON.stringify({ request_id: result.request_id || result.id, status: result.status, url, outputs: result.outputs }, null, 2));
  if (out && url) await download(url, out);
}

try {
  if (cmd === 'generate') {
    const out = flag('--out');
    const timeoutMin = Number(flag('--timeout-min') || 30);
    const [endpoint, json = '{}'] = rest;
    if (!endpoint) die('usage: generate <endpoint> \'<json payload>\' [--out file] [--timeout-min N]');
    const submit = await api(`/api/v1/${endpoint}`, { method: 'POST', body: json });
    const requestId = submit.request_id || submit.id;
    if (!requestId) {
      await finish(submit, out);
    } else {
      console.error(`Submitted ${endpoint}, request_id=${requestId}`);
      await finish({ request_id: requestId, ...(await poll(requestId, timeoutMin)) }, out);
    }
  } else if (cmd === 'result') {
    const out = flag('--out');
    const [requestId] = rest;
    if (!requestId) die('usage: result <request_id> [--out file]');
    await finish({ request_id: requestId, ...(await poll(requestId, 30)) }, out);
  } else if (cmd === 'upload') {
    const [path] = rest;
    if (!path) die('usage: upload <local-file>');
    const form = new FormData();
    form.append('file', new Blob([await readFile(path)]), basename(path));
    const data = await api('/api/v1/upload_file', { method: 'POST', body: form });
    const url = data.url || data.file_url || data.data?.url;
    if (!url) die(`No URL in upload response: ${JSON.stringify(data)}`);
    console.log(url);
  } else if (cmd === 'balance') {
    console.log(JSON.stringify(await api('/api/v1/account/balance'), null, 2));
  } else {
    die('commands: generate | result | upload | balance');
  }
} catch (e) {
  die(e.message);
}
