"use client";

import React from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-[#09090b] px-6 text-[#fafafa]">
        <div className="max-w-sm space-y-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#71717a]">
            Error
          </p>
          <h1 className="text-xl font-medium">Something went wrong</h1>
          <p className="text-sm text-[#a1a1aa]">
            Please try refreshing the page.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-full border border-[#27272a] bg-[#111113] px-4 py-1.5 text-xs font-medium text-[#fafafa]"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}

