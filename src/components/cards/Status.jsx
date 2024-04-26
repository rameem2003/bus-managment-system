import React from "react";

const Status = () => {
  return (
    <div className="bg-primary w-full h-[90px] px-3 rounded-[15px] mb-[21px] flex items-center justify-between">
      <h3 className=" font-anek font-semibold text-[16px] leading-[30px] text-white">
        তারিখঃ ১২ জুন ২০২৪
      </h3>
      <h3 className=" font-anek font-semibold text-[16px] leading-[30px] text-white">
        বুকডঃ ১২
      </h3>
      <button className="py-[1px] px-[33px] font-anek font-semibold text-[16px] leading-[30px] text-white rounded-[15px] bg-secondary">
        Details
      </button>
    </div>
  );
};

export default Status;
