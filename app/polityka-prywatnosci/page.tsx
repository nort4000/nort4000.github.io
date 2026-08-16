import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności | NortIT",
  description: "Informacje o przetwarzaniu danych podczas korzystania ze strony i kontaktu z NortIT.",
  alternates: { canonical: "/polityka-prywatnosci/" },
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-[100dvh]">
      <header className="border-b hairline">
        <div className="page-shell flex h-[72px] items-center justify-between">
          <Logo />
          <Link href="/" className="focus-ring inline-flex items-center rounded-full border hairline px-4 py-2 text-sm text-slate-300 hover:text-white">
            <ArrowLeft className="mr-2 size-4" aria-hidden="true" /> Wróć na stronę
          </Link>
        </div>
      </header>

      <article className="page-shell max-w-3xl py-16 md:py-24">
        <p className="text-sm font-medium text-blue-300">Obowiązuje od 16 sierpnia 2026 r.</p>
        <h1 className="mt-4 text-balance text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Polityka prywatności</h1>
        <p className="mt-6 leading-relaxed text-slate-300">
          Poniżej wyjaśniam, jakie dane mogą być przetwarzane podczas korzystania ze strony NortIT
          i kontaktu przez formularz, e-mail lub telefon.
        </p>

        <div className="mt-12 space-y-10 text-slate-300">
          <PolicySection title="1. Administrator danych">
            Administratorem danych jest Norbert Duda, prowadzący stronę pod marką NortIT.
            W sprawach dotyczących danych osobowych możesz napisać na{" "}
            <a className="text-blue-300 hover:text-white" href={site.emailHref}>{site.email}</a>
            {" "}lub zadzwonić pod numer{" "}
            <a className="text-blue-300 hover:text-white" href={site.phoneHref}>{site.phone}</a>.
          </PolicySection>

          <PolicySection title="2. Jakie dane są przetwarzane">
            Podczas kontaktu mogę otrzymać Twoje imię, adres e-mail, numer telefonu, nazwę firmy
            oraz informacje zawarte w wiadomości. Podanie danych jest dobrowolne, ale dane
            kontaktowe i opis sprawy są potrzebne, abym mógł odpowiedzieć na zapytanie.
          </PolicySection>

          <PolicySection title="3. Cel i podstawa przetwarzania">
            Dane są wykorzystywane do odpowiedzi na wiadomość, przygotowania wyceny oraz podjęcia
            działań na Twoje żądanie przed ewentualnym uzgodnieniem usługi. Podstawą przetwarzania
            jest art. 6 ust. 1 lit. b RODO. W zakresie niezbędnym do prowadzenia korespondencji,
            zapewnienia bezpieczeństwa strony lub ustalenia, dochodzenia i obrony roszczeń podstawą
            może być również uzasadniony interes administratora zgodnie z art. 6 ust. 1 lit. f RODO.
          </PolicySection>

          <PolicySection title="4. Formularz kontaktowy i odbiorcy danych">
            Formularz korzysta z EmailJS, który przekazuje wiadomość do dostawcy poczty
            elektronicznej używanego przez NortIT. Dane mogą być przetwarzane przez EmailJS,
            dostawcę poczty oraz podmioty zapewniające im infrastrukturę techniczną — wyłącznie
            w zakresie potrzebnym do obsługi wiadomości. Więcej informacji znajdziesz w{" "}
            <a
              className="text-blue-300 hover:text-white"
              href="https://www.emailjs.com/legal/privacy-policy/"
              target="_blank"
              rel="noreferrer"
            >
              polityce prywatności EmailJS
            </a>.
          </PolicySection>

          <PolicySection title="5. Hosting strony">
            Strona jest udostępniana przez GitHub Pages. Podczas wizyty GitHub może zapisywać
            adres IP i informacje techniczne związane z połączeniem, między innymi w celach
            bezpieczeństwa. Zasady przetwarzania tych danych opisuje{" "}
            <a
              className="text-blue-300 hover:text-white"
              href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement"
              target="_blank"
              rel="noreferrer"
            >
              polityka prywatności GitHub
            </a>.
          </PolicySection>

          <PolicySection title="6. Przekazywanie danych poza Europejski Obszar Gospodarczy">
            Dostawcy usług technicznych mogą przetwarzać dane poza Europejskim Obszarem
            Gospodarczym. W takim przypadku odbywa się to na podstawie mechanizmów prawnych
            stosowanych przez danego dostawcę, opisanych w jego polityce prywatności lub umowie
            dotyczącej przetwarzania danych.
          </PolicySection>

          <PolicySection title="7. Okres przechowywania">
            Wiadomości i dane związane z zapytaniem przechowuję nie dłużej niż 12 miesięcy od
            ostatniego kontaktu. Dane mogą być przechowywane dłużej tylko wtedy, gdy będzie to
            konieczne do ustalenia, dochodzenia lub obrony roszczeń albo wykonania obowiązku
            wynikającego z prawa.
          </PolicySection>

          <PolicySection title="8. Twoje prawa">
            Masz prawo zażądać dostępu do danych, ich poprawienia, usunięcia lub ograniczenia
            przetwarzania. W sytuacjach przewidzianych przez RODO możesz również wnieść sprzeciw
            wobec przetwarzania oraz zażądać przeniesienia danych. Masz także prawo złożyć skargę
            do Prezesa Urzędu Ochrony Danych Osobowych.
          </PolicySection>

          <PolicySection title="9. Cookies i analityka">
            NortIT nie korzysta obecnie z Google Analytics, Meta Pixel ani innych narzędzi
            marketingowych lub analitycznych. Strona nie tworzy profilu użytkownika i nie
            wykorzystuje danych do zautomatyzowanego podejmowania decyzji.
          </PolicySection>

          <PolicySection title="10. Zmiany polityki">
            Polityka może zostać zaktualizowana, gdy zmieni się sposób działania strony,
            wykorzystywane usługi albo obowiązujące wymagania prawne. Aktualna wersja będzie
            zawsze dostępna pod tym adresem.
          </PolicySection>
        </div>

        <a href={site.emailHref} className="focus-ring mt-12 inline-flex items-center rounded-full bg-[#2563EB] px-6 py-3.5 font-semibold text-white hover:bg-blue-500">
          <Mail className="mr-2 size-4" aria-hidden="true" /> {site.email}
        </a>
      </article>
    </main>
  );
}

function PolicySection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <p className="mt-3 leading-relaxed">{children}</p>
    </section>
  );
}
