"use client"

import { useRef } from "react"
import { generateThemeCss } from "@/lib/theme"

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

function deriveThemeFromPrimary(hex: string) {
  const p = hexToHsl(hex)

  // Surface: very light tint of primary
  const surfaceH = p.h
  const surfaceS = Math.min(p.s, 15)
  const surfaceL = 95
  const surface = hslToHex(surfaceH, surfaceS, surfaceL)
  const surfaceElevated = hslToHex(surfaceH, Math.min(surfaceS, 10), 98)
  const surfaceMuted = hslToHex(surfaceH, Math.min(surfaceS + 3, 20), 90)

  // Ink: dark version of primary hue
  const inkH = p.h
  const inkS = Math.min(p.s + 5, 35)
  const ink = hslToHex(inkH, inkS, 12)
  const inkSoft = hslToHex(inkH, Math.min(inkS, 25), 28)
  const inkMuted = hslToHex(inkH, Math.min(inkS, 20), 42)

  // Dark surfaces
  const surfaceDark = hslToHex(inkH, Math.min(inkS, 25), 10)
  const surfaceDarker = hslToHex(inkH, Math.min(inkS, 20), 5)

  // Accent: complementary — shift hue 150° and use a warm tone
  const accentH = (p.h + 150) % 360
  const accent = hslToHex(accentH, 70, 55)

  // Border: muted version of surface
  const border = hslToHex(surfaceH, Math.min(surfaceS + 3, 20), 82)
  const borderStrong = hslToHex(surfaceH, Math.min(surfaceS + 5, 25), 74)

  // Dropdown
  const dropdownOuter = hslToHex(surfaceH, Math.min(surfaceS + 3, 22), 87)

  return {
    primary: hex,
    primaryInk: p.l > 50 ? "#0E1730" : "#FBFAF4",
    primarySoft: hslToHex(p.h, Math.min(p.s + 5, 40), 88),
    primaryDeep: hslToHex(p.h, Math.min(p.s + 10, 100), Math.max(p.l - 20, 10)),
    accent,
    accentInk: "#1A1A1A",
    accentSoft: hslToHex(accentH, 40, 92),
    secondary: hslToHex(p.h, Math.min(p.s + 5, 30), 55),
    secondaryInk: p.l > 50 ? "#0E1730" : "#FBFAF4",
    secondarySoft: hslToHex(p.h, 12, 90),
    surface,
    surfaceElevated,
    surfaceMuted,
    surfaceDark,
    surfaceDarker,
    ink,
    inkSoft,
    inkMuted,
    inkOnDark: hslToHex(inkH, 10, 93),
    inkMutedOnDark: hslToHex(inkH, 8, 72),
    border,
    borderStrong,
    borderOnDark: `rgba(${parseInt(ink.slice(1, 3), 16)},${parseInt(ink.slice(3, 5), 16)},${parseInt(ink.slice(5, 7), 16)},0.10)`,
    success: "#3A7A5C",
    warning: "#CBA645",
    error: "#B23A1A",
    info: "#2A6B8E",
    dropdownOuter,
  }
}

function applyCustomTheme(hex: string) {
  const derived = deriveThemeFromPrimary(hex)
  const css = generateThemeCss({ name: "custom", ...derived } as any)
  localStorage.setItem("paw-custom-primary", hex)
  localStorage.setItem("paw-theme", "custom")
  localStorage.setItem("paw-custom-css", css)
  const style = document.querySelector<HTMLStyleElement>("style[data-theme]")
  if (style) style.textContent = css
}

export function CustomColorButton() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <input
      ref={inputRef}
      type="color"
      defaultValue="#3887A8"
      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
      onChange={(e) => applyCustomTheme(e.target.value)}
      onFocus={(e) => e.target.showPicker?.()}
    />
  )
}

export function restoreCustomTheme() {
  if (typeof window === "undefined") return
  try {
    const hex = localStorage.getItem("paw-custom-primary")
    const css = localStorage.getItem("paw-custom-css")
    if (hex && css) {
      const style = document.querySelector<HTMLStyleElement>("style[data-theme]")
      if (style) style.textContent = css
    }
  } catch {}
}
