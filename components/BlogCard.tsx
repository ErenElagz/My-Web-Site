"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface BlogCardProps {
  id: number;
  date: string;
  title: string;
  description: string;
  readTime?: string;
  tags?: string[];
  mediumUrl?: string;
  devtoUrl?: string;
  className?: string;
  image?: string;
}

function formatDate(dateStr: string) {
  try {
    const [year, month, day] = dateStr.split("-");
    if (!year || !month || !day) return dateStr;
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export default function BlogCard(props: BlogCardProps) {
  const [imgError, setImgError] = useState(false);
  const primaryUrl = props.devtoUrl || props.mediumUrl || "#";

  return (
    <article className="group relative flex flex-col-reverse justify-between gap-5 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-border-hover hover:bg-surface-hover hover:shadow-sm sm:flex-row sm:items-center">
      {/* Content Column */}
      <div className="flex flex-1 flex-col justify-between">
        {/* Meta badges & tags */}
        <div className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-text-muted">
          <time dateTime={props.date} className="tabular-nums">
            {formatDate(props.date)}
          </time>

          {props.readTime && (
            <>
              <span className="opacity-40">·</span>
              <span className="inline-flex items-center gap-1">
                <Icon icon="lucide:clock" className="h-3 w-3" />
                {props.readTime}
              </span>
            </>
          )}

          {props.tags && props.tags.length > 0 && (
            <>
              <span className="opacity-40">·</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {props.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-border bg-surface-subtle px-1.5 py-0.5 text-[10px] text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-2.5 text-base font-medium tracking-tight text-text-primary sm:text-lg">
          <a
            href={primaryUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-start gap-1.5 transition-colors group-hover:text-accent"
          >
            <span>{props.title}</span>
            <Icon
              icon="lucide:arrow-up-right"
              className="mt-1 h-4 w-4 shrink-0 text-text-muted transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
              aria-hidden="true"
            />
          </a>
        </h3>

        {/* Description */}
        <p className="mt-2 text-[13px] leading-relaxed text-text-secondary sm:text-sm">
          {props.description}
        </p>

        {/* Action / Platform Buttons */}
        <div className="mt-4 flex flex-wrap items-center gap-2 font-mono text-[11px]">
          {props.mediumUrl && (
            <a
              href={props.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-subtle px-2.5 py-1 text-text-secondary transition-colors hover:border-[#00ab6c]/40 hover:bg-[#00ab6c]/5 hover:text-[#00ab6c]"
            >
              <Icon icon="akar-icons:medium-fill" className="h-3 w-3" />
              <span>Medium</span>
            </a>
          )}
          {props.devtoUrl && (
            <a
              href={props.devtoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-subtle px-2.5 py-1 text-text-secondary transition-colors hover:border-text-primary hover:bg-surface hover:text-text-primary"
            >
              <Icon icon="fa6-brands:dev" className="h-3 w-3" />
              <span>Dev.to</span>
            </a>
          )}
        </div>
      </div>

      {/* Image Column */}
      {props.image && !imgError && (
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-xl border border-border bg-surface-subtle sm:w-48 sm:aspect-[16/11] md:w-56"
        >
          <Image
            src={props.image}
            alt={props.title}
            width={480}
            height={300}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        </a>
      )}
    </article>
  );
}
