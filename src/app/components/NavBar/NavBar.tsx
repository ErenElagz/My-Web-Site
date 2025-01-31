import React from "react";
import PropTypes from "prop-types";

function NavBar(props = { active: string }) {
  return (
    <div className="flex bg-[#FFFFFF16] w-min rounded-[999] py-3 px-8 gap-12 items-center">
      <a href="http://" target="_blank">
        <p>ReadMe</p>
      </a>
      <a href="https://" target="_blank">
        <p className="opacity-50">Blogs</p>
      </a>
      <a href="https://" target="_blank">
        <p className="opacity-50">Projects</p>
      </a>
      <a href="https://" target="_blank">
        <p className="opacity-50">Item</p>
      </a>
    </div>
  );
}

NavBar.propTypes = {
  active: PropTypes.string,
};

export default NavBar;
