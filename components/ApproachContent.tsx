'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './ApproachContent.module.css';
import {
  GtmPlanningIcon, SalesExecutionIcon, TechStackIcon, DemandGenerationIcon, ValueSuccessIcon, PartnersIcon, TalentIcon,
  ProductMarketFitIcon, SiloedTechStackIcon, LackOfPredictabilityIcon, PrematureHiringIcon,
  FourEssentialQuestionsIcon, ValueFrameworkIcon, DealQualificationIcon, ChampionBuildingIcon, WinningTheStageIcon, BusinessValueAnalysisIcon,
  DiagnoseIcon, BuildIcon, OperateIcon,
} from './icons/S1Icons';

/* ── Data ── */

const chainItems = [
  { num: '01', title: "Can't explain why anyone should buy from you — including over doing nothing.", desc: "If no one in the company can answer \"why us instead of the status quo,\" pipeline generation fails, discovery becomes a feature walkthrough, and champions can't sell internally. This is the root cause of most of what follows." },
  { num: '02', title: 'Sell to anyone who takes a meeting.', desc: "No ICP. No targeting criteria. The pipeline is full of logos that feel good but will never close. Every hour on a non-ICP account is an hour lost. This doesn't improve with scale — it gets more expensive with scale." },
  { num: '03', title: 'Lead with the demo instead of the problem.', desc: "The buyer sees features. Googles your competitor. Goes dark. Or worse: they're impressed, you think you have a deal, but you never identified pain — and 3 months later it's \"no decision.\"" },
  { num: '04', title: 'Confuse interest for commitment.', desc: "\"They said they love it\" is not a deal. It's a compliment. The person giving enthusiastic feedback is not the same person willing to stake their reputation on your product in a budget meeting you weren't invited to." },
  { num: '05', title: "Spend money before you know what to measure.", desc: "Tools, headcount, marketing programs. Without knowing which metrics matter at your stage, every dollar is a bet with no feedback loop. 53% of SaaS licenses go unused — and that's just the tech stack." },
  { num: '06', title: 'Scale before the motion is repeatable.', desc: "If the founder is the only one who can close, hiring 3 reps gives you 3 people who can't close. Adding a VP Sales? 78% of them fail at this stage — not because they're bad, but because there's no system to scale." },
  { num: '07', title: 'Build a forecast on feelings.', desc: "\"Pipeline looks healthy\" isn't a forecast. Without qualification rigor, every deal looks real. The board gets your number. You miss by 40%. The next raise gets harder. You don't have quarters to waste on fiction." },
];

const truths = [
  { title: 'The foundation must come first.', desc: 'You cannot enable a team on a foundation that does not exist. You cannot forecast a pipeline that is not qualified. The sequence is non-negotiable: Foundation → Process → Execution → Scale. Attempting to skip the foundation produces dysfunction that scales.' },
  { title: 'Discovery is the whole game.', desc: 'The root cause of almost every stalled or lost deal lives in the first one to two meetings. Weak discovery leads to unquantified pain, which leads to a weak champion, which leads to no economic buyer access. Reps who slow down in discovery close faster in aggregate — because they stop bringing dead deals into the late stages.' },
  { title: 'You don\'t sell software. You teach champions to sell software.', desc: 'The majority of selling happens when you are not in the room. Your champion is presenting to the economic buyer, defending your solution against internal skeptics, and competing against "do nothing." If they can\'t articulate why buy, why now, why us — the deal dies in a room you were never invited to.' },
  { title: 'Pipeline is courage.', desc: 'Without abundant pipeline, reps cling to bad deals and lie to themselves about close probability. With deep, healthy pipeline, reps can qualify honestly and walk away from deals that won\'t close. Pipeline generation is not a campaign — it is a non-negotiable weekly discipline.' },
  { title: 'Negotiation starts in discovery.', desc: 'Every piece of value not quantified in discovery shows up as a concession demand at the end of the quarter. If you\'re discounting 40%, you didn\'t differentiate. If procurement is running the deal, you never got to the economic buyer. Negotiation is the accumulated result of everything upstream.' },
  { title: 'Qualification is not a checklist — it\'s a coaching conversation.', desc: 'MEDDPICC is not a form to fill out. It is a framework for understanding what you know, what you don\'t know, and what to do next. The best leaders use it to coach — not inspect. The moment qualification becomes administrative, it loses its power.' },
  { title: 'Average productivity per rep is the only metric that matters.', desc: 'Revenue is a lagging indicator. Win rate, deals per person, and average deal size are the levers. When average productivity per rep goes up, nearly every financial metric improves. Enablement is the highest-ROI investment in a sales organization.' },
  { title: 'Human behavior drives every outcome.', desc: 'Under every framework, there is psychology. The buyer\'s decision path is Survive → Thrive → Think. Selling features and ROI before disarming survival instincts produces intellectual interest and emotional inaction. The person with greater comfort in the conversation almost always wins it.' },
  { title: 'The system must run without you.', desc: 'The test of whether a GTM system has been truly built is whether it keeps running when the builder leaves. Processes that require the founder in the room for every important deal are not processes. The best operators build systems that transfer the intelligence into the organization.' },
  { title: 'Leadership hiring timing is always wrong.', desc: 'By the time a company realizes it needs senior leadership, it is already six to nine months late. You cannot hire a VP Sales into chaos and expect them to succeed. The foundation must exist for leadership to be effective. Building the foundation first produces dramatically lower first-year failure rates.' },
  { title: 'Bad news must travel fast.', desc: 'The most dangerous thing in a sales organization is silence about what is not working. Leaders who create cultures where bad news surfaces slowly pay for it in missed quarters. The best leaders create cadences and psychological safety that surface problems while they are still small enough to fix.' },
];

const pillarIcons = [FourEssentialQuestionsIcon, ValueFrameworkIcon, DealQualificationIcon, ChampionBuildingIcon, WinningTheStageIcon, BusinessValueAnalysisIcon];

const pillars = [
  { name: 'Four Essential Questions', desc: "What problems do we solve? How do we solve them? How differently? Where have we done it before? If anyone on the team can't answer these consistently, the organization is speaking different languages to the market. This is the minimum viable alignment layer — before ICP, before discovery, before competitive positioning." },
  { name: 'Value Framework', desc: "Maps the customer journey from pain to outcome. The single document that aligns pipeline generation, discovery, proposals, and CS. Champions need this language to sell internally. SDRs need it to earn meetings. AEs need it to quantify pain. This is not a deliverable — it is the foundation on which every other deliverable depends." },
  { name: 'Deal Qualification (MEDDPICC)', desc: "Eliminates fantasy pipeline. Customized to your buyers, your deal sizes, your cycle. Not a generic checklist — a coaching framework calibrated to your motion. The \"P\" for Paper Process is the most undervalued letter: procurement and legal kill more late-stage deals than competitive losses." },
  { name: 'Champion Building', desc: "Identify → Test → Develop → Enable. 99% of the time when a rep says they have a champion, they have a coach. A coach gives information. A champion fights for you. The tests — can they walk through procurement, introduce you to legal, present the business case — reveal whether they're willing to take personal risk on your behalf." },
  { name: 'Winning the Stage', desc: "Stage-gated sales process with real go/no-go checkpoints. When Stage 2 is completed correctly, win rates reach 83%. All the work is in the beginning. Bad deals killed early free reps to focus on the ones that will actually close." },
  { name: 'Business Value Analysis', desc: "BVH opens doors. BVA closes deals. When BVA is engaged early, sales cycles compress by up to 50%. Every piece of value not quantified in discovery shows up as a concession demand at the end of the quarter." },
];

const healthCheckDisciplines = [
  { name: 'Strategy & Planning', desc: 'ICP clarity, Value Framework, messaging, competitive positioning, pricing alignment' },
  { name: 'Sales Execution', desc: 'Sales process design, qualification rigor, discovery quality, deal progression, forecasting, negotiation' },
  { name: 'Pipeline Generation', desc: 'Channel mix, PG discipline, outbound systems, SDR effectiveness, demand generation' },
  { name: 'Tech Stack & Analytics', desc: 'Tool rationalization, CRM health, dashboards, attribution, reporting cadence' },
  { name: 'Talent & Enablement', desc: 'Org design, hiring profiles, onboarding program, enablement materials, coaching cadence' },
  { name: 'Customer Success', desc: 'CS program maturity, renewal process, expansion playbook, value realization tracking' },
  { name: 'Partnerships', desc: 'Partner landscape, co-sell motion, marketplace strategy, partner enablement' },
];

const compellingEvents = [
  { trigger: 'Just raised a round', context: 'The clock is ticking on ARR growth before the next raise.' },
  { trigger: 'About to make your first GTM hire', context: 'The highest-risk hire in the company. Without a foundation, they inherit a blank slate.' },
  { trigger: 'Revenue has flatlined', context: "The board is asking hard questions. The answer isn't more effort — it's a different system." },
  { trigger: 'The founder is in every deal', context: "Can't scale, can't focus on product, burning out. The motion depends on one person." },
  { trigger: 'Already churned a VP Sales', context: 'The second time needs to be right. The foundation has to exist before the leader arrives.' },
  { trigger: 'Series A→B gap is now 28 months', context: 'Every month without a GTM system compounds the pressure on the next raise.' },
  { trigger: 'New product launch or market expansion', context: 'Messaging, ICP, and process need to be rebuilt for the new motion.' },
  { trigger: "The board is asking GTM questions you can't answer with data", context: "Pipeline feels healthy. Forecast looks reasonable. But when the board asks how you know, there's silence." },
];

const businessImpact = [
  { outcome: 'Revenue growth', detail: 'More deals, bigger deals, faster deals.' },
  { outcome: 'Fundraise probability', detail: 'Board sees a system, not a prayer. The GTM slide tells a story of repeatability, not hope.' },
  { outcome: 'Team performance', detail: 'Reps who can articulate value, qualify real opportunities, and close without the founder in the room.' },
  { outcome: 'Product adoption', detail: 'Right customers buying for the right reasons, leading to better retention and expansion.' },
  { outcome: 'Competitive moat', detail: 'Differentiated positioning, strong partnerships, loyal champions who sell for you when you\'re not there.' },
  { outcome: 'Healthy scaling', detail: 'Right people hired at the right time, onboarded into a working system.' },
  { outcome: 'Exit potential', detail: 'Predictable revenue engine with strong metrics is what acquirers and IPO markets value.' },
];

const alternatives = [
  { name: 'Fractional CRO', gap: 'Single person. Advises but rarely builds systems or tooling.' },
  { name: 'Accelerator Programs', gap: 'Generic, cohort-based. Same curriculum for dev tools and healthcare.' },
  { name: 'Big Consulting Firms', gap: '$500K+. Junior analysts doing the work. Senior talent on the pitch.' },
  { name: 'Sales Methodology Vendors', gap: '3-day training, then gone. No customization. No tooling.' },
  { name: 'Hiring VP Sales Early', gap: '$200K–$350K+ comp. 67–78% failure rate. They inherit a blank slate.' },
  { name: 'DIY', gap: 'Every GTM mistake costs 3–6 months and $100K–$500K.' },
];

const timeline = [
  { phase: 'Diagnose', time: 'Weeks 1–4', desc: 'GTM Health Check: structured interviews with every key member of the GTM team, CRM pipeline review, win/loss history, stage conversion, tech stack audit, and existing collateral. Scored assessment across seven disciplines with a prioritized roadmap.' },
  { phase: 'Build', time: 'Weeks 5–16', desc: 'Fixed SOW. Defined deliverables. We build the components your Health Check identified as highest-leverage — organized into six bundles that map directly to the seven disciplines.' },
  { phase: 'Operate', time: 'Month 4+', desc: 'Optional. We stay embedded — forecast reviews, deal coaching, live call participation. The methodology becomes muscle memory. The system runs without us.' },
];

const maturityStages = [
  { stage: 'Seed', range: '$0–$1M ARR', items: ['Founder-led sales', 'Searching for PMF', 'No repeatability'] },
  { stage: 'Series A', range: '$1M–$5M ARR', items: ['Move from founder-led', 'Some repeatability', 'Limited scale'] },
  { stage: 'Series B', range: '$5M–$20M ARR', items: ['Hire CRO', 'Expand team', 'Proven PMF'] },
  { stage: 'Series C', range: '$20M–$100M ARR', items: ['Segmentation', 'New verticals', 'Strong unit economics'] },
  { stage: 'Series D+', range: '$100M+', items: ['Scaled-out GTM', 'Prepare for exit', 'Market leader'] },
];

const wheelModules = [
  { name: 'GTM / Planning', items: ['ICP & Buyer Persona', 'Capacity Planning & Hiring', 'Productivity Modeling', 'Focus Accounts & Territories', 'Segmentation', 'Land and Expand Motion'] },
  { name: 'Sales Execution', items: ['Sales Process', 'MEDDPICC', 'Forecasting', 'Pipeline Health', 'Sales Playbook', 'Operating Rhythm'] },
  { name: 'Tech Stack', items: ['Conversational Analytics', 'Marketing Automation', 'Product Analytics', 'Sales Engagement'] },
  { name: 'Demand Generation', items: ['Top of Funnel Analysis', 'Outbound Pipeline Generation', 'Digital Demand Generation', 'Field Marketing', 'Account Based Marketing'] },
  { name: 'Value / Success', items: ['Value Framework', 'Business Case', 'Comprehensive Success Program', 'Relationship Health', 'Renewal and Expansion'] },
  { name: 'Partners', items: ['Channel', 'OEM', 'Strategic Market (tech)', 'Boutique and Global SI', 'GTM Business Plan'] },
  { name: 'Talent', items: ['Assess Sales Team/Org', 'Recruiting/Profile/Process', 'Onboarding and Enablement', 'Scorecard/Performance', 'Organizational Structure'] },
];

/* ── Component ── */

export default function ApproachContent() {
  const [openTruth, setOpenTruth] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const chainRef = useRef<HTMLDivElement>(null);
  const spineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const compassRef = useRef<HTMLDivElement>(null);
  const radialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(([{ gsap }, { ScrollTrigger }]) => {
      gsap.registerPlugin(ScrollTrigger);

      const heroEls = heroRef.current?.querySelectorAll('.section-label, .h1, .sub-headline');
      heroEls?.forEach(el => gsap.from(el, { opacity: 0, y: 12, duration: 0.5, scrollTrigger: { trigger: el, start: 'top 85%' } }));

      if (spineRef.current && chainRef.current) {
        gsap.fromTo(spineRef.current, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: chainRef.current, start: 'top 70%', end: 'bottom 30%', scrub: true } });
      }

      itemRefs.current.forEach(el => {
        if (el) gsap.from(el, { opacity: 0, x: -8, duration: 0.3, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
      });

      document.querySelectorAll('[data-animate]').forEach(el => {
        gsap.from(el, { opacity: 0, y: 16, duration: 0.5, scrollTrigger: { trigger: el, start: 'top 85%' } });
      });

      /* ── Compass Infographic Animations ── */
      if (compassRef.current) {
        const ctx = compassRef.current;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ctx, start: 'top 75%' },
        });

        // 1. Diamond background scales in
        const diamond = ctx.querySelector('[data-compass-diamond]');
        if (diamond) tl.from(diamond, { scale: 0.7, opacity: 0, duration: 0.6, ease: 'power2.out' }, 0);

        // 2. Center circle fades in
        const center = ctx.querySelectorAll('[data-compass-center]');
        if (center.length) tl.from(center, { opacity: 0, scale: 0.8, duration: 0.5, ease: 'power2.out', transformOrigin: '350px 250px' }, 0.2);

        // 3. Dashed lines draw in via strokeDashoffset
        const lines = ctx.querySelectorAll('[data-compass-line]');
        lines.forEach(line => {
          const len = (line as SVGLineElement).getTotalLength?.() || 120;
          gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        });
        if (lines.length) tl.to(lines, { strokeDashoffset: 0, duration: 0.8, stagger: 0.1, ease: 'power2.inOut' }, 0.3);

        // 4. Icon diamonds pop in
        const icons = ctx.querySelectorAll('[data-compass-icon]');
        if (icons.length) tl.from(icons, { scale: 0, opacity: 0, duration: 0.4, stagger: 0.1, ease: 'back.out(1.7)' }, 0.5);

        // 5. Corner text labels fade in from their side
        const labels = ctx.querySelectorAll('[data-compass-label]');
        if (labels.length) tl.from(labels, { opacity: 0, y: 12, duration: 0.4, stagger: 0.08, ease: 'power2.out' }, 0.7);
      }

      /* ── Radial Operating Model Animations ── */
      if (radialRef.current) {
        const rx = radialRef.current;
        const rtl = gsap.timeline({
          scrollTrigger: { trigger: rx, start: 'top 75%' },
        });

        // 1. Hub scales in
        const hub = rx.querySelectorAll('[data-radial-hub]');
        if (hub.length) rtl.from(hub, { scale: 0.6, opacity: 0, duration: 0.6, ease: 'power2.out', transformOrigin: '400px 400px' }, 0);

        // 2. Rings draw in
        const rings = rx.querySelectorAll('[data-radial-ring]');
        rings.forEach(ring => {
          const circumference = 2 * Math.PI * parseFloat(ring.getAttribute('r') || '260');
          gsap.set(ring, { strokeDasharray: circumference, strokeDashoffset: circumference });
        });
        if (rings.length) rtl.to(rings, { strokeDashoffset: 0, duration: 1.2, stagger: 0.15, ease: 'power2.inOut' }, 0.2);

        // 3. Spokes radiate out
        const spokes = rx.querySelectorAll('[data-radial-spoke]');
        spokes.forEach(spoke => {
          const len = (spoke as SVGLineElement).getTotalLength?.() || 170;
          gsap.set(spoke, { strokeDasharray: len, strokeDashoffset: len });
        });
        if (spokes.length) rtl.to(spokes, { strokeDashoffset: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out' }, 0.4);

        // 4. Icons pop in
        const rIcons = rx.querySelectorAll('[data-radial-icon]');
        if (rIcons.length) rtl.from(rIcons, { scale: 0, opacity: 0, duration: 0.4, stagger: 0.06, ease: 'back.out(1.7)' }, 0.6);

        // 5. Text labels fade in
        const rLabels = rx.querySelectorAll('[data-radial-label]');
        if (rLabels.length) rtl.from(rLabels, { opacity: 0, y: 10, duration: 0.4, stagger: 0.06, ease: 'power2.out' }, 0.8);
      }
    });
  }, []);

  return (
    <main className={styles.page}>
      {/* ═══════════════════════════════════════════════
          1. HERO
          ═══════════════════════════════════════════════ */}
      <section className={styles.hero} ref={heroRef}>
        <div className="container--narrow">
          <span className="section-label">Our Approach</span>
          <h1 className="h1">Every startup is uniquely complex.</h1>
          <p className="sub-headline" style={{ maxWidth: 780 }}>
            Each being a system that has never existed before in this exact form. Same general parts — engineering, product, marketing, GTM — but the team, the market, the timing, and the luck make each one different. <strong style={{ color: 'var(--accent)' }}>That&apos;s why we diagnose before we prescribe.</strong>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. HOW WE WORK — Diagnose → Build → Operate
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">How We Work</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>Diagnose first. Build second. Stay until it runs.</h2>
          <p className="sub-headline" style={{ marginBottom: 56, maxWidth: 720 }}>
            Every consulting engagement that starts with a solution instead of a diagnosis is guessing. S-1&apos;s process begins with a question: <em>what does the data actually say?</em>
          </p>
          <div className={styles.timeline} data-animate>
            {timeline.map((t, i) => {
              const Icon = [DiagnoseIcon, BuildIcon, OperateIcon][i];
              return (
                <div key={t.phase} className={styles.timelineStep}>
                  <div className={styles.timelineHeader}>
                    <div className={styles.timelineIcon}>
                      <Icon size={48} />
                    </div>
                    <div>
                      <div className={styles.timelinePhase}>{t.phase}</div>
                      <div className={styles.timelineTime}>{t.time}</div>
                    </div>
                  </div>
                  <p className={styles.timelineDesc}>{t.desc}</p>
                </div>
              );
            })}
          </div>
          <p className={styles.expectation}>
            S-1&apos;s results depend on partnership. We ask for 3–5 hours per week of leadership time, decisions within a week, and full data access. We build with your team so they own it after we leave. If engagement quality drops, we raise it in week 2, not month 4.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BRIDGE CTA — What We Build
          ═══════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={`h2 ${styles.ctaHeadline}`}>Six Bundles. One Operating System.</h2>

          <div className="structural-line" style={{ margin: '32px auto', maxWidth: 640, background: 'rgba(0,0,0,0.12)' }} />

          <p className={styles.ctaBody}>Every bundle is powered by the same methodology — refined across six companies and 30+ years. Each is available as a standalone SOW or as part of a sequenced engagement that builds the full GTM machine.</p>

          <div className={styles.bundleGrid}>
            {[
              { num: '01', name: 'Foundational' },
              { num: '02', name: 'Execute & Scale' },
              { num: '03', name: 'Pipeline Generation' },
              { num: '04', name: 'Partner Ecosystem' },
              { num: '05', name: 'Recruiting' },
              { num: '06', name: 'Enablement' },
            ].map(b => (
              <div key={b.num} className={styles.bundleCard}>
                <span className={styles.bundleNum}>{b.num}</span>
                <h3 className={styles.bundleName}>{b.name}</h3>
              </div>
            ))}
          </div>

          <a href="/bundles" className={styles.ctaBtn}>Explore the Bundles</a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. CROSS-FUNCTIONAL OPERATING MODEL (Wheel)
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">Seven Disciplines</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>GTM is a connected system. We treat it like one.</h2>
          <p className="sub-headline" style={{ marginBottom: 56, maxWidth: 720 }}>
            S-1 operates across a cross-functional model because ICP clarity affects pipeline quality, which affects deal progression, which affects forecasting, which affects board confidence, which affects the next raise. The chain reaction runs in both directions.
          </p>

          {/* Radial Operating Model Infographic */}
          <div className={styles.radialWrap} ref={radialRef}>
            <svg className={styles.radialSvg} viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <radialGradient id="radialGlow" cx="400" cy="400" r="300" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(201,58,42,0.06)" />
                  <stop offset="100%" stopColor="rgba(201,58,42,0)" />
                </radialGradient>
                <filter id="hubGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="10" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Ambient glow */}
              <circle cx="400" cy="400" r="300" fill="url(#radialGlow)" />

              {/* Outer ring */}
              <circle data-radial-ring cx="400" cy="400" r="260" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" style={{ transformOrigin: '400px 400px' }} />
              <circle data-radial-ring cx="400" cy="400" r="160" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" style={{ transformOrigin: '400px 400px' }} />

              {/* 7 radial divider lines — every ~51.4° */}
              {[0, 51.4, 102.9, 154.3, 205.7, 257.1, 308.6].map((angle, i) => {
                const rad = (angle - 90) * Math.PI / 180;
                const x1 = 400 + 90 * Math.cos(rad);
                const y1 = 400 + 90 * Math.sin(rad);
                const x2 = 400 + 260 * Math.cos(rad);
                const y2 = 400 + 260 * Math.sin(rad);
                return <line key={i} data-radial-spoke x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(201,58,42,0.4)" strokeWidth="2" />;
              })}

              {/* Center hub */}
              <g data-radial-hub filter="url(#hubGlow)">
                <circle cx="400" cy="400" r="90" fill="#161616" stroke="rgba(201,58,42,0.3)" strokeWidth="2" />
              </g>
              <g data-radial-hub>
                <text x="400" y="385" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="600" fontFamily="Outfit, sans-serif" letterSpacing="2">CROSS FUNCTIONAL</text>
                <text x="400" y="405" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Outfit, sans-serif" letterSpacing="1">OPERATING</text>
                <text x="400" y="425" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Outfit, sans-serif" letterSpacing="1">MODEL</text>
              </g>

              {/* Segment icons — new S-1 discipline icons rendered via foreignObject at r=210 */}
              {(() => {
                const midAngles = [25.7, 77.15, 128.6, 180, 231.4, 282.85, 334.3];
                const R = 210;
                const cx = 400, cy = 400;
                const iconSize = 40;
                const Icons = [GtmPlanningIcon, SalesExecutionIcon, TechStackIcon, DemandGenerationIcon, ValueSuccessIcon, PartnersIcon, TalentIcon];
                return Icons.map((Icon, i) => {
                  const rad = (midAngles[i] - 90) * Math.PI / 180;
                  const x = Math.round(cx + R * Math.cos(rad)) - iconSize / 2;
                  const y = Math.round(cy + R * Math.sin(rad)) - iconSize / 2;
                  const ox = x + iconSize / 2;
                  const oy = y + iconSize / 2;
                  return (
                    <foreignObject key={i} data-radial-icon x={x} y={y} width={iconSize} height={iconSize} style={{ transformOrigin: `${ox}px ${oy}px`, overflow: 'visible' }}>
                      <div style={{ color: '#C93A2A', width: iconSize, height: iconSize }}>
                        <Icon size={iconSize} />
                      </div>
                    </foreignObject>
                  );
                });
              })()}

              {/* Circular arrows in hub */}
              <path data-radial-hub d="M385,360 A45,45 0 0,1 415,360" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
              <path data-radial-hub d="M415,440 A45,45 0 0,1 385,440" stroke="rgba(255,255,255,0.15)" strokeWidth="1" fill="none" />
            </svg>

            {/* Text labels positioned around the wheel */}
            <div data-radial-label className={`${styles.radialLabel} ${styles.rlTopRight}`}>
              <h4 className={styles.radialName}>GTM / Planning</h4>
              <ul className={styles.radialItems}>
                {wheelModules[0].items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div data-radial-label className={`${styles.radialLabel} ${styles.rlRight}`}>
              <h4 className={styles.radialName}>Sales Execution</h4>
              <ul className={styles.radialItems}>
                {wheelModules[1].items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div data-radial-label className={`${styles.radialLabel} ${styles.rlBottomRight}`}>
              <h4 className={styles.radialName}>Tech Stack</h4>
              <ul className={styles.radialItems}>
                {wheelModules[2].items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div data-radial-label className={`${styles.radialLabel} ${styles.rlBottom}`}>
              <h4 className={styles.radialName}>Demand Generation</h4>
              <ul className={styles.radialItems}>
                {wheelModules[3].items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div data-radial-label className={`${styles.radialLabel} ${styles.rlBottomLeft}`}>
              <h4 className={styles.radialName}>Value / Success</h4>
              <ul className={styles.radialItems}>
                {wheelModules[4].items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div data-radial-label className={`${styles.radialLabel} ${styles.rlLeft}`}>
              <h4 className={styles.radialName}>Partners</h4>
              <ul className={styles.radialItems}>
                {wheelModules[5].items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div data-radial-label className={`${styles.radialLabel} ${styles.rlTopLeft}`}>
              <h4 className={styles.radialName}>Talent</h4>
              <ul className={styles.radialItems}>
                {wheelModules[6].items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CHAIN REACTION — The Problem
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">The Chain Reaction</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>You built a $5M product.<br />Then spent $500K learning how to sell it.</h2>
          <p className="sub-headline" style={{ marginBottom: 56, maxWidth: 720 }}>
            The mistakes follow a chain reaction. Each one compounds the next. By the time a founder recognizes the pattern, they&apos;ve usually made all seven.
          </p>

          {/* Compass Infographic */}
          <div className={styles.compassWrap} ref={compassRef}>
            <svg className={styles.compassSvg} viewBox="0 0 700 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Radial glow from center */}
                <radialGradient id="centerGlow" cx="350" cy="250" r="220" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="rgba(201,58,42,0.06)" />
                  <stop offset="100%" stopColor="rgba(201,58,42,0)" />
                </radialGradient>
                {/* Subtle outer glow for center circle */}
                <filter id="circleGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
              </defs>

              {/* Ambient glow */}
              <circle cx="350" cy="250" r="220" fill="url(#centerGlow)" />

              {/* Background diamond */}
              <polygon data-compass-diamond points="350,30 570,250 350,470 130,250" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" style={{ transformOrigin: '350px 250px' }} />

              {/* Dashed connecting lines */}
              <line data-compass-line x1="310" y1="215" x2="250" y2="155" stroke="rgba(201,58,42,0.5)" strokeWidth="1" />
              <line data-compass-line x1="390" y1="215" x2="450" y2="155" stroke="rgba(201,58,42,0.5)" strokeWidth="1" />
              <line data-compass-line x1="310" y1="285" x2="250" y2="345" stroke="rgba(201,58,42,0.5)" strokeWidth="1" />
              <line data-compass-line x1="390" y1="285" x2="450" y2="345" stroke="rgba(201,58,42,0.5)" strokeWidth="1" />

              {/* Center circle group */}
              <g data-compass-center filter="url(#circleGlow)">
                <circle cx="350" cy="250" r="75" fill="#161616" stroke="rgba(201,58,42,0.25)" strokeWidth="1.5" />
              </g>
              <g data-compass-center>
                {/* Inner triangle */}
                <polygon points="350,218 322,268 378,268" fill="none" stroke="rgba(201,58,42,0.35)" strokeWidth="1" />
                {/* Vertex dots */}
                <circle cx="350" cy="218" r="2.5" fill="#C93A2A" />
                <circle cx="322" cy="268" r="2.5" fill="#C93A2A" />
                <circle cx="378" cy="268" r="2.5" fill="#C93A2A" />
                {/* Labels */}
                <text x="350" y="211" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Outfit, sans-serif" letterSpacing="1.5">COST</text>
                <text x="314" y="286" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Outfit, sans-serif" letterSpacing="1.5">TIME</text>
                <text x="386" y="286" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Outfit, sans-serif" letterSpacing="1.5">RISK</text>
              </g>

              {/* NW — Finding PMF */}
              <g data-compass-icon transform="translate(240, 140)" style={{ transformOrigin: '240px 140px' }}>
                <rect x="-22" y="-22" width="44" height="44" transform="rotate(45)" fill="#161616" stroke="#C93A2A" strokeWidth="1.5" />
                <foreignObject x="-15" y="-15" width="30" height="30">
                  <div style={{ color: '#C93A2A', width: 30, height: 30 }}>
                    <ProductMarketFitIcon size={30} />
                  </div>
                </foreignObject>
              </g>

              {/* NE — Siloed Tech Stack */}
              <g data-compass-icon transform="translate(460, 140)" style={{ transformOrigin: '460px 140px' }}>
                <rect x="-22" y="-22" width="44" height="44" transform="rotate(45)" fill="#161616" stroke="#C93A2A" strokeWidth="1.5" />
                <foreignObject x="-15" y="-15" width="30" height="30">
                  <div style={{ color: '#C93A2A', width: 30, height: 30 }}>
                    <SiloedTechStackIcon size={30} />
                  </div>
                </foreignObject>
              </g>

              {/* SW — Lack of Predictability */}
              <g data-compass-icon transform="translate(240, 360)" style={{ transformOrigin: '240px 360px' }}>
                <rect x="-22" y="-22" width="44" height="44" transform="rotate(45)" fill="#161616" stroke="#C93A2A" strokeWidth="1.5" />
                <foreignObject x="-15" y="-15" width="30" height="30">
                  <div style={{ color: '#C93A2A', width: 30, height: 30 }}>
                    <LackOfPredictabilityIcon size={30} />
                  </div>
                </foreignObject>
              </g>

              {/* SE — Premature Hiring */}
              <g data-compass-icon transform="translate(460, 360)" style={{ transformOrigin: '460px 360px' }}>
                <rect x="-22" y="-22" width="44" height="44" transform="rotate(45)" fill="#161616" stroke="#C93A2A" strokeWidth="1.5" />
                <foreignObject x="-15" y="-15" width="30" height="30">
                  <div style={{ color: '#C93A2A', width: 30, height: 30 }}>
                    <PrematureHiringIcon size={30} />
                  </div>
                </foreignObject>
              </g>
            </svg>

            {/* Corner text labels */}
            <div data-compass-label className={`${styles.compassLabel} ${styles.compassLabelNW}`}>
              <h4 className={styles.compassTitle}>Finding PMF</h4>
              <p className={styles.compassDesc}>Takes 2–3 years on average. Hypotheses not scientifically tested. Misalignment with product teams and inefficient GTM motion.</p>
            </div>
            <div data-compass-label className={`${styles.compassLabel} ${styles.compassLabelNE}`}>
              <h4 className={styles.compassTitle}>Siloed Sales Tech Stack</h4>
              <p className={styles.compassDesc}>Too much noise and disconnected data. Can&apos;t find the &ldquo;Why.&rdquo; No alignment to the GTM playbook.</p>
            </div>
            <div data-compass-label className={`${styles.compassLabel} ${styles.compassLabelSW}`}>
              <h4 className={styles.compassTitle}>Lack of Predictability</h4>
              <p className={styles.compassDesc}>Decisions made on untrustworthy data, opinions, and &ldquo;gut feel.&rdquo;</p>
            </div>
            <div data-compass-label className={`${styles.compassLabel} ${styles.compassLabelSE}`}>
              <h4 className={styles.compassTitle}>Premature Hiring</h4>
              <p className={styles.compassDesc}>Over-hiring in GTM before a repeatable motion is established. Constant reworking of messaging.</p>
            </div>
          </div>

          {/* Stats bar below the infographic */}
          <div className={styles.costStats} data-animate>
            <div className={styles.costStat}>
              <span className={`${styles.costValue} mono-number`}>$250K–$1M</span>
              <span className={styles.costLabel}>Per Mistake</span>
            </div>
            <div className={styles.costStat}>
              <span className={`${styles.costValue} mono-number`}>3–6 Mo</span>
              <span className={styles.costLabel}>Lost per misstep</span>
            </div>
            <div className={styles.costStat}>
              <span className={`${styles.costValue} mono-number`}>67–78%</span>
              <span className={styles.costLabel}>VP Sales failure rate</span>
            </div>
            <div className={styles.costStat}>
              <span className={`${styles.costValue} mono-number`}>53%</span>
              <span className={styles.costLabel}>SaaS licenses unused</span>
            </div>
          </div>

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
            These aren&apos;t character flaws. They&apos;re knowledge gaps. Each one makes the next one worse — and the quarters you lose never come back.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. 11 TRUTHS — Foundation
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">Foundation Comes First</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>The eleven truths.</h2>
          <p className="sub-headline" style={{ marginBottom: 56, maxWidth: 720 }}>
            Synthesized from 30+ years of building revenue engines at Cloudera, Rubrik, MongoDB, Splunk, and six other companies. These aren&apos;t opinions. They&apos;re patterns that held across every one.
          </p>
          <div className={styles.accordionList}>
            {truths.map((t, i) => (
              <div key={i} className={`${styles.accordion} ${openTruth === i ? styles.accordionOpen : ''}`}>
                <button className={styles.accordionBtn} onClick={() => setOpenTruth(openTruth === i ? null : i)} aria-expanded={openTruth === i}>
                  <span className={`${styles.accordionNum} mono-number`}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={styles.accordionTitle}>{t.title}</span>
                  <span className={styles.accordionIcon}>{openTruth === i ? '−' : '+'}</span>
                </button>
                <div className={styles.accordionBody} style={{ maxHeight: openTruth === i ? 200 : 0 }}>
                  <p className={styles.accordionText}>{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          7. SIX PILLARS — The Operating System
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">The Operating System</span>
          <h2 className="h2" style={{ marginBottom: 56 }}>One operating system. Refined across six companies. 30+ years.</h2>
          <div className={styles.pillarGrid}>
            {pillars.map((p, i) => {
              const Icon = pillarIcons[i];
              return (
                <div key={p.name} className={styles.pillar} data-animate>
                  <div className={styles.pillarHeader}>
                    <div className={styles.pillarIcon}>
                      <Icon size={60} />
                    </div>
                    <h3 className={styles.pillarName}>{p.name}</h3>
                  </div>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          8. COMPELLING EVENTS — Is It Time?
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">Is It Time?</span>
          <h2 className="h2" style={{ marginBottom: 56 }}>If this sounds familiar, the timing is right.</h2>
          <div className={styles.eventGrid}>
            {compellingEvents.map(e => (
              <div key={e.trigger} className={styles.eventCard} data-animate>
                <h3 className={styles.eventTrigger}>{e.trigger}</h3>
                <p className={styles.eventContext}>{e.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          9. BUSINESS IMPACT
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">What Changes in Your Business</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>S-1&apos;s impact on the business.</h2>
          <p className="sub-headline" style={{ marginBottom: 56, maxWidth: 720 }}>
            The decision-maker&apos;s real question is not &ldquo;what do I get from S-1?&rdquo; It&apos;s &ldquo;what happens to my business?&rdquo;
          </p>
          <div className={styles.impactTable} data-animate>
            {businessImpact.map(b => (
              <div key={b.outcome} className={styles.impactRow}>
                <span className={styles.impactLabel}>{b.outcome}</span>
                <span className={styles.impactDetail}>{b.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          10. WHY S-1 — How We're Different
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">Why S-1</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>Every other GTM firm leads with &ldquo;grow faster.&rdquo;</h2>
          <p className="sub-headline" style={{ marginBottom: 56, maxWidth: 720 }}>That&apos;s the wrong answer to the wrong question. The right question is: <em>why are you not growing faster?</em> The answer is seldom effort. It&apos;s almost always foundation.</p>

          <div className={styles.diffGrid} data-animate>
            <div className={styles.diffCard}>
              <h3 className={styles.diffTitle}>We see the whole organism, not one organ.</h3>
              <p className={styles.diffDesc}>ICP defines the value framework. The value framework shapes discovery. Discovery determines the sales process. Pull the wrong lever first and the rest falls apart. We see the chain.</p>
            </div>
            <div className={styles.diffCard}>
              <h3 className={styles.diffTitle}>We&apos;ve been wrong before — and that&apos;s the asset.</h3>
              <p className={styles.diffDesc}>Most consultants sell certainty. We sell pattern recognition from having lived through the mistakes. An operator who&apos;s been burned by the playbook gives you the playbook plus the ten exceptions that matter.</p>
            </div>
            <div className={styles.diffCard}>
              <h3 className={styles.diffTitle}>We build the immediate and the foundational at the same time.</h3>
              <p className={styles.diffDesc}>Tactical consultants generate short-term results but nothing sticks. Strategic ones deliver a plan that sits on a shelf. S-1 helps hit the number AND build the system. When we leave, the dashboards are running and the process gates deals.</p>
            </div>
            <div className={styles.diffCard}>
              <h3 className={styles.diffTitle}>We&apos;d rather pause and restart strong than deliver mediocre output.</h3>
              <p className={styles.diffDesc}>We&apos;ll identify gaps that challenge assumptions. We&apos;ll flag disengaged leadership directly. We won&apos;t take a client who isn&apos;t ready for this kind of partnership. The best clients want to be told the truth.</p>
            </div>
          </div>

          <h3 className={styles.altHeading}>The alternatives — and their gaps</h3>
          <div className={styles.altGrid}>
            {alternatives.map(a => (
              <div key={a.name} className={styles.altCard}>
                <h4 className={styles.altName}>{a.name}</h4>
                <p className={styles.altGap}>{a.gap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          11. GTM MATURITY MODEL
          ═══════════════════════════════════════════════ */}
      <section className={styles.section}>
        <div className="container">
          <div className="structural-line" style={{ marginBottom: 'var(--section-pad-y)' }} />
          <span className="section-label">Growth Intelligence</span>
          <h2 className="h2" style={{ marginBottom: 16 }}>Success isn&apos;t about scaling fast.<br />It&apos;s about knowing how and when to scale.</h2>
          <p className="sub-headline" style={{ marginBottom: 56, maxWidth: 720 }}>
            At every stage of growth, organizations hit the same structural friction. The companies that survive don&apos;t just grow faster — they grow smarter.
          </p>
          <div className={styles.maturity} data-animate>
            {maturityStages.map((s, i) => (
              <div key={s.stage} className={styles.maturityBar} style={{ height: `${140 + i * 50}px` }}>
                <div className={styles.maturityLabel}>{s.stage}</div>
                <div className={styles.maturityRange}>{s.range}</div>
                <ul className={styles.maturityItems}>
                  {s.items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className={styles.maturityNote}>Having scientific evidence is critical in GTM scaling at the right time.</p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          12. CTA — matches homepage CtaSection
          ═══════════════════════════════════════════════ */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={`h2 ${styles.ctaHeadline}`}>Start with a Health Check.</h2>

          <div className="structural-line" style={{ margin: '32px auto', maxWidth: 640, background: 'rgba(0,0,0,0.12)' }} />

          <div className={styles.ctaStats}>
            <div className={styles.ctaStat}>
              <span className={`${styles.ctaStatValue} mono-number`}>$25k</span>
              <span className={styles.ctaStatLabel}>Fixed Fee</span>
            </div>
            <div className={styles.ctaStat}>
              <span className={`${styles.ctaStatValue} mono-number`}>4 Weeks</span>
              <span className={styles.ctaStatLabel}>Duration</span>
            </div>
            <div className={styles.ctaStat}>
              <span className={styles.ctaStatValue}>Board Ready</span>
              <span className={styles.ctaStatLabel}>Deliverable</span>
            </div>
          </div>

          <p className={styles.ctaQuote}>&ldquo;Walk away with a scored roadmap whether or not we work together.&rdquo;</p>

          <a href="/healthcheck" className={styles.ctaBtn}>Take the Health Check</a>
        </div>
      </section>
    </main>
  );
}
