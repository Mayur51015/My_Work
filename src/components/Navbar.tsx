"use client";

import { useState, useEffect } from "react";
import { useTheme } from "@/components/ThemeProvider";
import { GitHubIcon, LinkedInIcon, SunIcon, MoonIcon } from "@/components/Icons";

const NAV_LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Education", href: "#education", id: "education" },
  { label: "Open Source", href: "#opensource", id: "opensource" },
  { label: "Certifications", href: "#certifications", id: "certifications" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Scroll listener for navbar style changes
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section spy for active link indicator
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 animate-nav-load transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg)]/92 backdrop-blur-md border-b border-[var(--color-border)] shadow-[0_2px_12px_-4px_rgba(0,0,0,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        className={`max-w-[1120px] mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled ? "py-3 px-6" : "py-5 px-6"
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="group text-[13px] font-medium tracking-[0.15em] text-[var(--color-text)] uppercase inline-flex items-center gap-1.5 transition-colors duration-200"
        >
          <span className="group-hover:text-[var(--color-accent)] transition-colors">
            Mayur Khandare
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-80 group-hover:scale-125 transition-transform duration-200" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative inline-flex items-center py-1 text-[12px] font-medium tracking-[0.12em] uppercase transition-all duration-200 hover:-translate-y-0.5 ${
                      isActive
                        ? "text-[var(--color-accent)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Subtle active indicator dot */}
                    {isActive && (
                      <span className="ml-1.5 w-1 h-1 rounded-full bg-[var(--color-accent)]" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Separator */}
          <span className="w-px h-4 bg-[var(--color-border)]" />

          {/* Social + theme */}
          <div className="flex items-center gap-2">
            <div className="social-icon-wrapper">
              <a
                href="https://github.com/Mayur51015"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-1.5"
                aria-label="GitHub Profile"
              >
                <GitHubIcon size={15} />
              </a>
              <span className="social-tooltip">GitHub</span>
            </div>

            <div className="social-icon-wrapper">
              <a
                href="https://www.linkedin.com/in/mayur-k-424616323"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-1.5"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon size={15} />
              </a>
              <span className="social-tooltip">LinkedIn</span>
            </div>

            <button
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              type="button"
            >
              <span className="transition-transform duration-300 ease-out">
                {theme === "dark" ? <SunIcon size={15} /> : <MoonIcon size={15} />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
          >
            {theme === "dark" ? <SunIcon size={15} /> : <MoonIcon size={15} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex flex-col gap-[5px] p-2 -mr-1"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[1.5px] bg-[var(--color-text)] transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 w-screen h-screen z-[100] flex flex-col items-start justify-center px-8 transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--color-bg)" }}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-5 right-6 p-2 text-[var(--color-text)]"
          aria-label="Close menu"
        >
          <span className="block w-5 h-[1.5px] bg-[var(--color-text)] rotate-45 translate-y-[1px]" />
          <span className="block w-5 h-[1.5px] bg-[var(--color-text)] -rotate-45 -translate-y-[0.5px]" />
        </button>

        <ul className="flex flex-col gap-5">
          {NAV_LINKS.map((link, i) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-[24px] font-light transition-all duration-200 inline-flex items-center gap-3 ${
                    isActive
                      ? "text-[var(--color-accent)] translate-x-1"
                      : "text-[var(--color-text)] hover:text-[var(--color-accent)]"
                  }`}
                  style={{ transitionDelay: `${i * 35}ms` }}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile social links */}
        <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[var(--color-border)] w-full max-w-[240px]">
          <a
            href="https://github.com/Mayur51015"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon p-2"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/mayur-k-424616323"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon p-2"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
