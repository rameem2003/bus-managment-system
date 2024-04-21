import React from "react";
import ListUl from "./ListUl";
import ListLi from "./ListLi";

const SidebarMenu = () => {
  return (
    <menu className="mt-[27px]">
      <ListUl>
        <ListLi
          className={`font-anek font-semibold text-[28px] leading-[51px] pl-[23px] block border-l-[5px] border-line rounded-r-[15px] text-white cursor-pointer mb-5 hover:bg-line`}
        >
          বাস ম্যানেজমেন্ট
        </ListLi>
        <ListLi
          className={`font-anek font-semibold text-[28px] leading-[51px] pl-[23px] block border-l-[5px] border-line rounded-r-[15px] text-white cursor-pointer mb-5 hover:bg-line`}
        >
          এজেন্ট / টিকেট কাউন্টার
        </ListLi>
        <ListLi
          className={`font-anek font-semibold text-[28px] leading-[51px] pl-[23px] block border-l-[5px] border-line rounded-r-[15px] text-white cursor-pointer mb-5 hover:bg-line`}
        >
          বাসের রুটিন
        </ListLi>
        <ListLi
          className={`font-anek font-semibold text-[28px] leading-[51px] pl-[23px] flex items-center justify-between border-l-[5px] border-line rounded-r-[15px] text-white cursor-pointer mb-5 hover:bg-line`}
        >
          <span>এজেন্ট রিকোয়েস্ট</span>{" "}
          <span className=" w-10 h-10 mr-[9px] bg-secondary rounded-full flex items-center justify-center">
            0
          </span>
        </ListLi>
        <ListLi
          className={`font-anek font-semibold text-[28px] leading-[51px] pl-[23px] block border-l-[5px] border-line rounded-r-[15px] text-white cursor-pointer mb-5 hover:bg-line`}
        >
          প্রোফাইল
        </ListLi>
        <ListLi
          className={`font-anek font-semibold text-[28px] leading-[51px] pl-[23px] block border-l-[5px] border-line rounded-r-[15px] text-white cursor-pointer mb-5 hover:bg-line`}
        >
          পাসওয়ার্ড পরিবর্তন
        </ListLi>
        <ListLi
          className={`font-anek font-semibold text-[28px] leading-[51px] pl-[23px] block border-l-[5px] border-line rounded-r-[15px] text-white cursor-pointer mb-5 hover:bg-line`}
        >
          কাস্টমার কেয়ার
        </ListLi>
      </ListUl>
    </menu>
  );
};

export default SidebarMenu;
