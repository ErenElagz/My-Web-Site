import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import Image from "next/image";
function Footer(props) {
  return (
    <div className="absolute lg:w-6/12 md:w-11/12 mx-auto bottom-5 flex justify-between items-center">
   
   
      <div className="flex gap-5 items-center">
        <Image src="/logo.png" width="32" height="32" alt="Logo Image" />
        <a href="http://" target="_blank">
          <p className="text-white opacity-60 text-base hover:opacity-100 transition-opacity duration-200">
            ReadMe
          </p>
        </a>
        <a href="http://" target="_blank">
          <p className="text-white opacity-60 text-base hover:opacity-100 transition-opacity duration-200">
            Blogs
          </p>
        </a>
        <a href="http://" target="_blank">
          <p className="text-white opacity-60 text-base hover:opacity-100 transition-opacity duration-200">
            Projects
          </p>
        </a>
        <a href="http://" target="_blank">
          <p className="text-white opacity-60 text-base hover:opacity-100 transition-opacity duration-200">
            Item
          </p>
        </a>
      </div>

      <div className="flex gap-5 items-center">
        <a href="http://" target="_blank">
          <Icon
            className="opacity-50 hover:opacity-100 transition-opacity duration-200"
            icon="akar-icons:github-fill"
            width="32"
            height="32"
          />
        </a>{" "}
        <a href="http://" target="_blank">
          <Icon
            className="opacity-50 hover:opacity-100 transition-opacity duration-200"
            icon="akar-icons:linkedin-fill"
            width="32"
            height="32"
          />
        </a>{" "}
        <a href="http://" target="_blank">
          <Icon
            className="opacity-50 hover:opacity-100 transition-opacity duration-200"
            icon="akar-icons:x-fill"
            width="32"
            height="32"
          />
        </a>
      </div>
    </div>
  );
}

Footer.propTypes = {
  active: PropTypes.string,
};

export default Footer;
