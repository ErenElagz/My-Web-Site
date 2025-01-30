import React from "react";
import "./globals.css";
import SocialButtons from "./components/SocialButtons/SocialButtons";
export default function Home() {
  return (
    <div className="flex flex-row gap-3 items-center justify-center p-4">
      <SocialButtons
        title="GitHub"
        url="https://github.com/ErenElagz"
        icon="akar-icons:github-fill"
      />
      <SocialButtons
        title="LinkedIn"
        url="https://linkedin.com/in/ErenElagz"
        icon="akar-icons:linkedin-fill"
      />
      <SocialButtons
        title="X"
        url="https://x.com/ErenElagz"
        icon="akar-icons:x-fill"
      />
    </div>
  );
}
