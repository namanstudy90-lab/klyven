import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["200", "300", "400", "500"],
});

const siteUrl = "https://klyven.qzz.io";

const siteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const metadata: Metadata = {
  title: {
    default: "KLYVEN — Engineering Tomorrow",
    template: "%s | KLYVEN",
  },
  description:
    "We build the foundational intelligence layer for next-generation software. AI-native, real-time, and secure by design.",
  keywords: [
    "KLYVEN",
    "custom software development",
    "AI-native infrastructure",
    "real-time systems",
    "secure by design",
    "Nexcarto",
    "Pikoo OS",
    "digital products",
  ],
  authors: [
    { name: "Naman Sharma", url: `${siteUrl}/team` },
    { name: "Ayush Mishra", url: `${siteUrl}/team` },
  ],
  creator: "KLYVEN",
  publisher: "KLYVEN",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "KLYVEN",
    title: "KLYVEN — Engineering Tomorrow",
    description:
      "We build the foundational intelligence layer for next-generation software. AI-native, real-time, and secure by design.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "KLYVEN — Engineering Tomorrow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KLYVEN — Engineering Tomorrow",
    description:
      "We build the foundational intelligence layer for next-generation software. AI-native, real-time, and secure by design.",
    images: ["/og.png"],
    creator: "@klyven",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  ...(siteVerification
    ? {
        other: {
          "google-site-verification": siteVerification,
        },
      }
    : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060914",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "KLYVEN",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
      description:
        "We build the foundational intelligence layer for next-generation software. AI-native, real-time, and secure by design.",
      foundingDate: "2026",
      founder: [
        {
          "@type": "Person",
          name: "Naman Sharma",
          url: `${siteUrl}/team`,
          sameAs: ["https://www.instagram.com/naman.infinity"],
        },
        {
          "@type": "Person",
          name: "Ayush Mishra",
          url: `${siteUrl}/team`,
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "Klyven4UU@gmail.com",
        url: `${siteUrl}#join`,
      },
      sameAs: ["https://github.com/klyven", "https://www.instagram.com/klyvenofficial"],
      offers: [
        {
          "@type": "Offer",
          name: "Custom Software",
          description: "Tailored AI-native platforms, APIs, and real-time systems",
          price: "0",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "OS & Infrastructure",
          description: "Operating systems, low-level tooling, and cloud-native infrastructure",
          price: "0",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Nexcarto",
          description: "Next-generation geospatial platform — commercial product",
          price: "0",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Pikoo OS",
          description: "Your personal AI operating system — commercial product",
          price: "0",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Klyven Tools",
          description: "Free and open-source tools, libraries, and frameworks — MIT-licensed",
          price: "0",
          priceCurrency: "USD",
        },
      ],
    },
    {
      "@type": "WebSite",
      name: "KLYVEN",
      url: siteUrl,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
