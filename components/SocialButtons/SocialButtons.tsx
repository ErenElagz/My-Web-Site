import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

function SocialButtons(props: { title: string; url: string; icon: string }) {
  return (
    <div className="flex bg-[#21112220] border border-white border-opacity-25 rounded-[999] p-3 gap-2 items-center justify-center">
      <Icon icon={props.icon} width="20" height="20" />

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
