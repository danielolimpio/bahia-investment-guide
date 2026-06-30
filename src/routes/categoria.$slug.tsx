import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PostCard } from "@/components/site/PostCard";
import { CATEGORIES, postsByCategory, ALL_TAGS, tagSlug } from "@/lib/posts";
import { ChevronRight, Folder } from "lucide-react";

export const Route = createFileRoute("/categoria/$slug")({
  head: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    return {
      meta: [
        { title: `${cat?.name ?? "Categoria"} — AgoraNaBahia` },
        { name: "description", content: cat?.desc ?? "Análises de investimento na Bahia." },
        { property: "og:title", content: `${cat?.name ?? "Categoria"} — AgoraNaBahia` },
        { property: "og:description", content: cat?.desc ?? "Análises de investimento na Bahia." },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-panel"><Header /><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="font-display text-3xl font-bold">Categoria não encontrada</h1><Link to="/" className="text-brand mt-4 inline-block">Voltar à home</Link></div><Footer /></div>
  ),
  loader: ({ params }) => {
    const cat = CATEGORIES.find((c) => c.slug === params.slug);
    if (!cat) throw notFound();
    return { cat, posts: postsByCategory(params.slug) };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { cat, posts } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-panel">
      <Header />

      {/* breadcrumb + hero */}
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <nav className="text-xs text-ink-soft flex items-center gap-1 mb-4">
            <Link to="/" className="hover:text-brand">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Categoria</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ink">{cat.short}</span>
          </nav>
          <span className="chip-brand inline-flex items-center gap-2"><Folder className="w-3 h-3" /> Categoria</span>
          <h1 className="font-display font-black text-4xl md:text-5xl text-ink mt-3">{cat.name}</h1>
          <p className="mt-3 text-ink-soft max-w-3xl">{cat.desc}</p>
          <div className="mt-4 text-sm text-ink-soft">{posts.length} análise{posts.length !== 1 ? "s" : ""} publicada{posts.length !== 1 ? "s" : ""}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-[1fr_280px]">
        <div>
          {posts.length === 0 ? (
            <p className="text-ink-soft">Nenhuma análise publicada nesta categoria ainda.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2">
              {posts.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          )}
        </div>
        <aside className="space-y-6">
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="section-bar"><span className="section-bar-title">Categorias</span></div>
            <ul className="space-y-2 text-sm">
              {CATEGORIES.map((c) => (
                <li key={c.slug}>
                  <Link to="/categoria/$slug" params={{ slug: c.slug }} className={`block py-1.5 px-2 rounded hover:bg-panel ${c.slug===cat.slug?"text-brand font-semibold":"text-ink-soft"}`}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-5">
            <div className="section-bar"><span className="section-bar-title">Tags</span></div>
            <div className="flex flex-wrap gap-2">
              {ALL_TAGS.map((t) => (
                <Link key={t} to="/tag/$slug" params={{ slug: tagSlug(t) }} className="text-xs px-3 py-1.5 rounded border border-border text-ink-soft hover:bg-brand hover:text-brand-foreground hover:border-brand transition">#{t}</Link>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <Footer />
    </div>
  );
}