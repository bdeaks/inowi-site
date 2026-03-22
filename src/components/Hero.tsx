"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center px-6 relative overflow-hidden">
      {/* Watermark 01 */}
      <div
        className="absolute right-[-40px] top-1/2 -translate-y-1/2 hidden lg:block select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "300px",
          fontWeight: 400,
          fontStyle: "italic",
          color: "#F5F5F0",
          opacity: 0.03,
          lineHeight: 1,
        }}
      >
        01
      </div>

      <div className="max-w-7xl mx-auto w-full py-32">
        {/* Label line */}
        <div
          className={`flex items-center gap-4 mb-12 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
          }`}
        >
          <div className="w-16 h-px bg-text-secondary" />
          <span
            className="text-[11px] font-semibold tracking-[4px] uppercase text-text-secondary"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Agents IA &middot; PME Fran&ccedil;aises &middot; Sur mesure
          </span>
        </div>

        {/* H1 — monumental */}
        <h1
          style={{ fontFamily: "var(--font-display)" }}
          className="text-text max-w-4xl"
        >
          {["Des agents IA", "qui bossent", "vraiment."].map((line, i) => (
            <span
              key={i}
              className={`block transition-all duration-800 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
              }`}
              style={{
                fontSize: "clamp(64px, 10vw, 140px)",
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: "-3px",
                transitionDelay: `${i * 200}ms`,
                fontStyle: i === 2 ? "italic" : "normal",
              }}
            >
              {line}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p
          className={`mt-10 text-[18px] font-light leading-[1.7] text-text-secondary max-w-[500px] transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
          }`}
          style={{ fontFamily: "var(--font-body)" }}
        >
          On construit et d&eacute;ploie des agents IA sur mesure pour vos
          &eacute;quipes — int&eacute;gr&eacute;s &agrave; vos outils, op&eacute;rationnels en 4 semaines.
        </p>

        {/* CTA row */}
        <div
          className={`flex items-center gap-8 mt-12 transition-all duration-700 delay-900 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
          }`}
        >
          <a
            href="#audit"
            className="inline-block bg-text text-bg text-[12px] font-semibold tracking-[2px] uppercase px-8 py-4 hover:bg-text/90 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Audit gratuit — 30 min
          </a>
          <a
            href="#services"
            className="text-[12px] font-semibold tracking-[2px] uppercase text-text-secondary hover:text-text transition-colors underline underline-offset-4 decoration-text-muted"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Voir le travail &darr;
          </a>
        </div>
      </div>
    </section>
  );
}
