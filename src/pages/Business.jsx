import React from 'react'
import featuredData from "../data/featuredData";
import Card from '../components/Card';

const Business = () => {
  return (
    <div className="p-6">
      {/* Dynamic Category Name */}
      <h1 className="text-2xl font-bold mb-6 text-center">Category: Business</h1>
      <div>
        {featuredData.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            date={item.date}
            description={item.content}
            image={item.image}
            category="business" // Pass the category dynamically
          />
        ))}
      </div>
    </div>
  )
}

export default Business