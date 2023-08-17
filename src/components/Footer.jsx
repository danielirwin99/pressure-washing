import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#004358] flex flex-col justify-center items-center pt-9 md:pl-0 ">
      <div className="flex items-center pb-10 max-w-5xl px-5">
        {/* <a
          href="#"
          className="flex items-center cursor-pointer space-x-4 mr-10"
        >
          <figure className="h-[80px]">
            <img
              className="w-full h-full rounded-full  "
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/Shamrock.svg"
              alt="Our Logo"
            />
          </figure>
        </a> */}
        <div className="grid grid-cols-3">
          <ul className="flex flex-col ">
            <p className="text-white font-bold">QUICK LINKS</p>
            <a href="#" className="footerLinks">
              Home
            </a>
            <a href="#about" className="footerLinks">
              About
            </a>
            <a href="#services" className="footerLinks">
              Services
            </a>
            <a href="#photos" className="footerLinks">
              Before and Afters
            </a>
          </ul>
          <div className="flex flex-col">
            <a className="footerLinks">Reviews</a>
            <a className="footerLinks">Refer a friend</a>
            <a className="footerLinks">Profile</a>
          </div>
          <div className="flex flex-col">
            <p className="text-white font-bold">CONTACT US</p>
            <p className="text-white space-y-1 py-4">
              We Cater South Sydney Wide Services <br /> Company based in in
              Sydney NSW
            </p>
            <p className="text-white space-y-1 py-4">
              Phone : <span>041448833</span>
            </p>
            <a
              href="mailto:email@sample.com"
              className="text-white space-y-1 py-4"
            >
              Email: irwin@powerwashings.com.au
            </a>
            <p className="text-white space-y-1 py-4">ABN: 42 444 999 313</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-full py-5">
        <h2 className="mt-6 text-center ">
          Copyright &copy; 2023 Irwin Washing. All Rights Reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
