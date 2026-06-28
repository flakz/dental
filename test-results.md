# Test Results - 2026-06-22

## TEST 1 - Browser IAB (Node REPL)

**Status:** FAILED

**Error:**
```
tool call error: tool call failed for `node_repl/js`

Caused by:
    Mcp error: -32602: js: codex/sandbox-state-meta: sandboxCwd must be an absolute file URI: relative URL without a base
```

**Analysis:** The Node REPL cannot resolve the import path `/Users/suheb/.codex/plugins/cache/openai-bundled/browser/26.616.51431/scripts/browser-client.mjs` due to a sandbox URI resolution issue.

---

## TEST 2 - SearXNG MCP

**Status:** SUCCESS

**Tool called:** `mcp__searxng__searxng_web_search` with `{"query": "hello world", "num_results": 1}`

**Result:**
```
Infobox: Hello World
2024 album by Pinguini Tattici Nucleari
Wikipedia (en): https://en.wikipedia.org/wiki/Hello_World_(Pinguini_Tattici_Nucleari_album)
MusicBrainz: http://musicbrainz.org/release-group/cb7c7c16-01f9-4fb8-a104-aae92da53564
Wikidata: http://www.wikidata.org/entity/Q131394082

---

Title: Hello, world - Wikipedia
Description: A " Hello, world " program is usually a simple computer program that displays on the screen (often the console) a message similar to "Hello, world". A small piece of code written in most general-purpose programming languages, this program is used to illustrate a language's basic syntax. Such a program is often the first written by a student of a new programming language.
URL: https://en.wikipedia.org/wiki/Hello,_world
Relevance Score: 14.000
```
