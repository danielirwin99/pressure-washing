import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";

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
    <main className="bg-gradient-to-br from-cyan-500 to-cyan-500 h-screen !min-h-full">
      <Link
        to={"/"}
        className="fixed top-6 left-6 flex justify-center items-center space-x-1 hover:opacity-70 "
      >
        <BsArrowLeftShort className="text-white text-3xl" />
        <h1 className="text-white uppercase hidden sm:inline">Home</h1>
      </Link>
      <div className="flex flex-col justify-center mx-3 sm:mx-6 lg:mx-0 items-center">
        <h1 className="text-3xl md:text-5xl font-bold py-2 text-white mt-10 text-shadow text-center">
          Get A Fast Quote
        </h1>
        <h2 className="text-white text-lg md:font-semibold text-shadow my-2 md:my-5 text-center">
          We Will Review Your Request and Reach Out to You As Soon As Possible!
        </h2>
        <div className="bg-white flex w-full lg:w-3/5  rounded-lg">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded w-full py-5  px-5 md:px-10 template-shadow"
          >
            <h2 className="font-extrabold text-center text-3xl mb-5 from-gray-700 via-cyan-500 to-white bg-gradient-to-r bg-clip-text text-transparent sub-headers">
              Contact Form
            </h2>

            <p className="mt-8 mb-3">Full Name *</p>
            <input
              value={form.name}
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Full Name"
              className="border -ml-1 px-3 outline-none py-2 w-full"
            />
            <p className="mt-3 mb-3">Email *</p>
            <input
              value={form.email}
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Email"
              className="border -ml-1 px-3 outline-none py-2 w-full"
            />
            <p className="mt-3 mb-3">Phone# </p>
            <input
              name="number"
              value={form.number}
              onChange={handleChange}
              type="text"
              placeholder="Phone #:"
              className="border -ml-1 px-3 py-2 w-full outline-none"
            />
            <p className="mt-3">Message * </p>
            <textarea
              value={form.message}
              onChange={handleChange}
              name="message"
              className="border mt-5 w-full -ml-1 p-3 resize-none outline-none"
              placeholder="Provide us a brief description of the work..."
              id=""
              cols="30"
              rows="4"
            ></textarea>
            <div className="flex items-center mt-3 justify-center">
              <button
                className="contact-now !text-lg !px-10 w-full"
                type="submit"
                disabled={!form.email || !form.number}
              >
                {loading ? (
                  <p className="text-emerald-400">Sending...</p>
                ) : (
                  "Send"
                )}
              </button>
            </div>
          </form>
        </div>
        <h1 className="mt-6 sm:mt-8 text-2xl sm:text-3xl text-white text-center pb-5">
          For Immediate Assistance Call <br />{" "}
          <span className="font-bold text-shadow">0417 477 117</span>
        </h1>
      </div>
    </main>
  );
};

export default Contact;
