import React, { useEffect, useState } from "react";
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
import { Helmet } from "react-helmet";

const HouseWashing = () => {
  const [noOfElement, setNoOfElement] = useState(3);
  const loadMore = () => {
    setNoOfElement(noOfElement + 2);
  };
  useEffect(() => {
    document.title =
      "Sydney Professional Pressure Washing | House Washing Sydney";
  }, []);

  const slice = data.slice(0, noOfElement);
  return (
    <>
      {/* <Helmet>
        <title>House Washing Sydney | Pressure Washing Professionals</title>
        <meta
          name="keywords"
          content="Pressure Cleaning, Window Cleaning, Gutter Cleaning, House Washing"
        />

        <meta name="locale" content="en_US" />
        <meta name="author" content="Total Exterior Cleaning" />
        <meta
          property="og:site name"
          content="House Washing Sydney | Pressure Washing Professionals"
        />
        <meta
          property="og:title"
          content="House Washing Sydney | Pressure Washing Professionals"
        />
        <meta
          property="og:description"
          content="Sydney's Best Pressure Cleaners. Professional Pressure Washers specialising in high or soft pressure washing. Get Your Quote Now"
        />
        <meta
          property="og:url"
          content={window.location.pathname + window.location.search}
        />

        <meta
          name="description"
          content="Sydney's Best Pressure Cleaners. Professional Pressure Washers specialising in high or soft pressure washing. Get Your Quote Now"
        />
        <meta name="robots" content="index,follow" />
      </Helmet> */}
      <div className="relative">
        {/* Navbar */}
        <NavbarServices />
        {/* META */}

        <main
          className="relative md:h-[100vh] w-full "
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          {/* Content */}
          <div>
            <figure className="w-full absolute -z-10">
              <img
                className="w-full object-cover h-[700px] md:h-[100vh] brightness-[.40]"
                src={pressurewashing}
                alt="Background Image"
              />
            </figure>
            <div className="pt-[150px] md:pt-[300px] text-center md:h-[100vh] h-[700px] flex flex-col mx-4 sm:pr-0  space-y-14 sm:space-y-20">
              <h1 className="text-white sub-headers uppercase text-4xl md:text-6xl tracking-wider font-bold text-shadow">
                House Washing
              </h1>
              <h2 className="uppercase sm:text-lg md:text-3xl text-sky-400 brightness-110 font-semibold text-shadow">
                Renew Your Home's Shine.
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
          className=" text-center mx-5 sm:text-start"
        >
          <div className=" lg:mx-10 pt-24 mb-5  lg:mr-6 sm:flex flex-wrap lg:flex-nowrap lg:space-x-4">
            <div className="lg:w-[60%] space-y-8 4xl:space-y-14  lg:mx-6 lg:pr-8">
              <h1 className="text-3xl sm:text-5xl 4xl:text-6xl font-bold text-shadow-subtle sub-headers">
                Transform Your Home with Expert House Washing Services"
              </h1>
              <p className="leading-relaxed lg:text-xl xl:text-2xl 4xl:text-3xl  text-[#66666]  pt-2  ">
                Elevate the appearance and cleanliness of your home with
                professional house washing services. Our expert team specializes
                in restoring the beauty of your property by thoroughly cleaning
                all exterior surfaces. 
              </p>
              <h2 className="text-2xl sub-headers 4xl:text-5xl sm:text-3xl xl:text-4xl font-semibold text-cyan-500">
                Green or Black stains on your house? We Can Clean It.
              </h2>
              <p className="leading-relaxed xl:text-2xl  lg:text-xl 4xl:text-3xl text-[#66666]  ">
                Our team at Total Exterior Cleaning utilizes cutting-edge house
                washing technology to deliver efficient and quality results. We
                employ the latest industrial-grade equipment, coupled with
                extensive knowledge and experience, to apply safe house washing
                methods using a soft wash mix.
                <p className="hidden xl:flex">
                  This approach ensures a thorough and lasting clean, removing
                  dirt, mold, mildew, and stains.
                </p>
              </p>
              <h2 className="text-3xl hidden sub-headers 4xl:text-5xl !mb-5 sm:flex md:text-3xl xl:text-4xl font-semibold text-cyan-500">
                Preservation and Protection
              </h2>
              <p className="leading-relaxed pt-4 xl:text-2xl hidden 4xl:text-3xl lg:text-xl text-[#66666] sm:inline">
                {" "}
                Beyond the aesthetic benefits, our high-pressure cleaning
                services contribute to the preservation and protection of your
                property. Accumulated dirt, mould, and stains not only
                compromise the visual appeal of your exterior surfaces but can
                also create hazardous and slippery conditions.
                <br />
                <br />
                <span className="hidden xl:flex  ">
                  Our professional cleaning methods eliminate these dangers,
                  providing a safer environment for you, your family, or your
                  customers. Additionally, the process helps to restore the
                  vibrant colors of your outdoor areas, adding to the overall
                  curb appeal of your property.
                </span>
              </p>
              <img
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos="zoom-in-up"
                className="sm:hidden h-[400px] rounded-sm w-full object-cover"
                src={me1}
                alt="Pressure Washing"
              />

              <p className=" leading-relaxed text-lg md:text-2xl 4xl:text-3xl font-semibold">
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
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="flex flex-col sm:mx-0 sm:flex-row lg:flex-col my-10 lg:mt-0 lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-[40%]"
            >
              {slice.map((image) => (
                <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] 4xl:h-[500px] flex overflow-hidden rounded-sm">
                  <ReactCompareSlider
                    className="w-full mb-4 contrast-[1.10] sm:mb-0 rounded-sm"
                    itemOne={
                      <ReactCompareSliderImage
                        src={image.img1}
                        alt="Pressure Wash Before"
                      />
                    }
                    itemTwo={
                      <ReactCompareSliderImage
                        src={image.img2}
                        alt="Pressure Wash After"
                      />
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
        <div data-aos="fade-up" data-aos-easing="ease-in-out">
          <Testimonials />
        </div>
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          className=" mb-20 py-2  bg-gray-50 border-t-2 border-b-2 "
        >
          <Socials />
        </div>
        <div>
          <FAQ />
        </div>
        <div data-aos="fade-in" data-aos-easing="ease-in-out">
          <Tabs />
        </div>
        <div>
          <Quotes />
        </div>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HouseWashing;
