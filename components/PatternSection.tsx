'use client';
import { useEffect, useRef } from 'react';
import styles from './PatternSection.module.css';

const cards = [
  {
    num: '01',
    title: <><span>Finding</span><br /><span>PMF</span></>,
    key: 'pmf',
    desc: "You have revenue — but can you explain why they bought, who else should, and what happens if they don't? In the buyer's language, not yours.",
  },
  {
    num: '02',
    title: <><span>No Sales</span><br /><span>Foundation</span></>,
    key: 'sales',
    desc: "No documented process. No qualification rigor. Every rep running their own playbook — and none of them are producing the same result.",
  },
  {
    num: '03',
    title: <><span>No Revenue</span><br /><span>Predictability</span></>,
    key: 'predict',
    desc: "Forecasting based on hope rather than math. The board sees a number, not conviction. You miss by 40% and the next raise gets harder.",
  },
  {
    num: '04',
    title: <><span>Premature</span><br /><span>Hiring</span></>,
    key: 'hiring',
    desc: "Scaling headcount before the systems exist for new hires to succeed. Every GTM hire who onboards into a blank slate costs months and six figures.",
  },
];

export default function PatternSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const quotesRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(headlineRef.current, { opacity: 0, y: 16, duration: 0.5, scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' } });
      gsap.from(quotesRef.current, { opacity: 0, y: 8, duration: 0.4, scrollTrigger: { trigger: quotesRef.current, start: 'top 85%' } });
      const cardEls = gridRef.current?.querySelectorAll(`.${styles.card}`);
      if (cardEls) gsap.from(cardEls, { opacity: 0, y: 16, duration: 0.4, stagger: 0.1, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } });
    });
  }, []);

  return (
    <section id="the-pattern" aria-label="Where the System Breaks" ref={sectionRef}>
      <div className="container">
        <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
        <span className="section-label">Pattern</span>
        <h2 className={`h2 ${styles.headline}`} ref={headlineRef}>
          Where the system breaks.
        </h2>
        <p className="sub-headline" ref={quotesRef} style={{ marginBottom: 56, maxWidth: 720 }}>
          &ldquo;The prospect went dark on me.&rdquo; &ldquo;The deal is pushing into next quarter.&rdquo; &ldquo;Product is building stuff in a silo.&rdquo; &ldquo;I&apos;m not sure what their use case is, but they bought.&rdquo;
        </p>

        <div className={styles.grid} ref={gridRef}>
          {cards.map(card => (
            <div key={card.key} className={styles.card}>
              <span className={styles.cardNum}>{card.num}</span>
              <h3 className={styles.cardSymbol}>{card.title}</h3>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
