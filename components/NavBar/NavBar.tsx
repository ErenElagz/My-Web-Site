import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";

function NavBar() {
  return (
    <div>
      <div className="w-full flex  items-center justify-between">
        {/* Left Image */}
        <Image src="/logo.png" alt="ErenElagz" width={36} height={36} />

        {/* Navigation Bar */}
        <nav className="flex bg-[--navBarBackground] border w-min rounded-[999] py-2 px-6 gap-8 items-center">
          <Link
            href="/"
            className="opacity-50 hover:opacity-100 transition-opacity duration-150"
          >
            ReadMe
          </Link>
          <Link
            href="/blogs"
            className="opacity-50 hover:opacity-100 transition-opacity duration-150"
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className="opacity-50 hover:opacity-100 transition-opacity duration-150"
          >
            Projects
          </Link>
          <Link
            href="/designs"
            className="opacity-50 hover:opacity-100 transition-opacity duration-150"
          >
            Designs
          </Link>
        </nav>

        {/* Right Button */}
        <Button title=" Say Hi!👋" url={"mailto:erenelagz@gmail.com"} />
      </div>
    </div>
  );
}

export default NavBar;
