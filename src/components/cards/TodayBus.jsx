import React from "react";
import Flex from "../Flex";

const TodayBus = () => {
  return (
    <div className="w-[450px] h-[240px] pt-[21px] px-5 pb-[19px] bg-primary mx-auto rounded-[15px]">
      <Flex className={`items-center justify-between`}>
        <h1 className=" font-anek font-semibold text-[35px] leading-[30px] text-white">
          ঢাকা - কুমিল্লা
        </h1>

        <span className=" py-[6px] px-[30px] block bg-info rounded-[15px] font-anek font-semibold text-[20px] leading-[30px] text-black">
          বাস কোডঃ ১২৫০
        </span>
      </Flex>

      <Flex className={`items-center justify-between mt-[52px]`}>
        <h2 className=" font-anek font-bold text-[45px] leading-[30px] text-white">
          বুকিংঃ ৩০
        </h2>
        <h2 className=" font-anek font-bold text-[45px] leading-[30px] text-white">
          বাকিঃ ১৫
        </h2>
      </Flex>

      <button className=" mt-[45px] block w-full font-poppins font-semibold text-[20px] leading-[30px] text-white py-[3px] rounded-[15px] bg-secondary">
        Details
      </button>
    </div>
  );
};

export default TodayBus;
