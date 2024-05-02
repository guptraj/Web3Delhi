"use client";

import Image from "next/image";
import React, { useCallback, useState } from "react";
import { MdOutlineAppRegistration } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { FaQuestion } from "react-icons/fa";

const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="w-full h-[65px] lg:h-[75px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300 text-[30px]">
            Web3Delhi
          </span>
        </a>

        <div className="w-[60vw] h-full lg:flex hidden flex-row items-center justify-between">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full xl:text-[18px] text-gray-200">
            <a href="#about" className="cursor-pointer">
              About
            </a>
            <a href="#prizes" className="cursor-pointer">
              Prizes
            </a>
            <a href="#tracks" className="cursor-pointer">
              Tracks
            </a>
            <a href="#schedule" className="cursor-pointer">
              Schedule
            </a>
            <a href="#sponsors" className="cursor-pointer">
              Sponsors
            </a>
            <a href="#tean" className="cursor-pointer">
              Team
            </a>
            <a href="https://www.namespacecomm.in/" className="cursor-pointer">
              nameSpace
            </a>
          </div>
        </div>

        <div
          className="flex flex-row gap-5 cursor-pointer"
          onClick={toggleOpen}
        >
          <img src="/menu.png" alt="drop down menu" className="w-[30px]" />

          <div>
            {isopen && (
              <div>
                {isopen && (
                  <div
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6 }}
                    className=" w-[250px] bg-gray-50 shadow-xl rounded-lg flex flex-col overflow-hidden absolute top-14 right-5 z-40 "
                  >
                    <div className="flex flex-col items-center cursor-pointer">
                      <p className="w-full justify-center px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base">
                        FAQ <FaQuestion />
                      </p>

                      <p className="w-full justify-center px-4 py-2 flex  items-center gap-3 cursor-pointer hover:bg-gray-200 transition-all duration-100 ease-in-out text-textColor text-base">
                        Contact Us <IoMdContacts />
                      </p>
                      <p className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                        Mentors
                        <MdOutlineAppRegistration />
                      </p>
                      <p className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                        Community Partners
                        <MdOutlineAppRegistration />
                      </p>
                      <p className="m-2 px-4 py-2 rounded-md shadow-md  flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base">
                        Hackathon Evangelists
                        <MdOutlineAppRegistration />
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
