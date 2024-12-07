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
    <div className="flex  items-start space-y-2 p-3">
      <span className="text-sm text-gray-600">
        {currentDate}
      </span>
      {/* Top Post Label */}
      <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
        TOP POST
      </div>
      
      {/* Post Description */}
      <p className="text-xs">
        Did you know each insect is a host to ten bacterial species?
      </p>

      {/* Current Date */}
    </div>
  );
};

export default TopPost;
