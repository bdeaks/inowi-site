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
    <section ref={ref} className="py-20 px-6">
      <div
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-4">
            Processus
          </p>
          <h2 className="text-[40px] font-bold leading-[1.1] text-primary">
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
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="text-sm font-semibold text-muted">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold text-primary">{step.title}</h3>
              </div>
              <p className="text-secondary leading-relaxed ml-10">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
