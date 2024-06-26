import React from "react";
import image from "../../assets/pressure.jpg";
import { motion } from "framer-motion";
import { BsTelephone } from "react-icons/bs";
import { Link, ScrollRestoration } from "react-router-dom";
import { TbMailFilled } from "react-icons/tb";

const Header = () => {
  // useScrollRestoration()
  return (
    <>
      <header
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
        data-aos-duration="800"
        className="sm:h-[calc(100vh-104px)] h-[calc(100vh-88px)] relative "
      >
        {/* FIXED BUTTON */}
        {/* <div className="fixed hidden sm:inline bottom-5 right-4 sm:bottom-7 sm:right-5 z-[995] template-shadow rounded-2xl">
          <Link to={"/contact-us"} className="contact-now mobile">
            Contact Now
          </Link>
        </div> */}
        <div className="absolute w-full h-full -z-10">
          <img
            src={image}
            alt="Header Img"
            className="w-full h-full object-cover brightness-[.47]"
          />
        </div>
        <div className="flex h-full z-10 w-full flex-col justify-center items-center">
          <h1 className="text-white font-bold text-center text-4xl md:text-6xl z-10 tracking-wider text-shadow header-title">
            Total Exterior Cleaning
          </h1>
          <div className="flex items-center justify-center mt-10">
            <BsTelephone className="mr-3 text-2xl text-cyan-300 text-shadow" />
            <a
              href="tel:0417477117"
              className="text-2xl font-bold text-cyan-300 text-shadow header-title"
            >
              0417 477 117
            </a>
          </div>
          <Link to={"/contact-us"} className="mt-10">
            <button className="contact-now z-50 px-5 md:!px-10 md:!text-2xl template-shadow-subtle ">
              <div className="flex space-x-4 items-center">
                <TbMailFilled className="text-2xl md:text-3xl" />
                <p className="md:!text-2xl text-xl ">Get your free Quote</p>
              </div>
            </button>
          </Link>
        </div>
        <div className="absolute xs:bottom-10 bottom-8 w-full hidden sm:flex justify-center items-center">
          <a href="#about">
            <div className="w-[34px] h-[56px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 18, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-2 h-3 rounded-full bg-white mb-1"
              />
            </div>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
