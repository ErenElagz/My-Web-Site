import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "subtle";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  const styles =
    variant === "subtle"
      ? "bg-surface-subtle text-text-secondary border-transparent"
      : "bg-surface text-text-secondary border-border";

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[11px] leading-4 ${styles}`}
    >
      {children}
    </span>
  );
}

