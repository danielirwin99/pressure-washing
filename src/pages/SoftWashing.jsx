import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { housewash, me1, me4, pressurewashing } from "../assets/index";
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
import data from "../data/house-wash-slider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { motion } from "framer-motion";
import Services from "../components/Services";
import { TbMailFilled } from "react-icons/tb";

import {
  after1,
  after10,
  after16,
  after18,
  after19,
  after20,
  after21,
  before1,
  before10,
  before16,
  before18,
  before19,
  before20,
  before21,
} from "../assets/Gallery/Index";

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
      <HelmetProvider>
        <Helmet>
          <title>Professional Pressure Washing | House Washing Sydney</title>
          <meta
            name="keywords"
            content="Pressure Cleaning, Window Cleaning, Gutter Cleaning, House Washing"
          />

          <meta name="locale" content="en_US" />
          <meta name="author" content="Total Exterior Cleaning" />
          <meta
            property="og:site name"
            content="High Pressure Washing Sydney"
          />
          <meta
            property="og:title"
            content="Professional Pressure Washing | House Washing Sydney"
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
        </Helmet>
      </HelmetProvider>
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
                className="w-full object-cover h-[750px] md:h-[100vh] brightness-[.40]"
                src={housewash}
                alt="Background Image"
              />
            </figure>
            <div className="pt-[150px] md:pt-[300px] text-center md:h-[100vh] h-[750px] flex flex-col mx-4 sm:pr-0  space-y-20 sm:space-y-20">
              <h1 className="text-white sub-headers uppercase text-4xl md:text-6xl tracking-wider font-bold text-shadow">
                House Washing
              </h1>
              <h2 className="uppercase sm:text-lg md:text-3xl text-sky-400 brightness-110 font-semibold text-shadow">
                Renew your Homes Shine
              </h2>
              <Link to={"/contact-us"} className="">
                <button className="contact-now z-50 px-5 md:!px-10 md:!text-2xl template-shadow-subtle ">
                  <div className="flex space-x-4 items-center">
                    <TbMailFilled className="text-2xl md:text-3xl" />
                    <p className="md:!text-2xl text-xl ">Get your free Quote</p>
                  </div>
                </button>
              </Link>
            </div>
          </div>
          <div className="absolute xs:bottom-10 bottom-8 w-full hidden sm:flex justify-center items-center">
            <a href="#content">
              <div className="w-[34px] h-[56px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
                <motion.div
                  animate={{ y: [0, 18, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-2 h-3 rounded-full bg-white mb-1"
                />
              </div>
            </a>
          </div>
        </main>
        <section
          id="content"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          className=" text-center hidden lg:inline mx-20 sm:text-start"
        >
          <div className=" xl:px-32 pt-12 sm:pt-12 mb-5 2xl:max-w-[2000px] mx-auto  lg:flex-nowrap lg:space-x-20">
            <div className="  space-y-6 4xl:space-y-14  lg:mx-6 ">
              <h1 className="text-3xl sm:text-5xl text-center 4xl:text-6xl font-bold text-shadow-subtle pb-10 sub-headers">
                Transform Your Home with Expert House Washing Services
              </h1>
              <div className="space-y-8">
                <div className="flex space-x-20">
                  <div className="lg:w-[55%] pr-4">
                    <p className="leading-relaxed md:text-xl  xl:text-xl 2xl:text-2xl 4xl:text-2xl  text-[#66666]  pt-2  ">
                      Elevate the appearance and cleanliness of your home with
                      professional house washing services. Our expert team
                      specializes in restoring the beauty of your property by
                      thoroughly cleaning all exterior surfaces.
                    </p>
                    <p className="leading-relaxed md:text-xl xl:text-xl 2xl:text-2xl  4xl:text-2xl  text-[#66666] pt-4 xl:pt-8  ">
                      We offer a range of services tailored to your needs, using{" "}
                      <span className="font-bold">low-pressure techniques</span>{" "}
                      for delicate surfaces and{" "}
                      <span className="font-bold">high-pressure methods</span>{" "}
                      for tougher stains.
                    </p>
                    <p className="hidden leading-relaxed md:text-xl xl:text-xl 2xl:text-2xl  4xl:text-2xl  text-[#66666] pt-4 xl:pt-8  2xl:flex">
                      Our approach ensures we can handle any exterior cleaning
                      challenge effectively and safely. Choose Total Exterior
                      Cleaning for all your exterior cleaning needs and let us
                      help you maintain the beauty and integrity of your
                      property.
                    </p>
                  </div>
                  <div className="lg:w-[45%]">
                    <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] 2xl:h-[500px] 4xl:h-[500px] flex overflow-hidden rounded-sm ">
                      <ReactCompareSlider
                        className="w-full mb-4 contrast-[1.10]  sm:mb-0 rounded-sm"
                        itemOne={
                          <ReactCompareSliderImage
                            src={before10}
                            alt="Pressure Wash Before"
                            className=""
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                            src={after10}
                            alt="Pressure Wash After"
                          />
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-14">
                  <div className="lg:w-[55%] pr-4">
                    <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] 2xl:h-[500px] 4xl:h-[500px] flex overflow-hidden rounded-sm ">
                      <ReactCompareSlider
                        className="w-full mb-4 contrast-[1.10]  sm:mb-0 rounded-sm"
                        itemOne={
                          <ReactCompareSliderImage
                            src={before20}
                            alt="Pressure Wash Before"
                            className=""
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                            src={after20}
                            alt="Pressure Wash After"
                          />
                        }
                      />
                    </div>
                  </div>
                  <div className="lg:w-[45%] ">
                    <h2 className="text-3xl pb-6 sub-headers 4xl:text-5xl xl:text-4xl font-semibold text-cyan-500">
                      Green or Black stains on your house? We Can Clean It.
                    </h2>
                    <p className="leading-relaxed md:text-xl 2xl:text-2xl  4xl:text-2xl text-[#66666]  ">
                      Our team at Total Exterior Cleaning utilizes cutting-edge
                      house washing technology to deliver efficient and quality
                      results. We employ the latest industrial-grade equipment,
                      coupled with extensive knowledge and experience, to apply
                      safe house washing methods using a soft wash mix.
                    </p>
                    <p className="hidden leading-relaxed md:text-xl 2xl:text-2xl pt-2  4xl:text-2xl text-[#66666] 2xl:inline-block">
                      This approach ensures a thorough and lasting clean,
                      removing dirt, mould, grime, and stains.
                    </p>
                    <p className="leading-relaxed font-bold md:text-xl 2xl:text-2xl pt-2 4xl:text-2xl text-[#66666]  ">
                      Your satisfaction is our main goal. We will not stop until
                      you're happy with the job. 100% Guaranteed.
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-20">
                  <div className="lg:w-[55%] ">
                    <h2 className="text-3xl pb-6 sub-headers 4xl:text-5xl xl:text-4xl font-semibold text-cyan-500">
                      Preservation and Protection
                    </h2>
                    <p className="leading-relaxed pt-4 xl:text-xl 2xl:text-2xl hidden 4xl:text-2xl md:text-xl text-[#66666] sm:inline">
                      {" "}
                      In addition to enhancing the appearance of your property,
                      our soft-washing cleaning services play a crucial role in
                      its upkeep and protection. The buildup of dirt, mold, and
                      stains can detract from the look of your exterior
                      surfaces. Our cleaning solutions effectively address these
                      issues, ensuring your property remains in excellent
                      condition and looks its best.
                      <br />
                      <br />
                      <p className="hidden lg:inline">
                        Our professional house washing methods eliminate these
                        dangers, providing a safer environment for you, your
                        family, or your customers.{" "}
                      </p>
                      <br />
                      <br />
                      <p className="font-bold hidden  lg:inline-block">
                        We also apply a post soft-wash solution to any driveway
                        or pavement surfaces, this removes any potential spores
                        or growth that may be residing after high pressure
                        cleaning.
                      </p>
                    </p>
                  </div>
                  <div className="lg:w-[45%] pr-4">
                    <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] xl:h-[400px] 2xl:h-[500px] 4xl:h-[500px] flex overflow-hidden rounded-sm ">
                      <ReactCompareSlider
                        className="w-full mb-4 contrast-[1.10]  sm:mb-0 rounded-sm"
                        itemOne={
                          <ReactCompareSliderImage
                            src={before21}
                            alt="Pressure Wash Before"
                            className=""
                          />
                        }
                        itemTwo={
                          <ReactCompareSliderImage
                            src={after21}
                            alt="Pressure Wash After"
                          />
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>

              <img
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos="zoom-in-up"
                className="md:hidden h-[400px] rounded-sm w-full object-cover"
                src={me1}
                alt="Pressure Washing"
              />

              <p className="leading-relaxed !mt-14 text-center text-lg md:text-3xl 4xl:text-3xl font-semibold">
                Contact us today to schedule your free quote. We'll visit your
                property, provide a transparent, no-obligation estimate.
              </p>
              <div className="pt-7 flex justify-center">
                <Link className="w-full md:w-auto" to={"/contact-us"}>
                  <button className="contact-now space-x-3 items-center justify-center !flex w-full md:w-auto !capitalize z-50 !text-lg md:!text-2xl !px-2 sm:!px-10 !py-4 ">
                    <TbMailFilled className="text-3xl" />
                    <p>GET YOUR FREE QUOTE</p>
                  </button>
                </Link>
              </div>
              <h2 className="text-center pb-5 text-shadow-subtle sub-headers text-3xl font-bold sm:hidden">
                Check Out Some Of Our Photos!
              </h2>
            </div>
          </div>
        </section>
        <section
          id="content"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          className=" text-center mx-7 lg:hidden sm:text-start"
        >
          <div className=" xl:px-10 pt-12 sm:pt-20 mb-5 2xl:max-w-[1800px] mx-auto  sm:flex flex-wrap lg:flex-nowrap lg:space-x-20">
            <div className="lg:w-[55%] xl:pr-10 space-y-6 4xl:space-y-14  lg:mx-6 ">
              <h1 className="text-3xl sm:text-5xl 4xl:text-6xl font-bold text-shadow-subtle sub-headers">
                Transform Your Home with Expert House Washing Services
              </h1>
              <p className="leading-relaxed hidden md:inline-block text-lg md:text-xl xl:text-2xl 4xl:text-3xl  text-[#66666]  pt-2  ">
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
              <p className="leading-relaxed md:hidden text-lg md:text-xl xl:text-2xl 4xl:text-3xl  text-[#66666]  pt-2  ">
                Elevate the appearance and cleanliness of your home with
                professional house washing services.
              </p>
              <p className="leading-relaxed md:hidden text-lg md:text-xl xl:text-2xl 4xl:text-3xl  text-[#66666]   ">
                Whether you own a residential property or a commercial space,
                our{" "}
                <span className="font-bold">
                  family owned and operated business
                </span>{" "}
                is here to help you restore your property back to its original
                state.
              </p>
              <img
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos="zoom-in-up"
                className="md:hidden h-[400px] rounded-sm w-full object-cover"
                src={me4}
                alt="Pressure Washing"
              />
              <h2 className="text-3xl sub-headers 4xl:text-5xl xl:text-4xl font-semibold text-cyan-500">
                Green or Black stains on your house? 
              </h2>
              <h2 className="text-3xl !mt-1 sub-headers 4xl:text-5xl xl:text-4xl font-semibold text-cyan-500">
                 We Can Clean It.
              </h2>
              <p className="leading-relaxed text-lg xl:text-2xl  md:text-xl 4xl:text-3xl text-[#66666]  ">
                Our team at Total Exterior Cleaning utilizes cutting-edge house
                washing technology to deliver efficient and quality results. We
                employ the latest industrial-grade equipment, coupled with
                extensive knowledge and experience, to apply safe house washing
                methods using a soft-wash application.
                <span className="hidden xl:flex">
                  This approach ensures a thorough and lasting clean, removing
                  dirt, mold, mildew, and stains.
                </span>
              </p>

              <h2 className="text-3xl hidden sub-headers 4xl:text-5xl !mb-5 sm:flex md:text-3xl xl:text-4xl font-semibold text-cyan-500">
                Preservation and Protection
              </h2>
              <p className="leading-relaxed pt-4 xl:text-2xl hidden 4xl:text-3xl md:text-xl text-[#66666] sm:inline">
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

              <p className=" leading-relaxed text-lg md:text-2xl 4xl:text-3xl font-semibold">
                Contact us today to schedule your free quote. We'll visit your
                property, provide a transparent, no-obligation estimate.
              </p>
              <div className="py-6 flex justify-center">
                <Link className="w-full md:w-auto" to={"/contact-us"}>
                  <button className="contact-now space-x-3 items-center justify-center !flex w-full md:w-auto !capitalize z-50 !text-lg md:!text-2xl !px-2 sm:!px-10 !py-4 ">
                    <TbMailFilled className="text-3xl" />
                    <p>GET YOUR FREE QUOTE</p>
                  </button>
                </Link>
              </div>
              <h2 className="text-center pb-5 text-shadow-subtle sub-headers text-3xl font-bold sm:hidden">
                Check Out Some Of Our Projects!
              </h2>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-easing="ease-in-out"
              className="flex flex-col sm:mx-0 sm:flex-row lg:flex-col my-10 lg:mt-0 lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-[45%]"
            >
              {slice.map((image) => (
                <div className=" sm:w-1/2 w-[90%] h-[350px] lg:w-full lg:h-[400px] 4xl:h-[500px] flex overflow-hidden rounded-sm">
                  <ReactCompareSlider
                    className="w-full mb-4 contrast-[1.10]  sm:mb-0 rounded-sm"
                    itemOne={
                      <ReactCompareSliderImage
                        src={image.img1}
                        alt="Pressure Wash Before"
                        className=""
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
                  className="hidden  lg:inline-block bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  to={"/gallery"}
                >
                  View More Photos
                </Link>
                <button
                  className="sm:hidden inline bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                  onClick={() => loadMore()}
                >
                  Load More
                </button>
              </div>
            </div>
          </div>
        </section>
        <div
          className="mt-10 bg-[#F7F7F7]"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
        >
          <Testimonials />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          className="mb-10 sm:mx-5"
        >
          <Services />
        </div>
        <div
          data-aos="fade-in"
          data-aos-easing="ease-in-out"
          className=" py-1  bg-cyan-200  "
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
