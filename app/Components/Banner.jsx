import React from "react";
import person from "../../public/person.png";
import Image from "next/image";
import { SiInstagram } from "react-icons/si";
import { PiLinkedinLogoDuotone } from "react-icons/pi";
import { FaDribbble } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import CommonCounter from "./common/CommonCounter";

const Banner = () => {
  return (
    <>
      <section>
        <div className="banner bg-black-bg py-[106px]">
          <div className="container flex items-center justify-center gap-20">
            <div className="text">
              <h3 className="text-2xl text-secoundary-text font-semibold font-lato">
                Hi I am
              </h3>
              <h2 className="text-3xl text-secoundary-text font-bold font-lato mt-[10px] mb-6">
                Mahmood Fazile
              </h2>
              <h1 className="text-[70px] text-theme font-black font-lato">
                Front-End Developer
              </h1>

              {/* -------------social------ */}

              <div className="socials flex items-center gap-5 mt-[17px] mb-15">
                <div className="social1 w-10 h-10 rounded-full border border-secoundary-text text-[#BABABA] hover:text-white text-[20px] flex items-center justify-center">
                  <SiInstagram />
                </div>
                <div className="social1 w-10 h-10 rounded-full border border-secoundary-text text-[#BABABA] hover:text-white text-[20px] flex items-center justify-center">
                  <PiLinkedinLogoDuotone />
                </div>
                <div className="social1 w-10 h-10 rounded-full border border-secoundary-text text-[#BABABA] hover:text-white text-[20px] flex items-center justify-center">
                  <FaDribbble />
                </div>
                <div className="social1 w-10 h-10 rounded-full border border-secoundary-text text-[#BABABA] hover:text-white text-[20px] flex items-center justify-center">
                  <FaBehance />
                </div>
              </div>

              {/* ----------Buttons---------- */}

              <div className="buttons flex items-center gap-6">
                <div className="sin-button cursor-pointer w-[141px] h-[45px] flex items-center justify-center bg-theme hover:bg-transparent text-sm text-text hover:text-white font-medium font-lato rounded-2xl">
                  Hire Me
                </div>
                <div className="sin-button cursor-pointer w-[209px] h-[45px] flex items-center justify-center bg-transparent hover:bg-theme text-sm border hover:border-none border-secoundary-text text-text hover:text-white font-medium font-lato rounded-2xl">
                  Download CV
                </div>
              </div>

              {/* -------exp--- */}
              <div className="flex items-center mt-20 bg-[#1d1b1c] w-fit px-10 py-10 rounded-xl">
                <div className="border-r border-r-secoundary-text px-6">
                  <CommonCounter number={5} text={"Experiences"} />
                </div>
                <div className="border-r border-r-secoundary-text px-6">
                  <CommonCounter number={20} text={"Project done"} />
                </div>
                <div className=" px-6">
                  <CommonCounter number={80} text={"Happy Clients"} />
                </div>
              </div>
            </div>
            <div className="photo">
              <Image src={person} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
