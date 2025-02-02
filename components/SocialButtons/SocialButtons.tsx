import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface SocialButtonsProps {
  title: string;
  url: string;
  icon: string;
}

function SocialButtons(props: SocialButtonsProps) {
  return (
    <Link href={props.url} target="_blank">
      <div className="flex bg-[--buttonBackground] opacity-50 hover:opacity-100 transition:opacity duration-300 border-1 rounded-lg p-2 border border-[--buttonBorder] gap-2 items-center justify-center">
        <Icon icon={props.icon} width="16" height="16" />
        <p className="text-base">{props.title}</p>
      </div>
    </Link>
  );
}

export default SocialButtons;
