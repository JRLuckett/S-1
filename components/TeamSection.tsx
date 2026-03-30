'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  const [jonnyPhoto, setJonnyPhoto] = useState<string | null>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('/photos/jonny-luckett.jpg', { method: 'HEAD' }).then(r => { if (r.ok) setJonnyPhoto('/photos/jonny-luckett.jpg'); }).catch(() => {});
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(labelRef.current, { opacity: 0, y: 8, duration: 0.4, scrollTrigger: { trigger: labelRef.current, start: 'top 85%' } });
      gsap.from(headlineRef.current, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' } });
      const members = gridRef.current?.querySelectorAll(`.${styles.member}`);
      if (members) gsap.from(members, { opacity: 0, y: 16, duration: 0.5, stagger: 0.15, scrollTrigger: { trigger: gridRef.current, start: 'top 80%' } });
      gsap.from(tickerRef.current, { opacity: 0, y: 8, duration: 0.4, scrollTrigger: { trigger: tickerRef.current, start: 'top 90%' } });
    });
  }, []);

  return (
    <section id="team" aria-label="Team">
      <div className="container">
        <span className="section-label" ref={labelRef}>Built By Operators</span>
        <h2 className={`h2 ${styles.headline}`} ref={headlineRef}>Two operators. Different roles. One operating system.</h2>
        <div className={`grid-2 ${styles.grid}`} ref={gridRef}>
          <div className={styles.member}>
            <div className={styles.photoWrap}>
              <img src="/photos/patrick-ball.jpg" alt="Photo of Patrick Ball" className={styles.photo} />
            </div>
            <h3 className={styles.name}>Patrick Ball</h3>
            <p className={`${styles.bio} body-md`}>Two-time CRO. Three IPOs. Scaled Cloudera from $10M to $250M ARR. Led global GTM at Privitar (80+ headcount). 80%+ sales growth at NextLabs.</p>
            <p className={styles.tagline}>The person boards call when revenue isn&apos;t working.</p>
          </div>
          <div className={styles.member}>
            <div className={styles.photoWrap}>
              {jonnyPhoto ? <img src={jonnyPhoto} alt="Photo of Jonny Luckett" className={styles.photo} /> : <div className={styles.placeholder}>JL</div>}
            </div>
            <h3 className={styles.name}>Jonny Luckett</h3>
            <p className={`${styles.bio} body-md`}>Built GTM from zero. ICP, value framework, messaging, pipeline systems, analytics, pricing, and enablement — from pre-revenue through scale.</p>
            <p className={styles.tagline}>The person who builds the machine, not just the strategy for one.</p>
          </div>
        </div>
        <div className={styles.ticker} ref={tickerRef}>
          <span>30+ years combined enterprise software GTM</span>
          <span className={styles.tickerDot}>·</span>
          <span>Six companies</span>
          <span className={styles.tickerDot}>·</span>
          <span>Every stage from seed to IPO</span>
        </div>
      </div>
    </section>
  );
}
