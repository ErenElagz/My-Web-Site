import React from "react";
import { Icon } from "@iconify/react";

export default function Spotlight() {
  return (
    <div className="w-full mt-12 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-lexend font-medium tracking-tight">
          Spotlight
        </h2>
        <p className="text-[18px] opacity-50 mt-2">
          Most recent projects and products I have built.
        </p>
      </div>

      <div className="flex md:flex-row gap-4 box-border flex-col">
        {/* Company Os */}
        <a
          href="https://www.notion.com/templates/company-os-managment-tool"
          className="group w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 pt-7 justify-between"
        >
          <div>
            <Icon width="48" height="48" icon="mingcute:building-4-fill" />
            <div>
              <p className="text-[18px] font-semibold tracking-tight mt-4 font-geist">
                company-os
              </p>
              <p className="text-base opacity-50 tracking-tight my-1 font-lexend">
                Managment Tool for Companies
              </p>
            </div>
            <p className="opacity-0 text-base font-semibold font-lexend mt-2 underline translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Visit
            </p>
          </div>
        </a>

        {/* All in Dev */}
        <a
          href="https://github.com/ErenElagz/all-in-dev"
          className="group w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 pt-7 justify-between"
        >
          <div>
            <Icon width="48" height="48" icon="mingcute:github-fill" />

            <div>
              <p className="text-[18px] font-semibold tracking-tight mt-4 font-geist">
                all-in-dev
              </p>
              <p className="text-base opacity-50 tracking-tight mt-1 font-lexend">
                3200 Sources for Developers
              </p>
            </div>
            <p className="opacity-0 text-base font-semibold font-lexend mt-2 underline translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Visit
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
