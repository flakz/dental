import type { Metadata } from "next"
import { site } from "@/lib/config"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: `Talk to a real person at ${site.brand}. Call, WhatsApp, email, or visit us in ${site.city}. We respond within an hour during the day.`,
}

const channels = [
  { icon: <img src="/contact.png" alt="" className="h-5 w-5 object-contain" />, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
  { icon: <img src="/mail.png" alt="" className="h-5 w-5 object-contain" />, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: <img src="/location.png" alt="" className="h-5 w-5 object-contain" />, label: "Visit", value: site.address, href: null },
  { icon: <img src="/hours.png" alt="" className="h-5 w-5 object-contain" />, label: "Hours", value: site.hours, href: null },
]

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/MF-gFcfg3sUCtU.webp" alt="A golden retriever in sunlight" className="h-full w-full object-cover object-[center_30%]" loading="eager" />
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
            {channels.map((c) => {
              const inner = (
                <>
                  <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-primary-soft text-primary-deep">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">{c.label}</p>
                    <p className="mt-1 font-display text-lg font-medium leading-snug text-foreground">{c.value}</p>
                  </div>
                </>
              )
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-5 transition-colors hover:border-ink"
                >
                  {inner}
                </a>
              ) : (
                <div
                  key={c.label}
                  className="flex items-start gap-4 rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-5"
                >
                  {inner}
                </div>
              )
            })}
          </aside>
        </div>
      </section>
    </>
  )
}
