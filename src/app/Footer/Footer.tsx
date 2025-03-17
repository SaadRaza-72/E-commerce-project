"use client";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
} from "react-icons/fa";
import { SiPaypal, SiVisa, SiMastercard, SiAmericanexpress } from "react-icons/si";
import { AiOutlineBank } from "react-icons/ai";
import { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  // ✅ Detect screen size to control toggles
  useEffect(() => {
    const handleResize = () => setIsMobileOrTablet(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSection = (section: string) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <footer className="bg-gray-100 py-8 px-4 text-gray-700">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Section - Get in Touch */}
        <div>
          <h3
            className="text-xl font-semibold mb-3 cursor-pointer lg:cursor-default"
            onClick={() => isMobileOrTablet && toggleSection("getInTouch")}
          >
            Get in touch
            {isMobileOrTablet && (
              <span className="float-right">{activeSection === "getInTouch" ? "−" : "+"}</span>
            )}
          </h3>
          {(activeSection === "getInTouch" || !isMobileOrTablet) && (
            <>
              <p className="flex items-center gap-2 mb-2">
                <FaMapMarkerAlt />
                184 Main Rd E, St Albans VIC 3021, Australia
              </p>
              <p className="flex items-center gap-2 mb-2">
                <FaEnvelope />
                contact@company.com
              </p>
              <p className="flex items-center gap-2">
                <FaPhone />
                +001 2233 456
              </p>

              {/* Social Icons */}
              <div className="flex gap-4 mt-4 text-xl">
                <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                <FaPinterestP className="hover:text-red-600 cursor-pointer" />
              </div>
            </>
          )}
        </div>

        {/* Section - Categories */}
        <div>
          <h3
            className="text-xl font-semibold mb-3 cursor-pointer lg:cursor-default"
            onClick={() => isMobileOrTablet && toggleSection("categories")}
          >
            Categories
            {isMobileOrTablet && (
              <span className="float-right">{activeSection === "categories" ? "−" : "+"}</span>
            )}
          </h3>
          {(activeSection === "categories" || !isMobileOrTablet) && (
            <ul className="space-y-2">
              <li>
              <Link href="/man">Man</Link>
              </li>
              <li>
              <Link href="/decor">Decor</Link>
              </li>
              <li>
              <Link href="/denim">Denim</Link>
              </li>
              <li>
              <Link href="/dress">Dress</Link>
              </li>
              <li>
              <Link href="/hats">Hats</Link>
              </li>
              <li>
              <Link href="/newarrival">New Arrival</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Section - Information */}
        <div>
          <h3
            className="text-xl font-semibold mb-3 cursor-pointer lg:cursor-default"
            onClick={() => isMobileOrTablet && toggleSection("information")}
          >
            Information
            {isMobileOrTablet && (
              <span className="float-right">{activeSection === "information" ? "−" : "+"}</span>
            )}
          </h3>
          {(activeSection === "information" || !isMobileOrTablet) && (
            <ul className="space-y-2">
              <li>
              <Link href="/aboutus">About Us</Link>
              </li>
              <li>
              <Link href="/contact">Contact</Link>
              </li>
            </ul>
          )}
        </div>

        {/* Section - Newsletter Signup */}
        <div>
          <h3
            className="text-xl font-semibold mb-3 cursor-pointer lg:cursor-default"
            onClick={() => isMobileOrTablet && toggleSection("newsletter")}
          >
            Newsletter Signup
            {isMobileOrTablet && (
              <span className="float-right">{activeSection === "newsletter" ? "−" : "+"}</span>
            )}
          </h3>
          {(activeSection === "newsletter" || !isMobileOrTablet) && (
            <>
              <p className="text-sm mb-2">
                Subscribe to our newsletter and get 10% off your first purchase
              </p>
              <div className="flex items-center border border-gray-400 rounded overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="p-2 flex-grow outline-none"
                />
                <button className="bg-gradient-to-r from-gray-800 to-black text-white px-6 py-2 hover:opacity-80 transition-all">
                  Subscribe
                </button>
              </div>

              {/* Payment Icons */}
              <div className="flex gap-4 mt-4 text-2xl justify-start">
                <SiPaypal className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                <SiVisa className="text-gray-600 hover:text-blue-700 cursor-pointer" />
                <SiMastercard className="text-gray-600 hover:text-red-500 cursor-pointer" />
                <SiAmericanexpress className="text-gray-600 hover:text-blue-500 cursor-pointer" />
                <AiOutlineBank className="text-gray-600 hover:text-green-500 cursor-pointer" />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-gray-500 text-sm">
        © 2025 Kalles. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
