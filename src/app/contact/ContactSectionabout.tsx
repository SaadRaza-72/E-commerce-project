"use client";

import React from "react";

const ContactSectionabout = () => {
  return (
    <div className="contact-container">
      {/* Left Side: Form */}
      <div className="contact-form">
        <h2>DROP US A LINE</h2>
        <form>
          <input type="text" placeholder="Your Name (required)" required />
          <input type="email" placeholder="Your Email (required)" required />
          <input type="tel" placeholder="Your Phone Number" />
          <textarea placeholder="Your Message (required)" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Right Side: Contact Info */}
      <div className="contact-info">
        <h2>CONTACT INFORMATION</h2>
        <p>
          We love to hear from you on our customer service, merchandise, website
          or any topics you want to share with us. Your comments and suggestions
          will be appreciated. Please complete the form below.
        </p>
        <p>📍 184 Main Rd E, St Albans Victoria 3021, Australia</p>
        <p>📞 1800-123-222 / 1900-1570-230</p>
        <p>📧 contact@company.com</p>
        <p>⏰ Everyday 9:00–17:00</p>
      </div>

      {/* Styling */}
      <style jsx>{`
        .contact-container {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 20px;
          max-width: 1200px;
          margin: auto;
          font-family: "Arial", sans-serif;
        }

        .contact-form,
        .contact-info {
          width: 48%;
        }

        h2 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        form input,
        form textarea {
          width: 100%;
          padding: 10px;
          margin-bottom: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        textarea {
          height: 150px;
        }

        button {
          width: 100%;
          padding: 10px;
          background: #fff;
          border: 2px solid #000;
          border-radius: 30px;
          cursor: pointer;
          font-weight: bold;
        }

        button:hover {
          background: #000;
          color: #fff;
        }

        .contact-info p {
          margin: 5px 0;
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default ContactSectionabout;
