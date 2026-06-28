import type { Metadata } from "next"
import { AboutContent } from "./about-content"

export const metadata: Metadata = {
  title: "About",
  description: `Painless dentistry, adopted from the UK, now in India. Meet the MDS-qualified specialists at Microsmiles.`,
}

export default function AboutPage() {
  return <AboutContent />
}
