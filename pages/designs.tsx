import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Image from "next/image";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import { Icon } from "@iconify/react";
import LinkButton from "../components/LinkButton/LinkButton";
import Footer from "@/components/Footer/Footer";
export default function Designes() {
  return (
    <div className="lg:w-5/12 md:container flex flex-col mx-auto mt-6">
      {/* Linear Gradient */}

      {/* Navigation */}
      <NavBar />

      <div className="w-full mt-16">
        <Image src="/logo.png" alt="ErenElagz" width={60} height={60} />
        <div>
          <h1 className="text-5xl font-bold mt-10 font-geist">
            Interface Designs <span className="opacity-50">created by</span> Me
          </h1>{" "}
          <p className="text-xl text-gray-400 mt-6 w-5/6">
            This is my design portfolio. I am a UI/UX Designer and React Native
            Mobile App Developer. I am working on and designing mobile apps. I
            am also working on my personal projects. You can see my designs on
            Dribbble, Behance and Pinterest.
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
      </div>

      <div className="w-full mt-12 flex flex-col gap-6">
        <div className="group w-full bg-[--navBarBackground] border-[#f0f0f0] border rounded-xl overflow-hidden flex flex-row justify-between">
          <div className="w-full flex flex-col p-4 gap-4 pb-12">
            <Icon
              icon="icon-park-outline:github"
              className="opacity-75"
              width="80"
              height="80"
            />
            <div>
              <p className="text-2xl mb-1">HitBis</p>
              <p className="text-base opacity-50">
                Bicycle Sharing App, AI Based Ride Assistant
              </p>
            </div>
          </div>
          <div className="flex w-full bg-[--backgroundColor] border-[#f0f0f0] border">
            <div className="hidden w-full flex group-hover:flex flex-col items-end p-4">
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
        </div>

        <div className="group w-full bg-[--navBarBackground] border-[#f0f0f0] border rounded-xl overflow-hidden flex flex-row justify-between">
          <div className="w-full flex flex-col p-4 gap-4 pb-12">
            <Icon
              icon="icon-park-outline:github"
              className="opacity-75"
              width="80"
              height="80"
            />
            <div>
              <p className="text-2xl mb-1">Belen</p>
              <p className="text-base opacity-50">AI Based Tourism Assistant</p>
            </div>
          </div>
          <div className="flex w-full bg-[--backgroundColor] border-[#f0f0f0] border">
            <div className="hidden w-full flex group-hover:flex flex-col items-end p-4">
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
        </div>
        <div className="group w-full bg-[--navBarBackground] border-[#f0f0f0] border rounded-xl overflow-hidden flex flex-row justify-between">
          <div className="w-full flex flex-col p-4 gap-4 pb-12">
            <Icon
              icon="icon-park-outline:github"
              className="opacity-75"
              width="80"
              height="80"
            />
            <div>
              <p className="text-2xl mb-1">Maps Optimizer</p>
              <p className="text-base opacity-50">
                AI Route Creator and Best Route Optimizer
              </p>
            </div>
          </div>
          <div className="flex w-full bg-[--backgroundColor] border-[#f0f0f0] border">
            <div className="hidden w-full flex group-hover:flex flex-col items-end p-4">
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
        </div>
      </div>

      <Footer />
    </div>
  );
}
