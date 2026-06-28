"use client"

import { useState } from "react"
import { site } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2, Star } from "lucide-react"

export function FeedbackForm() {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle")
  const [err, setErr] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (rating === 0) {
      setErr("Pick a star rating to continue")
      return
    }
    setStatus("loading")
    setErr(null)
    const fd = new FormData(e.currentTarget)
    const payload: Record<string, string | number> = { source: "feedback", rating }
    fd.forEach((v, k) => typeof v === "string" && v && (payload[k] = v))
    try {
      const topic = `${site.ntfy.server}/${site.ntfy.feedbackTopic}`
      const lines = [
        `New feedback from pawside.in`,
        ``,
        ...Object.entries(payload).map(([k, v]) => `${k}: ${v}`),
      ]
      // ponytail: raw text to avoid CORS preflight from custom headers
      const res = await fetch(topic, {
        method: "POST",
        body: lines.join("\n"),
      })
      if (!res.ok) throw new Error()
      setStatus("ok")
      // ponytail: >=4 stars → nudge toward Google review. <4 → route back to support.
      if (rating >= 4) {
        setTimeout(() => {
          window.location.href = "https://search.google.com/local/writereview?placeid=ChIJX_jYCgA1rDsRcZJs0bnROac"
        }, 1800)
      }
    } catch {
      setErr("Network error - please call us instead")
      setStatus("err")
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-8 text-center">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-success/15 text-success">
          <Check className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">
          Thanks for the feedback.
        </h3>
        {rating >= 4 ? (
          <>
            <p className="mt-3 text-ink-soft">
              We're sending you to Google to leave a public review. It means a lot.
            </p>
            <p className="mt-2 text-xs text-ink-muted">Redirecting shortly…</p>
          </>
        ) : (
          <p className="mt-3 text-ink-soft">
            Someone from our team will reach out within an hour. We take this seriously.
          </p>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} data-form className="space-y-5">
      <div>
        <Label className="mb-3 block">How was your experience?</Label>
        <div className="flex items-center gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              className="rounded-full p-1 transition-transform hover:scale-110"
            >
              <Star
                className={`h-8 w-8 transition-colors ${
                  n <= (hover || rating) ? "fill-accent text-accent" : "text-border-strong"
                }`}
                aria-hidden="true"
              />
            </button>
          ))}
          {rating > 0 && (
            <span className="ml-3 text-sm text-ink-muted">
              {rating === 5 ? "Loved it" : rating === 4 ? "Good" : rating === 3 ? "Okay" : rating === 2 ? "Could be better" : "Not great"}
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Your name *</Label>
          <Input id="name" name="name" required autoComplete="name" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="service">Which service was this for?</Label>
        <Input id="service" name="service" placeholder="Grooming, walking, boarding…" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Tell us more</Label>
        <Textarea id="message" name="message" rows={4} placeholder="What went well, what could we do better…" />
      </div>

      {err && (
        <p className="rounded-[var(--radius-md)] border border-error/30 bg-error/5 px-3 py-2 text-sm text-error">
          {err}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "loading"}
        className="bg-primary text-primary-foreground shadow-[var(--shadow-cta)] hover:bg-primary-deep disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          "Send feedback"
        )}
      </Button>
    </form>
  )
}
