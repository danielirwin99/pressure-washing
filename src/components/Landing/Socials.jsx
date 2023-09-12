import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Socials = () => {
  return (
    <section id="socials" className="my-10">
      <div className="flex flex-col justify-center items-center">
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 tracking-wider sub-headers"
          style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
        >
          Check Us Out !
        </h2>
        <div className="mt-8 flex space-x-10 items-center">
          <a
            href="https://www.google.com"
            className="w-12 h-12 hover:scale-110 transition duration-100 ease-in-out"
          >
            <FcGoogle className="h-full w-full text-4xl" />
          </a>
          <a
            className="w-10 h-10 hover:scale-110 transition duration-100 ease-in-out"
            href="https://www.instagram.com/totalexteriorcleaning_/"
          >
            <BsInstagram className="h-full w-full text-4xl text-rose-700" />
          </a>
          <a
            className="w-10 h-10 hover:scale-110 transition duration-100 ease-in-out"
            href="https://www.facebook.com/profile.php?id=61550873473201"
          >
            <BsFacebook className="h-full w-full text-3xl text-blue-800" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
