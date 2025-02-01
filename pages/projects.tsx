import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import { projects } from "@/data/projects";
import { Icon } from "@iconify/react";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayBottom";

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
      </div>

      {/* Projects */}
      <div className="w-full mt-8 flex flex-col gap-4">
        {projects.map((project) => (
          <Link
            href={project.url}
            passHref
            key={project.id}
            className="hover:underline"
          >
            <div className="w-full border border-[--navBarBorder] bg-[#ffffff10] rounded-3xl flex flex-row  justify-between">
              <div className="flex flex-col gap-2 w-full p-5 py-8">
                <p className="text-sm font-bold tracking-tight font-geist">
                  21/12/2009
                </p>
                <p className="text-base font-semiBold tracking-tight font-geist">
                  {project.name}
                </p>
                <p className="text-sm text-gray-400 font-lexend">
                  {project.description}
                </p>
                <div className="flex flex-row gap-4 mt-4 items-center ">
                  <div className="flex flex-row gap-1 items-center">
                    <Icon
                      width="24"
                      height="24"
                      icon="material-symbols:star-rounded"
                      className="text-yellow-500"
                    />
                    <p className="text-sm text-gray-500 font-medium">
                      {project.stars} Stars
                    </p>
                  </div>
                  <div className="flex flex-row gap-1 items-center border-l border-[--navBarBorder]  pl-4">
                    <Icon
                      width="20"
                      height="20"
                      icon="pajamas:fork"
                      className="text-[#484848]"
                    />
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    {project.stars} Forks
                  </p>
                </div>
              </div>
              <div className="flex flex-col w-full border-l border-[--navBarBorder]  overflow-hidden rounded-r-3xl">
                <Image
                  src={project.image}
                  alt="Blog Image"
                  width={750}
                  height={450}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
