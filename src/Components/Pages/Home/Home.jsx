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

      {/* Features & Testimonials sections remain unchanged */}
    </>
  );
};

export default Home;
