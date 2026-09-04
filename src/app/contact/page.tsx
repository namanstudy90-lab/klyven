import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

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

const CONTACT_EMAIL = "Klyven4UU@gmail.com";

export default function ContactPage() {
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
            Get in Touch
          </span>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-extralight tracking-[-0.04em] leading-[1.05] text-white">
            Let&apos;s <span style={{ color: "#00d4ff" }}>Connect</span>
          </h1>
          <div className="my-8 h-px w-24" style={{ background: "linear-gradient(to right, rgba(0,212,255,0.4), transparent)" }} />
          <p className="text-sm md:text-base leading-relaxed text-blue-100/80 max-w-xl">
            Whether you&apos;re a founder, developer, or dreamer with the next big idea,
            we&apos;d love to hear from you. Reach us by email or on Instagram.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <a
              href="https://www.instagram.com/klyvenofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl p-8 transition-all duration-300 block"
              style={{
                background: "rgba(10, 14, 30, 0.7)",
                border: "1px solid rgba(0, 212, 255, 0.12)",
              }}
            >
              <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(0, 212, 255, 0.7)" }}>
                Official Brand
              </span>
              <h2 className="mt-3 text-lg text-white">@klyvenofficial</h2>
              <p className="mt-3 text-sm text-blue-100/60">Follow KLYVEN&apos;s official Instagram for updates.</p>
            </a>

            <a
              href="https://www.instagram.com/naman.infinity"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl p-8 transition-all duration-300 block"
              style={{
                background: "rgba(10, 14, 30, 0.7)",
                border: "1px solid rgba(255,45,120,0.12)",
              }}
            >
              <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(255,45,120,0.7)" }}>
                Founder
              </span>
              <h2 className="mt-3 text-lg text-white">@naman.infinity</h2>
              <p className="mt-3 text-sm text-blue-100/60">Reach Naman Sharma, founder of KLYVEN.</p>
            </a>
          </div>

          <div
            className="rounded-2xl p-6 mt-8"
            style={{
              background: "rgba(10, 14, 30, 0.5)",
              border: "1px solid rgba(0, 212, 255, 0.2)",
            }}
          >
            <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(0, 212, 255, 0.6)" }}>
              Official Email
            </span>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
              Prefer email? Reach us directly at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-medium"
                style={{ color: "#00d4ff" }}
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
