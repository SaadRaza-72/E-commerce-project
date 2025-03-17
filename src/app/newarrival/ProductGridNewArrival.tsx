"use client";
import { useState, useEffect } from "react";

export default function ProductGridNewArrival() {
  const initialProducts = [
    { name: "12-Ply Gauze Sponges", price: 7, oldPrice: 10, status: "Sold out", badge: "-30%", image: "/img-1.jpg" },
    { name: "3-seater sofa w/ chaiselong", price: 680, image: "/img-2.jpg" },
    { name: "3CE Body Whitening Shampoo", price: 22, image: "/img-3.jpg" },
    { name: "3D Attractive Pot", price: 90, badge: "New", image: "/img-4.jpg" },
    { name: "55UP130 55-Inch 4K Ultra HD Roku Smart LED TV", price: 2390, status: "Pre order", image: "/img-5.jpg" },
    { name: "55” KU6470 6 Series UHD Crystal Colour HDR Smart TV", price: 890, status: "Pre order", image: "/img-6.jpg" },
    { name: "65UF850T Super ULTRA Slim HD 4K Cinema", price: 1020, status: "Pre order", image: "/img-7.jpg" },
    { name: "65UH7700 65-Inch 4K Ultra HD Smart TV", price: 1390, image: "/img-8.jpg" },
    { name: "91 Short Sleeve Shirt", price: 66, status: "Sold out", image: "/img-1.jpg" },
    { name: "Abstract Folded Pots", price: 52, image: "/img-2.jpg" },
    { name: "Acemann Ruby Earrings", price: 899, image: "/img-3.jpg" },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [layout, setLayout] = useState(
    typeof window !== "undefined" ? localStorage.getItem("layout") || "grid-cols-2 md:grid-cols-3" : "grid-cols-2 md:grid-cols-3"
  );
  const [sortOption, setSortOption] = useState(
    typeof window !== "undefined" ? localStorage.getItem("sortOption") || "A-Z" : "A-Z"
  );

  // Effect to apply sorting on load
  useEffect(() => {
    handleSort({ target: { value: sortOption } });
  }, []);

  // Save layout to localStorage
  const handleLayout = (type) => {
    setLayout(type);
    localStorage.setItem("layout", type);
  };

  // Sorting function
  const handleSort = (e) => {
    const sortValue = e.target.value;
    setSortOption(sortValue);
    localStorage.setItem("sortOption", sortValue);

    let sortedProducts = [...products];

    if (sortValue === "A-Z") {
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortValue === "Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  return (
    <section className="p-4 md:p-6 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* Filter & Sorting Row */}
        <div className="flex flex-wrap justify-between items-center gap-2 mb-4">
          <button className="text-gray-500 flex items-center">
            <span className="mr-2">🛠️ Filter</span>
          </button>

          {/* Layout Buttons */}
          <div className="flex space-x-2">
            <button onClick={() => handleLayout("list")} className="p-2 border hover:bg-gray-200">☰</button>
            <button onClick={() => handleLayout("grid-cols-2 sm:grid-cols-2")} className="p-2 border hover:bg-gray-200">🔲🔲</button>
            <button onClick={() => handleLayout("grid-cols-2 md:grid-cols-3")} className="hidden sm:inline-block p-2 border hover:bg-gray-200">🔲🔲🔲</button>
            <button onClick={() => handleLayout("grid-cols-2 md:grid-cols-4 lg:grid-cols-4")} className="hidden md:inline-block p-2 border hover:bg-gray-200">🔲🔲🔲🔲</button>
          </div>

          {/* Sorting Dropdown */}
          <select className="border p-2 rounded" value={sortOption} onChange={handleSort}>
            <option value="A-Z">Alphabetically, A-Z</option>
            <option value="Low to High">Price, Low to High</option>
            <option value="High to Low">Price, High to Low</option>
          </select>
        </div>

        {/* Product Grid / List */}
        <div className={`grid ${layout === "list" ? "grid-cols-1 gap-4" : layout + " gap-6"} transition-all duration-300`}>
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative group transition-transform transform hover:scale-105 hover:shadow-xl p-2 rounded-lg ${
                layout === "list" ? "flex flex-col md:flex-row items-center gap-4" : ""
              }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className={`${layout === "list" ? "w-full md:w-40 h-40" : "w-full h-48"} object-cover transition-transform transform rounded`}
              />
              <div className={`${layout === "list" ? "flex flex-col justify-center text-center md:text-left" : ""}`}>
                {product.badge && (
                  <span
                    className={`absolute top-2 left-2 text-white px-2 py-1 rounded ${
                      product.badge === "New" ? "bg-green-500" : "bg-orange-500"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
                {product.status && (
                  <span
                    className={`absolute top-2 right-2 text-white px-2 py-1 rounded ${
                      product.status === "Sold out" ? "bg-gray-500" : "bg-blue-500"
                    }`}
                  >
                    {product.status}
                  </span>
                )}

                <h3 className="mt-2 text-lg group-hover:text-blue-500 transition-colors">{product.name}</h3>
                {product.oldPrice ? (
                  <p className="text-red-500">
                    <span className="line-through text-gray-400 mr-1">${product.oldPrice}</span>${product.price}
                  </p>
                ) : (
                  <p className="text-gray-700 group-hover:text-green-500 transition-colors">${product.price}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-6 space-x-2 text-gray-500">
          <span className="cursor-pointer">1</span>
          <span className="cursor-pointer">2</span>
          <span>...</span>
          <span className="cursor-pointer">73</span>
          <span className="cursor-pointer">Next</span>
        </div>
      </div>
    </section>
  );
}
