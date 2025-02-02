import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Footer from "@/components/Footer/Footer";
import { projects } from "@/data/projects";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayTop";
import GradientOverlayBottom from "@/components/GradientOverlay/GradientOverlayBottom";
import ProjectCard from "@/components/Card/ProjectCard";
import { aiProjects } from "@/data/ai-projects";
import { iotProjects } from "@/data/iot-projects";
import Link from "next/link";
import { Icon } from "@iconify/react";
export default function Projects() {
  return (
    <div className="max-w-[660px]  px-4 lg:w-4/12 flex flex-col mx-auto  m-3 md:mt-6">
      {/* Gradient Overlay */}
      <GradientOverlayTop />

      {/* Navigation */}
      <NavBar />

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
          <Link
            href={project.githubUrl || "#"}
            passHref
            key={project.id}
            className="hover:underline"
          >
            <div className="w-full rounded-xl border-l-4 border-[--navBarBorder] bg-[#ffffff10] flex flex-row  justify-between">
              <div className="flex flex-col gap-2 w-full p-4 md:p-5 md:py-4  ">
                <Icon icon={project.icon} width="24" height="24" />
                <p className="text-base font-semibold mt-2 tracking-tight font-geist">
                  {project.title}
                </p>
                <p className="text-sm text-gray-400 font-lexend">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* AI Projects */}
      <div className="w-full flex flex-col gap-4">
        <div className="w-full border-4 rounded-3xl border-[--navBarBorder] px-6 py-8 mt-8 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold tracking-tight  font-lexend">
            Machine Learning and Deep Learning Projects
          </h1>
          {aiProjects.map((project) => (
            <Link
              href={project.githubUrl || "#"}
              passHref
              key={project.id}
              className="hover:underline"
            >
              <div className="w-full rounded-2xl border-l-4 border-[--navBarBorder] bg-[#ffffff10] flex flex-row  justify-between">
                <div className="flex flex-col gap-2 w-full p-4 md:p-5 md:py-4  ">
                  <Icon icon={project.icon} width="24" height="24" />
                  <p className="text-base font-semibold mt-2 tracking-tight font-geist">
                    {project.title}
                  </p>
                  <p className="text-sm text-gray-400 font-lexend">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Gradient Overlay */}
      <GradientOverlayBottom />
    </div>
  );
}
