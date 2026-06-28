import type { Metadata } from "next"
import { site } from "@/lib/config"
import { services } from "@/lib/services"
import { ContactForm } from "@/components/contact-form"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Book a service",
  description: `Book doorstep pet care from ${site.brand} in 60 seconds. We confirm by phone within an hour. No payment upfront, no commitment.`,
}

const startingPrices = services.slice(0, 6)
const serviceOptions = services.map((s) => ({ value: s.slug, label: s.name }))

export default function BookPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/G-bobadilla-KY2lF_aUcxc.webp" alt="A german shepherd puppy on grass" className="h-full w-full object-cover object-[center_30%]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/10" />
          <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="container-page pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-2xl text-background">
            <span className="eyebrow on-dark">Book a service</span>
            <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              Book in 60 seconds. Confirmation by phone within an hour.
            </h1>
            <p className="lead on-dark mt-5">
              Fill in the form, we'll match the right caregiver, and call you back to lock in time and final price. No payment upfront, no commitment.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 pt-16 section-blend md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Book a service</h2>
            <p className="mt-3 text-sm text-ink-soft">
              Tell us what you need and when. We'll match the right caregiver and confirm by phone.
            </p>
            <div className="mt-8">
              <ContactForm mode="book" services={serviceOptions} showService showSchedule />
            </div>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6">
              <h3 className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Starting prices
              </h3>
              <ul className="divide-y divide-border">
                {startingPrices.map((s) => (
                  <li key={s.slug} className="flex items-center justify-between py-3 text-sm">
                    <span className="text-foreground">{s.name}</span>
                    <span className="font-display font-medium">{s.startingPrice}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink-muted">
                Final price depends on breed, size and add-ons. We confirm on the call.
              </p>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6">
              <h3 className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                You're protected
              </h3>
              <ul className="space-y-2.5 text-sm text-ink-soft">
                {[
                  "Background-verified caregivers",
                  "Free cancellation up to 4h before",
                  "No payment upfront",
                  "Real-time updates on every visit",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-success" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
