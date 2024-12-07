// src/pages/Featured.jsx
import React from "react";
import Card from "../components/Card";
import featuredData from "../data/featuredData";

const Featured = () => {
  return (
    <div className="p-6">
      {/* Dynamic Category Name */}
      <h1 className="text-2xl font-bold mb-6 text-center">Category: Featured</h1>
      <div>
        {featuredData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            date={item.date}
            description={item.content}
            image={item.image}
            category="Featured" // Pass the category dynamically
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
