"use client";
import { useState } from "react";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  const tabContent = {
    description: `
      Delicate, sweet and extremely smooth are recognizable traits when looking at the Lips sofa of CAMI. 
      Single chair with comfortable seating gives you relaxing moments with good books and fragrant tea cups.

      Made of velvet velvet fabric that gives a luxurious classic look to the living room and elegant walnut wood legs, the Armchair Lips with various colors will surely make you satisfied.

      Size: 86x 84 x 86 cm  
      Warranty: 3 years wooden frame, 1 year sucking pad  
      Material: Russian oak frame, imported velvet felt  
      Color: Pink / optional
    `,
    customTab: `
      🧺 Wash at 30°C  🚫 Do not bleach  🔲 Dry flat  🌡️ Iron at low temperature  🔘 Dry clean only  ⛔ Do not tumble dry
      LT01: 70% wool, 15% polyester, 10% polyamide, 5% acrylic 900 Grms/mt
    `,
    reviews: `
      ⭐⭐⭐☆☆  3.5/5 (2 reviews)
      -------------------
      Kevin  
      ⭐⭐⭐☆☆ (2 months ago)  
      "look great"  
      - this is a review  
      👍 0  👎 1  

      fdsafdldsfsdfsfd  
      ⭐⭐⭐⭐☆ (2 years ago)  
      "fd"  
      - dsffdsfds  
      🖼️ [Attached images]  
      👍 2  👎 0  
    `,
  };

  return (
    <div className="tabs-container max-w-7xl mx-auto">
      {/* Tabs Header */}
      <div className="tabs-header">
        {["description", "customTab", "reviews"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tabs Content */}
      <div className="tabs-content">
        <p>{tabContent[activeTab]}</p>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .tabs-container {
          width: 100%;
          padding: 20px;
          background: #f9f9f9;
        }

        .tabs-header {
          display: flex;
          gap: 20px;
          justify-content: start;
        }

        .tabs-header button {
          border: none;
          background: transparent;
          color: #555;
          font-size: 18px;
          cursor: pointer;
          padding: 10px 20px;
        }

        .tabs-header button.active {
          font-weight: bold;
          color: #000;
          border-bottom: 2px solid #000;
          border-radius: 20px;
          padding: 8px 18px;
        }

        .tabs-content {
          padding: 20px 0;
          color: #555;
          font-size: 16px;
          line-height: 1.6;
          white-space: pre-wrap; /* To preserve line breaks */
        }
      `}</style>
    </div>
  );
};

export default ProductTabs;
