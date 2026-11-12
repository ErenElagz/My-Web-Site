import React from "react";
import { Icon } from "@iconify/react";

interface BlogCardProps {
  id: number;
  date: string;
  title: string;
  description: string;
  mediumUrl?: string;
  devtoUrl?: string;
  className?: string;
  image?: string;
}

export default function BlogCard(props: BlogCardProps) {
  return (
    <article className="group py-5">
      <div className="flex flex-col gap-1.5 sm:flex-row sm:items-baseline sm:justify-between">
        <a
          href={props.devtoUrl || props.mediumUrl || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[15px] font-medium tracking-tight text-text-primary transition-colors group-hover:underline"
        >
          {props.title}
        </a>
        <time className="shrink-0 font-mono text-xs tabular-nums text-text-muted">
          {props.date}
        </time>
      </div>

      <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
        {props.description}
      </p>

      <div className="mt-3 flex items-center gap-3 font-mono text-[11px] text-text-muted">
        {props.mediumUrl && (
          <a
            href={props.mediumUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-text-primary"
          >
            <Icon icon="jam:medium" className="h-3.5 w-3.5" />
            <span>Medium</span>
          </a>
        )}
        {props.devtoUrl && (
          <a
            href={props.devtoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition-colors hover:text-text-primary"
          >
            <Icon icon="fa6-brands:dev" className="h-3.5 w-3.5" />
            <span>Dev.to</span>
          </a>
        )}
      </div>
    </article>
  );
}
