import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { PostCard } from "@/components/site/PostCard";
import { ALL_TAGS, postsByTag, tagSlug, type FullPost } from "@/lib/posts";
import { ChevronRight, Tag as TagIcon } from "lucide-react";

export const Route = createFileRoute("/tag/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `#${params.slug} — AgoraNaBahia` },
      { name: "description", content: `Análises marcadas com #${params.slug} no AgoraNaBahia.` },
    ],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen bg-panel"><Header /><div className="mx-auto max-w-3xl px-4 py-24 text-center"><h1 className="font-display text-3xl font-bold">Tag não encontrada</h1><Link to="/" className="text-brand mt-4 inline-block">Voltar à home</Link></div><Footer /></div>
  ),
  loader: ({ params }) => {
    const posts = postsByTag(params.slug);
    const label = ALL_TAGS.find((t) => tagSlug(t) === params.slug);
    if (!label) throw notFound();
    return { label, posts };
  },
  component: TagPage,
});

function TagPage() {
  const { label, posts } = Route.useLoaderData() as { label: string; posts: FullPost[] };
  return (
    <div className="min-h-screen bg-panel">
      <Header />
      <section className="bg-background border-b border-border">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <nav className="text-xs text-ink-soft flex items-center gap-1 mb-4">
            <Link to="/" className="hover:text-brand">Início</Link>
            <ChevronRight className="w-3 h-3" />
            <span>Tag</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-ink">#{label}</span>
          </nav>
          <span className="chip-brand inline-flex items-center gap-2"><TagIcon className="w-3 h-3" /> Tag</span>
          <h1 className="font-display font-black text-4xl md:text-5xl text-ink mt-3">#{label}</h1>
          <div className="mt-3 text-sm text-ink-soft">{posts.length} análise{posts.length !== 1 ? "s" : ""}</div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12">
        {posts.length === 0 ? (
          <p className="text-ink-soft">Nenhuma análise com essa tag.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => <PostCard key={p.slug} post={p} />)}
          </div>
        )}
        <div className="mt-12">
          <div className="section-bar"><span className="section-bar-title">Todas as tags</span></div>
          <div className="flex flex-wrap gap-2">
            {ALL_TAGS.map((t) => (
              <Link key={t} to="/tag/$slug" params={{ slug: tagSlug(t) }} className={`text-xs px-3 py-1.5 rounded border transition ${tagSlug(t)===tagSlug(label)?"bg-brand text-brand-foreground border-brand":"border-border text-ink-soft hover:bg-brand hover:text-brand-foreground hover:border-brand"}`}>#{t}</Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}