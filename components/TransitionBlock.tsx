'use client';
import { useEffect, useRef } from 'react';
import styles from './TransitionBlock.module.css';

export default function TransitionBlock() {
  const blockRef = useRef<HTMLDivElement>(null);
  const emphasisRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(blockRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        scrollTrigger: { trigger: blockRef.current, start: 'top 80%' },
      });
      const path = emphasisRef.current?.querySelector('path');
      if (path) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: emphasisRef.current, start: 'top 85%' },
        });
      }
    });
  }, []);

  return (
    <section className={styles.section} aria-label="The Trap">
      <p className={styles.qualifier}>
        What got you here was product, timing, and talent. What gets you to the next stage is the foundation to a GTM engine that produces <strong className={styles.trap}>repeatable revenue.</strong>
      </p>
      <div className="container--narrow" ref={blockRef}>
        <p className={styles.text}>
          If every available hour goes to this quarter&apos;s number, the sales foundation that would make the next quarter repeatable, and the next hire successful, keeps getting deferred.{' '}
          <strong className={styles.boldWhite}>That&apos;s the trap.</strong>{' '}
          S-1 builds the foundation — value framework, sales process, pipeline systems, rep enablement — while you sell.{' '}
          <strong className={styles.boldWhite}>Not instead of it.</strong>
        </p>
      </div>
    </section>
  );
}
