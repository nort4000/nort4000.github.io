import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności | NortIT",
  description: "Informacje o przetwarzaniu danych podczas kontaktu z NortIT.",
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
        <h1 className="text-balance text-4xl font-semibold tracking-[-0.045em] md:text-6xl">Polityka prywatności</h1>
        <p className="mt-6 leading-relaxed text-slate-300">
          Strona nie umożliwia zakładania kont. Dane podane w formularzu trafiają do NortIT wyłącznie w celu obsługi zapytania.
        </p>

        <div className="mt-12 space-y-10 text-slate-300">
          <PolicySection title="Kontakt">
            Jeśli kontaktujesz się telefonicznie lub przez e-mail, podane dane są używane wyłącznie do odpowiedzi na zapytanie, przygotowania wyceny i realizacji uzgodnionej usługi.
          </PolicySection>
          <PolicySection title="Zakres danych">
            Możemy otrzymać imię, adres e-mail, numer telefonu, nazwę firmy oraz informacje opisane przez Ciebie w wiadomości.
          </PolicySection>
          <PolicySection title="Odbiorcy danych">
            Dane nie są sprzedawane. Formularz korzysta z usługi FormSubmit, która przekazuje wiadomość na adres e-mail NortIT. Dostawca może tymczasowo przetwarzać i przechowywać zgłoszenia zgodnie ze swoją polityką prywatności.
          </PolicySection>
          <PolicySection title="Alternatywny kontakt">
            Jeśli nie chcesz korzystać z formularza, możesz skontaktować się bezpośrednio telefonicznie lub przez e-mail.
          </PolicySection>
          <PolicySection title="Twoje prawa">
            Możesz poprosić o dostęp do danych, ich poprawienie lub usunięcie. W tym celu skontaktuj się z NortIT.
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
