"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const capabilities = [
  {
    icon: "📊",
    title: "Intelligence commerciale",
    desc: "Dashboards live depuis votre CRM, email, Slack",
  },
  {
    icon: "👤",
    title: "Recrutement automatisé",
    desc: "Tri CVs, scoring, prise de RDV sans intervention",
  },
  {
    icon: "💬",
    title: "Support niveau 1",
    desc: "Résolution automatique, escalade intelligente",
  },
  {
    icon: "🎯",
    title: "Génération de leads",
    desc: "Prospection outbound automatisée et personnalisée",
  },
  {
    icon: "🔍",
    title: "Veille concurrentielle",
    desc: "Monitoring marchés, news, réseaux sociaux en continu",
  },
  {
    icon: "💰",
    title: "Reporting financier",
    desc: "P&L en temps réel, alertes anomalies, prévisions",
  },
  {
    icon: "✉️",
    title: "Automatisation emails",
    desc: "Drafting, envoi, suivi sur tous vos canaux",
  },
  {
    icon: "📝",
    title: "Machine à contenu",
    desc: "Newsletters, posts LinkedIn, articles — on brand, automatiques",
  },
  {
    icon: "⚙️",
    title: "Gestion opérationnelle",
    desc: "Coordination équipes, validation process, suivi projets",
  },
  {
    icon: "📈",
    title: "Analyse de données",
    desc: "Extraction, nettoyage, visualisation depuis vos sources",
  },
];

export default function Capabilities() {
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
    <section ref={ref} className="bg-surface py-[120px] px-6">
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-[11px] font-semibold tracking-[2.5px] text-muted uppercase mb-4">
          Capacités
        </p>
        <h2 className="text-[42px] font-bold leading-[1.05] text-primary mb-14">
          Ce que vos agents
          <br />
          font vraiment.
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-xl p-6 flex gap-4 items-start transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
              style={{
                transitionDelay: visible ? `${i * 50}ms` : "0ms",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <span className="text-2xl">{cap.icon}</span>
              <div>
                <h3 className="font-semibold text-primary">{cap.title}</h3>
                <p className="text-sm text-secondary mt-1 leading-[1.65]">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block mt-10 text-[11px] font-semibold tracking-[2.5px] uppercase text-accent hover:text-accent/80 transition-colors"
        >
          Voir toutes les capacités &rarr;
        </a>
      </div>
    </section>
  );
}
