import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import Image from "next/image";
import { Icon } from "@iconify/react";

export default function Spotlight() {
  return (
    <div className="w-full mt-20 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-lexend font-medium tracking-tight">
          Spotlight
        </h2>
        <p className="text-[18px] opacity-50 mt-2">
          Most recent projects and products I have built.
        </p>
      </div>

      <div className="flex flex-row gap-4 box-border">
        {/* Company Os */}
        <div className="w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 justify-between">
          <div>
            <div className="flex justify-between mb-4 items-center">
              <Icon width="36" height="36" icon="streamline:startup-solid" />
              <div className="flex flex-col gap-3">
                <LinkButton
                  title="Watch the Video"
                  url="https://github.com/ErenElagz"
                  icon="mdi:play"
                />
                <LinkButton
                  title="Buy Now 12$"
                  url="https://github.com/ErenElagz"
                  icon="akar-icons:github-fill"
                />
              </div>
            </div>
            <div>
              <p className="text-[18px] font-semibold tracking-tight font-geist">
                company-os
              </p>
              <p className="text-base opacity-50 tracking-tight mt-1 font-lexend">
                Managment Tool for Companies
              </p>
            </div>
          </div>
        </div>

        {/* All in Dev */}
        <div className="w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 justify-between">
          <div>
            <div className="flex justify-between mb-4 items-center">
              <Icon width="48" height="48" icon="mingcute:book-4-fill" />
              <div className="flex flex-col gap-3">
                <LinkButton
                  title="Watch the Video"
                  url="https://github.com/ErenElagz"
                  icon="mdi:play"
                />
                <LinkButton
                  title="Buy Now 12$"
                  url="https://github.com/ErenElagz"
                  icon="akar-icons:github-fill"
                />
              </div>
            </div>
            <div>
              <p className="text-[18px] font-semibold tracking-tight font-geist">
                all-in-dev
              </p>
              <p className="text-base opacity-50 tracking-tight mt-1 font-lexend">
                3200 Sources for Developers
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
