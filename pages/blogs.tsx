import React from "react";
import NavBar from "../components/NavBar/NavBar";
import "../styles/globals.css";
import Image from "next/image";
import Button from "../components/Button/Button";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Link from "next/link";
import { Icon } from "@iconify/react";
import LinkButton from "@/components/LinkButton/LinkButton";
import Footer from "@/components/Footer/Footer";

export default function Blogs() {
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
            Latest Blogs <span className="opacity-50">shared by</span> Me
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
            title="My Medium Profile"
            url="https://github.com/ErenElagz"
            icon="akar-icons:medium-fill"
          />
          <SocialButtons
            title="My Dev.to Account"
            url="https://linkedin.com/in/ErenElagz"
            icon="skill-icons:devto-dark"
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
          <div className="flex w-full bg-gray-900 border-[#f0f0f0] border">
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
          <div className="flex w-full bg-gray-900 border-[#f0f0f0] border">
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
          <div className="flex w-full bg-gray-900 border-[#f0f0f0] border">
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
