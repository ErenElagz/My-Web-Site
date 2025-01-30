import React from "react";
import PropTypes from "prop-types";

function LineerGradient(props) {
  return (
    <div className="absolute w-1/3 h-screen place-self-center top-[-50%]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#2BCCCC] to-[#2B9CCC] blur-[200px] opacity-25"></div>
    </div>
  );
}

LineerGradient.propTypes = {
  active: PropTypes.string,
};

export default LineerGradient;
