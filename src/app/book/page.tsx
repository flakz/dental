import type { Metadata } from "next"
import { site } from "@/lib/config"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/motion/reveal"
import { TextEffect } from "@/components/core/text-effect"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Book a dental appointment at Microsmiles Dental Care. Root canal, implants, scaling, braces, kids dentistry  -  ${site.city} and Bangalore.`,
}

const serviceOptions = [] as { value: string; label: string }[]

export default function BookPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/service-smile.webp" alt="Beautiful smile" className="h-full w-full object-cover object-[center_30%]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/10" />
          <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="container-page pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-2xl text-background">
            <Reveal variant="fadeInUp">
              <span className="eyebrow on-dark">Book an Appointment</span>
            </Reveal>
            <Reveal variant="fadeInUp" delay={0.1}>
              <TextEffect per="word" preset="fade-in-blur" as="h1" className="text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em] text-white">
                Book your appointment.
              </TextEffect>
            </Reveal>
            <Reveal variant="fadeInUp" delay={0.2}>
              <p className="lead on-dark mt-5">
                Fill in the form and our team will reach out to confirm your visit at Microsmiles Dental Care.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 pt-16 section-blend md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal variant="fadeInUp">
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Book a service</h2>
              <p className="mt-3 text-sm text-ink-soft">
                Tell us what you need and when. We'll match the right treatment coordinator and confirm by phone.
              </p>
              <div className="mt-8">
                <ContactForm mode="book" services={serviceOptions} showService showSchedule />
              </div>
            </div>
          </Reveal>
          <Reveal variant="slideInRight" delay={0.2}>
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6">
                <h3 className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  Tamil Nadu
                </h3>
                <p className="text-sm text-ink-soft">{site.address}</p>
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">
                  {site.phone}
                </a>
                <p className="mt-1 text-xs text-ink-muted">{site.hours}</p>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}
