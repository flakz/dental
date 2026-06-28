import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Check, Phone } from "lucide-react"
import { services } from "@/lib/services"
import { images } from "@/lib/images"
import { site } from "@/lib/config"
import { Button } from "@/components/ui/button"
import { ServiceTabs } from "@/components/service-tabs"
import { ServiceBreadcrumb } from "@/components/service-breadcrumb"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) return {}
  return {
    title: s.name,
    description: s.description,
  }
}

const faqByCategory: Record<string, { q: string; a: string }[]> = {
  default: [
    { q: "How quickly can you come?", a: "Same-day for most services in Krishnagiri town. Other locations usually within 24 hours. We confirm timing on the call." },
    { q: "Do you bring your own equipment?", a: "Yes - every visit is self-contained. We carry our own setup, supplies, and cleanup. You don't need to prepare anything." },
    { q: "What if my pet doesn't cooperate?", a: "We never force a visit. If your pet is anxious or reactive, we pause, talk to you, and either reschedule or send a specialist. No charge for the first re-visit." },
    { q: "How is payment handled?", a: "No payment upfront. You pay after the visit via UPI, card, or cash. An itemised invoice is sent to your WhatsApp." },
  ],
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params
  const s = services.find((x) => x.slug === slug)
  if (!s) notFound()

  const key = s.slug as keyof typeof images
  const heroImage = (images as any)[key] ?? images.kitten
  const faqs = faqByCategory[s.category] ?? faqByCategory.default
  const related = services.filter((x) => x.slug !== s.slug).sort(() => Math.random() - 0.5).slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="container-page min-h-[50vh] pb-12 pt-28 section-blend md:pb-16 md:pt-[120px]">
        <div className="grid items-start gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div className="flex flex-col">
            <div>
              <ServiceBreadcrumb currentSlug={s.slug} currentName={s.name} />
              <h1 className="mt-5 font-display text-[clamp(2.25rem,4vw+1rem,4.5rem)] font-normal leading-[1.02] tracking-[-0.025em]">
                {s.name}.
              </h1>
              <p className="mt-6 text-lg text-ink-soft">{s.description}</p>
            </div>
            <div className="mt-6">
              <ServiceTabs faqs={faqs} />
            </div>
          </div>
          <div className="overflow-hidden rounded-[var(--radius-2xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]">
            <div className="p-[6px]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] shadow-sm">
                <Image
                  src={`/${heroImage.file}`}
                  alt={heroImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-surface-muted px-5 py-5">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Starting from
              </p>
              <p className="mt-2 font-display text-3xl font-medium tracking-tight text-foreground">
                {s.startingPrice}
              </p>
              <p className="mt-1 text-sm text-ink-soft">
                Final price depends on breed, size and add-ons. We confirm on the call.
              </p>
              <div className="mt-5 flex gap-3">
                <Button asChild className="group flex-1 bg-primary text-primary-foreground shadow-[var(--shadow-cta)] hover:bg-primary-deep">
                  <Link href="/book">
                    Book this service
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </Link>
                </Button>
                <Button asChild className="group flex-1 bg-primary text-primary-foreground shadow-[var(--shadow-cta)] hover:bg-primary-deep">
                  <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {site.phone}
                  </a>
                </Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-border pt-5 text-sm">
                <div className="flex items-center gap-2 text-ink-soft">
                  <Check className="h-4 w-4 text-success" aria-hidden="true" />
                  No payment upfront
                </div>
                <div className="flex items-center gap-2 text-ink-soft">
                  <Check className="h-4 w-4 text-success" aria-hidden="true" />
                  Free cancellation up to 4h before
                </div>
                <div className="flex items-center gap-2 text-ink-soft">
                  <Check className="h-4 w-4 text-success" aria-hidden="true" />
                  Background-verified caregivers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-y-sm section-blend ">
        <div className="container-page">
          <div className="mb-10 flex items-end justify-between border-b border-border pb-4">
            <h2 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
              You may also need
            </h2>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary">
              All services &rarr;
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => {
              const rkey = r.slug as keyof typeof images
              const rimg = (images as any)[rkey] ?? images.kitten
              return (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface-muted shadow-[var(--shadow-lg)]"
                >
                  <div className="p-[6px]">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] shadow-sm">
                      <Image src={`/${rimg.file}`} alt={rimg.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-5 pb-5 pt-5">
                    <h3 className="font-display text-lg font-medium leading-tight tracking-tight">{r.name}</h3>
                    <p className="text-sm text-ink-soft">{r.short}</p>
                    <span className="mt-auto pt-3 text-sm font-medium text-foreground">From {r.startingPrice}</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
