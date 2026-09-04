import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

const siteUrl = "https://klyven.qzz.io";

export const metadata: Metadata = {
  title: "About KLYVEN",
  description:
    "KLYVEN was founded by Naman Sharma and Ayush Mishra in 2026 to build the foundational intelligence layer for next-generation software — with a mix of free, open-source tools and premium commercial products.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About KLYVEN",
    description:
      "KLYVEN builds the foundational layer for tomorrow's technology — a balance of open source and commercial products.",
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

const values = [
  {
    title: "Build in the Open",
    body: "Tools and libraries should be shared freely. Our open-source work is MIT-licensed and community-driven — because great software belongs to everyone.",
  },
  {
    title: "Engineer for Scale",
    body: "From real-time systems to AI-native platforms, we design software that is fast, reliable, and secure by default — built to last, not to demo.",
  },
  {
    title: "Balance Open & Commercial",
    body: "Our commercial products fund the work. Open source stays free where it should be; premium platforms carry their own value — a sustainable mix.",
  },
  {
    title: "Think Beyond the Horizon",
    body: "We don't follow trends. We shape them — operating systems, AI products, and digital platforms that redefine what software can do.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto">
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
            className="my-8 h-px w-24"
            style={{
              background: "linear-gradient(to right, rgba(123,47,247,0.4), transparent)",
            }}
          />

          <p className="text-sm md:text-base leading-relaxed text-blue-100/80 max-w-2xl">
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

          <div
            className="rounded-3xl p-8 md:p-10 mt-10"
            style={{
              background: "rgba(10, 14, 30, 0.7)",
              border: "1px solid rgba(0, 212, 255, 0.1)",
            }}
          >
            <h2 className="text-xl font-extralight tracking-[-0.02em] text-white">
              Open Source <span style={{ color: "#00d4ff" }}>&amp;</span> Commercial
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-blue-100/80">
              We&apos;re not purely non-profit, and not purely closed. KLYVEN strikes a
              deliberate balance: our{" "}
              <strong style={{ color: "#fff" }}>tools, libraries, and frameworks</strong> are
              free and open source for the community, while our{" "}
              <strong style={{ color: "#fff" }}>platforms and products</strong> like Nexcarto
              and Pikoo OS are commercial — revenue that keeps the open work sustainable and
              the whole ecosystem thriving.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl p-8"
                style={{
                  background: "rgba(10, 14, 30, 0.6)",
                  border: "1px solid rgba(123, 47, 247, 0.12)",
                }}
              >
                <h3 className="text-base tracking-[0.05em] uppercase text-white">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-blue-100/70">{value.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm md:text-base leading-relaxed text-blue-100/80 max-w-2xl">
            As a parent company, KLYVEN is building the foundational intelligence layer for
            tomorrow&apos;s technology. We are growing our leadership team now — hiring a CEO
            and co-founders today to help shape what&apos;s next.{" "}
            <a href="/contact" style={{ color: "#00d4ff" }}>
              Get in touch
            </a>{" "}
            to be part of it.
          </p>
        </div>
      </section>
    </PageShell>
  );
}
