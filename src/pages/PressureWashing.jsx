import React, { useState } from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { me1, pressurewashing } from "../assets/index";
import { Link } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import Testimonials from "../components/Landing/Testimonials";
import Socials from "../components/Landing/Socials";
import Quotes from "../components/Landing/Quotes";
import Tabs from "../components/Landing/Tabs";
import FAQ from "../components/Landing/FAQ";
import data from "../data/imageslider";

const PressureWashing = () => {
  const [noOfElement, setNoOfElement] = useState(3);
  const loadMore = () => {
    setNoOfElement(noOfElement + 2);
  };

  const slice = data.slice(0, noOfElement);
  return (
    <div className="">
      <title>High Pressure Cleaning - Pressure Washing Sydney</title>
      {/* Navbar */}
      <NavbarServices />
      <main
        className="relative md:h-[100vh] "
        data-aos="fade-in"
        data-aos-easing="ease-in-out"
      >
        <div className="fixed hidden sm:inline bottom-5 right-4 sm:bottom-7 sm:right-5 z-[995] template-shadow rounded-2xl">
          <Link to={"/contact-us"} className="contact-now mobile">
            Contact Now
          </Link>
        </div>
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover h-[600px] md:h-[100vh] brightness-[.40]"
              src={pressurewashing}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[150px] md:pt-[300px] flex flex-col pl-8 pr-4 sm:pr-0 lg:pl-32 space-y-20">
            <h1 className="text-white sub-headers uppercase text-3xl sm:text-4xl md:text-6xl tracking-wider font-bold text-shadow">
              High Pressure Cleaning Sydney
            </h1>
            <h2 className="uppercase text-lg md:text-3xl text-blue-200 font-semibold text-shadow">
              Executed with precision
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now  z-50 !px-10 md:!text-xl template-shadow-subtle ">
                Get Your Quote!
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className="mt-44  sm:mt-0 text-center sm:text-start"
      >
        <div className="mx-5 lg:mx-10 md:pt-28 mb-5  lg:mr-6 flex flex-wrap lg:flex-nowrap lg:space-x-4">
          <div className="lg:w-[60%] space-y-8  lg:mx-6 lg:pr-8">
            <h1 className="text-3xl sm:text-5xl font-bold text-shadow-subtle sub-headers">
              Refresh Your Home with High Pressure Cleaning.
            </h1>
            <p className="leading-relaxed lg:text-xl xl:text-2xl  text-[#66666]  pt-2  ">
              <span className="font-bold"> Total Exterior Cleaning</span> are
              your go-to local pressure cleaners for professional exterior
              cleaning services in Sydney. Whether you own a residential
              property or a commercial space, our{" "}
              <span className="font-bold">
                family owned and operated business
              </span>{" "}
              is here to help you restore your property back to its original
              state.
            </p>
            <h2 className="text-2xl sub-headers  sm:text-3xl xl:text-4xl font-semibold text-cyan-500">
              House Pressure Cleaning In Sydney For Freshness Of Your Home
            </h2>

            <p className="leading-relaxed xl:text-2xl  lg:text-xl text-[#66666]  ">
              Our team at Total Exterior Cleaning utilizes cutting-edge pressure
              cleaning technology to deliver efficient and quality results. We
              employ the latest industrial-grade equipment, coupled with
              extensive knowledge and experience, to apply high-pressure
              cleaning methods to surfaces such as driveways, pavers, patios,
              concrete floors, and pathways.{" "}
              <span className="hidden xl:flex">
                This approach ensures a thorough and lasting clean, removing
                dirt, mold, mildew, and stains.
              </span>
            </p>

            <h2 className="text-3xl hidden sub-headers !mb-5 sm:flex md:text-3xl xl:text-4xl font-semibold text-cyan-500">
              Preservation and Protection
            </h2>
            <p className="leading-relaxed pt-4 xl:text-2xl hidden lg:text-xl text-[#66666] sm:inline">
              {" "}
              Beyond the aesthetic benefits, our high-pressure cleaning services
              contribute to the preservation and protection of your property.
              Accumulated dirt, mould, and stains not only compromise the visual
              appeal of your exterior surfaces but can also create hazardous and
              slippery conditions.
              <br />
              <br />
              <span className="hidden xl:flex  ">
                Our professional cleaning methods eliminate these dangers,
                providing a safer environment for you, your family, or your
                customers. Additionally, the process helps to restore the
                vibrant colors of your outdoor areas, adding to the overall curb
                appeal of your property.
              </span>
            </p>
            <img
              className="sm:hidden h-[400px] rounded-sm w-full object-cover"
              src={me1}
              alt="Pressure Washing"
            />

            <p className=" leading-relaxed text-lg md:text-2xl font-semibold">
              Contact Us today to schedule your free quote. We'll visit your
              property, provide a transparent, no-obligation estimate, and
              breathe new life into your outdoor areas.
            </p>
            <div className="py-6 flex justify-center">
              <Link className="w-full md:w-auto" to={"/contact-us"}>
                <button className="contact-now w-full md:w-auto !capitalize z-50 md:!text-2xl !text-xl !px-10 !py-4 ">
                  Get Your Free Quote!
                </button>
              </Link>
            </div>
            <h2 className="text-center text-shadow-subtle sub-headers text-3xl font-bold sm:hidden">
              Check Out Some Of Our Photos!
            </h2>
          </div>
          <div className="flex flex-col mx-3 sm:mx-0 sm:flex-row lg:flex-col my-10 lg:mt-0 lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-[40%]">
            {slice.map((image) => (
              <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
                <ReactCompareSlider
                  className="w-full mb-4 contrast-[1.10] sm:mb-0"
                  itemOne={
                    <ReactCompareSliderImage src={image.img1} alt="Before 2" />
                  }
                  itemTwo={
                    <ReactCompareSliderImage src={image.img2} alt="After 2" />
                  }
                />
              </div>
            ))}
            {/* <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
              <ReactCompareSlider
                className="w-full mb-4 sm:mb-0"
                itemOne={
                  <ReactCompareSliderImage src={before3} alt="Before 3" />
                }
                itemTwo={<ReactCompareSliderImage src={after3} alt="After 3" />}
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
              <ReactCompareSlider
                className="w-full"
                itemOne={
                  <ReactCompareSliderImage src={before8} alt="Before 3" />
                }
                itemTwo={<ReactCompareSliderImage src={after8} alt="After 3" />}
              />
            </div> */}
            <div className="flex items-center  justify-center mt-7">
              <Link
                className="hidden  sm:inline-block bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                to={"/gallery"}
              >
                View More Photos
              </Link>
              <button
                className="sm:hidden inline-block bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => loadMore()}
              >
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-easing="ease-in-out">
        <Testimonials />
      </div>
      <section className=" mb-20 py-2 bg-gray-50 border-t-2 border-b-2 ">
        <Socials />
      </section>
      <FAQ />
      <Tabs />
      <div>
        <Quotes />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PressureWashing;
