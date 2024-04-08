import React from "react";
import Footer from "../components/Footer";
import Testimonials from "../components/Landing/Testimonials";
import Navbar from "../components/Navbar";
import GalleryPhotos from "../components/GalleryPhotos";
import Socials from "../components/Landing/Socials";

const Gallery = () => {
  return (
    <>
      {/* Navbar */}

      <Navbar />
      <main className="my-5 mx-5 lg:mx-30">
        {" "}
        <h1
          className="text-center text-3xl uppercase lg:text-5xl font-bold text-gray-800 mt-7 mb-10 tracking-wider sub-headers"
          style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.1)" }}
        >
          Our Work
        </h1>
        <h3 className="text-center from-gray-700 to-cyan-500 bg-gradient-to-r bg-clip-text text-transparent tracking-[0.15em] font-semibold text-md lg:text-lg ">
          Some Of Our Recent Work
        </h3>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-easing="ease-in-out"
          data-aos-duration="800"
        >
          <GalleryPhotos />
        </div>
      </main>
      <section className="my-28 ">
        <Socials />
      </section>

      <Testimonials />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Gallery;
