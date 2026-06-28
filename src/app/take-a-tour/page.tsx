import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { HoverLift } from "@/components/motion/hover-lift"
import { TextEffect } from "@/components/core/text-effect"

export const metadata: Metadata = {
  title: "Take a Tour",
  description: "Virtual tour of Microsmiles Dental Care clinics across Tamil Nadu. See our modern facilities, treatment rooms, and patient lounge.",
}

const tourItems = [
  { title: "Reception & Lounge", desc: "Welcome to Microsmiles. Our reception area is designed to feel warm and calming  -  not clinical. Comfortable seating, refreshments, and a friendly smile the moment you walk in.", img: "/clinic-reception.webp" },
  { title: "Consultation Rooms", desc: "Private consultation rooms where your doctor discusses diagnosis and treatment plans face-to-face. Digital x-ray viewers and 3D scans displayed on-screen for you to see.", img: "/service-root-canal.webp" },
  { title: "Treatment Rooms", desc: "State-of-the-art treatment rooms with digital dental chairs, microscopes for root canals, and laser equipment for gum surgeries. Sterilisation protocols visible and transparent.", img: "/hero-dental.webp" },
  { title: "Paediatric Zone", desc: "A dedicated, colourful zone for kids  -  child-sized chairs, ceiling-mounted TVs playing cartoons, and a gentle approach that makes dental visits something children actually enjoy.", img: "/service-kids.webp" },
  { title: "Digital Lab", desc: "Our in-house digital lab handles crowns, veneers, and aligners. Same-day crowns possible with CEREC technology. No waiting weeks for your restoration.", img: "/service-crown-lab.webp" },
  { title: "Sterilisation Suite", desc: "Autoclave sterilisation for every instrument. Single-use disposable items where applicable. Cross-infection protocols that exceed RDA standards.", img: "/service-tools.webp" },
]

export default function TakeATourPage() {
  return (
    <section className="container-page pb-12 pt-28 md:pb-16 md:pt-[120px]">
      <Reveal variant="fadeInUp" className="mx-auto max-w-3xl text-center">
        <span className="eyebrow">Take a Tour</span>
        <TextEffect per="word" preset="fade-in-blur" as="h1" className="mt-4 text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em]">
          See Microsmiles up close.
        </TextEffect>
        <p className="lead mt-5">
          Modern clinics, specialist teams, and a patient-first environment. Take a visual walk through our multiple locations across Tamil Nadu.
        </p>
      </Reveal>

      <Stagger stagger={0.08} className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tourItems.map((item) => (
          <StaggerItem key={item.title}>
            <HoverLift>
              <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-7 shadow-[var(--shadow-md)]">
                <img src={item.img} alt={item.title} className="aspect-video w-full rounded-[var(--radius-lg)] object-cover" />
                <h2 className="mt-5 font-display text-lg font-medium leading-tight tracking-tight">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.desc}</p>
              </div>
            </HoverLift>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal variant="fadeInUp" className="mt-14 text-center">
        <p className="text-ink-muted">
          Prefer a real visit? Walk into any of our clinics during operating hours  -  no appointment needed for a first look.
        </p>
        <Button asChild className="mt-5 group bg-primary text-primary-foreground shadow-[var(--shadow-cta)] hover:bg-primary-deep">
          <Link href="/contact">
            Find a clinic near you
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </Button>
      </Reveal>
    </section>
  )
}
