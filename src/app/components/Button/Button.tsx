import React from "react";
import PropTypes from "prop-types";
import { Icon, iconExists } from "@iconify/react";

function Button(props) {
  return (
    <div className="flex bg-[#ffffff16] rounded-[999] px-4 py-3 items-center justify-center">
      <a href={props.url} target="_blank">
        <p className="text-[16]">{props.title}</p>
      </a>
    </div>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Button;
