import { Link } from "@tanstack/react-router";
import { Mail, Instagram, Youtube, Linkedin, Facebook, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16">
      {/* Newsletter band */}
      <section id="newsletter" className="bg-brand text-brand-foreground">
        <div className="mx-auto max-w-7xl px-4 py-10 flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/15 grid place-items-center">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <div className="font-display text-2xl font-bold">Receba análises de ROI da Bahia</div>
              <div className="text-white/85 text-sm">
                Toda quarta — dados do SEI-BA, IBGE e cases reais (anonimizados). Sem spam.
              </div>
            </div>
          </div>
          <form className="flex w-full md:w-auto gap-2">
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="flex-1 md:w-80 rounded-md px-4 py-3 text-ink bg-white outline-none"
            />
            <button className="inline-flex items-center gap-2 rounded-md bg-ink text-white font-semibold px-5 py-3 hover:bg-black transition">
              Assinar <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      {/* Main footer */}
      <div className="bg-[oklch(0.13_0.01_260)] text-white/80">
        <div className="mx-auto max-w-7xl px-4 py-14 grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded bg-brand grid place-items-center font-display font-black">
                AB
              </div>
              <div className="font-display text-xl font-black text-white">
                Agora<span className="text-brand">naBahia</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Guia independente de investimentos regionais na Bahia. Energia
              renovável, imóveis litorâneos e agronegócio de alto valor —
              análise técnica, dados oficiais e ROI real.
            </p>
            <div className="flex gap-2 mt-5">
              {[Instagram, Youtube, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 grid place-items-center rounded border border-white/10 hover:bg-brand hover:border-brand transition"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display font-bold text-white mb-4 pb-2 border-b border-brand inline-block">
              Categorias
            </div>
            <ul className="space-y-2 text-sm">
              {["Energia Eólica & Solar","Imóveis de Temporada","Agronegócio","Due Diligence","Incentivos Fiscais","Cases & ROI Real"].map((c) => (
                <li key={c}>
                  <a href="#" className="hover:text-brand transition">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display font-bold text-white mb-4 pb-2 border-b border-brand inline-block">
              Mais Lidos
            </div>
            <ul className="space-y-3 text-sm">
              {[
                "3 Investimentos na Bahia que pagam 1,5% ao mês",
                "Como 1 casa em Itacaré gera R$ 8k/mês",
                "PRODUZIR BA 2026: o que muda para investidores",
              ].map((t) => (
                <li key={t} className="text-white/75 hover:text-white">
                  <a href="#" className="leading-snug">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display font-bold text-white mb-4 pb-2 border-b border-brand inline-block">
              Institucional
            </div>
            <ul className="space-y-2 text-sm">
              {["Sobre","Metodologia","Política Editorial","Privacidade","Termos de Uso","Anuncie","Contato"].map((c) => (
                <li key={c}>
                  <Link to="/" className="hover:text-brand transition">{c}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-5 text-xs text-white/50 flex flex-col md:flex-row gap-2 justify-between">
            <div>© {new Date().getFullYear()} AgoraNaBahia. Conteúdo informativo — não constitui recomendação de investimento.</div>
            <div>Fontes: SEI-BA · IBGE · ANEEL · Banco Central</div>
          </div>
        </div>
      </div>
    </footer>
  );
}