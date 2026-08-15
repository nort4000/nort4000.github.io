import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Dziękujemy za wiadomość | NortIT",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#060914] px-5 text-white">
      <section className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-[#0d1220] p-8 text-center shadow-[0_35px_100px_rgba(0,0,0,.35)] md:p-12">
        <CheckCircle className="mx-auto size-12 text-blue-400" aria-hidden="true" />
        <p className="mt-7 text-sm font-medium uppercase tracking-[0.14em] text-blue-300">Wiadomość wysłana</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Dziękuję za kontakt.</h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          Potwierdzenie zostało wysłane na podany adres e-mail. Odpowiem możliwie szybko.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex items-center rounded-full bg-white px-6 py-3.5 font-semibold text-[#090d18] transition hover:bg-blue-50"
        >
          <ArrowLeft className="mr-2 size-4" aria-hidden="true" /> Wróć na stronę główną
        </Link>
      </section>
    </main>
  );
}
