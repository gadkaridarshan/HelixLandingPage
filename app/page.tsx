// @helix:story USER-653000
import type { Metadata } from "next";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import LogoCloud from "../components/LogoCloud";
import Features from "../components/Features";
import Workflow from "../components/Workflow";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import { metadata as pageMetadata } from "./metadata";

export const metadata: Metadata = pageMetadata;

export default function Page() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Workflow />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}