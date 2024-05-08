"use client";

import Marquee from "react-fast-marquee";
import boardMembers from "@/constants";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface Props {
    name: String;
    role: String;
    img: StaticImageData;
    linkedin: string;
  }

const Card = ({ name, role, img, linkedin }: Props) => {
  return (
    <div className="w-full m-10 md:m-2 z-[45]">
      <div className="flex flex-col items-center justify-center gap-2">
        <div
          className={`card flex `}
        >
          <Image
            src={img}
            alt="boardmembers"
            height={210}
            width={210}
            className="rounded-[45px] h-full w-full object-cover"
          />

          <Link href={linkedin} target="_blank">
            <Image
              src="/linkedin.svg"
              alt="linkedin"
              width={60}
              height={60}
              className="absolute -right-5 -bottom-5"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 px-1 ">
          <h1 className="text-white text-2xl  text-center ">
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <section
      id="team"
      className="w-full flex flex-col justify-center items-center overflow-hidden  mb-8 z-[45]  "
    >
      <div className="flex flex-col w-full items-center justify-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold font-['Space Grotesk']  mt-14 text-[30px] md:text-[45px] lg:text-[54px]">
          Organizers
        </h1>
        <Marquee direction="right" >

        <div className="flex p-10 justify-items-center gap-10 ">
          {boardMembers
            .filter((e) => e.type === "organizer")
            .map((e) => (
              <Card
                name={e.name}
                role={e.role}
                img={e?.image}
                key={e.name}
                linkedin={e?.linkedIn}
              />
            ))}
        </div>
        </Marquee>
      </div>
    </section>
  );
}
