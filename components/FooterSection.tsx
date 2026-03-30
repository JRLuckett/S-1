import Link from 'next/link';
import styles from './FooterSection.module.css';

export default function FooterSection() {
  return (
    <footer id="footer" className={styles.footer} aria-label="Footer">
      <div className="structural-line" style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }} />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" aria-label="S-1 Ventures"><img src="/logos/logo-1.png" alt="S-1 Ventures" className={styles.logo} /></Link>
            <p className={styles.tagline}>The GTM foundation your next VP Sales needs to succeed.</p>
          </div>
          <div className={styles.columns}>
            <div className={styles.col}>
              <h4 className={styles.colHeader}>S-1</h4>
              <ul><li><Link href="/approach" className={styles.link}>Approach</Link></li><li><Link href="/results" className={styles.link}>Results</Link></li><li><a href="#team" className={styles.link}>About</a></li><li><a href="mailto:hello@s-1.com" className={styles.link}>Contact</a></li></ul>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colHeader}>Network</h4>
              <ul><li><a href="#" className={styles.link}>Sellerate</a></li><li><Link href="/field-notes" className={styles.link}>Field Notes</Link></li></ul>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colHeader}>Legal</h4>
              <ul><li><a href="#" className={styles.link}>Privacy</a></li><li><a href="#" className={styles.link}>Terms</a></li></ul>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.bottomLine} />
          <p className={styles.bottomCta}>How&apos;s your GTM? Two minutes. Seven questions. Honest score. <Link href="/assessment" className={styles.bottomLink}>Take the assessment →</Link></p>
          <div className={styles.copyright}><span>© 2026 S-1 Ventures. All rights reserved.</span><span className={styles.sep}>·</span><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn →</a></div>
        </div>
      </div>
    </footer>
  );
}
