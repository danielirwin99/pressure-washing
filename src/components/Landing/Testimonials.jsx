import React from "react";
import { data } from "../../data/Testimonials";
import { BsStarFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FcGoogle } from "react-icons/fc";
import { FaGoogle } from "react-icons/fa";

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
          slidesToScroll: 1,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[1700px]  mt-5 mb-16 px-4 m-auto">
      <h3 className="text-center from-gray-700 uppercase to-cyan-500 bg-gradient-to-r bg-clip-text text-transparent tracking-[0.3em] font-semibold text-md lg:text-lg ">
        Testimonials
      </h3>
      <h2
        className="text-center text-3xl lg:text-4xl font-bold text-gray-800 mt-7 mb-16 tracking-wider sub-headers"
        style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
      >
        What Customers Are Saying
      </h2>
      <div className="">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="bg-white relative grid- text-black text-center rounded-xl">
              <div className="rounded-t-xl flex justify-center items-center">
                <img src={d.img} className="h-20" alt="" />
              </div>
              <div className="absolute top-2 left-3/4">
                <FcGoogle />
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
                <p className="text-sm leading-relaxed text-[#676767] flex">
                  {d.review}
                </p>
                {/* <button className="bg-cyan-500 text-white text-lg px-6 py-2 rounded-xl hover:opacity-75 transition-all duration-100">
                  Read More
                </button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="mt-14 space-x-4 flex items-center justify-center">
        <a
          className="contact-now !p-2 sm:!p-3  !text-xs template-shadow"
          href="https://www.google.com/search?q=total+exterior+cleaning&rlz=1C1VDKB_enAU1092AU1092&oq=total+exterior+cleaning+&gs_lcrp=EgZjaHJvbWUyCggAEEUYFhgeGDkyBwgBEAAYgAQyCAgCEAAYFhgeMggIAxAAGBYYHjIICAQQABgWGB4yBggFEEUYQTIGCAYQRRg8MgYIBxBFGEHSAQgzNjkxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x61f8ecfb4782edb3:0xb4524df1d6cb3f48,1,,,,"
        >
          See All Reviews
        </a>
        <a
          href="https://g.page/r/CUg_y9bxTVK0EB0/review"
          className=" !flex contact-now !p-2 sm:!p-3 !text-xs items-center space-x-2 justify-center template-shadow"
        >
          <p>Review Us on</p>
          <FcGoogle className="bg-white rounded-full" />
        </a>
      </div>
    </div>
  );
};

export default Testimonials;
