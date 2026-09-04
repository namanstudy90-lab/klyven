import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactContent } from "@/components/dom/ContactContent";

const siteUrl = "https://klyven.qzz.io";

export const metadata: Metadata = {
  title: "Contact KLYVEN",
  description:
    "Get in touch with KLYVEN. Email us at Klyven4UU@gmail.com or reach us on Instagram at @klyvenofficial and @naman.infinity.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact KLYVEN",
    description: "Connect with KLYVEN on Instagram.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
  ],
};

export default function ContactPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <ContactContent />
    </PageShell>
  );
}
