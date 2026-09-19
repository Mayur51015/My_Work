"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

export default function Footer() {
  const ref = useScrollReveal();

  return (
    <footer className="border-t border-[var(--color-border)] py-14 px-6 transition-colors">
      <div ref={ref} className="reveal max-w-[1120px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          {/* Left */}
          <div>
            <p className="text-[13px] font-medium tracking-[0.12em] uppercase text-[var(--color-text)] mb-1">
              Mayur Khandare
            </p>
            <p className="text-[13px] text-[var(--color-text-secondary)]">
              Computer Engineering · Aspiring Software Engineer
            </p>
          </div>

          {/* Right — social icons with tooltips */}
          <div className="flex items-center gap-2">
            <div className="social-icon-wrapper">
              <a
                href="https://github.com/Mayur51015"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-2"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={16} />
              </a>
              <span className="social-tooltip">GitHub</span>
            </div>

            <div className="social-icon-wrapper">
              <a
                href="https://www.linkedin.com/in/mayur-k-424616323"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-2"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={16} />
              </a>
              <span className="social-tooltip">LinkedIn</span>
            </div>

            <div className="social-icon-wrapper">
              <a
                href="mailto:mayur2006khandare@gmail.com"
                className="social-icon p-2"
                aria-label="Email"
              >
                <MailIcon size={16} />
              </a>
              <span className="social-tooltip">Email</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-8 text-[12px] text-[var(--color-text-secondary)] opacity-70">
          © 2026 Mayur Khandare
        </p>
      </div>
    </footer>
  );
}
