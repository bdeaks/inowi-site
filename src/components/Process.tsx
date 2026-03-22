"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    desc: "Une session ciblée pour comprendre vos process, identifier les tâches à automatiser et définir les gains attendus.",
  },
  {
    num: "02",
    title: "Implémentation",
    desc: "On construit et déploie les agents sur mesure, directement intégrés à vos outils existants. Tests en conditions réelles.",
  },
  {
    num: "03",
    title: "Transformation",
    desc: "Votre organisation opère à un nouveau niveau d'efficacité. Formation équipe, go-live, suivi des métriques.",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const observerCb = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) setVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCb, { threshold: 0.15 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [observerCb]);

  return (
    <section ref={ref} className="py-[140px] px-6">
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p
          className="text-[11px] font-semibold tracking-[4px] uppercase text-text-secondary mb-4"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Processus
        </p>
        <h2
          className="text-text mb-20"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 700,
            lineHeight: 0.95,
          }}
        >
          Trois &eacute;tapes.
          <br />
          Quatre semaines.
        </h2>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-16 py-12 border-b border-border relative"
              style={{
                transitionDelay: visible ? `${i * 150}ms` : "0ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              {/* Watermark number */}
              <div
                className="absolute -top-6 left-0 select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(80px, 10vw, 120px)",
                  fontWeight: 300,
                  color: "#F5F5F0",
                  opacity: 0.04,
                  lineHeight: 1,
                }}
              >
                {step.num}
              </div>

              <h3
                className="text-2xl font-bold text-text relative"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-base font-light leading-[1.7] text-text-secondary relative"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
