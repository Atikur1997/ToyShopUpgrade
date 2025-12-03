import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Unique Toy Card Component
const Categories = ({ toy }) => {
  const { toyName, pictureURL, rating, availableQuantity, price, toyId } = toy;

  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-full object-fit"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-2xl">
          <h2 className="text-white text-xl font-bold">{toyName}</h2>
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <span className="bg-yellow-400 text-black font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            ⭐ {rating}
          </span>
          <span className="bg-green-500 text-white font-semibold px-3 py-1 rounded-full text-sm">
            Qty: {availableQuantity}
          </span>
        </div>
        <p className="text-red-600 font-bold text-lg">Price: ${price}</p>
        <button className="btn btn-gradient w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:scale-105 transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

const promiseCard = fetch("toyData.json").then((res) => res.json());

const Home = () => {
  const singleToy = use(promiseCard);
  const limitedToys = singleToy.slice(0, 4);

  return (
    <>
      {/* Banner Swiper */}
      <div className="w-11/12 mx-auto my-10 rounded-2xl overflow-hidden shadow-2xl py-10">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1.3 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper rounded-2xl overflow-hidden"
        >
          {limitedToys.map((toy) => (
            <SwiperSlide
              key={toy.toyId}
              className="rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-[300px] sm:h-[400px] lg:h-[450px] object-fit rounded-2xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Popular Toys Grid */}
      <div className="w-11/12 mx-auto bg-base-200 py-10 px-3 rounded-2xl mb-10">
        <h1 className="text-center mb-10 font-bold text-4xl lobster">
          Popular Toys
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {singleToy.slice(0, 8).map((toy) => (
            <Categories key={toy.toyId} toy={toy} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
