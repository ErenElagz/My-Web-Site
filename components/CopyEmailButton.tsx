"use client";

import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface CopyEmailButtonProps {
  email: string;
}

type CopyStatus = "idle" | "copied" | "error";

export default function CopyEmailButton({ email }: CopyEmailButtonProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        setStatus("copied");
      } else {
        // Fallback for non-secure / headless browser contexts
        const textarea = document.createElement("textarea");
        textarea.value = email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setStatus("copied");
      }
    } catch {
      setStatus("error");
    }

    timeoutRef.current = setTimeout(() => {
      setStatus("idle");
    }, 2000);
  };

  const isCopied = status === "copied";
  const isError = status === "error";

  const gmailUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(
    email
  )}`;

  return (
    <div
      data-state={status}
      data-email={email}
      className="inline-flex items-center overflow-hidden rounded-full border border-border bg-surface text-xs font-medium text-text-primary transition-colors hover:border-border-hover"
    >
      {/* Direct Click to Gmail */}
      <a
        href={gmailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2 text-text-primary transition-colors hover:bg-surface-hover hover:text-accent"
        title="Send email via Gmail"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 193"
          className="h-3.5 w-auto shrink-0"
          aria-hidden="true"
        >
          <path
            fill="#4285f4"
            d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"
          />
          <path
            fill="#34a853"
            d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"
          />
          <path
            fill="#ea4335"
            d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"
          />
          <path
            fill="#fbbc04"
            d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"
          />
          <path
            fill="#c5221f"
            d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"
          />
        </svg>
        <span className="font-mono text-[12px]">{email}</span>
      </a>

      {/* Divider */}
      <div className="h-4 w-px bg-border" />

      {/* Copy Button */}
      <button
        type="button"
        onClick={handleCopy}
        data-state={status}
        className="flex items-center gap-1.5 px-3 py-2.5 text-text-muted transition-colors hover:bg-surface-hover hover:text-text-primary"
        title={
          isCopied
            ? "Copied!"
            : isError
            ? "Copy failed - click to retry"
            : "Copy email to clipboard"
        }
        aria-label={
          isCopied
            ? "Email address copied"
            : isError
            ? "Failed to copy email"
            : "Copy email address"
        }
      >
        <Icon
          icon={
            isCopied
              ? "lucide:check"
              : isError
              ? "lucide:alert-circle"
              : "lucide:copy"
          }
          className={`h-3.5 w-3.5 ${
            isCopied ? "text-accent" : isError ? "text-red-500" : ""
          }`}
          aria-hidden="true"
        />
        <span className="sr-only" aria-live="polite">
          {isCopied
            ? "Email copied to clipboard"
            : isError
            ? "Failed to copy email address"
            : ""}
        </span>
      </button>
    </div>
  );
}
