import React from "react";

interface ButtonProps {
  title: string;
  url?: string;
  className?: string;
}

function Button(props: ButtonProps) {
  return (
    <a href={props.url}>
      <div className="flex bg-[--buttonBackground] border-[--buttonBorder] rounded-[999] px-4 py-2 ">
        <p className="text-[16]">{props.title}</p>
      </div>
    </a>
  );
}

export default Button;
