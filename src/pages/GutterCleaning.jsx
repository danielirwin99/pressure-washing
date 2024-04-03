import React from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { gutter1, gutter2, guttercleaning } from "../assets/index";
import { Link } from "react-router-dom";
import Testimonials from "../components/Landing/Testimonials";
import Socials from "../components/Landing/Socials";
import Quotes from "../components/Landing/Quotes";
import Tabs from "../components/Landing/Tabs";

const GutterCleaning = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarServices />
      <main className="relative ">
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover h-[550px] md:h-[100vh] brightness-[.45]"
              src={guttercleaning}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[150px] md:pt-[300px] flex flex-col pl-12 lg:pl-20 space-y-20">
            <h1 className="text-white sub-headers pr-5 sm:pr-0 uppercase text-4xl sm:text-4xl md:text-6xl font-bold text-shadow">
              Gutter Cleaning
            </h1>
            <h2 className="uppercase text-lg md:text-2xl text-white font-semibold text-shadow">
              Clear Skies, Clean Gutters.
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now z-50 md:!text-xl ">
                Claim Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-52  md:mt-[24rem] lg:mt-64 4xl:mt-[40rem]">
        <div className="ml-10 lg:pt-40 mb-5 mr-10 lg:mr-6 flex flex-wrap lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl text-shadow md:text-5xl font-bold sub-headers ">
              Revitalize Your Home with Gutter Cleaning
            </h1>
            <p className="leading-relaxed text-[#676767] pt-8 sm:text-lg">
              At <span className="font-bold"> Total Exterior Cleaning,</span> we
              understand the integral role that well-maintained gutters play in
              preserving the integrity and aesthetic appeal of your home. Our
              commitment to excellence drives us to offer cutting-edge gutter
              cleaning services with use of{" "}
              <span className="font-semibold">
                telescopic poles. <br /> This means we won't walk across your
                roof and potentially crack one of your tiles leading to more
                issues.
              </span>
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-500">
              Unparalleled Precision
            </h2>
            <p className="leading-relaxed text-[#676767] sm:text-lg">
              Traditional gutter cleaning methods often miss hidden debris and
              pockets of dirt. Total Exterior Cleaning's gutter vacuuming
              ensures thorough and precise cleaning, reaching every nook and
              cranny of your gutters. Say goodbye to the risk of overlooked
              clogs and potential water damage.
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-cyan-500">
              Extending the Lifespan of Your Gutters
            </h2>
            <p className="leading-relaxed text-[#676767] sm:text-lg ">
              Regular gutter maintenance is crucial for preventing water damage
              and extending the lifespan of your gutters. With our professional
              vacuuming services, you can trust Total Exterior Cleaning to keep
              your gutters in optimal condition, ensuring they function
              effectively for years to come.
            </p>
            <p className="text-shadow leading-relaxed text-lg md:text-2xl font-semibold">
              Contact Us today to schedule your free quote. We'll visit your
              property, provide a transparent, no-obligation estimate, and
              breathe new life into your outdoor areas.
            </p>
            <div className=" py-5 flex justify-center">
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
          <div className="flex flex-col sm:flex-row lg:flex-col my-14 lg:mt-0  lg:pl-20 lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-1/2">
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-md">
              <img
                className="w-full mb-4 sm:mb-0 rounded-md"
                src={gutter1}
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-md">
              <img
                className="w-full mb-4 sm:mb-0 rounded-md"
                src={gutter2}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <section className="md:my-20 mb-20 py-2 bg-gray-50 ">
        <Socials />
      </section>
      <Testimonials />
      <Tabs />
      <Quotes />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default GutterCleaning;
