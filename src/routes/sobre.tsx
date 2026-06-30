import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CATEGORIES } from "@/lib/posts";
import { Compass, Database, ShieldCheck, Target, Users, Mail, CheckCircle2, BarChart3, Sprout, Building2, Zap } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre o AgoraNaBahia — Guia Independente de Investimentos Regionais" },
      { name: "description", content: "Conheça a missão, metodologia e equipe do AgoraNaBahia: análises de ROI em energia renovável, imóveis litorâneos e agronegócio premium na Bahia." },
      { property: "og:title", content: "Sobre o AgoraNaBahia" },
      { property: "og:description", content: "Guia independente de investimentos regionais — metodologia, fontes oficiais e cases reais anonimizados." },
    ],
  }),
  component: SobrePage,
});

function SobrePage() {
  return (
    <div className="min-h-screen bg-panel">
      <Header />

      {/* Hero */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
          <span className="chip-brand">Sobre o AgoraNaBahia</span>
          <h1 className="font-display font-black text-4xl md:text-6xl leading-tight mt-4">
            Investir na Bahia com <span className="text-brand">dados</span>, não com manchete.
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-3xl leading-relaxed">
            Somos um guia independente de investimentos regionais focado nos setores de
            maior ROI da Bahia: <strong className="text-white">energia eólica e solar</strong>,
            <strong className="text-white"> imóveis litorâneos de alta temporada</strong> e
            <strong className="text-white"> agronegócio premium</strong>. Sem notícias diárias.
            Sem ruído. Só análise técnica baseada em fontes oficiais e cases reais
            anonimizados.
          </p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="section-bar">
          <span className="section-bar-title">Nosso Manifesto</span>
        </div>
        <div className="grid md:grid-cols-2 gap-8 text-ink leading-relaxed">
          <p>
            O Brasil tem dezenas de portais econômicos. Quase nenhum olha para a Bahia como
            um <strong>território de oportunidade</strong> — apenas como pauta turística ou
            policial. O AgoraNaBahia nasceu para preencher essa lacuna com profundidade
            editorial e rigor analítico.
          </p>
          <p>
            Não cobrimos notícias diárias. Não competimos com portais grandes. Nosso papel é
            <strong> mostrar onde o capital encontra retorno acima de 14% ao ano</strong> em
            ativos regionais — eólicos no Sertão, imóveis em Trancoso e Itacaré, cacau fino
            do litoral sul.
          </p>
        </div>
      </section>

      {/* Pilares */}
      <section className="bg-background border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="section-bar">
            <span className="section-bar-title">Três pilares editoriais</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Energia Renovável", body: "A Bahia lidera o Brasil em geração eólica e tem irradiação solar entre as maiores do mundo. Cobrimos leilões A-4/A-6, TIR de parques, BESS e hidrogênio verde.", slug: "energia" },
              { icon: Building2, title: "Imóveis Litorâneos", body: "Trancoso, Itacaré, Morro de São Paulo e Caraíva. Cap rate, ocupação SETUR-BA, ticket médio e modelagem real de break-even.", slug: "imoveis" },
              { icon: Sprout, title: "Agronegócio Premium", body: "Cacau fino bean-to-bar, fruticultura irrigada do Vale do São Francisco, fazendas cabruca e cadeias dolarizadas.", slug: "agronegocio" },
            ].map(({ icon: Icon, title, body, slug }) => (
              <Link key={title} to="/categoria/$slug" params={{ slug }} className="group bg-card border border-border rounded-lg p-6 hover:border-brand transition block">
                <div className="w-12 h-12 rounded bg-brand text-brand-foreground grid place-items-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-ink group-hover:text-brand transition">{title}</h3>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">{body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-bar">
              <span className="section-bar-title">Metodologia</span>
            </div>
            <p className="text-ink leading-relaxed">
              Toda análise publicada segue um protocolo de quatro etapas. Nenhum número
              entra no ar sem fonte rastreável. Quando trabalhamos com cases reais, os
              dados são anonimizados a pedido do proprietário, mas auditáveis sob NDA.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                { t: "Coleta de dados oficiais", d: "SEI-BA, IBGE, ANEEL, BCB, SETUR-BA, CODEVASF, CONAB, ICCO." },
                { t: "Modelagem financeira", d: "DCF com câmbio projetado, PLD médio, ocupação histórica e CAPEX validado em campo." },
                { t: "Validação em campo", d: "Visitas técnicas, entrevistas com operadores e cruzamento com cartório e SIGEF/INCRA." },
                { t: "Revisão por pares", d: "Toda matéria passa por revisão técnica externa antes da publicação." },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-4">
                  <div className="flex-none w-8 h-8 rounded-full bg-brand text-brand-foreground grid place-items-center font-display font-bold text-sm">{i+1}</div>
                  <div>
                    <div className="font-display font-bold text-ink">{s.t}</div>
                    <div className="text-sm text-ink-soft">{s.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border rounded-lg p-7">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-brand" />
              <h3 className="font-display font-bold text-xl text-ink">Fontes oficiais utilizadas</h3>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                "SEI-BA — Superintendência de Estudos Econômicos",
                "IBGE — Sistema de Contas Regionais",
                "ANEEL — BIG e leilões A-4/A-6",
                "BCB — Câmbio e Selic",
                "SETUR-BA — Ocupação hoteleira",
                "CODEVASF — Outorga hídrica",
                "CONAB — Produção agrícola",
                "ICCO — Cacau fino",
                "SEDE-BA — PRODUZIR e DESENVOLVE",
                "SIGEF/INCRA — Malha fundiária",
              ].map((s) => (
                <div key={s} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand flex-none mt-0.5" />
                  <span className="text-ink-soft">{s}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-5 h-5 text-brand" />
                <h4 className="font-display font-bold text-ink">Política editorial</h4>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">
                Não publicamos conteúdo patrocinado disfarçado de análise. Todo material
                comercial é identificado como "Patrocínio". Não recebemos comissão sobre
                ativos analisados. Conteúdo informativo — não constitui recomendação de
                investimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 grid md:grid-cols-4 gap-8 text-center">
          {[
            { v: "120+", l: "Análises publicadas" },
            { v: "37", l: "Cases reais auditados" },
            { v: "10", l: "Fontes oficiais cruzadas" },
            { v: "14k", l: "Investidores na newsletter" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display font-black text-5xl text-brand">{s.v}</div>
              <div className="text-sm uppercase tracking-wider text-white/70 mt-2">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Equipe */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="section-bar">
          <span className="section-bar-title">Equipe Editorial</span>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { n: "Carlos Mendes", r: "Editor — Energia", b: "Engenheiro eletricista, 12 anos em projetos de geração eólica e solar no Nordeste. Ex-analista de leilões ANEEL." },
            { n: "Marina Cerqueira", r: "Editora — Imóveis", b: "Especialista em hotelaria boutique no litoral baiano. Operou pousadas em Trancoso e Itacaré por 8 anos." },
            { n: "Renato Souza", r: "Editor — Agronegócio", b: "Agrônomo, MSc em cacauicultura pela UESC. Consultor de fazendas cabruca no sul da Bahia." },
          ].map((p) => (
            <div key={p.n} className="bg-card border border-border rounded-lg p-6">
              <div className="w-16 h-16 rounded-full bg-brand text-brand-foreground grid place-items-center font-display font-black text-2xl">{p.n[0]}</div>
              <div className="font-display font-bold text-lg text-ink mt-4">{p.n}</div>
              <div className="text-xs uppercase tracking-wider text-brand font-semibold mt-1">{p.r}</div>
              <p className="text-sm text-ink-soft mt-3 leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Para quem */}
      <section className="bg-background border-y border-border">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="section-bar">
                <span className="section-bar-title flex items-center gap-2"><Target className="w-5 h-5 text-brand" /> Para quem é</span>
              </div>
              <ul className="space-y-3 text-ink">
                {["Investidor PF buscando ativos reais acima da renda fixa","Family office com mandato regional Nordeste","Empreendedor em hotelaria boutique no litoral baiano","Produtor rural avaliando conversão de cultura","Desenvolvedor de projetos de energia renovável"].map((x) => (
                  <li key={x} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-brand flex-none mt-0.5" /><span>{x}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="section-bar">
                <span className="section-bar-title flex items-center gap-2"><Users className="w-5 h-5 text-brand" /> Para quem não é</span>
              </div>
              <ul className="space-y-3 text-ink-soft">
                {["Quem busca notícia diária ou trading de curto prazo","Quem quer dica de criptomoeda ou ação especulativa","Quem espera promessa de retorno garantido","Quem prefere análise sem fonte primária"].map((x) => (
                  <li key={x} className="flex gap-3"><span className="w-5 h-5 rounded-full border border-border flex-none mt-0.5" /><span>{x}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Categorias */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="section-bar">
          <span className="section-bar-title flex items-center gap-2"><Compass className="w-5 h-5 text-brand" /> Explore por categoria</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((c) => (
            <Link key={c.slug} to="/categoria/$slug" params={{ slug: c.slug }} className="group bg-card border border-border rounded-lg p-5 hover:border-brand transition">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-brand" />
                <div className="font-display font-bold text-ink group-hover:text-brand">{c.name}</div>
              </div>
              <p className="text-sm text-ink-soft mt-2">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <div className="bg-brand text-brand-foreground rounded-lg p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="font-display font-black text-3xl md:text-4xl leading-tight">Receba nossas análises antes de todo mundo.</div>
            <p className="text-white/85 mt-2">Newsletter semanal com 1 análise técnica + 3 dados que importam. Sem spam.</p>
          </div>
          <a href="#newsletter" className="inline-flex items-center gap-2 bg-ink text-white font-semibold px-6 py-3 rounded hover:bg-black transition">
            <Mail className="w-4 h-4" /> Assinar grátis
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}