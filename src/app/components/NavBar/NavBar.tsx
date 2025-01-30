import React from "react";
import PropTypes from "prop-types";

function NavBar(props) {
  return (
    <div className="flex bg-[#FFFFFF16] w-min rounded-[999] py-3 px-8 gap-12 items-center">
      <a href="http://" target="_blank">
        ReadMe
      </a>
      <a href="https://" target="_blank">
        Blog
      </a>
      <a href="https://" target="_blank">
        Projects
      </a>
      <a href="https://" target="_blank">
        Item
      </a>
    </div>
  );
}

NavBar.propTypes = {
    active: PropTypes.string,
};

export default NavBar;
