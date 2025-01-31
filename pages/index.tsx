import React from "react";
import "../styles/globals.css";
import Image from "next/image";
import NavBar from "../components/NavBar/NavBar";
import Button from "../components/Button/Button";
import TopContainer from "@/components/TopContainer/TopContainer";
import Spotlight from "@/components/Spotlight/Spotlight";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div className="lg:w-5/12 md:container flex flex-col mx-auto mt-6">
      {/* Navigation */}
      <div className="w-full  flex flex-row gap-[64px] items-center justify-between">
        <Image src="/logo.png" alt="ErenElagz" width={32} height={32} />
        <NavBar />
        <Button title=" Say Hi! 👋" />
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
