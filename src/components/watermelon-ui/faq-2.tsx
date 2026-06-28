"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  id: string;
  label: string;
  icon: React.ReactNode;
  items: FAQItem[];
}

export interface FAQSectionProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  categories: FAQCategory[];
  contactLabel?: string;
  contactEmail?: string;
}

interface CategoryTabProps {
  category: FAQCategory;
  isActive: boolean;
  onClick: () => void;
}

function CategoryTab({ category, isActive, onClick }: CategoryTabProps) {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center rounded-full px-5 py-2 text-sm font-medium whitespace-nowrap ${
        isActive ? "text-neutral-900" : "text-neutral-700 hover:text-neutral-900"
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeFaqCategory"
          className="absolute inset-0 rounded-full bg-white shadow-sm"
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        />
      )}
      <span className="relative z-10">{category.label}</span>
    </button>
  );
}

export default function FAQ2({
  badge = "Need help?",
  title = "Frequently asked questions",
  subtitle = "Find quick answers.",
  categories,
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState(
    categories[0]?.id ?? "",
  );

  const currentItems =
    categories.find((c) => c.id === activeCategory)?.items ?? [];

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
  };

  return (
    <section className="section-y-sm section-blend pt-0">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-xl text-center md:mb-12">
          <p className="eyebrow justify-center">{badge}</p>
          <h2 className="mt-5 font-display text-[clamp(2rem,3vw+1rem,3.25rem)] font-normal leading-[1.05] tracking-[-0.022em]">
            {title}
          </h2>
          <p className="lead mt-6 mx-auto">{subtitle}</p>
        </div>

        <div className="mx-auto mb-8 w-full max-w-2xl">
          <div className="scrollbar-hide mx-auto flex w-fit max-w-full items-center gap-1.5 overflow-x-auto rounded-full border border-border bg-surface-muted/50 px-1 py-1.5">
            {categories.map((cat) => (
              <CategoryTab
                key={cat.id}
                category={cat}
                isActive={activeCategory === cat.id}
                onClick={() => handleCategoryChange(cat.id)}
              />
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-2xl">
          {currentItems.length > 0 ? (
            <Accordion
              type="single"
              collapsible
              className="flex w-full flex-col gap-2.5"
            >
              {currentItems.map((item, index) => (
                <AccordionItem
                  key={`${activeCategory}-${index}`}
                  value={`${activeCategory}-${index}`}
                  className="border-border bg-muted/50 hover:bg-muted/80 hover:border-border/80 data-[state=open]:bg-background overflow-hidden rounded-xl border transition-all duration-300 ease-in-out data-[state=open]:shadow-sm"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <AccordionTrigger className="group [&>svg]:!hidden flex w-full items-center justify-between gap-4 px-5 py-3 text-left hover:no-underline">
                    <span className="text-ink-soft group-hover:text-foreground group-data-[state=open]:text-foreground text-sm font-medium leading-snug transition-colors duration-200 md:text-base">
                      {item.question}
                    </span>
                    <span className="bg-muted-foreground/15 text-muted-foreground group-hover:bg-muted-foreground/25 group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300">
                      <FiPlus size={12} className="block group-data-[state=open]:hidden" />
                      <FiMinus size={12} className="hidden group-data-[state=open]:block" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="bg-muted rounded-xl p-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-muted-foreground py-10 text-center text-sm">
              No questions in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
