import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface DesignCardProps {
  id: number;
  title: string;
  description: string;
  figmaUrl?: string;
  dribbbleUrl?: string;
  behanceUrl?: string;
  className?: string;
  image: string;
}

export default function DesignCard(props: DesignCardProps) {
  return (
    <a
      key={props.id}
      href={props.behanceUrl || props.dribbbleUrl || props.figmaUrl || "#"}
    >
      <div className="w-full border border-[--navBarBorder] hover:underline bg-[#ffffff05] rounded-3xl flex flex-row justify-between">
        <div className="flex flex-col gap-2 w-full p-4 md:p-5  md:py-8  ">
          <p className="text-base font-semibold tracking-tight font-geist">
            {props.title}
          </p>
          <p className="text-sm hidden sm:block text-gray-400 font-lexend">
            {props.description}
          </p>

          <div className="flex flex-row gap-4 mt-4 items-center ">
            <Link
              href={props.figmaUrl || "#"}
              className="flex flex-row gap-1 items-center "
            >
              <Icon
                width="20"
                height="20"
                icon="devicon:figma"
                className="opacity-75 hover:opacity-100 transition-opacity duration-150"
              />
            </Link>
            <Link
              href={props.behanceUrl || "#"}
              className="flex flex-row gap-1 items-center border-l border-[--navBarBorder]  pl-4"
            >
              <Icon
                width="20"
                height="20"
                icon="akar-icons:behance-fill"
                className="opacity-75 hover:opacity-100 transition-opacity duration-150"
              />
            </Link>
            <Link
              href={props.dribbbleUrl || "#"}
              className="flex flex-row gap-1 items-center border-l border-[--navBarBorder] pl-4"
            >
              <Icon
                width="20"
                height="20"
                icon="logos:dribbble-icon"
                className="opacity-75 hover:opacity-100 transition-opacity duration-150"
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-full border-l border-[--navBarBorder] overflow-hidden rounded-r-3xl">
          <Image
            src={props.image}
            alt="Blog Image"
            width={500}
            height={300}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </a>
  );
}
