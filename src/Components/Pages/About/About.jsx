import React from "react";
import { FaRocket, FaHeart, FaSmile, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto py-20 space-y-20">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 animate-pulse">
          About Us
        </h1>
        <p className="text-lg md:text-xl text-gray-700 animate-fadeIn">
          Welcome to ToyLand! We bring joy, fun, and learning to every child.
        </p>
        <img
          src="https://i.ibb.co.com/Kz7xsRxG/colorful-toy-assortment-stockcake.webp"
          alt="colorful toys"
          className="w-full max-w-4xl mx-auto rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500 animate-bounce-slow"
        />
      </div>

      {/* Mission Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-pink-500 animate-bounce">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg animate-fadeIn">
            At ToyLand, we aim to inspire creativity, learning, and endless fun.
            We carefully select toys that bring happiness and encourage
            imagination for kids of all ages.
          </p>
        </div>
        <img
          src="https://i.ibb.co.com/23ZK6xzd/teddy-cute-animal-soft-toy-preview.jpg"
          alt="toy mission"
          className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 animate-bounce-slow"
        />
      </div>

      {/* Fun Facts Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {[
          {
            icon: FaRocket,
            number: "500+",
            title: "Toys Delivered",
            color: "text-pink-500",
          },
          {
            icon: FaHeart,
            number: "1000+",
            title: "Happy Kids",
            color: "text-purple-500",
          },
          {
            icon: FaSmile,
            number: "99%",
            title: "Customer Satisfaction",
            color: "text-blue-500",
          },
          {
            icon: FaUsers,
            number: "50+",
            title: "Team Members",
            color: "text-green-500",
          },
        ].map((fact, idx) => {
          const Icon = fact.icon;
          return (
            <div
              key={idx}
              className="p-6 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fadeIn"
            >
              <Icon className={`text-5xl mb-4 ${fact.color} animate-bounce`} />
              <h3 className="text-3xl font-bold text-gray-800">
                {fact.number}
              </h3>
              <p className="mt-2 font-semibold text-gray-600">{fact.title}</p>
            </div>
          );
        })}
      </div>

      {/* Story Section */}
      <div className="space-y-6 text-center">
        <h2 className="text-4xl font-bold text-purple-700 animate-pulse">
          Our Story
        </h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto animate-fadeIn">
          Started with a small team of toy enthusiasts, ToyLand has grown into a
          platform where joy meets creativity. We believe every child deserves
          the magic of play, and we are committed to delivering the best toys
          and experiences.
        </p>
        <img
          src="https://i.ibb.co.com/1fvHnBBm/child-playing-colorful-toy-blocks-kids-play-little-boy-building-tower-block-toys-sitting-dark-floor.webp"
          alt="kids playing"
          className="w-full max-w-4xl mx-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500 animate-bounce-slow"
        />
      </div>
    </div>
  );
};

export default About;
