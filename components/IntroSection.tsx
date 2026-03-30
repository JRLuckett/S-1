'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './IntroSection.module.css';

const chainLinks = [
  'ICP Clarity',
  'Pipeline Quality',
  'Deal Progression',
  'Forecast Accuracy',
  'Board Confidence',
  'Next Raise',
];

export default function IntroSection() {
  const [jonnyPhoto, setJonnyPhoto] = useState<string | null>(null);
  const structLineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const chainRef = useRef<HTMLDivElement>(null);
  const body2Ref = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const credRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    fetch('/photos/jonny-luckett.jpg', { method: 'HEAD' }).then(r => { if (r.ok) setJonnyPhoto('/photos/jonny-luckett.jpg'); }).catch(() => {});
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(structLineRef.current, { scaleX: 0, transformOrigin: 'left', duration: 0.6, scrollTrigger: { trigger: structLineRef.current, start: 'top 80%' } });
      gsap.from(labelRef.current, { opacity: 0, y: 8, duration: 0.4, scrollTrigger: { trigger: labelRef.current, start: 'top 85%' } });
      gsap.from(headlineRef.current, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: headlineRef.current, start: 'top 85%' } });
      gsap.from(bodyRef.current, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: bodyRef.current, start: 'top 85%' } });
      const links = chainRef.current?.querySelectorAll(`.${styles.chainLink}`);
      if (links) gsap.from(links, { opacity: 0, y: 8, duration: 0.3, stagger: 0.08, scrollTrigger: { trigger: chainRef.current, start: 'top 85%' } });
      gsap.from(body2Ref.current, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: body2Ref.current, start: 'top 85%' } });
      const members = teamRef.current?.querySelectorAll(`.${styles.member}`);
      if (members) gsap.from(members, { opacity: 0, y: 16, duration: 0.5, stagger: 0.15, scrollTrigger: { trigger: teamRef.current, start: 'top 80%' } });
      gsap.from(credRef.current, { opacity: 0, y: 8, duration: 0.4, scrollTrigger: { trigger: credRef.current, start: 'top 90%' } });
    });
  }, []);

  return (
    <section id="who-we-are" className={styles.intro} aria-label="Who We Are">
      <div className="structural-line" ref={structLineRef} style={{ maxWidth: 'var(--content-max)', margin: '0 auto var(--section-pad-y)' }} />
      <div className="container">

        {/* Section label + Headline + Sub-headline */}
        <span className="section-label" ref={labelRef}>Who We Are</span>
        <h2 className={`h2 ${styles.headline}`} ref={headlineRef}>Bad news early is actionable.<br />Bad news late is expensive.</h2>
        <p className={`sub-headline ${styles.subHeadline}`}>We diagnose your GTM across seven disciplines, then embed with your team to build the systems that make growth repeatable.</p>

        {/* Operator Metric Cards */}
        <div className={styles.metricGrid}>
          <div className={`card ${styles.metricCard}`}>
            <span className={`${styles.metricStat} mono-number`}>3</span>
            <span className={styles.metricContext}>Initial Public Offerings</span>
          </div>
          <div className={`card ${styles.metricCard}`}>
            <span className={`${styles.metricStat} mono-number`}>$300M+</span>
            <span className={styles.metricContext}>Career Bookings</span>
          </div>
          <div className={`card ${styles.metricCard}`}>
            <span className={`${styles.metricStat} mono-number`}>$10M → $250M</span>
            <span className={styles.metricContext}>ARR at Cloudera</span>
          </div>
          <div className={`card ${styles.metricCard}`}>
            <span className={`${styles.metricStat} mono-number`}>400%</span>
            <span className={styles.metricContext}>Sales Increase at Crux</span>
          </div>
        </div>

        <div className={styles.layout}>
          {/* Left: All copy */}
          <div className={styles.copy}>
            <div className={styles.copyBlock} ref={bodyRef}>
              <p className="body-lg">S-1 is a GTM operating partner for venture-backed software companies. The name comes from the SEC S-1 filing — the document a company submits when it&apos;s ready to go public. We named ourselves after the destination because we build toward it from day one — a GTM foundation that scales through Seed, Series A, B, C, and beyond.</p>
              <p className="body-lg">In practice, that means we diagnose your GTM across seven disciplines, then embed with your team to build the systems — sales process, pipeline engine, enablement, partner ecosystem — that make growth repeatable.</p>
              <p className="body-lg">Most companies treat foundational GTM work as critical to the business but the progress gets lost in the day-to-day priorities. Later becomes the deadline. The gaps compound. S-1&apos;s model does both at the same time: we build the ICP, value framework, sales process, and pipeline engine that keeps getting deprioritized — while your team stays focused on the single most important thing, hitting the number.</p>
            </div>
            <div className={styles.copyBlock} ref={body2Ref}>
              <p className="body-lg">Most GTM consulting gets called in after the forecast miss, after the failed hire, after the board asks hard questions nobody can answer. S-1 works at every point on that timeline — whether you&apos;re building ahead of the problem or already inside it. The difference is that either way, we don&apos;t put band-aids on symptoms. We build the system that prevents it from happening again.</p>
              <p className="body-lg">The test of whether a GTM system has been truly built is whether it keeps running when the builder leaves. Playbooks that live in someone&apos;s head are not playbooks. Processes that require the founder in every important deal are not processes. S-1 builds operational systems — documentation, tooling, dashboards, and workflow automation — that transfer intelligence into the organization. Your fourth rep ramps as fast as your first. Your pipeline engine doesn&apos;t rely on one person&apos;s network.</p>
              <p className="body-lg">We don&apos;t advise from the outside. We embed with your team — inside the deal reviews, the pipeline calls, the customer conversations — where we catch the patterns that monthly advisory sessions would never surface.</p>
            </div>
          </div>

          {/* Right: Headshots */}
          <div className={styles.right}>
            <div className={styles.team} ref={teamRef}>
              <div className={styles.member}>
                <div className={styles.photoWrap}>
                  <img src="/photos/patrick-ball.jpg" alt="Photo of Patrick Ball" className={styles.photo} />
                </div>
                <h3 className={styles.name}>Patrick Ball</h3>
                <p className={`${styles.bio} body-md`}>Three-time CRO. Three IPOs. $300M+ in bookings. Scaled Cloudera from $10M to $250M ARR, grew sales 400% at Crux, rebuilt GTM at NextLabs. Led all global revenue functions at Privitar (80+ headcount). 26 years building GTM at scale.</p>
              </div>
              <div className={styles.member}>
                <div className={styles.photoWrap}>
                  {jonnyPhoto ? <img src={jonnyPhoto} alt="Photo of Jonny Luckett" className={styles.photo} /> : <div className={styles.placeholder}>JL</div>}
                </div>
                <h3 className={styles.name}>Jonny Luckett</h3>
                <p className={`${styles.bio} body-md`}>Built GTM from the ground up — from the inside. Has been the SDR, the AE, the partner lead, the renewal manager. Built sales process, pricing, and enablement that teams ran on. Worked cross-functionally with product, engineering, and marketing on PMF and launch strategy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Credential line — full width */}
        <p className={styles.credential} ref={credRef}>30+ years combined enterprise software GTM · Six companies · Every stage from seed to IPO</p>

      </div>
    </section>
  );
}
