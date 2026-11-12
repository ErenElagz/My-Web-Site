"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-start justify-center py-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
        Error
      </p>
      <h1 className="mt-2 text-2xl font-medium tracking-tight text-text-primary">
        Something went wrong
      </h1>
      <p className="mt-2 text-sm text-text-secondary">
        An unexpected error occurred while rendering this page.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-5 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-surface-hover"
      >
        Try again
      </button>
    </div>
  );
}

