"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function NotOptional() {
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
        className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <h2 className="text-[40px] font-bold leading-[1.1] text-primary">
            Ce n&apos;est plus
            <br />
            optionnel.
          </h2>

          <div className="mt-10">
            <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-3">
              Deloitte 2026
            </p>
            <div className="w-full bg-surface rounded-full h-4 overflow-hidden">
              <div
                className="h-full bg-accent rounded-full transition-all duration-1000"
                style={{ width: visible ? "74%" : "0%" }}
              />
            </div>
            <p className="text-sm text-secondary mt-2">
              74% des entreprises déploient des agents d&apos;ici 2 ans
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <p className="text-secondary leading-relaxed">
            Chaque semaine que vous perdez, vos concurrents déploient des
            systèmes qui gèrent leurs relances commerciales, accélèrent leurs
            prises de décision et creusent l&apos;écart.
          </p>
          <p className="text-secondary leading-relaxed">
            74% des organisations prévoient de déployer des agents autonomes
            d&apos;ici 2 ans. Seulement 21% ont la gouvernance en place. Ceux qui
            agissent maintenant définissent les règles du jeu.
          </p>
          <p className="text-primary font-semibold">
            Ce n&apos;est plus une question de savoir si vous adoptez l&apos;IA — c&apos;est
            quand, et avec qui.
          </p>
        </div>
      </div>
    </section>
  );
}
