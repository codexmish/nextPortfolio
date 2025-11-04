import React from "react";
import Commonhead from "./common/Commonhead";
import Image from "next/image";
import about from "../../public/about.png";
import CommonProgress from "./common/CommonProgress";

const About = () => {
  return (
    <>
      <section className="bg-black-bg">
        <div className="container">
          <Commonhead
            head={"About Me"}
            text={"User Interface and User Experience and Also video editing "}
          />

          <div className="flex items-center justify-center gap-25 pb-25">
            <div className="img">
              <Image src={about} />
            </div>
            <div className="text">
              <p className="text-[20px] text-secoundary-text font-medium font-lato max-w-150">
                A software engineer, the modern-day architect of digital realms,
                navigates the ethereal landscapes of code, sculpting intangible
                structures that shape our technological world. With fingers
                poised over keyboards like virtuoso pianists, they compose
                symphonies of logic, their minds a labyrinth of algorithms and
                solutions.Their canvas is a screen, a vast expanse where lines
                of code dance in intricate patterns, weaving the fabric of
                programs and applications. Each keystroke is a brushstroke,
                crafting intricate architectures and breathing life into
                innovative designs.In this digital atelier, they don the mantle
                of problem solvers, confronting bugs and glitches like valiant
                knights in an ever-evolving quest for perfection. Debugging
                becomes a noble pursuit, unraveling the mysteries hidden within
                the tangled webs of code. designs.In this digital atelier.
              </p>
              <div className="sin-button cursor-pointer w-[130px] lg:w-[209px] h-[33px] lg:h-[45px] flex items-center justify-center bg-theme hover:bg-transparent text-sm border-none hover:border  hover:border-secoundary-text text-text mt-10 font-medium font-lato rounded-[8px] lg:rounded-2xl">
                Download CV
              </div>
            </div>
          </div>

          <CommonProgress/>
        </div>
      </section>
    </>
  );
};

export default About;
