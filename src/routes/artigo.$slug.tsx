import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PostCard } from "@/components/site/PostCard";
import { findPost, relatedPosts, tagSlug, CATEGORIES, type FullPost } from "@/lib/posts";
import { ChevronRight, Clock, User, Share2, Bookmark, ArrowRight, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/artigo/$slug")({
  head: ({ params }) => {
    const p = findPost(params.slug);
    return {
      meta: [
        { title: `${p?.title ?? "Análise"} — AgoraNaBahia` },
        { name: "description", content: p?.excerpt ?? "Análise de investimento na Bahia." },
        { property: "og:title", content: p?.title ?? "AgoraNaBahia" },
        { property: "og:description", content: p?.excerpt ?? "Análise de investimento na Bahia." },
        ...(p?.image ? [{ property: "og:image" as const, content: p.image as string }] : []),
      ],
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

function renderParagraph(text: string, i: number) {
  if (text.startsWith("## ")) {
    return <h2 key={i} className="font-display font-black text-2xl md:text-3xl text-ink mt-10 mb-4 pb-2 border-b-2 border-brand inline-block">{text.slice(3)}</h2>;
  }
  const parts = text.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
    part.startsWith("**") && part.endsWith("**") ? <strong key={j} className="text-ink font-bold">{part.slice(2, -2)}</strong> : <span key={j}>{part}</span>
  );
  return <p key={i} className="text-ink leading-relaxed text-[17px] mb-5">{parts}</p>;
}

function PostPage() {
  const { post, related } = Route.useLoaderData() as { post: FullPost; related: FullPost[] };
  const cat = CATEGORIES.find((c) => c.slug === post.categorySlug);
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
              <div className="text-xs">{post.date} · {post.read} de leitura</div>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <button className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-border hover:bg-panel"><Share2 className="w-3 h-3" /> Compartilhar</button>
            <button className="inline-flex items-center gap-1 text-xs px-3 py-1.5 rounded border border-border hover:bg-panel"><Bookmark className="w-3 h-3" /> Salvar</button>
          </div>
        </div>

        <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover rounded-lg mt-8" />
        <div className="text-xs text-ink-soft mt-2">Fontes: SEI-BA, IBGE, ANEEL — elaboração AgoraNaBahia.</div>
      </article>

      <section className="mx-auto max-w-5xl px-4 mt-10 grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="prose-content">
          {post.content.map((p, i) => renderParagraph(p, i))}

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
              <div className="font-display font-bold text-xl">Quer mais análises como esta?</div>
              <div className="text-sm text-white/85 mt-1">Receba toda quarta uma análise técnica direto no e-mail.</div>
            </div>
            <a href="#newsletter" className="inline-flex items-center gap-2 bg-ink text-white font-semibold px-5 py-2.5 rounded hover:bg-black transition">Assinar <ArrowRight className="w-4 h-4" /></a>
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