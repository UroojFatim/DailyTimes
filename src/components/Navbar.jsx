import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/dailytimes-logo.png";
import TopPost from "./TopPost"; // Import the TopPost component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center px-6 py-2 border border-sky-400">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={Logo} alt="Daily Times Logo" className="w-40 mr-3" />
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 lg:items-center font-bold`}
        >
          <Link to="/" className="block px-3 py-2 lg:py-0 hover:text-blue-600">
            Home
          </Link>
          <Link
            to="/featured"
            className="block px-3 py-2 lg:py-0 hover:text-blue-600"
          >
            Featured
          </Link>
          <Link
            to="/world"
            className="block px-3 py-2 lg:py-0 hover:text-blue-600"
          >
            World
          </Link>
          <Link
            to="/politics"
            className="block px-3 py-2 lg:py-0 hover:text-blue-600"
          >
            Politics
          </Link>
          <Link
            to="/opinion"
            className="block px-3 py-2 lg:py-0 hover:text-blue-600"
          >
            Opinion
          </Link>
          <Link
            to="/business"
            className="block px-3 py-2 lg:py-0 hover:text-blue-600"
          >
            Business
          </Link>
          <Link
            to="/entertainment"
            className="block px-3 py-2 lg:py-0 hover:text-blue-600"
          >
            Entertainment
          </Link>
          <Link
            to="/lifestyle"
            className="block px-3 py-2 lg:py-0 hover:text-blue-600"
          >
            Lifestyle
          </Link>
          <Link
            to="/sports"
            className="block px-3 py-2 lg:py-0 hover:text-blue-600"
          >
            Sports
          </Link>
          <Link
            to="/uae"
            className="block px-3 py-2 lg:py-0 hover:text-blue-600"
          >
            UAE
          </Link>
        </div>
      </nav>

      {/* TopPost Section */}
      <TopPost />
    </>
  );
};

export default Navbar;
