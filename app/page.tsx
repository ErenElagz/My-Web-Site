import React from "react";
import TopContainer from "@/components/Index/TopContainer";
import Spotlight from "@/components/Index/Spotlight";
import Projects from "@/components/Index/Projects";
import HeroProject from "@/components/Index/HeroProject";

export default function Home() {
  return (
    <>
      {/* Top Container */}
      <TopContainer />

      {/* Hero Project */}
      <HeroProject />

      {/* Spotlight */}
      <Spotlight />

      {/* Projects */}
      <Projects />
    </>
  );
}
