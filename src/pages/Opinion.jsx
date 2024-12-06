// src/pages/Opinion.jsx
import React from "react";
import Section from "../components/Section";
import opinionData from "../data/opinionData";

const Opinion = () => {
  return (
    <div className="p-6">
      <Section sectionTitle="Opinion" items={opinionData} />
    </div>
  );
};

export default Opinion;
