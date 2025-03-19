"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const styles = [
  { title: "Dress", img: "/img-1.jpg" },
  { title: "Man", img: "/img-2.jpg" },
  { title: "Hats", img: "/img-6.jpg" },
  { title: "Denim", img: "/img-4.jpg" },
  { title: "Decor", img: "/img-5.jpg" },
  { title: "New Arrival", img: "/img-8.jpg" },
];

const CategorySection = () => {
  return (
    <section className="bg-white py-10 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-semibold text-red-900">Categories</h2>
        <p className="text-gray-500 mb-4">Check out how they wear them!</p>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
          {styles.map((style, index) => (
            <div key={index} className="relative">
              <Image
                src={style.img}
                alt={style.title}
                width={300}
                height={200}
                className="w-full h-auto object-cover rounded-md"
              />
              <p className="text-center text-lg font-medium mt-2">{style.title}</p>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500 }}
            pagination={{ clickable: true }}
            className="w-full mt-3 relative"
          >
            {styles.map((style, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  <Image
                    src={style.img}
                    alt={style.title}
                    width={300}
                    height={200}
                    className="w-full h-auto object-cover rounded-md"
                  />
                  <p className="text-center text-lg font-medium mt-2">
                    {style.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
