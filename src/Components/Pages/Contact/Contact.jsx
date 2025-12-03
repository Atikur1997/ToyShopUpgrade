import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-11/12 max-w-[1200px] mx-auto py-16 space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-5xl font-bold text-purple-700 animate-pulse">
          Get in Touch
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">
          We'd love to hear from you! Send us a message or find us at our
          location.
        </p>
      </div>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-11/12 mx-auto">
        <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 p-6 rounded-3xl shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-white text-center">
          <FaPhoneAlt className="text-4xl mb-4 animate-bounce" />
          <h3 className="text-xl font-bold mb-2">Phone</h3>
          <p>+880-1797-768858</p>
        </div>

        <div className="bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 p-6 rounded-3xl shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-white text-center">
          <FaEnvelope className="text-4xl mb-4 animate-bounce" />
          <h3 className="text-xl font-bold mb-2">Email</h3>
          <p>nishanrahman@gmail.com</p>
        </div>

        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-6 rounded-3xl shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 text-white text-center">
          <FaMapMarkerAlt className="text-4xl mb-4 animate-bounce" />
          <h3 className="text-xl font-bold mb-2">Location</h3>
          <p>FunWorld ,Uttara-1213</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-11/12 mx-auto bg-white p-8 rounded-3xl shadow-2xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-purple-700">
          Send Us a Message
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full rounded-lg"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full rounded-lg md:col-span-2"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full rounded-lg md:col-span-2 h-32"
          />
          <button className="md:col-span-2 btn w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold hover:scale-105 transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
