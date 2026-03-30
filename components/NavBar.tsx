'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from './NavBar.module.css';

export default function NavBar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(!isHome);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });

    const onReveal = () => setVisible(true);
    window.addEventListener('s1:nav-reveal', onReveal);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('s1:nav-reveal', onReveal);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ''} ${visible ? styles.navVisible : ''}`}
      id="main-nav"
    >
      <div className={`${styles.navInner} container`}>
        <Link href="/" className={styles.navLogo} aria-label="S-1 Ventures">
          <img src="/logos/logo-1-white.svg" alt="S-1 Ventures" className={styles.navLogoImg} />
        </Link>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.navLinksOpen : ''}`}>
          <li><Link href="/approach" className={styles.navLink} onClick={() => setMenuOpen(false)}>Approach</Link></li>
          <li><Link href="/results" className={styles.navLink} onClick={() => setMenuOpen(false)}>Results</Link></li>
          <li><Link href="/field-notes" className={styles.navLink} onClick={() => setMenuOpen(false)}>Field Notes</Link></li>
          <li className={styles.navCtaMobile}>
            <Link href="/healthcheck" className="btn-outline" onClick={() => setMenuOpen(false)}>GTM Healthcheck</Link>
          </li>
        </ul>

        <Link href="/healthcheck" className={`btn-outline ${styles.navCtaDesktop}`}>GTM Healthcheck</Link>

        <button
          className={`${styles.navHamburger} ${menuOpen ? styles.navHamburgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && <div className={styles.navOverlay} onClick={() => setMenuOpen(false)} />}
    </nav>
  );
}
