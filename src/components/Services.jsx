import React from "react";
import { BsHouseDoor, BsArrowRight } from "react-icons/bs";
import {
  service1,
  service2,
  service4,
  service5,
  service6,
  servicewindow,
} from "../assets";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-easing="ease-in-out"
      id="services"
      className="mt-5 sm:mt-24 max-w-[1700px] lg:mx-auto px-3 mx-5"
    >
      <h3 className="text-center from-gray-700 to-cyan-400 bg-gradient-to-r bg-clip-text text-transparent tracking-[0.3em] font-semibold text-md lg:text-lg ">
        OUR SERVICES
      </h3>
      <h2
        className="text-center text-3xl lg:text-5xl font-bold text-gray-800 mt-7 tracking-wider sub-headers"
        style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
      >
        What We Offer
      </h2>
      <p className="mt-4 text-[1.2rem] font-semibold leading-loose text-center">
        Some of our Exterior Cleaning Services Include:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full  sm:mx-auto mt-5">
        <div className="services-tabs !overflow-hidden ">
          <img
            src={service1}
            alt="service1"
            className="absolute hover:scale-[1.10] transition-transform duration-1000 rounded-sm contrast-[1.10] brightness-75 w-full h-full"
          />
          <div className="flex flex-col justify-center items-center z-10">
            <BsHouseDoor className="text-white text-4xl   mr-1" />
            <h2 className="services-header">Driveway Cleaning</h2>
            <Link
              className="flex justify-center items-center services-quote"
              to={"/contact-us"}
            >
              <p className="text-md text-shadow">Get a Quote</p>
              <BsArrowRight className="ml-2 text-xl " />
            </Link>
          </div>
        </div>
        <div className="services-tabs !overflow-hidden ">
          <img
            src={service5}
            alt="service1"
            className="absolute hover:scale-[1.10] transition-transform duration-1000 rounded-sm contrast-[1.10] brightness-75 w-full h-full"
          />
          <div className="flex flex-col justify-center items-center z-10">
            <BsHouseDoor className="text-white text-4xl   mr-1" />
            <h2 className="services-header">House Washing</h2>
            <Link
              className="flex justify-center items-center services-quote"
              to={"/contact-us"}
            >
              <p className="text-md text-shadow">Get a Quote</p>
              <BsArrowRight className="ml-2 text-xl " />
            </Link>
          </div>
        </div>
        <div className="services-tabs !overflow-hidden ">
          <img
            src={service4}
            alt="service1"
            className="absolute hover:scale-[1.10] transition-transform duration-1000 rounded-sm contrast-[1.10] brightness-75 w-full h-full"
          />
          <div className="flex flex-col justify-center items-center z-10">
            <BsHouseDoor className="text-white text-4xl   mr-1" />
            <h2 className="services-header">Pressure Cleaning</h2>
            <Link
              className="flex justify-center items-center services-quote"
              to={"/contact-us"}
            >
              <p className="text-md text-shadow">Get a Quote</p>
              <BsArrowRight className="ml-2 text-xl " />
            </Link>
          </div>
        </div>
        <div className="services-tabs !overflow-hidden ">
          <img
            src={service6}
            alt="service1"
            className="absolute hover:scale-[1.10] transition-transform duration-1000 rounded-sm contrast-[1.10] brightness-75 w-full h-full"
          />
          <div className="flex flex-col justify-center items-center z-10">
            <BsHouseDoor className="text-white text-4xl   mr-1" />
            <h2 className="services-header">Gutter Cleaning</h2>
            <Link
              className="flex justify-center items-center services-quote"
              to={"/contact-us"}
            >
              <p className="text-md text-shadow">Get a Quote</p>
              <BsArrowRight className="ml-2 text-xl " />
            </Link>
          </div>
        </div>
        <div className="services-tabs !overflow-hidden ">
          <img
            src={servicewindow}
            alt="service1"
            className="absolute hover:scale-[1.10] transition-transform duration-1000 rounded-sm contrast-[1.10] brightness-75 w-full h-full"
          />
          <div className="flex flex-col justify-center items-center z-10">
            <BsHouseDoor className="text-white text-4xl   mr-1" />
            <h2 className="services-header">Window Cleaning</h2>
            <Link
              className="flex justify-center items-center services-quote"
              to={"/contact-us"}
            >
              <p className="text-md text-shadow">Get a Quote</p>
              <BsArrowRight className="ml-2 text-xl " />
            </Link>
          </div>
        </div>
        <div className="services-tabs !overflow-hidden ">
          <img
            src={service2}
            alt="service1"
            className="absolute hover:scale-[1.10] transition-transform duration-1000 rounded-sm contrast-[1.10] brightness-75 w-full h-full"
          />
          <div className="flex flex-col justify-center items-center z-10">
            <BsHouseDoor className="text-white text-4xl   mr-1" />
            <h2 className="services-header">Concrete Sealing</h2>
            <Link
              className="flex justify-center items-center services-quote"
              to={"/contact-us"}
            >
              <p className="text-md text-shadow">Get a Quote</p>
              <BsArrowRight className="ml-2 text-xl " />
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Services;
