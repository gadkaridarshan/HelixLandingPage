"use client";

import { useEffect, useRef, useState } from "react";

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

export default function LogoCloud() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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
      className={`py-16 transition-opacity duration-700 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-label="Trusted by companies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium text-ink-500 uppercase tracking-wider mb-8">
          Trusted by leading teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {logos.map((logo) => (
            <a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 hover:text-ink-200 transition-colors text-lg font-semibold"
            >
              {logo.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}