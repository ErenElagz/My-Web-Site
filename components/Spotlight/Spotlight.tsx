import React from "react";
import { Icon } from "@iconify/react";
import LinkButton from "../LinkButton/LinkButton";
import Link from "next/link";
import Image from "next/image";

export default function Spotlight() {
  return (
    <div className="w-full mt-20 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-lexend font-medium  tracking-tight">
          Spotlight
        </h2>
        <p className="text-[18px] text-gray-600 mt-2">
          Most recent projects and contributions.
        </p>
      </div>

      <div className="flex flex-row gap-4 box-border">
        {/* Company Os */}
        <div className="w-full border rounded-3xl flex flex-col p-5 justify-between">
          <Link href="/projects/company-os">
            <div className="flex justify-between mb-4 items-center">
              <Image
                src="/company-os.png"
                alt="Company OS"
                width={72}
                height={72}
              />

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
              <p className="text-xl font-bold tracking-tight font-geist">
                Company OS
              </p>
              <p className="text-base text-gray-500 font-lexend">
                Company Managment Tool
              </p>
            </div>
          </Link>
        </div>

        {/* All in Dev */}
        <div className="w-full border rounded-3xl flex flex-col p-5 justify-between">
          <Link href="/projects/company-os">
            <div className="flex justify-between mb-4 items-center">
              <Image
                src="/all-in-dev.png"
                alt="Company OS"
                width={72}
                height={72}
              />

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
              <p className="text-xl font-bold tracking-tight font-geist">
                All in Dev
              </p>
              <p className="text-base text-gray-500 font-lexend">
                3200 Developer Tools and Resources
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
