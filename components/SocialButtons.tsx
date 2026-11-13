import React from "react";
import { Icon } from "@iconify/react";

interface SocialButtonsProps {
  title: string;
  url: string;
  icon: string;
}

export default function SocialButtons(props: SocialButtonsProps) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={props.title}
      className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-text-secondary transition-colors hover:border-border-hover hover:bg-surface-hover hover:text-text-primary"
    >
      <Icon icon={props.icon} className="h-3.5 w-3.5" aria-hidden="true" />
      <span className="whitespace-nowrap">{props.title}</span>
    </a>
  );
}
