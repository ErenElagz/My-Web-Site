import React from "react";
import { Icon } from "@iconify/react";
import LinkButton from "../LinkButton/LinkButton";
import Link from "next/link";

export default function Spotlight() {
  return (
    <div className="w-full mt-20 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-lexend">Spotlight</h2>
        <p className="text-xl opacity-50">
          Most recent projects and contributions.
        </p>
      </div>

      <div className="flex flex-row gap-4 box-border">
        <div className="group w-full bg-[--navBarBackground] rounded-[16px] flex flex-col p-5 border-0 justify-between hover:border-[1px] transition-border duration-100">
          <Link href="/projects/company-os">
            <div className="flex justify-between mb-4">
              <Icon
                icon="icon-park-outline:github"
                className="opacity-75"
                width="80"
                height="80"
              />
              <div className="hidden flex flex-col group-hover:flex items-end">
                <LinkButton
                  title="Watch the Video"
                  url="https://github.com/ErenElagz"
                />
                <LinkButton
                  title="Buy Now 12$"
                  url="https://github.com/ErenElagz"
                />
              </div>
            </div>
            <div>
              <p className="text-2xl mb-1">Company OS </p>
              <p className="text-xl opacity-50">Company Managment Tool</p>
            </div>
          </Link>
        </div>

        <div className="group w-full bg-[--navBarBackground] rounded-[16px] flex flex-col p-5 gap-4 border-0 justify-between hover:border-[1px] transition-border duration-100">
          <Link href="/projects/all-in-dev">
            <div className="flex justify-between mb-4">
              <Icon
                icon="icon-park-outline:github"
                className="opacity-75"
                width="80"
                height="80"
              />
              <div className="hidden flex flex-col group-hover:flex items-end">
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
            <div>
              <p className="text-2xl mb-1">All in Dev</p>
              <p className="text-xl opacity-50">
                3200 Developer & Designer Tools
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
