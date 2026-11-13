import React from "react";
import { Metadata } from "next";
import SocialButtons from "@/components/SocialButtons";
import DesignsFilter from "@/components/DesignsFilter";

export const metadata: Metadata = {
  title: "Designs — Eren Elagoz",
  description:
    "Mobile UI/UX explorations, app screenshots, design systems, and web landing concepts by Eren Elagoz.",
};

export default function DesignPage() {
  return (
    <div className="space-y-10">
      <header className="pt-4 sm:pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
          Design Portfolio
        </p>
        <h1 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-text-primary sm:text-3xl">
          UI / UX & Product Design
        </h1>
        <p className="mt-2.5 text-[15px] leading-relaxed text-text-secondary">
          Mobile app screens, design systems, store graphics, and landing pages
          crafted in Figma, with live shots on Dribbble, Behance, and Pinterest.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <SocialButtons
            title="Dribbble"
            url="https://dribbble.com/ErenElagz"
            icon="akar-icons:dribbble-fill"
          />
          <SocialButtons
            title="Behance"
            url="https://behance.net/ErenElagz"
            icon="akar-icons:behance-fill"
          />
          <SocialButtons
            title="Pinterest"
            url="https://www.pinterest.com/erenelagz/"
            icon="akar-icons:pinterest-fill"
          />
        </div>
      </header>

      <DesignsFilter />
    </div>
  );
}
