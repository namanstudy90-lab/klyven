import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

const siteUrl = "https://klyven.qzz.io";

export const metadata: Metadata = {
  title: "About KLYVEN",
  description:
    "KLYVEN was founded by Naman Sharma and Ayush Mishra in 2026 to build the foundational intelligence layer for next-generation software. AI-native, real-time, and secure by design.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About KLYVEN",
    description:
      "KLYVEN is a parent company building the foundational layer for tomorrow's technology.",
    url: `${siteUrl}/about`,
    type: "website",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
  ],
};

export default function AboutPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <section className="w-full py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: "rgba(0, 212, 255, 0.6)" }}
          >
            Our Mission
          </span>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-extralight tracking-[-0.04em] leading-[1.05] text-white">
            Engineering the <span style={{ color: "#7b2ff7" }}>Future</span>
          </h1>
          <div
            className="mt-8 my-8 h-px w-24"
            style={{
              background: "linear-gradient(to right, rgba(123,47,247,0.4), transparent)",
            }}
          />
          <div
            className="rounded-3xl p-8 md:p-10"
            style={{
              background: "rgba(10, 14, 30, 0.7)",
              border: "1px solid rgba(123, 47, 247, 0.12)",
            }}
          >
            <p className="text-sm md:text-base leading-relaxed text-blue-100/80">
              KLYVEN was founded by{" "}
              <a href="/team" style={{ color: "#00d4ff" }}>
                Naman Sharma
              </a>{" "}
              and{" "}
              <a href="/team" style={{ color: "#00d4ff" }}>
                Ayush Mishra
              </a>{" "}
              in 2026 with a simple conviction: that the next generation of software
              shouldn&apos;t be held back by yesterday&apos;s architecture. We work at every
              level of the stack — from custom software and AI-native platforms to operating
              systems and digital products that connect communities.
            </p>
            <p className="mt-6 text-sm md:text-base leading-relaxed text-blue-100/80">
              As a parent company, KLYVEN builds the foundational intelligence layer for
              tomorrow&apos;s technology. Our work stays open source where it should be,
              accessible to everyone, and engineered to last. We are building our leadership
              team now — hiring a CEO and co-founders today to help shape what&apos;s next.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
