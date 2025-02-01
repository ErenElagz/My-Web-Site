import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Image from "next/image";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { blogs } from "@/data/blogs";
import { Icon } from "@iconify/react";
import GradientOverlay from "@/components/GradientOverlay/GradientOverlay";

export default function Blogs() {
  return (
    <div className="lg:w-4/12 md:container flex flex-col mx-auto mt-6">
      {/* Gradient Overlay */}
      <GradientOverlay />

      {/* Navigation */}
      <NavBar />

      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-16 font-lexend">
          Latest Blogs
        </h1>
        <p className="text-base text-gray-500 mt-3">
          I am also blogging. You can check my articles in Medium and Dev.to.
        </p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-row gap-3 mt-6">
        <SocialButtons
          title="My Medium Profile"
          url="https://medium.com/@ErenElagz"
          icon="akar-icons:medium-fill"
        />
        <SocialButtons
          title="My Dev.to Account"
          url="https://dev.to/ErenElagz"
          icon="skill-icons:devto-dark"
        />
      </div>

      {/* Blogs */}
      <div className="w-full mt-8 flex flex-col gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="hover:underline">
            <div className="w-full border border-[--navBarBorder] bg-[#ffffff05] rounded-3xl flex flex-row  justify-between">
              <div className="flex flex-col gap-2 w-full p-5 py-8">
                <p className="text-sm font-bold tracking-tight font-geist">
                  {blog.date}
                </p>
                <p className="text-base font-semiBold tracking-tight font-geist">
                  {blog.title}
                </p>
                <p className="text-sm text-gray-400 font-lexend">
                  {blog.description}
                </p>
                <div className="flex flex-row gap-4 mt-4 items-center ">
                  <Link
                    href={blog.mediumUrl}
                    className="flex flex-row gap-1 items-center "
                  >
                    <Icon
                      width="20"
                      height="20"
                      icon="jam:medium"
                      className="opacity-50 hover:opacity-100 transition-opacity duration-150"
                    />
                  </Link>
                  <Link
                    href={blog.devtoUrl}
                    className="flex flex-row gap-1 items-center border-l border-[--navBarBorder]  pl-4"
                  >
                    <Icon
                      width="20"
                      height="20"
                      icon="fa6-brands:dev"
                      className="text-blue-600 opacity-50 hover:opacity-100 transition-opacity duration-150 "
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col w-full border-l border-[--navBarBorder] overflow-hidden rounded-r-3xl">
                <Image
                  src={blog.image}
                  alt="Blog Image"
                  width={750}
                  height={450}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
