import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Error = () => {
  return (
    <div className="h-screen ">
      <Navbar />
      <div className="h-full flex flex-col items-center justify-center text-center gap-y-14 -mt-14 w-1/2 mx-auto">
        <h1 className="font-bold text-5xl tracking-wider">
          There was an error with the page you were accessing...
        </h1>
        <h2 className="font-semibold text-3xl">Head back to the home page?</h2>
        <Link to={"/"}>
          <button
            type="button"
            class="template-shadow text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-2xl px-7 py-2.5 text-center mr-2 mb-2"
          >
            BACK HOME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
