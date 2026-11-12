import React from "react";
import { Metadata } from "next";
import SocialButtons from "@/components/SocialButtons/SocialButtons";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/Card/BlogCard";

export const metadata: Metadata = {
  title: "Writing — Eren Elagoz",
  description:
    "Articles on React Native, mobile architecture, UI libraries, and indie product shipping.",
};

export default function BlogsPage() {
  return (
    <div className="space-y-10">
      <header className="pt-4 sm:pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
          Writing
        </p>
        <h1 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-text-primary sm:text-3xl">
          Notes & Articles
        </h1>
        <p className="mt-2.5 text-[15px] leading-relaxed text-text-secondary">
          Essays and technical guides on React Native performance, mobile UI,
          and building indie products, published on Medium and Dev.to.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <SocialButtons
            title="Medium"
            url="https://medium.com/@ErenElagz"
            icon="akar-icons:medium-fill"
          />
          <SocialButtons
            title="Dev.to"
            url="https://dev.to/ErenElagz"
            icon="fa6-brands:dev"
          />
          <SocialButtons
            title="RSS Feed"
            url="https://morss.it/https://medium.com/feed/@erenelagz"
            icon="foundation:rss"
          />
        </div>
      </header>

      <div className="divide-y divide-border border-y border-border">
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            mediumUrl={blog.mediumUrl}
            devtoUrl={blog.devtoUrl}
            image={blog.image}
          />
        ))}
      </div>
    </div>
  );
}
