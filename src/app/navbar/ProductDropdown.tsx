"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const productCategories = [
    { name: "New Arrival", link: "/newarrival" },
    { name: "Decor", link: "/decor" },
    { name: "Denim", link: "/denim" },
    { name: "Dress", link: "/dress" },
    { name: "Hats", link: "/hats" },
    { name: "Man", link: "/man" },
  ];

  return (
    <li
      className="relative cursor-pointer hover:text-blue-500 transition"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link href="/products">Products</Link>
      <ul
        className={`absolute top-full left-0 bg-white shadow-md border mt-2 space-y-2 py-2 w-48 z-50 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        }`}
      >
        {productCategories.map((category, index) => (
          <li
            key={index}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer transition duration-300"
          >
            <Link href={category.link}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
