"use client";
import Image from "next/image";

// Extended product list with 4 more products
const products = [
  {
    name: "Analogue Resin Strap",
    price: "$30.00",
    img: "/333.webp",
    tag: "New",
    originalPrice: null,
    colors: [],
    sizes: ["S", "M", "L"],
  },
  {
    name: "Ridley High Waist",
    price: "$36.00",
    img: "/333.webp",
    originalPrice: null,
    colors: [],
    sizes: ["XS", "M", "XL"],
  },
  {
    name: "Blush Beanie",
    price: "$15.00",
    img: "/333.webp",
    originalPrice: null,
    colors: ["#D3D3D3", "#FFC0CB", "#000"],
    sizes: ["One Size"],
  },
  {
    name: "Cluse La Boheme",
    price: "$45.00",
    img: "/333.webp",
    originalPrice: "$60.00",
    discount: "-25%",
    colors: ["#C0C0C0", "#D3D3D3", "#B0C4DE"],
    sizes: ["S", "M", "L", "XL"],
  },
  // New products
  {
    name: "Sporty Digital Watch",
    price: "$25.00",
    img: "/333.webp",
    tag: "Hot",
    originalPrice: "$35.00",
    discount: "-30%",
    colors: ["#000", "#FFD700"],
    sizes: [],
  },
  {
    name: "Cozy Knit Sweater",
    price: "$40.00",
    img: "/333.webp",
    originalPrice: null,
    colors: ["#A52A2A", "#FFA07A"],
    sizes: ["M", "L"],
  },
  {
    name: "Minimalist Leather Bag",
    price: "$55.00",
    img: "/333.webp",
    originalPrice: "$70.00",
    discount: "-20%",
    colors: ["#8B4513", "#2F4F4F"],
    sizes: [],
  },
  {
    name: "Classic Denim Jacket",
    price: "$50.00",
    img: "/333.webp",
    tag: "Best Seller",
    originalPrice: null,
    colors: ["#4682B4", "#708090"],
    sizes: ["S", "M", "L"],
  },
];

const TrendingSection = () => {
  return (
    <section className="bg-white py-10 px-4">
      {/* Section Title */}
      <div className="max-w-screen-lg mx-auto text-center mb-6">
        <h2 className="text-3xl font-bold tracking-wide text-black">
          <span className="border-t-2 border-black mx-2 inline-block w-10 align-middle"></span>
          TRENDING
          <span className="border-t-2 border-black mx-2 inline-block w-10 align-middle"></span>
        </h2>
        <p className="text-gray-500 italic mt-1">Top sale in this week</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-screen-lg mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="relative group overflow-hidden border border-gray-200 rounded-md hover:shadow-lg transition"
          >
            {/* Product Image */}
            <Image
              src={product.img}
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-auto object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Quick View & Quick Shop (Center) */}
            <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 gap-3">
              <button className="bg-white text-black font-semibold py-2 px-4 rounded-full shadow-md hover:bg-gray-200 transition">
                Quick View
              </button>
              <button className="bg-[#6dcff6] text-white font-small py-2 px-2 rounded-full shadow-md hover:bg-[#50b4d7] transition">
                Quick Shop
              </button>
            </div>

            {/* Favorite & Compare (Top Left) */}
            <div className="absolute top-2 left-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <button className="bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-200 transition">
                ❤️
              </button>
              <button className="bg-white text-black p-1 rounded-full shadow-md hover:bg-gray-200 transition">
                🔄
              </button>
            </div>

            {/* Sizes (Bottom Center) */}
            {product.sizes.length > 0 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gray-800 bg-opacity-50 px-3 py-1 rounded-full text-white text-sm">
                {product.sizes.map((size, idx) => (
                  <span key={idx} className="mr-2">
                    {size}
                  </span>
                ))}
              </div>
            )}

            {/* Product Tag */}
            {product.tag && (
              <span className="absolute top-2 right-2 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {product.tag}
              </span>
            )}

            {/* Discount Badge */}
            {product.discount && (
              <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                {product.discount}
              </span>
            )}

            {/* Product Info */}
            <p className="text-left text-lg font-medium mt-2 px-2">
              {product.name}
            </p>
            <p className="text-left text-gray-700 px-2 pb-2">
              {product.originalPrice ? (
                <>
                  <span className="text-gray-400 line-through mr-1">
                    {product.originalPrice}
                  </span>
                  <span className="text-red-500 font-bold">{product.price}</span>
                </>
              ) : (
                product.price
              )}
            </p>

            {/* Color Options */}
            {product.colors.length > 0 && (
              <div className="flex gap-1 mt-1 px-2">
                {product.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="w-4 h-4 rounded-full border"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="mt-6 text-center">
        <button className="px-6 py-2 border border-black rounded-full hover:bg-gray-200 transition">
          Load More
        </button>
      </div>
    </section>
  );
};

export default TrendingSection;
