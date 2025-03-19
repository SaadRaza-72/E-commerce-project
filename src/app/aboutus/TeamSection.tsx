"use client";

import React from "react";
import Image from "next/image";

const teamMembers = [
  { name: "Lisa John", role: "Fashion Design", image: "/img-1.jpg" },
  { name: "Jane Doe", role: "Director", image: "/img-2.jpg" },
  { name: "Cartherin Forres", role: "Marketing Director", image: "/img-4.jpg" },
];

const TeamSection = () => {
  return (
    <div className="team-section">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <Image 
            src={member.image} 
            alt={member.name} 
            width={300} 
            height={400} 
            className="team-image"
          />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}

      {/* Styling */}
      <style jsx>{`
        .team-section {
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: 20px;
          flex-wrap: wrap;
        }

        .team-member {
          text-align: center;
          width: 300px;
        }

        .team-image {
          width: 100%;
          height: auto;
          border-radius: 5px;
        }

        .team-member h3 {
          font-size: 20px;
          font-weight: bold;
          margin-top: 10px;
          color: #333;
        }

        .team-member p {
          color: #777;
          font-size: 16px;
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .team-section {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamSection;
