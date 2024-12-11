import React from 'react'
import worldData from "../data/worldData";
import Card from '../components/Card';

const World = () => {
  return (
    <div className="p-6">
    {/* Dynamic Category Name */}
    <h1 className="text-2xl font-bold mb-6 text-center">Category: World</h1>
    <div>
      {worldData.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          date={item.date}
          description={item.content}
          image={item.image}
          category="World" // Pass the category dynamically
        />
      ))}
    </div>
  </div>
  )
}

export default World
