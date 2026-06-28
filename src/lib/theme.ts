// ponytail: theme presets. Switch via THEME=sand|charcoal|rose|terracotta|forest|navy|custom.
// Build-time only — no runtime weight, no JS bundles.

export type ThemeName = "terracotta" | "forest" | "navy" | "sand" | "charcoal" | "rose"

export interface Theme {
  name: ThemeName | "custom"
  primary: string
  primaryInk: string
  primarySoft: string
  primaryDeep: string
  accent: string
  accentInk: string
  accentSoft: string
  secondary: string
  secondaryInk: string
  secondarySoft: string
  surface: string
  surfaceElevated: string
  surfaceMuted: string
  surfaceDark: string
  surfaceDarker: string
  ink: string
  inkSoft: string
  inkMuted: string
  inkOnDark: string
  inkMutedOnDark: string
  border: string
  borderStrong: string
  borderOnDark: string
  success: string
  warning: string
  error: string
  info: string
  dropdownOuter: string
}

export const presets: Record<ThemeName, Theme> = {
  terracotta: {
    name: "terracotta",
    primary: "#6C3811",
    primaryInk: "#FFF7F1",
    primarySoft: "#F4D9CB",
    primaryDeep: "#4A2509",
    accent: "#E8A33D",
    accentInk: "#1A1A1A",
    accentSoft: "#F7E0B6",
    secondary: "#5C7A66",
    secondaryInk: "#F4F7F1",
    secondarySoft: "#DCE6DE",
    surface: "#FAF6F0",
    surfaceElevated: "#FFFFFF",
    surfaceMuted: "#F3EBDA",
    surfaceDark: "#1A1410",
    surfaceDarker: "#0F0B08",
    ink: "#1A1410",
    inkSoft: "#3D352E",
    inkMuted: "#6B6358",
    inkOnDark: "#F5EFE6",
    inkMutedOnDark: "#B5AC9F",
    border: "#E5DCC9",
    borderStrong: "#C9BFA8",
    borderOnDark: "rgba(255,247,241,0.10)",
    success: "#2F7D5C",
    warning: "#C58A1A",
    error: "#B23A1A",
    info: "#2A6B8E",
    dropdownOuter: "#E8DFD0",
  },
  forest: {
    name: "forest",
    primary: "#3D6B4F",
    primaryInk: "#FBFAF4",
    primarySoft: "#C4D8CC",
    primaryDeep: "#234232",
    accent: "#FF6B5C",
    accentInk: "#FBFAF4",
    accentSoft: "#FFD4D0",
    secondary: "#7C8D7C",
    secondaryInk: "#FBFAF4",
    secondarySoft: "#DCE3DC",
    surface: "#FBFAF4",
    surfaceElevated: "#FFFFFF",
    surfaceMuted: "#EDE9DC",
    surfaceDark: "#15231B",
    surfaceDarker: "#0C1611",
    ink: "#15231B",
    inkSoft: "#3D4D43",
    inkMuted: "#566258",
    inkOnDark: "#F0F3EE",
    inkMutedOnDark: "#A8B5AA",
    border: "#D9D5C5",
    borderStrong: "#BFBAAA",
    borderOnDark: "rgba(240,243,238,0.10)",
    success: "#3D7A5C",
    warning: "#CBA645",
    error: "#C24B3A",
    info: "#3A7A8E",
    dropdownOuter: "#E5E0D5",
  },
  navy: {
    name: "navy",
    primary: "#1B2A4E",
    primaryInk: "#FBFAF4",
    primarySoft: "#B8C5DD",
    primaryDeep: "#0F1A33",
    accent: "#E8A33D",
    accentInk: "#0E1730",
    accentSoft: "#F5DBA0",
    secondary: "#4A5B78",
    secondaryInk: "#FBFAF4",
    secondarySoft: "#D0D8E3",
    surface: "#F2EDE4",
    surfaceElevated: "#FBFAF4",
    surfaceMuted: "#E2DAC8",
    surfaceDark: "#0E1730",
    surfaceDarker: "#080D1A",
    ink: "#0E1730",
    inkSoft: "#2C344A",
    inkMuted: "#4A5567",
    inkOnDark: "#E8EBF0",
    inkMutedOnDark: "#9BA3B5",
    border: "#CFC6B0",
    borderStrong: "#B8AD93",
    borderOnDark: "rgba(232,235,240,0.10)",
    success: "#3A7A5C",
    warning: "#CBA645",
    error: "#B23A1A",
    info: "#2A6B8E",
    dropdownOuter: "#DDD5C5",
  },
  sand: {
    name: "sand",
    primary: "#8B6F47",
    primaryInk: "#FCF9F2",
    primarySoft: "#D9C9B0",
    primaryDeep: "#5E4A2E",
    accent: "#C49B5A",
    accentInk: "#1C1812",
    accentSoft: "#E3D0B0",
    secondary: "#7A8A7A",
    secondaryInk: "#FCF9F2",
    secondarySoft: "#D6E0D6",
    surface: "#F7F2E9",
    surfaceElevated: "#FCF9F2",
    surfaceMuted: "#EAE0CF",
    surfaceDark: "#2B241A",
    surfaceDarker: "#18140E",
    ink: "#2B241A",
    inkSoft: "#4A4135",
    inkMuted: "#736A5C",
    inkOnDark: "#F0EBDF",
    inkMutedOnDark: "#A69C8B",
    border: "#D9CEBA",
    borderStrong: "#C0B49E",
    borderOnDark: "rgba(240,235,223,0.10)",
    success: "#4B7A5C",
    warning: "#B8943A",
    error: "#A6422E",
    info: "#3A6B8E",
    dropdownOuter: "#E2D7C4",
  },
  charcoal: {
    name: "charcoal",
    primary: "#D05A38",
    primaryInk: "#F5F2EB",
    primarySoft: "#E5C0B0",
    primaryDeep: "#A03A1E",
    accent: "#D4A84B",
    accentInk: "#121212",
    accentSoft: "#EAD7B0",
    secondary: "#6B7B7B",
    secondaryInk: "#F5F2EB",
    secondarySoft: "#CED9D9",
    surface: "#F0EBE0",
    surfaceElevated: "#FAF6EF",
    surfaceMuted: "#DDD5C5",
    surfaceDark: "#1F1F1F",
    surfaceDarker: "#121212",
    ink: "#1C1C1C",
    inkSoft: "#3D3D3D",
    inkMuted: "#6B6B6B",
    inkOnDark: "#EAE6DC",
    inkMutedOnDark: "#9C9C9C",
    border: "#C5BAA8",
    borderStrong: "#ADA18E",
    borderOnDark: "rgba(234,230,220,0.10)",
    success: "#3A7A5C",
    warning: "#C58A1A",
    error: "#B23A1A",
    info: "#2A6B8E",
    dropdownOuter: "#E2DAC8",
  },
  rose: {
    name: "rose",
    primary: "#B34B58",
    primaryInk: "#FFF8F5",
    primarySoft: "#EAC0C5",
    primaryDeep: "#7D2E38",
    accent: "#C4926A",
    accentInk: "#1A1513",
    accentSoft: "#E3CDB5",
    secondary: "#6A7A7A",
    secondaryInk: "#FFF8F5",
    secondarySoft: "#D0DADA",
    surface: "#FEF6F2",
    surfaceElevated: "#FFFFFF",
    surfaceMuted: "#F2E2DC",
    surfaceDark: "#1F1515",
    surfaceDarker: "#110B0B",
    ink: "#1F1515",
    inkSoft: "#3D2E2E",
    inkMuted: "#6B5959",
    inkOnDark: "#F5EAE5",
    inkMutedOnDark: "#B09B9B",
    border: "#E5D2C8",
    borderStrong: "#CDB5A9",
    borderOnDark: "rgba(245,234,229,0.10)",
    success: "#3A7A5C",
    warning: "#C58A1A",
    error: "#B23A1A",
    info: "#2A6B8E",
    dropdownOuter: "#E2CEC4",
  },
}

// ponytail: read THEME env at build time. Defaults to terracotta.
export function loadTheme(): Theme {
  const name = (process.env.THEME ?? "terracotta") as string
  if (name === "custom") {
    const base = presets.terracotta
    return {
      name: "custom",
      primary: process.env.PAW_COLOR_PRIMARY ?? base.primary,
      primaryInk: process.env.PAW_COLOR_PRIMARY_INK ?? base.primaryInk,
      primarySoft: process.env.PAW_COLOR_PRIMARY_SOFT ?? base.primarySoft,
      primaryDeep: process.env.PAW_COLOR_PRIMARY_DEEP ?? base.primaryDeep,
      accent: process.env.PAW_COLOR_ACCENT ?? base.accent,
      accentInk: process.env.PAW_COLOR_ACCENT_INK ?? base.accentInk,
      accentSoft: process.env.PAW_COLOR_ACCENT_SOFT ?? base.accentSoft,
      secondary: process.env.PAW_COLOR_SECONDARY ?? base.secondary,
      secondaryInk: process.env.PAW_COLOR_SECONDARY_INK ?? base.secondaryInk,
      secondarySoft: process.env.PAW_COLOR_SECONDARY_SOFT ?? base.secondarySoft,
      surface: process.env.PAW_COLOR_SURFACE ?? base.surface,
      surfaceElevated: process.env.PAW_COLOR_SURFACE_ELEVATED ?? base.surfaceElevated,
      surfaceMuted: process.env.PAW_COLOR_SURFACE_MUTED ?? base.surfaceMuted,
      surfaceDark: process.env.PAW_COLOR_SURFACE_DARK ?? base.surfaceDark,
      surfaceDarker: process.env.PAW_COLOR_SURFACE_DARKER ?? base.surfaceDarker,
      ink: process.env.PAW_COLOR_INK ?? base.ink,
      inkSoft: process.env.PAW_COLOR_INK_SOFT ?? base.inkSoft,
      inkMuted: process.env.PAW_COLOR_INK_MUTED ?? base.inkMuted,
      inkOnDark: process.env.PAW_COLOR_INK_ON_DARK ?? base.inkOnDark,
      inkMutedOnDark: process.env.PAW_COLOR_INK_MUTED_ON_DARK ?? base.inkMutedOnDark,
      border: process.env.PAW_COLOR_BORDER ?? base.border,
      borderStrong: process.env.PAW_COLOR_BORDER_STRONG ?? base.borderStrong,
      borderOnDark: process.env.PAW_COLOR_BORDER_ON_DARK ?? base.borderOnDark,
      success: process.env.PAW_COLOR_SUCCESS ?? base.success,
      warning: process.env.PAW_COLOR_WARNING ?? base.warning,
      error: process.env.PAW_COLOR_ERROR ?? base.error,
      info: process.env.PAW_COLOR_INFO ?? base.info,
      dropdownOuter: process.env.PAW_COLOR_DROPDOWN_OUTER ?? base.dropdownOuter,
    }
  }
  if (name in presets) return presets[name as ThemeName]
  // ponytail: unknown name falls back silently.
  return presets.terracotta
}

// ponytail: generates :root { --paw-*: ... } CSS string for <style> injection.
export function generateThemeCss(t: Theme): string {
  return `:root {
  --paw-primary: ${t.primary};
  --paw-primary-ink: ${t.primaryInk};
  --paw-primary-soft: ${t.primarySoft};
  --paw-primary-deep: ${t.primaryDeep};
  --paw-accent: ${t.accent};
  --paw-accent-ink: ${t.accentInk};
  --paw-accent-soft: ${t.accentSoft};
  --paw-secondary: ${t.secondary};
  --paw-secondary-ink: ${t.secondaryInk};
  --paw-secondary-soft: ${t.secondarySoft};
  --paw-surface: ${t.surface};
  --paw-surface-elevated: ${t.surfaceElevated};
  --paw-surface-muted: ${t.surfaceMuted};
  --paw-surface-dark: ${t.surfaceDark};
  --paw-surface-darker: ${t.surfaceDarker};
  --paw-ink: ${t.ink};
  --paw-ink-soft: ${t.inkSoft};
  --paw-ink-muted: ${t.inkMuted};
  --paw-ink-on-dark: ${t.inkOnDark};
  --paw-ink-muted-on-dark: ${t.inkMutedOnDark};
  --paw-border: ${t.border};
  --paw-border-strong: ${t.borderStrong};
  --paw-border-on-dark: ${t.borderOnDark};
  --paw-success: ${t.success};
  --paw-warning: ${t.warning};
  --paw-error: ${t.error};
  --paw-info: ${t.info};
  --dropdown-outer: ${t.dropdownOuter};
}`
}
