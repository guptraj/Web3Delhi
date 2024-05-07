"use client";

import SpecialPrize from "@/components/sub/SpecialPrizeCardImage";
import revealing from "@/public/revealing.png";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Prizes() {

  return (
    <section
      id="prizes"
      className="w-full flex flex-col justify-center items-center overflow-hidden md:mt-20 mt-10  mb-8 z-[45] "
    >
      <div className="flex flex-col justify-center items-center gap-16 w-full h-full">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 font-bold font-['Space Grotesk'] md:mt-32 mt-24 text-[30px] md:text[45px] lg:text-[54px]">
          Prizes
        </h1>
        <div className="2xl:max-w-[1280px] w-full sm:pt-16 xs:pt-8 pt-12 flex justify-center items-center lg:flex-row flex-col gap-6 z-[10]">
          {/* 1st prize */}
          <div className="flex-[0.5] lg:max-w-[370px] w-[70vw] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]">
            <div className="justify-center items-center w-full flex">
              <img
                src="/first.png"
                alt=""
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />
              <div className=" absolute w-[150px] h-[150px] hero-gradient1 rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
                First Prize
              </h4>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
                Total prize of{" "}
                <span className="font-extrabold text-white">$ 10,000</span>
                <br />
              </h5>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
                Cash prize of{" "}
                <span className="font-extrabold text-white">₹ 25,000</span>{" "}
                <br />
              </h5>
              <h5 className="mt-[20px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]">
                Know More <br />
              </h5>
            </div>
          </div>

          {/* 2nd prize */}
          <div className="flex-[0.5] lg:max-w-[370px] w-[70vw] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[60px]">
            <div className="justify-center items-center w-full flex">
              <img
                src="/second.png"
                alt=""
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient3 rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
                Second Prize
              </h4>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
                Total prize of{" "}
                <span className="font-extrabold text-white">$ 7,500</span>
                <br />
              </h5>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
                Cash prize of{" "}
                <span className="font-extrabold text-white">₹ 15,000</span>{" "}
                <br />
              </h5>
              <h5 className="mt-[20px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]">
                Know More <br />
              </h5>
            </div>
          </div>

          {/* 3rd prize */}
          <div className="flex-[0.5] lg:max-w-[370px] w-[70vw] flex justify-center items-center flex-col gradient-05 sm:p-8  p-4 rounded-[32px] border-[1px] border-[#6A6A6A] relative lg:mb-[0px] mb-[10px]">
            <div className="justify-center items-center w-full flex">
              <img
                src="/third.png"
                alt=""
                className="absolute z-[2] -top-[65px] sm:w-[70px] w-[70px] sm:h-[155px] h-[150px] object-contain"
              />

              <div className=" absolute w-[150px] h-[150px] hero-gradient4 rounded-[100px] z-[0] -top-[60px] " />
              <div className=" absolute w-[110px] h-[110px] hero-gradient2 rounded-[100px] z-[1] -top-[40px]  " />
            </div>

            <div className="flex flex-col items-center z-[1] mt-[80px]">
              <h4 className="font-bold sm:text-[32px] text-[26px] sm:leading-[40.32px] leading-[36.32px] text-white mt-[20px] mb-[30px]">
                Third Prize
              </h4>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white mb-[10px]">
                Total prize of{" "}
                <span className="font-extrabold text-white">$ 5,000</span>
                <br />
              </h5>
              <h5 className="mt-[8px] font-normal sm:text-[22px] text-[18px] sm:leading-[22.68px] leading-[16.68px] text-white">
                Cash prize of{" "}
                <span className="font-extrabold text-white">₹ 10,000</span>{" "}
                <br />
              </h5>
              <h5 className="mt-[20px] font-extrabold sm:text-[22px] text-[20px] sm:leading-[22.68px] leading-[16.68px] text-white mt-[50px] hover:underline cursor-pointer mb-[15px]">
                Know More <br />
              </h5>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
