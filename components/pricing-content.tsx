"use client";

import Link from "next/link";
import {
  ArrowRight,
  Broom,
  Buildings,
  DesktopTower,
  HardDrive,
  Phone,
  WifiHigh,
  Wrench,
  type Icon,
} from "@phosphor-icons/react";
import { Navbar } from "@/components/navbar";
import { site } from "@/lib/site";

interface PricingItem {
  name: string;
  price: string;
}

interface PricingCategory {
  title: string;
  badge: string;
  icon: Icon;
  items: PricingItem[];
}

const pricingData: PricingCategory[] = [
  {
    title: "Diagnostyka i wsparcie",
    badge: "Diagnoza i pomoc",
    icon: Wrench,
    items: [
      { name: "Wstępna konsultacja / ocena problemu", price: "0 zł" },
      { name: "Diagnostyka komputera / laptopa", price: "od 79 zł" },
      { name: "Diagnostyka rozszerzona", price: "od 129 zł" },
      { name: "Pomoc zdalna", price: "od 99 zł" },
      { name: "Pomoc informatyczna na miejscu", price: "od 149 zł / godz." },
      { name: "Dojazd w Warszawie", price: "od 30 zł" },
    ],
  },
  {
    title: "System i oprogramowanie",
    badge: "Systemy i soft",
    icon: DesktopTower,
    items: [
      { name: "Instalacja Windows + podstawowa konfiguracja", price: "od 179 zł" },
      { name: "Instalacja Windows z zachowaniem danych", price: "od 249 zł" },
      { name: "Konfiguracja nowego komputera", price: "od 149 zł" },
      { name: "Instalacja i konfiguracja programu", price: "od 49 zł" },
      { name: "Aktualizacja / konfiguracja sterowników", price: "od 79 zł" },
      { name: "Optymalizacja systemu", price: "od 129 zł" },
      { name: "Usuwanie wirusów / malware", price: "od 149 zł" },
      { name: "Naprawa problemów z Windows", price: "od 129 zł" },
      { name: "Konfiguracja poczty e-mail", price: "od 79 zł" },
    ],
  },
  {
    title: "Czyszczenie i konserwacja",
    badge: "Serwis fizyczny",
    icon: Broom,
    items: [
      { name: "Czyszczenie PC z kurzu", price: "od 149 zł" },
      { name: "Czyszczenie laptopa + wymiana pasty", price: "od 199 zł" },
      { name: "Czyszczenie laptopa gamingowego", price: "od 249 zł" },
      { name: "Czyszczenie konsoli", price: "od 149 zł" },
      { name: "Czyszczenie PS5 / Xbox Series", price: "od 169 zł" },
      { name: "Wymiana pasty termoprzewodzącej PC", price: "od 129 zł" },
      { name: "Wymiana pasty + konserwacja GPU", price: "od 199 zł" },
    ],
  },
  {
    title: "Modernizacja sprzętu",
    badge: "Hardware i upgrade",
    icon: HardDrive,
    items: [
      { name: "Montaż RAM", price: "od 49 zł" },
      { name: "Montaż SSD / HDD", price: "od 69 zł" },
      { name: "Montaż karty graficznej", price: "od 79 zł" },
      { name: "Montaż zasilacza", price: "od 99 zł" },
      { name: "Wymiana podzespołu", price: "od 79 zł" },
      { name: "Klonowanie dysku", price: "od 149 zł" },
      { name: "Migracja danych na nowy dysk", price: "od 149 zł" },
      { name: "Montaż / składanie PC", price: "od 299 zł" },
      { name: "Dobór podzespołów do PC", price: "od 99 zł" },
      { name: "Kompleksowy dobór + składanie PC", price: "od 399 zł" },
    ],
  },
  {
    title: "Sieć i urządzenia",
    badge: "Wi-Fi i LAN",
    icon: WifiHigh,
    items: [
      { name: "Konfiguracja routera / Wi-Fi", price: "od 99 zł" },
      { name: "Konfiguracja drukarki", price: "od 79 zł" },
      { name: "Podłączenie urządzenia do sieci", price: "od 59 zł" },
      { name: "Konfiguracja sieci domowej", price: "od 149 zł" },
      { name: "Konfiguracja NAS", price: "od 199 zł" },
      { name: "Konfiguracja podstawowego backupu", price: "od 149 zł" },
    ],
  },
  {
    title: "Usługi dla firm",
    badge: "Dla B2B",
    icon: Buildings,
    items: [
      { name: "Wsparcie IT zdalne", price: "od 129 zł / godz." },
      { name: "Wsparcie IT na miejscu", price: "od 169 zł / godz." },
      { name: "Konfiguracja stanowiska pracy", price: "od 149 zł" },
      { name: "Konfiguracja komputera pracownika", price: "od 149 zł" },
      { name: "Konfiguracja Microsoft 365", price: "od 149 zł" },
      { name: "Konfiguracja użytkownika / konta", price: "od 99 zł" },
      { name: "Konfiguracja urządzeń sieciowych", price: "od 149 zł" },
      { name: "Audyt / uporządkowanie infrastruktury IT", price: "Wycena indywidualna" },
      { name: "Stała obsługa IT", price: "Wycena indywidualna" },
    ],
  },
];

export function PricingContent() {
  return (
    <div className="min-h-[100dvh] bg-[#060914] text-white">
      <Navbar />

      <main className="w-full max-w-full overflow-x-hidden pt-[72px]">
        {/* HERO CENNIKA */}
        <section className="relative overflow-hidden pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="hero-ambient" aria-hidden="true" />
          <div className="site-shell relative">
            <p className="mb-7 flex items-center gap-3 text-sm font-medium tracking-[0.08em] text-blue-300">
              <span className="h-px w-10 bg-blue-400" aria-hidden="true" />
              Ceny podstawowych usług
            </p>
            <h1 className="max-w-4xl text-balance text-[clamp(2.75rem,5.6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em] text-white">
              Cennik usług IT
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Poniżej znajdziesz orientacyjne ceny najczęściej wybieranych usług. Jeśli problem jest
              bardziej złożony, najpierw sprawdzę zakres prac i podam wycenę.
            </p>
          </div>
        </section>

        {/* SIATKA KATEGORII CENNIKA */}
        <section className="pb-16 md:pb-24">
          <div className="site-shell grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {pricingData.map((category) => {
              const Icon = category.icon;
              return (
                <section
                  key={category.title}
                  className="flex flex-col rounded-[1.75rem] border border-white/10 bg-[#0d1220] p-6 transition duration-300 hover:border-blue-400/30 md:p-8"
                >
                  <div className="mb-5 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <div className="flex items-center gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03]">
                        <Icon className="size-5 text-blue-300" weight="duotone" aria-hidden="true" />
                      </span>
                      <h2 className="text-xl font-semibold tracking-[-0.03em] text-white">
                        {category.title}
                      </h2>
                    </div>
                    <span className="hidden shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-slate-400 sm:inline-block">
                      {category.badge}
                    </span>
                  </div>

                  <ul className="divide-y divide-white/[0.08]">
                    {category.items.map((item) => (
                      <li
                        key={item.name}
                        className="flex items-center justify-between gap-4 py-3.5 text-sm md:text-base"
                      >
                        <span className="leading-snug text-slate-300">{item.name}</span>
                        <span className="shrink-0 whitespace-nowrap text-right font-semibold text-blue-200">
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </section>

        {/* NOTATKA INFORMACYJNA POD CENNIKIEM */}
        <section className="pb-20 md:pb-28">
          <div className="site-shell">
            <div className="rounded-2xl border border-white/10 bg-[#090e1b] p-6 text-sm leading-relaxed text-slate-400 md:p-7">
              <p>
                <strong className="text-white">Ważne:</strong> Podane kwoty są cenami „od”. Ostateczny koszt zależy od usterki, stanu urządzenia
                i czasu potrzebnego na wykonanie usługi. Części i materiały wyceniam osobno.
                Zawsze podaję koszt do akceptacji przed rozpoczęciem pracy.
              </p>
            </div>
          </div>
        </section>

        {/* SEKCJA CTA */}
        <section className="relative overflow-hidden bg-[#2f6df6] py-24 text-white md:py-32">
          <div className="contact-ambient" aria-hidden="true" />
          <div className="site-shell relative text-center">
            <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">
              Nie wiesz, której usługi potrzebujesz?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-100">
              Opisz krótko, co się dzieje. Podpowiem, jaka usługa będzie potrzebna, i podam koszt
              przed rozpoczęciem pracy.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/#kontakt"
                className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 font-semibold text-[#090d18] transition duration-300 hover:bg-blue-50 sm:w-auto"
              >
                Zapytaj o wycenę <ArrowRight className="ml-2 size-5" aria-hidden="true" />
              </Link>
              <a
                href={site.phoneHref}
                className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold text-white transition duration-300 hover:bg-white/20 sm:w-auto"
              >
                <Phone className="mr-2 size-5" weight="duotone" aria-hidden="true" /> Skontaktuj się
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#040711] py-12">
        <div className="site-shell flex flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>
            <span className="font-semibold text-slate-200">NortIT</span> — wsparcie IT w{" "}
            {site.area}.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/" className="hover:text-white">
              Strona główna
            </Link>
            <Link href="/#uslugi" className="hover:text-white">
              Usługi
            </Link>
            <Link href="/polityka-prywatnosci/" className="hover:text-white">
              Prywatność
            </Link>
            <Link href="/#kontakt" className="hover:text-white">
              Kontakt
            </Link>
          </div>
        </div>
        <div className="site-shell mt-10 border-t border-white/[0.08] pt-6 text-xs text-slate-600">
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> NortIT. Warszawa i
          okolice.
        </div>
      </footer>
    </div>
  );
}

