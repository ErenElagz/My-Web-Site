import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-center py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
        404
      </p>
      <h1 className="mt-2 text-2xl font-medium tracking-tight text-text-primary">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-surface-hover"
      >
        Back to overview
      </Link>
    </div>
  );
}

