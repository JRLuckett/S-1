'use client';
import { useEffect, useRef } from 'react';
import styles from './EvidenceSection.module.css';

const cards = [
  { stat: '$500K+', context: "Cost of a wrong VP Sales hire — salary, severance, pipeline damage, and time lost." },
  { stat: '78%', context: "VP Sales fail at $1–$3M ARR. Not because they're bad — because there's no system to inherit." },
  { stat: '12 months', context: "Average enterprise rep ramp time. Every failed hire before ramp costs you double." },
  { stat: '53%', context: "SaaS licenses go unused in the average tech stack. Tools without process are donations." },
  { stat: '28 months', context: "Median gap between Series A and Series B in 2024. Every month without a GTM system compounds the pressure." },
  { stat: '21%', context: "Average B2B win rate. The best GTM systems get this to 35–45%. That gap is the work." },
];

export default function EvidenceSection() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(headlineRef.current, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' } });
      const allCards = gridRef.current?.querySelectorAll(`.${styles.card}`);
      if (allCards) gsap.from(allCards, { opacity: 0, y: 16, duration: 0.4, stagger: 0.1, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } });
      const ellipse = circleRef.current?.querySelector('ellipse');
      if (ellipse) {
        const length = (ellipse as SVGGeometryElement).getTotalLength?.() || 300;
        gsap.set(ellipse, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(ellipse, { strokeDashoffset: 0, duration: 0.6, ease: 'power2.out', delay: 0.5, scrollTrigger: { trigger: circleRef.current?.closest(`.${styles.card}`), start: 'top 80%' } });
      }
    });
  }, []);

  return (
    <section id="evidence" aria-label="Evidence">
      <div className="container">
        <h2 className={`h3 ${styles.headline}`} ref={headlineRef}>The math behind the mistakes.</h2>
        <div className={`grid-3 ${styles.grid}`} ref={gridRef}>
          {cards.map(card => (
            <div key={card.stat} className={`card ${styles.card}`}>
              <div className={styles.statWrap}>
                <span className={`${styles.stat} mono-number`} style={{ color: 'var(--accent)' }}>{card.stat}</span>
              </div>
              <p className={styles.context}>{card.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
