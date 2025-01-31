import React from "react";
import "./globals.css";
import SocialButtons from "./components/SocialButtons/SocialButtons";
import NavBar from "./components/NavBar/NavBar";
import LineerGradient from "./components/LineerGradient/LineerGradient";
import Image from "next/image";
import Button from "./components/Button/Button";

export default function Home() {
  return (
    <div className="w-7/12 mx-auto mt-6 gap-20">
      <LineerGradient />
      {/* Navigation */}
      <div className="w-full flex flex-row gap-[64px] items-center justify-between p-4">
        <Image src="/logo.png" alt="ErenElagz" width={40} height={40} />
        <NavBar />
        <Button title=" Say Hi! 👋" />
      </div>

      <div className="flex flex-row gap-3 items-center justify-center p-4">
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
  );
}
