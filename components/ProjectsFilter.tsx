"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { featuredProducts } from "@/data/profile";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectCard2 from "@/components/ProjectCard2";
import Badge from "@/components/Badge";

type Category = "all" | "products" | "repos" | "iot" | "ai";

const categories: { id: Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "products", label: "Products" },
  { id: "repos", label: "Open Source" },
  { id: "iot", label: "IoT & Embedded" },
  { id: "ai", label: "ML & AI" },
];

export default function ProjectsFilter() {
  const [active, setActive] = useState<Category>("all");

  const repoProjects = projects.filter((p) => p.category === "repo");
  const iotProjects = projects.filter((p) => p.category === "iot");
  const aiProjects = projects.filter((p) => p.category === "ai");

  return (
    <div className="space-y-10" data-active-category={active}>
      {/* Minimal pill tabs */}
      <div
        className="flex flex-wrap items-center gap-1.5"
        role="tablist"
        aria-label="Project categories"
      >
        {categories.map((cat) => {
          const isSelected = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              data-state={isSelected ? "active" : "inactive"}
              onClick={() => setActive(cat.id)}
              className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                isSelected
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-surface text-text-secondary hover:border-border-hover hover:text-text-primary"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Flagship Products */}
      {(active === "all" || active === "products") && (
        <section aria-labelledby="flagship-heading">
          <h2
            id="flagship-heading"
            className="mb-4 text-xl font-medium tracking-tight text-text-primary"
          >
            Flagship Products
          </h2>
          <ul
            className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface-soft"
            role="list"
          >
            {featuredProducts.map((item) => {
              const inner = (
                <article className="group flex items-start justify-between gap-4 p-4 transition-colors hover:bg-surface-hover sm:p-5">
                  <div className="flex items-start gap-3.5">
                    <div
                      className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-subtle"
                      aria-hidden="true"
                    >
                      {item.image && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={36}
                          height={36}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                        <h3 className="text-[15px] font-medium text-text-primary">
                          {item.name}
                        </h3>
                        <span className="text-xs text-text-muted">
                          {item.tagline}
                        </span>
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary line-clamp-2 sm:line-clamp-none">
                        {item.description}
                      </p>
                      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                        <Badge>{item.metric}</Badge>
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="subtle">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Icon
                    icon={
                      item.external
                        ? "lucide:arrow-up-right"
                        : "lucide:arrow-right"
                    }
                    className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-colors group-hover:text-text-primary"
                    aria-hidden="true"
                  />
                </article>
              );

              return (
                <li key={item.id}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {inner}
                    </a>
                  ) : (
                    <Link href={item.href} className="block">
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </section>
      )}

      {/* Open Source Repositories */}
      {(active === "all" || active === "repos") && (
        <section aria-labelledby="repos-heading">
          <h2
            id="repos-heading"
            className="mb-4 text-xl font-medium tracking-tight text-text-primary"
          >
            Open Source &amp; Software
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3" role="list">
            {repoProjects.map((project) => (
              <li key={project.id}>
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  githubUrl={project.githubUrl}
                  stars={project.stars}
                  forks={project.forks}
                  icon={project.icon}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* 2-Column Grid for IoT & AI */}
      {(active === "all" || active === "iot" || active === "ai") && (
        <div
          className={
            active === "all"
              ? "grid grid-cols-1 items-start gap-6 lg:grid-cols-2"
              : "space-y-6"
          }
        >
          {/* IoT & Embedded */}
          {(active === "all" || active === "iot") && (
            <section aria-labelledby="iot-heading">
              <h2
                id="iot-heading"
                className="mb-4 text-xl font-medium tracking-tight text-text-primary"
              >
                Internet of Things &amp; Embedded Systems
              </h2>
              <ul
                className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface-soft"
                role="list"
              >
                {iotProjects.map((project) => (
                  <li key={project.id}>
                    <ProjectCard2
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      githubUrl={project.githubUrl}
                      stars={project.stars}
                      forks={project.forks}
                      icon={project.icon}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Machine Learning & AI */}
          {(active === "all" || active === "ai") && (
            <section aria-labelledby="ai-heading">
              <h2
                id="ai-heading"
                className="mb-4 text-xl font-medium tracking-tight text-text-primary"
              >
                Machine Learning &amp; AI
              </h2>
              <ul
                className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface-soft"
                role="list"
              >
                {aiProjects.map((project) => (
                  <li key={project.id}>
                    <ProjectCard2
                      id={project.id}
                      title={project.title}
                      description={project.description}
                      githubUrl={project.githubUrl}
                      stars={project.stars}
                      forks={project.forks}
                      icon={project.icon}
                    />
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
