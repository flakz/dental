import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Heart, ShieldCheck, Clock, Sparkles } from "lucide-react"
import { site } from "@/lib/config"
import { images } from "@/lib/images"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About",
  description: `PawSide started as JK Kennels in ${site.city} and grew into a doorstep pet care platform serving Tamil Nadu. Meet the team and the values.`,
}

const values = [
  { icon: Heart, t: "We treat them like our own", d: "If it doesn't feel right for our own pets, we don't send it. The bar is simple." },
  { icon: ShieldCheck, t: "Background-verified, observed", d: "Every caregiver is vetted, pet-first-aid trained, and observed on their first three visits." },
  { icon: Clock, t: "Real humans, real fast", d: "We call back within an hour. No chatbots, no ticket numbers. The phone is the support." },
  { icon: Sparkles, t: "Quietly excellent", d: "No flash, no show. The work speaks. We'd rather be recommended than advertised." },
]

const milestones = [
  { year: "2015", t: "JK Kennels, Krishnagiri", d: "Two founders, twelve dogs, one backyard. Boarding by word of mouth only." },
  { year: "2019", t: "Doorstep grooming launches", d: "First mobile grooming van. We bring the bath to you, not the other way around." },
  { year: "2022", t: "Rebrand to PawSide", d: "Adding training, walking, fresh food, taxi, and the gentle goodbye service." },
  { year: "2024", t: "5,000+ pets across Tamil Nadu", d: "Bangalore, Chennai, Coimbatore. Same team, same standards, expanded footprint." },
  { year: "2026", t: "8,000+ pets, 500+ caregivers", d: "Verified host families in 12 cities. Live GPS, photos, and 24×7 support across the board." },
]

const team = [
  { name: "Karthik J.", role: "Founder, dog person", img: "puppy-two.jpeg" },
  { name: "Meera R.", role: "Head of Caregivers", img: "puppy-three.jpeg" },
  { name: "Arjun S.", role: "Grooming lead", img: "puppy-one.jpeg" },
  { name: "Divya N.", role: "Vet-tech & training", img: "ZT-RFipewY9wuM.webp" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 -z-10">
          <img src="/A-blake-Y-b79Mg0O-4.webp" alt="A beagle puppy in the snow" className="h-full w-full object-cover object-[center_30%]" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/55 to-foreground/10" />
          <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-t from-surface to-transparent" />
        </div>
        <div className="container-page pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="max-w-2xl text-background">
            <span className="eyebrow on-dark">About us</span>
            <h1 className="mt-4 text-4xl font-medium leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl lg:text-6xl">
              A team of pet people, building the pet care we wished existed.
            </h1>
            <p className="lead on-dark mt-5">
              We're a Tamil Nadu team of caregivers, vet-techs, ops people and product folks, on a mission to make great pet care the default, not the exception.
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
                <Image src={`/${images.kitten.file}`} alt={images.kitten.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3vw+1rem,3.25rem)] font-normal leading-[1.05] tracking-[-0.022em]">
              It started with a dog my parents said no to.
            </h2>
            <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-soft">
              <p>
                I'm Karthi, from Kanchipuram. Growing up, I wanted nothing more than a dog. My parents weren't convinced. So during college, I stayed at a friend's kennel for two months and never quite left.
              </p>
              <p>
                That became JK Kennels in {site.city}, in 2015. A small boarding setup, twelve dogs, one backyard. We learned the hard way what families actually need when they travel, and the gap in the market for someone who'd treat their pet like their own.
              </p>
              <p>
                In 2022 we rebranded to PawSide and started bringing the service to your door. Grooming first, then training, walking, fresh food, taxi, and the gentle goodbye. Same team, same standards.
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
            {team.map((t) => {
              return (
                <div key={t.name} className="overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
                  <div className="p-[6px]">
                    <div className="relative aspect-square overflow-hidden rounded-[20px] shadow-sm">
                      <Image src={`/${t.img}`} alt={t.name} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                    </div>
                  </div>
                  <div className="px-4 pb-4 pt-1">
                    <p className="font-display text-base font-medium leading-tight tracking-tight">{t.name}</p>
                    <p className="mt-0.5 text-xs text-ink-muted">{t.role}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </>
  )
}
