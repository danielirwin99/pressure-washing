import React, { useRef, useState } from "react";
import { clean, logo } from "../../assets";
import emailjs from "@emailjs/browser";

const Quotes = () => {
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
    <section id="quotes" className=" w-full">
      <div className="flex flex-col w-full h-full items-center justify-center py-10 relative">
        <div className="absolute w-full h-full -z-10">
          <img
            src={clean}
            alt="Header Img"
            className="w-full h-full lg:object-fill object-cover brightness-[.43]"
          />
        </div>
        <div className="flex flex-wrap justify-around w-full">
          {/* Our Left Side of the Contact */}
          <div className="w-full flex flex-col justify-center items-center lg:w-2/5 mb-20 lg:mb-0 lg:pr-30">
            <h3 className="text-center text-cyan-300 tracking-widest font-semibold text-lg ">
              GET IN TOUCH TODAY
            </h3>
            <h2
              className="text-center text-6xl px-4 sm:px-0 lg:text-7xl font-bold text-white mt-7 tracking-wider sub-headers"
              style={{ textShadow: "2px 4px 3px rgba(0,0,0,0.2)" }}
            >
              Contact Us
            </h2>
            <img
              className="mt-9 h-52 w-80 brightness-125 drop-shadow-lg"
              src={logo}
              alt=""
            />
          </div>
          {/* Our Right Side of the Contact */}
          <div className="bg-white w-full lg:w-2/5 mx-3 md:mx-14 lg:mx-0 rounded-md">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded py-5 px-5 md:px-10 template-shadow"
            >
              <h2 className="font-semibold text-sm tracking-wide mb-5 text-cyan-500">
                ASK US FOR A FREE QUOTE
              </h2>
              <h2 className="font-extrabold text-4xl mb-5 from-gray-700 via-cyan-500 to-white bg-gradient-to-r bg-clip-text text-transparent sub-headers">
                Contact Form
              </h2>
              <p className="mb-3 text-sm italic">
                Whether you have a residential or commercial property, our
                services ensure that your property is immaculately rejuvenated,
                radiating with a newfound brilliance.
              </p>
              <p className="mt-8 mb-3">Name *</p>
              <input
                value={form.name}
                onChange={handleChange}
                type="text"
                name="name"
                placeholder="Name"
                className="border -ml-1 px-3 outline-none py-2 w-full"
              />
              <p className="mt-4 mb-3">Email *</p>
              <input
                value={form.email}
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
                className="border -ml-1 px-3 outline-none py-2 w-full"
              />
              <p className="mt-4 mb-3">Phone# </p>
              <input
                name="number"
                value={form.number}
                onChange={handleChange}
                type="text"
                placeholder="Phone #:"
                className="border -ml-1 px-3 py-2 w-full outline-none"
              />
              <p className="mt-4">Message * </p>
              <textarea
                value={form.message}
                onChange={handleChange}
                name="message"
                className="border mt-5 w-full -ml-1 p-3 resize-none outline-none"
                placeholder="Message..."
                id=""
                cols="30"
                rows="8"
              ></textarea>
              <div className="flex items-center mt-3 justify-center">
                <button
                  className="contact-now !text-lg !px-10 w-full"
                  type="submit"
                  disabled={!form.email || !form.number}
                >
                  {loading ? (
                    <p className="text-cyan-500">Sending...</p>
                  ) : (
                    "Send"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
