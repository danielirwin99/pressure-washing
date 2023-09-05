import React from "react";
import { BsHouseDoor, BsArrowRight } from "react-icons/bs";
import {
  service1,
  service2,
  service3,
  service4,
  service5,
  service6,
} from "../../assets";

const Services = () => {
  return (
    <section id="services" className="mt-16 md:mx-10">
      <h3 className="text-center from-gray-700 to-cyan-400 bg-gradient-to-r bg-clip-text text-transparent tracking-[0.3em] font-semibold text-md lg:text-lg ">
        OUR SERVICES
      </h3>
      <h2
        className="text-center text-3xl lg:text-5xl font-bold text-gray-800 mt-7 tracking-wider sub-headers"
        style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
      >
        What We Can Do
      </h2>
      <p className="mt-4 text-[1.2rem] font-normal leading-loose text-center">
        Some of our Exterior Cleaning Services Include:
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-3 w-full max-w-[1600px] mx-auto mt-5">
        <div className="services-tabs">
          <img
            src={service1}
            alt="service1"
            className="absolute rounded-sm -z-10 brightness-75 w-full h-full"
          />
          <BsHouseDoor className="text-white text-4xl  mr-1" />
          <h2 className="services-header">Driveway Cleaning</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="text-sm">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl " />
          </a>
        </div>
        <div className="services-tabs">
          <img
            src={service3}
            alt="service1"
            className="absolute rounded-sm -z-10 brightness-75 w-full h-full"
          />
          <BsHouseDoor className="text-white text-4xl mr-1" />
          <h2 className="services-header">Window Cleaning</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="text-sm">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>
        <div className="services-tabs ">
          <img
            src={service2}
            alt="service1"
            className="absolute rounded-sm -z-10 brightness-75 w-full h-full"
          />
          <BsHouseDoor className="text-white text-4xl  mr-1" />
          <h2 className="services-header">Driveway Sealing</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="text-sm">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>

        <div className="services-tabs">
          <img
            src={service4}
            alt="service1"
            className="absolute rounded-sm -z-10 brightness-75  w-full h-full"
          />
          <BsHouseDoor className="text-white text-4xl mr-1" />
          <h2 className="services-header ">General Pressure Cleaning</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="text-sm">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>
        <div className="services-tabs ">
          <img
            src={service6}
            alt="service1"
            className="absolute rounded-sm -z-10 brightness-75  w-full h-full"
          />
          <BsHouseDoor className="text-white text-4xl" />
          <h2 className="services-header">Gutter Maintenance</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="text-sm">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>
        <div className="services-tabs">
          <img
            src={service5}
            alt="service1"
            className="absolute rounded-sm -z-10 brightness-75  w-full h-full"
          />
          <BsHouseDoor className="text-white text-4xl" />
          <h2 className="services-header md:ml-0">Exterior Cleaning</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="text-sm">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
