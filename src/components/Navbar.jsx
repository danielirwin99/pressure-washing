import React from "react";
import { BsTelephone } from "react-icons/bs";
import Hamburger from "./UI/Hamburger";

const Navbar = () => {
  return (
    <nav className="static md:sticky top-0 z-[999] w-full bg-white py-4 px-4 lg:px-20 border-b-2 border-b-gray-200">
      <div className="flex justify-around items-center">
        <a className="flex items-center justify-center space-x-4" href="/">
          <img
            className="lg:h-14 lg:w-14 w-10 h-10"
            src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Shamrock.svg"
            alt="Logo"
          />
          <h1
            className="font-bold text-2xl text-gray-800"
            style={{ textShadow: "4px 4px 3px rgba(0,0,0,0.1)" }}
          >
            Total Exterior Cleaning
          </h1>
        </a>
        <ul className="ms-auto flex lg:space-x-10 items-center ">
          <li className="nav-item hidden lg:flex">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item hidden lg:flex">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#photos">
              Before and Afters
            </a>
          </li> */}
          <li className="nav-item hidden lg:flex">
            <a className="nav-link" href="#quotes">
              Contact
            </a>
          </li>
          <li className="nav-item hidden md:flex ">
            <a className="nav-link text-center flex flex-col">
              <div className="flex justify-center items-center space-x-4">
                <BsTelephone className="mr-3 " />
                0417 477 117
              </div>
              <p className="">Call now for a free quote</p>
            </a>
          </li>
          <li className="nav-item lg:hidden">
            <a className="nav-link">
              <Hamburger />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
