import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const Rootlayout = () => {
  return (
    <div className=" flex">
      <div className="w-3/12">
        <Sidebar />
      </div>
      <div className="w-9/12">
        <Outlet />
      </div>
    </div>
  );
};

export default Rootlayout;
