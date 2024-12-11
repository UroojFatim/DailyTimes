import React from "react";
import Logo from "../assets/dailytimes-logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaWhatsapp, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-sm">
      {/* Main Footer Content */}
      <div className="py-10 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Our Company */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Our Company</h3>
          <p>
            Daily Times, is a Newspaper company Registered under DED with Reg
            No: 1178444, and regulated by Media regulator of Dubai.
          </p>
          <address>
            <p>Technic Building 402 Salah Aldin,</p>
            <p>Deira United Arab Emirates</p>
          </address>
          <p>
            <strong>Phone:</strong> +971 (04) 410 7908
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:media@dailytimes.ae" className="text-blue-500">
              media@dailytimes.ae
            </a>
          </p>
          <p>
            <strong>Support:</strong> media@dailytimes.ae
          </p>
        </div>

        {/* About Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Links</h3>
          <ul className="space-y-4">
            {[
              "About Us",
              "Contact",
              "Advertise With Us",
              "Media Relations",
              "Corporate Information",
              "Compliance",
              "Apps & Products",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Useful Links</h3>
          <ul className="space-y-4">
            {[
              "Privacy Policy",
              "Terms of Use",
              "Closed Captioning Policy",
              "Accessibility Statement",
              "Personal Information",
              "Data Tracking",
              "Register New Account",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help Center */}
        <div>
          <h3 className="font-bold text-lg mb-4">HELP CENTER</h3>
          <ul className="space-y-4">
            {[
              "Instagram",
              "Twitter",
              "Facebook",
              "YouTube",
              "WhatsApp",
              "Linkedin",
              "TikTok",
              "Contact Us",
            ].map((link) => (
              <li key={link}>
                <a href="#" className="hover:underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 py-4 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Daily Times Logo" className="w-24" />
            <p className="text-xl font-bold">Daily Times</p>
          </div>

          {/* Copyright Text */}
          <p className="text-center md:text-left">© 2023 Daily Times</p>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-lg">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-600 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-600 cursor-pointer" />
            <FaTiktok className="hover:text-black cursor-pointer" />
            <FaLinkedin className="hover:text-blue-800 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
