"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winHeightPx > 0 ? scrollPx / winHeightPx : 0;
      const clamped = Math.min(1, Math.max(0, scrolled));

      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${clamped})`;
        barRef.current.style.opacity = clamped > 0.005 ? "1" : "0";
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateScrollProgress();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--color-accent)] z-[60] origin-left pointer-events-none"
      style={{
        transform: "scaleX(0)",
        opacity: 0,
      }}
    />
  );
}
