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

export default function ProjectCard2(props: ProjectCardProps) {
  return (
    <a
      href={props.githubUrl || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start justify-between gap-4 p-4 transition-colors hover:bg-surface-hover"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-subtle text-text-primary">
          <Icon icon={props.icon} className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <h3 className="text-sm font-medium tracking-tight text-text-primary">
            {props.title}
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-text-secondary">
            {props.description}
          </p>
        </div>
      </div>

      <Icon
        icon="lucide:arrow-up-right"
        className="mt-1 h-3.5 w-3.5 shrink-0 text-text-muted transition-colors group-hover:text-text-primary"
      />
    </a>
  );
}
