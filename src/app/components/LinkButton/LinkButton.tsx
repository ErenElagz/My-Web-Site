import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

function LinkButton(props: { title: string; url: string; icon: string }) {
  return (
    <div className="flex w-min bg-[#323232] rounded-[999] px-4 py-3 gap-2 items-center justify-center">
      <Icon icon={props.icon} width="24" height="24" />

      <a href={props.url} target="_blank">
        <p className="text-base whitespace-nowrap underline">{props.title}</p>
      </a>

      <Icon icon="ep:top-right" width="20" height="20" />
    </div>
  );
}

LinkButton.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
};

export default LinkButton;
