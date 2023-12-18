import React from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { window1, window2, window3, windows } from "../assets/index";
import { Link } from "react-router-dom";
import Testimonials from "../components/Landing/Testimonials";

const WindowCleaning = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarServices />
      <main className="relative ">
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover h-[500px] md:h-[800px] brightness-[.60]"
              src={windows}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[200px] md:pt-[300px] flex flex-col pl-10 lg:pl-32 space-y-14">
            <h1 className="text-white uppercase text-2xl sm:text-4xl md:text-6xl font-bold text-shadow">
              Window Cleaning
            </h1>
            <h2 className="uppercase text-xl md:text-3xl text-white font-semibold text-shadow">
              Crystal-clear Views.
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now z-50 md:!text-xl ">
                Claim Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-28 md:mt-72 lg:mt-36">
        <div className="ml-10 lg:pt-40 mb-5 mr-10 lg:mr-6 flex flex-wrap justify-center lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-wide leading-snug">
              Are Your Windows Begging for a Revitalizing Shine?
            </h1>
            <p className="leading-6 pt-4 sm:text-xl">
              At <span className="font-bold"> Total Exterior Cleaning</span>,we
              understand the transformative power of crystal-clear windows.
              Beyond aesthetics, clean windows enhance natural light, improve
              energy efficiency, and create a welcoming atmosphere. Say goodbye
              to smudges, streaks, and dirt that dull your view.
            </p>
            <h2 className="text-3xl font-semibold text-cyan-500">
              Brighter Spaces, Better Living
            </h2>
            <p className="leading-6 sm:text-lg">
              Experience brighter, more inviting living and working spaces.
              Clean windows enhance natural light, elevate ambiance, and
              contribute to a positive environment.
            </p>
            <h2 className="text-3xl font-semibold text-cyan-500">
              Latest Window Cleaning Technology
            </h2>
            <p className="leading-6 sm:text-lg">
              Our water-fed pole system offers efficient and eco-friendly window
              cleaning. Using purified water, it ensures a streak-free finish
              while eliminating the need for chemical cleaners. The telescopic
              poles make it easy to reach challenging heights, making this
              method both effective and environmentally conscious.
            </p>
            <h2 className="text-3xl font-semibold text-cyan-500">
              Customer Satisfaction Guarantee
            </h2>
            <p className="leading-6 sm:text-lg">
              At <span className="font-bold"> Total Exterior Cleaning</span>,
              your satisfaction is our priority. We're not done until you're
              thrilled with the results. Rediscover the joy of a crystal-clear
              view – schedule your window cleaning with us today!
            </p>

            <p className=" leading-6 sm:text-xl font-semibold">
              Contact us today to schedule your free window cleaning quote
              quote. We'll visit your property, provide a transparent,
              no-obligation estimate.
            </p>
            <div className="pt-5 pb-10 flex justify-center">
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
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[500px] xl:h-[600px] flex overflow-hidden rounded-md">
              <img
                className="w-full mb-4 rounded-md sm:mb-0 xl:px-8"
                src={window1}
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[500px] xl:h-[600px] flex overflow-hidden rounded-md">
              <img
                className="w-full mb-4 rounded-md sm:mb-0 xl:px-8"
                src={window2}
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[500px] xl:hidden xl:h-[600px] flex overflow-hidden rounded-md">
              <img
                className="w-full mb-4 rounded-md sm:mb-0"
                src={window3}
                alt=""
              />
            </div>
          </div>
          {/* <div className="relative  flex flex-col sm:flex-row lg:flex-col my-14 lg:mt-0  lg:pl-20  sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-1/2">
            <div className="w-full top-28 left-3 lg:absolute sm:w-1/3 lg:w-full  flex overflow-hidden rounded-md">
              <figure>
                <img
                  className=" rounded-md w-[300px] h-[450px]"
                  src={window1}
                  alt=""
                />
              </figure>
            </div>
            <div className="w-full top-40 xl:left-[450px] left-[250px] lg:absolute mt-3 sm:mt-0 sm:w-1/3 lg:w-full flex overflow-hidden rounded-md">
              <figure>
                <img
                  className="rounded-md w-[300px] h-[450px]"
                  src={window2}
                  alt=""
                />
              </figure>
            </div>
            <div className="w-full bottom-2 xl:top-5 xl:left-[200px] lg:absolute mt-3 sm:mt-0 sm:w-1/3 lg:w-full flex overflow-hidden rounded-md">
              <figure>
                <img
                  className="rounded-md w-[300px] h-[450px]"
                  src={window3}
                  alt=""
                />
              </figure>
            </div>
          </div> */}
        </div>
      </div>
      <Testimonials />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default WindowCleaning;
