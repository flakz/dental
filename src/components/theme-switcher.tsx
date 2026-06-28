"use client"

import { useCallback, useState } from "react"
import { cn } from "@/lib/utils"
import { CustomThemePicker } from "@/components/custom-theme-picker"

const themes = [
  { name: "navy", label: "Navy", color: "#1B2A4E" },
  { name: "terracotta", label: "Terracotta", color: "#6C3811" },
  { name: "forest", label: "Forest", color: "#3D6B4F" },
  { name: "sand", label: "Sand", color: "#8B6F47" },
  { name: "charcoal", label: "Charcoal", color: "#D05A38" },
  { name: "rose", label: "Rose", color: "#B34B58" },
] as const

// All 6 theme CSS blobs — generated from the theme presets
const themeCss: Record<string, string> = {
  navy: `:root {
  --paw-primary: #1B2A4E; --paw-primary-ink: #FBFAF4; --paw-primary-soft: #B8C5DD; --paw-primary-deep: #0F1A33;
  --paw-accent: #E8A33D; --paw-accent-ink: #0E1730; --paw-accent-soft: #F5DBA0;
  --paw-secondary: #4A5B78; --paw-secondary-ink: #FBFAF4; --paw-secondary-soft: #D0D8E3;
  --paw-surface: #F2EDE4; --paw-surface-elevated: #FBFAF4; --paw-surface-muted: #E2DAC8;
  --paw-surface-dark: #0E1730; --paw-surface-darker: #080D1A;
  --paw-ink: #0E1730; --paw-ink-soft: #2C344A; --paw-ink-muted: #4A5567;
  --paw-ink-on-dark: #E8EBF0; --paw-ink-muted-on-dark: #9BA3B5;
  --paw-border: #CFC6B0; --paw-border-strong: #B8AD93; --paw-border-on-dark: rgba(232,235,240,0.10);
  --paw-success: #3A7A5C; --paw-warning: #CBA645; --paw-error: #B23A1A; --paw-info: #2A6B8E;
  --dropdown-outer: #DDD5C5;
}`,
  terracotta: `:root {
  --paw-primary: #6C3811; --paw-primary-ink: #FFF7F1; --paw-primary-soft: #F4D9CB; --paw-primary-deep: #4A2509;
  --paw-accent: #E8A33D; --paw-accent-ink: #1A1A1A; --paw-accent-soft: #F7E0B6;
  --paw-secondary: #5C7A66; --paw-secondary-ink: #F4F7F1; --paw-secondary-soft: #DCE6DE;
  --paw-surface: #FAF6F0; --paw-surface-elevated: #FFFFFF; --paw-surface-muted: #F3EBDA;
  --paw-surface-dark: #1A1410; --paw-surface-darker: #0F0B08;
  --paw-ink: #1A1410; --paw-ink-soft: #3D352E; --paw-ink-muted: #6B6358;
  --paw-ink-on-dark: #F5EFE6; --paw-ink-muted-on-dark: #B5AC9F;
  --paw-border: #E5DCC9; --paw-border-strong: #C9BFA8; --paw-border-on-dark: rgba(255,247,241,0.10);
  --paw-success: #2F7D5C; --paw-warning: #C58A1A; --paw-error: #B23A1A; --paw-info: #2A6B8E;
  --dropdown-outer: #E8DFD0;
}`,
  forest: `:root {
  --paw-primary: #3D6B4F; --paw-primary-ink: #FBFAF4; --paw-primary-soft: #C4D8CC; --paw-primary-deep: #234232;
  --paw-accent: #FF6B5C; --paw-accent-ink: #FBFAF4; --paw-accent-soft: #FFD4D0;
  --paw-secondary: #7C8D7C; --paw-secondary-ink: #FBFAF4; --paw-secondary-soft: #DCE3DC;
  --paw-surface: #FBFAF4; --paw-surface-elevated: #FFFFFF; --paw-surface-muted: #EDE9DC;
  --paw-surface-dark: #15231B; --paw-surface-darker: #0C1611;
  --paw-ink: #15231B; --paw-ink-soft: #3D4D43; --paw-ink-muted: #566258;
  --paw-ink-on-dark: #F0F3EE; --paw-ink-muted-on-dark: #A8B5AA;
  --paw-border: #D9D5C5; --paw-border-strong: #BFBAAA; --paw-border-on-dark: rgba(240,243,238,0.10);
  --paw-success: #3D7A5C; --paw-warning: #CBA645; --paw-error: #C24B3A; --paw-info: #3A7A8E;
  --dropdown-outer: #E5E0D5;
}`,
  sand: `:root {
  --paw-primary: #8B6F47; --paw-primary-ink: #FCF9F2; --paw-primary-soft: #D9C9B0; --paw-primary-deep: #5E4A2E;
  --paw-accent: #C49B5A; --paw-accent-ink: #1C1812; --paw-accent-soft: #E3D0B0;
  --paw-secondary: #7A8A7A; --paw-secondary-ink: #FCF9F2; --paw-secondary-soft: #D6E0D6;
  --paw-surface: #F7F2E9; --paw-surface-elevated: #FCF9F2; --paw-surface-muted: #EAE0CF;
  --paw-surface-dark: #2B241A; --paw-surface-darker: #18140E;
  --paw-ink: #2B241A; --paw-ink-soft: #4A4135; --paw-ink-muted: #736A5C;
  --paw-ink-on-dark: #F0EBDF; --paw-ink-muted-on-dark: #A69C8B;
  --paw-border: #D9CEBA; --paw-border-strong: #C0B49E; --paw-border-on-dark: rgba(240,235,223,0.10);
  --paw-success: #4B7A5C; --paw-warning: #B8943A; --paw-error: #A6422E; --paw-info: #3A6B8E;
  --dropdown-outer: #E2D7C4;
}`,
  charcoal: `:root {
  --paw-primary: #D05A38; --paw-primary-ink: #F5F2EB; --paw-primary-soft: #E5C0B0; --paw-primary-deep: #A03A1E;
  --paw-accent: #D4A84B; --paw-accent-ink: #121212; --paw-accent-soft: #EAD7B0;
  --paw-secondary: #6B7B7B; --paw-secondary-ink: #F5F2EB; --paw-secondary-soft: #CED9D9;
  --paw-surface: #F0EBE0; --paw-surface-elevated: #FAF6EF; --paw-surface-muted: #DDD5C5;
  --paw-surface-dark: #1F1F1F; --paw-surface-darker: #121212;
  --paw-ink: #1C1C1C; --paw-ink-soft: #3D3D3D; --paw-ink-muted: #6B6B6B;
  --paw-ink-on-dark: #EAE6DC; --paw-ink-muted-on-dark: #9C9C9C;
  --paw-border: #C5BAA8; --paw-border-strong: #ADA18E; --paw-border-on-dark: rgba(234,230,220,0.10);
  --paw-success: #3A7A5C; --paw-warning: #C58A1A; --paw-error: #B23A1A; --paw-info: #2A6B8E;
  --dropdown-outer: #E2DAC8;
}`,
  rose: `:root {
  --paw-primary: #B34B58; --paw-primary-ink: #FFF8F5; --paw-primary-soft: #EAC0C5; --paw-primary-deep: #7D2E38;
  --paw-accent: #C4926A; --paw-accent-ink: #1A1513; --paw-accent-soft: #E3CDB5;
  --paw-secondary: #6A7A7A; --paw-secondary-ink: #FFF8F5; --paw-secondary-soft: #D0DADA;
  --paw-surface: #FEF6F2; --paw-surface-elevated: #FFFFFF; --paw-surface-muted: #F2E2DC;
  --paw-surface-dark: #1F1515; --paw-surface-darker: #110B0B;
  --paw-ink: #1F1515; --paw-ink-soft: #3D2E2E; --paw-ink-muted: #6B5959;
  --paw-ink-on-dark: #F5EAE5; --paw-ink-muted-on-dark: #B09B9B;
  --paw-border: #E5D2C8; --paw-border-strong: #CDB5A9; --paw-border-on-dark: rgba(245,234,229,0.10);
  --paw-success: #3A7A5C; --paw-warning: #C58A1A; --paw-error: #B23A1A; --paw-info: #2A6B8E;
  --dropdown-outer: #E2CEC4;
}`,
}

export function ThemeSwitcher() {
  const [customOpen, setCustomOpen] = useState(false)

  const switchTheme = useCallback((name: string) => {
    const css = themeCss[name]
    if (!css) return
    localStorage.setItem("paw-theme", name)
    const style = document.querySelector<HTMLStyleElement>("style[data-theme]")
    if (style) {
      style.textContent = css
    } else {
      const s = document.createElement("style")
      s.setAttribute("data-theme", "")
      s.textContent = css
      document.head.appendChild(s)
    }
  }, [])

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[100] flex items-center gap-1.5 rounded-full border border-border bg-surface-elevated p-1.5 shadow-lg">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => switchTheme(t.name)}
            className={cn(
              "h-6 w-6 rounded-full border-2 border-border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
            )}
            style={{ backgroundColor: t.color }}
            title={t.label}
            aria-label={`Switch to ${t.label} theme`}
          />
        ))}
        <button
          onClick={() => setCustomOpen(!customOpen)}
          className="h-6 w-6 rounded-full border-2 border-border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary/50"
          style={{
            background: "linear-gradient(135deg, #FF6B6B, #FFA07A, #FFD93D, #6BCB77, #4D96FF, #9B59B6)",
          }}
          title="Custom Theme"
          aria-label="Open custom theme picker"
        />
      </div>

      <CustomThemePicker open={customOpen} onClose={() => setCustomOpen(false)} />
    </>
  )
}
