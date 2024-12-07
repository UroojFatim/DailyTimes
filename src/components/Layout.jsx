// src/components/Layout.jsx
import React from 'react';
import BusinessHighlights from './BusinessHighlights';
import EditorsPick from './EditorsPick';
import BusinessHighlightsData from '../data/BusinessHighlightsData';  // Import the data

const Layout = ({ children }) => {
  const handlePostClick = (postId) => {
    // Handle the post click logic here
    console.log(`Post clicked: ${postId}`);
  };

  return (
    <div className="flex bg-gray-100 p-4 gap-3">
      {/* Left Sidebar */}
      <div className="w-[30%]">
        <BusinessHighlights posts={BusinessHighlightsData} onPostClick={handlePostClick} />
      </div>

      {/* Middle Content */}
      <div className="bg-white border border-sky-300">
        {children}
      </div>

      {/* Right Sidebar */}
      <div className="w-[30%]">
        <EditorsPick />
      </div>
    </div>
  );
};

export default Layout;
