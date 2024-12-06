// src/components/Card.jsx
import React from "react";

const Card = ({ title, date, description, image }) => {
  return (
    <div className="flex items-start border-b py-4">
      {/* Image Section */}
      {image && (
        <div className="w-1/3">
          <img
            src={image}
            alt={title}
            className="w-full h-24 object-cover rounded-lg"
          />
        </div>
      )}

      {/* Content Section */}
      <div className="ml-4 flex-1">
        <p className="text-sm text-blue-500 font-semibold mb-1">FEATURED</p>
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>
        <p className="text-sm text-gray-500 mb-1">{date}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>
    </div>
  );
};

export default Card;