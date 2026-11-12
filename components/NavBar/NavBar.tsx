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
    <header className="sticky top-0 z-40 -mx-5 bg-bg/80 backdrop-blur-lg sm:-mx-8 lg:-mx-12">
      <div className="relative mx-auto flex h-[72px] max-w-[1240px] items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Left: Logo & Handle */}
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Eren Elagoz Home"
            className="flex items-center gap-2.5 transition-opacity hover:opacity-85"
          >
            <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full border border-border bg-surface">
              <Image
                src="/logo.png"
                alt="Eren Elagoz"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="font-mono text-sm font-medium tracking-tight text-text-primary">
              ErenElagz<span className="text-text-muted">/</span>
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1"
          aria-label="Primary"
        >
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

        {/* Right: Theme Toggle + Signature Blue CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
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
