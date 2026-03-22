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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm border-b border-border"
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-2xl font-semibold tracking-tight text-primary">
          INOWI
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="nav-link text-sm text-secondary hover:text-primary transition-colors">
            Services
          </a>
          <a href="#cas-clients" className="nav-link text-sm text-secondary hover:text-primary transition-colors">
            Cas clients
          </a>
          <a href="#blog" className="nav-link text-sm text-secondary hover:text-primary transition-colors">
            Blog
          </a>
          <a href="#tarifs" className="nav-link text-sm text-secondary hover:text-primary transition-colors">
            Tarifs
          </a>
          <a
            href="#audit"
            className="cta-hover bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-md hover:bg-primary/90 transition-colors"
          >
            Audit gratuit <span className="cta-arrow">&rarr;</span>
          </a>
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-border px-6 py-4 flex flex-col gap-4">
          <a href="#services" className="text-sm text-secondary" onClick={() => setMobileOpen(false)}>
            Services
          </a>
          <a href="#cas-clients" className="text-sm text-secondary" onClick={() => setMobileOpen(false)}>
            Cas clients
          </a>
          <a href="#blog" className="text-sm text-secondary" onClick={() => setMobileOpen(false)}>
            Blog
          </a>
          <a href="#tarifs" className="text-sm text-secondary" onClick={() => setMobileOpen(false)}>
            Tarifs
          </a>
          <a
            href="#audit"
            className="bg-primary text-white text-sm font-semibold px-4 py-2 rounded-md text-center"
            onClick={() => setMobileOpen(false)}
          >
            Audit gratuit &rarr;
          </a>
        </div>
      )}
    </nav>
  );
}
