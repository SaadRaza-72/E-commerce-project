import Link from "next/link";
import { useState } from "react";

export default function BlogDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogPosts = [
    {
      category: "Fashion, Travel",
      title: "Style for couple in Wedding season",
      author: "admin",
      date: "May 11, 2022",
      comments: "2 comments",
      image: "/image1.jpg",
    },
    {
      category: "Fashion, Life Style",
      title: "Style Advice All Men Should Hear",
      author: "admin",
      date: "May 11, 2022",
      comments: "4 comments",
      image: "/image3.jpg",
    },
    {
      category: "Fashion, Trends",
      title: "Latest Street Style Trends",
      author: "admin",
      date: "June 15, 2022",
      comments: "3 comments",
      image: "/image4.jpg",
    },
    {
      category: "Fashion, Casual",
      title: "Casual Wear Ideas for Summer",
      author: "admin",
      date: "July 20, 2022",
      comments: "5 comments",
      image: "/image8.jpg",
    },
  ];

  const visiblePost = blogPosts[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + blogPosts.length) % blogPosts.length);
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Blog Menu Item */}
      <div className="cursor-pointer hover:text-blue-500 transition">
      <Link href="/blog">Blog</Link>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-white shadow-lg border p-4 rounded-lg w-[700px] h-[500px] z-50 flex">
          {/* Blog Layout Options - Left Side */}
          <div className="w-1/3 border-r pr-4">
            <h3 className="font-bold text-gray-700 border-b pb-2 mb-3 text-center">BLOG LAYOUT</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="hover:text-blue-500 cursor-pointer">Grid layout</li>
              <li className="hover:text-blue-500 cursor-pointer">Masonry layout</li>
              <li className="hover:text-blue-500 cursor-pointer">Left sidebar</li>
              <li className="hover:text-blue-500 cursor-pointer">Right sidebar</li>
              <li className="hover:text-blue-500 cursor-pointer">Sidebar drawer</li>
              <li className="hover:text-blue-500 cursor-pointer">Single Post with Product Listing</li>
              <li className="hover:text-blue-500 cursor-pointer">Single Post with Instagram Shop</li>
              <li className="hover:text-blue-500 cursor-pointer">Single Post with Categories</li>
              <li className="hover:text-blue-500 cursor-pointer">Single Post with Lookbook</li>
            </ul>
          </div>

          {/* Blog Post - Right Side */}
          <div className="w-2/3 flex flex-col items-center space-y-4 relative h-full">
            {/* Top & Bottom Buttons */}
            <button
              onClick={handlePrev}
              className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-white/60 backdrop-blur-md p-3 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300"
            >
              ↑
            </button>

            <div className="relative w-full flex flex-col items-center">
              <img src={visiblePost.image} alt={visiblePost.title} className="w-full h-[400px] object-cover rounded-lg" />
              <div className="mt-2 text-center">
                <p className="text-xs text-gray-500">{visiblePost.category}</p>
                <h4 className="text-sm font-bold hover:text-blue-500 cursor-pointer">{visiblePost.title}</h4>
                <p className="text-xs text-gray-400">
                  By {visiblePost.author} on {visiblePost.date} {visiblePost.comments}
                </p>
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black/60 text-white backdrop-blur-md w-13 h-13 rounded-full shadow-lg opacity-50 hover:opacity-100 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              ↓
            </button>

            {/* Carousel Dots */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
              {blogPosts.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition duration-300 ${
                    index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
                  }`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
