import React, { useEffect } from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { sealing, sealing1, sealing2, service2 } from "../assets/index";
import { Link } from "react-router-dom";
import Testimonials from "../components/Landing/Testimonials";
import Socials from "../components/Landing/Socials";
import Quotes from "../components/Landing/Quotes";
import { TbMailFilled } from "react-icons/tb";

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
          <div className="pt-[150px] md:pt-[300px] md:h-[100vh] h-[700px] flex flex-col pl-8 pr-4 sm:pr-0 lg:pl-32 space-y-20">
            <h1 className="text-white sub-headers uppercase text-4xl md:text-6xl tracking-wider font-bold text-shadow">
              Concrete Sealing
            </h1>
            <h2 className="uppercase text-lg md:text-3xl text-blue-200 font-semibold text-shadow">
              Restore and Protect Your Driveway.
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now z-50 px-5 md:!px-10 md:!text-2xl template-shadow-subtle ">
                <div className="flex space-x-4 items-center">
                  <TbMailFilled className="text-2xl md:text-3xl" />
                  <p className="md:!text-2xl text-xl ">Get a Quote</p>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        className=" text-center sm:text-start "
      >
        <div className="sm:px-10 2xl:max-w-[1800px] mx-auto pt-20 mb-5  flex flex-wrap lg:flex-nowrap lg:space-x-20">
          <div className="lg:w-[60%] space-y-8  lg:mx-6 ">
            <h1 className="text-3xl sm:text-4xl font-bold text-shadow-subtle sub-headers">
              Why Seal Your Driveway?
            </h1>
            <p className="leading-relaxed lg:text-xl  text-[#676767]  pt-2 ">
              Your home's exterior is a valuable asset, and strategic
              maintenance is essential for long-term allure. Explore the
              transformative benefits of driveway sealing that protects against
              the elements, improves aesthetics, and adds value to your
              property.
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
            <h2 className="text-2xl sub-headers hidden md:inline-block  sm:text-3xl font-semibold text-cyan-500">
              Easy Maintenance
            </h2>
            <p className="leading-relaxed hidden md:inline-block  lg:text-xl text-[#676767]">
              Sealed driveways make maintenance a breeze. Experience a spotless
              finish with ease, as sealing acts as a barrier, preventing dirt
              and stains from accumulating over time, thus preserving the
              pristine beauty of your driveway for years to come.
            </p>
            <p className="text-shadow-subtle leading-relaxed text-lg md:text-2xl font-semibold">
              Ready to transform your driveway into a durable, aesthetically
              pleasing asset for your home? Our dedicated team is here to
              provide expert guidance on driveway sealing and painting.{" "}
            </p>
            <div className=" py-5 flex justify-center">
              <Link className="w-full md:w-auto" to={"/contact-us"}>
                <button className="contact-now space-x-3 items-center justify-center !flex w-full md:w-auto !capitalize z-50 !text-lg md:!text-2xl !px-2 sm:!px-10 !py-4 ">
                  <TbMailFilled className="text-3xl" />
                  <p>GET A QUOTE</p>
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
        <h2 className="text-4xl underline px-5 py-6 text-center mb-10 sm:mb-0 font-extrabold sub-headers  sm:text-4xl text-cyan-500">
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
