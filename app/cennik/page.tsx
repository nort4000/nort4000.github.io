import type { Metadata } from "next";
import { PricingContent } from "@/components/pricing-content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cennik usług IT w Warszawie | NortIT",
  description:
    "Przejrzysty cennik usług informatycznych NortIT w Warszawie i okolicach. Diagnostyka, serwis komputerów, sieci, systemy i obsługa IT firm.",
  alternates: { canonical: "/cennik/" },
  openGraph: {
    title: "Cennik usług IT | NortIT Warszawa",
    description:
      "Przejrzyste ceny podstawowych usług IT dla osób prywatnych i firm. Sprawdź cennik NortIT.",
    url: "/cennik/",
    siteName: "NortIT",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "NortIT - Cennik usług IT" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Strona główna", item: site.url },
    { "@type": "ListItem", position: 2, name: "Cennik", item: `${site.url}/cennik/` },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PricingContent />
    </>
  );
}
