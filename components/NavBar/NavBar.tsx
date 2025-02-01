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
        <nav className="navbar border">
          <Link href="/" className="navbarText">
            ReadMe
          </Link>
          <Link href="/blogs" className="navbarText">
            Blogs
          </Link>
          <Link href="/projects" className="navbarText">
            Projects
          </Link>
          <Link href="/designs" className="navbarText">
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
