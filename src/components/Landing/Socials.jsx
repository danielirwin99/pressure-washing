import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Socials = () => {
  return (
    <section id="socials" className="my-10">
      <div className="flex flex-col justify-center items-center">
        <h2
          className="text-center text-3xl md:text-4xl font-bold text-gray-800 tracking-wider sub-headers"
          style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
        >
          Follow For More ! 
        </h2>
        <div className="mt-8 flex space-x-8 sm:space-x-10 justify-center items-center">
          <a
            href="https://www.google.com/search?q=total+exterior+cleaning&rlz=1C1CHBF_en-GBAU937AU937&oq=total+exterior+cleaning&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDwyBggCEEUYPDIGCAMQRRg80gEINDAzMWowajeoAgCwAgA&sourceid=chrome&ie=UTF-8"
            className="w-11 hover:scale-110 transition duration-100 ease-in-out"
          >
            <FcGoogle className="h-full w-full " />
          </a>
          <a
            className="w-8 sm:w-10 hover:scale-110 transition duration-100 ease-in-out"
            href="https://www.instagram.com/totalexteriorcleaning_/"
          >
            <BsInstagram className="h-full w-full  text-rose-700" />
          </a>
          <a
            className="w-8 sm:w-10 hover:scale-110 transition duration-100 ease-in-out"
            href="https://www.facebook.com/profile.php?id=61550873473201"
          >
            <BsFacebook className="h-full w-full  text-blue-800" />
          </a>
          <a
            className="w-10 sm:w-12 hover:scale-110 transition duration-100 ease-in-out"
            href="https://www.youtube.com/channel/UCsgfjljDcBb-LcDYvHt-D3w"
          >
            <BsYoutube className="h-full w-full text-red-700" />
          </a>
          <a
            className="w-8 sm:w-10 hover:scale-110 transition duration-100 ease-in-out"
            href="https://www.tiktok.com/@totalexteriorco"
          >
            <FaTiktok className="h-full w-full " />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Socials;
