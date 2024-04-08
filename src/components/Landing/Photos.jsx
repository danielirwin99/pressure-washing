import React from "react";
import {
  before1,
  before2,
  before3,
  after1,
  after2,
  after3,
  before5,
  after5,
  before6,
  after6,
  before8,
  after8,
} from "../../assets/B&A/Index";
import { roofbefore, roofafter } from "../../assets/Gallery/Index";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { gutterafter, gutterbefore } from "../../assets";

const Photos = () => {
  return (
    <section id="photos" className="mt-10 mx-auto px-3 max-w-[1700px] w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <h3 className="text-center from-gray-700 to-cyan-500 bg-gradient-to-r bg-clip-text text-transparent tracking-[0.3em] font-semibold text-md lg:text-lg ">
          BEFORE AND AFTERS
        </h3>
        <h2
          className="text-center text-3xl lg:text-5xl font-bold text-gray-800 mt-7 tracking-wider sub-headers"
          style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
        >
          Our Recent Jobs
        </h2>
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
          <figure className="photos-container">
            <div className="h-full flex contrast-[1.10] overflow-hidden rounded-md ">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before1} alt="Before 1" />
                }
                itemTwo={<ReactCompareSliderImage src={after1} alt="After 1" />}
              />
            </div>
          </figure>

          <figure className="photos-container hidden md:inline">
            <div className="h-full flex contrast-[1.10] overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before8} alt="Before 2" />
                }
                itemTwo={<ReactCompareSliderImage src={after8} alt="After 2" />}
              />
            </div>
          </figure>
          <figure className="photos-container">
            <div className="h-full flex contrast-[1.10] overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={roofbefore} alt="Before 6" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={roofafter} alt="After 6" />
                }
              />
            </div>
          </figure>

          <figure className="photos-container">
            <div className="h-full flex contrast-[1.10] overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before3} alt="Before 3" />
                }
                itemTwo={<ReactCompareSliderImage src={after3} alt="After 3" />}
              />
            </div>
          </figure>
          <figure className="photos-container">
            <div className="h-full flex overflow-hidden contrast-[1.10] rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before5} alt="Before 5" />
                }
                itemTwo={<ReactCompareSliderImage src={after5} alt="After 5" />}
              />
            </div>
          </figure>
          {/* This one is just for a backup */}
          {/* <figure className="photos-container">
            <div className="h-full flex overflow-hidden rounded-md">
              <img
                src={before5}
                className="w-1/2 h-full object-fill hover:scale-105 rounded-l-md duration-150 ease-in-out"
              />
              <img
                src={after5}
                alt="before3"
                className="w-1/2 h-full object-fill rounded-r-md hover:scale-105 duration-150 ease-in-out"
              />
            </div>
          </figure> */}

          <figure className="photos-container hidden md:inline">
            <div className="h-full flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={gutterbefore} alt="Before 7" />
                }
                itemTwo={
                  <ReactCompareSliderImage src={gutterafter} alt="After 7" />
                }
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Photos;
