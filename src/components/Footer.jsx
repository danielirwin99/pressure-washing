import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#004358] flex flex-col justify-center items-center pt-14 md:pl-0 ">
      <div className="flex flex-col lg:items-center pb-14 w-full lg:max-w-5xl px-3 md:px-7">
        <div className="flex-col items-center md:hidden mb-7  mx-auto flex justify-center">
          <Link className=" max-w-xs md:w-auto" to={"/areas-of-service"}>
            <button className="contact-now !rounded-sm w-full md:w-auto underline underline-offset-4 !capitalize z-50 md:!text-2xl !text-base !px-8 !py-3 ">
              Areas Serviced
            </button>
          </Link>
          <div className="w-[330px] mt-8 bg-cyan-400 h-[4px]"></div>
        </div>

        {/* <a
          href="#"
          className="flex items-center cursor-pointer space-x-4 mr-10"
        >
          <figure className="h-[80px]">
            <img
              className="w-full h-full rounded-full  "
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Shamrock.svg"
              alt="Our Logo"
            />
          </figure>
        </a> */}
        <div className="grid grid-cols-1 px-5 lg:px-0 md:grid-cols-2   lg:grid-cols-3 lg:text-md">
          <div className="flex flex-col  md:text-sm lg:text-md ">
            <p className="text-white text-shadow text-xl font-extrabold pb-5 sm:pb-0">
              QUICK LINKS
            </p>
            <Link to={"/"} className="footerLinks">
              Home
            </Link>
            <Link to={"/about-us"} className="footerLinks">
              About Us
            </Link>
            <Link to={"/gallery"} className="footerLinks">
              Gallery
            </Link>
            <Link to={"/contact-us"} className="footerLinks">
              Contact Us
            </Link>
            <Link to={"/areas-of-service"} className="footerLinks">
              Areas of Service
            </Link>
          </div>
          <div className="w-[330px] mt-8 bg-cyan-400 h-[4px] sm:hidden" />
          <div className="lg:flex flex-col my-10 md:my-0 lg:mt-0 text-xs md:text-sm lg:text-md">
            <div className="flex flex-col text-xs md:text-sm ">
              <p className="text-white text-xl text-shadow font-extrabold pb-5 sm:pb-0">
                SERVICES
              </p>
              <a href="/pressure-wash" className="footerLinks text-sm">
                Pressure Washing
              </a>
              <a href="/sealing" className="footerLinks text-sm">
                Driveway Sealing
              </a>
              <a href="/window-cleaning" className="footerLinks text-sm">
                Window Cleaning
              </a>
              <a href="/gutter-cleaning" className="footerLinks text-sm ">
                Gutter Cleaning
              </a>
            </div>
          </div>
          <div className="w-[330px] mb-7 bg-cyan-400 h-[4px] sm:hidden" />
          <div className="flex flex-col mt-5 lg:mt-0 md:text-sm lg:text-md ">
            <p className="text-white text-xl font-extrabold text-shadow pb-5 sm:pb-0">
              CONTACT TOTAL EXTERIOR CLEANING
            </p>
            <p className="text-white text-sm space-y-1 py-4">
              We Cater All South Sydney & Illawarra Services <br /> Company
              based in Sydney NSW
            </p>
            <a
              href="tel:0417477117"
              className="text-white text-sm space-y-1 py-4"
            >
              Phone :{" "}
              <span className="hover:underline font-bold">0417 477 117</span>
            </a>
            <p className="text-white text-sm md:text-base  space-y-1 py-4">
              Email:{" "}
              <a
                className="hover:underline font-bold"
                href="mailto:admin@totalexteriorco.com"
              >
                admin@totalexteriorco.com
              </a>
            </p>
            <p className="text-white text-sm space-y-1 py-4">
              ABN: 94 421 597 028
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full py-6">
        <h2 className=" text-sm lg:text-md text-[#676767] font-semibold px-3 text-center ">
          Copyright &copy; {`${new Date().getFullYear()}`} Total Exterior
          Cleaning Pty Ltd. &nbsp; All Rights Reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
