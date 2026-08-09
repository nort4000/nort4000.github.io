"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import { site } from "@/lib/site";

type FormStatus = "idle" | "submitting" | "activation" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const form = event.currentTarget;
      const payload = Object.fromEntries(new FormData(form).entries());
      payload._url = window.location.href;

      const response = await fetch(`https://formsubmit.co/ajax/${site.email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const responseText = await response.text();
      let result: { success?: string | boolean; message?: string } = {};

      try {
        result = JSON.parse(responseText) as typeof result;
      } catch {
        console.error("[contact-form] FormSubmit returned a non-JSON response", {
          status: response.status,
          contentType: response.headers.get("content-type"),
          response: responseText.slice(0, 500),
        });
        throw new Error("FormSubmit returned an invalid response");
      }

      const needsActivation =
        (result.success === false || result.success === "false") &&
        /needs activation|activate form/i.test(result.message ?? "");

      if (needsActivation) {
        form.reset();
        setStatus("activation");
        return;
      }

      if (!response.ok || result.success === false || result.success === "false") {
        throw new Error(result.message || `FormSubmit returned HTTP ${response.status}`);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      console.error("[contact-form] Submission failed", error);
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={submit}
      className="rounded-[2rem] border border-white/50 bg-[#f5f7fb] p-6 text-[#090d18] shadow-[0_35px_100px_rgba(10,25,70,.28)] md:p-10"
      aria-busy={status === "submitting"}
    >
      <input type="hidden" name="_subject" value="Nowa wiadomość ze strony NortIT" />
      <input type="hidden" name="_template" value="table" />
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
        disabled={status === "submitting"}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#090d18] px-6 py-4 font-semibold text-white transition hover:bg-[#1a2540] active:translate-y-px disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Wysyłanie wiadomości" : "Wyślij zapytanie"}
        <PaperPlaneTilt className="ml-2 size-4" weight="bold" aria-hidden="true" />
      </button>

      <p className="mt-4 text-center text-xs leading-relaxed text-slate-500" aria-live="polite">
        {status === "success"
          ? "Dziękuję. Wiadomość została wysłana. Odpowiem możliwie szybko."
          : status === "activation"
            ? `Formularz czeka na jednorazową aktywację. Otwórz wiadomość od FormSubmit wysłaną na ${site.email} i kliknij „Activate Form”.`
            : status === "error"
              ? `Nie udało się wysłać formularza. Napisz do mnie bezpośrednio na ${site.email} lub zadzwoń.`
              : "Dane wykorzystam wyłącznie do odpowiedzi na Twoje zapytanie."}
      </p>

      {status === "error" ? (
        <a className="focus-ring mx-auto mt-3 block w-fit rounded text-sm font-semibold text-blue-700 hover:text-blue-900" href={site.emailHref}>
          Napisz wiadomość e-mail
        </a>
      ) : null}
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
