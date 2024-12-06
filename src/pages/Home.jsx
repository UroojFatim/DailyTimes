// src/pages/Home.jsx
import React from "react";
import Section from "../components/Section";
import homeData from "../data/homeData";

const Home = () => {
  return (
    <div className="p-6">
      <Section sectionTitle="Home" items={homeData} />
    </div>
  );
};

export default Home;
