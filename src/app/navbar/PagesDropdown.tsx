"use client";
import { useState } from "react";
import Link from "next/link";

export default function PagesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { name: "Contact Us", link: "/contact" },
    { name: "About Us", link: "/aboutus" },
  ];

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Main Pages Menu */}
      <div className="cursor-pointer hover:text-blue-500 transition">Pages</div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-lg w-48 p-2 z-50">
          <ul className="text-gray-600 space-y-2">
            {pages.map((page, index) => (
              <li key={index} className="hover:text-blue-500 cursor-pointer">
                <Link href={page.link}>
                  <span className="flex items-center justify-between">
                    {page.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
