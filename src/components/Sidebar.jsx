import React from "react";
import AvailableSit from "./AvailableSit";
import SidebarMenu from "./SidebarMenu";
import Search from "./Search";

const Sidebar = () => {
  return (
    <section className=" bg-primary min-h-screen pt-[27px] px-[15px]">
      <AvailableSit />
      <Search />
      <SidebarMenu />
    </section>
  );
};

export default Sidebar;
