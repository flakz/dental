import type { Metadata, Viewport } from "next"
import { Bricolage_Grotesque } from "next/font/google"
import { site } from "@/lib/config"
import { loadTheme, generateThemeCss, presets } from "@/lib/theme"
import type { ThemeName } from "@/lib/theme"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { ThemeSwitcher } from "@/components/theme-switcher"
import "./globals.css"

const sans = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const theme = loadTheme()
const themeCss = generateThemeCss(theme)

// Build all theme CSS blobs for client-side theme restoration
const allThemeCss = Object.fromEntries(
  (Object.keys(presets) as ThemeName[]).map((name) => [name, generateThemeCss(presets[name])])
)

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.brand} · ${site.tagline}`, template: `%s · ${site.brand}` },
  description: site.description,
  applicationName: site.brand,
  authors: [{ name: site.brand }],
  generator: "Next.js",
  keywords: [
    site.brand, "dental clinic", "dentist", "root canal", "dental implants",
    "teeth whitening", "braces", "invisalign", "kids dentist",
    "Tamil Nadu", "India", "painless dentistry",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    title: `${site.brand} · ${site.tagline}`,
    description: site.description,
    siteName: site.brand,
  },
  twitter: { card: "summary_large_image", title: `${site.brand} · ${site.tagline}`, description: site.description },
  alternates: { canonical: site.url },
  icons: { icon: "/favicon.svg" },
}

export const viewport: Viewport = {
  themeColor: theme.primary,
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.variable}>
      <head>
        <style data-theme dangerouslySetInnerHTML={{ __html: themeCss }} />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){
  try {
    var t = localStorage.getItem("paw-theme");
    if (t === "custom") {
      var css = localStorage.getItem("paw-custom-css");
      if (css) document.querySelector("style[data-theme]").textContent = css;
    } else if (t && ${JSON.stringify(allThemeCss)}[t]) {
      document.querySelector("style[data-theme]").textContent = ${JSON.stringify(allThemeCss)}[t];
    }
  } catch(e){}
})();`
        }} />
      </head>
      <body className="font-sans bg-surface text-foreground antialiased">
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <SmoothScroll>
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
        <ThemeSwitcher />
      </body>
    </html>
  )
}
