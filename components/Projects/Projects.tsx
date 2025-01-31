import React from "react";
import { Icon } from "@iconify/react";
import LinkButton from "../LinkButton/LinkButton";

export default function Projects() {
  return (
    <div className="w-full mt-20 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl">Projects</h2>
        <p className="text-xl opacity-50">Builded by me and my team.</p>
      </div>

      <div className="group w-full bg-[#fafafa] border-[#f0f0f0] border rounded-xl overflow-hidden flex flex-row justify-between">
        <div className="w-full flex flex-col p-4 gap-4 pb-12">
          <Icon
            icon="icon-park-outline:github"
            className="opacity-75"
            width="80"
            height="80"
          />
          <div>
            <p className="text-2xl mb-1">HitBis</p>
            <p className="text-base opacity-50">
              Bicycle Sharing App, AI Based Ride Assistant
            </p>
          </div>
        </div>
        <div className="flex w-full bg-gray-200 border-[#f0f0f0] border">
          <div className="hidden w-full flex group-hover:flex flex-col items-end p-4">
            <LinkButton
              title="Watch the Video"
              url="https://github.com/ErenElagz"
            />
            <LinkButton
              title="View on GitHub"
              url="https://github.com/ErenElagz"
            />
          </div>
        </div>
      </div>

      <div className="group w-full bg-[#fafafa] border-[#f0f0f0] border rounded-xl overflow-hidden flex flex-row justify-between">
        <div className="w-full flex flex-col p-4 gap-4 pb-12">
          <Icon
            icon="icon-park-outline:github"
            className="opacity-75"
            width="80"
            height="80"
          />
          <div>
            <p className="text-2xl mb-1">Belen</p>
            <p className="text-base opacity-50">AI Based Tourism Assistant</p>
          </div>
        </div>
        <div className="flex w-full bg-gray-200 border-[#f0f0f0] border">
          <div className="hidden w-full flex group-hover:flex flex-col items-end p-4">
            <LinkButton
              title="Watch the Video"
              url="https://github.com/ErenElagz"
            />
            <LinkButton
              title="View on GitHub"
              url="https://github.com/ErenElagz"
            />
          </div>
        </div>
      </div>
      <div className="group w-full bg-[#fafafa] border-[#f0f0f0] border rounded-xl overflow-hidden flex flex-row justify-between">
        <div className="w-full flex flex-col p-4 gap-4 pb-12">
          <Icon
            icon="icon-park-outline:github"
            className="opacity-75"
            width="80"
            height="80"
          />
          <div>
            <p className="text-2xl mb-1">Routefizer</p>
            <p className="text-base opacity-50">
              AI Route Creator and Optimizer
            </p>
          </div>
        </div>
        <div className="flex w-full bg-gray-200 border-[#f0f0f0] border">
          <div className="hidden w-full flex group-hover:flex flex-col items-end p-4">
            <LinkButton
              title="Watch the Video"
              url="https://github.com/ErenElagz"
            />
            <LinkButton
              title="View on GitHub"
              url="https://github.com/ErenElagz"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
