"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

// Images array
const images = [
  "/img-1.jpg",
  "/img-2.jpg",
  "/img-3.jpg",
  "/img-4.jpg",
  "/img-5.jpg",
  "/img-6.jpg",
];

const InstagramGallery = () => {
  return (
    <section className="py-10 ">
      {/* Title */}
      <h2 className="text-center font-bold mb-6 text-lg md:text-2xl whitespace-nowrap">
        ——— @ FOLLOW US ON INSTAGRAM ———
      </h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={3} // Default desktop view
        navigation
        breakpoints={{
          0: { slidesPerView: 1 }, // Shows 1 post on mobile
          640: { slidesPerView: 2 }, // Shows 2 posts on tablets
          1024: { slidesPerView: 5 }, // Shows 5 posts on larger screens
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative group">
              {/* Image */}
              <Image
                src={image}
                alt={`Instagram image ${index + 1}`}
                width={300}
                height={300}
                className="w-full h-64 object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default InstagramGallery;
