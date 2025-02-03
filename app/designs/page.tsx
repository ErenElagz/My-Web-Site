import React from "react";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import { designs } from "@/data/designs";
import DesignCard from "@/components/Card/DesignCard";

export default function Designes() {
  return (
    <>

      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-5 md:mt-16 font-lexend">
          Design Portfolio
        </h1>
        <p className="text-base text-gray-500 mt-3">
          I am also designing. You can check my other designs in Dribbble and
          Behance.
        </p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-row gap-3 mt-6 flex-wrap">
        <SocialButtons
          title="Dribbble"
          url="https://dribbble.com/ErenElagz"
          icon="akar-icons:dribbble-fill"
        />
        <SocialButtons
          title="Behance"
          url="https://behance.com/ErenElagz"
          icon="akar-icons:behance-fill"
        />
        <SocialButtons
          title="Pinterest"
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
    </>
  );
}
