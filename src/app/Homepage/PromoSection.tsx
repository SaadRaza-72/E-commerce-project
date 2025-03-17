"use client";
import Image from "next/image";

const PromoSection = () => {
  const promoData = [
    {
      title: "LOOKBOOK 2023",
      subtitle: "MAKE LOVE THIS LOOK",
      image: "/img-1.jpg",
    },
    {
      title: "SUMMER SALE",
      subtitle: "UP TO 70%",
      image: "/img-2.jpg",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-screen-lg mx-auto py-10 px-4">
      {promoData.map((promo, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-md cursor-pointer"
        >
          <Image
            src={promo.image}
            alt={promo.title}
            width={600}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-2xl font-bold mb-1">{promo.title}</h2>
            <p className="text-sm font-medium tracking-wide">{promo.subtitle}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PromoSection;
