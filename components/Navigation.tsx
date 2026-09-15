"use client";

import { useEffect, useState } from "react";
import { Sparkles, ArrowRight, Menu, X } from "lucide-react";
import styles from "./Navigation.module.css";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      aria-label="Main navigation"
    >
      <nav className={styles.nav}>
        {/* ---- Logo ---- */}
        <a href="/" className={styles.logo} aria-label="Helix Home">
          <span className={styles.logoIcon} aria-hidden="true">
            <Sparkles className={styles.logoSpark} />
          </span>
          <span className={styles.logoText}>Helix</span>
        </a>

        {/* ---- Desktop Links ---- */}
        <ul className={styles.navLinks} role="menubar">
          {navLinks.map((link) => (
            <li key={link.label} role="none">
              <a href={link.href} className={styles.navLink} role="menuitem">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ---- CTA + Mobile Toggle ---- */}
        <div className={styles.actions}>
          <a href="#signup" className={styles.ctaButton}>
            Get Started
            <ArrowRight className={styles.ctaIcon} aria-hidden="true" />
          </a>
          <button
            className={styles.menuButton}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className={styles.menuIcon} />
            ) : (
              <Menu className={styles.menuIcon} />
            )}
          </button>
        </div>
      </nav>

      {/* ---- Mobile Menu ---- */}
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
      >
        <ul className={styles.mobileLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#signup"
              className={styles.mobileCta}
              onClick={() => setMobileOpen(false)}
            >
              Get Started
              <ArrowRight className={styles.ctaIcon} aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}