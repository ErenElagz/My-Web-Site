"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { featuredProducts } from "@/data/profile";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/Card/ProjectCard";
import ProjectCard2 from "@/components/Card/ProjectCard2";
import Badge from "@/components/ui/Badge";

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
    <div className="space-y-10">
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
        <section>
          <h2 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
            Flagship Products
          </h2>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface-soft">
            {featuredProducts.map((item) => {
              const inner = (
                <div className="group flex items-start justify-between gap-4 p-4 transition-colors hover:bg-surface-hover sm:p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-surface-subtle">
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
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
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
                  />
                </div>
              );

              return item.external ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <Link key={item.id} href={item.href} className="block">
                  {inner}
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Open Source Repositories */}
      {(active === "all" || active === "repos") && (
        <section>
          <h2 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
            Open Source &amp; Software
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {repoProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                stars={project.stars}
                forks={project.forks}
                icon={project.icon}
              />
            ))}
          </div>
        </section>
      )}

      {/* IoT & Embedded */}
      {(active === "all" || active === "iot") && (
        <section>
          <h2 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
            Internet of Things &amp; Embedded Systems
          </h2>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface-soft">
            {iotProjects.map((project) => (
              <ProjectCard2
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                stars={project.stars}
                forks={project.forks}
                icon={project.icon}
              />
            ))}
          </div>
        </section>
      )}

      {/* Machine Learning & AI */}
      {(active === "all" || active === "ai") && (
        <section>
          <h2 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-text-muted">
            Machine Learning &amp; AI
          </h2>
          <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface-soft">
            {aiProjects.map((project) => (
              <ProjectCard2
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                githubUrl={project.githubUrl}
                stars={project.stars}
                forks={project.forks}
                icon={project.icon}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
