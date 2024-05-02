"use client";

import React from "react";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";


const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-5 md:pt-25 xl:pt-40 z-[25]"
      style={{ transform: "scale(0.9" }}
    >
      {/* <SkillText /> */}
      <div className="w-full h-auto flex flex-col items-center justify-center">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] "
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-8 w-8" />
          <h1 className="Welcome-text text-[25px] mr-[10px]">
            About Web3Delhi
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="lg:text-[25px] text-[18px] text-white font-medium mt-[10px] text-center mb-[15px]"
        >
          <div>Web3Delhi: Unleash Decentralized Innovation</div>
          <div>
            Experience a whirlwind 24-hour offline blockchain hackathon where
            creativity meets rapid problem-solving. At Web3Delhi, embrace
            collaboration and exploration beyond boundaries as you develop
            groundbreaking decentralized solutions. Choose from diverse
            blockchain domains spanning DeFi, supply chain transparency, digital
            identity, and more. Join forces with interdisciplinary teams to
            create impactful dApps and foster a spirit of decentralized
            innovation. Immerse yourself in the thrill of pushing blockchain
            boundaries for a better world.
          </div>
        </motion.div>
        <motion.div
          variants={slideInFromRight(0.5)}
          className="cursive lg:text-[25px] text-[18px] text-gray-200 mb-10 mt-[10px] text-center"
        >
          Never miss an opportunity, initiative or idea
        </motion.div>
      </div>

      <div className="flex md:flex-row flex-col justify-around flex-wrap mt-4 lg:gap-20 gap-10 items-center justify-center">
        <div className="flex flex-row gap-5">
          <div>
            <img
              src="/calender2.png"
              alt="calender2"
              className="w-[150px] h-[150px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center  ">
            <p className="text-white text-[35px] font-bold">Date</p>
            <p className="text-white lg:text-[26px] text-[20px]">
              November 2024
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <img
            src="/location.png"
            alt="location"
            className="w-[150px] h-[150px]"
          />
          <div className="flex flex-col items-center justify-center  ">
            <p className="text-white text-[35px] font-bold">Venue</p>
            <p className="text-white text-[26px]">To be declared</p>
          </div>
        </div>
      </div>

      

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
