import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const Tabs = () => {
  return (
    <section id="tabs" className="my-10">
      <div className="py-6 bg-cyan-500 w-full flex justify-around items-center px-1 md:px-0 ">
        <div className="flex items-center space-x-2 px-2">
          <AiOutlineCheckCircle className="text-2xl md:text-3x lg:text-4xl text-white" />
          <h4 className="font-bold text-xs md:text-md lg:text-xl text-white">
            High Quality Service
          </h4>
        </div>
        <div className="sm:flex items-center space-x-3 hidden ">
          <AiOutlineCheckCircle className="text-2xl md:text-3x lg:text-4xl text-white" />
          <h4 className="font-bold text-xs md:text-md lg:text-xl text-white">
            Fully Licensed
          </h4>
        </div>
        <div className="flex items-center space-x-3 text-white">
          <AiOutlineCheckCircle className="text-2xl md:text-3x lg:text-4xl text-white" />
          <h4 className="font-bold text-xs md:text-md lg:text-xl">
            $10M Public Liability
          </h4>
        </div>
        <div className="flex items-center space-x-3 text-white">
          <AiOutlineCheckCircle className="text-2xl md:text-3xl lg:text-4xl text-white" />
          <h4 className="font-bold text-xs md:text-md lg:text-xl">
            Family Business
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
