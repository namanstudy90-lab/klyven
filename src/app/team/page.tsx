import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TeamContent } from "@/components/dom/TeamContent";

const siteUrl = "https://klyven.qzz.io";

export const metadata: Metadata = {
  title: "Founders & Team",
  description:
    "KLYVEN was founded by Naman Sharma and Ayush Mishra. Meet the pair building and shipping real products — and publishing the research behind them, in the open.",
  alternates: {
    canonical: `${siteUrl}/team`,
  },
  openGraph: {
    title: "Founders & Team | KLYVEN",
    description:
      "Naman Sharma and Ayush Mishra founded KLYVEN in 2026 to build and ship real products — and publish the research behind them, in the open.",
    url: `${siteUrl}/team`,
    type: "website",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Team", item: `${siteUrl}/team` },
  ],
};

export default function TeamPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <TeamContent />
    </PageShell>
  );
}
