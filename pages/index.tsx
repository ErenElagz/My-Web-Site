import React from "react";
import TopContainer from "@/components/Index/TopContainer";
import Spotlight from "@/components/Index/Spotlight";
import Projects from "@/components/Index/Projects";

export default function Home() {
  return (
    <>
      {/* Top Container */}
      <TopContainer />

      {/* Spotlight */}
      <Spotlight />

      {/* Projects */}
      <Projects />
    </>
  );
}
