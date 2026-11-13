"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/data/profile";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/design", label: "Design" },
  { href: "/blog", label: "Blog" },
];

export default function NavBar() {
  const pathname = usePathname();
  const normalized = pathname?.replace(/\/$/, "") || "/";

  return (
    <header className="sticky top-0 z-40 -mx-5 bg-bg/80 backdrop-blur-lg sm:-mx-8 lg:-mx-12">
      <div className="relative mx-auto flex h-16 max-w-[1240px] items-center justify-between px-5 sm:h-[72px] sm:px-8 lg:px-12">
        {/* Left: Logo & Handle */}
        <div className="flex items-center">
          <Link
            href="/"
            aria-label="Eren Elagoz Home"
            className="flex items-center gap-2 sm:gap-2.5 transition-opacity hover:opacity-85"
          >
            <span className="h-8 w-8 shrink-0 overflow-hidden rounded-full border border-border bg-surface sm:h-9 sm:w-9">
              <Image
                src="/logo.png"
                alt="Eren Elagoz"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden font-mono text-sm font-medium tracking-tight text-text-primary sm:inline">
              ErenElagz<span className="text-text-muted">/</span>
            </span>
          </Link>
        </div>

        {/* Center: Navigation Links */}
        <nav
          className="absolute left-1/2 flex -translate-x-1/2 items-center"
          aria-label="Primary"
        >
          <ul className="flex items-center gap-0.5 sm:gap-1" role="list">
            {navLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? normalized === "/"
                  : normalized.startsWith(item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`rounded-full px-2 py-1 text-[14px] font-medium tracking-tight transition-colors sm:px-3 sm:py-1.5 sm:tracking-normal ${
                      isActive
                        ? "bg-chip-bg text-text-primary"
                        : "text-text-muted hover:text-text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Theme Toggle + Signature Blue CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />

          <a
            href={`mailto:${profile.email}`}
            className="hidden items-center rounded-full bg-accent px-4 py-2 text-[13px] font-medium text-accent-fg shadow-[var(--shadow-blue)] transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Let&apos;s work together
          </a>
        </div>
      </div>
    </header>
  );
}
