"use client";

import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/Icons";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center pt-28 pb-16 px-6">
      <div className="max-w-[1120px] mx-auto w-full">
        {/* Greeting */}
        <p className="animate-hero-1 text-[var(--color-text-secondary)] text-sm tracking-wide mb-6">
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1 className="animate-hero-1 text-[clamp(2.4rem,5vw,4rem)] font-medium leading-[1.15] sm:leading-[1.1] tracking-[-0.02em] text-[var(--color-text)] mb-6">
          Mayur Khandare
          <span className="text-[var(--color-accent)] inline-block transition-transform duration-300 hover:scale-125 cursor-default">
            .
          </span>
        </h1>

        {/* Tagline / Professional Positioning */}
        <div className="animate-hero-2 max-w-[560px] mb-10">
          <p className="text-[clamp(1.05rem,2vw,1.2rem)] text-[var(--color-text)] font-medium leading-relaxed mb-3">
            Aspiring Software Engineer &amp; Full Stack Web Developer
          </p>
          <p className="text-[clamp(0.95rem,1.8vw,1.05rem)] text-[var(--color-text-secondary)] leading-relaxed mb-3">
            Computer Engineering student building practical web applications, backend systems, and database-driven solutions with Python, C++, and modern web tools.
          </p>
          <p className="text-[13px] tracking-wide text-[var(--color-accent-secondary)] font-mono">
            Full-Stack Development · Backend Systems · Open Source
          </p>
        </div>

        {/* Buttons + social */}
        <div className="animate-hero-3 flex flex-wrap items-center gap-3 mb-14">
          <a
            href="#experience"
            className="btn-interactive group px-5 py-2.5 text-[13px] font-medium tracking-[0.06em] uppercase border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)]"
          >
            <span>View Experience</span>
            <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1">
              ↓
            </span>
          </a>
          <a
            href="#contact"
            className="btn-interactive group px-5 py-2.5 text-[13px] font-medium tracking-[0.06em] uppercase text-[var(--color-accent)] border border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-white)]"
          >
            <span>Get in Touch</span>
            <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="/Mayur_Khandare_Resume.pdf"
            download="Mayur_Khandare_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-interactive group px-5 py-2.5 text-[13px] font-medium tracking-[0.06em] uppercase border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-text)] hover:text-[var(--color-accent)]"
          >
            <span>Download Resume</span>
            <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>

          {/* Social icons */}
          <div className="animate-hero-4 flex items-center gap-2 ml-2">
            <div className="social-icon-wrapper">
              <a
                href="https://github.com/Mayur51015"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-2"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={17} />
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
                <LinkedInIcon size={17} />
              </a>
              <span className="social-tooltip">LinkedIn</span>
            </div>

            <div className="social-icon-wrapper">
              <a
                href="mailto:mayur2006khandare@gmail.com"
                className="social-icon p-2"
                aria-label="Email"
              >
                <MailIcon size={17} />
              </a>
              <span className="social-tooltip">Email</span>
            </div>
          </div>
        </div>

        {/* Metadata row */}
        <div className="animate-hero-5 flex flex-wrap items-center gap-x-8 gap-y-2 text-[12px] tracking-[0.1em] uppercase text-[var(--color-text-secondary)] border-t border-[var(--color-border)] pt-5">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent-secondary)] status-pulse inline-block" />
            Pune, India
          </span>
          <span className="hidden sm:inline text-[var(--color-border)]">
            /
          </span>
          <span>Computer Engineering · B.Tech</span>
          <span className="hidden sm:inline text-[var(--color-border)]">
            /
          </span>
          <span>2024 — 2028</span>
        </div>
      </div>
    </section>
  );
}
