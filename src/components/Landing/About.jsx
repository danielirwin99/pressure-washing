import React from "react";
import { BsTelephone } from "react-icons/bs";
import { about, me1, me2 } from "../../assets";

const About = () => {
  return (
    <section data-aos="fade-right"
    data-aos-easing="ease-in-out" id="about" className="my-14 max-w-[1700px] mx-auto">
      <div className="flex flex-wrap h-full mx-5 lg:mx-10">
        <div className="w-full flex flex-col justify-center xl:w-3/5 mb-10 text-center lg:text-start xl:mb-0 pr-0 lg:pr-14">
          <h1 className="text-center uppercase from-gray-700 to-cyan-400 bg-gradient-to-r bg-clip-text text-transparent tracking-[0.3em] font-bold text-md lg:text-lg ">
            Total Exterior Cleaning
          </h1>
          <h2
            className="text-center text-3xl lg:text-5xl font-bold text-gray-800 mt-5 tracking-wider sub-headers"
            style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
          >
            Why Choose Total Exterior Cleaning?
          </h2>
          <ul className="space-y-2">
            <li className=" mt-10 items-center space-y-4">
              <p className="w-full text-center sm:text-start md:text-xl leading-loose">
                Total Exterior Cleaning is based in the Sutherland Shire Region,
                offering a distinctive touch as a{" "}
                <span className="font-bold">
                  family owned & operated local business.
                </span>{" "}
                With a commitment to high quality work, we employ
                <span className="font-bold">
                  {" "}
                  up-to-date cutting-edge equipment,{" "}
                </span>
                ensuring a brilliant finish to all exterior surfaces.
              </p>
              <p className="w-full text-center sm:text-start md:text-xl leading-loose">
                Our professional team takes pride in providing reliable and
                friendly service, all while maintaining affordability. From
                residential spaces to commercial establishments, we cover it
                all, making us the go-to choice for those seeking professional
                pressure exterior cleaning services in the region.
              </p>
              <p className="w-full font-bold text-center sm:text-start text-lg md:text-xl leading-loose">
                Are you looking for High Pressure Cleaning services in your
                local area? &nbsp; <br />
                Hit the button below and get started!
              </p>
            </li>
          </ul>
          <a
            className="contact-now !px-10 !mt-6 sm:!mt-20 md:mx-auto template-shadow-subtle"
            href="tel:0417477117"
          >
            <h3 className="font-semibold mb-1 text-shadow-subtle  text-md md:text-lg tracking-wide">
              Call Us for a Free Quote
            </h3>
            <div className="flex items-center justify-center">
              <div className="flex justify-center items-center space-x-3 ">
                <BsTelephone />
                <p className="text-center text-shadow-subtle font-bold tracking-widest">
                  0417 477 117
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full xl:w-2/5 contrast-[1.10] h-[400px] md:h-[500px] xl:h-[750px] template-shadow rounded-md">
          <img
            src={me1}
            alt=""
            className="w-full h-full rounded-md object-cover xl:object-fill"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
