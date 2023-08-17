import React from "react";
import image from "../../assets/pressure.jpg";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <header className="h-[calc(100vh-88px)] relative ">
        {/* FIXED BUTTON */}
        <div className="fixed bottom-10 right-10 z-[999]">
          <a href="#quotes" className="contact-now">
            Contact Now
          </a>
        </div>
        <div className="absolute w-full h-full -z-1">
          <img
            src={image}
            alt="Header Img"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="flex h-full z-10 w-full flex-col justify-center items-center">
          <h1 className="text-white font-bold text-center text-4xl lg:text-7xl z-10 tracking-wider">
            Irwin Power Washing
          </h1>
          <a
            href="#quotes"
            className="contact-now header-button z-50 !text-2xl "
          >
            Get Your Free Quote
          </a>
        </div>
        <div className="absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center">
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
