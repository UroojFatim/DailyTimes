// src/components/BusinessHighlights.jsx
import React from "react";

const BusinessHighlights = ({ posts, onPostClick }) => {
  return (
    <div className="border border-sky-300 p-4 bg-white">
      <h2 className="text-xl font-bold mb-4">Highlights in Business</h2>
      <ul>
        {posts.map((post) => (
          <li
            key={post.id}
            className="mb-6 cursor-pointer text-blue-900 flex items-center gap-3"
            onClick={() => onPostClick(post.id)}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-20"
            />
            <div>
              <h3 className="text-xs font-bold">{post.title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BusinessHighlights;
