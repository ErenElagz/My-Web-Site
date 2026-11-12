"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="h-8 w-8 rounded-full border border-border bg-surface"
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
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-secondary transition-colors hover:border-border-hover hover:text-text-primary"
    >
      <Icon
        icon={isDark ? "lucide:sun" : "lucide:moon"}
        className="h-3.5 w-3.5"
      />
    </button>
  );
}

