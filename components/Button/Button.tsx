import React from "react";
import PropTypes from "prop-types";

function Button(props: any) {
  return (
    <a href={props.url}>
      <div className="flex bg-[--buttonBackground] rounded-[999] px-4 py-3 items-center justify-center">
        <p className="text-[16] ">{props.title}</p>
      </div>
    </a>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default Button;
