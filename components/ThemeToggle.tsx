"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`h-7 w-7 rounded-full border border-border bg-surface sm:h-8 sm:w-8 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
      className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary sm:h-8 sm:w-8 ${className}`}
    >
      <Icon
        icon={isDark ? "lucide:sun" : "lucide:moon"}
        className="h-3 w-3 sm:h-3.5 sm:w-3.5"
        aria-hidden="true"
      />
    </button>
  );
}
