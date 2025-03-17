"use client";

import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2>CONTACT</h2>

      {/* Styling */}
      <style jsx>{`
        .contact-section {
          background-image: url("/img-4.jpg");
          background-size: cover;
          background-position: center;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .contact-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6); /* Dark overlay */
          z-index: 0;
        }

        .contact-section h2 {
          color: #fff;
          font-size: 28px;
          font-weight: bold;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
