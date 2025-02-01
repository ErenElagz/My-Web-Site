import React from "react";

interface ButtonProps {
  title: string;
  url?: string;
  className?: string;
}

function Button(props: ButtonProps) {
  return (
    <a href={props.url}>
      <div className="flex bg-[--buttonBackground] border border-[--navBarBorder] rounded-[999] px-4 py-2 hover:border-[--buttonBorder] transition-all duration-150">
        <p className="text-[16] opacity-75">{props.title}</p>
      </div>
    </a>
  );
}

export default Button;
