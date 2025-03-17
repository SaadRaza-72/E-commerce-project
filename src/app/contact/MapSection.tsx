"use client";

import React from "react";

const MapSection = () => {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.953320516971!2d144.80199407698026!3d-37.74425447193551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6785fb5f065e1%3A0xb9166a6d93a92e5d!2s184%20Main%20Rd%20E%2C%20St%20Albans%20VIC%203021%2C%20Australia!5e0!3m2!1sen!2s!4v1710674000000"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      {/* Styling */}
      <style jsx>{`
        .map-container {
          width: 100%;
          max-width: 100%;
          overflow: hidden;
        }

        iframe {
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
};

export default MapSection;
