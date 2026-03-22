"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const capabilities = [
  { title: "Intelligence commerciale" },
  { title: "Recrutement automatisé" },
  { title: "Support niveau 1" },
  { title: "Génération de leads" },
  { title: "Veille concurrentielle" },
  { title: "Reporting financier" },
  { title: "Automatisation emails" },
  { title: "Machine à contenu" },
  { title: "Gestion opérationnelle" },
  { title: "Analyse de données" },
];

export default function Capabilities() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const observerCb = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) setVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCb, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observerCb]);

  return (
    <section ref={ref} className="py-[120px] px-6" style={{ background: "#0F0F0F" }}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p
          className="text-[11px] font-semibold tracking-[4px] uppercase text-text-secondary mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Capacit&eacute;s
        </p>
        <h2
          className="text-text mb-16"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            lineHeight: 0.95,
          }}
        >
          Ce que vos agents
          <br />
          font vraiment.
        </h2>

        <div className="space-y-0">
          {capabilities.map((cap, i) => {
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={i}
                className="group flex items-center gap-4 py-5 border-b border-border cursor-default transition-colors hover:text-text"
                style={{
                  transitionDelay: visible ? `${i * 60}ms` : "0ms",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.5s ease, transform 0.5s ease, color 0.3s ease",
                }}
              >
                <span
                  className="text-text-muted group-hover:text-text-secondary transition-colors text-sm shrink-0"
                  style={{ fontFamily: "var(--font-display)", fontStyle: "italic" }}
                >
                  {num}
                </span>
                <div className="flex-1 h-px bg-border group-hover:bg-text-muted transition-colors" />
                <span
                  className="text-text-secondary group-hover:text-text transition-colors text-[15px] font-medium shrink-0"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {cap.title}
                </span>
                <span className="text-text-muted group-hover:text-text opacity-0 group-hover:opacity-100 transition-all duration-300 ml-2">
                  &rarr;
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
