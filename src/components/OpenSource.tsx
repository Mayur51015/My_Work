"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const ACHIEVEMENTS = [
  {
    title: "ECSOC 2026",
    role: "Contributor / Project Admin",
    description: "Elite Coders Summer of Code",
  },
];

export default function OpenSource() {
  const ref = useScrollReveal();

  return (
    <section id="opensource" className="section-divider py-24 px-6 scroll-mt-20">
      <div
        ref={ref}
        className="reveal max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16"
      >
        {/* Section label */}
        <div className="pt-1">
          <div className="reveal-number inline-flex items-center gap-2">
            <span className="text-[12px] font-semibold tracking-[0.18em] text-[var(--color-accent)]">
              05
            </span>
            <span className="w-3 h-px bg-[var(--color-border)] inline-block" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
              Open Source
            </span>
          </div>
        </div>

        {/* List */}
        <div>
          {ACHIEVEMENTS.map((item, i) => (
            <div
              key={i}
              className="reveal-child reveal-child-1 pb-6 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1.5">
                <h3 className="text-[1.08rem] font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {item.title}
                </h3>
                <span className="inline-block text-[12px] tracking-[0.12em] uppercase text-[var(--color-accent-secondary)] sm:mt-1 shrink-0 font-medium">
                  {item.role}
                </span>
              </div>
              <p className="text-[15px] text-[var(--color-text-secondary)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
