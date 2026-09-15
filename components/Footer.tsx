"use client";
// @helix:story USER-817000

import { Sparkles, Github, Twitter, Linkedin, Youtube } from "lucide-react";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "#docs" },
      { label: "API Reference", href: "#api" },
      { label: "Community", href: "#community" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
      { label: "Partners", href: "#partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Security", href: "#security" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
];

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-helix-400" aria-hidden="true" />
              <span className="text-xl font-bold text-white">Helix</span>
            </a>
            <p className="text-ink-500 text-sm max-w-xs">
              Build, deploy, and manage intelligent AI agent pipelines with unmatched precision.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-ink-500 hover:text-helix-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-ink-500 hover:text-helix-400 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-ink-600 text-sm">
            © {new Date().getFullYear()} Helix AI Orchestrator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}