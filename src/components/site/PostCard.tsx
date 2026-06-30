import { Clock, User } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export type Post = {
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  excerpt?: string;
  read?: string;
  slug?: string;
  categorySlug?: string;
};

function PostLink({ post, className, children }: { post: Post; className?: string; children: ReactNode }) {
  if (post.slug) {
    return (
      <Link to="/artigo/$slug" params={{ slug: post.slug }} className={className}>
        {children}
      </Link>
    );
  }
  return <span className={className}>{children}</span>;
}

function CatLink({ post, className, children }: { post: Post; className?: string; children: ReactNode }) {
  if (post.categorySlug) {
    return (
      <Link to="/categoria/$slug" params={{ slug: post.categorySlug }} className={className}>
        {children}
      </Link>
    );
  }
  return <span className={className}>{children}</span>;
}

export function PostCard({ post, variant = "default" }: { post: Post; variant?: "default" | "compact" | "wide" }) {
  if (variant === "compact") {
    return (
      <article className="flex gap-3 group">
        <PostLink post={post} className="flex-none">
          <img src={post.image} alt={post.title} loading="lazy" className="w-20 h-20 object-cover rounded" />
        </PostLink>
        <div className="min-w-0">
          <CatLink post={post} className="chip-outline mb-1.5 inline-flex">{post.category}</CatLink>
          <PostLink post={post}>
            <h4 className="font-display font-bold text-[15px] leading-snug text-ink group-hover:text-brand transition line-clamp-3">
              {post.title}
            </h4>
          </PostLink>
          <div className="text-[11px] text-ink-soft mt-1.5 flex items-center gap-2">
            <Clock className="w-3 h-3" /> {post.date}
          </div>
        </div>
      </article>
    );
  }
  if (variant === "wide") {
    return (
      <article className="grid md:grid-cols-[260px_1fr] gap-5 bg-card border border-border rounded-lg overflow-hidden group">
        <PostLink post={post} className="block">
          <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover aspect-[4/3]" />
        </PostLink>
        <div className="p-5">
          <CatLink post={post} className="chip-brand mb-3 inline-flex">{post.category}</CatLink>
          <PostLink post={post}>
            <h3 className="font-display font-bold text-xl leading-snug text-ink group-hover:text-brand transition mt-3">
              {post.title}
            </h3>
          </PostLink>
          {post.excerpt && <p className="text-sm text-ink-soft mt-2 line-clamp-2">{post.excerpt}</p>}
          <div className="text-xs text-ink-soft mt-3 flex items-center gap-3">
            <span className="inline-flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
            <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</span>
            {post.read && <span>· {post.read}</span>}
          </div>
        </div>
      </article>
    );
  }
  return (
    <article className="bg-card border border-border rounded-lg overflow-hidden group hover:shadow-md transition">
      <div className="relative overflow-hidden">
        <PostLink post={post} className="block">
          <img src={post.image} alt={post.title} loading="lazy" className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition duration-500" />
        </PostLink>
        <CatLink post={post} className="absolute top-3 left-3 chip-brand">{post.category}</CatLink>
      </div>
      <div className="p-5">
        <PostLink post={post}>
          <h3 className="font-display font-bold text-[17px] leading-snug text-ink group-hover:text-brand transition line-clamp-3">
            {post.title}
          </h3>
        </PostLink>
        <div className="text-[11px] text-ink-soft mt-3 flex items-center gap-3 border-t border-border pt-3">
          <span className="inline-flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
          <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</span>
        </div>
      </div>
    </article>
  );
}