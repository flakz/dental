# MCP Tool Availability Test Results
**Date:** 2026-06-22

---

## TEST 1 - Browser IAB (via mcp__node_repl)

**Command attempted:**
```js
const { setupBrowserRuntime } = await import("/Users/suheb/.codex/plugins/cache/openai-bundled/browser/26.616.51431/scripts/browser-client.mjs");
await setupBrowserRuntime({ globals: globalThis });
try { globalThis.browser = await agent.browsers.get("iab"); console.log("IAB SUCCESS:", typeof browser); } catch(e) { console.log("IAB ERROR:", e.message); }
```

**Result:** ❌ FAILED — Tool `mcp__node_repl` is listed in available tools but has an empty parameter schema. The sub-tool `mcp__node_repl__js` is NOT available as a callable function. Cannot execute JavaScript via the Node REPL MCP server.

**Error:** `unsupported call: mcp__node_repl`

---

## TEST 2 - SearXNG MCP

**Command attempted:**
```json
Tool: mcp__searxng__searxng_web_search
Arguments: {"query": "hello world", "num_results": 1}
```

**Result:** ❌ FAILED — Tool `mcp__searxng` is listed in available tools but has an empty parameter schema. The sub-tool `mcp__searxng__searxng_web_search` is NOT available as a callable function. Cannot perform web searches via SearXNG.

**Error:** `unsupported call: mcp__searxng`

---

## Summary

| Test | Tool | Status | Issue |
|------|------|--------|-------|
| Browser IAB | `mcp__node_repl__js` | ❌ Not available | MCP server connected but sub-tools not exposed |
| SearXNG | `mcp__searxng__searxng_web_search` | ❌ Not available | MCP server connected but sub-tools not exposed |

Both MCP namespace tools (`mcp__node_repl`, `mcp__searxng`) appear in the tool list but their sub-tools are not registered as callable functions, making them non-functional.
