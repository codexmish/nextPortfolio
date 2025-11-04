"use client";
import { Circle } from "rc-progress";
import React from "react";
import { FaFigma } from "react-icons/fa";

const CommonProgress = () => {
  return (
    <>
      <div className="w-[130px]">
        <Circle percent={100} strokeWidth={4} strokeColor="#FD6F00">
          <FaFigma className="text-secoundary-text text-4xl" />
        </Circle>
      </div>
    </>
  );
};

export default CommonProgress;
