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
    <div className="max-w-[660px] px-4 lg:w-4/12 flex flex-col mx-auto  m-3 md:mt-6">
      {/* Gradient Overlay */}
      <GradientOverlayTop />

      {/* Navigation */}
      <NavBar />

      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-5 md:mt-16 font-lexend">
          Latest Blogs
        </h1>
        <p className="text-base text-gray-500 mt-3">
          I am also blogging. You can check my articles in Medium and Dev.to.
        </p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-row gap-3 mt-6 flex-wrap">
        <SocialButtons
          title="Medium"
          url="https://medium.com/@ErenElagz"
          icon="akar-icons:medium-fill"
        />
        <SocialButtons
          title="Dev.to"
          url="https://dev.to/ErenElagz"
          icon="skill-icons:devto-dark"
        />
        <SocialButtons
          title="Add me on RSS"
          url="https://morss.it/https://medium.com/feed/@erenelagz"
          icon="foundation:rss"
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
