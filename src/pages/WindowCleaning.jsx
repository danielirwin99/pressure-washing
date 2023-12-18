import React from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { window1, window2, window3, windows } from "../assets/index";
import { Link } from "react-router-dom";

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
          <div className="pt-[200px] md:pt-[300px] flex flex-col pl-12 lg:pl-32 space-y-14">
            <h1 className="text-white uppercase text-4xl sm:text-4xl md:text-6xl font-bold text-shadow">
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
      <div className="mt-36 sm:mt-32 md:mt-72 lg:mt-36">
        <div className="ml-10 lg:pt-40 mb-5 mr-10 lg:mr-6 flex flex-wrap justify-center lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-wide leading-snug">
              Are Your Windows Begging for a Revitalizing Shine?
            </h1>
            <p className="leading-6 pt-8 sm:text-xl">
              At <span className="font-bold"> Total Exterior Cleaning</span>, we
              take pride in offering unparalleled expertise in window cleaning
              services, bringing a new level of brilliance to your living or
              workspace.
            </p>
            <p className="leading-6 sm:text-xl">
              Our skilled professionals are dedicated to transforming the
              ordinary into the extraordinary. Say goodbye to the frustration of
              smudged and streaky windows as our meticulous team employs
              cutting-edge techniques and top-quality cleaning solutions to
              ensure your windows gleam with a revitalizing shine.
            </p>
            <p className="leading-6 text-xl hidden sm:flex">
              Experience the transformative power of transparency as our
              meticulous professionals enhance the aesthetic appeal of your
              property. Total Exterior Cleaning services both commercial and
              residential properties.
            </p>
            <p className="leading-6 sm:text-xl">
              Choose <span className="font-bold">Total Exterior Cleaning</span>{" "}
              for a transformative experience that goes beyond ordinary window
              cleaning. Let us unveil the brilliance of your space, leaving you
              with a home or office that radiates cleanliness and
              sophistication.
            </p>

            <p className=" leading-6 sm:text-xl">
              Contact us today to schedule your free window cleaning quote
              quote. We'll visit your property, provide a transparent,
              no-obligation estimate, and breathe new life into your outdoor
              areas.
            </p>
            <div className="pt-5 pb-10 flex justify-center">
              <Link to={"/contact-us"}>
                <button className="contact-now z-50 md:!text-xl ">
                  Contact Us Now
                </button>
              </Link>
            </div>
          </div>
          <div className="relative flex flex-col sm:flex-row lg:flex-col my-14 lg:mt-0  lg:pl-20  sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-1/2">
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
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default WindowCleaning;
