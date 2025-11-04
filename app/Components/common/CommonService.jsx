import React from "react";

const CommonService = ({ icon, head, text }) => {
  return (
    <>
      <div className="w-100 h-[322px] bg-[#1d1b1c] rounded-3xl flex flex-col items-center justify-center text-center">
        <div className="icon w-[70px] text-4xl text-theme">{icon}</div>
        <h3 className="text-2xl text-theme font-bold font-lato mt-4 mb-9">
          {head}
        </h3>
        <p className="text-[20px] text-secoundary-text font-medium font-lato max-w-[339px]">
          {text}
        </p>
      </div>
    </>
  );
};

export default CommonService;
