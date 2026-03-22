"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const steps = [
  {
    num: "01",
    title: "Consultation (Sem. 1)",
    desc: "Une session ciblée pour comprendre vos process, identifier les tâches à automatiser et définir les gains attendus.",
  },
  {
    num: "02",
    title: "Implémentation (Sem. 2-3)",
    desc: "On construit et déploie les agents sur mesure, directement intégrés à vos outils existants. Tests en conditions réelles.",
  },
  {
    num: "03",
    title: "Transformation (Sem. 4)",
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
    <section ref={ref} className="py-[120px] px-6">
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <p className="text-[11px] font-semibold tracking-[2.5px] text-muted uppercase mb-4">
            Processus
          </p>
          <h2 className="text-[42px] font-bold leading-[1.05] text-primary">
            Trois étapes.
            <br />
            Quatre semaines.
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`py-8 ${
                i < steps.length - 1 ? "border-b border-border" : ""
              }`}
              style={{
                transitionDelay: visible ? `${i * 150}ms` : "0ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
            >
              <div className="flex items-center gap-5 mb-3">
                <span className="w-10 h-10 rounded-full border-2 border-accent text-accent flex items-center justify-center text-sm font-bold shrink-0">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-primary">{step.title}</h3>
              </div>
              <p className="text-secondary leading-[1.65] ml-[60px]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
