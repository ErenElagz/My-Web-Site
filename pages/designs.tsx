import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Image from "next/image";
import SocialButtons from "../components/SocialButtons/SocialButtons";
import Link from "next/link";
import Footer from "@/components/Footer/Footer";
import { designs } from "@/data/designs";
import { Icon } from "@iconify/react";

export default function Designes() {
  return (
    <div className="lg:w-4/12 md:container flex flex-col mx-auto mt-6">
      {/* Navigation */}
      <NavBar />

      {/* Header */}
      <div>
        <h1 className="text-4xl font-semibold tracking-tight mt-16 font-lexend">
          Design Portfolio
        </h1>
        <p className="text-base text-gray-500 mt-3">
          I am also designing. You can check my designs in Dribbble and Behance.
        </p>
      </div>

      {/* Social Buttons */}
      <div className="flex flex-row gap-3 mt-6">
        <SocialButtons
          title="My Dribbble Profile"
          url="https://dribbble.com/ErenElagz"
          icon="akar-icons:dribbble-fill"
        />
        <SocialButtons
          title="My Behance Account"
          url="https://behance.com/ErenElagz"
          icon="akar-icons:behance-fill"
        />
        <SocialButtons
          title="My Pinterest Account"
          url="https://pinterest.com/ErenElagz"
          icon="akar-icons:pinterest-fill"
        />
      </div>

      {/* Designs */}
      <div className="w-full mt-8 flex flex-col gap-4">
        {designs.map((design) => (
          <Link href={design.figmaUrl} passHref key={design.id}>
            <div className="w-full border rounded-3xl flex flex-row justify-between">
              <div className="flex flex-col gap-2 w-full p-5 py-8">
                <p className="text-base font-bold tracking-tight font-geist">
                  {design.name}
                </p>
                <p className="text-sm text-gray-400 font-lexend">
                  {design.description}
                </p>

                <div className="flex flex-row gap-4 mt-4 items-center ">
                  <Link
                    href={design.figmaUrl}
                    className="flex flex-row gap-1 items-center "
                  >
                    <Icon
                      width="20"
                      height="20"
                      icon="devicon:figma"
                      className="text-purple-800"
                    />
                  </Link>
                  <Link
                    href={design.figmaUrl}
                    className="flex flex-row gap-1 items-center border-l pl-4"
                  >
                    <Icon
                      width="20"
                      height="20"
                      icon="akar-icons:behance-fill"
                      className="text-blue-700"
                    />
                  </Link>
                  <Link
                    href={design.figmaUrl}
                    className="flex flex-row gap-1 items-center border-l pl-4"
                  >
                    <Icon
                      width="20"
                      height="20"
                      icon="logos:dribbble-icon"
                      className="text-[#484848]"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col w-full border-l overflow-hidden rounded-r-3xl">
                <Image
                  src={design.image}
                  alt="Blog Image"
                  width={750}
                  height={450}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
