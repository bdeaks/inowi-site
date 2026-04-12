"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const lines = [
  "Les entreprises",
  "qui bougent",
  "maintenant",
  "posséderont",
  "la prochaine",
  "décennie.",
];

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
    <section
      ref={ref}
      id="audit"
      className="py-[140px] px-6"
      style={{ background: "#F5F5F0" }}
    >
      <div
        className={`max-w-5xl mx-auto text-center transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h2 style={{ fontFamily: "var(--font-display)" }}>
          {lines.map((line, i) => (
            <span
              key={i}
              className="block transition-all duration-800"
              style={{
                fontSize: "clamp(48px, 8vw, 100px)",
                fontWeight: 900,
                lineHeight: 0.88,
                color: "#0A0A0A",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(30px)",
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {line}
            </span>
          ))}
        </h2>

        <p
          className="mt-12 text-base leading-[1.7] max-w-xl mx-auto mb-12"
          style={{
            fontFamily: "var(--font-body)",
            color: "#555555",
            fontWeight: 300,
          }}
        >
          Chaque avantage comp&eacute;titif a un point de bascule. Nous y sommes. La
          question n&apos;est plus si — c&apos;est avec qui.
        </p>

        <a
          href="#audit"
          className="inline-block text-[12px] font-semibold tracking-[2px] uppercase px-8 py-4 transition-colors hover:opacity-80"
          style={{
            fontFamily: "var(--font-body)",
            background: "#0A0A0A",
            color: "#F5F5F0",
          }}
        >
          Prendre rendez-vous — audit gratuit
        </a>
      </div>
    </section>
  );
}
