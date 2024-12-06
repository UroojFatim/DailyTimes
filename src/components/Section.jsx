// src/components/Section.jsx
import React from "react";
import Card from "./Card";

const Section = ({ sectionTitle, items }) => {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-4">{sectionTitle}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Section;
