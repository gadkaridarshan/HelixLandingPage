"use client";

import { Mail, Twitter, Github, Linkedin, Sparkles } from "lucide-react";
import type { ElementType } from "react";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const footerColumns: FooterColumn[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Workflows", href: "#workflow" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API Reference", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
      { label: "Privacy", href: "#" },
    ],
  },
];

const socialLinks: { icon: ElementType; href: string; label: string }[] = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="footer" id="contact" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <Sparkles className="footer-brand-icon" aria-hidden="true" />
            <span className="footer-brand-name">Helix AI Orchestrator</span>
            <p className="footer-brand-description">
              Build, deploy, and manage intelligent AI agent pipelines with
              unmatched precision. Automate complex workflows, analyze real-time
              data, and scale effortlessly.
            </p>
          </div>
          <div className="footer-links">
            {footerColumns.map((column) => (
              <div key={column.title} className="footer-column">
                <h4 className="footer-column-title">{column.title}</h4>
                <ul className="footer-column-list">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer-link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <div className="footer-contact">
            <Mail className="footer-contact-icon" aria-hidden="true" />
            <a
              href="mailto:hello@helix-ai.dev"
              className="footer-link"
            >
              hello@helix-ai.dev
            </a>
          </div>
          <div className="footer-social">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer-social-link"
                  aria-label={social.label}
                >
                  <Icon
                    className="footer-social-icon"
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Helix AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}