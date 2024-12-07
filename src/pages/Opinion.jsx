// src/pages/Opinion.jsx
import React from "react";
import opinionData from "../data/opinionData";
import Card from "../components/Card";

const Opinion = () => {
  return (
    <div className="p-6">
      {/* Dynamic Category Name */}
      <h1 className="text-2xl font-bold mb-6 text-center">Category: Opinion</h1>
      <div>
        {opinionData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            date={item.date}
            description={item.content}
            image={item.image}
            category="Opinion" // Pass the category dynamically
          />
        ))}
      </div>
    </div>
  );
};

export default Opinion;
