import React from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { pressurewashing } from "../assets/index";
import { Link } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { after2, after3, before2, before3 } from "../assets/B&A/Index";

const PressureWashing = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarServices />
      <main className="relative ">
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover h-[500px] md:h-[800px] brightness-50"
              src={pressurewashing}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[200px] md:pt-[300px] flex flex-col pl-12 lg:pl-32 space-y-14">
            <h1 className="text-white uppercase text-3xl sm:text-4xl md:text-6xl font-bold text-shadow">
              Pressure Washing
            </h1>
            <h2 className="uppercase text-xl md:text-3xl text-white font-semibold text-shadow">
              Executed with precision
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now z-50 md:!text-xl ">
                Claim Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-36 sm:mt-32 md:mt-72 lg:mt-36">
        <div className="ml-10 lg:pt-40 mb-5 mr-10 lg:mr-6 flex flex-wrap lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold">Why Choose Pressure Washing?</h1>
            <p className="leading-6 pt-8 text-xl">
              <span className="font-bold"> Total Exterior Cleaning</span>{" "}
              provides professional total exterior cleaning services for both
              residential and commercial properties throughout Sydney. Our
              high-pressure cleaning methods have the capacity to refresh
              various surfaces such as driveways, pavers, patios, concrete
              floors, and pathways.
            </p>
            <p className="leading-6 text-xl">
              When it comes to your property, Total Exterior Cleaning
              exclusively uses the latest industrial-grade equipment and
              possesses extensive knowledge of how and where high-pressure
              cleaning can be applied to enhance your home's external surfaces.
            </p>
            <p className="leading-6 text-xl hidden sm:flex">
              If you have concerns about specific surfaces and the potential
              risks of high pressure, we specialize in and offer low-pressure
              techniques, particularly suitable for more delicate surfaces
              affected by mold and mildew.
            </p>
            <p className="leading-6 text-xl">
              {" "}
              Dirt, mold, mildew, and stains not only alter the appearance of
              your outdoor areas but also create hazardous and slippery
              conditions. Through the use of high-pressure cleaning, we can
              eliminate these dangers and restore the vibrant colors of your
              outdoor spaces.{" "}
            </p>

            <p className=" leading-6 text-xl">
              Contact us today to schedule your free pressure washing quote
              quote. We'll visit your property, provide a transparent,
              no-obligation estimate, and breathe new life into your outdoor
              areas.
            </p>
            <div className="py-5 flex justify-center">
              <Link to={"/contact-us"}>
                <button className="contact-now z-50 md:!text-xl ">
                  Contact Us Now
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col my-14 lg:mt-0  lg:pl-20 lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-1/2">
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full mb-4 sm:mb-0"
                itemOne={
                  <ReactCompareSliderImage src={before2} alt="Before 2" />
                }
                itemTwo={<ReactCompareSliderImage src={after2} alt="After 2" />}
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-md">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before3} alt="Before 3" />
                }
                itemTwo={<ReactCompareSliderImage src={after3} alt="After 3" />}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default PressureWashing;
