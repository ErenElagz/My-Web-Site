import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Image from "next/image";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Link from "next/link";
import LinkButton from "../components/LinkButton/LinkButton";
import Footer from "@/components/Footer/Footer";

export default function Designes() {
  return (
    <div className="lg:w-4/12 md:container flex flex-col mx-auto mt-6">
      {/* Navigation */}
      <NavBar />

      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-16 font-lexend">
          Design Portfolio
        </h1>
        <p className="text-base text-gray-500 mt-3">
          I am also designing. You can check my designs in Dribbble and Behance.
        </p>
      </div>

      <div className="flex flex-row gap-3 mt-6">
        <SocialButtons
          title="My Dribbble Profile"
          url="https://dribbble.com/ErenElagz"
          icon="akar-icons:dribbble-fill"
        />
        <SocialButtons
          title="My Behance Account"
          url="https://behance.com/in/ErenElagz"
          icon="akar-icons:behance-fill"
        />
        <SocialButtons
          title="My Pinterest Account"
          url="https://pinterest.com/ErenElagz"
          icon="akar-icons:pinterest-fill"
        />
      </div>

      <div className="w-full mt-12 flex flex-col gap-6">
        {/* HitBis */}
        <div className="w-full border rounded-3xl flex flex-col p-5 justify-between">
          <Link href="/projects/company-os">
            <div className="flex justify-between mb-4 items-center">
              <Image
                src="/company-os.png"
                alt="Company OS"
                width={72}
                height={72}
              />

              <div className="flex flex-col gap-3">
                <LinkButton
                  title="Watch the Video"
                  url="https://github.com/ErenElagz"
                  icon="mdi:play"
                />
                <LinkButton
                  title="Buy Now 12$"
                  url="https://github.com/ErenElagz"
                  icon="akar-icons:github-fill"
                />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight font-geist">
                HitBis: Bicycle Sharing App
              </p>
              <p className="text-base text-gray-500 font-lexend">
                IoT Based Bicycle Renting App and AI Based Ride Assistant.
              </p>
            </div>
          </Link>
        </div>

        {/* Belen */}
        <div className="w-full border rounded-3xl flex flex-col p-5 justify-between">
          <Link href="/projects/company-os">
            <div className="flex justify-between mb-4 items-center">
              <Image
                src="/company-os.png"
                alt="Company OS"
                width={72}
                height={72}
              />

              <div className="flex flex-col gap-3">
                <LinkButton
                  title="Watch the Video"
                  url="https://github.com/ErenElagz"
                  icon="mdi:play"
                />
                <LinkButton
                  title="Buy Now 12$"
                  url="https://github.com/ErenElagz"
                  icon="akar-icons:github-fill"
                />
              </div>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight font-geist">
                Belen: AI Based Tourism Assistant
              </p>
              <p className="text-base text-gray-500 font-lexend">
                AR/VR Supported Tourism Assistant App for the Travelers.
              </p>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
