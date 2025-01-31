import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full mx-auto my-16 flex justify-between items-center">
      {/* Left Side */}
      <div className="flex gap-5 items-center">
        <Link href="/">
          <Image src="/logo.png" width="32" height="32" alt="Logo Image" />
        </Link>
        <Link
          href="/"
          className="opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          ReadMe
        </Link>
        <Link
          href="/blogs"
          className="opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          Blogs
        </Link>
        <Link
          href="/projects"
          className="opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          Projects
        </Link>
        <Link
          href="/"
          className="opacity-60 hover:opacity-100 transition-opacity duration-200"
        >
          Item
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex gap-5 items-center">
        <div>
          <p className="text-sm opacity-50">©2025 Eren Elagöz</p>
        </div>
        <Link href="http://github.com/ErenElagz" target="_blank">
          <Icon
            className="opacity-50 hover:opacity-100 transition-opacity duration-200"
            icon="akar-icons:github-fill"
            width="24"
            height="24"
          />
        </Link>
        <Link href="http://linkedin.com/in/ErenElagz" target="_blank">
          <Icon
            className="opacity-50 hover:opacity-100 transition-opacity duration-200"
            icon="akar-icons:linkedin-fill"
            width="24"
            height="24"
          />
        </Link>
        <Link href="http://x.com/ErenElagz" target="_blank">
          <Icon
            className="opacity-50 hover:opacity-100 transition-opacity duration-200"
            icon="akar-icons:x-fill"
            width="24"
            height="24"
          />
        </Link>
      </div>
    </div>
  );
}
