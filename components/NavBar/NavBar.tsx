"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/designs", label: "Designs" },
  { href: "/blogs", label: "Writing" },
];

export default function NavBar() {
  const pathname = usePathname();
  const normalized = pathname?.replace(/\/$/, "") || "/";

  return (
    <header className="sticky top-0 z-40 -mx-5 bg-bg/85 backdrop-blur-md sm:-mx-8 lg:-mx-12">
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        {/* Left: Avatar + Name + Availability Pill */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="flex items-center gap-2 text-[16px] font-medium tracking-tight text-text-primary"
          >
            <span className="h-8 w-8 overflow-hidden rounded-full border border-border bg-surface">
              <Image
                src="/logo.png"
                alt="Eren Elagoz"
                width={32}
                height={32}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden text-text-muted sm:inline">Hello! I am</span>
            <span className="font-semibold text-text-primary">Eren E.</span>
          </Link>
        </div>

        {/* Right: Theme Toggle + Links + Signature Blue CTA */}
        <div className="flex items-center gap-2 sm:gap-4">
          <nav className="flex items-center gap-1" aria-label="Primary">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? normalized === "/"
                  : normalized.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-1.5 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "bg-chip-bg text-text-primary"
                      : "text-text-muted hover:text-text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <ThemeToggle />

          <a
            href="mailto:erenelagoz@gmail.com"
            className="hidden items-center rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-accent-fg shadow-[var(--shadow-blue)] transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Let&apos;s work together
          </a>
        </div>
      </div>
    </header>
  );
}
