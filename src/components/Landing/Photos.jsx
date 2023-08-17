import React from "react";
import { before1, before2, before3, before4 } from "../../assets";

const Photos = () => {
  return (
    <section id="photos" className="mt-10 mx-auto px-3 max-w-[1700px] w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <h3 className="text-center text-[aqua] tracking-[0.3em] font-semibold text-md lg:text-lg ">
          BEFORE AND AFTER
        </h3>
        <h2 className="text-center text-3xl lg:text-5xl font-bold text-gray-800 mt-7 tracking-wider">
          Our Recent Jobs
        </h2>
        <p></p>
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <figure className="photos-container">
            <img
              src={before1}
              alt="before1"
              className="w-full h-full object-fill rounded-lg"
            />
          </figure>
          <figure className="photos-container">
            <img
              src={before2}
              alt="before1"
              className="w-full h-full object-fill rounded-lg"
            />
          </figure>
          <figure className="photos-container">
            <img
              src={before3}
              alt="before3"
              className="w-full h-full object-fill rounded-lg"
            />
          </figure>
          <figure className="photos-container h-[500px] lg:flex hidden xl:hidden">
            <img
              src={before4}
              alt="before4"
              className="w-full h-full object-fill rounded-lg mt-5 lg:mt-0 "
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Photos;
