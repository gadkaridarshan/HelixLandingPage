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
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ---- CTA Button (desktop) ---- */}
        <a href="#signup" className={styles.ctaButton}>
          Get Started{" "}
          <ArrowRight className={styles.ctaButtonIcon} aria-hidden="true" />
        </a>

        {/* ---- Mobile Toggle ---- */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {mobileOpen ? (
            <X className={styles.mobileToggleIcon} />
          ) : (
            <Menu className={styles.mobileToggleIcon} />
          )}
        </button>
      </nav>

      {/* ---- Mobile Menu ---- */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          <ul className={styles.mobileLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#signup"
            className={styles.mobileCtaButton}
            onClick={() => setMobileOpen(false)}
          >
            Get Started{" "}
            <ArrowRight
              className={styles.mobileCtaIcon}
              aria-hidden="true"
            />
          </a>
        </div>
      )}
    </header>
  );
}