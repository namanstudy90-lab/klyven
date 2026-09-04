import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

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

const founders = [
  {
    name: "Naman Sharma",
    role: "Co-Founder",
    bio: "Naman Sharma co-founded KLYVEN with the conviction that software should be built to last — fast, intelligent, and open. He drives the vision for AI-native platforms and real-time systems.",
    instagram: "https://www.instagram.com/naman.infinity",
    instagramHandle: "@naman.infinity",
  },
  {
    name: "Ayush Mishra",
    role: "Co-Founder",
    bio: "Ayush Mishra co-founded KLYVEN to reshape how communities and people interact with technology. He focuses on products, operating systems, and experiences built for the future.",
    instagram: null,
    instagramHandle: null,
  },
];

export default function TeamPage() {
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <section className="w-full py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <span
            className="text-xs tracking-[0.4em] uppercase"
            style={{ color: "rgba(0, 212, 255, 0.6)" }}
          >
            Founders &amp; Team
          </span>
          <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-extralight tracking-[-0.04em] leading-[1.05] text-white">
            Built by <span style={{ color: "#00d4ff" }}>Founders</span>
          </h1>
          <div className="my-8 h-px w-24" style={{ background: "linear-gradient(to right, rgba(0,212,255,0.4), transparent)" }} />
          <p className="text-sm md:text-base leading-relaxed text-blue-100/80 max-w-2xl">
            KLYVEN was founded by{" "}
            <strong style={{ color: "#fff" }}>Naman Sharma</strong> and{" "}
            <strong style={{ color: "#fff" }}>Ayush Mishra</strong> with a mission to build
            the foundational intelligence layer for next-generation software. They are
            building the leadership team today — currently hiring a CEO and co-founders to
            scale what&apos;s next.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-3xl p-8"
                style={{
                  background: "rgba(10, 14, 30, 0.7)",
                  border: "1px solid rgba(0, 212, 255, 0.12)",
                }}
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-lg font-extralight"
                    style={{
                      background: "linear-gradient(135deg, rgba(0,212,255,0.2), rgba(123,47,247,0.2))",
                      border: "1px solid rgba(0,212,255,0.3)",
                      color: "#fff",
                    }}
                  >
                    {founder.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h2 className="text-lg tracking-[0.05em] text-white">{founder.name}</h2>
                    <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: "rgba(0, 212, 255, 0.7)" }}>
                      {founder.role}
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-blue-100/70">{founder.bio}</p>
                {founder.instagram ? (
                  <a
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-[11px] tracking-[0.2em] uppercase py-2.5 px-5 rounded-full"
                    style={{
                      background: "rgba(255,45,120,0.1)",
                      border: "1px solid rgba(255,45,120,0.25)",
                      color: "rgba(255,45,120,0.8)",
                    }}
                  >
                    {founder.instagramHandle}
                  </a>
                ) : (
                  <span className="inline-block mt-6 text-[11px] tracking-[0.2em] uppercase py-2.5 px-5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(200,220,255,0.5)" }}>
                    Coming soon
                  </span>
                )}
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-6 mt-8"
            style={{
              background: "rgba(10, 14, 30, 0.5)",
              border: "1px solid rgba(0, 212, 255, 0.08)",
            }}
          >
            <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(0, 212, 255, 0.6)" }}>
              We&apos;re hiring
            </p>
            <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
              KLYVEN is currently growing its leadership. We&apos;re hiring a{" "}
              <strong style={{ color: "#fff" }}>CEO</strong> and additional{" "}
              <strong style={{ color: "#fff" }}>co-founders</strong> to help build the next
              generation of software. If that&apos;s you,{" "}
              <a href="/contact" style={{ color: "#00d4ff" }}>get in touch</a>.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
