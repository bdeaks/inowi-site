"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) el.classList.add("animate-fade-in-up");
  }, []);

  return (
    <section ref={ref} className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
      <div className="flex gap-3 mb-8">
        {["AGENTS IA", "SUR MESURE", "PME FRANÇAISES"].map((label) => (
          <span
            key={label}
            className="text-xs font-semibold tracking-widest text-muted border border-border rounded-full px-3 py-1"
          >
            {label}
          </span>
        ))}
      </div>

      <h1 className="text-[52px] font-extrabold leading-[1.05] tracking-tight text-primary max-w-2xl">
        Des agents IA
        <br />
        qui bossent vraiment.
      </h1>

      <p className="mt-6 text-base leading-relaxed text-secondary max-w-xl">
        On construit et déploie des agents IA sur mesure pour vos équipes —
        <br className="hidden sm:block" />
        intégrés à vos outils, opérationnels en 4 semaines.
      </p>

      <a
        href="#audit"
        className="inline-block mt-8 bg-accent text-white font-semibold px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
      >
        Audit gratuit — 30 min →
      </a>
    </section>
  );
}
