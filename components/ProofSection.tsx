'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './ProofSection.module.css';

const cards = [
  { company: 'Crux Data', stage: 'Series A · 40 people', number: '400%', mechanism: 'Sales increase. $75M+ bookings. Google, Databricks, and Morningstar partnerships. GTM built from ground up.' },
  { company: 'Cloudera', stage: 'Growth → IPO', number: '$10M→$250M ARR', mechanism: '100% YoY bookings growth. Largest deal in company history. Scaled sales org 5x. Led Western Region through IPO.' },
  { company: 'NextLabs', stage: 'Rebuild', number: '80%+', mechanism: 'Sales growth. Global partnerships launched with SAP, Siemens, Deloitte, Accenture, and KPMG. Full GTM rebuild.' },
];

export default function ProofSection() {
  const structLineRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(structLineRef.current, { scaleX: 0, transformOrigin: 'left', duration: 0.6, scrollTrigger: { trigger: structLineRef.current, start: 'top 80%' } });
      gsap.from(headlineRef.current, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' } });
      gsap.from(subRef.current, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: subRef.current, start: 'top 85%' } });
      const allCards = gridRef.current?.querySelectorAll(`.${styles.card}`);
      if (allCards) gsap.from(allCards, { opacity: 0, y: 16, duration: 0.4, stagger: 0.1, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } });
    });
  }, []);

  return (
    <section id="proof" className={styles.proof} aria-label="Proof">
      <div className="structural-line" ref={structLineRef} style={{ marginBottom: 'var(--section-pad-y)' }} />
      <div className="container">
        <h2 className={`h2 ${styles.headline}`} ref={headlineRef}>Built by operators. Not consultants.</h2>
        <p className={`sub-headline ${styles.sub}`} ref={subRef}>Each company is different. The pattern is the same: recognize the need, build the system, prove it works, grow.</p>
        <div className={`grid-3 ${styles.grid}`} ref={gridRef}>
          {cards.map(card => (
            <div key={card.company} className={`card ${styles.card}`}>
              <span className={styles.company}>{card.company}</span>
              <span className={styles.stage}>{card.stage}</span>
              <div className={`${styles.number} mono-number`}>{card.number}</div>
              <p className={`${styles.mechanism} body-md`}>{card.mechanism}</p>
            </div>
          ))}
        </div>
        <Link href="/results" className={`text-link ${styles.cta}`}>Read the full stories →</Link>
      </div>
    </section>
  );
}
