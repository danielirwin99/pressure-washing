import React from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import {
  window1,
  window2,
  window3,
  window6,
  window7,
  windows,
} from "../assets/index";
import { Link } from "react-router-dom";
import Testimonials from "../components/Landing/Testimonials";
import Socials from "../components/Landing/Socials";
import Quotes from "../components/Landing/Quotes";
import Tabs from "../components/Landing/Tabs";

const WindowCleaning = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarServices />
      <main className="relative md:h-[100vh]">
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover h-[550px] md:h-[100vh] brightness-[.60]"
              src={windows}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[200px] md:pt-[300px] flex flex-col pl-10 lg:pl-20 space-y-14">
            <h1 className="text-white uppercase text-3xl sm:text-4xl md:text-6xl font-bold text-shadow">
              Window Cleaning
            </h1>
            <h2 className="uppercase text-lg md:text-3xl text-white font-semibold text-shadow">
              Crystal-clear Views.
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now !text-sm z-50 md:!text-xl ">
                Claim Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className=" mt-52  md:mt-0 text-center sm:text-start">
        <div className="mx-8 lg:mx-5 lg:pt-40 mb-5  lg:mr-6 flex flex-wrap justify-center lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-[60%] mx-5 space-y-8">
            <h1 className="text-3xl sm:text-5xl text-shadow-subtle font-bold tracking-wide leading-snug sub-headers">
              Residential & Commercial Window Cleaning
            </h1>
            <p className="leading-7 pt-4 lg:text-xl sm:text-xl">
              At <span className="font-bold"> Total Exterior Cleaning</span>,we
              understand the transformative power of crystal-clear windows.
              Beyond aesthetics, clean windows enhance natural light, improve
              energy efficiency, and create a welcoming atmosphere.
              <span className="hidden lg:flex">
                Say goodbye to smudges, streaks, and dirt that dull your view.
              </span>
            </p>
            <h2 className="text-2xl text-shadow-subtle md:text-4xl font-semibold text-cyan-500 sub-headers">
              Brighter Spaces, Better Living
            </h2>
            <p className="leading-7 lg:text-xl sm:text-lg">
              Experience the difference that professionally cleaned windows can
              make in your daily life. Clean windows not only allow more natural
              light to filter through, brightening up your interiors, but they
              also contribute to a positive and inviting environment.{" "}
              <span className="hidden lg:flex">
                Our meticulous window cleaning services aim to elevate the
                ambiance of your spaces, creating a more enjoyable and
                comfortable atmosphere for both residential and commercial
                settings.
              </span>
            </p>
            <h2 className="text-2xl text-shadow-subtle md:text-4xl sub-headers font-semibold text-cyan-500">
              Latest Window Cleaning Technology
            </h2>
            <p className="leading-7 lg:text-xl sm:text-lg">
              Our water-fed pole system offers efficient and eco-friendly window
              cleaning. Using purified water, it ensures a streak-free finish
              while eliminating the need for chemical cleaners. The carbon fibre
              poles make it easy to reach challenging heights, making this
              method both effective and environmentally conscious practices.
            </p>
            <h2 className="text-2xl text-shadow-subtle md:text-4xl sub-headers font-semibold text-cyan-500">
              Customer Satisfaction Guarantee
            </h2>
            <p className="leading-7 lg:text-xl sm:text-lg">
              At <span className="font-bold"> Total Exterior Cleaning</span>,
              your satisfaction is our priority. We're not done until you're
              thrilled with the results. Rediscover the joy of a crystal-clear
              view – schedule your window cleaning with us today!
            </p>

            <p className=" leading-8 sm:text-xl lg:text-xl font-semibold">
              Contact us today to schedule your free window cleaning quote.
              We'll visit your property, provide a transparent, no-obligation
              estimate. <br /> Don't settle for anything less than perfection
              when it comes to your windows.
            </p>
            <div className="py-6 flex justify-center">
              <Link to={"/contact-us"}>
                <button className="contact-now !px-10 z-50 !text-xl ">
                  Contact Us Now
                </button>
              </Link>
            </div>
            <h2 className="text-center text-shadow text-2xl sub-headers font-bold sm:hidden">
              Check Out Some Of Our Photos!
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col my-14 lg:mt-0  lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-[40%]">
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[500px] xl:h-[600px] flex overflow-hidden rounded-md">
              <img
                className="w-full mb-4 rounded-md sm:mb-0 xl:mx-14"
                src={window6}
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[500px] xl:h-[600px] flex overflow-hidden rounded-md">
              <img
                className="w-full mb-4 rounded-md sm:mb-0 xl:mx-14"
                src={window2}
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[500px] xl:hidden xl:h-[600px] flex overflow-hidden rounded-md">
              <img
                className="w-full mb-4 rounded-md sm:mb-0"
                src={window7}
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
      <section className="md:my-10 mb-20 py-2 bg-gray-50 border-t-2 border-b-2 ">
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

export default WindowCleaning;
