import React from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Categories = ({ toy }) => {
  const { toyName, pictureURL, rating, availableQuantity, price, toyId } = toy;

  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div
        className="w-11/12 mx-auto bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 
                      rounded-3xl shadow-2xl hover:shadow-3xl 
                      transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
      >
        {/* Image */}
        <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-t-3xl overflow-hidden">
          <img
            src={pictureURL}
            alt={toyName}
            className="w-full h-full object-fit rounded-t-3xl animate-bounce-slow"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
            <h2 className="text-white text-xl font-bold">{toyName}</h2>
          </div>
        </div>

        {/* Info Section */}
        <div className="p-4 space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex justify-center items-center gap-2 bg-yellow-400 px-4 py-2 rounded-full shadow-md animate-pulse">
              <FaRegStarHalfStroke className="text-green-600 text-lg" />
              <p className="font-semibold merriweather">{rating}</p>
            </div>

            <div className="bg-green-500 px-4 py-2 rounded-full shadow-md">
              <p className="font-semibold merriweather text-white text-sm">
                Qty: {availableQuantity}
              </p>
            </div>
          </div>

          <p className="text-red-600 font-bold text-xl md:text-2xl lobster animate-bounce">
            Price: ${price}
          </p>

          <Link
            to={`/toyDetails/${toyId}`}
            className="w-full block text-center py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                       rounded-full text-white font-bold shadow-lg hover:shadow-2xl hover:scale-105 
                       transition-all duration-300 text-lg md:text-xl"
          >
            View More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
