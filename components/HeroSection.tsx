"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Play, Zap, Shield, Globe, Cpu } from "lucide-react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const orbitingIcons = [
    { icon: Zap, delay: "0s" },
    { icon: Shield, delay: "1.2s" },
    { icon: Globe, delay: "2.4s" },
    { icon: Cpu, delay: "3.6s" },
  ];

  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.heroContainer}>
        {/* ---- Background Elements ---- */}
        <div className={styles.background} aria-hidden="true">
          <div className={styles.gradientOrb1} />
          <div className={styles.gradientOrb2} />
          <div className={styles.gridPattern} />
        </div>

        {/* ---- Floating Orbiting Icons ---- */}
        <div className={styles.orbitalRing} aria-hidden="true">
          {orbitingIcons.map(({ icon: Icon, delay }, i) => (
            <div
              key={i}
              className={styles.orbitingIcon}
              style={{ animationDelay: delay }}
            >
              <Icon size={20} strokeWidth={1.5} />
            </div>
          ))}
        </div>

        <div className={styles.heroContent}>
          {/* ---- Badge ---- */}
          <div
            className={`${styles.badge} ${mounted ? styles.fadeInUp : ""}`}
          >
            <span className={styles.badgeIcon} aria-hidden="true">
              ⚡
            </span>
            <span>Introducing Helix AI Orchestrator</span>
          </div>

          {/* ---- Title ---- */}
          <h1
            className={`${styles.title} ${mounted ? styles.fadeInUp : ""}`}
            style={{ transitionDelay: "100ms" }}
          >
            Orchestrate AI agents with{" "}
            <span className={styles.titleGradient}>unmatched precision</span>
          </h1>

          {/* ---- Subtitle ---- */}
          <p
            className={`${styles.subtitle} ${mounted ? styles.fadeInUp : ""}`}
            style={{ transitionDelay: "200ms" }}
          >
            Build, deploy, and manage intelligent AI agent pipelines. Helix
            gives you the tools to automate complex workflows, analyze real-time
            data, and scale your operations effortlessly.
          </p>

          {/* ---- Actions ---- */}
          <div
            className={`${styles.actions} ${mounted ? styles.fadeInUp : ""}`}
            style={{ transitionDelay: "300ms" }}
          >
            <a href="#signup" className={`btn btn-primary ${styles.btn}`}>
              Get Started
              <ArrowRight className="btn-icon" aria-hidden="true" />
            </a>
            <a href="#demo" className={`btn btn-secondary ${styles.btn}`}>
              <Play className={styles.playIcon} aria-hidden="true" />
              Watch Demo
            </a>
          </div>

          {/* ---- Social Proof ---- */}
          <div
            className={`${styles.trust} ${mounted ? styles.fadeInUp : ""}`}
            style={{ transitionDelay: "400ms" }}
          >
            <div className={styles.avatarStack} aria-hidden="true">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={styles.avatar}>{String.fromCharCode(64 + i)}</div>
              ))}
            </div>
            <p>
              Trusted by <strong>2,500+</strong> teams building smarter
            </p>
          </div>
        </div>

        {/* ---- Right Visual ---- */}
        <div
          className={`${styles.visual} ${mounted ? styles.fadeInUp : ""}`}
          style={{ transitionDelay: "350ms" }}
        >
          <div className={styles.visualCard}>
            <div className={styles.cardHeader}>
              <div className={styles.cardDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.cardTitle}>Agent Pipeline</span>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.pipelineStep}>
                <div className={styles.stepIcon}>
                  <Zap size={14} />
                </div>
                <span className={styles.stepLabel}>Define</span>
                <div className={styles.stepStatus} />
              </div>
              <div className={styles.pipelineArrow} aria-hidden="true">
                <div className={styles.arrowLine} />
                <div className={styles.arrowHead} />
              </div>
              <div className={styles.pipelineStep}>
                <div className={styles.stepIcon}>
                  <Shield size={14} />
                </div>
                <span className={styles.stepLabel}>Orchestrate</span>
                <div className={`${styles.stepStatus} ${styles.statusActive}`} />
              </div>
              <div className={styles.pipelineArrow} aria-hidden="true">
                <div className={styles.arrowLine} />
                <div className={styles.arrowHead} />
              </div>
              <div className={styles.pipelineStep}>
                <div className={styles.stepIcon}>
                  <Globe size={14} />
                </div>
                <span className={styles.stepLabel}>Deploy</span>
                <div className={styles.stepStatus} />
              </div>
            </div>
            <div className={styles.cardFooter}>
              <span className={styles.pulse} aria-hidden="true" />
              <span className={styles.footerText}>3 agents active · 99.9% uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}