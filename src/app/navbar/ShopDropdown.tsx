import { useState } from "react";
import Link from "next/link"; // ✅ Import Next.js Link

export default function ShopDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Dress", image: "/image1.jpg", link: "/dress" },
    { name: "Men", image: "/image3.jpg", link: "/man" },
    { name: "Hats", image: "/image4.jpg", link: "/hats" },
    { name: "Denim", image: "/image8.jpg", link: "/denim" },
    { name: "Decor", image: "/image4.jpg", link: "/decor" },
  ];

  return (
    <div className="relative flex justify-center items-center">
      {/* Shop Menu Item */}
      <div
        className="cursor-pointer hover:text-blue-500 transition"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        Shop
        {/* Dropdown Content */}
        {isOpen && (
          <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 bg-white shadow-lg border rounded-lg w-[800px] p-6 z-50">
            <div className="flex justify-between space-x-4">
              {categories.map((category, index) => (
                <div key={index} className="text-center group w-1/5">
                  <Link href={category.link}>
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-[500px] h-[250px] object-cover rounded-lg group-hover:scale-105 transition"
                    />
                  </Link>
                  <Link href={category.link}>
                    <div className="mt-2 font-semibold bg-white p-2 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition cursor-pointer">
                      {category.name}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
