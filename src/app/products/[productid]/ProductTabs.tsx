"use client";
import { useState } from "react";

const tabs = ["Description", "Reviews", "Shipping"];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="mt-6">
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 ${activeTab === tab ? "border-blue-500 text-blue-500" : "text-gray-500"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {activeTab === "Description" && <p>This is a great product with amazing features.</p>}
        {activeTab === "Reviews" && <p>No reviews yet. Be the first one!</p>}
        {activeTab === "Shipping" && <p>Free shipping worldwide!</p>}
      </div>
    </div>
  );
}
