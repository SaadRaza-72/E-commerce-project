"use client";
import { useState } from "react";
import Image from "next/image";

const CartCheckout = () => {
  const [cartItems] = useState([
    { id: 1, name: "Blush Beanie", color: "Grey", size: "S", price: 15, quantity: 2, image: "/img-6.jpg" },
  ]);

  const [deliveryOption, setDeliveryOption] = useState("ship");
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow-md rounded-lg p-4">
        {/* Left Section - Contact & Delivery Form */}
        <div className="space-y-6 p-4 overflow-y-auto h-[calc(100vh-2rem)]">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <input
            type="email"
            placeholder="Email or mobile phone number"
            className="w-full border p-2 rounded-md text-gray-600"
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" id="news" />
            <label htmlFor="news" className="text-gray-600">Email me with news and offers</label>
          </div>

          <h2 className="text-2xl font-semibold mt-4">Delivery</h2>
          <div className="flex gap-2">
            <button
              className={`border p-2 w-1/2 rounded-md font-semibold ${
                deliveryOption === "ship" ? "bg-blue-100" : ""
              }`}
              onClick={() => setDeliveryOption("ship")}
            >
              Ship
            </button>
            <button
              className={`border p-2 w-1/2 rounded-md font-semibold ${
                deliveryOption === "pickup" ? "bg-blue-100" : ""
              }`}
              onClick={() => setDeliveryOption("pickup")}
            >
              Pickup in store
            </button>
          </div>

          {deliveryOption === "pickup" && (
            <div className="bg-red-100 text-red-600 p-2 rounded-md">
              <strong>⚠️ Your item isn&#39;t available for store pickup.</strong>
              <p className="text-sm">
                <a href="#" className="text-blue-500 underline">
                  Ship to address
                </a>{" "}
                instead.
              </p>
            </div>
          )}

          <select className="w-full border p-2 rounded-md text-gray-600">
            <option>United States</option>
            <option>Pakistan</option>
          </select>

          <div className="grid grid-cols-2 gap-2">
            <input type="text" placeholder="First name" className="border p-2 rounded-md" />
            <input type="text" placeholder="Last name" className="border p-2 rounded-md" />
          </div>
          <input type="text" placeholder="Address" className="w-full border p-2 rounded-md" />
          <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full border p-2 rounded-md" />

          <div className="grid grid-cols-3 gap-2">
            <input type="text" placeholder="City" className="border p-2 rounded-md" />
            <select className="border p-2 rounded-md">
              <option>State</option>
              <option>Alabama</option>
            </select>
            <input type="text" placeholder="ZIP code" className="border p-2 rounded-md" />
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="saveInfo" />
            <label htmlFor="saveInfo" className="text-gray-600">Save this information for next time</label>
          </div>

          <h2 className="text-2xl font-semibold mt-4">Payment</h2>
          <p className="text-gray-500">All transactions are secure and encrypted.</p>
          <div className="bg-gray-200 p-4 text-center rounded-md">
            This store cant accept payments right now.
          </div>
          <button className="w-full bg-gray-300 text-gray-600 font-semibold py-2 mt-2 rounded-md" disabled>
            Pay now
          </button>
        </div>

        {/* Right Section - Order Summary (Fixed Position) */}
        <div className="bg-gray-100 p-6 rounded-lg sticky top-4 h-fit">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4 mb-4 border-b pb-2">
              <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md object-cover" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-gray-500 text-sm">
                  {item.color} / {item.size}
                </p>
              </div>
              <p className="ml-auto font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <input
            type="text"
            placeholder="Discount code"
            className="w-full border p-2 rounded-md mb-2"
          />
          <button className="w-full bg-gray-300 text-gray-600 font-semibold py-2 rounded-md mb-4" disabled>
            Apply
          </button>
          <div className="text-gray-700">
            <p className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between mb-4">
              <span>Shipping</span>
              <span className="text-gray-500">Enter shipping address</span>
            </p>
            <div className="flex justify-between text-xl font-semibold">
              <span>Total</span>
              <span className="text-black">USD ${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCheckout;
