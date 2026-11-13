"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { designs, DesignItem } from "@/data/designs";

type Filter = "all" | "mobile" | "web" | "component" | "branding";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "web", label: "Web & Landings" },
  { id: "component", label: "Components" },
  { id: "branding", label: "Branding & Logos" },
];

export default function DesignsFilter() {
  const [active, setActive] = useState<Filter>("all");

  const items =
    active === "all"
      ? designs
      : designs.filter((d) => d.category === active);

  return (
    <div className="space-y-6">
      {/* Category Tabs */}
      <div
        className="flex flex-wrap items-center gap-1.5"
        role="tablist"
        aria-label="Design categories"
      >
        {filters.map((f) => {
          const isSelected = active === f.id;
          const count =
            f.id === "all"
              ? designs.length
              : designs.filter((d) => d.category === f.id).length;

          return (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActive(f.id)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
                isSelected
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-surface text-text-secondary hover:border-border-hover hover:text-text-primary"
              }`}
            >
              <span>{f.label}</span>
              <span
                className={`text-[10px] ${
                  isSelected ? "opacity-90" : "text-text-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((design: DesignItem) => {
          const primaryUrl =
            design.dribbbleUrl ||
            design.behanceUrl ||
            design.pinterestUrl ||
            design.figmaUrl ||
            "#";

          return (
            <div
              key={design.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-hover"
            >
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[16/11] w-full overflow-hidden border-b border-border bg-surface-subtle"
              >
                <Image
                  src={design.image}
                  alt={design.title}
                  width={640}
                  height={440}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </a>

              <div className="flex flex-1 flex-col justify-between p-4">
                <div>
                  <a
                    href={primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start justify-between gap-2 text-sm font-medium tracking-tight text-text-primary hover:underline"
                  >
                    <span>{design.title}</span>
                  </a>
                  <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                    {design.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-3 font-mono text-[11px] text-text-muted">
                  {design.dribbbleUrl && (
                    <a
                      href={design.dribbbleUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-text-primary"
                    >
                      <Icon
                        icon="akar-icons:dribbble-fill"
                        className="h-3.5 w-3.5"
                      />
                      <span>Dribbble</span>
                    </a>
                  )}
                  {design.behanceUrl && (
                    <a
                      href={design.behanceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-text-primary"
                    >
                      <Icon
                        icon="akar-icons:behance-fill"
                        className="h-3.5 w-3.5"
                      />
                      <span>Behance</span>
                    </a>
                  )}
                  {design.pinterestUrl && (
                    <a
                      href={design.pinterestUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-text-primary"
                    >
                      <Icon
                        icon="akar-icons:pinterest-fill"
                        className="h-3.5 w-3.5"
                      />
                      <span>Pinterest</span>
                    </a>
                  )}
                  {design.figmaUrl && (
                    <a
                      href={design.figmaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-text-primary"
                    >
                      <Icon icon="lucide:figma" className="h-3.5 w-3.5" />
                      <span>Figma</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
