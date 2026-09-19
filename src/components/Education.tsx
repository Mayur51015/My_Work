"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="section-divider py-24 px-6 scroll-mt-20">
      <div
        ref={ref}
        className="reveal max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16"
      >
        {/* Section label */}
        <div className="pt-1">
          <div className="reveal-number inline-flex items-center gap-2">
            <span className="text-[12px] font-semibold tracking-[0.18em] text-[var(--color-accent)]">
              04
            </span>
            <span className="w-3 h-px bg-[var(--color-border)] inline-block" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
              Education
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="reveal-child reveal-child-1 pb-6 group">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
              <h3 className="text-[1.12rem] font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                Bachelor of Technology (B.Tech) — Computer Engineering
              </h3>
              <span className="text-[13px] font-medium tracking-[0.1em] text-[var(--color-text)] shrink-0 sm:self-start">
                2024 — 2028
              </span>
            </div>
            <p className="text-[15px] text-[var(--color-accent)] font-medium">
              Zeal College of Engineering and Research
            </p>
            <p className="text-[14px] text-[var(--color-text-secondary)] mt-0.5">
              Narhe, Pune, Maharashtra
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
