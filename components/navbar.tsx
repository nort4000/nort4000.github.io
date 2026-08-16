"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./logo";

const links = [
  { label: "Start", href: "/#start" },
  { label: "Usługi", href: "/#uslugi" },
  { label: "O mnie", href: "/#o-mnie" },
  { label: "Współpraca", href: "/#wspolpraca" },
  { label: "Cennik", href: "/cennik" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const rawPathname = usePathname();
  const pathname = rawPathname !== "/" ? rawPathname.replace(/\/$/, "") : rawPathname;

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-[#050816]/90 backdrop-blur-xl">
      <nav className="page-shell flex h-[72px] items-center justify-between" aria-label="Nawigacja główna">
        <Logo />

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`focus-ring rounded-md text-sm transition ${
                  isActive
                    ? "font-semibold text-blue-400"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <Link
          href="/#kontakt"
          className="focus-ring hidden whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#050816] transition hover:bg-blue-50 active:translate-y-px lg:inline-flex"
        >
          Napisz do mnie <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="focus-ring grid size-11 shrink-0 place-items-center rounded-full border hairline bg-white/[0.03] lg:hidden"
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
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] overflow-y-auto rounded-none border-t hairline bg-[#050816] lg:hidden"
          >
            <div className="page-shell flex min-h-full flex-col py-3 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <div className="flex flex-col">
                {links.map(({ label, href }) => {
                  const isActive = pathname === href;
                  return (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setOpen(false)}
                      className={`focus-ring border-b hairline px-1 py-4 text-lg ${
                        isActive ? "font-semibold text-blue-400" : "text-slate-200"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>

              <Link
                href="/#kontakt"
                onClick={() => setOpen(false)}
                className="focus-ring mt-5 w-full rounded-full bg-white px-5 py-3.5 text-center font-semibold text-[#050816]"
              >
                Napisz do mnie
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
