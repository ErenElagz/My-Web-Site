import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface BlogCardProps {
  id: number;
  date: string;
  title: string;
  description: string;
  mediumUrl?: string;
  devtoUrl?: string;
  className?: string;
  image: string;
}

export default function BlogCard(props: BlogCardProps) {
  return (
    <div key={props.id}>
      <div className="hover:underline w-full border border-[--navBarBorder] bg-[#ffffff10] rounded-3xl flex flex-row  justify-between">
        <div className="flex flex-col gap-2 w-full p-4 md:p-5  md:py-8  ">
          <p className="text-sm font-semibold tracking-tight opacity-50">
            {props.date}
          </p>
          <p className="text-xl font-semibold tracking-tight font-geist">
            {props.title}
          </p>
          <p className="text-sm  text-gray-400 font-lexend break-normal">
            {props.description}
          </p>
          <div className="flex flex-row gap-4 mt-4 items-center ">
            <Link
              href={props.mediumUrl || "#"}
              className="flex flex-row gap-1 items-center "
            >
              <Icon
                width="20"
                height="20"
                icon="jam:medium"
                className="opacity-50 hover:opacity-100 transition-opacity duration-150"
              />
            </Link>
            <Link
              href={props.devtoUrl || "#"}
              className="flex flex-row gap-1 items-center border-l border-[--navBarBorder]  pl-4"
            >
              <Icon
                width="20"
                height="20"
                icon="fa6-brands:dev"
                className="text-blue-600 opacity-50 hover:opacity-100 transition-opacity duration-150 "
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
