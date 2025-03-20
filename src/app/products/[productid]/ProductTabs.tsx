"use client";
import { useState } from "react";

// Define the type for tab content props
interface TabContentProps {
  description: string;
  customTab: string;
  reviews: { user: string; rating: number; comment: string; date: string }[];
}

const ProductTabs = ({ description, customTab, reviews }: TabContentProps) => {
  const [activeTab, setActiveTab] = useState<"description" | "customTab" | "reviews">("description");

  // Ensure TypeScript knows the structure of tab content
  const tabContent: { [key: string]: string } = {
    description,
    customTab,
    reviews: reviews
      .map(
        (review) => `⭐️ ${review.user} (${review.rating}/5): ${review.comment} — ${review.date}`
      )
      .join("\n")
  };

  return (
    <div className="tabs-container max-w-7xl mx-auto">
      {/* Tabs Header */}
      <div className="tabs-header">
        {["description", "customTab", "reviews"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab as "description" | "customTab" | "reviews")}
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
