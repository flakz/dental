import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Take a Tour",
  description: "Virtual tour of Microsmiles Dental Care clinics in Chennai and Bangalore. See our modern facilities, treatment rooms, and patient lounge.",
}

const tourItems = [
  { title: "Reception & Lounge", desc: "Welcome to Microsmiles. Our reception area is designed to feel warm and calming — not clinical. Comfortable seating, refreshments, and a friendly smile the moment you walk in." },
  { title: "Consultation Rooms", desc: "Private consultation rooms where your doctor discusses diagnosis and treatment plans face-to-face. Digital x-ray viewers and 3D scans displayed on-screen for you to see." },
  { title: "Treatment Rooms", desc: "State-of-the-art treatment rooms with digital dental chairs, microscopes for root canals, and laser equipment for gum surgeries. Sterilisation protocols visible and transparent." },
  { title: "Paediatric Zone", desc: "A dedicated, colourful zone for kids — child-sized chairs, ceiling-mounted TVs playing cartoons, and a gentle approach that makes dental visits something children actually enjoy." },
  { title: "Digital Lab", desc: "Our in-house digital lab handles crowns, veneers, and aligners. Same-day crowns possible with CEREC technology. No waiting weeks for your restoration." },
  { title: "Sterilisation Suite", desc: "Autoclave sterilisation for every instrument. Single-use disposable items where applicable. Cross-infection protocols that exceed RDA standards." },
]

export default function TakeATourPage() {
  return (
    <section className="container-page pb-12 pt-28 md:pb-16 md:pt-[120px]">
      <div className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Take a Tour</span>
        <h1 className="mt-4 text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em]">
          See Microsmiles <span className="text-primary">up close.</span>
        </h1>
        <p className="lead mt-5">
          Modern clinics, specialist teams, and a patient-first environment. Take a visual walk through our Anna Nagar, OMR, and Whitefield locations.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tourItems.map((item) => (
          <div key={item.title} className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-7 shadow-[var(--shadow-md)]">
            <div className="aspect-video w-full rounded-[var(--radius-lg)] bg-surface-muted flex items-center justify-center text-ink-muted text-sm">
              [ Tour image — {item.title} ]
            </div>
            <h2 className="mt-5 font-display text-lg font-medium leading-tight tracking-tight">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-ink-muted">
          Prefer a real visit? Walk into any of our clinics during operating hours — no appointment needed for a first look.
        </p>
        <Button asChild className="mt-5 group bg-primary text-primary-foreground shadow-[var(--shadow-cta)] hover:bg-primary-deep">
          <Link href="/contact">
            Find a clinic near you
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
