import React, { useState } from "react";
import Title from "./Title";
import Flex from "./Flex";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import StatusCard from "./cards/StatusCard";

const AllbookingStatus = () => {
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
      <Flex className={`items-center justify-between`}>
        <Title>বুকিং স্ট্যাটাসঃ</Title>
        <button className=" font-anek font-bold text-[30px] text-primary">
          See All
        </button>
      </Flex>

      <div className="mt-9 w-full">
        <Slider {...settings}>
          <StatusCard />
          <StatusCard />
          <StatusCard />
          <StatusCard />
          <StatusCard />
          <StatusCard />
        </Slider>

        {/* <TodayBus /> */}
      </div>
    </section>
  );
};

export default AllbookingStatus;
