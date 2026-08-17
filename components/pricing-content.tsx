"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Check, Clock, Database, DesktopTower, House, Info, Phone, ShieldCheck, WifiHigh, Wrench, type Icon } from "@phosphor-icons/react";
import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { site } from "@/lib/site";

type Audience = "individual" | "business";
type Category = { title: string; description: string; icon: Icon; items: { name: string; price: string }[] };

const individualPricing: Category[] = [
  { title: "Sprzęt i serwis", description: "Diagnoza, konserwacja, montaż i rozbudowa komputerów.", icon: Wrench, items: [
    { name: "Diagnostyka komputera lub laptopa", price: "80 zł" }, { name: "Czyszczenie komputera PC", price: "od 150 zł" },
    { name: "Czyszczenie laptopa", price: "od 160 zł" }, { name: "Montaż podzespołu", price: "od 80 zł" },
    { name: "Składanie komputera PC", price: "od 250 zł" }, { name: "Modernizacja komputera", price: "od 120 zł" },
  ] },
  { title: "System i oprogramowanie", description: "Konfiguracja, naprawa i bezpieczne przygotowanie systemu.", icon: DesktopTower, items: [
    { name: "Instalacja Windows + sterowniki", price: "180 zł" }, { name: "Instalacja programu", price: "od 50 zł" },
    { name: "Naprawa lub optymalizacja systemu", price: "od 120 zł" }, { name: "Usuwanie malware", price: "od 150 zł" },
    { name: "Konfiguracja nowego komputera", price: "od 150 zł" }, { name: "Aktualizacje systemu i sterowników", price: "od 100 zł" },
  ] },
  { title: "Dane i kopie zapasowe", description: "Przenoszenie danych oraz przygotowanie kopii bezpieczeństwa.", icon: Database, items: [
    { name: "Przeniesienie danych", price: "od 100 zł" }, { name: "Klonowanie dysku", price: "od 120 zł" },
    { name: "Konfiguracja backupu", price: "od 120 zł" }, { name: "Odzyskiwanie danych", price: "wycena indywidualna" },
  ] },
  { title: "Sieć i urządzenia", description: "Stabilne Wi-Fi oraz poprawnie skonfigurowane urządzenia domowe.", icon: WifiHigh, items: [
    { name: "Konfiguracja routera", price: "od 120 zł" }, { name: "Diagnostyka Wi-Fi lub internetu", price: "od 100 zł" },
    { name: "Konfiguracja drukarki", price: "od 80 zł" }, { name: "Konfiguracja urządzenia sieciowego", price: "od 100 zł" },
    { name: "Rozbudowa zasięgu Wi-Fi", price: "od 150 zł" },
  ] },
  { title: "Pomoc zdalna i wizyta", description: "Szybka pomoc na odległość albo wsparcie na miejscu.", icon: Clock, items: [
    { name: "Pomoc zdalna — 30 minut", price: "70 zł" }, { name: "Pomoc zdalna — 60 minut", price: "100 zł" },
    { name: "Wizyta na miejscu", price: "od 150 zł" }, { name: "Każda kolejna rozpoczęta godzina", price: "100 zł" },
  ] },
];

const planFeatures = ["Wsparcie użytkowników", "Komputery i systemy", "Drukarki i urządzenia", "Konta i poczta", "Podstawowa administracja M365 / Google Workspace", "Diagnostyka sieci i Wi-Fi", "Doradztwo IT"];
const plans = [
  { name: "Start", price: "790 zł", size: "do 5 stanowisk", hours: "2 h wsparcia", response: "do następnego dnia roboczego", onboarding: "490 zł", description: "Stała podstawa dla małego biura, które chce mieć jedno miejsce do zgłaszania problemów.", documentation: "Podstawowa dokumentacja środowiska", recommended: false },
  { name: "Biznes", price: "1290 zł", size: "do 10 stanowisk", hours: "5 h wsparcia", response: "do 8 godzin roboczych", onboarding: "790 zł", description: "Regularna opieka i szybsza reakcja dla firmy, w której sprawne IT wspiera codzienną pracę.", documentation: "Dokumentacja środowiska", recommended: true },
  { name: "Partner", price: "od 1990 zł", size: "do 15 stanowisk", hours: "8 h lub indywidualnie", response: "ustalany indywidualnie", onboarding: "od 990 zł", description: "Najszersza opieka dla organizacji, która potrzebuje elastycznego zakresu i priorytetu obsługi.", documentation: "Rozszerzona dokumentacja środowiska", recommended: false },
] as const;
const rules = ["Abonament nie obejmuje nielimitowanego helpdesku.", "Pracę zdalną rozliczamy co 15 minut, a pracę na miejscu co 30 minut.", "Niewykorzystana pula godzin nie przechodzi na kolejny miesiąc.", "Po wykorzystaniu puli: 190 zł/h zdalnie i 230 zł/h na miejscu.", "Projekty, migracje, nowe biura, sieci, NAS, AV i większe wdrożenia wyceniamy osobno.", "Sprzęt, licencje, hosting, domeny i płatne usługi zewnętrzne nie są w cenie.", "Koszt dojazdu ustalamy przed wizytą."];

export function PricingContent() {
  const [audience, setAudience] = useState<Audience>("individual");
  return <div className="min-h-[100dvh] bg-[#060914] text-white"><Navbar />
    <main className="w-full max-w-full overflow-x-hidden pt-[72px]">
      <section className="relative overflow-hidden pb-14 pt-20 md:pb-20 md:pt-28"><div className="hero-ambient" aria-hidden="true" /><div className="site-shell relative">
        <p className="mb-7 flex items-center gap-3 text-sm font-medium tracking-[0.08em] text-blue-300"><span className="h-px w-10 bg-blue-400" />Jasne ceny. Uzgodniony zakres.</p>
        <h1 className="max-w-5xl text-balance text-[clamp(2.75rem,5.6vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.06em]">Wsparcie IT dopasowane do Ciebie.</h1>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">Wybierz pomoc dla domu albo poznaj zasady stałej obsługi firmy. Zakres i końcowy koszt zawsze potwierdzamy przed rozpoczęciem pracy.</p>
        <div className="mt-10 inline-grid w-full grid-cols-2 rounded-full border border-white/10 bg-[#090e1b]/90 p-1.5 sm:w-auto" role="tablist" aria-label="Wybierz rodzaj klienta">
          <AudienceButton active={audience === "individual"} onClick={() => setAudience("individual")} icon={House} label="Dla Ciebie" controls="individual-pricing" />
          <AudienceButton active={audience === "business"} onClick={() => setAudience("business")} icon={Briefcase} label="Dla firmy" controls="business-pricing" />
        </div>
      </div></section>
      {audience === "individual" ? <IndividualPricing /> : <BusinessPricing />}
      <section className="relative overflow-hidden bg-[#2f6df6] py-24 text-white md:py-32"><div className="contact-ambient" aria-hidden="true" /><div className="site-shell relative text-center">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.05em] md:text-6xl">Opowiedz, czego potrzebujesz.</h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-blue-100">Dobierzemy właściwy zakres pomocy i potwierdzimy koszt przed rozpoczęciem pracy.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"><Link href="/#kontakt" className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 font-semibold text-[#090d18] transition hover:bg-blue-50 sm:w-auto">Zapytaj o wycenę <ArrowRight className="ml-2 size-5" /></Link><a href={site.phoneHref} className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-4 font-semibold transition hover:bg-white/20 sm:w-auto"><Phone className="mr-2 size-5" weight="duotone" /> Skontaktuj się</a></div>
      </div></section>
    </main>
    <footer className="bg-[#040711] py-12"><div className="site-shell flex flex-col gap-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between"><p><span className="font-semibold text-slate-200">NortIT</span> — wsparcie IT w {site.area}.</p><div className="flex flex-wrap gap-x-8 gap-y-3"><Link href="/">Strona główna</Link><Link href="/#uslugi">Usługi</Link><Link href="/polityka-prywatnosci/">Prywatność</Link><Link href="/#kontakt">Kontakt</Link></div></div><div className="site-shell mt-10 border-t border-white/[0.08] pt-6 text-xs text-slate-600">© <span suppressHydrationWarning>{new Date().getFullYear()}</span> NortIT. Warszawa i okolice.</div></footer>
  </div>;
}

function AudienceButton({ active, onClick, icon: Icon, label, controls }: { active: boolean; onClick: () => void; icon: Icon; label: string; controls: string }) {
  return <button type="button" role="tab" aria-selected={active} aria-controls={controls} onClick={onClick} className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition md:px-8 ${active ? "bg-[#2f6df6] text-white shadow-[0_8px_30px_rgba(47,109,246,.3)]" : "text-slate-400 hover:text-white"}`}><Icon className="size-5" weight="duotone" /> {label}</button>;
}

function IndividualPricing() {
  return <div id="individual-pricing" role="tabpanel" className="pb-20 md:pb-28"><section className="site-shell">
    <div className="mb-9 flex flex-col gap-4 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between"><div><p className="text-sm font-medium uppercase tracking-[0.14em] text-blue-300">Dla Ciebie</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Serwis i pomoc domowa</h2></div><p className="max-w-xl text-slate-400">Konkretny problem, jasna cena i bezpośredni kontakt z osobą wykonującą usługę.</p></div>
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">{individualPricing.map((category) => <PriceCategory key={category.title} category={category} />)}</div>
  </section><section className="site-shell mt-8 grid gap-4 md:grid-cols-2">
    <div className="rounded-[1.5rem] border border-blue-400/25 bg-blue-500/10 p-6 md:p-7"><div className="flex gap-4"><ShieldCheck className="mt-0.5 size-6 shrink-0 text-blue-300" weight="duotone" /><div><h3 className="font-semibold">Diagnostyka 0 zł przy większej naprawie</h3><p className="mt-2 text-sm leading-relaxed text-slate-300">Opłaty za diagnostykę nie doliczamy, jeśli zlecona naprawa kosztuje minimum 200 zł.</p></div></div></div>
    <div className="rounded-[1.5rem] border border-white/10 bg-[#090e1b] p-6 md:p-7"><div className="flex gap-4"><Info className="mt-0.5 size-6 shrink-0 text-blue-300" weight="duotone" /><p className="text-sm leading-relaxed text-slate-400"><strong className="text-white">Ważne:</strong> ceny są orientacyjne. Końcowy koszt uzgadniamy przed pracą. Części, sprzęt i licencje są rozliczane osobno.</p></div></div>
  </section></div>;
}

function PriceCategory({ category }: { category: Category }) { const Icon = category.icon; return <section className="flex flex-col rounded-[1.75rem] border border-white/10 bg-[#0d1220] p-6 transition hover:border-blue-400/30 md:p-8"><div className="mb-5 flex items-start gap-4 border-b border-white/10 pb-5"><span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.03]"><Icon className="size-5 text-blue-300" weight="duotone" /></span><div><h3 className="text-xl font-semibold tracking-[-0.03em]">{category.title}</h3><p className="mt-1 text-sm leading-relaxed text-slate-500">{category.description}</p></div></div><ul className="divide-y divide-white/[0.08]">{category.items.map((item) => <li key={item.name} className="flex items-start justify-between gap-4 py-3.5 text-sm md:text-base"><span className="leading-snug text-slate-300">{item.name}</span><span className="shrink-0 text-right font-semibold text-blue-200">{item.price}</span></li>)}</ul></section>; }

function BusinessPricing() {
  return <div id="business-pricing" role="tabpanel" className="pb-20 md:pb-28"><section className="site-shell">
    <div className="mb-9 border-b border-white/10 pb-8"><p className="text-sm font-medium uppercase tracking-[0.14em] text-blue-300">Stała opieka IT</p><h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Mniej przestojów. Jedna osoba, która zna Twoje środowisko.</h2><p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">Pakiety dla małych firm bez własnego działu IT. Zyskujesz bieżącą pomoc, przewidywalne koszty i priorytet zależny od wybranego planu.</p></div>
    <div className="grid gap-6 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative flex flex-col rounded-[1.75rem] border p-6 md:p-8 ${plan.recommended ? "border-blue-400/60 bg-[linear-gradient(180deg,rgba(47,109,246,.17),#0d1220_42%)] shadow-[0_24px_70px_rgba(18,66,170,.18)]" : "border-white/10 bg-[#0d1220]"}`}>
      {plan.recommended ? <span className="mb-5 w-fit rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em]">Najczęściej wybierany</span> : null}<h3 className="text-2xl font-semibold">{plan.name}</h3><p className="mt-3 min-h-[4.5rem] text-sm leading-relaxed text-slate-400">{plan.description}</p><p className="mt-7 text-4xl font-semibold tracking-[-0.05em]">{plan.price}<span className="ml-1 text-sm font-normal tracking-normal text-slate-500">/ mies.</span></p>
      <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/10 p-4 text-sm"><div><span className="block text-slate-500">Skala</span><strong className="mt-1 block text-slate-200">{plan.size}</strong></div><div><span className="block text-slate-500">Pula</span><strong className="mt-1 block text-slate-200">{plan.hours}</strong></div></div>
      <ul className="mt-6 flex-1 space-y-3 text-sm text-slate-300">{planFeatures.map((feature) => <li key={feature} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-blue-300" weight="bold" />{feature}</li>)}<li className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-blue-300" weight="bold" />{plan.documentation}</li></ul>
      <div className="mt-7 border-t border-white/10 pt-5 text-sm"><p className="text-slate-400">Czas reakcji: <strong className="text-slate-200">{plan.response}</strong></p><p className="mt-2 text-slate-400">Wdrożenie: <strong className="text-slate-200">{plan.onboarding}</strong></p></div><Link href="/#kontakt" className={`focus-ring mt-6 inline-flex items-center justify-center rounded-full px-5 py-3 font-semibold transition ${plan.recommended ? "bg-[#2f6df6] hover:bg-blue-500" : "border border-white/15 hover:bg-white/10"}`}>Porozmawiajmy <ArrowRight className="ml-2 size-4" /></Link>
    </article>)}</div><p className="mt-5 text-center text-sm text-blue-200"><strong>Opłata wdrożeniowa 0 zł</strong> przy współpracy na minimum 3 miesiące.</p>
  </section>
  <section className="site-shell mt-16"><div className="grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#090e1b] lg:grid-cols-2"><div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r md:p-10"><p className="text-sm font-medium uppercase tracking-[0.14em] text-blue-300">Jednorazowe wsparcie</p><h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Pomoc bez abonamentu</h3><p className="mt-4 max-w-lg leading-relaxed text-slate-400">Dobre rozwiązanie przy pojedynczym problemie, przygotowaniu stanowiska lub doraźnym wsparciu zespołu.</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><Rate label="Wsparcie zdalne" value="220 zł/h" /><Rate label="Wsparcie na miejscu" value="260 zł/h" /></div></div><div className="p-7 md:p-10"><p className="text-sm font-medium uppercase tracking-[0.14em] text-blue-300">Większy zakres</p><h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">Projekty wyceniamy osobno</h3><p className="mt-4 leading-relaxed text-slate-400">Migracje poczty i domen, nowe biura, rozbudowa sieci, NAS, backup, okablowanie, sale konferencyjne i AV oraz większe wdrożenia otrzymują osobny zakres, harmonogram i wycenę.</p></div></div></section>
  <section className="site-shell mt-8 grid gap-6 lg:grid-cols-[1.25fr_.75fr]"><div className="rounded-[1.75rem] border border-white/10 bg-[#0d1220] p-7 md:p-9"><h3 className="text-2xl font-semibold">Zasady rozliczeń</h3><ul className="mt-6 grid gap-x-8 gap-y-4 md:grid-cols-2">{rules.map((rule) => <li key={rule} className="flex gap-3 text-sm leading-relaxed text-slate-400"><Check className="mt-0.5 size-4 shrink-0 text-blue-300" weight="bold" />{rule}</li>)}</ul></div><div className="rounded-[1.75rem] border border-blue-400/25 bg-blue-500/10 p-7 md:p-9"><Clock className="size-7 text-blue-300" weight="duotone" /><h3 className="mt-5 text-2xl font-semibold">Czas reakcji</h3><p className="mt-4 text-sm leading-relaxed text-slate-300">To czas, w którym potwierdzimy zgłoszenie i rozpoczniemy jego obsługę — <strong className="text-white">nie jest gwarantowanym czasem rozwiązania</strong>. Termin usunięcia problemu zależy od jego złożoności i dostępności części lub usług zewnętrznych.</p></div></section>
  </div>;
}

function Rate({ label, value }: { label: string; value: string }) { return <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><span className="block text-sm text-slate-500">{label}</span><strong className="mt-2 block text-xl text-blue-200">{value}</strong></div>; }

