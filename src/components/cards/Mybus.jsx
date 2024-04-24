import React from "react";
import Flex from "../Flex";

const Mybus = () => {
  return (
    <div className=" group w-[450px] h-[240px] border-[2px] border-primary rounded-[15px] bg-white hover:bg-primary pt-[13px] px-[19px]">
      <Flex className={`items-center justify-between`}>
        <span className=" font-anek font-semibold text-[20px] leading-[30px] text-black bg-info py-[5px] px-[30px] rounded-[15px]">
          বাস কোডঃ ১২৫০
        </span>

        <Flex className={`items-center gap-[17px]`}>
          <p className=" font-anek font-semibold text-[20px] leading-[30px] text-black group-hover:text-white">
            মোট সিটঃ
          </p>

          <span className=" flex items-center justify-center font-anek font-bold text-[20px] leading-[30px] text-[#ff0000] p-[10px] rounded-full bg-info">
            ৪৫
          </span>
        </Flex>
      </Flex>

      <div className="mt-[22px]">
        <h3 className=" font-anek font-bold text-[30px] leading-[30px] text-black group-hover:text-white mb-[17px]">
          ড্রাইভারঃ ড্রাইভার এর নাম
        </h3>
        <h3 className=" font-anek font-bold text-[30px] leading-[30px] text-black group-hover:text-white">
          হেল্পারঃ হেল্পার এর নাম
        </h3>
      </div>

      <Flex className={`items-center justify-between mt-[22px]`}>
        <button className=" font-anek font-bold text-[22px] leading-[30px] text-black py-[3px] px-[35px] rounded-[15px] bg-info">
          রুটিন
        </button>

        <button className=" font-poppins font-semibold text-[20px] leading-[30px] text-white py-[3px] px-[37px] rounded-[15px] bg-secondary">
          Manage
        </button>
      </Flex>
    </div>
  );
};

export default Mybus;
