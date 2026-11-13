"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import { blogs, BlogItem } from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

type Category = "all" | "mobile" | "indie" | "web";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All Articles" },
  { id: "mobile", label: "React Native & Mobile" },
  { id: "indie", label: "Indie & Startups" },
  { id: "web", label: "Web & Architecture" },
];

export default function BlogsFilter() {
  const [active, setActive] = useState<Category>("all");
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener ('/' to focus search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Filtered list
  const filtered = useMemo(() => {
    let list = blogs;
    if (active !== "all") {
      list = list.filter((b) => b.category === active);
    }
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.tags?.some((t) => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [active, query]);

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative max-w-md">
        <Icon
          icon="lucide:search"
          className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
          aria-hidden="true"
        />
        <input
          ref={searchInputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by topic, keyword, or library..."
          aria-label="Search articles"
          className="w-full rounded-full border border-border bg-surface py-2 pl-9 pr-12 text-xs text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
            aria-label="Clear search query"
          >
            <Icon icon="lucide:x" className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        ) : (
          <kbd className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 hidden select-none rounded border border-border bg-surface-subtle px-1.5 py-0.5 font-mono text-[10px] text-text-muted sm:inline-block" aria-hidden="true">
            /
          </kbd>
        )}
      </div>

      {/* Category Tabs */}
      <div
        className="flex flex-wrap items-center gap-1.5"
        role="tablist"
        aria-label="Blog categories"
      >
        {categories.map((c) => {
          const isSelected = active === c.id;
          const count =
            c.id === "all"
              ? blogs.length
              : blogs.filter((b) => b.category === c.id).length;

          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActive(c.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                isSelected
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-surface text-text-secondary hover:border-border-hover hover:text-text-primary"
              }`}
            >
              <span>{c.label}</span>
              <span
                className={`text-[10px] ${
                  isSelected ? "opacity-90" : "text-text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Articles Feed */}
      <section className="space-y-4" aria-label="Articles Feed">
        {filtered.length > 0 ? (
          <ul className="space-y-4" role="list">
            {filtered.map((blog: BlogItem) => (
              <li key={blog.id}>
                <BlogCard
                  id={blog.id}
                  date={blog.date}
                  title={blog.title}
                  description={blog.description}
                  readTime={blog.readTime}
                  tags={blog.tags}
                  mediumUrl={blog.mediumUrl}
                  devtoUrl={blog.devtoUrl}
                  image={blog.image}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface-soft p-12 text-center">
            <Icon
              icon="lucide:file-question"
              className="h-8 w-8 text-text-muted"
              aria-hidden="true"
            />
            <h3 className="mt-3 text-sm font-medium text-text-primary">
              No articles found
            </h3>
            <p className="mt-1 text-xs text-text-secondary max-w-sm">
              No writings match &ldquo;{query}&rdquo;. Try another keyword or reset the filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setActive("all");
              }}
              className="mt-4 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs text-text-primary hover:border-border-hover transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
}
