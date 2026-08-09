import { PremiumHome } from "@/components/premium-home";
import { site } from "@/lib/site";

const faqItems = [
  ["Dla jakich firm jest NortIT?", "Dla małych i średnich firm, które potrzebują pomocy przy bieżących problemach, stanowiskach pracy, sieci lub porządkowaniu IT."],
  ["Kiedy realizujesz zlecenia?", "Głównie po 16:00 oraz w terminach ustalonych indywidualnie. Przed przyjęciem pracy zawsze potwierdzam dostępność."],
  ["Czy możliwa jest pomoc zdalna?", "Tak, jeśli problem można bezpiecznie rozwiązać bez dojazdu. W pozostałych przypadkach ustalam wizytę w Warszawie lub okolicach."],
  ["Czy pomagasz osobom prywatnym?", "Tak. Przyjmuję wybrane zlecenia dotyczące komputerów, laptopów, modernizacji, danych i domowego Wi-Fi."],
] as const;

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.url,
  image: `${site.url}/og.jpg`,
  description: "Praktyczne wsparcie IT dla małych i średnich firm w Warszawie i okolicach.",
  telephone: site.phoneInternational,
  email: site.email,
  areaServed: ["Warszawa", "okolice Warszawy"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Warszawa",
    addressCountry: "PL",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi IT NortIT",
    itemListElement: [
      "Bieżące wsparcie IT",
      "Konfiguracja stanowisk pracy",
      "Sieci, kopie zapasowe i porządkowanie IT",
      "Pomoc komputerowa dla klientów indywidualnych",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PremiumHome />
    </>
  );
}
