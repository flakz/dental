# MCP Tool Tests - 2026-06-22

## TEST 1 - Browser IAB (In-App Browser)

**Status:** FAILED

**Error:**
```
IMPORT ERROR: privileged native pipe bridge is not available; browser-client is not trusted
```

**Details:**
- Browser plugin version found: `26.616.51431` (path used)
- The browser-client module imports successfully but cannot establish the privileged native pipe bridge required to communicate with the Codex app's browser runtime.
- Additional Statsig networking errors confirm `browser-client privileged fetch is unavailable`.
- The IAB requires the native Codex app environment (not a standalone Node.js process) to function.

---

## TEST 2 - SearXNG MCP

**Status:** FAILED (MCP tool not available in this turn)

**Error:**
```
unsupported call: mcp__searxng
```

**Details:**
- The `mcp-searxng` process IS running (visible in `ps aux`), confirming the MCP server is active.
- However, the `mcp__searxng` tool was not exposed as a callable tool in this session's tool set.
- The SearXNG MCP server appears to be running on stdio but was not connected to this agent's tool interface.
- No HTTP endpoint was found on common ports (8080, 8888).

---

## Summary

| Test | Tool | Status | Root Cause |
|------|------|--------|------------|
| Browser IAB | `mcp__node_repl` | FAILED | Native pipe bridge unavailable outside Codex app runtime |
| SearXNG | `mcp__searxng` | FAILED | MCP tool not exposed to this session despite server running |
