"use client";
// @helix:story USER-344000

/// <reference types="react" />
/// <reference types="react-dom" />

import { useEffect, useRef, useState, type ReactElement } from "react";

interface LogoItem {
  name: string;
  href: string;
}

const logos: LogoItem[] = [
  { name: "CloudScale", href: "https://cloudscale.io" },
  { name: "DataForge", href: "https://dataforge.io" },
  { name: "NeuralPath", href: "https://neuralpath.ai" },
  { name: "QuantumLab", href: "https://quantumlab.dev" },
  { name: "StreamLine", href: "https://streamline.co" },
  { name: "PixelPerfect", href: "https://pixelperfect.design" },
  { name: "ByteBrew", href: "https://bytebrew.io" },
  { name: "CodeCraft", href: "https://codecraft.dev" },
];

export default function LogoCloud(): ReactElement {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-16 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
          Trusted by leading companies
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo) => (
            <a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-200 transition-colors font-semibold text-lg"
            >
              {logo.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}