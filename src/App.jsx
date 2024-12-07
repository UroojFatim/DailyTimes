// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Featured from "./pages/Featured";
import Opinion from "./pages/Opinion";
import Layout from "./components/Layout";

const App = () => {
  const [selectedPostId, setSelectedPostId] = useState(null); // Track the selected post ID

  const resetHome = () => {
    setSelectedPostId(null); // Reset to default view
  };

  const handlePostClick = (postId) => {
    setSelectedPostId(postId); // Set the selected post ID when a post is clicked
  };

  return (
    <Router>
      <Navbar resetHome={resetHome} />
      <div>
        <Routes>
          {/* Home Route with Dynamic Content */}
          <Route
            path="/"
            element={
                <Home
                  selectedPostId={selectedPostId}
                  onPostClick={handlePostClick}
                />
            }
          />

          {/* Featured Route */}
          <Route
            path="/featured"
            element={
              <Layout>
                <Featured />
              </Layout>
            }
          />

          {/* Opinion Route */}
          <Route
            path="/opinion"
            element={
              <Layout>
                <Opinion />
              </Layout>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
