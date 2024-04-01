import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Socials from "../components/Landing/Socials";
import { me1, me2 } from "../assets";
import { FaCheck } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="bg-gradient-to-r from-blue-200 to-cyan-200">
          <main className="my-10 pt-10 mx-5 md:mx-20 ">
            <h1 className="text-3xl lg:text-5xl font-bold  tracking-wider sub-headers">
              About Us
            </h1>
            <div className="md:flex w-full flex-wrap md:flex-row my-10 flex-grow">
              <div className="space-y-5 md:pr-14 md:w-2/3">
                <h2 className="text-xl capitalize lg:text-2xl font-bold text-gray-800 tracking-wider sub-headers">
                  Your go-to local guys.
                </h2>
                <div>
                  <p className=" text-start md:text-xl leading-loose">
                    <span className="font-bold">Total Exterior Cleaning</span>{" "}
                    is based in the{" "}
                    <span className="font-bold">Sutherland Shire Region,</span>{" "}
                    offering a friendly smile as a{" "}
                    <span className="font-bold">
                      Father & Son local business.
                    </span>{" "}
                    With a commitment to excellence, we employ up-to-date
                    cutting-edge equipment, ensuring a brilliant finish to all
                    exterior surfaces.
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl pb-4 font-bold text-cyan-500">
                    Our Goal
                  </h3>
                  <p className="text-start md:text-xl leading-loose">
                    We currently service all of Sutherland Shire and surrounding
                    regions. Our mission is to consistently deliver high-quality
                    workmanship on every project we undertake. We take immense
                    pride in our work, striving to exceed customer expectations
                    with meticulous attention to detail and a dedication to
                    customer satisfaction.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 mt-5  md:mt-0">
                <img
                  className="h-[400px] rounded-sm w-full object-cover"
                  src={me1}
                  alt="TEST"
                />
              </div>
            </div>
            <div className="md:flex w-full md:space-x-10 md:flex-row my-10 flex-grow md:pb-5">
              <div className="md:w-1/3 mt-5  md:mt-0">
                <img
                  src={me2}
                  className="h-[400px] rounded-sm w-full object-cover"
                  alt="TEST"
                />
              </div>
              <div className="space-y-3  pt-10 md:pt-0 lg:pl-40n  md:w-2/3">
                <h2 className="text-xl capitalize lg:text-4xl font-bold text-gray-800 tracking-wider sub-headers">
                  The Services We Provide:
                </h2>
                <ul className="space-y-4 py-5">
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-10 h-10 text-green-300" />
                    <p className="w-full text-2xl font-bold text-cyan-500 underline">
                      Pressure Washing
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-10 h-10 text-green-300" />
                    <p className="w-full text-2xl font-bold text-cyan-500 underline">
                      House Washing
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-10 h-10 text-green-300" />
                    <p className="w-full text-2xl font-bold text-cyan-500 underline">
                      Window Cleaning
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-10 h-10 text-green-300" />
                    <p className="w-full text-2xl font-bold text-cyan-500 underline">
                      Gutter Cleaning
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-10 h-10 text-green-300" />
                    <p className="w-full text-2xl font-bold text-cyan-500 underline">
                      Driveway Sealing
                    </p>
                  </li>
                  <li className="flex items-center space-x-4">
                    <FaCheck className="text-5xl w-10 h-10 text-green-300" />
                    <p className="w-full text-2xl font-bold text-cyan-500 underline">
                      Residential & Commercial
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <p className=" text-center text-xl pt-5 pb-10">
              Call Us Today on <span className="font-bold">0434 114 479</span>{" "}
              or Email us on{" "}
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
        <Socials />
        <Footer />
      </div>
    </>
  );
};

export default AboutUs;
