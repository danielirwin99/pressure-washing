import React from "react";
import Footer from "../components/Footer";
import NavbarServices from "../components/NavbarServices";
import { pressurewashing } from "../assets/index";
import { Link } from "react-router-dom";

const PressureWashing = () => {
  return (
    <>
      {/* Navbar */}
      <NavbarServices />
      <main className="relative lg:h-[80vh]">
        {/* Content */}
        <div>
          <figure className="w-full absolute -z-10">
            <img
              className="w-full object-cover  h-[500px] md:h-[800px] brightness-50"
              src={pressurewashing}
              alt="Background Image"
            />
          </figure>
          <div className="pt-[200px] md:pt-[300px] flex flex-col pl-12 md:pl-32 space-y-14">
            <h1 className="text-white uppercase text-4xl md:text-6xl font-bold text-shadow">
              Pressure Washing
            </h1>
            <h2 className="uppercase text-3xl text-white font-semibold text-shadow">
              Executed with precision
            </h2>
            <Link to={"/contact-us"} className="">
              <button className="contact-now z-50 md:!text-xl ">
                Claim Your Free Quote
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div className="mt-44">
        <div className="mx-24 space-y-5">
          <h1 className="text-lg font-bold">Why Choose Pressure Washing?</h1>
          <p>
            Total Exterior Cleaning provides professional total exterior
            cleaning services for both residential and commercial properties
            throughout Sydney. Our high-pressure cleaning methods have the
            capacity to refresh various surfaces such as driveways, pavers,
            patios, concrete floors, and pathways.
          </p>
          <p>
            When it comes to your property, Total Exterior Cleaning exclusively
            uses the latest industrial-grade equipment and possesses extensive
            knowledge of how and where high-pressure cleaning can be applied to
            enhance your home's external surfaces.
          </p>
          <p>
            If you have concerns about specific surfaces and the potential risks
            of high pressure, we specialize in and offer low-pressure
            techniques, particularly suitable for more delicate surfaces
            affected by mold and mildew.
          </p>
          <p>
            {" "}
            Dirt, mold, mildew, and stains not only alter the appearance of your
            outdoor areas but also create hazardous and slippery conditions.
            Through the use of high-pressure cleaning, we can eliminate these
            dangers and restore the vibrant colors of your outdoor spaces.{" "}
          </p>

          <p>
            Contact us today to schedule your free total exterior cleaning
            quote. We'll visit your property, provide a transparent,
            no-obligation estimate, and breathe new life into your outdoor
            areas.
          </p>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default PressureWashing;
