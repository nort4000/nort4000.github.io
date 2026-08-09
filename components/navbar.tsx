"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  ["Start", "#start"],
  ["Usługi", "#uslugi"],
  ["O mnie", "#o-mnie"],
  ["Współpraca", "#wspolpraca"],
  ["Kontakt", "#kontakt"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b hairline bg-[#050816]/80 backdrop-blur-xl">
      <nav className="page-shell flex h-[72px] items-center justify-between" aria-label="Nawigacja główna">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="focus-ring rounded-md text-sm text-slate-300 transition hover:text-white">
              {label}
            </a>
          ))}
        </div>

        <a
          href="#kontakt"
          className="focus-ring hidden whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050816] transition hover:bg-blue-50 active:translate-y-px lg:inline-flex"
        >
          Napisz do mnie <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded-full border hairline bg-white/[0.03] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? undefined : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t hairline bg-[#050816] lg:hidden"
          >
            <div className="page-shell flex flex-col py-4">
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="focus-ring rounded-md border-b hairline py-4 text-lg"
                >
                  {label}
                </a>
              ))}
              <a
                href="#kontakt"
                onClick={() => setOpen(false)}
                className="focus-ring mt-5 rounded-full bg-[#2563EB] px-5 py-3 text-center font-semibold"
              >
                Napisz do mnie
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
