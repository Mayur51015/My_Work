"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

interface CertificationItem {
  title: string;
  role?: string;
  badge: string;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Nexus Spring of Code (NSOC)",
    role: "Selected Contributor (2026)",
    badge: "Selected",
  },
  {
    title: "NexFellow",
    role: "Recognized Builder",
    badge: "Builder",
  },
  {
    title: "Elite Coders",
    role: "Contributor & Project Admin",
    badge: "Open Source",
  },
  {
    title: "Social Winter of Code",
    role: "Season 7 Contributor",
    badge: "Open Source",
  },
  {
    title: "International Level Hackathon 360° 4.0",
    badge: "Hackathon",
  },
  {
    title: "Mastering C++ in 13 Hours",
    badge: "Programming",
  },
  {
    title: "AI Tools Workshop",
    badge: "Workshop",
  },
];

export default function Certifications() {
  const ref = useScrollReveal();

  return (
    <section id="certifications" className="section-divider py-24 px-6 scroll-mt-20">
      <div
        ref={ref}
        className="reveal max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16"
      >
        {/* Section label */}
        <div className="pt-1">
          <div className="reveal-number inline-flex items-center gap-2">
            <span className="text-[12px] font-semibold tracking-[0.18em] text-[var(--color-accent)]">
              06
            </span>
            <span className="w-3 h-px bg-[var(--color-border)] inline-block" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
              Certifications &amp; Achievements
            </span>
          </div>
          <p className="mt-3 text-[13px] text-[var(--color-text-secondary)] max-w-[180px] hidden md:block leading-relaxed">
            Recognitions, open-source programs, hackathons, and technical certifications.
          </p>
        </div>

        {/* List */}
        <div className="space-y-6">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={cert.title + (cert.role || "")}
              className={`reveal-child reveal-child-${Math.min(
                5,
                (i % 5) + 1
              )} pb-5 border-b border-[var(--color-border)]/50 last:border-b-0 group`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <h3 className="text-[1.08rem] font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200 inline-flex flex-wrap items-center gap-2 leading-snug">
                  <span>{cert.title}</span>
                  {cert.role && (
                    <span className="text-[var(--color-text-secondary)] font-normal text-[14px]">
                      — {cert.role}
                    </span>
                  )}
                  <span className="text-[var(--color-accent)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">
                    →
                  </span>
                </h3>
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[var(--color-accent-secondary)] px-2 py-0.5 rounded border border-[var(--color-accent-secondary)]/30 w-fit shrink-0">
                  {cert.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
