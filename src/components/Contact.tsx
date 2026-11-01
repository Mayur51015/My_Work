"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

const LINKS = [
  {
    label: "Email",
    href: "mailto:mayur2006khandare@gmail.com",
    display: "mayur2006khandare@gmail.com",
    icon: MailIcon,
    isExternal: false,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mayur-k-424616323",
    display: "linkedin.com/in/mayur-k-424616323",
    icon: LinkedInIcon,
    isExternal: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/Mayur51015",
    display: "github.com/Mayur51015",
    icon: GitHubIcon,
    isExternal: true,
  },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="section-divider py-28 px-6 scroll-mt-20">
      <div
        ref={ref}
        className="reveal max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16"
      >
        {/* Section label */}
        <div className="pt-1">
          <div className="reveal-number inline-flex items-center gap-2">
            <span className="text-[12px] font-semibold tracking-[0.18em] text-[var(--color-accent)]">
              07
            </span>
            <span className="w-3 h-px bg-[var(--color-border)] inline-block" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
              Contact
            </span>
          </div>
        </div>

        {/* Content */}
        <div>
          {/* Heading */}
          <h2
            className="reveal-child reveal-child-1 text-[clamp(2.2rem,4.5vw,3.2rem)] font-medium tracking-[-0.02em] text-[var(--color-text)] mb-4"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Let&apos;s connect
            <span className="text-[var(--color-accent)]">.</span>
          </h2>

          {/* Description */}
          <p className="reveal-child reveal-child-2 text-[1.05rem] text-[var(--color-text-secondary)] leading-relaxed max-w-[480px] mb-10">
            Open to software engineering opportunities, internships, open-source collaborations, and discussions on web architecture.
          </p>

          {/* Staggered Contact Links */}
          <div className="space-y-4">
            {LINKS.map((link, idx) => {
              const Icon = link.icon;
              return (
                <div
                  key={link.label}
                  className={`reveal-child reveal-child-${Math.min(5, idx + 2)}`}
                >
                  <a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-3.5 py-1 text-[var(--color-text)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    <Icon
                      size={16}
                      className="text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
                    />
                    <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-secondary)] w-20 shrink-0 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                      {link.label}
                    </span>
                    <span className="text-[var(--color-border)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1.5 transition-all duration-200">
                      →
                    </span>
                    <span className="text-[15px] link-underline group-hover:text-[var(--color-accent)] font-mono sm:font-sans">
                      {link.display}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
