import React from "react";
import { data } from "../../data/Testimonials";
import { BsStarFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1700px] w-5/6 mt-10 mb-24 px-4 m-auto">
      <h3 className="text-center from-gray-700 uppercase to-cyan-500 bg-gradient-to-r bg-clip-text text-transparent tracking-[0.3em] font-semibold text-md lg:text-lg ">
        Testimonials
      </h3>
      <h2
        className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mt-7 mb-20 tracking-wider sub-headers"
        style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
      >
        What Customers Are Saying
      </h2>
      <div className="">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white grid- text-black text-center rounded-xl">
              <div className="rounded-t-xl flex justify-center items-center">
                <img src={d.img} className="h-20" alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-bold">{d.name}</p>
                <div className="flex text-yellow-500 text-lg space-x-2">
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                </div>
                <p className="text-sm leading-relaxed flex">{d.review}</p>
                {/* <button className="bg-cyan-500 text-white text-lg px-6 py-2 rounded-xl hover:opacity-75 transition-all duration-100">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
