"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";

interface CopyEmailButtonProps {
  email: string;
}

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-surface-hover"
    >
      <Icon
        icon={copied ? "lucide:check" : "lucide:copy"}
        className="h-3.5 w-3.5 text-text-muted"
      />
      <span>{copied ? "Copied email" : email}</span>
    </button>
  );
}

