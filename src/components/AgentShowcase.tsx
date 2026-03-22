"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const agents = [
  {
    id: "sales",
    tab: "Sales Agent",
    title: "Sales Agent",
    description:
      "Qualifie les leads et engage les prospects — de la prise de contact LinkedIn/email à la prise de RDV, la rédaction de propositions et la mise à jour CRM.",
    stats: [
      { value: "142", label: "leads qualifiés ce mois" },
      { value: "86%", label: "taux de réponse" },
    ],
    activity: [
      { text: "Relance envoyée à Jean-Marc Dupont", time: "il y a 2 min" },
      { text: "Lead qualifié → HubSpot", time: "il y a 5 min" },
      { text: "RDV planifié avec Société X", time: "il y a 12 min" },
      { text: "Proposition commerciale rédigée", time: "il y a 18 min" },
      { text: "Email de suivi envoyé à Marie L.", time: "il y a 25 min" },
    ],
  },
  {
    id: "support",
    tab: "Support Agent",
    title: "Support Agent",
    description:
      "Traite les tickets entrants, répond aux questions fréquentes et escalade les cas complexes à l'équipe humaine.",
    stats: [
      { value: "94%", label: "résolution automatique" },
      { value: "4min", label: "temps de réponse moyen" },
    ],
    activity: [
      { text: "Ticket #2847 résolu", time: "il y a 1 min" },
      { text: "FAQ répondu", time: "il y a 3 min" },
      { text: "Escalade → Sarah (urgent)", time: "il y a 8 min" },
      { text: "Ticket #2845 résolu automatiquement", time: "il y a 14 min" },
      { text: "Base de connaissances mise à jour", time: "il y a 20 min" },
    ],
  },
  {
    id: "operations",
    tab: "Operations Agent",
    title: "Operations Agent",
    description:
      "Automatise les process répétitifs, génère les rapports hebdomadaires et coordonne les équipes.",
    stats: [
      { value: "18h", label: "/semaine économisées" },
      { value: "0", label: "rapports manquants" },
    ],
    activity: [
      { text: "Rapport hebdo généré", time: "il y a 4 min" },
      { text: "Facture Acme Corp validée", time: "il y a 9 min" },
      { text: "Alerte stock déclenchée", time: "il y a 15 min" },
      { text: "Process onboarding lancé", time: "il y a 22 min" },
      { text: "KPI dashboard mis à jour", time: "il y a 30 min" },
    ],
  },
  {
    id: "marketing",
    tab: "Marketing Agent",
    title: "Marketing Agent",
    description:
      "Surveille la concurrence, génère du contenu et analyse les performances des campagnes.",
    stats: [
      { value: "47", label: "articles analysés" },
      { value: "12", label: "contenus publiés ce mois" },
    ],
    activity: [
      { text: "Veille concurrents mise à jour", time: "il y a 3 min" },
      { text: "Article LinkedIn rédigé", time: "il y a 7 min" },
      { text: "Performance pub analysée", time: "il y a 16 min" },
      { text: "Newsletter hebdo préparée", time: "il y a 24 min" },
      { text: "Rapport SEO généré", time: "il y a 35 min" },
    ],
  },
  {
    id: "recruiting",
    tab: "Recruiting Agent",
    title: "Recruiting Agent",
    description:
      "Trie les CVs, score les candidats et planifie les entretiens automatiquement.",
    stats: [
      { value: "247", label: "CVs traités" },
      { value: "-45%", label: "délai recrutement" },
    ],
    activity: [
      { text: "12 CVs shortlistés", time: "il y a 2 min" },
      { text: "Entretien planifié avec Lucie M.", time: "il y a 6 min" },
      { text: "Candidat rejeté (score 2/10)", time: "il y a 11 min" },
      { text: "Fiche poste Dev Senior publiée", time: "il y a 19 min" },
      { text: "Scoring batch terminé (34 CVs)", time: "il y a 28 min" },
    ],
  },
];

function ActivityFeed({ items }: { items: { text: string; time: string }[] }) {
  const [visibleCount, setVisibleCount] = useState(3);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    setVisibleCount(3);
    intervalRef.current = setInterval(() => {
      setVisibleCount((c) => Math.min(c + 1, items.length));
    }, 3500);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [items]);

  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold tracking-widest text-muted uppercase">
        Activité récente
      </p>
      {items.slice(0, visibleCount).map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 text-sm animate-fade-in-up"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <span className="mt-1.5 w-2 h-2 rounded-full bg-accent shrink-0" />
          <span className="text-primary">{item.text}</span>
          <span className="text-muted ml-auto whitespace-nowrap text-xs">
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AgentShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) setVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [observerCallback]);

  const agent = agents[activeIdx];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-surface py-20 px-6"
    >
      <div
        className={`max-w-6xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex flex-wrap gap-2 mb-10 border-b border-border">
          {agents.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setActiveIdx(i)}
              className={`px-4 py-3 text-sm font-semibold transition-colors ${
                i === activeIdx
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted hover:text-secondary"
              }`}
            >
              {a.tab}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-3">
              {agent.title}
            </h3>
            <p className="text-secondary leading-relaxed mb-8">
              {agent.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {agent.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-border rounded-xl p-5"
                >
                  <p className="text-4xl font-bold text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-border rounded-xl p-6">
            <ActivityFeed items={agent.activity} />
          </div>
        </div>
      </div>
    </section>
  );
}
