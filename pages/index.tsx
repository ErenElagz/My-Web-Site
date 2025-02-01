import React from "react";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import Button from "../components/Button/Button";
import TopContainer from "@/components/TopContainer/TopContainer";
import Spotlight from "@/components/Spotlight/Spotlight";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import LinearGradient from "@/components/LinearGradient/LinearGradient";

export default function Home() {
  return (
    <div className="lg:w-5/12 md:container flex flex-col mx-auto mt-6">
      {/* Linear Gradient */}
      <LinearGradient />

      {/* Navigation */}
      <div className="w-full  flex flex-row gap-[64px] items-center justify-between">
        <Image src="/logo.png" alt="ErenElagz" width={32} height={32} />
        <NavBar />
        <Button title=" Say Hi!.👋" url={"mailto:erenelagz@gmail.com"} />
      </div>

      {/* Top Container */}
      <TopContainer />

      {/* Spotlight */}
      <Spotlight />

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer />
    </div>
  );
}
