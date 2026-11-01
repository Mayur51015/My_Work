"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const OPEN_SOURCE_ITEMS = [
  {
    title: "Elite Coders",
    role: "Contributor & Project Admin",
    description:
      "Served as Contributor and Project Admin for open-source initiatives. Highlighted by project administration, reviewing and merging pull requests, repository management, issue resolution, contributor support, and collaborative open-source development.",
    tags: [
      "Project Administration",
      "PR Reviews",
      "Repository Management",
      "Issue Resolution",
      "Contributor Support",
      "Collaborative Development",
    ],
  },
  {
    title: "Social Winter of Code (SWOC)",
    role: "Season 7 Contributor",
    description:
      "Active contributor in Social Winter of Code Season 7, participating in collaborative development, issue resolution, debugging, and open-source workflows using Git and GitHub.",
    tags: [
      "Season 7",
      "Collaborative Development",
      "Issue Resolution",
      "Debugging",
      "Git & GitHub",
    ],
  },
  {
    title: "Nexus Spring of Code (NSOC)",
    role: "Selected Contributor",
    description:
      "Selected for Nexus Spring of Code, an open-source development program focused on contributing to real-world software projects. Opportunities focus on collaborating with maintainers and developers, working with real-world repositories, improving practical skills, and collaborative development with Git and GitHub.",
    tags: [
      "Selected Contributor",
      "Real-World Repositories",
      "Git & GitHub",
      "Collaborative Development",
    ],
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
          <p className="mt-3 text-[13px] text-[var(--color-text-secondary)] max-w-[180px] hidden md:block leading-relaxed">
            Project administration, repository management, and open-source contributions.
          </p>
        </div>

        {/* List */}
        <div className="space-y-8">
          {OPEN_SOURCE_ITEMS.map((item, i) => (
            <div
              key={item.title}
              className={`reveal-child reveal-child-${Math.min(
                5,
                i + 1
              )} pb-6 border-b border-[var(--color-border)]/50 last:border-b-0 group`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                <h3 className="text-[1.12rem] font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200">
                  {item.title}
                </h3>
                <span className="inline-block text-[12px] tracking-[0.12em] uppercase text-[var(--color-accent-secondary)] shrink-0 font-medium font-mono">
                  {item.role}
                </span>
              </div>
              <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed max-w-[620px] mb-3">
                {item.description}
              </p>
              {item.tags && (
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono tracking-wide px-2 py-0.5 rounded bg-[var(--color-border-subtle)] text-[var(--color-text-secondary)] border border-[var(--color-border)]/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
