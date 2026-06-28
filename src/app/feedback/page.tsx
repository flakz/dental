import type { Metadata } from "next"
import { Check, Phone } from "lucide-react"
import { site } from "@/lib/config"
import { FeedbackForm } from "@/components/feedback-form"

export const metadata: Metadata = {
  title: "Share Your Feedback",
  description: `Rate your experience at Microsmiles Dental Care. Your feedback helps us improve every visit.`,
}

export default function FeedbackPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/J-street-UtrE5DcgEyg.webp" alt="A golden retriever outdoors" className="h-full w-full object-cover object-[center_30%]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/10" />
          <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="container-page pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-2xl text-background">
            <span className="eyebrow on-dark">Your feedback</span>
            <h1 className="text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em]">
              How was your visit?
            </h1>
            <p className="lead on-dark mt-5">
              Your feedback helps us make every visit better. Share your experience at Microsmiles Dental Care.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page pb-20 pt-16 section-blend md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <FeedbackForm />
          </div>
          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6">
              <h3 className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                What happens next
              </h3>
              <ul className="space-y-2.5 text-sm text-ink-soft">
                {[
                  "4 or 5 stars: thank you, and we nudge you to Google",
                  "Below 4 stars: a real person calls you within an hour",
                  "Either way, your message lands in our internal queue",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-success" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6">
              <h3 className="mb-3 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Prefer to call?
              </h3>
              <p className="text-sm text-ink-soft">
                Sometimes a voice note is faster. Reach us directly:
              </p>
              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-surface hover:bg-ink/90"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
