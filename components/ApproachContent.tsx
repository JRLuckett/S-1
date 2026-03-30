'use client';
import { useEffect, useRef } from 'react';
import styles from './ApproachContent.module.css';

const chainItems = [
  { num: '01', title: "Can't explain why anyone should buy from you — including over doing nothing.", desc: "If no one in the company can answer \"why us over the status quo,\" pipeline generation fails, discovery becomes a feature walkthrough, and champions can't sell internally. This is the root cause of most of what follows." },
  { num: '02', title: 'Sell to anyone who takes a meeting.', desc: "No ICP. No targeting criteria. The pipeline is full of logos that feel good but will never close. Every hour on a non-ICP account is an hour lost. This doesn't improve with scale — it gets more expensive with scale." },
  { num: '03', title: 'Lead with the demo instead of the problem.', desc: "The buyer sees features. Googles your competitor. Goes dark. Or worse: they're impressed, you think you have a deal, but you never identified pain — and 3 months later it's \"no decision.\"" },
  { num: '04', title: 'Confuse interest for commitment.', desc: "\"They said they love it\" is not a deal. It's a compliment. The person giving enthusiastic feedback is not the same person willing to stake their reputation on your product in a budget meeting you weren't invited to." },
  { num: '05', title: "Spend money before you know what to measure.", desc: "Tools, headcount, marketing programs. Without knowing which metrics matter at your stage, every dollar is a bet with no feedback loop. 53% of SaaS licenses go unused — and that's just the tech stack." },
  { num: '06', title: 'Scale before the motion is repeatable.', desc: "If the founder is the only one who can close, hiring 3 reps gives you 3 people who can't close. Adding a VP Sales? 78% of them fail at this stage — not because they're bad, but because there's no system to scale." },
  { num: '07', title: 'Build a forecast on feelings.', desc: "\"Pipeline looks healthy\" isn't a forecast. Without qualification rigor, every deal looks real. The board gets your number. You miss by 40%. The next raise gets harder. You don't have quarters to waste on fiction." },
];

const pillars = [
  { name: 'Four Essential Questions', desc: "What problems do we solve? How? How differently? Where have we done it before? If anyone on the team can't answer these consistently, the organization is speaking different languages to the market." },
  { name: 'Value Framework', desc: "Maps the customer journey from pain to outcome. The single document that aligns pipeline generation, discovery, proposals, and CS. Not a deliverable — a foundation." },
  { name: 'Deal Qualification (MEDDPICC)', desc: "Eliminates fantasy pipeline. Customized to your buyers, your deal sizes, your cycle. Not a generic checklist — a coaching framework calibrated to your motion." },
  { name: 'Champion Building', desc: "Identify → Test → Develop → Enable. Until a champion has taken action on your behalf, they're a hypothesis, not an asset. 99% of the time when a rep says they have a champion, they have a coach." },
  { name: 'Winning the Stage', desc: "Stage-gated sales process with real go/no-go checkpoints. When Stage 2 is completed correctly, win rates reach 83%. All the work is in the beginning." },
  { name: 'Business Value Analysis', desc: "BVH opens doors. BVA closes deals. When BVA is engaged early, sales cycles compress by up to 50%." },
];

const alternatives = [
  { name: 'Fractional CRO', gap: 'Single person. Advises but rarely builds systems or tooling. Advisory without implementation.' },
  { name: 'Accelerator Programs', gap: 'Generic, cohort-based. Same curriculum for a dev tools company and a healthcare platform.' },
  { name: 'Big Consulting Firms', gap: '$500K+. Junior analysts doing the work. Senior talent on the pitch, not the engagement.' },
  { name: 'Sales Methodology Vendors', gap: '3-day training, then gone. No customization. No tooling. No ongoing operating layer.' },
  { name: 'Hiring VP Sales Early', gap: '$200K–$350K+ first-year comp. 67–78% failure rate. They inherit a blank slate.' },
  { name: 'DIY', gap: 'Every GTM mistake costs 3–6 months and $100K–$500K.' },
];

const timeline = [
  { phase: 'Diagnose', time: 'Weeks 1–3', desc: 'Health Check: interviews, data review, scored assessment across 7 disciplines. You walk away with a prioritized roadmap regardless of what you do next.' },
  { phase: 'Build', time: 'Weeks 4–16', desc: 'Fixed SOW. Defined deliverables. We build the components your Health Check identified as highest-leverage.' },
  { phase: 'Operate', time: 'Month 4+', desc: 'Optional. We stay embedded — forecast reviews, deal coaching, live call participation. The methodology becomes muscle memory.' },
];

export default function ApproachContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const chainRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);
      const heroEls = heroRef.current?.querySelectorAll('.section-label, .h1, .sub-headline');
      heroEls?.forEach(el => gsap.from(el, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: el, start: 'top 85%' } }));
      gsap.fromTo(spineRef.current, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: chainRef.current, start: 'top 70%', end: 'bottom 30%', scrub: true } });
      itemRefs.current.forEach(el => { if (el) gsap.from(el, { opacity: 0, x: -8, duration: 0.3, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' } }); });
    });
  }, []);

  return (
    <main className={styles.page}>
      {/* Hero */}
      <section className={styles.hero} ref={heroRef}>
        <div className="container--narrow">
          <span className="section-label">Our Approach</span>
          <h1 className="h1">Most GTM help fixes one organ.<br />We see the whole organism.</h1>
          <p className="sub-headline" style={{ maxWidth: 720 }}>
            ICP defines the value framework. The value framework shapes discovery. Discovery determines the sales process. The sales process dictates enablement. Enablement drives the hiring profile. Pull the wrong lever first and the rest falls apart.
          </p>
        </div>
      </section>

      {/* Chain Reaction */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">The Chain Reaction</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>You built a $5M product.<br />Then spent $500K learning how to sell it.</h2>
          <p className="sub-headline" style={{ marginBottom: 56, maxWidth: 720 }}>
            The mistakes follow a chain reaction. Each one compounds the next. By the time a founder recognizes the pattern, they&apos;ve usually made all seven.
          </p>
          <div className={styles.chain} ref={chainRef}>
            <div className={styles.spine} ref={spineRef} />
            {chainItems.map((item, i) => (
              <div key={item.num} className={styles.chainItem} ref={el => { itemRefs.current[i] = el; }}>
                <div className={styles.node}><span className={`${styles.num} mono-number`}>{item.num}</span></div>
                <div className={styles.chainContent}>
                  <h3 className={styles.chainTitle}>{item.title}</h3>
                  <p className={`${styles.chainDesc} body-md`}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={styles.closing}>
            These aren&apos;t character flaws. They&apos;re knowledge gaps. Each one makes the next one worse. The cost:{' '}
            <span className="mono-number" style={{ color: 'var(--text-headline)', fontStyle: 'normal' }}>$250K–$1M</span> per mistake, plus the quarters you never get back.
          </p>
        </div>
      </section>

      {/* Six Pillars */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">The Operating System</span>
          <h2 className="h2" style={{ marginBottom: 56 }}>One operating system. Refined across six companies. 30+ years.</h2>
          <div className={styles.pillarGrid}>
            {pillars.map(p => (
              <div key={p.name} className={styles.pillar}>
                <h3 className={styles.pillarName}>{p.name}</h3>
                <p className={styles.pillarDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work — Timeline */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">How We Work</span>
          <h2 className="h2" style={{ marginBottom: 56 }}>Diagnose first. Build second. Stay until it runs.</h2>
          <div className={styles.timeline}>
            {timeline.map(t => (
              <div key={t.phase} className={styles.timelineStep}>
                <div className={styles.timelinePhase}>{t.phase}</div>
                <div className={styles.timelineTime}>{t.time}</div>
                <p className={styles.timelineDesc}>{t.desc}</p>
              </div>
            ))}
          </div>
          <p className="body-lg" style={{ maxWidth: 720, marginTop: 40 }}>
            The system we build runs without us. That&apos;s the test. Dashboards, playbooks, processes, and workflows that transfer the intelligence into your organization — so the fourth rep ramps as fast as the first.
          </p>
        </div>
      </section>

      {/* Not a Consultant */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">Not a Consultant. An Operator.</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>Every other GTM firm leads with &ldquo;grow faster.&rdquo;</h2>
          <p className="sub-headline" style={{ marginBottom: 56, maxWidth: 720 }}>That&apos;s the wrong answer to the wrong question. The right question is: <em>why are you not growing faster?</em> The answer is seldom effort. It&apos;s almost always foundation.</p>
          <div className={styles.altGrid}>
            {alternatives.map(a => (
              <div key={a.name} className={styles.altCard}>
                <h3 className={styles.altName}>{a.name}</h3>
                <p className={styles.altGap}>{a.gap}</p>
              </div>
            ))}
          </div>
          <div className={styles.altAnswer}>
            <h3 className={styles.altAnswerTitle}>What S-1 does instead</h3>
            <p className="body-lg">Two operators who have been the CRO. Build dashboards, playbooks, processes, and workflows — not strategy decks. Embedded weekly, not advisory monthly. Senior-only delivery. Deliverables that keep running after we leave.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.section} style={{ textAlign: 'center' }}>
        <div className="container--narrow">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">Where to Start</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>Start with the Health Check.</h2>
          <p className="sub-headline" style={{ marginBottom: 40, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            $25,000. 2–3 weeks. A scored assessment across seven GTM disciplines with a prioritized roadmap — what to fix now, what to fix next, and what can wait.
          </p>
          <a href="/healthcheck" className="cta-btn">Take the Health Check →</a>
        </div>
      </section>
    </main>
  );
}
