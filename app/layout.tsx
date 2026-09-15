/// <reference types="next" />
/// <reference types="react" />
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { metadata } from "./metadata";

// @helix:story USER-870000
export { metadata };

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body>{children}</body>
    </html>
  );
}