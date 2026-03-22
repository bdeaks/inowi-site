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
    <section ref={ref} className="py-[140px] px-6 relative overflow-hidden">
      {/* Watermark 74% */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(120px, 20vw, 200px)",
          fontWeight: 900,
          color: "#F5F5F0",
          opacity: 0.06,
          lineHeight: 1,
        }}
      >
        74%
      </div>

      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2
          className="text-text mb-10"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(56px, 8vw, 96px)",
            fontWeight: 900,
            lineHeight: 0.95,
          }}
        >
          Ce n&apos;est plus
          <br />
          <em>optionnel.</em>
        </h2>

        <div className="w-full h-px bg-border mb-10" />

        <div className="max-w-[700px] mx-auto space-y-6">
          <p
            className="text-base font-light leading-[1.7] text-text-secondary"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Chaque semaine que vous perdez, vos concurrents d&eacute;ploient des
            syst&egrave;mes qui g&egrave;rent leurs relances commerciales, acc&eacute;l&egrave;rent leurs
            prises de d&eacute;cision et creusent l&apos;&eacute;cart.
          </p>
          <p
            className="text-base font-light leading-[1.7] text-text-secondary"
            style={{ fontFamily: "var(--font-body)" }}
          >
            74% des organisations pr&eacute;voient de d&eacute;ployer des agents autonomes
            d&apos;ici 2 ans. Seulement 21% ont la gouvernance en place. Ceux qui
            agissent maintenant d&eacute;finissent les r&egrave;gles du jeu.
          </p>
          <p
            className="text-base font-medium text-text"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Ce n&apos;est plus une question de savoir si vous adoptez l&apos;IA — c&apos;est
            quand, et avec qui.
          </p>
        </div>
      </div>
    </section>
  );
}
