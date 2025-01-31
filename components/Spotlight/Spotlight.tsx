import React from "react";
import { Icon } from "@iconify/react";
export default function Spotlight() {
  return (
    <div className="w-full mt-20 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl">Spotlight</h2>
        <p className="text-xl opacity-50">
          Most recent projects and contributions.
        </p>
      </div>

      <div className="flex flex-row gap-4 box-border">
        <div className="w-full bg-[#fafafa] rounded-[16px] flex flex-col p-4 pb-8 gap-4 border-0 justify-between hover:border-[1px] transition-border duration-100">
          <Icon
            icon="icon-park-outline:github"
            className="opacity-75"
            width="80"
            height="80"
          />
          <div>
            <p className="text-2xl mb-1">Company OS </p>
            <p className="text-xl opacity-50">
              Company and StartUp Managment Tool
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
            <p className="text-2xl mb-1">All in Dev</p>
            <p className="text-xl opacity-50">
              3200 Developer & Designer Tools
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
