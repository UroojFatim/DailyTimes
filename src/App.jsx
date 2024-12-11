// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Featured from "./pages/Featured";
import Opinion from "./pages/Opinion";
import Layout from "./components/Layout";
import World from "./pages/World";
import Politics from "./pages/Politics";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import LifeStyle from "./pages/LifeStyle";
import Sports from "./pages/Sports";
import UAE from "./pages/UAE";

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

          {/* World Route */}
          <Route
            path="/world"
            element={
              <Layout>
                <World />
              </Layout>
            }
          />

          {/* Politics Route */}
          <Route
            path="/politics"
            element={
              <Layout>
                <Politics />
              </Layout>
            }
          />

          {/* Business Route */}
          <Route
            path="/business"
            element={
              <Layout>
                <Business />
              </Layout>
            }
          />

          {/* Entertainment Route */}
          <Route
            path="/entertainment"
            element={
              <Layout>
                <Entertainment />
              </Layout>
            }
          />

          {/* LifeStyle Route */}
          <Route
            path="/lifestyle"
            element={
              <Layout>
                <LifeStyle />
              </Layout>
            }
          />

          {/* Sports Route */}
          <Route
            path="/sports"
            element={
              <Layout>
                <Sports />
              </Layout>
            }
          />

          {/* UAE Route */}
          <Route
            path="/uae"
            element={
              <Layout>
                <UAE />
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
