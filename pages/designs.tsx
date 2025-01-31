import React from "react";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.css";
import Image from "next/image";
import Button from "../components/Button/Button";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Link from "next/link";
export default function Designes() {
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
            Interface Designs <span className="opacity-50">created by</span> Me
          </h1>          <p className="text-xl text-gray-400 mt-6 w-5/6">
            This is my design portfolio. I am a UI/UX Designer and React Native Mobile App Developer. I am working on
            and designing mobile apps. I am also working on my personal projects. You can see my designs on Dribbble, Behance and Pinterest.
          </p>
        </div>

        <div className="flex flex-row gap-3 mt-6">
          <SocialButtons
            title="My Dribbble Profile"
            url="https://dribbble.com/ErenElagz"
            icon="akar-icons:dribbble-fill"
          />
          <SocialButtons
            title="My Behance Account"
            url="https://behance.com/in/ErenElagz"
            icon="akar-icons:behance-fill"
          />
          <SocialButtons
            title="My Pinterest Account"
            url="https://pinterest.com/ErenElagz"
            icon="akar-icons:pinterest-fill"
          />
        </div>
      </div>{" "}
    </div>
  );
}
