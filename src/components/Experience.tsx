"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface ExperienceItem {
  id: string;
  year: string;
  role: string;
  company: string;
  date: string;
  duration: string;
  location: string;
  summary?: string;
  bullets?: string[];
  technologies?: string[];
  isOpenSource?: boolean;
}

const EXPERIENCES: ExperienceItem[] = [
  {
    id: "tantrata",
    year: "2025",
    role: "Full-Stack Development Intern",
    company: "Tantrata Solution PVT. LTD.",
    date: "June 2025 – July 2025",
    duration: "1 month",
    location: "Pune",
    summary:
      "Completed a one-month Full-Stack Development internship at Tantrata Solution Pvt. Ltd., gaining hands-on experience in building web applications using HTML, CSS, JavaScript, Python Flask, and databases. Worked on responsive UI development, backend integration, database management, authentication, debugging, and REST APIs, while collaborating with the development team on real-world software projects.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python",
      "Flask",
      "REST APIs",
    ],
  },
  {
    id: "omegasoft",
    year: "2026",
    role: "Intern",
    company: "Omegasoft Technologies Pvt Ltd",
    date: "January 2026 – February 2026",
    duration: "2 months",
    location: "Pune District",
    summary:
      "Worked on both frontend and backend development of web applications, focusing on data handling, database integration, testing, debugging, and system performance improvements.",
  },
  {
    id: "aaa-tech",
    year: "2026",
    role: "Frontend Developer",
    company: "AAA Tech Solutions",
    date: "May 2026 – June 2026",
    duration: "2 months",
    location: "Chennai",
    summary:
      "Worked on a professional full-stack web application, developing responsive React/Vite interfaces, integrating REST APIs and TiDB Cloud, and contributing to secure admin authentication and course enrollment modules.",
    bullets: [
      "Worked on a professional full-stack web application.",
      "Developed responsive and user-friendly interfaces using React.js and Vite.",
      "Designed reusable UI components including Navbar, Footer, Courses, Pricing, Reviews and Enrollment modules.",
      "Integrated frontend applications with REST APIs using Node.js and Express.js.",
      "Worked with MySQL-compatible TiDB Cloud for database integration and data management.",
      "Implemented course enrollment and contact form functionality with backend API integration.",
      "Contributed to secure admin authentication and protected dashboard functionality.",
      "Used Git and GitHub for version control, collaboration and CI/CD workflows.",
      "Assisted with production deployment and troubleshooting of frontend, backend, API, CORS, database and build issues.",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Node.js",
      "Express.js",
      "TiDB Cloud / MySQL-compatible database",
      "Git",
      "GitHub",
    ],
  },
  {
    id: "elite-coders",
    year: "2026",
    role: "Contributor · Project Admin",
    company: "Elite Coders",
    date: "June 2026 – August 2026",
    duration: "3 months",
    location: "Remote",
    isOpenSource: true,
    summary:
      "Worked as a Project Admin and Open Source Contributor. Responsibilities included project coordination, reviewing pull requests, mentoring contributors, building open-source solutions, and Git/GitHub collaboration.",
    technologies: ["Git", "GitHub", "Open Source"],
  },
  {
    id: "webwide",
    year: "2026",
    role: "Intern",
    company: "Webwide IT Solutions LLP",
    date: "July 2026 – September 2026",
    duration: "3 months",
    location: "India",
    summary:
      "Gained practical experience in full-stack web development, JavaScript, React.js, Node.js and MySQL. Worked with REST APIs, authentication, database management, Git/GitHub, debugging, real-world project collaboration, and problem solving.",
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js",
      "MySQL",
      "REST APIs",
      "Git",
      "GitHub",
    ],
  },
  {
    id: "outlier",
    year: "2026",
    role: "Freelance",
    company: "Outlier",
    date: "September 2026 – September 2026",
    duration: "1 month",
    location: "San Francisco, California, United States",
  },
];

export default function Experience() {
  const ref = useScrollReveal();
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="experience" className="section-divider py-24 px-6 scroll-mt-20">
      <div
        ref={ref}
        className="reveal max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16"
      >
        {/* Section label */}
        <div className="pt-1">
          <div className="reveal-number inline-flex items-center gap-2">
            <span className="text-[12px] font-semibold tracking-[0.18em] text-[var(--color-accent)]">
              03
            </span>
            <span className="w-3 h-px bg-[var(--color-border)] inline-block" />
            <span className="text-[12px] font-medium tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
              Experience
            </span>
          </div>
          <p className="mt-3 text-[13px] text-[var(--color-text-secondary)] max-w-[180px] hidden md:block leading-relaxed">
            Engineering journey across internships, full-stack development, open source, and freelancing.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-6 sm:pl-8">
          {/* Vertical timeline line that grows from top to bottom */}
          <div
            aria-hidden="true"
            className="timeline-line absolute left-0 top-2 bottom-4 w-px bg-[var(--color-border)]"
          />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, i) => {
              const isExpanded = expandedId === exp.id;
              const hasBullets = Boolean(exp.bullets && exp.bullets.length > 0);

              return (
                <div
                  key={exp.id}
                  className={`timeline-entry reveal-child reveal-child-${Math.min(
                    5,
                    (i % 5) + 1
                  )} relative group`}
                >
                  {/* Timeline node dot */}
                  <div
                    aria-hidden="true"
                    className={`timeline-dot absolute -left-[27px] sm:-left-[35px] top-1.5 w-2.5 h-2.5 rounded-full ring-4 ring-[var(--color-bg)] ${
                      exp.isOpenSource
                        ? "bg-[var(--color-accent-secondary)]"
                        : "bg-[var(--color-border)]"
                    }`}
                  />

                  {/* Header: Organization first, Year and metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-[1.12rem] font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors duration-200 inline-flex items-center gap-1.5">
                        <span>{exp.company}</span>
                        <span className="text-[var(--color-accent)] opacity-0 -translate-x-1.5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-sm">
                          →
                        </span>
                      </h3>

                      {exp.isOpenSource && (
                        <span className="text-[10px] uppercase tracking-[0.14em] font-medium px-2 py-0.5 rounded border border-[var(--color-accent-secondary)]/40 text-[var(--color-accent-secondary)] bg-[var(--color-accent-secondary)]/10">
                          Open Source
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-[13px] font-medium tracking-[0.1em] text-[var(--color-text)]">
                        {exp.year}
                      </span>
                    </div>
                  </div>

                  {/* Role, Date, Duration, Location */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] text-[var(--color-text-secondary)] mb-3">
                    <span className="font-medium text-[var(--color-accent)]">
                      {exp.role}
                    </span>
                    <span className="text-[var(--color-border)]">·</span>
                    <span>{exp.date}</span>
                    <span className="text-[var(--color-border)]">·</span>
                    <span>{exp.duration}</span>
                    <span className="text-[var(--color-border)]">·</span>
                    <span>{exp.location}</span>
                  </div>

                  {/* Description / Summary */}
                  {exp.summary && (
                    <p className="text-[15px] text-[var(--color-text-secondary)] leading-relaxed max-w-[620px] mb-3">
                      {exp.summary}
                    </p>
                  )}

                  {/* Expandable Details for AAA Tech Solutions */}
                  {hasBullets && (
                    <div className="mb-3">
                      <button
                        type="button"
                        onClick={() => toggleExpand(exp.id)}
                        className="inline-flex items-center gap-1.5 text-[12px] font-medium tracking-[0.08em] uppercase text-[var(--color-accent)] hover:underline cursor-pointer transition-colors py-1"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Hide details" : "View details"}</span>
                        <span
                          className={`inline-block transition-transform duration-200 ${
                            isExpanded ? "-rotate-90" : "translate-x-0.5"
                          }`}
                        >
                          {isExpanded ? "←" : "→"}
                        </span>
                      </button>

                      {isExpanded && (
                        <ul className="mt-3 space-y-2 border-l border-[var(--color-border)] pl-4 max-w-[620px] animate-fadeIn">
                          {exp.bullets?.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed flex items-start gap-2"
                            >
                              <span className="text-[var(--color-accent)] mt-1.5 text-[10px]">
                                •
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}

                  {/* Supported Technologies */}
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono tracking-wide px-2 py-0.5 rounded bg-[var(--color-border-subtle)] text-[var(--color-text-secondary)] border border-[var(--color-border)]/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
