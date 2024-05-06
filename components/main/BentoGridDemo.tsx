"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { SparklesIcon } from "@heroicons/react/24/solid";

export function BentoGridDemo() {
  return (
    <div className=" flex flex-col items-center" id="meetups">
      <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-[20px]">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-8 w-8" />
        <h1 className="Welcome-text text-[18px] lg:text-[25px] mr-[10px]">
          Meetups & Workshops
        </h1>
      </div>

      <BentoGrid className="max-w-6xl mx-[20px] z-[45]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl ">
    <img src="revealing.png" alt="image" className="w-full " />
  </div>
);
const items = [
  {
    title: "Meetup/Workshop Name",
    description: "Date and Location",
    header: <Skeleton />,
  },
  {
    title: "Meetup/Workshop Name",
    description: "Date and Location",
    header: <Skeleton />,
  },
  {
    title: "Meetup/Workshop Name",
    description: "Date and Location",
    header: <Skeleton />,
  },
  {
    title: "Meetup/Workshop Name",
    description: "Date and Location",
    header: <Skeleton />,
  },
  {
    title: "Meetup/Workshop Name",
    description: "Date and Location",
    header: <Skeleton />,
  },
  {
    title: "Meetup/Workshop Name",
    description: "Date and Location",
    header: <Skeleton />,
  },
  {
    title: "Meetup/Workshop Name",
    description: "Date and Location",
    header: <Skeleton />,
  },
];
