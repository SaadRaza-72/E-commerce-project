"use client"; // For Next.js App Router

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function HeroSlider() {
  useEffect(() => {
    document.documentElement.style.setProperty("--swiper-pagination-color", "#fff");
  }, []);

  return (
    <div className="h-[60vh] md:h-screen w-full">
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        effect="fade"
        loop={true}
        speed={2000}
        className="h-full w-full"
      >
        {/* Slide 1 - Left-aligned */}
        <SwiperSlide className="relative flex items-center justify-start bg-[url('/img-5.jpg')] bg-cover bg-center h-full object-cover">
          <div className="relative text-white w-full px-4 md:w-3/5 md:ml-25 mt-20 md:mt-50 transition-opacity duration-2000 ease-in-out animate-fadeIn">
            <h2 className="text-2xl md:text-6xl font-bold translate-y-5 transition-all duration-1000 ease-in-out delay-300 animate-slideUp leading-tight">
              Summer Sale
            </h2>
            <p className="text-base md:text-xl mt-2 md:mt-4 translate-y-3 transition-all duration-1000 ease-in-out delay-500 animate-slideUp">
              Save up to 70%
            </p>
            <button className="mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-2 bg-white text-black rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 2 - Right-aligned */}
        <SwiperSlide className="relative flex items-center justify-end bg-[url('/img-4.jpg')] bg-cover bg-center h-full object-cover">
          <div className="relative text-white w-full px-4 md:w-3/5 md:ml-25 mt-20 md:mt-50 transition-opacity duration-1000 ease-in-out animate-fadeIn">
            <h2 className="text-2xl md:text-6xl font-bold translate-y-5 transition-all duration-1000 ease-in-out delay-300 animate-slideUp leading-tight">
              Lookbook Sale
            </h2>
            <p className="text-base md:text-xl mt-2 md:mt-4 translate-y-3 transition-all duration-1000 ease-in-out delay-500 animate-slideUp">
              Latest fashion trends
            </p>
            <button className="mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-2 bg-white text-black rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-200">
              Explore Now
            </button>
          </div>
        </SwiperSlide>

        {/* Slide 3 - Left-aligned */}
        <SwiperSlide className="relative flex items-center justify-start bg-[url('/img-1.jpg')] bg-cover bg-center h-full object-cover">
          <div className="relative text-white w-full px-4 md:w-3/5 md:ml-25 mt-20 md:mt-50 transition-opacity duration-1000 ease-in-out animate-fadeIn">
            <h2 className="text-2xl md:text-6xl font-bold translate-y-5 transition-all duration-1000 ease-in-out delay-300 animate-slideUp leading-tight">
              New Arrivals
            </h2>
            <p className="text-base md:text-xl mt-2 md:mt-4 translate-y-3 transition-all duration-1000 ease-in-out delay-500 animate-slideUp">
              Discover the latest styles
            </p>
            <button className="mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-2 bg-white text-black rounded-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-200">
              Discover
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
