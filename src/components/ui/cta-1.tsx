import React from "react";

export interface CTAProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function Cta1({
  title,
  description,
  children,
}: CTAProps) {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="relative isolate flex flex-col items-center justify-between gap-8 overflow-hidden rounded-xl border border-primary/20 bg-primary/10 p-8 shadow-sm md:flex-row md:gap-12 md:px-10 md:py-20">
          <div
            aria-hidden="true"
            className="absolute top-1/2 left-[max(-7rem,calc(50%-52rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
              className="aspect-[577/310] w-[36rem] bg-gradient-to-r from-primary/30 to-primary/20 opacity-30"
            />
          </div>

          <div
            aria-hidden="true"
            className="absolute top-1/2 left-[max(45rem,calc(50%+8rem))] -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
              className="aspect-[577/310] w-[36rem] bg-gradient-to-r from-primary/30 to-primary/20 opacity-30"
            />
          </div>

          <div className="flex max-w-sm flex-col items-center gap-6 text-center md:flex-row md:items-center md:gap-8 md:text-left">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold tracking-tight md:text-4xl">
                {title}
              </h2>
              {description && (
                <p className="max-w-[600px] text-base text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          </div>

          <div className="mt-2 flex w-full shrink-0 justify-center gap-3 md:mt-0 md:w-auto">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
