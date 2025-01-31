import React from "react";
import Image from "next/image";
import SocialButtons from "../SocialButtons/SocialButtons";
import Link from "next/link";
export default function TopContainer() {
  return (
    <div className="w-full mt-16">
      <Image src="/logo.png" alt="ErenElagz" width={60} height={60} />
      <div>
        <h1 className="text-5xl font-bold mt-10 font-geist">ErenElagz</h1>
        <p className="text-3xl mt-2">Mobile App Developer & Designer</p>
        <p className="text-xl text-gray-400 mt-6 w-5/6">
          Hey 👋! My Name is Eren. Currently I am React Native Mobile App
          Developer and UI & UX Designer for he Mobile Apps. In these days I am
          working on
          <Link
            href="/projects/hitbis"
            className="font-bold text-blue-500 hover:underline"
          >
            &nbsp;@HitBis
          </Link>
          : Bicycle Sharing App and Ride Assistant Service.
        </p>
      </div>

      <div className="flex flex-row gap-3 mt-6">
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
