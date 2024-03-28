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
  before7,
  after7,
  before8,
  after8,
  before4,
  after4,
  before9,
  after9,
} from "../assets/Gallery/Index";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const GalleryPhotos = () => {
  return (
    <div id="photos" className=" mx-auto px-3 max-w-[1700px] w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
          <figure className="gallery-container">
            <div className="h-full flex overflow-hidden rounded-md ">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before1} alt="Before 1" />
                }
                itemTwo={<ReactCompareSliderImage src={after1} alt="After 1" />}
              />
            </div>
          </figure>

          <figure className="gallery-container">
            <div className="h-full flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before2} alt="Before 2" />
                }
                itemTwo={<ReactCompareSliderImage src={after2} alt="After 2" />}
              />
            </div>
          </figure>
          <figure className="gallery-container">
            <div className="h-full flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before3} alt="Before 6" />
                }
                itemTwo={<ReactCompareSliderImage src={after3} alt="After 6" />}
              />
            </div>
          </figure>

          <figure className="gallery-container">
            <div className="h-full flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before4} alt="Before 3" />
                }
                itemTwo={<ReactCompareSliderImage src={after4} alt="After 3" />}
              />
            </div>
          </figure>
          <figure className="gallery-container">
            <div className="h-full flex overflow-hidden rounded-md">
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
          {/* <figure className="gallery-container">
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

          <figure className="gallery-container hidden md:inline">
            <div className="h-full flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before6} alt="Before 7" />
                }
                itemTwo={<ReactCompareSliderImage src={after6} alt="After 7" />}
              />
            </div>
          </figure>
          <figure className="gallery-container">
            <div className="h-full flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before7} alt="Before 7" />
                }
                itemTwo={<ReactCompareSliderImage src={after7} alt="After 7" />}
              />
            </div>
          </figure>
          <figure className="gallery-container hidden md:inline">
            <div className="h-full flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before8} alt="Before 7" />
                }
                itemTwo={<ReactCompareSliderImage src={after8} alt="After 7" />}
              />
            </div>
          </figure>
          <figure className="gallery-container ">
            <div className="h-full flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before9} alt="Before 7" />
                }
                itemTwo={<ReactCompareSliderImage src={after9} alt="After 7" />}
              />
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default GalleryPhotos;
