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
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold font-['Space Grotesk'] md:mt-32 mt-24 text-[30px] md:text[45px] lg:text-[54px] mb-4">
          Meetups & Workshops
        </h1>

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
