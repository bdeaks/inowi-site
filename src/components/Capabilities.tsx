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
    <section ref={ref} className="bg-surface py-20 px-6">
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-xs font-semibold tracking-widest text-muted uppercase mb-4">
          Capacités
        </p>
        <h2 className="text-[40px] font-bold leading-[1.1] text-primary mb-12">
          Ce que vos agents
          <br />
          font vraiment.
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {capabilities.map((cap, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-xl p-6 flex gap-4 items-start"
            >
              <span className="text-2xl">{cap.icon}</span>
              <div>
                <h3 className="font-semibold text-primary">{cap.title}</h3>
                <p className="text-sm text-secondary mt-1">{cap.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-block mt-8 text-xs font-semibold tracking-widest uppercase text-accent hover:text-accent/80 transition-colors"
        >
          Voir toutes les capacités →
        </a>
      </div>
    </section>
  );
}
