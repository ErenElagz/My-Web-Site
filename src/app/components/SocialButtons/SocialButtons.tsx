import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

function SocialButtons(props: { title: string; url: string; icon: string }) {
  return (
    <div className="flex bg-[#21112220] border border-white border-opacity-25 rounded-[999] p-3 gap-3 items-center justify-center">
      <Icon icon={props.icon} width="32" height="32" />

      <a href={props.url} target="_blank">
        <p className="text-xl">{props.title}</p>
      </a>

      <Icon icon="ep:top-right" width="24" height="24" />
    </div>
  );
}

SocialButtons.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
};

export default SocialButtons;
