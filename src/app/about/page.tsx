import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { AboutContent } from "@/components/dom/AboutContent";

const siteUrl = "https://klyven.qzz.io";

export const metadata: Metadata = {
  title: "About KLYVEN",
  description:
    "KLYVEN builds and ships real products — and publishes the research behind them, in the open. Founded by Naman Sharma and Ayush Mishra in 2026 with a mix of free, open-source tools and premium commercial products.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About KLYVEN",
    description:
      "KLYVEN builds and ships real products — and publishes the research behind them, in the open.",
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
      <AboutContent />
    </PageShell>
  );
}
