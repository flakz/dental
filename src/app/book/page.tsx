import type { Metadata } from "next"
import { site } from "@/lib/config"
import { ContactForm } from "@/components/contact-form"
import { Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Book a dental appointment at Microsmiles Dental Care. Root canal, implants, scaling, braces, kids dentistry — ${site.city} and Bangalore.`,
}

const serviceOptions = [] as { value: string; label: string }[]

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
            <span className="eyebrow on-dark">Book an Appointment</span>
            <h1 className="text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em]">
              Book your appointment.
            </h1>
            <p className="lead on-dark mt-5">
              Fill in the form and our team will reach out to confirm your visit at Microsmiles Dental Care.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 pt-16 section-blend md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Book a service</h2>
            <p className="mt-3 text-sm text-ink-soft">
              Tell us what you need and when. We'll match the right treatment coordinator and confirm by phone.
            </p>
            <div className="mt-8">
              <ContactForm mode="book" services={serviceOptions} showService showSchedule />
            </div>
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6">
              <h3 className="mb-4 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Our Locations
              </h3>
              <ul className="divide-y divide-border text-sm">
                <li className="py-3">
                  <p className="font-medium text-foreground">Chennai — Anna Nagar</p>
                  <p className="mt-1 text-ink-soft">Ground Floor, AH 11, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600 040.</p>
                  <p className="mt-1 text-ink-muted">Mon — Sat: 12pm – 8pm (Sunday Off)</p>
                </li>
                <li className="py-3">
                  <p className="font-medium text-foreground">Chennai — OMR</p>
                  <p className="mt-1 text-ink-soft">4A 4B 4th Floor, S. C, Sai Selvaraj Complex, 1. Rajiv Gandhi Salai, Semmancheri, Near Sathyabama University, Chennai, Tamil Nadu 600119.</p>
                  <p className="mt-1 text-ink-muted">Mon — Sun: 11am – 8pm (Wednesday Off)</p>
                </li>
                <li className="py-3">
                  <p className="font-medium text-foreground">Bangalore — Whitefield</p>
                  <p className="mt-1 text-ink-soft">No: 17, Varthur Main Rd, Kumarapalli, Thubarahalli, Whitefield, Bengaluru, Karnataka 560 066.</p>
                  <p className="mt-1 text-ink-muted">Mon — Sun: 11am – 8pm (Wednesday Off)</p>
                </li>
              </ul>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6">
              <h3 className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Contact
              </h3>
              <ul className="space-y-2.5 text-sm text-ink-soft">
                {[
                  "Chennai: +91 90437 53438",
                  "Bangalore: +91 81473 80814",
                  "No payment upfront",
                  "Same-day appointments available",
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
