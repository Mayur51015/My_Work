"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const SKILL_CATEGORIES = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Python Flask"],
  },
  {
    title: "Database",
    items: ["MySQL", "TiDB Cloud", "MongoDB", "SQLite"],
  },
  {
    title: "Programming Languages",
    items: ["C", "C++", "Python"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Core Concepts",
    items: [
      "REST APIs",
      "Authentication",
      "CRUD Operations",
      "Database Management",
      "Version Control",
    ],
  },
];

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section-divider py-24 px-6 scroll-mt-20">
      <div
        ref={ref}
        className="reveal max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16"
      >
        {/* Section label */}
        <div className="pt-1">
          <div className="reveal-number inline-flex items-center gap-2">
            <span className="text-[12px] font-semibold tracking-[0.18em] text-[var(--color-accent)]">
              02
            </span>
            <span className="w-3 h-px bg-[var(--color-border)] inline-block" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
              Skills
            </span>
          </div>
          <p className="mt-3 text-[13px] text-[var(--color-text-secondary)] max-w-[180px] hidden md:block leading-relaxed">
            Core technologies and tools utilized across projects and professional roles.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-10">
          {SKILL_CATEGORIES.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`reveal-child reveal-child-${Math.min(5, (catIdx % 5) + 1)}`}
            >
              <h3 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--color-accent)] mb-4">
                {cat.title}
              </h3>
              <ul className="space-y-2.5">
                {cat.items.map((item) => (
                  <li key={item}>
                    <span className="skill-tag text-[15px] text-[var(--color-text)] leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
