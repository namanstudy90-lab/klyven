import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TeamContent } from "@/components/dom/TeamContent";

const siteUrl = "https://klyven.qzz.io";

export const metadata: Metadata = {
  title: "Founders & Team",
  description:
    "KLYVEN was founded by Naman Sharma and Ayush Mishra. Meet the minds building the foundational intelligence layer for next-generation software.",
  alternates: {
    canonical: `${siteUrl}/team`,
  },
  openGraph: {
    title: "Founders & Team | KLYVEN",
    description:
      "Naman Sharma and Ayush Mishra founded KLYVEN in 2026 to build the foundational intelligence layer for next-generation software.",
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
