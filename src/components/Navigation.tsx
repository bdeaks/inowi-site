"use client";

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-bg nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="font-body text-lg font-medium tracking-[-0.02em] text-text"
          style={{ fontFamily: "var(--font-body)" }}
        >
          INOWI
        </a>

        <div className="hidden md:flex items-center gap-10">
          {["Services", "Cas clients", "Blog", "Tarifs"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-[12px] font-semibold tracking-[3px] uppercase text-text-secondary hover:text-text transition-colors duration-300"
            >
              {link}
            </a>
          ))}
          <a
            href="#audit"
            className="cta-hover text-[12px] font-semibold tracking-[3px] uppercase text-accent hover:underline underline-offset-4 transition-colors duration-300"
          >
            Audit gratuit <span className="cta-arrow">&rarr;</span>
          </a>
        </div>

        <button
          className="md:hidden text-text"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-bg border-t border-border px-6 py-6 flex flex-col gap-5">
          {["Services", "Cas clients", "Blog", "Tarifs"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-[12px] font-semibold tracking-[3px] uppercase text-text-secondary"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#audit"
            className="text-[12px] font-semibold tracking-[3px] uppercase text-accent"
            onClick={() => setMobileOpen(false)}
          >
            Audit gratuit &rarr;
          </a>
        </div>
      )}
    </nav>
  );
}
