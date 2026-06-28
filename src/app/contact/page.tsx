import type { Metadata } from "next"
import { site } from "@/lib/config"
import { ContactForm } from "@/components/contact-form"
import { Reveal } from "@/components/motion/reveal"
import { TextEffect } from "@/components/core/text-effect"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with Microsmiles Dental Care. Visit us in Tamil Nadu, or call to book your dental appointment.`,
}

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/hero-dental.webp" alt="Modern dental clinic" className="h-full w-full object-cover object-[center_30%]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/10" />
          <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="container-page pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-2xl text-background">
            <Reveal variant="fadeInUp">
              <span className="eyebrow on-dark">Contact</span>
            </Reveal>
            <Reveal variant="fadeInUp" delay={0.1}>
              <TextEffect per="word" preset="fade-in-blur" as="h1" className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
                We're easy to reach, and we actually reply.
              </TextEffect>
            </Reveal>
            <Reveal variant="fadeInUp" delay={0.2}>
              <p className="lead on-dark mt-5">
                For bookings, the form on the Book page goes straight to ops. For everything else, call, email, or drop in.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 pt-16 section-blend md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal variant="fadeInUp">
            <div>
              <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Send us a message</h2>
              <p className="mt-3 text-sm text-ink-soft">
                Anything you'd like to ask, suggest, or flag. We read every message.
              </p>
              <div className="mt-8">
                <ContactForm mode="contact" />
              </div>
            </div>
          </Reveal>

          <Reveal variant="slideInRight" delay={0.2}>
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">Tamil Nadu</p>
              <p className="mt-2 text-sm text-ink-soft">{site.address}</p>
              <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">
                {site.phone}
              </a>
              <p className="mt-1 text-xs text-ink-muted">{site.hours}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
