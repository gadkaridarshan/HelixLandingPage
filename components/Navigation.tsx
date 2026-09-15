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

        {/* ---- Desktop Nav ---- */}
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#signup" className={styles.ctaButton}>
              Get Started
              <ArrowRight
                className={styles.btnIcon}
                aria-hidden="true"
              />
            </a>
          </li>
        </ul>

        {/* ---- Mobile Toggle ---- */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
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
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#signup"
            className={styles.mobileCta}
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}