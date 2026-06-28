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

/** Classic fade + rise from below */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

/** Simple fade */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

/** Scale up from slightly smaller */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

/** Slide in from left */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

/** Slide in from right */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
}

/** Blur reveal — starts blurry and scaled, sharpens into place (Linear-style) */
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", scale: 1.04 },
  visible: { opacity: 1, filter: "blur(0px)", scale: 1 },
}

/** Pop in — scales from zero with a spring bounce */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
}

/** Rotate in — rotates and fades in from slight angle */
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -6, y: 20 },
  visible: { opacity: 1, rotate: 0, y: 0 },
}

/** Clip reveal — reveals content via expanding clip-path from center */
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0% 50% 0% 50%)" },
  visible: { clipPath: "inset(0% 0% 0% 0%)" },
}

/** Slide + blur combo — slides up while unblurring */
export const slideBlurUp: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
}

/** Scale + rotate — playful pop with slight rotation */
export const scaleRotateIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -3 },
  visible: { opacity: 1, scale: 1, rotate: 0 },
}

/** Fade in from deep below — larger travel distance, smoother feel */
export const riseUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
}

/** Perspective tilt — elements appear with a 3D tilt effect */
export const tiltIn: Variants = {
  hidden: { opacity: 0, rotateX: 12, y: 30 },
  visible: { opacity: 1, rotateX: 0, y: 0 },
}

// ── Transition defaults ────────────────────────────────────────────────────
export const springTransition = { type: "spring" as const, stiffness: 300, damping: 30 }
export const springBounce = { type: "spring" as const, stiffness: 400, damping: 17 }
export const tweenSlow = { duration: SLOW, ease: easeOut }
export const tweenBase = { duration: BASE, ease: easeOut }

// ── Transition presets for specific effects ────────────────────────────────
export const blurRevealTransition = { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
export const popInTransition = { type: "spring" as const, stiffness: 500, damping: 25 }
export const clipRevealTransition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
export const tiltTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] }

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
