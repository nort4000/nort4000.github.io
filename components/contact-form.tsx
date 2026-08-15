import { PaperPlaneTilt } from "@phosphor-icons/react";
import { site } from "@/lib/site";

export function ContactForm() {
  return (
    <form
      action={`https://formsubmit.co/${site.email}`}
      method="POST"
      className="rounded-[2rem] border border-white/50 bg-[#f5f7fb] p-6 text-[#090d18] shadow-[0_35px_100px_rgba(10,25,70,.28)] md:p-10"
    >
      <input type="hidden" name="_subject" value="Nowa wiadomość ze strony NortIT" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value={`${site.url}/dziekujemy/`} />
      <input
        type="hidden"
        name="_autoresponse"
        value="Dziękuję za wiadomość do NortIT. Potwierdzam jej otrzymanie — odpowiem możliwie szybko, zwykle w ciągu jednego dnia roboczego."
      />
      <input className="hidden" type="text" name="_honey" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Imię" name="name" type="text" autoComplete="name" required />
        <Field label="E-mail" name="email" type="email" autoComplete="email" required />
        <Field label="Telefon" name="phone" type="tel" autoComplete="tel" />
        <Field label="Firma" name="company" type="text" autoComplete="organization" />
      </div>

      <label className="mt-5 block text-sm font-semibold text-[#111827]" htmlFor="message">
        Opis problemu lub potrzebnego wsparcia
      </label>
      <textarea
        id="message"
        name="message"
        required
        rows={6}
        placeholder="Napisz krótko, czego potrzebujesz."
        className="focus-ring mt-2 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[#090d18] outline-none placeholder:text-slate-400 focus:border-blue-500"
      />

      <button
        type="submit"
        className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#090d18] px-6 py-4 font-semibold text-white transition hover:bg-[#1a2540] active:translate-y-px disabled:cursor-wait disabled:opacity-70"
      >
        Wyślij zapytanie
        <PaperPlaneTilt className="ml-2 size-4" weight="bold" aria-hidden="true" />
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
        Po wysłaniu otrzymasz automatyczne potwierdzenie na podany adres e-mail. Dane wykorzystam
        wyłącznie do odpowiedzi na Twoje zapytanie.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  autoComplete,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#111827]" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        placeholder={required ? "Pole wymagane" : "Opcjonalnie"}
        className="focus-ring mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[#090d18] outline-none placeholder:text-slate-400 focus:border-blue-500"
      />
    </div>
  );
}
