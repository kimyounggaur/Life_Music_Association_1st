import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { Header } from "@/components/layout/Header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://kmla.example.com"),
  title: {
    default: "한국생활음악강사협회 | 기관수업·자격과정·생활음악 교육",
    template: "%s | 한국생활음악강사협회"
  },
  description: site.description,
  openGraph: {
    title: "한국생활음악강사협회",
    description: site.description,
    type: "website",
    images: ["/assets/posters/certification-overview.jpg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: site.englishName,
    url: "https://kmla.example.com",
    telephone: site.contact.phone,
    sameAs: [site.contact.cafe]
  };

  return (
    <html lang="ko">
      <body>
        <Script id="organization-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
