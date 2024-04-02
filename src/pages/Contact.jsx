import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        // Service key
        "service_b7plgjl",
        // Template key
        "template_ogjfzjm",
        {
          // Who is sending the email
          from_name: form.name,
          // Your Name
          to_name: "Total Exterior Cleaning",
          // Sender email
          from_email: form.email,
          // Your email
          to_email: "admin@totalexteriorco.com",
          // Sender Message
          message: form.message,
          // Sender Number
          from_number: form.number,
        },
        // Account Public key
        "CbDkdqAKMVZVWUS_p"
      )
      .then(
        () => {
          setLoading(false);
          alert(
            "Thank you for your email. We will get back to you at our earliest convenience"
          );

          // Resetting the form
          setForm({
            name: "",
            email: "",
            message: "",
            number: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <>
      <div className="border-b-2">
        <Navbar />
      </div>
      <main className="w-full">
        <div className="space-y-6 p-[7%] lg:p-[5%] ">
          <h1 className="text-4xl uppercase text-start font-bold">Contact</h1>
          <p className="tracking-wide leading-6">
            If you have questions, comments or need more information about our
            pressure cleaning services in Sydney, please feel free to drop us an
            email anytime. We’ll get back to you as soon as possible.
          </p>
          <div>
            <h3 className="text-cyan-500 font-semibold py-1">Phone :</h3>
            <a href="tel:0417477117" className="hover:underline  ">
              0434 114 479
            </a>
            <h3 className="text-cyan-500 font-semibold pt-4">Office Hours :</h3>
            <p>Monday To Friday 8am - 5pm</p>
            <h3 className="text-cyan-500 font-semibold pb-1 pt-4">Email :</h3>
            <a
              className="hover:underline "
              href="mailto:admin@totalexteriorco.com"
            >
              admin@totalexteriorco.com
            </a>
          </div>
          <form
            className="pt-8"
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded py-6 px-5 md:px-10 template-shadow"
          >
            <h2 className="uppercase font-bold text-3xl lg:mb-4">
              Contact Form
            </h2>
            <p className="my-4 text-sm italic">
              Whether you have a residential or commercial property, our
              services ensure that your serviced in the highest quality with the
              right equipment.
            </p>
            <input
              value={form.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Name*"
              className=" bg-gray-200 text-sm my-2 lg:text-base px-4 rounded-sm outline-none py-2 w-full"
            />
            <input
              value={form.email}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email*"
              className=" bg-gray-200 my-2 text-sm lg:text-base  px-4 rounded-sm outline-none py-2 w-full"
            />
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              type="text"
              placeholder="Phone #:"
              className=" bg-gray-200 my-2 text-sm lg:text-base px-4 py-2 rounded-sm w-full outline-none"
            />
            <textarea
              value={form.message}
              onChange={handleChange}
              name="message"
              className=" bg-gray-200 w-full text-sm lg:text-base my-2 rounded-sm p-4 resize-none outline-none"
              placeholder="Provide us with a brief description of the scope of work..."
              id=""
              cols="30"
              rows="8"
            ></textarea>
            <div className="flex items-center mt-3 justify-center">
              <button
                className="contact-now !rounded-sm !cursor-pointer  !text-lg !px-10 w-full"
                type="submit"
                disabled={!form.email || !form.number}
              >
                {loading ? <p className="text-cyan-500">Sending...</p> : "Send"}
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
    // Old Contact Us
    // <main className="bg-gradient-to-br overflow-y-hidden from-cyan-500 to-cyan-500 !h-screen !min-h-full">
    //   <Link
    //     to={"/"}
    //     className="fixed top-3 left-2 sm:top-6 sm:left-6 flex justify-center items-center space-x-1 hover:opacity-70 "
    //   >
    //     <BsArrowLeftShort className="text-white text-3xl" />
    //     <h1 className="text-white uppercase hidden sm:inline">Home</h1>
    //   </Link>
    //   <div className="flex flex-col justify-center mx-3 sm:mx-6 lg:mx-0 items-center">
    //     <h1 className="text-3xl lg:text-4xl font-bold py-2 text-white pt-10  text-shadow text-center">
    //       Get A Fast Quote
    //     </h1>
    //     <h2 className="text-white text-sm sm:text-lg md:font-semibold text-shadow my-2 md:my-5 text-center">
    //       We Will Review Your Request and Reach Out to You As Soon As Possible!
    //     </h2>
    //     <div className="bg-white flex w-full lg:w-3/5  rounded-lg">
    //       <form
    //         ref={formRef}
    //         onSubmit={handleSubmit}
    //         className="rounded w-full py-5  px-5 md:px-10 template-shadow"
    //       >
    //         <h2 className="font-extrabold text-center text-2xl  mb-5 from-gray-700 via-cyan-500 to-white bg-gradient-to-r bg-clip-text text-transparent sub-headers">
    //           Contact Form
    //         </h2>
    //         <div className="flex w-full items-center space-x-2">
    //           <div className="w-1/2">
    //             <p className="text-sm mb-3">Name *</p>
    //             <input
    //               value={form.name}
    //               onChange={handleChange}
    //               type="text"
    //               name="name"
    //               placeholder="Name"
    //               className="border text-sm  -ml-1 px-3 outline-none py-2 w-full"
    //             />
    //           </div>
    //           <div className="w-1/2">
    //             <p className="text-sm mb-3">Phone#: </p>
    //             <input
    //               value={form.number}
    //               onChange={handleChange}
    //               type="text"
    //               name="number"
    //               placeholder="Phone"
    //               className="border text-sm  px-3 outline-none py-2 w-full"
    //             />
    //           </div>
    //         </div>
    //         <p className="mt-3 text-sm  mb-3">Email: * </p>
    //         <input
    //           name="email"
    //           value={form.email}
    //           onChange={handleChange}
    //           type="email"
    //           placeholder="jane@example.com"
    //           className="border -ml-1 text-sm  px-3 py-2 w-full outline-none"
    //         />
    //         <p className="mt-3 text-sm ">Message * </p>
    //         <textarea
    //           value={form.message}
    //           onChange={handleChange}
    //           name="message"
    //           className="border mt-3 sm:mt-5 w-full text-sm  -ml-1 p-3 resize-none outline-none"
    //           placeholder="Provide us a brief description of the work..."
    //           id=""
    //           cols="30"
    //           rows="4"
    //         ></textarea>
    //         <div className="flex items-center  mt-3 justify-center">
    //           <button
    //             className="contact-now !text-lg !px-10 w-full"
    //             type="submit"
    //             disabled={!form.email || !form.number}
    //           >
    //             {loading ? (
    //               <p className="text-emerald-400">Sending...</p>
    //             ) : (
    //               "Send"
    //             )}
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //     <h1 className="mt-6 sm:mt-8 text-xl sm:text-2xl text-white text-center pb-5">
    //       For Immediate Assistance Call <br />{" "}
    //       <span className="font-bold text-shadow">
    //         0417&nbsp; 477 &nbsp; 117
    //       </span>
    //     </h1>
    //   </div>
    // </main>
  );
};

export default Contact;
