"use client"

import { FiPlus, FiMinus } from "react-icons/fi"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Props {
  faqs: { q: string; a: string }[]
}

export function ServiceTabs({ faqs }: Props) {
  return (
    <Accordion type="single" collapsible defaultValue="q-1" className="flex w-full flex-col gap-2.5">
      {faqs.map((f, index) => (
        <AccordionItem
          key={f.q}
          value={`q-${index}`}
          className="border-border bg-muted/50 hover:bg-muted/80 hover:border-border/80 data-[state=open]:bg-background overflow-hidden rounded-xl border transition-all duration-300 ease-in-out data-[state=open]:shadow-sm"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <AccordionTrigger className="group [&>svg]:!hidden flex w-full items-center justify-between gap-4 px-5 py-3 text-left hover:no-underline">
            <span className="text-ink-soft group-hover:text-foreground group-data-[state=open]:text-foreground text-sm font-medium leading-snug transition-colors duration-200 md:text-base">
              {f.q}
            </span>
            <span className="bg-muted-foreground/15 text-muted-foreground group-hover:bg-muted-foreground/25 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300">
              <FiPlus size={12} className="block group-data-[state=open]:hidden" />
              <FiMinus size={12} className="hidden group-data-[state=open]:block" />
            </span>
          </AccordionTrigger>
          <AccordionContent className="bg-muted rounded-xl p-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {f.a}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
