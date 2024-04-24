import React from "react";
import Flex from "../components/Flex";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <Flex>
      <div className="w-3/12">
        <Sidebar />
      </div>
      <div className="w-9/12">
        <Outlet />

        {/* <h1>Hewllo</h1> */}
      </div>
    </Flex>
  );
};

export default Rootlayout;
