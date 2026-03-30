'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './HowItWorks.module.css';

const bundles = [
  {
    num: '01',
    title: 'Foundation',
    desc: "ICP definition, value framework, and competitive positioning. The bedrock every downstream motion depends on.",
    href: '/bundles',
  },
  {
    num: '02',
    title: 'Execute & Scale',
    desc: "Sales process, deal qualification, and pipeline engine — operationalized so your second rep performs like your first.",
    href: '/bundles',
  },
  {
    num: '03',
    title: 'Partner Ecosystem',
    desc: "Indirect channels and alliance motions. Extending your reach through strategic partnerships that compound pipeline.",
    href: '/bundles',
  },
  {
    num: '04',
    title: 'Enablement',
    desc: "Turning strategy into frontline behavior change. Coaching, content, and onboarding that closes the gap between vision and execution.",
    href: '/bundles',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const rows = sectionRef.current?.querySelectorAll(`.${styles.row}`);
      if (rows) gsap.from(rows, { opacity: 0, y: 12, duration: 0.4, stagger: 0.12, scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' } });
    });
  }, []);

  return (
    <section id="how-it-works" aria-label="Engagement Bundles" ref={sectionRef}>
      <div className="container">
        <span className="section-label">Specialized Solutions</span>
        <h2 className="h2" style={{ marginBottom: 56 }}>Engagement Bundles.</h2>

        <div className={styles.list}>
          {bundles.map(b => (
            <div key={b.num} className={styles.row}>
              <span className={`${styles.num} mono-number`}>{b.num}</span>
              <div className={styles.titleCol}>
                <h3 className={styles.title}>{b.title}</h3>
                <Link href={b.href} className={styles.link}>Learn More →</Link>
              </div>
              <p className={styles.desc}>{b.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.seeAll}>
          <Link href="/bundles" className="btn-outline">See all bundles →</Link>
        </div>
      </div>
    </section>
  );
}
