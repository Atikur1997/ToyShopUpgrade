import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Link } from "react-router";
import {
  FaShippingFast,
  FaGift,
  FaHeadset,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import Categories from "./Categories/Categories";

const promiseCard = fetch("toyData.json").then((res) => res.json());

const Home = () => {
  const singleToy = use(promiseCard);
  const limitedToys = singleToy.slice(0, 8);

  return (
    <>
      {/* Hero Swiper */}
      <div className="w-11/12 mx-auto py-10 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-3xl mt-3">
        <div className="w-11/12 mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.2}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              480: { slidesPerView: 1.2 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="w-11/12 mx-auto mySwiper rounded-2xl overflow-hidden"
          >
            {limitedToys.map((toy) => (
              <SwiperSlide
                key={toy.toyId}
                className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500"
              >
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-contain rounded-2xl animate-bounce-slow"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Popular Toys */}
      <div className="w-11/12 mx-auto py-10 px-3 bg-gradient-to-r from-pink-50 via-purple-50 to-blue-50 rounded-2xl mb-10 shadow-lg">
        <h1 className="text-center mb-10 font-bold text-4xl lobster text-purple-700 animate-pulse">
          Popular Toys
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {limitedToys.map((toy) => (
            <Categories key={toy.toyId} toy={toy} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/allToys"
            className="px-8 py-4 text-white font-bold text-lg rounded-full
                       bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                       shadow-lg hover:scale-105 hover:shadow-2xl
                       transition-all duration-500 animate-bounce-slow"
          >
            Show All Products
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-11/12 mx-auto py-10 px-6 bg-base-200 rounded-3xl shadow-xl mb-10">
        <h2 className="text-3xl text-center font-bold text-purple-700 mb-10">
          Why Shop With Us?
        </h2>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {[
            {
              icon: FaShippingFast,
              title: "Fast Delivery",
              desc: "Get your toys delivered super fast!",
              color: "text-pink-500",
            },
            {
              icon: FaGift,
              title: "Special Offers",
              desc: "Exciting discounts and offers on your favorite toys.",
              color: "text-purple-500",
            },
            {
              icon: FaHeadset,
              title: "24/7 Support",
              desc: "We are here to help anytime, every day.",
              color: "text-blue-500",
            },
            {
              icon: FaShieldAlt,
              title: "Safe & Secure",
              desc: "Shop confidently with secure payment options.",
              color: "text-green-500",
            },
          ].map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 w-full md:w-1/4"
              >
                <Icon
                  className={`text-5xl mb-4 animate-bounce ${feat.color}`}
                />
                <h3 className="font-bold text-xl mb-2">{feat.title}</h3>
                <p className="text-gray-600">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reviews / Testimonials Section */}
      <div className="w-11/12 mx-auto py-10 px-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-3xl shadow-xl mb-10">
        <h2 className="text-3xl text-center font-bold text-purple-700 mb-10">
          What Our Customers Say
        </h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          className="w-11/12 mx-auto"
        >
          {limitedToys.map((toy) => (
            <SwiperSlide key={toy.toyId}>
              <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <FaStar className="text-yellow-400 mx-auto mb-2" />
                <p className="text-lg font-medium">
                  “I love my {toy.toyName}! Amazing quality and fast delivery.”
                </p>
                <span className="block mt-2 font-semibold">
                  - Happy Customer
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Home;
