import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BiCheck } from "react-icons/bi";
import { about, service1, service6 } from "../../assets";

const About = () => {
  return (
    <section id="about" className="my-14 max-w-[1700px] mx-auto">
      <div className="flex flex-wrap h-full mx-5 lg:mx-10">
        <div className="w-full flex flex-col justify-center xl:w-1/2 mb-10 text-center lg:text-start xl:mb-0 pr-0 lg:pr-14">
          <h3 className="text-center from-gray-700 to-cyan-400 bg-gradient-to-r bg-clip-text text-transparent tracking-[0.3em] font-bold text-md lg:text-lg ">
            ABOUT US
          </h3>
          <h2
            className="text-center text-3xl lg:text-5xl font-bold text-gray-800 mt-7 tracking-wider"
            style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
          >
            Full Service Exterior Cleaners You Can Trust
          </h2>
          <ul className="space-y-2">
            <li className="mt-10 flex items-start space-x-3">
              <BiCheck className="h-9 w-9 text-cyan-500" />
              <p className=" text-start md:text-xl w-full leading-loose">
                Total Exterior Cleaning provides a brilliant finish to your
                exterior surfaces.
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <BiCheck className="h-9 w-9 text-cyan-500" />
              <p className="w-full text-start md:text-xl  leading-loose">
                Environmentally friendly cleaning methods
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <BiCheck className="h-9 w-9 text-cyan-500" />
              <p className="w-full text-start md:text-xl  leading-loose">
                Family Owned and Operated
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <BiCheck className="h-9 w-9 text-cyan-500" />
              <p className="w-full text-start md:text-xl  leading-loose">
                Reliable and friendly service at affordable prices.
              </p>
            </li>
            <li className="flex items-center space-x-3">
              <BiCheck className="h-9 w-9 text-cyan-500" />
              <p className="w-full text-start md:text-xl  leading-loose">
                Servicing All Sydney and Illawarra Areas
              </p>
            </li>
          </ul>
          <div className="quote-now mt-6 md:mt-10 mx-auto template-shadow">
            <h4 className="font-semibold mb-1 text-md md:text-lg tracking-wide">
              Call Now For Your Free Quote
            </h4>
            <div className="flex items-center justify-center">
              <a
                href="tel:0417477117"
                className="flex justify-center items-center space-x-3 "
              >
                <BsTelephone />
                <p className="text-center ty font-bold tracking-widest">
                  0417 477 117
                </p>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-1/2 h-[300px] md:h-[500px] xl:h-auto template-shadow rounded-md ">
          <img
            src={about}
            alt=""
            className="w-full h-full rounded-md object-cover xl:object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
