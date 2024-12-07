import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BusinessHighlights from "../components/BusinessHighlights";
import PostDetails from "../components/PostDetails"; // Import PostDetails
import homeData from "../data/BusinessHighlightsData";
import ArticleCard from "../components/ArticleCard";
import EditorsPick from "../components/EditorsPick";

const Home = () => {
  const handleCardClick = () => {
    alert("Card clicked! Navigate to the article's detail page.");
  };

  const navigate = useNavigate();
  const [selectedPostId, setSelectedPostId] = useState(null); // Track selected post ID

  const handlePostClick = (postId) => {
    setSelectedPostId(postId); // Set the selected post ID
  };

  return (
    <div className="flex bg-gray-100 p-6">
      {/* Left Section: Business Highlights */}
      <BusinessHighlights posts={homeData} onPostClick={handlePostClick} />

      {/* Middle Section: Dynamic Content */}
      <div className="flex-grow px-3 border-l border-r border-gray-300">
        {selectedPostId ? (
          // Render PostDetails component when a post is selected
          <PostDetails postId={selectedPostId} />
        ) : (
          // Default message when no post is selected
          <div>
            <ArticleCard
              imageUrl="https://api.dailytimes.ae/wp-content/uploads/2024/12/ShkMoBio-3D-1733495751088_1939c6601c5_medium-1.jpg" // Use your image URL here
              category="UAE"
              title="To Be the First: Sheikh Mohammed bin Rashid’s biography released"
              date="December 07, 2024"
              description="Biography written by British historian Graeme Wilson features never-before-heard stories. To Be the First, Sheikh Mohammed bin Rashid’s biography launched…"
              onClick={handleCardClick}
            />
          </div>
        )}
      </div>

      {/* Right Section: Additional Content */}
      <div className="w-1/3">
      <EditorsPick/>
      </div>
    </div>
  );
};

export default Home;
