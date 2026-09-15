"use client";

import { useEffect, useRef } from "react";

interface GradientMeshProps {
  className?: string;
}

interface Blob {
  x: number;
  y: number;
  radius: number;
  color: string;
  dx: number;
  dy: number;
}

export default function GradientMesh({ className = "" }: GradientMeshProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;
    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener("resize", resize);

    const blobs: Blob[] = [
      { x: width * 0.3, y: height * 0.25, radius: 250, color: "rgba(34, 211, 238, 0.12)", dx: 0.4, dy: 0.3 },
      { x: width * 0.7, y: height * 0.5, radius: 300, color: "rgba(139, 92, 246, 0.10)", dx: -0.3, dy: 0.4 },
      { x: width * 0.5, y: height * 0.75, radius: 220, color: "rgba(6, 182, 212, 0.08)", dx: 0.35, dy: -0.3 },
      { x: width * 0.2, y: height * 0.6, radius: 260, color: "rgba(99, 102, 241, 0.09)", dx: -0.25, dy: 0.2 },
      { x: width * 0.8, y: height * 0.2, radius: 200, color: "rgba(236, 72, 153, 0.06)", dx: 0.2, dy: 0.35 },
    ];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "screen";

      blobs.forEach((blob) => {
        blob.x += blob.dx;
        blob.y += blob.dy;

        if (blob.x < -blob.radius || blob.x > width + blob.radius) blob.dx *= -1;
        if (blob.y < -blob.radius || blob.y > height + blob.radius) blob.dy *= -1;

        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius);
        gradient.addColorStop(0, blob.color);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}