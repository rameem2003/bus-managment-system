import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="mt-[26px] relative">
      <input
        className=" w-full py-2 px-[10px] font-anek font-medium text-[25px] bg-white rounded-[15px] placeholder:font-anek placeholder:font-medium placeholder:text-[25px] placeholder:leading-[51px] placeholder:text-[#817474]"
        type="text"
        name=""
        id=""
        placeholder="Search bus by code........."
      />

      <IoIosSearch
        className=" absolute top-[50%] right-2 translate-y-[-50%]"
        size={25}
      />
    </div>
  );
};

export default Search;
