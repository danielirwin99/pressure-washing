import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PressureWashing = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Content */}
      <main className="my-5">
        <div>
          <h1>Pressure Washing</h1>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default PressureWashing;
