import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Sponsors = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="sponsors"
    >
      <h1 className="lg:text-[50px] text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Our Sponsors
      </h1>
      <div className="flex flex-col w-full gap-8 items-center justify-center ">
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
          <ProjectCard
            src="/revealing.png"
            title="TITLE PARTNER"
            description="Sponsor Name"
          />
        </div>
        <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-center justify-center">
          <ProjectCard
            src="/revealing.png"
            title="Sponsor Tier"
            description="Sponsor Name"
          />
          <ProjectCard
            src="/revealing.png"
            title="Sponsor Tier"
            description="Sponsor Name"
          />
          <ProjectCard
            src="/revealing.png"
            title="Sponsor Tier"
            description="Sponsor Name"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
