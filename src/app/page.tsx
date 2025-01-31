import React from "react";
import "./globals.css";
import SocialButtons from "./components/SocialButtons/SocialButtons";
import NavBar from "./components/NavBar/NavBar";
import LineerGradient from "./components/LineerGradient/LineerGradient";
import Image from "next/image";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import LinkButton from "./components/LinkButton/LinkButton";

export default function Home() {
  return (
    <div className="lg:w-6/12 md:w-11/12 mx-auto mt-7 mb-24 gap-20">
      <LineerGradient />
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
          <h1 className="text-6xl mb-3">ErenElagz</h1>
          <p className="text-4xl text-[#AAAAAA]">
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
          <h2 className="text-[36px]">Spotlight</h2>
          <p className="text-[24px] opacity-50">
            Most recent projects and contributions.
          </p>
        </div>
        <div className="flex flex-row gap-4">
          <div className="w-full bg-[#323232aa] rounded-[16px] flex flex-row p-4 gap-4">
            <div className="w-full">
              <Image
                src="/company-os.png"
                alt="ErenElagz"
                width={100}
                height={100}
              />
              <div>
                <p className="text-white text-4xl">Company OS </p>
                <p className="text-white text-xl opacity-50 mt-2">
                  Company and StartUp Managment Tool
                </p>
              </div>
            </div>
            <div className="w-full h-full bg-[#323232] rounded-[16px]"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}
