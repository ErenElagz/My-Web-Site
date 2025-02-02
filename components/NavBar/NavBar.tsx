"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import { usePathname } from "next/navigation"; // ✅ Import usePathname

export default function NavBar() {
  const pathname = usePathname(); // ✅ Get current route

  // Helper function to apply active styles
  const getLinkClass = (route: string) =>
    pathname === route ? "opacity-100" : "opacity-50 hover:opacity-100";

  return (
    <div>
      <div className="w-full flex items-center justify-center md:justify-between">
        {/* Left Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="ErenElagz"
            width={36}
            height={36}
            className="hidden md:block"
          />
        </Link>

        {/* Navigation Links */}
        <nav className="navbar flex gap-6">
          <Link href="/" className={`navbarText ${getLinkClass("/")}`}>
            ReadMe
          </Link>
          <Link
            href="/blogs"
            className={`navbarText ${getLinkClass("/blogs/")}`}
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className={`navbarText ${getLinkClass("/projects/")}`}
          >
            Projects
          </Link>
          <Link
            href="/designs"
            className={`navbarText ${getLinkClass("/designs/")}`}
          >
            Designs
          </Link>
        </nav>

        {/* Right Button */}
        <Button
          title="Say Hi!👋"
          url={"mailto:erenelagoz@gmail.com"}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}