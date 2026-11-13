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

  const heroSocials = (
    <div className="flex shrink-0 items-center">
      <a
        href="https://linkedin.com/in/erenelagz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:-translate-y-0.5 hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
      >
        <Icon icon="akar-icons:linkedin-fill" className="h-4 w-4" />
      </a>
      <a
        href="https://x.com/ErenElagz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (Twitter)"
        title="X (Twitter)"
        className="flex h-10 w-10 ml-[-12px] items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:-translate-y-0.5 hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
      >
        <Icon icon="akar-icons:x-fill" className="h-4 w-4" />
      </a>
      <a
        href="https://github.com/erenelagz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
        className="flex h-10 w-10 ml-[-12px] items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-all hover:-translate-y-0.5 hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
      >
        <Icon icon="akar-icons:github-fill" className="h-4 w-4" />
      </a>
    </div>
  );

  return (
    <div className="space-y-20 pt-4 sm:space-y-28 sm:pt-8">
      {/* Split Hero Section */}
      <section className="space-y-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy */}
          <div className="space-y-6 lg:col-span-6">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-16 w-16 overflow-hidden rounded-full border border-border bg-surface p-0.5 shadow-sm">
                  <Image
                    src="/logo.png"
                    alt={profile.name}
                    width={56}
                    height={56}
                    className="h-full w-full rounded-full object-cover"
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

              {/* Circled Social Buttons (Desktop) */}
              <div className="hidden sm:flex">
                {heroSocials}
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

              {/* Circled Social Buttons (Mobile) */}
              <div className="flex items-center sm:hidden">
                {heroSocials}
              </div>
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
                <p className="text-sm text-text-muted line-clamp-2 sm:line-clamp-none">
                  {p.description}
                </p>
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
                {p.external ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-wrap items-center gap-2 text-base font-medium text-text-primary hover:underline sm:text-lg"
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
                    <span className="font-semibold text-text-primary">{p.name}</span>
                    <span className="text-text-muted">·</span>
                    <span className="text-sm font-normal text-text-muted sm:text-base">
                      {p.tagline}
                    </span>
                    <span className="text-xs text-text-muted">↗</span>
                  </a>
                ) : (
                  <Link
                    href={p.href}
                    className="flex flex-wrap items-center gap-2 text-base font-medium text-text-primary hover:underline sm:text-lg"
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
                    <span className="font-semibold text-text-primary">{p.name}</span>
                    <span className="text-text-muted">·</span>
                    <span className="text-sm font-normal text-text-muted sm:text-base">
                      {p.tagline}
                    </span>
                    <span className="text-xs text-text-muted">→</span>
                  </Link>
                )}
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
      <section className="space-y-6" aria-labelledby="experience-heading">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2
              id="experience-heading"
              className="text-xl font-medium tracking-tight text-text-primary"
            >
              Experience &amp; Milestones
            </h2>
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          </div>
        </div>

        <ol className="space-y-3" role="list">
          {experience.map((job) => (
            <li
              key={`${job.company}-${job.period}`}
              className="flex flex-col justify-between gap-4 rounded-2xl border border-border bg-surface-soft p-5 transition-colors hover:border-border-hover sm:flex-row sm:items-center"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <h3 className="text-base font-medium text-text-primary">
                    {job.role}
                  </h3>
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
                  <time>{job.period}</time> · <span>{job.location}</span>
                </span>
                <ul className="flex flex-wrap gap-1.5" role="list">
                  {job.stack.slice(0, 3).map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-chip-bg px-2.5 py-0.5 font-mono text-[11px] text-chip-text"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Capabilities + Writing Split */}
      <section
        className="grid grid-cols-1 gap-6 lg:grid-cols-12"
        aria-label="Articles and Skills"
      >
        {/* Writing */}
        <div className="space-y-6 lg:col-span-7">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-medium tracking-tight text-text-primary">
              Latest Articles
            </h2>
            <Link
              href="/blog"
              className="text-xs font-medium text-text-muted hover:text-text-primary"
            >
              All writing →
            </Link>
          </div>

          <div className="rounded-[24px] border border-border bg-surface-soft p-6 sm:p-8">
            <ul className="divide-y divide-border" role="list">
              {recentBlogs.map((post) => (
                <li key={post.id} className="py-3.5 first:pt-0 last:pb-0">
                  <a
                    href={post.devtoUrl || post.mediumUrl || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4"
                  >
                    <span className="text-sm font-medium text-text-primary transition-colors group-hover:text-accent">
                      {post.title}
                    </span>
                    <time
                      dateTime={post.date}
                      className="shrink-0 font-mono text-xs text-text-muted"
                    >
                      {post.date}
                    </time>
                  </a>
                </li>
              ))}
            </ul>
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
                  <h3 className="font-mono text-[11px] uppercase tracking-wider text-text-muted">
                    {group.label}
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-1.5" role="list">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border border-border bg-bg px-3 py-1 text-xs text-text-secondary"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
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
              href="/design"
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
