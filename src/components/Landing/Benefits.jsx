import React from "react";
import { FaCheck } from "react-icons/fa";

const Benefits = () => {
  return (
    <section
      id="benefits"
      className="bg-[#004358] flex justify-center gradient "
    >
      <div className="flex flex-col w-full justify-center max-w-[1700px] px-6 lg:px-16 pt-10 pb-5 ">
        {/* <h3 className="text-[aqua] tracking-[0.3em] font-semibold text-lg ">
          GET A FREE QUOTE TODAY
        </h3> */}
        <h2
          className="text-2xl font-extrabold  mt-1 tracking-wider mb-6 text-cyan-300 sub-headers"
          style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
        >
          Benefits of Pressuring Cleaning:
        </h2>
        <div className="space-y-6 text-white pl-1">
          <div className="flex items-center space-x-4">
            <FaCheck className="text-5xl w-8 h-8 text-green-300" />
            <p className="w-full lg:text-xl">
              <span className="font-extrabold text-emerald-400 underline">
                {" "}
                Prevent Costly Repairs
              </span>{" "}
              - Pressure washing allows you to see and fix small repairs before
              they turn into a huge problem.{" "}
              <p className="hidden lg:inline">
                Mould, bird droppings, algae and dirt can actually wear away at
                your building or structure. Having routine pressure cleaning in
                Sydney can help keep your home repair costs low.{" "}
              </p>{" "}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaCheck className="text-5xl w-8 h-8 text-green-300" />
            <p className="w-full lg:text-xl">
              <span className="font-extrabold  text-emerald-400 underline">
                {" "}
                Enhanced Property Value{" "}
              </span>{" "}
              – Regular power washing not only improves the aesthetic appeal of
              your property but also contributes to its overall value.{" "}
              <p className="hidden lg:inline">
                maintaining a clean and well-kept exterior, you're increasing
                curb appeal, which can have a positive impact on potential
                buyers and appraisers, should you decide to sell your property.{" "}
              </p>{" "}
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaCheck className="text-5xl w-8 h-8 text-green-300" />
            <p className="lg:text-xl w-full">
              <span className="font-extrabold text-emerald-400 underline">
                {" "}
                Health and Safety
              </span>{" "}
              - Mold, mildew, algae, and other contaminants can pose health
              risks to you and your family.{" "}
              <p className="hidden lg:inline">
                Power washing eliminates these hazards, creating a healthier
                environment for everyone.{" "}
              </p>
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <FaCheck className="text-5xl w-8 h-8 text-green-300" />
            <p className="w-full lg:text-xl">
              <span className="font-extrabold  text-emerald-400 underline">
                {" "}
                Saves Time
              </span>{" "}
              - You're busy, and manually cleaning areas can quickly eat up any
              excess time you or your staff may have.{" "}
              <p className="hidden  lg:inline">
                {" "}
                Pressure cleaning is very fast and efficient, and we'll work to
                complete the project while working around your schedule to save
                you even more time.
              </p>
            </p>
          </div>
        </div>
        <p className="py-5 text-center mt-2 text-cyan-300 text-lg font-extrabold tracking-wide">
          Get in touch with Total Exterior Cleaning today!
        </p>
      </div>
    </section>
  );
};

export default Benefits;
