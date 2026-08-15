import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cennik usług IT w Warszawie | NortIT',
  description:
    'Przejrzysty cennik usług informatycznych NortIT w Warszawie i okolicach. Diagnostyka, serwis komputerów, sieci, systemy i obsługa IT firm.',
  alternates: {
    canonical: 'https://nortit.pl/cennik',
  },
  openGraph: {
    title: 'Cennik usług IT | NortIT Warszawa',
    description:
      'Przejrzyste ceny podstawowych usług IT dla osób prywatnych i firm. Sprawdź cennik NortIT.',
    url: 'https://nortit.pl/cennik',
    siteName: 'NortIT',
    locale: 'pl_PL',
    type: 'website',
    images: [
      {
        url: 'https://nortit.pl/og.jpg',
        width: 1200,
        height: 630,
        alt: 'NortIT - Cennik usług IT',
      },
    ],
  },
};

interface PricingItem {
  name: string;
  price: string;
}

interface PricingCategory {
  title: string;
  badge: string;
  items: PricingItem[];
}

const pricingData: PricingCategory[] = [
  {
    title: 'Diagnostyka i wsparcie',
    badge: 'Diagnoza & Pomoc',
    items: [
      { name: 'Wstępna konsultacja / ocena problemu', price: '0 zł' },
      { name: 'Diagnostyka komputera / laptopa', price: 'od 79 zł' },
      { name: 'Diagnostyka rozszerzona', price: 'od 129 zł' },
      { name: 'Pomoc zdalna', price: 'od 99 zł' },
      { name: 'Pomoc informatyczna na miejscu', price: 'od 149 zł / godz.' },
      { name: 'Dojazd w Warszawie', price: 'od 30 zł' },
    ],
  },
  {
    title: 'System i oprogramowanie',
    badge: 'Systemy & Soft',
    items: [
      { name: 'Instalacja Windows + podstawowa konfiguracja', price: 'od 179 zł' },
      { name: 'Instalacja Windows z zachowaniem danych', price: 'od 249 zł' },
      { name: 'Konfiguracja nowego komputera', price: 'od 149 zł' },
      { name: 'Instalacja i konfiguracja programu', price: 'od 49 zł' },
      { name: 'Aktualizacja / konfiguracja sterowników', price: 'od 79 zł' },
      { name: 'Optymalizacja systemu', price: 'od 129 zł' },
      { name: 'Usuwanie wirusów / malware', price: 'od 149 zł' },
      { name: 'Naprawa problemów z Windows', price: 'od 129 zł' },
      { name: 'Konfiguracja poczty e-mail', price: 'od 79 zł' },
    ],
  },
  {
    title: 'Czyszczenie i konserwacja',
    badge: 'Serwis fizyczny',
    items: [
      { name: 'Czyszczenie PC z kurzu', price: 'od 149 zł' },
      { name: 'Czyszczenie laptopa + wymiana pasty', price: 'od 199 zł' },
      { name: 'Czyszczenie laptopa gamingowego', price: 'od 249 zł' },
      { name: 'Czyszczenie konsoli', price: 'od 149 zł' },
      { name: 'Czyszczenie PS5 / Xbox Series', price: 'od 169 zł' },
      { name: 'Wymiana pasty termoprzewodzącej PC', price: 'od 129 zł' },
      { name: 'Wymiana pasty + konserwacja GPU', price: 'od 199 zł' },
    ],
  },
  {
    title: 'Modernizacja sprzętu',
    badge: 'Hardware & Upgrade',
    items: [
      { name: 'Montaż RAM', price: 'od 49 zł' },
      { name: 'Montaż SSD / HDD', price: 'od 69 zł' },
      { name: 'Montaż karty graficznej', price: 'od 79 zł' },
      { name: 'Montaż zasilacza', price: 'od 99 zł' },
      { name: 'Wymiana podzespołu', price: 'od 79 zł' },
      { name: 'Klonowanie dysku', price: 'od 149 zł' },
      { name: 'Migracja danych na nowy dysk', price: 'od 149 zł' },
      { name: 'Montaż / składanie PC', price: 'od 299 zł' },
      { name: 'Dobór podzespołów do PC', price: 'od 99 zł' },
      { name: 'Kompleksowy dobór + składanie PC', price: 'od 399 zł' },
    ],
  },
  {
    title: 'Sieć i urządzenia',
    badge: 'Wi-Fi & LAN',
    items: [
      { name: 'Konfiguracja routera / Wi-Fi', price: 'od 99 zł' },
      { name: 'Konfiguracja drukarki', price: 'od 79 zł' },
      { name: 'Podłączenie urządzenia do sieci', price: 'od 59 zł' },
      { name: 'Konfiguracja sieci domowej', price: 'od 149 zł' },
      { name: 'Konfiguracja NAS', price: 'od 199 zł' },
      { name: 'Konfiguracja podstawowego backupu', price: 'od 149 zł' },
    ],
  },
  {
    title: 'Usługi dla firm',
    badge: 'Dla B2B',
    items: [
      { name: 'Wsparcie IT zdalne', price: 'od 129 zł / godz.' },
      { name: 'Wsparcie IT na miejscu', price: 'od 169 zł / godz.' },
      { name: 'Konfiguracja stanowiska pracy', price: 'od 149 zł' },
      { name: 'Konfiguracja komputera pracownika', price: 'od 149 zł' },
      { name: 'Konfiguracja Microsoft 365', price: 'od 149 zł' },
      { name: 'Konfiguracja użytkownika / konta', price: 'od 99 zł' },
      { name: 'Konfiguracja urządzeń sieciowych', price: 'od 149 zł' },
      { name: 'Audyt / uporządkowanie infrastruktury IT', price: 'Wycena indywidualna' },
      { name: 'Stała obsługa IT', price: 'Wycena indywidualna' },
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#060914] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* NAGŁÓWEK NAWIGACJI */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#060914]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5 text-white">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600/30 border border-blue-500/40 text-blue-400 font-bold text-sm">
              N
            </span>
            <span className="font-semibold tracking-tight text-lg">NortIT</span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-6 text-sm">
            <Link
              href="/#uslugi"
              className="text-slate-400 hover:text-white transition-colors duration-150 px-2 py-1"
            >
              Usługi
            </Link>
            <Link
              href="/#o-mnie"
              className="text-slate-400 hover:text-white transition-colors duration-150 px-2 py-1"
            >
              O mnie
            </Link>
            <Link
              href="/#wspolpraca"
              className="text-slate-400 hover:text-white transition-colors duration-150 px-2 py-1"
            >
              Współpraca
            </Link>
            {/* Aktywna pozycja Cennik */}
            <Link
              href="/cennik"
              className="text-white font-medium bg-slate-800/80 border border-slate-700/60 rounded-md px-3 py-1 text-cyan-400"
            >
              Cennik
            </Link>
            <Link
              href="/#kontakt"
              className="text-slate-400 hover:text-white transition-colors duration-150 px-2 py-1"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      </header>

      {/* GŁÓWNA TREŚĆ */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        {/* HERO CENNIKA */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-950/40 text-blue-400 text-xs font-medium tracking-wide uppercase mb-4">
            Transparentne warunki
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Cennik usług IT
          </h1>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed">
            Przejrzyste ceny podstawowych usług IT. W przypadku bardziej złożonych prac
            przygotujemy indywidualną wycenę przed rozpoczęciem prac.
          </p>
        </div>

        {/* SIATKA KATEGORII CENNIKA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {pricingData.map((category) => (
            <section
              key={category.title}
              className="rounded-xl border border-slate-800/90 bg-slate-900/40 p-5 sm:p-6 backdrop-blur-sm flex flex-col justify-between shadow-sm hover:border-slate-700/80 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800/80">
                  <h2 className="text-lg font-semibold text-white tracking-tight">
                    {category.title}
                  </h2>
                  <span className="text-xs text-slate-400 font-mono bg-slate-800/60 px-2.5 py-0.5 rounded border border-slate-700/50">
                    {category.badge}
                  </span>
                </div>

                <ul className="divide-y divide-slate-800/40">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="py-3 flex flex-row items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-slate-300 pr-2 leading-snug">
                        {item.name}
                      </span>
                      <span className="font-semibold text-white whitespace-nowrap text-right shrink-0">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* NOTATKA INFORMACYJNA POD CENNIKIEM */}
        <div className="rounded-lg border border-slate-800 bg-slate-900/30 p-4 sm:p-5 text-sm text-slate-400 leading-relaxed mb-16">
          <p>
            <strong className="text-slate-200">Ważne:</strong> Podane ceny są cenami „od” i
            dotyczą standardowego zakresu prac. Ostateczna cena może zależeć od stanu urządzenia,
            zakresu problemu i wymaganych prac. Koszt części, podzespołów oraz dodatkowych
            materiałów jest ustalany osobno i akceptowany przez klienta przed rozpoczęciem prac.
          </p>
        </div>

        {/* SEKCJA CTA NA KOŃCU STRONY */}
        <section className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/70 to-slate-950 p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Nie wiesz, której usługi potrzebujesz?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto">
            Opisz nam swój problem. Pomożemy dobrać odpowiednią usługę i przedstawimy koszt przed
            rozpoczęciem prac.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/#kontakt"
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md hover:shadow-blue-600/20"
            >
              Zapytaj o wycenę
            </Link>
            <Link
              href="tel:+48887602981"
              className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 rounded-lg border border-slate-700 bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 font-medium text-sm transition-all"
            >
              Skontaktuj się
            </Link>
          </div>
        </section>
      </main>

      {/* STOPKA */}
      <footer className="border-t border-slate-800/80 mt-16 bg-[#060914]">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300">NortIT</span>
            <span>—</span>
            <span>Wsparcie IT w Warszawie i okolicach</span>
          </div>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-slate-300 transition-colors">
              Strona główna
            </Link>
            <Link href="/polityka-prywatnosci" className="hover:text-slate-300 transition-colors">
              Prywatność
            </Link>
            <Link href="/#kontakt" className="hover:text-slate-300 transition-colors">
              Kontakt
            </Link>
          </div>
          <p>© 2026 NortIT. Warszawa i okolice.</p>
        </div>
      </footer>
    </div>
  );
}
