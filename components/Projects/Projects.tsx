import React from "react";
import LinkButton from "../LinkButton/LinkButton";
import Image from "next/image";
export default function Projects() {
  return (
    <div className="w-full mt-20 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-lexend font-medium  tracking-tight">
          Projects
        </h2>
        <p className="text-[18px] text-gray-600 mt-2">
          Latest Projects builded by Me and My Team
        </p>
      </div>

      {/* HitBis */}
      <div className="w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 justify-between">
        <div>
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
            <p className="text-xl font-semiBold tracking-tight font-geist">
              HitBis: Bicycle Sharing App
            </p>
            <p className="text-base text-gray-500 font-lexend">
              IoT Based Bicycle Renting App and AI Based Ride Assistant.
            </p>
          </div>
        </div>
      </div>

      {/* Belen */}
      <div className="w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 justify-between">
        <div>
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
            <p className="text-xl font-semiBold tracking-tight font-geist">
              Belen: AI Based Tourism Assistant
            </p>
            <p className="text-base text-gray-500 font-lexend">
              AR/VR Supported Tourism Assistant App for the Travelers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
