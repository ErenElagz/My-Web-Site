import React from "react";
import NavBar from "../components/NavBar/NavBar";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Footer from "@/components/Footer/Footer";
import { blogs } from "@/data/blogs";
import BlogCard from "@/components/Card/BlogCard";
import GradientOverlayTop from "@/components/GradientOverlay/GradientOverlayTop";
import GradientOverlayBottom from "@/components/GradientOverlay/GradientOverlayBottom";
export default function Blogs() {
  return (
    <div className="lg:w-4/12 md:container flex flex-col mx-auto mt-6">
      {/* Gradient Overlay */}
      <GradientOverlayTop />

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
          <BlogCard
            key={blog.id}
            id={blog.id}
            date={blog.date}
            title={blog.title}
            description={blog.description}
            mediumUrl={blog.mediumUrl}
            devtoUrl={blog.devtoUrl}
            image={blog.image}
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
