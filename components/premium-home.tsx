"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  CaretRight,
  Check,
  Clock,
  DesktopTower,
  Envelope,
  HardDrive,
  List,
  Network,
  Phone,
  ShieldCheck,
  WifiHigh,
  Wrench,
  X,
} from "@phosphor-icons/react";
import { useRef, useState } from "react";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

const services = [
  {
    icon: Wrench,
    title: "Bieżące wsparcie IT",
    short: "Problemy ze sprzętem, oprogramowaniem, kontami, pocztą i dostępem do firmowych zasobów.",
    detail: "Pomagam pracownikom rozwiązywać problemy ze sprzętem, oprogramowaniem, kontami, pocztą i dostępem do firmowych zasobów.",
    image: "/assets/support-diagnostics.png",
    items: ["Komputery i laptopy", "Oprogramowanie", "Poczta", "Pomoc zdalna"],
  },
  {
    icon: DesktopTower,
    title: "Komputery i stanowiska pracy",
    short: "Nowy komputer, potrzebne programy, konta i urządzenia gotowe do pracy.",
    detail: "Przygotowuję nowe komputery i stanowiska pracy, instaluję potrzebne oprogramowanie, konfiguruję konta i urządzenia oraz dbam o to, aby pracownik mógł od razu rozpocząć pracę.",
    image: "/assets/workstation-setup.png",
    items: ["Sprzęt", "Microsoft 365", "Konta", "Migracja danych"],
  },
  {
    icon: Network,
    title: "Sieci i infrastruktura",
    short: "Sieć, Wi-Fi, okablowanie i dostęp do firmowych zasobów uporządkowane.",
    detail: "Konfiguruję sieci, urządzenia i Wi-Fi, pomagam uporządkować okablowanie oraz rozwiązuję problemy z dostępem do firmowych zasobów.",
    image: "/assets/network-infrastructure.png",
    items: ["LAN i Wi-Fi", "Urządzenia", "Okablowanie", "Dostępy"],
  },
  {
    icon: HardDrive,
    title: "Pomoc komputerowa",
    short: "Problemy ze sprzętem i oprogramowaniem komputerów oraz laptopów.",
    detail: "Diagnozuję i rozwiązuję problemy ze sprzętem oraz oprogramowaniem komputerów i laptopów. Przed wykonaniem większej naprawy przedstawiam rozwiązanie i przewidywany koszt.",
    image: "/assets/home-it-support.png",
    items: ["Diagnostyka", "Naprawa sprzętu", "Czyszczenie sprzętu", "Domowe Wi-Fi"],
  },
] as const;

const principles = [
  {
    title: "Jasny zakres przed rozpoczęciem",
    copy: "Wiesz, co zostanie wykonane, ile może kosztować praca i jaki jest kolejny krok.",
    image: "/assets/clear-scope.png",
  },
  {
    title: "Realny termin zamiast pustej obietnicy",
    copy: "Z góry ustalam dostępność i realny termin, żebyś wiedział, kiedy możesz liczyć na rozwiązanie problemu.",
    image: "/assets/realistic-schedule.png",
  },
  {
    title: "Bezpośredni kontakt z wykonawcą",
    copy: "Rozmawiasz z osobą, która zna sprawę, wykonuje pracę i odpowiada za uzgodniony rezultat.",
    image: "/assets/direct-contact.png",
  },
] as const;

const individualItems = [
  [Wrench, "Diagnostyka komputerów i laptopów"],
  [Wrench, "Naprawa i czyszczenie sprzętu"],
  [HardDrive, "Modernizacja sprzętu i przenoszenie danych"],
  [DesktopTower, "Instalacja oraz konfiguracja systemu"],
  [WifiHigh, "Konfiguracja routera i domowego Wi-Fi"],
] as const;

const faqItems = [
  ["Dla jakich firm jest NortIT?", "Dla małych i średnich firm, które potrzebują pomocy przy bieżących problemach, stanowiskach pracy, sieci lub porządkowaniu IT."],
  ["Kiedy realizujesz zlecenia?", "Prace planuję głównie po 16:00 oraz w terminach ustalonych indywidualnie. Przed przyjęciem pracy zawsze potwierdzam dostępność."],
  ["Czy możliwa jest pomoc zdalna?", "Tak, jeśli problem można bezpiecznie rozwiązać bez dojazdu. W pozostałych przypadkach ustalam wizytę w Warszawie lub okolicach."],
  ["Czy pomagasz osobom prywatnym?", "Tak. Przyjmuję wybrane zlecenia dotyczące komputerów, laptopów, modernizacji, danych i domowego Wi-Fi."],
] as const;

const revealSentence = "Bez anonimowego helpdesku. Bez przekazywania spraw między pracownikami.";

export function PremiumHome() {
  const root = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reducedMotion) {
        gsap.set([".hero-copy > *", ".hero-visual", ".scrub-word", ".scroll-media"], {
          clearProps: "all",
        });
        return;
      }

      gsap.from(".hero-copy > *", {
        opacity: 0,
        y: 36,
        duration: 1.1,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".hero-visual", {
        opacity: 0,
        scale: 0.92,
        x: 48,
        duration: 1.35,
        ease: "power3.out",
      });

      gsap.fromTo(
        ".scrub-word",
        { opacity: 0.1, y: 18 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.06,
          ease: "none",
          scrollTrigger: {
            trigger: ".scrub-copy",
            start: "top 78%",
            end: "bottom 42%",
            scrub: 1,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".scroll-media").forEach((media) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: media,
              start: "top 90%",
              end: "bottom 10%",
              scrub: 1,
            },
          })
          .fromTo(
            media,
            { scale: 0.82, opacity: 0.45, filter: "brightness(0.55)" },
            { scale: 1, opacity: 1, filter: "brightness(1)", ease: "none", duration: 0.55 },
          )
          .to(media, {
            scale: 1.035,
            opacity: 0.24,
            filter: "brightness(0.35)",
            ease: "none",
            duration: 0.45,
          });
      });
    },
    { scope: root },
  );

  function showPreviousPrinciple() {
    setActivePrinciple((current) => (current - 1 + principles.length) % principles.length);
  }

  function showNextPrinciple() {
    setActivePrinciple((current) => (current + 1) % principles.length);
  }

  const principle = principles[activePrinciple];

  return (
    <div ref={root} className="min-h-screen bg-[#060914] text-white">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="w-full max-w-full overflow-x-hidden">
        <section id="start" className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
          <div className="hero-ambient" aria-hidden="true" />
          <div className="site-shell relative grid min-h-[calc(100vh-8rem)] items-center gap-14 pb-20 xl:grid-cols-[1.18fr_0.82fr] xl:gap-12">
            <div className="hero-copy relative z-10 max-w-6xl">
              <p className="mb-7 flex items-center gap-3 text-sm font-medium tracking-[0.08em] text-blue-300">
                <span className="h-px w-10 bg-blue-400" aria-hidden="true" />
                Wsparcie IT dla firm w Warszawie
              </p>
              <h1 className="max-w-6xl text-[clamp(3.25rem,6.7vw,7.5rem)] font-semibold leading-[0.89] tracking-[-0.075em] text-white">
                Spokojniejsze IT dla małych i średnich firm.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
                Wsparcie IT, konfiguracja sprzętu, sieci i Microsoft 365. Pomagam firmom sprawnie rozwiązywać problemy i utrzymywać porządek w ich środowisku IT.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#kontakt" className="focus-ring inline-flex items-center justify-center rounded-full bg-[#2f6df6] px-7 py-4 font-semibold text-white transition duration-300 hover:bg-[#4c82fa]">
                  Opisz problem <ArrowDownRight className="ml-2 size-5" aria-hidden="true" />
                </a>
                <a href="#uslugi" className="focus-ring inline-flex items-center justify-center rounded-full bg-white px-7 py-4 font-semibold text-[#090d18] transition duration-300 hover:bg-slate-200">
                  Poznaj ofertę <ArrowRight className="ml-2 size-5" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="hero-visual group relative mx-auto w-full max-w-[34rem] xl:ml-auto">
              <div className="absolute -inset-12 -z-10 rounded-full bg-blue-600/20 blur-[100px]" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-[#10182a] shadow-[0_40px_120px_rgba(0,0,0,.55)]">
                <Image src="/hero-it.jpg" alt="Uporządkowana infrastruktura IT" fill priority sizes="(max-width: 1279px) 90vw, 38vw" className="object-cover contrast-125 saturate-75 transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(3,7,18,.9))]" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-7 md:p-9">
                  <div>
                    <p className="text-sm text-slate-400">Dostępność</p>
                    <p className="mt-1 text-lg font-semibold">Po 16:00, po umówieniu</p>
                  </div>
                  <div className="grid size-12 place-items-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl">
                    <Check className="size-5 text-blue-300" weight="bold" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Marquee />

        <section id="uslugi" className="relative py-32 md:py-48">
          <div className="site-shell">
            <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <h2 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] md:text-7xl">
                Konkretny zakres. Bez zbędnego szumu.
              </h2>
              <p className="max-w-xl text-lg leading-relaxed text-slate-400 lg:justify-self-end">
                Wybierz obszar, aby zobaczyć szczegóły. Każde zlecenie zaczynam od krótkiej diagnozy i jasnych ustaleń.
              </p>
            </div>

            <div className="service-accordion flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d1220] lg:h-[36rem] lg:flex-row">
              {services.map((service, index) => {
                const Icon = service.icon;
                const active = activeService === index;
                return (
                  <button
                    key={service.title}
                    type="button"
                    onMouseEnter={() => setActiveService(index)}
                    onFocus={() => setActiveService(index)}
                    onClick={() => setActiveService(index)}
                    aria-expanded={active}
                    className={`group relative min-h-[20rem] overflow-hidden border-b border-white/10 text-left transition-[flex] duration-700 ease-[cubic-bezier(.16,1,.3,1)] last:border-b-0 lg:min-h-0 lg:border-b-0 lg:border-r lg:last:border-r-0 ${active ? "lg:flex-[3.1]" : "lg:flex-1"}`}
                  >
                    <Image src={service.image} alt="" fill sizes="(max-width: 1024px) 100vw, 45vw" className={`object-cover contrast-125 saturate-50 transition duration-700 ease-out group-hover:scale-105 ${active ? "opacity-55" : "opacity-20"}`} />
                    <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,20,.2),rgba(5,9,20,.94))]" aria-hidden="true" />
                    <span className="absolute inset-0 flex flex-col justify-between p-7 md:p-9">
                      <span className="flex items-center justify-between">
                        <span className="grid size-12 place-items-center rounded-full border border-white/15 bg-black/20 backdrop-blur-xl">
                          <Icon className="size-5 text-blue-300" weight="duotone" aria-hidden="true" />
                        </span>
                        <CaretRight className={`size-5 text-slate-400 transition duration-500 ${active ? "rotate-90 text-white" : ""}`} weight="bold" aria-hidden="true" />
                      </span>
                      <span className="block">
                        <span className="block text-2xl font-semibold tracking-[-0.035em] md:text-3xl">{service.title}</span>
                        <span className="mt-3 block max-w-lg leading-relaxed text-slate-300">{active ? service.detail : service.short}</span>
                        <span className={`mt-6 flex flex-wrap gap-x-5 gap-y-2 overflow-hidden text-sm text-blue-200 transition-all duration-500 ${active ? "max-h-24 opacity-100" : "max-h-0 opacity-0"}`}>
                          {service.items.map((item) => <span key={item}>{item}</span>)}
                        </span>
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <section id="o-mnie" className="relative border-y border-white/[0.08] bg-[#090e1b] py-32 md:py-48">
          <div className="site-shell">
            <p className="scrub-copy max-w-6xl text-[clamp(2.5rem,5.4vw,6.4rem)] font-semibold leading-[1.02] tracking-[-0.065em]">
              {revealSentence.split(" ").map((word, index) => (
                <span key={`${word}-${index}`} className="scrub-word mr-[0.22em] inline-block text-white">{word}</span>
              ))}
            </p>
            <div className="mt-20 grid gap-10 border-t border-white/10 pt-10 md:grid-cols-2 md:gap-24">
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-blue-300">O NortIT</p>
              <div className="space-y-6 text-lg leading-relaxed text-slate-300">
                <p>NortIT prowadzę osobiście, dlatego masz bezpośredni kontakt z osobą, która zna Twoje środowisko IT i odpowiada za rozwiązanie problemu.</p>
                <p>Współpracuję zarówno przy pojedynczych zadaniach, jak i przy regularnym wsparciu firm. Nie przyjmuję więcej zleceń, niż mogę odpowiedzialnie obsłużyć.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="wspolpraca" className="py-32 md:py-48">
          <div className="site-shell">
            <div className="mb-16 max-w-5xl">
              <h2 className="text-5xl font-semibold leading-[0.96] tracking-[-0.06em] md:text-7xl">Współpraca oparta na jasnych zasadach.</h2>
            </div>

            <div className="grid grid-flow-dense grid-cols-1 overflow-hidden rounded-[2rem] border border-white/10 md:grid-cols-12">
              <article className="scroll-media group relative min-h-[32rem] overflow-hidden border-b border-white/10 md:col-span-7 md:min-h-[42rem] md:border-b-0 md:border-r">
                <Image src="/assets/network-infrastructure.png" alt="Uporządkowana infrastruktura sieciowa" fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover contrast-125 saturate-75 transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(4,8,18,.94))]" />
                <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                  <p className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">Jednorazowa pomoc lub stałe wsparcie IT</p>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">Możesz zgłosić pojedynczy problem albo powierzyć mi bieżącą obsługę IT swojej firmy. Zakres współpracy dopasowuję do rzeczywistych potrzeb, bez niepotrzebnych usług.</p>
                </div>
              </article>

              <article className="scroll-media relative flex min-h-[32rem] flex-col justify-between overflow-hidden bg-[#111a2c] p-8 text-white md:col-span-5 md:min-h-[42rem] md:p-12">
                <ShieldCheck className="size-9 text-blue-300" weight="duotone" aria-hidden="true" />
                <div>
                  <p className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-5xl">Najpierw zakres, termin i koszt.</p>
                  <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-300">Najpierw ustalamy zakres, termin i koszt. Dopiero potem działamy. Bez niejasnych rozliczeń i niespodziewanych kosztów.</p>
                </div>
              </article>

              <article className="relative col-span-1 min-h-[30rem] overflow-hidden bg-[#101727] md:col-span-12">
                <div className="grid min-h-[30rem] md:grid-cols-[0.72fr_1.28fr]">
                  <div className="relative min-h-[18rem] overflow-hidden md:min-h-full">
                    <Image key={principle.image} src={principle.image} alt="" fill sizes="(max-width: 768px) 100vw, 42vw" className="object-cover contrast-125 saturate-50 transition-transform duration-700 ease-out hover:scale-105" />
                    <div className="absolute inset-0 bg-blue-950/25 mix-blend-multiply" />
                  </div>
                  <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex -space-x-3" aria-hidden="true">
                        {principles.map((item) => (
                          <span key={item.image} style={{ position: "relative" }} className="block size-11 overflow-hidden rounded-full border-2 border-[#101727]">
                            <Image src={item.image} alt="" fill sizes="44px" className="object-cover grayscale" />
                          </span>
                        ))}
                      </div>
                      <span className="text-sm tabular-nums text-slate-500">{String(activePrinciple + 1).padStart(2, "0")} / {String(principles.length).padStart(2, "0")}</span>
                    </div>
                    <div className="my-12 max-w-2xl">
                      <h3 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] md:text-6xl">{principle.title}</h3>
                      <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">{principle.copy}</p>
                    </div>
                    <div className="flex gap-3">
                      <button type="button" onClick={showPreviousPrinciple} aria-label="Poprzednia zasada" className="focus-ring grid size-12 place-items-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#090d18]">
                        <ArrowLeft className="size-5" aria-hidden="true" />
                      </button>
                      <button type="button" onClick={showNextPrinciple} aria-label="Następna zasada" className="focus-ring grid size-12 place-items-center rounded-full bg-white text-[#090d18] transition hover:bg-blue-100">
                        <ArrowRight className="size-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="klienci-indywidualni" className="border-y border-white/[0.08] bg-[#090e1b] py-28 md:py-36">
          <div className="site-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-blue-300">Także dla klientów indywidualnych</p>
              <h2 className="mt-6 max-w-2xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-6xl">Domowy komputer też zasługuje na porządną pomoc.</h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-400">Przyjmuję wybrane, jasno określone zlecenia. Przed rozpoczęciem potwierdzam zakres, przewidywany koszt i termin.</p>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {individualItems.map(([Icon, label]) => (
                <div key={label} className="group flex items-center gap-5 py-6">
                  <span className="grid size-11 place-items-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-blue-400/40 group-hover:bg-blue-500/10">
                    <Icon className="size-5 text-blue-300" weight="duotone" aria-hidden="true" />
                  </span>
                  <span className="text-lg font-medium">{label}</span>
                </div>
              ))}
              <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex items-center gap-3 text-sm text-slate-400"><Clock className="size-4 text-blue-300" weight="duotone" aria-hidden="true" /> Po 16:00, w umówionym terminie</p>
                <a href="#kontakt" className="focus-ring inline-flex items-center font-semibold text-blue-300 hover:text-white">Opisz problem <ArrowRight className="ml-2 size-4" aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-32 md:py-48">
          <div className="site-shell grid gap-16 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <h2 className="max-w-xl text-5xl font-semibold leading-[0.96] tracking-[-0.06em] md:text-7xl">Zanim napiszesz.</h2>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-slate-400">Najważniejsze informacje o zakresie i obecnej dostępności NortIT.</p>
            </div>
            <div className="border-t border-white/10">
              {faqItems.map(([question, answer]) => (
                <details key={question} suppressHydrationWarning className="group border-b border-white/10">
                  <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-6 py-7 text-xl font-semibold marker:hidden">
                    {question}
                    <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/15 text-blue-300 transition duration-300 group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="max-w-2xl pb-8 pr-12 leading-relaxed text-slate-400">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="relative overflow-hidden bg-[#2f6df6] py-28 text-white md:py-40">
          <div className="contact-ambient" aria-hidden="true" />
          <div className="site-shell relative grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-blue-100">Kontakt</p>
              <h2 className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.94] tracking-[-0.065em] md:text-7xl">Opisz jedno konkretne zadanie.</h2>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-blue-100">Napisz, czego potrzebujesz i jaki termin byłby pomocny. Odpowiem, czy mogę pomóc, i zaproponuję kolejny krok.</p>
              <div className="mt-10 space-y-4">
                <a href={site.phoneHref} className="focus-ring flex w-fit items-center gap-3 rounded-lg text-lg font-semibold"><Phone className="size-5" weight="duotone" aria-hidden="true" /> {site.phone}</a>
                <a href={site.emailHref} className="focus-ring flex w-fit items-center gap-3 rounded-lg text-lg font-semibold"><Envelope className="size-5" weight="duotone" aria-hidden="true" /> {site.email}</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-[#040711] py-12">
        <div className="site-shell flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <Brand />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-500">Bezpośrednie wsparcie IT dla małych i średnich firm w Warszawie i okolicach.</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">
            <a href="#uslugi" className="hover:text-white">Usługi</a>
            <a href="#o-mnie" className="hover:text-white">O mnie</a>
            <a href="/polityka-prywatnosci/" className="hover:text-white">Prywatność</a>
            <a href="#kontakt" className="hover:text-white">Kontakt</a>
          </div>
        </div>
        <div className="site-shell mt-10 border-t border-white/[0.08] pt-6 text-xs text-slate-600">© <span suppressHydrationWarning>{new Date().getFullYear()}</span> NortIT. Warszawa i okolice.</div>
      </footer>
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (open: boolean) => void }) {
  const links = [["Usługi", "#uslugi"], ["O mnie", "#o-mnie"], ["Współpraca", "#wspolpraca"], ["Kontakt", "#kontakt"]] as const;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-5">
      <div className="site-shell rounded-full border border-white/10 bg-[#080c17]/80 px-4 shadow-[0_18px_60px_rgba(0,0,0,.35)] backdrop-blur-2xl md:px-5">
        <div className="flex h-16 items-center justify-between">
          <Brand />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Nawigacja główna">
            {links.map(([label, href]) => <a key={href} href={href} className="focus-ring rounded-md text-sm text-slate-300 transition hover:text-white">{label}</a>)}
          </nav>
          <a href="#kontakt" className="focus-ring hidden items-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#090d18] transition hover:bg-blue-100 lg:inline-flex">Napisz do mnie <ArrowDownRight className="ml-2 size-4" aria-hidden="true" /></a>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"} aria-expanded={menuOpen} className="focus-ring grid size-10 place-items-center rounded-full border border-white/10 lg:hidden">
            {menuOpen ? <X className="size-5" weight="bold" aria-hidden="true" /> : <List className="size-5" weight="bold" aria-hidden="true" />}
          </button>
        </div>
        {menuOpen ? (
          <nav className="border-t border-white/10 pb-5 pt-3 lg:hidden" aria-label="Nawigacja mobilna">
            {links.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block border-b border-white/[0.08] py-3 text-lg">{label}</a>)}
            <a href="#kontakt" onClick={() => setMenuOpen(false)} className="mt-4 flex items-center justify-center rounded-full bg-white px-5 py-3 font-semibold text-[#090d18]">Napisz do mnie</a>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

function Brand() {
  return (
    <a href="#start" className="focus-ring inline-flex items-center gap-3 rounded-full" aria-label="NortIT, strona główna">
      <span className="grid size-9 place-items-center rounded-[0.8rem] bg-[#2f6df6] text-sm font-black tracking-[-0.08em] text-white">N</span>
      <span className="text-lg font-bold tracking-[-0.045em]">Nort<span className="text-blue-400">IT</span></span>
    </a>
  );
}

function Marquee() {
  const words = [
    "Naprawa sprzętu",
    "Czyszczenie sprzętu",
    "Komputery i laptopy",
    "Instalacja oprogramowania",
    "Stanowiska pracy",
    "Microsoft 365",
    "Sieci i Wi-Fi",
    "Drukarki",
    "Kopie zapasowe",
    "Bieżące wsparcie",
    "Pomoc zdalna",
  ];
  return (
    <div className="marquee-shell border-y border-white/[0.08] bg-[#080c17] py-5" aria-label="Zakres usług">
      <div className="marquee-track">
        {[...words, ...words].map((word, index) => (
          <span key={`${word}-${index}`} className="flex items-center gap-7 whitespace-nowrap text-sm font-medium uppercase tracking-[0.14em] text-slate-400">
            {word}<span className="size-1.5 rounded-full bg-blue-500" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
