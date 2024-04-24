import React from "react";
import TodaysBus from "../components/TodaysBus";
import AllbookingStatus from "../components/AllbookingStatus";
import MyBuses from "../components/MyBuses";

const Home = () => {
  return (
    <main className="pt-10 pl-[43px] pr-[23px] max-h-screen overflow-y-scroll">
      <TodaysBus />
      <AllbookingStatus />
      <MyBuses />
    </main>
  );
};

export default Home;
