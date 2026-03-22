"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function ClosingStatement() {
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
    <section ref={ref} id="audit" className="bg-surface py-24 px-6">
      <div
        className={`max-w-5xl mx-auto text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 className="text-5xl md:text-[68px] font-extrabold leading-[1.0] tracking-tight text-primary mb-8">
          Les entreprises qui
          <br />
          bougent maintenant
          <br />
          posséderont la prochaine
          <br />
          décennie.
        </h2>
        <p className="text-secondary leading-relaxed max-w-xl mx-auto mb-10">
          Chaque avantage compétitif a un point de bascule. Nous y sommes. La
          question n&apos;est plus si — c&apos;est avec qui.
        </p>
        <a
          href="#"
          className="inline-block bg-accent text-white font-semibold px-8 py-4 rounded-lg text-lg hover:bg-accent/90 transition-colors"
        >
          Prendre rendez-vous — audit gratuit →
        </a>
      </div>
    </section>
  );
}
