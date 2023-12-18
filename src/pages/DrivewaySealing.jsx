import React from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import {
  gutter1,
  gutter2,
  guttercleaning,
  sealing,
  sealing1,
  sealing2,
} from "../assets/index";
import { Link } from "react-router-dom";
import Testimonials from "../components/Landing/Testimonials";

const DrivewaySealing = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarServices />
      <main className="relative ">
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover h-[500px] md:h-[800px] brightness-[.3]"
              src={sealing}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[150px] mr-4 md:pt-[300px] flex flex-col pl-8 lg:pl-32 space-y-14">
            <h1 className="text-white uppercase text-2xl sm:text-4xl md:text-6xl font-bold text-shadow">
              Driveway Sealing
            </h1>
            <h2 className="uppercase text-xl md:text-3xl text-white font-semibold text-shadow">
              Preserve and Protect Your Driveway.
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now z-50 md:!text-xl ">
                Claim Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-40 md:mt-72 lg:mt-40">
        <div className="ml-10 lg:pt-40 mb-5 mr-10 lg:mr-6 flex flex-wrap lg:flex-nowrap lg:space-x-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold ">
              Why Seal Your Driveway?
            </h1>
            <p className="leading-6 pt-4 sm:text-lg">
              Your home's exterior is a valuable asset, and strategic
              maintenance is essential for long-term allure. Explore the
              transformative benefits of driveway sealing and painting—a dynamic
              duo that protects against the elements, improves aesthetics, and
              adds value to your property.
            </p>
            <h2 className="text-3xl font-semibold text-cyan-500">
              Weather-Defying Protection
            </h2>
            <p className="leading-6 sm:text-lg">
              Sealing shields your driveway from the damaging effects of rain,
              extreme heat, and UV rays. This proactive measure prevents cracks
              and deterioration, significantly extending your driveway's
              lifespan and saving you from costly repairs.
            </p>
            <h2 className="text-3xl font-semibold text-cyan-500">
              Value-Adding Curb Appeal
            </h2>

            <p className="leading-6 sm:text-lg ">
              Elevate your property's value by enhancing curb appeal with a
              well-kept driveway. The combination of sealing and painting makes
              a lasting impression on potential buyers, contributing to the
              overall appeal of your home.
            </p>
            <h2 className="text-3xl font-semibold text-cyan-500">
              Easy Maintenance
            </h2>
            <p className="leading-6 sm:text-lg">
              Sealed and painted driveways are easier to clean and maintain.
              Enjoy a spotless finish with minimal effort, as these treatments
              minimize the accumulation of dirt and stains, preserving the
              beauty of your driveway.
            </p>
            <p className="leading-6 sm:text-lg">
              Ready to transform your driveway into a durable, aesthetically
              pleasing asset for your home? Our dedicated team is here to
              provide expert guidance on driveway sealing and painting.{" "}
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
                src={sealing1}
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-md">
              <img
                className="w-full mb-4 sm:mb-0 rounded-md"
                src={sealing2}
                alt=""
              />
            </div>
          </div>
        </div>
        <h2 className="text-3xl px-5 py-10 text-center font-extrabold">
          We Provide Pressure Cleaning & Sealing Packages.
        </h2>
      </div>
      <Testimonials />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default DrivewaySealing;
