"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.classList.add("animate-fade-in-up");
  }, []);

  return (
    <section ref={ref} className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto w-full py-32">
        <div className="flex flex-wrap gap-3 mb-10">
          {["AGENTS IA", "SUR MESURE", "PME FRANÇAISES"].map((label) => (
            <span
              key={label}
              className="text-[11px] font-semibold tracking-[2.5px] text-muted border border-border rounded-full px-4 py-1.5"
            >
              {label}
            </span>
          ))}
        </div>

        <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-extrabold leading-[1.0] tracking-[-1px] text-primary max-w-2xl">
          Des agents IA
          <br />
          qui bossent vraiment.
        </h1>

        <p className="mt-8 text-base leading-[1.65] text-secondary max-w-xl">
          On construit et déploie des agents IA sur mesure pour vos équipes —
          <br className="hidden sm:block" />
          intégrés à vos outils, opérationnels en 4 semaines.
        </p>

        <a
          href="#audit"
          className="cta-hover inline-block mt-10 bg-accent text-white font-semibold px-7 py-3.5 rounded-lg hover:bg-accent/90 transition-colors"
        >
          Audit gratuit — 30 min <span className="cta-arrow">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
