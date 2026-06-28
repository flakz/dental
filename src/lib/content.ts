// Env-override pattern for multi-client reuse.
// Each content() call reads process.env[CONTENT_<KEY>] first, falls back to local import.
// Future clients: set CONTENT_CONFIG='{...}' CONTENT_SERVICES='[...]' etc.

export function content<T>(key: string, local: T): T {
  try {
    const raw = process.env[`CONTENT_${key.toUpperCase()}`]
    if (raw) return JSON.parse(raw)
  } catch {
    // JSON parse failed — fall through to local default
  }
  return local
}
