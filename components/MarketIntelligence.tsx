'use client';
import { useEffect, useRef } from 'react';
import styles from './MarketIntelligence.module.css';

const stats = [
  { number: '>10%', value: 10, suffix: '%', context: 'of seed funded companies make it to Series C' },
  { number: '>70%', value: 70, suffix: '%', context: 'of venture-backed startups fail due to premature scaling' },
  { number: '>35%', value: 35, suffix: '%', context: 'attrition rate of software sales professionals' },
];

export default function MarketIntelligence() {
  const structLineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const statsGridRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      numberRefs.current.forEach(el => { if (el) el.textContent = el.dataset.target || ''; });
      return;
    }
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(structLineRef.current, { scaleX: 0, transformOrigin: 'left', duration: 0.6, ease: 'power2.out', scrollTrigger: { trigger: structLineRef.current, start: 'top 80%' } });
      gsap.from(labelRef.current, { opacity: 0, y: 8, duration: 0.4, scrollTrigger: { trigger: labelRef.current, start: 'top 85%' } });
      gsap.from(headlineRef.current, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' } });
      gsap.from(subRef.current, { opacity: 0, y: 12, duration: 0.5, delay: 0.1, scrollTrigger: { trigger: subRef.current, start: 'top 85%' } });
      const cards = statsGridRef.current?.querySelectorAll(`.${styles.card}`);
      if (cards) gsap.from(cards, { opacity: 0, y: 16, duration: 0.4, stagger: 0.15, scrollTrigger: { trigger: statsGridRef.current, start: 'top 80%' } });
      numberRefs.current.forEach(el => {
        if (!el) return;
        const target = parseInt(el.dataset.target || '0');
        const obj = { val: 0 };
        gsap.to(obj, { val: target, duration: 1.2, ease: 'power2.out', scrollTrigger: { trigger: el.closest(`.${styles.card}`), start: 'top 80%' }, onUpdate: () => { el.textContent = String(Math.round(obj.val)); } });
      });
    });
  }, []);

  return (
    <section id="market-intelligence" className={styles.section} aria-label="Market Intelligence">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <span className="section-label" ref={labelRef}>Market Intelligence</span>
            <h2 className={`h2 ${styles.headline}`} ref={headlineRef}>The facts about reaching scale.</h2>
            <p className={`sub-headline ${styles.sub}`} ref={subRef}>Without the foundation, the growth you have right now has a ceiling — and you might be about to hit it.</p>
          </div>
          <div className={styles.stats} ref={statsGridRef}>
            {stats.map((stat, i) => (
              <div key={stat.number} className={styles.card}>
                <div className={`${styles.number} mono-number`}>
                  <span className={styles.symbol}>&gt;</span>
                  <span ref={el => { numberRefs.current[i] = el; }} data-target={String(stat.value)}>0</span>
                  {stat.suffix}
                </div>
                <p className={styles.context}>{stat.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
