import React from "react";

const AvailableSit = () => {
  return (
    <div>
      <div className=" mx-auto h-[150px] w-[150px] bg-secondary rounded-full flex items-center justify-center flex-col">
        <h1 className=" font-anek font-bold text-[40px] text-white">১২৫০</h1>
        <p className="font-anek font-bold text-[30px] text-white leading-[51px]">
          সিট
        </p>
      </div>

      <button className="block mt-[22px] mx-auto font-anek font-semibold text-[25px] leading-[51px] text-black bg-info px-[26px] rounded-[15px]">
        রিচার্জ করুন
      </button>

      <div className="h-[2px] bg-white w-full mt-6"></div>
    </div>
  );
};

export default AvailableSit;
