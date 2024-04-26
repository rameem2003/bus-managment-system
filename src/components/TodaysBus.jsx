import React, { useState } from "react";
import Title from "./Title";
import TodayBus from "./cards/TodayBus";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const TodaysBus = () => {
  const [slide, setSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (prev, next) => {
      setSlide(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          display: "flex",
        }}
      >
        <ul
          style={{
            margin: "12px auto",
            display: "flex",
            alignItems: "center",
            gap: "9px",
            cursor: "pointer",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === slide
            ? {
                width: "14px",
                height: "14px",
                backgroundColor: "#1D5C80",
                cursor: "pointer",
                transition: "0.4s",
                borderRadius: "100%",
              }
            : {
                width: "10px",
                height: "10px",
                backgroundColor: "#D9D9D9",
                cursor: "pointer",
                transition: "0.4s",
                borderRadius: "100%",
              }
        }
      >
        {/* {i + 1} */}

        {console.log(i)}
      </div>
    ),
  };
  return (
    <section>
      <Title>আজকের বাস সমুহ</Title>

      <div className=" flex items-center justify-between mt-9 w-full">
        <TodayBus />
        <TodayBus />
        <TodayBus />
      </div>

      <button className=" font-anek font-bold text-[20px] text-primary my-4 mx-auto block">
        See All
      </button>
    </section>
  );
};

export default TodaysBus;
