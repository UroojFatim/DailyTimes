import React from "react";

const ArticleCard = ({ imageUrl, category, title, date, description, onClick }) => {
  return (
    <div
      className="border border-sky-300 rounded-sm overflow-hidden"
      onClick={onClick}
    >
      {/* Image Section */}
      <div className="w-full h-96 bg-gray-200">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Category Label */}
        <p className="text-red-600 text-sm uppercase mb-2">{category}</p>

        {/* Title */}
        <h2 className="text-xl font-bold  hover:underline">
          {title}
        </h2>

        {/* Date */}
        <p className="text-gray-500 text-sm mt-1">{date}</p>

        {/* Description */}
        <p className="text-gray-700 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
