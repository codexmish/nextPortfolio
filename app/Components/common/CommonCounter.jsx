"use client";
import React from "react";
import CountUp from "react-countup";

const CommonCounter = ({number, text}) => {
  return (
    <>
      <div className="w-[144px]">
        <h2 className="text-2xl text-theme font-extrabold font-lato">
          <CountUp end={number} />+
        </h2>
        <h2 className="text-[20px] text-text font-bold font-lato">
          {text}
        </h2>
      </div>
    </>
  );
};

export default CommonCounter;
