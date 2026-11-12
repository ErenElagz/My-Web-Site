import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { profile, featuredProducts, experience, skillGroups } from "@/data/profile";
import { blogs } from "@/data/blogs";
import HeroPreview from "@/components/HeroPreview";
import CopyEmailButton from "@/components/CopyEmailButton";

export default function Home() {
  const recentBlogs = blogs.slice(0, 6);

  return (
    <div className="space-y-20 pt-4 sm:space-y-28 sm:pt-8">
      {/* Split Hero Section */}
      <section className="space-y-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy */}
          <div className="space-y-6 lg:col-span-6">
            <div className="flex items-center gap-3">
              <div className="h-16 w-16 overflow-hidden rounded-full border border-border bg-surface p-0.5 shadow-sm">
                <Image
                  src="/logo.png"
                  alt={profile.name}
                  width={56}
                  height={56}
                  className="h-full w-full rounded-[14px] object-cover"
                  priority
                />
              </div>
              <div>
                <p className="text-2xl font-medium text-text-primary">
                  {profile.handle}
                </p>
                <p className="text-sm text-text-muted">{profile.location}</p>
              </div>
            </div>

            <h1 className="text-[28px] font-medium leading-[1.18] tracking-[-0.03em] text-text-primary sm:text-[36px] lg:text-[40px]">
              Mobile &amp; Full-Stack Engineer designing apps, products and
              interfaces for tech startups.
            </h1>

            <p className="max-w-xl text-[15px] leading-relaxed text-text-muted">
              {profile.summary}
            </p>

            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-xs font-medium text-accent-fg shadow-[var(--shadow-blue)] transition-transform hover:-translate-y-0.5"
              >
                <span>Let&apos;s work together</span>
                <Icon icon="lucide:arrow-up-right" className="h-3.5 w-3.5" />
              </a>
              <CopyEmailButton email={profile.email} />
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div className="lg:col-span-6">
            <HeroPreview />
          </div>
        </div>
      </section>

      {/* Dynamic Work Showcase (alexkyr.com style) */}
      <section id="work" className="space-y-20">
        {featuredProducts.map((p) => {
          const isSmallLarge = p.previewLayout === "small-large";
          const isLargeSmall = p.previewLayout === "large-small";
          const gridLayoutClass = isSmallLarge
            ? "md:grid-cols-[1fr_1.65fr]"
            : isLargeSmall
            ? "md:grid-cols-[1.65fr_1fr]"
            : "md:grid-cols-2";

          const cardContent = (
            <div className="flex flex-col justify-between overflow-hidden rounded-[24px] border border-border bg-surface-subtle p-6 sm:p-8 md:h-[360px]">
              <div className="flex items-center justify-between">
                {p.image && (
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={44}
                    height={44}
                    className="rounded-xl"
                  />
                )}
                <span className="rounded-full bg-chip-bg px-3 py-1 font-mono text-[11px] text-chip-text">
                  {p.metric}
                </span>
              </div>
              <div className="mt-8 space-y-3">
                <p className="text-2xl font-medium tracking-tight text-text-primary">
                  {p.headline}
                </p>
                <p className="text-sm text-text-muted">{p.description}</p>
                {p.stats && (
                  <div className="grid grid-cols-2 gap-3 pt-2 font-mono text-xs">
                    {p.stats.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-2xl border border-border bg-bg p-3"
                      >
                        <p className="text-base font-medium text-text-primary">
                          {s.value}
                        </p>
                        <p className="text-text-muted">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );

          return (
            <article key={p.id} className="group space-y-4">
              <div className={`grid grid-cols-1 gap-4 ${gridLayoutClass}`}>
                {p.external ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link href={p.href} className="block">
                    {cardContent}
                  </Link>
                )}

                {p.previewImage && (
                  <a
                    href={p.href}
                    target={p.external ? "_blank" : undefined}
                    rel={p.external ? "noopener noreferrer" : undefined}
                    className="aspect-[16/10] overflow-hidden rounded-[24px] border border-border bg-surface-subtle md:aspect-auto md:h-[360px]"
                  >
                    <Image
                      src={p.previewImage}
                      alt={p.name}
                      width={1080}
                      height={720}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </a>
                )}
              </div>

              <div className="flex flex-col justify-between gap-3 px-1 md:flex-row md:items-center">
                <a
                  href={p.href}
                  target={p.external ? "_blank" : undefined}
                  rel={p.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-base font-medium text-text-primary hover:underline sm:text-lg"
                >
                  {p.image && (
                    <Image
                      src={p.image}
                      alt=""
                      width={22}
                      height={22}
                      className="rounded-md"
                    />
                  )}
                  <span>{p.headline}</span>
                </a>
                <ul className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border bg-chip-bg px-3 py-1 text-xs text-chip-text"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </section>

      {/* Experience & Milestones */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-medium tracking-tight text-text-primary">
              Experience &amp; Milestones
            </h2>
            <span className="h-2 w-2 rounded-full bg-accent" />
          </div>
        </div>

        <div className="space-y-3">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-surface-soft p-5 transition-colors hover:border-border-hover sm:flex-row sm:items-center"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-base font-medium text-text-primary">
                    {job.role}
                  </span>
                  <span className="text-sm font-medium text-accent">
                    @ {job.company}
                  </span>
                </div>
                <p className="max-w-2xl text-sm text-text-muted">
                  {job.highlights[0]}
                </p>
              </div>

              <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
                <span className="font-mono text-xs text-text-muted">
                  {job.period} · {job.location}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {job.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-chip-bg px-2.5 py-0.5 font-mono text-[11px] text-chip-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities + Writing Split */}
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Writing */}
        <div className="space-y-6 lg:col-span-7">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium tracking-tight text-text-primary">
              Latest Articles
            </h2>
            <Link
              href="/blogs"
              className="text-xs font-medium text-text-muted hover:text-text-primary"
            >
              All writing →
            </Link>
          </div>

          <div className="rounded-[24px] border border-border bg-surface-soft p-6 sm:p-8">
            <div className="divide-y divide-border">
              {recentBlogs.map((post) => (
                <a
                  key={post.id}
                  href={post.devtoUrl || post.mediumUrl || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between gap-4 py-3.5 first:pt-0 last:pb-0"
                >
                  <span className="text-sm font-medium text-text-primary group-hover:text-accent">
                    {post.title}
                  </span>
                  <span className="shrink-0 font-mono text-xs text-text-muted">
                    {post.date}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="space-y-6 lg:col-span-5">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium tracking-tight text-text-primary">
              Technical Stack
            </h2>
          </div>

          <div className="rounded-[24px] border border-border bg-surface-soft p-6 sm:p-8">
            <div className="space-y-4">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    {group.label}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-text-secondary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rounded Contact Panel (alexkyr.com style) */}
      <section className="rounded-[36px] border border-border bg-[var(--contact-panel)] p-8 sm:p-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-medium tracking-tight text-text-primary sm:text-3xl">
              Let&apos;s build something thoughtful together.
            </h2>
            <p className="max-w-xl text-sm text-text-muted">
              Whether it&apos;s a cross-platform mobile app, a scalable Next.js
              platform, or a complete UI design system, reach out anytime.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-fg shadow-[var(--shadow-blue)] transition-transform hover:-translate-y-0.5"
            >
              <span>Get in touch</span>
              <Icon icon="lucide:arrow-up-right" className="h-4 w-4" />
            </a>
            <Link
              href="/designs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-border-hover"
            >
              <span>View Designs</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
