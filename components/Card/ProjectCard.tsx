import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  githubUrl?: string;
  stars: number;
  forks: number;
  className?: string;
  image: string;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Link
      href={props.githubUrl || "#"}
      passHref
      key={props.id}
      className="hover:underline"
    >
      <div className="w-full border border-[--navBarBorder] bg-[#ffffff10] rounded-3xl flex flex-row  justify-between">
        <div className="flex flex-col gap-2 w-full p-5 py-8">
          <p className="text-base font-semiBold tracking-tight font-geist">
            {props.title}
          </p>
          <p className="text-sm text-gray-400 font-lexend">
            {props.description}
          </p>
          <div className="flex flex-row gap-4 mt-4 items-center ">
            <div className="flex flex-row gap-1 items-center">
              <Icon
                width="24"
                height="24"
                icon="material-symbols:star-rounded"
                className="text-yellow-500"
              />
              <p className="text-sm font-medium">{props.stars} Stars</p>
            </div>
            <div className="flex flex-row gap-1 items-center border-l border-[--navBarBorder]  pl-2">
              <Icon
                width="20"
                height="20"
                icon="pajamas:fork"
                className="text-green-500"
              />
              <p className="text-sm font-medium">{props.stars} Forks</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full border-l border-[--navBarBorder]  overflow-hidden rounded-r-3xl">
          <Image src={props.image} alt="Blog Image" width={750} height={450} />
        </div>
      </div>
    </Link>
  );
}
