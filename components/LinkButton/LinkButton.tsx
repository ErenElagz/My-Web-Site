import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import Link from "next/link";

function LinkButton(props: { title: string; url: string }) {
  return (
    <Link
      href={props.url}
      className="flex w-min px-3 py-2 gap-1 items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-100"
    >
      <p className="whitespace-nowrap underline">{props.title}</p>
      <Icon icon="ep:top-right" width="16" height="16" />
    </Link>
  );
}

LinkButton.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default LinkButton;
