"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const agents = [
  {
    id: "sales",
    num: "01",
    tab: "Sales",
    title: "Sales Agent",
    description:
      "Qualifie les leads et engage les prospects — de la prise de contact LinkedIn/email à la prise de RDV, la rédaction de propositions et la mise à jour CRM.",
    stats: [
      { value: "142", label: "leads qualifiés ce mois" },
      { value: "86%", label: "taux de réponse" },
    ],
    activity: [
      { text: "Relance envoyée à Jean-Marc Dupont", time: "il y a 2 min", tool: "HubSpot" },
      { text: "Lead qualifié → HubSpot", time: "il y a 5 min", tool: "CRM" },
      { text: "RDV planifié avec Société X", time: "il y a 12 min", tool: "Calendly" },
      { text: "Proposition commerciale rédigée", time: "il y a 18 min", tool: "Notion" },
      { text: "Email de suivi envoyé à Marie L.", time: "il y a 25 min", tool: "Gmail" },
    ],
  },
  {
    id: "support",
    num: "02",
    tab: "Support",
    title: "Support Agent",
    description:
      "Traite les tickets entrants, répond aux questions fréquentes et escalade les cas complexes à l'équipe humaine.",
    stats: [
      { value: "94%", label: "résolution automatique" },
      { value: "4min", label: "temps de réponse moyen" },
    ],
    activity: [
      { text: "Ticket #2847 résolu", time: "il y a 1 min", tool: "Zendesk" },
      { text: "FAQ répondu", time: "il y a 3 min", tool: "Intercom" },
      { text: "Escalade → Sarah (urgent)", time: "il y a 8 min", tool: "Slack" },
      { text: "Ticket #2845 résolu automatiquement", time: "il y a 14 min", tool: "Zendesk" },
      { text: "Base de connaissances mise à jour", time: "il y a 20 min", tool: "Notion" },
    ],
  },
  {
    id: "operations",
    num: "03",
    tab: "Operations",
    title: "Operations Agent",
    description:
      "Automatise les process répétitifs, génère les rapports hebdomadaires et coordonne les équipes.",
    stats: [
      { value: "18h", label: "/semaine économisées" },
      { value: "0", label: "rapports manquants" },
    ],
    activity: [
      { text: "Rapport hebdo généré", time: "il y a 4 min", tool: "Sheets" },
      { text: "Facture Acme Corp validée", time: "il y a 9 min", tool: "Pennylane" },
      { text: "Alerte stock déclenchée", time: "il y a 15 min", tool: "Slack" },
      { text: "Process onboarding lancé", time: "il y a 22 min", tool: "Notion" },
      { text: "KPI dashboard mis à jour", time: "il y a 30 min", tool: "Looker" },
    ],
  },
  {
    id: "marketing",
    num: "04",
    tab: "Marketing",
    title: "Marketing Agent",
    description:
      "Surveille la concurrence, génère du contenu et analyse les performances des campagnes.",
    stats: [
      { value: "47", label: "articles analysés" },
      { value: "12", label: "contenus publiés ce mois" },
    ],
    activity: [
      { text: "Veille concurrents mise à jour", time: "il y a 3 min", tool: "Feedly" },
      { text: "Article LinkedIn rédigé", time: "il y a 7 min", tool: "LinkedIn" },
      { text: "Performance pub analysée", time: "il y a 16 min", tool: "Meta Ads" },
      { text: "Newsletter hebdo préparée", time: "il y a 24 min", tool: "Mailchimp" },
      { text: "Rapport SEO généré", time: "il y a 35 min", tool: "Ahrefs" },
    ],
  },
  {
    id: "recruiting",
    num: "05",
    tab: "Recruiting",
    title: "Recruiting Agent",
    description:
      "Trie les CVs, score les candidats et planifie les entretiens automatiquement.",
    stats: [
      { value: "247", label: "CVs traités" },
      { value: "-45%", label: "délai recrutement" },
    ],
    activity: [
      { text: "12 CVs shortlistés", time: "il y a 2 min", tool: "Welcome" },
      { text: "Entretien planifié avec Lucie M.", time: "il y a 6 min", tool: "Calendly" },
      { text: "Candidat rejeté (score 2/10)", time: "il y a 11 min", tool: "ATS" },
      { text: "Fiche poste Dev Senior publiée", time: "il y a 19 min", tool: "LinkedIn" },
      { text: "Scoring batch terminé (34 CVs)", time: "il y a 28 min", tool: "Internal" },
    ],
  },
];

function ActivityFeed({ items }: { items: { text: string; time: string; tool: string }[] }) {
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
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
        <p
          className="text-[11px] font-semibold tracking-[4px] uppercase text-text-secondary"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Live Activity
        </p>
      </div>
      {items.slice(0, visibleCount).map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 animate-slide-in rounded px-3 py-2.5 -mx-3 hover:bg-bg transition-colors"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/60 shrink-0" />
          <div className="flex-1 min-w-0">
            <span className="text-sm text-text">{item.text}</span>
            <span
              className="ml-2 inline-block text-[10px] font-mono px-2 py-0.5 rounded bg-surface-hover border border-text-muted text-text-secondary"
            >
              {item.tool}
            </span>
          </div>
          <span className="text-text-muted text-xs font-mono whitespace-nowrap">
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
      className="py-[120px] px-6"
      style={{ background: "#0F0F0F" }}
    >
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Tab bar */}
        <div className="flex gap-8 mb-16 border-b border-border overflow-x-auto pb-0">
          {agents.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setActiveIdx(i)}
              className={`pb-4 text-[12px] font-semibold tracking-[3px] uppercase whitespace-nowrap transition-colors border-b-2 ${
                i === activeIdx
                  ? "text-text border-accent"
                  : "text-text-muted hover:text-text-secondary border-transparent"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {a.num} {a.tab}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left */}
          <div className="relative">
            {/* Watermark number */}
            <div
              className="absolute -top-8 -left-4 select-none pointer-events-none"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "120px",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#F5F5F0",
                opacity: 0.05,
                lineHeight: 1,
              }}
            >
              {agent.num}
            </div>

            <p
              className="text-[11px] font-semibold tracking-[4px] uppercase text-text-secondary mb-4 relative"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {agent.tab} Agent
            </p>
            <h3
              className="text-[36px] font-bold text-text mb-6 leading-[1.05] relative"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {agent.title}
            </h3>
            <p
              className="text-base font-light leading-[1.7] text-text-secondary mb-10 relative"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {agent.description}
            </p>

            <div className="grid grid-cols-2 gap-4 relative">
              {agent.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-surface border border-border p-5"
                >
                  <p
                    className="text-4xl font-bold text-text"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-sm text-text-secondary mt-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Live Activity */}
          <div className="bg-surface border border-border p-7">
            <ActivityFeed items={agent.activity} />
          </div>
        </div>
      </div>
    </section>
  );
}
