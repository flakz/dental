import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with Microsmiles Dental Care. Visit us in Tamil Nadu, or call to book your dental appointment.`,
}

const locations = [
  {
    name: "Chennai  -  Anna Nagar",
    address: "Ground Floor, AH 11, 4th Ave, Shanthi Colony, Anna Nagar, Chennai, Tamil Nadu 600 040.",
    phone: "+91 90437 53438",
    hours: "Mon  -  Sat: 12pm – 8pm (Sunday Off)",
  },
  {
    name: "Chennai  -  OMR",
    address: "4A 4B 4th Floor, S. C, Sai Selvaraj Complex, 1. Rajiv Gandhi Salai, Semmancheri, Near Sathyabama University, Chennai, Tamil Nadu 600119.",
    phone: "+91 90437 53438",
    hours: "Mon  -  Sun: 11am – 8pm (Wednesday Off)",
  },
  {
    name: "Bangalore  -  Whitefield",
    address: "No: 17, Varthur Main Rd, Kumarapalli, Thubarahalli, Whitefield, Bengaluru, Karnataka 560 066.",
    phone: "+91 81473 80814",
    hours: "Mon  -  Sun: 11am – 8pm (Wednesday Off)",
  },
]

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
            <span className="eyebrow on-dark">Contact</span>
            <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              We're easy to reach, and we actually reply.
            </h1>
            <p className="lead on-dark mt-5">
              For bookings, the form on the Book page goes straight to ops. For everything else, call, email, or drop in.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 pt-16 section-blend md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">Send us a message</h2>
            <p className="mt-3 text-sm text-ink-soft">
              Anything you'd like to ask, suggest, or flag. We read every message.
            </p>
            <div className="mt-8">
              <ContactForm mode="contact" />
            </div>
          </div>

          <aside className="space-y-3">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-5"
              >
                <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">{loc.name}</p>
                <p className="mt-2 text-sm text-ink-soft">{loc.address}</p>
                <a href={`tel:${loc.phone.replace(/\s+/g, "")}`} className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-foreground hover:underline">
                  {loc.phone}
                </a>
                <p className="mt-1 text-xs text-ink-muted">{loc.hours}</p>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </>
  )
}
