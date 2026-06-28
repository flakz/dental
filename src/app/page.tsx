"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Star, ShieldCheck, Clock, Heart, Sparkles, Check } from "lucide-react"
import { site } from "@/lib/config"
import { services, type Service } from "@/lib/services"
import { images } from "@/lib/images"
import { testimonials } from "@/lib/testimonials"
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
import { Reveal } from "@/components/motion/reveal"
import { Stagger, StaggerItem } from "@/components/motion/stagger"
import { HoverLift } from "@/components/motion/hover-lift"
import { ParallaxY } from "@/components/motion/parallax-y"
import { TextEffect } from "@/components/core/text-effect"

const stats = [
  { value: "4.9", suffix: "★", label: "Google rating", detail: "1,477+ reviews" },
  { value: "15,000", suffix: "+", label: "Smiles restored", detail: "Across Tamil Nadu" },
  { value: "12pm – 8pm", suffix: "", label: "Open every day", detail: "Open all days (Mon–Sat)" },
]

const steps = [
  { n: "01", title: "Book an appointment", body: "Call us, WhatsApp, or use the online form. We confirm within the hour with a time slot that works for you." },
  { n: "02", title: "Walk in for your visit", body: "Our friendly team greets you, a digital x-ray is taken if needed, and the doctor does a thorough examination." },
  { n: "03", title: "Custom treatment plan", body: "Your dentist explains the diagnosis, treatment options, timeline and cost  -  no pressure, no hidden charges." },
  { n: "04", title: "Painless treatment", body: "Using UK-adopted painless protocols, we perform your procedure. Walk out smiling the same day." },
]


const faqs = [
  { q: "Is the treatment really painless?", a: "Yes  -  we use UK-adopted painless protocols including topical anaesthetic gel before the injection, computer-controlled local anaesthesia, and sedation options for anxious patients. Most patients report zero pain during procedures." },
  { q: "How do I book an appointment?", a: "You can call us, send a WhatsApp message, or use the booking form on this site. We confirm your slot within an hour. Walk-ins are also welcome during clinic hours." },
  { q: "What payment options are available?", a: "We accept cash, UPI, debit/credit cards, and most insurance plans. We provide an itemised invoice for insurance claims. EMI options available for implant and orthodontic treatments." },
  { q: "How often should I visit the dentist?", a: "We recommend a check-up and professional cleaning every 6 months. However, if you have specific concerns  -  pain, bleeding gums, sensitivity  -  don't wait for the next scheduled visit." },
  { q: "Do you treat children?", a: "Absolutely  -  we have a dedicated paediatric team led by Dr. Rajesh (MDS, PhD), our Chief Pediatric Dentist. We specialise in making dental visits fun and fear-free for kids." },
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
            <Stagger stagger={0.08} delay={0.1}>
              <StaggerItem>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="rounded-full bg-primary-soft px-3 py-1 text-primary-deep hover:bg-primary-soft">
                    <Sparkles className="mr-1 h-3 w-3" aria-hidden="true" />
                    Painless Dentistry · {site.city}
                  </Badge>
                  <span className="inline-flex items-center gap-1 text-xs text-ink-muted">
                    <Star className="h-3 w-3 fill-current text-accent" aria-hidden="true" />
                    4.9 on Google
                  </span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <TextEffect per="word" preset="fade-in-blur" as="h1" className="mt-6 text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-medium leading-[0.98] tracking-[-0.025em]">
                  You smile, we smile.
                </TextEffect>
              </StaggerItem>

              <StaggerItem>
                <p className="lead mt-7" style={{ maxWidth: 587 }}>
                  Root canal, implants, crowns, braces, invisalign, and kids dentistry  -  from one trusted team of specialists. <span className="text-primary font-medium">UK-adopted painless protocols.</span> Across Tamil Nadu, every day except Sunday.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <Button asChild className="group bg-primary text-primary-foreground shadow-[var(--shadow-cta)] hover:bg-primary-deep">
                    <Link href="/book">
                      Book Appointment
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="bg-surface-muted/50 border-border/60">
                    <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                      Call {site.phone}
                    </a>
                  </Button>
                </div>
              </StaggerItem>

              <StaggerItem>
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
              </StaggerItem>
            </Stagger>
          </div>

          {/* Hero image with floating card */}
          <div className="relative">
            <Reveal variant="scaleIn" delay={0.3}>
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
            </Reveal>

            {/* Floating stat card */}
            <Reveal variant="slideInLeft" delay={0.6} className="absolute -left-6 bottom-10 hidden sm:flex">
              <div className="rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-4 shadow-[var(--shadow-md)] sm:flex sm:items-center sm:gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-primary-soft text-primary-deep">
                  <div className="h-6 w-6" style={{ backgroundColor: "var(--paw-primary)", maskImage: "url(/home1.png)", maskSize: "contain", maskRepeat: "no-repeat", maskPosition: "center", WebkitMaskImage: "url(/home1.png)", WebkitMaskSize: "contain", WebkitMaskRepeat: "no-repeat", WebkitMaskPosition: "center" }} />
                </div>
                <div>
                  <p className="font-display text-lg font-medium leading-none">15,000+ smiles</p>
                  <p className="mt-1 text-xs text-ink-muted">restored across Tamil Nadu</p>
                </div>
              </div>
            </Reveal>

            {/* Floating review pill */}
            <Reveal variant="slideInRight" delay={0.5} className="absolute -right-4 top-8 hidden sm:flex">
              <div className="rounded-full border border-border bg-surface-elevated px-3 py-1.5 shadow-[var(--shadow-sm)] sm:flex sm:items-center sm:gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-success" aria-hidden="true" />
                <span className="text-xs font-medium">UK-trained specialists</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES
          ============================================================ */}
      <section className="section-y-sm section-blend">
        <div className="container-page">
          <Reveal variant="fadeInUp">
            <SectionHeading alignment="left" className="max-w-3xl">
              <SectionHeadingTagline>What we do</SectionHeadingTagline>
              <SectionHeadingTitle as="h2" className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.02em]">
                One team for every kind of care your teeth need.
              </SectionHeadingTitle>
              <SectionHeadingBody>
                Starting prices below. Final price depends on the procedure, confirmed during your consultation.
              </SectionHeadingBody>
            </SectionHeading>
          </Reveal>

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
          <Stagger stagger={0.05} className="mt-12 hidden lg:grid lg:grid-cols-4 lg:gap-4">
            {services.map((s) => {
              const key = s.slug as keyof typeof images
              const img = (images as any)[key] ?? images.kitten
              return (
                <StaggerItem key={s.slug}>
                  <HoverLift>
                    <Link href={`/services/${s.slug}`} className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
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
                  </HoverLift>
                </StaggerItem>
              )
            })}
          </Stagger>
        </div>
      </section>

      {/* ============================================================
          WHY MICROSMILES - split image + copy
          ============================================================ */}
      <section className="section-y-sm section-blend">
        <div className="container-page grid items-start gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div className="relative">
            <Reveal variant="slideInLeft">
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
            </Reveal>
            <Reveal variant="scaleIn" delay={0.4} className="absolute -bottom-6 -right-6 hidden sm:block">
              <div className="rounded-[var(--radius-xl)] bg-surface-elevated p-5 text-foreground shadow-[var(--shadow-lg)]">
                <p className="font-display text-3xl font-medium leading-none">15+ years</p>
                <p className="mt-1.5 text-xs text-ink-muted">Of painless dentistry, in {site.city}</p>
              </div>
            </Reveal>
          </div>

          <div>
            <Reveal variant="fadeInUp">
              <p className="eyebrow">Why Microsmiles</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,3vw+1rem,3.25rem)] font-normal leading-[1.05] tracking-[-0.022em]">
                Led by specialists, <span className="serif-italic text-primary font-semibold">built for comfort.</span>
              </h2>
              <p className="lead mt-6" style={{ maxWidth: 624 }}>
                Microsmiles was founded by clinicians trained in the UK, bringing world-class painless dentistry to India. Every procedure, every protocol  -  designed around your comfort.
              </p>
            </Reveal>

            <Stagger stagger={0.1} className="mt-9 space-y-4">
              {[
                { icon: ShieldCheck, t: "UK-trained, specialist-led team", d: "Every doctor is MDS-qualified. Our clinical director trained at the University of Edinburgh." },
                { icon: Clock, t: "Painless protocols, guaranteed", d: "From local anaesthesia to sedation options  -  we make sure you feel nothing." },
                { icon: Heart, t: "Your smile, our priority", d: "We explain everything upfront. No hidden costs, no pressure, just honest dental care." },
              ].map(({ icon: Icon, t, d }) => (
                <StaggerItem key={t}>
                  <li className="flex items-start gap-4">
                    <span className="mt-0.5 grid h-9 w-9 flex-shrink-0 place-items-center rounded-full border border-border bg-surface-elevated text-primary">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{t}</p>
                      <p className="mt-0.5 text-sm text-ink-soft">{d}</p>
                    </div>
                  </li>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ============================================================
          PROCESS - 4 steps
          ============================================================ */}
      <section className="section-y-sm section-blend">
        <div className="container-page">
          <Reveal variant="fadeInUp" className="mx-auto max-w-2xl">
            <SectionHeading alignment="center">
              <SectionHeadingTagline>How it works</SectionHeadingTagline>
              <SectionHeadingTitle as="h2" className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.02em]">
                From booking to a brighter smile in four steps.
              </SectionHeadingTitle>
            </SectionHeading>
          </Reveal>

          <Stagger stagger={0.12} className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-xl)] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <StaggerItem key={step.n}>
                <li className="relative flex flex-col gap-3 bg-surface-elevated p-6 lg:p-7">
                  <span className="font-display text-3xl font-medium leading-none text-primary">{step.n}</span>
                  <h3 className="font-display text-lg font-medium leading-tight tracking-tight">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </li>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>



      {/* ============================================================
          TWITTER SOCIAL PROOF  -  Patient testimonials
          ============================================================ */}
      <section className="pt-10">
        <div className="container-page">
          <Reveal variant="fadeInUp" className="mx-auto mb-12 max-w-3xl text-center">
            <SectionHeading alignment="center">
              <SectionHeadingTagline>Loved by patients</SectionHeadingTagline>
              <SectionHeadingTitle as="h2" className="font-display text-[clamp(2rem,3vw+1rem,3.25rem)] leading-[1.05] tracking-[-0.02em]">
                What our patients say about us.
              </SectionHeadingTitle>
            </SectionHeading>
          </Reveal>
        </div>

        <div className="group relative mx-auto max-w-[76rem] overflow-hidden">
          <div className="marquee-track marquee-left will-change-transform">
            {[...Array(2)].flatMap(() => testimonials).map((t, i) => (
              <div
                key={`social-${i}`}
                className="w-[380px] shrink-0 rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6 shadow-sm mb-5 mr-4"
              >
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 line-clamp-4 font-display text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="size-10 shrink-0 rounded-full bg-primary-soft" style={{ maskImage: "url(/pfp.png)", maskSize: "contain", maskPosition: "center", maskRepeat: "no-repeat", WebkitMaskImage: "url(/pfp.png)", WebkitMaskSize: "contain", WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat" }} />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fade overlay  -  radial gradient like Supabase */}
          <div className="pointer-events-none absolute inset-0 top-auto h-[500px] bg-[radial-gradient(50%_100%_at_50%_0,transparent_0%,transparent_50%,var(--paw-surface)_100%)] max-lg:h-[400px]" />
        </div>

        {/* Row 2 - scrolls right */}
        <div className="group/row2 relative mx-auto w-full max-w-[76rem] overflow-hidden">
          <div className="marquee-track will-change-transform" style={{ animation: "marquee 40s linear infinite reverse" }}>
            {[...Array(2)].flatMap(() => testimonials).map((t, i) => (
              <div
                key={`row2-${i}`}
                className="w-[380px] shrink-0 rounded-[var(--radius-xl)] border border-border bg-surface-elevated p-6 shadow-sm mr-4"
              >
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 line-clamp-4 font-display text-base leading-relaxed text-foreground">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                  <div className="size-10 shrink-0 rounded-full bg-primary-soft" style={{ maskImage: "url(/pfp.png)", maskSize: "contain", maskPosition: "center", maskRepeat: "no-repeat", WebkitMaskImage: "url(/pfp.png)", WebkitMaskSize: "contain", WebkitMaskPosition: "center", WebkitMaskRepeat: "no-repeat" }} />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-ink-muted">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Fade overlay  -  radial gradient like Supabase */}
          <div className="pointer-events-none absolute inset-0 top-auto h-[500px] bg-[radial-gradient(50%_100%_at_50%_0,transparent_0%,transparent_50%,var(--paw-surface)_100%)] max-lg:h-[400px]" />
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <FAQ2
        badge="FAQ"
        title="Answers to the questions we hear most."
        subtitle="Can't find what you're looking for? We answer every WhatsApp and call during clinic hours."
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
