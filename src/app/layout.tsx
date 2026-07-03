import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["200", "300", "400", "500"],
});

const siteUrl = "https://klyven.qzz.io";

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
  authors: [{ name: "KLYVEN" }],
  creator: "KLYVEN",
  publisher: "KLYVEN",
  metadataBase: new URL(siteUrl),
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#060914",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KLYVEN",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "We build the foundational intelligence layer for next-generation software. AI-native, real-time, and secure by design.",
  foundingDate: "2025",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: `${siteUrl}#join`,
  },
  sameAs: ["https://github.com/klyven"],
  offers: [
    {
      "@type": "Offer",
      name: "Custom Software",
      description: "Tailored AI-native platforms, APIs, and real-time systems",
    },
    {
      "@type": "Offer",
      name: "OS & Infrastructure",
      description: "Operating systems, low-level tooling, and cloud-native infrastructure",
    },
    {
      "@type": "Offer",
      name: "Nexcarto",
      description: "Next-generation geospatial platform",
    },
    {
      "@type": "Offer",
      name: "Pikoo OS",
      description: "Custom operating system for specialized hardware",
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
      <body>{children}</body>
    </html>
  );
}
