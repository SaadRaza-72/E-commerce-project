"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { FiTrash2, FiEdit2, FiGift } from "react-icons/fi";

// Sample product data
const initialProducts = [
  { id: 1, name: "Blush Beanie", color: "Grey", size: "S", price: 15, image: "/img-6.jpg" },
  { id: 2, name: "Cozy Scarf", color: "Beige", size: "M", price: 20, image: "/img-2.jpg" },
  { id: 3, name: "Winter Gloves", color: "Black", size: "L", price: 10, image: "/img-3.jpg" },
  { id: 4, name: "Wool Sweater", color: "Blue", size: "M", price: 30, image: "/img-4.jpg" },
  { id: 5, name: "Puffer Jacket", color: "Olive", size: "L", price: 50, image: "/img-5.jpg" },
];

export default function CartItemRow() {
  const [products, setProducts] = useState(
    initialProducts.map((product) => ({ ...product, quantity: 1 }))
  );
  const [giftWrap, setGiftWrap] = useState(false);
  const freeShippingThreshold = 100;

  // Calculate total price based on product quantities
  const subtotal = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  const total = giftWrap ? subtotal + 5 : subtotal;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - total);

  // Handle quantity increase
  const increaseQuantity = (id) =>
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? { ...product, quantity: product.quantity + 1 } : product
      )
    );

  // Handle quantity decrease
  const decreaseQuantity = (id) =>
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );

  // Handle product removal
  const removeProduct = (id) =>
    setProducts((prev) => prev.filter((product) => product.id !== id));

  return (
    <div className="max-w-7xl mx-auto px-3 py-4">
      {/* Header Row */}
      <div className="grid grid-cols-5 gap-4 font-semibold border-b pb-2 text-gray-700">
        <p className="col-span-2">Product</p>
        <p className="text-center">Price</p>
        <p className="text-center">Quantity</p>
        <p className="text-center">Total</p>
      </div>

      {/* Product Rows */}
      {products.map((product) => (
        <div key={product.id} className="border-t py-4 grid grid-cols-5 items-center gap-4">
          {/* Product Details Section */}
          <div className="col-span-2 flex items-center gap-4">
            {/* Product Image */}
            <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md" />

            {/* Product Info */}
            <div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-500 text-sm">
                Color: <span className="text-gray-700">{product.color}</span>
              </p>
              <p className="text-gray-500 text-sm">
                Size: <span className="text-gray-700">{product.size}</span>
              </p>

              {/* Edit and Delete Icons */}
              <div className="mt-2 flex gap-2 text-gray-500 cursor-pointer">
                <FiEdit2 size={16} />
                <FiTrash2 size={16} onClick={() => removeProduct(product.id)} />
              </div>
            </div>
          </div>

          {/* Price */}
          <p className="text-gray-600 text-center">${product.price.toFixed(2)}</p>

          {/* Quantity Controller */}
          <div className="flex justify-center items-center border rounded-full px-2 py-1">
            <button onClick={() => decreaseQuantity(product.id)} className="px-2">
              ➖
            </button>
            <span className="px-3">{product.quantity}</span>
            <button onClick={() => increaseQuantity(product.id)} className="px-2">
              ➕
            </button>
          </div>

          {/* Total Price */}
          <p className="text-gray-700 text-center">${(product.price * product.quantity).toFixed(2)}</p>
        </div>
      ))}

      {/* Grand Total */}
      <div className="border-t pt-4 flex justify-end text-lg font-semibold">
        Total: ${total.toFixed(2)}
      </div>

      {/* Checkout Section */}
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="space-y-4">
          {/* Gift Wrap */}
          <div className="flex items-center gap-2 text-gray-700">
            <FiGift size={20} />
            <span>
              Do you want a gift wrap? <span className="text-blue-500">$5.00</span>
            </span>
            <button
              onClick={() => setGiftWrap(!giftWrap)}
              className={`border px-4 py-1 rounded-full font-semibold ${
                giftWrap ? "bg-gray-200" : "hover:bg-gray-100"
              }`}
            >
              {giftWrap ? "Remove Gift Wrap" : "Add A Gift Wrap"}
            </button>
          </div>

          {/* Order Note */}
          <div>
            <label className="block font-semibold text-gray-700">Add Order Note</label>
            <textarea
              placeholder="How can we help you?"
              className="w-full border p-2 mt-1 rounded-md text-gray-600"
            ></textarea>
          </div>

          {/* Coupon Section */}
          <div>
            <label className="block font-semibold text-gray-700">Coupon:</label>
            <p className="text-gray-500 text-sm mb-1">Coupon code will work on checkout page</p>
            <input type="text" placeholder="Coupon code" className="w-full border p-2 rounded-md text-gray-600" />
          </div>
        </div>

        {/* Right Section */}
        <div className="space-y-4 border-l pl-8">
          <p className="text-gray-500">
            {remainingForFreeShipping > 0 ? (
              <>
                Almost there, add{" "}
                <span className="text-red-500 font-semibold">${remainingForFreeShipping.toFixed(2)}</span> more to get{" "}
                <span className="font-bold">FREE SHIPPING!</span>
              </>
            ) : (
              <span className="text-green-500 font-semibold">You unlocked FREE SHIPPING!</span>
            )}
          </p>

          <div className="relative w-full h-2 bg-gray-200 rounded-full">
            <div
              className="absolute h-2 bg-red-500 rounded-full"
              style={{ width: `${Math.min((total / freeShippingThreshold) * 100, 100)}%` }}
            ></div>
          </div>

          <div className="flex justify-between font-semibold text-gray-700">
            <span>SUBTOTAL:</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <Link href="/cart/checkout">
            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md">
              Check Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
