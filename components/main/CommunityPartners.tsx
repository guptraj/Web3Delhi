"use client";

import SpecialPrize from "@/components/sub/SpecialPrizeCardImage";
import revealing from "@/public/revealing.png";
import Marquee from "react-fast-marquee";

export default function CommunityPartners() {
  const communityPartner: any[] = [
    {
      src: "/cps1.png",
      alt: "cps image",
    },
    {
      src: "/cps1.png",
      alt: "cps image",
    },
    {
      src: "/cps1.png",
      alt: "cps image",
    },
    {
      src: "/cps1.png",
      alt: "cps image",
    },
    {
      src: "/cps1.png",
      alt: "cps image",
    },
    {
      src: "/cps1.png",
      alt: "cps image",
    },
  ];
  return (
    <section
      id="tracks"
      className="w-full flex flex-col justify-center items-center overflow-hidden  mb-8 z-[45]  "
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold font-['Space Grotesk'] md:mt-32 mt-14 text-[30px] md:text-[45px] lg:text-[54px]">
          Community Partners
        </h1>
        <Marquee pauseOnHover={true} speed={50} direction="right">
          
          {communityPartner && communityPartner.length > 0
              ? communityPartner.map((member) => {
                return (
                    <img key={member.alt} src={member.src} alt={member.alt} className="w-[300px] md:w-[500px]" />
                );
              })
              : ""}
        </Marquee>
      </div>
    </section>
  );
}
