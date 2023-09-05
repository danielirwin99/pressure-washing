import React from "react";
import { clean, logo } from "../../assets";

const Quotes = () => {
  return (
    <section id="quotes" className=" w-full">
      <div className="flex flex-col w-full h-full items-center justify-center py-10 relative">
        <div className="absolute w-full h-full -z-10">
          <img
            src={clean}
            alt="Header Img"
            className="w-full h-full lg:object-fill object-cover brightness-[.43]"
          />
        </div>
        <div className="flex flex-wrap justify-around w-full">
          {/* Our Left Side of the Contact */}
          <div className="w-full flex flex-col justify-center items-center lg:w-2/5 mb-20 lg:mb-0 lg:pr-30">
            <h3 className="text-center text-cyan-300 tracking-widest font-semibold text-lg ">
              GET IN TOUCH TODAY
            </h3>
            <h2
              className="text-center text-6xl px-4 sm:px-0 lg:text-7xl font-bold text-white mt-7 tracking-wider sub-headers"
              style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.2)" }}
            >
              Contact Us
            </h2>
            <img className="mt-7 h-52 w-80 brightness-125 drop-shadow-lg" src={logo} alt="" />
          </div>
          {/* Our Right Side of the Contact */}
          <div className="bg-white w-full lg:w-2/5 mx-3 md:mx-14 lg:mx-0 rounded-md">
            <form className="rounded py-5 px-5 md:px-10 template-shadow">
              <h2 className="font-semibold text-sm tracking-wide mb-5 text-cyan-500">
                ASK US FOR A FREE QUOTE
              </h2>
              <h2 className="font-extrabold text-3xl mb-5 from-gray-700 via-cyan-500 to-white bg-gradient-to-r bg-clip-text text-transparent sub-headers">
                Contact Form
              </h2>
              <p className="mb-3">
                Whether you have a residential or commercial property, our
                services ensure that your property is immaculately rejuvenated,
                radiating with a newfound brilliance.
              </p>
              <p className="mt-8 mb-3">Full Name *</p>
              <input
                type="text"
                placeholder="Full Name"
                className="border -ml-1 px-3 outline-none py-2 w-full"
              />
              <p className="mt-4 mb-3">Email *</p>
              <input
                type="email"
                placeholder="Email"
                className="border -ml-1 px-3 outline-none py-2 w-full"
              />
              <p className="mt-4 mb-3">Phone#: </p>
              <input
                type="text"
                placeholder="Phone #:"
                className="border -ml-1 px-3 py-2 w-full outline-none"
              />
              <textarea
                className="border mt-5 w-full -ml-1 p-3 resize-none outline-none"
                placeholder="Message..."
                id=""
                cols="30"
                rows="8"
              ></textarea>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
