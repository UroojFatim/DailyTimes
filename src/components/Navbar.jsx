import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/dailytimes-logo.png";
import TopPost from "./TopPost"; // Import the TopPost component

const Navbar = () => {
  return (
    <>
    <nav className="flex justify-between items-center px-6 py-2 border border-sky-400">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={Logo} alt="Daily Times Logo" className="w-40 mr-3" />
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6 font-bold">
        <Link to="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link to="/featured" className="hover:text-blue-600">
          Featured
        </Link>
        <Link to="/world" className="hover:text-blue-600">
          World
        </Link>
        <Link to="/politics" className="hover:text-blue-600">
          Politics
        </Link>
        <Link to="/opinion" className="hover:text-blue-600">
          Opinion
        </Link>
        <Link to="/business" className="hover:text-blue-600">
          Business
        </Link>
        <Link to="/entertainment" className="hover:text-blue-600">
          Entertainment
        </Link>
        <Link to="/lifestyle" className="hover:text-blue-600">
          Lifestyle
        </Link>
        <Link to="/sports" className="hover:text-blue-600">
          Sports
        </Link>
        <Link to="/uae" className="hover:text-blue-600">
          UAE
        </Link>
      </div>

      {/* TopPost Section */}
    </nav>
      <TopPost />
    </>
  );
};

export default Navbar;
