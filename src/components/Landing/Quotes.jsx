import React from "react";
import { clean, image } from "../../assets";

const Quotes = () => {
  return (
    <section id="quotes" className="mt-20 w-full">
      <div className="flex flex-col w-full h-full items-center justify-center py-10 relative">
        <div className="absolute w-full h-full -z-10">
          <img
            src={clean}
            alt="Header Img"
            className="w-full h-full lg:object-fill object-cover brightness-50"
          />
        </div>
        <div className="flex flex-wrap justify-around w-full">
          {/* Our Left Side of the Contact */}
          <div className="w-full flex flex-col justify-center items-center lg:w-2/5 mb-20 lg:mb-0 lg:pr-40">
            <h3 className="text-center text-[aqua] tracking-widest font-semibold text-xl ">
              GET IN TOUCH TODAY
            </h3>
            <h2 className="text-center text-6xl font-bold text-white mt-7 tracking-wider">
              Contact Us
            </h2>
            <img
              className="mt-5 h-52 w-52"
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Shamrock.svg"
              alt=""
            />
          </div>
          {/* Our Right Side of the Contact */}
          <div className="bg-white w-full lg:w-2/5 mx-10 md:mx-14 lg:mx-0 rounded-md">
            <form className="rounded py-5 px-10 ">
              <h2 className="font-semibold text-sm tracking-wide mb-5">
                ASK US FOR A FREE QUOTE
              </h2>
              <h2 className="font-bold text-2xl text-gray-800 mb-5">
                Contact Form
              </h2>
              <p className="mb-3">
                Whether you have a residential or commercial property, our
                services ensure that your property is shiny and free from
                graffiti and debris.
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
              <p className="mt-4 mb-3">Phone#: *</p>
              <input
                type="text"
                placeholder="Phone #:"
                className="border -ml-1 px-3 py-2 w-full outline-none"
              />
              <textarea
                className="border mt-5 w-full -ml-1 p-2 resize-none"
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
