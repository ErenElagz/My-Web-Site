import React from "react";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.css";
import Image from "next/image";
import Button from "../components/Button/Button";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Link from "next/link";
export default function Projects() {
  return (
    <div className="lg:w-5/12 md:container flex flex-col mx-auto mt-6">
      {/* Navigation */}
      <div className="w-full  flex flex-row gap-[64px] items-center justify-between">
        <Image src="/logo.png" alt="ErenElagz" width={32} height={32} />
        <NavBar />
        <Button title=" Say Hi!.👋" />
      </div>
      <div className="w-full mt-16">
        <Image src="/logo.png" alt="ErenElagz" width={60} height={60} />
        <div>
          <h1 className="text-5xl font-bold mt-10 font-geist">
            Latest Projects <span className="opacity-50">builded by</span> Me.
          </h1>
          <p className="text-xl text-gray-400 mt-6 w-5/6">
            Hey 👋! My Name is Eren. Currently I am React Native Mobile App
            Developer and UI & UX Designer for the Mobile Apps. In these days I
            am working on
            <Link
              href="/projects/hitbis"
              className="font-bold text-blue-500 hover:underline"
            >
              &nbsp;@HitBis
            </Link>
            : Bicycle Sharing App and Ride Assistant Service. See you soon.
          </p>
        </div>

        <div className="flex flex-row gap-3 mt-6">
          <SocialButtons
            title="My Github Profile"
            url="https://github.com/ErenElagz"
            icon="akar-icons:github-fill"
          />
        </div>
      </div>
    </div>
  );
}
