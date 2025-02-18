import React from "react";
import SocialButtons from "../../components/SocialButtons/SocialButtons";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/Card/ProjectCard";
import ProjectCard2 from "@/components/Card/ProjectCard2";
import { aiProjects } from "@/data/ai-projects";
import { iotProjects } from "@/data/iot-projects";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ErenElagz | Projects",
  description: "ErenElagz Personal Web Site.",
};

export default function Projects() {
  return (
    <>
      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-5 md:mt-16 font-lexend">
          Recent Projects
        </h1>
        <p className="text-base text-gray-500 mt-3">
          Recent projects that I have developed. You can check the source codes
          on GitHub.
        </p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-row gap-3 mt-6 flex-wrap">
        <SocialButtons
          title="See more on GitHub"
          url="https://github.com/ErenElagz"
          icon="akar-icons:github-fill"
        />
        <SocialButtons
          title="Hire Me!"
          url="https://www.upwork.com/freelancers/~0158364bdc8fde08ff?viewMode=1"
          icon="simple-icons:upwork"
        />
      </div>

      {/* Projects */}
      <div className="w-full mt-8 flex flex-col gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            stars={project.stars}
            forks={project.forks}
            icon={project.icon}
          />
        ))}
      </div>

      {/* IoT Projects */}
      <div className="w-full border-4 rounded-3xl border-[--navBarBorder] px-6 py-8 mt-8 flex flex-col gap-6">
        <h1 className="text-2xl font-semibold tracking-tight font-lexend">
          Internet of Things Projects & Embedded Systems
        </h1>
        {iotProjects.map((project) => (
          <ProjectCard2
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            githubUrl={project.githubUrl}
            stars={project.stars}
            forks={project.forks}
            icon={project.icon}
          />
        ))}
      </div>

      {/* AI Projects */}
      <div className="w-full flex flex-col gap-4">
        <div className="w-full border-4 rounded-3xl border-[--navBarBorder] px-6 py-8 mt-8 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold tracking-tight  font-lexend">
            Machine Learning and Deep Learning Projects
          </h1>
          {aiProjects.map((project) => (
            <ProjectCard2
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              stars={project.stars}
              forks={project.forks}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
}
