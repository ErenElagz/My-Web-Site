import React from "react";

interface ButtonProps {
  title: string;
  url?: string;
  className?: string;
}

export default function Button(props: ButtonProps) {
  return (
    <a href={props.url}>
      <div
        className={`flex bg-[--buttonBackground] border border-[--navBarBorder] rounded-3xl px-4 py-2 hover:border-[--buttonBorder] transition-all duration-150 ${props.className}`}
      >
        <p className="text-[16] opacity-75 whitespace-nowrap">{props.title}</p>
      </div>
    </a>
  );
}