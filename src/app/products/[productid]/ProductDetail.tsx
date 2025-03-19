"use client";

import { useState } from "react";
import Image from "next/image";

// ✅ Product Props
type ProductProps = {
  product: {
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    rating?: number;
    reviews?: number;
    description: string;
    availability: string;
    categories: string;
    tags?: string[];
  };
};

// ✅ Component starts here
export default function ProductDetail({ product }: ProductProps) {
  const [quantity, setQuantity] = useState(1);

  // Ensure product data exists
  if (!product) {
    return <p className="text-center text-red-500">Product data not available!</p>;
  }

  // Destructure product props safely
  const {
    name,
    price,
    oldPrice,
    image,
    rating = 4,
    reviews = 0,
    description,
    availability = "In Stock",
    categories = "Uncategorized",
    tags = [],
  } = product;

  // 🛠 Quantity logic
  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* ✅ Product Image */}
      <div className="flex justify-center items-center">
        <Image
          src={image || "/placeholder.jpg"}
          alt={name}
          width={500}
          height={500}
          className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-md"
          priority
        />
      </div>

      {/* ✅ Product Info Section */}
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">{name || "Product Name"}</h1>

        {/* ✅ Price Section */}
        <div className="flex items-center gap-2 text-2xl font-semibold">
          <span className="text-green-500">${price?.toFixed(2) || "0.00"}</span>
          {oldPrice && (
            <span className="text-gray-500 line-through text-lg">
              ${oldPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* ⭐ Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className={index < rating ? "text-yellow-400" : "text-gray-300"}>
              ★
            </span>
          ))}
          <span className="text-gray-500 text-sm">({reviews} reviews)</span>
        </div>

        {/* ✅ Description */}
        <p className="text-gray-600">{description || "No description available."}</p>

        {/* ✅ Quantity Selector */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleQuantityChange(-1)}
            className="border px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
          >
            -
          </button>
          <span className="text-lg font-medium">{quantity}</span>
          <button
            onClick={() => handleQuantityChange(1)}
            className="border px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
          >
            +
          </button>

          {/* Add to Cart Button */}
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            ADD TO CART
          </button>
        </div>

        {/* ✅ Trust Badges */}
        <div className="flex gap-2 mt-4">
          <Image src="/trust-mcafee.png" alt="McAfee Secure" width={32} height={32} />
          <Image src="/trust-norton.png" alt="Norton Secure" width={32} height={32} />
          <Image src="/trust-verisign.png" alt="VeriSign Secure" width={32} height={32} />
          <Image src="/trust-truste.png" alt="TRUSTe Verified" width={32} height={32} />
        </div>

        {/* ✅ Delivery, Availability, Categories */}
        <div className="mt-4">
          <p>
            <strong>Availability:</strong> {availability}
          </p>
          <p>
            <strong>Categories:</strong> {categories}
          </p>
          {tags.length > 0 && (
            <p>
              <strong>Tags:</strong> {tags.join(", ")}
            </p>
          )}
        </div>

        {/* ✅ Social Share Section */}
        <div className="flex gap-4 mt-4 text-gray-500 cursor-pointer">
          <span className="hover:text-black">📘 Facebook</span>
          <span className="hover:text-black">✖️ X (Twitter)</span>
          <span className="hover:text-black">📌 Pinterest</span>
          <span className="hover:text-black">📨 Email</span>
        </div>
      </div>
    </div>
  );
}