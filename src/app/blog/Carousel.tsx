"use client";
import { link } from "fs";
import { useState } from "react";
import Link from "next/link";

// Slide data (15 items total)
const slides = [
  { image: "/img-1.jpg", title: "Style Advice All Men Should Hear", date: "May 11, 2022", author: "admin" },
  { image: "/img-2.jpg", title: "Cool Spring Street Style Looks", date: "May 11, 2022", author: "admin" },
  { image: "/img-3.jpg", title: "101 Beauty Tips Every Girl Should Know", date: "May 11, 2022", author: "admin" },
  { image: "/img-4.jpg", title: "Summer Travel Fashion Guide", date: "June 5, 2022", author: "admin" },
  { image: "/img-5.jpg", title: "Best Accessories for 2023", date: "July 15, 2022", author: "admin" },
  { image: "/img-6.jpg", title: "Minimalist Wardrobe Tips", date: "August 22, 2022", author: "admin" },
  { image: "/img-7.jpg", title: "Top 5 Streetwear Looks", date: "September 3, 2022", author: "admin" },
  { image: "/img-8.jpg", title: "Bold Colors Trend 2023", date: "October 10, 2022", author: "admin" },
  { image: "/img-1.jpg", title: "How to Layer Like a Pro", date: "November 8, 2022", author: "admin" },
  { image: "/img-2.jpg", title: "Winter Style Hacks", date: "December 20, 2022", author: "admin" },
  { image: "/img-3.jpg", title: "Trendy Work Outfits 2024", date: "January 5, 2023", author: "admin" },
  { image: "/img-4.jpg", title: "Street Style Sneakers Guide", date: "February 8, 2023", author: "admin" },
  { image: "/img-5.jpg", title: "Boho Chic Style Inspirations", date: "March 15, 2023", author: "admin" },
  { image: "/img-6.jpg", title: "Fashion Essentials for 2024", date: "April 22, 2023", author: "admin" },
  { image: "/img-7.jpg", title: "How to Style Oversized Clothes", date: "May 5, 2023", author: "admin" },
];

export default function BlogSection() {
  const [currentPage, setCurrentPage] = useState(1);

  // Define items per page based on the page number
  const itemsPerPage = currentPage === 1 ? 10 : 5;

  // Determine which slides to display
  const startIndex = currentPage === 1 ? 0 : 10;
  const currentSlides = slides.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change and scroll to top
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {currentSlides.map((slide, index) => (
          <div key={index} className="group cursor-pointer transition-all duration-300 ease-in-out w-full max-w-md">
            <div
              className="h-[400px] bg-cover bg-center rounded-lg transform group-hover:scale-95 transition-all duration-300"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <h2 className="mt-2 text-lg font-semibold text-center group-hover:text-blue-500 transition duration-300">
              {slide.title}
            </h2>
            <p className="text-gray-500 text-xs text-center">
              By <span className="text-blue-500">{slide.author}</span> on {slide.date}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2 text-gray-500 text-sm">
        <span
          className={`cursor-pointer ${currentPage === 1 ? "text-red-500 font-bold" : ""}`}
          onClick={() => handlePageChange(1)}
        >
          1
        </span>
        <span
          className={`cursor-pointer ${currentPage === 2 ? "text-red-500 font-bold" : ""}`}
          onClick={() => handlePageChange(2)}
        >
          2
        </span>
        {currentPage < 2 && (
          <span className="cursor-pointer" onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </span>
        )}
      </div>
    </div>
  );
}
