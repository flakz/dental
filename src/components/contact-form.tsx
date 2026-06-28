"use client"

import { useState } from "react"
import { site } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2 } from "lucide-react"

type Mode = "contact" | "book"

interface Props {
  mode: Mode
  services?: { value: string; label: string }[]
  showService?: boolean
  showSchedule?: boolean
}

export function ContactForm({ mode, services = [], showService = false, showSchedule = false }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle")
  const [err, setErr] = useState<string | null>(null)
  const [website, setWebsite] = useState("") // honeypot

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (website) return // bot
    setStatus("loading")
    setErr(null)
    const fd = new FormData(e.currentTarget)
    const payload: Record<string, string> = { source: mode }
    fd.forEach((v, k) => typeof v === "string" && v && (payload[k] = v))
    try {
      const topic = `${site.ntfy.server}/${site.ntfy.topic}-${mode}`
      const lines = [
        `New ${mode === "book" ? "booking" : "contact"} from pawside.in`,
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
          {mode === "book" ? "Booking received." : "Message received."}
        </h3>
        <p className="mt-3 text-ink-soft">
          {mode === "book"
            ? "We'll call you back within an hour to confirm time and final price. No payment upfront."
            : "We'll get back to you within an hour. For anything urgent, call us directly."}
        </p>
        <Button asChild variant="outline" className="mt-6 rounded-full">
          <a href="/">Back to home</a>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} data-form className="space-y-5">
      {/* honeypot - hidden from users, bots fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">Your name *</Label>
          <Input id="name" name="name" required autoComplete="name" placeholder="Suheb Khan" />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="+91 98431 69119" />
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email">Email (optional)</Label>
        <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" />
      </div>

      {showService && services.length > 0 && (
        <div className="space-y-1.5">
          <Label htmlFor="service">Service</Label>
          <select
            id="service"
            name="service"
            className="field-input flex h-10 w-full rounded-[var(--radius-md)] border border-border bg-surface-elevated px-3 text-sm text-foreground"
          >
            <option value="">Pick a service</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
      )}

      {showSchedule && (
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="date">Preferred date</Label>
            <Input id="date" name="date" type="date" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="time">Preferred time</Label>
            <Input id="time" name="time" type="time" />
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        <Label htmlFor="pet">Pet (name, breed, age)</Label>
        <Input id="pet" name="pet" placeholder="Banno, indie, 3 yrs" />
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">Anything we should know?</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Allergies, behaviour, special instructions, anything."
        />
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
        ) : mode === "book" ? (
          "Request a booking"
        ) : (
          "Send message"
        )}
      </Button>

      <p className="text-xs text-ink-muted">
        By submitting you agree to be contacted by phone or WhatsApp. We never share your details.
      </p>
    </form>
  )
}
