import React from "react";
import { Metadata } from "next";
import SocialButtons from "@/components/SocialButtons/SocialButtons";
import ProjectsFilter from "@/components/ProjectsFilter";

export const metadata: Metadata = {
  title: "Projects — Eren Elagoz",
  description:
    "Production mobile apps, full-stack systems, IoT platforms, and open-source repositories by Eren Elagoz.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="pt-4 sm:pt-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
          Projects
        </p>
        <h1 className="mt-2 text-2xl font-medium tracking-[-0.025em] text-text-primary sm:text-3xl">
          Selected Builds & Open Source
        </h1>
        <p className="mt-2.5 text-[15px] leading-relaxed text-text-secondary">
          Production mobile applications, full-stack architectures, and open
          source experiments across React Native, IoT, and AI.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <SocialButtons
            title="GitHub"
            url="https://github.com/ErenElagz"
            icon="akar-icons:github-fill"
          />
        </div>
      </header>

      <ProjectsFilter />
    </div>
  );
}
