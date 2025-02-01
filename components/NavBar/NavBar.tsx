import React from "react";
import Link from "next/link";

function NavBar() {
  return (
    <nav className="flex bg-[--navBarBackground] w-min rounded-[999] py-3 px-8 gap-12 items-center">
      <Link href="/ ">
        <p className="opacity-50 hover:opacity-100 transition-opacity duration-200">
          ReadMe
        </p>
      </Link>
      <Link href="/blogs">
        <p className="opacity-50 hover:opacity-100 transition-opacity duration-200">
          Blogs
        </p>
      </Link>
      <Link href="/projects">
        <p className="opacity-50 hover:opacity-100 transition-opacity duration-200">
          Projects
        </p>
      </Link>
      <Link href="/designs">
        <p className="opacity-50 hover:opacity-100 transition-opacity duration-200">
          Designs
        </p>
      </Link>
    </nav>
  );
}

export default NavBar;
