import React from "react";
import homeData from "../data/BusinessHighlightsData";

const PostDetails = ({ postId }) => {
  // Find the specific post using the ID
  const post = homeData.find((item) => item.id === postId);

  if (!post) {
    return (
      <div className="p-6">
        <h2 className="text-red-600 font-bold text-xl">Post not found!</h2>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="mt-4 text-gray-700">{post.content}</p>
    </div>
  );
};

export default PostDetails;
