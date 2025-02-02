import React from "react";
import Image from "next/image";
import SocialButtons from "../SocialButtons/SocialButtons";
import Link from "next/link";

export default function TopContainer() {
  return (
    <div className="w-full mt-10 md:mt-16">
      <Image src="/logo.png" alt="ErenElagz" width={72} height={72} />
      <div>
        <h1 className="text-5xl font-medium tracking-tight font-lexend mt-10">
          ErenElagz
        </h1>
        <p className="lg:text-4xl text-2xl opacity-50 font-thin mt-2  tracking-tight font-lexend">
          Mobile App Developer & Designer
        </p>
        <p className="text-base text-gray-500  mt-6">
          Hi 👋, I am Eren. Currently I am React Native Mobile App Developer and
          UI & UX Designer for the Mobile Apps.
        </p>
        <p className="text-base text-gray-500 mt-4">
          In these days I am working on
          <Link
            href="https://github.com/ErenElagz/HitBis"
            className="font-semibold text-blue-400 hover:underline"
          >
            &nbsp;@HitBis
          </Link>
          : Bicycle Sharing App and Ride Assistant Service. See you soon.
        </p>
      </div>

      <div className="flex flex-row gap-3 mt-6 flex-wrap">
        <SocialButtons
          title="My Github Profile"
          url="https://github.com/ErenElagz"
          icon="akar-icons:github-fill"
        />
        <SocialButtons
          title="My LinkedIn Account"
          url="https://linkedin.com/in/ErenElagz"
          icon="akar-icons:linkedin-fill"
        />
        <SocialButtons
          title="My Twitter Account"
          url="https://x.com/ErenElagz"
          icon="akar-icons:x-fill"
        />
      </div>
    </div>
  );
}
