"use client";

import Script from "next/script";

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;

export function Analytics() {
  return (
    <>
      {GA4_MEASUREMENT_ID ? (
        <Script
          id="ga4"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_MEASUREMENT_ID}', { anonymize_ip: true });
            `,
          }}
        />
      ) : null}
    </>
  );
}
