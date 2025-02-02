import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Footer from "@/components/Footer/Footer";
import { designs } from "@/data/designs";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayTop";
import GradientOverlayBottom from "@/components/GradientOverlay/GradientOverlayBottom";
import DesignCard from "@/components/Card/DesignCard";

export default function Designes() {
  return (
    <div className="lg:w-4/12 md:container flex flex-col mx-auto mt-6">
      {/* Gradient Overlay */}
      <GradientOverlayTop />

      {/* Navigation */}
      <NavBar />

      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-16 font-lexend">
          Design Portfolio
        </h1>
        <p className="text-base text-gray-500 mt-3">
          I am also designing. You can check my designs in Dribbble and Behance.
        </p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-row gap-3 mt-6">
        <SocialButtons
          title="My Dribbble Profile"
          url="https://dribbble.com/ErenElagz"
          icon="akar-icons:dribbble-fill"
        />
        <SocialButtons
          title="My Behance Account"
          url="https://behance.com/ErenElagz"
          icon="akar-icons:behance-fill"
        />
        <SocialButtons
          title="My Pinterest Account"
          url="https://pinterest.com/ErenElagz"
          icon="akar-icons:pinterest-fill"
        />
      </div>

      {/* Designs */}
      <div className="w-full mt-8 flex flex-col gap-4">
        {designs.map((design) => (
          <DesignCard
            key={design.id}
            id={design.id}
            title={design.title}
            description={design.description}
            figmaUrl={design.figmaUrl}
            dribbbleUrl={design.dribbbleUrl}
            behanceUrl={design.behanceUrl}
            image={design.image}
          />
        ))}
      </div>

      {/* Footer */}
      <Footer />

      {/* Gradient Overlay */}
      <GradientOverlayBottom />
    </div>
  );
}
