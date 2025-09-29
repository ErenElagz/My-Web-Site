import React from "react";
import Image from "next/image";

export default function HeroProject() {
  return (
    <div className="w-full mt-12 flex flex-col gap-4">
      <div>
        <h2 className="text-3xl font-lexend font-medium tracking-tight">
          Working On
        </h2>
      </div>

      <div className="flex md:flex-row gap-4 box-border flex-col">
        {/* CoreFounders */}
        <a
          href="/corefound/"
          className="group w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 pt-7 ustify-between"
        >
          <div>
            <Image
              width="48"
              height="48"
              src="/corefounders.png"
              alt="CoreFounders Logo"
            />
            <div>
              <p className="text-[18px] font-semibold tracking-tight mt-4 font-geist">
                CoreFounder: Build Together
              </p>
              <p className="text-base opacity-50 tracking-tight my-1 font-lexend">
                Mobile App for Startup Founders and Entrepreneurs to Connect,
                Collaborate, and Grow Their Ventures Together.
              </p>
            </div>
            <p className="opacity-0 text-base font-semibold font-lexend mt-2 underline translate-y-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              Visit
            </p>
          </div>
        </a>
        {/* Leckham */}
        <a
          href="https://play.google.com/store/apps/details?id=com.leckham&hl=en"
          className="group w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-col p-5 pt-7 ustify-between"
        >
          <div>
            <Image
              width="48"
              height="48"
              src="/leckham.png"
              alt="Leckham Logo"
            />
            <div>
              <p className="text-[18px] font-semibold tracking-tight mt-4 font-geist">
                Leckham E-book Reader
              </p>
              <p className="text-base opacity-50 tracking-tight my-1 font-lexend">
                A Free Offline E-Book Reader for Android with Support for
                Multiple Formats Including PDF, EPUB.
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
