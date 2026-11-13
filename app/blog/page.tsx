import React from "react";
import { Metadata } from "next";
import SocialButtons from "@/components/SocialButtons";
import BlogsFilter from "@/components/BlogsFilter";

export const metadata: Metadata = {
  title: "Writing · Eren Elagoz",
  description:
    "Engineering essays and technical guides on React Native performance, mobile architecture, UI systems, and indie product development.",
};

export default function BlogPage() {
  return (
    <div className="space-y-10">
      <header className="pt-4 sm:pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
          Writing &amp; Research
        </p>
        <h1 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-text-primary sm:text-3xl">
          Engineering Notes &amp; Essays
        </h1>
        <p className="mt-2.5 text-[15px] leading-relaxed text-text-secondary">
          Deep dives on React Native performance, mobile UI architectures, and
          shipping indie products from scratch. Published across Medium, Dev.to,
          and syndicated via RSS.
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

      <BlogsFilter />
    </div>
  );
}
