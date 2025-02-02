import React from "react";
import NavBar from "../components/NavBar/NavBar";
import TopContainer from "@/components/Index/TopContainer";
import Spotlight from "@/components/Index/Spotlight";
import Projects from "@/components/Index/Projects";
import Footer from "@/components/Footer/Footer";
import GradientOverlayBottom from "@/components/GradientOverlay/GradientOverlayBottom";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayTop";

export default function Home() {
  return (
    <div className="max-w-[660px] px-4 lg:w-4/12 flex flex-col mx-auto  m-3 md:mt-6">
      {/* Gradient Overlay */}
      <GradientOverlayTop />

      {/* Navigation */}
      <NavBar />

      {/* Top Container */}
      <TopContainer />

      {/* Spotlight */}
      <Spotlight />

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <Footer />
      <GradientOverlayBottom />
    </div>
  );
}
