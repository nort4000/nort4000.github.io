import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  FileCheck2,
  HardDrive,
  Headphones,
  Mail,
  MapPin,
  MonitorCog,
  Network,
  Phone,
  ShieldCheck,
  Sparkles,
  UserPlus,
  WifiOff,
  Wrench,
} from "lucide-react";
import { ContactForm } from "./contact-form";
import { Logo } from "./logo";
import { HeroReveal, Lift, MediaReveal, Reveal } from "./motion";
import { site } from "@/lib/site";

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
  items: string[];
};

const services: Service[] = [
  {
    icon: Wrench,
    title: "Bieżące problemy IT",
    text: "Diagnozuję awarie komputerów, systemu, poczty i podstawowych usług używanych w firmie.",
    items: ["Komputery", "Laptopy", "Windows", "Poczta"],
  },
  {
    icon: Network,
    title: "Sieć, kopie zapasowe i porządek",
    text: "Pomagam uporządkować Wi-Fi, dostęp do danych, kopie zapasowe i najważniejsze elementy firmowej infrastruktury.",
    items: ["LAN i Wi-Fi", "Kopie zapasowe", "Dostępy", "Dokumentacja"],
  },
  {
    icon: MonitorCog,
    title: "Stanowiska pracy",
    text: "Konfiguruję komputer, aplikacje, pocztę i dostęp do zasobów, aby nowa osoba mogła rozpocząć pracę.",
    items: ["Sprzęt", "Microsoft 365", "Konta", "Migracja danych"],
  },
];

const scenarios = [
  [UserPlus, "Nowa osoba w zespole", "Kompletne stanowisko, konta, poczta i dostęp do firmowych zasobów."],
  [WifiOff, "Sieć spowalnia pracę", "Diagnostyka LAN i Wi-Fi oraz uporządkowanie urządzeń i konfiguracji."],
  [Building2, "Nowe biuro lub przeprowadzka", "Plan infrastruktury, relokacja sprzętu i ponowne uruchomienie stanowisk."],
  [ShieldCheck, "Brak pewnej kopii zapasowej", "Sprawdzenie kopii danych, zasilania awaryjnego i dostępu do zasobów."],
  [Headphones, "Problemy ciągle wracają", "Bezpośredni kontakt ze wsparciem, monitoring i plan usuwania przyczyn."],
  [Network, "IT wymaga uporządkowania", "Inwentaryzacja, dokumentacja i lista działań według priorytetu."],
] as const;

const cooperationModels = [
  {
    icon: Wrench,
    title: "Jednorazowa interwencja",
    text: "Jedna konkretna awaria, konfiguracja lub zadanie do wykonania.",
    detail: "Najpierw ustalamy zakres, termin i koszt. Bez długiej umowy.",
  },
  {
    icon: Headphones,
    title: "Regularne wsparcie",
    text: "Powtarzające się zadania dla małej lub średniej firmy bez własnego informatyka.",
    detail: "Zakres i dostępność ustalamy z góry — głównie po 16:00 i w umówionych terminach.",
  },
] as const;

const individualServices = [
  [Wrench, "Diagnostyka i naprawa", "Komputery i laptopy, które zwalniają, przegrzewają się albo przestały działać prawidłowo."],
  [HardDrive, "Modernizacja sprzętu", "Dobór i montaż dysku, pamięci lub innych podzespołów, jeśli naprawa ma ekonomiczny sens."],
  [MonitorCog, "System i dane", "Instalacja systemu, konfiguracja programów oraz przenoszenie danych na nowe urządzenie."],
  [WifiOff, "Domowe Wi-Fi", "Pomoc przy słabym zasięgu, konfiguracji routera i podstawowych problemach z siecią."],
] as const;

const process = [
  ["Kontakt", "Krótko opisujesz awarię, potrzebę lub planowane wdrożenie."],
  ["Diagnoza", "Sprawdzam przyczynę, ryzyko i wpływ problemu na pracę firmy."],
  ["Wycena", "Otrzymujesz jasny zakres prac, koszt i proponowany termin."],
  ["Realizacja", "Naprawiam, konfiguruję lub wdrażam uzgodnione rozwiązanie."],
  ["Opieka", "Dokumentuję wykonane prace i pozostaję kontaktem do firmowego IT."],
] as const;

const reasons = [
  [Clock3, "Szybka reakcja", "Pomoc zdalna lub dojazd na terenie Warszawy i okolic."],
  [CheckCircle2, "Terminowość", "Ustalam realny termin i informuję o postępie prac."],
  [HardDrive, "Doświadczenie", "Łączę serwis sprzętu, sieci, systemy i administrację."],
  [ShieldCheck, "Bezpieczeństwo", "Uwzględniam dane, dostęp, kopie zapasowe i ciągłość pracy."],
  [Headphones, "Stała opieka", "Po wdrożeniu nadal masz bezpośredni kontakt do wsparcia."],
  [Sparkles, "Indywidualne podejście", "Zakres usługi dopasowuję do środowiska i budżetu firmy."],
] as const;

const standards = [
  [CheckCircle2, "Zakres przed rozpoczęciem", "Wiesz, co zostanie wykonane, jaki jest kolejny krok i kiedy można rozpocząć pracę."],
  [ShieldCheck, "Dostęp tylko wtedy, gdy jest potrzebny", "Uprawnienia i dane są traktowane jako element odpowiedzialności, nie techniczny detal."],
  [FileCheck2, "Dokumentacja zmian", "Po większych pracach otrzymujesz uporządkowaną informację o wykonanym zakresie."],
  [Clock3, "Informacja o postępie", "Jeśli zakres lub termin się zmienia, dowiadujesz się o tym przed kolejnym etapem."],
] as const;

export const faqItems = [
  ["Dla jakich firm jest NortIT?", "Skupiam się na małych i średnich firmach, które potrzebują pomocy przy bieżących problemach, stanowiskach pracy, sieci lub porządkowaniu IT."],
  ["Czy pomagasz również osobom prywatnym?", "Tak. Przyjmuję wybrane zlecenia dotyczące komputerów, laptopów, modernizacji, przenoszenia danych i domowego Wi-Fi. Zakres oraz termin zawsze ustalam przed rozpoczęciem."],
  ["Kiedy realizujesz zlecenia?", "Obecnie rozwijam NortIT równolegle z pracą etatową. Konsultacje i planowane prace realizuję głównie po 16:00 oraz w terminach uzgodnionych indywidualnie."],
  ["Czy możliwa jest pomoc zdalna?", "Tak, jeśli problem można bezpiecznie rozwiązać bez dojazdu. W pozostałych przypadkach ustalam wizytę w Warszawie lub okolicach."],
  ["Jak wygląda rozliczenie?", "Przed rozpoczęciem potwierdzam zakres, przewidywany koszt i termin. Możemy rozliczyć pojedyncze zadanie albo ustalić prosty zakres regularnego wsparcia."],
] as const;

const projects = [
  {
    title: "Serwerownie i szafy rack",
    copy: "Montaż, porządkowanie i dokumentacja infrastruktury.",
    image: "/images/infrastruktura.jpg",
    alt: "Profesjonalna serwerownia z uporządkowaną szafą Rack",
    className: "md:col-span-7",
  },
  {
    title: "Sale konferencyjne",
    copy: "Spójny obraz, dźwięk i wygodne prowadzenie spotkań hybrydowych.",
    image: "/images/sala-konferencyjna.jpg",
    alt: "Nowoczesna sala konferencyjna przygotowana do spotkań hybrydowych",
    className: "md:col-span-5 md:pt-16",
  },
  {
    title: "Stanowiska pracy",
    copy: "Dobór, konfiguracja i standaryzacja sprzętu dla zespołu.",
    image: "/images/stanowisko-pracy.jpg",
    alt: "Kompletne i ergonomiczne stanowisko pracy dla firmy",
    className: "md:col-span-5",
  },
  {
    title: "Okablowanie strukturalne",
    copy: "Organizacja połączeń, patch paneli i punktów sieciowych.",
    image: "/images/okablowanie.jpg",
    alt: "Instalacja przewodów sieciowych w profesjonalnym patch panelu",
    className: "md:col-span-7 md:-mt-8",
  },
  {
    title: "Relokacje IT",
    copy: "Bezpieczne przeniesienie sprzętu, oznaczenie i ponowne uruchomienie.",
    image: "/images/relokacja-it.jpg",
    alt: "Sprzęt komputerowy zabezpieczony do relokacji biura",
    className: "md:col-span-7",
  },
  {
    title: "Kopie zapasowe i bezpieczeństwo",
    copy: "Lokalne kopie danych, UPS i kontrola dostępu do firmowych zasobów.",
    image: "/images/backup-bezpieczenstwo.jpg",
    alt: "Kompaktowa infrastruktura kopii zapasowych, sieci i zasilania awaryjnego",
    className: "md:col-span-5 md:pt-16",
  },
] as const;

function SectionHeading({
  eyebrow,
  title,
  copy,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  className?: string;
}) {
  return (
    <Reveal className={`max-w-3xl ${className}`}>
      {eyebrow ? <p className="mb-4 text-sm font-semibold text-blue-400">{eyebrow}</p> : null}
      <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">{copy}</p> : null}
    </Reveal>
  );
}

export function Hero() {
  return (
    <section id="start" className="relative min-h-[100dvh] overflow-hidden border-b hairline pt-[72px]">
      <div className="page-shell grid min-h-[calc(100dvh-72px)] items-center gap-10 py-8 lg:grid-cols-12 lg:py-10">
        <HeroReveal className="relative lg:col-span-5">
          <p className="mb-5 text-sm font-semibold text-blue-300">Wsparcie IT dla MŚP | Warszawa</p>
          <h1 className="text-balance text-[clamp(2.8rem,5.3vw,5.2rem)] font-semibold leading-[0.98] tracking-[-0.06em]">
            Spokojniejsze IT dla małej i średniej firmy.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
            Pomagam rozwiązywać bieżące problemy, przygotowywać stanowiska pracy i porządkować firmowe IT — osobiście, w jasno ustalonym zakresie.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={site.phoneHref}
              className="focus-ring inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#2563EB] px-6 py-3.5 font-semibold text-white shadow-[0_18px_60px_rgba(37,99,235,.26)] transition hover:bg-blue-500 active:translate-y-px"
            >
              <Phone className="mr-2 size-4" aria-hidden="true" /> Zadzwoń
            </a>
            <a
              href="#kontakt"
              className="focus-ring inline-flex items-center justify-center whitespace-nowrap rounded-full border hairline bg-white/[0.04] px-6 py-3.5 font-semibold text-white transition hover:bg-white/[0.08] active:translate-y-px"
            >
              Opisz zadanie <ArrowRight className="ml-2 size-4" aria-hidden="true" />
            </a>
          </div>
        </HeroReveal>

        <MediaReveal className="relative lg:col-span-7 lg:-mr-20">
          <div className="absolute -inset-12 -z-10 rounded-full bg-blue-600/15 blur-[90px]" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border hairline bg-[#0F172A] shadow-[0_28px_90px_rgba(2,6,23,.55)] lg:aspect-[1.16]">
            <Image
              src="/hero-it.jpg"
              alt="Nowoczesna infrastruktura IT i serwerownia w biurze w Warszawie"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 62vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/30 via-transparent to-transparent" />
            <div className="hero-diagnostic" aria-hidden="true">
              <span className="hero-scan" />
              <span className="hero-network-link hero-network-link-one"><i /></span>
              <span className="hero-network-link hero-network-link-two"><i /></span>
              <span className="hero-network-link hero-network-link-three"><i /></span>
              <span className="hero-network-node hero-network-node-one"><i /></span>
              <span className="hero-network-node hero-network-node-two"><i /></span>
              <span className="hero-network-node hero-network-node-three"><i /></span>
              <div className="hero-diagnostic-status">
                <span className="hero-status-light" />
                <span>
                  <b>Systemy pod kontrolą</b>
                  <small>Stan infrastruktury</small>
                </span>
                <em>OK</em>
              </div>
            </div>
          </div>
        </MediaReveal>
      </div>
    </section>
  );
}

export function TrustStrip() {
  const items = [
    [Building2, "Małe i średnie firmy"],
    [Clock3, "Głównie po 16:00"],
    [MapPin, "Warszawa i okolice"],
    [ShieldCheck, "Bezpośredni kontakt"],
  ] as const;

  return (
    <section aria-label="Najważniejsze informacje" className="border-b hairline">
      <div className="page-shell grid grid-cols-2 md:grid-cols-4">
        {items.map(([Icon, label]) => (
          <div key={label} className="flex min-h-24 items-center gap-3 border-r hairline py-5 pr-3 last:border-r-0 even:border-r-0 md:even:border-r md:last:border-r-0">
            <Icon className="size-5 shrink-0 text-blue-400" strokeWidth={1.7} aria-hidden="true" />
            <span className="text-sm font-medium text-slate-200">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="uslugi" className="section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="W czym mogę pomóc"
          title="Praktyczna pomoc dla małych i średnich firm."
          copy="Podejmuję się zadań, które mogę wykonać osobiście i odpowiedzialnie. Dostępność oraz zakres prac ustalam z góry."
          className="mb-12"
        />

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <Lift className="h-full rounded-[18px] border hairline bg-[#111827] p-7 transition-colors hover:border-blue-500/30 md:p-8">
                  <service.icon className="size-7 text-blue-400" strokeWidth={1.7} aria-hidden="true" />
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">{service.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-slate-300">{service.text}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span key={item} className="rounded-full border hairline bg-white/[0.025] px-3 py-1.5 text-xs text-slate-300">
                        {item}
                      </span>
                    ))}
                  </div>
              </Lift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="o-mnie" className="border-y hairline bg-[#0F172A]/45 section-space">
      <div className="page-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
        <div>
          <p className="text-sm font-semibold text-blue-400">O mnie i NortIT</p>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
            Buduję tę firmę krok po kroku.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-slate-300 md:text-lg">
          <p>
            NortIT tworzę jako małe, bezpośrednie wsparcie IT dla firm, które nie potrzebują rozbudowanego działu informatycznego, ale chcą mieć zaufaną osobę do konkretnych zadań.
          </p>
          <p>
            Obecnie rozwijam NortIT równolegle z pracą na etacie, dlatego konsultacje i zaplanowane prace realizuję głównie po 16:00, w terminach ustalonych indywidualnie.
          </p>
          <p className="border-l-2 border-blue-400 pl-5 text-white">
            Nie biorę więcej zleceń, niż mogę osobiście i odpowiedzialnie poprowadzić. Zależy mi na jasnych ustaleniach, uczciwej ocenie problemu i długofalowym zaufaniu.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Needs() {
  return (
    <section id="dla-firm" className="border-y hairline bg-[#0F172A]/45 section-space">
      <div className="page-shell">
        <SectionHeading
          title="Rozpoznajesz któryś z tych problemów?"
          copy="Najczęściej zaczynamy od konkretnej sytuacji, która utrudnia pracę. Dopiero później dobieramy technologię i zakres działań."
          className="mb-12"
        />

        <div className="grid gap-x-10 md:grid-cols-2">
          {scenarios.map(([Icon, title, copy], index) => (
            <Reveal key={title} delay={(index % 2) * 0.04} className="border-t hairline py-7">
              <div className="grid grid-cols-[2.75rem_1fr] gap-4">
                <Icon className="mt-0.5 size-6 text-blue-400" strokeWidth={1.7} aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{copy}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Cooperation() {
  return (
    <section id="wspolpraca" className="section-space">
      <div className="page-shell">
        <SectionHeading
          title="Prosta współpraca i jasne ustalenia."
          copy="Na początek możemy rozwiązać jedno zadanie albo ustalić stały, uzgodniony zakres wsparcia."
          className="mb-12"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {cooperationModels.map((model, index) => (
            <Reveal key={model.title} delay={index * 0.05}>
              <Lift className={`flex h-full flex-col rounded-[18px] border p-7 md:p-9 ${index === 0 ? "border-blue-400/25 bg-[#0d1730]" : "hairline bg-[#111827]"}`}>
                <model.icon className="size-7 text-blue-300" strokeWidth={1.7} aria-hidden="true" />
                <div className="mt-10">
                  <h3 className="text-2xl font-semibold tracking-[-0.03em]">{model.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-slate-300">{model.text}</p>
                  <p className="mt-5 border-t hairline pt-4 text-sm leading-relaxed text-slate-400">{model.detail}</p>
                </div>
              </Lift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Individuals() {
  return (
    <section id="klienci-indywidualni" className="border-y hairline bg-[#0F172A]/45 py-20 md:py-28">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold text-blue-400">Także dla klientów indywidualnych</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl">
              Domowy komputer też zasługuje na porządną pomoc.
            </h2>
            <p className="mt-5 max-w-lg leading-relaxed text-slate-300">
              Przyjmuję wybrane, jasno określone zlecenia. Najpierw krótko oceniam problem, a przed rozpoczęciem potwierdzam zakres, termin i przewidywany koszt.
            </p>
            <div className="mt-7 inline-flex items-center gap-3 rounded-full border hairline bg-white/[0.035] px-4 py-2 text-sm text-slate-300">
              <Clock3 className="size-4 text-blue-400" aria-hidden="true" /> Po 16:00, w umówionym terminie
            </div>
          </div>

          <div>
            <div className="grid gap-x-8 md:grid-cols-2">
              {individualServices.map(([Icon, title, copy]) => (
                <article key={title} className="border-t hairline py-6">
                  <div className="flex gap-4">
                    <span className="grid size-10 shrink-0 place-items-center rounded-[12px] bg-blue-500/10 text-blue-400">
                      <Icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-white">{title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">{copy}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-4 border-t hairline pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-md text-sm leading-relaxed text-slate-400">
                Zlecenia przyjmuję po wcześniejszym umówieniu i od razu podaję realny termin realizacji.
              </p>
              <a
                href="#kontakt"
                className="focus-ring inline-flex shrink-0 items-center justify-center rounded-full bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 active:translate-y-px"
              >
                Opisz problem <ArrowRight className="ml-2 size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <SectionHeading
          title="Wiesz, co dzieje się na każdym etapie."
          copy="Krótki proces, konkretna komunikacja i jasna odpowiedzialność od pierwszego kontaktu do zakończenia prac."
          className="mb-16"
        />

        <ol className="relative grid gap-10 md:grid-cols-5 md:gap-5">
          <span className="absolute left-0 right-0 top-5 hidden h-px bg-white/[0.1] md:block" aria-hidden="true" />
          {process.map(([title, copy], index) => (
            <li key={title} className="relative grid grid-cols-[2.75rem_1fr] gap-4 md:block">
              <span className="relative z-10 grid size-10 place-items-center rounded-full border border-blue-400/30 bg-[#050816] text-sm font-semibold text-blue-300">
                {index + 1}
              </span>
              <div className="md:mt-8">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{copy}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Reasons() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="page-shell">
        <div className="overflow-hidden rounded-[18px] border border-blue-400/20 bg-[linear-gradient(135deg,rgba(37,99,235,.2),rgba(15,23,42,.94)_48%)] p-7 md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <Reveal>
              <ShieldCheck className="size-9 text-blue-300" strokeWidth={1.6} aria-hidden="true" />
              <h2 className="mt-8 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl">
                Masz informatyka, nie numer zgłoszenia.
              </h2>
              <p className="mt-5 leading-relaxed text-slate-300">
                Rozmawiasz bezpośrednio z osobą, która zna sprawę, wykonuje prace i odpowiada za kolejny krok.
              </p>
            </Reveal>

            <div className="grid gap-x-8 md:grid-cols-2">
              {reasons.map(([Icon, title, copy], index) => (
                <Reveal key={title} delay={index * 0.04} className="border-t hairline py-6">
                  <div className="flex gap-4">
                    <Icon className="mt-0.5 size-5 shrink-0 text-blue-400" strokeWidth={1.7} aria-hidden="true" />
                    <div>
                      <h3 className="font-semibold">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{copy}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="realizacje" className="border-y hairline section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Obszary realizacji"
          title="Porządek w IT widać w codziennej pracy."
          copy="Każde wdrożenie zaczynam od obecnego środowiska, liczby użytkowników i planów rozwoju firmy."
          className="mb-14"
        />

        <div className="grid gap-x-5 gap-y-10 md:grid-cols-12 md:gap-y-14">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 0.06} className={project.className}>
              <figure className="group">
                <div className="relative aspect-[3/2] overflow-hidden rounded-[18px] border hairline bg-[#111827]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 58vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="mt-5 border-t hairline pt-4">
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-white">{project.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-400">{project.copy}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Standards() {
  return (
    <section className="section-space">
      <div className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <FileCheck2 className="size-8 text-blue-400" strokeWidth={1.7} aria-hidden="true" />
            <h2 className="mt-7 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl">
              Przejrzyste zasady zamiast obietnic.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-slate-300">
              Dobra obsługa IT to również komunikacja, odpowiedzialność i porządek po zakończeniu prac.
            </p>
          </Reveal>

          <div className="grid gap-x-8 md:grid-cols-2">
            {standards.map(([Icon, title, copy], index) => (
              <Reveal key={title} delay={index * 0.04} className="border-t hairline py-7">
                <Icon className="size-6 text-blue-400" strokeWidth={1.7} aria-hidden="true" />
                <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-y hairline bg-[#0F172A]/45 section-space">
      <div className="page-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-5xl">
            Zanim napiszesz.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-slate-300">
            Najważniejsze informacje o zakresie i obecnej dostępności NortIT.
          </p>
        </Reveal>

        <div>
          {faqItems.map(([question, answer], index) => (
            <Reveal key={question} delay={(index % 3) * 0.03}>
              <details suppressHydrationWarning className="group border-t hairline py-1 last:border-b">
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 rounded-[12px] py-6 text-left text-lg font-semibold text-white marker:hidden">
                  {question}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border hairline text-blue-300 transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 pr-12 text-sm leading-relaxed text-slate-400 md:text-base">{answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="pb-24 md:pb-36">
      <div className="page-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-[18px] bg-[#2563EB] px-7 py-14 md:px-14 md:py-20">
            <div className="max-w-3xl">
              <h2 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.05em] md:text-6xl">
                Potrzebujesz wsparcia IT?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100">
                Opisz problem lub plan. Otrzymasz konkretny kolejny krok i uczciwą ocenę zakresu prac.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={site.phoneHref}
                  className="focus-ring inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white px-6 py-3.5 font-semibold text-[#050816] transition hover:bg-blue-50 active:translate-y-px"
                >
                  <Phone className="mr-2 size-4" aria-hidden="true" /> Zadzwoń
                </a>
                <a
                  href="#kontakt"
                  className="focus-ring inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/25 bg-blue-700/35 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700/55 active:translate-y-px"
                >
                  Wyceń usługę <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="kontakt" className="border-t hairline bg-[#0F172A]/35 section-space">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Kontakt"
          title="Opisz jedno konkretne zadanie."
          copy="Napisz, czego potrzebujesz i jaki termin byłby pomocny. Odpowiem, czy mogę pomóc, i zaproponuję kolejny krok."
          className="mb-12"
        />

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <div className="space-y-5">
              <ContactRow icon={Phone} label="Telefon" value={site.phone} href={site.phoneHref} />
              <ContactRow icon={Mail} label="E-mail" value={site.email} href={site.emailHref} />
              <ContactRow icon={MapPin} label="Obszar działania" value={site.area} href={site.mapsUrl} external />
            </div>

            <div className="mt-9 rounded-[18px] border hairline bg-[radial-gradient(circle_at_80%_10%,rgba(37,99,235,.24),transparent_36%),#111827] p-6 md:p-7">
              <MapPin className="size-6 text-blue-400" strokeWidth={1.7} aria-hidden="true" />
              <h3 className="mt-8 text-lg font-semibold">Dostępność</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                Zwykle po 16:00 i w umówionych terminach. Pomoc zdalna lub dojazd na terenie Warszawy i okolic — zależnie od zadania.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="focus-ring flex items-center gap-4 rounded-[12px]"
    >
      <span className="grid size-12 place-items-center rounded-[12px] border border-blue-400/20 bg-blue-500/10 text-blue-400">
        <Icon className="size-5" strokeWidth={1.7} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs text-slate-400">{label}</span>
        <span className="mt-1 block font-semibold text-white">{value}</span>
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t hairline pb-28 pt-10 lg:pb-10">
      <div className="page-shell">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Bezpośrednie wsparcie IT dla małych i średnich firm w Warszawie i okolicach.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            <p className="mb-3 font-semibold text-white">Kontakt</p>
            <a className="focus-ring block rounded py-1 hover:text-white" href={site.phoneHref}>{site.phone}</a>
            <a className="focus-ring block rounded py-1 hover:text-white" href={site.emailHref}>{site.email}</a>
            <p className="py-1">{site.area}</p>
          </div>

          <div className="text-sm text-slate-400">
            <p className="mb-3 font-semibold text-white">Informacje</p>
            <Link className="focus-ring block rounded py-1 hover:text-white" href="/polityka-prywatnosci/">
              Polityka prywatności
            </Link>
            <a className="focus-ring block rounded py-1 hover:text-white" href="#uslugi">Usługi</a>
            <a className="focus-ring block rounded py-1 hover:text-white" href="#o-mnie">O mnie</a>
            <a className="focus-ring block rounded py-1 hover:text-white" href="#kontakt">Kontakt</a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t hairline pt-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} NortIT. Wszelkie prawa zastrzeżone.</p>
          <p>Warszawa i okolice · terminy po wcześniejszym umówieniu.</p>
        </div>
      </div>
    </footer>
  );
}

export function MobileContactBar() {
  return (
    <div className="mobile-contact-bar fixed inset-x-3 z-30 grid grid-cols-2 gap-2 rounded-[18px] border hairline bg-[#050816]/92 p-2 shadow-[0_18px_60px_rgba(2,6,23,.62)] backdrop-blur-xl lg:hidden">
      <a
        href={site.phoneHref}
        className="focus-ring inline-flex items-center justify-center rounded-[12px] bg-[#2563EB] px-4 py-3 text-sm font-semibold text-white active:translate-y-px"
      >
        <Phone className="mr-2 size-4" aria-hidden="true" /> Zadzwoń
      </a>
      <a
        href="#kontakt"
        className="focus-ring inline-flex items-center justify-center rounded-[12px] border hairline bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white active:translate-y-px"
      >
        Opisz zadanie
      </a>
    </div>
  );
}
