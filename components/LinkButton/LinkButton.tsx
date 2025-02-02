import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface LinkButtonProps {
  title: string;
  url: string;
  icon: string;
}

export default function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      href={props.url}
      className="flex w-min bg-[#000] items-center opacity-50 hover:opacity-100 transition-all duration-150 justify-center rounded-[999] p-1"
    >
      <Icon className="text-[#fff]" width="24" height="24" icon={props.icon} />
    </Link>
  );
}

