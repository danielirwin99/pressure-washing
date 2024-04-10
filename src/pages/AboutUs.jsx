import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Socials from "../components/Landing/Socials";
import { me1, me2, me3 } from "../assets";
import { FaCheck } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      
      <div>
        <Navbar />
        <div className="bg-gradient-to-r from-blue-200 to-cyan-200">
          <main className="pt-10 mx-5 xl:mx-20 ">
            <h1 className="text-3xl lg:text-5xl font-bold text-center sm:text-start   tracking-wider sub-headers">
              About Us
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="md:flex items-center w-full flex-wrap md:flex-row my-10 flex-grow"
            >
              <div className="space-y-5 md:pr-14 md:w-2/3">
                <h2 className="text-xl underline capitalize lg:text-2xl text-center sm:text-start font-bold text-gray-800 tracking-wider sub-headers">
                  Your go-to local guys.
                </h2>
                <div>
                  <p className=" text-center sm:text-start lg:text-xl leading-relaxed">
                    <span className="font-bold">Total Exterior Cleaning</span>{" "}
                    is based in the{" "}
                    <span className="font-bold">Sutherland Shire Region,</span>{" "}
                    offering a friendly smile as a{" "}
                    <span className="font-bold">
                      family owned and operated business.
                    </span>{" "}
                    With a commitment to excellence, we employ up-to-date
                    cutting-edge equipment, ensuring a brilliant finish to all
                    exterior surfaces.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl text-center sm:text-start pb-4 font-bold text-cyan-500">
                    Our Goal
                  </h3>
                  <p className="text-center sm:text-start lg:text-xl leading-relaxed">
                    We currently offer cleaning services all of Sutherland Shire
                    and surrounding regions. Our mission is to consistently
                    deliver high-quality workmanship on every project we
                    undertake. <br /> We take pride in our work, striving to
                    exceed customer expectations with meticulous attention to
                    detail and a dedication to customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 mt-8  md:mt-0">
                <img
                  className="h-[400px] contrast-[1.05] rounded-sm w-full object-cover"
                  src={me1}
                  alt="TEST"
                />
              </div>
            </div>
            <div
              // data-aos="fade-up"
              // data-aos-duration="700"
              // data-aos-easing="ease-in-out"
              className="md:flex items-center w-full md:flex-row my-10 flex-grow md:pb-5"
            >
              <div className="md:w-1/3 mt-5 lg:h-[450px]  md:mt-0">
                <img
                  src={me2}
                  className="rounded h-[450px] md:h-full -sm w-full object-cover"
                  alt="TEST"
                />
              </div>

              <div className="space-y-3 md:pl-20 lg:pl-52  pt-10 md:pt-0 lg:pl-40n  md:w-2/3">
                <h2 className="md:text-3xl text-3xl capitalize lg:text-4xl xl:text-5xl font-bold text-gray-800 tracking-wider sub-headers">
                  Services We Provide:
                </h2>
                <ul className="space-y-4 pt-5 sm:py-5">
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-8 h-8 text-green-400" />
                    <p className="w-full text-xl lg:text-3xl font-bold text-sky-400 ">
                      Pressure Washing
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-8 h-8 text-green-400" />
                    <p className="w-full text-xl lg:text-3xl font-bold text-sky-400">
                      House Washing
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-8 h-8 text-green-400" />
                    <p className="w-full text-xl lg:text-3xl font-bold text-sky-400">
                      Window Cleaning
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-8 h-8 text-green-400" />
                    <p className="w-full text-xl lg:text-3xl font-bold text-sky-400">
                      Gutter Cleaning
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-8 h-8 text-green-400" />
                    <p className="w-full text-xl lg:text-3xl font-bold text-sky-400">
                      Driveway Sealing
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-8 h-8 text-green-400" />
                    <p className="w-full text-xl lg:text-3xl font-bold text-sky-400">
                      Residential & Commercial
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className="inline sm:hidden"
            >
              <img
                className="rounded-sm contrast-125"
                src={me3}
                alt="Third Picture"
              />
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-easing="ease-in-out"
              className=" text-center sm:text-xl  leading-8 pt-10 sm:pt-5 pb-10"
            >
              Call us today on
              <span className="underline font-bold"> 0434 114 479</span> or
              email us on{" "}
              <a
                href="mailto:admin@totalexteriorco.com"
                className="font-bold underline"
              >
                {" "}
                admin@totalexteriorco.com{" "}
              </a>
              for an online quote
            </p>
          </main>
        </div>
        <div
          data-aos="fade-in"
          data-aos-duration="700"
          data-aos-easing="ease-in-out"
        >
          <Socials />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
