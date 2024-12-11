import React from 'react';

const TopPost = () => {
  // Get current date in the format of 'Day, Month Date, Year'
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="hidden lg:flex justify-between items-center p-3 border-b border-gray-200">
      {/* Current Date */}
      <span className="text-sm text-gray-600">{currentDate}</span>

      {/* Top Post Section */}
      <div className="flex items-center space-x-2">
        <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          TOP POST
        </div>
        <p className="text-sm text-blue-900 font-medium">
          Did you know a jockey once won a race after he had died?
        </p>
      </div>

      {/* Social Icons and Subscribe Button */}
      <div className="flex items-center space-x-4">
        {/* Social Media Icons */}
        <div className="flex space-x-2 text-gray-600">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-whatsapp"></i>
          <i className="fab fa-tiktok"></i>
          <i className="fab fa-linkedin-in"></i>
        </div>
        {/* Subscribe Button */}
        <button className="bg-red-600 text-white text-sm font-bold px-4 py-2 rounded">
          SUBSCRIBE NEWSLETTER
        </button>
      </div>
    </div>
  );
};

export default TopPost;
