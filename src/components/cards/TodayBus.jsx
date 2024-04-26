import React from "react";

const TodayBus = () => {
  return (
    <div className=" group w-[400px] h-[200px] pt-[21px] px-5 pb-[19px] bg-white hover:bg-primary border-[2px] border-primary rounded-[15px]">
      <div className={` flex items-center justify-between`}>
        <h1 className=" font-anek font-semibold text-[30px] leading-[30px] text-black group-hover:text-white">
          ঢাকা - কুমিল্লা
        </h1>

        <span className=" py-[6px] px-[30px] block bg-info rounded-[15px] font-anek font-semibold text-[16px] leading-[30px] text-black">
          বাস কোডঃ ১২৫০
        </span>
      </div>

      <div className={` flex items-center justify-between mt-[32px]`}>
        <h2 className=" font-anek font-bold text-[35px] leading-[30px] text-black group-hover:text-white">
          বুকিংঃ ৩০
        </h2>
        <h2 className=" font-anek font-bold text-[35px] leading-[30px] text-black group-hover:text-white">
          বাকিঃ ১৫
        </h2>
      </div>

      <button className=" mt-[20px] block w-full font-poppins font-semibold text-[20px] leading-[30px] text-white py-[3px] rounded-[15px] bg-secondary">
        Details
      </button>
    </div>
  );
};

export default TodayBus;
