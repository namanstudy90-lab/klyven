"use client";

import dynamic from "next/dynamic";
import { ScrollTracker } from "@/components/dom/ScrollTracker";
import { HeroSection } from "@/components/dom/HeroSection";
import { ServicesSection } from "@/components/dom/ServicesSection";
import { ProductsSection } from "@/components/dom/ProductsSection";
import { SchoolsSection } from "@/components/dom/SchoolsSection";
import { OpenSourceSection } from "@/components/dom/OpenSourceSection";
import { ResearchSection } from "@/components/dom/ResearchSection";
import { BlogSection } from "@/components/dom/BlogSection";
import { AboutSection } from "@/components/dom/AboutSection";
import { JoinSection } from "@/components/dom/JoinSection";
import { CTASection } from "@/components/dom/CTASection";
import { FooterSection } from "@/components/dom/FooterSection";

const Scene3D = dynamic(
  () => import("@/components/three/Scene3D").then((m) => ({ default: m.Scene3D })),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Scene3D />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <SchoolsSection />
        <ProductsSection />
        <OpenSourceSection />
        <ResearchSection />
        <BlogSection />
        <AboutSection />
        <JoinSection />
        <CTASection />
        <FooterSection />
      </div>
      <ScrollTracker />
    </>
  );
}