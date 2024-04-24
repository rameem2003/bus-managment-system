import React from "react";
import Status from "./Status";

const StatusCard = () => {
  return (
    <div className="py-[26px] px-[19px] border-[2px] border-primary rounded-[15px] w-[450px] h-[670px]">
      <h2 className=" font-anek font-semibold text-[35px] leading-[30px] text-black">
        বাস কোডঃ ১২৫০
      </h2>

      <div className="h-[560px]  mt-[10px] overflow-y-scroll no-scrollbar">
        <Status />
        <Status />
        <Status />
        <Status />
        <Status />
      </div>

      <p className=" font-poppins font-semibold text-[24px] leading-[30px] text-primary text-center">
        See All
      </p>
    </div>
  );
};

export default StatusCard;
