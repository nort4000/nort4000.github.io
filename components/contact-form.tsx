"use client";

import { FormEvent, useRef, useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react";

const EMAILJS = {
  endpoint: "https://api.emailjs.com/api/v1.0/email/send",
  serviceId: "service_hfslb1n",
  templateId: "template_6lwxz0a",
  publicKey: "cToEkH1YeV2-lRo7p",
  // In EmailJS, link this template in Contact Us -> Auto-Reply:
  autoReplyTemplateId: "template_1c0yjzb",
} as const;

type SubmitState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const submittingRef = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (submittingRef.current) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    if (String(formData.get("website") ?? "")) return;

    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (name.length < 2 || message.length < 10) {
      setSubmitState("error");
      return;
    }

    submittingRef.current = true;
    setSubmitState("sending");

    try {
      const response = await fetch(EMAILJS.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS.serviceId,
          template_id: EMAILJS.templateId,
          user_id: EMAILJS.publicKey,
          template_params: {
            name,
            email,
            phone: phone || "Nie podano",
            company: company || "Nie podano",
            message,
            title: "Nowa wiadomość ze strony NortIT",
          },
        }),
      });

      if (!response.ok) throw new Error(`EmailJS returned ${response.status}`);

      setSubmitState("success");
      form.reset();
      window.setTimeout(() => window.location.assign("/dziekujemy/"), 500);
    } catch (error) {
      console.error("Nie udało się wysłać formularza przez EmailJS.", error);
      submittingRef.current = false;
      setSubmitState("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate={false}
      className="rounded-[2rem] border border-white/50 bg-[#f5f7fb] p-6 text-[#090d18] shadow-[0_35px_100px_rgba(10,25,70,.28)] md:p-10"
    >
      <input
        className="hidden"
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Imię" name="name" type="text" autoComplete="name" required minLength={2} maxLength={80} />
        <Field label="E-mail" name="email" type="email" autoComplete="email" required maxLength={254} />
        <Field label="Telefon" name="phone" type="tel" autoComplete="tel" maxLength={30} pattern="[0-9+() .-]{7,30}" />
        <Field label="Firma" name="company" type="text" autoComplete="organization" maxLength={120} />
      </div>

      <label className="mt-5 block text-sm font-semibold text-[#111827]" htmlFor="message">
        Opis problemu lub potrzebnego wsparcia
      </label>
      <textarea
        id="message"
        name="message"
        required
        minLength={10}
        maxLength={3000}
        rows={6}
        placeholder="Napisz krótko, czego potrzebujesz."
        className="focus-ring mt-2 w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[#090d18] outline-none placeholder:text-slate-400 focus:border-blue-500"
      />

      <button
        type="submit"
        disabled={submitState === "sending" || submitState === "success"}
        aria-busy={submitState === "sending"}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#090d18] px-6 py-4 font-semibold text-white transition hover:bg-[#1a2540] active:translate-y-px disabled:cursor-wait disabled:opacity-70"
      >
        {submitState === "sending"
          ? "Wysyłanie…"
          : submitState === "success"
            ? "Wiadomość wysłana"
            : "Wyślij zapytanie"}
        <PaperPlaneTilt className="ml-2 size-4" weight="bold" aria-hidden="true" />
      </button>

      <div aria-live="polite" className="mt-4 min-h-5 text-center text-sm">
        {submitState === "success" && (
          <p className="font-medium text-emerald-700">Wiadomość została wysłana. Za chwilę zobaczysz potwierdzenie.</p>
        )}
        {submitState === "error" && (
          <p className="font-medium text-red-700">
            Nie udało się wysłać wiadomości. Sprawdź pola i spróbuj ponownie.
          </p>
        )}
      </div>

      <p className="mt-2 text-center text-xs leading-relaxed text-slate-500">
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
  minLength,
  maxLength,
  pattern,
}: {
  label: string;
  name: string;
  type: string;
  autoComplete: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
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
        minLength={minLength}
        maxLength={maxLength}
        pattern={pattern}
        placeholder={required ? "Pole wymagane" : "Opcjonalnie"}
        className="focus-ring mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[#090d18] outline-none placeholder:text-slate-400 focus:border-blue-500"
      />
    </div>
  );
}

