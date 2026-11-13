import React from "react";
import { Icon } from "@iconify/react";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8" role="contentinfo">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <address className="not-italic flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-text-muted">
          <span className="font-medium text-text-primary">{profile.name}</span>
          <span aria-hidden="true">·</span>
          <span className="font-mono">erenelagz.com</span>
        </address>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="font-mono text-xs text-text-muted transition-colors hover:text-text-primary"
          >
            Email ↗
          </a>
          <span className="h-3 w-px bg-border" aria-hidden="true" />
          <nav aria-label="Social profiles">
            <ul className="flex items-center gap-2" role="list">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-border bg-surface-soft text-text-muted transition-colors hover:border-border-hover hover:text-text-primary"
                  >
                    <Icon icon={social.icon} className="h-3.5 w-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
