import React from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { me1, pressurewashing } from "../assets/index";
import { Link } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import { after3, after8, before3, before8 } from "../assets/B&A/Index";
import { before1, after1 } from "../assets/Gallery/Index";
import Testimonials from "../components/Landing/Testimonials";
import Socials from "../components/Landing/Socials";
import Quotes from "../components/Landing/Quotes";
import Tabs from "../components/Landing/Tabs";
import FAQ from "../components/Landing/FAQ";

const PressureWashing = () => {
  return (
    <div className="">
      <title>High Pressure Cleaning - Pressure Washing Sutherland</title>
      {/* Navbar */}
      <NavbarServices />
      <main className="relative ">
        <div className="fixed hidden sm:inline bottom-5 right-4 sm:bottom-7 sm:right-5 z-[995] template-shadow rounded-2xl">
          <Link to={"/contact-us"} className="contact-now mobile">
            Contact Now
          </Link>
        </div>
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover h-[550px] md:h-[800px] brightness-[.45]"
              src={pressurewashing}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[150px] md:pt-[300px] flex flex-col pl-8 pr-4 sm:pr-0 lg:pl-32 space-y-14">
            <h1 className="text-white sub-headers uppercase text-3xl sm:text-4xl md:text-6xl tracking-wider font-bold text-shadow">
              High Pressure Cleaning
            </h1>
            <h2 className="uppercase text-lg md:text-3xl text-blue-200 font-semibold text-shadow">
              Executed with precision
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now z-50 !px-6 md:!text-xl ">
                Claim Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-44  md:mt-80 lg:mt-40 text-center sm:text-start">
        <div className="mx-5 lg:pt-36 mb-5  lg:mr-6 flex flex-wrap lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-[60%] space-y-10  lg:mx-6 lg:pr-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-shadow sub-headers">
              Refresh Your Home with High Pressure Cleaning.
            </h1>
            <p className="leading-relaxed lg:text-xl text-[#676767]  pt-2  ">
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
            <h2 className="text-2xl sub-headers  sm:text-3xl font-semibold text-cyan-500">
              House Pressure Cleaning In Sydney For Freshness Of Your Home
            </h2>

            <p className="leading-relaxed lg:text-xl text-[#676767]  ">
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

            <h2 className="text-3xl hidden !mb-5 sm:flex md:text-3xl font-semibold text-cyan-500">
              Preservation and Protection
            </h2>
            <p className="leading-relaxed pt-4 hidden lg:text-xl text-[#676767] sm:inline">
              {" "}
              Beyond the aesthetic benefits, our high-pressure cleaning services
              contribute to the preservation and protection of your property.
              Accumulated dirt, mould, and stains not only compromise the visual
              appeal of your exterior surfaces but can also create hazardous and
              slippery conditions.
              <br />
              <br />
              <span className="hidden xl:flex ">
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
            <div className="py-4 flex justify-center">
              <Link className="w-full md:w-auto" to={"/contact-us"}>
                <button className="contact-now w-full md:w-auto !capitalize z-50 md:!text-2xl !text-xl !px-10 !py-4 ">
                  Contact Us Now
                </button>
              </Link>
            </div>
            <h2 className="text-center sub-headers text-shadow text-2xl font-bold sm:hidden">
              Check Out Some Of Our Photos!
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col my-14 lg:mt-0  lg:pl-18 lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-[40%]">
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
              <ReactCompareSlider
                className="w-full mb-4 sm:mb-0"
                itemOne={
                  <ReactCompareSliderImage src={before1} alt="Before 2" />
                }
                itemTwo={<ReactCompareSliderImage src={after1} alt="After 2" />}
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
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
            </div>
            <div className="flex items-center  justify-center mt-7">
              <Link
                className="bg-white text-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                to={"/gallery"}
              >
                View More Photos
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className=" mb-20 py-2 bg-gray-50 border-t-2 border-b-2 ">
        <Socials />
      </section>
      <Testimonials />
      <FAQ />
      <Tabs />

      <Quotes />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PressureWashing;
