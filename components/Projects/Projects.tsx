import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import LinkButton from "../LinkButton/LinkButton";

export default function Projects() {
  return (
    <div className="w-full mt-20 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl">Projects</h2>
        <p className="text-xl opacity-50">Builded by me and my team.</p>
      </div>

      <div className="flex flex-col gap-4 box-border">
        <div className="w-full bg-[#fafafa] rounded-[16px] flex flex-col p-4 pb-8 gap-4 border-0 justify-between hover:border-[1px] transition-border duration-100">
          <Icon
            icon="icon-park-outline:github"
            className="opacity-75"
            width="80"
            height="80"
          />
          <div>
            <p className="text-2xl mb-1">HitBis</p>
            <p className="text-xl opacity-50">
              Bicycle Sharing App, AI Based Ride Assistant
            </p>
          </div>
        </div>

        <div className="w-full bg-[#fafafa] rounded-[16px] flex flex-col p-4 pb-8 gap-4 border-0 justify-between hover:border-[1px] transition-border duration-100">
          <Icon
            icon="icon-park-outline:github"
            className="opacity-75"
            width="80"
            height="80"
          />
          <div>
            <p className="text-2xl mb-1">Belen</p>
            <p className="text-xl opacity-50">
              AR & VR Integrated AI Based Tourism Assistant
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
