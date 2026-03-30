'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const els = sectionRef.current?.querySelectorAll(`.${styles.headline}, .${styles.stats}, .${styles.quote}, .${styles.btn}`);
      if (els) gsap.from(els, { opacity: 0, y: 12, duration: 0.5, stagger: 0.12, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
    });
  }, []);

  return (
    <section id="cta" className={styles.section} aria-label="CTA" ref={sectionRef}>
      <div className={`container ${styles.inner}`}>
        <h2 className={`h2 ${styles.headline}`}>Book a Health Check.</h2>

        <div className="structural-line" style={{ margin: '32px auto', maxWidth: 640, background: 'rgba(0,0,0,0.12)' }} />

        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={`${styles.statValue} mono-number`}>$25k</span>
            <span className={styles.statLabel}>Fixed Fee</span>
          </div>
          <div className={styles.stat}>
            <span className={`${styles.statValue} mono-number`}>4 Weeks</span>
            <span className={styles.statLabel}>Duration</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statValue}>Board Ready</span>
            <span className={styles.statLabel}>Deliverable</span>
          </div>
        </div>

        <p className={styles.quote}>&ldquo;The diagnostic your board will thank you for.&rdquo;</p>

        <Link href="/healthcheck" className={styles.btn}>Start with a Diagnosis</Link>
      </div>
    </section>
  );
}
