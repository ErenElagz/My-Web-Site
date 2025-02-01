import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

interface LinkButtonProps {
  title: string;
  url: string;
}

function LinkButton(props: LinkButtonProps) {
  return (
    <Link
      href={props.url}
      className="flex w-min px-3 py-2 gap-1 items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-100"
    >
      <p className="whitespace-nowrap underline text-[--foreground]">
        {props.title}
      </p>
      <Icon
        icon="ep:top-right"
        width="16"
        height="16"
        className="text-[--foreground]"
      />
    </Link>
  );
}

export default LinkButton;
