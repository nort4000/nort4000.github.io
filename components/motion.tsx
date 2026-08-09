import type { ReactNode } from "react";

export function Reveal({
  children,
  className = "",
  delay: _delay = 0,
  y: _y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function HeroReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function MediaReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function Lift({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={className}>{children}</article>;
}
