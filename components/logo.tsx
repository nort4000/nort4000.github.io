export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <a href="/#start" className="focus-ring inline-flex items-center gap-3 rounded-full" aria-label="NortIT, strona główna">
      <span
        className={`grid size-9 place-items-center rounded-[12px] border text-sm font-black tracking-[-0.08em] shadow-[0_12px_35px_rgba(37,99,235,.24)] ${
          inverse ? "border-white/20 bg-white text-[#050816]" : "border-blue-400/30 bg-[#2563EB] text-white"
        }`}
      >
        N
      </span>
      <span className="text-lg font-bold tracking-[-0.045em]">
        Nort<span className={inverse ? "text-blue-100" : "text-blue-400"}>IT</span>
      </span>
    </a>
  );
}
