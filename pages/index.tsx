import React from "react";
import NavBar from "../components/NavBar/NavBar";
import TopContainer from "@/components/TopContainer/TopContainer";
import Spotlight from "@/components/Spotlight/Spotlight";
import Projects from "@/components/Projects/Projects";
import Footer from "@/components/Footer/Footer";
import GradientOverlay from "@/components/GradientOverlay/GradientOverlay";
export default function Home() {
  return (
    <div className="lg:w-4/12 md:container flex flex-col mx-auto mt-6"> 
      {/* Gradient Overlay */}
      <GradientOverlay />

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
    </div>
  );
}
