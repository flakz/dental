"use client"

import { useState, useCallback } from "react"
import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { generateThemeCss } from "@/lib/theme"

const defaultColors = {
  primary: "#1B2A4E",
  accent: "#E8A33D",
  surface: "#F2EDE4",
  surfaceElevated: "#FBFAF4",
  ink: "#0E1730",
}

const colorFields = [
  { key: "primary", label: "Primary" },
  { key: "accent", label: "Accent" },
  { key: "surface", label: "Background" },
  { key: "surfaceElevated", label: "Card BG" },
  { key: "ink", label: "Text" },
] as const

function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  const l = (max + min) / 2
  if (max === min) return { h: 0, s: 0, l: Math.round(l * 100) }
  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h = 0
  if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
  else if (max === g) h = ((b - r) / d + 2) / 6
  else h = ((r - g) / d + 4) / 6
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) }
}

function hslToHex(h: number, s: number, l: number): string {
  s /= 100; l /= 100
  const a = s * Math.min(l, 1 - l)
  const f = (n: number) => {
    const k = (n + h / 30) % 12
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1)
    return Math.round(255 * color).toString(16).padStart(2, "0")
  }
  return `#${f(0)}${f(8)}${f(4)}`
}

function deriveColors(base: Record<string, string>) {
  const p = hexToHsl(base.primary)
  const a = hexToHsl(base.accent)
  const s = hexToHsl(base.surface)
  const i = hexToHsl(base.ink)

  return {
    primary: base.primary,
    primaryInk: p.l > 50 ? "#0E1730" : "#FBFAF4",
    primarySoft: hslToHex(p.h, Math.min(p.s, 30), 85),
    primaryDeep: hslToHex(p.h, Math.min(p.s + 10, 100), Math.max(p.l - 20, 10)),
    accent: base.accent,
    accentInk: a.l > 50 ? "#1A1A1A" : "#FBFAF4",
    accentSoft: hslToHex(a.h, Math.min(a.s, 40), 90),
    secondary: hslToHex(p.h, Math.min(p.s, 20), 50),
    secondaryInk: "#FBFAF4",
    secondarySoft: hslToHex(p.h, 15, 88),
    surface: base.surface,
    surfaceElevated: base.surfaceElevated,
    surfaceMuted: hslToHex(s.h, Math.min(s.s, 20), 90),
    surfaceDark: hslToHex(i.h, Math.min(i.s, 30), 12),
    surfaceDarker: hslToHex(i.h, Math.min(i.s, 30), 6),
    ink: base.ink,
    inkSoft: hslToHex(i.h, Math.min(i.s, 20), 25),
    inkMuted: hslToHex(i.h, Math.min(i.s, 15), 40),
    inkOnDark: hslToHex(i.h, 10, 92),
    inkMutedOnDark: hslToHex(i.h, 8, 70),
    border: hslToHex(s.h, Math.min(s.s, 20), 82),
    borderStrong: hslToHex(s.h, Math.min(s.s, 25), 75),
    borderOnDark: `rgba(${parseInt(base.ink.slice(1, 3), 16)},${parseInt(base.ink.slice(3, 5), 16)},${parseInt(base.ink.slice(5, 7), 16)},0.10)`,
    success: "#3A7A5C",
    warning: "#CBA645",
    error: "#B23A1A",
    info: "#2A6B8E",
    dropdownOuter: hslToHex(s.h, Math.min(s.s, 20), 85),
  }
}

interface CustomThemePickerProps {
  open: boolean
  onClose: () => void
}

export function CustomThemePicker({ open, onClose }: CustomThemePickerProps) {
  const [colors, setColors] = useState<Record<string, string>>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("paw-custom-colors")
        if (saved) return JSON.parse(saved)
      } catch {}
    }
    return { ...defaultColors }
  })

  const applyTheme = useCallback((c: Record<string, string>) => {
    const derived = deriveColors(c)
    const css = generateThemeCss({ name: "custom", ...derived } as any)
    localStorage.setItem("paw-custom-colors", JSON.stringify(c))
    localStorage.setItem("paw-theme", "custom")
    localStorage.setItem("paw-custom-css", css)
    const style = document.querySelector<HTMLStyleElement>("style[data-theme]")
    if (style) style.textContent = css
  }, [])

  const updateColor = (key: string, value: string) => {
    const next = { ...colors, [key]: value }
    setColors(next)
    applyTheme(next)
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-16 right-4 z-[201] w-72 rounded-2xl border border-border bg-surface-elevated p-5 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display text-sm font-medium">Custom Theme</h3>
              <button onClick={onClose} className="rounded-full p-1 hover:bg-surface-muted transition-colors">
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="space-y-3">
              {colorFields.map(({ key, label }) => (
                <div key={key} className="flex items-center gap-3">
                  <label className="relative cursor-pointer">
                    <input
                      type="color"
                      value={colors[key]}
                      onChange={(e) => updateColor(key, e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div
                      className="h-8 w-8 rounded-lg border-2 border-border shadow-sm transition-transform hover:scale-110"
                      style={{ backgroundColor: colors[key] }}
                    />
                  </label>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-foreground">{label}</p>
                    <p className="text-[10px] text-ink-muted font-mono">{colors[key]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex gap-2">
              <button
                onClick={() => {
                  setColors({ ...defaultColors })
                  applyTheme(defaultColors)
                }}
                className="flex-1 rounded-lg border border-border bg-surface-muted px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-surface-muted/80"
              >
                Reset
              </button>
              <button
                onClick={onClose}
                className="flex-1 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
              >
                Okay
              </button>
            </div>
        </>
      )}
    </AnimatePresence>
  )
}
