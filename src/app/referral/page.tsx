import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Phone } from "lucide-react"
import { site } from "@/lib/config"
import { team } from "@/lib/team"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { HoverLift } from "@/components/motion/hover-lift"
import { TextEffect } from "@/components/core/text-effect"

export const metadata: Metadata = {
  title: "Referral Doctors",
  description: "Information for referring doctors. Microsmiles Dental Care accepts referrals for endodontics, orthodontics, prosthodontics, and paediatric dentistry.",
}

export default function ReferralPage() {
  return (
    <section className="container-page pb-12 pt-28 md:pb-16 md:pt-[120px]">
      <Reveal variant="fadeInUp" className="mx-auto max-w-3xl">
        <span className="eyebrow">For Doctors</span>
        <TextEffect per="word" preset="fade-in-blur" as="h1" className="mt-4 text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-medium leading-[1.02] tracking-[-0.025em]">
          Refer your patients with confidence.
        </TextEffect>
        <p className="lead mt-5">
          Microsmiles accepts referrals from general dentists and physicians across Tamil Nadu. Specialist-led care, detailed reports, and seamless coordination  -  your patient returns to you for routine care after treatment.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.5fr]">
        <Reveal variant="slideInLeft">
          <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-7 shadow-[var(--shadow-md)]">
            <h2 className="font-display text-xl font-medium tracking-tight">Why refer to Microsmiles?</h2>
            <Stagger stagger={0.08} className="mt-6 space-y-4">
              {[
                { t: "11 MDS-qualified specialists across 6 disciplines", d: "Endodontics, orthodontics, prosthodontics, paediatric, periodontics, and oral surgery." },
                { t: "Digital workflows", d: "Digital x-rays, CBCT, intraoral scans, and digital smile design. Referral reports sent within 24 hours." },
                { t: "Seamless coordination", d: "Your patient returns to you for routine care after specialist treatment. We send complete treatment summaries." },
                { t: "Emergency slots", d: "Priority appointments for referred emergency cases. Same-day or next-day guaranteed." },
              ].map(({ t, d }) => (
                <StaggerItem key={t}>
                  <li className="border-l-2 border-primary pl-4">
                    <p className="font-medium text-foreground">{t}</p>
                    <p className="mt-1 text-sm text-ink-soft">{d}</p>
                  </li>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>

        <div>
          <Reveal variant="fadeInUp">
            <h2 className="font-display text-xl font-medium tracking-tight">Our specialists</h2>
          </Reveal>
          <Stagger stagger={0.05} className="mt-5 grid gap-4 sm:grid-cols-2">
            {team.map((t) => (
              <StaggerItem key={t.slug}>
                <HoverLift>
                  <div className="rounded-[var(--radius-lg)] border border-border bg-surface-elevated p-4">
                    <p className="font-display font-medium">{t.name}</p>
                    <p className="text-xs text-primary font-medium">{t.credentials}</p>
                    <p className="text-xs text-ink-muted mt-0.5">{t.role}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal variant="fadeInUp" delay={0.3} className="mt-8">
            <div className="rounded-[var(--radius-xl)] border border-border bg-surface-muted p-6">
              <h3 className="font-display text-lg font-medium">To refer a patient</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Call or WhatsApp us with patient details. We'll schedule the consultation and keep you informed at every step.
              </p>
              <Button asChild className="mt-4 group bg-primary text-primary-foreground shadow-[var(--shadow-cta)] hover:bg-primary-deep">
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                  <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                  {site.phone}
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
