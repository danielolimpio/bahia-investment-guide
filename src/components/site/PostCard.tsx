import { Clock, User } from "lucide-react";

export type Post = {
  title: string;
  category: string;
  image: string;
  author: string;
  date: string;
  excerpt?: string;
  read?: string;
};

export function PostCard({ post, variant = "default" }: { post: Post; variant?: "default" | "compact" | "wide" }) {
  if (variant === "compact") {
    return (
      <article className="flex gap-3 group">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-20 h-20 object-cover rounded flex-none"
        />
        <div className="min-w-0">
          <span className="chip-outline mb-1.5">{post.category}</span>
          <h4 className="font-display font-bold text-[15px] leading-snug text-ink group-hover:text-brand transition line-clamp-3">
            {post.title}
          </h4>
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
        <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover aspect-[4/3]" />
        <div className="p-5">
          <span className="chip-brand mb-3">{post.category}</span>
          <h3 className="font-display font-bold text-xl leading-snug text-ink group-hover:text-brand transition">
            {post.title}
          </h3>
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
        <img src={post.image} alt={post.title} loading="lazy" className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition duration-500" />
        <span className="absolute top-3 left-3 chip-brand">{post.category}</span>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-[17px] leading-snug text-ink group-hover:text-brand transition line-clamp-3">
          {post.title}
        </h3>
        <div className="text-[11px] text-ink-soft mt-3 flex items-center gap-3 border-t border-border pt-3">
          <span className="inline-flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
          <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</span>
        </div>
      </div>
    </article>
  );
}