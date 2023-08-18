import React from "react";
import {
  before1,
  before2,
  before3,
  after1,
  after2,
  after3,
  before4,
} from "../../assets/B&A/Index";

const Photos = () => {
  return (
    <section id="photos" className="mt-10 mx-auto px-3 max-w-[1700px] w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <h3 className="text-center text-cyan-500 tracking-[0.3em] font-semibold text-md lg:text-lg ">
          BEFORE AND AFTERS
        </h3>
        <h2
          className="text-center text-3xl lg:text-5xl font-bold text-gray-800 mt-7 tracking-wider"
          style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
        >
          Our Recent Jobs
        </h2>
        <p></p>
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <figure className="photos-container">
            <div className="h-full flex">
              <img
                src={before1}
                alt="before3"
                className="w-1/2 h-full object-fill rounded-l-md"
              />
              <img
                src={after1}
                alt="before3"
                className="w-1/2 h-full object-fill rounded-r-md"
              />
            </div>
          </figure>
          <figure className="photos-container">
            <div className="h-full flex">
              <img
                src={before2}
                alt="before3"
                className="w-1/2 h-full object-fill rounded-l-md"
              />
              <img
                src={after2}
                alt="before3"
                className="w-1/2 h-full object-fill rounded-r-md"
              />
            </div>
          </figure>
          <figure className="photos-container">
            <div className="h-full flex">
              <img
                src={before3}
                alt="before3"
                className="w-1/2 h-full object-fill rounded-l-md"
              />
              <img
                src={after3}
                alt="before3"
                className="w-1/2 h-full object-fill rounded-r-md"
              />
            </div>
          </figure>
          <figure className="photos-container  md:flex hidden xl:hidden">
            <img
              src={before4}
              alt="before4"
              className="w-full h-full object-fill rounded-md mt-5 lg:mt-0 "
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Photos;
