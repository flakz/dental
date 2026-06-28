import type { Metadata } from "next"
import { Heart, ShieldCheck, Clock, Sparkles } from "lucide-react"
import { team } from "@/lib/team"

export const metadata: Metadata = {
  title: "About",
  description: `Painless dentistry, adopted from the UK, now in India. Meet the MDS-qualified specialists at Microsmiles.`,
}

const values = [
  { icon: Heart, t: "Painless, or it's on us", d: "If you feel pain during treatment, we stop, reassess, and adjust. Your comfort is non-negotiable." },
  { icon: ShieldCheck, t: "Specialist-led, not generalist", d: "Every Microsmiles doctor is MDS-qualified in their field — not a general dentist doing everything." },
  { icon: Clock, t: "See you within the hour", d: "Book online or walk in. We confirm your appointment within an hour of your first enquiry." },
  { icon: Sparkles, t: "Upfront pricing, no surprises", d: "You get a clear treatment plan with costs before any procedure. No hidden charges, no surprises." },
]

const milestones = [
  { year: "2019", t: "First clinic in Anna Nagar", d: "Founded by UK-trained clinicians. Two chairs, one vision — painless dentistry." },
  { year: "2021", t: "OMR Clinic opens", d: "Expanded to Semmancheri, OMR. Added digital x-ray and microscope-assisted treatments." },
  { year: "2023", t: "Bangalore — Whitefield", d: "Crossed the state border. Third clinic opens in Whitefield, Bengaluru." },
  { year: "2024", t: "11 specialists, 3 locations", d: "Team grows to 11 MDS doctors. 1,477+ Google reviews. 4.9★ rating." },
  { year: "2026", t: "15,000+ smiles restored", d: "From root canals to full mouth rehabilitation — across Chennai and Bangalore." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/A-blake-Y-b79Mg0O-4.webp" alt="Dental clinic" className="h-full w-full object-cover object-[center_30%]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/10" />
          <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="container-page pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-2xl text-background">
            <span className="eyebrow on-dark">About us</span>
            <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              Painless dentistry, adopted from the UK, now in India.
            </h1>
            <p className="lead on-dark mt-5">
              We're a Chennai and Bangalore team of MDS-qualified specialists, on a mission to make every dental visit something you don't dread — but actually look forward to.
            </p>
          </div>
        </div>
      </section>

      {/* Founder story - split */}
      <section className="pb-10 pt-20 section-blend">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
            <div className="p-[6px]">
              <div className="relative aspect-[5/4] overflow-hidden rounded-[24px] shadow-sm">
                <div className="flex h-full w-full items-center justify-center bg-primary-soft text-[3rem] font-display font-medium text-primary-deep">
                  MS
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3vw+1rem,3.25rem)] font-normal leading-[1.05] tracking-[-0.022em]">
              World-class dental care, closer to home.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                Microsmiles was founded with one belief — that world-class dentistry shouldn't require a flight to another country. Our clinical director trained at the University of Edinburgh, UK, and brought back protocols that prioritise patient comfort above all.
              </p>
              <p>
                In 2019, we opened our first clinic in Anna Nagar, Chennai. The response was overwhelming — patients travelled from across the city for painless root canals, implants, and paediatric care they couldn't find elsewhere.
              </p>
              <p>
                Today we operate three clinics across Chennai and Bangalore, with a team of 11 MDS-qualified specialists covering endodontics, orthodontics, prosthodontics, and paediatric dentistry. Same team, same standards — just more smiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-y-sm section-blend ">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">What we hold</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3vw+1rem,3.25rem)] font-normal leading-[1.05] tracking-[-0.022em]">
              Four values, kept simple.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-7">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary-deep">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-medium leading-tight tracking-tight">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-y-sm section-blend ">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">Our journey</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3vw+1rem,3.25rem)] font-normal leading-[1.05] tracking-[-0.022em]">
              From one chair to three clinics.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {milestones.map(({ year, t, d }) => (
              <div key={year + t} className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-7">
                <span className="font-display text-sm font-medium text-primary">{year}</span>
                <h3 className="mt-2 font-display text-lg font-medium leading-tight tracking-tight">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Team */}
      <section className="section-y-sm section-blend ">
        <div className="container-page">
          <div className="max-w-2xl">
            <p className="eyebrow">The team</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3vw+1rem,3.25rem)] font-normal leading-[1.05] tracking-[-0.022em]">
              A few of the people behind the visits.
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {team.map((t) => (
              <div key={t.slug} className="overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
                <div className="p-[6px]">
                  <div className="relative aspect-square overflow-hidden rounded-[20px] shadow-sm">
                    <div className="flex h-full w-full items-center justify-center bg-primary-soft text-[2rem] font-display font-medium text-primary-deep">
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4 pt-1">
                  <p className="font-display text-base font-medium leading-tight tracking-tight">{t.name}</p>
                  <p className="mt-0.5 text-xs text-ink-muted">{t.credentials}</p>
                  <p className="text-xs text-primary">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
