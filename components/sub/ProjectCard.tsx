import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] flex flex-col ">
      <div>
        <Image
          src={src}
          alt={title}
          width={350}
          height={350}
          className="w-full object-contain"
        />
      </div>

      <div className="relative p-4">
        <h1 className="lg:text-[30px] text-[24px] font-semibold text-white flex item-center justify-center ">{title}</h1>
        {/* <p className="mt-2 text-gray-300 flex item-center justify-center lg:text-[24px] text-[20px]">{description}</p> */}
      </div>
    </div>
  );
};

export default ProjectCard;
