import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Footer from "@/components/Footer/Footer";
import { projects } from "@/data/projects";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayTop";
import GradientOverlayBottom from "@/components/GradientOverlay/GradientOverlayBottom";
import ProjectCard from "@/components/Card/ProjectCard";

export default function Projects() {
  return (
    <div className="lg:w-4/12 md:container flex flex-col mx-auto mt-6">
      {/* Gradient Overlay */}
      <GradientOverlayTop />

      {/* Navigation */}
      <NavBar />

      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-16 font-lexend">
          Recent Projects
        </h1>
        <p className="text-base text-gray-500 mt-3">
          Recent projects that I have developed. You can check the source codes
          on GitHub.
        </p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-row gap-3 mt-6">
        <SocialButtons
          title="My GitHub Profile"
          url="https://github.com/ErenElagz"
          icon="akar-icons:github-fill"
        />
        <SocialButtons
          title="Hire Me!"
          url="https://github.com/ErenElagz"
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
            image={project.image}
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
