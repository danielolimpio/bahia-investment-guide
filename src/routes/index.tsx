import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PostCard } from "@/components/site/PostCard";
import { featured, editorial, popular, latest, ALL_TAGS, tagSlug, CATEGORIES } from "@/lib/posts";
import { ArrowRight, TrendingUp, Flame, Star, Zap, Building2, Sprout, ShieldCheck, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AgoraNaBahia — Guia de Investimentos Regionais na Bahia" },
      { name: "description", content: "Análises de ROI em energia eólica/solar, imóveis litorâneos e agronegócio na Bahia. Dados do SEI-BA, IBGE e cases reais." },
      { property: "og:title", content: "AgoraNaBahia — Guia de Investimentos Regionais" },
      { property: "og:description", content: "Energia renovável, imóveis premium e agronegócio de alto valor — análise técnica e ROI real na Bahia." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-panel">
      <Header />

      {/* Breaking ticker */}
      <div className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 h-11 flex items-center gap-4 overflow-hidden">
          <span className="chip-brand flex-none"><Flame className="w-3 h-3" /> Destaques</span>
          <div className="flex-1 overflow-hidden whitespace-nowrap text-sm text-ink-soft">
            <span className="inline-block animate-[scroll_30s_linear_infinite]">
              Leilão A-4 ANEEL define preço-teto · PRODUZIR BA renovado até 2032 · Cacau fino atinge US$ 11k/ton · Trancoso registra ocupação recorde · Bahia ultrapassa 10 GW eólicos instalados
            </span>
          </div>
        </div>
      </div>

      {/* Hero featured */}
      <section className="mx-auto max-w-7xl px-4 pt-8">
        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          {/* main feature */}
          <Link to="/artigo/$slug" params={{ slug: featured[1].slug! }} className="relative rounded-lg overflow-hidden group min-h-[460px] block">
            <img src={featured[1].image} alt={featured[1].title} width={1024} height={1024} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
            <div className="relative h-full p-7 md:p-10 flex flex-col justify-end text-white">
              <span className="chip-brand mb-4 self-start">{featured[1].category} · Destaque</span>
              <h1 className="font-display font-black text-3xl md:text-5xl leading-tight max-w-2xl">
                {featured[1].title}
              </h1>
              <p className="mt-3 text-white/80 max-w-xl text-sm md:text-base">{featured[1].excerpt}</p>
              <div className="mt-5 flex items-center gap-3 text-xs text-white/70">
                <span className="w-7 h-7 rounded-full bg-brand grid place-items-center font-bold">M</span>
                <span>{featured[1].author}</span>
                <span>· {featured[1].date}</span>
                <span>· {featured[1].read} de leitura</span>
              </div>
            </div>
          </Link>

          {/* side stack */}
          <div className="grid gap-5">
            {[featured[0], featured[2]].map((p) => (
              <Link key={p.title} to="/artigo/$slug" params={{ slug: p.slug! }} className="relative rounded-lg overflow-hidden group min-h-[220px] block">
                <img src={p.image} alt={p.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative h-full p-5 flex flex-col justify-end text-white">
                  <span className="chip-brand mb-2 self-start">{p.category}</span>
                  <h2 className="font-display font-bold text-lg md:text-xl leading-snug">{p.title}</h2>
                  <div className="text-[11px] text-white/70 mt-2">{p.author} · {p.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="mx-auto max-w-7xl px-4 mt-12">
        <div className="section-bar">
          <div className="flex items-center gap-1">
            <span className="section-bar-title">Setores em Destaque</span>
          </div>
          <Link to="/sobre" className="text-xs font-semibold text-brand inline-flex items-center gap-1 uppercase tracking-wider">
            Ver todos <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Zap, label: "Energia Eólica & Solar", desc: "TIR 14–18% a.a.", color: "bg-brand", slug: "energia" },
            { icon: Building2, label: "Imóveis de Temporada", desc: "Cap rate 9–12%", color: "bg-ink", slug: "imoveis" },
            { icon: Sprout, label: "Agronegócio Premium", desc: "Margem 200%+", color: "bg-[oklch(0.5_0.13_150)]", slug: "agronegocio" },
            { icon: ShieldCheck, label: "Due Diligence", desc: "PRODUZIR BA 2026", color: "bg-[oklch(0.45_0.13_240)]", slug: "due-diligence" },
          ].map(({ icon: Icon, label, desc, color, slug }) => (
            <Link key={label} to="/categoria/$slug" params={{ slug }} className="group bg-card border border-border rounded-lg p-5 flex items-center gap-4 hover:border-brand transition">
              <div className={`${color} w-12 h-12 rounded-md grid place-items-center text-white flex-none`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-ink group-hover:text-brand transition">{label}</div>
                <div className="text-xs text-ink-soft">{desc}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Editorial + sidebar */}
      <section className="mx-auto max-w-7xl px-4 mt-12 grid gap-8 lg:grid-cols-[1fr_340px]">
        <div>
          <div className="section-bar">
            <span className="section-bar-title">Análises Editoriais</span>
            <Link to="/categoria/$slug" params={{ slug: "energia" }} className="text-xs font-semibold text-brand inline-flex items-center gap-1 uppercase tracking-wider">Mais artigos <ChevronRight className="w-3 h-3" /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {editorial.map((p) => <PostCard key={p.title} post={p} />)}
          </div>

          {/* Wide cards */}
          <div className="section-bar mt-12">
            <span className="section-bar-title">Cases & ROI Real</span>
            <Link to="/categoria/$slug" params={{ slug: "cases" }} className="text-xs font-semibold text-brand inline-flex items-center gap-1 uppercase tracking-wider">Todos os cases <ChevronRight className="w-3 h-3" /></Link>
          </div>
          <div className="grid gap-5">
            {popular.slice(0, 3).map((p) => <PostCard key={p.title} post={p} variant="wide" />)}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="section-bar">
              <span className="section-bar-title flex items-center gap-2"><TrendingUp className="w-4 h-4 text-brand" /> Mais Lidos</span>
            </div>
            <div className="space-y-5">
              {popular.map((p, i) => (
                <Link key={p.title} to="/artigo/$slug" params={{ slug: p.slug! }} className="flex gap-3 items-start group">
                  <div className="font-display font-black text-3xl text-brand/30 leading-none w-8">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <span className="chip-outline mb-1.5">{p.category}</span>
                    <h4 className="font-display font-bold text-sm leading-snug text-ink group-hover:text-brand transition">{p.title}</h4>
                    <div className="text-[11px] text-ink-soft mt-1">{p.author} · {p.date}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Ad slot */}
          <div className="bg-gradient-to-br from-brand to-brand-deep text-brand-foreground rounded-lg p-6">
            <div className="text-xs uppercase tracking-widest opacity-80">Patrocínio</div>
            <div className="font-display font-bold text-xl mt-2 leading-tight">Plataforma de Investimento em Energia</div>
            <p className="text-sm text-white/85 mt-2">Tickets a partir de R$ 5.000 em parques eólicos certificados ANEEL.</p>
            <a href="#" className="inline-flex items-center gap-2 mt-4 bg-white text-brand font-semibold text-sm rounded px-4 py-2 hover:bg-white/90 transition">
              Saber mais <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="section-bar">
              <span className="section-bar-title flex items-center gap-2"><Star className="w-4 h-4 text-brand" /> Tags</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.slice(0, 14).map((t) => (
                <Link key={t} to="/tag/$slug" params={{ slug: tagSlug(t) }} className="text-xs px-3 py-1.5 rounded border border-border text-ink-soft hover:bg-brand hover:text-brand-foreground hover:border-brand transition">
                  #{t}
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-ink text-white rounded-lg p-6 text-center">
            <Flame className="w-7 h-7 text-brand mx-auto" />
            <div className="font-display font-bold text-lg mt-2">Calculadora de ROI</div>
            <p className="text-sm text-white/70 mt-1">Simule retorno de imóvel de temporada na Bahia em 60 segundos.</p>
            <a href="#" className="inline-block mt-4 bg-brand text-brand-foreground font-semibold text-sm rounded px-4 py-2 hover:bg-brand-deep transition">
              Abrir calculadora
            </a>
          </div>
        </aside>
      </section>

      {/* Latest updates band */}
      <section className="mx-auto max-w-7xl px-4 mt-14">
        <div className="section-bar">
          <span className="section-bar-title">Últimas Atualizações</span>
          <Link to="/sobre" className="text-xs font-semibold text-brand inline-flex items-center gap-1 uppercase tracking-wider">Arquivo completo <ChevronRight className="w-3 h-3" /></Link>
        </div>
        <div className="bg-card border border-border rounded-lg divide-y divide-border">
          {latest.map((p, i) => (
            <Link key={p.title} to="/artigo/$slug" params={{ slug: p.slug! }} className="flex items-center gap-5 p-5 hover:bg-panel/50 transition group">
              <div className="font-display font-black text-2xl text-brand w-10 flex-none">{String(i+1).padStart(2,"0")}</div>
              <img src={p.image} alt={p.title} loading="lazy" className="w-16 h-16 object-cover rounded flex-none" />
              <div className="flex-1 min-w-0">
                <span className="chip-outline">{p.category}</span>
                <h4 className="font-display font-bold text-base mt-1 text-ink group-hover:text-brand transition">{p.title}</h4>
              </div>
              <div className="hidden md:block text-xs text-ink-soft flex-none">{p.author} · {p.date}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="mt-14 bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 grid gap-8 md:grid-cols-4 text-center">
          {[
            { v: "10,4 GW", l: "Capacidade eólica BA 2026" },
            { v: "R$ 8k/mês", l: "Receita média casa Itacaré" },
            { v: "14–18%", l: "TIR média parques renováveis" },
            { v: "240%", l: "Margem cacau fino vs commodity" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-black text-4xl text-brand">{s.v}</div>
              <div className="text-sm text-white/70 mt-1 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Explore all */}
      <section className="mx-auto max-w-7xl px-4 mt-14">
        <div className="section-bar">
          <span className="section-bar-title">Explore Todos os Artigos</span>
          <div className="flex gap-1 text-xs flex-wrap">
            {CATEGORIES.slice(0, 5).map((c) => (
              <Link key={c.slug} to="/categoria/$slug" params={{ slug: c.slug }} className="px-3 py-1.5 rounded text-ink-soft hover:bg-brand hover:text-brand-foreground transition">{c.short}</Link>
            ))}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {[...editorial, ...popular].slice(0, 6).map((p) => <PostCard key={p.title+"e"} post={p} />)}
        </div>
        <div className="text-center mt-8">
          <button className="inline-flex items-center gap-2 bg-brand text-brand-foreground font-semibold px-6 py-3 rounded hover:bg-brand-deep transition">
            Carregar mais análises <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
