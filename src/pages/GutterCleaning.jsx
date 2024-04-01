import React from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { gutter1, gutter2, guttercleaning } from "../assets/index";
import { Link } from "react-router-dom";
import Testimonials from "../components/Landing/Testimonials";
import Socials from "../components/Landing/Socials";
import Quotes from "../components/Landing/Quotes";

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
              className="w-full object-cover h-[500px] md:h-[800px] brightness-50"
              src={guttercleaning}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[150px] md:pt-[300px] flex flex-col pl-12 lg:pl-32 space-y-14">
            <h1 className="text-white pr-5 sm:pr-0 uppercase text-2xl sm:text-4xl md:text-6xl font-bold text-shadow">
              Gutter Cleaning
            </h1>
            <h2 className="uppercase text-xl md:text-3xl text-white font-semibold text-shadow">
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
      <div className="mt-40 sm:mt-40 md:mt-80 lg:mt-40">
        <div className="ml-10 lg:pt-40 mb-5 mr-10 lg:mr-6 flex flex-wrap lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold ">
              Revitalize Your Home with Gutter Cleaning
            </h1>
            <p className="leading-6 pt-8 text-xl">
              At <span className="font-bold"> Total Exterior Cleaning,</span> we
              understand the integral role that well-maintained gutters play in
              preserving the integrity and aesthetic appeal of your home. Our
              commitment to excellence drives us to offer cutting-edge gutter
              cleaning services, employing the latest technology in the form of
              industrial level gutter vacuuming.
            </p>
            <h2 className="text-3xl font-semibold text-cyan-500">
              Unparalleled Precision
            </h2>
            <p className="leading-6 text-xl">
              Traditional gutter cleaning methods often miss hidden debris and
              pockets of dirt. Total Exterior Cleaning's gutter vacuuming
              ensures thorough and precise cleaning, reaching every nook and
              cranny of your gutters. Say goodbye to the risk of overlooked
              clogs and potential water damage.
            </p>
            <h2 className="text-3xl font-semibold text-cyan-500">
              Extending the Lifespan of Your Gutters
            </h2>
            <p className="leading-6 text-xl hidden sm:flex">
              Regular gutter maintenance is crucial for preventing water damage
              and extending the lifespan of your gutters. With our professional
              vacuuming services, you can trust Total Exterior Cleaning to keep
              your gutters in optimal condition, ensuring they function
              effectively for years to come.
            </p>
            <p className="leading-6 text-xl">
              Choose Total Exterior Cleaning for a seamless, worry-free gutter
              cleaning experience. Our dedication to utilizing cutting-edge
              technology, combined with a commitment to customer satisfaction,
              makes us the preferred choice for homeowners seeking top-notch
              gutter cleaning.
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
      <Quotes />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default GutterCleaning;
