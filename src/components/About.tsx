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
            Hi, I&apos;m Mayur. I&apos;m a Computer Engineering student at Zeal College of Engineering and Research, Pune, and an aspiring software engineer focused on{" "}
            <span className="text-[var(--color-text)] border-b border-[var(--color-accent)]/50 font-medium">
              full-stack web development, backend architectures, and open-source software
            </span>
            .
          </p>

          <p className="reveal-child reveal-child-2 text-[var(--color-text-secondary)] text-[1.02rem] leading-[1.8]">
            I enjoy building practical web applications that solve real-world problems. My experience spans crafting responsive client interfaces with React.js, designing robust REST APIs in Node.js and Express, and managing relational and distributed databases like MySQL and TiDB Cloud.
          </p>

          <p className="reveal-child reveal-child-3 text-[var(--color-text-secondary)] text-[1.02rem] leading-[1.8]">
            Beyond product development, I actively contribute to open-source initiatives—serving as Project Admin and Contributor at Elite Coders, reviewing pull requests, mentoring peers, and strengthening my foundations in{" "}
            <span className="text-[var(--color-text)] border-b border-[var(--color-accent-secondary)]/50 font-medium">
              data structures, C++, Python, and collaborative engineering workflows
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
