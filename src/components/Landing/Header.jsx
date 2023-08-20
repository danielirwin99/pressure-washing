import React from "react";
import image from "../../assets/pressure.jpg";
import { motion } from "framer-motion";
import { BsTelephone } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="h-[calc(100vh-88px)] relative ">
        {/* FIXED BUTTON */}
        <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-5 z-[999] template-shadow rounded-2xl">
          <a href="#quotes" className="contact-now mobile">
            Contact Now
          </a>
        </div>
        <div className="absolute w-full h-full -z-10">
          <img
            src={image}
            alt="Header Img"
            className="w-full h-full object-cover brightness-[.47]"
          />
        </div>
        <div className="flex h-full z-10 w-full flex-col justify-center items-center">
          <h1 className="text-white font-bold text-center text-4xl lg:text-7xl z-10 tracking-wider text-shadow">
            Shamrock Exterior Cleaning
          </h1>
          <div className="flex items-center justify-center mt-10">
            <BsTelephone className="mr-3 text-3xl text-cyan-300 text-shadow" />
            <h2 className="text-4xl font-bold text-cyan-300 text-shadow">
              043444342
            </h2>
          </div>
          <a
            href="#quotes"
            className="contact-now header-button z-50 !text-2xl "
          >
            Get Your Free Quote
          </a>
        </div>
        <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
              <motion.div
                animate={{ y: [0, 24, 0] }}
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
