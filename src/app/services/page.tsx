import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { services, type Service } from "@/lib/services"
import { images } from "@/lib/images"
import { site } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { CardsParallax } from "@/components/cards-parallax"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { HoverLift } from "@/components/motion/hover-lift"
import { TextEffect } from "@/components/core/text-effect"

export const metadata: Metadata = {
  title: "Services",
  description: `From root canals to kids dentistry  -  ${services.length} dental services across Tamil Nadu. Specialist-led, painless, and affordable.`,
}

const categoryLabel: Record<Service["category"], string> = {
  adult: "Adult Dentistry",
  kids: "Kids Dentistry",
}
const categoryOrder: Service["category"][] = ["adult", "kids"]

export default function ServicesPage() {
  const grouped = categoryOrder.map((c) => ({
    cat: c,
    items: services.filter((s) => s.category === c),
  }))

  return (
    <>
      <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/clinic-reception.webp" alt="Dental clinic reception area" className="h-full w-full object-cover object-[center_30%]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/10" />
          <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="container-page pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-2xl text-background">
            <Reveal variant="fadeInUp">
              <span className="eyebrow on-dark">Our services</span>
            </Reveal>
            <Reveal variant="fadeInUp" delay={0.1}>
              <TextEffect per="word" preset="fade-in-blur" as="h1" className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                Complete dental care for every age.
              </TextEffect>
            </Reveal>
            <Reveal variant="fadeInUp" delay={0.2}>
              <p className="lead on-dark mt-5">
                Browse by category below. Starting prices listed; final cost depends on the case complexity, confirmed at consultation.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Desktop: grouped grid */}
      <div className="hidden lg:block">
        {grouped.map((g) => (
          <section key={g.cat} className="section-y-sm section-blend">
            <div className="container-page">
              <Reveal variant="fadeInUp" className="mb-10 flex items-end justify-between border-b border-border pb-4">
                <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {categoryLabel[g.cat]}
                </h2>
                <span className="text-sm text-ink-muted">
                  {g.items.length} {g.items.length === 1 ? "service" : "services"}
                </span>
              </Reveal>
              <Stagger stagger={0.05} className="grid gap-5 grid-cols-3">
                {g.items.map((s) => (
                  <StaggerItem key={s.slug}>
                    <HoverLift>
                      <ServiceCard s={s} />
                    </HoverLift>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </section>
        ))}
      </div>

      {/* Mobile: parallax stack all services */}
      <div className="lg:hidden section-y-sm section-blend">
        <div className="container-page">
          <CardsParallax>
            {services.map((s) => <ServiceCard key={s.slug} s={s} />)}
          </CardsParallax>
        </div>
      </div>

    </>
  )
}

function ServiceCard({ s }: { s: Service }) {
  const key = s.slug as keyof typeof images
  const img = (images as any)[key] ?? images.kitten
  return (
    <Link href={`/services/${s.slug}`} className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
      <div className="p-[6px]">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-sm">
          <Image src={`/${img.file}`} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-5">
        <h3 className="font-display text-xl font-medium leading-tight tracking-tight">{s.name}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{s.short}</p>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <span className="text-sm font-medium text-foreground">From <span className="font-display">{s.startingPrice}</span></span>
          <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}
