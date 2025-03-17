"use client";
import { useState, useRef } from "react";
import Link from "next/link"; // Import Next.js Link

export default function SaleDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef(null);

  const categories = [
    { name: "New Arrival", link: "/newarrival" },
    { name: "Man", link: "/man" },
    { name: "Hats", link: "/hats" },
    { name: "Denim", link: "/denim" },
    { name: "Dress", link: "/dress" },
    { name: "Decor", link: "/decor" },
  ];

  const products = [
    {
      name: "Short Sleeved Hoodie",
      image: "/image1.jpg",
      oldPrice: "$45.00",
      newPrice: "$30.00",
      discount: "-33%",
    },
    {
      name: "Striped Long Sleeve Top",
      image: "/image3.jpg",
      oldPrice: "$45.00",
      newPrice: "$20.00",
      discount: "-56%",
    },
    {
      name: "C'est La Vie T-Shirt",
      image: "/image4.jpg",
      oldPrice: "$60.00",
      newPrice: "$45.00",
      discount: "-25%",
    },
    {
      name: "Skin Sweatpants",
      image: "/image8.jpg",
      oldPrice: "$75.00",
      newPrice: "$45.00",
      discount: "-40%",
    },
    {
      name: "Casual Denim Jacket",
      image: "/image4.jpg",
      oldPrice: "$90.00",
      newPrice: "$65.00",
      discount: "-28%",
    },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="cursor-pointer hover:text-blue-500 transition">Sale</button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[700px] bg-white shadow-lg border p-4 flex flex-col items-center z-50">
          {/* Categories List */}
          <div className="w-full border-b pb-2">
            <h3 className="font-bold text-gray-700 text-center">ACCESSORIES</h3>
            <ul className="flex justify-center space-x-4 mt-2">
              {categories.map((category, index) => (
                <li key={index} className="hover:text-blue-500 cursor-pointer transition">
                  <Link href={category.link}>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product List (Hidden Scroll) */}
          <div className="relative w-full mt-4 flex items-center">
            {/* Left Scroll Button (On Image Section) */}
            <button
              onClick={scrollLeft}
              className="absolute left-2 bg-black bg-opacity-50 text-white px-4 py-3 rounded-full shadow-lg hover:bg-opacity-80 transition z-10"
            >
              ◀
            </button>

            {/* Product Container */}
            <div
              ref={scrollRef}
              className="flex space-x-4 w-full overflow-hidden"
              style={{ scrollBehavior: "smooth" }}
            >
              {products.map((product, index) => (
                <div key={index} className="relative w-40 h-60 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover rounded-md"
                  />

                  {/* Discount Tag */}
                  <span className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 text-sm rounded-full">
                    {product.discount}
                  </span>

                  {/* Product Details (Overlay) */}
                  <div className="absolute bottom-0 left-0 w-full bg-black opacity-70 bg-opacity-50 text-white p-2 text-center rounded-b-md">
                    <h4 className="text-sm font-bold">{product.name}</h4>
                    <p className="text-gray-300 line-through">{product.oldPrice}</p>
                    <p className="text-red-400 font-bold">{product.newPrice}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Scroll Button (On Image Section) */}
            <button
              onClick={scrollRight}
              className="absolute right-2 bg-black bg-opacity-50 text-white px-4 py-3 rounded-full shadow-lg hover:bg-opacity-80 transition z-10"
            >
              ▶
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
