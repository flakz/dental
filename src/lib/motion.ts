import { useEffect, useState } from "react"
import type { Variants } from "motion/react"

// ── Easing curves ──────────────────────────────────────────────────────────
// Matches CSS tokens in globals.css: --ease-out, --ease-in-out
export const easeOut = [0.22, 1, 0.36, 1] as const
export const easeInOut = [0.65, 0, 0.35, 1] as const

// ── Duration constants (seconds) ───────────────────────────────────────────
// Matches CSS tokens: --duration-fast (150ms), --duration-base (220ms), --duration-slow (400ms)
export const FAST = 0.15
export const BASE = 0.22
export const SLOW = 0.4

// ── Variant presets ────────────────────────────────────────────────────────
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
}

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
}

// ── Transition defaults ────────────────────────────────────────────────────
export const springTransition = { type: "spring" as const, stiffness: 300, damping: 30 }
export const tweenSlow = { duration: SLOW, ease: easeOut }
export const tweenBase = { duration: BASE, ease: easeOut }

// ── Reduced motion ─────────────────────────────────────────────────────────
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/** React hook version — returns false on SSR, updates if the media query changes. */
export function usePrefersReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
  return reduced
}
