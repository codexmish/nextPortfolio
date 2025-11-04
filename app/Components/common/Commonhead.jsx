import React from "react";

const Commonhead = ({ head, text }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-[18px] text-center">
        <h2 className="text-2xl lg:text-[40px] text-text font-bold font-lato">
          {head}
        </h2>
        <p className="text-base lg:text-[20px] text-secoundary-text font-medium font-lato">
          {text}
        </p>
      </div>
    </>
  );
};

export default Commonhead;
