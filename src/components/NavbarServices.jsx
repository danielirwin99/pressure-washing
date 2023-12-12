import React from "react";
import { BsTelephone } from "react-icons/bs";
// import Hamburger from "./UI/Hamburger";
import BurgerBar from "./UI/BurgerBar";
import { logo } from "../assets";
import { Link } from "react-router-dom";
import Menu from "./UI/Menu";
import BurgerService from "./UI/BurgerService";

const NavbarServices = () => {
  return (
    <nav className="top-0 z-[999] w-full py-1 px-4 xl:px-20 lg:px-10 absolute ">
      <div className="flex justify-around items-center">
        <a className="flex items-center justify-center" href="/">
          <img className="h-24 w-40 brightness-150" src={logo} alt="Logo" />
        </a>
        <ul className="ms-auto flex lg:space-x-10 items-center ">
          <li className="nav-item hidden lg:flex">
            <a className="nav-link text-white" href="#about">
              About
            </a>
          </li>
          <li className="nav-item hidden lg:flex">
            <div className="nav-link cursor-pointer text-white">
              <Menu />
            </div>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#photos">
              Before and Afters
            </a>
          </li> */}
          <li className="nav-item hidden lg:flex pr-3">
            <Link className="nav-link text-white" to={"/contact-us"}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item hidden text-white md:flex pr-5">
            <a
              href="tel:0417477117"
              className="nav-link text-center  flex flex-col"
            >
              <div className="flex justify-center items-center text-sm lg:text-base">
                <BsTelephone className="mr-3" />
                <span className="font-bold text-lg">0417 477 117</span>
              </div>
              <p className="text-base lg:text-xl font-bold lg:font-normal capitalize">
                Call now for a free quote
              </p>
            </a>
          </li>
          <li className="nav-item lg:hidden lg:pl-5">
            <a className="nav-link bg-white">
              <BurgerService />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarServices;
