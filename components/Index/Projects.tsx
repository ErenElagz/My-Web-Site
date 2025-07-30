import React from "react";
import { Icon } from "@iconify/react"  

export default function Projects() {
  return (
    <div className="w-full mt-12 flex flex-col gap-6">
      <div>
        <h2 className="text-3xl font-lexend font-medium tracking-tight">
          Projects
        </h2>
        <p className="text-[18px] opacity-50 mt-2">
          Latest Projects built by Me and My Team
        </p>
      </div>
      <div className="flex flex-col gap-4 ">
        {/* HitBis */}
        <a
          className="group w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 justify-between"
          href="https://github.com/ErenElagz/HitBis"
        >
          <div>
            <div className="flex justify-between mb-4 items-start">
              <Icon width="48" height="48" icon="mingcute:charging-pile-fill" />
              <div className="flex flex-col gap-1 items-end">
                <p className="text-sm font-medium tracking-tight opacity-50">
                  10.2024 - Present
                </p>
                <p className="text-sm font-medium tracking-tight opacity-50">
                  Corum, Turkey
                </p>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-semibold tracking-tight mt-4 font-geist">
                HitBis: Bicycle Sharing App
              </p>
              <p className="text-base opacity-50 tracking-tight my-1 font-lexend">
                IoT Based Bicycle Renting App and Ride Assistant.
              </p>
              <p className="opacity-0 text-base font-semibold font-lexend mt-2 underline translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                Visit
              </p>
            </div>
          </div>
        </a>

        {/* Belen */}
        <a
          className="group w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 justify-between"
          href="https://www.linkedin.com/posts/erenelagz_ar-and-vr-supported-tourism-app-with-ai-based-activity-7013940198650008576-4Q8_"
        >
          <div>
            <div className="flex justify-between mb-4 items-start">
              <Icon width="48" height="48" icon="mingcute:celebrate-fill" />
              <div className="flex flex-col gap-1 items-end">
                <p className="text-sm font-medium tracking-tight opacity-50">
                  02.2024 - 10.2024
                </p>
                <p className="text-sm font-medium tracking-tight opacity-50">
                  Antalya, Turkey
                </p>
              </div>
            </div>
            <div>
              <p className="text-[18px] font-semibold tracking-tight mt-4 font-geist">
                Belen: AI Based Tourism Assistant App
              </p>
              <p className="text-base opacity-50 tracking-tight my-1 font-lexend">
                AR and VR Supported Tourism App with AI Based Assistant.
              </p>
              <p className="opacity-0 text-base font-semibold font-lexend mt-2 underline translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                See Post on LinkedIn
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
