import React, { useState } from "react";
// import {
//   before1,
//   before2,
//   before3,
//   after1,
//   after2,
//   after3,
//   before5,
//   after5,
//   before6,
//   after6,
//   before7,
//   after7,
//   before8,
//   after8,
//   before4,
//   after4,
//   before9,
//   after9,
// } from "../assets/Gallery/Index";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import data from "../data/imageslider";

const GalleryPhotos = () => {
  const [noOfElement, setNoOfElement] = useState(6);
  const loadMore = () => {
    setNoOfElement(noOfElement + 3);
  };

  const slice = data.slice(0, noOfElement);
  return (
    <div id="photos" className=" mx-auto px-3 max-w-[1700px] w-full">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full">
          {slice.map((image) => (
            <figure className="gallery-container">
              <div className="h-full flex overflow-hidden rounded-md ">
                <ReactCompareSlider
                  className="w-full"
                  itemOne={
                    <ReactCompareSliderImage src={image.img1} alt="Before 1" />
                  }
                  itemTwo={
                    <ReactCompareSliderImage src={image.img2} alt="After 1" />
                  }
                />
              </div>
            </figure>
          ))}

          {/* OLD WAY NO MAPPING */}
          <>
            {/* <figure className="gallery-container">
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
          </figure> */}
          </>
        </div>
        <div className="mt-10">
          <button
            onClick={() => loadMore()}
            className="contact-now w-full md:w-auto !uppercase  z-50  !text-lg !px-8 !py-2 "
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalleryPhotos;
