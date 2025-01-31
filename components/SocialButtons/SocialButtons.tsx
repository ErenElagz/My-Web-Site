import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import Link from "next/link";
function SocialButtons(props: { title: string; url: string; icon: string }) {
  return (
    <Link href={props.url} target="_blank">
      <div className="flex bg-[#fcfcfc] opacity-60 hover:opacity-100 transition:opacity duration-300 border-1 rounded-lg p-2 border border-[#F0f0f0] gap-2 items-center justify-center">
        <Icon icon={props.icon} width="16" height="16" />
        <p className="text-base">{props.title}</p>
      </div>
    </Link>
  );
}

SocialButtons.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  icon: PropTypes.string,
};

export default SocialButtons;
