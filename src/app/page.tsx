import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Star, ShieldCheck, Clock, Heart, PawPrint, Check } from "lucide-react"
import { site } from "@/lib/config"
import { services, type Service } from "@/lib/services"
import { images } from "@/lib/images"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  SectionHeading,
  SectionHeadingTagline,
  SectionHeadingTitle,
  SectionHeadingBody,
} from "@/components/shadcncraft/pro-marketing/section-heading"
import FAQ2 from "@/components/watermelon-ui/faq-2"
import { CardsParallax } from "@/components/cards-parallax"

const stats = [
  { value: "4.9", suffix: "★", label: "Google rating", detail: "1,200+ reviews" },
  { value: "8,000", suffix: "+", label: "Pets cared for", detail: "Across Tamil Nadu" },
  { value: "8am – 8pm", suffix: "", label: "Open every day", detail: "Including holidays" },
]

const steps = [
  { n: "01", title: "Tell us about your pet", body: "Share breed, age, quirks and what they need. Booking takes 60 seconds." },
  { n: "02", title: "We match the right caregiver", body: "Our team picks a trained, background-verified pro near you in Krishnagiri." },
  { n: "03", title: "Confirm by phone in an hour", body: "We call to lock in time, final price and any special instructions." },
  { n: "04", title: "Updates, photos, real humans", body: "Live GPS, photos, and a 24×7 support line if anything comes up." },
]

const testimonials = [
  {
    name: "Aditi R.",
    role: "Koramangala · Dog mom to Banno",
    rating: 5,
    quote: "Banno came back from grooming calmer than she's ever been. The groomer brought her own setup, didn't rush, and sent photos mid-bath. Genuinely the most thoughtful pet service I've used.",
  },
  {
    name: "Karthik M.",
    role: "HSR Layout · Boarding for Simba",
    rating: 5,
    quote: "Left Simba for ten days over a work trip. Daily videos, same feeding routine, and the host family sent a goodbye photo. The anxiety I'd built up about it was completely unfounded.",
  },
  {
    name: "Sneha V.",
    role: "Kanchipuram · Training for Pluto",
    rating: 5,
    quote: "Pluto used to lunge at every other dog. After six sessions in our apartment, he walks past street dogs like they're furniture. The trainer gave us a plan we could actually keep up with.",
  },
  {
    name: "Rohan S.",
    role: "Krishnagiri · Walking for Cooper",
    rating: 5,
    quote: "Cooper's walker is the same person every morning. Cooper waits by the gate at 6:55am. The GPS report card at the end of the walk is a small touch that makes a huge difference.",
  },
  {
    name: "Priya K.",
    role: "Chennai · Fresh food for Milo",
    rating: 5,
    quote: "Milo's a fussy eater and we'd tried everything. The fresh food from PawSide was the first time he finished his bowl in months. The insulated packaging keeps it fresh even in Chennai heat.",
  },
  {
    name: "Vikram T.",
    role: "Bangalore · Taxi for Luna",
    rating: 5,
    quote: "Luna hates car rides. The PawSide taxi driver was patient, had a non-slip mat ready, and played soft music the whole way. She arrived at the vet calmer than I expected.",
  },
  {
    name: "Meera J.",
    role: "Hosur · Boarding for Tucker",
    rating: 5,
    quote: "We had a family emergency and needed Tucker placed same-day. PawSide found a host family within two hours. Tucker came back happy, and the host still sends us updates.",
  },
  {
    name: "Arjun N.",
    role: "Coimbatore · Grooming for Zoya",
    rating: 5,
    quote: "Zoya's coat was a mess after monsoon. The groomer handled her mats gently, didn't shave her down, and gave us a brushing schedule. Three weeks later her coat looks better than ever.",
  },
]


const faqs = [
  { q: "Do you serve outside Krishnagiri?", a: "Yes. We cover Krishnagiri town and most of Krishnagiri district, plus select areas of Hosur, Bangalore (Koramangala, HSR, Indiranagar), Chennai and Kanchipuram. Add your pincode at booking and we'll confirm availability." },
  { q: "How do I know my caregiver is trustworthy?", a: "Every PawSide caregiver is background-verified, trained in pet first-aid, and observed on their first three visits. We share the caregiver's name, photo and rating before the visit, and you can message them directly." },
  { q: "What's the booking and payment flow?", a: "Book in 60 seconds, get a confirmation call within an hour. No payment upfront. You pay after the visit via UPI, card or cash. Cancellation is free up to 4 hours before the visit." },
  { q: "What if my pet needs urgent care?", a: "We have a 24×7 support line and on-call vet-techs. For emergencies we help you reach the nearest partner clinic and stay on the line with you until your pet is seen." },
  { q: "Is the fresh food really fresh?", a: "Yes - meals are cooked the morning of delivery in our partner kitchen in Krishnagiri. Ingredients are vet-approved, human-grade, and free of preservatives. We deliver in insulated boxes that keep food safe for 6 hours." },
]

const categoryLabel: Record<Service["category"], string> = {
  adult: "Adult Dentistry",
  kids: "Kids Dentistry",
}

export default function HomePage() {
  return (
    <>
      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative isolate section-blend">
        <div className="container-page grid gap-12 pb-10 pt-28 md:pb-10 md:pt-28 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="rounded-full bg-primary-soft px-3 py-1 text-primary-deep hover:bg-primary-soft">
                <PawPrint className="mr-1 h-3 w-3" aria-hidden="true" />
                Doorstep · {site.city}
              </Badge>
              <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                <Star className="h-3 w-3 fill-current text-accent" aria-hidden="true" />
                4.9 on Google
              </span>
            </div>

            <h1 className="mt-6 text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-medium leading-[0.98] tracking-[-0.025em]">
              Pet care,{" "}
              <span className="text-primary">the way it should be.</span>
            </h1>

            <p className="lead mt-7" style={{ maxWidth: 587 }}>
              Grooming, boarding, training, walking, fresh food, taxi and a gentle goodbye, from one trusted team that treats your pet like their own. <span className="text-primary font-medium">Previously JK Kennels.</span> Doorstep across Tamil Nadu, every day of the week.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button asChild className="group bg-primary text-primary-foreground shadow-[var(--shadow-cta)] hover:bg-primary-deep">
                <Link href="/book">
                  Book a service
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-surface-muted/50 border-border/60">
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                  Call {site.phone}
                </a>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="border-l border-border pl-4">
                  <dt className="whitespace-nowrap font-display text-2xl font-medium leading-none tracking-tight text-foreground">
                    {s.value}<span className="text-primary">{s.suffix}</span>
                  </dt>
                  <dd className="mt-1.5 text-xs text-ink-muted">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Hero image with floating card */}
          <div className="relative">
            <div className="overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
              <div className="p-[6px]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] shadow-sm">
                  <Image
                    src={`/${images.hero.goldenPortrait.file}`}
                    alt={images.hero.goldenPortrait.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <div className="absolute -left-6 bottom-10 hidden rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-4 shadow-[var(--shadow-md)] sm:flex sm:items-center sm:gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary-deep">
                <img src="/home1.png" alt="" className="h-6 w-6 object-contain" />
              </div>
              <div>
                <p className="font-display text-lg font-medium leading-none">8,000+ pets</p>
                <p className="mt-1 text-xs text-ink-muted">cared for across Tamil Nadu</p>
              </div>
            </div>

            {/* Floating review pill */}
            <div className="absolute -right-4 top-8 hidden rounded-full border border-border bg-surface-elevated px-3 py-1.5 shadow-[var(--shadow-sm)] sm:flex sm:items-center sm:gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-success" aria-hidden="true" />
              <span className="text-xs font-medium">Verified caregivers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES
          ============================================================ */}
      <section className="section-y-sm section-blend">
        <div className="container-page">
          <SectionHeading alignment="left" className="max-w-3xl">
            <SectionHeadingTagline>What we do</SectionHeadingTagline>
            <SectionHeadingTitle as="h2" className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.02em]">
              One team for every kind of care your pet needs.
            </SectionHeadingTitle>
            <SectionHeadingBody>
              Starting prices below. Final price depends on breed, size and add-ons, confirmed when we call you back.
            </SectionHeadingBody>
          </SectionHeading>

          {/* Mobile: parallax stack, Desktop: grid */}
          <div className="lg:hidden">
            <CardsParallax>
              {services.map((s) => {
                const key = s.slug as keyof typeof images
                const img = (images as any)[key] ?? images.kitten
                return (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
                    <div className="p-[6px]">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-sm ring-[1.5px] ring-white/80">
                        <Image src={`/${img.file}`} alt={img.alt} fill sizes="100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-5">
                      <h3 className="font-display text-lg font-medium leading-tight tracking-tight">{s.name}</h3>
                      <p className="text-sm leading-relaxed text-ink-soft">{s.short}</p>
                      <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                        <span className="text-sm font-medium text-foreground">From <span className="font-display">{s.startingPrice}</span></span>
                        <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </CardsParallax>
          </div>
          <div className="mt-12 hidden lg:grid lg:grid-cols-4 lg:gap-4">
            {services.map((s) => {
              const key = s.slug as keyof typeof images
              const img = (images as any)[key] ?? images.kitten
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
                  <div className="p-[6px]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-md ring-[1.5px] ring-white/80">
                      <Image src={`/${img.file}`} alt={img.alt} fill sizes="25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 px-5 pb-5 pt-5">
                    <h3 className="font-display text-lg font-medium leading-tight tracking-tight">{s.name}</h3>
                    <p className="text-sm leading-relaxed text-ink-soft">{s.short}</p>
                    <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
                      <span className="text-sm font-medium text-foreground">From <span className="font-display">{s.startingPrice}</span></span>
                      <ArrowUpRight className="h-4 w-4 text-ink-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY PAWSIDE - split image + copy
          ============================================================ */}
      <section className="section-y-sm section-blend">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="relative">
            <div className="overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
              <div className="p-[6px]">
                <div className="aspect-[5/6] overflow-hidden rounded-[24px] shadow-sm">
                  <Image
                    src={`/${images.kitten.file}`}
                    alt={images.kitten.alt}
                    width={900}
                    height={1080}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-[var(--radius-xl)] bg-surface-elevated p-5 text-foreground shadow-[var(--shadow-lg)] sm:block">
              <p className="font-display text-3xl font-medium leading-none">10+ years</p>
              <p className="mt-1.5 text-xs text-ink-muted">Of JK Kennels & PawSide, in {site.city}</p>
            </div>
          </div>

          <div>
            <p className="eyebrow">Why PawSide</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3vw+1rem,3.25rem)] font-normal leading-[1.05] tracking-[-0.022em]">
              Built by pet people, for pet people.{" "}
              <span className="serif-italic text-primary font-semibold">No shortcuts.</span>
            </h2>
            <p className="lead mt-6" style={{ maxWidth: 624 }}>
              We started as a small kennel in Krishnagiri in 2015, and grew into a full doorstep service because the alternatives let us down. Every visit, every meal, every walk - built around what we'd want for our own pets.
            </p>

            <ul className="mt-9 space-y-4">
              {[
                { icon: ShieldCheck, t: "Background-verified, pet-first-aid trained", d: "Every caregiver is vetted, observed, and rated after every visit." },
                { icon: Clock, t: "Live updates on every visit", d: "GPS route, photos, and a real report card before the walker leaves your gate." },
                { icon: Heart, t: "We treat them like our own", d: "If something doesn't feel right, we don't send them. Simple as that." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex items-start gap-4">
                  <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-border bg-surface-elevated text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{t}</p>
                    <p className="mt-0.5 text-sm text-ink-soft">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS - 4 steps
          ============================================================ */}
      <section className="section-y-sm section-blend">
        <div className="container-page">
          <SectionHeading alignment="center" className="mx-auto max-w-2xl">
            <SectionHeadingTagline>How it works</SectionHeadingTagline>
            <SectionHeadingTitle as="h2" className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.02em]">
              From booking to belly rub in four steps.
            </SectionHeadingTitle>
          </SectionHeading>

          <ol className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.n} className="relative flex flex-col gap-3 bg-surface-elevated p-6 lg:p-7">
                <span className="font-display text-3xl font-medium leading-none text-primary">{step.n}</span>
                <h3 className="font-display text-lg font-medium leading-tight tracking-tight">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>



      {/* ============================================================
          TWITTER SOCIAL PROOF — Supabase-style
          ============================================================ */}
      <section className="py-10">
        <div className="container-page">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <SectionHeading alignment="center">
              <SectionHeadingTagline>Loved by pet parents</SectionHeadingTagline>
              <SectionHeadingTitle as="h2" className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.02em]">
                What they say about us.
              </SectionHeadingTitle>
            </SectionHeading>
          </div>
        </div>

        <div className="group relative mx-auto max-w-[76rem] overflow-hidden">
          <div className="flex animate-[marquee_50000ms_linear_both_infinite] gap-4 will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...Array(3)].flatMap(() => testimonials).map((t, i) => (
              <div
                key={`social-${i}`}
                className="w-[380px] shrink-0 rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6 shadow-sm"
              >
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 line-clamp-6 font-display text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="size-10 rounded-full bg-primary-soft" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fade overlay — radial gradient like Supabase */}
          <div className="pointer-events-none absolute inset-0 top-auto h-full max-h-[500px] bg-[radial-gradient(50%_100%_at_50%_0,transparent_0%,transparent_50%,var(--paw-surface)_100%)] max-lg:max-h-[400px]" />
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <FAQ2
        badge="FAQ"
        title="Answers to the questions we hear most."
        subtitle="Can't find what you're looking for? We answer every WhatsApp and call during the day."
        categories={[
          {
            id: "general",
            label: "General",
            icon: <span className="font-sans text-xs">✦</span>,
            items: faqs.slice(0, 3).map(f => ({ question: f.q, answer: f.a })),
          },
          {
            id: "services",
            label: "Services",
            icon: <span className="font-sans text-xs">✦</span>,
            items: faqs.slice(3).map(f => ({ question: f.q, answer: f.a })),
          },
        ]}
      />

      {/* ============================================================
          DARK CTA
          ============================================================ */}
    </>
  )
}

// ponytail: tiny inline service icons. Avoid a heavy icon registry import.
function ServiceIcon({ slug }: { slug: Service["slug"] }) {
  const paths: Record<Service["slug"], React.ReactNode> = {
    grooming: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    boarding: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    sitting: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
      </svg>
    ),
    training: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c0 2 3 3 6 3s6-1 6-3v-5" />
      </svg>
    ),
    walking: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <circle cx="13" cy="4" r="2" /><path d="m5 22 5-8 4 2 4-6" /><path d="M9 10l-2 4 3 3" />
      </svg>
    ),
    "fresh-food": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M3 11h18M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M6 11v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9" />
      </svg>
    ),
    taxi: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M14 8l-3 3 3 3" /><path d="M10 8l3 3-3 3" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
    funeral: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
        <path d="M12 2a4 4 0 0 0-4 4c0 2 4 9 4 9s4-7 4-9a4 4 0 0 0-4-4z" /><path d="M8 22h8" />
      </svg>
    ),
  }
  return <>{paths[slug]}</>
}
