import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Categories from "../Home/Categories/Categories";

const promiseCard = fetch("toyData.json").then((res) => res.json());

const Alltoys = () => {
  const singleToy = use(promiseCard);

  return (
    <div className=" mx-auto py-10 my-10">
      {/* Swiper Carousel with Gradient Cards */}
      <div className="w-11/12 mx-auto mb-10 rounded-3xl overflow-hidden shadow-2xl">
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
          className="w-11/12 mx-auto mySwiper rounded-3xl overflow-hidden"
        >
          {singleToy.map((toy) => (
            <SwiperSlide
              key={toy.toyId}
              className="rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-500 flex justify-center"
            >
              {/* Gradient wrapper like card */}
              <div className="w-11/12 mx-auto bg-gradient-to-b from-pink-50 via-purple-50 to-blue-50 rounded-2xl shadow-xl p-2 w-full">
                <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px]">
                  <img
                    src={toy.pictureURL}
                    alt={toy.toyName}
                    className="w-full h-full object-cover rounded-2xl animate-bounce-slow"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 rounded-b-2xl">
                    <h2 className="text-white text-xl font-bold">
                      {toy.toyName}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Section Title */}
      <h1 className="text-center text-4xl font-bold mb-10 lobster text-purple-700 animate-pulse">
        All Products
      </h1>

      {/* Grid of all toys using Categories component */}
      <div className=" w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {singleToy.map((toy) => (
          <Categories key={toy.toyId} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Alltoys;
