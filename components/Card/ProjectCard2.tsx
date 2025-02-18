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

export default function ProjectCard2(props: ProjectCardProps) {
  return (
    <Link
      href={props.githubUrl || "#"}
      passHref
      key={props.id}
      className="hover:underline"
    >
      <div className="w-full rounded-2xl border-l-2 border-[--navBarBorder] bg-[#ffffff05] flex flex-row  justify-between">
        <div className="flex flex-col gap-2 w-full p-4 md:p-5 md:py-4  ">
          <Icon icon={props.icon} width="24" height="24" />
          <p className="text-base font-semibold mt-2 tracking-tight font-geist">
            {props.title}
          </p>
          <p className="text-sm text-gray-400 font-lexend">
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
