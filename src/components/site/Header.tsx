import { Link } from "@tanstack/react-router";
import { Search, Menu, Flame, Mail } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Início", to: "/" },
  { label: "Energia", to: "/categoria/energia" },
  { label: "Imóveis", to: "/categoria/imoveis" },
  { label: "Agronegócio", to: "/categoria/agronegocio" },
  { label: "Due Diligence", to: "/categoria/due-diligence" },
  { label: "Incentivos Fiscais", to: "/categoria/incentivos" },
  { label: "Cases", to: "/categoria/cases" },
  { label: "Sobre", to: "/sobre" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const today = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  return (
    <header className="bg-background">
      {/* Top utility bar */}
      <div className="bg-[oklch(0.16_0.01_260)] text-white text-xs">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex chip-brand">Ao vivo</span>
            <span className="capitalize text-white/70">{today}</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-white/70">
            <a href="#" className="hover:text-white">Newsletter</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white">Anuncie</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-white">Contato</a>
          </div>
        </div>
      </div>

      {/* Brand row */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-4 py-6 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded bg-brand text-brand-foreground grid place-items-center font-display font-black text-xl shadow-sm">
              AB
            </div>
            <div className="leading-tight">
              <div className="font-display text-2xl md:text-3xl font-black tracking-tight text-ink">
                Agora<span className="text-brand">naBahia</span>
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-ink-soft">
                Guia de Investimentos Regionais
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-3 rounded-md border border-border bg-panel px-3 py-2 w-[360px]">
            <Search className="w-4 h-4 text-ink-soft" />
            <input
              type="search"
              placeholder="Buscar análises, ROI, cidades..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          <a
            href="#newsletter"
            className="hidden md:inline-flex items-center gap-2 rounded-md bg-brand text-brand-foreground text-sm font-semibold px-4 py-2.5 hover:bg-brand-deep transition"
          >
            <Mail className="w-4 h-4" /> Assinar Análises
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 flex items-center justify-between">
          <button
            className="lg:hidden py-3 inline-flex items-center gap-2 text-sm"
            onClick={() => setOpen((v) => !v)}
          >
            <Menu className="w-5 h-5" /> Menu
          </button>
          <ul className="hidden lg:flex items-center">
            {NAV.map((n, i) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  className="block px-4 py-3.5 text-[13px] uppercase tracking-wider font-semibold text-white/80 hover:text-white hover:bg-white/5 transition relative"
                  activeProps={{ className: "text-white bg-white/10" }}
                >
                  {i === 0 ? "Início" : n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-2 text-xs text-white/60">
            <Flame className="w-4 h-4 text-brand" /> Tendência: PRODUZIR BA 2026
          </div>
        </div>
        {open && (
          <ul className="lg:hidden bg-ink border-t border-white/10">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-sm text-white/80 hover:bg-white/5 border-b border-white/5"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}