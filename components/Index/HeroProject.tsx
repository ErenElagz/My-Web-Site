import React from "react";
import { Icon } from "@iconify/react";

export default function Spotlight() {
  return (
    <div className="w-full mt-12 flex flex-col gap-4">
      {/* Leckham */}
      <div>
        <h2 className="text-3xl font-lexend font-medium tracking-tight">
          Latest Project
        </h2>
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=com.leckham&hl=en"
        className="group w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 pt-7 ustify-between"
      >
        <div>
          <Icon width="48" height="48" icon="mingcute:building-4-fill" />
          <div>
            <p className="text-[18px] font-semibold tracking-tight mt-4 font-geist">
              Leckham App
            </p>
            <p className="text-base opacity-50 tracking-tight my-1 font-lexend">
              A E-Book Reader for Android
            </p>
          </div>
          <p className="opacity-0 text-base font-semibold font-lexend mt-2 underline translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            Visit
          </p>
        </div>
      </a>
    </div>
  );
}
