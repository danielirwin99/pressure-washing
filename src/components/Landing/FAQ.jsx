import React from "react";
import AccordionLanding from "../UI/Accordion";

const FAQ = () => {
  return (
    <section id="faq" className="mt-5 sm:mt-10 px-3 bg-gray-50  w-full">
      <div className="flex flex-col w-full items-center py-4 sm:py-8 justify-center">
        <h2
          className="sub-headers text-center px-3  text-3xl lg:text-5xl mb-5 font-semibold text-gray-800 mt-7 tracking-wider "
          style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
        >
          Total Exterior Cleaning - FAQ
        </h2>
        <AccordionLanding />
      </div>
    </section>
  );
};

export default FAQ;
