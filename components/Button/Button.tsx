import React from "react";

interface ButtonProps {
  title: string;
  url?: string;
}

function Button(props: ButtonProps) {
  return (
    <a href={props.url}>
      <div className="flex bg-[--buttonBackground] rounded-[999] px-4 py-3 items-center justify-center">
        <p className="text-[16] ">{props.title}</p>
      </div>
    </a>
  );
}

export default Button;
