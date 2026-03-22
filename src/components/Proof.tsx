"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function Proof() {
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
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-[11px] font-semibold tracking-[2.5px] text-muted uppercase mb-4">
          Preuve concrète
        </p>
        <h2 className="text-[42px] font-bold leading-[1.05] text-primary mb-8 max-w-2xl">
          On a construit un OS de trading multi-marketplace en 48h.
        </h2>
        <p className="text-secondary leading-[1.65] max-w-2xl mb-10">
          PokemonTrader — identification automatique de cartes, publication
          simultanée sur Cardmarket, eBay et Vinted, calcul de marge nette,
          anti-double-vente. Ce qu&apos;on peut faire pour votre métier est
          probablement plus simple.
        </p>
        <a
          href="#"
          className="inline-block text-[11px] font-semibold tracking-[2.5px] uppercase text-accent hover:text-accent/80 transition-colors"
        >
          Voir la démo &rarr;
        </a>
      </div>
    </section>
  );
}
