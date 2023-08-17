import React from "react";
import power from "../../assets/power.webp";
import { BsTelephone } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="my-14 max-w-[1600px] mx-auto">
      <div className="flex flex-wrap h-full mx-10">
        <div className="w-full flex flex-col justify-center lg:w-1/2 mb-10 text-center lg:text-start lg:mb-0 pr-0 lg:pr-14">
          <h3 className="text-center text-[aqua] tracking-[0.3em] font-bold text-md lg:text-lg ">
            ABOUT US
          </h3>
          <h2 className="text-center text-3xl lg:text-5xl font-bold text-gray-800 mt-7 tracking-wider">
            Full Service Exterior Cleaners You Can Trust
          </h2>
          <p className="mt-14 text-[1.2rem] leading-loose">
            Irwin Pressure Washing provides a brilliant finish to your exterior
            surfaces.
          </p>
          <p className="mt-5 lg:mt-0 text-[1.2rem]  leading-loose">
            We pride ourselves on our ability to provide outstanding, reliable
            and friendly service at affordable prices. We are available
            throughout Sydney.{" "}
          </p>
          <div className="quote-now mt-14 mx-auto">
            <h4 className="font-semibold mb-1 text-lg tracking-wide">
              Call Now For Your Free Quote
            </h4>
            <div className="flex items-center justify-center">
              <div className="flex justify-center items-center space-x-3 ">
                <BsTelephone />
                <p className="text-center font-bold tracking-widest">
                  0434448854
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[500px]">
          <figure className="h-full">
            <img
              src={power}
              alt=""
              className="w-full h-full rounded-2xl object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;
