import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PostCard } from "@/components/site/PostCard";
import { findPost, relatedPosts, tagSlug, CATEGORIES, type FullPost } from "@/lib/posts";
import { ChevronRight, Clock, User, Share2, Bookmark, ArrowRight, TrendingUp, ListChecks, HelpCircle } from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/artigo/$slug")({
  head: ({ params }) => {
    const p = findPost(params.slug);
    const url = `https://bahia-investment-guide.lovable.app/artigo/${params.slug}`;
    const jsonLd: Record<string, unknown>[] = [];
    if (p) {
      jsonLd.push({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: p.title,
        description: p.metaDescription ?? p.excerpt,
        author: { "@type": "Person", name: p.author },
        datePublished: p.date,
        dateModified: p.updated ?? p.date,
        image: [p.image],
        mainEntityOfPage: url,
        publisher: { "@type": "Organization", name: "AgoraNaBahia" },
      });
      jsonLd.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://bahia-investment-guide.lovable.app/" },
          { "@type": "ListItem", position: 2, name: p.category, item: `https://bahia-investment-guide.lovable.app/categoria/${p.categorySlug}` },
          { "@type": "ListItem", position: 3, name: p.title, item: url },
        ],
      });
      if (p.faq && p.faq.length) {
        jsonLd.push({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: p.faq.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        });
      }
    }
    return {
      meta: [
        { title: p?.metaTitle ?? `${p?.title ?? "Análise"} — AgoraNaBahia` },
        { name: "description", content: p?.metaDescription ?? p?.excerpt ?? "Análise de investimento na Bahia." },
        { property: "og:title", content: p?.title ?? "AgoraNaBahia" },
        { property: "og:description", content: p?.metaDescription ?? p?.excerpt ?? "Análise de investimento na Bahia." },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(p?.image ? [{ property: "og:image" as const, content: p.image as string }] : []),
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: jsonLd.map((ld) => ({ type: "application/ld+json", children: JSON.stringify(ld) })),
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-panel"><Header /><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="font-display text-3xl font-bold">Análise não encontrada</h1><Link to="/" className="text-brand mt-4 inline-block">Voltar à home</Link></div><Footer /></div>
  ),
  loader: ({ params }) => {
    const post = findPost(params.slug);
    if (!post) throw notFound();
    return { post, related: relatedPosts(post) };
  },
  component: PostPage,
});

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={j} className="text-ink font-bold">{part.slice(2, -2)}</strong>
      : <span key={j}>{part}</span>
  );
}

function renderBlocks(paragraphs: string[]): ReactNode[] {
  const out: ReactNode[] = [];
  let i = 0;
  while (i < paragraphs.length) {
    const t = paragraphs[i];
    // Table: consecutive lines starting with |
    if (t.startsWith("| ")) {
      const rows: string[] = [];
      while (i < paragraphs.length && paragraphs[i].startsWith("| ")) {
        rows.push(paragraphs[i]); i++;
      }
      const parsed = rows.map((r) => r.slice(2, r.endsWith(" |") ? -2 : undefined).split(" | "));
      const [head, ...body] = parsed;
      out.push(
        <div key={`t${i}`} className="my-7 overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="bg-ink text-white"><tr>{head.map((c, k) => <th key={k} className="px-3 py-2.5 text-left font-semibold">{c}</th>)}</tr></thead>
            <tbody>{body.map((row, r) => (
              <tr key={r} className="odd:bg-panel/50 border-t border-border">
                {row.map((c, k) => <td key={k} className="px-3 py-2.5 text-ink">{inline(c)}</td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
      );
      continue;
    }
    // Bullet list
    if (t.startsWith("- ")) {
      const items: string[] = [];
      while (i < paragraphs.length && paragraphs[i].startsWith("- ")) {
        items.push(paragraphs[i].slice(2)); i++;
      }
      out.push(
        <ul key={`l${i}`} className="list-disc pl-6 mb-6 space-y-2 text-ink text-[17px] leading-relaxed marker:text-brand">
          {items.map((it, k) => <li key={k}>{inline(it)}</li>)}
        </ul>
      );
      continue;
    }
    if (t.startsWith("> ")) {
      out.push(
        <aside key={`c${i}`} className="my-7 border-l-4 border-brand bg-brand/5 rounded-r-lg p-5">
          <p className="text-ink text-[16px] leading-relaxed m-0">{inline(t.slice(2))}</p>
        </aside>
      );
      i++; continue;
    }
    if (t.startsWith("#### ")) {
      out.push(<h4 key={`h4${i}`} className="font-display font-bold text-lg text-ink mt-6 mb-2">{t.slice(5)}</h4>); i++; continue;
    }
    if (t.startsWith("### ")) {
      out.push(<h3 key={`h3${i}`} className="font-display font-bold text-xl md:text-2xl text-ink mt-8 mb-3">{t.slice(4)}</h3>); i++; continue;
    }
    if (t.startsWith("## ")) {
      out.push(<h2 key={`h2${i}`} className="font-display font-black text-2xl md:text-3xl text-ink mt-10 mb-4 pb-2 border-b-2 border-brand inline-block">{t.slice(3)}</h2>); i++; continue;
    }
    out.push(<p key={`p${i}`} className="text-ink leading-relaxed text-[17px] mb-5">{inline(t)}</p>);
    i++;
  }
  return out;
}

function toc(paragraphs: string[]) {
  return paragraphs
    .filter((p) => p.startsWith("## "))
    .map((p) => {
      const title = p.slice(3);
      const id = title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return { title, id };
    });
}

function PostPage() {
  const { post, related } = Route.useLoaderData() as { post: FullPost; related: FullPost[] };
  const cat = CATEGORIES.find((c) => c.slug === post.categorySlug);
  const outline = toc(post.content);
  return (
    <div className="min-h-screen bg-panel">
      <Header />

      {/* breadcrumb */}
      <div className="bg-background border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-4 text-xs text-ink-soft flex items-center gap-1">
          <Link to="/" className="hover:text-brand">Início</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/categoria/$slug" params={{ slug: post.categorySlug }} className="hover:text-brand">{cat?.short ?? post.category}</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink line-clamp-1">{post.title}</span>
        </div>
      </div>

      {/* article header */}
      <article className="mx-auto max-w-5xl px-4 pt-10">
        <Link to="/categoria/$slug" params={{ slug: post.categorySlug }} className="chip-brand">{post.category}</Link>
        <h1 className="font-display font-black text-3xl md:text-5xl leading-tight text-ink mt-4">{post.title}</h1>
        <p className="text-lg text-ink-soft mt-4 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center gap-4 mt-6 pb-6 border-b border-border text-sm text-ink-soft">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-brand text-brand-foreground grid place-items-center font-bold text-sm">{post.author[0]}</div>
            <div className="leading-tight">
              <div className="font-semibold text-ink flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</div>
              <div className="text-xs">Publicado em {post.date}{post.updated && post.updated !== post.date ? ` · Atualizado em ${post.updated}` : ""} · {post.read} de leitura</div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-border hover:bg-panel"><Share2 className="w-3 h-3" /> Compartilhar</button>
            <button className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-border hover:bg-panel"><Bookmark className="w-3 h-3" /> Salvar</button>
          </div>
        </div>

        <figure className="mt-8">
          <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover rounded-lg" />
          <figcaption className="text-xs text-ink-soft mt-2">Elaboração AgoraNaBahia a partir de fontes oficiais {post.sources?.map((s) => s.label.split(" — ")[0]).slice(0, 3).join(", ") || "SEI-BA, IBGE e ANEEL"}.</figcaption>
        </figure>
      </article>

      <section className="mx-auto max-w-5xl px-4 mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="prose-content">
          {outline.length > 2 && (
            <nav className="mb-8 rounded-lg border border-border bg-card p-5">
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-brand font-bold mb-3"><ListChecks className="w-4 h-4" /> Índice deste guia</div>
              <ol className="grid gap-1.5 sm:grid-cols-2 text-sm text-ink-soft list-decimal pl-4 marker:text-brand marker:font-bold">
                {outline.map((o) => <li key={o.id}>{o.title}</li>)}
              </ol>
            </nav>
          )}
          {renderBlocks(post.content.slice(0, Math.ceil(post.content.length / 2)))}
          {post.midImage && (
            <figure className="my-10">
              <img src={post.midImage} alt={post.midImageAlt ?? post.title} loading="lazy" width={1280} height={720} className="w-full aspect-[16/9] object-cover rounded-lg" />
              {post.midImageCaption && <figcaption className="text-xs text-ink-soft mt-2 italic">{post.midImageCaption}</figcaption>}
            </figure>
          )}
          {renderBlocks(post.content.slice(Math.ceil(post.content.length / 2)))}

          {/* FAQ */}
          {post.faq && post.faq.length > 0 && (
            <section className="mt-12">
              <h2 className="font-display font-black text-2xl md:text-3xl text-ink mt-2 mb-5 pb-2 border-b-2 border-brand inline-flex items-center gap-2"><HelpCircle className="w-6 h-6 text-brand" /> Perguntas frequentes</h2>
              <div className="divide-y divide-border rounded-lg border border-border bg-card">
                {post.faq.map((f, k) => (
                  <details key={k} className="group p-5 open:bg-panel/40">
                    <summary className="font-display font-bold text-ink cursor-pointer list-none flex items-start justify-between gap-3">
                      <span>{f.q}</span>
                      <ChevronRight className="w-4 h-4 mt-1 flex-none text-brand transition group-open:rotate-90" />
                    </summary>
                    <p className="text-ink-soft text-[15px] leading-relaxed mt-3">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>
          )}

          {/* Author bio */}
          {post.authorBio && (
            <section className="mt-10 flex gap-4 rounded-lg border border-border bg-card p-6">
              <div className="w-14 h-14 rounded-full bg-brand text-brand-foreground grid place-items-center font-black text-xl flex-none">{post.author[0]}</div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-brand font-bold">Sobre a autoria</div>
                <div className="font-display font-bold text-ink text-lg">{post.author}</div>
                <p className="text-sm text-ink-soft leading-relaxed mt-1">{post.authorBio}</p>
              </div>
            </section>
          )}

          {/* Sources */}
          {post.sources && post.sources.length > 0 && (
            <section className="mt-8 rounded-lg border border-border p-5 bg-panel/40">
              <div className="text-xs uppercase tracking-wider text-ink-soft font-bold mb-3">Fontes consultadas</div>
              <ul className="text-sm text-ink-soft space-y-1.5 list-disc pl-5">
                {post.sources.map((s, k) => (
                  <li key={k}>{s.url ? <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">{s.label}</a> : s.label}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Tags */}
          <div className="mt-10 pt-6 border-t border-border">
            <div className="text-xs uppercase tracking-wider text-ink-soft font-semibold mb-3">Tags desta análise</div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <Link key={t} to="/tag/$slug" params={{ slug: tagSlug(t) }} className="text-xs px-3 py-1.5 rounded border border-border text-ink-soft hover:bg-brand hover:text-brand-foreground hover:border-brand transition">#{t}</Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-brand text-brand-foreground rounded-lg p-7 flex flex-col md:flex-row md:items-center gap-4 justify-between">
            <div>
              <div className="font-display font-bold text-xl">Baixe gratuitamente o guia AgoraNaBahia</div>
              <div className="text-sm text-white/85 mt-1">Modelo de análise de TIR, checklist de due diligence e planilha de cap rate para investimentos na Bahia.</div>
            </div>
            <a href="#newsletter" className="inline-flex items-center gap-2 bg-ink text-white font-semibold px-5 py-2.5 rounded hover:bg-black transition">Quero receber <ArrowRight className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-5 sticky top-4">
            <div className="section-bar"><span className="section-bar-title">Nesta categoria</span></div>
            <Link to="/categoria/$slug" params={{ slug: post.categorySlug }} className="inline-flex items-center gap-1 text-sm text-brand font-semibold">
              {cat?.name} <ChevronRight className="w-3 h-3" />
            </Link>
            <p className="text-xs text-ink-soft mt-2">{cat?.desc}</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-5">
            <div className="section-bar"><span className="section-bar-title flex items-center gap-2"><TrendingUp className="w-4 h-4 text-brand" /> Relacionados</span></div>
            <div className="space-y-4">
              {related.map((r) => (
                <Link key={r.slug} to="/artigo/$slug" params={{ slug: r.slug }} className="flex gap-3 group">
                  <img src={r.image} alt={r.title} className="w-16 h-16 object-cover rounded flex-none" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-brand font-semibold">{r.category}</div>
                    <div className="font-display font-bold text-sm text-ink leading-snug group-hover:text-brand line-clamp-3">{r.title}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-ink text-white rounded-lg p-6 text-center">
            <Clock className="w-7 h-7 text-brand mx-auto" />
            <div className="font-display font-bold text-lg mt-2">Tempo de leitura</div>
            <p className="text-sm text-white/70 mt-1">{post.read}</p>
          </div>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 mt-16">
          <div className="section-bar"><span className="section-bar-title">Continue lendo</span></div>
          <div className="grid gap-5 md:grid-cols-3">
            {related.map((r) => <PostCard key={r.slug} post={r} />)}
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}