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
import Testimonials from "../components/Landing/Testimonials";

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
          <div className="pt-[150px] md:pt-[300px] flex flex-col pl-8 pr-4 sm:pr-0 lg:pl-32 space-y-14">
            <h1 className="text-white uppercase text-2xl sm:text-4xl md:text-6xl font-bold text-shadow">
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
      <div className="mt-40 md:mt-80 lg:mt-40">
        <div className="ml-10 lg:pt-40 mb-5 mr-10 lg:mr-6 flex flex-wrap lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Refresh Your Home with High Pressure Cleaning.
            </h1>
            <p className="leading-6 pt-4 text-lg">
              <span className="font-bold"> Total Exterior Cleaning</span> is
              your go-to provider for professional and comprehensive exterior
              cleaning services in Sydney. Whether you own a residential
              property or a commercial space, our specialized total exterior
              cleaning solutions are designed to rejuvenate and enhance various
              surfaces, ensuring a pristine and inviting outdoor environment.
            </p>
            <h2 className="text-3xl font-semibold text-cyan-500">
              Cutting-Edge Pressure Washing Technology
            </h2>

            <p className="leading-6 text-lg">
              Our team at Total Exterior Cleaning utilizes cutting-edge pressure
              washing technology to deliver efficient and effective results. We
              employ the latest industrial-grade equipment, coupled with
              extensive knowledge and experience, to apply high-pressure
              cleaning methods to surfaces such as driveways, pavers, patios,
              concrete floors, and pathways.{" "}
              <span className="hidden xl:flex">
                This approach ensures a thorough and lasting clean, removing
                dirt, mold, mildew, and stains.
              </span>
            </p>

            <h2 className="text-3xl font-semibold text-cyan-500">
              Preservation and Protection
            </h2>
            <p className="leading-6 text-lg">
              {" "}
              Beyond the aesthetic benefits, our high-pressure cleaning services
              contribute to the preservation and protection of your property.
              Accumulated dirt, mold, and stains not only compromise the visual
              appeal of your outdoor spaces but can also create hazardous and
              slippery conditions.
              <br />
              <br />
              <span className="hidden xl:flex">
                Our professional cleaning methods eliminate these dangers,
                providing a safer environment for you, your family, or your
                customers. Additionally, the process helps to restore the
                vibrant colors of your outdoor areas, adding to the overall curb
                appeal of your property.
              </span>
            </p>

            <p className=" leading-6 text-2xl font-semibold">
              Contact Us today to schedule your free pressure washing quote.
              We'll visit your property, provide a transparent, no-obligation
              estimate, and breathe new life into your outdoor areas.
            </p>
            <div className="py-8 flex justify-center">
              <Link to={"/contact-us"}>
                <button className="contact-now z-50 md:!text-xl ">
                  Contact Us Now
                </button>
              </Link>
            </div>
            <h2 className="text-center text-2xl font-bold sm:hidden">
              Check Out Some Of Our Photos!
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col my-14 lg:mt-0  lg:pl-16 lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-1/2">
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
      <Testimonials />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default PressureWashing;
