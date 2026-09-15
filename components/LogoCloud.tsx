"use client";
// @helix:story USER-344000

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

export default function LogoCloud(): JSX.Element {
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
      className={`py-16 transition-all duration-1000 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      aria-label="Trusted by"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-8">
          Trusted by leading teams
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <a
              key={logo.name}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-300 transition-colors duration-200 font-semibold text-lg"
            >
              {logo.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}