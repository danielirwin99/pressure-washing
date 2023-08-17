import React from "react";

const Benefits = () => {
  return (
    <section id="benefits" className="bg-gray-200 ">
      <div className="flex flex-col w-full justify-center px-10 lg:px-20 py-20 mt-10">
        {/* <h3 className="text-[aqua] tracking-[0.3em] font-semibold text-lg ">
          GET A FREE QUOTE TODAY
        </h3> */}
        <h2 className="text-3xl font-bold  mt-1 tracking-wider mb-4 text-blue-500">
          Benefits of Pressuring Cleaning
        </h2>
        <div className="space-y-6">
          <p>
            1.{" "}
            <span className="font-bold italic text-red-800 underline">
              {" "}
              Prevent Costly Repairs
            </span>{" "}
            - Pressure cleaning allows you to see and fix small repairs before
            they turn into a huge problem.{" "}
            <span className="hidden lg:inline">
              Mould, bird droppings, algae and dirt can actually wear away at
              your building or structure. Having routine pressure cleaning in
              Sydney can help keep your repair costs low.{" "}
            </span>{" "}
          </p>
          <p>
            2.{" "}
            <span className="font-bold italic text-red-800 underline">
              {" "}
              Enhanced Property Value{" "}
            </span>{" "}
            – Regular power washing not only improves the aesthetic appeal of
            your property but also contributes to its overall value.{" "}
            <span className="hidden lg:inline">
              maintaining a clean and well-kept exterior, you're increasing curb
              appeal, which can have a positive impact on potential buyers and
              appraisers, should you decide to sell your property.{" "}
            </span>{" "}
          </p>
          <p>
            3.{" "}
            <span className="font-bold italic text-red-800 underline">
              {" "}
              Health and Safety
            </span>{" "}
            - Mold, mildew, algae, and other contaminants can pose health risks
            to you and your family.{" "}
            <span className="hidden lg:inline">
              Power washing eliminates these hazards, creating a healthier
              environment for everyone.{" "}
            </span>
          </p>
          <p>
            4.{" "}
            <span className="font-bold italic text-red-800 underline">
              {" "}
              Saves Time
            </span>{" "}
            - You’re busy, and manually cleaning areas can quickly eat up any
            excess time you or your staff may have. Pressure cleaning is very
            fast and efficient, and we’ll work to complete the project while
            working around your schedule to save you even more time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
