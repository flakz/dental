import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function NotFound() {
  return (
    <section className="container-page section-y section-blend text-center">
      <p className="eyebrow mx-auto justify-center">404</p>
      <h1 className="mx-auto mt-5 max-w-2xl font-display text-[clamp(2rem,4vw+1rem,4rem)] font-normal leading-[1.02] tracking-[-0.025em]">
        That page wandered off.
      </h1>
      <p className="lead mx-auto mt-7 max-w-md text-center">
        Even the best pets lose a sock sometimes. Let's get you back on track.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
        <Button asChild className="group bg-primary text-primary-foreground hover:bg-primary-deep">
          <Link href="/">
            Back to home
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </section>
  )
}
