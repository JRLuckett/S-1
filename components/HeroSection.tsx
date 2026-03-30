'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const alreadyPlayed = sessionStorage.getItem('s1:heroPlayed');

    if (prefersReduced || alreadyPlayed) {
      // Skip animation — show everything instantly
      window.dispatchEvent(new CustomEvent('s1:nav-reveal'));
      [overlayRef, line1Ref, line2Ref, subRef, ctaRef].forEach(ref => {
        if (ref.current) {
          (ref.current as HTMLElement).style.opacity = '1';
          (ref.current as HTMLElement).style.transform = 'none';
        }
      });
      return;
    }

    import('gsap').then(({ gsap }) => {
      gsap.set([line1Ref.current, line2Ref.current, subRef.current, ctaRef.current], {
        opacity: 0, y: 24,
      });
      gsap.set(overlayRef.current, { opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.to({}, { duration: 0.5 })
        .to(overlayRef.current, { opacity: 1, duration: 1.2, ease: 'power1.inOut' })
        .call(() => { window.dispatchEvent(new CustomEvent('s1:nav-reveal')); }, [], '<')
        .to(line1Ref.current, { opacity: 1, y: 0, duration: 0.8 }, '+=0.3')
        .to(line2Ref.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.2')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.2')
        .call(() => { sessionStorage.setItem('s1:heroPlayed', '1'); });
    });
  }, []);

  return (
    <section id="hero" className={styles.hero} aria-label="Hero">
      <div className={styles.heroBg}>
        <img src="/photos/organism.jpeg" alt="" className={styles.heroBgImg} />
        <div className={styles.heroBgOverlay} ref={overlayRef} />
      </div>

      <div className={`${styles.heroInner} container`}>
        <h1 className={`h1 ${styles.heroHeadline}`}>
          <span className={styles.heroLine1} ref={line1Ref}>Growth is the goal.</span>
          <span className={`${styles.heroLine2} ${styles.heroHeadlineRed}`} ref={line2Ref}>It can also be the trap.</span>
        </h1>

        <p className="sub-headline" ref={subRef}>
          You&apos;re trending toward the number. Pipeline is building. Deals are progressing. But is this repeatable?
        </p>

        <div className={styles.heroCta} ref={ctaRef}>
          <Link href="/healthcheck" className="btn-primary btn-primary--light">
            See where the gaps are <span className={styles.heroArrow}>→</span>
          </Link>
          <p className="micro-copy" style={{ marginTop: 12, color: 'var(--accent)' }}>A scored assessment of where you actually stand.</p>
        </div>
      </div>
    </section>
  );
}
