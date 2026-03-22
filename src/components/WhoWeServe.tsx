"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const profiles = [
  {
    title: "La PME en croissance",
    desc: "Vous scalez vite et n'avez pas le temps de tout faire manuellement. L'agent prend en charge ce qui vous ralentit.",
  },
  {
    title: "L'opérateur exigeant",
    desc: "Vous avez des process rodés. Vous voulez les accélérer sans tout reconstruire.",
  },
  {
    title: "L'agence ou le cabinet",
    desc: "Vos équipes passent 40% du temps sur des tâches répétables. Ce temps vaut cher.",
  },
  {
    title: "Le dirigeant visionnaire",
    desc: "Vous voyez où va le marché. Vous voulez être en avance, pas en rattrapage.",
  },
];

export default function WhoWeServe() {
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
    <section ref={ref} id="cas-clients" className="bg-surface py-20 px-6">
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-4">
          Nos clients
        </p>
        <h2 className="text-[40px] font-bold leading-[1.1] text-primary mb-12 max-w-xl">
          Des dirigeants sérieux qui veulent multiplier leur output — pas leur
          masse salariale.
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {profiles.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-xl p-6"
            >
              <h3 className="font-bold text-primary mb-2">{p.title}</h3>
              <p className="text-sm text-secondary leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
