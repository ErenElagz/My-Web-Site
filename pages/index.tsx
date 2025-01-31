import React from "react";
import "../styles/globals.css";
import Image from "next/image";
import LinearGradient from "../components/LinearGradient/LinearGradient";
import NavBar from "../components/NavBar/NavBar";
import Button from "../components/Button/Button";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import LinkButton from "../components/LinkButton/LinkButton";

export default function Home() {
  return (
    <div className="lg:w-5/12 md:w-11/12 mx-auto mt-7 mb-24 gap-20">
      <LinearGradient />
      {/* Navigation */}
      <div className="w-full  flex flex-row gap-[64px] items-center justify-between">
        <Image src="/logo.png" alt="ErenElagz" width={40} height={40} />
        <NavBar />
        <Button title=" Say Hi! 👋" />
      </div>

      {/* Top Container */}
      <div className="w-full mt-20 gap-8 flex flex-col">
        <Image src="/logo.png" alt="ErenElagz" width={80} height={80} />
        <div>
          <h1 className="text-6xl mb-3 font-lexend">ErenElagz</h1>
          <p className="text-4xl text-[#AAAAAA] font-lexend font-light">
            Mobile App Developer & Designer
          </p>
        </div>
        <div>
          <p className="text-xl text-white opacity-50">
            Hey! My Name is Eren. Currently I am React Native Mobile App
            Developer and UI & UX Designer for he Mobile Apps. In these days I
            am working on @HitBis: Bicycle Sharing App and Ride Assistant
            Service.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <SocialButtons
            title="GitHub"
            url="https://github.com/ErenElagz"
            icon="akar-icons:github-fill"
          />
          <SocialButtons
            title="LinkedIn"
            url="https://linkedin.com/in/ErenElagz"
            icon="akar-icons:linkedin-fill"
          />
          <SocialButtons
            title="X"
            url="https://x.com/ErenElagz"
            icon="akar-icons:x-fill"
          />
        </div>
      </div>

      {/* Spotlight */}
      <div className="w-full mt-12 gap-4 flex flex-col">
        <div>
          <h2 className="text-[36px] font-lexend">Spotlight</h2>
          <p className="text-[24px] opacity-50">
            Most recent projects and contributions.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-full bg-[#323232] rounded-[16px] flex flex-col p-4 pb-8 gap-4 justify-between">
            <div className="flex flex-row gap-4 w-full justify-between items-center">
              <Image
                src="/company-os.png"
                alt="Company OS Project"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-2">
                <LinkButton
                  title="Watch Video"
                  url="/projects"
                  icon="icon-park-solid:play"
                />
                <LinkButton
                  title="Buy Now 29$"
                  url="/projects"
                  icon="icon-park-solid:shopping"
                />
              </div>
            </div>
            <div>
              <p className="text-white text-4xl">Company OS </p>
              <p className="text-white text-xl opacity-50 mt-2">
                Company and StartUp Managment Tool
              </p>
            </div>
          </div>

          <div className="w-full bg-[#323232aa] rounded-[16px] flex flex-col px-4 py-8 gap-4 justify-between">
            <div className="flex flex-row gap-4 w-full justify-between items-center">
              <Image
                src="/github.png"
                alt="All in Dev Project"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-2">
                <LinkButton
                  title="Watch Video"
                  url="/projects"
                  icon="icon-park-solid:play"
                />
                <LinkButton
                  title="GitHub Repo"
                  url="/projects"
                  icon="icon-park-solid:star"
                />
              </div>
            </div>
            <div>
              <p className="text-white text-4xl">All in Dev</p>
              <p className="text-white text-xl opacity-50 mt-2">
                3200 Developer & Designer Tools
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="w-full mt-12 gap-4 flex flex-col">
        <div>
          <h2 className="text-[36px]">Projects</h2>
          <p className="text-[24px] opacity-50">
            Latest Projects builded by me. You can check the projects in below.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-full bg-[#323232aa] rounded-[16px] flex flex-col p-4 pb-8 gap-4 justify-between">
            <div className="flex flex-row gap-4 w-full justify-between items-center">
              <Image
                src="/hitbis.png"
                alt="Company OS Project"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-2 items-end">
                <LinkButton
                  title="Watch Video"
                  url="/projects"
                  icon="icon-park-solid:play"
                />
                <LinkButton
                  title="GitHub Repo"
                  url="/projects"
                  icon="icon-park-outline:github"
                />
              </div>
            </div>
            <div>
              <p className="text-white text-4xl">
                HitBis
              </p>
              <p className="text-white text-xl opacity-50 mt-2">
                Bicycle Sharing App, AI Based Ride Assistant
              </p>
            </div>
          </div>

          <div className="w-full bg-[#323232aa] rounded-[16px] flex flex-col px-4 py-8 gap-4 justify-between">
            <div className="flex flex-row gap-4 w-full justify-between items-center">
              <Image
                src="/belen.png"
                alt="All in Dev Project"
                width={100}
                height={100}
              />
              <div className="flex flex-col gap-2 items-end">
                <LinkButton
                  title="See Post"
                  url="/projects"
                  icon="akar-icons:linkedin-fill"
                />
                <LinkButton
                  title="Finalist Project"
                  url="/projects"
                  icon="mdi:medal"
                />
              </div>
            </div>
            <div>
              <p className="text-white text-4xl">Belen</p>
              <p className="text-white text-xl opacity-50 mt-2">
                AR & VR Integrated AI Based Tourism Assistant
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
