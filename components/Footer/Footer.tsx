import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footer">
      {/* Left Side */}
      <div className="flex gap-5 items-center">
        <Link href="/">
          <Image src="/logo.png" width="32" height="32" alt="Logo Image" />
        </Link>
        <Link
          href="/"
          className="footerText"
        >
          ReadMe
        </Link>
        <Link
          href="/blogs"
          className="footerText"
        >
          Blogs
        </Link>
        <Link
          href="/projects"
          className="footerText"
        >
          Projects
        </Link>
        <Link
          href="/designes"
          className="footerText"
        >
          Designs
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex gap-5 items-center">
        <Link href="http://github.com/ErenElagz" target="_blank">
          <Icon
            className="footerText"
            icon="akar-icons:github-fill"
            width="24"
            height="24"
          />
        </Link>
        <Link href="http://linkedin.com/in/ErenElagz" target="_blank">
          <Icon
            className="footerText"
            icon="akar-icons:linkedin-fill"
            width="24"
            height="24"
          />
        </Link>
        <Link href="http://x.com/ErenElagz" target="_blank">
          <Icon
            className="footerText"
            icon="akar-icons:x-fill"
            width="24"
            height="24"
          />
        </Link>
      </div>
    </div>
  );
}
