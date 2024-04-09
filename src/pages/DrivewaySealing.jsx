import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { sealing, sealing1, sealing2, service2 } from "../assets/index";
import { Link } from "react-router-dom";
import Testimonials from "../components/Landing/Testimonials";
import Socials from "../components/Landing/Socials";
import Quotes from "../components/Landing/Quotes";

const DrivewaySealing = () => {
  useEffect(() => {
    document.title = "Driveway Sealing & Pressure Washing";
  }, []);
  return (
    <>
      <meta
        name="description"
        content="Whether it's grey, coloured or patterned concrete, sealing after a pressure clean is strongly recommended and for the best results."
      ></meta>
      {/* Navbar */}
      <NavbarServices />
      <main
        className="relative md:h-[100vh] w-full"
        data-aos="fade-in"
        data-aos-duration="700"
        data-aos-easing="ease-in-out"
      >
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover h-[700px] md:h-[100vh] brightness-[.3]"
              src={sealing}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[150px] md:pt-[300px] flex flex-col pl-8 pr-4 sm:pr-0 lg:pl-32 space-y-20">
            <h1 className="text-white sub-headers uppercase text-4xl md:text-6xl tracking-wider font-bold text-shadow">
              Driveway Sealing
            </h1>
            <h2 className="uppercase text-lg md:text-3xl text-blue-200 font-semibold text-shadow">
              Restore and Protect Your Driveway.
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now z-50 md:!text-xl ">
                Claim Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className=" text-center sm:text-start"
      >
        <div className="mx-5 lg:mx-10 pt-72 md:pt-20 mb-5  lg:mr-6 flex flex-wrap lg:flex-nowrap lg:space-x-4">
          <div className="lg:w-[60%] space-y-8  lg:mx-6 lg:pr-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-shadow-subtle sub-headers">
              Why Seal Your Driveway?
            </h1>
            <p className="leading-relaxed lg:text-xl  text-[#676767]  pt-2 ">
              Your home's exterior is a valuable asset, and strategic
              maintenance is essential for long-term allure. Explore the
              transformative benefits of driveway sealing and painting—a dynamic
              duo that protects against the elements, improves aesthetics, and
              adds value to your property.
            </p>
            <h2 className="text-2xl sub-headers  sm:text-3xl font-semibold text-cyan-500">
              Weather-Defying Protection
            </h2>
            <p className="leading-relaxed lg:text-xl text-[#676767]">
              Sealing shields your driveway from the damaging effects of rain,
              extreme heat, and UV rays. This proactive measure prevents cracks
              and deterioration, significantly extending your driveway's
              lifespan and saving you from costly repairs.
            </p>
            <h2 className="text-2xl sub-headers  sm:text-3xl font-semibold text-cyan-500">
              Value-Adding Curb Appeal
            </h2>

            <p className="leading-relaxed  lg:text-xl text-[#676767] ">
              Elevate your property's value by enhancing curb appeal with a
              well-kept driveway. The combination of sealing and painting makes
              a lasting impression on potential buyers, contributing to the
              overall appeal of your home.
            </p>
            <h2 className="text-2xl sub-headers hidden sm:inline-block  sm:text-3xl font-semibold text-cyan-500">
              Easy Maintenance
            </h2>
            <p className="leading-relaxed hidden sm:inline-block  lg:text-xl text-[#676767]">
              Sealed and painted driveways are easier to clean and maintain.
              Enjoy a spotless finish with minimal effort, as these treatments
              minimize the accumulation of dirt and stains, preserving the
              beauty of your driveway.
            </p>
            <p className="text-shadow-subtle leading-relaxed text-lg md:text-2xl font-semibold">
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
            <h2 className="text-3xl text-center sm:hidden sm:text-4xl font-bold text-shadow-subtle sub-headers">
              Check Out Some Of Our Photos!
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col my-14 lg:mt-0   lg:space-y-5 sm:space-x-4 lg:space-x-0 justify-center items-center lg:w-2/5">
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
              <img
                className="w-full mb-4 sm:mb-0 rounded-sm"
                src={sealing1}
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 lg:w-full lg:h-[400px] flex overflow-hidden rounded-sm">
              <img
                className="w-full mb-4 sm:mb-0 rounded-sm"
                src={sealing2}
                alt=""
              />
            </div>
            <div className="w-full sm:w-1/2 sm:hidden lg:w-full h-[300px] -mb-10 flex overflow-hidden rounded-sm">
              <img
                className="w-full mb-4 sm:mb-0 rounded-sm"
                src={service2}
                alt=""
              />
            </div>
          </div>
        </div>
        <h2 className="text-3xl px-5 py-5 text-center mb-10 sm:mb-0 font-extrabold sub-headers  sm:text-3xl text-cyan-500">
          We Offer Pressure Cleaning & Sealing Packages.
        </h2>
      </div>
      <section className="md:my-20 mb-20 py-2 bg-gray-50 border-t-2 border-b-2 ">
        <Socials />
      </section>
      <Testimonials />
      <Quotes />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default DrivewaySealing;
