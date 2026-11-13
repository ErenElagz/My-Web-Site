import React from "react";
import { Icon } from "@iconify/react";

interface ProjectCardProps {
  id: number | string;
  title: string;
  description: string;
  githubUrl?: string;
  stars: number;
  forks: number;
  className?: string;
  icon: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <article className="h-full">
      <a
        href={props.githubUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${props.title} repository`}
        className="group flex h-full flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-hover hover:bg-surface-hover"
      >
        <div>
          <div className="flex items-start justify-between gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface-subtle text-text-primary"
              aria-hidden="true"
            >
              <Icon icon={props.icon} className="h-4 w-4" />
            </div>
            <Icon
              icon="lucide:arrow-up-right"
              className="h-3.5 w-3.5 text-text-muted transition-colors group-hover:text-text-primary"
              aria-hidden="true"
            />
          </div>

          <h3 className="mt-3 text-sm font-medium tracking-tight text-text-primary">
            {props.title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-text-secondary">
            {props.description}
          </p>
        </div>

        <div className="mt-4 flex items-center gap-4 border-t border-border pt-3 font-mono text-[11px] text-text-muted">
          <span className="inline-flex items-center gap-1" title={`${props.stars} stars`}>
            <Icon icon="lucide:star" className="h-3 w-3" aria-hidden="true" />
            <span>{props.stars}</span>
          </span>
          <span className="inline-flex items-center gap-1" title={`${props.forks} forks`}>
            <Icon icon="lucide:git-fork" className="h-3 w-3" aria-hidden="true" />
            <span>{props.forks}</span>
          </span>
        </div>
      </a>
    </article>
  );
}
