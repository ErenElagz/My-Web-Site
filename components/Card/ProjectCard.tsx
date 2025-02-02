import React from "react";
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
  icon: string;
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
        <div className="flex flex-col gap-2 w-full p-4 md:p-5  md:py-8  ">
          <Icon icon={props.icon} width="32" height="32" />
          <p className="text-base font-semibold mt-2 tracking-tight font-geist">
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
              <p className="text-[12px] whitespace-nowrap md:text-sm font-medium">
                {props.stars} Stars
              </p>
            </div>
            <div className="flex flex-row gap-1 items-center border-l border-[--navBarBorder]  pl-2">
              <Icon
                width="20"
                height="20"
                icon="pajamas:fork"
                className="text-green-500"
              />
              <p className="text-[12px] whitespace-nowrap md:text-sm  font-medium">
                {props.forks} Forks
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
