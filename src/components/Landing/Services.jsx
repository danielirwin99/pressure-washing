import React from "react";
import { BsHouseDoor, BsArrowRight } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services" className="mt-24 mx-10">
      <h3 className="text-center text-[aqua] tracking-[0.3em] font-semibold text-md lg:text-lg ">
        OUR SERVICES
      </h3>
      <h2 className="text-center text-3xl lg:text-5xl font-bold text-gray-800 mt-7 tracking-wider">
        What We Can Do
      </h2>
      <p className="mt-4 text-[1.2rem] font-normal leading-loose text-center">
        Some of our Sydney Pressure Cleaning Services Include:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-10">
        <div className="services-tabs">
          <BsHouseDoor className="text-4xl" />
          <h2 className="services-header">Driveway Cleaning</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>

        <div className="services-tabs">
          <BsHouseDoor className="text-4xl" />
          <h2 className="services-header">Driveway Sealing</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="">Exterior Cleaning</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>
        <div className="services-tabs">
          <BsHouseDoor className="text-4xl" />
          <h2 className="services-header">Garden Maintenance</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>
        <div className="services-tabs">
          <BsHouseDoor className="text-4xl" />
          <h2 className="services-header">General Pressure Cleaning</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>
        <div className="services-tabs">
          <BsHouseDoor className="text-4xl" />
          <h2 className="services-header">Other Exterior Cleaning</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>
        <div className="services-tabs ">
          <BsHouseDoor className="text-4xl" />
          <h2 className="services-header">Hedge Trimming</h2>
          <a
            className="flex justify-center items-center services-quote"
            href="#quotes"
          >
            <p className="">Get a Quote</p>
            <BsArrowRight className="ml-2 text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
