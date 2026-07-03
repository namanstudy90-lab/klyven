"use client";

import dynamic from "next/dynamic";
import { ScrollTracker } from "@/components/dom/ScrollTracker";

const Scene3D = dynamic(
  () => import("@/components/three/Scene3D").then((m) => ({ default: m.Scene3D })),
  { ssr: false }
);

const HeroSection = dynamic(
  () => import("@/components/dom/HeroSection").then((m) => ({ default: m.HeroSection })),
  { ssr: false }
);

const ServicesSection = dynamic(
  () => import("@/components/dom/ServicesSection").then((m) => ({ default: m.ServicesSection })),
  { ssr: false }
);

const ProductsSection = dynamic(
  () => import("@/components/dom/ProductsSection").then((m) => ({ default: m.ProductsSection })),
  { ssr: false }
);

const OpenSourceSection = dynamic(
  () => import("@/components/dom/OpenSourceSection").then((m) => ({ default: m.OpenSourceSection })),
  { ssr: false }
);

const BlogSection = dynamic(
  () => import("@/components/dom/BlogSection").then((m) => ({ default: m.BlogSection })),
  { ssr: false }
);

const AboutSection = dynamic(
  () => import("@/components/dom/AboutSection").then((m) => ({ default: m.AboutSection })),
  { ssr: false }
);

const JoinSection = dynamic(
  () => import("@/components/dom/JoinSection").then((m) => ({ default: m.JoinSection })),
  { ssr: false }
);

const CTASection = dynamic(
  () => import("@/components/dom/CTASection").then((m) => ({ default: m.CTASection })),
  { ssr: false }
);

const FooterSection = dynamic(
  () => import("@/components/dom/FooterSection").then((m) => ({ default: m.FooterSection })),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Scene3D />
      <div className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <OpenSourceSection />
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
