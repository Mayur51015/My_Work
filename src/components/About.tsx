"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section-divider py-24 px-6 scroll-mt-20">
      <div
        ref={ref}
        className="reveal max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16"
      >
        {/* Section label */}
        <div className="pt-1">
          <div className="reveal-number inline-flex items-center gap-2">
            <span className="text-[12px] font-semibold tracking-[0.18em] text-[var(--color-accent)]">
              01
            </span>
            <span className="w-3 h-px bg-[var(--color-border)] inline-block" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
              About
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-[620px] space-y-5">
          <p className="reveal-child reveal-child-1 text-[var(--color-text)] text-[1.08rem] leading-[1.8]">
            I&apos;m a Computer Engineering student passionate about full-stack development, open-source contributions, and building impactful web applications. I enjoy turning ideas into practical solutions by working across frontend, backend, databases, and APIs.
          </p>

          <p className="reveal-child reveal-child-2 text-[var(--color-text-secondary)] text-[1.02rem] leading-[1.8]">
            Through internships, freelance work, and open-source programs, I&apos;ve gained practical experience in software development, collaborative workflows, and problem-solving. I&apos;m continuously improving my technical skills and building applications that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
