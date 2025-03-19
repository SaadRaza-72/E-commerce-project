"use client"; // ✅ Ensures it's treated as a client component

import { useState, useEffect } from "react";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import SaleDropdown from "./SaleDropdown";
import BlogSection from "./BlogSection";
import PagesDropdown from "./PagesDropdown";
import ShopDropdown from "./ShopDropdown";
import ProductDropdown from "./ProductDropdown";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);

  // ✅ Ensure hooks run client-side only (no SSR mismatch)
  useEffect(() => {
    const handleResize = () => setIsLaptop(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="w-full border-b shadow-sm">
      <nav className="flex justify-between items-center px-6 md:px-8 py-4">
        <h1 className="text-3xl font-bold">kalles</h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 text-lg font-medium">
          <li className="cursor-pointer hover:text-blue-500 transition">
            <Link href="/">Home</Link>
          </li>
          <li><ShopDropdown /></li>
          <ProductDropdown />
          <li><SaleDropdown /></li>
          <li><PagesDropdown /></li>
          {/* <li className="cursor-pointer hover:text-blue-500 transition">
            <Link href="/blog">Blog</Link>
          </li> */}
          <li className="cursor-pointer hover:text-blue-500 transition">
            <Link href="/cart">Cart</Link>
          </li>
        </ul>

        {/* Desktop Icons */}
        <div className="hidden lg:flex space-x-4 text-xl">
          <FaSearch className="cursor-pointer hover:text-gray-500 transition" />
          <FaUser className="cursor-pointer hover:text-gray-500 transition" />
          <div className="relative cursor-pointer hover:text-gray-500 transition">
            <FaHeart />
            <span className="absolute -top-1 -right-2 bg-black text-white text-xs px-1 rounded-full">0</span>
          </div>
          <div className="relative cursor-pointer hover:text-gray-500 transition">
            <FaShoppingCart />
            <span className="absolute -top-1 -right-2 bg-black text-white text-xs px-1 rounded-full">0</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-2xl" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 transition-transform duration-500 ${
          mobileMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex justify-end p-4">
          <FaTimes className="text-2xl cursor-pointer" onClick={() => setMobileMenuOpen(false)} />
        </div>

        {/* Mobile Links */}
        <ul className="flex flex-col space-y-6 text-lg font-medium p-8">
          {["Home", "Shop", "Product", "Sale", "Pages", "Blog"].map((item, index) => (
            <li key={index} className="cursor-pointer hover:text-blue-500 transition duration-300">
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Icons */}
        <div className="flex justify-center space-x-6 text-xl mt-8">
          <FaSearch className="cursor-pointer hover:text-gray-500 transition" />
          <FaUser className="cursor-pointer hover:text-gray-500 transition" />
          <FaHeart className="cursor-pointer hover:text-gray-500 transition" />
          <FaShoppingCart className="cursor-pointer hover:text-gray-500 transition" />
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}></div>}
    </header>
  );
}
