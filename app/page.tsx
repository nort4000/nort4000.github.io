import { PremiumHome } from "@/components/premium-home";
import { site } from "@/lib/site";

const faqItems = [
  ["Dla jakich firm jest NortIT?", "Dla małych i średnich firm, które potrzebują pomocy z komputerami, kontami, pocztą, siecią albo bieżącą obsługą IT."],
  ["Kiedy realizujesz zlecenia?", "Termin każdego zlecenia ustalam indywidualnie i potwierdzam go przed rozpoczęciem pracy."],
  ["Czy możliwa jest pomoc zdalna?", "Tak, jeśli do rozwiązania problemu nie jest potrzebna wizyta na miejscu. W innym przypadku umawiam dojazd w Warszawie lub okolicach."],
  ["Czy pomagasz osobom prywatnym?", "Tak. Pomagam między innymi przy komputerach i laptopach, modernizacji sprzętu, przenoszeniu danych oraz domowym Wi-Fi."],
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
      "Sieci i infrastruktura",
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
