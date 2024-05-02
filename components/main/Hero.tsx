"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      className="relative flex flex-row h-full w-full items-center justify-center"
      id="about-me"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-28 w-full z-[25]"
      >
        <div className="h-full w-full flex flex-col gap-2 text-start items-center justify-center ">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] "
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px]  md:w-5 md:w-5 lg:h-7 lg:w-7 h-4 w-4" />
            <h1 className="Welcome-text text-[12px] md:text-[18px] lg:text-[22px] xl:text-[25px] ">
              24 hour Offline Hackathon
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-row md:text-[60px] lg:text-[80px] xl:text-[100px] sm:text-[40px] text-[29px] font-bold text-white w-full h-full my-[10px] items-center justify-center"
          >
            <div className="flex flex-col ">
              <p>
              Providing 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
                </p>
                
                <p>
                Web3 experience
                </p>
                </div>
          </motion.div>

          <div className=" flex flex-col lg:flex-row w-full items-center justify-center lg:gap-5 ">
            <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 md:px-5 px-2 button-primary mt-[20px] text-center md:text-[25px] text-[18px] text-white cursor-pointer rounded-lg max-w-[380px] flex flex-column justify-center items-center gap-5 "
            >
              Registrations Starting Soon!
            </motion.a>

            <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 px-5 button-primary mt-[20px] text-center md:text-[25px] text-[18px] text-white cursor-pointer rounded-lg max-w-[350px] flex flex-column justify-center items-center gap-5 "
            >
              <div>
                <img
                  src="/discord2.svg"
                  alt="discord logo"
                  className="md:w-[40px] w-[25px]"
                />
              </div>
              <div>Discord Server</div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
